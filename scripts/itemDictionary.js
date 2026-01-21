const item = {}

item.blackBelt = {
    type: "held",
     evo: true,
    info: function() {return `When held: Increase the power of Fighting-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.blackGlasses = {
    type: "held",
    info: function() {return `When held: Increase the power of Dark-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.charcoal = {
    type: "held",
    info: function() {return `When held: Increase the power of Fire-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.dragonFang = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increase the power of Dragon-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.fairyFeather = {
    type: "held",
    info: function() {return `When held: Increase the power of Fairy-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.hardStone = {
    type: "held",
    info: function() {return `When held: Increase the power of Rock-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.magnet = {
    type: "held",
    info: function() {return `When held: Increase the power of Electric-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.metalCoat = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increase the power of Steel-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.miracleSeed = {
    type: "held",
    info: function() {return `When held: Increase the power of Grass-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.mysticWater = {
    type: "held",
    info: function() {return `When held: Increase the power of Water-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.neverMeltIce = {
    type: "held",
    info: function() {return `When held: Increase the power of Ice-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.poisonBarb = {
    type: "held",
    info: function() {return `When held: Increase the power of Poison-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.sharpBeak = {
    type: "held",
    info: function() {return `When held: Increase the power of Flying-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.silkScarf = {
    type: "held",
    info: function() {return `When held: Increase the power of Normal-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.silverPowder = {
    type: "held",
    info: function() {return `When held: Increase the power of Bug-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.softSand = {
    type: "held",
    info: function() {return `When held: Increase the power of Ground-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.spellTag = {
    type: "held",
    info: function() {return `When held: Increase the power of Ghost-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}

item.twistedSpoon = {
    type: "held",
    info: function() {return `When held: Increase the power of Psychic-Type moves by ${this.power()}%`},
    power : function() { return 10+(10*returnItemLevel(this.id))}
}


item.eviolite = {
    type: "held",
    info: function() {return `When held: If a Pokemon has not fully evolved, increase overall defense by x${this.power()}. This does not apply to final-stage Pokemon with a Mega-Evolution`},
    power : function() { return 1+(returnItemLevel(this.id)/5)}
}

item.lightClay = {
    type: "held",
    info: function() {return `When held: Increases the duration of positive buffs used by 1 turn and increases damage dealt by ${this.power()}%`},
    power : function() { return 5+(5*returnItemLevel(this.id))}
}

item.mentalHerb = {
    type: "held",
    info: function() {return `When held: Decreases the duration of negative buffs received by 1 turn and decreases damage taken by ${this.power()}%`},
    power : function() { return 5+(5*returnItemLevel(this.id))}
}

item.flameOrb = {
    type: "held",
    info: function() {return `When held: Increases the Damage of the user by x${this.power()}, but inflicts ${tagBurn}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.toxicOrb = {
    type: "held",
    info: function() {return `When held: Increases the Damage of the user by x${this.power()}, but inflicts ${tagPoisoned}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.choiceBand = {
    type: "held",
    info: function() {return `When held: Increases the Attack of the user by x${this.power()}, but prevents them from switching`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.choiceSpecs = {
    type: "held",
    info: function() {return `When held: Increases the Special Attack of the user by x${this.power()}, but prevents them from switching`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.lifeOrb = {
    type: "held",
    info: function() {return `When held: Increases the damage of the user by x${this.power()}, but loses 1/10 of its max HP per turn`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
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
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Fire-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.passhoBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Water-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.wacanBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Electric-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.rindoBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Grass-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.yacheBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Ice-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chopleBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Fighting-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kebiaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Poison-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.shucaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Ground-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.cobaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Flying-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.payapaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Psychic-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.tangaBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Bug-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chartiBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Rock-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kasibBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Ghost-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.habanBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Dragon-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.colburBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Dark-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.babiriBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Steel-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.roseliBerry = {
    type: "held",
    info: function() {return `When held: Reduces the super-effective damage taken from Fairy-Type moves by ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
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













item.timeCandy = {
    type: "key",
    usable: true,
    effect: function() {  if(afkSeconds<=0) {afkSeconds = 10*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Can't do that right now`; openTooltip()}  },
    info: function() {return `Fast-forwards battle time by 10 minutes. Must be used while battling`},
}

item.timeCandyXL = {
    type: "key",
    usable: true,
    effect: function() {  if(afkSeconds<=0) {afkSeconds = 30*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Can't do that right now`; openTooltip()}  },
    info: function() {return `Fast-forwards battle time by 30 minutes. Must be used while battling`},
}



item.bottleCap = {
    type: "key",
    info: function() {return `Obtained when acquiring an exceeding number of items. Can be exchanged in the Poke-Mart`},
}

item.goldenBottleCap = {
    type: "key",
    info: function() {return `Obtained in the Battle Frontier. Can be exchanged in the Poke-Mart`},
}

item.autoRefightTicket = {
    type: "key",
    info: function() {return `Can be used to automatically refight battles. Cannot refight while the browser is closed. Consumed once a battle is won`},
}


item.rareCandy = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Increases the level of a Pokemon by 1`},
}

item.abilityPatch = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Re-rolls the ability of a Pokemon`},
}

item.abilityCapsule = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Unlocks the hidden ability of a Pokemon`},
}

item.energyRoot = {
    type: "key",
    usable: true,
    effect: function() {  if(saved.geneticOperation > 1) {afkSecondsGenetics = 30*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Can't do that right now`; openTooltip()}  },
    info: function() {return `Fast-forwards genetic operation time by 30 minutes. Must be used while an active operation is ongoing`},
}

item.hpUp = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the HP IV of a Pokemon by 1`},
}

item.protein = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the Attack IV of a Pokemon by 1`},
}

item.iron = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the Defense IV of a Pokemon by 1`},
}

item.calcium = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the Special Attack IV of a Pokemon by 1`},
}

item.zinc = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the Special Defense IV of a Pokemon by 1`},
}

item.carbos = {
    type: 'key',
    vitamin: true,
    info: function() {return `Increase the Speed IV of a Pokemon by 1`},
}




item.waterStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.thunderStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.sunStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.linkStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel4}+)`},
}

item.ovalStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.moonStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.leafStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.iceStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.fireStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.duskStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}
item.dawnStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.shinyStone = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel2}+)`},
}

item.oddRock = {
    type: "key",
    evo: true,
    info: function() {return `Evolve certain kinds of Pokemon (Must be level ${wildAreaLevel4}+)`},
}











item.everstone = {
    rename: `neverstone`,
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Rerolls the ability of the Host Pokemon. It has an increased chance to reroll uncommon and rare abilities`},
}

item.powerAnklet = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Multiplies by 20 the chance to inherit Speed Iv's`},
}

item.powerBand = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Multiplies by 20 the chance to inherit Special Defense Iv's`},
}

item.powerBelt = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Multiplies by 20 the chance to inherit Defense Iv's`},
}

item.powerBracer = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Multiplies by 20 the chance to inherit Attack Iv's`},
}

item.powerLens = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Multiplies by 20 the chance to inherit Special Attack Iv's`},
}

item.powerWeight = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Multiplies by 20 the chance to inherit HP Iv's`},
}

