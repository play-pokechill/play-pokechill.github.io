
saved.previewTeams = {}
//--Hardcoded teams. Painful, i feel you
saved.previewTeams.preview1 = {}
saved.previewTeams.preview2 = {}
saved.previewTeams.preview3 = {}
saved.previewTeams.preview4 = {}
saved.previewTeams.preview5 = {}
saved.previewTeams.preview6 = {}
saved.previewTeams.preview7 = {}
saved.previewTeams.preview8 = {}
saved.previewTeams.preview9 = {}
saved.previewTeams.preview10 = {}
saved.previewTeams.preview11 = {}
saved.previewTeams.preview12 = {}
saved.previewTeams.preview13 = {}
saved.previewTeams.preview14 = {}
saved.previewTeams.preview15 = {}
saved.previewTeams.preview16 = {}
saved.previewTeams.preview17 = {}
saved.previewTeams.preview18 = {}
saved.previewTeams.preview19 = {}
saved.previewTeams.preview20 = {}
saved.previewTeams.preview21 = {}
saved.previewTeams.preview22 = {}
saved.previewTeams.preview23 = {}
saved.previewTeams.preview24 = {}
saved.previewTeams.preview25 = {}
saved.previewTeams.preview26 = {}
saved.previewTeams.preview27 = {}
saved.previewTeams.preview28 = {}
saved.previewTeams.preview29 = {}
saved.previewTeams.preview30 = {}

for (const i in saved.previewTeams) {
  saved.previewTeams[i].slot1 = {}
  saved.previewTeams[i].slot2 = {}
  saved.previewTeams[i].slot3 = {}
  saved.previewTeams[i].slot4 = {}
  saved.previewTeams[i].slot5 = {}
  saved.previewTeams[i].slot6 = {}

  saved.previewTeams[i].slot1.item = undefined
  saved.previewTeams[i].slot2.item = undefined
  saved.previewTeams[i].slot3.item = undefined
  saved.previewTeams[i].slot4.item = undefined
  saved.previewTeams[i].slot5.item = undefined
  saved.previewTeams[i].slot6.item = undefined

  saved.previewTeams[i].slot1.pkmn = undefined
  saved.previewTeams[i].slot2.pkmn = undefined
  saved.previewTeams[i].slot3.pkmn = undefined
  saved.previewTeams[i].slot4.pkmn = undefined
  saved.previewTeams[i].slot5.pkmn = undefined
  saved.previewTeams[i].slot6.pkmn = undefined
}

//--Manages team screen
saved.currentPreviewTeam = "preview1"

document.getElementById("team-slot-selector").addEventListener("change", e => {
  saved.currentPreviewTeam = document.getElementById("team-slot-selector").value
  updatePreviewTeam()
});

let autoTeamWeights = { offense: 0.6, defense: 0.4 } // scoring weights, bias slightly toward offense
window.autoTeamWeights = autoTeamWeights;

