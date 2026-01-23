



const ability = {}


//tier 1

ability.hydratation = {  
    rename: `hydration`,
    type: [`water`,`grass`],
    rarity: 1,
    info: function() {return `Prevents negative status effects while on ${tagRainy} weather`},
}

ability.sandVeil = {  
    type: [`ground`],
    rarity: 1,
    info: function() {return `Prevents negative status effects while on ${tagSandstorm} weather`},
}

ability.snowCloak = {  
    type: [`ice`],
    rarity: 1,
    info: function() {return `Prevents negative status effects while on ${tagHail} weather`},
}



ability.grabGuard = {
    type: [`fighting`],
    rarity: 1,
    info: function() {return `Halves the damage received of Fighting-type moves`},
}

ability.waterGuard = {
    type: [`water`],
    rarity: 1,
    info: function() {return `Halves the damage received of Water-type moves`},
}

ability.flameGuard = {
    type: [`fire`],
    rarity: 1,
    info: function() {return `Halves the damage received of Flame-type moves`},
}

ability.curseGuard = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return `Halves the damage received of Ghost-type moves`},
}

ability.poisonGuard = {
    type: [`poison`],
    rarity: 1,
    info: function() {return `Halves the damage received of Poison-type moves`},
}

ability.iceGuard = {
    type: [`ice`],
    rarity: 1,
    info: function() {return `Halves the damage received of Ice-type moves`},
}

ability.psychicGuard = {
    type: [`psychic`],
    rarity: 1,
    info: function() {return `Halves the damage received of Psychic-type moves`},
}

ability.fairyGuard = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return `Halves the damage received of Fairy-type moves`},
}

ability.leafGuard = {
    type: [`grass`],
    rarity: 1,
    info: function() {return `Halves the damage received of Grass-type moves`},
}

ability.plainGuard = {
    type: [`normal`],
    rarity: 1,
    info: function() {return `Halves the damage received of Normal-type moves`},
}

ability.sinisterGuard = {
    type: [`dark`],
    rarity: 1,
    info: function() {return `Halves the damage received of Dark-type moves`},
}

ability.steelGuard = {
    type: [`steel`],
    rarity: 1,
    info: function() {return `Halves the damage received of Steel-type moves`},
}

ability.dragonGuard = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return `Halves the damage received of Dragon-type moves`},
}

ability.bugGuard = {
    type: [`bug`],
    rarity: 1,
    info: function() {return `Halves the damage received of Bug-type moves`},
}

ability.rockGuard = {
    type: [`rock`],
    rarity: 1,
    info: function() {return `Halves the damage received of Rock-type moves`},
}

ability.groundGuard = {
    type: [`ground`],
    rarity: 1,
    info: function() {return `Halves the damage received of Ground-type moves`},
}

ability.flyingGuard = {
    type: [`flying`],
    rarity: 1,
    info: function() {return `Halves the damage received of Flying-type moves`},
}

ability.insomnia = {
    type: [`all`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagSleep}`},
}

ability.immunity = {
    type: [`all`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagPoisoned}`},
}

ability.limber = {
    type: [`all`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagParalysis}`},
}

ability.ownTempo = {
    type: [`all`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagConfused}`},
}

ability.magmaArmor = {
    type: [`fire`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagFreeze}`},
}

ability.waterVeil = {
    type: [`water`, `ice`],
    rarity: 1,
    info: function() {return `Grants immunity to ${tagBurn}`},
}

ability.marvelScale = {
    type: [`water`, `dragon`],
    rarity: 1,
    info: function() {return `Increases Defense by 50% if afflicted with a status effect`},
}

ability.livingShield = {
    type: [`bug`,`grass`],
    rarity: 1,
    info: function() {return `Increases Special Defense by 50% if afflicted with a status effect`},
}


ability.overgrow = {
    type: [`grass`],
    rarity: 1,
    info: function() {return `Increases the power of Grass-type moves by 30% below 50% HP`},
}

ability.blaze = {
    type: [`fire`],
    rarity: 1,
    info: function() {return `Increases the power of Fire-type moves by 30% below 50% HP`},
}

ability.swarm = {
    type: [`bug`],
    rarity: 1,
    info: function() {return `Increases the power of Bug-type moves by 30% below 50% HP`},
}

ability.torrent = {
    type: [`water`],
    rarity: 1,
    info: function() {return `Increases the power of Water-type moves by 30% below 50% HP`},
}

ability.bastion = {
    type: [`steel`],
    rarity: 1,
    info: function() {return `Increases the power of Steel-type moves by 30% below 50% HP`},
}

ability.average = {
    type: [`normal`],
    rarity: 1,
    info: function() {return `Increases the power of Normal-type moves by 30% below 50% HP`},
}

ability.resolve = {
    type: [`fighting`],
    rarity: 1,
    info: function() {return `Increases the power of Fighting-type moves by 30% below 50% HP`},
}

ability.mistify = {
    type: [`psychic`],
    rarity: 1,
    info: function() {return `Increases the power of Psychic-type moves by 30% below 50% HP`},
}

ability.hexerei = {
    type: [`ghost`],
    rarity: 1,
    info: function() {return `Increases the power of Ghost-type moves by 30% below 50% HP`},
}

ability.glimmer = {
    type: [`fairy`],
    rarity: 1,
    info: function() {return `Increases the power of Fairy-type moves by 30% below 50% HP`},
}

ability.skyward = {
    type: [`flying`],
    rarity: 1,
    info: function() {return `Increases the power of Flying-type moves by 30% below 50% HP`},
}

ability.draconic = {
    type: [`dragon`],
    rarity: 1,
    info: function() {return `Increases the power of Dragon-type moves by 30% below 50% HP`},
}

ability.noxious = {
    type: [`poison`],
    rarity: 1,
    info: function() {return `Increases the power of Poison-type moves by 30% below 50% HP`},
}

ability.solid = {
    type: [`rock`],
    rarity: 1,
    info: function() {return `Increases the power of Rock-type moves by 30% below 50% HP`},
}

ability.rime = {
    type: [`ice`],
    rarity: 1,
    info: function() {return `Increases the power of Ice-type moves by 30% below 50% HP`},
}

ability.voltage = {
    type: [`electric`],
    rarity: 1,
    info: function() {return `Increases the power of Electric-type moves by 30% below 50% HP`},
}

ability.hyperCutter = {
    type: [`bug`],
    rarity: 1,
    info: function() {return `Prevents the lowering of the Attack stat`},
}

ability.bigPecks = {
    type: [`flying`],
    rarity: 1,
    info: function() {return `Prevents the lowering of the Defense stat`},
}

ability.wonderSkin = {
    type: [`all`],
    rarity: 1,
    info: function() {return `50% chance for received Status Effects to miss`},
}


//tier 2

ability.synchronize = {
    type: [`all`],
    rarity: 2,
    info: function() {return `Inflicts active status effects to the attacker aswell`},
}

ability.solarPower = {  
    type: [`fire`,`grass`],
    rarity: 2,
    info: function() {return `Increases Special Attack by 50% on ${tagSunny} weather`},
}

ability.iceBody = {  
    type: [`ice`],
    rarity: 2,
    info: function() {return `Increases Defense by 50% on ${tagHail} weather`},
}

ability.rainDish = {  
    type: [`water`, `grass`],
    rarity: 2,
    info: function() {return `Increases Special Attack by 50% on ${tagRainy} weather`},
}

ability.sandForce = {  
    type: [`ground`],
    rarity: 2,
    info: function() {return `Increases Attack by 50% on ${tagSandstorm} weather`},
}

ability.static = {
    type: [`electric`],
    rarity: 2,
    info: function() {return `10% chance to inflict ${tagParalysis} when attacked`},
}

ability.flameBody = {
    type: [`fire`],
    rarity: 2,
    info: function() {return `10% chance to inflict ${tagBurn} when attacked`},
}

ability.poisonPoint = {
    type: [`poison`],
    rarity: 2,
    info: function() {return `10% chance to inflict ${tagPoisoned} when attacked`},
}

ability.strangeCharm = {
    type: [`psychic`, `fairy`],
    rarity: 2,
    info: function() {return `10% chance to inflict ${tagConfused} when attacked`},
}

ability.effectSpore = {
    type: [`grass`],
    rarity: 2,
    info: function() {return `5% chance to inflict ${tagSleep} when attacked`},
}

ability.glacialBody = {
    type: [`ice`],
    rarity: 2,
    info: function() {return `5% chance to inflict ${tagFreeze} when attacked`},
}

ability.naturalCure = {
    type: [`all`],
    rarity: 2,
    info: function() {return `Status effects are cleared when switching Pokemon`},
}

ability.technician = {
    type: [`all`],
    rarity: 2,
    info: function() {return `Multiplies by 1.5x the base damage of moves with equal or less than 60 power`},
}



ability.scrappy = {
    type: [`normal`, `fighting`],
    rarity: 2,
    info: function() {return `Ghost-type pokemon can be hit with Normal and Fighting-type moves`},
}

ability.unaware = {
    type: [`all`],
    rarity: 2,
    info: function() {return `When attacking, ignores the target's stat changes`},
}

ability.magicGuard = {
    type: [`psychic`, `fairy`],
    rarity: 2,
    info: function() {return `Can only take damage from direct damaging moves`},
}

ability.voltAbsorb = {
    type: [`electric`],
    rarity: 2,
    info: function() {return `Nullifies received Electric-type moves`},
}

ability.waterAbsorb = {
    type: [`water`],
    rarity: 2,
    info: function() {return `Nullifies received Water-type moves`},
}

ability.flareAbsorb = {
    type: [`fire`],
    rarity: 2,
    info: function() {return `Nullifies received Fire-type moves`},
}

ability.curseAbsorb = {
    type: [`dark`],
    rarity: 2,
    info: function() {return `Nullifies received Ghost-type moves`},
}

ability.poisonAbsorb = {
    type: [`poison`],
    rarity: 2,
    info: function() {return `Nullifies received Poison-type moves`},
}

ability.frostAbsorb = {
    type: [`ice`],
    rarity: 2,
    info: function() {return `Nullifies received Ice-type moves`},
}

ability.psychicAbsorb = {
    type: [`psychic`],
    rarity: 2,
    info: function() {return `Nullifies received Psychic-type moves`},
}

ability.lightAbsorb = {
    type: [`fairy`],
    rarity: 2,
    info: function() {return `Nullifies received Fairy-type moves`},
}

ability.growthAbsorb = {
    type: [`grass`],
    rarity: 2,
    info: function() {return `Nullifies received Grass-type moves`},
}




ability.strongJaw = {
    type: [`dark`],
    rarity: 2,
    info: function() {return `"Fang"-related moves have their base damage multiplied by x2 <span style="opacity:0.7">(${joinWithAnd(movesAffectedByStrongJaw)})</span>`},
}

ability.toughClaws = {
    type: [`dragon`],
    rarity: 2,
    info: function() {return `"Claw"-related moves have their base damage multiplied by x2 <span style="opacity:0.7">(${joinWithAnd(movesAffectedByToughClaws)})</span>`},
}

ability.ironFist = {
    type: [`fighting`],
    rarity: 2,
    info: function() {return `"Punch"-related moves have their base damage multiplied by x1.5 <span style="opacity:0.7">(${joinWithAnd(movesAffectedByIronFist)})</span>`},
}



