


//auto team building, lets you build teams based on weights
// by gwenillia
//changes made by duck are marked with PR-EDIT






function openAutoTeam(){
    document.getElementById("tooltipTop").style.display = "none"
    document.getElementById("tooltipTitle").innerHTML = "Team Auto-Build"

    const currentTeam = saved.previewTeams[saved.currentPreviewTeam]
    let itemCheckboxesHTML = ''
    for (let i = 1; i <= 6; i++) {
        const slotKey = `slot${i}`

        //PR-EDIT
        const itemName = currentTeam[slotKey].item || 'No item'
        if (itemName == "No item") continue
        itemCheckboxesHTML += `
              <label style="display:flex; align-items:center; gap:.5rem; font-size:0.9rem;">
                <input id="settings-auto-team-lock-item-${i}" type="checkbox" />
                Lock ${format(itemName)} (Slot ${i})
              </label>`
    }

    document.getElementById("tooltipMid").innerHTML = `Select your preference for the team (Your current team will be replaced by it)`
    document.getElementById("tooltipBottom").innerHTML = `
    <span id="prevent-tooltip-exit"></span>
        <div style="display:flex; flex-direction:column; gap:.35rem;">

              <span style="opacity:.8;">
                Left = Defensive, Right = Offensive
              </span>

              <input
                id="settings-auto-team-bias"
                type="range"
                min="0"
                max="100"
                step="5"
                value="50"
              />

              ${itemCheckboxesHTML}
    </div>

    <div onClick = '
        setAutoTeamBiasFromPercent(document.getElementById("settings-auto-team-bias").value);
        autoBuildTeam()
        closeTooltip()


        ' style="cursor:pointer; font-size:1.5rem; width:100%;" class="auto-build-confirm" id="prevent-tooltip-exit">Auto-Build
    </div>
    
    ` 

    setAutoTeamBiasFromPercent(50)

    openTooltip()
}
//-------------------------------------------




function clamp01(x){ return Math.max(0, Math.min(1, x)) }

function setAutoTeamBiasFromPercent(pct){
  const off = clamp01(pct / 100);
  const def = clamp01(1 - off);
  window.autoTeamWeights.offense = off;
  window.autoTeamWeights.defense = def;

  const label = document.getElementById("settings-auto-team-label");
  if (label) label.textContent = `Offense ${Math.round(off*100)}% / Defense ${Math.round(def*100)}%`;
}

let autoTeamWeights = { offense: 0.6, defense: 0.4 } // scoring weights, bias slightly toward offense
window.autoTeamWeights = autoTeamWeights;


function normalizeTypes(types) {
  if (!types) return []



  // already an array of strings
  if (Array.isArray(types)) {
    return types
      .map(t => (typeof t === "string" ? t : (t?.id || t?.type || t?.name)))
      .filter(Boolean)
  }

  // common objects: { type: "fire" } or { id: "fire" } etc.
  if (typeof types === "object") {
    const t = types.id || types.type || types.name
    return t ? [t] : []
  }


  // string
  return [types]
}

function enemyId(x) {
  if (!x) return null
  if (typeof x === "string") return x
  return x.id || x.pkmn || x.name || null
}

/**
  * Build the list of unique enemy creatures for a given area / vs trainer.
  * @param {object} area Area or trainer data
  * @returns {array} Array of unique enemy pokemon objects
  */
function buildEnemyPool(area) {
  if (!area) return []
  const pool = []

  if (area.team) {
    for (const key in area.team) {
      if (!key.startsWith("slot") || key.endsWith("Moves")) continue
      if (area.team[key]) pool.push(area.team[key])
    }
  }

  if (pool.length === 0 && area.spawns) {
    for (const tier in area.spawns) {
      if (!Array.isArray(area.spawns[tier])) continue
      pool.push(...area.spawns[tier])
    }
  }

  const unique = {}
  for (const e of pool) {
    const id = enemyId(e)
    if (!id) continue
    unique[id] = pkmn[id] || e
  }


  //--------PR-EDIT----------
    if (area.id == "frontierSpiralingTower") {

      //dirty hack, uses pokemon with the same sdef and def to make an average
    const map = {
    normal: "silvally",
    fire: "scorbunny",
    grass: "gossifleur",
    electric: "boltund",
    ice: "beartic",
    bug: "karrablast",
    fighting: "mienfoo",
    steel: "registeel",
    dark: "absol",
    ground: "trapinch",
    fairy: "togepi",
    ghost: "duskull",
    psychic: "chingling",
    flying: "chingling",
    water: "wailord",
    poison: "trubbish",
    rock: "rockruff",
    dragon: "druddigon",
    }

    const id = map[saved.currentSpiralingType]
    if (id) unique[id] = pkmn[id]
  }
  //-------------------------

  return Object.values(unique)
}

const allowedDivisionsByRotation = {
  1: ["C", "D"],
  2: ["B", "C", "D"],
  3: ["A", "B", "C", "D"]
}

/**
  * Check if a pokemon is allowed in the current area (for frontier divisions mostly)
  * @param {object} poke Pokemon object
  * @param {object} area Area object
  * @returns {boolean} True if allowed, false otherwise
  */
function pokemonAllowedInArea(poke, area) {
  if (!poke?.caught) return false
  if (!area || area.type !== "frontier") return true

  const allowed = allowedDivisionsByRotation[rotationFrontierCurrent]
  return allowed.includes(returnPkmnDivision(poke))
}