item.lockCapsule = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Transfers the currently equipped moves of the sample to the movepool of the host. The host will retain both its equipped moves and the newly transferred ones, but the sample will lose it's equipped ones. Can only be used with at least one level of compatibility`},
}

item.destinyKnot = {
    type: "key",
    genetics: true,
    info: function() {return `Genetics-aiding item: Swaps the ability of the Pokemon with the sample. Can only be used with at least one level of compatibility`},
}











item.glalitite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Glalie by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.absolite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Absol by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.aerodactylite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Aerodactyl by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.aggronite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Aggron by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.alakazite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Alakazam by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.altarianite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Altaria by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.ampharosite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Ampharos by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.audinite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Audino by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.banettite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Banette by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.beedrillite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Beedrill by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.blastoisinite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Blastoise by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.blazikenite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Blaziken by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.cameruptite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Camerupt by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.charizarditeX = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Charizard X by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.charizarditeY = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Charizard Y by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.diancite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Diancie by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.galladite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Gallade by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.garchompite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Garchomp by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.gardevoirite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Gardevoir by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.gengarite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Gengar by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.gyaradosite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Gyarados by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.heracronite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Heracross by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.houndoominite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Houndoom by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.kangaskhanite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Kangaskhan by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.lopunnite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Lopunny by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.lucarionite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Lucario by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.manectite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Manectric by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.mawilite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Mawile by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.medichamite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Medicham by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.metagrossite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Metagross by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.mewtwoniteX = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Mewtwo X by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.mewtwoniteY = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Mewtwo Y by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.pidgeotite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Pidgeot by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.pinsirite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Pinsir by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.sablenite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Sableye by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.abomasite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Abomasnow by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.salamencite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Salamence by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.sceptilite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Sceptile by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.scizorite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Scizor by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.sharpedonite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Sharpedo by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.slowbronite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Slowbro by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.steelixite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Steelix by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.swampertite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Swampert by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.tyranitarite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Tyranitar by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.venusaurite = {
    type: "held",
    evo: true,
    info: function() {return `When held: Increases the damage dealt by Mega Venusaur by x${this.power()}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}











item.primalEarth = {
    type: "key",
    rotation: 1,
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

item.crunchTm = {}
item.xScissorTm = {}
item.moonblastTm = {}

item.fireBlastTm = {}
item.hydroPumpTm = {}
item.thunderTm = {}
item.hyperBeamTm = {}

item.nastyPlotTm = {}
item.swordsDanceTm = {}


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
        
        item[i].info = function () { return `Teach the move <span data-move="${move[item[i].move].id}" ><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(move[item[i].move].type)}">${format(move[item[i].move].id)}</span></span> to a ${joinWithOr(move[item[i].move].moveset)} Pokemon`}        

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