ability.rivalry = {
    type: [`dragon`, `dark`],
    rarity: 2,
    info: function() {return `Multiplies the damage by x1.5 when the opposite Pokemon shares a type`},
}

ability.pickPocket = {
    type: [`dark`, `flying`, `normal`],
    rarity: 2,
    info: function() {return `Increases the weight of rare item drops by 1% (Can stack). Works always for everyone regardless of the user`},
}

ability.brittleArmor = {
    type: [`ice`,`rock`],
    rarity: 2,
    info: function() {return `Increases Special Attack by 50% if afflicted with a status effect`},
}

ability.grassyPelt = {  
    type: [`grass`],
    rarity: 2,
    info: function() {return `Prevents negative stat changes and status effects while on ${tagRainy} weather`},
}

ability.sandyPelt = {  
    type: [`ground`],
    rarity: 2,
    info: function() {return `Prevents negative stat changes and status effects while on ${tagSunny} weather`},
}

ability.moistPelt = {  
    type: [`water`],
    rarity: 2,
    info: function() {return `Prevents negative stat changes and status effects while on ${tagSandstorm} weather`},
}

ability.fieryPelt = {  
    type: [`fire`],
    rarity: 2,
    info: function() {return `Prevents negative stat changes and status effects while on ${tagHail} weather`},
}

ability.pixiePelt = {  
    type: [`fairy`],
    rarity: 2,
    info: function() {return `Prevents negative stat changes and status effects while on ${tagFoggy} weather`},
}

ability.chlorophyll  = {  
    type: [`grass`],
    rarity: 2,
    info: function() {return `Increases Speed by 50% on ${tagSunny} weather`},
}





//tier 3

//tier 3 names based on gemini, pisces, o luna, mars, etc

ability.climaTact  = {  
    type: [`fairy`],
    rarity: 3,
    info: function() {return `Weather changed by the user is extended by 15 turns`},
}

ability.intangible  = {  
    type: [`dark`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% on ${tagFoggy} weather`},
}

ability.hyperconductor  = {  
    type: [`steel`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% on ${tagElectricTerrain} weather`},
}

ability.faeRush  = {  
    type: [`fairy`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% on ${tagMistyTerrain} weather`},
}

ability.moltShed  = {  
    type: [`bug`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% on ${tagGrassyTerrain} weather`},
}

ability.slushRush  = { 
    type: [`ice`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% on ${tagHail} weather`},
}

ability.swiftSwim  = { 
    type: [`water`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% on ${tagRainy} weather`},
}