function buildStatBlock(poke) {
  const ivs = poke?.ivs || {}
  const bst = poke?.bst || {}
  const statValue = (stat, iv) => (stat || 0) * (1 + (iv || 0) * 0.1)

  const hp = statValue(bst.hp, ivs.hp)
  const atk = statValue(bst.atk, ivs.atk)
  const def = statValue(bst.def, ivs.def)
  const satk = statValue(bst.satk, ivs.satk)
  const sdef = statValue(bst.sdef, ivs.sdef)
  const spe = statValue(bst.spe, ivs.spe)

  return { hp, atk, def, satk, sdef, spe, total: hp + atk + def + satk + sdef + spe }
}

/**
  * Score a candidate pokemon against a single enemy pokemon
  * @param {object} candidate Candidate pokemon object with ref and stats
  * @param {object} enemy Enemy pokemon object
  * @returns {number} Score value
  */
function scoreCandidateAgainstEnemy(candidate, enemy) {
  const enemyTypes = normalizeTypes(enemy?.type)
  const candidateTypes = normalizeTypes(candidate.ref?.type)

  const enemyAtk = enemy?.bst?.atk || 0
  const enemySatk = enemy?.bst?.satk || 0
  const enemyDef = enemy?.bst?.def || 0
  const enemySdef = enemy?.bst?.sdef || 0

  const enemyIsPhysicalAttacker = enemyAtk >= enemySatk

  const enemyIsPhysicallyBulky = enemyDef >= enemySdef

  const attackUsed = enemyIsPhysicallyBulky ? candidate.stats.satk : candidate.stats.atk
  const offensiveMultiplier = candidateTypes.length
    ? Math.max(0, ...candidateTypes.map(t => typeEffectiveness(t, enemyTypes)))
    : 1
  const scoreOff = attackUsed * offensiveMultiplier

  const bulk = candidate.stats.hp + (enemyIsPhysicalAttacker ? candidate.stats.def : candidate.stats.sdef)
  const incomingMultipliers = enemyTypes.length
    ? enemyTypes.map(t => typeEffectiveness(t, candidateTypes))
    : [1]
  const worstIncoming = Math.max(...incomingMultipliers)
  const scoreDef = worstIncoming === 0 ? bulk * 10 : bulk / worstIncoming

  return (autoTeamWeights.offense * scoreOff) + (autoTeamWeights.defense * scoreDef)
}

/**
  * Compute the average score of a candidate pokemon against a list of enemies
  * @param {object} candidate Candidate pokemon object with ref and stats
  * @param {array} enemies Array of enemy pokemon objects
  * @returns {number} Average score value
  */
function averageCandidateScore(candidate, enemies) {
  if (!enemies.length) return candidate.stats.total
  let totalScore = 0
  for (const enemy of enemies) totalScore += scoreCandidateAgainstEnemy(candidate, enemy)
  return totalScore / enemies.length
}

/**
  * Build a team of 6 pokemon using a greedy algorithm
  * @param {array} enemies Array of enemy pokemon objects
  * @param {object} area Area object
  * @returns {array} Array of selected pokemon IDs
  */
function buildGreedyTeam(enemies, area) {
  const candidates = []
  for (const key in pkmn) {
    const poke = pkmn[key]
    if (!pokemonAllowedInArea(poke, area)) continue
    candidates.push({ id: key, ref: poke, stats: buildStatBlock(poke) })
  }

  const available = [...candidates]
  const chosen = []
  const usedTypes = new Set()

  while (chosen.length < 6 && available.length > 0) {
    let bestIndex = 0
    let bestScore = -Infinity

    for (let i = 0; i < available.length; i++) {
      const candidate = available[i]
      const baseScore = averageCandidateScore(candidate, enemies)
      const overlap = normalizeTypes(candidate.ref?.type).filter(t => usedTypes.has(t)).length
      const diversityPenalty = Math.max(0.7, 1 - (overlap * 0.15))
      const adjustedScore = baseScore * diversityPenalty

      if (adjustedScore > bestScore) { bestScore = adjustedScore; bestIndex = i }
    }

    const picked = available.splice(bestIndex, 1)[0]
    chosen.push(picked.id)
    for (const t of normalizeTypes(picked.ref?.type)) usedTypes.add(t)
  }

  return chosen
}

/**
  * Automatically build and set a preview team for the current area
  * Uses a greedy algorithm to select pokemon from the enemy pool
  * Updates the current preview team in saved data
  * @returns {void}
  */
function autoBuildTeam() {
  const area = saved.currentAreaBuffer ? areas[saved.currentAreaBuffer] : (saved.currentArea ? areas[saved.currentArea] : undefined)
  const enemies = buildEnemyPool(area)
  const optimizedTeam = buildGreedyTeam(enemies, area)
  const currentTeam = saved.previewTeams[saved.currentPreviewTeam]

  for (let i = 1; i <= 6; i++) {
    const slotKey = `slot${i}`
    const newPkmn = optimizedTeam[i - 1]
    const lockThisItem = document.getElementById(`settings-auto-team-lock-item-${i}`)?.checked === true

    if (newPkmn) {
      currentTeam[slotKey].pkmn = newPkmn
      if (!lockThisItem) currentTeam[slotKey].item = undefined
    } else {
      currentTeam[slotKey].pkmn = undefined
      if (!lockThisItem) currentTeam[slotKey].item = undefined
    }
  }

  updatePreviewTeam()
}