function updatePreviewTeam() {

  const currentTeam = saved.previewTeams[saved.currentPreviewTeam]

  if (saved.tutorial && saved.tutorialStep === "travel") { saved.tutorialStep = "moves"; openTutorial() }
  saved.firstTimePlaying = false

  document.getElementById("team-preview").innerHTML = ""
  let slotNumber = 0

  for (const i in currentTeam) {

    const div = document.createElement("div")
    div.className = `explore-team-member`
    div.id = `explore-${i}-member`
    //change team member by clicking
    div.addEventListener("click", e => {
      document.getElementById(`pokedex-menu`).style.display = "flex"
      document.getElementById(`pokedex-menu`).style.zIndex = "200"
      document.getElementById(`pokedex-menu`).scrollTop = 0
      dexTeamSelect = i
      document.getElementById("pokedex-filters-title").style.display = "flex"
      document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to add to the team`
      document.getElementById(`team-menu`).style.display = "none"
      setTimeout(() => {
        updatePokedex()
      }, 1);

    })

    //if the pokemon slot aint empty
    if (currentTeam[i].pkmn !== undefined) {
      slotNumber++

      let itemDiv = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity="0.2"/><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"/></g></svg>`
      if (currentTeam[i].item !== undefined) itemDiv = `<img src="img/items/${currentTeam[i].item}.png">`

      let nameTag = ""
      if (areas[saved.currentAreaBuffer]?.type == "frontier" && rotationFrontierCurrent === 1 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "C" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "D")) nameTag += ` ⛔`
      if (areas[saved.currentAreaBuffer]?.type == "frontier" && rotationFrontierCurrent === 2 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "B" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "C" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "D")) nameTag += ` ⛔`
      if (areas[saved.currentAreaBuffer]?.type == "frontier" && rotationFrontierCurrent === 3 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "A" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "B" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "C" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "D")) nameTag += ` ⛔`

      let pkmnName = `${format(currentTeam[i].pkmn)} ${nameTag} <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${pkmn[currentTeam[i].pkmn].level}</span>`
      if (pkmn[currentTeam[i].pkmn].shiny) pkmnName = `${format(currentTeam[i].pkmn)} ${nameTag} <span style="color:#FF4671;">✦</span> <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${pkmn[currentTeam[i].pkmn].level}</span>`

      let pkmnSprite = `<img class="sprite-trim" src="img/pkmn/sprite/${currentTeam[i].pkmn}.png" id="explore-team-member-${i}-sprite">`
      if (pkmn[currentTeam[i].pkmn].shiny) pkmnSprite = `<img class="sprite-trim" src="img/pkmn/shiny/${currentTeam[i].pkmn}.png" id="explore-team-member-${i}-sprite">`
      if (pkmn[currentTeam[i].pkmn].shiny && pkmn[currentTeam[i].pkmn].shinyDisabled == true) pkmnSprite = `<img class="sprite-trim" src="img/pkmn/sprite/${currentTeam[i].pkmn}.png" id="explore-team-member-${i}-sprite">`

      div.innerHTML = `
        <div class="team-member-slotnumber">#0${slotNumber}</div>
        <div class="team-held-item" id="team-${i}-held-item" data-item="${currentTeam[i].item}">${itemDiv}</div>
        <div class="explore-sprite" id="explore-team-member-${i}-spriteData">
        ${pkmnSprite}
        </div>
        <div class="explore-header-infobox">
        <div class="explore-header-hpbox">
        <span style="color: white;">${pkmnName}</span>
        </div>
        <div class="explore-header-moves" id="explore-team-member-${i}-moves">
        </div>
        </div>
    `
      document.getElementById("team-preview").appendChild(div)
      document.getElementById(`explore-team-member-${i}-spriteData`).dataset.pkmnEditor = currentTeam[i].pkmn

      //change team item by clicking
      document.getElementById(`team-${i}-held-item`).addEventListener("click", e => {
        document.getElementById("item-menu-cancel").style.display = "inline"
        document.getElementById("item-menu-remove").style.display = "inline"
        document.getElementById(`item-menu`).style.display = "flex"
        setTimeout(() => { //due to poor implementation, the select pkmn menu opens too. oops!
          document.getElementById(`pokedex-menu`).style.display = "none"
        }, 1);
        document.getElementById(`item-menu`).style.zIndex = "900"
        dexTeamSelect = i
        updateItemBag()
        document.getElementById(`team-menu`).style.display = "none"
      })

      //create moves in the team slots
      for (const e in pkmn[currentTeam[i].pkmn].moves) {

        let moveId = pkmn[currentTeam[i].pkmn].moves[e]
        if (moveId == undefined) { continue }


        let signatureIcon = ""
        if (move[moveId].moveset == undefined) signatureIcon = `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>`


        const divMove = document.createElement("div")
        divMove.className = "pkmn-movebox"
        divMove.style.borderColor = returnTypeColor(move[moveId].type)
        divMove.id = `pkmn-movebox-${e}-team-${i}`
        divMove.innerHTML =
          `<div id = "pkmn-movebox-${e}-team-${i}-bar"
        class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[moveId].type)} "></div><span>`
          + format(moveId) + signatureIcon + `</span><img style="background: ${returnTypeColor(move[moveId].type)} " src="img/icons/${move[moveId].type}.svg">
    `
        divMove.dataset.move = moveId
        document.getElementById(`explore-team-member-${i}-moves`).appendChild(divMove)
      }

    }

    //create empty pokemon slot
    if (currentTeam[i].pkmn == undefined && i !== "name") {
      div.style.opacity = 0.6
      div.innerHTML = `
        <div class="team-held-item" id="team-${i}-held-item"></div>
        <div class="explore-sprite" id="explore-team-member-${i}-spriteData">
        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity="0.2"/><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"/></g></svg>
        </div>
        <div class="explore-header-infobox">
        <div class="explore-header-hpbox">
        <span style="color: white;">Add Pokemon</span>
        </div>
        <div class="explore-header-moves" id="explore-team-member-${i}-moves">
        </div>
        </div>
    `
      document.getElementById("team-preview").appendChild(div)
    }

  }
}

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

    if (newPkmn) {
      if (currentTeam[slotKey].pkmn !== newPkmn) currentTeam[slotKey].item = undefined
      currentTeam[slotKey].pkmn = newPkmn
    } else {
      currentTeam[slotKey].pkmn = undefined
      currentTeam[slotKey].item = undefined
    }
  }

  updatePreviewTeam()
}