ability.sandRush  = { 
    type: [`ground`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% on ${tagSandstorm} weather`},
}




ability.intimidate = {
    type: [`dragon`, `ghost`],
    rarity: 3,
    info: function() {return `Decreases enemy Attack by 50% when the opposing Pokemon enters the battle`},
}

ability.dauntingLook = {
    type: [`bug`, `fire`, `fighting`],
    rarity: 3,
    info: function() {return `Decreases enemy Special Attack by 50% when the opposing Pokemon enters the battle`},
}

ability.unburden = {
    type: [`normal`, `fighting`, `flying`],
    rarity: 3,
    info: function() {return `Increases Speed by 50% if no item is being held`},
}

ability.moxie = {
    type: [`dark`],
    rarity: 3,
    info: function() {return `Increases Attack by 50% when defeating a Pokemon`},
}

ability.strategist = {
    type: [`psychic`],
    rarity: 3,
    info: function() {return `Increases Special Attack by 50% when defeating a Pokemon`},
}

ability.sheerForce = {
    type: [`ground`, `steel`, `rock`],
    rarity: 3,
    info: function() {return `Positive secondary effect of damaging moves are removed, and their damage is multiplied by x1.2`},
}

ability.levitate = {
    type: [`electric`, `steel`],
    rarity: 3,
    info: function() {return `Grants immunity to Ground-type moves`},
}

ability.thickFat = {
    type: [`normal`, `ice`],
    rarity: 3,
    info: function() {return `Halves damage received from Fire and Ice-type moves`},
}

ability.adaptability = {
    type: [`all`],
    rarity: 3,
    info: function() {return `Multiplies Same-Type-Attack-Bonus by x1.2`},
}

ability.noGuard = {
    type: [`all`],
    rarity: 3,
    info: function() {return `Moves always hit regardless of the type`},
}

ability.multiscale = {
    type: [`water`],
    rarity: 3,
    info: function() {return `Damage received is halved when over 50% HP`},
}

ability.guts = {
    type: [`normal`],
    rarity: 3,
    info: function() {return `Increases Attack by 50% if afflicted with a status effect, and nullifies the stat redution of the condition`},
}

ability.skillLink = {
    type: [`bug`,`normal`],
    rarity: 3,
    info: function() {return `Moves that hit multiple times always hit their maximum amount`},
}

ability.sharpness = {
    type: [`steel`],
    rarity: 3,
    info: function() {return `"Sharp"-related moves have their base damage multiplied by x1.5 <span style="opacity:0.7">(${joinWithAnd(movesAffectedBySharpness)})</span>`},
}

ability.angerPoint = {
    type: [`fire`],
    rarity: 3,
    info: function() {return `Increase Attack by 100% when hit with a super-effective move`},
}

ability.justified = {
    type: [`fighting`],
    rarity: 3,
    info: function() {return `Increase Special Attack by 100% when hit with a super-effective move`},
}

ability.filter = {
    type: [`bug`,`ground`],
    rarity: 3,
    info: function() {return `Super-effective damage taken multiplier is halved`},
}

ability.reckless = {
    type: [`flying`],
    rarity: 3,
    info: function() {return `Moves that execute slower than usual have their move power multiplied by x1.5`},
}

ability.libero = {
    type: [`fairy`,`psychic`],
    rarity: 3,
    info: function() {return `Moves that execute faster than usual have their move power multiplied by x2`},
}




ability.flashElectro = {
    type: [`electric`],
    rarity: 3,
    info: function() {return `Nullifies received Electric-type moves and increases Speed by 50% after being hit with one`},
}

ability.flashAqua = {
    type: [`water`],
    rarity: 3,
    info: function() {return `Nullifies received Water-type moves and increases Speed by 50% after being hit with one`},
}

ability.flashPyro = {
    type: [`fire`],
    rarity: 3,
    info: function() {return `Nullifies received Fire-type moves and increases Speed by 50% after being hit with one`},
}

ability.flashUmbra = {
    type: [`dark`],
    rarity: 3,
    info: function() {return `Nullifies received Ghost-type moves and increases Speed by 50% after being hit with one`},
}

ability.flashVenum = {
    type: [`poison`],
    rarity: 3,
    info: function() {return `Nullifies received Poison-type moves and increases Speed by 50% after being hit with one`},
}

ability.flashCryo = {
    type: [`ice`],
    rarity: 3,
    info: function() {return `Nullifies received Ice-type moves and increases Speed by 50% after being hit with one`},
}

ability.flashPsycha = {
    type: [`psychic`],
    rarity: 3,
    info: function() {return `Nullifies received Psychic-type moves and increases Speed by 50% after being hit with one`},
}

ability.flashFae = {
    type: [`fairy`],
    rarity: 3,
    info: function() {return `Nullifies received Fairy-type moves and increases Speed by 50% after being hit with one`},
}

ability.flashHerba = {
    type: [`grass`],
    rarity: 3,
    info: function() {return `Nullifies received Grass-type moves and increases Speed by 50% after being hit with one`},
}



//hidden

ability.wonderGuard = {
    rarity: 3,
    info: function() {return `Received damage from non-Super-Effective moves are reduced by 80%`},
}

ability.tintedLens = {  
    rarity: 3,
    info: function() {return `Moves that are resisted by typing do instead normal damage`},
}

ability.prankster = {
    rarity: 3,
    info: function() {return `Ghost and Dark-type moves are x1.5 faster than usual`},
}

ability.galeWings = {
    rarity: 3,
    info: function() {return `Flying and Bug moves are x1.5 faster than usual`},
}

ability.speedBoost = {
    rarity: 3,
    info: function() {return `Increases Speed by 50% when defeating a Pokemon`},
}

ability.scorch = {
    rarity: 3,
    info: function() {return `Enemy damage over time from ${tagBurn} is doubled while this Pokemon is active`},
}

ability.corrosion = {
    rarity: 3,
    info: function() {return `Enemy damage over time from ${tagPoisoned} is doubled while this Pokemon is active`},
}

ability.dancer = {
    rarity: 3,
    info: function() {return `"Dance"-related moves are executed twice as fast <span style="opacity:0.7">(${joinWithAnd(movesAffectedByDancer)})<span>`},
}

ability.cacophony = {
    rarity: 3,
    info: function() {return `"Sound"-related moves are executed twice as fast <span style="opacity:0.7">(${joinWithAnd(movesAffectedByCacophony)})<span>`},
}

ability.megaLauncher = {
    rarity: 3,
    info: function() {return `"Pulse"-related moves have their base damage multiplied by x1.5 <span style="opacity:0.7">(${joinWithAnd(movesAffectedByMegaLauncher)})<span>`},
}

ability.metalhead = {
    rarity: 3,
    info: function() {return `"Head"-related moves have their base damage multiplied by x1.5 <span style="opacity:0.7">(${joinWithAnd(movesAffectedByMetalhead)})<span>`},
}

ability.imposter = {
    info: function() {return `Copies the positive stat increases of the enemy`},
    rarity: 3,
}

ability.toxicBoost = {
    info: function() {return `Increases the Damage dealt by x1.2 when afflicted with ${tagPoisoned}, and nullifies the damage overtime caused by it`},
    rarity: 3,
}

ability.flareBoost = {
    info: function() {return `Increases the Damage dealt by x1.2 when afflicted with ${tagBurn}, and nullifies the damage overtime caused by it`},
    rarity: 3,
}

ability.fullMetalBody = {
    info: function() {return `Prevents all stat decreases`},
    rarity: 3,
}

ability.supremeOverlord = {
    info: function() {return `Increases the Damage dealt by x1.15 for every team member defeated`},
    rarity: 3,
}

ability.gorillaTactics = {
    info: function() {return `Increases the Attack by x1.2, but prevents them from switching`},
    rarity: 3,
}

ability.beastBoost = {
    info: function() {return `Increases the highest stat of the user by 50% when defeating a Pokemon`},
    rarity: 3,
}

ability.quarkDrive = {
    info: function() {return `Increases the highest stat of the user by 50% on ${tagElectricTerrain}`},
    rarity: 3,
}

ability.protosynthesis = {
    info: function() {return `Increases the highest stat of the user by 50% on ${tagSunny} weather`},
    rarity: 3,
}

ability.drizzle = {
    info: function() {return `Changes the weather to ${tagRainy} when entering or switching into the battle`},
    rarity: 3,
}

ability.drought = {
    info: function() {return `Changes the weather to ${tagSunny} when entering or switching into the battle`},
    rarity: 3,
}

ability.sandStream = {
    info: function() {return `Changes the weather to ${tagSandstorm} when entering or switching into the battle`},
    rarity: 3,
}

ability.snowWarning = {
    info: function() {return `Changes the weather to ${tagHail} when entering or switching into the battle`},
    rarity: 3,
}

ability.somberField = {
    info: function() {return `Changes the weather to ${tagFoggy} when entering or switching into the battle`},
    rarity: 3,
}

ability.electricSurge = {
    info: function() {return `Changes the weather to ${tagElectricTerrain} when entering or switching into the battle`},
    rarity: 3,
}

ability.grassySurge = {
    info: function() {return `Changes the weather to ${tagGrassyTerrain} when entering or switching into the battle`},
    rarity: 3,
}

ability.mistySurge = {
    info: function() {return `Changes the weather to ${tagMistyTerrain} when entering or switching into the battle`},
    rarity: 3,
}

ability.sereneGrace = {
    info: function() {return `Secondary effect of moves are executed twice`},
    rarity: 3,
}

ability.hugePower = {
    info: function() {return `Attack stat is multiplied by x2`},
    rarity: 3,
}

ability.contrary = {
    info: function() {return `Inverts stat changes. Positive changes become negative, and negative become positive`},
    rarity: 3,
}

ability.protean = {
    info: function() {return `Changes the type of the user to match the type of the used move`},
    rarity: 3,
}

ability.simple = {
    info: function() {return `Stat changes on the user are boosted by a stage`},
    rarity: 3,
}

ability.parentalBond = {
    info: function() {return `Moves are executed a second time, at half power`},
    rarity: 3,
}

ability.moody = {
    info: function() {return `Every turn, raises two stats by 100% for one turn`},
    rarity: 3,
}

ability.darkAura = {
    info: function() {return `Multiplies by x1.1 the power of Dark-type moves of all team members`},
    rarity: 3,
}


ability.normalize = {
    info: function() {return `All moves become Normal-type moves, and their power is multiplied by x1.2`},
    rarity: 3,
}


ability.ferrilate = {
    info: function() {return `Normal-type moves become Steel-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.glaciate = {
    rename: `refrigerate`,
    info: function() {return `Normal-type moves become Ice-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.terralate = {
    info: function() {return `Normal-type moves become Ground-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.toxilate = {
    info: function() {return `Normal-type moves become Poison-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.hydrolate = {
    info: function() {return `Normal-type moves become Water-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.pyrolate = {
    info: function() {return `Normal-type moves become Fire-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.chrysilate = {
    info: function() {return `Normal-type moves become Bug-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.galvanize = {
    info: function() {return `Normal-type moves become Electric-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.gloomilate = {
    info: function() {return `Normal-type moves become Dark-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.espilate = {
    info: function() {return `Normal-type moves become Psychic-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.aerilate = {
    info: function() {return `Normal-type moves become Flying-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.pixilate = {
    info: function() {return `Normal-type moves become Fairy-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}

ability.verdify = {
    info: function() {return `Normal-type moves become Grass-type moves, and their power is multiplied by x1.3`},
    rarity: 3,
}


for (const i in ability){
    ability[i].id = i
}





































const move = {}

const defaultPlayerMoveTimer = 2000


//tier 1 - 20-40 uncompromised dmg
//tier 2 - 50-70 uncompromised dmg
//tier 3 - 80-100 uncompromised dmg

//signatures need to be learnt through cloning inheriting!



//normal


move.quickAttack = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.tackle = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 40
}

move.doubleSlap = {  
    moveset: [`normal`, `fighting`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 15,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.cut = {
    moveset: [`normal`, `grass`],
    split: "physical",
    rarity: 1,
    type: "normal",
    power: 50,
    affectedBy: [ability.sharpness.id]
}

move.leer = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 1,
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
    restricted: true,
}

move.growl = { 
    moveset: [`normal`, `all`, `dark`],
    split: "special",
    rarity: 1,
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
    affectedBy: [ability.cacophony.id]
}

move.swagger = {
    moveset: [`all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 0,
    info: function() {return `Inflicts ${tagConfused}, but increases enemy Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'confused'); moveBuff(target,'atkup2') },
}

move.doubleHit = {  
    moveset: [`normal`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 35,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.playNice = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.swift = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 2,
    type: "normal",
    power: 60,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.dizzyPunch = {
    moveset: [`normal`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 70,
    info: function() {return `10% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
    affectedBy: [ability.ironFist.id]
}

move.stomp = {
    moveset: [`normal`],
    split: "physical",
    rarity: 2,
    type: "normal",
    power: 65
}

move.screech = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defdown2') },
    affectedBy: [ability.cacophony.id],
    restricted: true,
}

move.smellingSalts = {  
    moveset: [`normal`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 70,
    info: function() {return `Power doubles if the target is Paralyzed`},
    powerMod : function() { if (wildBuffs.paralysis>0) { return 2} else return 1 },
}

move.facade = {  
    moveset: [`normal`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 70,
    info: function() {return `Power doubles if the user is Paralyzed, Burned or Poisoned`},
    powerMod : function() { if (team[exploreActiveMember].buffs?.burn > 0 || team[exploreActiveMember].buffs?.poisoned > 0 || team[exploreActiveMember].buffs?.paralysis > 0) { return 2} else return 1 },
}

move.slash = {
    moveset: [`normal`, `grass`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 90,
    affectedBy: [ability.sharpness.id]
}

move.extremeSpeed = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 75,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.strength = {
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 100
}

move.hyperVoice = {
    moveset: [`normal`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 90,
    affectedBy: [ability.cacophony.id]
}

move.bodyPress = { 
    moveset: [`normal`, `fighting`, `rock`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 90,
    info: function() {return `Power increases by x1.2-1.5 if Defense/Special Defense is risen`},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.hyperBeam = {
    moveset: [`normal`, `all`],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 150,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return `Attacks x1.5 slower than usual`} ,
}

move.gigaImpact = {  
    moveset: [`normal`, `all`],
    split: "physical",
    rarity: 3,
    type: "normal",
    power: 150,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return `Attacks x1.5 slower than usual`} ,
}

move.swordsDance = {  
    moveset: [`steel`,"all"],
    split: "special",
    rarity: 3,
    type: "normal",
    power: 0,
    info: function() {return `Increases Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'atkup2',"self");},
    affectedBy: [ability.dancer.id],
    restricted: true,
}



//fire
move.ember = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 1,
    type: "fire",
    power: 40,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.fireSpin = {  
    moveset: [`fire`],
    split: "special",
    rarity: 1,
    type: "fire",
    power: 15,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.flameCharge = {
    moveset: [`fire`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 50,
    info: function() {return `50% chance to increase Speed by 50%`},
    hitEffect: function(target) { if (rng(0.50))  moveBuff(target,'speup1','self') },
}

move.incinerate = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 2,
    type: "fire",
    power: 60
}

move.fireFang = {
    moveset: [`fire`, `dark`, `dragon`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 65,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
    affectedBy: [ability.strongJaw.id]
}

move.firePunch = {
    moveset: [`fire`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "fire",
    power: 75,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
    affectedBy: [ability.ironFist.id]
}


move.sunnyDay = { 
    moveset: [`fire`,`ground`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 0,
    info: function() {return `Changes the weather to ${tagSunny}`} ,
    hitEffect: function(target) { changeWeather("sunny") },
}

move.flamethrower = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 90,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.heatWave = {
    moveset: [`fire`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 60,
    info: function() {return `50% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'burn') },
}

move.fireBlast = {
    moveset: [`fire`, `dragon`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`},
    affectedBy: [ability.megaLauncher.id]
}

move.flareBlitz = {
    moveset: [`fire`],
    split: "physical",
    rarity: 3,
    type: "fire",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}


move.overheat = {  
    moveset: [`fire`],
    split: "special",
    rarity: 3,
    type: "fire",
    power: 130,
    info: function() {return `Decreases Special Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'satkdown2','self') },
    unaffectedBy: [ability.sheerForce.id],
}







//electric
move.nuzzle = {
    moveset: [`electric`, `fairy`],
    split: "physical",
    rarity: 1,
    type: "electric",
    power: 40,
    info: function() {return `30% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'paralysis') },
}

move.magneticFlux = {
    moveset: [`electric`, `steel`],
    split: "special",
    rarity: 1,
    type: "electric",
    power: 0,
    info: function() {return `Increases Special Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'sdefup1',"self") },
}

move.thunderShock = {
    moveset: [`electric`],
    split: "special",
    rarity: 1,
    type: "electric",
    power: 40,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.thunderWave = {
    moveset: [`electric`, `psychic`, `ghost`, `fairy`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 0,
    info: function() {return `Inflicts ${tagParalysis}`},
    hitEffect: function(target) { moveBuff(target,'paralysis') },
}

move.chargeBeam = {
    moveset: [`electric`, `psychic`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 60,
    info: function() {return `50% chance to increase Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'satkup1',"self") },
}

move.electroWeb = {
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "electric",
    power: 55,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.thunderFang = {
    moveset: [`electric`, `dark`, `dragon`],
    split: "physical",
    rarity: 2,
    type: "electric",
    power: 65,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
    affectedBy: [ability.strongJaw.id]
}

move.thunderPunch = {
    moveset: [`electric`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "electric",
    power: 75,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
    affectedBy: [ability.ironFist.id]
}

move.thunderbolt = {
    moveset: [`electric`, `psychic`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 90,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.discharge = {
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 70,
    info: function() {return `30% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'paralysis') },
}

move.electricTerrain = { 
    moveset: [`electric`,`steel`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 0,
    info: function() {return `Changes the weather to ${tagElectricTerrain}`} ,
    hitEffect: function(target) { changeWeather("electricTerrain") },
}

move.thunder = {
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 110,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.voltSwitch = {
    moveset: [`electric`],
    split: "special",
    rarity: 3,
    type: "electric",
    power: 70,
    info: function() {return `Switches to the next party member`},
    hitEffect: function(target) { if (target=="wild" && saved.currentArea != "training") switchMemberNext() },
}

move.wildCharge = { //new
    moveset: [`electric`],
    split: "physical",
    rarity: 3,
    type: "electric",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}





//ground
move.mudSlap = {
    moveset: [`ground`, `water`, `poison`],
    split: "special",
    rarity: 1,
    type: "ground",
    power: 20
}

move.magnitude = {  
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 1,
    type: "ground",
    power: 10,
    info: function() {return `Power randomly varies from x1 to x8`},
    powerMod : function() { return random(1,8) },
}

move.mudShot = {
    moveset: [`ground`, `water`, `poison`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 55,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.bulldoze = {
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 2,
    type: "ground",
    power: 60,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.rototiller = {
    moveset: [`ground`, `grass`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 0,
    info: function() {return `Increases Attack and Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'satkup1',"self") },
    restricted: true,
}

move.sandstorm = { 
    moveset: [`rock`,`ground`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 0,
    info: function() {return `Changes the weather to ${tagSandstorm}`} ,
    hitEffect: function(target) { changeWeather("sandstorm") },
}

move.scorchingSands = {
    moveset: [`ground`],
    split: "special",
    rarity: 2,
    type: "ground",
    power: 70,
    info: function() {return `30% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'burn') },
}

move.earthquake = {
    moveset: [`ground`, `rock`],
    split: "physical",
    rarity: 3,
    type: "ground",
    power: 100
}

move.dig = {
    moveset: [`ground`],
    split: "physical",
    rarity: 3,
    type: "ground",
    power: 80,
    info: function() {return `Power increases by x1.2-1.5 if Defense/Special Defense is risen`},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.earthPower = {
    moveset: [`ground`],
    split: "special",
    rarity: 3,
    type: "ground",
    power: 90,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}





//steel
move.bulletPunch = {
    moveset: [`steel`, `fighting`],
    split: "physical",
    rarity: 1,
    type: "steel",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`},
    affectedBy: [ability.ironFist.id]
}

move.metalClaw = {
    moveset: [`steel`, `flying`, `dragon`],
    split: "physical",
    rarity: 1,
    type: "steel",
    power: 50,
    info: function() {return `30% chance to increase Attack by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'atkup1',"self") },
    affectedBy: [ability.toughClaws.id]
}

move.magnetBomb = {
    moveset: [`steel`, `electric`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 60
}

move.mirrorShot = { //edit
    moveset: [`steel`],
    split: "special",
    rarity: 2,
    type: "steel",
    power: 70
}

move.steelWing = {
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 70,
    info: function() {return `50% chance to increase Defense by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'defup1',"self") },
}

move.ironHead = {
    moveset: [`steel`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 80,
    affectedBy: [ability.metalhead.id]
}

move.sharkJaws = { //new
    moveset: [`water`],
    split: "physical",
    rarity: 2,
    type: "steel",
    power: 65,
    info: function() {return `10% chance to decrease enemy Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'defdown1') },
    affectedBy: [ability.strongJaw.id]
}

move.flashCannon = {
    moveset: [`steel`, `electric`, `psychic`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 80,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.megaLauncher.id]
}


move.ironTail = {
    moveset: [`steel`],
    split: "physical",
    rarity: 3,
    type: "steel",
    power: 90,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual. Power increases by x1.2-1.5 if Defense/Special Defense is risen`},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.smartStrike = { //new
    moveset: [`electric`],
    split: "physical",
    rarity: 3,
    type: "steel",
    power: 90,
    affectedBy: [ability.sharpness.id]
}

move.metalSound = {
    moveset: [`steel`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 0,
    info: function() {return `Decreases enemy Special Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'sdefdown2') },
    affectedBy: [ability.cacophony.id],
    restricted: true,
}

move.ironDefense = {
    moveset: [`steel`, `fighting`],
    split: "special",
    rarity: 3,
    type: "steel",
    power: 0,
    info: function() {return `Increases Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defup2',"self");},
}







//flying
move.peck = {
    moveset: [`flying`],
    split: "physical",
    rarity: 1,
    type: "flying",
    power: 35
}

move.gust = {
    moveset: [`flying`],
    split: "special",
    rarity: 1,
    type: "flying",
    power: 40
}

move.skyDrop = {
    moveset: [`flying`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 50,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.dualWingbeat = {  
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 30,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.acrobatics = {  
    moveset: [`flying`, `bug`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 65,
    info: function() {return `Power doubles if the user is not holding any item`},
    powerMod : function() { if (team[exploreActiveMember].item === undefined ) { return 2} else return 1 },
}

move.airShlash = {
    rename: `airSlash`,
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 75,
    affectedBy: [ability.sharpness.id],
    info: function() {return `30% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'sdefdown1') },
}

move.drillPeck = {
    moveset: [`flying`],
    split: "physical",
    rarity: 2,
    type: "flying",
    power: 80
}

move.tailwind = {
    moveset: [`flying`],
    split: "special",
    rarity: 2,
    type: "flying",
    power: 0,
    info: function() {return `Increases Speed by 50% to the entire team. Attacks x1.5 slower than usual`},
    timer: defaultPlayerMoveTimer*1.5,
    hitEffect: function(target) { moveBuff(target,'speup1',"team"); },
}

move.fly = {
    moveset: [`flying` ,`dragon`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 90
}

move.featherDance = {
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 0,
    info: function() {return `Decreases enemy Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'atkdown2') },
    affectedBy: [ability.dancer.id]
}

move.bounce = {
    moveset: [`flying`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 75,
    info: function() {return `Power increases by x1.2-1.5 if Defense/Special Defense is risen`},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.hurricane = {
    moveset: [`flying`],
    split: "special",
    rarity: 3,
    type: "flying",
    power: 100,
    info: function() {return `10% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
}

move.razorTalons = { //new
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "flying",
    power: 30,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
    affectedBy: [ability.toughClaws.id]
}



//poison
move.acid = {
    moveset: [`poison`, `grass`],
    split: "special",
    rarity: 1,
    type: "poison",
    power: 40,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.poisonSting = {
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "poison",
    power: 15,
    info: function() {return `30% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.smog = {
    moveset: [`poison`],
    split: "special",
    rarity: 1,
    type: "poison",
    power: 30,
    info: function() {return `30% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.poisonPowder = {
    moveset: [`grass`,],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 0,
    info: function() {return `Inflicts ${tagPoisoned}`},
    hitEffect: function(target) { moveBuff(target,'poisoned') },
}

move.toxic = {
    moveset: [`poison`, `all`],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 0,
    info: function() {return `Inflicts ${tagPoisoned}`},
    hitEffect: function(target) { moveBuff(target,'poisoned') },
}

move.poisonFang = {
    moveset: [`poison`, `dark`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 60,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
    affectedBy: [ability.strongJaw.id]
}

move.sludge = {
    moveset: [`poison`],
    split: "special",
    rarity: 2,
    type: "poison",
    power: 65,
    info: function() {return `30% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.crossPoison = {
    moveset: [`poison`, `fighting`, `dark`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 70,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.poisonClaw = { //new
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "poison",
    power: 65,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
    affectedBy: [ability.toughClaws.id]
}

move.poisonJab = {
    moveset: [`poison`, `fighting`, `dark`],
    split: "physical",
    rarity: 3,
    type: "poison",
    power: 80,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
    affectedBy: [ability.ironFist.id]
}

move.sludgeBomb = {
    moveset: [`poison`, `ground`, `grass`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 80,
    info: function() {return `30% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'poisoned') },
}

move.sludgeWave = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 95,
    info: function() {return `10% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'poisoned') },
}

move.coil = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 0,
    info: function() {return `Increases Attack and Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'defup1',"self") },
    restricted: true,
}

move.acidArmor = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 0,
    info: function() {return `Increases Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defup2',"self") },
}

move.acidSpray = {
    moveset: [`poison`],
    split: "special",
    rarity: 3,
    type: "poison",
    power: 50,
    info: function() {return `50% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sdefdown1') },
}







//ice
move.iceShard = {
    moveset: [`ice`],
    split: "physical",
    rarity: 1,
    type: "ice",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`},
    affectedBy: [ability.sharpness.id]
}

move.powderSnow = {
    moveset: [`ice`],
    split: "special",
    rarity: 1,
    type: "ice",
    power: 40,
    info: function() {return `10% chance to inflict ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.icicleSpear = {  
    moveset: [`ice`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 25,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}



move.hail = { 
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 0,
    info: function() {return `Changes the weather to ${tagHail}`} ,
    hitEffect: function(target) { changeWeather("hail") },
}

move.icyWind = {
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 55,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.avalanche = {
    moveset: [`ice`, `rock`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 60,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.frostBreath = {
    moveset: [`ice`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 60,
    info: function() {return `30% chance to decrease enemy Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'satkdown1') },
}

move.auroraBeam = {
    moveset: [`ice`, `water`],
    split: "special",
    rarity: 2,
    type: "ice",
    power: 65,
    info: function() {return `50% chance to decrease enemy Attack by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'atkdown1') },
    affectedBy: [ability.megaLauncher.id]
}

move.iceFang = { 
    moveset: [`ice`, `dark`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 65,
    info: function() {return `10% chance to inflict ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
    affectedBy: [ability.strongJaw.id]
}

move.icePunch = { 
    moveset: [`ice`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "ice",
    power: 75,
    info: function() {return `10% chance to inflict ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
    affectedBy: [ability.ironFist.id]
}

move.iceBeam = {
    moveset: [`ice`, `water`, `psychic`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: 90,
    info: function() {return `10% chance to inflict ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'freeze') },
}

move.blizzard = {
    moveset: [`ice`],
    split: "special",
    rarity: 3,
    type: "ice",
    power: 100
}

move.icicleCrash = {
    moveset: [`ice`],
    split: "physical",
    rarity: 3,
    type: "ice",
    power: 85
}




//bug

move.twineedle = {
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "bug",
    power: 25,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.furyCutter = { 
    moveset: [`bug`],
    split: "physical",
    rarity: 1,
    type: "bug",
    power: 25,
    info: function() {return `Multiplies move power by 1.2x everytime its used, up to 5 times. Depletes all stacks upon switching Pokemon`},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;   },
    affectedBy: [ability.sharpness.id]
}

move.infestation = {  
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.pinMissile = {  
    moveset: [`bug`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 20,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.stickyWeb = {
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 0,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.pounce = {
    moveset: [`bug`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 50,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.struggleBug = {
    moveset: [`bug`],
    split: "special",
    rarity: 2,
    type: "bug",
    power: 50,
    info: function() {return `Decreases enemy Special Attack by 50%. Power increases by x1.2-1.5 if Defense/Special Defense is risen`},
    hitEffect: function(target) { moveBuff(target,'satkdown1') },
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.bugBite = {
    moveset: [`bug`, `dark`],
    split: "physical",
    rarity: 2,
    type: "bug",
    power: 60,
    affectedBy: [ability.strongJaw.id]
}

move.bugBuzz = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 90,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.cacophony.id]
}

move.signalBeam = {
    moveset: [`bug`, `electric`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 70,
    info: function() {return `30% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'confused') },
}

move.silverWind = {
    moveset: [`bug`, `flying`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 55,
    info: function() {return `50% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sdefdown1') },
}

move.xScissor = {
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: 80,
    affectedBy: [ability.sharpness.id]
}

move.firstImpression = { //new
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.stringShot = {
    moveset: [`bug`],
    split: "special",
    rarity: 3,
    type: "bug",
    power: 0,
    info: function() {return `Decreases enemy Speed by 75%`},
    hitEffect: function(target) { moveBuff(target,'spedown2') },
}

move.uTurn = {
    moveset: [`bug`],
    split: "physical",
    rarity: 3,
    type: "bug",
    power: 70,
    info: function() {return `Switches to the next party member`},
    hitEffect: function(target) { if (target=="wild" && saved.currentArea != "training") switchMemberNext() },
}





//water
move.waterGun = {
    moveset: [`water`],
    split: "special",
    rarity: 1,
    type: "water",
    power: 40
}

move.aquaJet = {
    moveset: [`water`],
    split: "physical",
    rarity: 1,
    type: "water",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.whirlpool = {  
    moveset: [`water`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 25,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.waterPulse = {
    moveset: [`water`, `psychic`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 60,
    info: function() {return `30% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'confused') },
    affectedBy: [ability.megaLauncher.id]
}

move.chillingWater = {
    moveset: [`water`, `ice`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 50,
    info: function() {return `Decreases enemy Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}


move.bubbleBeam = {
    moveset: [`water`],
    split: "special",
    rarity: 2,
    type: "water",
    power: 65,
    info: function() {return `30% chance to decrease enemy Speed by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'spedown1') },
}

move.rainDance = { 
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 0,
    info: function() {return `Changes the weather to ${tagRainy}`} ,
    hitEffect: function(target) { changeWeather("rainy") },
    affectedBy: [ability.dancer.id]
}

move.waterfall = {
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 80
}

move.scald = {
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 75,
    info: function() {return `30% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'burn') },
}

move.liquidation = {
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 80,
    info: function() {return `30% chance to increase Defense by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defup1',"self") },
}

move.aquaTail = {
    moveset: [`water`],
    split: "physical",
    rarity: 3,
    type: "water",
    power: 90
}

move.surf = {
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 90
}

move.muddyWater = { //new
    moveset: [`ground`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 100
}

move.hydroPump = {
    moveset: [`water`],
    split: "special",
    rarity: 3,
    type: "water",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}



//grass
move.leafage = {
    moveset: [`grass`],
    split: "physical",
    rarity: 1,
    type: "grass",
    power: 40
}

move.vineWhip = {
    moveset: [`grass`],
    split: "physical",
    rarity: 1,
    type: "grass",
    power: 45
}

move.magicalLeaf = {
    moveset: [`grass`, `psychic`, `fairy`],
    split: "special",
    rarity: 2,
    type: "grass",
    power: 50,
    info: function() {return `50% chance to decrease enemy Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'satkdown1') },
}

move.bulletSeed = {  
    moveset: [`grass`],
    split: "physical",
    rarity: 2,
    type: "grass",
    power: 25,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.razorLeaf = {
    moveset: [`grass`],
    split: "physical",
    rarity: 2,
    type: "grass",
    power: 65,
    affectedBy: [ability.sharpness.id],
    info: function() {return `30% chance to decrease enemy Defense by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defdown1') },
}

move.stunSpore = {
    moveset: [`grass`],
    split: "special",
    rarity: 2,
    type: "grass",
    power: 0,
    info: function() {return `Inflicts ${tagParalysis}`},
    hitEffect: function(target) { moveBuff(target,'paralysis') },
}

move.leafBlade = {
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 80,
    affectedBy: [ability.sharpness.id]
}

move.energyBall = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 90,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.megaLauncher.id]
}

move.solarBeam = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.solarBlade = { 
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 125,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`},
}

move.seedBomb = {
    moveset: [`grass`],
    split: "physical",
    rarity: 3,
    type: "grass",
    power: 90,
    info: function() {return `10% chance to decrease enemy Attack by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'atkdown1') },
}

move.cottonSpore = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return `Decreases enemy Speed by 75%`},
    hitEffect: function(target) { moveBuff(target,'spedown2') },
}

move.spore = {
    moveset: [`grass`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return `50% chance to inflict ${tagSleep}`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sleep') },
}

move.grassyTerrain = { 
    moveset: [`grass`,`bug`],
    split: "special",
    rarity: 3,
    type: "grass",
    power: 0,
    info: function() {return `Changes the weather to ${tagGrassyTerrain}`} ,
    hitEffect: function(target) { changeWeather("grassyTerrain") },
}



//fighting
move.rockSmash = {
    moveset: [`fighting`,`steel`,`rock`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 40,
    affectedBy: [ability.metalhead.id]
}

move.vacuumWave = {
    moveset: [`fighting`],
    split: "special",
    rarity: 1,
    type: "fighting",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.machPunk = {
    rename: `machPunch`,
    moveset: [`fighting`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`},
    affectedBy: [ability.ironFist.id]
}

move.armThrust = {  
    moveset: [`fighting`],
    split: "physical",
    rarity: 1,
    type: "fighting",
    power: 15,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.powerupPunch = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 50,
    info: function() {return `50% chance to increase Attack by 50%`},
    hitEffect: function(target) { if (rng(0.50))  moveBuff(target,'atkup1','self') },
    affectedBy: [ability.ironFist.id]
}


move.stormThrow = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 60,
    info: function() {return `Power increases by x1.2-1.5 if Defense/Special Defense is risen`},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.lowSweep = {
    moveset: [`fighting`, `normal`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 60,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.forcePalm = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 2,
    type: "fighting",
    power: 75,
    affectedBy: [ability.ironFist.id]
}

move.brickBreak = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 70,
    info: function() {return `30% chance to decrease enemy Defense by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defdown1') },
}

move.skyUppercut = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 85,
    info: function() {return `Power doubles if the target is Flying-Type`},
    powerMod : function() { if (pkmn[saved.currentPkmn].type.includes("flying")) { return 2} else return 1 },
}

move.hammerArm = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 120,
    info: function() {return `Decreases Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.auraSphere = {
    moveset: [`fighting`,`ghost`,`psychic`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 80,
    affectedBy: [ability.megaLauncher.id]
}

move.bulkUp = {
    moveset: [`fighting`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 0,
    info: function() {return `Increases Attack and Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'defup1',"self") },
    restricted: true,
}

move.crossChop = {
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 90
}

move.closeCombat = {  
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 120,
    info: function() {return `Decreases Defense and Special Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1','self'); moveBuff(target,'sdefdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.superpower = {  
    moveset: [`fighting`],
    split: "physical",
    rarity: 3,
    type: "fighting",
    power: 150,
    info: function() {return `Decreases Defense and Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1','self'); moveBuff(target,'atkdown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.focusBlast = {
    moveset: [`fighting`],
    split: "special",
    rarity: 3,
    type: "fighting",
    power: 100*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`},
    affectedBy: [ability.megaLauncher.id]
}





//psychic
move.confusion = {
    moveset: [`psychic`,`ghost`],
    split: "special",
    rarity: 1,
    type: "psychic",
    power: 35,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.psybeam = {
    moveset: [`psychic`],
    split: "special",
    rarity: 2,
    type: "psychic",
    power: 60,
    info: function() {return `30% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'confused') },
}

move.futureSight = {
    moveset: [`psychic`],
    split: "special",
    rarity: 2,
    type: "psychic",
    power: 120,
    timer: defaultPlayerMoveTimer*2,
    info: function() {return `Attacks x2 slower than usual`} ,
}

move.psychoCut = {
    moveset: [`psychic`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "psychic",
    power: 75,
    affectedBy: [ability.sharpness.id]
}

move.psychicFangs = { //new
    moveset: [`dark`],
    split: "physical",
    rarity: 2,
    type: "psychic",
    power: 65,
    affectedBy: [ability.strongJaw.id]
}

move.zenHeadbut = { //new
    rename: `zenHeadbutt`,
    moveset: [`fighting`, `normal`],
    split: "physical",
    rarity: 3,
    type: "psychic",
    power: 90,
    affectedBy: [ability.metalhead.id]
}

move.twinBeam = {  
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 40,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.psychic = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 90,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
}

move.extrasensory = { //new
    moveset: [`ghost`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 100
}

move.amnesia = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return `Increases Special Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'sdefup2',"self")},
}

move.barrier = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return `Increases Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defup2',"self")},
}

move.agility = {  //new
    moveset: [`flying`, `bug`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return `Increases Speed by 75%`},
    hitEffect: function(target) { moveBuff(target,'speup2',"self")},
    affectedBy: [ability.dancer.id],
    restricted: true,
}

move.calmMind = {
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "psychic",
    power: 0,
    info: function() {return `Increases Special Defense and Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'sdefup1',"self"); moveBuff(target,'satkup1',"self") },
    restricted: true,
}



//rock
move.rockThrow = {
    moveset: [`rock`],
    split: "physical",
    rarity: 1,
    type: "rock",
    power: 50
}

move.accelerock = {
    moveset: [`rock`],
    split: "physical",
    rarity: 1,
    type: "rock",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.rockBlast = {  
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 25,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
    affectedBy: [ability.megaLauncher.id]
}

move.rollout = { 
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 55,
    info: function() {return `Multiplies move power by 1.2x everytime its used, up to 5 times. Depletes all stacks upon switching Pokemon`},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;   },
}

move.ancientPower = {
    moveset: [`rock`, "psychic"],
    split: "special",
    rarity: 2,
    type: "rock",
    power: 60,
    info: function() {return `10% chance to increase All Stats by 50%`},
    hitEffect: function(target) { if (rng(0.10)) {moveBuff(target,'satkup1',"self");moveBuff(target,'atkup1',"self");moveBuff(target,'defup1',"self");moveBuff(target,'sdefup1',"self");moveBuff(target,'speup1',"self");} },
}

move.smackDown = {
    moveset: [`rock`],
    split: "physical",
    rarity: 2,
    type: "rock",
    power: 50,
    info: function() {return `Power doubles if the target is Flying-Type`},
    powerMod : function() { if (pkmn[saved.currentPkmn].type.includes("flying")) { return 2} else return 1 },
}


move.rockTomb = {
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 60,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
}

move.rockSlide = {
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 75,
    info: function() {return `Power increases by x1.2-1.5 if Defense/Special Defense is risen`},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.powerGem = {
    moveset: [`rock`, `fairy`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 85
}

move.stoneEdge = {
    moveset: [`rock`],
    split: "physical",
    rarity: 3,
    type: "rock",
    power: 100
}

move.meteorBeam = { //new
    moveset: [`psychic`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.rockPolish = {
    moveset: [`rock`],
    split: "special",
    rarity: 3,
    type: "rock",
    power: 0,
    info: function() {return `Increases Speed by 75%`},
    hitEffect: function(target) { moveBuff(target,'speup2',"self")},
    restricted: true,
}


//ghost
move.lick = {
    moveset: [`ghost`, `normal`],
    split: "physical",
    rarity: 1,
    type: "ghost",
    power: 30,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.shadowSneak = {
    moveset: [`ghost`],
    split: "physical",
    rarity: 1,
    type: "ghost",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.confuseRay = {
    moveset: [`ghost`, `psychic`, `all`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 0,
    info: function() {return `Inflicts ${tagConfused}`},
    hitEffect: function(target) { moveBuff(target,'confused') },
}




move.willOWisp = {  
    moveset: [`fire`, `ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 0,
    info: function() {return `Inflicts ${tagBurn}`},
    hitEffect: function(target) { moveBuff(target,'burn') },
}

move.fog = { 
    moveset: [`dark`,`ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 0,
    info: function() {return `Changes the weather to ${tagFoggy}`} ,
    hitEffect: function(target) { changeWeather("foggy") },
}

move.ominousWind = {
    moveset: [`ghost`, "flying"],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 60,
    info: function() {return `10% chance to increase All Stats by 50%`},
    hitEffect: function(target) { if (rng(0.10)) {moveBuff(target,'satkup1',"self");moveBuff(target,'atkup1',"self");moveBuff(target,'defup1',"self");moveBuff(target,'sdefup1',"self");moveBuff(target,'speup1',"self");} },
}

move.hex = {  
    moveset: [`ghost`],
    split: "special",
    rarity: 2,
    type: "ghost",
    power: 65,
    info: function() {return `Power doubles if the target has a status condition`},
    powerMod : function() { if (wildBuffs.paralysis>0 || wildBuffs.burn>0 || wildBuffs.freeze>0  || wildBuffs.confused>0  || wildBuffs.poisoned>0  ) { return 2} else return 1 },
}

move.shadowClaw = { //new
    moveset: [`ghost`],
    split: "physical",
    rarity: 2,
    type: "ghost",
    power: 60,
    affectedBy: [ability.toughClaws.id]
}

move.shadowPunch = {
    moveset: [`ghost`],
    split: "physical",
    rarity: 2,
    type: "ghost",
    power: 75,
    affectedBy: [ability.ironFist.id]
}

move.shadowBall = {
    moveset: [`ghost`, `psychic`],
    split: "special",
    rarity: 3,
    type: "ghost",
    power: 80,
    info: function() {return `10% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'sdefdown1') },
    affectedBy: [ability.megaLauncher.id]
}

move.phantomForce = { //new
    moveset: [`ghost`],
    split: "physical",
    rarity: 3,
    type: "ghost",
    power: 120,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

//dragon
move.twister = {
    moveset: [`dragon`, `flying`],
    split: "special",
    rarity: 1,
    type: "dragon",
    power: 40
}

move.dragonTail = {
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 60,
    info: function() {return `30% chance to increase Attack by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'atkup1',"self") },
}

move.dualChop = {  
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 40,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.dragonBreath = {
    moveset: [`dragon`],
    split: "special",
    rarity: 2,
    type: "dragon",
    power: 65,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.dragonClaw = {
    moveset: [`dragon`],
    split: "physical",
    rarity: 2,
    type: "dragon",
    power: 65,
    affectedBy: [ability.toughClaws.id]
}

move.dragonPulse = {
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: 85,
    affectedBy: [ability.megaLauncher.id]
}


move.dragonRush = {
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "dragon",
    power: 90,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual. Power increases by x1.2-1.5 if Defense/Special Defense is risen`},
    powerMod : function() { if (team[exploreActiveMember].buffs?.defup2 > 0 || team[exploreActiveMember].buffs?.sdefup2 > 0) { return 1.5} else if (team[exploreActiveMember].buffs?.defup1 > 0 || team[exploreActiveMember].buffs?.sdefup1 > 0) {return 1.2} else return 1 },
}

move.outrage = {  
    moveset: [`dragon`],
    split: "physical",
    rarity: 3,
    type: "dragon",
    power: 120,
    info: function() {return `Inflicts ${tagConfused} on the user`},
    hitEffect: function(target) { moveBuff(target,'confused',"self") },
    unaffectedBy: [ability.sheerForce.id],
}

move.dracoMeteor = {  
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: 130,
    info: function() {return `Decreases Special Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'satkdown2','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.dragonDance = {
    moveset: [`dragon`],
    split: "special",
    rarity: 3,
    type: "dragon",
    power: 0,
    timer: defaultPlayerMoveTimer*1.4,
    info: function() {return `Increases Attack and Speed by 50%. Attacks x1.4 slower than usual`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self"); moveBuff(target,'speup1',"self") },
    affectedBy: [ability.dancer.id],
    restricted: true,
}


//dark
move.pursuit = {
    moveset: [`dark`],
    split: "physical",
    rarity: 1,
    type: "dark",
    power: 40
}

move.snarl = {
    moveset: [`dark`],
    split: "special",
    rarity: 2,
    type: "dark",
    power: 55,
    info: function() {return `Decreases enemy Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'satkdown1') },
    affectedBy: [ability.cacophony.id]
}

move.bite = {
    moveset: [`dark`, `bug`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 60,
    affectedBy: [ability.strongJaw.id]
}

move.feintAttack = {
    moveset: [`dark`, `normal`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 40,
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`},
}

move.knockOff = {
    moveset: [`dark`, `fighting`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 65,
    info: function() {return `30% chance to decrease enemy Defense by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'defdown1') },
}

move.honeClaws = {
    moveset: [`dark`, `steel`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power : 0,
    info: function() {return `Increases Attack by 50%. Attacks x2 faster than usual`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"self") },
    restricted: true,
    timer: defaultPlayerMoveTimer*0.5,
}

move.crunch = {
    moveset: [`dark`],
    split: "physical",
    rarity: 2,
    type: "dark",
    power: 70,
    info: function() {return `10% chance to decrease enemy Defense by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'defdown1') },
    affectedBy: [ability.strongJaw.id]
}

move.darkPulse = {
    moveset: [`dark`, `psychic`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 80,
    affectedBy: [ability.megaLauncher.id]
}

move.nightDaze = { //new
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 85,
    info: function() {return `10% chance to decrease enemy Speed by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'spedown1') }
}

move.nightSlash = {
    moveset: [`dark`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: 85,
    affectedBy: [ability.sharpness.id]
}

move.fakeTears = {
    moveset: [`dark`, `fairy`],
    split: "physical",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return `Decreases enemy Special Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'sdefdown2') },
    restricted: true,
}

move.nastyPlot = {
    moveset: [`dark`,"all"],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return `Increases Special Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self");},
    restricted: true,
}

move.memento = {
    moveset: [`dark`],
    split: "special",
    rarity: 3,
    type: "dark",
    power: 0,
    info: function() {return `Faints the user and decreases enemy Attack and Special Attack by 100%`},
    hitEffect: function(target) { if (target=="wild") {
        moveBuff(target,'satkdown2');
        moveBuff(target,'atkdown2');
        pkmn[ team[exploreActiveMember].pkmn.id ].playerHp = 0;
        updateTeamPkmn()
    } },
    unaffectedBy: [ability.sheerForce.id],
}

//fairy

move.disarmingVoice = {
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 40,
    affectedBy: [ability.cacophony.id],
    timer: defaultPlayerMoveTimer*0.8,
    info: function() {return `Attacks x1.2 faster than usual`} ,
}

move.drainingKiss = { //new
    moveset: [`fairy`],
    split: "physical",
    rarity: 2,
    type: "fairy",
    power: 50,
    info: function() {return `50% chance to decrease enemy Defense by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'defdown1') }
}

move.fairyWind = {
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 60,
    info: function() {return `30% chance to decrease enemy Speed by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'spedown1') },
}

move.echoedVoice = { 
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 50,
    info: function() {return `Multiplies move power by 1.2x everytime its used, up to 5 times. Depletes all stacks upon switching Pokemon`},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;   },
    affectedBy: [ability.cacophony.id]
}

move.alluringVoice = {
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 65,
    affectedBy: [ability.cacophony.id]
}

move.spiritBreak = { //new
    moveset: [`fairy`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: 75,
    info: function() {return `50% chance to decrease enemy Attack by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'atkdown1') },
}

move.dazzlingGleam = {
    moveset: [`fairy`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 85
}

move.playRough = {
    moveset: [`fairy`, `dark`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: 90
}

move.auroraPunch = { //new
    moveset: [`ice`],
    split: "physical",
    rarity: 3,
    type: "fairy",
    power: 80,
    affectedBy: [ability.ironFist.id]
}

move.moonblast = {
    moveset: [`fairy`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 95,
    info: function() {return `10% chance to decrease enemy Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'satkdown1') },
    affectedBy: [ability.megaLauncher.id]
}


move.babydollEyes = {
    moveset: [`fairy`, `normal`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 0,
    info: function() {return `Decreases enemy Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.charm = {
    moveset: [`fairy`],
    split: "special",
    rarity: 2,
    type: "fairy",
    power: 0,
    info: function() {return `Decreases enemy Attack by 100%`},
    hitEffect: function(target) { moveBuff(target,'atkdown2') },
}

move.sweetKiss = {
    moveset: [`fairy`],
    split: "special",
    rarity: 1,
    type: "fairy",
    power: 0,
    info: function() {return `Inflicts ${tagConfused}`},
    hitEffect: function(target) { moveBuff(target,'confused') },
}

move.mistyTerrain = { 
    moveset: [`fairy`,`psychic`],
    split: "special",
    rarity: 3,
    type: "fairy",
    power: 0,
    info: function() {return `Changes the weather to ${tagMistyTerrain}`} ,
    hitEffect: function(target) { changeWeather("mistyTerrain") },
}





//unique skills

//tier 4 - learnt by normal pokemon = 120 uncompromised dmg
//tier 5 - learnt by legendary pokemon = 140 uncompromised dmg

const t4Base = 120

move.acupressure = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Raises by 100% two random stats`},
    hitEffect: function(target) { 
        const picked = arrayPick(["atkup2","satkup2","defup2","sdefup2","speup2",],2)
        moveBuff(target,picked[0],"self");
        moveBuff(target,picked[1],"self");
    },
}

move.batonPass = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `User transfers all of its stat changes and status to a the entire team`},
    hitEffect: function(target) { 
    for (const member in team){
        for (const i in team[exploreActiveMember].buffs){
            if (team[exploreActiveMember].buffs[i]>0) {
                team[member].buffs[i] = 3;
            }
        } 
    }
    for (const i in team[exploreActiveMember].buffs){
        if (team[exploreActiveMember].buffs[i]>0) team[exploreActiveMember].buffs[i] = 0;
    }
    updateTeamBuffs();
},
}

move.bellyDrum = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Increases Attack by 150% but decreases Defense and Special Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defdown2',"self"); moveBuff(target,'sdefdown2',"self"); moveBuff(target,'atkup1',"self"); moveBuff(target,'atkup2',"self") },
    affectedBy: [ability.dancer.id],
    restricted: true,
}

move.boomburst = {
    split: "special",
    type: "normal",
    power: t4Base,
    affectedBy: [ability.cacophony.id]
}

move.eggBomb = {
    split: "physical",
    type: "normal",
    power: t4Base,
}

move.cometPunch = {
    split: "physical",
    type: "normal",
    power: t4Base/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
    affectedBy: [ability.ironFist.id]
}

move.payDay = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Once used,increases the weight of rare item drops by 1% for the current battle. Multiple uses wont stack. Works always for everyone regardless of the user`},
    hitEffect: function(target) { 
        saved.hasPayDayBeenUsed = true
    },
}

move.teatime = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Once used,increases the weight of rare Pokemon by 1% for the current battle. Multiple uses wont stack. Works always for everyone regardless of the user`},
    hitEffect: function(target) { 
        saved.hasTeatimeBeenUsed = true
    },
}

move.metronome = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `User performs any move at random`},
}

move.mimic = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Perform the first move of the oponent, at double the base damage`},
}

move.meFirst = {
    split: "special",
    type: "normal",
    power: 0,
    timer: defaultPlayerMoveTimer*0.5,
    info: function() {return `Perform the first move of the oponent. Attacks x2 faster than usual`} ,
}

move.burnUp = {
    split: "special",
    type: "fire",
    power: t4Base-60,
    info: function() {return `Inflicts ${tagBurn}`},
    hitEffect: function(target) { moveBuff(target,'burn') },
}

move.magmaStorm = {
    split: "special",
    type: "fire",
    power: t4Base-60,
    info: function() {return `Changes the weather to ${tagSunny}`},
    hitEffect: function(target) { changeWeather("sunny"); },
}

move.inferno = {
    split: "special",
    type: "fire",
    power: t4Base+60,
    info: function() {return `Decreases Defense and Special Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'defdown2',"self"); moveBuff(target,'sdefdown2',"self"); },
    unaffectedBy: [ability.sheerForce.id],
}

move.aquaStep = {
    split: "physical",
    type: "water",
    power: t4Base-60,
    info: function() {return `Increases Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'speup1','self') },
    affectedBy: [ability.dancer.id]
}

move.hydroCannon = {
    split: "special",
    type: "water",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return `Attacks x1.5 slower than usual`},
    affectedBy: [ability.megaLauncher.id]
}

move.gigatonHammer = {
    split: "physical",
    type: "steel",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return `Attacks x1.5 slower than usual`}
}

move.razorShell = {
    split: "physical",
    type: "water",
    power: t4Base-20,
    info: function() {return `50% chance to decrease enemy Defense by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'defdown1') },
    affectedBy: [ability.sharpness.id]
}

move.tripleDive = {  
    split: "physical",
    type: "water",
    power: t4Base/3,
    info: function() {return `Hits 3 times`},
    multihit: [3,3],
}

move.electroBall = {
    split: "special",
    type: "electric",
    power: t4Base/2,
    timer: defaultPlayerMoveTimer*0.5,
    info: function() {return `Attacks x2 faster than usual`} ,
}

move.charge = {
    split: "special",
    type: "electric",
    power: 0,
    info: function() {return `Increases Special Attack by 100% and Special Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self"); moveBuff(target,'sdefup1',"self") },
}

move.ionise = {
    split: "special",
    type: "electric",
    power: 0,
    info: function() {return `Increases Special Attack by 50% and Special Defense by 100%`},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self"); moveBuff(target,'sdefup2',"self") },
}

move.appleAcid = {
    split: "special",
    type: "grass",
    power: t4Base-50,
    info: function() {return `Decreases enemy Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.chloroblast = {
    split: "special",
    type: "grass",
    power: t4Base,
    affectedBy: [ability.megaLauncher.id]
}

move.frenzyPlant = {
    split: "special",
    type: "grass",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return `Attacks x1.5 slower than usual`} ,
}

move.trailblaze = {
    split: "physical",
    type: "grass",
    power: t4Base-60,
    info: function() {return `Increases Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'speup1','self') },
}

move.freezeDry = {
    split: "special",
    type: "ice",
    power: t4Base-20,
    info: function() {return `Super-effective against Water-types`} ,
}

move.snowscape = { 
    split: "special",
    type: "ice",
    power: 0,
    info: function() {return `Changes the weather to ${tagHail} and increases Special Attack by 50%`} ,
    hitEffect: function(target) { changeWeather("hail"); moveBuff(target,'satkup1',"self") },
}

move.venoshock = {  
    split: "special",
    type: "poison",
    power: (t4Base+20)/2,
    info: function() {return `Power doubles if the target is ${tagPoisoned}`},
    powerMod : function() { if (wildBuffs.poisoned>0 ) { return 2} else return 1 },
}

move.toxicThread = {
    split: "special",
    type: "poison",
    power: 0,
    info: function() {return `Inflicts ${tagPoisoned} and decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'poisoned'); moveBuff(target,'spedown1') },
}

move.highHorsepower = {
    split: "physical",
    type: "ground",
    power: t4Base,
}

move.blazeKick = {
    split: "physical",
    type: "fire",
    power: t4Base,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.pyroBall = {
    split: "physical",
    type: "fire",
    power: t4Base/2,
    timer: defaultPlayerMoveTimer*0.5,
    info: function() {return `Attacks x2 faster than usual`} ,
}

move.braveBird = {
    split: "physical",
    type: "flying",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.snipeShot = {
    split: "special",
    type: "water",
    power: t4Base,
}

move.rockWrecker = {
    split: "physical",
    type: "rock",
    power: t4Base,
}

move.aeroblast = {
    split: "special",
    type: "flying",
    power: t4Base,
}

move.sacredFire = {
    split: "physical",
    type: "fire",
    power: t4Base,
}

move.crabhammer = {
    split: "physical",
    type: "water",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.iceHammer = {
    split: "physical",
    type: "ice",
    power: t4Base+20,
    info: function() {return `Decreases Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1','self') },
    unaffectedBy: [ability.sheerForce.id],
}

move.dragonDarts = {  
    split: "physical",
    type: "dragon",
    power: t4Base/2,
    info: function() {return `Hits 2 times`},
    multihit: [2,2],
}

move.hiJumpKick = {
    split: "physical",
    type: "fighting",
    power: t4Base,
}

move.headCharge = {
    split: "physical",
    type: "normal",
    power: t4Base,
    affectedBy: [ability.metalhead.id]
}

move.megahorn = {
    split: "physical",
    type: "bug",
    power: t4Base,
    affectedBy: [ability.metalhead.id]
}

move.needleArm = {
    split: "physical",
    type: "grass",
    power: t4Base,
}

move.anchorShot = {
    split: "physical",
    type: "steel",
    power: t4Base,
}

move.darkestLariat = {
    split: "physical",
    type: "dark",
    power: t4Base,
}

move.mindBlown = {
    split: "special",
    type: "fire",
    power: t4Base-10,
}

move.sparklingAria = {
    split: "special",
    type: "water",
    power: t4Base-10,
    info: function() {return `Removes ${tagBurn} for the entire party`},
    hitEffect: function(target) { 
        for (const slot in team) {
            team[slot].buffs.burn = 0
        }
     },
    affectedBy: [ability.cacophony.id]
}

move.floralHealing = {
    split: "special",
    type: "fairy",
    power: 0,
    info: function() {return `Removes all status effect for the entire party`},
    hitEffect: function(target) { 
        for (const slot in team) {
            team[slot].buffs.burn = 0
            team[slot].buffs.freeze = 0
            team[slot].buffs.paralysis = 0
            team[slot].buffs.poisoned = 0
            team[slot].buffs.sleep = 0
            team[slot].buffs.confused = 0
        }
     },
}

move.revelationDance = {
    split: "special",
    type: "normal",
    power: 100,
    info: function() {return `Type changes based on the first type of the user`},
    castEffect: function(target) {
        this.type = pkmn[ team[exploreActiveMember].pkmn.id ].type[0]
        
    },
    affectedBy: [ability.dancer.id]
}

move.weatherBall = { //añade forecast ability guarro
    split: "special",
    type: "normal",
    power: t4Base/2+10,
    info: function() {return `Power doubles under a weather condition, and type changes depending on it (${tagSunny} is Fire, ${tagRainy} is Water, ${tagSandstorm} is Ground, ${tagHail} is Ice, ${tagFoggy} is Ghost, ${tagElectricTerrain} is Electric, ${tagGrassyTerrain} is Grass, ${tagMistyTerrain} is Psychic )`},
    castEffect: function(target) {
        this.power = t4Base/2+10
        this.type = "normal"
        if (saved.weatherTimer>0){
            this.power = (t4Base/2+10)*2
            if (saved.weather=="sunny") this.type = "fire"
            if (saved.weather=="rainy") this.type = "water"
            if (saved.weather=="sandstorm") this.type = "ground"
            if (saved.weather=="hail") this.type = "ice"
            if (saved.weather=="foggy") this.type = "ghost"
            if (saved.weather=="electricTerrain") this.type = "electric"
            if (saved.weather=="mistyTerrain") this.type = "psychic"
            if (saved.weather=="grassyTerrain") this.type = "grass"
        }
    },
}

move.poisonTail = {
    split: "physical",
    type: "poison",
    power: t4Base-10,
    info: function() {return `20% chance to inflict ${tagPoisoned}`},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'poisoned') },
}

move.heatCrash = {
    split: "physical",
    type: "fire",
    power: t4Base-10,
    info: function() {return `20% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'burn') },
}

move.chatter = {
    split: "special",
    type: "flying",
    power: t4Base-10,
    info: function() {return `20% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'confused') },
    affectedBy: [ability.cacophony.id]
}

move.voltTackle = {
    split: "physical",
    type: "electric",
    power: t4Base,
    info: function() {return `10% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'paralysis') },
}

move.zingZap = {
    split: "physical",
    type: "electric",
    power: t4Base,
}

move.lovelyKiss = {
    split: "physical",
    type: "fairy",
    power: t4Base,
    info: function() {return `10% chance to inflict ${tagConfused}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'confused') },
}

move.spacialRend = {
    split: "special",
    type: "dragon",
    power: t4Base,
    affectedBy: [ability.sharpness.id]
}

move.roarOfTime = {
    split: "special",
    type: "dragon",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`},
    affectedBy: [ability.cacophony.id]
}

move.doomDesire = {
    split: "special",
    type: "steel",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return `Attacks x1.5 slower than usual`} ,
}

move.beakBlast = {
    split: "physical",
    type: "normal",
    power: t4Base*1.5,
    timer: defaultPlayerMoveTimer*1.5,
    info: function() {return `Attacks x1.5 slower than usual`} ,
}

move.shadowForce = { 
    split: "physical",
    type: "ghost",
    power: t4Base-20,
    info: function() {return `Can hit regardless of the typing`},
}

move.blueFlare = {
    split: "special",
    type: "fire",
    power: t4Base-20,
    info: function() {return `30% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'burn') },
}

move.boltStrike = {
    split: "special",
    type: "electric",
    power: t4Base-20,
    info: function() {return `30% chance to inflict ${tagParalysis}`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'paralysis') },
}

move.glaciate = {
    split: "special",
    type: "ice",
    power: t4Base-30,
    info: function() {return `20% chance to inflict ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'freeze') },
}

move.howl = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Increases Attack by 50% to the entire team`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"team")},
    affectedBy: [ability.cacophony.id]
}

move.aromaticMist = {
    split: "special",
    type: "fairy",
    power: 0,
    info: function() {return `Increases Special Defense by 50% to the entire team`},
    hitEffect: function(target) { moveBuff(target,'sdefup1',"team")},
}

move.electrify = {
    split: "special",
    type: "electric",
    power: 0,
    info: function() {return `Temporarily adds Electric to the type of the enemy. Replaces other temporary types`},
    hitEffect: function(target) { pkmn[saved.currentPkmn].temporalType = [`electric`] },
}

move.forestCurse = {
    split: "special",
    type: "grass",
    power: 0,
    info: function() {return `Temporarily adds Grass to the type of the enemy. Replaces other temporary types`},
    hitEffect: function(target) { pkmn[saved.currentPkmn].temporalType = [`grass`] },
}

move.trickOrTreat = {
    split: "special",
    type: "ghost",
    power: 0,
    info: function() {return `Temporarily adds Ghost to the type of the enemy. Replaces other temporary types`},
    hitEffect: function(target) { pkmn[saved.currentPkmn].temporalType = [`ghost`] },
}

move.soak = {
    split: "special",
    type: "water",
    power: 0,
    info: function() {return `Temporarily adds Water to the type of the enemy. Replaces other temporary types`},
    hitEffect: function(target) { pkmn[saved.currentPkmn].temporalType = [`water`] },
}

move.magicPowder = {
    split: "special",
    type: "psychic",
    power: 0,
    info: function() {return `Temporarily adds Psychic to the type of the enemy. Replaces other temporary types`},
    hitEffect: function(target) { pkmn[saved.currentPkmn].temporalType = [`psychic`] },
}

move.mudSport = {
    split: "special",
    type: "ground",
    power: 0,
    info: function() {return `Temporarily adds Ground to the type of the enemy. Replaces other temporary types`},
    hitEffect: function(target) { pkmn[saved.currentPkmn].temporalType = [`ground`] },
}

move.boneRush = {
    split: "physical",
    type: "ground",
    power: t4Base/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.clamp = {
    split: "physical",
    type: "water",
    power: t4Base/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.waterShuriken = {
    split: "special",
    type: "water",
    power: t4Base/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.barbBarrage = {
    split: "physical",
    type: "poison",
    power: t4Base/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.barrage = {
    split: "physical",
    type: "normal",
    power: t4Base/3,
    info: function() {return `Hits 2-5 times`},
    multihit: [2,5],
}

move.mysticalPower = {
    split: "special",
    type: "psychic",
    power: t4Base-20,
    info: function() {return `50% chance to increase Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.50))  moveBuff(target,'satkup1','self') },
}

move.psyshieldBash = {
    split: "special",
    type: "psychic",
    power: t4Base-20,
    info: function() {return `Increases Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defup1',"self") },
    affectedBy: [ability.metalhead.id]
}

move.sketch = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Executes the first move slot. Attacks x1.5 slower than usual`},
    timer: defaultPlayerMoveTimer*1.5,
}

move.quiverDance = {
    split: "special",
    type: "bug",
    power: 0,
    info: function() {return `Increases Speed, Special Defense and Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'speup1',"self"); moveBuff(target,'sdefup1',"self"); moveBuff(target,'satkup1',"self") },
    affectedBy: [ability.dancer.id]
}

move.prismaticLaser = {
    split: "special",
    type: "psychic",
    power: t4Base*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.lusterPurge = {
    split: "special",
    type: "psychic",
    power: t4Base-20,
    info: function() {return `50% chance to decrease enemy Special Defense by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'sdefdown1') },
}

move.mistBall = {
    split: "special",
    type: "psychic",
    power: t4Base-10,
    info: function() {return `50% chance to decrease enemy Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.50)) moveBuff(target,'satkdown1') },
}

move.dynamicPunch = {
    split: "physical",
    type: "fighting",
    power: t4Base-40,
    info: function() {return `Inflicts ${tagConfused}`},
    hitEffect: function(target) { moveBuff(target,'confused') },
    affectedBy: [ability.ironFist.id]
}

move.thunderousKick = {
    split: "physical",
    type: "fighting",
    power: t4Base-40,
    info: function() {return `Decreases enemy Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.meteorAssault = {
    split: "physical",
    type: "fighting",
    power: (t4Base+10)*1.2,
    timer: defaultPlayerMoveTimer*1.2,
    info: function() {return `Attacks x1.2 slower than usual`} ,
}

move.cottonGuard = {
    split: "special",
    type: "grass",
    power: 0,
    info: function() {return `Increases Defense by 100% and Special Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defup2',"self"); moveBuff(target,'sdefup1',"self")},
}


move.kingsShield = {
    split: "special",
    type: "steel",
    power: 0,
    info: function() {return `Increases Special Defense by 100% and Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defup1',"self"); moveBuff(target,'sdefup2',"self")},
}

move.drumBeating = {
    split: "physical",
    type: "grass",
    power: t4Base-40,
    info: function() {return `Decreases enemy Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'spedown1') },
    affectedBy: [ability.dancer.id]
}

move.tropKick = {
    split: "physical",
    type: "grass",
    power: t4Base-20,
    info: function() {return `Decreases enemy Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown1') },
}

move.fireLash = {
    split: "physical",
    type: "fire",
    power: t4Base-50,
    info: function() {return `Decreases enemy Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
}

move.clangingScales = {
    split: "special",
    type: "dragon",
    power: t4Base-20,
    info: function() {return `Decreases enemy Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1') },
    affectedBy: [ability.cacophony.id]
}

move.shiftGear = {
    split: "special",
    type: "steel", 
    power: 0,
    info: function() {return `Increases Attack by 100% and Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkup2',"self"); moveBuff(target,'speup1',"self") },
    restricted: true,
}

move.kinesis = {
    split: "special",
    type: "psychic",
    power: 0,
    info: function() {return `Increases Special Attack by 100% and Special Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'satkup2',"self"); moveBuff(target,'sdefup1',"self") },
    restricted: true,
}

move.gearUp = { 
    split: "special",
    type: "steel",
    power: 0,
    info: function() {return `Increases Attack and Speed by 50% to the entire team`},
    hitEffect: function(target) { moveBuff(target,'atkup1',"team"); moveBuff(target,'speup1',"team");},
    restricted: true,
}

move.relicSong = {
    split: "special",
    type: "normal",
    power: t4Base-30,
    info: function() {return `20% chance to inflict ${tagSleep}`},
    hitEffect: function(target) { if (rng(0.20)) moveBuff(target,'sleep') },
    affectedBy: [ability.cacophony.id]
}

move.zapCannon = {
    split: "special",
    type: "electric",
    power: t4Base-50,
    info: function() {return `Inflicts ${tagParalysis}`},
    hitEffect: function(target) { moveBuff(target,'paralysis'); },
}

move.triAttack = {
    split: "special",
    type: "normal",
    power: t4Base,
    info: function() {return `10% chance to inflict ${tagBurn},${tagParalysis} or ${tagFreeze}`},
    hitEffect: function(target) { if (rng(0.10)){ if (rng(0.33)) {moveBuff(target,'burn')} else if (rng(0.50)) { moveBuff(target,'paralysis')} else moveBuff(target,'freeze') }},
}

move.judgment = { 
    split: "special",
    type: "normal",
    power: t4Base+50
}

move.rageFist = { 
    split: "physical",
    type: "ghost",
    power: t4Base/2,
    info: function() {return `Multiplies move power by 1.2x everytime its used, up to 5 times. Depletes all stacks upon switching Pokemon`},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++;    },
    affectedBy: [ability.ironFist.id]
}

move.iceBall = {
    split: "physical",
    type: "ice",
    power: t4Base/2,
    info: function() {return `Multiplies move power by 1.2x everytime its used, up to 5 times. Depletes all stacks upon switching Pokemon`},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.2,this.buildup) },
    hitEffect: function(target) { if (this.buildup<5) this.buildup++; },
}

move.tripleAxel = { 
    split: "physical",
    type: "ice",
    power: t4Base/2,
    info: function() {return `Multiplies move power by 1.3x everytime its used, up to 3 times. Depletes all stacks upon switching Pokemon`},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.3,this.buildup) },
    hitEffect: function(target) { if (this.buildup<3) this.buildup++;   },
}

move.attackOrder = { 
    split: "physical",
    type: "bug",
    power: t4Base/3,
    info: function() {return `Multiplies move power by 1.15x everytime its used, up to 10 times. Depletes all stacks upon switching Pokemon`},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.15,this.buildup) },
    hitEffect: function(target) { if (this.buildup<10) this.buildup++;  },
}

move.populationBomb = { 
    split: "physical",
    type: "normal",
    power: t4Base/3,
    info: function() {return `Multiplies move power by 1.15x everytime its used, up to 10 times. Depletes all stacks upon switching Pokemon`},
    buildup: 0,
    powerMod : function() { return 1 * Math.pow(1.15,this.buildup) },
    hitEffect: function(target) { if (this.buildup<10) this.buildup++;  },
}

move.nobleRoar = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Decreases enemy Attack by 100% and Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'atkdown2'); moveBuff(target,'satkdown1') },
}

move.hyperDrill = { 
    split: "physical",
    type: "normal",
    power: t4Base+10
}

move.fieryDance = {
    split: "special",
    type: "fire",
    power: t4Base-20,
    info: function() {return `30% chance to increase Special Attack by 50%`},
    hitEffect: function(target) { if (rng(0.30)) moveBuff(target,'satkup1',"self") },
    affectedBy: [ability.dancer.id]
}

move.torchSong = {
    split: "special",
    type: "fire",
    power: t4Base-40,
    info: function() {return `Increases Special Attack by 50%`},
    hitEffect: function(target) { moveBuff(target,'satkup1',"self") },
    affectedBy: [ability.cacophony.id]
}


move.vCreate = {
    split: "physical",
    type: "fire",
    power: t4Base+30,
    info: function() {return `Decreases Defense, Special Defense and Speed by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`); moveBuff(target,'sdefdown1',`self`); moveBuff(target,'spedown1',`self`); },
    unaffectedBy: [ability.sheerForce.id],
}

move.headlongRush = {
    split: "physical",
    type: "ground",
    power: t4Base+20,
    info: function() {return `Decreases Defense by 50%`},
    hitEffect: function(target) { moveBuff(target,'defdown1',`self`) },
    unaffectedBy: [ability.sheerForce.id],
    affectedBy: [ability.metalhead.id]
}

move.sandsearStorm = {
    split: "special",
    type: "ground",
    power: t4Base,
    info: function() {return `10% chance to inflict ${tagBurn}`},
    hitEffect: function(target) { if (rng(0.10)) moveBuff(target,'burn') },
}

move.splash = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `...`} ,
}

