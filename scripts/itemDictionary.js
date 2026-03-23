const item = {}

item.blackBelt = {
    subtitle: `(Fighting)`,
    type: "held",
     evo: true,
    info: function() {return `When held: Increase the damage of Fighting-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.blackGlasses = {
    subtitle: `(Dark)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Dark-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.charcoal = {
    subtitle: `(Fire)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Fire-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.dragonFang = {
    subtitle: `(Dragon)`,
    type: "held",
    evo: true,
    info: function() {return `When held: Increase the damage of Dragon-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fairyFeather = {
    subtitle: `(Fairy)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Fairy-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.hardStone = {
    subtitle: `(Rock)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Rock-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.magnet = {
    subtitle: `(Electric)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Electric-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.metalCoat = {
    subtitle: `(Steel)`,
    type: "held",
    evo: true,
    info: function() {return `When held: Increase the damage of Steel-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.miracleSeed = {
    subtitle: `(Grass)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Grass-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.mysticWater = {
    subtitle: `(Water)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Water-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.neverMeltIce = {
    subtitle: `(Ice)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Ice-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.poisonBarb = {
    subtitle: `(Poison)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Poison-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.sharpBeak = {
    subtitle: `(Flying)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Flying-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.silkScarf = {
    subtitle: `(Normal)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Normal-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.silverPowder = {
    subtitle: `(Bug)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Bug-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.softSand = {
    subtitle: `(Ground)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Ground-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.spellTag = {
    subtitle: `(Ghost)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Ghost-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.twistedSpoon = {
    subtitle: `(Psychic)`,
    type: "held",
    info: function() {return `When held: Increase the damage of Psychic-Type moves by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.eviolite = {
    type: "held",
    info: function() {return `When held: If a Pokemon has not fully evolved, decreases damage taken by x${this.power().toFixed(2)}. This does not apply to final-stage Pokemon with a Mega-Evolution`},
    power : function() { return 1+(returnItemLevel(this.id)/5)}
}

item.lightClay = {
    type: "held",
    info: function() {return `When held: Increases the duration of positive buffs used by 1 turn and increases damage dealt by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.mentalHerb = {
    type: "held",
    info: function() {return `When held: Decreases the duration of negative buffs received by 1 turn and decreases damage taken by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.flameOrb = {
    type: "held",
    info: function() {return `When held: Increases the Damage of the user by x${this.power().toFixed(2)}, but inflicts ${tagBurn}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.toxicOrb = {
    type: "held",
    info: function() {return `When held: Increases the Damage of the user by x${this.power().toFixed(2)}, but inflicts ${tagPoisoned}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.choiceBand = {
    type: "held",
    info: function() {return `When held: Increases the Attack of the user by x${this.power().toFixed(2)}, but prevents them from switching`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.choiceSpecs = {
    type: "held",
    info: function() {return `When held: Increases the Special Attack of the user by x${this.power().toFixed(2)}, but prevents them from switching`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.lifeOrb = {
    type: "held",
    info: function() {return `When held: Increases the damage of the user by x${this.power().toFixed(2)}, but loses 1/10 of its max HP per turn`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.assaultVest = {
    type: "held",
    info: function() {return `When held: Increase overall defense by x${this.power().toFixed(2)}, but the user cannot use moves with 0 power`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.clearAmulet = {
    type: "held",
    info: function() {return `When held: Decreases the duration of negative buffs received by ${Math.floor(this.power())} turns`},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.ejectPack = {
    type: "held",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)}, but once all the moves of the user are executed, switch to the previous team member`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.ejectButton = {
    type: "held",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)}, but once all the moves of the user are executed, switch to the next team member`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.quickClaw = {
    type: "held",
    info: function() {return `When held: Moves that attack faster than usual are executed x${this.power().toFixed(2)} faster`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.loadedDice = {
    type: "held",
    info: function() {return `When held: Multi-hit moves are guaranteed to hit their maximum amount of times and deal x${this.power().toFixed(2)} more damage`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.metronome = {
    type: "held",
    info: function() {return `When held: Moves that get more powerful the more stacks they have deal x${this.power().toFixed(2)} more damage`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.powerHerb = {
    type: "held",
    info: function() {return `When held: Moves that have 0 power execute x${this.power().toFixed(2)} faster`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.luckyPunch = {
    type: "held",
    info: function() {return `When held: Moves affected by Iron Fist deal x${this.power().toFixed(2)} more damage, and their secondary effects are executed twice`},
    power : function() { return 1.1+(0.15*returnItemLevel(this.id))}
}

item.laggingTail = {
    type: "held",
    info: function() {return `When held: Moves that attack slower than usual deal x${this.power().toFixed(2)} more damage`},
    power : function() { return 1.1+(0.15*returnItemLevel(this.id))}
}

item.weaknessPolicy = {
    type: "held",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and increases Speed by 50% for 8 turns when hit by a Super-Effective move`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.heavyDutyBoots = {
    type: "held",
    info: function() {return `When held: Prevents the damage from Stealth Rocks field effect and decreases damage taken by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.leftovers = {
    type: "held",
    info: function() {return `When held: Decreases fatigue damage of the user by x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}



item.bugGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Bug-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.darkGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Dark-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.dragonGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Dragon-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.electricGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Electric-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fairyGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Fairy-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fightingGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Fighting-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fireGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Fire-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.flyingGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Flying-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.ghostGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Ghost-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.grassGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Grass-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.groundGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Ground-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.iceGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Ice-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.normalGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Normal-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.poisonGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Poison-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.psychicGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Psychic-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.rockGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Rock-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.steelGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Steel-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.waterGem = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Increases damage dealt by x${this.power().toFixed(2)} and enables Water-Type moves to receive STAB bonuses`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}













item.luckIncense = {
    type: "held",
    info: function() {return `When held: Increases the weight of rare item drops by ${this.power()}%. Works always for everyone regardless of the holder`},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.pureIncense = {
    type: "held",
    info: function() {return `When held: Increases the weight of rare pokemon by ${this.power()}%. Works always for everyone regardless of the holder`},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.luckyEgg = {
    type: "held",
    info: function() {return `When held: Increases the experience gained by the pokemon by ${this.power()}%`},
    power : function() { return 40+(10*returnItemLevel(this.id))}
}

item.shinyCharm = {
    type: "held",
    info: function() {return `When held: Increases the chance of encountering a wild shiny pokemon by ${this.power()}%. Works always for everyone regardless of the holder`},
    power : function() { return 0+(10*returnItemLevel(this.id))}
}


item.occaBerry = {
    subtitle: `(Fire)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Fire-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.passhoBerry = {
    subtitle: `(Water)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Water-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.wacanBerry = {
    subtitle: `(Electric)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Electric-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.rindoBerry = {
    subtitle: `(Grass)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Grass-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.yacheBerry = {
    subtitle: `(Ice)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Ice-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chopleBerry = {
    subtitle: `(Fighting)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Fighting-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kebiaBerry = {
    subtitle: `(Poison)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Poison-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.shucaBerry = {
    subtitle: `(Ground)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Ground-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.cobaBerry = {
    subtitle: `(Flying)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Flying-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.payapaBerry = {
    subtitle: `(Psychic)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Psychic-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.tangaBerry = {
    subtitle: `(Bug)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Bug-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chartiBerry = {
    subtitle: `(Rock)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Rock-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kasibBerry = {
    subtitle: `(Ghost)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Ghost-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.habanBerry = {
    subtitle: `(Dragon)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Dragon-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.colburBerry = {
    subtitle: `(Dark)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Dark-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.babiriBerry = {
    subtitle: `(Steel)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Steel-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.roseliBerry = {
    subtitle: `(Fairy)`,
    type: "held",
    sort: "berry",
    info: function() {return `When held: Decreases the super-effective damage taken from Fairy-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}


item.terrainExtender = {
    type: "held",
    info: function() {return `When held: Increases the duration of ${tagTrickRoom}, ${tagWeirdRoom}, ${tagCrossRoom}, ${tagLightScreen} and ${tagSafeguard} by ${this.power()} turns`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.dampRock = {
    type: "held",
    info: function() {return `When held: Increases the duration of ${tagRainy} weather by ${this.power()} turns`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.heatRock = {
    type: "held",
    info: function() {return `When held: Increases the duration of ${tagSunny} weather by ${this.power()} turns`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.icyRock = {
    type: "held",
    info: function() {return `When held: Increases the duration of ${tagHail} weather by ${this.power()} turns`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.smoothRock = {
    type: "held",
    info: function() {return `When held: Increases the duration of ${tagSandstorm} weather by ${this.power()} turns`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.electricSeed = {
    type: "held",
    info: function() {return `When held: Increases the duration of ${tagElectricTerrain} by ${this.power()} turns`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.grassySeed = {
    type: "held",
    info: function() {return `When held: Increases the duration of ${tagGrassyTerrain} by ${this.power()} turns`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.mistySeed = {
    type: "held",
    info: function() {return `When held: Increases the duration of ${tagMistyTerrain} by ${this.power()} turns`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.foggySeed = {
    type: "held",
    info: function() {return `When held: Increases the duration of ${tagFoggy} weather by ${this.power()} turns`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}








item.bottleCap = {
    type: "key",
    info: function() {return `Obtained when acquiring an exceeding number of items (20+ for held items) or exchanged with other currencies`},
}

item.goldenBottleCap = {
    type: "key",
    info: function() {return `Obtained in the Battle Frontier`},
}




item.timeCandy = {
    type: "key",
    usable: true,
    effect: function() {  if(afkSeconds<=0 && saved.currentArea!==areas.frontierSpiralingTower.id && saved.currentArea!==undefined) {afkSeconds += 10*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Can't do that right now`; openTooltip()}  },
    info: function() {return `Use: Fast-forward battle time by 10 minutes. Must be used while battling`},
}

item.timeCandyXL = {
    type: "key",
    usable: true,
    effect: function() {  if(afkSeconds<=0 && saved.currentArea!==areas.frontierSpiralingTower.id && saved.currentArea!==undefined) {afkSeconds += 30*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Can't do that right now`; openTooltip()}  },
    info: function() {return `Use: Fast-forward battle time by 30 minutes. Must be used while battling`},
}

item.festivalTicket = {
    type: "key",
    usable: true,
    effect: function() {
        seasonalSwitch() 
    },
    info: function() {return `Use: Triggers a specified seasonal event for the next 10 days. It will last for the 10 following days, and will get replaced by currently-ongoing ones. However, the seasonal shop of that event wont open`},
}






item.rareCandy = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Use: Increase the level of a Pokemon by 1`},
}

item.abilityPatch = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Use: Re-roll the ability of a Pokemon`},
}

item.abilityCapsule = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Use: Unlock the hidden ability of a Pokemon`},
}

item.heartScale = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Use: Re-learn a previously learned move acquired through genetics inheriting (excluding moves inherited through Lock Capsules)`},
}

item.energyRoot = {
    type: "key",
    usable: true,
    effect: function() {  if(saved.geneticOperation > 1) {afkSecondsGenetics += 30*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Can't do that right now`; openTooltip()}  },
    info: function() {return `Use: Fast-forward genetic operation time by 30 minutes. Must be used while an active operation is ongoing`},
}

item.fashionCase = {
    type: 'key',
    usable: true,
    info: function() {return `Use: Get a random Decor`},
    effect: function() {

    let pickedDecor = []

    for (const i in item){
        if (item[i].type !== "decor") continue
        if (item[i].rarity == undefined) continue
        if (item[i].rarity == "rare" && rng(0.1)) pickedDecor.push(i)
        if (item[i].rarity == "common") pickedDecor.push(i)
    }

    pickedDecor = arrayPick(pickedDecor)


        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").style.display = "inline"
        document.getElementById("tooltipTop").innerHTML = `<img src="img/decor/${pickedDecor}.png" style="scale:2">`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >${format(pickedDecor)} Decor got!</div>
        </div>
        `

    item[pickedDecor].got++
    this.got--;
    updateItemBag()
    openTooltip()


    

    },
}



item.neutralMint = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Use: Removes the nature of a Pokemon`},
}



item.autoRefightTicket = {
    type: "key",
    info: function() {return `Can be used to automatically refight battles. Cannot refight while the browser is closed. Consumed once a battle is won`},
}














item.yellowApricorn = {
    type: "key",
    info: function() {return `Obtained in T3 and T4 raids. Exchanged in the Poke-Mart`},
}

item.pinkApricorn = {
    type: "key",
    info: function() {return `Obtained in T3 and T4 raids. Exchanged in the Poke-Mart`},
}

item.greenApricorn = {
    type: "key",
    info: function() {return `Obtained in T3 and T4 raids. Exchanged in the Poke-Mart`},
}

item.whiteApricorn = {
    type: "key",
    info: function() {return `Obtained in ★ and ★★ mega-dimension raids. Exchanged in the Poke-Mart`},
}

item.blackApricorn = {
    type: "key",
    info: function() {return `Obtained in ★★★ and ★★★★ mega-dimension raids. Exchanged in the Poke-Mart`},
}







item.megaShard = {
    type: "key",
    info: function() {return `Can be used to catch Pokemon in the Mega-Dimension. Expires after the current Mega-Dimension rotation ends`},
}

item.megaPiece = {
    type: "key",
    info: function() {return `Can be used to catch Pokemon in the Mega-Dimension. Expires after the current Mega-Dimension rotation ends`},
}

item.megaChunk = {
    type: "key",
    info: function() {return `Can be used to catch Pokemon in the Mega-Dimension. Expires after the current Mega-Dimension rotation ends`},
}

item.megaCluster = {
    type: "key",
    info: function() {return `Can be used to catch Pokemon in the Mega-Dimension. Expires after the current Mega-Dimension rotation ends`},
}

item.primalEarth = {
    type: "key",
    rotation: 2,
    itemToUse : true,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}


item.thunderousRock = {
    type: "key",
    rotation: 1,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.articRock = {
    type: "key",
    rotation: 1,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.ancientOrchid = {
    type: "key",
    rotation: 2,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.futureDisk = {
    type: "key",
    rotation: 5,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.ancientKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
    
}

item.steelKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.frozenKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.aetherKeycard = {
    type: "key",
    rotation: 4,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.wormholeResidue = {
    type: "key",
    rotation: 4,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.futureContraption = {
    type: "key",
    rotation: 5,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}


item.redChain = {
    type: "key",
    rotation: 6,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.wisdomPetal = {
    type: "key",
    rotation: 6,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.epochFeather = {
    type: "key",
    rotation: 1,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}

item.pokeflute = {
    type: "key",
    rotation: 1,
    info: function() {return `Can be used to catch event Pokemon. Expires after event finishes`},
}










item.oldGateau = {
    type: "key",
    event: `halloween`,
    info: function() {return `Seasonal item, dropped randomly from defeating wild Pokemon. Expires on ${season[saved.currentSeason].end.month}/${season[saved.currentSeason].end.day}`},
}































item.hpUp = {
    subtitle: `(Hp)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Use: Increase the HP IV of a Pokemon by 1`},
}

item.protein = {
    subtitle: `(Attack)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Use: Increase the Attack IV of a Pokemon by 1`},
}

item.iron = {
    subtitle: `(Defense)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Use: Increase the Defense IV of a Pokemon by 1`},
}

item.calcium = {
    subtitle: `(Special Attack)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Use: Increase the Special Attack IV of a Pokemon by 1`},
}

item.zinc = {
    subtitle: `(Special Defense)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Use: Increase the Special Defense IV of a Pokemon by 1`},
}

item.carbos = {
    subtitle: `(Speed)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Use: Increase the Speed IV of a Pokemon by 1`},
}




item.waterStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.thunderStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.sunStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.linkStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel4}+)`},
}

item.ovalStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.moonStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.leafStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.iceStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.fireStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.duskStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.dawnStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.shinyStone = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.oddRock = {
    evo: true,
    info: function() {return `Use: Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel4}+)`},
}


item.everstone = {
    rename: `neverstone`,
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Rerolls the ability of the Host Pokemon. It has an increased chance to reroll uncommon and rare abilities`},
}

item.powerAnklet = {
    subtitle: `(Speed)`,
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Guarantees the chance to inherit Speed Iv's`},
}

item.powerBand = {
    subtitle: `(Special Defense)`,
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Guarantees the chance to inherit Special Defense Iv's`},
}

item.powerBelt = {
    subtitle: `(Defense)`,
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Guarantees the chance to inherit Defense Iv's`},
}

item.powerBracer = {
    subtitle: `(Attack)`,
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Guarantees the chance to inherit Attack Iv's`},
}

item.powerLens = {
    subtitle: `(Special Attack)`,
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Guarantees the chance to inherit Special Attack Iv's`},
}

item.powerWeight = {
    subtitle: `(Hp)`,
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Guarantees the chance to inherit HP Iv's`},
}

item.machoBrace = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Multiplies by 10 the chance to inherit Iv's`},
}

item.lockCapsule = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Transfers the currently equipped moves of the sample to the movepool of the host. The host will retain both its equipped moves and the newly transferred ones, but the sample will lose it's equipped ones. Can only be used with at least one level of compatibility, and does not work on signature moves`},
}

item.destinyKnot = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Swaps the ability of the Pokemon with the sample. Can only be used with at least one level of compatibility and does not work on hidden abilities`},
}













item.abomasite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAbomasnow.id },
}

item.absolite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAbsol.id },
    // obtainable
    cannotObtain: true,
}

item.aerodactylite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAerodactyl.id },
}

item.aggronite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAggron.id },
}

item.alakazite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAlakazam.id },
}

item.altarianite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAltaria.id },
    // obtainable
    cannotObtain: true,
}

item.ampharosite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAmpharos.id },
    // obtainable
    cannotObtain: true,
}

item.audinite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAudino.id },
    // obtainable
    cannotObtain: true,
}

item.banettite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBanette.id },
    // obtainable
    cannotObtain: true,
}

item.barbaracite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBarbaracle.id },
}

item.baxcaliburite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBaxcalibur.id },
}

item.beedrillite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBeedrill.id },
}

item.blastoisinite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBlastoise.id },
}

item.blazikenite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBlaziken.id },
}

item.cameruptite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCamerupt.id },
}

item.charizarditeX = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCharizardX.id },
}

item.charizarditeY = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCharizardY.id },
}

item.diancite = {
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaDiancie.id },
    // obtainable
    cannotObtain: true,
}

item.dragonitite = {
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaDragonite.id },
}

item.falinksite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaFalinks.id },
}

item.galladite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGallade.id },
}

item.garchompite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGarchomp.id },
}

item.glalitite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGlalie.id },
}

item.gardevoirite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGardevoir.id },
    // obtainable
    cannotObtain: true,
}

item.gengarite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGengar.id },
}

item.gyaradosite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGyarados.id },
}

item.heracronite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHeracross.id },
}

item.houndoominite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHoundoom.id },
    // obtainable
    cannotObtain: true,
}

item.hawluchanite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHawlucha.id },
}

item.kangaskhanite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaKangaskhan.id },
    // obtainable
    cannotObtain: true,
}

item.lopunnite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaLopunny.id },
    // obtainable
    cannotObtain: true,
}

item.lucarionite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaLucario.id },
}

item.manectite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaManectric.id },
}

item.mawilite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMawile.id },
}

item.medichamite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMedicham.id },
    // obtainable
    cannotObtain: true,
}

item.metagrossite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMetagross.id },
}

item.mewtwoniteX = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMewtwoX.id },
    // obtainable
    cannotObtain: true,
}

item.mewtwoniteY = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMewtwoY.id },
    // obtainable
    cannotObtain: true,
}

item.pidgeotite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPidgeot.id },
}

item.pyroarite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPyroar.id },
}


item.pinsirite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPinsir.id },
}


item.raichutiteX = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaRaichuX.id },
}

item.raichutiteY = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaRaichuY.id },
}

item.sablenite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSableye.id },
    // obtainable
    cannotObtain: true,
}



item.salamencite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSalamence.id },
    // obtainable
    cannotObtain: true,
}

item.sceptilite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSceptile.id },
}

item.scizorite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaScizor.id },
}

item.sharpedonite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSharpedo.id },
    // obtainable
    cannotObtain: true,
}

item.slowbronite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSlowbro.id },
    // obtainable
    cannotObtain: true,
}

item.steelixite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSteelix.id },
}

item.swampertite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSwampert.id },
}

item.tyranitarite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaTyranitar.id },
}

item.venusaurite = {
    
    evo: true,
    info: function() {return `Use: Evolve a certain Pokemon<br>When held: Increases the damage dealt by ${format(this.heldBonusPkmn())} by x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaVenusaur.id },
}

















item.magazineSubscription = {
    type: "key",
    info: function() {return `Permanent Upgrade: Daily export rewards award an extra Fashion Case`},
}

item.battlePass = {
    type: "key",
    info: function() {return `Permanent Upgrade: Trainers in the battle frontier award +3 extra Golden Bottle Caps`},
}

item.replicatorUpgradeS = {
    type: "key",
    info: function() {return `Permanent Upgrade: Decrease the time required for genetic operations by 30 minutes (Up to a minimum of 10 minutes)`},
}

item.replicatorUpgradeE = {
    type: "key",
    info: function() {return `Permanent Upgrade: Allows ALL moves to be inheritable to a host of B division and below (including Signature and Egg moves). For this to happen, at least two levels of compatibility are needed<br><br>Two or more exact Egg Moves transferred this way can't be present at the same time on a single team, unless the user of the move has said move as an inherent Egg Move or Signature Move`},
}



item.mysteryEgg = {
    info: function() {return `An unhatched egg. Leave combat to discover the contents!`},
    hidden:true
}

item.tmDummy = {
    hidden:true
}

item.nothing = {
    hidden:true
}






item.buginiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Bug-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `bug`
}

item.darkiniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Dark-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `dark`
}

item.dragoniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Dragon-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `dragon`
}

item.electriumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Electric-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `electric`
}

item.fairiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Fairy-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fairy`
}

item.fightiniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Fighting-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fighting`
}

item.firiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Fire-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fire`
}

item.flyiniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Flying-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `flying`
}

item.ghostiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Ghost-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ghost`
}

item.grassiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Grass-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `grass`
}

item.groundiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Ground-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ground`
}

item.iciumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Ice-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ice`
}

item.normaliumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Normal-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `normal`
}

item.poisoniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Poison-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `poison`
}

item.psychiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Psychic-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `psychic`
}

item.rockiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Rock-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `rock`
}

item.steeliumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Steel-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `steel`
}

item.wateriumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `When held: Regardless of the holder, every ${this.power()} turns, executes a coordinated Water-type attack if the holder isnt fainted. Whether its physical or special depends on the highest stat of the holder (If they are equal, it will be random, but deal x1.25 more damage). This attack benefits from holder stats and typing but not from their abilities nor buffs. Only one Z crystal can be equipped per team`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `water`
}




//normal
item.quickAttackTm  = {}
item.swiftTm  = {}
item.strengthTm  = {}
//fire
item.emberTm  = {}
item.incinerateTm = {}
item.flamethrowerTm = {}
//electric    
item.nuzzleTm = {}
item.thunderPunchTm = {}
item.thunderboltTm = {}
//ground
item.mudSlapTm = {}
item.bulldozeTm = {}
item.earthquakeTm = {}
//steel
item.bulletPunchTm = {}
item.metalClawTm = {}
item.flashCannonTm = {}
//flying
item.peckTm = {}
item.acrobaticsTm = {}
item.flyTm = {}
//poison
item.acidTm = {}
item.crossPoisonTm = {}
item.sludgeBombTm = {}
//ice
item.iceShardTm = {}
item.avalancheTm = {}
item.iceBeamTm = {}
//bug
item.twineedleTm = {}
item.bugBiteTm = {}
item.bugBuzzTm = {}
//water
item.waterGunTm = {}
item.waterPulseTm = {}
item.aquaTailTm = {}
//grass
item.leafageTm = {}
item.magicalLeafTm = {}
item.leafBladeTm = {}
//fighting
item.rockSmashTm = {}
item.forcePalmTm = {}
item.auraSphereTm = {}
//psychic
item.confusionTm = {}
item.psychoCutTm = {}
item.psychicTm = {}
//rock
item.rockThrowTm = {}
item.rockSlideTm = {}
item.powerGemTm = {}
//ghost
item.lickTm = {}
item.hexTm = {}
item.shadowBallTm = {}
//dragon
item.twisterTm = {}
item.dragonTailTm = {}
item.dragonRushTm = {}
item.dragonPulseTm = {}
//fighting
item.pursuitTm = {}
item.biteTm = {}
item.darkPulseTm = {}
//fairy
item.disarmingVoiceTm = {}
item.dazzlingGleamTm = {}
item.playRoughTm = {}

//shop


item.tackleTm = {}
item.quickAttackTm = {}
item.leerTm = {}


item.bulkUpTm = {}
item.thunderWaveTm = {}
item.toxicTm = {}
item.willOWispTm = {}

item.calmMindTm = {}
item.sunnyDayTm = {}
item.rainDanceTm = {}

item.crunchTm = {}
item.xScissorTm = {}
item.moonblastTm = {}

item.fireBlastTm = {}
item.hydroPumpTm = {}
item.thunderTm = {}
item.hyperBeamTm = {}

//frontier
item.swaggerTm = {}
item.ironDefenseTm = {}
item.feintAttackTm = {}
item.chillingWaterTm = {}
item.silverWindTm = {}
item.avalancheTm = {}
item.knockOffTm = {}
item.ominousWindTm = {}
item.flameChargeTm = {}
item.acidSprayTm = {}

item.hailTm = {}
item.fogTm = {}
item.sandstormTm = {}
item.electricTerrainTm = {}
item.mistyTerrainTm = {}
item.grassyTerrainTm = {}

item.nastyPlotTm = {}
item.swordsDanceTm = {}
item.voltSwitchTm = {}
item.uTurnTm = {}

item.chargeBeamTm = {}
item.dischargeTm = {}
item.scorchingSandsTm = {}
item.airShlashTm = {rename:`airSlashTm`}
item.poisonJabTm = {}
item.liquidationTm = {}
item.energyBallTm = {}
item.skyUppercutTm = {}
item.dracoMeteorTm = {}
item.spiritBreakTm = {}




item.trickRoomTm = {}
item.crossRoomTm = {}
item.weirdRoomTm = {}
item.safeguardTm = {}
item.lightScreenTm = {}



//memory

item.hydratationMemory = {rename:`hydrationMemory`}
item.sandVeilMemory = {}
item.snowCloakMemory = {}
item.marvelScaleMemory = {}
item.livingShieldMemory = {}
item.bigPecksMemory = {}
item.hyperCutterMemory = {}
item.synchronizeMemory = {}
item.iceBodyMemory = {}

item.rainDishMemory = {}
item.solarPowerMemory = {}
item.sandForceMemory = {}
item.scrappyMemory = {}

item.strongJawMemory = {}
item.toughClawsMemory = {}
item.ironFistMemory = {}
item.magicGuardMemory = {}

item.pickPocketMemory = {}







//decor


item.blueBarrette = { type: "decor", rarity: `common`} 
item.pinkBarrette = { type: "decor", rarity: `common`} 
item.greenBarrette = { type: "decor", rarity: `common`} 
item.blueBarrette = { type: "decor", rarity: `common`} 

item.blueFlower = { type: "decor", rarity: `common` } 
item.purpleFlower = { type: "decor", rarity: `common` } 
item.redFlower = { type: "decor", rarity: `common` } 

item.blueBalloon = { type: "decor", rarity: `common` } 
item.redBalloon = { type: "decor", rarity: `common` } 
item.greenBalloon = { type: "decor", rarity: `common` } 

item.professorHat = { type: "decor", rarity: `common` } 
item.academicHat = { type: "decor", rarity: `common` } 

item.redBall = { type: "decor", rarity: `common` } 
item.greenBall = { type: "decor", rarity: `common` } 
item.blueBall = { type: "decor", rarity: `common` } 

item.redHeaddress = { type: "decor", rarity: `common` } 
item.purpleHeaddress = { type: "decor", rarity: `common` } 
item.tealHeaddress = { type: "decor", rarity: `common` } 

item.blackTie = { type: "decor", rarity: `common` } 
item.whiteTie = { type: "decor", rarity: `common` } 
item.stripedTie = { type: "decor", rarity: `common` } 
item.greenTie = { type: "decor", rarity: `common` } 
item.orangeTie = { type: "decor", rarity: `common` } 
item.blueTie = { type: "decor", rarity: `common` } 

item.blackBowtie = { type: "decor", rarity: `common` } 
item.pinkBowtie = { type: "decor", rarity: `common` } 
item.blueBowtie = { type: "decor", rarity: `common` } 
item.yellowBowtie = { type: "decor", rarity: `common` } 

item.tealHeadband = { type: "decor", rarity: `common` } 
item.greenHeadband = { type: "decor", rarity: `common` } 
item.yellowHeadband = { type: "decor", rarity: `common` } 

item.blackScarf = { type: "decor", rarity: `common` } 
item.whiteScarf = { type: "decor", rarity: `common` } 
item.redScarf = { type: "decor", rarity: `common` } 
item.blueScarf = { type: "decor", rarity: `common` } 

item.yellowStar = { type: "decor", rarity: `common` } 
item.tealStar = { type: "decor", rarity: `common` } 
item.redStar = { type: "decor", rarity: `common` } 

item.blackMoustache = { type: "decor", rarity: `common` } 
item.whiteMoustache = { type: "decor", rarity: `common` } 

item.microphone = { type: "decor", rarity: `common` } 
item.oldUmbrella = { type: "decor", rarity: `common` } 
item.coloredParasol = { type: "decor", rarity: `common` } 
item.pokeballFlag = { type: "decor", rarity: `common` } 
item.pinkMushroom = { type: "decor", rarity: `common` } 
item.yellowStarBalloon = { type: "decor", rarity: `common` } 
item.blackSpecs = { type: "decor", rarity: `common` } 
item.googlySpecs = { type: "decor", rarity: `common` } 
item.topHat = { type: "decor", rarity: `common` } 
item.gentlemanHat = { type: "decor", rarity: `common` } 
item.silverTiara = { type: "decor", rarity: `common` } 


//rare decor
item.frillyApron = { type: "decor", rarity: `rare` } 
item.chefHat = { type: "decor", rarity: `rare` } 
item.fluffyBeard = { type: "decor", rarity: `rare` } 
item.hummingNote = { type: "decor", rarity: `rare` } 
item.prettyDewdrop = { type: "decor", rarity: `rare` } 
item.spotlight = { type: "decor", rarity: `rare` } 
item.glitterPowder = { type: "decor", rarity: `rare` } 
item.confetti = { type: "decor", rarity: `rare` } 
item.comet = { type: "decor", rarity: `rare` } 
item.gorgeousSpecs = { type: "decor", rarity: `rare` } 
item.mysticSmoke = { type: "decor", rarity: `rare` } 













item.flashHerbaMemory = { rarity: "common", }
item.flashFaeMemory = { rarity: "common", }
item.flashPsychaMemory = { rarity: "common", }
item.flashCryoMemory = { rarity: "common", }
item.flashVenumMemory = { rarity: "common", }
item.flashUmbraMemory = { rarity: "common", }
item.flashPyroMemory = { rarity: "common", }
item.flashAquaMemory = { rarity: "common", }
item.flashElectroMemory = { rarity: "common", }
item.liberoMemory = { rarity: "common", }
item.recklessMemory = { rarity: "common", }
item.filterMemory = { rarity: "common", }
item.justifiedMemory = { rarity: "common", }
item.angerPointMemory = { rarity: "common", }
item.sharpnessMemory = { rarity: "common", }
item.gutsMemory = { rarity: "common", }
item.multiscaleMemory = { rarity: "common", }
item.noGuardMemory = { rarity: "common",  typings : ["fighting"] }
item.ambidextrousMemory = { rarity: "common",  typings : ["bug"] }
item.adaptabilityMemory = { rarity: "common",  typings : ["normal"] }
item.thickFatMemory = { rarity: "common", }
item.levitateMemory = { rarity: "common", }
item.sheerForceMemory = { rarity: "common", }
item.strategistMemory = { rarity: "common", }
item.moxieMemory = { rarity: "common", }
item.unburdenMemory = { rarity: "common", }
item.dauntingLookMemory = { rarity: "common", }
item.intimidateMemory = { rarity: "common", }
item.sandRushMemory = { rarity: "common", }
item.swiftSwimMemory = { rarity: "common", }
item.slushRushMemory = { rarity: "common", }
item.moltShedMemory = { rarity: "common", }
item.faeRushMemory = { rarity: "common", }
item.hyperconductorMemory = { rarity: "common", }
item.intangibleMemory = { rarity: "common", }
item.climaTactMemory = { rarity: "common", }
item.spikyPeltMemory = { rarity: "common", }
item.blackPeltMemory = { rarity: "common", }
item.pixiePeltMemory = { rarity: "common", rename:`fuzzyPeltMemory`}
item.fieryPeltMemory = { rarity: "common", }
item.moistPeltMemory = { rarity: "common", }
item.icyPeltMemory = { rarity: "common", }
item.sandyPeltMemory = { rarity: "common", }
item.grassyPeltMemory = { rarity: "common", }




//has
item.stonedMemory = { typings : ["rock"], rarity: "rare" }
item.staminaMemory = { typings : ["fighting"], rarity: "rare" }
item.gooeyMemory = { typings : ["poison"], rarity: "rare" }
item.shieldsDownMemory = { typings : ["steel"], rarity: "rare" }
item.costarMemory = { typings : ["fairy"], rarity: "rare" }
item.purifyingSaltMemory = { typings : ["rock"], rarity: "rare" }
item.scorchMemory = { typings : ["fire"], rarity: "rare" }
item.corrosionMemory = { typings : ["poison"], rarity: "rare" }
item.megaLauncherMemory = { typings : ["electric"], rarity: "rare" }
item.metalheadMemory = { typings : ["steel"], rarity: "rare" }
item.moodyMemory = { typings : ["normal"], rarity: "rare" }
item.mercilessMemory = { typings : ["dark"], rarity: "rare" }
item.colorSporeMemory = { typings : ["grass"], rarity: "rare" }
item.sandStreamMemory = { typings : ["ground"], rarity: "rare" }
item.snowWarningMemory = { typings : ["ice"], rarity: "rare" }
item.somberFieldMemory = { typings : ["dark"], rarity: "rare" }


//white exclusive
item.dancerMemory = { typings : ["fighting"], rarity: "white" }
item.cacophonyMemory = { typings : ["normal"], rarity: "white" }
item.windRiderMemory = { typings : ["flying"], rarity: "white" }
item.gorillaTacticsMemory = { typings : ["fighting"], rarity: "white" }
item.imposterMemory = { typings : ["dark"], rarity: "white" }
item.drizzleMemory = { typings : ["water"], rarity: "white" }
item.droughtMemory = { typings : ["fire"], rarity: "white" }
item.electricSurgeMemory = { typings : ["electric"], rarity: "white" }
item.grassySurgeMemory = { typings : ["grass"], rarity: "white" }
item.mistySurgeMemory = { typings : ["psychic"], rarity: "white" }
item.ferrilateMemory = { typings : ["steel"], rarity: "white" }
item.glaciateMemory = { typings : ["ice"], rarity: "white" }
item.terralateMemory = { typings : ["ground"], rarity: "white" }
item.toxilateMemory = { typings : ["poison"], rarity: "white" }
item.hydrolateMemory = { typings : ["water"], rarity: "white" }
item.pyrolateMemory = { typings : ["fire"], rarity: "white" }
item.chrysilateMemory = { typings : ["bug"], rarity: "white" }
item.galvanizeMemory = { typings : ["electric"], rarity: "white" }
item.gloomilateMemory = { typings : ["dark"], rarity: "white" }
item.espilateMemory = { typings : ["psychic"], rarity: "white" }
item.aerilateMemory = { typings : ["flying"], rarity: "white" }
item.pixilateMemory = { typings : ["fairy"], rarity: "white" }
item.verdifyMemory = { typings : ["grass"], rarity: "white" }
item.dragonMawMemory = { typings : ["dragon"], rarity: "white" }
item.iaidoMemory = { typings : ["steel"], rarity: "white" }




/*
item.blackCape = { type: "decor" } 
item.crown = { type: "decor" } 
item.determination = { type: "decor" } 
item.pinkHeartBalloon = { type: "decor" } 
item.silverTiara = { type: "decor" } 
*/

item.wealthyCoins = { type: "decor"} 
item.witchyHat = { type: "decor"} 


for (const i in item){
    item[i].id = i
    item[i].newItem = 0
    item[i].got = 0
}

//tms
for (const i in item){
    if (i.endsWith("Tm")) {
        item[i].move = i.slice(0, -2); 
        item[i].type = "tm";
        
        item[i].info = function () { return `Use: Teach the move <span data-move="${move[item[i].move].id}" ><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(move[item[i].move].type)}">${format(move[item[i].move].id)}</span></span> to ${joinWithOr(move[item[i].move].moveset)} Pokemon`}        
    }

    if (i.endsWith("Memory")) {
        item[i].ability = i.slice(0, -6); 
        item[i].type = "memory";
        
        item[i].image = "dark"
        

        if (item[i].typings && item[i].typings[0]!="normal") item[i].image = item[i].typings[0]
        else if (item[i].typings== undefined && ability[item[i].ability].type[0]!="all" && ability[item[i].ability].type[0]!="normal") item[i].image = ability[item[i].ability].type[0]

        if (item[i].typings!=undefined) item[i].info = function () { return `Use: Teach the ability <span data-ability="${ability[item[i].ability].id}" ><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(item[i].image)}">${format(ability[item[i].ability].id)}</span></span> to ${joinWithOr(item[i].typings)} Pokemon`}        
        else item[i].info = function () { return `Use: Teach the ability <span data-ability="${ability[item[i].ability].id}" ><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(item[i].image)}">${format(ability[item[i].ability].id)}</span></span> to ${joinWithOr(ability[item[i].ability].type)} Pokemon`}        
    }

    if (item[i].type == "decor") {
    item[i].itemToUse =  true,
    item[i].info = function () { return `Use: Unlock this cosmetic for a selected Pokemon`}
    }        

}

function joinWithOr(list) {
    if (list.includes("all")) return "all";

    const formatted = list.map(x => format(x));
    const len = formatted.length;

    if (len === 0) return "";
    if (len === 1) return formatted[0];
    if (len === 2) return `${formatted[0]} or ${formatted[1]}`;

    return `${formatted.slice(0, -1).join(", ")}, or ${formatted[len - 1]}`;
}

function joinWithAnd(list) {
    if (list.includes("all")) return "all";

    const formatted = list.map(x => format(x));
    const len = formatted.length;

    if (len === 0) return "";
    if (len === 1) return formatted[0];
    if (len === 2) return `${formatted[0]} and ${formatted[1]}`;

    return `${formatted.slice(0, -1).join(", ")}, and ${formatted[len - 1]}`;
}