function editTeamName() {
  document.getElementById("tooltipTop").style.display = "none"
  document.getElementById("tooltipBottom").style.display = "none"
  document.getElementById("tooltipTitle").innerHTML = "Edit team name"
  const select = document.getElementById("team-slot-selector");
  const text = select.options[select.selectedIndex].text;
  document.getElementById("tooltipMid").innerHTML = `
    <input id="team-name-field" type="text" maxlength="15" placeholder="${text}">
    <span id="prevent-tooltip-exit"></span>
    `

  document.getElementById("team-name-field").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      document.getElementById("team-name-field").blur()
    }
  });

  openTooltip()
}

function changeTeamNames() {
  const select = document.getElementById("team-slot-selector");
  for (const option of select.options) {
    for (const team in saved.previewTeams) {
      if (option.value !== team) continue
      if (saved.previewTeams[team].name !== undefined) option.text = saved.previewTeams[team].name
    }
  }
}


let dexTeamSelect = undefined

//--Swaps the preset team into the real team, executed when entering battle 
function injectPreviewTeam() {

  const currentTeam = saved.previewTeams[saved.currentPreviewTeam]

  let frontierError = false
  for (const i in currentTeam) {
    if (currentTeam[i].pkmn == undefined) continue
    if (areas[saved.currentAreaBuffer]?.type == "frontier" && rotationFrontierCurrent === 1 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "C" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "D")) frontierError = true
    if (areas[saved.currentAreaBuffer]?.type == "frontier" && rotationFrontierCurrent === 2 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "B" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "C" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "D")) frontierError = true
    if (areas[saved.currentAreaBuffer]?.type == "frontier" && rotationFrontierCurrent === 3 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "A" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "B" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "C" && returnPkmnDivision(pkmn[currentTeam[i].pkmn]) != "D")) frontierError = true
  }

  if (frontierError) {
    document.getElementById("tooltipTop").style.display = "none"
    document.getElementById("tooltipBottom").style.display = "none"
    document.getElementById("tooltipTitle").innerHTML = `Banned Pokemon`
    document.getElementById("tooltipMid").innerHTML = `One or more Pokemon in the current team do not met the division restrictions of the current league`
    openTooltip()
    return
  }

  saved.currentArea = saved.currentAreaBuffer

  if (saved.tutorial && saved.tutorialStep === "moves") { saved.tutorialStep = "battle"; openTutorial(); item.mysteryEgg.got++; item.mysteryEgg.newItem++ }

  if (pkmn[currentTeam.slot1.pkmn] === undefined) {
    document.getElementById("tooltipTop").style.display = "none"
    document.getElementById("tooltipMid").style.display = "none"
    document.getElementById("tooltipBottom").innerHTML = "First team slot must not be empty!"
    openTooltip()
    return
  }

  for (const slot in team) {
    team[slot].pkmn = pkmn[currentTeam[slot].pkmn]
    team[slot].item = currentTeam[slot].item
  }



  voidAnimation(`explore-transition`, `exploreTransition 1s 1`)
  document.getElementById(`explore-transition`).style.display = `flex`



  setTimeout(() => {
    document.getElementById(`team-menu`).style.display = `none`;
    document.getElementById(`vs-menu`).style.display = `none`;
    document.getElementById("content-explore").style.display = "flex"
    document.getElementById(`team-menu`).style.zIndex = `30`
    document.getElementById(`preview-team-exit`).style.display = "none"
    document.getElementById("menu-button-parent").style.display = "flex"
    document.getElementById("team-preview").innerHTML = ""
    initialiseArea()
  }, 500);

}