move.conversion = {
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Changes the type of the user to the type of the first move slot`},
    hitEffect: function(target) { pkmn[ team[exploreActiveMember].pkmn.id ].type = [ move[ pkmn[ team[exploreActiveMember].pkmn.id] .moves.slot1  ].type  ] },
}

move.flameBurst = {
    split: "special",
    type: "fire",
    power: t4Base+10,
    info: function() {return `Inflicts ${tagBurn} to the entire team`},
    hitEffect: function(target) { moveBuff(target,'burn',"team") },
}

move.morningSun = { 
    split: "special",
    type: "normal",
    power: 0,
    info: function() {return `Changes the weather to ${tagSunny} and increases Special Attack by 50%`} ,
    hitEffect: function(target) { changeWeather("sunny"); moveBuff(target,'satkup1',"self") },
}






const movesAffectedByToughClaws = []
const movesAffectedByIronFist = []
const movesAffectedBySharpness = []
const movesAffectedByStrongJaw = []
const movesAffectedByMegaLauncher = []
const movesAffectedByDancer = []
const movesAffectedByCacophony = []
const movesAffectedByMetalhead = []

for (const i in move){




    //sheer force
    if (move[i].power>0 && move[i].hitEffect && !move[i].unaffectedBy?.includes(ability.sheerForce.id) ) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.sheerForce.id)} else move[i].affectedBy = [ability.sheerForce.id] }
    //serene grace/pbond
    if (move[i].hitEffect && move[i].hitEffect?.toString().includes('rng(')) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.sereneGrace.id)} else move[i].affectedBy = [ability.sereneGrace.id] }
    if (move[i].hitEffect && move[i].hitEffect?.toString().includes('rng(')) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.parentalBond.id)} else move[i].affectedBy = [ability.parentalBond.id] }
    //technician
    if (move[i].power>0 && move[i].power<=60) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.technician.id)} else move[i].affectedBy = [ability.technician.id] }
    //skill link
    if (move[i].multihit && move[i].multihit[1]>move[i].multihit[0]) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.skillLink.id)} else move[i].affectedBy = [ability.skillLink.id] }
    //reckless/libero
    if (move[i].power>0 && move[i].timer>defaultPlayerMoveTimer) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.reckless.id)} else move[i].affectedBy = [ability.reckless.id] }
    if (move[i].power>0 && move[i].timer<defaultPlayerMoveTimer) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.libero.id)} else move[i].affectedBy = [ability.libero.id] }
    //climaTact
    if (move[i].hitEffect && move[i].hitEffect?.toString().includes('changeWeather(')) { if (move[i].affectedBy) {move[i].affectedBy.push(ability.climaTact.id)} else move[i].affectedBy = [ability.climaTact.id] }
    
        
    


    if (move[i].affectedBy?.includes(ability.toughClaws.id)) movesAffectedByToughClaws.push(i)
    if (move[i].affectedBy?.includes(ability.ironFist.id)) movesAffectedByIronFist.push(i)
    if (move[i].affectedBy?.includes(ability.sharpness.id)) movesAffectedBySharpness.push(i)
    if (move[i].affectedBy?.includes(ability.strongJaw.id)) movesAffectedByStrongJaw.push(i)
    if (move[i].affectedBy?.includes(ability.megaLauncher.id)) movesAffectedByMegaLauncher.push(i)
    if (move[i].affectedBy?.includes(ability.dancer.id)) movesAffectedByDancer.push(i)
    if (move[i].affectedBy?.includes(ability.cacophony.id)) movesAffectedByCacophony.push(i)
    if (move[i].affectedBy?.includes(ability.metalhead.id)) movesAffectedByMetalhead.push(i)


    move[i].id = i
    if (move[i].timer == undefined) move[i].timer = defaultPlayerMoveTimer
}


