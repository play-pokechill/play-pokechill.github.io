(function () {
  "use strict";

  const ICON_TOWER = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M14 2h4v2h-4zm-1 3h6v3h-6zm-2 4h10v2h-10zm1 3h8v4h-8zm-1 5h10v3h-10zm-1 4h12v3h-12zm-1 4h14v3h-14zm-1 4h16v4h-16z"/></svg>`;

  const ICON_PALACE = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3 4 9h24zM3 10h26v2H3zm3 3h2v12H6zm6 0h2v12h-2zm6 0h2v12h-2zm6 0h2v12h-2zM4 26h24v2H4zm-1 3h26v2H3z"/></svg>`;

  const ICON_ARENA = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M2 5c4 2 8 3 14 3s10-1 14-3v4c-4 2-8 3-14 3S6 11 2 9zm4 8h3v6h14v-6h3v17h-3V22H9v8H6zm3 6h14v-3H9z"/></svg>`;

  const ICON_DOME = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3a12 12 0 0 0-12 12v2h24v-2A12 12 0 0 0 16 3m-6 6 1-3 1 3zm5-1 1-3 1 3zm5 1 1-3 1 3zM3 18h26v3H3zm1 4h24v3H4zm-1 4h26v3H3z"/></svg>`;

  const ICON_FACTORY = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M3 13v16h10v-5l5 3v-6l5 3v-6l6 3V11zm14 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6m-2 3h4v5h-4zm1-2v-1h2v1z"/></svg>`;

  const ICON_PIKE = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3 2 29h28zm0 5 10 18H6zm-2 10 2 3 2-3-2 2zm-5 8h14v2H9z"/></svg>`;

  const ICON_PYRAMID = `<svg class="frontier-flair" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 3 3 29h26zm0 5-9 16h18zm0 3-6 11h12zm0 3-3 6h6z"/></svg>`;

  const FACILITIES = [
    {
      id: "frontierTowerSecret",
      name: "Battle Tower (Hoenn)",
      desc: "Trainer gauntlet — unlike the vanilla Tower's wild waves, this is a streak of fights against trainers. Pick your team and survive as long as you can.",
      brain: {
        id: "anabel",
        sprite: "salon_maiden_anabel",
        name: "Salon Maiden Anabel",
        teamSilver: ["alakazam", "entei", "snorlax"],
        teamGold: ["raikou", "snorlax", "latios"] },
      iconSvg: ICON_TOWER,
      background: "tower",
      hueRotate: 200,

      rules: { streak: true },
      battlesPerRound: 7,

      silverRound: 5,
      goldRound: 10 },
    {
      id: "frontierPalaceSecret",
      name: "Battle Palace (Hoenn)",
      desc: "Your Pokémon pick moves on their own, guided by their nature. No player input during attacks.",
      brain: {
        id: "spenser",
        sprite: "palace_maven_spenser",
        name: "Palace Maven Spenser",
        teamSilver: ["crobat", "slaking", "lapras"],
        teamGold: ["arcanine", "slaking", "suicune"] },
      iconSvg: ICON_PALACE,
      background: "gym",
      hueRotate: 60,
      rules: { autoMoveByNature: true },
      battlesPerRound: 7,

      silverRound: 3,
      goldRound: 6 },
    {
      id: "frontierArenaSecret",
      name: "Battle Arena (Hoenn)",
      desc: "3-turn maximum per fight, no switching allowed. If no KO, the judge rules based on Mental / Technique / Physique.",
      brain: {
        id: "greta",
        sprite: "arena_tycoon_greta",
        name: "Arena Tycoon Greta",
        teamSilver: ["heracross", "umbreon", "shedinja"],
        teamGold: ["umbreon", "gengar", "breloom"] },
      iconSvg: ICON_ARENA,
      background: "gym",
      hueRotate: 0,
      rules: { threeTurnJudge: true },
      battlesPerRound: 7,

      silverRound: 4,
      goldRound: 8 },
    {
      id: "frontierDomeSecret",
      name: "Battle Dome (Hoenn)",
      desc: "Single-elimination tournament — beat 4 trainers in a bracket per tour. You see each opponent's team ahead of time and pick 2 of your Pokémon.",
      brain: {
        id: "tucker",
        sprite: "dome_ace_tucker",
        name: "Dome Ace Tucker",
        teamSilver: ["swampert", "salamence", "charizard"],
        teamGold: ["swampert", "latias", "metagross"] },
      iconSvg: ICON_DOME,
      background: "gym",
      hueRotate: 320,
      rules: { bracketTournament: true, bracketSize: 4, previewEnemy: true, pickSubset: 2 },

      battlesPerRound: 3,
      silverRound: 7,
      goldRound: 14 },
    {
      id: "frontierFactorySecret",
      name: "Battle Factory (Hoenn)",
      desc: "Get 3 rental Pokémon from a random pool. After each win, you can swap one of yours with the defeated opponent's. Pure Gen 3 Factory rules.",
      brain: {
        id: "noland",
        sprite: "factory_head_noland",
        name: "Factory Head Noland",
        teamSilver: null,
        teamGold: null },
      iconSvg: ICON_FACTORY,
      background: "lab",
      hueRotate: 160,
      rules: { rentalPool: true, swapAfterWin: true },
      battlesPerRound: 7,

      silverRound: 3,
      goldRound: 6 },
    {
      id: "frontierPikeSecret",
      name: "Battle Pike (Hoenn)",
      desc: "14 rooms. Pick one of three doors per room: battle, wild, heal, trap, or mystery. HP and status persist.",
      brain: {
        id: "lucy",
        sprite: "pike_queen_lucy",
        name: "Pike Queen Lucy",
        teamSilver: ["seviper", "shuckle", "milotic"],
        teamGold: ["seviper", "gyarados", "steelix"] },
      iconSvg: ICON_PIKE,
      background: "gymCard",
      hueRotate: -40,
      rules: { chooseDoor: true, persistHpStatus: true, roomCount: 14 },

      roomsPerRound: 14,
      battlesPerRound: 14,
      silverRound: 1,
      goldRound: 5 },
    {
      id: "frontierPyramidSecret",
      name: "Battle Pyramid (Hoenn)",
      desc: "Navigate a 7x7 grid. Hidden trainers, wild waves, items, and traps. HP and status persist. Find the stairs to advance.",
      brain: {
        id: "brandon",
        sprite: "pyramid_king_brandon",
        name: "Pyramid King Brandon",
        teamSilver: ["regirock", "regice", "registeel"],
        teamGold: ["articuno", "zapdos", "moltres"] },
      iconSvg: ICON_PYRAMID,
      background: "cave",
      hueRotate: 30,
      rules: { gridNav: true, persistHpStatus: true, gridSize: 7 },

      floorsPerRound: 7,
      battlesPerRound: 7,
      silverRound: 3,
      goldRound: 10 },
  ];

  const SILVER_ROUND = 7;
  const GOLD_ROUND = 49;
  const POST_GOLD_BOSS_EVERY = 7;

  function silverRoundFor(facility) {
    return (facility && facility.silverRound) || SILVER_ROUND;
  }
  function goldRoundFor(facility) {
    return (facility && facility.goldRound) || GOLD_ROUND;
  }
  function postGoldEveryFor(facility) {
    if (facility && facility.postGoldRematchEvery) return facility.postGoldRematchEvery;
    const silver = silverRoundFor(facility);
    const gold = goldRoundFor(facility);
    const gap = gold - silver;
    return gap > 0 ? gap : POST_GOLD_BOSS_EVERY;
  }

  function nextGoalRoundFor(currentRound, facility) {
    const silver = silverRoundFor(facility);
    const gold = goldRoundFor(facility);
    const every = postGoldEveryFor(facility);
    if (currentRound <= silver) return silver;
    if (currentRound <= gold) return gold;
    const past = currentRound - gold;
    const cycles = Math.max(1, Math.ceil(past / every));
    return gold + cycles * every;
  }

  function difficultyMultiplier(round, facility) {
    const gold = goldRoundFor(facility);
    const every = postGoldEveryFor(facility);
    if (round <= gold) return 1;
    return 1 + Math.floor((round - gold) / every);
  }

  function getBossRoundInfo(round, facility) {
    const silver = silverRoundFor(facility);
    const gold = goldRoundFor(facility);
    const every = postGoldEveryFor(facility);
    if (round === silver) return { kind: "silver", multiplier: 1 };
    if (round === gold) return { kind: "gold", multiplier: 1 };
    if (round > gold && (round - gold) % every === 0) {
      return { kind: "rematch", multiplier: difficultyMultiplier(round, facility) };
    }
    return null;
  }

  function computeRunDifficulty(round, facility) {
    const silver = silverRoundFor(facility);
    const gold   = goldRoundFor(facility);
    const mult   = difficultyMultiplier(round, facility);
    const tier   = tierForRound(round, facility);

    const progGold = Math.min(1, Math.max(0, (round - 1) / Math.max(1, gold - 1)));

    const progSilverToGold = Math.min(1, Math.max(0, (round - silver) / Math.max(1, gold - silver)));

    const ivRating = Math.max(0, Math.min(6, Math.round(1 + progGold * 5)));

    let abilityChance = 0;
    if (round >= 3) abilityChance = 0.25;
    if (round >= silver) abilityChance = 0.55;
    if (round >= gold) abilityChance = 1;
    const forceHiddenAbility = mult >= 2 || round >= gold;

    const eggMoveChance = round < silver - 2 ? 0
                        : round < silver     ? 0.2
                        : round < gold       ? 0.6 + 0.4 * progSilverToGold
                        :                      1.0;

    const signatureChance = round < silver ? null
                          : round < gold   ? 0.5 + 0.5 * progSilverToGold
                          :                  1.0;

    const useEggMove     = round >= silver;
    const forceSignature = round >= gold;
    const useSeededRng   = round >= silver;

    const hiddenAbilityChance = round < silver ? 0
                              : round < gold   ? 0.25 + 0.5 * progSilverToGold
                              :                  0.75;

    const natureChance = round < silver ? 0
                       : round < gold   ? 0.3 + 0.7 * progSilverToGold
                       :                  1.0;

    const itemPoolTier = round < silver      ? null
                       : round < silver + 2  ? "basic"
                       : round < gold        ? "mid"
                       :                       "full";

    const hpMultBase   = 2 + tier * 2 + (mult - 1) * 2;
    const hpMult       = hpMultBase + progGold;

    const shinyRate = mult >= 2 ? 1 / 100 : 1 / 140;

    return {
      round, tier, mult, hpMult, ivRating,

      abilityChance, forceHiddenAbility, useEggMove, forceSignature, useSeededRng,

      eggMoveChance, signatureChance,
      hiddenAbilityChance, natureChance,
      itemPoolTier, shinyRate,
    };
  }

  function isMiniBossBattle(run, facility) {
    if (!run || !facility) return false;
    if (isDomeFacility(facility) || isPikeFacility(facility) || isPyramidFacility(facility)) return false;
    const perRound = battlesPerRound(facility);
    if (perRound <= 1) return false;
    const boss = getBossRoundInfo(run.round + 1, facility);
    if (boss) return false;
    return (run.battleInRound || 1) === perRound;
  }

  function tierForRound(round, facility) {
    const gold = goldRoundFor(facility);
    const mult = difficultyMultiplier(round, facility);
    let tier = 1;
    if (round >= 3) tier = 2;
    if (round >= 6) tier = 3;
    if (round > gold) tier = 4;
    if (mult >= 3) tier = 5;
    return tier;
  }

  const PIKE_ROOM_COUNT = 14;
  const PIKE_DOOR_COUNT = 3;

  const PIKE_PYRAMID_STATUSES = ["poisoned", "burn", "paralysis", "sleep", "freeze"];

  const PIKE_PYRAMID_STATUS_TURNS = 99;

  const PIKE_STATUS_SPECIES = {
    kirlia:    ["poisoned", "paralysis", "sleep", "burn"],
    gardevoir: ["poisoned", "paralysis", "sleep", "burn"],
    dusclops:  ["freeze", "burn"],
    gloom:     ["sleep", "paralysis", "poisoned"],
    vileplume: ["sleep", "paralysis", "poisoned"],
    parasect:  ["sleep"],
    seviper:   ["poisoned", "paralysis"] };

  function pikeStatusCountByRoom(room) {
    if (room <= 5) return 1;
    if (room <= 10) return 2;
    return 3;
  }

  function pikePkmnImmuneToStatus(pkmnId, status) {
    if (typeof pkmn === "undefined" || !pkmn[pkmnId]) return false;
    const types = [pkmn[pkmnId].type1, pkmn[pkmnId].type2].filter(Boolean);
    if (status === "burn"      && types.includes("fire"))     return true;
    if (status === "freeze"    && types.includes("ice"))      return true;
    if (status === "paralysis" && types.includes("electric")) return true;
    if (status === "poisoned"  && (types.includes("poison") || types.includes("steel"))) return true;
    return false;
  }

  const PIKE_HINT_CATEGORY = {
    combat_solo:    "presence",
    heal_full:      "presence",
    empty:          "conversation",
    combat_tough:   "smell",
    wild:           "smell",
    status_species: "nostalgia",
    heal_partial:   "nostalgia",
    brain:          "dread",

    combat:         "presence",
    heal_half:      "nostalgia",
    trap:           "nostalgia",
    tough:          "smell" };

  function isPikeFacility(facility) {
    return facility && facility.rules && facility.rules.chooseDoor;
  }

  function isPalaceFacility(facility) {
    return !!(facility && facility.rules && facility.rules.autoMoveByNature);
  }

  function hasRunTeamState(facility) {
    return !!(facility && facility.rules && facility.rules.persistHpStatus);
  }

  function battlesPerRound(facility) {
    if (!facility) return 1;
    return facility.battlesPerRound
        || facility.roomsPerRound
        || facility.floorsPerRound
        || (isDomeFacility(facility) ? DOME_BRACKET_SIZE : 1);
  }

  function normalizePikePyramidStatus(st) {
    if (st === "poison") return "poisoned";
    return st;
  }
  function migratePikeState() {
    if (typeof saved !== "object" || !saved || !saved.frontierExt) return;
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    if (run.pikeStatus) {
      for (const sl of Object.keys(run.pikeStatus)) {
        run.pikeStatus[sl] = normalizePikePyramidStatus(run.pikeStatus[sl]);
      }
    }
    if (Array.isArray(run.pikeDoors)) {
      for (const d of run.pikeDoors) {
        if (d && d.data && typeof d.data.status === "string") {
          d.data.status = normalizePikePyramidStatus(d.data.status);
        }
      }
    }

    migratePikePyramidTeam();
  }

  const CURTAIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 160" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="pikeGoldRod" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f6dc8a"/>
      <stop offset="45%" stop-color="#d5a22b"/>
      <stop offset="100%" stop-color="#6a3d08"/>
    </linearGradient>
    <linearGradient id="pikeVelvet" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b61a1a"/>
      <stop offset="50%" stop-color="#8a0808"/>
      <stop offset="100%" stop-color="#4c0202"/>
    </linearGradient>
    <linearGradient id="pikePleatHi" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="rgba(255,200,200,0)"/>
      <stop offset="50%" stop-color="rgba(255,190,190,0.45)"/>
      <stop offset="100%" stop-color="rgba(255,200,200,0)"/>
    </linearGradient>
  </defs>
  <!-- Gold rod -->
  <rect x="0" y="0" width="100" height="10" fill="url(#pikeGoldRod)"/>
  <rect x="0" y="0" width="100" height="2" fill="rgba(255,230,160,0.75)"/>
  <rect x="0" y="8" width="100" height="2" fill="rgba(0,0,0,0.35)"/>
  <!-- Curtain body -->
  <rect x="0" y="10" width="100" height="140" fill="url(#pikeVelvet)"/>
  <!-- Pleat shadows -->
  <rect x="13" y="10" width="3" height="140" fill="rgba(0,0,0,0.40)"/>
  <rect x="31" y="10" width="3" height="140" fill="rgba(0,0,0,0.40)"/>
  <rect x="49" y="10" width="3" height="140" fill="rgba(0,0,0,0.40)"/>
  <rect x="67" y="10" width="3" height="140" fill="rgba(0,0,0,0.40)"/>
  <rect x="85" y="10" width="3" height="140" fill="rgba(0,0,0,0.40)"/>
  <!-- Pleat highlights -->
  <rect x="3"  y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <rect x="21" y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <rect x="39" y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <rect x="57" y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <rect x="75" y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <rect x="93" y="10" width="6" height="140" fill="url(#pikePleatHi)"/>
  <!-- Scalloped fringe -->
  <path d="M0 148 L10 160 L20 148 L30 160 L40 148 L50 160 L60 148 L70 160 L80 148 L90 160 L100 148 L100 160 L0 160 Z" fill="#2b0000"/>
  <!-- Gold tassel -->
  <circle cx="50" cy="150" r="4" fill="url(#pikeGoldRod)" stroke="#4a2a08" stroke-width="0.6"/>
  <line x1="50" y1="154" x2="50" y2="158" stroke="#8a5a1a" stroke-width="1.2"/>
</svg>
`.trim();

  const DOME_BRACKET_SIZE = 3;

  function isDomeFacility(facility) {
    return facility && facility.rules && facility.rules.bracketTournament;
  }

  function ensureBracketForDome(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run) return [];
    const currentRound = run.round + 1;
    if (run.bracketRound === currentRound && Array.isArray(run.bracketTrainers)
        && run.bracketTrainers.length === DOME_BRACKET_SIZE) {
      return run.bracketTrainers;
    }
    const lang = "en";
    const bossInfo = getBossRoundInfo(currentRound, facility);
    const brainDiff = computeRunDifficulty(currentRound, facility);
    const trainers = [];
    for (let i = 1; i <= DOME_BRACKET_SIZE; i++) {
      if (i === DOME_BRACKET_SIZE && bossInfo) {

        const brainTeam = bossInfo.kind === "silver"
          ? facility.brain.teamSilver
          : facility.brain.teamGold;
        trainers.push({
          name: facility.brain.name,
          sprite: facility.brain.sprite,
          team: brainTeam
            ? brainTeam.slice(0, 3).map((id) => ({
                id,
                moves: pickMovesetFor(id, brainDiff),
                nature: simulateNatureFor(id) }))
            : [1, 2, 3].map(() => {
                const id = pickFromPool(5);
                return { id, moves: pickMovesetFor(id, brainDiff), nature: simulateNatureFor(id) };
              }),
          tier: 3,
          multiplier: bossInfo.multiplier,
          bossKind: bossInfo.kind,
          isBoss: true });
      } else {

        trainers.push(generateTrainer(currentRound, facility));
      }
    }
    run.bracketTrainers = trainers;
    run.bracketRound = currentRound;
    if (run.bracketBattle === undefined) run.bracketBattle = 1;
    return trainers;
  }

  const UNLOCK_KEY = "vsPokemonProfessorOak";

  const UNLOCK_TEXT_KEY = "defeatPokemonProfessorOakToUnlock";
  const UNLOCK_TEXT_FALLBACK = "Defeat Pokemon Professor Oak in VS to unlock";

  function isUnlocked() {
    try {
      return !!(typeof areas !== "undefined" && areas[UNLOCK_KEY] && areas[UNLOCK_KEY].defeated);
    } catch (e) {
      return false;
    }
  }

  function unlockText() {
    if (typeof t_ui === "function") {
      const t = t_ui(UNLOCK_TEXT_KEY);
      if (t && t !== UNLOCK_TEXT_KEY) return t;
    }
    return UNLOCK_TEXT_FALLBACK;
  }

  function ensureSaveSlot() {
    if (typeof saved !== "object" || !saved) return;
    if (!saved.frontierExt) {
      saved.frontierExt = {
        streaks: {},
        maxStreaks: {},
        symbols: {},
        activeRun: null,
        pausedRuns: {} };
    }
    if (saved.frontierExt.activeRun === undefined) saved.frontierExt.activeRun = null;

    if (!saved.frontierExt.pausedRuns) saved.frontierExt.pausedRuns = {};
    for (const f of FACILITIES) {
      if (saved.frontierExt.streaks[f.id] === undefined) saved.frontierExt.streaks[f.id] = 0;
      if (saved.frontierExt.maxStreaks[f.id] === undefined) saved.frontierExt.maxStreaks[f.id] = 0;
      if (!saved.frontierExt.symbols[f.id]) saved.frontierExt.symbols[f.id] = { silver: false, gold: false };
    }

    migratePikeState();
  }

  function getRunForFacility(facilityId) {
    if (!saved || !saved.frontierExt) return null;
    const active = saved.frontierExt.activeRun;
    if (active && active.facilityId === facilityId) return active;
    return (saved.frontierExt.pausedRuns && saved.frontierExt.pausedRuns[facilityId]) || null;
  }

  function isPausedRun(facilityId) {
    return !!(saved && saved.frontierExt
              && saved.frontierExt.pausedRuns
              && saved.frontierExt.pausedRuns[facilityId]);
  }

  const GENERIC_SPRITES_M = [
    "aceTrainerSnowM","artist","blackBelt","bugCatcher","channeler","clown",
    "firebreather","gentleman","hiker","hiker2","janitor","pokemaniac",
    "rocketGruntM","sailor","schoolKid","scientist","swimmer","veteran",
    "worker","youngster",
  ];
  const GENERIC_SPRITES_F = [
    "aceTrainerSnowF","aromaLady","battlegirl","beauty","birdkeeper",
    "hexmaniac","madame","psychic","rocketGruntF",
  ];
  const TRAINER_NAMES_EN_M = [
    "Jake","Hugh","Max","Alex","Trent","Cam","Rafe","Nick","Arthur","Luke",
    "Gabe","Noah","Eli","Mark","Jason","Sam","Victor","Leo","Theo","Paul",
  ];
  const TRAINER_NAMES_EN_F = [
    "Lilly","Olivia","Zoe","Emma","Chloe","Sarah","Julie","Mandy","Ines",
    "Luna","Jade","Alice","Lucy","Ellie","Mary","Noemi","Clara","Sophie",
    "Anna","Ivy",
  ];

  const TIER_PERCENTILE = {
    1: { minPct: 0.00, maxPct: 0.50, unobtainable: false },
    2: { minPct: 0.30, maxPct: 0.75, unobtainable: false },
    3: { minPct: 0.60, maxPct: 0.95, unobtainable: false },
    4: { minPct: 0.60, maxPct: 1.00, unobtainable: true },
    5: { minPct: 0.85, maxPct: 1.00, unobtainable: true } };

  const TIER_BST = TIER_PERCENTILE;

  function bstTotal(p) {
    if (!p || !p.bst) return 0;
    const b = p.bst;

    return (b.hp || 0) + (b.atk || 0) + (b.def || 0)
         + (b.satk || 0) + (b.sdef || 0) + (b.spe || 0);
  }

  let _sortedBstCache = null;
  function buildSortedBstList() {
    if (_sortedBstCache) return _sortedBstCache;
    if (typeof pkmn === "undefined") return [];
    const out = [];
    for (const id of Object.keys(pkmn)) {
      const p = pkmn[id];
      if (!p || !p.bst) continue;
      if (/Mega|Gmax|Primal/.test(id)) continue;
      const total = bstTotal(p);
      if (total <= 0) continue;
      out.push({ id, bst: total, unobtainable: p.tagObtainedIn === "unobtainable" });
    }
    out.sort((a, b) => a.bst - b.bst);
    _sortedBstCache = out;
    return out;
  }

  const _poolCache = {};
  function getPool(tier) {
    if (_poolCache[tier]) return _poolCache[tier];
    if (typeof pkmn === "undefined") return ["tauros"];
    const cfg = TIER_PERCENTILE[tier] || TIER_PERCENTILE[1];
    const sorted = buildSortedBstList();
    if (!sorted.length) return ["tauros"];
    const lo = Math.floor(sorted.length * cfg.minPct);
    const hi = Math.ceil(sorted.length * cfg.maxPct);
    const ids = [];
    for (let i = lo; i < hi; i++) {
      const e = sorted[i];
      if (!cfg.unobtainable && e.unobtainable) continue;
      ids.push(e.id);
    }
    const pool = ids.length ? ids : ["tauros"];
    _poolCache[tier] = pool;
    return pool;
  }

  function resetPoolCache() {
    _sortedBstCache = null;
    for (const k of Object.keys(_poolCache)) delete _poolCache[k];
  }

  function debugPool(tier) {
    const sorted = buildSortedBstList();
    const summary = {
      totalEligible: sorted.length,
      minBst: sorted[0] ? sorted[0].bst : null,
      maxBst: sorted[sorted.length - 1] ? sorted[sorted.length - 1].bst : null,
      unobtainableCount: sorted.filter((e) => e.unobtainable).length,
      tiers: {} };
    for (const t of [1, 2, 3, 4, 5]) {
      const pool = getPool(t);
      summary.tiers[t] = {
        size: pool.length,
        bstRange: pool.length
          ? [
              Math.min(...pool.map((id) => bstTotal(pkmn[id]))),
              Math.max(...pool.map((id) => bstTotal(pkmn[id]))),
            ]
          : null,
        sample: pool.slice(0, 6) };
    }
    if (tier !== undefined) {
      summary.detail = summary.tiers[tier];
    }
    return summary;
  }

  function resetActiveRun() {
    if (typeof saved === "object" && saved && saved.frontierExt) {
      saved.frontierExt.activeRun = null;
    }
    refreshActiveFrontierView();
  }

  function pickFromPool(tier) {
    const list = getPool(tier);
    return list[Math.floor(Math.random() * list.length)] || "tauros";
  }

  function getPoolForFacility(facility, tier, round) {
    let pool = getPool(tier);
    if (isArenaFacility(facility)) pool = arenaBiasPoolBySpeed(pool);
    if (isFactoryFacility(facility) && round <= 3) {
      if (typeof pkmn !== "undefined" && pool.length > 6) {
        const pct = round === 1 ? 0.30 : round === 2 ? 0.55 : 0.80;
        const sorted = pool
          .map((id) => ({ id, bst: bstTotal(pkmn[id]) || 0 }))
          .sort((a, b) => a.bst - b.bst);
        pool = sorted.slice(0, Math.max(FACTORY_POOL_SIZE, Math.ceil(sorted.length * pct)))
                     .map((e) => e.id);
      }
    }
    if (isPikeFacility(facility)) pool = themeBiasPool(pool, ["poison", "ghost", "psychic"], 0.7);
    else if (isPyramidFacility(facility)) pool = themeBiasPool(pool, ["ghost", "rock", "ground", "dark"], 0.7);
    else if (isPalaceFacility(facility)) pool = palaceBiasPool(pool);
    return pool.length ? pool : getPool(tier);
  }

  function themeBiasPool(ids, themeTypes, ratio) {
    if (typeof pkmn === "undefined" || !Array.isArray(ids) || ids.length < 8) return ids;
    const set = new Set(themeTypes);
    const themed = [];
    const rest = [];
    for (const id of ids) {
      const p = pkmn[id];
      if (!p) continue;
      const types = Array.isArray(p.type) ? p.type : [p.type];
      if (types.some((t) => set.has(t))) themed.push(id);
      else rest.push(id);
    }
    if (themed.length < 4) return ids;

    const themedWeight = Math.ceil((themed.length / (1 - ratio)) - themed.length);
    const biased = [];
    for (let i = 0; i < themedWeight; i++) biased.push(...themed);
    biased.push(...rest);
    return biased.length ? biased : ids;
  }

  function palaceBiasPool(ids) {
    if (typeof pkmn === "undefined" || !Array.isArray(ids) || ids.length < 8) return ids;
    const expressive = ids.filter((id) => {
      const p = pkmn[id];
      if (!p || !p.bst) return false;
      const { atk, satk, def, sdef, hp } = p.bst;
      const offGap = Math.abs((atk || 0) - (satk || 0));
      const defGap = Math.abs((def || 0) - (sdef || 0));
      return offGap >= 25 || defGap >= 25 || hp + def + sdef >= 260;
    });
    return expressive.length >= 6 ? expressive : ids;
  }

  const GENETIC_MOVES_FOR_ALL = new Set([

    "thunderWave", "willOWisp", "toxic", "swagger", "confuseRay",
    "safeguard", "reflect", "lightScreen",

    "sunnyDay", "sandstorm", "rainDance",

    "swordsDance", "nastyPlot", "calmMind", "bulkUp",
    "agility", "dragonDance", "rockPolish", "quiverDance", "shiftGear",

    "morningSun",

    "quickAttack", "extremeSpeed", "bulletPunch", "iceShard",
    "aquaJet", "vacuumWave", "shadowSneak", "machPunk",

    "flamethrower", "thunderbolt", "iceBeam", "earthquake", "stoneEdge",
    "psychic", "energyBall", "sludgeBomb", "shadowBall",
    "facade",
  ]);

  let _moveCatsCache = null;
  function buildMoveCategories() {
    if (_moveCatsCache) return _moveCatsCache;
    if (typeof move === "undefined") return { cats: {}, buffKind: {} };
    const cats = {
      setupAtk: [],
      setupSatk: [],
      setupSpe: [],
      setupMixOff: [],
      setupExtreme: [],
      setupDef: [],
      weatherSun: [],
      weatherRain: [],
      weatherSand: [],
      weatherHail: [],
      terrainElec: [],
      terrainGrass: [],
      terrainMisty: [],
      screenReflect: [],
      screenLight: [],
      roomField: [],
      debuff: [],
      healing: [],
    };
    const buffKind = {};
    const markCat = (bucket, id) => {
      cats[bucket].push(id);
      buffKind[id] = bucket;
    };

    for (const [k, mv] of Object.entries(move)) {
      if (!mv || typeof mv.hitEffect !== "function") continue;
      const src = mv.hitEffect.toString();
      const isStatus = mv.split === "status" || !mv.power;

      const weatherMatch = src.match(/changeWeather\(\s*['"]([a-zA-Z]+)['"]/);
      if (weatherMatch) {
        const w = weatherMatch[1];
        if (w === "sunny")           markCat("weatherSun", k);
        else if (w === "rainy")      markCat("weatherRain", k);
        else if (w === "sandstorm")  markCat("weatherSand", k);
        else if (w === "hail")       markCat("weatherHail", k);
        else if (w === "electricTerrain") markCat("terrainElec", k);
        else if (w === "grassyTerrain")   markCat("terrainGrass", k);
        else if (w === "mistyTerrain")    markCat("terrainMisty", k);
        else if (w === "reflect")         markCat("screenReflect", k);
        else if (w === "lightScreen")     markCat("screenLight", k);
        else if (/(trickRoom|weirdRoom|crossRoom|foggy|safeguard)/.test(w)) markCat("roomField", k);
        continue;
      }

      if (!isStatus) {

        continue;
      }

      let selfAtk = 0, selfSatk = 0, selfSpe = 0, selfDef = 0, selfSdef = 0;
      const buffRe = /moveBuff\s*\([^,]+,\s*['"]([a-zA-Z]+)(up)?(down)?([0-9])['"]\s*(?:,\s*['"]self['"]\s*)?\)/g;

      const selfRe = /moveBuff\s*\([^,]+,\s*['"]([a-zA-Z]+)(up|down)([0-9])['"]\s*,\s*['"]self['"]/g;
      let m;
      while ((m = selfRe.exec(src)) !== null) {
        const stat = m[1], dir = m[2], mag = parseInt(m[3], 10);
        if (dir !== "up") continue;
        if (stat === "atk")  selfAtk  += mag;
        if (stat === "satk") selfSatk += mag;
        if (stat === "spe")  selfSpe  += mag;
        if (stat === "def")  selfDef  += mag;
        if (stat === "sdef") selfSdef += mag;
      }

      if (selfAtk + selfSatk + selfSpe + selfDef + selfSdef === 0) {

        const teamBuffRe = /moveBuff\([^,]+,\s*['"][a-zA-Z]+up[0-9]['"]\s*,\s*['"]team['"]/;
        if (teamBuffRe.test(src)) {
          markCat("setupDef", k);
          continue;
        }
        const debuffRe = /moveBuff\([^,]+,\s*['"](poisoned|burn|paralysis|sleep|confused|atkdown|satkdown|defdown|sdefdown|spedown|frozen)/;
        if (debuffRe.test(src)) { markCat("debuff", k); continue; }
        const healRe = /heal\s*\(|hpHeal|recover|restoreHp/i;
        if (healRe.test(src)) { markCat("healing", k); continue; }
        continue;
      }

      const totalOff = selfAtk + selfSatk + selfSpe;
      const totalDef = selfDef + selfSdef;

      const maxStat = Math.max(selfAtk, selfSatk, selfSpe, selfDef, selfSdef);
      const omniBoost = selfAtk && selfSatk && selfSpe && selfDef && selfSdef;
      if (maxStat >= 3 || omniBoost || (selfAtk >= 2 && selfSpe >= 2)) {
        markCat("setupExtreme", k);
        continue;
      }

      if ((selfAtk && selfSpe) || (selfSatk && selfSpe)) {
        markCat("setupMixOff", k);
        continue;
      }

      if (selfAtk  && !selfSatk && !selfSpe) { markCat("setupAtk", k); continue; }
      if (selfSatk && !selfAtk  && !selfSpe) { markCat("setupSatk", k); continue; }
      if (selfSpe  && !selfAtk  && !selfSatk) { markCat("setupSpe", k); continue; }

      if (totalDef || totalOff) { markCat("setupDef", k); continue; }
    }

    _moveCatsCache = { cats, buffKind };
    return _moveCatsCache;
  }

  function weatherFromAbility(abilityId) {
    if (!abilityId) return null;
    if (abilityId === "drought")     return "sunny";
    if (abilityId === "drizzle")     return "rainy";
    if (abilityId === "sandStream")  return "sandstorm";
    if (abilityId === "snowWarning") return "hail";
    if (abilityId === "electricSurge") return "electricTerrain";
    if (abilityId === "grassySurge")   return "grassyTerrain";
    if (abilityId === "mistySurge")    return "mistyTerrain";
    return null;
  }

  function pickMovesetFor(pkmnId, diff) {
    const p = typeof pkmn !== "undefined" ? pkmn[pkmnId] : null;
    if (!p || typeof move === "undefined") return [];
    const types = Array.isArray(p.type) ? p.type : [p.type];
    const primaryType = types[0];
    const secondaryType = types[1];
    const { cats, buffKind } = buildMoveCategories();

    let division = "C";
    try {
      if (typeof returnPkmnDivision === "function") division = returnPkmnDivision(p);
    } catch (e) {  }
    const unrestrictedLearning = /^[BCD]$/.test(division);
    const isLowDivision = unrestrictedLearning;

    const sigKey = (p.signature && p.signature.id) || null;
    const eggKey = (p.eggMove && p.eggMove.id) || null;

    const stats = p.bst || { hp: 3, atk: 3, def: 3, satk: 3, sdef: 3, spe: 3 };
    const atk = stats.atk || 0, satk = stats.satk || 0;
    const spe = stats.spe || 0, hp = stats.hp || 0;
    const def = stats.def || 0, sdef = stats.sdef || 0;
    const isPhys = atk > satk + 1;
    const isSpec = satk > atk + 1;
    const isFast = spe >= 4;
    const isBulky = (hp + def + sdef) >= 12;

    const hiddenAbilityId = (p.hiddenAbility && p.hiddenAbility.id) || null;
    const autoWeather = (diff && diff.forceHiddenAbility) ? weatherFromAbility(hiddenAbilityId) : null;

    const eggMoveActive = !!(diff && diff.useEggMove && eggKey);
    const isLearnable = (mv, key) => {
      if (!mv) return false;
      if (key && eggMoveActive && key === eggKey) return true;
      if (key && sigKey && key === sigKey) return true;
      if (!Array.isArray(mv.moveset)) return false;
      if (unrestrictedLearning) return true;
      if (mv.moveset.indexOf("all") !== -1) return true;
      if (mv.moveset.indexOf("normal") !== -1) return true;
      for (const t of types) { if (t && mv.moveset.indexOf(t) !== -1) return true; }
      return !!(key && GENETIC_MOVES_FOR_ALL.has(key));
    };

    const pool = [];
    for (const [k, mv] of Object.entries(move)) {
      if (mv && mv.notUsableByEnemy) continue;
      if (!isLearnable(mv, k)) continue;
      pool.push({ id: k, mv });
    }

    const chosen = [];

    const push = (key) => {
      if (!key || chosen.indexOf(key) !== -1 || chosen.length >= 4) return false;
      const mv = move[key];
      if (!mv) return false;
      chosen.push(key);
      return true;
    };

    const splitMatches = (mv) => {
      if (!mv) return false;
      if (mv.split === "status") return true;
      if (isPhys) return mv.split !== "special";
      if (isSpec) return mv.split !== "physical";
      return true;
    };

    const __moveTier = diff && diff.itemPoolTier;
    const __lowTier = __moveTier !== "full";
    const __preSilver = __moveTier == null;
    const __moveRarityMult = (mv) => {
      const r = mv && typeof mv.rarity === "number" ? mv.rarity : 2;
      if (__preSilver) {
        return r === 1 ? 3.5 : r === 2 ? 1.8 : 0.35;
      }
      if (__lowTier) {
        return r === 1 ? 1.8 : r === 2 ? 1.3 : 0.75;
      }
      return r === 1 ? 1.20 : r === 2 ? 1.10 : 1.00;
    };
    const pickTopN = (list, n) => {
      if (!list.length) return null;
      const slice = __preSilver
        ? list.slice()
        : list.slice(0, Math.min(n + (__lowTier ? 3 : 1), list.length));
      if (Math.random() < (__preSilver ? 0.30 : __lowTier ? 0.22 : 0.15)) {
        return slice[Math.floor(Math.random() * slice.length)];
      }
      const weights = slice.map((c, i) => {
        const posWeight = __preSilver ? 1 : (slice.length - i);
        const rMult = __moveRarityMult(c.mv);
        return Math.max(0.1, posWeight * rMult);
      });
      const total = weights.reduce((s, w) => s + w, 0);
      let r = Math.random() * total;
      for (let i = 0; i < slice.length; i++) {
        r -= weights[i];
        if (r <= 0) return slice[i];
      }
      return slice[0];
    };

    const stabPrimary = pool
      .filter((c) => c.mv.type === primaryType && (c.mv.power || 0) > 0 && splitMatches(c.mv))
      .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
    const stabSecondary = secondaryType
      ? pool.filter((c) => c.mv.type === secondaryType && (c.mv.power || 0) > 0 && splitMatches(c.mv))
            .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0))
      : [];
    const coverageAttacks = pool
      .filter((c) => (c.mv.power || 0) >= 60
                   && c.mv.type !== primaryType
                   && c.mv.type !== secondaryType
                   && c.mv.type !== "normal"
                   && splitMatches(c.mv))
      .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
    const normalAttacks = pool
      .filter((c) => c.mv.type === "normal" && (c.mv.power || 0) > 0 && splitMatches(c.mv))
      .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));

    const __priorityCap = (typeof defaultPlayerMoveTimer === "number") ? defaultPlayerMoveTimer : 2000;
    const priorityAttacks = pool
      .filter((c) => c.mv.power > 0 && typeof c.mv.timer === "number" && c.mv.timer < __priorityCap && splitMatches(c.mv))
      .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));

    const learnableCat = (bucketName) => (cats[bucketName] || [])
      .filter((k) => pool.some((c) => c.id === k));

    const setupPref = (() => {
      if (isPhys && isFast)              return ["setupMixOff", "setupAtk", "setupExtreme", "setupSpe", "setupDef"];
      if (isSpec && isFast)              return ["setupMixOff", "setupSatk", "setupExtreme", "setupSpe", "setupDef"];
      if (isPhys)                        return ["setupAtk", "setupExtreme", "setupMixOff", "setupSpe", "setupDef"];
      if (isSpec)                        return ["setupSatk", "setupExtreme", "setupMixOff", "setupSpe", "setupDef"];
      if (isBulky)                       return ["setupDef", "setupAtk", "setupSatk", "setupMixOff"];
      return ["setupMixOff", "setupExtreme", "setupAtk", "setupSatk", "setupSpe", "setupDef"];
    })();

    if (sigKey) {
      const sig = move[sigKey];
      if (sig) {

        const strongSig = (sig.power || 0) >= 80;
        const okSig     = (sig.power || 0) >= 65;
        const sigChance = diff && typeof diff.signatureChance === "number" ? diff.signatureChance : null;
        const sigRolled = sigChance !== null && sigChance > 0 && Math.random() < sigChance;
        const legacy    = diff && diff.forceSignature;
        if ((legacy || sigRolled || strongSig || okSig) && splitMatches(sig)) push(sigKey);
      }
    }

    const eggChance = diff && typeof diff.eggMoveChance === "number" ? diff.eggMoveChance : null;
    const eggRolled = eggChance !== null ? Math.random() < eggChance : eggMoveActive;
    if (eggRolled && eggKey && move[eggKey]) {
      if (isLowDivision || chosen.length === 0) push(eggKey);

      else if (Math.random() < 0.5) push(eggKey);
    }

    const allowSetup = !diff || (diff.ivRating || 0) >= 3;
    const setupSkipChance = __preSilver ? 0.50 : __lowTier ? 0.30 : 0.15;
    if (allowSetup && chosen.length < 4 && Math.random() > setupSkipChance) {
      const topBucketCount = __lowTier ? 3 : 2;
      const candidatePool = [];
      for (let bi = 0; bi < Math.min(topBucketCount, setupPref.length); bi++) {
        const bucket = setupPref[bi];
        const learnables = learnableCat(bucket);
        for (const id of learnables) candidatePool.push({ id, bucketRank: bi });
      }
      const prefExtreme = diff && (diff.mult || 0) >= 1 && (diff.forceSignature || diff.ivRating === 6);
      if (prefExtreme) {
        const extreme = learnableCat("setupExtreme");
        for (const id of extreme) candidatePool.push({ id, bucketRank: 0 });
      }
      if (candidatePool.length) {
        const weights = candidatePool.map((c) => Math.max(1, 4 - c.bucketRank));
        const total = weights.reduce((s, w) => s + w, 0);
        let r = Math.random() * total;
        let pickEntry = candidatePool[0];
        for (let i = 0; i < candidatePool.length; i++) {
          r -= weights[i];
          if (r <= 0) { pickEntry = candidatePool[i]; break; }
        }
        push(pickEntry.id);
      }
    }

    const __defaultAbId = (p.ability && (typeof p.ability === "object" ? p.ability.id : p.ability)) || null;
    const __hiddenAbId  = (p.hiddenAbility && (typeof p.hiddenAbility === "object" ? p.hiddenAbility.id : p.hiddenAbility)) || null;
    const hasTechnician = __defaultAbId === "technician" || __hiddenAbId === "technician";
    if ((isFast || isPhys || hasTechnician) && chosen.length < 4 && priorityAttacks.length) {
      let bucket = priorityAttacks;
      if (hasTechnician) {
        const techMoves = pool
          .filter((c) => (c.mv.power || 0) > 0 && (c.mv.power || 0) <= 60 && splitMatches(c.mv))
          .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
        if (techMoves.length) bucket = techMoves;
      }
      const stabInBucket = bucket.filter((c) => types.indexOf(c.mv.type) !== -1);
      const src = stabInBucket.length ? stabInBucket : bucket;
      const pick = pickTopN(src, 4);
      if (pick) push(pick.id);
    }

    if (!autoWeather && chosen.length < 4 && Math.random() < 0.20) {
      const stabs = new Set(types);
      let weatherBucket = null;
      if (stabs.has("fire"))      weatherBucket = "weatherSun";
      else if (stabs.has("water")) weatherBucket = "weatherRain";
      else if (stabs.has("rock") || stabs.has("ground") || stabs.has("steel")) weatherBucket = "weatherSand";
      else if (stabs.has("ice"))   weatherBucket = "weatherHail";
      else if (stabs.has("electric")) weatherBucket = "terrainElec";
      else if (stabs.has("grass"))    weatherBucket = "terrainGrass";
      else if (stabs.has("fairy"))    weatherBucket = "terrainMisty";
      if (weatherBucket) {
        const list = learnableCat(weatherBucket);
        if (list.length) push(list[Math.floor(Math.random() * list.length)]);
      }
    }

    if (chosen.length < 4) {
      const primaryKey = pickTopN(stabPrimary, 3);
      if (primaryKey) push(primaryKey.id);
    }

    if (chosen.length < 4) {
      if (stabSecondary.length) {
        const s2 = pickTopN(stabSecondary, 3);
        if (s2) push(s2.id);
      } else {
        const cov = pickTopN(coverageAttacks, 4);
        if (cov) push(cov.id);
      }
    }

    if (chosen.length < 4) {
      if (isFast || isPhys) {
        const prio = pickTopN(priorityAttacks, 3);
        if (prio) push(prio.id);
      }
    }

    if (chosen.length < 4) {
      const cov = pickTopN(coverageAttacks, 5);
      if (cov) push(cov.id);
    }
    if (chosen.length < 4) {
      const backup = pickTopN(stabPrimary.slice(1), 4);
      if (backup) push(backup.id);
    }
    if (chosen.length < 4) {
      const nrm = pickTopN(normalAttacks, 4);
      if (nrm) push(nrm.id);
    }

    if (chosen.length < 4) {
      const anyAtk = pool
        .filter((c) => c.mv.power > 0 && splitMatches(c.mv))
        .sort((a, b) => (b.mv.power || 0) - (a.mv.power || 0));
      for (const c of anyAtk) {
        if (chosen.length >= 4) break;
        push(c.id);
      }
    }

    while (chosen.length < 4 && move.tackle) {
      if (chosen.indexOf("tackle") !== -1) break;
      chosen.push("tackle");
    }

    return filterBannedEnemyMoves(chosen.slice(0, 4), pkmnId);
  }

  function pickSpriteAndName(lang) {
    const roll = Math.random();
    let gender, pool;
    if (roll < 0.7) {
      gender = "M";
      pool = GENERIC_SPRITES_M;
    } else {
      gender = "F";
      pool = GENERIC_SPRITES_F;
    }
    const sprite = pool[Math.floor(Math.random() * pool.length)];
    const nameList = gender === "M" ? TRAINER_NAMES_EN_M : TRAINER_NAMES_EN_F;
    const name = nameList[Math.floor(Math.random() * nameList.length)];
    return { sprite, name, gender };
  }

  function simulateNatureFor(pkmnId, ctx) {
    const p = typeof pkmn !== "undefined" ? pkmn[pkmnId] : null;
    if (!p || !p.bst) return "";
    const bst = (ctx && ctx.bst) || p.bst;
    const { atk, def, satk, sdef, spe, hp } = bst;
    const physOffense = atk > satk + 1;
    const specOffense = satk > atk + 1;
    const fast        = spe >= 4;
    const bulky       = (hp + def + sdef) >= 12;
    const wallPhys    = def > sdef + 1;
    const wallSpec    = sdef > def + 1;

    const moveIds  = (ctx && Array.isArray(ctx.moveIds)) ? ctx.moveIds : [];
    const abilities = new Set((ctx && Array.isArray(ctx.abilityIds)) ? ctx.abilityIds.filter(Boolean) : []);
    const heldItem = ctx && ctx.itemId;

    let physMoves = 0, specMoves = 0, fastMoves = 0, slowMoves = 0;
    const __cap = (typeof defaultPlayerMoveTimer === "number") ? defaultPlayerMoveTimer : 2000;
    if (typeof move !== "undefined") {
      for (const m of moveIds) {
        if (!m || !move[m]) continue;
        const mv = move[m];
        const pw = mv.power || 0;
        if (pw > 0 && mv.split === "physical") physMoves++;
        else if (pw > 0 && mv.split === "special") specMoves++;
        if (pw > 0 && typeof mv.timer === "number" && mv.timer < __cap) fastMoves++;
        if (pw > 0 && typeof mv.timer === "number" && mv.timer > __cap) slowMoves++;
      }
    }

    const candidates = [];
    const add = (id, w) => { if (w > 0) candidates.push({ id, w }); };

    if (physMoves >= 2 && physOffense)      add("adamant", 10);
    if (specMoves >= 2 && specOffense)      add("modest",  10);
    if (physMoves >= 1 && specMoves >= 1)   { add("adamant", 3); add("modest", 3); }
    if (fast)                               add("jolly",   fastMoves >= 1 ? 10 : 6);
    if (fastMoves >= 2 && !fast)            add("jolly",   4);
    if (slowMoves >= 2 || heldItem === "laggingTail") add("quiet", 7);
    if (bulky && wallPhys)                  add("bold",    8);
    if (bulky && wallSpec)                  add("quiet",   8);
    if (bulky && hp >= 4 && !fast)          add("relaxed", 5);
    if (abilities.has("guts") || abilities.has("marvelScale") || abilities.has("flareBoost"))
                                            add("adamant", 4);
    if (abilities.has("toxicBoost") || abilities.has("livingShield"))
                                            add("modest",  4);
    if (physOffense && candidates.length === 0) add("adamant", 5);
    if (specOffense && candidates.length === 0) add("modest",  5);
    if (candidates.length === 0) return "";

    if (Math.random() < 0.18) return candidates[Math.floor(Math.random() * candidates.length)].id;
    const total = candidates.reduce((s, c) => s + c.w, 0);
    let r = Math.random() * total;
    for (const c of candidates) { r -= c.w; if (r <= 0) return c.id; }
    return candidates[0].id;
  }

  function arenaBiasPoolBySpeed(ids) {
    if (typeof pkmn === "undefined") return ids;
    if (!Array.isArray(ids) || ids.length < 5) return ids;
    const scored = ids
      .map((id) => ({ id, spe: (pkmn[id] && pkmn[id].bst && pkmn[id].bst.spe) || 0 }))
      .sort((a, b) => b.spe - a.spe);
    return scored.slice(0, Math.ceil(scored.length * 0.6)).map((e) => e.id);
  }

  function arenaBiasNature(originalNature ) {
    if (originalNature === "relaxed" || originalNature === "bold") return "jolly";
    return originalNature;
  }

  function generateTrainer(round, facility) {
    const lang = "en";
    const { sprite, name } = pickSpriteAndName(lang);

    const diff = computeRunDifficulty(round, facility);
    const { tier, mult } = diff;

    const arenaBias = isArenaFacility(facility);
    const pool = getPoolForFacility(facility, tier, round);
    const size = 3;
    const slots = [];
    const usedIds = new Set();

    const surpriseChance =
      diff.forceHiddenAbility ? 0.15 :
      (diff.itemPoolTier === "full" || diff.itemPoolTier === "mid") ? 0.10 :
      (diff.itemPoolTier === "basic") ? 0.06 : 0;
    const LOW_DIV_POOL = getPool(1);
    const lowDivFor = (exclude) => {
      if (!LOW_DIV_POOL || !LOW_DIV_POOL.length) return null;
      for (let n = 0; n < 20; n++) {
        const pick = LOW_DIV_POOL[Math.floor(Math.random() * LOW_DIV_POOL.length)];
        if (!pick || exclude.has(pick)) continue;
        if (typeof returnPkmnDivision === "function" && typeof pkmn !== "undefined" && pkmn[pick]) {
          try {
            const div = returnPkmnDivision(pkmn[pick]);
            if (/^[BCD]$/.test(div)) return pick;
          } catch (e) {  }
        }
      }
      return null;
    };
    let surpriseSlotIdx = -1;
    if (surpriseChance > 0 && Math.random() < surpriseChance) {
      surpriseSlotIdx = Math.floor(Math.random() * size);
    }

    for (let i = 0; i < size; i++) {
      let id;
      if (i === surpriseSlotIdx) {
        id = lowDivFor(usedIds);
        if (!id) surpriseSlotIdx = -1;
      }
      if (!id) {
        let safety = 0;
        do {
          id = pool[Math.floor(Math.random() * pool.length)] || pickFromPool(tier);
          safety++;
        } while (id && usedIds.has(id) && safety < 20 && pool.length > size);
        if (!id) id = pickFromPool(tier);
      }
      usedIds.add(id);
      const moves = pickMovesetFor(id, diff);
      let nature = simulateNatureFor(id);
      if (arenaBias) nature = arenaBiasNature(nature);
      slots.push({ id, moves, nature });
    }

    return {
      name,
      sprite,
      team: slots,
      tier,
      round,
      multiplier: mult,
      facilityId: facility.id };
  }

  function injectStyles() {
    if (document.getElementById("frontier-ext-css")) return;
    const css = `
      /* Mirror the vanilla #frontier-listing / #vs-listing layout so the
         Hoenn listing row widths match the Trainers + Battle Frontier
         tabs. Without this, the Hoenn tiles rendered at their
         intrinsic size and overflowed the viewport on narrow mobile
         screens (reports: text clipped on the left, tiles extending
         past the right edge). styles.css:2759 drives the vanilla
         containers. */
      #frontier-hoenn-listing {
        height: auto;
        margin-top: 0;
        width: 95%;
        padding: 0rem;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 0.3rem;
        position: relative;
      }
      /* Whole-tile hue rotation gives each facility its own colour identity. */
      .frontier-ext-tile {
        position: relative;
        filter: hue-rotate(var(--hue, 0deg));
      }
      /* Counter-rotate the brain sprite so its colours stay true despite the
         tile tint. Same trick as the original Battle Factory tile. */
      .frontier-ext-tile img.frontier-ext-brain-icon {
        filter: hue-rotate(calc(var(--hue, 0deg) * -1));
        image-rendering: pixelated;
        height: 100%;
        width: auto;
        max-height: 7rem;
      }
      /* Run-in-progress badge — pulsing red pill that appears on the
         one tile where an activeRun is bound. Players see at a glance
         which facility they're committed to, without opening any tile. */
      .frontier-ext-inprogress-tag {
        display: inline-block;
        background: linear-gradient(90deg, #c0392b, #e74c3c, #c0392b);
        color: #ffecec;
        font-size: 0.7rem;
        padding: 0.1rem 0.55rem;
        border-radius: 0.2rem;
        margin-left: 0.3rem;
        vertical-align: middle;
        letter-spacing: 0.05em;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        box-shadow:
          0 0 0 1px rgba(255, 100, 100, 0.5),
          0 0 6px rgba(231, 76, 60, 0.55);
        animation: frontierInProgressPulse 1.8s ease-in-out infinite;
      }
      .frontier-ext-inprogress-tag::before {
        /* tiny red dot already embedded in the text via "● " prefix; this
           rule just nudges the text baseline so the glyph aligns visually. */
        position: relative;
        top: -0.05rem;
      }
      @keyframes frontierInProgressPulse {
        0%, 100% {
          box-shadow:
            0 0 0 1px rgba(255, 100, 100, 0.5),
            0 0 6px rgba(231, 76, 60, 0.55);
        }
        50% {
          box-shadow:
            0 0 0 1px rgba(255, 150, 150, 0.75),
            0 0 12px rgba(231, 76, 60, 0.9);
        }
      }
      /* Paused badge — muted amber pill, static (no pulse). Sits in the
         same slot as the EN COURS tag; only one appears at a time per
         tile because the run is either active or paused, never both. */
      .frontier-ext-paused-tag {
        display: inline-block;
        background: linear-gradient(90deg, #7a5a1a, #c08a2a, #7a5a1a);
        color: #fff2d0;
        font-size: 0.7rem;
        padding: 0.1rem 0.55rem;
        border-radius: 0.2rem;
        margin-left: 0.3rem;
        vertical-align: middle;
        letter-spacing: 0.05em;
        font-weight: bold;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        box-shadow:
          0 0 0 1px rgba(255, 200, 100, 0.4),
          0 0 4px rgba(192, 138, 42, 0.45);
        filter: hue-rotate(calc(var(--hue, 0deg) * -1));
      }
      /* When the whole tile is darkened (locked by unlock gate), the
         in-progress badge can't sit on a locked tile anyway — but keep
         the override defensive just in case the feature ever overlaps. */
      .frontier-ext-tile.locked .frontier-ext-inprogress-tag,
      .frontier-ext-tile.locked .frontier-ext-paused-tag {
        display: none;
      }
      /* Heat sticker — orange-red flame pill that rides next to the
         in-progress badge whenever the active run's upcoming round has a
         post-Gold difficulty multiplier ≥ 2. Disappears instantly when the
         streak ends (activeRun becomes null → tile rerenders without the
         tag). Counter-rotates the facility's hue like the medals so the
         orange stays orange across every tile colour.  */
      .frontier-ext-heat-tag {
        display: inline-block;
        margin-left: 0.3rem;
        padding: 0.1rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.78rem;
        font-weight: bold;
        letter-spacing: 0.03em;
        color: #fff2c0;
        background: linear-gradient(90deg, #c23616, #e67e22 55%, #c23616);
        text-shadow: 0 0 3px rgba(255, 120, 60, 0.75);
        box-shadow:
          0 0 0 1px rgba(255, 180, 80, 0.4),
          0 0 8px rgba(231, 126, 34, 0.55);
        filter: hue-rotate(calc(var(--hue, 0deg) * -1));
        vertical-align: middle;
        animation: frontierHeatPulse 1.6s ease-in-out infinite;
      }
      @keyframes frontierHeatPulse {
        0%, 100% {
          box-shadow:
            0 0 0 1px rgba(255, 180, 80, 0.4),
            0 0 6px rgba(231, 126, 34, 0.55);
        }
        50% {
          box-shadow:
            0 0 0 1px rgba(255, 220, 120, 0.6),
            0 0 14px rgba(231, 126, 34, 0.95);
        }
      }
      .frontier-ext-tile.locked .frontier-ext-heat-tag { display: none; }
      /* Stack the heat + run-state pills vertically so narrow-screen
         tiles don't push the brain sprite off the right edge. Heat on
         top, PAUSED / IN PROGRESS below. Reads as one block both on
         PC and mobile. */
      .frontier-ext-state-pills {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.35rem;
        vertical-align: middle;
        margin-left: 0.2rem;
      }
      .frontier-ext-state-pills .frontier-ext-inprogress-tag,
      .frontier-ext-state-pills .frontier-ext-paused-tag,
      .frontier-ext-state-pills .frontier-ext-heat-tag {
        margin-left: 0;
      }
      .frontier-ext-streak {
        background: #4a4a6a;
        color: white;
        padding: 0.1rem 0.5rem;
        border-radius: 0.2rem;
        font-size: 0.85rem;
        margin-right: 0.2rem;
        display: inline-block;
        line-height: 1.15;
        text-align: center;
        vertical-align: middle;
      }
      /* Medals: the tile wrapper applies filter:hue-rotate(var(--hue)) to
         tint the whole facility card. Silver/gold metallic gradients need
         their true colours preserved, so we counter-rotate here (same
         trick the brain sprite uses). The 1.25em font-size + gradient
         text clip creates a metallic "struck medal" feel, and the ::after
         pseudo-element runs a diagonal shine that loops every 3s. */
      .frontier-ext-symbol {
        display: inline-block;
        font-size: 1.25rem;
        line-height: 1;
        margin: 0 0.15rem;
        position: relative;
        filter: hue-rotate(calc(var(--hue, 0deg) * -1));
      }
      .frontier-ext-symbol.silver,
      .frontier-ext-symbol.gold {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        text-shadow: none;
      }
      .frontier-ext-symbol.silver {
        background-image: linear-gradient(135deg,
          #fafafa 0%, #e8e8e8 20%, #bcbcbc 45%,
          #a8a8a8 60%, #d6d6d6 80%, #fafafa 100%);
        drop-shadow: 0 0 3px rgba(200,200,200,0.8);
        filter: hue-rotate(calc(var(--hue, 0deg) * -1))
                drop-shadow(0 0 2px rgba(220,220,220,0.6));
      }
      .frontier-ext-symbol.gold {
        background-image: linear-gradient(135deg,
          #fff4c0 0%, #ffd966 18%, #e8a93a 40%,
          #c78a1a 58%, #f2c94c 78%, #fff4c0 100%);
        filter: hue-rotate(calc(var(--hue, 0deg) * -1))
                drop-shadow(0 0 3px rgba(255,200,70,0.7));
      }
      .frontier-ext-symbol.locked { color: #2a2a2a; }
      /* Medal reflection — stable top-left highlight (makes the disc read
         as 3D / convex) plus a faint bottom-right shadow. Replaces the
         old diagonal sweep animation that looked like a line moving
         across. The ::after is masked to a circle so the highlight hugs
         the medal silhouette. A slow breathing opacity on the halo adds
         life without the moving-line artefact. */
      .frontier-ext-symbol.silver::after,
      .frontier-ext-symbol.gold::after {
        content: "";
        position: absolute;
        inset: 8% 10% 42% 12%;
        pointer-events: none;
        border-radius: 50%;
        background: radial-gradient(ellipse at 35% 25%,
          rgba(255,255,255,0.95) 0%,
          rgba(255,255,255,0.55) 22%,
          rgba(255,255,255,0.15) 45%,
          transparent 72%);
        mix-blend-mode: screen;
        opacity: 0.85;
      }
      .frontier-ext-symbol.silver::before,
      .frontier-ext-symbol.gold::before {
        content: "";
        position: absolute;
        inset: 55% 14% 5% 18%;
        pointer-events: none;
        border-radius: 50%;
        background: radial-gradient(ellipse at 60% 75%,
          rgba(0,0,0,0.25) 0%,
          transparent 70%);
        pointer-events: none;
      }
      .frontier-ext-symbol.silver,
      .frontier-ext-symbol.gold {
        animation: frontierMedalBreathe 3.4s ease-in-out infinite;
      }
      .frontier-ext-symbol.gold { animation-delay: 0.9s; }
      @keyframes frontierMedalBreathe {
        0%, 100% {
          filter: hue-rotate(calc(var(--hue, 0deg) * -1))
                  drop-shadow(0 0 2px rgba(255,255,255,0.35));
        }
        50% {
          filter: hue-rotate(calc(var(--hue, 0deg) * -1))
                  drop-shadow(0 0 5px rgba(255,255,255,0.75));
        }
      }
      /* Right-click help rule grid inside the tooltip. Colours picked to
         contrast with the game's beige/tan tooltipBottom background (light1)
         — bright orange on beige was unreadable, dark brown/red works. */
      .frontier-ext-help-rules {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.45rem 1rem;
        padding: 0.7rem 1rem;
        text-align: left;
        font-size: 0.95rem;
        color: var(--dark1, #2a1a0a);
      }
      .frontier-ext-help-rules .label {
        color: #7a2e1a;
        font-weight: bold;
        white-space: nowrap;
      }
      .frontier-ext-help-rules .value {
        color: var(--dark1, #2a1a0a);
      }
      .frontier-ext-help-footer {
        padding: 0.4rem 1rem 0.6rem;
        opacity: 0.75;
        font-size: 0.85rem;
        text-align: center;
        color: var(--dark1, #2a1a0a);
        font-style: italic;
      }
      /* Tooltip header — compact SVG icon. */
      .frontier-ext-tooltip-icon {
        display: inline-block;
        vertical-align: middle;
      }
      .frontier-ext-tooltip-icon svg {
        width: 3rem;
        height: 3rem;
        color: var(--light2, #fff);
        opacity: 0.9;
      }
      /* Brain sprite centred above the rules grid in tooltipBottom. */
      .frontier-ext-help-brain-wrap {
        display: flex;
        justify-content: center;
        padding: 0.6rem 0 0.3rem;
      }
      .frontier-ext-help-brain {
        max-height: 7rem;
        image-rendering: pixelated;
        filter: drop-shadow(0 0 4px rgba(0,0,0,0.5));
      }
      /* Locked state — applied when the player hasn't beaten Pokemon
         Professor Oak in VS yet. Same dim pattern as the shop's locked
         categories (explore.js:1674). */
      .frontier-ext-tile.locked {
        filter: hue-rotate(var(--hue, 0deg)) brightness(0.35) grayscale(0.3);
        cursor: not-allowed;
      }
      .frontier-ext-tile.locked img.frontier-ext-brain-icon {
        filter: hue-rotate(calc(var(--hue, 0deg) * -1)) brightness(2.8) grayscale(-0.3);
        /* counter-rotate to keep original sprite colours but slightly
           re-brighten since the parent darkened everything. */
      }
      .frontier-ext-lock-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3rem;
        height: 3rem;
        color: #ffd700;
        opacity: 0.9;
        z-index: 5;
        filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.8));
      }
      /* Section divider between vanilla facilities (bound by division rules
         shown in the header banner) and our secret section (Open Level,
         Gen 3 canonical rules, no division restriction). */
      .frontier-ext-divider {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin: 1rem 0 0.4rem;
        padding: 0.4rem 0.8rem;
        background: linear-gradient(90deg,
          rgba(157, 78, 221, 0.15),
          rgba(157, 78, 221, 0.35) 50%,
          rgba(157, 78, 221, 0.15));
        border-top: 2px dashed rgba(207, 168, 250, 0.7);
        border-bottom: 2px dashed rgba(207, 168, 250, 0.7);
        color: #fff;
        text-align: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      .frontier-ext-divider-title {
        font-size: 1.1rem;
        font-weight: bold;
        letter-spacing: 0.05em;
        color: #e0c3ff;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
      }
      .frontier-ext-divider-sub {
        font-size: 0.85rem;
        opacity: 0.85;
        font-style: italic;
      }
      /* Run-action buttons inside the modal bottom. */
      .frontier-ext-run-actions {
        display: flex;
        gap: 0.5rem;
        padding: 0.6rem 0.8rem 0.8rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .frontier-ext-action-btn {
        border: none;
        border-radius: 0.3rem;
        padding: 0.5rem 1rem;
        font-size: 0.95rem;
        cursor: pointer;
        background: var(--dark1, #2a1a0a);
        color: var(--light1, #f5e6c8);
        transition: transform 0.1s, filter 0.15s;
        font-weight: bold;
      }
      .frontier-ext-action-btn:hover { filter: brightness(1.15); transform: translateY(-1px); }
      .frontier-ext-action-btn:active { transform: translateY(0); }
      .frontier-ext-action-btn.primary {
        background: #6ab04c;
        color: white;
      }
      .frontier-ext-action-btn.danger {
        background: #c0392b;
        color: white;
      }
      /* Dôme 2-of-3 pick modal */
      .frontier-ext-dome-teams {
        display: flex;
        gap: 1rem;
        padding: 0.6rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .frontier-ext-dome-side {
        flex: 1 1 220px;
        min-width: 200px;
      }
      .frontier-ext-dome-label {
        font-weight: bold;
        font-size: 0.9rem;
        color: #ffc857;
        text-align: center;
        margin-bottom: 0.3rem;
      }
      .frontier-ext-dome-slots {
        display: flex;
        gap: 0.4rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .frontier-ext-dome-card {
        background: rgba(0,0,0,0.25);
        border: 2px solid transparent;
        border-radius: 0.4rem;
        padding: 0.3rem;
        width: 5rem;
        text-align: center;
        font-size: 0.75rem;
        cursor: pointer;
        transition: transform 0.1s, border-color 0.15s;
        user-select: none;
      }
      .frontier-ext-dome-card img {
        width: 3.5rem;
        height: 3.5rem;
        image-rendering: pixelated;
      }
      .frontier-ext-dome-card.player:hover {
        transform: translateY(-2px);
        border-color: rgba(255,255,255,0.5);
      }
      .frontier-ext-dome-card.player.selected {
        border-color: #6ab04c;
        background: rgba(106,176,76,0.2);
      }
      .frontier-ext-dome-card.opponent {
        cursor: default;
        border-color: rgba(192,57,43,0.5);
      }
      /* ── Factory rental selection grid ───────────────────────────────── */
      .frontier-ext-factory-subtitle {
        padding: 0.55rem 1rem 0.35rem;
        text-align: center;
        font-style: italic;
        font-size: 0.9rem;
        color: #e9d4a8;
        background: rgba(255, 230, 180, 0.06);
        border-radius: 0.3rem;
        margin: 0 0.6rem 0.3rem;
        border: 1px solid rgba(255, 230, 180, 0.12);
      }
      .frontier-ext-factory-grid {
        display: grid;
        /* 2 columns → 6 cards fit in 3 rows, giving each card ~50% more
           horizontal space so IV stars and move names stop wrapping. */
        grid-template-columns: repeat(2, 1fr);
        gap: 0.55rem;
        padding: 0.4rem 0.6rem;
      }
      .frontier-ext-factory-card {
        position: relative;
        background: linear-gradient(135deg, rgba(30, 18, 8, 0.85), rgba(18, 10, 5, 0.65));
        border: 2px solid rgba(255, 230, 180, 0.12);
        border-radius: 0.55rem;
        padding: 0.6rem 0.7rem 0.65rem;
        cursor: pointer;
        transition: transform 0.12s ease-out, border-color 0.15s, box-shadow 0.15s, background 0.15s;
        user-select: none;
        color: #f5e6c8;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);
      }
      .frontier-ext-factory-card:hover {
        transform: translateY(-2px);
        border-color: rgba(255, 230, 180, 0.3);
        background: linear-gradient(135deg, rgba(50, 30, 15, 0.9), rgba(30, 18, 8, 0.7));
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.55);
      }
      .frontier-ext-factory-card.selected {
        border-color: #6ab04c;
        background: linear-gradient(135deg, rgba(50, 80, 40, 0.55), rgba(20, 40, 18, 0.55));
        box-shadow:
          0 3px 10px rgba(0, 0, 0, 0.55),
          0 0 14px rgba(106, 176, 76, 0.4),
          inset 0 0 0 1px rgba(106, 176, 76, 0.25);
      }
      /* Card header: sprite + title block + pick badge */
      .frontier-ext-factory-card .card-header {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        padding-bottom: 0.35rem;
        border-bottom: 1px solid rgba(255, 230, 180, 0.12);
      }
      .frontier-ext-factory-card .sprite {
        width: 3.6rem;
        height: 3.6rem;
        flex-shrink: 0;
        image-rendering: pixelated;
      }
      .frontier-ext-factory-card .title-block {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }
      .frontier-ext-factory-card .name {
        font-weight: bold;
        font-size: 1.02rem;
        color: #ffeec9;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.1;
      }
      .frontier-ext-factory-card .tags {
        display: flex;
        gap: 0.3rem;
        flex-wrap: wrap;
      }
      .frontier-ext-factory-card .tag-nature {
        background: rgba(130, 180, 90, 0.22);
        color: #cfe9a0;
        padding: 0.08rem 0.45rem;
        border-radius: 0.25rem;
        font-size: 0.72rem;
        font-style: italic;
        border: 1px solid rgba(130, 180, 90, 0.3);
      }
      .frontier-ext-factory-card .tag-ability {
        background: rgba(255, 200, 90, 0.18);
        color: #ffd17a;
        padding: 0.08rem 0.45rem;
        border-radius: 0.25rem;
        font-size: 0.72rem;
        font-weight: bold;
        border: 1px solid rgba(255, 200, 90, 0.3);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 8rem;
      }
      /* IV bar grid */
      .frontier-ext-factory-card .ivs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.22rem 0.55rem;
      }
      .frontier-ext-factory-card .iv-row {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.7rem;
      }
      .frontier-ext-factory-card .iv-label {
        min-width: 1.7rem;
        font-weight: bold;
        opacity: 0.7;
        letter-spacing: 0.02em;
      }
      .frontier-ext-factory-card .iv-bar {
        flex: 1;
        height: 0.4rem;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 0.2rem;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.25);
      }
      .frontier-ext-factory-card .iv-bar-fill {
        height: 100%;
        border-radius: inherit;
        transition: width 0.2s;
      }
      .frontier-ext-factory-card .iv-bar-fill.low  { background: linear-gradient(90deg, #c0392b, #e57070); }
      .frontier-ext-factory-card .iv-bar-fill.mid  { background: linear-gradient(90deg, #d89040, #f1c868); }
      .frontier-ext-factory-card .iv-bar-fill.high { background: linear-gradient(90deg, #4ac060, #7ae090); }
      .frontier-ext-factory-card .iv-value {
        font-weight: bold;
        color: #ffe080;
        font-size: 0.72rem;
        min-width: 0.8rem;
        text-align: right;
      }
      /* Move chips — type-coloured left border */
      .frontier-ext-factory-card .moves {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.28rem;
      }
      .frontier-ext-factory-card .moves .move {
        font-size: 0.74rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        background: rgba(255, 255, 255, 0.06);
        border-left: 4px solid var(--move-type, #888);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #f0e4c6;
        font-weight: 500;
      }
      /* Selection badge — round green pill at header's right edge */
      .frontier-ext-factory-card .pick-badge {
        width: 1.6rem;
        height: 1.6rem;
        background: #6ab04c;
        border: 2px solid #2a1a0a;
        border-radius: 50%;
        color: white;
        font-weight: bold;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        flex-shrink: 0;
      }
      .frontier-ext-factory-counter {
        text-align: center;
        padding: 0.35rem 0.6rem 0.1rem;
        font-size: 0.9rem;
        font-weight: bold;
        color: #ffd700;
      }
      /* Expand the tooltip container while the Factory rental modal is
         open so the 6-card 2×3 grid + counter + action row all fit
         without scrolling. The class is added by setFactoryModalSizing
         (true) from openFactoryRentalSelection and cleared on confirm
         / abandon / cleanup. */
      #tooltipBox.frontier-ext-factory-open {
        max-height: 94vh !important;
        max-width: min(60rem, 96vw) !important;
        width: auto !important;
      }
      #tooltipBox.frontier-ext-factory-open #tooltipMid {
        max-height: 80vh;
        overflow-y: auto;
      }
      /* Factory modals (rental selection + post-combat swap) hide the
         × entirely. With the Rest/Resume system in place there's no
         need for an escape hatch — the only valid exits are the
         in-modal actions (Confirmer / Passer / Abandonner). */
      #tooltipBackground.frontier-ext-factory-open #tooltipClose,
      #tooltipBackground:has(#tooltipBox.frontier-ext-factory-open) #tooltipClose {
        display: none !important;
      }
      /* Active-run lock: when the facility preview or combat-launch
         modal is open with an ACTIVE (locked) run, the only valid exits
         are the in-modal buttons (Continuer / Repos / Abandonner on
         preview, Lancer / Abandonner on combat launch). The default
         close × would silently dismiss the tooltip, leaving the run
         active but the UI state confused. Hide the close button so the
         player is forced to commit. Paused runs KEEP the close button
         because the run is already parked. */
      #tooltipBackground.frontier-ext-run-lock-open #tooltipClose,
      #tooltipBackground:has(#tooltipBox.frontier-ext-run-lock-open) #tooltipClose {
        display: none !important;
      }
      /* ── Battle Pyramid — dungeon map ──────────────────────────────── */
      .frontier-ext-pyr-grid {
        display: grid;
        gap: 2px;
        padding: 0.5rem;
        background: #1a0f08;
        border: 2px solid #5a3820;
        border-radius: 0.4rem;
        margin: 0.4rem auto;
        width: fit-content;
        box-shadow:
          0 3px 10px rgba(0, 0, 0, 0.6),
          inset 0 0 0 1px rgba(255, 200, 120, 0.15);
      }
      .pyr-tile {
        position: relative;
        width: 3rem;
        height: 3rem;
        box-sizing: border-box;
        overflow: visible;
      }
      .pyr-tile svg {
        width: 100%;
        height: 100%;
        display: block;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
      }
      .pyr-tile.unrevealed {
        opacity: 0.88;
      }
      .pyr-tile.clickable {
        cursor: pointer;
        outline: 2px solid rgba(255, 230, 120, 0.6);
        outline-offset: -2px;
        z-index: 2;
      }
      .pyr-tile.clickable:hover {
        outline-color: rgba(255, 230, 120, 1);
        filter: brightness(1.2);
      }
      .pyr-tile.wall {
        cursor: not-allowed;
      }
      .pyr-tile.stairs {
        /* Subtle pulsing glow on the exit tile so the player sees it. */
        animation: pyrStairsGlow 1.8s ease-in-out infinite;
      }
      @keyframes pyrStairsGlow {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.25) drop-shadow(0 0 3px rgba(255, 220, 120, 0.8)); }
      }
      .pyr-tile.player-here .pyr-char-mount {
        position: absolute;
        inset: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
      }
      .pyr-tile.player-here .pyr-char-mount svg {
        width: 80%;
        height: 80%;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8));
        animation: pyrCharBob 0.6s ease-in-out infinite;
      }
      @keyframes pyrCharBob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-1px); }
      }
      /* Walk animation: alternating left/right legs every 250ms */
      .pyr-tile.player-here .pyr-leg-l {
        animation: pyrLegL 0.5s ease-in-out infinite;
      }
      .pyr-tile.player-here .pyr-leg-r {
        animation: pyrLegR 0.5s ease-in-out infinite;
      }
      @keyframes pyrLegL {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-1px); }
      }
      @keyframes pyrLegR {
        0%, 100% { transform: translateY(-1px); }
        50% { transform: translateY(0); }
      }
      .pyr-hint {
        text-align: center;
        padding: 0.3rem 0.8rem;
        font-style: italic;
        font-size: 0.88rem;
        opacity: 0.85;
        color: var(--light2, #fff);
      }
      .pyr-hint.boss {
        color: #ffd700;
        font-weight: bold;
        font-style: normal;
        text-shadow: 0 0 4px rgba(255, 100, 100, 0.5);
      }
      /* Theme header strip at the top of the Pyramid floor map. */
      .frontier-ext-pyr-theme-bar {
        text-align: center;
        padding: 0.35rem 0.8rem;
        font-size: 0.88rem;
        color: #ffd98a;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 0.3rem;
        margin: 0 0.5rem 0.35rem;
        letter-spacing: 0.02em;
      }
      .frontier-ext-pyr-theme-bar strong { color: #fff; font-weight: 600; }
      /* Side-action row — Psychic NPC + Combat Bag buttons. */
      .frontier-ext-pyr-side-actions {
        display: flex;
        gap: 0.4rem;
        justify-content: center;
        padding: 0.4rem 0.6rem 0.2rem;
        flex-wrap: wrap;
      }
      .frontier-ext-pyr-side-actions .frontier-ext-action-btn {
        font-size: 0.82rem;
        padding: 0.3rem 0.6rem;
      }
      /* Item-found modal content. */
      .frontier-ext-pyr-item-found {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;
        padding: 0.8rem 0.6rem;
      }
      .frontier-ext-pyr-item-found .headline {
        font-weight: bold;
        color: #ffd98a;
        font-size: 1rem;
      }
      .frontier-ext-pyr-item-found .label {
        font-size: 1.1rem;
        color: #fff;
        font-weight: 600;
      }
      .frontier-ext-pyr-item-found .bag-count {
        font-size: 0.8rem;
        opacity: 0.7;
      }
      .frontier-ext-pyr-item-found .bag-full {
        color: #ff9090;
        font-size: 0.85rem;
        font-weight: bold;
      }
      .frontier-ext-pyr-item-placeholder {
        font-size: 2rem;
        line-height: 1;
      }
      /* Psychic NPC dialog. */
      .frontier-ext-pyr-kinesiste {
        padding: 0.8rem 0.6rem;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        color: #f2d999;
      }
      .frontier-ext-pyr-kinesiste .intro {
        font-style: italic;
        text-align: center;
        color: #e0b0ff;
      }
      .frontier-ext-pyr-kinesiste .theme-line {
        display: flex;
        justify-content: space-between;
        padding: 0.25rem 0.5rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
      }
      .frontier-ext-pyr-kinesiste .theme-line.next {
        background: rgba(80, 40, 120, 0.35);
        color: #fff;
      }
      .frontier-ext-pyr-kinesiste .lbl { opacity: 0.75; font-size: 0.88rem; }
      .frontier-ext-pyr-kinesiste .val { font-weight: bold; }
      /* Pre-run Psychic NPC line — sits in the facility preview above
         the action buttons. Shown ONLY for the Pyramid at registration
         / resume / round-cleared transitions, never mid-run. */
      .frontier-ext-pyr-kinesiste-preview {
        margin: 0.35rem 0.5rem;
        padding: 0.35rem 0.55rem;
        background: linear-gradient(180deg, rgba(80, 40, 120, 0.35), rgba(50, 20, 80, 0.5));
        border-radius: 0.3rem;
        text-align: center;
        color: #f2d999;
      }
      .frontier-ext-pyr-kinesiste-preview .intro {
        font-style: italic;
        font-size: 0.85rem;
        color: #e0b0ff;
        margin-bottom: 0.2rem;
      }
      .frontier-ext-pyr-kinesiste-preview .theme {
        font-size: 0.92rem;
      }
      .frontier-ext-pyr-kinesiste-preview .theme strong { color: #fff; }
      /* Combat Bag viewer. */
      .frontier-ext-pyr-bag {
        padding: 0.6rem;
        color: #f2d999;
      }
      .frontier-ext-pyr-bag .cap {
        text-align: center;
        font-size: 0.85rem;
        opacity: 0.8;
        margin-bottom: 0.35rem;
      }
      .frontier-ext-pyr-bag-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.18rem;
      }
      .frontier-ext-pyr-bag-row {
        display: grid;
        grid-template-columns: 2rem 1fr auto;
        gap: 0.4rem;
        align-items: center;
        padding: 0.2rem 0.4rem;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        font-size: 0.88rem;
      }
      .frontier-ext-pyr-bag-row .icon { text-align: center; }
      .frontier-ext-pyr-bag-row .count { opacity: 0.8; font-weight: bold; }
      .frontier-ext-pyr-bag-row.empty { text-align: center; opacity: 0.6; grid-template-columns: 1fr; }
      .frontier-ext-pyr-bag-row .frontier-ext-action-btn.small {
        padding: 0.2rem 0.5rem;
        font-size: 0.75rem;
      }
      .frontier-ext-pyr-bag-row .frontier-ext-action-btn.small.danger {
        background: linear-gradient(180deg, #802020 0%, #501010 100%);
        border-color: rgba(255, 120, 120, 0.5);
      }
      .frontier-ext-pyr-bag-row .held-pill {
        font-size: 0.72rem;
        opacity: 0.6;
        font-style: italic;
        padding: 0.1rem 0.35rem;
      }
      /* Layout adjustment: when a use-button (or held-pill) is present,
         the row grows to 4 columns. */
      .frontier-ext-pyr-bag-row { grid-template-columns: 2rem 1fr auto auto; }
      /* Items-held error modal (Pyramid registration refusal). */
      .frontier-ext-pyr-items-error {
        padding: 0.8rem;
        text-align: center;
        color: #ffcccc;
        font-size: 0.9rem;
        line-height: 1.4;
      }
      /* Target picker for "Utiliser" consumables. 3-card row of slot
         buttons; disabled cards dim + cursor not-allowed. */
      .frontier-ext-pyr-use-picker {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.4rem;
        padding: 0.6rem 0.6rem 0.3rem;
      }
      .frontier-ext-pyr-target-card {
        background: linear-gradient(180deg, #3a2a1a 0%, #22160c 100%);
        color: #f2d999;
        border: 1px solid rgba(255, 210, 130, 0.35);
        border-radius: 0.4rem;
        padding: 0.5rem 0.4rem;
        font-size: 0.82rem;
        text-align: center;
        cursor: pointer;
        transition: background 0.15s, transform 0.1s, border-color 0.15s;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.15rem;
      }
      .frontier-ext-pyr-target-card:hover:not([disabled]) {
        background: linear-gradient(180deg, #4a3620 0%, #2c1c10 100%);
        border-color: rgba(255, 210, 130, 0.7);
      }
      .frontier-ext-pyr-target-card:active:not([disabled]) { transform: translateY(1px); }
      .frontier-ext-pyr-target-card.invalid,
      .frontier-ext-pyr-target-card[disabled] {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .frontier-ext-pyr-target-card .name { font-weight: bold; color: #fff; }
      .frontier-ext-pyr-target-card .hp { opacity: 0.9; }
      .frontier-ext-pyr-target-card .status {
        display: inline-block;
        background: rgba(180, 80, 180, 0.6);
        padding: 0.05rem 0.35rem;
        border-radius: 0.2rem;
        font-size: 0.7rem;
      }
      .frontier-ext-pyr-target-card .invalid-label {
        font-size: 0.7rem;
        font-style: italic;
        opacity: 0.7;
      }
      .frontier-ext-pyr-use-picker .no-target {
        grid-column: 1 / -1;
        text-align: center;
        opacity: 0.7;
        font-style: italic;
        padding: 0.4rem;
      }
      .frontier-ext-pyr-target-card.equipped-here {
        border-color: #ffd700;
        background: linear-gradient(180deg, #4a3a18 0%, #32220c 100%);
      }
      .frontier-ext-pyr-target-card .equipped {
        font-size: 0.72rem;
        opacity: 0.8;
        font-style: italic;
      }
      .frontier-ext-pyr-target-card .here-pill {
        font-size: 0.7rem;
        color: #ffd700;
        font-weight: bold;
      }
      .frontier-ext-pyr-bag-row .held-equipped-badge {
        display: inline-block;
        margin-left: 0.15rem;
        color: #ffd700;
        font-size: 0.85rem;
      }
      .frontier-ext-pyr-toast {
        position: absolute;
        bottom: 0.6rem;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.82);
        color: #ffd98a;
        padding: 0.3rem 0.6rem;
        border-radius: 0.25rem;
        font-size: 0.85rem;
        pointer-events: none;
        border: 1px solid rgba(255, 210, 130, 0.3);
      }
      /* Pyramid modal gets the same size override as Factory. */
      #tooltipBox.frontier-ext-pyramid-open {
        max-height: 92vh !important;
        max-width: min(30rem, 94vw) !important;
        width: auto !important;
      }
      #tooltipBox.frontier-ext-pyramid-open #tooltipMid {
        max-height: 80vh;
        overflow-y: auto;
      }
      /* Swap modal sections — opponent (red tint) + yours (green tint). */
      .frontier-ext-factory-swap-section {
        margin: 0.35rem 0 0.6rem;
      }
      .frontier-ext-factory-swap-section .section-label {
        padding: 0.3rem 0.8rem;
        font-weight: bold;
        font-size: 0.85rem;
        letter-spacing: 0.04em;
        margin: 0 0.6rem;
        border-radius: 0.3rem 0.3rem 0 0;
        text-transform: uppercase;
      }
      .frontier-ext-factory-swap-section .section-label.opponent {
        background: linear-gradient(90deg, rgba(192, 57, 43, 0.35), rgba(140, 40, 30, 0.25));
        color: #ffc8c0;
        border-left: 3px solid #c0392b;
      }
      .frontier-ext-factory-swap-section .section-label.yours {
        background: linear-gradient(90deg, rgba(106, 176, 76, 0.35), rgba(70, 130, 50, 0.25));
        color: #caf0b8;
        border-left: 3px solid #6ab04c;
      }
      /* Tint the cards so players see side-at-a-glance */
      .frontier-ext-factory-card.swap-take {
        border-color: rgba(192, 57, 43, 0.3);
      }
      .frontier-ext-factory-card.swap-take:hover {
        border-color: rgba(192, 57, 43, 0.6);
      }
      .frontier-ext-factory-card.swap-take.selected {
        border-color: #e74c3c;
        background: linear-gradient(135deg, rgba(120, 40, 30, 0.55), rgba(70, 20, 15, 0.55));
        box-shadow:
          0 3px 10px rgba(0, 0, 0, 0.55),
          0 0 14px rgba(231, 76, 60, 0.4),
          inset 0 0 0 1px rgba(231, 76, 60, 0.25);
      }
      .frontier-ext-factory-card.swap-give {
        border-color: rgba(106, 176, 76, 0.3);
      }
      .frontier-ext-factory-card.swap-give:hover {
        border-color: rgba(106, 176, 76, 0.6);
      }
      /* Inline actions row inside the rental modal — placed in tooltipMid
         instead of tooltipBottom so the 6-card grid can't hide it. */
      .frontier-ext-factory-actions {
        display: flex;
        justify-content: center;
        gap: 0.6rem;
        padding: 0.5rem 0.6rem 0.7rem;
        flex-wrap: wrap;
      }
      /* Visual disabled state for pseudo-disabled action buttons.
         We use a class instead of the native disabled attribute so the
         click handler can short-circuit without the browser eating
         pointer events on children. */
      .frontier-ext-action-btn.disabled {
        opacity: 0.45;
        cursor: not-allowed;
        filter: grayscale(0.5);
      }
      .frontier-ext-action-btn.disabled:hover {
        filter: grayscale(0.5);
        transform: none;
      }
      /* ── Battle Pike ─────────────────────────────────
         Curtain-door picker, status/heal modals, room/HP banners. */
      .frontier-ext-pike-banner {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 0.6rem;
        padding: 0.5rem 0.8rem;
        background: linear-gradient(90deg,
          rgba(70, 10, 10, 0.55),
          rgba(140, 20, 20, 0.55),
          rgba(70, 10, 10, 0.55));
        border-radius: 0.3rem;
        margin: 0.3rem 0.6rem;
        color: #ffdcdc;
        font-size: 0.9rem;
        flex-wrap: wrap;
      }
      .frontier-ext-pike-banner strong {
        color: #ffd700;
        font-size: 1.05rem;
        margin: 0 0.2rem;
      }
      .frontier-ext-pike-banner .boss-flag {
        color: #ff6b6b;
        font-weight: bold;
        text-shadow: 0 0 4px rgba(255, 50, 50, 0.6);
      }
      .frontier-ext-pike-hp-summary {
        display: flex;
        gap: 0.35rem;
        padding: 0.3rem 0.6rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .frontier-ext-pike-hp-pill {
        background: rgba(0,0,0,0.45);
        border: 1px solid rgba(255,255,255,0.2);
        padding: 0.15rem 0.5rem;
        border-radius: 0.3rem;
        font-size: 0.75rem;
        color: #fff;
      }
      .frontier-ext-pike-hp-pill .bar {
        display: inline-block;
        width: 2.8rem;
        height: 0.35rem;
        background: rgba(255,255,255,0.15);
        border-radius: 0.15rem;
        margin-left: 0.3rem;
        vertical-align: middle;
        overflow: hidden;
      }
      .frontier-ext-pike-hp-pill .bar > span {
        display: block;
        height: 100%;
        background: linear-gradient(90deg, #6ab04c, #4ade80);
      }
      .frontier-ext-pike-hp-pill.low .bar > span {
        background: linear-gradient(90deg, #c0392b, #e74c3c);
      }
      .frontier-ext-pike-hp-pill.mid .bar > span {
        background: linear-gradient(90deg, #e67e22, #f1c40f);
      }
      .frontier-ext-pike-hp-pill .st {
        display: inline-block;
        margin-left: 0.3rem;
        padding: 0 0.25rem;
        border-radius: 0.15rem;
        font-size: 0.7rem;
      }
      .frontier-ext-pike-hp-pill .st.poisoned { background: #8e44ad; color: #fff; }
      .frontier-ext-pike-hp-pill .st.burn { background: #c0392b; color: #fff; }
      .frontier-ext-pike-hp-pill .st.paralysis { background: #f39c12; color: #000; }
      /* Heal-on-full feedback: bright 3-pulse glow on pills that were
         just touched by a heal door while already at 100% HP. Tells
         the player the heal IS applied (not a bug) — just redundant.
         Bright green-gold shadow + background tint so it reads on the
         dark Pike modal background. */
      .frontier-ext-pike-hp-pill.heal-full-flash {
        animation: frontierPikeHealFullFlash 2.4s ease-out 1;
        border-color: rgba(180, 255, 150, 1);
      }
      @keyframes frontierPikeHealFullFlash {
        0%, 100% {
          background: rgba(0, 0, 0, 0.45);
          box-shadow:
            0 0 0 0 rgba(180, 255, 150, 0),
            inset 0 0 0 0 rgba(180, 255, 150, 0);
        }
        15%, 50%, 85% {
          background: rgba(90, 200, 100, 0.55);
          box-shadow:
            0 0 22px 6px rgba(180, 255, 150, 0.95),
            inset 0 0 14px rgba(255, 255, 200, 0.75);
        }
        30%, 65% {
          background: rgba(0, 0, 0, 0.45);
          box-shadow:
            0 0 8px 2px rgba(180, 255, 150, 0.35),
            inset 0 0 6px rgba(180, 255, 150, 0.25);
        }
      }

      .frontier-ext-pike-doors {
        display: flex;
        gap: 1.1rem;
        padding: 0.8rem 0.6rem 0.4rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      /* Receptionist hint — sits between the curtain row and the abandon
         button. Before the button is clicked, it's a compact "ask"
         prompt; after, it shows the vague clue text above the revealed
         door number. */
      .frontier-ext-pike-hint {
        display: flex;
        justify-content: center;
        padding: 0.4rem 0.8rem 0.2rem;
      }
      .frontier-ext-pike-hint-btn {
        background: linear-gradient(180deg, #3a2a1a 0%, #22160c 100%);
        color: #f2d999;
        border: 1px solid rgba(255, 210, 130, 0.35);
        border-radius: 0.4rem;
        padding: 0.35rem 0.7rem;
        font-size: 0.85rem;
        cursor: pointer;
        transition: background 0.15s, border-color 0.15s, transform 0.1s;
      }
      .frontier-ext-pike-hint-btn:hover {
        background: linear-gradient(180deg, #4a3620 0%, #2c1c10 100%);
        border-color: rgba(255, 210, 130, 0.6);
      }
      .frontier-ext-pike-hint-btn:active { transform: translateY(1px); }
      .frontier-ext-pike-hint.revealed {
        flex-direction: column;
        align-items: center;
        gap: 0.2rem;
        margin: 0.3rem 0.8rem;
        padding: 0.45rem 0.8rem;
        background: rgba(0, 0, 0, 0.55);
        border: 1px solid rgba(255, 210, 130, 0.35);
        border-radius: 0.35rem;
        color: #fff4d8;
        font-style: italic;
        font-size: 0.95rem;
        text-align: center;
        line-height: 1.35;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
      }
      .frontier-ext-pike-hint.revealed .intro {
        display: block;
        color: #ffd87a;
        font-weight: bold;
        font-size: 0.9rem;
        font-style: normal;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }
      .frontier-ext-pike-hint.revealed .text {
        opacity: 1;
        color: #fff4d8;
      }
      .frontier-ext-pike-door {
        position: relative;
        width: 6.2rem;
        height: 10rem;
        cursor: pointer;
        border-radius: 0.35rem;
        overflow: hidden;
        transition: transform 0.15s, filter 0.2s, box-shadow 0.2s;
        filter: drop-shadow(0 2px 6px rgba(0,0,0,0.6));
        user-select: none;
      }
      .frontier-ext-pike-door:hover {
        transform: translateY(-4px) scale(1.04);
        filter: drop-shadow(0 4px 10px rgba(255, 80, 80, 0.5)) brightness(1.08);
      }
      .frontier-ext-pike-door:active {
        transform: translateY(-1px) scale(1.00);
      }
      .frontier-ext-pike-door svg {
        width: 100%;
        height: 100%;
        display: block;
      }
      .frontier-ext-pike-door .door-number {
        position: absolute;
        top: 0.4rem;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.75);
        color: #ffd700;
        font-weight: bold;
        padding: 0.15rem 0.55rem;
        border-radius: 0.25rem;
        font-size: 0.85rem;
        letter-spacing: 0.05em;
        pointer-events: none;
        border: 1px solid rgba(255, 215, 0, 0.5);
      }
      .frontier-ext-pike-door.revealed {
        animation: pikeCurtainSway 0.5s ease-out;
      }
      @keyframes pikeCurtainSway {
        0%   { transform: scaleY(1) translateY(0); }
        40%  { transform: scaleY(0.96) translateY(-2px); }
        100% { transform: scaleY(1) translateY(0); }
      }
      .frontier-ext-pike-door.locked {
        cursor: not-allowed;
        filter: grayscale(0.6) brightness(0.5);
      }

      .frontier-ext-pike-event {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 0.8rem;
      }
      .frontier-ext-pike-event .icon {
        font-size: 2.4rem;
      }
      .frontier-ext-pike-event .headline {
        font-weight: bold;
        font-size: 1.1rem;
        color: #ffdcdc;
      }
      .frontier-ext-pike-event.heal .icon { color: #4ade80; }
      .frontier-ext-pike-event.heal .headline { color: #baf5c9; }
      .frontier-ext-pike-event.trap .icon { color: #e74c3c; }
      .frontier-ext-pike-event.trap .headline { color: #ffb3b3; }
      /* Hostile-Pokémon sprite inside the status_species event card.
         Scaled 3× and pixel-rendered so the Gen-1-style sprites look
         crisp at the modal size; subtle red glow aligns with the
         "attack" framing of the event. */
      .frontier-ext-pike-hostile-sprite {
        width: auto;
        height: 4.2rem;
        image-rendering: pixelated;
        filter: drop-shadow(0 0 8px rgba(231, 76, 60, 0.65));
      }
      .frontier-ext-pike-event .body {
        text-align: center;
        font-size: 0.9rem;
        opacity: 0.9;
        color: var(--light2, #fff);
        max-width: 22rem;
      }
      /* ── Round-cleared modal (all facilities) ──────────────────────────── */
      .frontier-ext-round-header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.6rem;
        padding: 0.6rem 0;
      }
      .frontier-ext-round-header .trophy {
        font-size: 3.2rem;
        filter: drop-shadow(0 0 6px rgba(255, 215, 0, 0.55));
      }
      .frontier-ext-round-header .facility-icon svg {
        width: 4rem;
        height: 4rem;
        color: #ffd700;
        opacity: 0.95;
      }
      .frontier-ext-round-cleared {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 0.6rem 0.9rem 0.3rem;
        text-align: center;
      }
      .frontier-ext-round-cleared .celebration {
        font-size: 1.15rem;
        color: var(--light2, #fff);
      }
      .frontier-ext-round-cleared .celebration strong {
        color: #ffd700;
        font-size: 1.35rem;
        margin: 0 0.2rem;
        text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
      }
      .frontier-ext-round-cleared .stats {
        display: flex;
        gap: 1.2rem;
        font-size: 0.9rem;
        opacity: 0.9;
      }
      .frontier-ext-round-cleared .stats strong {
        color: #ffd700;
        margin-left: 0.25rem;
      }
      .frontier-ext-round-next {
        margin-top: 0.4rem;
        padding: 0.35rem 0.7rem;
        border-radius: 0.3rem;
        font-size: 0.92rem;
        background: rgba(255, 255, 255, 0.08);
      }
      .frontier-ext-round-next.boss {
        color: #ffd700;
        background: linear-gradient(90deg,
          rgba(200, 40, 40, 0.35),
          rgba(255, 140, 0, 0.35),
          rgba(200, 40, 40, 0.35));
        font-weight: bold;
        text-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
      }
      .frontier-ext-round-award {
        padding: 0.3rem 0.8rem;
        border-radius: 0.3rem;
        font-weight: bold;
        animation: roundAwardPulse 1.6s ease-in-out infinite;
      }
      .frontier-ext-round-award.silver {
        color: #e8e8e8;
        background: linear-gradient(90deg, rgba(160,160,160,0.15), rgba(220,220,220,0.35), rgba(160,160,160,0.15));
        text-shadow: 0 0 4px rgba(200, 200, 200, 0.6);
      }
      .frontier-ext-round-award.gold {
        color: #fff2a6;
        background: linear-gradient(90deg, rgba(184,134,11,0.2), rgba(255,215,0,0.45), rgba(184,134,11,0.2));
        text-shadow: 0 0 6px rgba(255, 215, 0, 0.65);
      }
      @keyframes roundAwardPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.04); }
      }
      .frontier-ext-round-hint {
        padding: 0.4rem 1rem 0.6rem;
        font-style: italic;
        text-align: center;
        font-size: 0.82rem;
        opacity: 0.75;
        color: var(--dark1, #2a1a0a);
      }
      /* ── Team-menu lock mode (frontier-ext runs) ──────────────────────────
         Applied on #team-menu whenever a frontier-ext run is about to launch
         or is in progress. Blocks every interaction that would let the
         player swap / reorder / heal their team mid-challenge — team
         switcher, drag handles, click-to-change-pkmn, click-to-change-item.
         Save-and-Go and Go-back buttons stay active so the player can
         still confirm the combat or back out to the Frontier tab. */
      /* Hide the team switcher + auto-build ONLY during active combat
         launch. In tied-slot browsing mode we let the player navigate
         to other preview teams so they can use different teams for wild
         zones / other facilities while this run is paused. */
      #team-menu.frontier-ext-team-locked-strict .team-menu-selector-new {
        display: none !important;
      }
      #team-menu.frontier-ext-team-locked-strict .team-menu-selector {
        display: none !important;
      }
      #team-menu.frontier-ext-team-locked #team-preview .explore-team-member {
        pointer-events: none;
        filter: saturate(0.88);
        position: relative;
      }
      #team-menu.frontier-ext-team-locked #team-preview .team-held-item {
        pointer-events: none !important;
      }
      /* Duplicate-team button (teamDuplicate.js) can overwrite a preview
         slot with another's contents — including the tied slot. Hide it
         in both lock modes so the player can't bypass the lock via copy. */
      #team-menu.frontier-ext-team-locked #team-duplicate-button,
      #team-menu.frontier-ext-team-locked #auto-build-button {
        display: none !important;
      }
      /* Anything inside team-preview that would spawn a sub-menu (rename,
         remove, edit moves, etc.) — block via pointer-events at the root. */
      #team-menu.frontier-ext-team-locked #team-preview {
        -webkit-user-drag: none;
      }
      /* Safety net — block any residual dragstart gestures. */
      #team-menu.frontier-ext-team-locked #team-preview [draggable="true"] {
        user-select: none;
        -webkit-user-drag: none;
      }
      /* The lock banner, injected above #team-preview.
         All properties marked !important so the game's sibling layout
         rules (flex / reset styles) can't strip the encadrement. */
      .frontier-ext-team-lock-banner {
        display: flex !important;
        align-items: center !important;
        justify-content: flex-start !important;
        gap: 0.6rem !important;
        margin: 0.6rem 0.7rem !important;
        padding: 0.7rem 1rem !important;
        background: linear-gradient(90deg,
          rgba(140, 20, 20, 0.85),
          rgba(200, 80, 20, 0.85),
          rgba(140, 20, 20, 0.85)) !important;
        color: #ffe6b5 !important;
        font-weight: bold !important;
        border-radius: 0.4rem !important;
        border: 2px solid rgba(255, 190, 90, 0.75) !important;
        font-size: 0.95rem !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7) !important;
        box-shadow:
          0 2px 6px rgba(0, 0, 0, 0.45),
          inset 0 0 0 1px rgba(255, 230, 180, 0.15) !important;
        flex-wrap: wrap !important;
      }
      .frontier-ext-team-lock-banner .lock-icon {
        font-size: 1.4rem !important;
        filter: drop-shadow(0 0 3px rgba(255, 180, 90, 0.7));
      }
      .frontier-ext-team-lock-banner .subtle {
        font-weight: normal !important;
        font-style: italic !important;
        font-size: 0.82rem !important;
        opacity: 0.9 !important;
        margin-left: auto !important;
        color: #ffdcb0 !important;
      }
      /* ── Arena judges' verdict toast (3-criterion breakdown) ──────────
         Drops in from the top of the screen when the Arena's 3-turn judge
         fires. Auto-dismisses after 4 seconds. Green border on victory,
         red on loss. */
      /* Arena verdict card — Emerald-styled scoresheet + arbiter dialog.
         Three criteria (Mental / Technique / Physique), each awarding a
         symbol per side: ● red circle = 2pt win, △ blue triangle = 1pt
         tie, ✕ black cross = 0pt loss. Symbols reveal one row at a time
         with staggered animation, then the totals strike in, then an
         arbiter dialog announces the outcome. */
      .frontier-ext-arena-verdict {
        position: fixed;
        top: 2rem;
        left: 50%;
        transform: translate(-50%, -150%);
        z-index: 9999;
        background:
          linear-gradient(180deg, #fdf8e6 0%, #e8dcae 55%, #c7b877 100%);
        color: #2a1e07;
        padding: 0.75rem 0.9rem 0.9rem;
        border-radius: 0.6rem;
        box-shadow:
          0 6px 20px rgba(0, 0, 0, 0.55),
          inset 0 0 0 2px #3b2a0d,
          inset 0 0 0 4px #fdf8e6,
          inset 0 0 0 6px #8a6a1c;
        min-width: 22rem;
        max-width: 26rem;
        font-family: "Segoe UI", system-ui, sans-serif;
        font-size: 0.95rem;
        opacity: 0;
        transition: transform 0.35s cubic-bezier(.3,1.4,.6,1), opacity 0.35s;
        pointer-events: none;
      }
      .frontier-ext-arena-verdict.show {
        opacity: 1;
        transform: translate(-50%, 0);
      }
      .frontier-ext-arena-verdict .verdict-title {
        font-size: 1.05rem;
        font-weight: bold;
        text-align: center;
        margin: 0 0 0.55rem;
        color: #4a2e0a;
        letter-spacing: 0.04em;
        text-shadow: 0 1px 0 rgba(255,255,255,0.55);
      }
      .frontier-ext-arena-verdict .verdict-head {
        display: grid;
        grid-template-columns: 1fr 6rem 1fr;
        gap: 0.4rem;
        align-items: center;
        font-weight: bold;
        font-size: 0.85rem;
        color: #2d1e05;
        margin-bottom: 0.3rem;
      }
      .frontier-ext-arena-verdict .verdict-head .you    { text-align: right;  color: #3a5fa6; }
      .frontier-ext-arena-verdict .verdict-head .them   { text-align: left;   color: #a03838; }
      .frontier-ext-arena-verdict .verdict-head .criterion { text-align: center; color: #5a4208; }
      .frontier-ext-arena-verdict .verdict-rows {
        display: flex;
        flex-direction: column;
        gap: 0.28rem;
        border-top: 1px solid #8a6a1c;
        border-bottom: 1px solid #8a6a1c;
        padding: 0.35rem 0.15rem;
        background: rgba(255,255,255,0.28);
      }
      .frontier-ext-arena-verdict .verdict-row {
        display: grid;
        grid-template-columns: 1fr 6rem 1fr;
        gap: 0.4rem;
        align-items: center;
        opacity: 0;
        transform: translateY(4px);
        transition: opacity 0.35s ease, transform 0.35s ease;
      }
      .frontier-ext-arena-verdict .verdict-row.shown {
        opacity: 1;
        transform: translateY(0);
      }
      .frontier-ext-arena-verdict .verdict-row .label {
        text-align: center;
        font-weight: bold;
        color: #4a2e0a;
        font-size: 0.9rem;
        letter-spacing: 0.03em;
      }
      .frontier-ext-arena-verdict .verdict-row .mark {
        font-size: 1.6rem;
        line-height: 1;
        font-weight: bold;
        display: inline-block;
      }
      .frontier-ext-arena-verdict .verdict-row .mark.left  { text-align: right;  padding-right: 0.4rem; }
      .frontier-ext-arena-verdict .verdict-row .mark.right { text-align: left;   padding-left:  0.4rem; }
      .frontier-ext-arena-verdict .mark-win  { color: #c83434; text-shadow: 0 0 3px rgba(200,52,52,0.45); }
      .frontier-ext-arena-verdict .mark-tie  { color: #2c5fb0; text-shadow: 0 0 3px rgba(44,95,176,0.45); }
      .frontier-ext-arena-verdict .mark-lose { color: #1a1a1a; opacity: 0.85; }
      .frontier-ext-arena-verdict .verdict-total {
        display: grid;
        grid-template-columns: 1fr 6rem 1fr;
        gap: 0.4rem;
        align-items: center;
        font-weight: bold;
        margin-top: 0.4rem;
        font-size: 1rem;
        opacity: 0;
        transition: opacity 0.35s ease;
      }
      .frontier-ext-arena-verdict .verdict-total.shown { opacity: 1; }
      .frontier-ext-arena-verdict .verdict-total .you    { text-align: right;  color: #1d3a78; }
      .frontier-ext-arena-verdict .verdict-total .them   { text-align: left;   color: #7a1515; }
      .frontier-ext-arena-verdict .verdict-total .sep    { text-align: center; color: #4a2e0a; letter-spacing: 0.12em; }
      .frontier-ext-arena-verdict .verdict-arbiter {
        margin-top: 0.5rem;
        padding: 0.45rem 0.55rem;
        background: linear-gradient(180deg, #fdf8e6, #e8d99b);
        border: 1px solid #5a4208;
        border-radius: 0.35rem;
        font-size: 0.88rem;
        color: #2a1e07;
        min-height: 1.4rem;
        line-height: 1.3;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .frontier-ext-arena-verdict .verdict-arbiter.shown { opacity: 1; }
      .frontier-ext-arena-verdict .verdict-arbiter .speaker {
        display: inline-block;
        font-weight: bold;
        color: #5a2e02;
        letter-spacing: 0.05em;
        margin-right: 0.25rem;
      }
      /* Per-slot HP + status overlay inside the locked team preview.
         Positioned top-right because the game's #{team-i-held-item}
         sits top-left and would otherwise cover our pills. */
      .frontier-ext-team-slot-hp {
        position: absolute;
        top: 0.4rem;
        right: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.18rem;
        pointer-events: none;
        z-index: 50;
        align-items: flex-end;
      }
      .frontier-ext-team-slot-hp .hp-pill {
        background: rgba(0, 0, 0, 0.75);
        color: #fff;
        padding: 0.1rem 0.45rem;
        border-radius: 0.25rem;
        font-size: 0.78rem;
        font-weight: bold;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .frontier-ext-team-slot-hp .hp-pill.low { background: rgba(192, 57, 43, 0.9); }
      .frontier-ext-team-slot-hp .hp-pill.mid { background: rgba(230, 126, 34, 0.9); }
      .frontier-ext-team-slot-hp .hp-pill.ko {
        background: rgba(60, 60, 60, 0.95);
        color: #ff6b6b;
        text-shadow: 0 0 3px rgba(255, 80, 80, 0.7);
      }
      .frontier-ext-team-slot-hp .status-pill {
        padding: 0.1rem 0.4rem;
        border-radius: 0.25rem;
        font-size: 0.72rem;
        font-weight: bold;
        text-align: center;
      }
      .frontier-ext-team-slot-hp .status-pill.poisoned { background: #8e44ad; color: #fff; }
      .frontier-ext-team-slot-hp .status-pill.burn { background: #c0392b; color: #fff; }
      .frontier-ext-team-slot-hp .status-pill.paralysis { background: #f39c12; color: #000; }
    `;
    const style = document.createElement("style");
    style.id = "frontier-ext-css";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildDivider() {
    const lang = "en";
    const t = {
          title: "⚔️ Battle Frontier — Hoenn",
          sub: "Gen 3 Emerald rules · Level 100 Pokémon required · Teams of 3 · No division restriction" };

    const div = document.createElement("div");
    div.className = "frontier-ext-divider";
    div.innerHTML = `
      <span class="frontier-ext-divider-title">${t.title}</span>
      <span class="frontier-ext-divider-sub">${t.sub}</span>
    `;
    return div;
  }

  function buildTile(facility) {
    const lang = "en";
    const name = facility.name;
    const streakLabel = "Streak";
    const maxLabel = "Best";

    const streak = (saved.frontierExt && saved.frontierExt.streaks[facility.id]) || 0;
    const maxStreak = (saved.frontierExt && saved.frontierExt.maxStreaks[facility.id]) || 0;
    const symbols = (saved.frontierExt && saved.frontierExt.symbols[facility.id]) || { silver: false, gold: false };

    const silverClass = symbols.silver ? "silver" : "locked";
    const goldClass = symbols.gold ? "gold" : "locked";

    const unlocked = isUnlocked();

    const activeRun = saved.frontierExt && saved.frontierExt.activeRun;
    const pausedRun = saved.frontierExt && saved.frontierExt.pausedRuns
      && saved.frontierExt.pausedRuns[facility.id];
    const tileRun = (activeRun && activeRun.facilityId === facility.id) ? activeRun : pausedRun;
    const isActiveHere = !!(activeRun && activeRun.facilityId === facility.id);
    const isPausedHere = !isActiveHere && !!pausedRun;
    const activeLabel = "IN PROGRESS";
    const pausedLabel = "PAUSED";
    let inProgressTag = "";
    if (isActiveHere) {
      const r = tileRun.round + 1, goal = nextGoalRoundFor(r, facility);
      const tip = `Run ${r}/${goal}`;
      inProgressTag = `<span class="frontier-ext-inprogress-tag" title="${tip}">● ${activeLabel}</span>`;
    } else if (isPausedHere) {
      const r = tileRun.round + 1;
      const tip = `Paused at round ${r}`;
      inProgressTag = `<span class="frontier-ext-paused-tag" title="${tip}">⏸ ${pausedLabel}</span>`;
    }

    let heatTag = "";
    if (tileRun) {
      const upcomingMult = difficultyMultiplier(tileRun.round + 1, facility);
      if (upcomingMult >= 2) {
        const heatTitle = `Difficulty ×${upcomingMult} — rematch streak`;
        heatTag = `<span class="frontier-ext-heat-tag" title="${heatTitle}">🔥 ×${upcomingMult}</span>`;
      }
    }

    const tile = document.createElement("div");
    tile.className = "explore-ticket frontier-ticket frontier-ext-tile" + (unlocked ? "" : " locked");
    tile.style.setProperty("--hue", facility.hueRotate + "deg");
    tile.dataset.facility = facility.id;

    const lockOverlay = unlocked
      ? ""
      : `<svg class="frontier-ext-lock-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3v3H9V7a3 3 0 0 1 3-3m0 11a2 2 0 0 1 1 3.7V20h-2v-1.3A2 2 0 0 1 12 15"/></svg>`;

    tile.innerHTML = `
      <span class="hitbox"></span>
      ${lockOverlay}
      <div style="width: 100%;">
        ${facility.iconSvg}
        <span class="explore-ticket-left">
          <span style="font-size:1.2rem">
            ${name}
          </span>
          <span>
            <strong class="frontier-ext-streak">${streakLabel}: ${streak}<br>${maxLabel}: ${maxStreak}</strong>
            <span class="frontier-ext-symbol ${silverClass}" title="${`Silver Symbol (round ${silverRoundFor(facility)})`}">●</span>
            <span class="frontier-ext-symbol ${goldClass}" title="${`Gold Symbol (round ${goldRoundFor(facility)})`}">●</span>
            <span class="frontier-ext-state-pills">
              ${heatTag}
              ${inProgressTag}
            </span>
          </span>
        </span>
      </div>
      <div style="width: 8rem;" class="explore-ticket-right">
        <span class="explore-ticket-bg" style="background-image: url(img/bg/${facility.background}.png);"></span>
        <img class="explore-ticket-sprite sprite-trim frontier-ext-brain-icon"
             style="z-index: 10;"
             src="img/trainers/${facility.brain.sprite}.png"
             alt="${facility.brain.name}">
      </div>
    `;

    tile.dataset.help = "FrontierExt:" + facility.id;

    tile.addEventListener("click", () => {
      if (!isUnlocked()) {
        showLockedTooltip();
        return;
      }
      openFacilityPreview(facility);
    });
    return tile;
  }

  function showLockedTooltip() {
    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    if (top) top.style.display = "none";
    if (title) title.style.display = "none";
    if (bottom) bottom.style.display = "none";
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = unlockText();
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function showRunInProgressElsewhere(attemptedFacility) {
    const lang = "en";
    const run = saved.frontierExt.activeRun;
    const activeFacility = FACILITIES.find((f) => f.id === run.facilityId);
    if (!activeFacility) return;
    const activeName = activeFacility.name;
    const attemptedName = attemptedFacility.name;
    const brainName = activeFacility.brain.name;

    const t = {
          title: "⚠️ A run is already in progress",
          body: `You have an active streak in <strong>${activeName}</strong> (Round ${run.round + 1}). Finish or abandon that streak before starting <strong>${attemptedName}</strong>.`,
          reason: "Only one team can be locked in the Hoenn ZdC at a time.",
          goToActive: "Resume " + activeName,
          abandon: "Abandon current streak",
          close: "Close" };

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";
      top.innerHTML = `<img src="img/trainers/${activeFacility.brain.sprite}.png"
        style="max-height: 120px; image-rendering: pixelated;"
        alt="${brainName}">`;
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = t.title;
    }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div style="padding: 0.6rem 0.9rem;">
          <div style="margin-bottom: 0.5rem;">${t.body}</div>
          <div style="font-style: italic; opacity: 0.75; font-size: 0.9rem;">${t.reason}</div>
        </div>
      `;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="elsewhere-resume">${t.goToActive}</button>
          <button class="frontier-ext-action-btn danger" data-action="elsewhere-abandon">${t.abandon}</button>
          <button class="frontier-ext-action-btn" data-action="elsewhere-close">${t.close}</button>
        </div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => {
          const act = btn.dataset.action;
          if (act === "elsewhere-resume") {
            openFacilityPreview(activeFacility);
          } else if (act === "elsewhere-abandon") {
            handleRunAction("abandon", activeFacility);
          } else {
            if (typeof closeTooltip === "function") closeTooltip();
          }
        };
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function openFacilityPreview(facility) {

    try {
      const box = document.getElementById("tooltipBox");
      if (box) {
        box.classList.remove("frontier-ext-factory-open");
        box.classList.remove("frontier-ext-pyramid-open");
        box.classList.remove("frontier-ext-run-lock-open");
      }
      const bg = document.getElementById("tooltipBackground");
      if (bg) bg.classList.remove("frontier-ext-run-lock-open");
    } catch (e) {  }
    const lang = "en";
    const name = facility.name;
    const brainName = facility.brain.name;

    ensureSaveSlot();
    const activeRun = saved.frontierExt.activeRun;
    const pausedRun = saved.frontierExt.pausedRuns && saved.frontierExt.pausedRuns[facility.id];
    const isActive = activeRun && activeRun.facilityId === facility.id;
    const isPaused = !isActive && !!pausedRun;
    const run = isActive ? activeRun : (isPaused ? pausedRun : null);

    if (activeRun && activeRun.facilityId !== facility.id) {
      showRunInProgressElsewhere(facility);
      return;
    }

    const t = {
          brain: `${"Zone Leader"}:`,
          maxStreak: "Best streak:",
          inProgress: "Run in progress",
          paused: "Paused",
          start: "Start a run",
          cont: "Continue (Round {r})",
          resume: "Resume (Round {r})",
          rest: "Rest",
          abandon: "Abandon",
          round: "Round",
          silverBanner: (r)    => `⚡ Round ${r} — the ${"Zone Leader"} (Silver) is next!`,
          goldBanner:   (r)    => `💎 Round ${r} — the ${"Zone Leader"} (Gold) is next!`,
          rematchBanner:(r, m) => `🔥 Round ${r} — ${"Zone Leader"} rematch ×${m}!` };

    const maxStreak = saved.frontierExt.maxStreaks[facility.id] || 0;

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";
      top.innerHTML = `<img src="img/trainers/${facility.brain.sprite}.png" style="max-height: 140px; image-rendering: pixelated;" alt="${brainName}">`;
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = name;
    }

    const hasRun = isActive || isPaused;
    const nextRound = hasRun ? run.round + 1 : 1;
    const isBossRound = hasRun && !!getBossRoundInfo(nextRound, facility);

    if (mid) {
      mid.style.display = "block";
      let html = `<div style="padding:0.4rem 0.8rem;font-style:italic;opacity:0.9;">`;
      if (hasRun) {
        const dome = isDomeFacility(facility);
        const pike = isPikeFacility(facility);
        const perRound = battlesPerRound(facility);
        let battleStr = "";
        if (dome) {
          battleStr = ` · ${"Battle"} ${run.bracketBattle || 1}/${DOME_BRACKET_SIZE}`;
        } else if (pike) {
          battleStr = ` · ${"Room"} ${run.pikeRoom || 1}/${PIKE_ROOM_COUNT}`;
        } else if (perRound > 1) {

          battleStr = ` · ${"Battle"} ${run.battleInRound || 1}/${perRound}`;
        }
        const stateLabel = isPaused ? t.paused : t.inProgress;
        html += `<strong>${stateLabel}</strong> — ${t.round} ${run.round + 1}/${nextGoalRoundFor(run.round + 1, facility)}${battleStr}`;
      } else {
        html += `${facility.desc}`;
      }
      html += `</div>`;
      if (isBossRound) {
        const info = getBossRoundInfo(nextRound, facility);
        let bannerTxt = "";
        if (info) {
          if (info.kind === "silver")      bannerTxt = t.silverBanner(nextRound);
          else if (info.kind === "gold")   bannerTxt = t.goldBanner(nextRound);
          else                 bannerTxt = t.rematchBanner(nextRound, info.multiplier);
        }
        if (bannerTxt) html += `<div style="padding:0.3rem 0.8rem;color:#ffd700;font-weight:bold;">${bannerTxt}</div>`;
      }
      mid.innerHTML = html;
    }

    if (bottom) {
      bottom.style.display = "block";

      let buttons;
      if (isActive) {
        buttons = `
          <button class="frontier-ext-action-btn primary" data-action="continue">${t.cont.replace("{r}", run.round + 1)}</button>
          <button class="frontier-ext-action-btn" data-action="rest">${t.rest}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        `;
      } else if (isPaused) {
        buttons = `
          <button class="frontier-ext-action-btn primary" data-action="resume">${t.resume.replace("{r}", run.round + 1)}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        `;
      } else {
        buttons = `
          <button class="frontier-ext-action-btn primary" data-action="start">${t.start}</button>
        `;
      }

      let kinesisteRowHtml = "";
      if (isPyramidFacility(facility)) {

        const themeForPreview = run ? pyramidCurrentTheme(run) : PYRAMID_THEMES[0];
        const themeLabelPreview = themeForPreview.label;
        const introLine = "🔮 The Psychic whispers: \"I sense the next theme…\"";
        const themeLine = `Next theme: <strong>${themeLabelPreview}</strong>`;
        kinesisteRowHtml = `
          <div class="frontier-ext-pyr-kinesiste-preview">
            <div class="intro">${introLine}</div>
            <div class="theme">${themeLine}</div>
          </div>`;
      }

      bottom.innerHTML = `
        <div class="frontier-ext-help-rules" style="grid-template-columns:auto 1fr;">
          <span class="label">${t.brain}</span>
          <span class="value">${brainName}</span>
          <span class="label">${t.maxStreak}</span>
          <span class="value">${maxStreak}</span>
        </div>
        ${kinesisteRowHtml}
        <div class="frontier-ext-run-actions">${buttons}</div>
      `;

      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }

    try {
      const bg = document.getElementById("tooltipBackground");
      const box = document.getElementById("tooltipBox");
      if (isActive) {
        if (bg)  bg.classList.add("frontier-ext-run-lock-open");
        if (box) box.classList.add("frontier-ext-run-lock-open");
      }
    } catch (e) {  }

    if (typeof openTooltip === "function") openTooltip();
  }

  function openDomePokemonSelection(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const lang = "en";

    const bracket = ensureBracketForDome(facility);
    const currentIdx = (run.bracketBattle || 1) - 1;
    const opponent = bracket[currentIdx];
    if (!opponent) return;

    const pt = (saved.previewTeams && saved.previewTeams[saved.currentPreviewTeam]) || {};
    const playerMons = [];
    for (const sl of ["slot1", "slot2", "slot3"]) {
      if (pt[sl] && pt[sl].pkmn) playerMons.push({ slot: sl, id: pt[sl].pkmn });
    }

    if (!run.domeSelection) run.domeSelection = [];

    const t = {
          title: "Pick 2 Pokémon",
          desc: "Both sides see each other's teams. Pick 2 Pokémon for this match.",
          yourTeam: "Your team",
          opponentTeam: "Opponent",
          need2: "Select exactly 2 Pokémon.",
          confirm: "⚔️ Confirm & fight",
          abandon: "Abandon" };

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) { top.style.display = "none"; }
    if (title) { title.style.display = "block"; title.innerHTML = t.title; }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div style="padding:0.5rem 0.8rem;font-style:italic;opacity:0.85;">${t.desc}</div>
        <div class="frontier-ext-dome-teams">
          <div class="frontier-ext-dome-side">
            <div class="frontier-ext-dome-label">${t.yourTeam}</div>
            <div class="frontier-ext-dome-slots" id="frontier-ext-dome-player"></div>
          </div>
          <div class="frontier-ext-dome-side">
            <div class="frontier-ext-dome-label">${t.opponentTeam} — ${opponent.name}</div>
            <div class="frontier-ext-dome-slots">
              ${opponent.team.map((s) =>
                `<div class="frontier-ext-dome-card opponent"><img src="img/pkmn/sprite/${s.id}.png" alt="${s.id}"><div>${typeof format === "function" ? format(s.id) : s.id}</div></div>`
              ).join("")}
            </div>
          </div>
        </div>
      `;
      const playerCtr = document.getElementById("frontier-ext-dome-player");
      if (playerCtr) {
        playerCtr.innerHTML = playerMons.map((m) => {
          const selected = run.domeSelection.indexOf(m.id) !== -1;
          return `<div class="frontier-ext-dome-card player${selected ? " selected" : ""}" data-monid="${m.id}"><img src="img/pkmn/sprite/${m.id}.png" alt="${m.id}"><div>${typeof format === "function" ? format(m.id) : m.id}</div></div>`;
        }).join("");
        playerCtr.querySelectorAll("[data-monid]").forEach((el) => {
          el.onclick = () => toggleDomeSelection(el.dataset.monid, facility);
        });
      }
    }
    if (bottom) {
      bottom.style.display = "block";
      const canConfirm = run.domeSelection.length === DOME_ACTIVE_SIZE;
      bottom.innerHTML = `
        <div style="padding:0.4rem 0.8rem;font-size:0.85rem;color:${canConfirm ? "#2a5e2a" : "#7a2e1a"};text-align:center;">
          ${canConfirm ? `✓ ${run.domeSelection.length}/${DOME_ACTIVE_SIZE}` : t.need2}
        </div>
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="confirm-dome" ${canConfirm ? "" : "disabled style=\"opacity:0.4;cursor:not-allowed;\""}>${t.confirm}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        </div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function toggleDomeSelection(monId, facility) {
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    if (!run.domeSelection) run.domeSelection = [];
    const idx = run.domeSelection.indexOf(monId);
    if (idx !== -1) {
      run.domeSelection.splice(idx, 1);
    } else if (run.domeSelection.length < DOME_ACTIVE_SIZE) {
      run.domeSelection.push(monId);
    } else {
      run.domeSelection.shift();
      run.domeSelection.push(monId);
    }
    openDomePokemonSelection(facility);
  }

  function applyDomeSelection() {
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return;
    run.domeSelectionConfirmed = true;
  }

  function restoreDomeSelection() {
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run || !run.domeTeamBackup) return;
    const ptKey = run.domeTeamSlot || saved.currentPreviewTeam;
    const pt = saved.previewTeams && saved.previewTeams[ptKey];
    if (pt) {
      for (const sl of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
        delete pt[sl];
      }
      for (const sl of Object.keys(run.domeTeamBackup)) {
        pt[sl] = run.domeTeamBackup[sl];
      }
    }
    run.domeTeamBackup = null;
    run.domeTeamSlot = null;
  }

  function installDomeTeamFilter() {
    if (typeof window.injectPreviewTeam !== "function") {
      setTimeout(installDomeTeamFilter, 200);
      return;
    }
    if (window.__frontierExtDomeFilterHooked) return;
    window.__frontierExtDomeFilterHooked = true;
    const orig = window.injectPreviewTeam;
    window.injectPreviewTeam = function () {
      const res = orig.apply(this, arguments);
      try {
        const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
        if (!run || !Array.isArray(run.domeSelection) ||
            run.domeSelection.length !== DOME_ACTIVE_SIZE) return res;
        const facility = FACILITIES.find((f) => f.id === run.facilityId);
        if (!isDomeFacility(facility)) return res;

        if (saved.currentArea !== RUN_AREA_ID) return res;
        if (typeof team === "undefined") return res;

        const slotById = {};
        for (const slotKey of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
          const slot = team[slotKey];
          if (!slot) continue;
          const mon = slot.pkmn;
          const monId = mon && (mon.id || (typeof mon === "string" ? mon : null));
          if (monId && !slotById[monId]) slotById[monId] = slot;
        }
        const kept = [];
        for (const pickedId of run.domeSelection) {
          const slot = slotById[pickedId];
          if (slot) kept.push({ pkmn: slot.pkmn, item: slot.item });
        }
        const SLOTS = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"];
        for (let i = 0; i < SLOTS.length; i++) {
          const slot = team[SLOTS[i]];
          if (!slot) continue;
          if (i < kept.length) {
            slot.pkmn = kept[i].pkmn;
            slot.item = kept[i].item;
          } else {
            slot.pkmn = undefined;
            slot.item = undefined;
          }
        }
      } catch (e) {
        console.error("[frontier-ext] dome team filter failed:", e);
      }
      return res;
    };
  }

  function sanitizeNullSlots() {
    if (typeof saved !== "object" || !saved || !saved.previewTeams) return 0;
    let healed = 0;
    for (const key of Object.keys(saved.previewTeams)) {
      const pt = saved.previewTeams[key];
      if (!pt || typeof pt !== "object") continue;
      for (const sl of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
        if (pt[sl] === null) {
          delete pt[sl];
          healed++;
        }
      }
    }
    if (healed > 0) {
      console.info("[frontier-ext] sanitized " + healed + " null preview-team slot(s)");
    }
    return healed;
  }

  function installTeamSanitizerHooks() {
    const fnNames = ["updatePreviewTeam", "arceusCheck", "switchMenu"];
    for (const name of fnNames) {
      (function wrap(n) {
        const attempt = () => {
          if (typeof window[n] !== "function") {
            setTimeout(attempt, 200);
            return;
          }
          if (window["__frontierExtHook_" + n]) return;
          window["__frontierExtHook_" + n] = true;
          const orig = window[n];
          window[n] = function () {
            try { sanitizeNullSlots(); } catch (e) {  }
            return orig.apply(this, arguments);
          };
        };
        attempt();
      })(name);
    }
  }

  function recoverCorruptedDomeTeam() {
    if (typeof saved !== "object" || !saved || !saved.frontierExt) return;
    const run = saved.frontierExt.activeRun;
    if (!run || !run.domeTeamBackup) return;

    if (saved.currentArea === RUN_AREA_ID) return;

    try {
      restoreDomeSelection();
      run.domeSelection = [];
      console.info("[frontier-ext] recovered mutated Dôme team from backup");
    } catch (e) {
      console.error("[frontier-ext] recovery failed:", e);
    }
  }

  function openDomeBracketPreview(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run || run.facilityId !== facility.id) return;

    const lang = "en";
    const bracket = ensureBracketForDome(facility);
    const currentIdx = (run.bracketBattle || 1) - 1;
    const trainer = bracket[currentIdx];
    if (!trainer) return;

    const t = {
          round: "Round",
          bracket: "Bracket",
          battle: "Battle",
          vs: "vs",
          nextOpp: "Next opponent",
          remainingInBracket: "Upcoming opponents in this bracket",
          warn: "⚠️ All your Pokémon must be level 100.",
          launch: "⚔️ Launch battle",
          abandon: "Abandon",
          qf: "QF",
          sf: "SF",
          final: "Final" };

    const labels = [t.qf, t.sf, t.final];
    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";
      top.innerHTML = `<img src="img/trainers/${trainer.sprite}.png" style="max-height: 140px; image-rendering: pixelated;" alt="${trainer.name}">`;
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${t.round} ${run.round + 1} — ${labels[currentIdx]}: ${trainer.name}`;
    }
    if (mid) {
      mid.style.display = "block";
      const teamPreview = trainer.team
        .map((slot) => (typeof format === "function" ? format(slot.id) : slot.id))
        .join(" · ");

      const bracketRows = bracket.map((tr, i) => {
        const teamStr = tr.team
          .map((s) => (typeof format === "function" ? format(s.id) : s.id))
          .join(" · ");
        const status = i < currentIdx
          ? "✓"
          : i === currentIdx
          ? "▶"
          : "·";
        const style = i === currentIdx
          ? "color:#ffd700;font-weight:bold;"
          : i < currentIdx
          ? "opacity:0.45;"
          : "opacity:0.7;";
        const bossMark = tr.isBoss ? " 👑" : "";
        return `<div style="${style}padding:0.15rem 0;">${status} ${labels[i]}: <strong>${tr.name}${bossMark}</strong> — ${teamStr}</div>`;
      }).join("");
      mid.innerHTML = `
        <div style="padding:0.5rem 0.8rem;">
          <div style="font-weight:bold;color:#ffd700;margin-bottom:0.3rem;">${t.nextOpp}:</div>
          <div>${teamPreview}</div>
        </div>
        <div style="padding:0.4rem 0.8rem;border-top:1px dashed rgba(255,255,255,0.15);margin-top:0.3rem;">
          <div style="font-size:0.85rem;opacity:0.8;margin-bottom:0.2rem;">${t.bracket} (${t.round} ${run.round + 1})</div>
          ${bracketRows}
        </div>
      `;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="launch">${t.launch}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        </div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function openSimulatedFight(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run || run.facilityId !== facility.id) return;

    const lang = "en";
    const nextRound = run.round + 1;
    const _bossInfo = getBossRoundInfo(nextRound, facility);
    const perRound = battlesPerRound(facility);
    const battleInRound = run.battleInRound || 1;

    const isBrainBattleHere = _bossInfo && battleInRound === perRound;
    const isSilverBoss = isBrainBattleHere && _bossInfo.kind === "silver";
    const isGoldBoss = isBrainBattleHere && _bossInfo.kind !== "silver";

    const t = {
          round: "Round",
          battle: "Battle",
          vs: "vs",
          warn: "⚠️ All your Pokémon must be level 100. The battle will be very hard otherwise!",
          launch: "⚔️ Launch battle",
          abandon: "Abandon" };

    let trainer = run.upcomingTrainer;
    const trainerStale = !trainer
      || trainer.facilityId !== facility.id
      || trainer.round !== nextRound
      || (!!trainer.isBoss) !== (isSilverBoss || isGoldBoss);
    if (trainerStale) {
      if (isSilverBoss || isGoldBoss) {
        const brainDiff = computeRunDifficulty(nextRound, facility);
        const brainTeam = isSilverBoss ? facility.brain.teamSilver : facility.brain.teamGold;

        trainer = {
          name: facility.brain.name,
          sprite: facility.brain.sprite,
          team: brainTeam
            ? brainTeam.map((id) => ({ id, moves: pickMovesetFor(id, brainDiff), nature: simulateNatureFor(id) }))
            : [1, 2, 3].map(() => {
                const id = pickFromPool(3);
                return { id, moves: pickMovesetFor(id, brainDiff), nature: simulateNatureFor(id) };
              }),
          isBoss: true,
          facilityId: facility.id,
          round: nextRound,
          tier: brainDiff.tier,
          multiplier: brainDiff.mult };
      } else {
        trainer = generateTrainer(nextRound, facility);

      }
    }

    if (trainerStale && isFactoryFacility(facility) && run.factoryTeam && Array.isArray(trainer.team)) {
      const rentalIds = new Set(run.factoryTeam.map((r) => r.id));
      const tierForPool = trainer.tier || 1;
      const poolForReroll = getPoolForFacility(facility, tierForPool, nextRound);
      const rerollDiff = computeRunDifficulty(nextRound, facility);
      let safety = 0;
      for (let i = 0; i < trainer.team.length; i++) {
        while (rentalIds.has(trainer.team[i].id) && safety < 50) {
          safety++;
          const newId = poolForReroll[Math.floor(Math.random() * poolForReroll.length)]
            || pickFromPool(tierForPool);
          if (!newId || rentalIds.has(newId)) continue;
          trainer.team[i] = {
            id: newId,
            moves: pickMovesetFor(newId, rerollDiff),
            nature: trainer.team[i].nature || simulateNatureFor(newId) };
        }
      }
    }

    run.upcomingTrainer = trainer;

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";
      top.innerHTML = `<img src="img/trainers/${trainer.sprite}.png" style="max-height: 140px; image-rendering: pixelated;" alt="${trainer.name}">`;
    }
    if (title) {
      title.style.display = "block";
      const battleStr = perRound > 1
        ? ` · ${t.battle} ${battleInRound}/${perRound}`
        : "";
      title.innerHTML = `${t.round} ${nextRound}${battleStr} — ${trainer.name}`;
    }

    const miniBoss = isMiniBossBattle(run, facility);
    const bossInfoForBanner = (isSilverBoss || isGoldBoss)
      ? getBossRoundInfo(nextRound, facility)
      : null;
    let bossBannerHtml = "";
    if (bossInfoForBanner) {
      const multStr = bossInfoForBanner.multiplier > 1 ? ` ×${bossInfoForBanner.multiplier}` : "";
      const label = bossInfoForBanner.kind === "silver"
        ? `⚡ Zone Leader (Silver) — canonical team, hidden ability`
        : bossInfoForBanner.kind === "gold"
          ? `💎 Zone Leader (Gold) — upgraded team, max IVs`
          : `🔥 Zone Leader rematch${multStr} — enhanced team, multiplier active`;
      bossBannerHtml = `<div style="padding:0.35rem 0.8rem;color:#ffd700;font-weight:bold;font-size:0.95rem;text-shadow:0 0 5px rgba(255,215,0,0.5);border-left:3px solid rgba(255,215,0,0.55);margin:0.3rem 0.5rem;">${label}</div>`;
    } else if (miniBoss) {
      const miniBossLabel = "⚡ Round guardian — enhanced trainer (maxed stats, hidden ability)";
      bossBannerHtml = `<div style="padding:0.3rem 0.8rem;color:#ffb347;font-weight:bold;font-size:0.92rem;text-shadow:0 0 4px rgba(255,140,0,0.4);">${miniBossLabel}</div>`;
    }

    if (mid) {
      mid.style.display = "block";
      const teamPreview = trainer.team
        .map((slot) => (typeof format === "function" ? format(slot.id) : slot.id))
        .join(" · ");
      mid.innerHTML = `
        ${bossBannerHtml}
        <div style="padding:0.5rem 0.8rem;">
          <div style="opacity:0.75;font-size:0.9rem;">${t.vs}</div>
          <div style="font-weight:bold;margin-top:0.2rem;">${teamPreview}</div>
        </div>
      `;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="launch">${t.launch}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        </div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }

    try {
      const bg = document.getElementById("tooltipBackground");
      const box = document.getElementById("tooltipBox");
      if (bg)  bg.classList.add("frontier-ext-run-lock-open");
      if (box) box.classList.add("frontier-ext-run-lock-open");
    } catch (e) {  }
    if (typeof openTooltip === "function") openTooltip();
  }

  function handleRunAction(action, facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;

    if (action === "start") {

      const existing = saved.frontierExt.activeRun;
      if (existing && existing.facilityId !== facility.id) {
        showRunInProgressElsewhere(facility);
        return;
      }

      if (!isFactoryFacility(facility) && currentPreviewTeamSize() !== 3) {
        showTeamSizeError(facility);
        return;
      }

      if (!isFactoryFacility(facility) && !allPreviewMonsAreLvl100()) {
        showTeamLevelError(facility);
        return;
      }

      if (isPyramidFacility(facility) && currentPreviewHasHeldItems()) {
        showPyramidItemsError(facility);
        return;
      }
      saved.frontierExt.activeRun = {
        facilityId: facility.id,
        round: 0,
        upcomingTrainer: null,
        bracketBattle: 1,
        bracketTrainers: null,
        bracketRound: null,

        tiedPreviewSlot: saved.currentPreviewTeam,

        battleInRound: 1,

        pikeRoom: 1,
        pikeDoors: null,
        pikeDoorPicked: null,
        pikeTeam: null,
        pikeTeamSource: null };
      saved.frontierExt.streaks[facility.id] = 0;

      if (isPikeFacility(facility)) initPikePyramidTeamFromPreview();

      if (isPyramidFacility(facility)) {
        initPikePyramidTeamFromPreview();
        const newRun = saved.frontierExt.activeRun;

        if (typeof newRun.pyramidThemeIndex !== "number") newRun.pyramidThemeIndex = 0;
        pyramidEnsureBag(newRun);
      }
      if (isDomeFacility(facility)) openDomeBracketPreview(facility);
      else if (isPikeFacility(facility)) openPikeRoomPreview(facility);
      else if (isFactoryFacility(facility)) openFactoryRentalSelection(facility);
      else if (isPyramidFacility(facility)) openPyramidFloorMap(facility);
      else openSimulatedFight(facility);
      return;
    }
    if (action === "continue") {

      if (!isFactoryFacility(facility) && currentPreviewTeamSize() !== 3) {
        showTeamSizeError(facility);
        return;
      }

      if (isPyramidFacility(facility) && currentPreviewHasHeldItems()) {
        showPyramidItemsError(facility);
        return;
      }

      if (run && !isFactoryFacility(facility)) {
        run.tiedPreviewSlot = saved.currentPreviewTeam;
      }

      if (run) run.roundJustCleared = false;

      if (isPikeFacility(facility)) initPikePyramidTeamFromPreview();
      if (isDomeFacility(facility)) openDomeBracketPreview(facility);
      else if (isPikeFacility(facility)) openPikeRoomPreview(facility);
      else if (isFactoryFacility(facility) && !run.factoryTeam) {

        openFactoryRentalSelection(facility);
      }
      else if (isPyramidFacility(facility)) openPyramidFloorMap(facility);
      else openSimulatedFight(facility);
      return;
    }
    if (action === "pike-next") {

      pikeAdvanceAfterEvent(facility);
      return;
    }

    if (action === "pyr-take-item") {
      if (!isPyramidFacility(facility)) return;
      const btn = document.querySelector("[data-action='pyr-take-item']");
      const itemId = btn && btn.dataset.itemId;
      if (itemId) takePyramidItem(facility, itemId);
      else pyramidAfterEvent(facility);
      return;
    }
    if (action === "pyr-bag-open") {
      if (isPyramidFacility(facility)) showPyramidBagDialog(facility);
      return;
    }
    if (action === "pyr-bag-close") {
      if (isPyramidFacility(facility)) openPyramidFloorMap(facility);
      return;
    }

    if (action === "round-continue") {

      if (!isFactoryFacility(facility) && currentPreviewTeamSize() !== 3) {
        showTeamSizeError(facility);
        return;
      }

      if (run && !isFactoryFacility(facility)) {
        run.tiedPreviewSlot = saved.currentPreviewTeam;
      }

      if (run) run.roundJustCleared = false;
      if (isPikeFacility(facility) || isPyramidFacility(facility)) {

        initPikePyramidTeamFromPreview();
      }
      if (isFactoryFacility(facility)) {
        restoreFactoryMoves(run);
        run.factoryPool = null;
        run.factorySelection = [];
        run.factoryTeam = null;
      }
      if (isPyramidFacility(facility)) {

        run.pyramid = null;
      }
      if (isDomeFacility(facility)) openDomeBracketPreview(facility);
      else if (isPikeFacility(facility)) openPikeRoomPreview(facility);
      else if (isFactoryFacility(facility)) openFactoryRentalSelection(facility);
      else if (isPyramidFacility(facility)) openPyramidFloorMap(facility);
      else openSimulatedFight(facility);
      return;
    }

    if (action === "factory-confirm") {
      confirmFactorySelection(facility);
      return;
    }

    if (action === "factory-swap-confirm") {
      confirmFactorySwap(facility);
      return;
    }
    if (action === "factory-swap-skip") {
      if (run) {
        run.pendingFactorySwap = null;
        run.factorySwapSelection = [null, null];
      }
      openSimulatedFight(facility);
      return;
    }
    if (action === "abandon") {

      const activeHere = run && run.facilityId === facility.id ? run : null;
      const pausedHere = saved.frontierExt.pausedRuns && saved.frontierExt.pausedRuns[facility.id];
      const doomedRun = activeHere || pausedHere;
      if (doomedRun) {
        const finalRound = doomedRun.round;
        if (finalRound > (saved.frontierExt.maxStreaks[facility.id] || 0)) {
          saved.frontierExt.maxStreaks[facility.id] = finalRound;
        }
        if (isFactoryFacility(facility)) {
          try { cleanupFactoryRun(doomedRun); } catch (e) {  }
        }
        try { restoreEnemyRuntimeStats(doomedRun); } catch (e) {  }
        if (isPyramidFacility(facility)) {
          try { setPyramidModalSizing(false); } catch (e) {  }

          try { cleanupPyramidPreviewItems(doomedRun); } catch (e) {  }
          doomedRun.pyramid = null;
        }
      }

      if (activeHere) saved.frontierExt.activeRun = null;
      if (pausedHere && saved.frontierExt.pausedRuns) {
        delete saved.frontierExt.pausedRuns[facility.id];
      }
      saved.frontierExt.streaks[facility.id] = 0;

      try { removeFrontierTeamLock(); } catch (e) {  }

      try { if (typeof saveGame === "function") saveGame(); } catch (e) {  }
      refreshActiveFrontierView();
      if (typeof closeTooltip === "function") closeTooltip();
      return;
    }
    if (action === "back") {
      openFacilityPreview(facility);
      return;
    }

    if (action === "rest") {
      const run = saved.frontierExt.activeRun;
      if (run && run.facilityId === facility.id) {

        if (isFactoryFacility(facility)) {
          try { cleanupFactoryRun(run); } catch (e) {  }
        }
        try { restoreEnemyRuntimeStats(run); } catch (e) {  }

        run.upcomingTrainer = null;
        run.factoryPool = null;
        run.factorySelection = [];
        run.factoryTeam = null;
        run.pikeDoors = null;
        run.pikeDoorPicked = null;
        run.pyramid = null;
        saved.frontierExt.pausedRuns[run.facilityId] = run;
        saved.frontierExt.activeRun = null;
        try { removeFrontierTeamLock(); } catch (e) {  }

        try { if (typeof saveGame === "function") saveGame(); } catch (e) {  }
      }
      if (typeof closeTooltip === "function") closeTooltip();
      refreshActiveFrontierView();
      return;
    }

    if (action === "resume") {
      const paused = saved.frontierExt.pausedRuns && saved.frontierExt.pausedRuns[facility.id];
      if (!paused) return;

      if (saved.frontierExt.activeRun && saved.frontierExt.activeRun.facilityId !== facility.id) {
        showRunInProgressElsewhere(facility);
        return;
      }

      if (!isFactoryFacility(facility)) {
        paused.tiedPreviewSlot = saved.currentPreviewTeam;
      }

      paused.roundJustCleared = true;
      saved.frontierExt.activeRun = paused;
      delete saved.frontierExt.pausedRuns[facility.id];
      try { applyFrontierTeamLock(); } catch (e) {  }
      openFacilityPreview(facility);
      return;
    }
    if (action === "launch") {

      if (currentPreviewTeamSize() !== 3) {
        showTeamSizeError(facility);
        return;
      }

      if (!isFactoryFacility(facility) && !allPreviewMonsAreLvl100()) {
        showTeamLevelError(facility);
        return;
      }
      if (isDomeFacility(facility)) {
        openDomePokemonSelection(facility);
        return;
      }
      launchCombat(facility);
      return;
    }
    if (action === "confirm-dome") {

      const r = saved.frontierExt.activeRun;
      if (!r || !Array.isArray(r.domeSelection) || r.domeSelection.length !== DOME_ACTIVE_SIZE) return;
      applyDomeSelection();
      launchCombat(facility);
      return;
    }
  }

  function installHelpTooltip() {
    if (typeof window.tooltipData !== "function") {
      setTimeout(installHelpTooltip, 100);
      return;
    }
    const origTooltipData = window.tooltipData;
    window.tooltipData = function (category, data) {
      if (category === "help" && typeof data === "string" && data.indexOf("FrontierExt:") === 0) {
        const facId = data.slice("FrontierExt:".length);

        if (facId === "__section__") {
          fillHoennSectionHelp();
          if (typeof openTooltip === "function") openTooltip();
          return;
        }
        const facility = FACILITIES.find((f) => f.id === facId);
        if (facility) {
          fillHelpTooltip(facility);
          if (typeof openTooltip === "function") openTooltip();
          return;
        }
      }
      return origTooltipData.apply(this, arguments);
    };
  }

  function fillHoennSectionHelp() {
    const lang = "en";
    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    if (top) top.style.display = "none";
    if (mid) { mid.style.display = "none"; mid.innerHTML = ""; }
    if (title) {
      title.style.display = "block";

      title.innerHTML = "VS Battle Frontier — Hoenn";
    }
    if (bottom) {
      bottom.style.display = "block";

      bottom.innerHTML = "Gen 3 Emerald rules: teams of 3 level-100 Pokémon, no division restrictions. Seven facilities each with their own rules and Zone Leader (Silver &amp; Gold symbols, then escalating post-Gold rematches). Rest pauses a run without losing the streak; closing the game mid-active-run counts as defeat.";
    }
  }

  function fillHelpTooltip(facility) {
    const lang = "en";
    const name = facility.name;
    const desc = facility.desc;
    const brainName = facility.brain.name;

    const t = {
          rules: "Rules",
          brain: "Zone Leader",
          silverAt: "Silver Symbol",
          goldAt: "Gold Symbol",
          teamSilver: "Silver Team",
          teamGold: "Gold Team",
          round: "Battle",
          repeatable: "Fully repeatable — runs reset each attempt but streaks are kept for posterity." };

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";

      const compactIcon = facility.iconSvg.replace(/\bclass="frontier-flair"\s*/, "");
      top.innerHTML = `<span class="frontier-ext-tooltip-icon">${compactIcon}</span>`;
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = name;
    }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `<div style="padding: 0.4rem 0.8rem; font-style: italic; opacity: 0.9;">${desc}</div>`;
    }
    if (bottom) {
      bottom.style.display = "block";
      const teamSilverStr = facility.brain.teamSilver
        ? facility.brain.teamSilver.map((id) => format(id)).join(" · ")
        : ("Random rentals");
      const teamGoldStr = facility.brain.teamGold
        ? facility.brain.teamGold.map((id) => format(id)).join(" · ")
        : ("Random rentals");

      bottom.innerHTML = `
        <div class="frontier-ext-help-brain-wrap">
          <img class="frontier-ext-help-brain" src="img/trainers/${facility.brain.sprite}.png" alt="${brainName}">
        </div>
        <div class="frontier-ext-help-rules">
          <span class="label">${t.brain}:</span>
          <span class="value">${brainName}</span>
          <span class="label">${t.silverAt} (${t.round} ${silverRoundFor(facility)}):</span>
          <span class="value">${teamSilverStr}</span>
          <span class="label">${t.goldAt} (${t.round} ${goldRoundFor(facility)}):</span>
          <span class="value">${teamGoldStr}</span>
        </div>
        <div class="frontier-ext-help-footer">${t.repeatable}</div>
      `;
    }
  }

  const NATURE_STYLE_WEIGHTS = {
    adamant: [70, 10, 20],
    modest:  [70, 10, 20],
    jolly:   [40, 30, 30],
    relaxed: [30, 50, 20],
    quiet:   [20, 40, 40],
    bold:    [15, 60, 25],
    "":      [40, 30, 30],
    none:    [40, 30, 30] };

  const SUP_PATTERNS = /bulk|amnesia|calm|swords|nasty|rest|recover|substitute|protect|detect|aquaRing|ironDefense|cosmic|growth|curse|barrier|harden|sharpen|reflect|lightScreen|safeguard|wish|synthesis|morning|moonlight|roost|agility|tailwind|helpingHand|coil|dragonDance|quiverDance|shellSmash|shiftGear|workUp|rockPolish|defog|hazeClear|doubleTeam|minimize|withdraw|stockpile|ingrain|leechSeed|gigaDrain/i;
  const DEF_PATTERNS = /leer|growl|willO|thunder.*[Ww]ave|sleep|toxic|poisonPowder|stunSpore|spore|confuse|hypno|charm|screech|metalSound|sweetKiss|babyDoll|glare|attract|disable|taunt|torment|encore|yawn|embargo|worryS|knockOff|trick|switcheroo|memento/i;

  function classifyMoveId(moveId) {
    if (!moveId) return null;
    const m = typeof move !== "undefined" ? move[moveId] : null;
    if (!m) return "SUP";
    if (m.power && m.power > 0) return "ATK";
    if (SUP_PATTERNS.test(moveId)) return "SUP";
    if (DEF_PATTERNS.test(moveId)) return "DEF";
    return "DEF";
  }

  function pickSlotByNatureGeneric(moves1to4, nature) {
    const weights = NATURE_STYLE_WEIGHTS[(nature || "").toLowerCase()] || NATURE_STYLE_WEIGHTS.none;

    const slots = [];
    for (let i = 1; i <= 4; i++) {
      const mv = moves1to4[i - 1] || moves1to4["slot" + i];
      if (!mv) continue;
      slots.push({ slot: i, style: classifyMoveId(mv) });
    }
    if (slots.length === 0) return null;

    const byStyle = { ATK: [], DEF: [], SUP: [] };
    slots.forEach((s) => byStyle[s.style].push(s.slot));

    const roll = Math.random() * (weights[0] + weights[1] + weights[2]);
    let targetStyle = "ATK";
    if (roll >= weights[0]) targetStyle = "DEF";
    if (roll >= weights[0] + weights[1]) targetStyle = "SUP";

    const candidates = byStyle[targetStyle].length ? byStyle[targetStyle] : slots.map((s) => s.slot);
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  function pickSlotByNature(member) {
    if (!member || !member.pkmn || typeof pkmn === "undefined") return null;
    const pk = pkmn[member.pkmn.id];
    if (!pk || !pk.moves) return null;
    return pickSlotByNatureGeneric(pk.moves, pk.nature || "");
  }

  function isInPalaceRun() {
    if (typeof saved !== "object" || !saved) return false;
    if (!saved.frontierExt || !saved.frontierExt.activeRun) return false;
    if (saved.currentArea !== RUN_AREA_ID) return false;
    const facility = FACILITIES.find((f) => f.id === saved.frontierExt.activeRun.facilityId);
    return !!(facility && facility.rules && facility.rules.autoMoveByNature);
  }

  function installPalaceMoveHook() {
    if (typeof window.exploreCombatPlayer !== "function") {
      setTimeout(installPalaceMoveHook, 200);
      return;
    }
    if (window.__palaceHookInstalled) return;
    window.__palaceHookInstalled = true;
    const orig = window.exploreCombatPlayer;
    window.exploreCombatPlayer = function () {
      let prevTurn = null;
      let active = null;
      if (isInPalaceRun() && typeof exploreActiveMember !== "undefined") {
        active = team[exploreActiveMember];
        if (active) prevTurn = active.turn;
      }
      const res = orig.apply(this, arguments);
      if (active) {
        const newTurn = active.turn;
        if (newTurn !== prevTurn && newTurn !== null && newTurn !== undefined) {
          const picked = pickSlotByNature(active);
          if (picked !== null && picked >= 1 && picked <= 4) {
            active.turn = picked;
          }
        }
      }
      return res;
    };
  }

  function installPalaceEnemyHook() {
    if (typeof window.exploreCombatWild !== "function") {
      setTimeout(installPalaceEnemyHook, 200);
      return;
    }
    if (window.__palaceEnemyHookInstalled) return;
    window.__palaceEnemyHookInstalled = true;
    const orig = window.exploreCombatWild;

    const globalEval = eval;
    const readWildTurn = () => {
      try { return globalEval("typeof exploreCombatWildTurn === 'undefined' ? null : exploreCombatWildTurn"); }
      catch (e) { return null; }
    };
    const writeWildTurn = (n) => {
      try { globalEval("exploreCombatWildTurn = " + JSON.stringify(n)); }
      catch (e) {  }
    };
    const readTrainerSlot = () => {
      try { return globalEval("typeof currentTrainerSlot === 'undefined' ? 1 : currentTrainerSlot"); }
      catch (e) { return 1; }
    };

    window.exploreCombatWild = function () {
      const palaceActive = isInPalaceRun();
      const prevTurn = palaceActive ? readWildTurn() : null;
      const res = orig.apply(this, arguments);
      if (palaceActive) {
        const newTurn = readWildTurn();
        if (newTurn !== prevTurn && newTurn !== null && newTurn !== undefined) {
          const slotIdx = readTrainerSlot();
          const area = areas[RUN_AREA_ID];
          if (!area) return res;
          const nature = (area.frontierExtNatures && area.frontierExtNatures[slotIdx]) || "";
          const moves = area.team["slot" + slotIdx + "Moves"] || [];
          const picked = pickSlotByNatureGeneric(moves, nature);
          if (picked !== null && picked >= 1 && picked <= 4) {
            writeWildTurn(picked);
          }
        }
      }
      return res;
    };
  }

  function installEnemyLifeOrbDrainHook() {
    if (typeof window.exploreCombatWild !== "function") {
      setTimeout(installEnemyLifeOrbDrainHook, 200);
      return;
    }
    if (window.__zdcLifeOrbDrainHooked) return;
    window.__zdcLifeOrbDrainHooked = true;
    const origWild = window.exploreCombatWild;
    const globalEval = eval;
    const readTurn     = () => { try { return globalEval("typeof exploreCombatWildTurn === 'undefined' ? null : exploreCombatWildTurn"); } catch (e) { return null; } };
    const readLastMove = () => { try { return globalEval("typeof nextMoveWild === 'undefined' ? null : nextMoveWild"); } catch (e) { return null; } };
    const readHp       = () => { try { return globalEval("typeof wildPkmnHp === 'undefined' ? null : wildPkmnHp"); } catch (e) { return null; } };
    const readHpMax    = () => { try { return globalEval("typeof wildPkmnHpMax === 'undefined' ? null : wildPkmnHpMax"); } catch (e) { return null; } };
    const writeHp      = (n) => { try { globalEval("wildPkmnHp = " + JSON.stringify(Number(n))); } catch (e) {  } };
    window.exploreCombatWild = function () {
      const prevTurn = readTurn();
      const prevMoveId = readLastMove();
      const res = origWild.apply(this, arguments);
      try {
        const newTurn = readTurn();
        if (newTurn == null || prevTurn == null || newTurn === prevTurn) return res;
        const cid = (typeof saved === "object" && saved) ? saved.currentPkmn : null;
        if (!cid || !__enemyCloneState[cid]) return res;
        const state = __enemyCloneState[cid];
        if (state.item !== "lifeOrb") return res;
        if (!prevMoveId || !move[prevMoveId] || !(move[prevMoveId].power > 0)) return res;
        const hpMax = readHpMax();
        let hp = readHp();
        if (typeof hpMax !== "number" || hpMax <= 0) return res;
        if (typeof hp !== "number" || hp <= 0) return res;
        const drain = Math.floor(hpMax * 0.10);
        writeHp(Math.max(1, hp - drain));
      } catch (e) {  }
      return res;
    };
  }

  const ARENA_TURNS_PER_SIDE = 3;

  function isArenaFacility(facility) {
    return !!(facility && facility.rules && facility.rules.threeTurnJudge);
  }
  function isInArenaRun() {
    if (typeof saved !== "object" || !saved) return false;
    if (!saved.frontierExt || !saved.frontierExt.activeRun) return false;
    if (saved.currentArea !== RUN_AREA_ID) return false;
    const facility = FACILITIES.find((f) => f.id === saved.frontierExt.activeRun.facilityId);
    return isArenaFacility(facility);
  }

  function arenaFreshMatchupCounters() {
    return {
      playerMoves: 0,
      enemyMoves: 0,
      playerDamage: 0,
      enemyDamage: 0,
      playerAttacks: 0,
      enemyAttacks: 0,
      judgeFired: false };
  }
  function arenaResetState() {
    if (!saved || !saved.frontierExt || !saved.frontierExt.activeRun) return;

    try {
      const prev = saved.frontierExt.activeRun.arenaState;
      if (prev && prev.__judgeTimer) clearTimeout(prev.__judgeTimer);
      if (prev && prev.__swapTimer)  clearTimeout(prev.__swapTimer);
    } catch (e) {  }
    saved.frontierExt.activeRun.arenaState = {
      ...arenaFreshMatchupCounters(),
      lastPlayerSlot: null,
      lastEnemySlot: null,
      matchupCount: 0,
      judgesFired: 0,
      judgeFiring: false,
      __judgeTimer: null,
      __swapTimer: null,
    };
  }
  function arenaGetState() {
    return saved && saved.frontierExt && saved.frontierExt.activeRun
      ? saved.frontierExt.activeRun.arenaState
      : null;
  }

  function arenaResetMatchup(state) {
    state.playerMoves = 0;
    state.enemyMoves = 0;
    state.playerDamage = 0;
    state.enemyDamage = 0;
    state.playerAttacks = 0;
    state.enemyAttacks = 0;
    state.judgeFired = false;
  }

  function arenaReadActiveSlots() {
    const globalEval = eval;
    let playerSlot = null, enemySlot = null;
    try { playerSlot = globalEval("typeof exploreActiveMember === 'undefined' ? null : exploreActiveMember"); } catch (e) {}
    try { enemySlot = globalEval("typeof currentTrainerSlot === 'undefined' ? 1 : currentTrainerSlot"); } catch (e) {}
    return { playerSlot, enemySlot };
  }

  function arenaReadHpRatios() {
    const globalEval = eval;
    let wildHp = 0, wildMax = 0;
    try {
      wildHp = Number(globalEval("typeof wildPkmnHp === 'undefined' ? 0 : wildPkmnHp")) || 0;
      wildMax = Number(globalEval("typeof wildPkmnHpMax === 'undefined' ? 0 : wildPkmnHpMax")) || 0;
    } catch (e) {  }

    let playerHp = 0, playerMax = 0;
    try {
      const { playerSlot } = arenaReadActiveSlots();
      if (playerSlot && typeof team !== "undefined" && team[playerSlot] && team[playerSlot].pkmn
          && typeof pkmn !== "undefined") {
        const p = pkmn[team[playerSlot].pkmn.id];
        if (p && p.playerHpMax) {
          playerHp = Math.max(0, p.playerHp || 0);
          playerMax = p.playerHpMax;
        }
      }
    } catch (e) {  }

    return {
      playerRatio: playerMax > 0 ? playerHp / playerMax : 0,
      enemyRatio:  wildMax > 0  ? Math.max(0, wildHp) / wildMax  : 0,
      wildHp, wildMax, playerHp, playerMax };
  }

  function arenaScoreCriterion(playerVal, enemyVal, eps) {
    if (Math.abs(playerVal - enemyVal) <= eps) return { p: 1, e: 1, tie: true };
    if (playerVal > enemyVal)                  return { p: 2, e: 0, tie: false, playerWins: true };
    return { p: 0, e: 2, tie: false, playerWins: false };
  }
  function arenaMarkChar(score) {
    return score === 2 ? "●" : score === 1 ? "△" : "✕";
  }
  function arenaMarkClass(score) {
    return score === 2 ? "mark-win" : score === 1 ? "mark-tie" : "mark-lose";
  }

  function showArenaVerdict(outcome) {
    const lang = "en";
    const l = {
          title: "Judge's Decision",
          cat: ["Category 1, Mind!", "Category 2, Skill!", "Category 3, Body!"],
          labelMental: "MIND",
          labelTechnique: "SKILL",
          labelPhysique: "BODY",
          arbiter: "JUDGE:",
          winVerbs: [
            { p: "Player's POKéMON attacked the most!", e: "Opponent's POKéMON attacked the most!", tie: "Both POKéMON attacked equally often!" },
            { p: "Player's POKéMON landed its hits best!", e: "Opponent's POKéMON landed its hits best!", tie: "Both POKéMON were equally effective!" },
            { p: "Player's POKéMON has the most energy left!", e: "Opponent's POKéMON has the most energy left!", tie: "Both POKéMON have equal energy!" },
          ],
          winnerLine: (kind) => kind === "player"
            ? "Opponent's POKéMON is knocked out!"
            : kind === "enemy"
              ? "Your POKéMON is knocked out!"
              : "Both POKéMON are knocked out!" };

    const host = document.createElement("div");
    host.className = "frontier-ext-arena-verdict";
    const row = (idx, label, sP, sE) => `
      <div class="verdict-row" data-idx="${idx}">
        <span class="mark left ${arenaMarkClass(sP)}">${arenaMarkChar(sP)}</span>
        <span class="label">${label}</span>
        <span class="mark right ${arenaMarkClass(sE)}">${arenaMarkChar(sE)}</span>
      </div>`;
    host.innerHTML = `
      <div class="verdict-title">${l.title}</div>
      <div class="verdict-head">
        <span class="you">${"Player"}</span>
        <span class="criterion">—</span>
        <span class="them">${"Opponent"}</span>
      </div>
      <div class="verdict-rows">
        ${row(0, l.labelMental,    outcome.mental.p,    outcome.mental.e)}
        ${row(1, l.labelTechnique, outcome.technique.p, outcome.technique.e)}
        ${row(2, l.labelPhysique,  outcome.physique.p,  outcome.physique.e)}
      </div>
      <div class="verdict-total">
        <span class="you">${outcome.totalP}</span>
        <span class="sep">${"Judgment"}</span>
        <span class="them">${outcome.totalE}</span>
      </div>
      <div class="verdict-arbiter"><span class="speaker">${l.arbiter}</span><span class="text"></span></div>
    `;
    document.body.appendChild(host);
    requestAnimationFrame(() => host.classList.add("show"));

    const rows = host.querySelectorAll(".verdict-row");
    const totalEl = host.querySelector(".verdict-total");
    const arbText = host.querySelector(".verdict-arbiter .text");
    const arbBox  = host.querySelector(".verdict-arbiter");

    const criteria = ["mental", "technique", "physique"];
    const announce = (text) => {
      arbText.textContent = " " + text;
      arbBox.classList.add("shown");
    };

    const STAGE_MS = 1200;
    criteria.forEach((key, i) => {
      setTimeout(() => {
        rows[i].classList.add("shown");
        const s = outcome[key];
        const verb = s.tie ? l.winVerbs[i].tie
                   : s.playerWins ? l.winVerbs[i].p
                                  : l.winVerbs[i].e;
        announce(`${l.cat[i]} ${verb}`);
      }, i * STAGE_MS);
    });

    setTimeout(() => { totalEl.classList.add("shown"); }, 3 * STAGE_MS);
    setTimeout(() => {
      const kind = outcome.totalP > outcome.totalE ? "player"
                 : outcome.totalE > outcome.totalP ? "enemy" : "tie";
      announce(l.winnerLine(kind));
    }, 3 * STAGE_MS + 600);

    const dismissAt = 3 * STAGE_MS + 2200;
    setTimeout(() => {
      try {
        host.classList.remove("show");
        setTimeout(() => { try { host.remove(); } catch (e) {} }, 400);
      } catch (e) {}
    }, dismissAt);

    return dismissAt;
  }

  const ARENA_PAUSE_MS = 4800;

  function arenaRenderJudge() {
    const state = arenaGetState();
    if (!state || state.judgeFired || state.judgeFiring) return;
    state.judgeFired = true;
    state.judgeFiring = true;
    state.judgesFired = (state.judgesFired || 0) + 1;

    const hp = arenaReadHpRatios();

    const playerMindRatio = state.playerMoves > 0 ? state.playerAttacks / state.playerMoves : 0;
    const enemyMindRatio  = state.enemyMoves  > 0 ? state.enemyAttacks  / state.enemyMoves  : 0;
    const mental    = arenaScoreCriterion(playerMindRatio, enemyMindRatio, 0.01);

    const technique = arenaScoreCriterion(state.playerDamage, state.enemyDamage, 1);

    const physique  = arenaScoreCriterion(hp.playerRatio, hp.enemyRatio, 0.01);

    const totalP = mental.p + technique.p + physique.p;
    const totalE = mental.e + technique.e + physique.e;
    const playerWins = totalP > totalE;
    const enemyWins  = totalE > totalP;
    const doubleKo   = totalP === totalE;

    showArenaVerdict({ mental, technique, physique, totalP, totalE });

    const snapshotActive = arenaReadActiveSlots();
    const snapshotPlayerPkmnId =
      snapshotActive.playerSlot
        && typeof team !== "undefined"
        && team[snapshotActive.playerSlot]
        && team[snapshotActive.playerSlot].pkmn
        ? team[snapshotActive.playerSlot].pkmn.id
        : null;

    const hpSnapshot = {};
    try {
      if (typeof team !== "undefined" && typeof pkmn !== "undefined") {

        for (const sl of ["slot1", "slot2", "slot3"]) {
          if (!team[sl] || !team[sl].pkmn || !team[sl].pkmn.id) continue;
          const p = pkmn[team[sl].pkmn.id];
          if (p && typeof p.playerHp === "number") hpSnapshot[sl] = p.playerHp;
        }
      }
    } catch (e) {  }

    const globalEval = eval;

    const koPlayerSnapshot = () => {
      if (!snapshotPlayerPkmnId || typeof pkmn === "undefined") return null;
      const snapSpec = pkmn[snapshotPlayerPkmnId];
      const { playerSlot: nowSlot } = arenaReadActiveSlots();
      const stillOnField = nowSlot === snapshotActive.playerSlot
        && team[nowSlot]
        && team[nowSlot].pkmn
        && team[nowSlot].pkmn.id === snapshotPlayerPkmnId;
      const stillAlive = snapSpec && (snapSpec.playerHp || 0) > 0;
      if (stillOnField && stillAlive) {
        snapSpec.playerHp = 0;
        return snapshotPlayerPkmnId;
      }
      return null;
    };

    const restoreBench = (killedSpeciesId) => {
      if (typeof team === "undefined" || typeof pkmn === "undefined") return;
      for (const sl of ["slot1", "slot2", "slot3"]) {
        if (!team[sl] || !team[sl].pkmn || !team[sl].pkmn.id) continue;
        const speciesId = team[sl].pkmn.id;
        if (killedSpeciesId && speciesId === killedSpeciesId) continue;
        const snapHp = hpSnapshot[sl];
        if (typeof snapHp !== "number" || snapHp <= 0) continue;
        const p = pkmn[speciesId];
        if (!p) continue;
        if (typeof p.playerHp === "number" && p.playerHp < snapHp) {
          p.playerHp = snapHp;
        }
      }
    };

    if (state.__judgeTimer) { try { clearTimeout(state.__judgeTimer); } catch (e) {} }
    state.__judgeTimer = setTimeout(() => {
      state.__judgeTimer = null;
      if (!isInArenaRun() || arenaGetState() !== state) return;
      try {
        if (playerWins) {

          globalEval("wildPkmnHp = 0");
          if (typeof updateWildPkmn === "function") updateWildPkmn();
          restoreBench(null);
        } else if (enemyWins) {

          const killedSpeciesId = koPlayerSnapshot();
          restoreBench(killedSpeciesId);
          if (typeof updateTeamPkmn === "function") updateTeamPkmn();
        } else if (doubleKo) {

          globalEval("wildPkmnHp = 0");
          if (typeof updateWildPkmn === "function") updateWildPkmn();
          const killedSpeciesId = koPlayerSnapshot();
          restoreBench(killedSpeciesId);
          if (typeof updateTeamPkmn === "function") updateTeamPkmn();
        }
      } catch (e) { console.error("[frontier-ext] arena force-KO failed:", e); }

      arenaResetMatchup(state);

      if (enemyWins) {
        state.judgeFiring = false;
      }
    }, ARENA_PAUSE_MS);
  }

  function arenaCheckJudge() {
    const state = arenaGetState();
    if (!state || state.judgeFired || state.judgeFiring) return;

    if (state.enemyMoves < ARENA_TURNS_PER_SIDE) return;
    const hp = arenaReadHpRatios();
    if (hp.wildHp <= 0 || hp.playerHp <= 0) return;
    arenaRenderJudge();
  }

  const ARENA_SWAP_FREEZE_MS = 3000;
  function installArenaSwapFreeze() {
    if (typeof window.setWildPkmn !== "function") {
      setTimeout(installArenaSwapFreeze, 150);
      return;
    }
    if (window.__arenaSwapFreezeHooked) return;
    window.__arenaSwapFreezeHooked = true;
    const orig = window.setWildPkmn;
    window.setWildPkmn = function () {
      const res = orig.apply(this, arguments);
      try {
        if (!isInArenaRun()) return res;
        const state = arenaGetState();
        if (!state) return res;

        if (!state.initialLoadSeen) {
          state.initialLoadSeen = true;
          return res;
        }

        if (state.__swapTimer) { try { clearTimeout(state.__swapTimer); } catch (e) {} }
        if (state.judgeFiring) {
          state.__swapTimer = setTimeout(() => {
            state.__swapTimer = null;
            state.judgeFiring = false;
            state.arenaSwapFreezing = false;
          }, ARENA_SWAP_FREEZE_MS);
          state.arenaSwapFreezing = true;
        } else {
          state.arenaSwapFreezing = true;
          state.__swapTimer = setTimeout(() => {
            state.__swapTimer = null;
            state.arenaSwapFreezing = false;
          }, ARENA_SWAP_FREEZE_MS);
        }
      } catch (e) { console.error("[frontier-ext] arena swap freeze failed:", e); }
      return res;
    };
  }

  function installArenaShouldCombatStopHook() {
    if (typeof window.shouldCombatStop !== "function") {
      setTimeout(installArenaShouldCombatStopHook, 150);
      return;
    }
    if (window.__arenaShouldCombatStopHooked) return;
    window.__arenaShouldCombatStopHooked = true;
    const orig = window.shouldCombatStop;
    window.shouldCombatStop = function () {
      try {
        if (isInArenaRun()) {
          const s = arenaGetState();
          if (s && (s.judgeFiring || s.arenaSwapFreezing)) return true;
        }
      } catch (e) {  }
      return orig.apply(this, arguments);
    };
  }

  function installArenaSwitchBlock() {
    if (typeof window.switchMember !== "function") {
      setTimeout(installArenaSwitchBlock, 150);
      return;
    }
    if (window.__arenaSwitchBlockHooked) return;
    window.__arenaSwitchBlockHooked = true;
    const orig = window.switchMember;
    window.switchMember = function (member) {
      try {
        if (isInArenaRun()
            && typeof exploreActiveMember !== "undefined"
            && team[exploreActiveMember]
            && team[exploreActiveMember].pkmn
            && pkmn[team[exploreActiveMember].pkmn.id]
            && pkmn[team[exploreActiveMember].pkmn.id].playerHp > 0
            && exploreActiveMember !== member) {
          return;
        }
      } catch (e) {  }
      return orig.apply(this, arguments);
    };
  }

  function installRunLockTooltipHook() {
    if (typeof window.openTooltip !== "function"
     || typeof window.closeTooltip !== "function") {
      setTimeout(installRunLockTooltipHook, 200);
      return;
    }
    if (window.__frontierExtRunLockHooked) return;
    window.__frontierExtRunLockHooked = true;
    const origOpen = window.openTooltip;
    const origClose = window.closeTooltip;
    const lockClass = "frontier-ext-run-lock-open";

    const BLOCKER_MARKER = "data-frontier-ext-blocker";
    const ensureBlocker = () => {

      const existing = document.getElementById("prevent-tooltip-exit");
      if (existing && !existing.hasAttribute(BLOCKER_MARKER)) return;
      if (existing) return;
      const el = document.createElement("div");
      el.id = "prevent-tooltip-exit";
      el.setAttribute(BLOCKER_MARKER, "1");
      el.style.display = "none";
      document.body.appendChild(el);
    };
    const removeBlocker = () => {
      const el = document.getElementById("prevent-tooltip-exit");
      if (el && el.hasAttribute(BLOCKER_MARKER)) {
        try { el.remove(); } catch (e) {}
      }
    };

    const isFrontierTooltip = () => {
      const box = document.getElementById("tooltipBox");
      if (!box) return false;
      return !!box.querySelector('[class*="frontier-ext-"]');
    };

    const isDismissibleErrorModal = () => {
      const box = document.getElementById("tooltipBox");
      return box ? !!box.querySelector(".zdc-error-modal-bypass") : false;
    };
    const apply = () => {
      try {
        const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
        const bg = document.getElementById("tooltipBackground");
        const box = document.getElementById("tooltipBox");
        if (run && isFrontierTooltip() && !isDismissibleErrorModal()) {
          if (bg)  bg.classList.add(lockClass);
          if (box) box.classList.add(lockClass);
          ensureBlocker();
        } else {
          if (bg)  bg.classList.remove(lockClass);
          if (box) box.classList.remove(lockClass);
          removeBlocker();
        }
      } catch (e) {  }
    };
    window.openTooltip = function () {
      const res = origOpen.apply(this, arguments);
      apply();
      return res;
    };
    window.closeTooltip = function () {
      try {
        const bg = document.getElementById("tooltipBackground");
        const box = document.getElementById("tooltipBox");
        if (bg)  bg.classList.remove(lockClass);
        if (box) box.classList.remove(lockClass);
        removeBlocker();
      } catch (e) {  }
      return origClose.apply(this, arguments);
    };
  }

  function installMenuLockDuringRun() {
    const hasRun = () => !!(saved && saved.frontierExt && saved.frontierExt.activeRun);

    const syncMenuLockCss = () => {
      try {
        const menu = document.getElementById("menu-items");
        if (!menu) return;
        const locked = hasRun();
        for (const el of menu.querySelectorAll(".menu-item")) {

          const isVs = el.id === "menu-item-vs";
          const shouldDim = locked && !isVs;
          const target = shouldDim ? "brightness(0.6)" : "";
          if (el.style.filter !== target) el.style.filter = target;
        }
      } catch (e) {  }
    };
    window.__frontierExtSyncMenuLock = syncMenuLockCss;

    if (typeof window.switchMenu === "function" && !window.__frontierExtSwitchMenuHooked) {
      window.__frontierExtSwitchMenuHooked = true;
      const orig = window.switchMenu;
      window.switchMenu = function (id) {
        if (hasRun() && id !== "vs") return;
        return orig.apply(this, arguments);
      };
    }
    for (const name of ["claimMysteryGift", "claimExportReward", "claimWonderTrade"]) {
      if (typeof window[name] === "function" && !window["__frontierExtHooked_" + name]) {
        window["__frontierExtHooked_" + name] = true;
        const orig = window[name];
        window[name] = function () {
          if (hasRun()) return;
          return orig.apply(this, arguments);
        };
      }
    }
    syncMenuLockCss();
    try {
      const menu = document.getElementById("menu-items");
      if (menu && typeof MutationObserver === "function") {

        const mo = new MutationObserver(syncMenuLockCss);
        mo.observe(menu, { childList: true, subtree: true });
      }
    } catch (e) {  }
  }

  function installPyramidStatusStickHook() {
    if (typeof window.moveBuff !== "function") {
      setTimeout(installPyramidStatusStickHook, 200);
      return;
    }
    if (window.__frontierExtPyrStatusStickHooked) return;
    window.__frontierExtPyrStatusStickHooked = true;
    const STATUS_RX = /^(burn|freeze|paralysis|poisoned|sleep)$/;
    const orig = window.moveBuff;
    window.moveBuff = function (target, buff, mod, turnOverride) {
      try {
        if (turnOverride === undefined
            && typeof buff === "string" && STATUS_RX.test(buff)
            && isInPyramidRun()) {
          return orig.call(this, target, buff, mod, PIKE_PYRAMID_STATUS_TURNS);
        }
      } catch (e) {  }
      return orig.apply(this, arguments);
    };
  }

  function installArenaCombatHooks() {
    if (typeof window.exploreCombatPlayer !== "function"
     || typeof window.exploreCombatWild !== "function") {
      setTimeout(installArenaCombatHooks, 200);
      return;
    }
    if (window.__arenaHookInstalled) return;
    window.__arenaHookInstalled = true;

    const globalEval = eval;
    const readWildHp = () => { try { return Number(globalEval("typeof wildPkmnHp === 'undefined' ? 0 : wildPkmnHp")) || 0; } catch (e) { return 0; } };
    const readWildTurn = () => { try { return globalEval("typeof exploreCombatWildTurn === 'undefined' ? null : exploreCombatWildTurn"); } catch (e) { return null; } };
    const readTrainerSlot = () => { try { return globalEval("typeof currentTrainerSlot === 'undefined' ? 1 : currentTrainerSlot"); } catch (e) { return 1; } };

    const detectMatchupChange = () => {
      const state = arenaGetState();
      if (!state) return null;
      const { playerSlot, enemySlot } = arenaReadActiveSlots();
      if (state.lastPlayerSlot === null && state.lastEnemySlot === null) {

        state.lastPlayerSlot = playerSlot;
        state.lastEnemySlot = enemySlot;
        state.matchupCount = 1;
        return state;
      }
      if (playerSlot !== state.lastPlayerSlot || enemySlot !== state.lastEnemySlot) {

        arenaResetMatchup(state);
        state.lastPlayerSlot = playerSlot;
        state.lastEnemySlot = enemySlot;
        state.matchupCount = (state.matchupCount || 0) + 1;
      }
      return state;
    };

    const readPlayerActiveHp = () => {
      try {
        const { playerSlot } = arenaReadActiveSlots();
        if (!playerSlot || typeof team === "undefined" || !team[playerSlot]
            || !team[playerSlot].pkmn || typeof pkmn === "undefined") return 0;
        const p = pkmn[team[playerSlot].pkmn.id];
        return p ? Math.max(0, p.playerHp || 0) : 0;
      } catch (e) { return 0; }
    };

    const readPlayerHpBySpecies = (speciesId) => {
      try {
        if (!speciesId || typeof pkmn === "undefined" || !pkmn[speciesId]) return 0;
        return Math.max(0, pkmn[speciesId].playerHp || 0);
      } catch (e) { return 0; }
    };
    const readActivePlayerSpecies = () => {
      try {
        const { playerSlot } = arenaReadActiveSlots();
        if (!playerSlot || typeof team === "undefined" || !team[playerSlot]
            || !team[playerSlot].pkmn) return null;
        return team[playerSlot].pkmn.id || null;
      } catch (e) { return null; }
    };

    const origPlayer = window.exploreCombatPlayer;
    window.exploreCombatPlayer = function () {
      const arenaActive = isInArenaRun();

      if (arenaActive) {
        const s = arenaGetState();
        if (s && (s.judgeFiring || s.arenaSwapFreezing)) return;
      }
      let active = null, prevTurn = null, prevWildHp = null;
      if (arenaActive && typeof exploreActiveMember !== "undefined") {
        detectMatchupChange();
        active = team[exploreActiveMember];
        prevTurn = active ? active.turn : null;
        prevWildHp = readWildHp();
      }
      const res = origPlayer.apply(this, arguments);
      if (arenaActive && active) {
        const newTurn = active.turn;
        if (newTurn !== prevTurn && newTurn !== null && newTurn !== undefined) {
          const state = arenaGetState();
          if (state && !state.judgeFiring) {
            state.playerMoves++;
            const postWildHp = readWildHp();
            state.playerDamage += Math.max(0, (prevWildHp || 0) - postWildHp);
            try {
              const p = pkmn[active.pkmn.id];
              const moveKey = p && p.moves && p.moves["slot" + prevTurn];
              if (moveKey && move[moveKey] && move[moveKey].power && move[moveKey].power > 0) {
                state.playerAttacks++;
              }
            } catch (e) {  }

            if ((prevWildHp || 0) > 0 && postWildHp <= 0) {
              arenaResetMatchup(state);
              state.lastPlayerSlot = null;
              state.lastEnemySlot = null;
              return res;
            }
            arenaCheckJudge();
          }
        }
      }
      return res;
    };

    const origWild = window.exploreCombatWild;
    window.exploreCombatWild = function () {
      const arenaActive = isInArenaRun();
      if (arenaActive) {
        const s = arenaGetState();
        if (s && (s.judgeFiring || s.arenaSwapFreezing)) return;
      }
      let prevWildTurn = null, prevPlayerHp = 0, prevPlayerSpecies = null;
      if (arenaActive) {
        detectMatchupChange();
        prevWildTurn = readWildTurn();

        prevPlayerSpecies = readActivePlayerSpecies();
        prevPlayerHp = prevPlayerSpecies
          ? readPlayerHpBySpecies(prevPlayerSpecies)
          : readPlayerActiveHp();
      }
      const res = origWild.apply(this, arguments);
      if (arenaActive) {
        const newWildTurn = readWildTurn();
        if (newWildTurn !== prevWildTurn && newWildTurn !== null && newWildTurn !== undefined) {
          const state = arenaGetState();
          if (state && !state.judgeFiring) {
            state.enemyMoves++;

            const postPlayerHp = prevPlayerSpecies
              ? readPlayerHpBySpecies(prevPlayerSpecies)
              : readPlayerActiveHp();
            state.enemyDamage += Math.max(0, prevPlayerHp - postPlayerHp);
            try {
              const area = areas[RUN_AREA_ID];
              const slotIdx = readTrainerSlot();
              const moves = area && area.team && area.team["slot" + slotIdx + "Moves"];
              const moveKey = moves && moves[prevWildTurn - 1];
              if (moveKey && move[moveKey] && move[moveKey].power && move[moveKey].power > 0) {
                state.enemyAttacks++;
              }
            } catch (e) {  }

            const activeChanged = prevPlayerSpecies
              && readActivePlayerSpecies() !== prevPlayerSpecies;
            if ((prevPlayerHp > 0 && postPlayerHp <= 0) || activeChanged) {
              arenaResetMatchup(state);
              state.lastPlayerSlot = null;
              state.lastEnemySlot = null;
              return res;
            }
            arenaCheckJudge();
          }
        }
      }
      return res;
    };
  }

  const FACTORY_POOL_SIZE = 6;
  const FACTORY_TEAM_SIZE = 3;
  const FACTORY_PREVIEW_SLOT = "__frontierExtFactory";

  function isFactoryFacility(facility) {
    return !!(facility && facility.rules && facility.rules.rentalPool);
  }

  const FACTORY_RENTAL_NATURES = ["adamant", "modest", "jolly", "relaxed", "quiet", "bold", ""];

  function rollFactoryIv() { return Math.floor(Math.random() * 7); }

  function rollFactoryIvs() {
    return {
      hp: rollFactoryIv(),
      atk: rollFactoryIv(),
      def: rollFactoryIv(),
      satk: rollFactoryIv(),
      sdef: rollFactoryIv(),
      spe: rollFactoryIv() };
  }

  function rollFactoryAbility(id) {
    if (typeof pkmn === "undefined" || !pkmn[id]) return null;
    if (typeof learnPkmnAbility === "function") {
      try {
        const picked = learnPkmnAbility(id);
        if (picked) return picked;
      } catch (e) {  }
    }

    const h = pkmn[id].hiddenAbility;
    return h ? (h.id || null) : null;
  }

  function generateFactoryRentalPool(facility, round) {
    const diff = computeRunDifficulty(round, facility);
    const { tier } = diff;

    const pool = getPoolForFacility(facility, tier, round);

    const rentals = [];
    const used = new Set();
    let safety = 0;
    while (rentals.length < FACTORY_POOL_SIZE && safety < 100) {
      safety++;
      const id = pool[Math.floor(Math.random() * pool.length)];
      if (!id || used.has(id)) continue;
      used.add(id);
      rentals.push({
        id,
        moves: pickMovesetFor(id, diff),
        nature: FACTORY_RENTAL_NATURES[Math.floor(Math.random() * FACTORY_RENTAL_NATURES.length)],
        ivs: rollFactoryIvs(),
        ability: rollFactoryAbility(id) });
    }
    return rentals;
  }

  function applyFactoryMoves(run) {
    if (!run || !run.factoryTeam || typeof pkmn === "undefined") return;
    if (!run.factoryOriginalState) run.factoryOriginalState = {};
    for (const rental of run.factoryTeam) {
      const p = pkmn[rental.id];
      if (!p) continue;
      if (!run.factoryOriginalState[rental.id]) {

        run.factoryOriginalState[rental.id] = {
          moves: p.moves ? { ...p.moves } : undefined,
          nature: p.nature,
          ivs: p.ivs ? { ...p.ivs } : undefined,
          ability: p.ability,
          level: p.level,
          exp: p.exp,
          caught: p.caught };
      }

      const cleanedRentalMoves = filterBannedEnemyMoves(rental.moves.slice(), rental.id);
      p.moves = {
        slot1: cleanedRentalMoves[0],
        slot2: cleanedRentalMoves[1],
        slot3: cleanedRentalMoves[2],
        slot4: cleanedRentalMoves[3] };
      p.nature = rental.nature || "";
      p.ivs = { ...rental.ivs };
      p.ability = rental.ability || undefined;

      p.level = 100;
      if (!p.caught || p.caught < 1) p.caught = 1;

      p.exp = 0;
    }
  }
  function restoreFactoryMoves(run) {
    if (!run || !run.factoryOriginalState || typeof pkmn === "undefined") return;
    for (const [id, orig] of Object.entries(run.factoryOriginalState)) {
      if (!pkmn[id]) continue;
      pkmn[id].moves = orig.moves;
      pkmn[id].nature = orig.nature;
      pkmn[id].ivs = orig.ivs;
      pkmn[id].ability = orig.ability;
      if ("level" in orig) pkmn[id].level = orig.level;
      if ("exp"   in orig) pkmn[id].exp   = orig.exp;
      if ("caught" in orig) pkmn[id].caught = orig.caught;
    }
    run.factoryOriginalState = {};
  }

  const __enemyCloneIds = new Set();

  const __enemyCloneState = Object.create(null);

  let __enemyCloneTickTimer = null;

  let __enemyHeldItemObserver = null;
  let __enemyHeldItemEl = null;

  let __enemyCloneLastPlayerHp = null;
  let __enemyCloneLastEnemyHp  = null;

  const __BANNED_ENEMY_MOVE_CANDIDATES = [
    "batonPass", "selfDestruct", "explosion", "memento", "finalGambit",
    "healingWish", "lunarDance", "mistyExplosion", "mindBlown", "chloroblast",
    "destinyBond", "perishSong", "futureSight", "doomDesire", "wish",
    "partingShot", "uTurn", "voltSwitch", "flipTurn", "teleport", "lastResort",
  ];
  const BANNED_ENEMY_MOVES = new Set();
  function __initBannedEnemyMoves() {
    if (typeof move === "undefined") return;
    for (const id of __BANNED_ENEMY_MOVE_CANDIDATES) {
      if (move[id]) BANNED_ENEMY_MOVES.add(id);
    }
  }

  const __ITEM_POOL_CANDIDATES = [

    "blackBelt", "blackGlasses", "charcoal", "dragonFang", "fairyFeather",
    "hardStone", "magnet", "metalCoat", "miracleSeed", "mysticWater",
    "neverMeltIce", "poisonBarb", "sharpBeak", "silkScarf", "silverPowder",
    "softSand", "spellTag", "twistedSpoon",

    "bugGem", "darkGem", "dragonGem", "electricGem", "fairyGem",
    "fightingGem", "fireGem", "flyingGem", "ghostGem", "grassGem",
    "groundGem", "iceGem", "normalGem", "poisonGem", "psychicGem",
    "rockGem", "steelGem", "waterGem",

    "leftovers", "lifeOrb", "choiceBand", "choiceSpecs", "flameOrb",
    "toxicOrb", "weaknessPolicy", "loadedDice", "assaultVest", "eviolite",
    "lightClay", "mentalHerb", "quickClaw", "metronome", "powerHerb",
    "luckyPunch", "laggingTail", "heavyDutyBoots", "clearAmulet",

    "heatRock", "dampRock", "smoothRock", "icyRock",
    "foggySeed", "electricSeed", "grassySeed", "mistySeed",

    "occaBerry", "passhoBerry", "wacanBerry", "rindoBerry", "yacheBerry",
    "chopleBerry", "kebiaBerry", "shucaBerry", "cobaBerry", "payapaBerry",
    "tangaBerry", "chartiBerry", "kasibBerry", "habanBerry", "colburBerry",
    "babiriBerry", "roseliBerry",

  ];
  let __ITEM_POOL_STANDARD = [];
  function __initItemPool() {
    if (typeof item === "undefined") return;
    const missing = [];
    __ITEM_POOL_STANDARD = __ITEM_POOL_CANDIDATES.filter((id) => {
      if (item[id]) return true;
      missing.push(id);
      return false;
    });
    if (missing.length) {
      console.info("[frontier-ext][enemy-ctx] items skipped (not in Pokechill dict):", missing.join(", "));
    }
  }

  const __ABILITY_SCORERS = {

    intimidate:    () => 5,
    dauntingLook:  () => 5,

    drought:       (moves) => __anyMoveOfType(moves, "fire")     ? 6 : 0,
    drizzle:       (moves) => __anyMoveOfType(moves, "water")    ? 6 : 0,
    sandStream:    (moves, p) => (p.type||[]).some((t)=>/rock|ground|steel/.test(t)) ? 5 : 0,
    snowWarning:   (moves, p) => (p.type||[]).some((t)=>t==="ice") ? 5 : 0,
    somberField:   () => 3,
    electricSurge: (moves) => __anyMoveOfType(moves, "electric") ? 4 : 0,
    grassySurge:   (moves) => __anyMoveOfType(moves, "grass")    ? 4 : 0,
    mistySurge:    (moves) => __anyMoveOfType(moves, "fairy")    ? 4 : 0,

    speedBoost:    () => 7,
    iceBody:       (moves, p) => (p.type||[]).some((t)=>t==="ice") ? 5 : 2,
    rainDish:      (moves, p) => (p.type||[]).some((t)=>t==="water") ? 5 : 2,

    hugePower:     (moves) => {
      for (const m of moves) if (m && move[m] && move[m].split === "physical" && (move[m].power || 0) > 0) return 8;
      return 0;
    },
    toughClaws:    (moves)   => __anyContactMove(moves) ? 7 : 0,
    ironFist:      (moves)   => __anyPunchMove(moves)   ? 9 : 0,
    strongJaw:     (moves)   => __anyBiteMove(moves)    ? 9 : 0,
    sheerForce:    (moves)   => __countSecondaryEffectMoves(moves) >= 2 ? 10 : 0,
    technician:    (moves)   => __countLowBpMoves(moves)           >= 2 ? 10 : 0,
    adaptability:  (moves, p) => {
      if (!Array.isArray(moves)) return 0;
      const types = Array.isArray(p.type) ? p.type : [p.type];
      let stab = 0;
      for (const m of moves) {
        if (!m || typeof move === "undefined" || !move[m]) continue;
        if (types.indexOf(move[m].type) !== -1) stab++;
      }
      return stab >= 3 ? 6 : 0;
    },

    skillLink:     (moves) => __anyMultiHitMove(moves) ? 8 : 0,

    guts:          (moves) => moves.length ? 4 : 0,

    chlorophyll:   (moves) => __anyMoveOfType(moves, "fire")     ? 6 : 0,
    swiftSwim:     (moves) => __anyMoveOfType(moves, "water")    ? 6 : 0,
    sandRush:      (moves, p) => (p.type||[]).some((t)=>/rock|ground|steel/.test(t)) ? 6 : 0,
    slushRush:     (moves, p) => (p.type||[]).some((t)=>t==="ice") ? 6 : 0,
    moltShed:      () => 3,

    unburden:      () => 4,
    gorillaTactics: (moves) => {

      let phys = 0;
      for (const m of moves) if (m && move[m] && move[m].split === "physical") phys++;
      return phys >= 2 ? 7 : 0;
    },

    solarPower:    (moves) => {

      for (const m of moves) if (m && move[m] && move[m].type === "fire" && move[m].split === "special") return 6;
      return 0;
    },
    sandForce:     (moves, p) => {

      if ((p.type||[]).some((t)=>/rock|ground|steel/.test(t))) return 4;
      return 0;
    },

    aerilate:      (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    pixilate:      (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    galvanize:     (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    glaciate:      (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    pyrolate:      (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    terralate:     (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    toxilate:      (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    hydrolate:     (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    ferrilate:     (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    chrysilate:    (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    verdify:       (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    gloomilate:    (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    espilate:      (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,
    dragonMaw:     (moves) => __anyMoveOfType(moves, "normal") ? 9 : 0,

    hydratation:   (moves, p) => (p.type||[]).some((t)=>t==="water") ? 5 : 0,
    sandVeil:      (moves, p) => (p.type||[]).some((t)=>/rock|ground|steel/.test(t)) ? 4 : 0,
    snowCloak:     (moves, p) => (p.type||[]).some((t)=>t==="ice") ? 4 : 0,

    libero:        (moves) => {
      if (typeof ability === "undefined" || !ability.libero) return 0;
      let n = 0;
      for (const m of moves) {
        if (!m || !move[m] || !(move[m].power > 0)) continue;
        if (move[m].affectedBy && move[m].affectedBy.indexOf(ability.libero.id) !== -1) n++;
      }
      return n >= 2 ? 11 : n >= 1 ? 8 : 0;
    },
    reckless:      (moves) => {
      if (typeof ability === "undefined" || !ability.reckless) return 0;
      let n = 0;
      for (const m of moves) {
        if (!m || !move[m] || !(move[m].power > 0)) continue;
        if (move[m].affectedBy && move[m].affectedBy.indexOf(ability.reckless.id) !== -1) n++;
      }
      return n >= 2 ? 9 : n >= 1 ? 6 : 0;
    },
    normalize:     (moves) => {
      let n = 0;
      for (const m of moves) if (m && move[m] && (move[m].power || 0) > 0) n++;
      return n >= 3 ? 5 : n >= 2 ? 3 : 0;
    },

    climaTact:     (moves, p) => {
      const WEATHER_AB = new Set([
        "drought","drizzle","sandStream","snowWarning","somberField",

        "electricSurge","grassySurge","mistySurge",
      ]);
      const ownAb = p && p.ability ? (typeof p.ability === "object" ? p.ability.id : p.ability) : null;
      const ownHidden = p && p.hiddenAbility ? (typeof p.hiddenAbility === "object" ? p.hiddenAbility.id : p.hiddenAbility) : null;
      const hasSetterAb = WEATHER_AB.has(ownAb) || WEATHER_AB.has(ownHidden);
      let hasSetterMove = false;
      if (typeof ability !== "undefined" && ability.climaTact) {
        const cId = ability.climaTact.id;
        for (const m of moves) {
          if (!m || !move[m]) continue;
          if (move[m].affectedBy && move[m].affectedBy.indexOf(cId) !== -1) { hasSetterMove = true; break; }
        }
      }
      if (!hasSetterAb && !hasSetterMove) return 0;
      return hasSetterAb ? 6 : 4;
    },
    brittleArmor:  (moves, p) => (p.type||[]).some((t)=>t==="ice"||t==="rock") ? 4 : 0,

    iceBody:       (moves, p) => (p.type||[]).some((t)=>t==="ice") ? 4 : 0,
    static:        (moves, p) => (p.type||[]).some((t)=>t==="electric") ? 3 : 0,
    flameBody:     (moves, p) => (p.type||[]).some((t)=>t==="fire") ? 3 : 0,
    poisonPoint:   (moves, p) => (p.type||[]).some((t)=>t==="poison") ? 3 : 0,
    strangeCharm:  (moves, p) => (p.type||[]).some((t)=>t==="psychic"||t==="fairy") ? 3 : 0,
    effectSpore:   (moves, p) => (p.type||[]).some((t)=>t==="grass") ? 3 : 0,
    glacialBody:   (moves, p) => (p.type||[]).some((t)=>t==="ice") ? 3 : 0,
    voltAbsorb:    (moves, p) => (p.type||[]).some((t)=>t==="electric"||t==="ground") ? 5 : 3,
    waterAbsorb:   (moves, p) => (p.type||[]).some((t)=>t==="water"||t==="ground"||t==="rock") ? 5 : 3,
    flareAbsorb:   (moves, p) => (p.type||[]).some((t)=>t==="fire"||t==="ice"||t==="grass"||t==="bug"||t==="steel") ? 5 : 3,
    curseAbsorb:   (moves, p) => (p.type||[]).some((t)=>t==="ghost"||t==="dark") ? 5 : 3,
    poisonAbsorb:  (moves, p) => (p.type||[]).some((t)=>t==="poison"||t==="grass"||t==="fairy") ? 5 : 3,
    frostAbsorb:   (moves, p) => (p.type||[]).some((t)=>t==="ice"||t==="ground"||t==="flying"||t==="dragon") ? 5 : 3,
    psychicAbsorb: (moves, p) => (p.type||[]).some((t)=>t==="psychic"||t==="dark") ? 5 : 3,
    lightAbsorb:   (moves, p) => (p.type||[]).some((t)=>t==="fairy"||t==="steel"||t==="poison") ? 5 : 3,
    growthAbsorb:  (moves, p) => (p.type||[]).some((t)=>t==="grass"||t==="ground"||t==="water"||t==="rock") ? 5 : 3,
    rivalry:       () => 4,
    synchronize:   () => 3,
    scrappy:       (moves, p) => (p.type||[]).some((t)=>t==="normal"||t==="fighting") ? 3 : 0,
    magicGuard:    () => 3,

    ambidextrous:  (moves) => {
      const types = new Set();
      for (const m of moves) {
        if (!m || !move[m] || !(move[m].power > 0)) continue;
        if (move[m].type) types.add(move[m].type);
      }
      return types.size >= 2 ? 5 : 0;
    },

    noGuard:       (moves) => {
      let atk = 0;
      for (const m of moves) if (m && move[m] && (move[m].power || 0) > 0) atk++;
      return atk >= 2 ? 4 : 0;
    },

    tintedLens:    (moves) => {

      const typeSet = new Set();
      for (const m of moves) {
        if (!m || !move[m]) continue;
        if ((move[m].power || 0) > 0 && move[m].type) typeSet.add(move[m].type);
      }
      return typeSet.size >= 3 ? 3 : 0;
    },

    megaLauncher:  (moves) => {
      if (typeof ability === "undefined" || !ability.megaLauncher) return 0;
      return __countAffectedByAb(moves, ability.megaLauncher.id) > 0 ? 9 : 0;
    },
    metalhead:     (moves) => {
      if (typeof ability === "undefined" || !ability.metalhead) return 0;
      return __countAffectedByAb(moves, ability.metalhead.id) > 0 ? 8 : 0;
    },

    prankster:     (moves) => (__anyMoveOfType(moves, "ghost") || __anyMoveOfType(moves, "dark"))    ? 6 : 0,
    galeWings:     (moves) => (__anyMoveOfType(moves, "flying") || __anyMoveOfType(moves, "bug"))    ? 6 : 0,
    neuroforce:    (moves) => (__anyMoveOfType(moves, "psychic") || __anyMoveOfType(moves, "fairy")) ? 6 : 0,

    merciless:     (moves) => {

      let atkMoves = 0;
      for (const m of moves) if (m && move[m] && (move[m].power || 0) > 0) atkMoves++;
      return atkMoves >= 2 ? 4 : 0;
    },
    stamina:       () => 4,
    toxicBoost:    (moves) => {
      let phys = 0;
      for (const m of moves) if (m && move[m] && move[m].split === "physical") phys++;
      return phys >= 2 ? 5 : 0;
    },
    flareBoost:    (moves) => {
      let spec = 0;
      for (const m of moves) if (m && move[m] && move[m].split === "special") spec++;
      return spec >= 2 ? 5 : 0;
    },

    protosynthesis: (moves) => {

      let atkMoves = 0;
      for (const m of moves) if (m && move[m] && (move[m].power || 0) > 0) atkMoves++;
      return atkMoves >= 2 ? 5 : 0;
    },
    quarkDrive:    (moves) => {
      let atkMoves = 0;
      for (const m of moves) if (m && move[m] && (move[m].power || 0) > 0) atkMoves++;
      return atkMoves >= 2 ? 4 : 0;
    },

    insomnia:      () => 2,
    immunity:      () => 2,
    limber:        () => 2,
    ownTempo:      () => 2,
    magmaArmor:    () => 2,
    waterVeil:     () => 2,

    marvelScale:   () => 4,
    livingShield:  () => 4,

    overgrow:      (moves) => __anyMoveOfType(moves, "grass")  ? 4 : 0,
    blaze:         (moves) => __anyMoveOfType(moves, "fire")   ? 4 : 0,
    swarm:         (moves) => __anyMoveOfType(moves, "bug")    ? 4 : 0,
    torrent:       (moves) => __anyMoveOfType(moves, "water")  ? 4 : 0,

    intangible:    () => 3,
    hyperconductor:() => 3,
    faeRush:       () => 3,

    bastion:       (moves) => __anyMoveOfType(moves, "steel")    ? 4 : 0,
    average:       (moves) => __anyMoveOfType(moves, "normal")   ? 4 : 0,
    resolve:       (moves) => __anyMoveOfType(moves, "fighting") ? 4 : 0,
    mistify:       (moves) => __anyMoveOfType(moves, "psychic")  ? 4 : 0,
    hexerei:       (moves) => __anyMoveOfType(moves, "ghost")    ? 4 : 0,
    glimmer:       (moves) => __anyMoveOfType(moves, "fairy")    ? 4 : 0,
    skyward:       (moves) => __anyMoveOfType(moves, "flying")   ? 4 : 0,
    draconic:      (moves) => __anyMoveOfType(moves, "dragon")   ? 4 : 0,
    noxious:       (moves) => __anyMoveOfType(moves, "poison")   ? 4 : 0,
    solid:         (moves) => __anyMoveOfType(moves, "rock")     ? 4 : 0,
    rime:          (moves) => __anyMoveOfType(moves, "ice")      ? 4 : 0,
    voltage:       (moves) => __anyMoveOfType(moves, "electric") ? 4 : 0,

    grabGuard:     () => 2,
    waterGuard:    () => 2,
    flameGuard:    () => 2,
    curseGuard:    () => 2,
    poisonGuard:   () => 2,
    iceGuard:      () => 2,
    psychicGuard:  () => 2,
    fairyGuard:    () => 2,
    leafGuard:     () => 2,
    plainGuard:    () => 2,
    sinisterGuard: () => 2,
    steelGuard:    () => 2,
    dragonGuard:   () => 2,
    bugGuard:      () => 2,
    rockGuard:     () => 2,
    groundGuard:   () => 2,
    flyingGuard:   () => 2,

    shieldsDown:   (moves, p) => (p.type||[]).some((t)=>t==="rock")  ? 3 : 2,
    treasureOfRuin:(moves, p) => (p.type||[]).some((t)=>/dark|ghost/.test(t)) ? 4 : 2,
    thousandArms:  (moves, p) => (p.type||[]).some((t)=>t==="ground") ? 5 : 3,
    darkAura:      (moves, p) => (p.type||[]).some((t)=>t==="dark")  ? 3 : 1,
    soulAsterism:  (moves, p) => (p.type||[]).some((t)=>t==="ghost") ? 3 : 1,

    sharpness:     (moves) => {
      if (typeof ability === "undefined" || !ability.sharpness) return 0;
      return __countAffectedByAb(moves, ability.sharpness.id) > 0 ? 8 : 0;
    },

    hyperCutter:   () => 3,
    bigPecks:      () => 3,
    wonderSkin:    () => 2,

    flowerVeil:    () => 2,
    aromaVeil:     () => 2,
    sweetVeil:     () => 2,
    pastelVeil:    () => 2,

    gooey:         () => 3,
    angerPoint:    (moves) => {
      for (const m of moves) if (m && move[m] && move[m].split === "physical") return 4;
      return 0;
    },
    justified:     (moves) => {
      for (const m of moves) if (m && move[m] && move[m].split === "special") return 4;
      return 0;
    },
  };

  let __ACTIVE_ABILITY_IDS = [];

  let __CANONICAL_NORMAL_POOL = new Set();
  let __CANONICAL_HIDDEN_POOL = new Set();
  let __CANONICAL_HIDDEN_ONLY = new Set();
  function __initCanonicalAbilityPools() {
    __CANONICAL_NORMAL_POOL = new Set();
    __CANONICAL_HIDDEN_POOL = new Set();
    __CANONICAL_HIDDEN_ONLY = new Set();
    if (typeof pkmn !== "object") return;
    for (const id in pkmn) {
      const p = pkmn[id];
      if (!p) continue;
      if (p.ability) {
        const aid = typeof p.ability === "object" ? p.ability.id : p.ability;
        if (aid) __CANONICAL_NORMAL_POOL.add(aid);
      }
      if (p.hiddenAbility) {
        const hid = typeof p.hiddenAbility === "object" ? p.hiddenAbility.id : p.hiddenAbility;
        if (hid) __CANONICAL_HIDDEN_POOL.add(hid);
      }
    }
    for (const hid of __CANONICAL_HIDDEN_POOL) {
      if (!__CANONICAL_NORMAL_POOL.has(hid)) __CANONICAL_HIDDEN_ONLY.add(hid);
    }
  }
  function __initAbilityPool() {
    if (typeof ability === "undefined") return;
    const missing = [];
    __ACTIVE_ABILITY_IDS = Object.keys(__ABILITY_SCORERS).filter((id) => {
      if (ability[id]) return true;
      missing.push(id);
      return false;
    });
    if (missing.length) {
      console.info("[frontier-ext][enemy-ctx] abilities skipped (not in dict):", missing.join(", "));
    }
    __initCanonicalAbilityPools();
  }

  function __anyMoveOfType(moves, type) {
    if (!Array.isArray(moves)) return false;
    for (const m of moves) { if (m && move[m] && move[m].type === type) return true; }
    return false;
  }
  function __anyStabMove(moves, p) {
    if (!Array.isArray(moves) || !p || !p.type) return false;
    const types = Array.isArray(p.type) ? p.type : [p.type];
    for (const m of moves) { if (m && move[m] && types.includes(move[m].type)) return true; }
    return false;
  }
  function __countSecondaryEffectMoves(moves) {
    if (!Array.isArray(moves)) return 0;
    let n = 0;
    for (const m of moves) {
      if (!m || !move[m]) continue;

      if (move[m].hitEffect || move[m].bonusBuff || move[m].bonusDebuff) n++;
    }
    return n;
  }
  function __countLowBpMoves(moves) {
    if (!Array.isArray(moves)) return 0;
    let n = 0;
    for (const m of moves) {
      if (!m || !move[m]) continue;
      const bp = move[m].power || 0;
      if (bp > 0 && bp <= 60) n++;
    }
    return n;
  }
  function __anyMultiHitMove(moves) {
    if (!Array.isArray(moves)) return false;
    for (const m of moves) {
      if (!m || !move[m]) continue;

      if (Array.isArray(move[m].multihit)) return true;
    }
    return false;
  }

  function __countAffectedByAb(moves, abId) {
    if (!Array.isArray(moves) || !abId) return 0;
    let n = 0;
    for (const m of moves) {
      if (!m || !move[m]) continue;
      if (!(move[m].power > 0)) continue;
      if (move[m].affectedBy && move[m].affectedBy.indexOf(abId) !== -1) n++;
    }
    return n;
  }
  function __anyContactMove(moves) {
    if (typeof ability === "undefined" || !ability.toughClaws) return false;
    return __countAffectedByAb(moves, ability.toughClaws.id) > 0;
  }
  function __anyPunchMove(moves) {
    if (typeof ability === "undefined" || !ability.ironFist) return false;
    return __countAffectedByAb(moves, ability.ironFist.id) > 0;
  }
  function __anyBiteMove(moves) {
    if (typeof ability === "undefined" || !ability.strongJaw) return false;
    return __countAffectedByAb(moves, ability.strongJaw.id) > 0;
  }

  function getMegaStonesForSpecies(realId) {
    const p = (typeof pkmn !== "undefined") ? pkmn[realId] : null;
    if (!p || typeof p.evolve !== "function") return [];
    let evoResult;
    try { evoResult = p.evolve(); } catch (e) { return []; }
    if (!evoResult || typeof evoResult !== "object") return [];
    const stones = [];
    for (const key of Object.keys(evoResult)) {
      const entry = evoResult[key];
      if (!entry) continue;
      const itmRef = entry.item;
      const tgtRef = entry.pkmn;
      if (!itmRef || !itmRef.id) continue;
      if (!item[itmRef.id]) continue;
      if (!item[itmRef.id].evo) continue;
      if (!tgtRef || !tgtRef.id) continue;
      if (!pkmn[tgtRef.id]) continue;
      stones.push({ stoneId: itmRef.id, megaFormId: tgtRef.id });
    }
    return stones;
  }

  function isFacilityPostSilver(facilityId, round) {
    try {
      if (!facilityId) return false;
      const facility = (typeof FACILITIES !== "undefined") ? FACILITIES.find((f) => f.id === facilityId) : null;
      if (!facility) return false;
      let r = (typeof round === "number") ? round : null;
      if (r === null) {
        const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
        if (run && run.facilityId === facilityId) r = (run.round || 0) + 1;
      }
      if (r === null) return false;
      return r >= silverRoundFor(facility);
    } catch (e) { return false; }
  }
  function isFacilityPostGold(facilityId, round) {
    try {
      if (!facilityId) return false;
      const facility = (typeof FACILITIES !== "undefined") ? FACILITIES.find((f) => f.id === facilityId) : null;
      if (!facility) return false;
      let r = (typeof round === "number") ? round : null;
      if (r === null) {
        const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
        if (run && run.facilityId === facilityId) r = (run.round || 0) + 1;
      }
      if (r === null) return false;
      return r >= goldRoundFor(facility);
    } catch (e) { return false; }
  }

  function isEnemyBoss() {
    try {
      const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
      if (!run) return false;
      if (run.upcomingTrainer && run.upcomingTrainer.isBoss) return true;
      const facility = (typeof FACILITIES !== "undefined") ? FACILITIES.find((f) => f.id === run.facilityId) : null;
      if (facility && typeof isMiniBossBattle === "function" && isMiniBossBattle(run, facility)) return true;
      return false;
    } catch (e) { return false; }
  }

  function applyBstInflation(clone, ivVal, atkBoostActive) {
    if (!clone || !clone.bst) return;
    const iv = Math.max(0, Math.min(6, ivVal | 0));
    const defenseStatMult = Math.pow(1.10, iv);
    const hpMult          = Math.pow(1.15, iv);

    const spePlus = iv * (Math.log(0.95) / Math.log(0.9));
    clone.bst.hp   = (clone.bst.hp   || 0) * hpMult;
    clone.bst.atk  = (clone.bst.atk  || 0) * defenseStatMult;
    clone.bst.def  = (clone.bst.def  || 0) * defenseStatMult;
    clone.bst.satk = (clone.bst.satk || 0) * defenseStatMult;
    clone.bst.sdef = (clone.bst.sdef || 0) * defenseStatMult;
    clone.bst.spe  = (clone.bst.spe  || 0) + spePlus;
    if (atkBoostActive) {
      clone.bst.atk  *= 1.15;
      clone.bst.satk *= 1.15;
    }
  }

  function pickAbilityForClone(realId, moveIds, cloneMon, diff, abilityGate, usedAbilities) {
    const p = (typeof pkmn !== "undefined") ? pkmn[realId] : null;
    if (!p) return { normal: null, hidden: null };
    const gate = abilityGate || "default-only";
    const types = Array.isArray(p.type) ? p.type : [p.type];
    const hiddenRef = p.hiddenAbility;
    const hiddenId = hiddenRef ? (typeof hiddenRef === "object" ? hiddenRef.id : hiddenRef) : null;
    const defaultId = p.ability ? (typeof p.ability === "object" ? p.ability.id : p.ability) : null;

    const usedSet = new Set(Array.isArray(usedAbilities) ? usedAbilities : []);
    let recentSet = new Set();
    try {
      if (saved && saved.frontierExt && Array.isArray(saved.frontierExt.__recentEnemyAbilities)) {
        recentSet = new Set(saved.frontierExt.__recentEnemyAbilities);
      }
    } catch (e) {  }
    const dedupMult = (id) => {
      let m = 1;
      if (usedSet.has(id))   m *= 0.15;
      if (recentSet.has(id)) m *= 0.5;
      return m;
    };

    const hasScorer = (id) => !!id && !!__ABILITY_SCORERS[id];

    const isHiddenOnly = (id) => __CANONICAL_HIDDEN_ONLY.has(id);

    const candidates = [];
    const seen = new Set();
    const push = (id) => {
      if (!id || seen.has(id) || !ability[id]) return;
      if (hiddenId && id === hiddenId) return;
      if (!hasScorer(id)) return;
      if (isHiddenOnly(id) && id !== defaultId) return;
      seen.add(id);
      const rawScore = __ABILITY_SCORERS[id](moveIds || [], cloneMon || p);
      const score = rawScore * rarityMult(id) * dedupMult(id);
      candidates.push({ id, score });
    };

    const rarityMult = (id) => {
      const ab = ability[id];
      const r = (ab && typeof ab.rarity === "number") ? ab.rarity : 2;
      if (gate === "hidden-forced") {
        return r === 3 ? 1.35 : r === 2 ? 1.20 : 0.45;
      }
      if (gate === "hidden-allowed") {
        return r === 3 ? 1.20 : r === 2 ? 1.10 : 0.50;
      }
      const poolTier = diff && diff.itemPoolTier;
      if (poolTier === "basic") {
        return r === 3 ? 0.55 : r === 2 ? 0.80 : 1.00;
      }
      return r === 3 ? 0.25 : r === 2 ? 0.55 : 1.00;
    };

    if (defaultId) push(defaultId);

    for (const id in ability) {
      const ab = ability[id];
      if (!ab) continue;
      if (seen.has(id)) continue;
      if (!hasScorer(id)) continue;
      if (ab.type) {
        if (!(ab.type.includes("all") || ab.type.some((t) => t && types.indexOf(t) !== -1))) continue;
      }
      push(id);
    }

    candidates.sort((a, b) => b.score - a.score);
    let normalPick = null;
    const tierWindow =
      (gate === "hidden-forced") ? 5 :
      (gate === "hidden-allowed") ? 7 :
      (diff && typeof diff.round === "number" && diff.round >= 1
        && diff.itemPoolTier && diff.itemPoolTier !== "basic") ? 10 :
      14;
    const topPool = candidates.filter((c) => c.score > 0).slice(0, tierWindow);
    if (topPool.length) {
      if (Math.random() < 0.12) {
        normalPick = topPool[Math.floor(Math.random() * topPool.length)].id;
      } else {
        const totalW = topPool.reduce((s, c) => s + c.score, 0);
        let r = Math.random() * totalW;
        for (const c of topPool) { r -= c.score; if (r <= 0) { normalPick = c.id; break; } }
        if (!normalPick) normalPick = topPool[0].id;
      }
    }

    if (!normalPick && defaultId && hasScorer(defaultId)) normalPick = defaultId;

    let hiddenPick = null;
    if (hiddenId && ability[hiddenId] && hasScorer(hiddenId)) {
      if (gate === "hidden-forced") {
        hiddenPick = hiddenId;
      } else if (gate === "hidden-allowed") {
        const rate = (diff && typeof diff.hiddenAbilityChance === "number")
          ? diff.hiddenAbilityChance
          : 0.75;
        if (Math.random() < rate) hiddenPick = hiddenId;
      }

    }

    if (hiddenPick && normalPick === hiddenPick) {
      const altPool = topPool.filter((c) => c.id !== hiddenPick);
      if (altPool.length) {
        const tW = altPool.reduce((s, c) => s + c.score, 0);
        let r2 = Math.random() * tW;
        normalPick = null;
        for (const c of altPool) { r2 -= c.score; if (r2 <= 0) { normalPick = c.id; break; } }
        if (!normalPick) normalPick = altPool[0].id;
      } else {
        normalPick = null;
      }
    }

    return { normal: normalPick, hidden: hiddenPick };
  }

  function pickItemForClone(realId, moveIds, abilityIds, cloneMon, diff, usedItems) {
    if (typeof item === "undefined") return null;

    const usedSet = (Array.isArray(usedItems) && usedItems.length)
      ? new Set(usedItems) : null;

    const POOL_TIER_BASIC = new Set([
      "leftovers", "flameOrb", "toxicOrb", "quickClaw", "mentalHerb",
      "powerHerb", "clearAmulet", "heavyDutyBoots",

      "charcoal", "mysticWater", "miracleSeed", "magnet", "neverMeltIce",
      "blackBelt", "poisonBarb", "softSand", "sharpBeak", "twistedSpoon",
      "silverPowder", "hardStone", "spellTag", "dragonFang", "blackGlasses",
      "metalCoat", "silkScarf", "fairyFeather",

      "occaBerry", "passhoBerry", "wacanBerry", "rindoBerry", "yacheBerry",
      "chopleBerry", "kebiaBerry", "shucaBerry", "cobaBerry", "payapaBerry",
      "tangaBerry", "chartiBerry", "kasibBerry", "habanBerry", "colburBerry",
      "babiriBerry", "roseliBerry",
    ]);
    const POOL_TIER_MID_ADDS = new Set([
      "lifeOrb", "choiceBand", "choiceSpecs", "lightClay", "laggingTail",
      "metronome", "luckyPunch", "loadedDice",

      "heatRock", "dampRock", "smoothRock", "icyRock",
      "foggySeed", "electricSeed", "grassySeed", "mistySeed",
    ]);
    const POOL_TIER_FULL_ADDS = new Set([
      "weaknessPolicy", "assaultVest", "eviolite",

      "bugGem", "darkGem", "dragonGem", "electricGem", "fairyGem",
      "fightingGem", "fireGem", "flyingGem", "ghostGem", "grassGem",
      "groundGem", "iceGem", "normalGem", "poisonGem", "psychicGem",
      "rockGem", "steelGem", "waterGem",
    ]);
    const poolTier = diff && diff.itemPoolTier;
    let pool = __ITEM_POOL_STANDARD;
    if (poolTier === "basic") {
      pool = pool.filter((id) => POOL_TIER_BASIC.has(id));
    } else if (poolTier === "mid") {
      pool = pool.filter((id) => POOL_TIER_BASIC.has(id) || POOL_TIER_MID_ADDS.has(id));
    }

    if (usedSet && usedSet.size) {
      const deduped = pool.filter((id) => !usedSet.has(id));
      if (deduped.length) pool = deduped;
    }

    if (typeof item !== "undefined") {
      pool = pool.filter((id) => !(item[id] && item[id].evo));
    }
    if (!pool.length) return null;
    const moves = Array.isArray(moveIds) ? moveIds : [];

    const __slowCap = (typeof defaultPlayerMoveTimer === "number") ? defaultPlayerMoveTimer : 2000;
    const __hasStacking = moves.some((m) => m && move[m] && move[m].buildup !== undefined);
    const __hasSlow = moves.some((m) => m && move[m] && typeof move[m].timer === "number" && move[m].timer > __slowCap);

    const __hasFastMove = moves.some((m) => m && move[m] && (move[m].power || 0) > 0
      && typeof move[m].timer === "number" && move[m].timer < __slowCap);
    if (!__hasStacking) pool = pool.filter((id) => id !== "metronome");
    if (!__hasSlow)     pool = pool.filter((id) => id !== "laggingTail");
    if (!__hasFastMove) pool = pool.filter((id) => id !== "quickClaw");
    if (!pool.length) return null;

    const abilitySet = new Set();
    if (Array.isArray(abilityIds)) abilityIds.forEach((a) => a && abilitySet.add(a));
    else if (abilityIds) abilitySet.add(abilityIds);
    const maybe = (arr) => {
      const avail = arr.filter((id) => item[id] && pool.indexOf(id) !== -1);
      return avail.length ? avail[Math.floor(Math.random() * avail.length)] : null;
    };

    if (abilitySet.has("guts")       && item.flameOrb   && pool.indexOf("flameOrb")   !== -1 && Math.random() < 0.45) return "flameOrb";

    if (abilitySet.has("ironFist")   && item.luckyPunch && pool.indexOf("luckyPunch") !== -1 && Math.random() < 0.35) return "luckyPunch";

    if (abilitySet.has("toxicBoost") && item.toxicOrb   && pool.indexOf("toxicOrb")   !== -1 && Math.random() < 0.45) return "toxicOrb";
    if (abilitySet.has("flareBoost") && item.flameOrb   && pool.indexOf("flameOrb")   !== -1 && Math.random() < 0.45) return "flameOrb";

    const WEATHER_ROCK_FOR = {
      drought: "heatRock", drizzle: "dampRock",
      sandStream: "smoothRock", snowWarning: "icyRock",
      somberField: "foggySeed",
      electricSurge: "electricSeed", grassySurge: "grassySeed", mistySurge: "mistySeed",
    };
    for (const abId of Object.keys(WEATHER_ROCK_FOR)) {
      const rockId = WEATHER_ROCK_FOR[abId];
      if (abilitySet.has(abId) && item[rockId] && pool.indexOf(rockId) !== -1 && Math.random() < 0.15) {
        return rockId;
      }
    }

    const BERRY_FOR_WEAKNESS = {
      fire:     "occaBerry",   water:    "passhoBerry", electric: "wacanBerry",
      grass:    "rindoBerry",  ice:      "yacheBerry",  fighting: "chopleBerry",
      poison:   "kebiaBerry",  ground:   "shucaBerry",  flying:   "cobaBerry",
      psychic:  "payapaBerry", bug:      "tangaBerry",  rock:     "chartiBerry",
      ghost:    "kasibBerry",  dragon:   "habanBerry",  dark:     "colburBerry",
      steel:    "babiriBerry", fairy:    "roseliBerry",
    };
    if (cloneMon && Math.random() < 0.20) {
      const cloneTypes = Array.isArray(cloneMon.type) ? cloneMon.type : [cloneMon.type];
      const COMMON_WEAKNESS = {
        grass:"fire", ice:"fire", steel:"fire", bug:"fire",
        fire:"water", ground:"water", rock:"water",
        water:"electric", flying:"electric",
        rock:"fighting", dark:"fighting", normal:"fighting", ice:"fighting", steel:"fighting",
        grass:"ice", dragon:"ice", flying:"ice", ground:"ice",
        psychic:"dark", ghost:"dark",
        fairy:"poison",
      };
      for (const t of cloneTypes) {
        const weak = COMMON_WEAKNESS[t];
        if (!weak) continue;
        const berryId = BERRY_FOR_WEAKNESS[weak];
        if (berryId && item[berryId] && pool.indexOf(berryId) !== -1) return berryId;
      }
    }

    const isMultiHitFlag = (m) => m && move[m] && Array.isArray(move[m].multihit)
      && move[m].multihit.length === 2 && move[m].multihit[1] > move[m].multihit[0];
    const typeCount = {};
    let physCount = 0, specCount = 0, setupCount = 0, statusCount = 0;
    let fastCount = 0;
    const __fastCap = (typeof defaultPlayerMoveTimer === "number") ? defaultPlayerMoveTimer : 2000;
    for (const m of moves) {
      if (!m || !move[m]) continue;
      const mv = move[m];
      if (mv.split === "physical") physCount++;
      else if (mv.split === "special") specCount++;
      if (/dragonDance|swordsDance|nastyPlot|calmMind|bulkUp|agility/i.test(m)) setupCount++;
      if (/thunderWave|willOWisp|toxic|hypnosis|spore|sing|sleepPowder|stunSpore|glare/.test(m)) statusCount++;
      if ((mv.power || 0) > 0 && typeof mv.timer === "number" && mv.timer < __fastCap) fastCount++;
      if (mv.type && (mv.power || 0) > 0) typeCount[mv.type] = (typeCount[mv.type] || 0) + 1;
    }
    let dominantType = null, dominantCount = 0;
    for (const t in typeCount) if (typeCount[t] > dominantCount) { dominantCount = typeCount[t]; dominantType = t; }

    if (fastCount >= 1 && pool.indexOf("quickClaw") !== -1 && Math.random() < 0.30) {
      return "quickClaw";
    }

    const STAB_SPEED_BOOSTER = {
      chlorophyll: "charcoal", swiftSwim: "mysticWater",
      sandRush:   "softSand",  slushRush: "neverMeltIce",
    };
    for (const abId of Object.keys(STAB_SPEED_BOOSTER)) {
      const boostId = STAB_SPEED_BOOSTER[abId];
      if (abilitySet.has(abId) && item[boostId] && pool.indexOf(boostId) !== -1 && Math.random() < 0.25) {
        return boostId;
      }
    }

    if (moves.some(isMultiHitFlag) && item.loadedDice && pool.indexOf("loadedDice") !== -1 && Math.random() < 0.35) {
      return "loadedDice";
    }

    const BOOSTER_BY_TYPE = {
      fire:"charcoal", water:"mysticWater", grass:"miracleSeed", electric:"magnet",
      ice:"neverMeltIce", fighting:"blackBelt", poison:"poisonBarb", ground:"softSand",
      flying:"sharpBeak", psychic:"twistedSpoon", bug:"silverPowder", rock:"hardStone",
      ghost:"spellTag", dragon:"dragonFang", dark:"blackGlasses", steel:"metalCoat",
      normal:"silkScarf", fairy:"fairyFeather"
    };
    const GEM_BY_TYPE = {
      fire:"fireGem", water:"waterGem", grass:"grassGem", electric:"electricGem",
      ice:"iceGem", fighting:"fightingGem", poison:"poisonGem", ground:"groundGem",
      flying:"flyingGem", psychic:"psychicGem", bug:"bugGem", rock:"rockGem",
      ghost:"ghostGem", dragon:"dragonGem", dark:"darkGem", steel:"steelGem",
      normal:"normalGem", fairy:"fairyFeather"
    };
    const cloneTypeList = (cloneMon && Array.isArray(cloneMon.type)) ? cloneMon.type
                        : (cloneMon && cloneMon.type) ? [cloneMon.type] : [];
    const isStabDominant = dominantType && cloneTypeList.indexOf(dominantType) !== -1;

    if (dominantType && dominantCount >= 2) {
      const booster = BOOSTER_BY_TYPE[dominantType];
      const gem     = GEM_BY_TYPE[dominantType];
      if (Math.random() < 0.55) {
        if (isStabDominant && Math.random() < 0.65 && booster && item[booster] && pool.indexOf(booster) !== -1) return booster;
        if (gem && item[gem] && pool.indexOf(gem) !== -1) return gem;
      }
    }

    if (Math.random() < 0.3 && item.eviolite && pool.indexOf("eviolite") !== -1) {
      const p = pkmn[realId];
      if (p && typeof p.evolve === "function") {
        try {
          const evoResult = p.evolve();
          for (const key in evoResult) {
            const stone = evoResult[key] && evoResult[key].item;
            if (!stone || !item[stone.id] || !item[stone.id].evo) {
              return "eviolite";
            }
          }
        } catch (e) {  }
      }
    }

    const bst = cloneMon && cloneMon.bst ? cloneMon.bst : { hp:3, atk:3, def:3, satk:3, sdef:3, spe:3 };

    const fragile = ((bst.hp||0) + (bst.def||0) + (bst.sdef||0)) < 9;
    const bulky   = ((bst.def||0) + (bst.sdef||0)) >= 8;

    const domBooster = isStabDominant ? BOOSTER_BY_TYPE[dominantType] : null;
    const domGem     = dominantType   ? GEM_BY_TYPE[dominantType]     : null;
    const domAddons = [];
    if (dominantCount >= 2) {
      if (domBooster && pool.indexOf(domBooster) !== -1) domAddons.push(domBooster);
      if (domGem     && pool.indexOf(domGem)     !== -1) domAddons.push(domGem);
    }

    if (physCount >= 3 && specCount === 0 && Math.random() < 0.60) {
      const pick = maybe(["choiceBand","lifeOrb"].concat(domAddons)); if (pick) return pick;
    }
    if (specCount >= 3 && physCount === 0 && Math.random() < 0.60) {
      const pick = maybe(["choiceSpecs","lifeOrb"].concat(domAddons)); if (pick) return pick;
    }
    if (physCount >= 2 && specCount >= 2 && Math.random() < 0.55) {
      const pick = maybe(["lifeOrb","weaknessPolicy"].concat(domAddons)); if (pick) return pick;
    }
    if (setupCount >= 1 && Math.random() < 0.55) {
      const pick = maybe(["lifeOrb","leftovers","weaknessPolicy","lightClay"].concat(domAddons)); if (pick) return pick;
    }
    if (fragile && Math.random() < 0.55) {
      const pick = maybe(["leftovers","weaknessPolicy","mentalHerb","quickClaw"].concat(domAddons)); if (pick) return pick;
    }
    if (bulky && Math.random() < 0.55) {
      const pick = maybe(["leftovers","assaultVest","heavyDutyBoots","clearAmulet"]); if (pick) return pick;
    }
    if (statusCount >= 1 && Math.random() < 0.50) {
      const pick = maybe(["leftovers","mentalHerb","metronome"]); if (pick) return pick;
    }

    const typedItems = new Set(__TYPE_BOOSTERS);
    const generalPool = pool.filter((id) => {
      if (id === "flameOrb" || id === "toxicOrb") return false;
      if (typedItems.has(id)) {
        if (id === domBooster) return true;
        if (/Gem$/.test(id)) {
          const gemEntry = Object.entries(GEM_BY_TYPE).find(([k, t]) => k === id);
          if (gemEntry) {
            const t = gemEntry[1];
            return moves.some((m) => m && move[m] && move[m].type === t && (move[m].power || 0) > 0);
          }
        }
        return false;
      }
      return true;
    });
    if (!generalPool.length) return null;
    return generalPool[Math.floor(Math.random() * generalPool.length)];
  }

  const __ITEM_EFFECTS = {

    lifeOrb:        { atk: 1.30, satk: 1.30 },
    choiceBand:     { atk: 1.45 },
    choiceSpecs:    { satk: 1.45 },
    lightClay:      { atk: 1.15, satk: 1.15 },
    flameOrb:       { atk: 1.40, satk: 1.40 },
    toxicOrb:       { atk: 1.40, satk: 1.40 },
    weaknessPolicy: { atk: 1.15, satk: 1.15 },

    laggingTail:    { atk: 1.15, satk: 1.15 },
    metronome:      { atk: 1.15, satk: 1.15 },

    luckyPunch:     { atk: 1.40 },

    assaultVest:    { def: 1.55, sdef: 1.55 },
    eviolite:       { def: 1.60, sdef: 1.60 },
    heavyDutyBoots: { def: 1.15, sdef: 1.15 },
    mentalHerb:     { def: 1.15, sdef: 1.15 },

    quickClaw:      { __requires: "fastMove" },

    leftovers:      { hp:  1.20 },

    loadedDice:     { atk: 1.25, satk: 1.25, __requires: "multihit" },
  };

  const __TYPE_BOOSTERS = new Set([
    "charcoal","mysticWater","miracleSeed","magnet","neverMeltIce","blackBelt",
    "poisonBarb","softSand","sharpBeak","twistedSpoon","silverPowder","hardStone",
    "spellTag","dragonFang","blackGlasses","metalCoat","silkScarf","fairyFeather",
    "bugGem","darkGem","dragonGem","electricGem","fairyGem","fightingGem",
    "fireGem","flyingGem","ghostGem","grassGem","groundGem","iceGem",
    "normalGem","poisonGem","psychicGem","rockGem","steelGem","waterGem",
  ]);
  const TYPE_BOOSTER_MULT = 1.18;
  const GEM_MULT          = 1.10;

  function applyItemBstInflation(clone, itemId, abilityId, moveIds) {
    if (!clone || !clone.bst) return;
    const moves = Array.isArray(moveIds) ? moveIds : [];

    const isMultiHit = (m) => m && move[m] && Array.isArray(move[m].multihit)
      && move[m].multihit.length === 2 && move[m].multihit[1] > move[m].multihit[0];

    const hasItem = !!itemId && !!item[itemId];

    if (hasItem && __TYPE_BOOSTERS.has(itemId)) {
      const BOOSTER_TYPE_MAP = {
        charcoal:"fire", mysticWater:"water", miracleSeed:"grass", magnet:"electric",
        neverMeltIce:"ice", blackBelt:"fighting", poisonBarb:"poison", softSand:"ground",
        sharpBeak:"flying", twistedSpoon:"psychic", silverPowder:"bug", hardStone:"rock",
        spellTag:"ghost", dragonFang:"dragon", blackGlasses:"dark", metalCoat:"steel",
        silkScarf:"normal", fairyFeather:"fairy",
        bugGem:"bug", darkGem:"dark", dragonGem:"dragon", electricGem:"electric",
        fairyGem:"fairy", fightingGem:"fighting", fireGem:"fire", flyingGem:"flying",
        ghostGem:"ghost", grassGem:"grass", groundGem:"ground", iceGem:"ice",
        normalGem:"normal", poisonGem:"poison", psychicGem:"psychic", rockGem:"rock",
        steelGem:"steel", waterGem:"water",
      };
      const t = BOOSTER_TYPE_MAP[itemId];
      if (t) {
        let physCountOfType = 0, specCountOfType = 0;
        let totalPhys = 0, totalSpec = 0;
        for (const m of moves) {
          if (!m || !move[m] || !(move[m].power > 0)) continue;
          if (move[m].split === "physical") {
            totalPhys++;
            if (move[m].type === t) physCountOfType++;
          } else if (move[m].split === "special") {
            totalSpec++;
            if (move[m].type === t) specCountOfType++;
          }
        }
        let rawMult = 1.1;
        try { rawMult = item[itemId].power(); } catch (e) {  }
        const cloneType = Array.isArray(clone.type) ? clone.type : (clone.type ? [clone.type] : []);
        const isGem = /Gem$/.test(itemId);
        const isStab = cloneType.indexOf(t) !== -1;
        const effMult = (isGem && !isStab) ? rawMult * 1.10 : rawMult;
        if (physCountOfType > 0 && totalPhys > 0) {
          const avgPhys = (physCountOfType * effMult + (totalPhys - physCountOfType)) / totalPhys;
          clone.bst.atk *= avgPhys;
        }
        if (specCountOfType > 0 && totalSpec > 0) {
          const avgSpec = (specCountOfType * effMult + (totalSpec - specCountOfType)) / totalSpec;
          clone.bst.satk *= avgSpec;
        }
      }
    } else if (hasItem) {
      const spec = __ITEM_EFFECTS[itemId];
      if (spec) {

        let gated = false;
        if (spec.__requires === "multihit") {
          if (!moves.some(isMultiHit)) gated = true;
        }
        if (spec.__requires === "fastMove") {
          const __fastCap = (typeof defaultPlayerMoveTimer === "number") ? defaultPlayerMoveTimer : 2000;
          const __hasFast = moves.some((m) => m && move[m] && (move[m].power || 0) > 0
            && typeof move[m].timer === "number" && move[m].timer < __fastCap);
          if (!__hasFast) gated = true;
        }
        if (!gated) {
          if (spec.atk)  clone.bst.atk  *= spec.atk;
          if (spec.satk) clone.bst.satk *= spec.satk;
          if (spec.def)  clone.bst.def  *= spec.def;
          if (spec.sdef) clone.bst.sdef *= spec.sdef;
          if (spec.hp)   clone.bst.hp   *= spec.hp;
          if (spec.spe)  clone.bst.spe  += (spec.spe - 1) * 6;
        }
      }

      if (itemId === "quickClaw") {
        const __fastCap2 = (typeof defaultPlayerMoveTimer === "number") ? defaultPlayerMoveTimer : 2000;
        let fastPhys = 0, fastSpec = 0, totalPhys = 0, totalSpec = 0;
        for (const m of moves) {
          if (!m || !move[m] || !(move[m].power > 0)) continue;
          const isFast = typeof move[m].timer === "number" && move[m].timer < __fastCap2;
          if (move[m].split === "physical") { totalPhys++; if (isFast) fastPhys++; }
          else if (move[m].split === "special") { totalSpec++; if (isFast) fastSpec++; }
        }
        const QC_PER_MOVE = 1.15;
        if (totalPhys > 0 && fastPhys > 0) {
          clone.bst.atk  *= (fastPhys * QC_PER_MOVE + (totalPhys - fastPhys)) / totalPhys;
        }
        if (totalSpec > 0 && fastSpec > 0) {
          clone.bst.satk *= (fastSpec * QC_PER_MOVE + (totalSpec - fastSpec)) / totalSpec;
        }
      }
    }

    const hasPhys = moves.some((m) => m && move[m] && move[m].split === "physical");
    const hasSpec = moves.some((m) => m && move[m] && move[m].split === "special");

    const __avgBoost = (affectedCount, totalDmgMoves, mult) => {
      if (totalDmgMoves <= 0 || affectedCount <= 0) return 1;
      return (affectedCount * mult + (totalDmgMoves - affectedCount)) / totalDmgMoves;
    };
    const __countAffected = (abId) => {
      if (!abId) return 0;
      let n = 0;
      for (const m of moves) {
        if (!m || !move[m] || !(move[m].power > 0)) continue;
        if (move[m].affectedBy && move[m].affectedBy.indexOf(abId) !== -1) n++;
      }
      return n;
    };
    const __dmgMoveCount = (function () {
      let n = 0;
      for (const m of moves) if (m && move[m] && (move[m].power || 0) > 0) n++;
      return n;
    })();
    const __applyAvgOffense = (affectedCount, mult) => {
      if (affectedCount <= 0) return;
      const avg = __avgBoost(affectedCount, __dmgMoveCount, mult);
      if (hasPhys) clone.bst.atk  *= avg;
      if (hasSpec) clone.bst.satk *= avg;
    };

    if (abilityId === "sheerForce" && typeof ability !== "undefined" && ability.sheerForce) {
      __applyAvgOffense(__countAffected(ability.sheerForce.id), 1.25);
    }
    if (abilityId === "technician" && typeof ability !== "undefined" && ability.technician) {
      __applyAvgOffense(__countAffected(ability.technician.id), 1.5);
    }
    if (abilityId === "adaptability") {

      const types = Array.isArray(clone.type) ? clone.type : (clone.type ? [clone.type] : []);
      let stabCount = 0;
      for (const m of moves) {
        if (!m || !move[m] || !(move[m].power > 0)) continue;
        if (types.indexOf(move[m].type) !== -1) stabCount++;
      }
      const adaRatio = types.length === 1 ? (1.9 / 1.7) : (1.7 / 1.5);
      __applyAvgOffense(stabCount, adaRatio);
    }

    if (abilityId === "libero" && typeof ability !== "undefined" && ability.libero) {
      __applyAvgOffense(__countAffected(ability.libero.id), 2.0);
    }

    if (abilityId === "reckless" && typeof ability !== "undefined" && ability.reckless) {
      __applyAvgOffense(__countAffected(ability.reckless.id), 1.5);
    }

    if (abilityId === "normalize") {
      __applyAvgOffense(__dmgMoveCount, 1.3);
    }

    if (abilityId === "hugePower") {
      clone.bst.atk *= 2.0;
    }
    if (abilityId === "toughClaws" && typeof ability !== "undefined" && ability.toughClaws) {
      __applyAvgOffense(__countAffected(ability.toughClaws.id), 2.0);
    }
    if (abilityId === "ironFist" && typeof ability !== "undefined" && ability.ironFist) {
      __applyAvgOffense(__countAffected(ability.ironFist.id), 1.5);
    }
    if (abilityId === "strongJaw" && typeof ability !== "undefined" && ability.strongJaw) {
      __applyAvgOffense(__countAffected(ability.strongJaw.id), 2.0);
    }

    const ateSet = {
      aerilate:"flying", pixilate:"fairy", galvanize:"electric", glaciate:"ice",
      pyrolate:"fire",   terralate:"ground", toxilate:"poison", hydrolate:"water",
      ferrilate:"steel", chrysilate:"bug",   verdify:"grass",   gloomilate:"dark",
      espilate:"psychic", dragonMaw:"dragon",
    };
    if (ateSet[abilityId]) {

      let normalCount = 0;
      for (const m of moves) {
        if (!m || !move[m] || !(move[m].power > 0)) continue;
        if (move[m].type === "normal") normalCount++;
      }
      __applyAvgOffense(normalCount, 1.3);
    }

    if (abilityId === "skillLink" && typeof ability !== "undefined" && ability.skillLink) {
      __applyAvgOffense(__countAffected(ability.skillLink.id), 1.4);
    }

    if (abilityId === "unburden") {
      clone.bst.spe += 2;
    }

    const weatherSpeed = {
      chlorophyll:"sunny", swiftSwim:"rainy", sandRush:"sandstorm",
      slushRush:"hail",    moltShed:"foggy",

      intangible:"foggy", hyperconductor:"electricTerrain", faeRush:"mistyTerrain",
    };
    if (weatherSpeed[abilityId] && typeof weatherActive !== "undefined"
        && weatherActive === weatherSpeed[abilityId]) {
      clone.bst.spe += 3;
    }

    if (abilityId === "gorillaTactics" && hasPhys) {
      clone.bst.atk *= 1.30;
    }

    if (abilityId === "solarPower" && typeof weatherActive !== "undefined"
        && weatherActive === "sunny" && hasSpec) {
      clone.bst.satk *= 1.20;
    }

    if (abilityId === "sandForce") {
      let hasSandType = false;
      for (const m of moves) {
        if (!m || !move[m]) continue;
        if (/rock|ground|steel/.test(move[m].type) && (move[m].power || 0) > 0) {
          hasSandType = true; break;
        }
      }
      if (hasSandType) clone.bst.atk *= 1.10;
    }

    if (abilityId === "sandVeil" && typeof weatherActive !== "undefined" && weatherActive === "sandstorm") {
      clone.bst.def  *= 1.08;
      clone.bst.sdef *= 1.08;
    }
    if (abilityId === "snowCloak" && typeof weatherActive !== "undefined" && weatherActive === "hail") {
      clone.bst.def  *= 1.08;
      clone.bst.sdef *= 1.08;
    }

    if (abilityId === "tintedLens") {
      if (hasPhys) clone.bst.atk  *= 1.15;
      if (hasSpec) clone.bst.satk *= 1.15;
    }

    if (abilityId === "megaLauncher" && typeof ability !== "undefined" && ability.megaLauncher) {
      __applyAvgOffense(__countAffected(ability.megaLauncher.id), 1.5);
    }
    if (abilityId === "metalhead" && typeof ability !== "undefined" && ability.metalhead) {
      __applyAvgOffense(__countAffected(ability.metalhead.id), 1.5);
    }

    if (abilityId === "prankster"
        && (__anyMoveOfType(moves, "ghost") || __anyMoveOfType(moves, "dark"))) {
      clone.bst.spe += 2;
    }
    if (abilityId === "galeWings"
        && (__anyMoveOfType(moves, "flying") || __anyMoveOfType(moves, "bug"))) {
      clone.bst.spe += 2;
    }
    if (abilityId === "neuroforce"
        && (__anyMoveOfType(moves, "psychic") || __anyMoveOfType(moves, "fairy"))) {
      clone.bst.spe += 2;
    }

    if (abilityId === "merciless") {
      if (hasPhys) clone.bst.atk  *= 1.10;
      if (hasSpec) clone.bst.satk *= 1.10;
    }

    if (abilityId === "stamina") {
      clone.bst.hp *= 1.10;
    }

    if (abilityId === "toxicBoost" && clone.item === "toxicOrb") {
      if (hasPhys) clone.bst.atk *= 1.20;
    }
    if (abilityId === "flareBoost" && clone.item === "flameOrb") {

      if (hasSpec) clone.bst.satk *= 1.20;
    }

    if (abilityId === "protosynthesis" && typeof weatherActive !== "undefined"
        && weatherActive === "sunny") {
      if (hasPhys) clone.bst.atk  *= 1.10;
      if (hasSpec) clone.bst.satk *= 1.10;
    }
    if (abilityId === "quarkDrive" && typeof weatherActive !== "undefined"
        && weatherActive === "electricTerrain") {
      if (hasPhys) clone.bst.atk  *= 1.10;
      if (hasSpec) clone.bst.satk *= 1.10;
    }

    const PINCH = {
      overgrow:"grass", blaze:"fire", swarm:"bug", torrent:"water",

      bastion:"steel", average:"normal", resolve:"fighting", mistify:"psychic",
      hexerei:"ghost", glimmer:"fairy", skyward:"flying", draconic:"dragon",
      noxious:"poison", solid:"rock", rime:"ice", voltage:"electric",
    };
    if (PINCH[abilityId]) {
      const matchType = PINCH[abilityId];
      let hasType = false;
      for (const m of moves) {
        if (!m || !move[m]) continue;
        if (move[m].type === matchType && (move[m].power || 0) > 0) { hasType = true; break; }
      }
      if (hasType) {
        if (hasPhys) clone.bst.atk  *= 1.10;
        if (hasSpec) clone.bst.satk *= 1.10;
      }
    }

    if (abilityId === "shieldsDown") {
      clone.bst.def  *= 1.25;
      clone.bst.sdef *= 1.25;
    }
    if (abilityId === "treasureOfRuin") {
      if (hasPhys) clone.bst.atk  *= 1.05;
      if (hasSpec) clone.bst.satk *= 1.05;
    }
    if (abilityId === "thousandArms") {
      if (hasPhys) clone.bst.atk  *= 1.40;
      if (hasSpec) clone.bst.satk *= 1.40;
    }
    if (abilityId === "darkAura") {
      if (hasPhys) clone.bst.atk  *= 1.05;
      if (hasSpec) clone.bst.satk *= 1.05;
    }
    if (abilityId === "soulAsterism") {
      if (hasPhys) clone.bst.atk  *= 1.05;
      if (hasSpec) clone.bst.satk *= 1.05;
    }

    if (abilityId === "ambidextrous") {
      let typeSet = new Set();
      for (const m of moves) {
        if (!m || !move[m] || !(move[m].power > 0)) continue;
        if (move[m].type) typeSet.add(move[m].type);
      }
      if (typeSet.size >= 2) {
        if (hasPhys) clone.bst.atk  *= 1.05;
        if (hasSpec) clone.bst.satk *= 1.05;
      }
    }
    if (abilityId === "noGuard") {
      if (hasPhys) clone.bst.atk  *= 1.04;
      if (hasSpec) clone.bst.satk *= 1.04;
    }

    if (abilityId === "iceBody") {
      clone.bst.def  *= 1.08;
      clone.bst.sdef *= 1.04;
    }
    const ABSORB_FAMILY = new Set([
      "voltAbsorb","waterAbsorb","flareAbsorb","curseAbsorb","poisonAbsorb",
      "frostAbsorb","psychicAbsorb","lightAbsorb","growthAbsorb",
    ]);
    if (ABSORB_FAMILY.has(abilityId)) {
      clone.bst.hp   = (clone.bst.hp   || 0) * 1.08;
      clone.bst.sdef = (clone.bst.sdef || 0) * 1.05;
    }
    const CONTACT_STATUS_FAMILY = new Set([
      "static","flameBody","poisonPoint","strangeCharm","effectSpore","glacialBody",
    ]);
    if (CONTACT_STATUS_FAMILY.has(abilityId)) {
      clone.bst.def  *= 1.04;
    }
    if (abilityId === "rivalry") {
      if (hasPhys) clone.bst.atk  *= 1.06;
      if (hasSpec) clone.bst.satk *= 1.06;
    }
    if (abilityId === "synchronize") {
      clone.bst.sdef *= 1.04;
    }
    if (abilityId === "scrappy") {
      if (hasPhys) clone.bst.atk  *= 1.05;
    }
    if (abilityId === "magicGuard") {
      clone.bst.hp   *= 1.06;
      clone.bst.sdef *= 1.04;
    }

    if (abilityId === "sharpness" && typeof ability !== "undefined" && ability.sharpness) {
      __applyAvgOffense(__countAffected(ability.sharpness.id), 1.5);
    }

    const GUARD_FAMILY = new Set([
      "grabGuard","waterGuard","flameGuard","curseGuard","poisonGuard",
      "iceGuard","psychicGuard","fairyGuard","leafGuard","plainGuard",
      "sinisterGuard","steelGuard","dragonGuard","bugGuard","rockGuard",
      "groundGuard","flyingGuard",
    ]);
    if (GUARD_FAMILY.has(abilityId)) {
      clone.bst.def  *= 1.06;
      clone.bst.sdef *= 1.06;
    }

    if (hasItem && item[itemId] && item[itemId].sort === "berry") {
      clone.bst.def  *= 1.10;
      clone.bst.sdef *= 1.10;
    }
  }

  function cloneEnemyForCombat(realId, cloneOpts) {
    if (typeof pkmn === "undefined" || !pkmn[realId]) return realId;
    const opts = cloneOpts || {};
    const orig = pkmn[realId];
    const uid = Math.random().toString(36).slice(2, 8);
    const cloneId = "__zdcEnemy_" + realId + "_" + uid;

    let clone;
    try { clone = Object.assign({}, orig); }
    catch (e) { console.error("[frontier-ext][enemy-ctx] shallow clone failed for", realId, e); return realId; }

    clone.bst = Object.assign({}, orig.bst || {});
    if (Array.isArray(orig.type)) clone.type = orig.type.slice();

    clone.id = cloneId;
    pkmn[cloneId] = clone;
    __enemyCloneIds.add(cloneId);
    __enemyCloneState[cloneId] = {
      realId, uid,
      item: null, ability: null, shiny: false, megaFormId: null,
      focusSashConsumed: false, weaknessPolicyConsumed: false,
      salacBerryConsumed: false, sitrusBerryConsumed: false, lumBerryConsumed: false,
      lifeOrbRecoilPending: false,
      speedBoostStages: 0,
    };

    const diff = opts.diff || null;
    const facilityId = opts.facilityId || null;

    const __round = (diff && typeof diff.round === "number") ? diff.round : null;
    const postSilver = facilityId ? isFacilityPostSilver(facilityId, __round) : false;
    const postGold   = facilityId ? isFacilityPostGold(facilityId, __round)   : false;
    const isBoss     = !!opts.isBoss || isEnemyBoss();

    const ivVal = (postGold || isBoss) ? 6 : Math.max(0, Math.min(6, diff ? (diff.ivRating | 0) : 0));

    const moveIds = Array.isArray(opts.moveIds) ? opts.moveIds.slice() : [];

    const atkBoostActivePre = postGold || isBoss;
    applyBstInflation(clone, ivVal, atkBoostActivePre);

    const isFlamme = !!(diff && typeof diff.mult === "number" && diff.mult >= 2);
    const abilityGate = isBoss ? "hidden-forced"
                      : isFlamme ? "hidden-forced"
                      : postGold ? "hidden-allowed"
                      : "default-only";
    const pickedAbility = pickAbilityForClone(realId, moveIds, clone, diff, abilityGate, opts.usedAbilities);
    if (pickedAbility && pickedAbility.normal && ability[pickedAbility.normal]) {
      clone.ability = ability[pickedAbility.normal];
      __enemyCloneState[cloneId].ability = pickedAbility.normal;
    }
    if (pickedAbility && pickedAbility.hidden && ability[pickedAbility.hidden]) {
      clone.hiddenAbility = ability[pickedAbility.hidden];
      __enemyCloneState[cloneId].hiddenAbility = pickedAbility.hidden;
    }

    const canHaveItem = isBoss || postSilver;
    let pickedItem = null;
    if (canHaveItem) {
      const abilityIdsForItem = [
        __enemyCloneState[cloneId].ability,
        __enemyCloneState[cloneId].hiddenAbility,
      ].filter(Boolean);
      pickedItem = pickItemForClone(realId, moveIds, abilityIdsForItem, clone, diff, opts.usedItems);
      if (pickedItem && item[pickedItem]) {
        clone.item = pickedItem;
        __enemyCloneState[cloneId].item = pickedItem;
        const stones = getMegaStonesForSpecies(realId);
        const match = stones.find((s) => s.stoneId === pickedItem);
        if (match && pkmn[match.megaFormId]) {
          const megaSrc = pkmn[match.megaFormId];
          if (megaSrc.type)          clone.type = Array.isArray(megaSrc.type) ? megaSrc.type.slice() : megaSrc.type;
          if (megaSrc.bst)           clone.bst  = Object.assign({}, megaSrc.bst);
          if (megaSrc.ability)       clone.ability = megaSrc.ability;
          if (megaSrc.hiddenAbility) clone.hiddenAbility = megaSrc.hiddenAbility;
          __enemyCloneState[cloneId].megaFormId = match.megaFormId;
          applyBstInflation(clone, ivVal, atkBoostActivePre);
        }
      }
    }

    const isPalace = facilityId === "frontierPalaceSecret";
    let applyNature = isPalace || isBoss;
    if (!applyNature) {
      const natureRate = (diff && typeof diff.natureChance === "number") ? diff.natureChance : 0;
      if (natureRate > 0 && Math.random() < natureRate) applyNature = true;
    }
    if (applyNature && typeof simulateNatureFor === "function") {
      const natureCtx = {
        bst: clone.bst,
        moveIds,
        abilityIds: [__enemyCloneState[cloneId].ability, __enemyCloneState[cloneId].hiddenAbility].filter(Boolean),
        itemId: __enemyCloneState[cloneId].item,
      };
      const natureId = simulateNatureFor(realId, natureCtx);
      if (natureId) {
        clone.nature = natureId;
        __enemyCloneState[cloneId].nature = natureId;
        switch (natureId) {
          case "adamant":
            clone.bst.atk  = (clone.bst.atk  || 0) + 1;
            clone.bst.satk = Math.max(1, (clone.bst.satk || 0) - 1);
            break;
          case "modest":
            clone.bst.atk  = Math.max(1, (clone.bst.atk  || 0) - 1);
            clone.bst.satk = (clone.bst.satk || 0) + 1;
            break;
          case "quiet":
            clone.bst.hp   = (clone.bst.hp   || 0) + 1;
            clone.bst.atk  = Math.max(1, (clone.bst.atk  || 0) - 1);
            clone.bst.satk = Math.max(1, (clone.bst.satk || 0) - 1);
            break;
          case "jolly":
            clone.bst.def  = Math.max(1, (clone.bst.def  || 0) - 1);
            clone.bst.sdef = Math.max(1, (clone.bst.sdef || 0) - 1);
            clone.bst.spe  = (clone.bst.spe  || 0) + 1;
            break;
          case "bold":
            clone.bst.hp   = Math.max(1, (clone.bst.hp   || 0) - 1);
            clone.bst.def  = (clone.bst.def  || 0) + 1;
            clone.bst.sdef = (clone.bst.sdef || 0) + 1;
            break;
          case "relaxed":
            clone.bst.hp   = (clone.bst.hp   || 0) + 1;
            clone.bst.spe  = Math.max(1, (clone.bst.spe  || 0) - 1);
            break;
        }
      }
    }

    const __shinyRate = (diff && typeof diff.shinyRate === "number") ? diff.shinyRate : (1 / 140);
    const isShiny = !!opts.forceShiny || (Math.random() < __shinyRate);
    __enemyCloneState[cloneId].shiny = isShiny;
    if (isShiny) {
      clone.shiny = true;
      if (!atkBoostActivePre) {
        clone.bst.atk  = (clone.bst.atk  || 0) * 1.15;
        clone.bst.satk = (clone.bst.satk || 0) * 1.15;
      }
    }

    applyItemBstInflation(clone, clone.item, __enemyCloneState[cloneId].ability, moveIds);
    if (__enemyCloneState[cloneId].hiddenAbility) {

      applyItemBstInflation(clone, null, __enemyCloneState[cloneId].hiddenAbility, moveIds);
    }

    if (clone.item === "flameOrb" && typeof wildBuffs === "object") {

    }

    try {
      if (saved && saved.frontierExt) {
        if (!Array.isArray(saved.frontierExt.__enemyCloneIds)) saved.frontierExt.__enemyCloneIds = [];
        saved.frontierExt.__enemyCloneIds.push(cloneId);
      }
    } catch (e) {  }

    return cloneId;
  }

  function destroyEnemyClone(cloneId) {
    if (!cloneId) return;
    if (typeof pkmn !== "undefined" && pkmn[cloneId]) delete pkmn[cloneId];
    __enemyCloneIds.delete(cloneId);
    delete __enemyCloneState[cloneId];
  }
  function destroyAllEnemyClones() {

    try {
      if (typeof saved === "object" && saved && typeof saved.currentPkmn === "string"
          && /^__zdcEnemy_/.test(saved.currentPkmn)) {
        const cid = saved.currentPkmn;
        const st = __enemyCloneState[cid];
        saved.currentPkmn = (st && st.prevCurrentPkmn) || (st && st.realId) || null;
      }
    } catch (e) {  }

    for (const id of Array.from(__enemyCloneIds)) destroyEnemyClone(id);
    try {
      if (saved && saved.frontierExt && Array.isArray(saved.frontierExt.__enemyCloneIds)) {
        for (const id of saved.frontierExt.__enemyCloneIds) {
          if (typeof pkmn !== "undefined" && pkmn[id] && /^__zdcEnemy_/.test(id)) {
            delete pkmn[id];
          }
        }
        saved.frontierExt.__enemyCloneIds = [];
      }
    } catch (e) {  }

    try {
      if (typeof pkmn !== "undefined") {
        for (const key of Object.keys(pkmn)) {
          if (/^__zdcEnemy_/.test(key)) delete pkmn[key];
        }
      }
    } catch (e) {  }

    stopEnemyCloneTick();
    removeEnemyHeldItemOverlay();
  }

  function filterBannedEnemyMoves(moveset, speciesId) {
    if (!Array.isArray(moveset)) return moveset;
    if (!BANNED_ENEMY_MOVES.size) return moveset;

    const cleaned = moveset.filter((m) => m && !BANNED_ENEMY_MOVES.has(m));

    if (cleaned.length < 4 && typeof pkmn !== "undefined" && pkmn[speciesId] && typeof move !== "undefined") {
      const p = pkmn[speciesId];
      const types = Array.isArray(p.type) ? p.type : [p.type];
      for (const [k, mv] of Object.entries(move)) {
        if (cleaned.length >= 4) break;
        if (!mv || BANNED_ENEMY_MOVES.has(k)) continue;
        if (cleaned.includes(k)) continue;
        if (!Array.isArray(mv.moveset)) continue;
        if (!types.some((t) => t && mv.moveset.indexOf(t) !== -1)) continue;
        cleaned.push(k);
      }
    }

    while (cleaned.length < 4 && typeof move !== "undefined" && move.tackle && !cleaned.includes("tackle")) {
      cleaned.push("tackle");
    }
    return cleaned;
  }

  function ensureEnemyHeldItemOverlay() {

    if (typeof document === "undefined") return;
    try { renderEnemyHeldItemOverlay(); } catch (e) {  }
  }
  function renderEnemyHeldItemOverlay() {

    if (__enemyHeldItemEl && __enemyHeldItemEl.parentNode) {
      __enemyHeldItemEl.parentNode.removeChild(__enemyHeldItemEl);
    }
    __enemyHeldItemEl = null;

    renderEnemyInfoRow();
  }

  let __enemyInfoRowEl = null;
  function renderEnemyInfoRow() {
    if (typeof document === "undefined" || typeof saved === "undefined") return;
    const nameEl = document.getElementById("explore-wild-name");
    if (!nameEl) return;

    const hpbox = nameEl.parentElement;
    if (!hpbox) return;
    const cid = saved && saved.currentPkmn;
    const state = cid ? __enemyCloneState[cid] : null;

    if (!state || (!state.ability && !state.hiddenAbility && !state.item && !state.nature)) {
      if (__enemyInfoRowEl && __enemyInfoRowEl.parentNode) __enemyInfoRowEl.parentNode.removeChild(__enemyInfoRowEl);
      __enemyInfoRowEl = null;
      return;
    }

    if (!__enemyInfoRowEl) {
      __enemyInfoRowEl = document.createElement("div");
      __enemyInfoRowEl.className = "zdc-enemy-info-row";
      __enemyInfoRowEl.style.cssText =
        "display:flex;gap:0.4rem;align-items:center;font-size:0.75rem;" +
        "color:rgba(255,255,255,0.85);margin-top:2px;flex-wrap:wrap;";
    }
    const parts = [];

    const __abRarityColor = (abId) => {
      const ab = (typeof ability !== "undefined") ? ability[abId] : null;
      const r = (ab && typeof ab.rarity === "number") ? ab.rarity : 2;
      if (r === 3) return "rgba(170,100,210,0.45)";
      if (r === 2) return "rgba(100,149,237,0.40)";
      return "rgba(120,190,130,0.40)";
    };

    if (state.ability && typeof ability !== "undefined" && ability[state.ability]) {
      const label = (typeof format === "function") ? format(state.ability) : state.ability;
      parts.push(
        `<span class="zdc-enemy-ability" style="background:${__abRarityColor(state.ability)};padding:1px 6px;border-radius:3px;">${label}</span>`
      );
    }

    if (state.hiddenAbility && typeof ability !== "undefined" && ability[state.hiddenAbility]) {
      const label = (typeof format === "function") ? format(state.hiddenAbility) : state.hiddenAbility;
      parts.push(
        `<span class="zdc-enemy-hidden" style="background:${__abRarityColor(state.hiddenAbility)};padding:1px 6px;border-radius:3px;" title="Hidden Ability (unlocked)">` +
        `<span style="color:#ffd86b;font-weight:bold;">★</span> ${label}</span>`
      );
    }

    if (state.nature) {
      const label = (typeof format === "function") ? format(state.nature) : state.nature;
      parts.push(
        `<span class="zdc-enemy-nature" style="background:rgba(120,190,130,0.35);padding:1px 6px;border-radius:3px;" title="Nature">${label}</span>`
      );
    }

    if (state.item && typeof item !== "undefined" && item[state.item]) {
      const label = (typeof format === "function") ? format(state.item) : state.item;
      parts.push(
        `<span class="zdc-enemy-item" style="background:rgba(180,130,70,0.35);padding:1px 6px;border-radius:3px;display:inline-flex;align-items:center;gap:3px;">`
        + `<img src="img/items/${state.item}.png" style="width:14px;height:14px;image-rendering:pixelated;" onerror="this.remove()">`
        + `${label}</span>`
      );
    }
    __enemyInfoRowEl.innerHTML = parts.join("");

    if (__enemyInfoRowEl.parentNode !== hpbox) {
      hpbox.appendChild(__enemyInfoRowEl);
    }
  }
  function removeEnemyInfoRow() {
    if (__enemyInfoRowEl && __enemyInfoRowEl.parentNode) __enemyInfoRowEl.parentNode.removeChild(__enemyInfoRowEl);
    __enemyInfoRowEl = null;
  }
  function removeEnemyHeldItemOverlay() {
    try {
      if (__enemyHeldItemObserver) __enemyHeldItemObserver.disconnect();
    } catch (e) {  }
    __enemyHeldItemObserver = null;
    if (__enemyHeldItemEl && __enemyHeldItemEl.parentNode) {
      __enemyHeldItemEl.parentNode.removeChild(__enemyHeldItemEl);
    }
    __enemyHeldItemEl = null;
    removeEnemyInfoRow();
  }

  function __fireAbilityOnSwitchIn(ab) {
    if (!ab) return;
    if (ab === "intimidate") {
      if (typeof team === "object" && typeof exploreActiveMember !== "undefined" && team[exploreActiveMember]) {
        team[exploreActiveMember].buffs = team[exploreActiveMember].buffs || {};
        team[exploreActiveMember].buffs.atkdown1 = Math.max(team[exploreActiveMember].buffs.atkdown1 || 0, 3);
        if (typeof updateTeamBuffs === "function") updateTeamBuffs();
      }
      return;
    }
    if (ab === "dauntingLook") {

      if (typeof team === "object" && typeof exploreActiveMember !== "undefined" && team[exploreActiveMember]) {
        team[exploreActiveMember].buffs = team[exploreActiveMember].buffs || {};
        team[exploreActiveMember].buffs.satkdown1 = Math.max(team[exploreActiveMember].buffs.satkdown1 || 0, 3);
        if (typeof updateTeamBuffs === "function") updateTeamBuffs();
      }
      return;
    }

    if (ab === "drought"       && typeof changeWeather === "function") { changeWeather("sunny");           return; }
    if (ab === "drizzle"       && typeof changeWeather === "function") { changeWeather("rainy");           return; }
    if (ab === "sandStream"    && typeof changeWeather === "function") { changeWeather("sandstorm");       return; }
    if (ab === "snowWarning"   && typeof changeWeather === "function") { changeWeather("hail");            return; }

    if (ab === "somberField"   && typeof changeWeather === "function") { changeWeather("foggy");           return; }
    if (ab === "electricSurge" && typeof changeWeather === "function") { changeWeather("electricTerrain"); return; }
    if (ab === "grassySurge"   && typeof changeWeather === "function") { changeWeather("grassyTerrain");   return; }
    if (ab === "mistySurge"    && typeof changeWeather === "function") { changeWeather("mistyTerrain");    return; }
  }
  function dispatchOnSwitchIn(cloneId) {
    if (!cloneId) return;
    const state = __enemyCloneState[cloneId];
    if (!state) return;
    try {
      __fireAbilityOnSwitchIn(state.ability);
      __fireAbilityOnSwitchIn(state.hiddenAbility);
    } catch (e) { console.error("[frontier-ext][enemy-ctx] switch-in dispatch failed:", e); }

    try {
      if (typeof saved !== "undefined" && saved && saved.weather) {
        const ROCK_SETTER = {
          heatRock:     { weather: "sunny",           setter: "drought"       },
          dampRock:     { weather: "rainy",           setter: "drizzle"       },
          smoothRock:   { weather: "sandstorm",       setter: "sandStream"    },
          icyRock:      { weather: "hail",            setter: "snowWarning"   },
          foggySeed:    { weather: "foggy",           setter: "somberField"   },
          electricSeed: { weather: "electricTerrain", setter: "electricSurge" },
          grassySeed:   { weather: "grassyTerrain",   setter: "grassySurge"   },
          mistySeed:    { weather: "mistyTerrain",    setter: "mistySurge"    },
        };
        const match = ROCK_SETTER[state.item];
        const hasSetter = match
          && (state.ability === match.setter || state.hiddenAbility === match.setter);
        if (match && hasSetter && saved.weather === match.weather
            && item[state.item] && typeof item[state.item].power === "function") {
          saved.weatherTimer   = (saved.weatherTimer || 0) + item[state.item].power();
          saved.weatherCooldown = Math.max(saved.weatherCooldown || 0, saved.weatherTimer);
          if (typeof updateWildBuffs === "function") updateWildBuffs();
        }
      }
    } catch (e) {  }

    try {
      if ((state.ability === "climaTact" || state.hiddenAbility === "climaTact")
          && typeof saved !== "undefined" && saved && saved.weather
          && saved.weatherTimer > 0) {
        const SETTER_FOR_WEATHER = {
          sunny: "drought", rainy: "drizzle", sandstorm: "sandStream",
          hail: "snowWarning", foggy: "somberField",
          electricTerrain: "electricSurge", grassyTerrain: "grassySurge",
          mistyTerrain: "mistySurge",
        };
        const setter = SETTER_FOR_WEATHER[saved.weather];
        if (setter && (state.ability === setter || state.hiddenAbility === setter)) {
          saved.weatherTimer += 15;
          saved.weatherCooldown = Math.max(saved.weatherCooldown || 0, saved.weatherTimer);
          if (typeof updateWildBuffs === "function") updateWildBuffs();
        }
      }
    } catch (e) {  }

    try {
      if (state.item === "flameOrb" && typeof wildBuffs === "object") { wildBuffs.burn = Math.max(wildBuffs.burn || 0, 5); if (typeof updateWildBuffs === "function") updateWildBuffs(); }
      if (state.item === "toxicOrb" && typeof wildBuffs === "object") { wildBuffs.poisoned = Math.max(wildBuffs.poisoned || 0, 5); if (typeof updateWildBuffs === "function") updateWildBuffs(); }
    } catch (e) {  }

    ensureEnemyHeldItemOverlay();

    startEnemyCloneTick();
  }

  function dispatchOnTakeDamage(cloneId, deltaHp) {
    if (!cloneId) return;
    const state = __enemyCloneState[cloneId];
    if (!state) return;
    if (typeof wildPkmnHp === "undefined" || typeof wildPkmnHpMax === "undefined") return;
    const hpPct = wildPkmnHpMax > 0 ? (wildPkmnHp / wildPkmnHpMax) : 1;

    if (!state.weaknessPolicyConsumed && state.item === "weaknessPolicy" && item.weaknessPolicy && deltaHp > wildPkmnHpMax * 0.25) {
      try { if (typeof wildBuffs === "object") { wildBuffs.atkup2 = Math.max(wildBuffs.atkup2 || 0, 3); wildBuffs.satkup2 = Math.max(wildBuffs.satkup2 || 0, 3); if (typeof updateWildBuffs === "function") updateWildBuffs(); } } catch (e) {  }
      state.weaknessPolicyConsumed = true;
      state.item = null;
    }

    if ((state.ability === "gooey" || state.hiddenAbility === "gooey")
        && deltaHp > 0 && typeof team === "object"
        && typeof exploreActiveMember !== "undefined" && team[exploreActiveMember]) {
      try {
        team[exploreActiveMember].buffs = team[exploreActiveMember].buffs || {};
        team[exploreActiveMember].buffs.spedown1 = Math.max(team[exploreActiveMember].buffs.spedown1 || 0, 3);
        if (typeof updateTeamBuffs === "function") updateTeamBuffs();
      } catch (e) {  }
    }

    if ((state.ability === "angerPoint" || state.hiddenAbility === "angerPoint")
        && !state.angerPointApplied && deltaHp > wildPkmnHpMax * 0.25) {
      state.angerPointApplied = true;
      try { if (typeof wildBuffs === "object") { wildBuffs.atkup2 = Math.max(wildBuffs.atkup2 || 0, 3); if (typeof updateWildBuffs === "function") updateWildBuffs(); } } catch (e) {  }
    }
    if ((state.ability === "justified" || state.hiddenAbility === "justified")
        && !state.justifiedApplied && deltaHp > wildPkmnHpMax * 0.25) {
      state.justifiedApplied = true;
      try { if (typeof wildBuffs === "object") { wildBuffs.satkup2 = Math.max(wildBuffs.satkup2 || 0, 3); if (typeof updateWildBuffs === "function") updateWildBuffs(); } } catch (e) {  }
    }
  }

  function dispatchEndTurn(cloneId, playerHpDelta) {
    if (!cloneId) return;
    const state = __enemyCloneState[cloneId];
    if (!state) return;
    if (typeof wildPkmnHp === "undefined" || typeof wildPkmnHpMax === "undefined") return;
    if (wildPkmnHp <= 0) return;

    const heal16 = wildPkmnHpMax / 16;
    const weather = (typeof saved !== "undefined" && saved && saved.weather) || "";
    const weatherTimer = (typeof saved !== "undefined" && saved && saved.weatherTimer) || 0;
    const hasIceBody  = state.ability === "iceBody"  || state.hiddenAbility === "iceBody";
    const hasRainDish = state.ability === "rainDish" || state.hiddenAbility === "rainDish";
    let healAmount = 0;
    if (hasIceBody  && weatherTimer > 0 && weather === "hail")  healAmount = Math.max(healAmount, heal16);
    if (hasRainDish && weatherTimer > 0 && weather === "rainy") healAmount = Math.max(healAmount, heal16);
    if (healAmount > 0 && wildPkmnHp < wildPkmnHpMax) {
      try {
        wildPkmnHp = Math.min(wildPkmnHpMax, wildPkmnHp + healAmount);
        if (typeof updateWildPkmn === "function") updateWildPkmn();
      } catch (e) {  }
    }

    const hasSpeedBoost = state.ability === "speedBoost" || state.hiddenAbility === "speedBoost";
    if (hasSpeedBoost && typeof wildBuffs === "object") {
      if (!wildBuffs.speup2) {
        if (wildBuffs.speup1) { wildBuffs.speup1 = 0; wildBuffs.speup2 = 3; }
        else wildBuffs.speup1 = 3;
        if (typeof updateWildBuffs === "function") updateWildBuffs();
      }
    }

    if (state.item === "lifeOrb" && playerHpDelta < 0) {
      try {
        wildPkmnHp = Math.max(0, wildPkmnHp - wildPkmnHpMax * 0.10);
        if (typeof updateWildPkmn === "function") updateWildPkmn();
      } catch (e) {  }
    }
  }

  function startEnemyCloneTick() {
    stopEnemyCloneTick();
    __enemyCloneLastPlayerHp = __snapshotPlayerHp();
    __enemyCloneLastEnemyHp  = (typeof wildPkmnHp !== "undefined") ? wildPkmnHp : null;
    __enemyCloneTickTimer = setInterval(__enemyCloneTick, 500);
  }
  function stopEnemyCloneTick() {
    if (__enemyCloneTickTimer) { clearInterval(__enemyCloneTickTimer); __enemyCloneTickTimer = null; }
    __enemyCloneLastPlayerHp = null;
    __enemyCloneLastEnemyHp  = null;
  }
  function __snapshotPlayerHp() {
    try {
      if (typeof team === "object" && typeof exploreActiveMember !== "undefined" && team[exploreActiveMember] && team[exploreActiveMember].pkmn) {
        const id = team[exploreActiveMember].pkmn.id;
        if (pkmn[id] && typeof pkmn[id].playerHp === "number") return pkmn[id].playerHp;
      }
    } catch (e) {  }
    return null;
  }
  function __enemyCloneTick() {
    try {
      const cid = saved && saved.currentPkmn;
      if (!cid || !__enemyCloneState[cid]) { stopEnemyCloneTick(); return; }
      const nowPlayerHp = __snapshotPlayerHp();
      const nowEnemyHp  = (typeof wildPkmnHp !== "undefined") ? wildPkmnHp : null;
      const playerDelta = (nowPlayerHp != null && __enemyCloneLastPlayerHp != null) ? (nowPlayerHp - __enemyCloneLastPlayerHp) : 0;
      const enemyDelta  = (nowEnemyHp  != null && __enemyCloneLastEnemyHp  != null) ? (nowEnemyHp  - __enemyCloneLastEnemyHp)  : 0;
      if (enemyDelta < 0) dispatchOnTakeDamage(cid, -enemyDelta);
      dispatchEndTurn(cid, playerDelta);
      __enemyCloneLastPlayerHp = nowPlayerHp;
      __enemyCloneLastEnemyHp  = (typeof wildPkmnHp !== "undefined") ? wildPkmnHp : null;
    } catch (e) {  }
  }

  function installEnemyContextHook() {
    if (typeof window.setWildPkmn !== "function") {
      setTimeout(installEnemyContextHook, 150);
      return;
    }
    if (window.__zdcEnemyContextHooked) return;
    window.__zdcEnemyContextHooked = true;
    const orig = window.setWildPkmn;
    window.setWildPkmn = function () {
      const res = orig.apply(this, arguments);
      try {
        if (typeof saved !== "object" || !saved) return res;
        const inRunArea = saved.currentArea === RUN_AREA_ID
                       || saved.currentAreaBuffer === RUN_AREA_ID;
        if (!inRunArea) return res;
        const run = saved.frontierExt && saved.frontierExt.activeRun;
        if (!run) return res;
        const facility = FACILITIES.find((f) => f.id === run.facilityId);
        if (!facility) return res;
        const realId = saved.currentPkmn;
        if (!realId || !pkmn[realId]) return res;

        if (/^__zdcEnemy_/.test(realId)) return res;
        const diff = computeRunDifficulty(run.round + 1, facility);

        const moveIds = [];
        try {
          const hud = document.getElementById("explore-header-moves-wild");
          if (hud) {
            const entries = hud.querySelectorAll("[data-move]");
            entries.forEach((el) => { const mv = el.dataset.move; if (mv) moveIds.push(mv); });
          }
        } catch (e) {  }

        const trainer = run.upcomingTrainer || null;
        const usedItems = trainer ? (trainer.__zdcItemsUsed = trainer.__zdcItemsUsed || []) : null;

        const usedAbilities = trainer ? (trainer.__zdcAbilitiesUsed = trainer.__zdcAbilitiesUsed || []) : null;
        const cloneId = cloneEnemyForCombat(realId, {
          diff,
          facilityId: facility.id,
          moveIds,
          isBoss: !!(run.upcomingTrainer && run.upcomingTrainer.isBoss),
          usedItems,
          usedAbilities,
        });
        if (cloneId && cloneId !== realId) {

          try {
            if (__enemyCloneState[cloneId]) {
              __enemyCloneState[cloneId].prevCurrentPkmn = realId;
            }
          } catch (e) {  }
          saved.currentPkmn = cloneId;
          dispatchOnSwitchIn(cloneId);

          try {
            const st = __enemyCloneState[cloneId];
            if (st && st.item && usedItems && usedItems.indexOf(st.item) === -1) {
              usedItems.push(st.item);
            }

            try {
              if (st) {
                if (usedAbilities) {
                  if (st.ability       && usedAbilities.indexOf(st.ability)       === -1) usedAbilities.push(st.ability);
                  if (st.hiddenAbility && usedAbilities.indexOf(st.hiddenAbility) === -1) usedAbilities.push(st.hiddenAbility);
                }
                if (saved && saved.frontierExt) {
                  const ring = saved.frontierExt.__recentEnemyAbilities = saved.frontierExt.__recentEnemyAbilities || [];
                  const pushRing = (abId) => {
                    if (!abId) return;
                    ring.push(abId);
                    while (ring.length > 8) ring.shift();
                  };
                  pushRing(st.ability);
                  pushRing(st.hiddenAbility);
                }
              }
            } catch (e) {  }

            if (st && trainer) {
              trainer.__zdcDefeatedClones = trainer.__zdcDefeatedClones || {};
              trainer.__zdcDefeatedClones[realId] = {
                ability: st.ability || null,
                hiddenAbility: st.hiddenAbility || null,
                item: st.item || null,
                nature: st.nature || null,
                shiny: !!st.shiny,
                ivRating: (diff && typeof diff.ivRating === "number") ? diff.ivRating : 0,
              };
            }
          } catch (e) {  }
        }
      } catch (e) { console.error("[frontier-ext][enemy-ctx] setWildPkmn wrap failed:", e); }
      return res;
    };
  }

  function installEnemyContextLeaveHook() {
    if (typeof window.leaveCombat !== "function") {
      setTimeout(installEnemyContextLeaveHook, 200);
      return;
    }
    if (window.__zdcEnemyContextLeaveHooked) return;
    window.__zdcEnemyContextLeaveHooked = true;
    const origLeave = window.leaveCombat;
    window.leaveCombat = function () {
      let result;
      try { result = origLeave.apply(this, arguments); }
      finally {
        try { destroyAllEnemyClones(); } catch (e) {  }
      }
      return result;
    };
  }

  function __reInflateClone(cid, state) {
    try {
      const cloneDict = (typeof pkmn === "object") ? pkmn[cid] : null;
      if (!cloneDict) return;
      const moveIds = Array.isArray(cloneDict.moves) ? cloneDict.moves.slice() : [];
      applyItemBstInflation(cloneDict, state.item, state.ability, moveIds);
      if (state.hiddenAbility) applyItemBstInflation(cloneDict, null, state.hiddenAbility, moveIds);
    } catch (e) {  }
  }

  function installEnemyContextMoveBuffHook() {
    if (typeof window.moveBuff !== "function") {
      setTimeout(installEnemyContextMoveBuffHook, 200);
      return;
    }
    if (window.__zdcEnemyContextMoveBuffHooked) return;
    window.__zdcEnemyContextMoveBuffHooked = true;
    const origMoveBuff = window.moveBuff;
    window.moveBuff = function (target, buff, mod, turnOverride) {
      const res = origMoveBuff.apply(this, arguments);
      try {
        if (target !== "wild") return res;

        if (!buff || !/^(burn|freeze|confused|paralysis|poisoned|sleep|atkdown[0-9]*|defdown[0-9]*|satkdown[0-9]*|sdefdown[0-9]*|spedown[0-9]*|accdown[0-9]*)$/.test(buff)) return res;
        const cid = saved && saved.currentPkmn;
        if (!cid || !__enemyCloneState[cid]) return res;
        const state = __enemyCloneState[cid];

        if (state.item === "lumBerry" && !state.lumBerryConsumed && item.lumBerry) {

          if (typeof wildBuffs === "object") {
            ["burn","freeze","confused","paralysis","poisoned","sleep"].forEach((b) => { if (wildBuffs[b]) wildBuffs[b] = 0; });
            if (typeof updateWildBuffs === "function") updateWildBuffs();
          }
          state.lumBerryConsumed = true;
          state.item = null;
        }

        if ((state.ability === "hydratation" || state.hiddenAbility === "hydratation")
            && typeof weatherActive !== "undefined" && weatherActive === "rainy") {
          if (typeof wildBuffs === "object") {
            ["burn","freeze","paralysis","poisoned","sleep"].forEach((b) => { if (wildBuffs[b]) wildBuffs[b] = 0; });
            if (typeof updateWildBuffs === "function") updateWildBuffs();
          }
        }

        if ((state.ability === "guts" || state.hiddenAbility === "guts") && !state.gutsApplied
            && /^(burn|poisoned|paralysis)$/.test(buff)) {
          state.gutsApplied = true;
          try {
            const cd = (typeof pkmn === "object") ? pkmn[cid] : null;
            if (cd && cd.bst) cd.bst.atk = (cd.bst.atk || 0) * 1.5;
          } catch (e) {  }
        }

        const STATUS_IMMUNITY = {
          insomnia:    "sleep",
          immunity:    "poisoned",
          limber:      "paralysis",
          ownTempo:    "confused",
          magmaArmor:  "freeze",
          waterVeil:   "burn",
          flowerVeil:  "paralysis",
          aromaVeil:   "burn",
          sweetVeil:   "confused",
          pastelVeil:  "poisoned",
        };
        for (const abId of Object.keys(STATUS_IMMUNITY)) {
          const blocks = STATUS_IMMUNITY[abId];

          if ((state.ability === abId || state.hiddenAbility === abId)
              && buff === blocks
              && typeof wildBuffs === "object" && wildBuffs[blocks]) {
            wildBuffs[blocks] = 0;
            if (typeof updateWildBuffs === "function") updateWildBuffs();
          }
        }

        if ((state.ability === "hyperCutter" || state.hiddenAbility === "hyperCutter")
            && /atkdown/.test(buff) && typeof wildBuffs === "object") {
          ["atkdown1","atkdown2","atkdown3"].forEach((k) => { if (wildBuffs[k]) wildBuffs[k] = 0; });
          if (typeof updateWildBuffs === "function") updateWildBuffs();
        }
        if ((state.ability === "bigPecks" || state.hiddenAbility === "bigPecks")
            && /defdown/.test(buff) && typeof wildBuffs === "object") {
          ["defdown1","defdown2","defdown3"].forEach((k) => { if (wildBuffs[k]) wildBuffs[k] = 0; });
          if (typeof updateWildBuffs === "function") updateWildBuffs();
        }

        if ((state.ability === "wonderSkin" || state.hiddenAbility === "wonderSkin")
            && Math.random() < 0.5 && typeof wildBuffs === "object" && wildBuffs[buff]) {
          wildBuffs[buff] = 0;
          if (typeof updateWildBuffs === "function") updateWildBuffs();
        }

        if ((state.ability === "marvelScale" || state.hiddenAbility === "marvelScale")
            && !state.marvelScaleApplied
            && /^(burn|freeze|paralysis|poisoned|sleep)$/.test(buff)) {
          state.marvelScaleApplied = true;
          try {
            const cd = (typeof pkmn === "object") ? pkmn[cid] : null;
            if (cd && cd.bst) cd.bst.def = (cd.bst.def || 0) * 1.30;
          } catch (e) {  }
        }
        if ((state.ability === "livingShield" || state.hiddenAbility === "livingShield")
            && !state.livingShieldApplied
            && /^(burn|freeze|paralysis|poisoned|sleep)$/.test(buff)) {
          state.livingShieldApplied = true;
          try {
            const cd = (typeof pkmn === "object") ? pkmn[cid] : null;
            if (cd && cd.bst) cd.bst.sdef = (cd.bst.sdef || 0) * 1.30;
          } catch (e) {  }
        }

        if ((state.ability === "brittleArmor" || state.hiddenAbility === "brittleArmor")
            && !state.brittleArmorApplied
            && /^(burn|freeze|paralysis|poisoned|sleep)$/.test(buff)) {
          state.brittleArmorApplied = true;
          try {
            const cd = (typeof pkmn === "object") ? pkmn[cid] : null;
            if (cd && cd.bst) cd.bst.satk = (cd.bst.satk || 0) * 1.50;
          } catch (e) {  }
        }
      } catch (e) {  }
      return res;
    };
  }

  function applyEnemyRuntimeStats() {

  }

  function restoreEnemyRuntimeStats() {
    try { destroyAllEnemyClones(); } catch (e) {  }
  }

  __initBannedEnemyMoves();
  __initItemPool();
  __initAbilityPool();

  function enterFactoryPreviewSlot(run) {
    if (!run.factoryOriginalPreviewSlot) {
      run.factoryOriginalPreviewSlot = saved.currentPreviewTeam;
    }
    if (!saved.previewTeams[FACTORY_PREVIEW_SLOT]) {
      saved.previewTeams[FACTORY_PREVIEW_SLOT] = {};
    }
    const pt = saved.previewTeams[FACTORY_PREVIEW_SLOT];

    for (const sl of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
      pt[sl] = { pkmn: undefined, item: undefined };
    }
    run.factoryTeam.forEach((rental, i) => {

      pt["slot" + (i + 1)] = { pkmn: rental.id, item: rental.item || undefined };
    });
    saved.currentPreviewTeam = FACTORY_PREVIEW_SLOT;
    run.tiedPreviewSlot = FACTORY_PREVIEW_SLOT;
  }
  function restoreFactoryPreviewSlot(run) {
    if (run && run.factoryOriginalPreviewSlot) {
      if (saved.currentPreviewTeam === FACTORY_PREVIEW_SLOT) {
        saved.currentPreviewTeam = run.factoryOriginalPreviewSlot;
      }
      run.factoryOriginalPreviewSlot = null;
    }

    if (saved.previewTeams && saved.previewTeams[FACTORY_PREVIEW_SLOT]) {
      const pt = saved.previewTeams[FACTORY_PREVIEW_SLOT];
      for (const sl of Object.keys(pt)) delete pt[sl];
    }
  }

  function cleanupFactoryRun(run) {
    try { restoreFactoryMoves(run); } catch (e) {  }
    try { restoreFactoryPreviewSlot(run); } catch (e) {  }
    try { setFactoryModalSizing(false); } catch (e) {  }
    if (run) {
      run.factoryPool = null;
      run.factorySelection = null;
      run.factoryTeam = null;
    }
  }

  function setFactoryModalSizing(on) {
    const box = document.getElementById("tooltipBox");
    const bg = document.getElementById("tooltipBackground");
    if (on) {
      if (box) box.classList.add("frontier-ext-factory-open");
      if (bg)  bg.classList.add("frontier-ext-factory-open");
    } else {
      if (box) box.classList.remove("frontier-ext-factory-open");
      if (bg)  bg.classList.remove("frontier-ext-factory-open");
    }
  }

  function openFactoryRentalSelection(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const lang = "en";
    setFactoryModalSizing(true);

    if (!Array.isArray(run.factoryPool) || run.factoryPool.length !== FACTORY_POOL_SIZE) {
      run.factoryPool = generateFactoryRentalPool(facility, run.round + 1);
      run.factorySelection = [];
    }
    if (!Array.isArray(run.factorySelection)) run.factorySelection = [];

    const t = {
          title: "Rental Pokémon",
          subtitle: "Pick 3 out of 6. This team fights through all 7 battles of the round.",
          pickN: "Selected: {n}/3",
          confirm: "⚔️ Confirm & start",
          cancel: "Back",
          abandon: "Abandon",
          noItem: "No item" };

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) top.style.display = "none";
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${facility.name} — ${t.title}`;
    }

    const renderCards = () => {
      const ivLabels = { hp: "HP", atk: "Atk", def: "Def", satk: "SAtk", sdef: "SDef", spe: "Spe" };
      const neutralLabel = "Neutral";
      const ivTier = (v) => v <= 2 ? "low" : v <= 4 ? "mid" : "high";

      const typeColor = (t) => (typeof returnTypeColor === "function")
        ? returnTypeColor(t) : "#888";

      const cards = run.factoryPool.map((rental, idx) => {
        const selected = run.factorySelection.indexOf(idx) !== -1;
        const pickPos = run.factorySelection.indexOf(idx);
        const monName = typeof format === "function" ? format(rental.id) : rental.id;
        const natureLabel = rental.nature
          ? (typeof format === "function" ? format(rental.nature) : rental.nature)
          : neutralLabel;
        const abilityLabel = rental.ability
          ? (typeof format === "function" ? format(rental.ability) : rental.ability)
          : "—";

        const iv = rental.ivs || {};
        const ivRow = (k) => {
          const v = Math.max(0, Math.min(6, (iv[k] | 0)));
          const pct = (v / 6) * 100;
          return `
            <div class="iv-row">
              <span class="iv-label">${ivLabels[k]}</span>
              <div class="iv-bar"><div class="iv-bar-fill ${ivTier(v)}" style="width:${pct}%"></div></div>
              <span class="iv-value">${v}</span>
            </div>`;
        };
        const ivsBlock = `
          <div class="ivs">
            ${ivRow("hp")}${ivRow("atk")}${ivRow("def")}
            ${ivRow("satk")}${ivRow("sdef")}${ivRow("spe")}
          </div>`;

        const movesList = rental.moves.map((k) => {
          const label = typeof format === "function" ? format(k) : k;
          const mv = typeof move !== "undefined" ? move[k] : null;
          const tCol = mv ? typeColor(mv.type) : "#888";
          return `<span class="move" style="--move-type:${tCol}">${label}</span>`;
        }).join("");

        return `
          <div class="frontier-ext-factory-card ${selected ? "selected" : ""}" data-idx="${idx}">
            <div class="card-header">
              <img src="img/pkmn/sprite/${rental.id}.png" alt="${monName}" class="sprite">
              <div class="title-block">
                <div class="name">${monName}</div>
                <div class="tags">
                  <span class="tag-nature">${natureLabel}</span>
                  <span class="tag-ability">${abilityLabel}</span>
                </div>
              </div>
              ${selected ? `<div class="pick-badge">${pickPos + 1}</div>` : ""}
            </div>
            ${ivsBlock}
            <div class="moves">${movesList}</div>
          </div>
        `;
      }).join("");
      return cards;
    };

    const canConfirm = run.factorySelection.length === FACTORY_TEAM_SIZE;

    if (mid) {
      mid.style.display = "block";

      mid.innerHTML = `
        <div class="frontier-ext-factory-subtitle">${t.subtitle}</div>
        <div class="frontier-ext-factory-grid">${renderCards()}</div>
        <div class="frontier-ext-factory-counter">${t.pickN.replace("{n}", run.factorySelection.length)}</div>
        <div class="frontier-ext-factory-actions">
          <button class="frontier-ext-action-btn primary ${canConfirm ? "" : "disabled"}" data-action="factory-confirm">${t.confirm}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        </div>
      `;
      mid.querySelectorAll(".frontier-ext-factory-card").forEach((el) => {
        el.addEventListener("click", () => toggleFactorySelection(parseInt(el.dataset.idx, 10), facility));
      });
      mid.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => {
          if (btn.classList.contains("disabled")) return;
          handleRunAction(btn.dataset.action, facility);
        };
      });
    }

    if (bottom) {
      bottom.style.display = "none";
      bottom.innerHTML = "";
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function toggleFactorySelection(idx, facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !Array.isArray(run.factoryPool)) return;
    if (!Array.isArray(run.factorySelection)) run.factorySelection = [];
    const pos = run.factorySelection.indexOf(idx);
    if (pos !== -1) {

      run.factorySelection.splice(pos, 1);
    } else {
      if (run.factorySelection.length >= FACTORY_TEAM_SIZE) return;
      run.factorySelection.push(idx);
    }
    openFactoryRentalSelection(facility);
  }

  function confirmFactorySelection(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !Array.isArray(run.factorySelection)) return;
    if (run.factorySelection.length !== FACTORY_TEAM_SIZE) return;

    run.factoryTeam = run.factorySelection.map((i) => run.factoryPool[i]);

    enterFactoryPreviewSlot(run);
    applyFactoryMoves(run);

    setFactoryModalSizing(false);

    launchCombat(facility);
  }

  function openFactorySwapModal(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    if (!Array.isArray(run.pendingFactorySwap) || !Array.isArray(run.factoryTeam)) {

      openSimulatedFight(facility);
      return;
    }
    const lang = "en";
    setFactoryModalSizing(true);

    if (!Array.isArray(run.factorySwapSelection)) run.factorySwapSelection = [null, null];

    const t = {
          title: "Post-battle swap",
          subtitle: "You won! You may trade one of your Pokémon with one of your opponent's, or skip.",
          opponentTeam: "Defeated opponent",
          yourTeam: "Your current team",
          confirm: "🔄 Confirm swap",
          skip: "Skip — keep my team",
          pickBoth: "Pick one Pokémon from each side to swap." };

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) top.style.display = "none";
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${facility.name} — ${t.title}`;
    }

    const renderCard = (rental, side, idx, isSelected) => {
      const monName = typeof format === "function" ? format(rental.id) : rental.id;
      const natureLabel = rental.nature
        ? (typeof format === "function" ? format(rental.nature) : rental.nature)
        : ("Neutral");
      const abilityLabel = rental.ability
        ? (typeof format === "function" ? format(rental.ability) : rental.ability)
        : "—";
      const typeColor = (ty) => (typeof returnTypeColor === "function") ? returnTypeColor(ty) : "#888";
      const moves = (rental.moves || []).map((k) => {
        const label = typeof format === "function" ? format(k) : k;
        const mv = typeof move !== "undefined" ? move[k] : null;
        const tCol = mv ? typeColor(mv.type) : "#888";
        return `<span class="move" style="--move-type:${tCol}">${label}</span>`;
      }).join("");
      const iv = rental.ivs || {};
      const ivTier = (v) => v <= 2 ? "low" : v <= 4 ? "mid" : "high";
      const ivLabels = { hp: "HP", atk: "Atk", def: "Def", satk: "SAtk", sdef: "SDef", spe: "Spe" };
      const ivRow = (k) => {
        const v = Math.max(0, Math.min(6, (iv[k] | 0)));
        return `<div class="iv-row"><span class="iv-label">${ivLabels[k]}</span>
          <div class="iv-bar"><div class="iv-bar-fill ${ivTier(v)}" style="width:${(v / 6) * 100}%"></div></div>
          <span class="iv-value">${v}</span></div>`;
      };
      return `
        <div class="frontier-ext-factory-card ${isSelected ? "selected" : ""} swap-${side}"
             data-swap-side="${side}" data-swap-idx="${idx}">
          <div class="card-header">
            <img src="img/pkmn/sprite/${rental.id}.png" alt="${monName}" class="sprite">
            <div class="title-block">
              <div class="name">${monName}</div>
              <div class="tags">
                <span class="tag-nature">${natureLabel}</span>
                <span class="tag-ability">${abilityLabel}</span>
              </div>
            </div>
          </div>
          <div class="ivs">
            ${ivRow("hp")}${ivRow("atk")}${ivRow("def")}
            ${ivRow("satk")}${ivRow("sdef")}${ivRow("spe")}
          </div>
          <div class="moves">${moves}</div>
        </div>
      `;
    };

    const [takeIdx, giveIdx] = run.factorySwapSelection;
    const opponentGrid = run.pendingFactorySwap.map((r, i) =>
      renderCard(r, "take", i, takeIdx === i)).join("");
    const yourGrid = run.factoryTeam.map((r, i) =>
      renderCard(r, "give", i, giveIdx === i)).join("");

    const canConfirm = takeIdx !== null && giveIdx !== null;

    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div class="frontier-ext-factory-subtitle">${t.subtitle}</div>
        <div class="frontier-ext-factory-swap-section">
          <div class="section-label opponent">${t.opponentTeam}</div>
          <div class="frontier-ext-factory-grid">${opponentGrid}</div>
        </div>
        <div class="frontier-ext-factory-swap-section">
          <div class="section-label yours">${t.yourTeam}</div>
          <div class="frontier-ext-factory-grid">${yourGrid}</div>
        </div>
        <div class="frontier-ext-factory-counter">${canConfirm ? "✓" : t.pickBoth}</div>
        <div class="frontier-ext-factory-actions">
          <button class="frontier-ext-action-btn primary ${canConfirm ? "" : "disabled"}" data-action="factory-swap-confirm">${t.confirm}</button>
          <button class="frontier-ext-action-btn" data-action="factory-swap-skip">${t.skip}</button>
        </div>
      `;
      mid.querySelectorAll(".frontier-ext-factory-card").forEach((el) => {
        el.addEventListener("click", () => {
          const side = el.dataset.swapSide;
          const idx = parseInt(el.dataset.swapIdx, 10);
          if (side === "take") run.factorySwapSelection[0] = idx;
          else run.factorySwapSelection[1] = idx;
          openFactorySwapModal(facility);
        });
      });
      mid.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => {
          if (btn.classList.contains("disabled")) return;
          handleRunAction(btn.dataset.action, facility);
        };
      });
    }
    if (bottom) { bottom.style.display = "none"; bottom.innerHTML = ""; }
    if (typeof openTooltip === "function") openTooltip();
  }

  function confirmFactorySwap(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !Array.isArray(run.pendingFactorySwap)) return;
    const [takeIdx, giveIdx] = run.factorySwapSelection || [null, null];
    if (takeIdx === null || giveIdx === null) return;
    const incoming = run.pendingFactorySwap[takeIdx];
    const outgoing = run.factoryTeam[giveIdx];
    if (!incoming || !outgoing) return;

    if (run.factoryOriginalState && run.factoryOriginalState[outgoing.id]
        && typeof pkmn !== "undefined" && pkmn[outgoing.id]) {
      const orig = run.factoryOriginalState[outgoing.id];
      pkmn[outgoing.id].moves = orig.moves;
      pkmn[outgoing.id].nature = orig.nature;
      pkmn[outgoing.id].ivs = orig.ivs;
      pkmn[outgoing.id].ability = orig.ability;
      if ("level" in orig) pkmn[outgoing.id].level = orig.level;
      if ("exp"   in orig) pkmn[outgoing.id].exp   = orig.exp;
      if ("caught" in orig) pkmn[outgoing.id].caught = orig.caught;
      delete run.factoryOriginalState[outgoing.id];
    }

    run.factoryTeam[giveIdx] = incoming;
    const pt = saved.previewTeams && saved.previewTeams[FACTORY_PREVIEW_SLOT];

    if (pt) pt["slot" + (giveIdx + 1)] = { pkmn: incoming.id, item: incoming.item || undefined };

    applyFactoryMoves(run);

    run.pendingFactorySwap = null;
    run.factorySwapSelection = [null, null];

    openSimulatedFight(facility);
  }

  const PYR_GRID_SIZE = 5;
  const PYR_TILES = {
    EMPTY: "empty",
    WALL: "wall",
    STAIRS: "stairs",
    TRAINER: "trainer",
    WILD: "wild",
    ITEM: "item",

    HEAL_FULL: "healFull",
    HEAL_PARTIAL: "healHalf",
    CURE_STATUS: "cure" };
  const PYRAMID_THEMES = [
    { key: "paralysis",             label: "Paralysis",
      pool: ["plusle", "minun", "pikachu", "electabuzz", "vileplume", "manectric", "breloom", "jolteon"] },
    { key: "poison",                label: "Poison",
      pool: ["gulpin", "roselia", "butterfree", "seviper", "skarmory", "ludicolo", "crobat", "gengar"] },
    { key: "burn",               label: "Burn",
      pool: ["growlithe", "vulpix", "magcargo", "ninetales", "medicham", "weezing", "dusclops", "houndoom"] },
    { key: "iceType",            label: "Ice type",
      pool: ["glalie", "sneasel", "dewgong", "piloswine", "jynx", "cloyster", "walrein", "lapras"] },
    { key: "psyType",              label: "Psychic type",
      pool: ["wobbuffet", "metang", "exeggutor", "slowking", "xatu", "alakazam", "starmie", "espeon"] },
    { key: "rockType",            label: "Rock type",
      pool: ["golem", "steelix", "omastar", "lunatone", "shuckle", "armaldo", "cradily", "aerodactyl"] },
    { key: "fightType",           label: "Fighting type",
      pool: ["poliwrath", "hariyama", "breloom", "medicham", "hitmonchan", "hitmonlee", "heracross", "machamp"] },
    { key: "weather",                 label: "Weather",
      pool: ["quagsire", "tropius", "pupitar", "lapras", "cacturne", "flareon", "walrein", "gyarados"] },
    { key: "bugType",          label: "Bug type",
      pool: ["pineco", "shuckle", "venomoth", "scizor", "heracross", "forretress", "armaldo", "shedinja"] },
    { key: "darkType",         label: "Dark type",
      pool: ["sableye", "sneasel", "crawdaunt", "shiftry", "cacturne", "absol", "houndoom", "umbreon"] },
    { key: "waterType",              label: "Water type",
      pool: ["octillery", "dewgong", "pelipper", "quagsire", "ludicolo", "slowking", "starmie", "blastoise"] },
    { key: "ghostType",          label: "Ghost type",
      pool: ["duskull", "haunter", "banette", "misdreavus", "sableye", "dusclops", "shedinja", "gengar"] },
    { key: "steelType",            label: "Steel type",
      pool: ["mawile", "magneton", "steelix", "scizor", "forretress", "skarmory", "aggron", "metagross"] },
    { key: "flyDragon",   label: "Flying & Dragon",
      pool: ["dragonair", "vibrava", "altaria", "flygon", "aerodactyl", "gyarados", "kingdra", "charizard"] },
    { key: "evoStones",   label: "Evolution stones",
      pool: ["arcanine", "poliwrath", "raichu", "vaporeon", "jolteon", "flareon", "ninetales", "starmie"] },
    { key: "normalType",           label: "Normal type",
      pool: ["kangaskhan", "swellow", "ursaring", "porygon2", "tauros", "fearow", "snorlax", "slaking"] },
  ];

  const PYRAMID_THEME_COUNT = PYRAMID_THEMES.length;

  function pyramidCurrentTheme(run) {
    if (!run) return PYRAMID_THEMES[0];
    const idx = ((run.pyramidThemeIndex | 0) % PYRAMID_THEME_COUNT + PYRAMID_THEME_COUNT) % PYRAMID_THEME_COUNT;
    return PYRAMID_THEMES[idx];
  }
  function pyramidNextTheme(run) {
    if (!run) return PYRAMID_THEMES[0];
    const idx = ((((run.pyramidThemeIndex | 0) + 1) % PYRAMID_THEME_COUNT) + PYRAMID_THEME_COUNT) % PYRAMID_THEME_COUNT;
    return PYRAMID_THEMES[idx];
  }

  const PYRAMID_ITEMS = [
    { id: "cheriBerry",   label: "Cheri Berry",   kind: "cure", cure: "paralysis" },
    { id: "chestoBerry",   label: "Chesto Berry",  kind: "cure", cure: "sleep" },
    { id: "pechaBerry",   label: "Pecha Berry",   kind: "cure", cure: "poisoned" },
    { id: "rawstBerry",  label: "Rawst Berry",   kind: "cure", cure: "burn" },

    { id: "persimBerry",   label: "Persim Berry",  kind: "cure", cure: "confused" },
    { id: "hyperPotion", label: "Hyper Potion",  kind: "heal", ratio: 0.6 },
    { id: "fullRestore",     label: "Full Restore",  kind: "heal_full_cure" },
    { id: "revive",       label: "Revive",        kind: "revive", ratio: 0.5 },
    { id: "maxRevive",   label: "Max Revive",    kind: "revive", ratio: 1.0 },

    { id: "choiceBand",       label: "Choice Band",      kind: "held" },
    { id: "choiceSpecs",    label: "Choice Specs",     kind: "held" },
    { id: "leftovers",            label: "Leftovers",        kind: "held" },
    { id: "quickClaw",       label: "Quick Claw",       kind: "held" },
    { id: "lifeOrb",          label: "Life Orb",         kind: "held" },
    { id: "assaultVest",   label: "Assault Vest",     kind: "held" },
    { id: "weaknessPolicy",   label: "Weakness Policy",  kind: "held" },
    { id: "loadedDice",         label: "Loaded Dice",      kind: "held" },
    { id: "eviolite",          label: "Eviolite",         kind: "held" },
    { id: "mentalHerb",      label: "Mental Herb",      kind: "held" },
    { id: "clearAmulet",   label: "Clear Amulet",     kind: "held" },
    { id: "heavyDutyBoots",    label: "Heavy-Duty Boots", kind: "held" },
  ];

  const PYRAMID_BAG_CAP = 10;

  function pyramidItemDef(id) {
    return PYRAMID_ITEMS.find((it) => it.id === id) || null;
  }
  function pyramidItemLabel(id, lang) {
    const def = pyramidItemDef(id);
    if (!def) return id;
    return def.label;
  }
  function pyramidItemSprite(id) {

    if (typeof item === "undefined" || !item[id]) return null;
    return `img/items/${id}.png`;
  }

  function isPyramidFacility(facility) {
    return !!(facility && facility.rules && facility.rules.gridNav);
  }
  function isInPyramidRun() {
    if (typeof saved !== "object" || !saved) return false;
    if (!saved.frontierExt || !saved.frontierExt.activeRun) return false;
    const facility = FACILITIES.find((f) => f.id === saved.frontierExt.activeRun.facilityId);
    return isPyramidFacility(facility);
  }

  const PYR_TILE_SVG = {
    floor: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="2" y="3" width="2" height="1" fill="#a98848"/><rect x="10" y="6" width="1" height="1" fill="#a98848"/><rect x="5" y="10" width="2" height="1" fill="#a98848"/><rect x="12" y="12" width="1" height="2" fill="#a98848"/><rect x="1" y="14" width="1" height="1" fill="#a98848"/></svg>`,
    wall: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#4a3520"/><rect x="0" y="0" width="16" height="1" fill="#6a4f30"/><rect x="0" y="4" width="16" height="1" fill="#2a1d10"/><rect x="5" y="1" width="1" height="3" fill="#2a1d10"/><rect x="11" y="1" width="1" height="3" fill="#2a1d10"/><rect x="0" y="8" width="16" height="1" fill="#2a1d10"/><rect x="2" y="5" width="1" height="3" fill="#2a1d10"/><rect x="8" y="5" width="1" height="3" fill="#2a1d10"/><rect x="14" y="5" width="1" height="3" fill="#2a1d10"/><rect x="0" y="12" width="16" height="1" fill="#2a1d10"/><rect x="5" y="9" width="1" height="3" fill="#2a1d10"/><rect x="11" y="9" width="1" height="3" fill="#2a1d10"/><rect x="2" y="13" width="1" height="3" fill="#2a1d10"/><rect x="8" y="13" width="1" height="3" fill="#2a1d10"/><rect x="14" y="13" width="1" height="3" fill="#2a1d10"/></svg>`,

    stairs: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="2" y="4" width="12" height="8" fill="#3060c0" stroke="#2040a0" stroke-width="1"/></svg>`,
    question: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><text x="8" y="13" font-size="12" font-weight="bold" text-anchor="middle" fill="#5a3020" font-family="monospace">?</text></svg>`,
    heal: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="5" y="2" width="6" height="12" fill="#f86060"/><rect x="2" y="5" width="12" height="6" fill="#f86060"/><rect x="6" y="3" width="4" height="10" fill="#ff8080"/><rect x="3" y="6" width="10" height="4" fill="#ff8080"/></svg>`,
    cure: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><circle cx="8" cy="8" r="5" fill="#70e070"/><rect x="7" y="4" width="2" height="8" fill="#ffffff"/><rect x="4" y="7" width="8" height="2" fill="#ffffff"/></svg>`,
    trainer: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="6" y="2" width="4" height="3" fill="#2a1a0a"/><rect x="5" y="5" width="6" height="6" fill="#5080d0"/><rect x="4" y="11" width="3" height="3" fill="#2a1a0a"/><rect x="9" y="11" width="3" height="3" fill="#2a1a0a"/></svg>`,
    wild: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="4" y="4" width="2" height="2" fill="#5a8030"/><rect x="10" y="3" width="3" height="3" fill="#5a8030"/><rect x="7" y="8" width="2" height="2" fill="#5a8030"/><rect x="3" y="11" width="3" height="2" fill="#5a8030"/><rect x="11" y="12" width="2" height="2" fill="#5a8030"/></svg>`,

    item: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#c9a86a"/><rect x="5" y="6" width="6" height="7" fill="#d07030" stroke="#8a4018" stroke-width="1"/><rect x="4" y="5" width="8" height="2" fill="#e08040" stroke="#8a4018" stroke-width="1"/><rect x="7" y="5" width="2" height="8" fill="#ffd060"/><rect x="6" y="3" width="4" height="3" fill="#ffd060"/></svg>`,
    fog: `<svg viewBox="0 0 16 16" preserveAspectRatio="none"><rect width="16" height="16" fill="#2a1a14"/><rect x="3" y="3" width="2" height="2" fill="#3a2520" opacity="0.6"/><rect x="11" y="5" width="2" height="2" fill="#3a2520" opacity="0.6"/><rect x="7" y="9" width="2" height="2" fill="#3a2520" opacity="0.6"/></svg>` };

  const PYR_CHARACTER_SVG = `
<svg viewBox="0 0 16 20" preserveAspectRatio="xMidYMid meet" class="pyr-char">
  <!-- Hat -->
  <rect x="4" y="1" width="8" height="2" fill="#c04040"/>
  <rect x="3" y="3" width="10" height="1" fill="#c04040"/>
  <!-- Face -->
  <rect x="5" y="4" width="6" height="3" fill="#f0c898"/>
  <rect x="5" y="5" width="1" height="1" fill="#2a1a0a"/>
  <rect x="10" y="5" width="1" height="1" fill="#2a1a0a"/>
  <!-- Body (blue shirt) -->
  <rect x="4" y="7" width="8" height="5" fill="#4060c0"/>
  <rect x="4" y="7" width="8" height="1" fill="#6080e0"/>
  <!-- Arms -->
  <rect x="3" y="8" width="1" height="3" fill="#4060c0"/>
  <rect x="12" y="8" width="1" height="3" fill="#4060c0"/>
  <!-- Legs (base) -->
  <rect class="pyr-leg-l" x="5" y="12" width="2" height="5" fill="#303030"/>
  <rect class="pyr-leg-r" x="9" y="12" width="2" height="5" fill="#303030"/>
  <!-- Shoes -->
  <rect x="5" y="17" width="2" height="1" fill="#1a1a1a"/>
  <rect x="9" y="17" width="2" height="1" fill="#1a1a1a"/>
</svg>`.trim();

  function generatePyramidFloor(facility, floorNum, isLastFloor) {
    const size = PYR_GRID_SIZE;
    const grid = [];
    for (let y = 0; y < size; y++) {
      const row = [];
      for (let x = 0; x < size; x++) row.push(PYR_TILES.EMPTY);
      grid.push(row);
    }

    const startX = Math.floor(size / 2);
    const startY = size - 1;
    let stairsX = Math.floor(Math.random() * size);
    let stairsY = 0;

    if (stairsX === startX && stairsY === startY) stairsX = (stairsX + 1) % size;

    const protectedCells = new Set();
    const cellKey = (x, y) => y * size + x;
    {
      const vFirst = Math.random() < 0.5;
      let px = startX;
      let py = startY;
      protectedCells.add(cellKey(px, py));
      const stepToward = (from, to) => (from < to ? from + 1 : from - 1);
      if (vFirst) {
        while (py !== stairsY) { py = stepToward(py, stairsY); protectedCells.add(cellKey(px, py)); }
        while (px !== stairsX) { px = stepToward(px, stairsX); protectedCells.add(cellKey(px, py)); }
      } else {
        while (px !== stairsX) { px = stepToward(px, stairsX); protectedCells.add(cellKey(px, py)); }
        while (py !== stairsY) { py = stepToward(py, stairsY); protectedCells.add(cellKey(px, py)); }
      }
    }

    const wallCount = Math.floor(size * size * 0.18);
    let placedWalls = 0, safety = 0;
    while (placedWalls < wallCount && safety < 50) {
      safety++;
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      if (x === startX && y === startY) continue;
      if (x === stairsX && y === stairsY) continue;
      if (protectedCells.has(cellKey(x, y))) continue;
      if (grid[y][x] !== PYR_TILES.EMPTY) continue;
      grid[y][x] = PYR_TILES.WALL;
      placedWalls++;
    }

    const isReachable = () => {
      const seen = new Set([cellKey(startX, startY)]);
      const queue = [[startX, startY]];
      while (queue.length) {
        const [cx, cy] = queue.shift();
        if (cx === stairsX && cy === stairsY) return true;
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const nx = cx + dx, ny = cy + dy;
          if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
          const k = cellKey(nx, ny);
          if (seen.has(k)) continue;
          if (grid[ny][nx] === PYR_TILES.WALL) continue;
          seen.add(k);
          queue.push([nx, ny]);
        }
      }
      return false;
    };
    let breakSafety = 0;
    while (!isReachable() && breakSafety < 30) {
      breakSafety++;

      const walls = [];
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          if (grid[y][x] === PYR_TILES.WALL) walls.push([x, y]);
        }
      }
      if (!walls.length) break;
      const [wx, wy] = walls[Math.floor(Math.random() * walls.length)];
      grid[wy][wx] = PYR_TILES.EMPTY;
    }

    grid[stairsY][stairsX] = PYR_TILES.STAIRS;

    const difficulty = floorNum / 7;
    const emptyCells = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (grid[y][x] === PYR_TILES.EMPTY && !(x === startX && y === startY)) {
          emptyCells.push({ x, y });
        }
      }
    }

    emptyCells.sort(() => Math.random() - 0.5);

    const trainerCount = Math.max(2, Math.floor(emptyCells.length * (0.28 + 0.14 * difficulty)));
    const wildCount = Math.max(1, Math.floor(emptyCells.length * (0.18 + 0.04 * difficulty)));
    const itemCount  = Math.max(1, Math.floor(emptyCells.length * 0.15));

    const assign = (type, count) => {
      for (let i = 0; i < count && emptyCells.length; i++) {
        const c = emptyCells.shift();
        grid[c.y][c.x] = type;
      }
    };
    assign(PYR_TILES.TRAINER, trainerCount);
    assign(PYR_TILES.WILD, wildCount);
    assign(PYR_TILES.ITEM, itemCount);

    return {
      grid,
      playerX: startX,
      playerY: startY,
      stairsX, stairsY,
      visited: { [startY * size + startX]: true },
      revealed: { [startY * size + startX]: true },
      floor: floorNum,
      isLastFloor: !!isLastFloor };
  }

  function pyramidFloorIsSolvable(state) {
    if (!state || !Array.isArray(state.grid)) return true;
    const size = state.grid.length;
    const sx = state.playerX, sy = state.playerY;
    const tx = state.stairsX, ty = state.stairsY;
    const seen = new Set([sy * size + sx]);
    const queue = [[sx, sy]];
    while (queue.length) {
      const [cx, cy] = queue.shift();
      if (cx === tx && cy === ty) return true;
      for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const nx = cx + dx, ny = cy + dy;
        if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
        const k = ny * size + nx;
        if (seen.has(k)) continue;
        if (state.grid[ny][nx] === PYR_TILES.WALL) continue;
        seen.add(k);
        queue.push([nx, ny]);
      }
    }
    return false;
  }

  function ensurePyramidFloor(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run) return null;
    if (!run.pyramid) {
      const floor = 1;
      run.pyramid = generatePyramidFloor(facility, floor, floor === 7);
    } else if (!pyramidFloorIsSolvable(run.pyramid)) {
      const prevFloor = run.pyramid.floor || 1;
      const prevLast = !!run.pyramid.isLastFloor;
      run.pyramid = generatePyramidFloor(facility, prevFloor, prevLast);
    }
    return run.pyramid;
  }

  function setPyramidModalSizing(on) {
    const box = document.getElementById("tooltipBox");
    if (!box) return;
    if (on) box.classList.add("frontier-ext-pyramid-open");
    else box.classList.remove("frontier-ext-pyramid-open");
  }

  function openPyramidFloorMap(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;

    if (!canRunProceed(facility)) return;
    const state = ensurePyramidFloor(facility);
    if (!state) return;
    setPyramidModalSizing(true);
    const lang = "en";

    const t = {
          title: "Battle Pyramid",
          floor: "Floor",
          hpStatus: "Team status",
          hintStart: "Explore the floor — click an adjacent tile to move.",
          hintFinal: `Final floor — the ${"Zone Leader"} is waiting near the stairs.`,
          abandon: "Abandon" };

    const nextRound = run.round + 1;
    const bossInfo = getBossRoundInfo(nextRound, facility);
    const isBossFloor = state.floor === 7 && !!bossInfo;

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) top.style.display = "none";
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${t.title} — ${t.floor} ${state.floor}/7`;
    }

    const tileHtml = (x, y) => {
      const key = y * PYR_GRID_SIZE + x;
      const tile = state.grid[y][x];
      const isVisited = !!state.visited[key];
      const isRevealed = !!state.revealed[key];
      const isPlayer = x === state.playerX && y === state.playerY;
      const isAdjacent = Math.abs(x - state.playerX) + Math.abs(y - state.playerY) === 1;

      let svg = PYR_TILE_SVG.fog;
      let cls = "pyr-tile";
      if (tile === PYR_TILES.WALL) {
        svg = PYR_TILE_SVG.wall; cls += " wall";
      } else if (tile === PYR_TILES.STAIRS) {
        svg = PYR_TILE_SVG.stairs; cls += " stairs";
      } else if (isRevealed || isVisited) {
        if (tile === PYR_TILES.EMPTY) { svg = PYR_TILE_SVG.floor; cls += " floor"; }
        else if (tile === PYR_TILES.TRAINER) { svg = PYR_TILE_SVG.trainer; cls += " trainer"; }
        else if (tile === PYR_TILES.WILD) { svg = PYR_TILE_SVG.wild; cls += " wild"; }
        else if (tile === PYR_TILES.ITEM) { svg = PYR_TILE_SVG.item; cls += " item"; }

        else if (tile === PYR_TILES.HEAL_FULL || tile === PYR_TILES.HEAL_PARTIAL
                 || tile === PYR_TILES.CURE_STATUS) { svg = PYR_TILE_SVG.floor; cls += " floor"; }
      } else {

        svg = PYR_TILE_SVG.question; cls += " unrevealed";
      }
      if (isAdjacent && tile !== PYR_TILES.WALL) cls += " clickable";
      if (isPlayer) cls += " player-here";
      const playerSprite = isPlayer ? `<div class="pyr-char-mount">${PYR_CHARACTER_SVG}</div>` : "";
      return `<div class="${cls}" data-x="${x}" data-y="${y}">${svg}${playerSprite}</div>`;
    };

    let gridHtml = '<div class="frontier-ext-pyr-grid" style="grid-template-columns: repeat(' + PYR_GRID_SIZE + ', 1fr);">';
    for (let y = 0; y < PYR_GRID_SIZE; y++) {
      for (let x = 0; x < PYR_GRID_SIZE; x++) gridHtml += tileHtml(x, y);
    }
    gridHtml += '</div>';

    const hpSummary = renderFrontierTeamHpSummary();

    const hint = isBossFloor ? t.hintFinal : t.hintStart;
    const hintClass = isBossFloor ? "pyr-hint boss" : "pyr-hint";

    const currentTheme = pyramidCurrentTheme(run);
    const themeLabel = currentTheme.label;
    const themeHeaderTxt = `Current theme: <strong>${themeLabel}</strong>`;
    pyramidEnsureBag(run);
    const bagBtnLabel = `🎒 Bag (${pyramidBagCount(run)}/${run.combatBag.cap})`;

    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div class="frontier-ext-pyr-theme-bar">${themeHeaderTxt}</div>
        ${hpSummary}
        <div class="${hintClass}">${hint}</div>
        ${gridHtml}
        <div class="frontier-ext-pyr-side-actions">
          <button class="frontier-ext-action-btn" data-action="pyr-bag-open">${bagBtnLabel}</button>
        </div>
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        </div>
      `;
      mid.querySelectorAll(".pyr-tile.clickable").forEach((el) => {
        el.addEventListener("click", () => {
          const tx = parseInt(el.dataset.x, 10);
          const ty = parseInt(el.dataset.y, 10);
          pyramidMovePlayerTo(tx, ty, facility);
        });
      });
      mid.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (bottom) { bottom.style.display = "none"; bottom.innerHTML = ""; }
    if (typeof openTooltip === "function") openTooltip();
  }

  function renderFrontierTeamHpSummary() {
    const run = saved.frontierExt.activeRun;
    if (!run) return "";
    migratePikePyramidTeam();
    if (!run.pikeTeam) return "";
    const l = pikeL10n();
    const statusLabel = {
      poisoned: l.statusPoisoned, burn: l.statusBurn, paralysis: l.statusParalysis,
      sleep: l.statusSleep, freeze: l.statusFreeze };
    const cells = [];
    for (const sl of ["slot1", "slot2", "slot3"]) {
      const ps = run.pikeTeam[sl];
      if (!ps || !ps.pkmnId) continue;
      const ratio = (typeof ps.hpRatio === "number") ? ps.hpRatio : 1.0;
      const status = ps.status ? normalizePikePyramidStatus(ps.status) : null;

      const pct = ratio > 0 ? Math.max(1, Math.round(ratio * 100)) : 0;
      const barWidth = Math.max(0, Math.min(100, pct));
      const cls = ratio <= 0 ? "low" : (ratio <= 0.25 ? "low" : (ratio <= 0.5 ? "mid" : ""));
      const monName = typeof format === "function" ? format(ps.pkmnId) : ps.pkmnId;
      const statusPill = status
        ? `<span class="st ${status}">${statusLabel[status] || status}</span>`
        : "";

      const healFlash = ps.healJustApplied ? " heal-full-flash" : "";
      if (ps.healJustApplied) ps.healJustApplied = false;
      cells.push(`
        <span class="frontier-ext-pike-hp-pill ${cls}${healFlash}">
          ${monName}: ${ratio <= 0 ? "KO" : pct + "%"}
          <span class="bar"><span style="width:${barWidth}%"></span></span>
          ${statusPill}
        </span>
      `);
    }
    if (!cells.length) return "";
    return `<div class="frontier-ext-pike-hp-summary">${cells.join("")}</div>`;
  }

  function pyramidMovePlayerTo(tx, ty, facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !run.pyramid) return;

    if (!canRunProceed(facility)) return;
    const state = run.pyramid;

    const dx = Math.abs(tx - state.playerX);
    const dy = Math.abs(ty - state.playerY);
    if (dx + dy !== 1) return;
    if (state.grid[ty][tx] === PYR_TILES.WALL) return;

    state.playerX = tx; state.playerY = ty;
    const key = ty * PYR_GRID_SIZE + tx;
    state.visited[key] = true;
    state.revealed[key] = true;

    [[1,0],[-1,0],[0,1],[0,-1]].forEach(([ddx, ddy]) => {
      const nx = tx + ddx, ny = ty + ddy;
      if (nx < 0 || nx >= PYR_GRID_SIZE || ny < 0 || ny >= PYR_GRID_SIZE) return;
      state.revealed[ny * PYR_GRID_SIZE + nx] = true;
    });

    pyramidResolveTile(facility);
  }

  function pyramidResolveTile(facility) {
    const run = saved.frontierExt.activeRun;
    const state = run.pyramid;
    const tile = state.grid[state.playerY][state.playerX];
    const key = state.playerY * PYR_GRID_SIZE + state.playerX;

    switch (tile) {
      case PYR_TILES.TRAINER: {

        state.grid[state.playerY][state.playerX] = PYR_TILES.EMPTY;
        const trainer = generateTrainer(run.round + 1, facility);
        trainer.team = (trainer.team || []).slice(0, 1);
        run.upcomingTrainer = trainer;
        run.pyramidEncounterKind = "trainer";
        launchCombat(facility);
        return;
      }
      case PYR_TILES.WILD: {

        state.grid[state.playerY][state.playerX] = PYR_TILES.EMPTY;
        const theme = pyramidCurrentTheme(run);
        const id = theme.pool[Math.floor(Math.random() * theme.pool.length)];
        const diff = computeRunDifficulty(run.round + 1, facility);
        const moves = pickMovesetFor(id, diff);
        biasPyramidWildMoveset(id, moves, theme.key);
        const wildTrainer = {
          name: "Wild Pokémon",
          sprite: "hiker",
          team: [{ id, moves, nature: "" }],
          isWild: true,
          facilityId: facility.id,
          round: run.round + 1,
          tier: diff.tier,
          multiplier: diff.mult };
        run.upcomingTrainer = wildTrainer;
        run.pyramidEncounterKind = "wild";
        launchCombat(facility);
        return;
      }
      case PYR_TILES.ITEM: {

        state.grid[state.playerY][state.playerX] = PYR_TILES.EMPTY;
        const bag = pyramidEnsureBag(run);
        const ownedHeld = new Set(
          bag.items
            .map((it) => it.id)
            .filter((id) => { const d = pyramidItemDef(id); return d && d.kind === "held"; })
        );
        const isDuplicateHeld = (def) => def.kind === "held" && ownedHeld.has(def.id);
        let pick = PYRAMID_ITEMS[Math.floor(Math.random() * PYRAMID_ITEMS.length)];
        let safety = 0;
        while (isDuplicateHeld(pick) && safety < 10) {
          pick = PYRAMID_ITEMS[Math.floor(Math.random() * PYRAMID_ITEMS.length)];
          safety++;
        }
        if (isDuplicateHeld(pick)) {
          const consumables = PYRAMID_ITEMS.filter((d) => d.kind !== "held");
          if (consumables.length) pick = consumables[Math.floor(Math.random() * consumables.length)];
        }
        showPyramidItemFoundModal(facility, pick);
        run.pyramidPendingAfterEvent = true;
        return;
      }

      case PYR_TILES.HEAL_FULL:
      case PYR_TILES.HEAL_PARTIAL:
      case PYR_TILES.CURE_STATUS: {
        state.grid[state.playerY][state.playerX] = PYR_TILES.EMPTY;
        openPyramidFloorMap(facility);
        return;
      }
      case PYR_TILES.STAIRS: {

        const bossInfo = getBossRoundInfo(run.round + 1, facility);
        if (state.floor === 7 && bossInfo) {

          run.upcomingTrainer = null;
          run.pyramidEncounterKind = "brain";
          launchCombat(facility);
          return;
        }

        pyramidAdvanceFloor(facility);
        return;
      }
      case PYR_TILES.EMPTY:
      default:

        openPyramidFloorMap(facility);
        return;
    }
  }

  function pyramidAdvanceFloor(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !run.pyramid) return;

    if (!canRunProceed(facility)) return;
    const nextFloor = run.pyramid.floor + 1;
    if (nextFloor > 7) {

      run.pyramidRoundComplete = true;
      onRunVictory();

      if (run.roundJustCleared) {
        showRoundClearedModal(facility);
      }
      return;
    }
    run.pyramid = generatePyramidFloor(facility, nextFloor, nextFloor === 7);
    openPyramidFloorMap(facility);
  }

  function pyramidAfterEvent(facility) {
    const run = saved.frontierExt.activeRun;
    if (run) run.pyramidPendingAfterEvent = false;
    openPyramidFloorMap(facility);
  }

  function pyramidEnsureBag(run) {
    if (!run) return null;
    if (!run.combatBag || typeof run.combatBag !== "object") {
      run.combatBag = { items: [], cap: PYRAMID_BAG_CAP };
    }
    if (typeof run.combatBag.cap !== "number") run.combatBag.cap = PYRAMID_BAG_CAP;
    if (!Array.isArray(run.combatBag.items)) run.combatBag.items = [];
    return run.combatBag;
  }

  function pyramidAddToBag(run, id) {
    const bag = pyramidEnsureBag(run);
    const def = pyramidItemDef(id);
    const isHeld = def && def.kind === "held";
    const existing = bag.items.find((it) => it.id === id);
    if (existing) {
      if (isHeld) return false;
      existing.count = (existing.count || 1) + 1;
      return true;
    }
    if (bag.items.length >= bag.cap) return false;
    bag.items.push({ id, count: 1 });
    return true;
  }

  function pyramidEquippedSlot(run, id) {
    if (!run || !run.pikeTeam) return null;
    for (const sl of ["slot1", "slot2", "slot3"]) {
      if (run.pikeTeam[sl] && run.pikeTeam[sl].item === id) return sl;
    }
    return null;
  }

  function pyramidBagCount(run) {
    const bag = pyramidEnsureBag(run);
    return bag.items.length;
  }

  function pyramidBagTotalUnits(run) {
    const bag = pyramidEnsureBag(run);
    return bag.items.reduce((n, it) => n + (it.count || 0), 0);
  }

  const PYRAMID_WILD_STATUS_MOVES = [
    "willOWisp",
    "thunderWave",
    "stunSpore",
    "toxic",
    "poisonPowder",
    "confuseRay",
    "swagger",

  ];

  const PYRAMID_THEME_PREFERRED_STATUS_MOVES = {
    paralysis: ["thunderWave", "stunSpore"],
    poison:    ["toxic", "poisonPowder"],
    burn:      ["willOWisp"] };

  function biasPyramidWildMoveset(speciesId, moveset, themeKey) {
    if (!Array.isArray(moveset) || !speciesId) return;
    if (typeof pkmn === "undefined" || !pkmn[speciesId]) return;
    if (typeof move === "undefined") return;
    const p = pkmn[speciesId];
    const types = (Array.isArray(p.type) ? p.type : [p.type]).filter(Boolean);

    if (themeKey === "weather") {
      const typeSet = new Set(types);
      let weatherMove = "rainDance";
      if (typeSet.has("fire") || typeSet.has("grass"))              weatherMove = "sunnyDay";
      else if (typeSet.has("ice"))                                   weatherMove = "hail";
      else if (typeSet.has("rock") || typeSet.has("ground") || typeSet.has("steel")) weatherMove = "sandstorm";
      else if (typeSet.has("water") || typeSet.has("flying"))        weatherMove = "rainDance";

      if (moveset.includes(weatherMove)) return;

      if (!move[weatherMove]) return;
      moveset[0] = weatherMove;
      return;
    }

    const canLearn = (mvKey) => {
      const def = move[mvKey];
      if (!def || !Array.isArray(def.moveset)) return false;

      if (def.moveset.includes("all")) return true;
      if (def.moveset.includes("normal")) return true;
      return types.some((t) => def.moveset.includes(t));
    };
    const preferred = themeKey && PYRAMID_THEME_PREFERRED_STATUS_MOVES[themeKey];
    let candidates = preferred ? preferred.filter(canLearn) : [];
    if (!candidates.length) candidates = PYRAMID_WILD_STATUS_MOVES.filter(canLearn);
    if (!candidates.length) return;

    for (const mv of moveset) if (candidates.includes(mv)) return;
    const chosen = candidates[Math.floor(Math.random() * candidates.length)];

    moveset[0] = chosen;

    const cleaned = filterBannedEnemyMoves(moveset.slice(), speciesId);
    for (let i = 0; i < moveset.length; i++) moveset[i] = cleaned[i];
  }

  function currentPreviewHasHeldItems() {
    const pt = (saved && saved.previewTeams && saved.previewTeams[saved.currentPreviewTeam]) || {};

    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    const pikeByslot = (run && run.pikeTeam) ? run.pikeTeam : null;
    for (const sl of ["slot1", "slot2", "slot3"]) {
      if (!pt[sl] || !pt[sl].pkmn || !pt[sl].item) continue;
      const pyramidItem = pikeByslot && pikeByslot[sl] ? pikeByslot[sl].item : null;
      if (pyramidItem && pt[sl].item === pyramidItem) continue;
      return true;
    }
    return false;
  }

  function mirrorPyramidItemToPreview(slotKey, itemId) {
    try {
      const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
      if (!run) return;
      const slot = run.tiedPreviewSlot || saved.currentPreviewTeam;
      const pt = saved.previewTeams && saved.previewTeams[slot];
      if (!pt || !pt[slotKey]) return;
      pt[slotKey].item = itemId || undefined;
    } catch (e) {  }
  }

  function cleanupPyramidPreviewItems(run) {
    try {
      if (!run) return;
      const slot = run.tiedPreviewSlot;
      const pt = saved && saved.previewTeams && saved.previewTeams[slot];
      if (!pt || !run.pikeTeam) return;
      for (const sl of ["slot1", "slot2", "slot3"]) {
        const eq = run.pikeTeam[sl] && run.pikeTeam[sl].item;
        if (eq && pt[sl] && pt[sl].item === eq) pt[sl].item = undefined;
      }
    } catch (e) {  }
  }
  function showPyramidItemsError(facility) {
    const lang = "en";
    const t = { title: "Registration refused",
          body: "None of your Pokémon may hold an item when entering the Pyramid. Unequip all items and try again.",
          back: "OK" };
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    if (top) top.style.display = "none";
    if (titleEl) { titleEl.style.display = "block"; titleEl.innerHTML = t.title; }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `<div class="frontier-ext-pyr-items-error">⚠️ ${t.body}</div>`;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="pyr-items-error-close">${t.back}</button>
        </div>`;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => openFacilityPreview(facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function applyPyramidItemEffect(run, id) {
    const def = pyramidItemDef(id);
    if (!def || !run || !run.pikeTeam) return { applied: false };
    const lang = "en";
    const slots = ["slot1", "slot2", "slot3"];
    const alive = slots.filter((sl) => {
      const ps = run.pikeTeam[sl];
      return ps && (ps.hpRatio || 0) > 0;
    });
    const fainted = slots.filter((sl) => {
      const ps = run.pikeTeam[sl];
      return ps && (ps.hpRatio || 0) <= 0;
    });

    if (def.kind === "cure") {

      const target = alive.find((sl) => run.pikeTeam[sl].status === def.cure);
      if (!target) {
        return { applied: false, slot: null,
          message: "No Pokémon has that status — stored." };
      }
      run.pikeTeam[target].status = null;
      return { applied: true, slot: target,
        message: "Status cured." };
    }
    if (def.kind === "heal") {
      const target = alive
        .slice()
        .sort((a, b) => (run.pikeTeam[a].hpRatio || 0) - (run.pikeTeam[b].hpRatio || 0))[0];
      if (!target) return { applied: false, slot: null,
        message: "Nobody to heal — stored." };
      const ps = run.pikeTeam[target];
      if ((ps.hpRatio || 0) >= 1) return { applied: false, slot: null,
        message: "Team at full HP — stored." };
      ps.hpRatio = Math.min(1.0, (ps.hpRatio || 0) + (def.ratio || 0.5));
      return { applied: true, slot: target,
        message: "HP restored." };
    }
    if (def.kind === "heal_full_cure") {

      const target = alive
        .slice()
        .sort((a, b) => (run.pikeTeam[a].hpRatio || 0) - (run.pikeTeam[b].hpRatio || 0))[0];
      if (!target) return { applied: false, slot: null,
        message: "Nobody to heal — stored." };
      run.pikeTeam[target].hpRatio = 1.0;
      run.pikeTeam[target].status = null;
      return { applied: true, slot: target,
        message: "Fully restored." };
    }
    if (def.kind === "revive") {
      const target = fainted[0];
      if (!target) return { applied: false, slot: null,
        message: "Nobody to revive — stored." };
      run.pikeTeam[target].hpRatio = Math.max(0, Math.min(1, def.ratio || 0.5));
      run.pikeTeam[target].status = null;
      return { applied: true, slot: target,
        message: "Pokémon revived." };
    }

    return { applied: true, slot: null,
      message: "Stored in the Combat Bag." };
  }

  function showPyramidItemFoundModal(facility, itemPick) {
    const lang = "en";
    const run = saved.frontierExt.activeRun;
    pyramidEnsureBag(run);
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    const facName = facility.name;
    const label = pyramidItemLabel(itemPick.id, lang);
    const spritePath = pyramidItemSprite(itemPick.id);
    const bagFull = run.combatBag.items.length >= run.combatBag.cap
      && !run.combatBag.items.some((it) => it.id === itemPick.id);

    const t = {
          title: `${facName} — Floor ${run.pyramid.floor}/7`,
          headline: "You found an item!",
          take: "Take",
          leave: "Leave",
          bagFull: "Bag full — can't take this new item.",
          bagCount: (n, cap) => `Bag: ${n}/${cap}` };

    if (top) top.style.display = "none";
    if (titleEl) {
      titleEl.style.display = "block";
      titleEl.innerHTML = t.title;
    }
    if (mid) {
      mid.style.display = "block";
      const spriteHtml = spritePath
        ? `<img src="${spritePath}" alt="${label}" style="width:48px;height:48px;image-rendering:pixelated;">`
        : `<div class="frontier-ext-pyr-item-placeholder">📦</div>`;
      mid.innerHTML = `
        <div class="frontier-ext-pyr-item-found">
          <div class="headline">${t.headline}</div>
          <div class="icon">${spriteHtml}</div>
          <div class="label">${label}</div>
          <div class="bag-count">${t.bagCount(pyramidBagCount(run), run.combatBag.cap)}</div>
          ${bagFull ? `<div class="bag-full">${t.bagFull}</div>` : ""}
        </div>`;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="pyr-take-item" data-item-id="${itemPick.id}">
            ${bagFull ? `✗ ${t.leave}` : `✓ ${t.take}`}
          </button>
        </div>`;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function takePyramidItem(facility, itemId) {
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const def = pyramidItemDef(itemId);
    if (!def) { pyramidAfterEvent(facility); return; }
    const bag = pyramidEnsureBag(run);
    const alreadyIn = !!bag.items.find((it) => it.id === itemId);

    if (alreadyIn && def.kind === "held") {
      pyramidAfterEvent(facility);
      return;
    }
    if (!alreadyIn && bag.items.length >= bag.cap) {
      showPyramidBagFullPicker(facility, itemId);
      return;
    }
    pyramidAddToBag(run, itemId);
    pyramidAfterEvent(facility);
  }

  function showPyramidBagFullPicker(facility, newItemId) {
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const def = pyramidItemDef(newItemId);
    if (!def) { pyramidAfterEvent(facility); return; }
    pyramidEnsureBag(run);
    const lang = "en";
    const newLabel = def.label;
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    const t = { title: "Bag full — what to drop?",
          body: (n) => `You found <strong>${n}</strong>, but your Bag is full. Pick an item to drop and replace, or abandon the find.`,
          drop: "Drop",
          abandon: "Abandon the new item" };

    if (top) top.style.display = "none";
    if (titleEl) { titleEl.style.display = "block"; titleEl.innerHTML = t.title; }
    if (mid) {
      mid.style.display = "block";
      const rows = run.combatBag.items.map((it) => {
        const idef = pyramidItemDef(it.id);
        const label = idef ? (idef.label) : it.id;
        const sprite = pyramidItemSprite(it.id);
        const icon = sprite
          ? `<img src="${sprite}" alt="${label}" style="width:20px;height:20px;image-rendering:pixelated;vertical-align:middle;">`
          : `<span class="frontier-ext-pyr-bag-icon">📦</span>`;
        return `
          <li class="frontier-ext-pyr-bag-row">
            <span class="icon">${icon}</span>
            <span class="label">${label}</span>
            <span class="count">×${it.count}</span>
            <button class="frontier-ext-action-btn small danger" data-pyr-drop="${it.id}">${t.drop}</button>
          </li>`;
      }).join("");
      mid.innerHTML = `
        <div class="frontier-ext-pyr-bag">
          <div class="cap">${t.body(newLabel)}</div>
          <ul class="frontier-ext-pyr-bag-list">${rows}</ul>
        </div>`;
      mid.querySelectorAll("[data-pyr-drop]").forEach((btn) => {
        btn.onclick = () => {
          const dropId = btn.dataset.pyrDrop;

          run.combatBag.items = run.combatBag.items.filter((it) => it.id !== dropId);
          pyramidAddToBag(run, newItemId);
          pyramidAfterEvent(facility);
        };
      });
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn" data-pyr-drop-new="1">${t.abandon}</button>
        </div>`;
      bottom.querySelectorAll("[data-pyr-drop-new]").forEach((btn) => {
        btn.onclick = () => pyramidAfterEvent(facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function pyramidConsumeFromBag(run, id) {
    const bag = pyramidEnsureBag(run);
    const entry = bag.items.find((it) => it.id === id);
    if (!entry) return false;
    entry.count = (entry.count || 1) - 1;
    if (entry.count <= 0) bag.items = bag.items.filter((it) => it !== entry);
    return true;
  }

  function applyPyramidItemEffectTo(run, id, slotKey) {
    const def = pyramidItemDef(id);
    if (!def || !run || !run.pikeTeam) return false;
    const ps = run.pikeTeam[slotKey];
    if (!ps || !ps.pkmnId) return false;

    if (def.kind === "cure") {
      if (ps.status !== def.cure) return false;
      ps.status = null;
      ps.healJustApplied = true;
      return true;
    }
    if (def.kind === "heal") {
      if ((ps.hpRatio || 0) <= 0) return false;
      if ((ps.hpRatio || 0) >= 1) return false;
      ps.hpRatio = Math.min(1.0, (ps.hpRatio || 0) + (def.ratio || 0.5));
      ps.healJustApplied = true;
      return true;
    }
    if (def.kind === "heal_full_cure") {
      if ((ps.hpRatio || 0) <= 0) return false;
      if ((ps.hpRatio || 0) >= 1 && !ps.status) return false;
      ps.hpRatio = 1.0;
      ps.status = null;
      ps.healJustApplied = true;
      return true;
    }
    if (def.kind === "revive") {
      if ((ps.hpRatio || 0) > 0) return false;
      ps.hpRatio = Math.max(0, Math.min(1, def.ratio || 0.5));
      ps.status = null;
      ps.healJustApplied = true;
      return true;
    }

    return false;
  }

  function showPyramidKinesisteDialog(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const lang = "en";
    const next = pyramidNextTheme(run);
    const curr = pyramidCurrentTheme(run);
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    const facName = facility.name;
    const t = {
          title: `${facName} — Psychic`,
          intro: "\"I can sense the waves of your next trial…\"",
          currentLabel: "Current theme:",
          nextLabel: "Next theme:",
          back: "Back" };

    if (top) top.style.display = "none";
    if (titleEl) {
      titleEl.style.display = "block";
      titleEl.innerHTML = t.title;
    }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div class="frontier-ext-pyr-kinesiste">
          <div class="intro">${t.intro}</div>
          <div class="theme-line">
            <span class="lbl">${t.currentLabel}</span>
            <span class="val">${curr.label}</span>
          </div>
          <div class="theme-line next">
            <span class="lbl">${t.nextLabel}</span>
            <span class="val">${next.label}</span>
          </div>
        </div>`;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn" data-action="pyr-kinesiste-close">${t.back}</button>
        </div>`;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => openPyramidFloorMap(facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function showPyramidBagDialog(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    pyramidEnsureBag(run);
    const lang = "en";
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    const facName = facility.name;
    const t = { title: `${facName} — Combat Bag`,
          empty: "Your bag is empty.",
          cap: (n, c) => `Contents: ${n}/${c}`,
          back: "Back",
          use: "Use",
          held: "Equip" };

    if (top) top.style.display = "none";
    if (titleEl) {
      titleEl.style.display = "block";
      titleEl.innerHTML = t.title;
    }
    if (mid) {
      mid.style.display = "block";
      const items = run.combatBag.items;
      const rows = items.length
        ? items.map((it) => {
            const def = pyramidItemDef(it.id);
            const label = def ? (def.label) : it.id;
            const sprite = pyramidItemSprite(it.id);
            const icon = sprite
              ? `<img src="${sprite}" alt="${label}" style="width:24px;height:24px;image-rendering:pixelated;vertical-align:middle;">`
              : `<span class="frontier-ext-pyr-bag-icon">📦</span>`;
            const equippedOn = (def && def.kind === "held") ? pyramidEquippedSlot(run, it.id) : null;
            const actionBtn = (def && def.kind === "held")
              ? `<button class="frontier-ext-action-btn small" data-pyr-equip="${it.id}">${t.held}</button>`
              : `<button class="frontier-ext-action-btn small" data-pyr-use="${it.id}">${t.use}</button>`;
            const equippedBadge = equippedOn
              ? `<span class="held-equipped-badge">★</span>`
              : "";
            return `<li class="frontier-ext-pyr-bag-row"><span class="icon">${icon}${equippedBadge}</span><span class="label">${label}</span><span class="count">×${it.count}</span>${actionBtn}</li>`;
          }).join("")
        : `<li class="frontier-ext-pyr-bag-row empty">${t.empty}</li>`;
      mid.innerHTML = `
        <div class="frontier-ext-pyr-bag">
          <div class="cap">${t.cap(pyramidBagCount(run), run.combatBag.cap)}</div>
          <ul class="frontier-ext-pyr-bag-list">${rows}</ul>
        </div>`;
      mid.querySelectorAll("[data-pyr-use]").forEach((btn) => {
        btn.onclick = () => showPyramidUseTargetPicker(facility, btn.dataset.pyrUse);
      });
      mid.querySelectorAll("[data-pyr-equip]").forEach((btn) => {
        btn.onclick = () => showPyramidEquipPicker(facility, btn.dataset.pyrEquip);
      });
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn" data-action="pyr-bag-close">${t.back}</button>
        </div>`;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => openPyramidFloorMap(facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function showPyramidUseTargetPicker(facility, itemId) {
    const run = saved.frontierExt.activeRun;
    if (!run || !run.pikeTeam) return;
    const def = pyramidItemDef(itemId);
    if (!def) { showPyramidBagDialog(facility); return; }
    const lang = "en";
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    const itemLabel = def.label;
    const t = { title: `Use ${itemLabel} on…`,
          back: "Cancel",
          invalid: "not applicable",
          noTarget: "No valid target for this item." };

    const isValidFor = (sl) => {
      const ps = run.pikeTeam[sl];
      if (!ps || !ps.pkmnId) return false;
      if (def.kind === "cure")         return ps.status === def.cure;
      if (def.kind === "heal")         return (ps.hpRatio || 0) > 0 && (ps.hpRatio || 0) < 1;
      if (def.kind === "heal_full_cure") return (ps.hpRatio || 0) > 0 && ((ps.hpRatio || 0) < 1 || !!ps.status);
      if (def.kind === "revive")       return (ps.hpRatio || 0) <= 0;
      return false;
    };

    if (title) { title.style.display = "block"; title.innerHTML = t.title; }
    if (mid) {
      mid.style.display = "block";
      const statusLabel = {
        poisoned: "Poisoned",
        burn:     "Burned",
        paralysis:"Paralyzed",
        sleep:    "Asleep",
        freeze:   "Frozen",
        confused: "Confused" };
      const anyValid = ["slot1", "slot2", "slot3"].some(isValidFor);
      const cards = ["slot1", "slot2", "slot3"].map((sl) => {
        const ps = run.pikeTeam[sl];
        if (!ps || !ps.pkmnId) return "";
        const monName = typeof format === "function" ? format(ps.pkmnId) : ps.pkmnId;

        const rawRatio = ps.hpRatio || 0;
        const pct = rawRatio > 0 ? Math.max(1, Math.round(rawRatio * 100)) : 0;
        const statusPill = ps.status ? `<span class="status">${statusLabel[ps.status] || ps.status}</span>` : "";
        const valid = isValidFor(sl);
        return `
          <button class="frontier-ext-pyr-target-card ${valid ? "" : "invalid"}"
                  data-pyr-use-target="${sl}" ${valid ? "" : "disabled"}>
            <div class="name">${monName}</div>
            <div class="hp">${rawRatio <= 0 ? "K.O." : `${pct}%`}</div>
            ${statusPill}
            ${valid ? "" : `<div class="invalid-label">(${t.invalid})</div>`}
          </button>`;
      }).join("");
      mid.innerHTML = `
        <div class="frontier-ext-pyr-use-picker">
          ${cards}
          ${!anyValid ? `<div class="no-target">${t.noTarget}</div>` : ""}
        </div>`;
      mid.querySelectorAll("[data-pyr-use-target]").forEach((card) => {
        card.onclick = () => {
          const slot = card.dataset.pyrUseTarget;
          const ok = applyPyramidItemEffectTo(run, itemId, slot);
          if (ok) pyramidConsumeFromBag(run, itemId);
          showPyramidBagDialog(facility);
        };
      });
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn" data-pyr-use-cancel="1">${t.back}</button>
        </div>`;
      bottom.querySelectorAll("[data-pyr-use-cancel]").forEach((btn) => {
        btn.onclick = () => showPyramidBagDialog(facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function showPyramidEquipPicker(facility, itemId) {
    const run = saved.frontierExt.activeRun;
    if (!run || !run.pikeTeam) return;
    const def = pyramidItemDef(itemId);
    if (!def || def.kind !== "held") { showPyramidBagDialog(facility); return; }
    const lang = "en";
    const itemLabel = def.label;
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");
    const t = { title: `Equip ${itemLabel} on…`,
          back: "Cancel",
          free: "Empty",
          here: "equipped here",
          unequipBtn: "Unequip" };

    const currentlyOn = pyramidEquippedSlot(run, itemId);

    if (titleEl) { titleEl.style.display = "block"; titleEl.innerHTML = t.title; }
    if (mid) {
      mid.style.display = "block";
      const cards = ["slot1", "slot2", "slot3"].map((sl) => {
        const ps = run.pikeTeam[sl];
        if (!ps || !ps.pkmnId) return "";
        const monName = typeof format === "function" ? format(ps.pkmnId) : ps.pkmnId;
        const curItemId = ps.item || null;
        const curDef = curItemId ? pyramidItemDef(curItemId) : null;
        const curLabel = curDef ? (curDef.label) : (curItemId || t.free);
        const isHere = currentlyOn === sl;
        return `
          <button class="frontier-ext-pyr-target-card ${isHere ? "equipped-here" : ""}" data-pyr-equip-target="${sl}">
            <div class="name">${monName}</div>
            <div class="equipped">${curItemId ? curLabel : `<em>${t.free}</em>`}</div>
            ${isHere ? `<div class="here-pill">✓ ${t.here}</div>` : ""}
          </button>`;
      }).join("");

      const unequipBtnHtml = currentlyOn
        ? `<button class="frontier-ext-action-btn small danger" data-pyr-equip-unequip="1">${t.unequipBtn}</button>`
        : "";
      mid.innerHTML = `
        <div class="frontier-ext-pyr-use-picker">${cards}</div>
        ${unequipBtnHtml ? `<div class="frontier-ext-pyr-side-actions">${unequipBtnHtml}</div>` : ""}`;
      mid.querySelectorAll("[data-pyr-equip-target]").forEach((card) => {
        card.onclick = () => {
          const slot = card.dataset.pyrEquipTarget;
          pyramidEquipToSlot(run, slot, itemId);
          showPyramidBagDialog(facility);
        };
      });
      mid.querySelectorAll("[data-pyr-equip-unequip]").forEach((btn) => {
        btn.onclick = () => {
          if (currentlyOn) {
            run.pikeTeam[currentlyOn].item = null;
            mirrorPyramidItemToPreview(currentlyOn, null);
          }
          showPyramidBagDialog(facility);
        };
      });
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn" data-pyr-equip-cancel="1">${t.back}</button>
        </div>`;
      bottom.querySelectorAll("[data-pyr-equip-cancel]").forEach((btn) => {
        btn.onclick = () => showPyramidBagDialog(facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function pyramidEquipToSlot(run, slotKey, itemId) {
    if (!run || !run.pikeTeam || !run.pikeTeam[slotKey]) return false;
    const previouslyOn = pyramidEquippedSlot(run, itemId);
    if (previouslyOn && previouslyOn !== slotKey) {
      run.pikeTeam[previouslyOn].item = null;
      mirrorPyramidItemToPreview(previouslyOn, null);
    }
    run.pikeTeam[slotKey].item = itemId;
    mirrorPyramidItemToPreview(slotKey, itemId);
    return true;
  }

  function flashPyramidBagToast(message) {
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    if (!mid) return;
    const toast = document.createElement("div");
    toast.className = "frontier-ext-pyr-toast";
    toast.textContent = message;
    mid.appendChild(toast);
    setTimeout(() => { try { toast.remove(); } catch (e) {} }, 2000);
  }

  function installPyramidEquipSync() {
    if (typeof window.injectPreviewTeam !== "function") {
      setTimeout(installPyramidEquipSync, 200);
      return;
    }
    if (window.__frontierExtPyramidEquipHooked) return;
    window.__frontierExtPyramidEquipHooked = true;
    const orig = window.injectPreviewTeam;
    window.injectPreviewTeam = function () {
      const res = orig.apply(this, arguments);
      try {
        const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
        if (!run) return res;
        const fac = FACILITIES.find((f) => f.id === run.facilityId);
        if (!isPyramidFacility(fac)) return res;
        if (!run.pikeTeam || typeof team === "undefined") return res;
        if (saved.currentArea !== RUN_AREA_ID) return res;
        for (const sl of ["slot1", "slot2", "slot3"]) {
          const ps = run.pikeTeam[sl];
          if (!ps || !ps.item) continue;
          if (!team[sl]) continue;
          team[sl].item = ps.item;
        }
      } catch (e) { console.error("[frontier-ext] pyramid equip sync failed:", e); }
      return res;
    };
  }

  function installPyramidItemMaxLevel() {
    if (typeof window.returnItemLevel !== "function") {
      setTimeout(installPyramidItemMaxLevel, 200);
      return;
    }
    if (window.__frontierExtItemLevelHooked) return;
    window.__frontierExtItemLevelHooked = true;
    const orig = window.returnItemLevel;
    const isPyramidEquipped = (id) => {
      try {
        const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
        if (!run || !run.pikeTeam) return false;
        const fac = FACILITIES.find((f) => f.id === run.facilityId);
        if (!fac || !isPyramidFacility(fac)) return false;
        for (const sl of ["slot1", "slot2", "slot3"]) {
          if (run.pikeTeam[sl] && run.pikeTeam[sl].item === id) return true;
        }
      } catch (e) {  }
      return false;
    };
    window.returnItemLevel = function (id, mod) {
      if (isPyramidEquipped(id)) {
        if (mod === "stars") return `<span style="color:#4fffa7ff">✦✦✦✦✦</span>`;
        if (mod === "left")  return "(max level reached)";
        return 5;
      }

      if (typeof item === "undefined" || !item[id]) {
        if (mod === "stars") return `<span style="color:#4fffa7ff">✦</span>✦✦✦✦`;
        if (mod === "left")  return "(level 1)";
        return 1;
      }
      return orig.apply(this, arguments);
    };
  }

  const PIKE_L10N = {
    pickDoor: "Pick a door",
    subDesc: "Curtains hide battles, heals, wild Pokémon and status rooms. Your choice is final.",
    room: "Room",
    round: "Round",
    team: "Team",
    brainRoom: "Final room — the Zone Leader awaits!",
    toughRoom: "Final room — an elite trainer guards the exit.",
    bossBanner: "⚡ Zone Leader incoming!",
    healFullTitle: "Nurse encounter!",
    healFullBody: "Your whole team heals to 100% HP and any status is cured.",
    healPartialTitle: "Passing healer",
    healPartialBody: (n) => `${n === 1 ? "One Pokémon" : "Two Pokémon"} of your team heals fully and is cured of status.`,
    toughHealTitle: "Rewarding victory",
    toughHealBody: "Your team is fully healed after this tough fight.",
    statusTitle: "Hostile Pokémon!",
    statusBody: (species, status, n) => `A wild ${species} attacked! ${n === 1 ? "One of your Pokémon is" : `${n} of your Pokémon are`} afflicted: ${status}.`,
    wildTitle: "Wild Pokémon!",
    wildBody: "A wild Pokémon attacks.",
    emptyTitle: "Peaceful room",
    emptyBody: "Lucky — nobody here attacks.",
    next: "Next room",
    cancel: "Back",
    back: "Back",
    abandon: "Abandon",
    fightBrain: "Face the Zone Leader",
    fightTough: "Start the fight",
    fightWild: "Fight the wild",
    statusPoisoned: "Poisoned",
    statusBurn: "Burned",
    statusParalysis: "Paralyzed",
    statusSleep: "Asleep",
    statusFreeze: "Frozen",
    hintButton: "Ask for a hint",
    hintIntroDoor: (n) => `Behind door ${n}…`,
    hintPresence:    "A trainer? I sense a presence…",
    hintConversation: "I think I heard something…",
    hintSmell:        "The distinctive smell of Pokémon…",
    hintNostalgia:    "There's a wave of nostalgia coming from it…",
    hintDread:        "Something horrible is about to befall you.",
    hintImmune:       "Immune",
  };

  function pikeL10n() { return PIKE_L10N; }

  function initPikePyramidTeamFromPreview() {
    ensureSaveSlot();
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return;
    const pt = (saved.previewTeams && saved.previewTeams[saved.currentPreviewTeam]) || {};
    run.pikeTeam = {};
    run.pikeTeamSource = saved.currentPreviewTeam;
    for (const sl of ["slot1", "slot2", "slot3"]) {
      if (pt[sl] && pt[sl].pkmn) {
        run.pikeTeam[sl] = {
          pkmnId: pt[sl].pkmn,
          item: pt[sl].item || null,
          hpRatio: 1.0,
          status: null };
      }
    }
  }

  function migratePikePyramidTeam() {
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return;
    if (run.pikeTeam) return;
    const fac = FACILITIES.find((f) => f.id === run.facilityId);

    if (!hasRunTeamState(fac)) return;
    const pt = (saved.previewTeams && saved.previewTeams[saved.currentPreviewTeam]) || {};
    run.pikeTeam = {};
    run.pikeTeamSource = saved.currentPreviewTeam;
    for (const sl of ["slot1", "slot2", "slot3"]) {
      if (!pt[sl] || !pt[sl].pkmn) continue;
      const hp = (run.pikeHpState && run.pikeHpState[sl]);
      const st = (run.pikeStatus && run.pikeStatus[sl]);
      run.pikeTeam[sl] = {
        pkmnId: pt[sl].pkmn,
        item: pt[sl].item || null,
        hpRatio: (typeof hp === "number") ? hp : 1.0,
        status: st ? normalizePikePyramidStatus(st) : null };
    }
  }

  function rollSinglePikeDoor(room, facility) {
    const run = saved.frontierExt.activeRun;
    const nextRound = run.round + 1;
    const early = room <= 4;
    const late = room >= 11;

    let weights;
    if (early)      weights = [30, 10, 10, 15, 10, 15, 10];
    else if (late)  weights = [40, 20,  3,  7, 15, 12,  3];
    else            weights = [35, 12,  7, 13, 13, 12,  8];

    const total = weights.reduce((a, b) => a + b, 0);
    const roll = Math.random() * total;
    let cum = 0;

    cum += weights[0];
    if (roll < cum) {
      return { type: "combat_solo", data: { trainer: generateTrainer(nextRound, facility) } };
    }
    cum += weights[1];
    if (roll < cum) {
      const t = generateTrainer(nextRound, facility);
      t.tier = Math.min(5, (t.tier || 1) + 1);
      return { type: "combat_tough", data: { trainer: t, healOnWin: true } };
    }
    cum += weights[2];
    if (roll < cum) return { type: "heal_full", data: {} };
    cum += weights[3];
    if (roll < cum) {
      const count = Math.random() < 0.5 ? 1 : 2;
      return { type: "heal_partial", data: { count } };
    }
    cum += weights[4];
    if (roll < cum) {
      const speciesKeys = Object.keys(PIKE_STATUS_SPECIES);
      const species = speciesKeys[Math.floor(Math.random() * speciesKeys.length)];
      const statuses = PIKE_STATUS_SPECIES[species];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      return {
        type: "status_species",
        data: { species, status, count: pikeStatusCountByRoom(room) } };
    }
    cum += weights[5];
    if (roll < cum) {

      const diff = computeRunDifficulty(nextRound, facility);
      const pool = getPoolForFacility(facility, diff.tier, nextRound);
      const id = pool[Math.floor(Math.random() * pool.length)];
      const wildTrainer = {
        name: ("Wild Pokémon"),
        sprite: "wild_silhouette",
        team: [{ id, moves: pickMovesetFor(id, diff), nature: "" }],
        isWild: true,
        facilityId: facility.id,
        round: nextRound,
        tier: diff.tier,
        multiplier: diff.mult };
      return { type: "wild", data: { trainer: wildTrainer } };
    }
    return { type: "empty", data: {} };
  }

  function rollPikeDoors(room, facility) {
    const run = saved.frontierExt.activeRun;
    const nextRound = run.round + 1;
    const bossInfo = getBossRoundInfo(nextRound, facility);

    if (room === PIKE_ROOM_COUNT) {
      if (bossInfo) {

        return [
          { type: "brain", data: { kind: bossInfo.kind } },
          { type: "brain", data: { kind: bossInfo.kind } },
          { type: "brain", data: { kind: bossInfo.kind } },
        ];
      }

      const tough = () => {
        const t = generateTrainer(nextRound, facility);

        t.tier = Math.min(5, (t.tier || 1) + 1);
        return { type: "tough", data: { trainer: t } };
      };
      return [tough(), tough(), tough()];
    }

    const doors = [];
    for (let i = 0; i < PIKE_DOOR_COUNT; i++) {
      doors.push(rollSinglePikeDoor(room, facility));
    }

    const isCombatish = (d) => d && (
      d.type === "combat_solo" || d.type === "combat_tough" ||
      d.type === "wild" || d.type === "brain" ||

      d.type === "combat" || d.type === "tough"
    );
    if (!doors.some(isCombatish)) {
      doors[Math.floor(Math.random() * doors.length)] = {
        type: "combat_solo",
        data: { trainer: generateTrainer(run.round + 1, facility) } };
    }
    return doors;
  }

  function renderPikeHpSummary() {
    const run = saved.frontierExt.activeRun;
    if (!run) return "";
    migratePikePyramidTeam();
    const l = pikeL10n();
    const statusLabel = {
      poisoned: l.statusPoisoned, burn: l.statusBurn, paralysis: l.statusParalysis,
      sleep: l.statusSleep, freeze: l.statusFreeze };
    const cells = [];
    const source = run.pikeTeam || {};
    for (const sl of ["slot1", "slot2", "slot3"]) {
      const ps = source[sl];
      if (!ps || !ps.pkmnId) continue;
      const ratio = (typeof ps.hpRatio === "number") ? ps.hpRatio : 1.0;
      const status = ps.status ? normalizePikePyramidStatus(ps.status) : null;

      const pct = ratio > 0 ? Math.max(1, Math.round(ratio * 100)) : 0;
      const barWidth = Math.max(0, Math.min(100, pct));
      const cls = ratio <= 0.25 ? "low" : (ratio <= 0.5 ? "mid" : "");
      const monName = typeof format === "function" ? format(ps.pkmnId) : ps.pkmnId;
      const statusPill = status
        ? `<span class="st ${status}">${statusLabel[status] || status}</span>`
        : "";

      const healFlash = ps.healJustApplied ? " heal-full-flash" : "";
      if (ps.healJustApplied) ps.healJustApplied = false;
      cells.push(`
        <span class="frontier-ext-pike-hp-pill ${cls}${healFlash}">
          ${monName}: ${ratio <= 0 ? "KO" : `${pct}%`}
          <span class="bar"><span style="width:${barWidth}%"></span></span>
          ${statusPill}
        </span>
      `);
    }
    if (!cells.length) return "";
    return `<div class="frontier-ext-pike-hp-summary">${cells.join("")}</div>`;
  }

  function openPikeRoomPreview(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const lang = "en";
    const l = pikeL10n();

    if (!run.pikeRoom || run.pikeRoom < 1) run.pikeRoom = 1;
    if (run.pikeRoom > PIKE_ROOM_COUNT) run.pikeRoom = PIKE_ROOM_COUNT;
    if (!Array.isArray(run.pikeDoors) || run.pikeDoors.length !== PIKE_DOOR_COUNT) {
      run.pikeDoors = rollPikeDoors(run.pikeRoom, facility);
    }

    const pickedIdx = run.pikeDoorPicked;
    if (pickedIdx !== null && pickedIdx !== undefined
        && Array.isArray(run.pikeDoors) && run.pikeDoors[pickedIdx]) {
      const d = run.pikeDoors[pickedIdx];
      const isCombatishPicked = d.type === "combat_solo" || d.type === "combat_tough"
        || d.type === "wild" || d.type === "brain"
        || d.type === "combat" || d.type === "tough";
      if (isCombatishPicked) {

        applyPikeDoor(pickedIdx, facility);
        return;
      }
      if (d.applied) {

        const l = pikeL10n();
        const statusName = (s) => ({
          poisoned: l.statusPoisoned, burn: l.statusBurn, paralysis: l.statusParalysis,
          sleep: l.statusSleep, freeze: l.statusFreeze })[s] || s;
        const speciesName = (id) => (typeof format === "function" ? format(id) : id);
        let m = null;
        let mOpts = undefined;
        if (d.type === "heal_full")    m = ["heal", l.healFullTitle, l.healFullBody, "full"];
        else if (d.type === "heal_partial") m = ["heal", l.healPartialTitle, l.healPartialBody(d.data.count || 1), "partial"];
        else if (d.type === "status_species") {
          m = ["trap", l.statusTitle, l.statusBody(speciesName(d.data.species), statusName(d.data.status), d.data.count || 1), d.data.status];
          mOpts = { spriteId: d.data.species };
        }
        else if (d.type === "empty")   m = ["heal", l.emptyTitle, l.emptyBody, "empty"];

        else if (d.type === "heal_half") m = ["heal", l.healPartialTitle, l.healPartialBody(2), "partial"];
        else if (d.type === "trap")      m = ["trap", l.statusTitle, `${l.statusTitle} (${statusName(d.data.status)})`, d.data.status];
        if (m) {
          showPikeEventModal(facility, m[0], m[1], m[2], m[3], mOpts);
          return;
        }
      }
    }

    const nextRound = run.round + 1;
    const isFinalRoom = run.pikeRoom === PIKE_ROOM_COUNT;
    const bossInfo = getBossRoundInfo(nextRound, facility);
    const isBossFinale = isFinalRoom && !!bossInfo;

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      if (isBossFinale) {
        top.style.display = "block";
        top.innerHTML = `<img src="img/trainers/${facility.brain.sprite}.png"
          style="max-height: 140px; image-rendering: pixelated;"
          alt="${facility.brain.name}">`;
      } else {

        top.style.display = "none";
        top.innerHTML = "";
      }
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${facility.name} — ${l.room} ${run.pikeRoom}/${PIKE_ROOM_COUNT}`;
    }
    if (mid) {
      mid.style.display = "block";
      let banner = `
        <div class="frontier-ext-pike-banner">
          <span>${l.round} <strong>${nextRound}</strong></span>
          <span>${l.room} <strong>${run.pikeRoom}</strong>/${PIKE_ROOM_COUNT}</span>`;
      if (isBossFinale) {
        banner += `<span class="boss-flag">${l.bossBanner}</span>`;
      }
      banner += `</div>`;
      const hpSummary = renderPikeHpSummary();
      const prompt = isFinalRoom
        ? (isBossFinale ? l.brainRoom : l.toughRoom)
        : `<div style="text-align:center;padding:0.3rem 0.8rem;font-style:italic;opacity:0.9;">${l.pickDoor}</div>
           <div style="text-align:center;padding:0 0.8rem 0.3rem;font-size:0.82rem;opacity:0.75;">${l.subDesc}</div>`;
      mid.innerHTML = banner + hpSummary +
        (isFinalRoom
          ? `<div style="text-align:center;padding:0.4rem 0.8rem;color:#ffd700;font-weight:bold;">${prompt}</div>`
          : prompt);
    }
    if (bottom) {
      bottom.style.display = "block";
      const doors = run.pikeDoors.map((_, idx) => `
        <div class="frontier-ext-pike-door" data-door="${idx}">
          <span class="door-number">${idx + 1}</span>
          ${CURTAIN_SVG}
        </div>
      `).join("");

      let hintHtml = "";
      if (!isFinalRoom) {

        if (run.pikeHint && run.pikeHint.room !== undefined
            && run.pikeHint.room !== run.pikeRoom) {
          run.pikeHint = null;
        }
        if (run.pikeHint && typeof run.pikeHint.doorIdx === "number") {
          const cat = run.pikeHint.category;
          const hintText = {
            presence: l.hintPresence,
            conversation: l.hintConversation,
            smell: l.hintSmell,
            nostalgia: l.hintNostalgia,
            dread: l.hintDread }[cat] || "";
          hintHtml = `
            <div class="frontier-ext-pike-hint revealed">
              <span class="intro">${l.hintIntroDoor(run.pikeHint.doorIdx + 1)}</span>
              <span class="text">${hintText}</span>
            </div>`;
        } else {
          hintHtml = `
            <div class="frontier-ext-pike-hint">
              <button class="frontier-ext-pike-hint-btn" data-pike-hint="1">🔍 ${l.hintButton}</button>
            </div>`;
        }
      }
      bottom.innerHTML = `
        <div class="frontier-ext-pike-doors">${doors}</div>
        ${hintHtml}
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn danger" data-action="abandon">${l.abandon}</button>
        </div>
      `;
      bottom.querySelectorAll(".frontier-ext-pike-door").forEach((el) => {
        el.addEventListener("click", () => {
          const idx = parseInt(el.dataset.door, 10);

          el.classList.add("revealed");

          bottom.querySelectorAll(".frontier-ext-pike-door").forEach((sib) => {
            if (sib !== el) sib.classList.add("locked");
          });
          setTimeout(() => applyPikeDoor(idx, facility), 280);
        });
      });
      const hintBtn = bottom.querySelector("[data-pike-hint]");
      if (hintBtn) {
        hintBtn.addEventListener("click", () => {
          requestPikeHint(facility);
        });
      }
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function requestPikeHint(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !Array.isArray(run.pikeDoors)) return;

    if (run.pikeHint
        && typeof run.pikeHint.doorIdx === "number"
        && run.pikeHint.room === run.pikeRoom) {
      openPikeRoomPreview(facility);
      return;
    }
    const doorIdx = Math.floor(Math.random() * run.pikeDoors.length);
    const door = run.pikeDoors[doorIdx];
    const category = PIKE_HINT_CATEGORY[door.type] || "presence";

    run.pikeHint = { doorIdx, category, room: run.pikeRoom };
    openPikeRoomPreview(facility);
  }

  function applyPikeDoor(idx, facility) {
    const run = saved.frontierExt.activeRun;
    if (!run || !Array.isArray(run.pikeDoors)) return;
    const door = run.pikeDoors[idx];
    if (!door) return;
    run.pikeDoorPicked = idx;
    const l = pikeL10n();
    const statusName = (s) => ({
      poisoned: l.statusPoisoned, burn: l.statusBurn, paralysis: l.statusParalysis,
      sleep: l.statusSleep, freeze: l.statusFreeze })[s] || s;
    const speciesName = (id) => (typeof format === "function" ? format(id) : id);

    switch (door.type) {
      case "combat_solo":
      case "combat_tough":
      case "wild": {
        run.upcomingTrainer = door.data.trainer;

        run.pikePostBattleHeal = !!door.data.healOnWin;
        launchCombat(facility);
        return;
      }
      case "brain": {

        run.upcomingTrainer = null;
        run.pikePostBattleHeal = false;
        launchCombat(facility);
        return;
      }
      case "heal_full": {
        if (!door.applied) applyPikeHealRatio(1.0);
        door.applied = true;
        showPikeEventModal(facility, "heal", l.healFullTitle, l.healFullBody, "full");
        return;
      }
      case "heal_partial": {
        const count = door.data.count || 1;
        if (!door.applied) applyPikeHealPartial(count);
        door.applied = true;
        showPikeEventModal(facility, "heal", l.healPartialTitle, l.healPartialBody(count), "partial");
        return;
      }
      case "status_species": {
        door.data.status = normalizePikePyramidStatus(door.data.status);
        if (!door.applied) applyPikeStatusSpecies(door.data.status, door.data.count || 1);
        door.applied = true;
        showPikeEventModal(
          facility, "trap", l.statusTitle,
          l.statusBody(speciesName(door.data.species), statusName(door.data.status), door.data.count || 1),
          door.data.status,
          { spriteId: door.data.species },
        );
        return;
      }
      case "empty": {
        door.applied = true;
        showPikeEventModal(facility, "heal", l.emptyTitle, l.emptyBody, "empty");
        return;
      }

      case "combat":
      case "tough": {
        run.upcomingTrainer = door.data.trainer;
        run.pikePostBattleHeal = door.type === "tough";
        launchCombat(facility);
        return;
      }
      case "heal_half": {
        if (!door.applied) applyPikeHealPartial(2);
        door.applied = true;
        showPikeEventModal(facility, "heal", l.healPartialTitle, l.healPartialBody(2), "partial");
        return;
      }
      case "trap": {
        door.data.status = normalizePikePyramidStatus(door.data.status);
        if (!door.applied) applyPikeTrap(door.data.status);
        door.applied = true;
        showPikeEventModal(facility, "trap", l.statusTitle, `${l.statusTitle} (${statusName(door.data.status)})`, door.data.status);
        return;
      }
    }
  }

  function applyPikeHealPartial(n) {
    const run = saved.frontierExt.activeRun;
    migratePikePyramidTeam();
    if (!run.pikeTeam) return;
    const alive = ["slot1", "slot2", "slot3"].filter((sl) => {
      const ps = run.pikeTeam[sl];
      return ps && (ps.hpRatio || 0) > 0;
    });

    for (let i = alive.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [alive[i], alive[j]] = [alive[j], alive[i]];
    }
    const targets = alive.slice(0, n);
    for (const sl of targets) {
      const ps = run.pikeTeam[sl];
      ps.hpRatio = 1.0;
      ps.status = null;
      ps.healJustApplied = true;
    }
  }

  function applyPikeStatusSpecies(status, count) {
    const run = saved.frontierExt.activeRun;
    migratePikePyramidTeam();
    if (!run.pikeTeam) return;
    const eligible = ["slot1", "slot2", "slot3"].filter((sl) => {
      const ps = run.pikeTeam[sl];
      if (!ps || !ps.pkmnId) return false;
      if ((ps.hpRatio || 0) <= 0) return false;
      if (ps.status) return false;
      if (pikePkmnImmuneToStatus(ps.pkmnId, status)) return false;
      return true;
    });

    for (let i = eligible.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [eligible[i], eligible[j]] = [eligible[j], eligible[i]];
    }
    const targets = eligible.slice(0, count);
    for (const sl of targets) {
      run.pikeTeam[sl].status = normalizePikePyramidStatus(status);
    }
  }

  function applyPikeHealRatio(ratio) {
    const run = saved.frontierExt.activeRun;
    migratePikePyramidTeam();
    if (!run.pikeTeam) return;
    for (const sl of ["slot1", "slot2", "slot3"]) {
      const ps = run.pikeTeam[sl];
      if (!ps) continue;
      const cur = (typeof ps.hpRatio === "number") ? ps.hpRatio : 1.0;
      ps.hpRatio = Math.min(1.0, cur + ratio);
      if (ratio >= 1.0) ps.status = null;

      ps.healJustApplied = true;
    }
  }

  function applyPikeTrap(status) {
    const run = saved.frontierExt.activeRun;
    migratePikePyramidTeam();
    if (!run.pikeTeam) return;
    const candidates = ["slot1", "slot2", "slot3"].filter((sl) => run.pikeTeam[sl]);
    if (!candidates.length) return;
    const target = candidates[Math.floor(Math.random() * candidates.length)];
    run.pikeTeam[target].status = normalizePikePyramidStatus(status);
  }

  function showPikeEventModal(facility, kind, title, body, variant, opts) {
    const lang = "en";
    const l = pikeL10n();
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    const spriteId = opts && opts.spriteId;
    let iconHtml;
    if (spriteId) {
      iconHtml = `<img class="frontier-ext-pike-hostile-sprite" src="img/pkmn/sprite/${spriteId}.png" alt="${spriteId}" onerror="this.style.display='none'">`;
    } else {
      const emoji = kind === "heal"
        ? (variant === "full" ? "💚" : variant === "empty" ? "🍃" : "🌿")
        : "☠️";
      iconHtml = emoji;
    }
    const facName = facility.name;

    const run = saved.frontierExt.activeRun;
    const unitLabel = l.room;
    const unitValue = `${run.pikeRoom}/${PIKE_ROOM_COUNT}`;
    const nextLabel = l.next;

    if (top) top.style.display = "none";
    if (titleEl) {
      titleEl.style.display = "block";
      titleEl.innerHTML = `${facName} — ${unitLabel} ${unitValue}`;
    }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div class="frontier-ext-pike-event ${kind}">
          <div class="icon">${iconHtml}</div>
          <div class="headline">${title}</div>
          <div class="body">${body}</div>
        </div>
        ${renderFrontierTeamHpSummary()}
      `;
    }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="pike-next">${nextLabel}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${l.abandon}</button>
        </div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function showRoundClearedModal(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const lang = "en";
    const name = facility.name;
    const brainName = facility.brain.name;
    const nextRound = run.round + 1;
    const bossInfo = getBossRoundInfo(nextRound, facility);

    const t = {
          headline: "Round cleared!",
          justCleared: "Round",
          cleared: "cleared",
          streak: "Current streak",
          best: "Best",
          next: "Next round",
          normal: "Standard trainer",
          silver: `⚡ The ${"Zone Leader"} (Silver) is next!`,
          gold:   `💎 The ${"Zone Leader"} (Gold) is next!`,
          rematch:`🔥 ${"Zone Leader"} rematch ×` + (bossInfo && bossInfo.multiplier),
          continue: "Continue — Round " + nextRound,
          rest: "Rest",
          abandon: "Abandon",
          hint: "Auto-saved. Continue moves on to the next round. Rest closes this menu without breaking the streak — team unlocked, come back via the tile anytime. Abandon ends the streak.",
          silverAwarded: "🏆 Silver Symbol unlocked!",
          goldAwarded: "🏆 Gold Symbol unlocked!" };

    const streak = saved.frontierExt.streaks[facility.id] || 0;
    const best = saved.frontierExt.maxStreaks[facility.id] || 0;
    const symbols = saved.frontierExt.symbols[facility.id] || { silver: false, gold: false };

    const silverJustEarned = run.round === silverRoundFor(facility) && symbols.silver;
    const goldJustEarned = run.round === goldRoundFor(facility) && symbols.gold;

    let nextBanner = "";
    if (bossInfo) {
      if (bossInfo.kind === "silver") nextBanner = `<div class="frontier-ext-round-next boss">${t.silver}</div>`;
      else if (bossInfo.kind === "gold") nextBanner = `<div class="frontier-ext-round-next boss">${t.gold}</div>`;
      else nextBanner = `<div class="frontier-ext-round-next boss">${t.rematch}</div>`;
    }

    let awards = "";
    if (silverJustEarned) awards += `<div class="frontier-ext-round-award silver">${t.silverAwarded}</div>`;
    if (goldJustEarned) awards += `<div class="frontier-ext-round-award gold">${t.goldAwarded}</div>`;

    const top = document.getElementById("tooltipTop");
    const title = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) {
      top.style.display = "block";

      const compactIcon = facility.iconSvg.replace(/\bclass="frontier-flair"\s*/, "");
      top.innerHTML = `
        <div class="frontier-ext-round-header">
          <div class="trophy">🏆</div>
          <div class="facility-icon">${compactIcon}</div>
        </div>
      `;
    }
    if (title) {
      title.style.display = "block";
      title.innerHTML = `${name} — ${t.headline}`;
    }
    if (mid) {
      mid.style.display = "block";
      mid.innerHTML = `
        <div class="frontier-ext-round-cleared">
          <div class="celebration">${t.justCleared} <strong>${run.round}</strong> ${t.cleared} !</div>
          <div class="stats">
            <span>${t.streak}: <strong>${streak}</strong></span>
            <span>${t.best}: <strong>${best}</strong></span>
          </div>
          ${awards}
          ${nextBanner}
        </div>
      `;
    }
    if (bottom) {
      bottom.style.display = "block";

      bottom.innerHTML = `
        <div class="frontier-ext-run-actions">
          <button class="frontier-ext-action-btn primary" data-action="round-continue">${t.continue}</button>
          <button class="frontier-ext-action-btn" data-action="rest">${t.rest}</button>
          <button class="frontier-ext-action-btn danger" data-action="abandon">${t.abandon}</button>
        </div>
        <div class="frontier-ext-round-hint">${t.hint}</div>
      `;
      bottom.querySelectorAll("[data-action]").forEach((btn) => {
        btn.onclick = () => handleRunAction(btn.dataset.action, facility);
      });
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function pikeAdvanceAfterEvent(facility) {
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    run.pikeRoom = (run.pikeRoom || 1) + 1;
    run.pikeDoors = null;
    run.pikeDoorPicked = null;
    run.pikeHint = null;

    if (run.pikeRoom > PIKE_ROOM_COUNT) {

      run.pikeRoom = 1;
      if (run.pikeTeam) {
        for (const sl of ["slot1", "slot2", "slot3"]) {
          if (run.pikeTeam[sl]) {
            run.pikeTeam[sl].hpRatio = 1.0;
            run.pikeTeam[sl].status = null;
          }
        }
      }
      refreshActiveFrontierView();
      if (typeof closeTooltip === "function") closeTooltip();
      return;
    }
    openPikeRoomPreview(facility);
  }

  function applyPikePyramidHpState() {
    try {
      const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
      if (!run) return;
      if (saved.currentArea !== RUN_AREA_ID) return;
      const fac = FACILITIES.find((f) => f.id === run.facilityId);

      if (!hasRunTeamState(fac)) return;
      migratePikePyramidTeam();
      if (!run.pikeTeam) return;
      if (typeof team === "undefined" || typeof pkmn === "undefined") return;
      const debug = !!window.__frontierExt?.pikeDebug;
      if (debug) console.log("[pike-apply] start, pikeTeam:", JSON.parse(JSON.stringify(run.pikeTeam)));

      let appliedAny = false;
      for (const sl of ["slot1", "slot2", "slot3"]) {
        const ps = run.pikeTeam[sl];
        if (!ps) continue;
        if (!team[sl] || !team[sl].pkmn) {
          if (debug) console.log(`[pike-apply] ${sl}: no team slot`);
          continue;
        }
        const pokeData = pkmn[team[sl].pkmn.id];
        if (!pokeData) {
          if (debug) console.log(`[pike-apply] ${sl}: no pkmn data for ${team[sl].pkmn.id}`);
          continue;
        }

        if (ps.pkmnId && ps.pkmnId !== team[sl].pkmn.id) {
          if (debug) console.log(`[pike-apply] ${sl}: pkmn changed ${ps.pkmnId} -> ${team[sl].pkmn.id}, resetting HP/status`);
          ps.pkmnId = team[sl].pkmn.id;
          ps.hpRatio = 1.0;
          ps.status = null;

          continue;
        }

        if (typeof ps.hpRatio === "number" && pokeData.playerHpMax) {
          const newHp = ps.hpRatio > 0
            ? Math.max(1, Math.floor(pokeData.playerHpMax * ps.hpRatio))
            : 0;
          if (debug) console.log(`[pike-apply] ${sl} ${team[sl].pkmn.id}: hp ${pokeData.playerHp}/${pokeData.playerHpMax} -> ${newHp} (ratio ${ps.hpRatio})`);
          pokeData.playerHp = newHp;
          appliedAny = true;
        }

        const st = ps.status ? normalizePikePyramidStatus(ps.status) : null;
        if (st) {
          if (!team[sl].buffs) team[sl].buffs = {};
          if (debug) console.log(`[pike-apply] ${sl}: status ${st} x${PIKE_PYRAMID_STATUS_TURNS}`);
          team[sl].buffs[st] = PIKE_PYRAMID_STATUS_TURNS;
          appliedAny = true;
        }
      }

      if (appliedAny) {
        try {
          if (typeof updateTeamPkmn === "function") updateTeamPkmn();
          if (typeof updateTeamBuffs === "function") updateTeamBuffs();
          if (debug) {

            for (const sl of ["slot1", "slot2", "slot3"]) {
              if (!team[sl] || !team[sl].pkmn) continue;
              const pd = pkmn[team[sl].pkmn.id];
              console.log(`[pike-apply] readback ${sl}: hp=${pd?.playerHp}/${pd?.playerHpMax} buffs=`, JSON.parse(JSON.stringify(team[sl].buffs || {})));
            }
          }
        } catch (e) {  }
      }
    } catch (e) {
      console.error("[frontier-ext] pike state apply failed:", e);
    }
  }

  function isFrontierRunActive() {
    if (typeof saved !== "object" || !saved) return false;
    const run = saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return false;
    return saved.currentAreaBuffer === RUN_AREA_ID || saved.currentArea === RUN_AREA_ID;
  }

  function isFrontierTiedSlotActive() {
    if (typeof saved !== "object" || !saved) return false;
    const run = saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return false;
    const tied = run.tiedPreviewSlot || run.pikeTeamSource;
    if (!tied) return false;
    return saved.currentPreviewTeam === tied;
  }

  function isFrontierMidRound() {
    if (typeof saved !== "object" || !saved) return false;
    const run = saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return false;

    return !run.roundJustCleared;
  }

  function getFrontierRunFacility() {
    if (typeof saved !== "object" || !saved) return null;
    const run = saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return null;
    return FACILITIES.find((f) => f.id === run.facilityId) || null;
  }

  function refreshFrontierPikePills() {
    if (typeof team === "undefined" || typeof pkmn === "undefined") return;
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return;
    const fac = FACILITIES.find((f) => f.id === run.facilityId);

    if (!fac || !hasRunTeamState(fac)) return;
    const l = pikeL10n();
    const statusLabel = {
      poisoned: l.statusPoisoned, burn: l.statusBurn, paralysis: l.statusParalysis,
      sleep: l.statusSleep, freeze: l.statusFreeze };
    for (const sl of ["slot1", "slot2", "slot3"]) {
      const card = document.getElementById(`explore-${sl}-member`);
      if (!card) continue;

      let overlay = card.querySelector(".frontier-ext-team-slot-hp");
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "frontier-ext-team-slot-hp";
        overlay.innerHTML = `<span class="hp-pill">--</span>`;
        if (getComputedStyle(card).position === "static") card.style.position = "relative";
        card.appendChild(overlay);
      }

      let ratio = 1.0;
      let status = null;
      if (team[sl] && team[sl].pkmn) {
        const pokeData = pkmn[team[sl].pkmn.id];
        if (pokeData && pokeData.playerHpMax) {
          ratio = Math.max(0, Math.min(1, (pokeData.playerHp || 0) / pokeData.playerHpMax));
        }
        if (team[sl].buffs) {
          for (const st of PIKE_PYRAMID_STATUSES) {
            if (team[sl].buffs[st] > 0) { status = st; break; }
          }
        }
      } else if (run.pikeTeam && run.pikeTeam[sl]) {
        const ps = run.pikeTeam[sl];
        if (typeof ps.hpRatio === "number") ratio = ps.hpRatio;
        if (ps.status) status = normalizePikePyramidStatus(ps.status);
      }

      const pct = Math.round(ratio * 100);
      const hpCls = ratio <= 0 ? "ko" : (ratio <= 0.25 ? "low" : (ratio <= 0.5 ? "mid" : ""));
      const hpText = ratio <= 0 ? "KO" : `${pct}%`;

      const hpPill = overlay.querySelector(".hp-pill");
      if (hpPill) {

        const newClass = `hp-pill ${hpCls}`.trim();
        if (hpPill.className !== newClass) hpPill.className = newClass;
        if (hpPill.textContent !== hpText) hpPill.textContent = hpText;
      }

      let statusPill = overlay.querySelector(".status-pill");
      if (status) {
        if (!statusPill) {
          statusPill = document.createElement("span");
          statusPill.className = "status-pill";
          overlay.appendChild(statusPill);
        }
        const newClass = `status-pill ${status}`;
        if (statusPill.className !== newClass) statusPill.className = newClass;
        const newText = statusLabel[status] || status;
        if (statusPill.textContent !== newText) statusPill.textContent = newText;
      } else if (statusPill) {
        statusPill.remove();
      }
    }
  }

  function installLivePillHooks() {
    const attach = (name) => {
      if (typeof window[name] !== "function") {
        setTimeout(() => attach(name), 200);
        return;
      }
      const flag = `__frontierExtHook_${name}`;
      if (window[flag]) return;
      window[flag] = true;
      const orig = window[name];
      window[name] = function () {
        const res = orig.apply(this, arguments);
        try { refreshFrontierPikePills(); } catch (e) {  }
        return res;
      };
    };
    attach("updateTeamPkmn");
    attach("updateTeamBuffs");
  }

  let __applyingFrontierLock = false;

  function applyFrontierTeamLock() {
    if (__applyingFrontierLock) return;
    __applyingFrontierLock = true;
    try {
      _applyFrontierTeamLockInner();
    } finally {

      Promise.resolve().then(() => { __applyingFrontierLock = false; });
    }
  }
  function _removeFrontierTeamLockInner() {
    const teamMenu = document.getElementById("team-menu");
    if (!teamMenu) return;
    teamMenu.classList.remove("frontier-ext-team-locked");
    teamMenu.classList.remove("frontier-ext-team-locked-strict");
    const banner = document.getElementById("frontier-ext-team-lock-banner");
    if (banner) banner.remove();
    document.querySelectorAll(".frontier-ext-team-slot-hp").forEach((el) => el.remove());
    document.querySelectorAll("[data-__frontier-locked-drag='1'], [data-__frontierLockedDrag='1']").forEach((el) => {
      el.draggable = true;
      delete el.dataset.__frontierLockedDrag;
    });
  }

  function _applyFrontierTeamLockInner() {
    const teamMenu = document.getElementById("team-menu");
    if (!teamMenu) return;
    const strict = isFrontierRunActive();
    const tiedSlot = isFrontierTiedSlotActive();
    const midRound = isFrontierMidRound();
    const tiedLock = !strict && tiedSlot && midRound;
    if (!strict && !tiedLock) {

      _removeFrontierTeamLockInner();
      return;
    }
    teamMenu.classList.add("frontier-ext-team-locked");
    teamMenu.classList.toggle("frontier-ext-team-locked-strict", strict);
    const lang = "en";
    const facility = getFrontierRunFacility();
    const facName = facility ? (facility.name) : "";

    let banner = document.getElementById("frontier-ext-team-lock-banner");
    if (!banner) {
      banner = document.createElement("div");
      banner.id = "frontier-ext-team-lock-banner";
      banner.className = "frontier-ext-team-lock-banner";
      const preview = document.getElementById("team-preview");
      if (preview && preview.parentNode) {
        preview.parentNode.insertBefore(banner, preview);
      } else {
        teamMenu.appendChild(banner);
      }
    }
    const subtle = strict
      ? "· can't be changed during combat"
      : "· round in progress, switch to another team for other zones";
    const txt = `<span class="lock-icon">🔒</span><span>Team locked — ${facName}</span><span class="subtle">&nbsp;${subtle}</span>`;
    banner.innerHTML = txt;

    if (facility && isPikeFacility(facility)) {
      migratePikePyramidTeam();
      try { refreshFrontierPikePills(); } catch (e) {  }
    } else {

      document.querySelectorAll(".frontier-ext-team-slot-hp").forEach((el) => el.remove());
    }

    document.querySelectorAll("#team-preview [draggable='true']").forEach((el) => {
      el.dataset.__frontierLockedDrag = "1";
      el.draggable = false;
    });
  }

  function removeFrontierTeamLock() {
    if (__applyingFrontierLock) return;
    __applyingFrontierLock = true;
    try {
      _removeFrontierTeamLockInner();
    } finally {
      Promise.resolve().then(() => { __applyingFrontierLock = false; });
    }
  }

  function installTeamMenuLockHook() {
    if (typeof window.updatePreviewTeam !== "function") {
      setTimeout(installTeamMenuLockHook, 200);
      return;
    }
    if (window.__frontierExtTeamLockHooked) return;
    window.__frontierExtTeamLockHooked = true;
    const orig = window.updatePreviewTeam;
    window.updatePreviewTeam = function () {

      try { applyFrontierTeamLock(); }
      catch (e) { console.error("[frontier-ext] pre-render lock failed:", e); }
      const res = orig.apply(this, arguments);

      try { applyFrontierTeamLock(); }
      catch (e) { console.error("[frontier-ext] post-render lock failed:", e); }
      return res;
    };
  }

  function isPkmnInActiveRunTeam(pkmnId) {
    if (!pkmnId) return false;
    if (typeof saved !== "object" || !saved) return false;
    const run = saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return false;
    const tiedSlot = run.tiedPreviewSlot || run.pikeTeamSource;
    if (!tiedSlot) return false;
    const pt = saved.previewTeams && saved.previewTeams[tiedSlot];
    if (!pt) return false;
    for (const sl of ["slot1", "slot2", "slot3"]) {
      if (pt[sl] && pt[sl].pkmn === pkmnId) return true;
    }
    return false;
  }

  function installFrontierRightClickBlock() {
    if (window.__frontierExtContextBlock) return;
    window.__frontierExtContextBlock = true;
    const shouldBlock = (e) => {
      if (typeof saved !== "object" || !saved) return false;
      if (!saved.frontierExt || !saved.frontierExt.activeRun) return false;
      const target = e.target && e.target.closest
        ? e.target.closest("[data-pkmn-editor]")
        : null;
      if (!target) return false;

      const pkmnId = target.dataset && target.dataset.pkmnEditor;
      if (isPkmnInActiveRunTeam(pkmnId)) return true;

      const exploreTeam = document.getElementById("explore-team");
      const teamPreview = document.getElementById("team-preview");
      return (exploreTeam && exploreTeam.contains(target))
          || (teamPreview && teamPreview.contains(target));
    };
    const blocker = (e) => {
      if (!shouldBlock(e)) return;
      try { e.preventDefault(); } catch (_) {}
      try { e.stopImmediatePropagation(); } catch (_) {}
      try { e.stopPropagation(); } catch (_) {}
    };
    document.addEventListener("contextmenu", blocker, { capture: true });
  }

  function installTeamLockEventFilter() {
    if (window.__frontierExtLockFilterInstalled) return;
    window.__frontierExtLockFilterInstalled = true;

    const shouldBlock = (e) => {
      const teamMenu = document.getElementById("team-menu");
      if (!teamMenu || !teamMenu.classList.contains("frontier-ext-team-locked")) return false;
      const preview = document.getElementById("team-preview");
      if (!preview) return false;

      return preview.contains(e.target);
    };
    const blocker = (e) => {
      if (!shouldBlock(e)) return;
      try { e.preventDefault(); } catch (_) {}
      try { e.stopImmediatePropagation(); } catch (_) {}
      try { e.stopPropagation(); } catch (_) {}
    };

    const opts = { capture: true, passive: false };
    ["pointerdown", "mousedown", "click", "dragstart", "touchstart", "touchmove"]
      .forEach((evt) => document.addEventListener(evt, blocker, opts));
  }

  function installTeamMenuObserver() {
    const teamMenu = document.getElementById("team-menu");
    if (!teamMenu) {
      setTimeout(installTeamMenuObserver, 300);
      return;
    }
    if (window.__frontierExtTeamMenuObserved) return;
    window.__frontierExtTeamMenuObserved = true;
    const observer = new MutationObserver(() => {
      try { applyFrontierTeamLock(); }
      catch (e) {  }
    });
    observer.observe(teamMenu, { attributes: true, attributeFilter: ["style", "class"] });

    try { applyFrontierTeamLock(); } catch (e) {  }
  }

  function installPikePyramidHpRestoreHook() {
    if (typeof window.initialiseArea !== "function") {
      setTimeout(installPikePyramidHpRestoreHook, 200);
      return;
    }
    if (window.__frontierExtPikeHpHooked) return;
    window.__frontierExtPikeHpHooked = true;
    const orig = window.initialiseArea;
    window.initialiseArea = function () {
      const res = orig.apply(this, arguments);
      try { applyPikePyramidHpState(); }
      catch (e) { console.error("[frontier-ext] pike post-init apply failed:", e); }

      try { refreshFrontierPikePills(); }
      catch (e) {  }
      return res;
    };
  }

  function snapshotPikePyramidHp() {
    try {
      const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
      if (!run) return;
      const fac = FACILITIES.find((f) => f.id === run.facilityId);

      if (!hasRunTeamState(fac)) return;
      if (typeof team === "undefined" || typeof pkmn === "undefined") return;
      migratePikePyramidTeam();
      if (!run.pikeTeam) return;
      const debug = !!window.__frontierExt?.pikeDebug;

      for (const sl of ["slot1", "slot2", "slot3"]) {
        const ps = run.pikeTeam[sl];
        if (!ps) continue;
        if (!team[sl] || !team[sl].pkmn) continue;
        const pokeData = pkmn[team[sl].pkmn.id];
        if (pokeData && pokeData.playerHpMax) {
          const ratio = Math.max(0, Math.min(1, (pokeData.playerHp || 0) / pokeData.playerHpMax));
          if (debug) console.log(`[pike-snap] ${sl} ${team[sl].pkmn.id}: hp ${pokeData.playerHp}/${pokeData.playerHpMax} -> ratio ${ratio}`);
          ps.hpRatio = ratio;
        }
        let activeStatus = null;
        const buffs = team[sl].buffs;
        if (buffs) {
          for (const st of PIKE_PYRAMID_STATUSES) {
            if (buffs[st] > 0) { activeStatus = st; break; }
          }
        }
        if (debug && activeStatus !== ps.status) console.log(`[pike-snap] ${sl}: status ${ps.status} -> ${activeStatus}`);
        ps.status = activeStatus;
      }
    } catch (e) {
      console.error("[frontier-ext] pike HP snapshot failed:", e);
    }
  }

  const RUN_AREA_ID = "frontierExtRun";

  function buildEphemeralRunArea(trainer, facility) {
    if (typeof areas === "undefined" || typeof pkmn === "undefined") return null;

    let effectiveTeam = trainer.team;
    if (isDomeFacility(facility) && trainer.team.length > DOME_ACTIVE_SIZE) {
      const indices = [0, 1, 2]
        .sort(() => Math.random() - 0.5)
        .slice(0, DOME_ACTIVE_SIZE);
      effectiveTeam = indices.map((i) => trainer.team[i]);
    }

    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    const thisRound = (run && run.round ? run.round : 0) + 1;
    const diff = computeRunDifficulty(thisRound, facility);

    if (isMiniBossBattle(run, facility)) {
      diff.hpMult = (diff.hpMult || 4) + 2;
      diff.ivRating = Math.min(6, (diff.ivRating || 0) + 1);
      diff.forceHiddenAbility = true;
      diff.lastBattleBump = true;
    }

    if (run && !isFactoryFacility(facility)) {
      applyEnemyRuntimeStats(run, { team: effectiveTeam }, diff);
    }

    const team = {};

    const isPalaceFacility = facility && facility.id === "frontierPalaceSecret";
    const isBossForBuild   = !!(trainer && trainer.isBoss) || (typeof isMiniBossBattle === "function" && isMiniBossBattle(run, facility));

    const postGoldForBuild = (typeof isFacilityPostGold === "function")
      && isFacilityPostGold(facility && facility.id, diff && diff.round);
    const applyNatureBuild = isPalaceFacility || postGoldForBuild || isBossForBuild;
    const naturesBySlot = {};
    effectiveTeam.forEach((slot, i) => {
      const slotN = i + 1;
      if (!pkmn[slot.id]) return;
      team["slot" + slotN] = pkmn[slot.id];
      team["slot" + slotN + "Moves"] = slot.moves;
      naturesBySlot[slotN] = applyNatureBuild
        ? (slot.nature || simulateNatureFor(slot.id) || "")
        : "";
    });

    if (isArenaFacility(facility)) arenaResetState();

    areas[RUN_AREA_ID] = {
      id: RUN_AREA_ID,
      name: trainer.name,
      background: facility.background,
      sprite: trainer.sprite,

      difficulty: diff.hpMult || (trainer.tier ? trainer.tier * 2 + 2 : 4),
      trainer: true,
      type: "vs",
      level: 100,
      team,

      frontierExtNatures: naturesBySlot,
      frontierExtFacilityId: facility.id,
      fieldEffect: [],
      itemReward: {},
      defeated: false,
      hpPercentage: 100,
      encounterEffect: function () {

      } };
    return areas[RUN_AREA_ID];
  }

  function currentPreviewTeamSize() {
    try {
      const pt = saved.previewTeams[saved.currentPreviewTeam];
      if (!pt) return 0;
      let n = 0;
      for (const slot of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
        if (pt[slot] && pt[slot].pkmn) n++;
      }
      return n;
    } catch (e) {
      return 0;
    }
  }

  function tiedTeamSize(run) {
    if (!run || !run.tiedPreviewSlot) return 0;
    try {
      const pt = saved.previewTeams && saved.previewTeams[run.tiedPreviewSlot];
      if (!pt) return 0;
      let n = 0;
      for (const slot of ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6"]) {
        if (pt[slot] && pt[slot].pkmn) n++;
      }
      return n;
    } catch (e) {
      return 0;
    }
  }

  function canRunProceed(facility) {
    const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
    if (!run) return true;
    if (isFactoryFacility(facility)) return true;
    if (tiedTeamSize(run) !== 3) {
      showTeamSizeError(facility);
      return false;
    }
    return true;
  }

  function expectedTeamSize(facility) {
    return 3;
  }

  const DOME_ACTIVE_SIZE = 2;

  function allPreviewMonsAreLvl100() {
    try {
      const pt = saved.previewTeams[saved.currentPreviewTeam];
      if (!pt) return false;
      for (const slot of ["slot1", "slot2", "slot3"]) {
        if (!pt[slot] || !pt[slot].pkmn) return false;

        const id = (typeof pt[slot].pkmn === "string") ? pt[slot].pkmn
                 : (pt[slot].pkmn && pt[slot].pkmn.id);
        if (!id || typeof pkmn === "undefined" || !pkmn[id]) return false;
        if ((pkmn[id].level | 0) < 100) return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  function zdcForceCloseErrorModal(facility) {

    try {
      if (facility && typeof saved === "object" && saved && saved.frontierExt) {
        const run = saved.frontierExt.activeRun;
        if (run && run.facilityId === facility.id) {
          if (typeof isFactoryFacility === "function" && isFactoryFacility(facility)) {
            try { cleanupFactoryRun(run); } catch (e) {  }
          }
          try { restoreEnemyRuntimeStats(run); } catch (e) {  }
          run.upcomingTrainer = null;
          run.factoryPool = null;
          run.factorySelection = [];
          run.factoryTeam = null;
          run.pikeDoors = null;
          run.pikeDoorPicked = null;
          run.pyramid = null;
          if (!saved.frontierExt.pausedRuns) saved.frontierExt.pausedRuns = {};
          saved.frontierExt.pausedRuns[run.facilityId] = run;
          saved.frontierExt.activeRun = null;
          try { removeFrontierTeamLock(); } catch (e) {  }
          try { if (typeof saveGame === "function") saveGame(); } catch (e) {  }
          try { if (typeof refreshActiveFrontierView === "function") refreshActiveFrontierView(); } catch (e) {  }
        }
      }
    } catch (e) {  }

    try {
      if (typeof tooltipStack !== "undefined" && Array.isArray(tooltipStack)) {
        tooltipStack.length = 0;
      }
    } catch (e) {  }
    try {
      const bg = document.getElementById("tooltipBackground");
      const box = document.getElementById("tooltipBox");
      if (bg)  bg.classList.remove("frontier-ext-run-lock-open");
      if (box) box.classList.remove("frontier-ext-run-lock-open");
      const blocker = document.getElementById("prevent-tooltip-exit");
      if (blocker && blocker.hasAttribute("data-frontier-ext-blocker")) blocker.remove();
    } catch (e) {  }
    try { closeTooltip(); } catch (e) {  }
    setTimeout(() => {
      try {
        const bg = document.getElementById("tooltipBackground");
        if (bg && bg.style.display !== "none") bg.style.display = "none";
        ["tooltipTop", "tooltipTitle", "tooltipMid", "tooltipBottom"].forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.innerHTML = "";
        });
      } catch (e) {  }
    }, 250);
  }

  function showTeamLevelError(facility) {
    const lang = window.gameLang === "fr" ? "fr" : "en";
    const title = lang === "fr" ? "Niveau d'équipe invalide" : "Invalid team level";
    const msg = lang === "fr"
      ? "Cette ZdC applique les règles Gen 3 d'Émeraude : tes trois Pokémon doivent être niveau 100. Fais-les monter au niveau max avant de lancer un combat."
      : "This ZdC facility follows the Gen 3 Emerald rules: all three of your Pokémon must be level 100. Bring them to max level before starting a fight.";
    const closeLabel = lang === "fr" ? "Fermer" : "Close";
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) { top.style.display = "none"; top.innerHTML = ""; }
    if (titleEl) { titleEl.style.display = "block"; titleEl.innerHTML = "⚠️ " + title; }
    if (mid) { mid.style.display = "block"; mid.innerHTML = `<div class="zdc-error-modal-bypass" style="padding:0.6rem 0.8rem;">${msg}</div>`; }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `<div style="padding:0.6rem 0.8rem 0.8rem;text-align:center;"><button type="button" data-zdc-close-error style="background:#3a2a1a;color:#ffd17a;border:1px solid rgba(255,200,90,0.55);padding:0.45rem 1.6rem;border-radius:0.3rem;cursor:pointer;font-weight:bold;font-size:0.95rem;letter-spacing:0.02em;box-shadow:0 1px 2px rgba(0,0,0,0.35);">${closeLabel}</button></div>`;
      const btn = bottom.querySelector("[data-zdc-close-error]");
      if (btn) btn.addEventListener("click", () => zdcForceCloseErrorModal(facility));
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function showTeamSizeError(facility) {
    const expected = expectedTeamSize(facility);
    const title = "Invalid team size";
    const msg = `This facility uses Gen 3 rules: exactly ${expected} Pokémon per team. Adjust your team via the editor before starting a fight.`;
    const closeLabel = "Close";
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) { top.style.display = "none"; top.innerHTML = ""; }
    if (titleEl) { titleEl.style.display = "block"; titleEl.innerHTML = "⚠️ " + title; }
    if (mid) { mid.style.display = "block"; mid.innerHTML = `<div class="zdc-error-modal-bypass" style="padding:0.6rem 0.8rem;">${msg}</div>`; }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `<div style="padding:0.6rem 0.8rem 0.8rem;text-align:center;"><button type="button" data-zdc-close-error style="background:#3a2a1a;color:#ffd17a;border:1px solid rgba(255,200,90,0.55);padding:0.45rem 1.6rem;border-radius:0.3rem;cursor:pointer;font-weight:bold;font-size:0.95rem;letter-spacing:0.02em;box-shadow:0 1px 2px rgba(0,0,0,0.35);">${closeLabel}</button></div>`;
      const btn = bottom.querySelector("[data-zdc-close-error]");
      if (btn) btn.addEventListener("click", () => zdcForceCloseErrorModal(facility));
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function showTiedTeamLostModal(facility) {
    const title = "Run ended";
    const msg = `The team tied to your run has fewer than 3 Pokémon — runs can't continue on an incomplete team. Start a new streak once your team is back to 3. <br><br><em>Tip: between rounds, keep the same team selection or refill to 3 before clicking "Continue".</em>`;
    const closeLabel = "Close";
    const top = document.getElementById("tooltipTop");
    const titleEl = document.getElementById("tooltipTitle");
    const mid = document.getElementById("tooltipMid");
    const bottom = document.getElementById("tooltipBottom");

    if (top) { top.style.display = "none"; top.innerHTML = ""; }
    if (titleEl) { titleEl.style.display = "block"; titleEl.innerHTML = "⚠️ " + title; }
    if (mid) { mid.style.display = "block"; mid.innerHTML = `<div class="zdc-error-modal-bypass" style="padding:0.7rem 0.9rem;line-height:1.35;">${msg}</div>`; }
    if (bottom) {
      bottom.style.display = "block";
      bottom.innerHTML = `<div style="padding:0.6rem 0.8rem 0.8rem;text-align:center;"><button type="button" data-zdc-close-error style="background:#3a2a1a;color:#ffd17a;border:1px solid rgba(255,200,90,0.55);padding:0.45rem 1.6rem;border-radius:0.3rem;cursor:pointer;font-weight:bold;font-size:0.95rem;letter-spacing:0.02em;box-shadow:0 1px 2px rgba(0,0,0,0.35);">${closeLabel}</button></div>`;
      const btn = bottom.querySelector("[data-zdc-close-error]");
      if (btn) btn.addEventListener("click", () => zdcForceCloseErrorModal(facility));
    }
    if (typeof openTooltip === "function") openTooltip();
  }

  function launchCombat(facility) {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run || run.facilityId !== facility.id) return;

    const domeApplied = run.domeTeamBackup && isDomeFacility(facility);
    if (!domeApplied) {
      const teamSize = currentPreviewTeamSize();
      if (teamSize !== 3) {
        showTeamSizeError(facility);
        return;
      }
      if (!canRunProceed(facility)) return;
    }

    const nextRound = run.round + 1;
    const bossInfo = getBossRoundInfo(nextRound, facility);

    const perRound = battlesPerRound(facility);
    const battleInRound = run.battleInRound || 1;

    const brainDueThisBattle = bossInfo
      && !isDomeFacility(facility)
      && (
        (isPikeFacility(facility) && run.pikeRoom === PIKE_ROOM_COUNT)
        || (isPyramidFacility(facility) && run.pyramidEncounterKind === "brain")
        || (!isPikeFacility(facility) && !isPyramidFacility(facility)
            && battleInRound === perRound)
      );

    let trainer;
    if (isDomeFacility(facility)) {

      const bracket = ensureBracketForDome(facility);
      const idx = (run.bracketBattle || 1) - 1;
      trainer = bracket[idx] || generateTrainer(nextRound, facility);
    } else if (brainDueThisBattle) {

      const brainTeam = bossInfo.kind === "silver"
        ? facility.brain.teamSilver
        : facility.brain.teamGold;
      const brainDiff = computeRunDifficulty(nextRound, facility);
      trainer = {
        name: facility.brain.name,
        sprite: facility.brain.sprite,
        team: brainTeam
          ? brainTeam.map((id) => ({
              id,
              moves: pickMovesetFor(id, brainDiff),
              nature: simulateNatureFor(id) }))
          : [1, 2, 3].map(() => {
              const id = pickFromPool(5);
              return { id, moves: pickMovesetFor(id, brainDiff), nature: simulateNatureFor(id) };
            }),
        tier: brainDiff.tier,
        multiplier: bossInfo.multiplier,
        bossKind: bossInfo.kind,
        isBoss: true };
    } else {
      trainer = run.upcomingTrainer || generateTrainer(nextRound, facility);
    }
    run.upcomingTrainer = trainer;

    const area = buildEphemeralRunArea(trainer, facility);
    if (!area) return;

    try {
      saved.currentAreaBuffer = RUN_AREA_ID;
      const previewExit = document.getElementById("preview-team-exit");
      const teamMenu = document.getElementById("team-menu");
      const menuBtn = document.getElementById("menu-button-parent");
      const exploreMenu = document.getElementById("explore-menu");

      const teamReturn = document.getElementById("pkmn-team-return");
      if (teamReturn) teamReturn.style.display = "none";
      if (previewExit) previewExit.style.display = "flex";
      if (teamMenu) {
        teamMenu.style.zIndex = "50";
        teamMenu.style.display = "flex";
      }
      if (menuBtn) menuBtn.style.display = "none";
      if (typeof updatePreviewTeam === "function") updatePreviewTeam();
      if (typeof afkSeconds !== "undefined") window.afkSeconds = 0;
      if (exploreMenu) exploreMenu.style.display = "none";
      if (typeof closeTooltip === "function") closeTooltip();
    } catch (e) {
      console.error("[frontier-ext] failed to open preview menu:", e);
    }
  }

  function onRunVictory() {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const facility = FACILITIES.find((f) => f.id === run.facilityId);

    if (!isFactoryFacility(facility) && tiedTeamSize(run) !== 3) {
      if (currentPreviewTeamSize() === 3) {

        run.tiedPreviewSlot = saved.currentPreviewTeam;
      } else {

        try { showTiedTeamLostModal(facility); } catch (e) {  }
        saved.frontierExt.activeRun = null;
        try { removeFrontierTeamLock(); } catch (e) {  }
        refreshActiveFrontierView();
        return;
      }
    }

    if (isDomeFacility(facility)) {
      run.bracketBattle = (run.bracketBattle || 1) + 1;
      if (run.bracketBattle <= DOME_BRACKET_SIZE) {

        run.upcomingTrainer = null;
        return;
      }

      run.bracketBattle = 1;
      run.bracketTrainers = null;
      run.bracketRound = null;
    }

    if (isPyramidFacility(facility)) {
      const brainWin = run.pyramidEncounterKind === "brain";
      run.pyramidEncounterKind = null;
      if (brainWin) {

        run.pyramidRoundComplete = true;
      }
      if (run.pyramidRoundComplete) {
        run.pyramidRoundComplete = false;
        run.pyramid = null;

        run.pyramidThemeIndex = ((run.pyramidThemeIndex | 0) + 1) % PYRAMID_THEME_COUNT;

        if (run.pikeTeam) {
          for (const sl of ["slot1", "slot2", "slot3"]) {
            const ps = run.pikeTeam[sl];
            if (!ps) continue;
            ps.hpRatio = 1.0;
            ps.status = null;
            if (ps.item) {
              mirrorPyramidItemToPreview(sl, null);
              ps.item = null;
            }
          }
        }

      } else {

        run.upcomingTrainer = null;
        return;
      }
    }

    const perRound = battlesPerRound(facility);
    if (perRound > 1 && !isPikeFacility(facility) && !isDomeFacility(facility) && !isPyramidFacility(facility)) {

      if (isFactoryFacility(facility)
          && run.upcomingTrainer
          && (run.battleInRound || 1) < perRound) {

        const defeatedClones = run.upcomingTrainer.__zdcDefeatedClones || {};
        run.pendingFactorySwap = (run.upcomingTrainer.team || []).map((r) => {
          const p = (typeof pkmn !== "undefined" && pkmn[r.id]) ? pkmn[r.id] : null;
          const cache = defeatedClones[r.id] || null;
          let abilityRef = null;
          if (cache && cache.ability && typeof ability === "object" && ability[cache.ability]) {
            abilityRef = ability[cache.ability];
          } else if (p && p.ability) {
            abilityRef = p.ability;
          }
          let ivs;
          if (cache && typeof cache.ivRating === "number") {
            const v = Math.max(0, Math.min(6, cache.ivRating | 0));
            ivs = { hp: v, atk: v, def: v, satk: v, sdef: v, spe: v };
          } else if (p && p.ivs) {
            ivs = { ...p.ivs };
          } else {
            ivs = { hp: 0, atk: 0, def: 0, satk: 0, sdef: 0, spe: 0 };
          }
          return {
            id: r.id,
            moves: r.moves || pickMovesetFor(r.id),
            nature: (cache && cache.nature) || r.nature || simulateNatureFor(r.id) || "",
            ivs,
            ability: abilityRef,

            item: cache ? cache.item : null,
            __zdcShiny: !!(cache && cache.shiny),
            __zdcHiddenAbility: cache ? cache.hiddenAbility : null,
          };
        });
      }
      run.battleInRound = (run.battleInRound || 1) + 1;
      if (run.battleInRound <= perRound) {
        run.upcomingTrainer = null;
        return;
      }

      run.battleInRound = 1;
    }

    if (isPikeFacility(facility)) {

      if (run.pikePostBattleHeal && run.pikeTeam) {
        for (const sl of ["slot1", "slot2", "slot3"]) {
          if (run.pikeTeam[sl]) {
            run.pikeTeam[sl].hpRatio = 1.0;
            run.pikeTeam[sl].status = null;
            run.pikeTeam[sl].healJustApplied = true;
          }
        }
      }
      run.pikePostBattleHeal = false;
      run.pikeRoom = (run.pikeRoom || 1) + 1;
      run.pikeDoors = null;
      run.pikeDoorPicked = null;
      run.pikeHint = null;
      if (run.pikeRoom <= PIKE_ROOM_COUNT) {

        run.upcomingTrainer = null;
        return;
      }

      run.pikeRoom = 1;
      if (run.pikeTeam) {
        for (const sl of ["slot1", "slot2", "slot3"]) {
          if (run.pikeTeam[sl]) {
            run.pikeTeam[sl].hpRatio = 1.0;
            run.pikeTeam[sl].status = null;
          }
        }
      }
    }

    run.round += 1;
    saved.frontierExt.streaks[run.facilityId] = run.round;
    if (run.round > (saved.frontierExt.maxStreaks[run.facilityId] || 0)) {
      saved.frontierExt.maxStreaks[run.facilityId] = run.round;
    }
    if (run.round === silverRoundFor(facility)) saved.frontierExt.symbols[run.facilityId].silver = true;
    else if (run.round === goldRoundFor(facility)) saved.frontierExt.symbols[run.facilityId].gold = true;
    run.upcomingTrainer = null;

    run.roundJustCleared = true;
  }

  function onRunDefeat() {
    ensureSaveSlot();
    const run = saved.frontierExt.activeRun;
    if (!run) return;
    const final = run.round;
    if (final > (saved.frontierExt.maxStreaks[run.facilityId] || 0)) {
      saved.frontierExt.maxStreaks[run.facilityId] = final;
    }

    const fac = FACILITIES.find((f) => f.id === run.facilityId);
    if (isFactoryFacility(fac)) cleanupFactoryRun(run);

    try { restoreEnemyRuntimeStats(run); } catch (e) {  }
    if (isPyramidFacility(fac)) {
      try { setPyramidModalSizing(false); } catch (e) {  }
      try { cleanupPyramidPreviewItems(run); } catch (e) {  }
    }
    saved.frontierExt.activeRun = null;
    saved.frontierExt.streaks[run.facilityId] = 0;

    try { removeFrontierTeamLock(); } catch (e) {  }
  }

  function installVSLeakFilter() {
    if (typeof window.updateVS !== "function") {
      setTimeout(installVSLeakFilter, 150);
      return;
    }
    if (window.__frontierExtVSHooked) return;
    window.__frontierExtVSHooked = true;
    const orig = window.updateVS;
    window.updateVS = function () {
      const stash = (typeof areas === "object" && areas) ? areas[RUN_AREA_ID] : null;
      if (stash) delete areas[RUN_AREA_ID];
      try {
        return orig.apply(this, arguments);
      } finally {
        if (stash) areas[RUN_AREA_ID] = stash;
      }
    };
  }

  function installExitRedirect() {
    if (typeof window.exitCombat !== "function") {
      setTimeout(installExitRedirect, 200);
      return;
    }
    if (window.__frontierExtExitHooked) return;
    window.__frontierExtExitHooked = true;
    const orig = window.exitCombat;
    window.exitCombat = function () {
      const wasFrontierRun =
        typeof saved !== "undefined" &&
        saved &&
        (saved.currentArea === RUN_AREA_ID ||
          saved.lastAreaJoined === RUN_AREA_ID);

      if (wasFrontierRun) {
        const _run = saved && saved.frontierExt && saved.frontierExt.activeRun;
        if (_run) {
          try { restoreEnemyRuntimeStats(_run); } catch (e) {  }
        }
      }
      const res = orig.apply(this, arguments);
      if (wasFrontierRun && typeof updateFrontier === "function") {
        try {

          refreshActiveFrontierView();

          setTimeout(() => {
            const laterRun = saved && saved.frontierExt && saved.frontierExt.activeRun;
            if (!laterRun) return;
            const fac = FACILITIES.find((f) => f.id === laterRun.facilityId);
            if (!fac) return;

            if (laterRun.roundJustCleared) {
              showRoundClearedModal(fac);
              return;
            }

            if (isPikeFacility(fac)
                && laterRun.pikeRoom >= 1
                && laterRun.pikeRoom <= PIKE_ROOM_COUNT) {
              openPikeRoomPreview(fac);
              return;
            }

            if (isPyramidFacility(fac) && laterRun.pyramid) {
              openPyramidFloorMap(fac);
              return;
            }

            if (isDomeFacility(fac) && (laterRun.bracketBattle || 1) > 1) {
              openDomeBracketPreview(fac);
              return;
            }

            const perRound = battlesPerRound(fac);
            if (perRound > 1
                && !isPikeFacility(fac)
                && !isDomeFacility(fac)
                && !isPyramidFacility(fac)
                && (laterRun.battleInRound || 1) > 1
                && (laterRun.battleInRound || 1) <= perRound) {

              if (isFactoryFacility(fac) && Array.isArray(laterRun.pendingFactorySwap)) {
                openFactorySwapModal(fac);
                return;
              }
              openSimulatedFight(fac);
              return;
            }
          }, 80);
        } catch (e) {
          console.error("[frontier-ext] frontier redirect failed:", e);
        }
      }
      return res;
    };
  }

  function installExitPkmnTeamBlock() {
    if (typeof window.exitPkmnTeam !== "function") {
      setTimeout(installExitPkmnTeamBlock, 200);
      return;
    }
    if (window.__frontierExtExitPkmnTeamHooked) return;
    window.__frontierExtExitPkmnTeamHooked = true;
    const orig = window.exitPkmnTeam;
    window.exitPkmnTeam = function () {
      try {
        const inRun = typeof saved !== "undefined" && saved &&
                      saved.frontierExt && saved.frontierExt.activeRun;
        const stagedForRunCombat = inRun && saved.currentAreaBuffer === RUN_AREA_ID;
        if (stagedForRunCombat) {

          return;
        }
      } catch (e) {  }
      return orig.apply(this, arguments);
    };
  }

  function installEnemyIvHpHook() {
    if (typeof window.setWildPkmn !== "function") {
      setTimeout(installEnemyIvHpHook, 150);
      return;
    }
    if (window.__frontierExtEnemyIvHpHooked) return;
    window.__frontierExtEnemyIvHpHooked = true;
    const orig = window.setWildPkmn;
    const globalEval = eval;
    window.setWildPkmn = function () {
      const res = orig.apply(this, arguments);
      try {

        if (typeof saved !== "object" || !saved) return res;
        const inRunArea = saved.currentArea === RUN_AREA_ID
                       || saved.currentAreaBuffer === RUN_AREA_ID;
        if (!inRunArea) return res;
        const run = saved.frontierExt && saved.frontierExt.activeRun;
        if (!run) return res;
        const facility = FACILITIES.find((f) => f.id === run.facilityId);
        if (!facility) return res;
        const diff = computeRunDifficulty(run.round + 1, facility);
        const mult = Math.pow(1.1, Math.max(0, Math.min(6, diff.ivRating | 0)));
        if (mult === 1) return res;
        globalEval("wildPkmnHp = wildPkmnHp * " + mult);
        globalEval("wildPkmnHpMax = wildPkmnHpMax * " + mult);
        if (typeof updateWildPkmn === "function") updateWildPkmn();
      } catch (e) { console.error("[frontier-ext] enemy IV HP scale failed:", e); }
      return res;
    };
  }

  function installCombatHook() {
    if (typeof window.leaveCombat !== "function") {
      setTimeout(installCombatHook, 200);
      return;
    }
    if (window.__frontierExtLeaveCombatHooked) return;
    window.__frontierExtLeaveCombatHooked = true;
    const orig = window.leaveCombat;
    window.leaveCombat = function () {
      const wasFrontierRun = typeof saved !== "undefined" && saved &&
                             saved.currentArea === RUN_AREA_ID;

      const wasVictory = wasFrontierRun &&
                         areas[RUN_AREA_ID] &&
                         areas[RUN_AREA_ID].defeated === true;

      if (wasFrontierRun && wasVictory) {
        try { snapshotPikePyramidHp(); }
        catch (e) { console.error("[frontier-ext] pike snapshot failed:", e); }
      }
      const res = orig.apply(this, arguments);
      if (wasFrontierRun) {
        try {

          const rejoinBtn = document.getElementById("area-rejoin");
          if (rejoinBtn) rejoinBtn.style.display = "none";
          if (wasVictory) onRunVictory();
          else onRunDefeat();

          restoreDomeSelection();
          const r = saved.frontierExt && saved.frontierExt.activeRun;
          if (r) r.domeSelection = [];

        } catch (e) {
          console.error("[frontier-ext] post-combat failed:", e);
        }
      }
      return res;
    };
  }

  const HOENN_TAB_ID = "frontier-hoenn-tab";
  const HOENN_LISTING_ID = "frontier-hoenn-listing";

  function ensureHoennListing() {
    let el = document.getElementById(HOENN_LISTING_ID);
    if (el) return el;
    const frontierListing = document.getElementById("frontier-listing");
    if (!frontierListing || !frontierListing.parentNode) return null;
    el = document.createElement("div");
    el.id = HOENN_LISTING_ID;
    el.style.display = "none";
    frontierListing.parentNode.insertBefore(el, frontierListing.nextSibling);
    return el;
  }

  function buildHoennTabButton(lang, active) {
    const btn = document.createElement("div");
    btn.id = HOENN_TAB_ID;
    btn.onclick = () => { if (typeof window.updateHoennBF === "function") window.updateHoennBF(); };
    if (active) {
      btn.style.cssText = "background:#6b4694; outline:solid 1px #a14dff; color:white; z-index:2;";
    }
    const label = "Hoenn BF";
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M14 2h4v2h-4zm-1 3h6v3h-6zm-2 4h10v2h-10zm1 3h8v4h-8zm-1 5h10v3h-10zm-1 4h12v3h-12zm-1 4h14v3h-14zm-1 4h16v4h-16z"/></svg>
      ${label}`;
    return btn;
  }

  function ensureHoennTabButton() {
    const sel = document.getElementById("vs-selector");
    if (!sel) return;
    if (sel.querySelector(`#${HOENN_TAB_ID}`)) return;
    const lang = "en";
    sel.appendChild(buildHoennTabButton(lang, false));
  }

  function refreshActiveFrontierView() {

    try {
      if (typeof window.__frontierExtSyncMenuLock === "function") {
        window.__frontierExtSyncMenuLock();
      }
    } catch (e) {  }
    const fe = saved && saved.frontierExt;
    const activeRun = fe && fe.activeRun;
    const pausedIds = fe && fe.pausedRuns ? Object.keys(fe.pausedRuns) : [];
    const isHoennActive = activeRun && FACILITIES.some((f) => f.id === activeRun.facilityId);
    const hasHoennPaused = pausedIds.some((id) => FACILITIES.some((f) => f.id === id));

    const hoennListing = document.getElementById(HOENN_LISTING_ID);
    const onHoennTab = !!(hoennListing && getComputedStyle(hoennListing).display !== "none");
    if ((isHoennActive || hasHoennPaused || onHoennTab) && typeof window.updateHoennBF === "function") {
      window.updateHoennBF();
    }

  }

  function installFactoryRestrictedBypass() {
    if (typeof window.injectPreviewTeam !== "function") {
      setTimeout(installFactoryRestrictedBypass, 150);
      return;
    }
    if (window.__frontierExtRestrictedBypassHooked) return;
    window.__frontierExtRestrictedBypassHooked = true;
    const orig = window.injectPreviewTeam;
    window.injectPreviewTeam = function () {
      const run = saved && saved.frontierExt && saved.frontierExt.activeRun;
      const facility = run && FACILITIES.find((f) => f.id === run.facilityId);
      const isFactoryRun = facility && isFactoryFacility(facility);
      if (!isFactoryRun || typeof move === "undefined") {
        return orig.apply(this, arguments);
      }
      const stash = [];
      for (const [k, mv] of Object.entries(move)) {
        if (mv && mv.restricted) { stash.push(k); mv.restricted = false; }
      }
      try {
        return orig.apply(this, arguments);
      } finally {
        for (const k of stash) { if (move[k]) move[k].restricted = true; }
      }
    };
  }

  function installInjection() {
    if (typeof window.updateFrontier !== "function" || typeof window.updateVS !== "function") {
      setTimeout(installInjection, 100);
      return;
    }

    ensureHoennListing();

    const origUpdateFrontier = window.updateFrontier;
    window.updateFrontier = function () {
      const res = origUpdateFrontier.apply(this, arguments);
      try {
        injectStyles();
        ensureHoennTabButton();
        const hoennListing = document.getElementById(HOENN_LISTING_ID);
        if (hoennListing) {
          hoennListing.innerHTML = "";
          hoennListing.style.display = "none";
        }
        const frontierListing = document.getElementById("frontier-listing");
        const vsListing = document.getElementById("vs-listing");
        if (frontierListing) frontierListing.style.display = "";
        if (vsListing) vsListing.style.display = "none";

      } catch (e) {
        console.error("[frontier-ext] updateFrontier hook failed:", e);
      }
      return res;
    };

    const origUpdateVS = window.updateVS;
    window.updateVS = function () {
      const res = origUpdateVS.apply(this, arguments);
      try {
        injectStyles();
        ensureHoennTabButton();
        const hoennListing = document.getElementById(HOENN_LISTING_ID);
        if (hoennListing) {
          hoennListing.innerHTML = "";
          hoennListing.style.display = "none";
        }
        const frontierListing = document.getElementById("frontier-listing");
        const vsListing = document.getElementById("vs-listing");
        if (vsListing) vsListing.style.display = "";
        if (frontierListing) frontierListing.style.display = "none";

      } catch (e) {
        console.error("[frontier-ext] updateVS hook failed:", e);
      }
      return res;
    };

    window.updateHoennBF = function () {
      try {
        const lang = "en";
        ensureSaveSlot();
        sanitizeNullSlots();
        recoverCorruptedDomeTeam();
        injectStyles();

        const sel = document.getElementById("vs-selector");
        const vsListing = document.getElementById("vs-listing");
        const frontierListing = document.getElementById("frontier-listing");
        const hoennListing = ensureHoennListing();
        if (!sel || !hoennListing) return;

        sel.innerHTML = "";
        const trainersBtn = document.createElement("div");
        trainersBtn.onclick = () => window.updateVS && window.updateVS();
        trainersBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.618 15.27l.817.788q.242.242.565.242t.566-.242l.816-.789h1.08q.343 0 .575-.232t.232-.575v-1.08l.789-.816q.242-.243.242-.566t-.242-.565l-.789-.817v-1.08q0-.343-.232-.575t-.575-.232h-1.083l-.95-.945q-.183-.186-.427-.186t-.43.186l-.95.945H9.538q-.344 0-.576.232t-.232.576v1.08l-.789.816Q7.7 11.677 7.7 12t.242.566l.789.816v1.08q0 .343.232.575t.576.232zM9.066 19h-2.45q-.667 0-1.141-.475T5 17.386v-2.451l-1.79-1.803q-.237-.243-.349-.534t-.111-.594q0-.301.112-.596t.347-.538L5 9.066v-2.45q0-.667.475-1.141T6.615 5h2.451l1.803-1.79q.243-.237.534-.349t.594-.111q.301 0 .596.112t.538.347L14.934 5h2.45q.667 0 1.142.475T19 6.615v2.451l1.79 1.803q.237.243.349.534t.111.594q0 .301-.111.596t-.348.538L19 14.934v2.45q0 .667-.475 1.142t-1.14.474h-2.451l-1.803 1.79q-.243.237-.534.349t-.594.111q-.301 0-.596-.111t-.538-.348zm.433-1l2.059 2.058q.173.173.442.173t.442-.173L14.502 18h2.882q.27 0 .443-.173t.173-.442V14.5l2.058-2.059q.173-.173.173-.442t-.173-.442L18 9.498V6.617q0-.27-.173-.443T17.385 6H14.5l-2.059-2.058Q12.27 3.77 12 3.77t-.442.173L9.498 6H6.617q-.27 0-.443.173T6 6.616v2.883l-2.058 2.059q-.173.173-.173.442t.173.442L6 14.502v2.882q0 .27.173.443t.443.173zM12 12"/></svg>
          ${"Trainers"}`;
        sel.appendChild(trainersBtn);
        const bfBtn = document.createElement("div");
        bfBtn.onclick = () => window.updateFrontier && window.updateFrontier();
        bfBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M17 22H7a2 2 0 0 1-2-2v-8.818a.6.6 0 0 0-.1-.333L3.1 8.15a.6.6 0 0 1-.1-.333V2.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V2.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V2.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v5.218a.6.6 0 0 1-.1.333l-1.8 2.698a.6.6 0 0 0-.1.333V20a2 2 0 0 1-2 2Z"/></svg>
          ${"Battle Frontier"}`;
        sel.appendChild(bfBtn);
        sel.appendChild(buildHoennTabButton(lang, true));

        if (vsListing)       { vsListing.innerHTML = "";       vsListing.style.display = "none"; }
        if (frontierListing) { frontierListing.innerHTML = ""; frontierListing.style.display = "none"; }
        hoennListing.style.display = "";

        if (!isUnlocked()) {
          hoennListing.innerHTML = "";
          hoennListing.style.display = "none";
          const hdr = document.getElementById("vs-menu-header");
          if (hdr) hdr.innerHTML = "";
          try { showLockedTooltip(); } catch (e) {  }
          return;
        }

        const header = document.getElementById("vs-menu-header");
        if (header) {

          header.style.backgroundImage = "url(img/bg/zdc.png)";
          const helpLabel = "Hoenn BF";

          header.innerHTML = `
            <div style="display:flex; gap:0.2rem">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" style="vertical-align:middle"><path fill="currentColor" d="M14 2h4v2h-4zm-1 3h6v3h-6zm-2 4h10v2h-10zm1 3h8v4h-8zm-1 5h10v3h-10zm-1 4h12v3h-12zm-1 4h14v3h-14zm-1 4h16v4h-16z"/></svg>
                ${helpLabel}
              </span>
              <span class="header-help" data-help="FrontierExt:__section__"><svg style="opacity:0.8; pointer-events:none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><g opacity="0.2"><path d="M12.739 17.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill-rule="evenodd" d="M10.71 5.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 1 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.71 9.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V11.08c0-.8.649-1.45 1.45-1.45" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.239 8.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5" clip-rule="evenodd"/></g><path d="M11 16.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"/><path fill-rule="evenodd" d="M9.71 4.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V10.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.638 8.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"/></g></svg></span>
            </div>`;
        }

        hoennListing.innerHTML = "";
        hoennListing.appendChild(buildDivider());
        for (const facility of FACILITIES) {
          hoennListing.appendChild(buildTile(facility));
        }
      } catch (e) {
        console.error("[frontier-ext] updateHoennBF failed:", e);
      }
    };

    ensureHoennTabButton();
  }

  function bootstrap() {

    try { injectStyles(); } catch (e) { console.error("[frontier-ext] injectStyles failed:", e); }
    installInjection();
    installFactoryRestrictedBypass();
    installHelpTooltip();
    installCombatHook();
    installEnemyIvHpHook();

    try { installEnemyContextHook();          } catch (e) { console.error("[frontier-ext] installEnemyContextHook failed:", e); }
    try { installEnemyContextLeaveHook();     } catch (e) { console.error("[frontier-ext] installEnemyContextLeaveHook failed:", e); }
    try { installEnemyContextMoveBuffHook();  } catch (e) { console.error("[frontier-ext] installEnemyContextMoveBuffHook failed:", e); }
    installExitPkmnTeamBlock();
    installExitRedirect();
    installVSLeakFilter();
    installPalaceMoveHook();
    installPalaceEnemyHook();
    installEnemyLifeOrbDrainHook();
    installArenaCombatHooks();
    installArenaSwapFreeze();
    installArenaShouldCombatStopHook();
    installArenaSwitchBlock();
    installTeamSanitizerHooks();
    installDomeTeamFilter();
    installPikePyramidHpRestoreHook();
    installPyramidEquipSync();
    installPyramidItemMaxLevel();
    installPyramidStatusStickHook();
    installRunLockTooltipHook();
    installMenuLockDuringRun();
    installTeamMenuLockHook();
    installTeamMenuObserver();
    installTeamLockEventFilter();
    installFrontierRightClickBlock();
    installLivePillHooks();

    try {
      ensureSaveSlot();
      sanitizeNullSlots();
      recoverCorruptedDomeTeam();
    } catch (e) {  }

    const forfeitOnBoot = () => {
      try {
        if (!saved || !saved.frontierExt) return false;
        const run = saved.frontierExt.activeRun;
        if (!run) return true;

        if (run.pikeTeam) {
          for (const sl of ["slot1", "slot2", "slot3"]) {
            if (run.pikeTeam[sl]) run.pikeTeam[sl].healJustApplied = false;
          }
        }

        if (run.roundJustCleared) {
          if (!saved.frontierExt.pausedRuns) saved.frontierExt.pausedRuns = {};
          saved.frontierExt.pausedRuns[run.facilityId] = run;
          saved.frontierExt.activeRun = null;
          try { restoreEnemyRuntimeStats(run); } catch (e) {  }
          const facP = FACILITIES.find((f) => f.id === run.facilityId);
          if (facP && isFactoryFacility(facP)) {
            try { cleanupFactoryRun(run); } catch (e) {  }
          }

          if (facP && isPyramidFacility(facP)) {
            try { cleanupPyramidPreviewItems(run); } catch (e) {  }
          }
          try { removeFrontierTeamLock(); } catch (e) {  }
          return true;
        }
        const finalRound = run.round || 0;
        if (finalRound > (saved.frontierExt.maxStreaks[run.facilityId] || 0)) {
          saved.frontierExt.maxStreaks[run.facilityId] = finalRound;
        }
        saved.frontierExt.streaks[run.facilityId] = 0;
        saved.frontierExt.activeRun = null;
        try { restoreEnemyRuntimeStats(run); } catch (e) {  }
        const fac = FACILITIES.find((f) => f.id === run.facilityId);
        if (fac && isFactoryFacility(fac)) {
          try { cleanupFactoryRun(run); } catch (e) {  }
        }
        if (fac && isPyramidFacility(fac)) {
          try { cleanupPyramidPreviewItems(run); } catch (e) {  }
        }
        try { removeFrontierTeamLock(); } catch (e) {  }
        return true;
      } catch (e) { return false; }
    };
    let forfeitAttempts = 0;
    const forfeitRetry = () => {
      if (forfeitOnBoot()) return;
      if (++forfeitAttempts < 10) setTimeout(forfeitRetry, 250);
    };
    forfeitRetry();

    const installLoadGameIntegrityHook = () => {
      if (typeof window.loadGame !== "function") {
        setTimeout(installLoadGameIntegrityHook, 150);
        return;
      }
      if (window.__frontierExtLoadGameHooked) return;
      window.__frontierExtLoadGameHooked = true;
      const orig = window.loadGame;
      window.loadGame = function () {
        const res = orig.apply(this, arguments);
        setTimeout(() => {
          try {
            const processed = forfeitOnBoot();
            if (processed && typeof saveGame === "function") {

              saveGame();
            }
            try { refreshActiveFrontierView(); } catch (e) {  }
          } catch (e) {  }
        }, 50);
        return res;
      };
    };
    installLoadGameIntegrityHook();

    let attempts = 0;
    const retry = () => {
      attempts++;
      try {
        const healed = sanitizeNullSlots();
        if (healed > 0 && typeof updatePreviewTeam === "function") {

          try { updatePreviewTeam(); } catch (e) {  }
        }
      } catch (e) {  }
      if (attempts < 6) setTimeout(retry, 500);
    };
    setTimeout(retry, 300);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }

  window.__frontierExt = {
    facilities: FACILITIES,
    SILVER_ROUND,
    GOLD_ROUND,
    RUN_AREA_ID,
    ensureSaveSlot,
    buildTile,
    openFacilityPreview,
    fillHoennSectionHelp,
    generateTrainer,
    pickMovesetFor,
    pickFromPool,
    GENETIC_MOVES_FOR_ALL,
    handleRunAction,
    launchCombat,
    buildEphemeralRunArea,
    onRunVictory,
    onRunDefeat,
    isUnlocked,

    classifyMoveId,
    pickSlotByNature,
    pickSlotByNatureGeneric,
    simulateNatureFor,
    isInPalaceRun,
    NATURE_STYLE_WEIGHTS,

    isPyramidFacility,
    isInPyramidRun,
    generatePyramidFloor,
    openPyramidFloorMap,
    pyramidMovePlayerTo,
    pyramidResolveTile,
    pyramidAdvanceFloor,
    pyramidAfterEvent,
    PYR_TILES,
    PYR_GRID_SIZE,

    isFactoryFacility,
    generateFactoryRentalPool,
    openFactoryRentalSelection,
    toggleFactorySelection,
    confirmFactorySelection,
    openFactorySwapModal,
    confirmFactorySwap,
    applyFactoryMoves,
    restoreFactoryMoves,
    enterFactoryPreviewSlot,
    restoreFactoryPreviewSlot,
    cleanupFactoryRun,
    FACTORY_POOL_SIZE,
    FACTORY_TEAM_SIZE,
    FACTORY_PREVIEW_SLOT,

    isArenaFacility,
    isInArenaRun,
    arenaGetState,
    arenaResetState,
    arenaRenderJudge,
    arenaCheckJudge,
    arenaReadHpRatios,
    showArenaVerdict,
    arenaBiasPoolBySpeed,
    arenaBiasNature,
    ARENA_TURNS_PER_SIDE,

    isDomeFacility,
    ensureBracketForDome,
    openDomeBracketPreview,
    openDomePokemonSelection,
    applyDomeSelection,
    restoreDomeSelection,
    installDomeTeamFilter,
    recoverCorruptedDomeTeam,
    sanitizeNullSlots,
    DOME_BRACKET_SIZE,
    DOME_ACTIVE_SIZE,

    isPikeFacility,
    openPikeRoomPreview,
    rollPikeDoors,
    rollSinglePikeDoor,
    applyPikeDoor,
    applyPikeHealRatio,
    applyPikeTrap,
    pikeAdvanceAfterEvent,
    snapshotPikePyramidHp,
    applyPikePyramidHpState,
    initPikePyramidTeamFromPreview,
    migratePikeState,
    migratePikePyramidTeam,
    normalizePikePyramidStatus,

    showRoundClearedModal,

    applyFrontierTeamLock,
    removeFrontierTeamLock,
    isFrontierRunActive,
    isFrontierTiedSlotActive,
    isFrontierMidRound,

    pikeDebug: false,
    PIKE_ROOM_COUNT,
    PIKE_DOOR_COUNT,
    PIKE_PYRAMID_STATUSES,
    PIKE_PYRAMID_STATUS_TURNS,
    CURTAIN_SVG,
    difficultyMultiplier,
    getBossRoundInfo,
    silverRoundFor,
    goldRoundFor,
    postGoldEveryFor,
    nextGoalRoundFor,
    battlesPerRound,

    tierForRound,
    computeRunDifficulty,
    applyEnemyRuntimeStats,
    restoreEnemyRuntimeStats,

    cloneEnemyForCombat,
    destroyEnemyClone,
    destroyAllEnemyClones,
    filterBannedEnemyMoves,
    getMegaStonesForSpecies,
    isFacilityPostGold,
    pickAbilityForClone,
    pickItemForClone,
    applyBstInflation,
    applyItemBstInflation,
    BANNED_ENEMY_MOVES,
    get ITEM_POOL_STANDARD() { return __ITEM_POOL_STANDARD.slice(); },
    get ACTIVE_ABILITY_IDS() { return __ACTIVE_ABILITY_IDS.slice(); },
    get activeEnemyCloneIds() { return Array.from(__enemyCloneIds); },
    pickMovesetFor,
    simulateNatureFor,
    buildMoveCategories,
    weatherFromAbility,
    FACILITIES,

    getPool,
    getPoolForFacility,
    resetPoolCache,
    resetActiveRun,
    bstTotal,
    TIER_BST,
    debugPool,

    resetAll: () => {
      if (typeof saved === "object" && saved) saved.frontierExt = null;
      ensureSaveSlot();
      refreshActiveFrontierView();
    } };
})();