function setPkmnTeamHp() {

  saved.currentSpiralFloor = 1


  for (const i in team) {

    if (team[i].pkmn === undefined) continue

    let hpMultiplier = 10
    if (areas[saved.currentArea].trainer || saved.currentArea == areas.frontierSpiralingTower.id) hpMultiplier = 4

    pkmn[team[i].pkmn.id].playerHp =
      (100 + ((pkmn[team[i].pkmn.id].bst.hp * 30) * Math.pow(1.1, pkmn[team[i].pkmn.id].ivs.hp))
        * (1 + (pkmn[team[i].pkmn.id].level * 0.2))
      ) * hpMultiplier;


    pkmn[team[i].pkmn.id].playerHpMax = pkmn[team[i].pkmn.id].playerHp


  }


  for (const slot in team) {//purge buffs

    if (team[slot].pkmn === undefined) continue

    for (const i in team[slot].buffs) {

      if (team[slot].buffs[i] > 0) team[slot].buffs[i] = 0
    }
  };


}



function setPkmnTeam() {

  if (saved.currentArea == undefined) return



  cancelCurrentPlayerAttack = true
  document.getElementById(`explore-header`).style.backgroundImage = `url(img/bg/${areas[saved.currentArea].background}.png)`
  document.getElementById(`explore-team`).innerHTML = ""

  for (const i in team) {

    if (team[i].pkmn === undefined) continue

    const div = document.createElement("div")
    div.className = `explore-team-member`
    if (i != exploreActiveMember) div.classList.add('member-inactive')


    div.addEventListener("click", e => { //change team member

      if (team[exploreActiveMember].item == item.choiceSpecs.id) return
      if (team[exploreActiveMember].item == item.choiceBand.id) return
      if (testAbility(`active`, ability.gorillaTactics.id)) return

      if (!div.classList.contains("member-inactive")) return;
      if (pkmn[team[i].pkmn.id].playerHp <= 0) return;

      //reset move buildup, ie rollout
      for (const learntMoveID of pkmn[team[i].pkmn.id].movepool) if (move[learntMoveID]?.buildup !== undefined) move[learntMoveID].buildup = 0

      if (testAbility(`active`, ability.naturalCure.id)) { team[exploreActiveMember].buffs.confused = 0; team[exploreActiveMember].buffs.burn = 0; team[exploreActiveMember].buffs.freeze = 0; team[exploreActiveMember].buffs.paralysis = 0; team[exploreActiveMember].buffs.poisoned = 0; team[exploreActiveMember].buffs.sleep = 0; updateTeamBuffs() }

      barProgressPlayer = 0
      barPlayer.style.width = 0
      exploreCombatPlayerTurn = 1

      exploreActiveMember = i

      //exploreCombatPlayer()

      const members = document.querySelectorAll('.explore-team-member');

      // Agrega la clase inactive a todos
      members.forEach(member => member.classList.add('member-inactive'));

      // Quita la clase inactive al que se hizo click
      div.classList.remove('member-inactive');

    })

    pkmn[team[i].pkmn.id].currentTurn = 1;






    div.id = `explore-${i}-member`


    let pkmnName = `${format(team[i].pkmn.id)} <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${team[i].pkmn.level}</span>`
    if (pkmn[team[i].pkmn.id].shiny) pkmnName = `${format(team[i].pkmn.id)} <span style="color:#FF4671;">✦</span> <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${team[i].pkmn.level}</span>`


    let pkmnSprite = `<img class="sprite-trim" src="img/pkmn/sprite/${team[i].pkmn.id}.png" id="explore-team-member-${i}-sprite">`
    if (pkmn[team[i].pkmn.id].shiny) pkmnSprite = `<img class="sprite-trim" src="img/pkmn/shiny/${team[i].pkmn.id}.png" id="explore-team-member-${i}-sprite">`
    if (pkmn[team[i].pkmn.id].shiny && pkmn[team[i].pkmn.id].shinyDisabled == true) pkmnSprite = `<img class="sprite-trim" src="img/pkmn/sprite/${team[i].pkmn.id}.png" id="explore-team-member-${i}-sprite">`

    div.innerHTML = `
    <div class="team-held-item" id="team-${i}-held-item"></div>
    <div class="team-buff-list" id="team-member-${i}-buff-list"></div>
    <div class="explore-sprite" id="explore-team-member-${i}-spriteData">
            ${pkmnSprite}
            </div>

            <div class="explore-header-infobox">

                <img class="explore-team-member-flair" src="img/icons/pokeball.svg">
                <div class="explore-header-hpbox">
                <span style="color: white;">${pkmnName}</span>
                <div class="explore-hp" id="explore-${i}-hp"></div>
                <div class="explore-hp" style="background:#7ed0f0ff;" id="explore-${i}-exp"></div>
                </div>

                <div class="explore-header-moves" id="explore-team-member-${i}-moves">

                </div>



            </div>
    `

    setTimeout(() => {
      document.getElementById(`explore-team-member-${i}-spriteData`).dataset.pkmnEditor = pkmn[team[i].pkmn.id].id
    }, 1);

    document.getElementById("explore-team").appendChild(div)


    for (const e in pkmn[team[i].pkmn.id].moves) {

      const moveId = pkmn[team[i].pkmn.id].moves[e]



      if (moveId == undefined) { //fix
        const divMove = document.createElement("div")
        divMove.className = "pkmn-movebox"
        divMove.style.pointerEvents = "none"
        divMove.style.display = "none"
        document.getElementById(`explore-team-member-${i}-moves`).appendChild(divMove)
        continue
      }


      let signatureIcon = ""
      if (move[moveId].moveset == undefined) signatureIcon = `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>`



      const divMove = document.createElement("div")
      divMove.className = "pkmn-movebox"
      divMove.style.borderColor = returnTypeColor(move[moveId].type)
      divMove.id = `pkmn-movebox-${e}-team-${i}`
      divMove.innerHTML =
        `<div
    id = "pkmn-movebox-${e}-team-${i}-bar"
    class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[moveId].type)} "></div><span>`
        + format(moveId) + signatureIcon +
        `</span><img style="background: ${returnTypeColor(move[moveId].type)} " src="img/icons/${move[moveId].type}.svg">`

      divMove.dataset.move = moveId

      document.getElementById(`explore-team-member-${i}-moves`).appendChild(divMove)
    }



  }


  updateTeamItems()
  updateTeamPkmn()


}


