const areas = {}



//area 1 rs = rare pkmn
//area 2 rs = single target high base stats pkmn
//area 3 rs = starter
//area 4 rs = pseudo-legendary


const rotationWildMax = 12;

const wildAreaLevel1 = 10
const wildAreaLevel2 = 30
const wildAreaLevel3 = 50
const wildAreaLevel4 = 70
const wildAreaLevel5 = 90

const wildRareItemsFire = [item.charcoal, item.occaBerry]
const wildRareItemsWater = [item.mysticWater, item.passhoBerry]
const wildRareItemsElectric = [item.magnet, item.wacanBerry]
const wildRareItemsGrass = [item.miracleSeed, item.rindoBerry]
const wildRareItemsIce = [item.neverMeltIce, item.yacheBerry]
const wildRareItemsFighting = [item.blackBelt, item.chopleBerry]
const wildRareItemsPoison = [item.poisonBarb, item.kebiaBerry]
const wildRareItemsGround = [item.softSand, item.shucaBerry]
const wildRareItemsFlying = [item.sharpBeak, item.cobaBerry]
const wildRareItemsPsychic = [item.twistedSpoon, item.payapaBerry]
const wildRareItemsBug = [item.silverPowder, item.tangaBerry]
const wildRareItemsRock = [item.hardStone, item.chartiBerry]
const wildRareItemsGhost = [item.spellTag, item.kasibBerry]
const wildRareItemsDragon = [item.dragonFang, item.habanBerry]
const wildRareItemsDark = [item.blackGlasses, item.colburBerry]
const wildRareItemsSteel = [item.metalCoat, item.babiriBerry]
const wildRareItemsNormal = [item.silkScarf]
const wildRareItemsFairy = [item.fairyFeather, item.roseliBerry]
//rotation 1
areas.verdantForest = {
    rotation : 1,
    level : wildAreaLevel1,
    type: `wild`,
    background : `forest`,
    icon: pkmn.caterpie,
    spawns: {
        common : [pkmn.caterpie,pkmn.exeggcute, pkmn.scatterbug],
        uncommon : [pkmn.sudowoodo],
        rare : [pkmn.scyther]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsBug
    }
}

areas.foggyGraveyard = {
    unlock : function() {return false},
    rotation : 1,
    level : wildAreaLevel2,
    type: `wild`,
    background : `night`,
    icon: pkmn.gastly,
    spawns: {
        common : [pkmn.gastly,pkmn.pumpkaboo, pkmn.phantump],
        uncommon : [pkmn.yamask],
        rare : [pkmn.spiritomb]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGhost
    }
}

areas.woodlandConcert = {
    rotation : 1,
    level : wildAreaLevel3,
    type: `wild`,
    background : `forest`,
    icon: pkmn.chatot,
    spawns: {
        common : [pkmn.kricketot,pkmn.whismur, pkmn.chingling],
        uncommon : [pkmn.chatot],
        rare : [pkmn.grookey]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGrass
    }
}

areas.mantleCore = {
    rotation : 1,
    level : wildAreaLevel4,
    type: `wild`,
    background : `cave`,
    icon: pkmn.larvitar,
    spawns: {
        common : [pkmn.onix,pkmn.roggenrola, pkmn.geodude],
        uncommon : [pkmn.tyrunt],
        rare : [pkmn.larvitar]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsRock
    }
}

//rotation 2
areas.fidoPark = {
    rotation : 2,
    level : wildAreaLevel1,
    type: `wild`,
    background : `town`,
    icon: pkmn.rockruff,
    spawns: {
        common : [pkmn.rockruff,pkmn.snubbull, pkmn.electrike],
        uncommon : [pkmn.furfrou],
        rare : [pkmn.hisuianGrowlithe]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsNormal
    }
}

areas.citySewers = {
    rotation : 2,
    level : wildAreaLevel2,
    type: `wild`,
    background : `plant`,
    icon: pkmn.trubbish,
    spawns: {
        common : [pkmn.grimer,pkmn.ekans, pkmn.trubbish],
        uncommon : [pkmn.sandile],
        rare : [pkmn.alolanGrimer]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsPoison
    }
}

areas.activeVolcano = {
    rotation : 2,
    level : wildAreaLevel3,
    type: `wild`,
    background : `volcano`,
    icon: pkmn.slugma,
    spawns: {
        common : [pkmn.slugma,pkmn.salandit, pkmn.rolycoly],
        uncommon : [pkmn.torkoal],
        rare : [pkmn.charmander]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFire
    }
} 

areas.powerPlant = {
    rotation : 2,
    level : wildAreaLevel4,
    type: `wild`,
    background : `lab`,
    icon: pkmn.magnemite,
    spawns: {
        common : [pkmn.magnemite,pkmn.voltorb, pkmn.klink],
        uncommon : [pkmn.elekid],
        rare : [pkmn.rotom]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsElectric
    }
}

//rotation 3
areas.quietMeadow = {
    rotation : 3,
    level : wildAreaLevel1,
    type: `wild`,
    background : `night`,
    icon: pkmn.seedot,
    spawns: {
        common : [pkmn.seedot,pkmn.oddish, pkmn.joltik],
        uncommon : [pkmn.misdreavus],
        rare : [pkmn.espurr]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsDark
    }
}


areas.urbanWalkway = {
    rotation : 3,
    level : wildAreaLevel2,
    type: `wild`,
    background : `town`,
    icon: pkmn.pichu,
    spawns: {
        common : [pkmn.lillipup,pkmn.drifloon, pkmn.pidove],
        uncommon : [pkmn.pichu],
        rare : [pkmn.eevee]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFairy
    }
}


areas.sandyDunes = {
    rotation : 3,
    level : wildAreaLevel3,
    type: `wild`,
    background : `desert`,
    icon: pkmn.cacnea,
    spawns: {
        common : [pkmn.cacnea,pkmn.sandshrew, pkmn.silicobra],
        uncommon : [pkmn.trapinch],
        rare : [pkmn.fennekin]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGround
    }
}


areas.sunkenShip = {
    rotation : 3,
    level : wildAreaLevel4,
    type: `wild`,
    background : `sea`,
    icon: pkmn.dhelmise,
    spawns: {
        common : [pkmn.tentacool,pkmn.magikarp, pkmn.mantyke],
        uncommon : [pkmn.dhelmise],
        rare : [pkmn.bagon]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsSteel
    }
}

//rotation 4
areas.offshoreRigger = {
    rotation : 4,
    level : wildAreaLevel1,
    type: `wild`,
    background : `sea`,
    icon: pkmn.wingull,
    spawns: {
        common : [pkmn.wingull,pkmn.chinchou, pkmn.arrokuda],
        uncommon : [pkmn.carvanha],
        rare : [pkmn.cramorant]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFlying
    }
}

areas.safariZone = {
    rotation : 4,
    level : wildAreaLevel2,
    type: `wild`,
    background : `mountain`,
    icon: pkmn.wooper,
    spawns: {
        common : [pkmn.wooper,pkmn.doduo, pkmn.oddish],
        uncommon : [pkmn.tauros],
        rare : [pkmn.kangaskhan]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsNormal
    }
}

areas.coolBeach = {
    rotation : 4,
    level : wildAreaLevel3,
    type: `wild`,
    background : `beach`,
    icon: pkmn.pyukumuku,
    spawns: {
        common : [pkmn.starly,pkmn.pyukumuku, pkmn.binacle],
        uncommon : [pkmn.slowpoke],
        rare : [pkmn.squirtle]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsWater
    }
}

areas.computeringLab = {
    rotation : 4,
    level : wildAreaLevel4,
    type: `wild`,
    background : `lab`,
    icon: pkmn.beldum,
    spawns: {
        common : [pkmn.abra,pkmn.dedenne, pkmn.helioptile],
        uncommon : [pkmn.klink],
        rare : [pkmn.beldum]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsPsychic
    }
}


//rotation 5
areas.gemstoneCavern = {
    rotation : 5,
    level : wildAreaLevel1,
    type: `wild`,
    background : `cave`,
    icon: pkmn.carbink,
    spawns: {
        common : [pkmn.machop,pkmn.minior, pkmn.arrokuda],
        uncommon : [pkmn.carbink],
        rare : [pkmn.sableye]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsRock
    }
}

areas.frozenLake = {
    rotation : 5,
    level : wildAreaLevel2,
    type: `wild`,
    background : `snow`,
    icon: pkmn.vanillite,
    spawns: {
        common : [pkmn.vanillite,pkmn.cubchoo, pkmn.swinub],
        uncommon : [pkmn.cryogonal],
        rare : [pkmn.alolanVulpix]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsIce
    }
}

areas.abandonedManor = {
    rotation : 5,
    level : wildAreaLevel3,
    type: `wild`,
    background : `night`,
    icon: pkmn.litwick,
    spawns: {
        common : [pkmn.litwick,pkmn.rattata, pkmn.gothita],
        uncommon : [pkmn.shuppet],
        rare : [pkmn.litten]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGhost
    }
}

areas.dracoLair = {
    rotation : 5,
    level : wildAreaLevel4,
    type: `wild`,
    background : `cave`,
    icon: pkmn.gible,
    spawns: {
        common : [pkmn.shellos,pkmn.bronzor, pkmn.croagunk],
        uncommon : [pkmn.noibat],
        rare : [pkmn.gible]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsDragon
    }
}

//rotation 6
areas.mountainTrail = {
    rotation : 6,
    level : wildAreaLevel1,
    type: `wild`,
    background : `mountain`,
    icon: pkmn.mudbray,
    spawns: {
        common : [pkmn.patrat,pkmn.deerling, pkmn.mudbray],
        uncommon : [pkmn.mawile],
        rare : [pkmn.rockruff]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsRock
    }
}


areas.teaParlor = {
    rotation : 6,
    level : wildAreaLevel2,
    type: `wild`,
    background : `town`,
    icon: pkmn.sinistea,
    spawns: {
        common : [pkmn.swirlix,pkmn.sinistea, pkmn.milcery],
        uncommon : [pkmn.combee],
        rare : [pkmn.applin]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFairy
    }
}

areas.pokemonDojo = {
    rotation : 6,
    level : wildAreaLevel3,
    type: `wild`,
    background : `gym`,
    icon: pkmn.makuhita,
    spawns: {
        common : [pkmn.makuhita,pkmn.tyrogue, pkmn.mienfoo],
        uncommon : [pkmn.meditite],
        rare : [pkmn.scorbunny]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFighting
    }
}

areas.skyHigh = {
    rotation : 6,
    level : wildAreaLevel4,
    type: `wild`,
    background : `sea`,
    icon: pkmn.swablu,
    spawns: {
        common : [pkmn.castform,pkmn.fletchling, pkmn.rookidee],
        uncommon : [pkmn.swablu],
        rare : [pkmn.dratini]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFlying
    }
}

//rotation 7
areas.dankCave = {
    rotation : 7,
    level : wildAreaLevel1,
    type: `wild`,
    background : `cave`,
    icon: pkmn.seviper,
    spawns: {
        common : [pkmn.zubat,pkmn.alolanRattata, pkmn.alolanMeowth],
        uncommon : [pkmn.seviper],
        rare : [pkmn.sneasel]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsDark
    }
}


areas.forestShrine = {
    rotation : 7,
    level : wildAreaLevel2,
    type: `wild`,
    background : `forest`,
    icon: pkmn.chingling,
    spawns: {
        common : [pkmn.chingling,pkmn.solrock, pkmn.lunatone],
        uncommon : [pkmn.girafarig],
        rare : [pkmn.ralts]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsPsychic
    }
}

areas.streetCircus = {
    rotation : 7,
    level : wildAreaLevel3,
    type: `wild`,
    background : `town`,
    icon: pkmn.popplio,
    spawns: {
        common : [pkmn.mimejr,pkmn.wynaut, pkmn.igglybuff],
        uncommon : [pkmn.togepi],
        rare : [pkmn.popplio]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFairy
    }
}

areas.weaponsFacility = {
    rotation : 7,
    level : wildAreaLevel4,
    type: `wild`,
    background : `lab`,
    icon: pkmn.honedge,
    spawns: {
        common : [pkmn.kabuto,pkmn.koffing, pkmn.honedge],
        uncommon : [pkmn.ditto],
        rare : [pkmn.dreepy]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsSteel
    }
}

//rotation 8
areas.scorchingBadlands = {
    rotation : 8,
    level : wildAreaLevel1,
    type: `wild`,
    background : `desert`,
    icon: pkmn.hippopotas,
    spawns: {
        common : [pkmn.hippopotas,pkmn.sandile, pkmn.scraggy],
        uncommon : [pkmn.archen],
        rare : [pkmn.larvesta]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGround
    }
}


areas.lavaLake = {
    rotation : 8,
    level : wildAreaLevel2,
    type: `wild`,
    background : `volcano`,
    icon: pkmn.sizzlipede,
    spawns: {
        common : [pkmn.slugma,pkmn.sizzlipede, pkmn.houndour],
        uncommon : [pkmn.magby],
        rare : [pkmn.numel]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFire
    }
}

areas.crashingSeaside = {
    rotation : 8,
    level : wildAreaLevel3,
    type: `wild`,
    background : `beach`,
    icon: pkmn.frillish,
    spawns: {
        common : [pkmn.bruxish,pkmn.mareanie, pkmn.azurill],
        uncommon : [pkmn.frillish],
        rare : [pkmn.mudkip]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsWater
    }
}

areas.strangeSpace = {
    rotation : 8,
    level : wildAreaLevel4,
    type: `wild`,
    background : `space`,
    icon: pkmn.hatenna,
    spawns: {
        common : [pkmn.elgyem,pkmn.cleffa, pkmn.lileep],
        uncommon : [pkmn.hatenna],
        rare : [pkmn.goomy]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsDragon
    }
}

//rotation 9

areas.chargestoneCave  = {
    rotation : 9,
    level : wildAreaLevel1,
    type: `wild`,
    background : `cave`,
    icon: pkmn.pachirisu,
    spawns: {
        common : [pkmn.blipbug, pkmn.woobat, pkmn.pachirisu],
        uncommon : [pkmn.dunsparce],
        rare : [pkmn.illumise]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsElectric
    }
}


areas.seafoamCurrents = {
    rotation : 9,
    level : wildAreaLevel2,
    type: `wild`,
    background : `trench`,
    icon: pkmn.spheal,
    spawns: {
        common : [pkmn.pikipek,pkmn.fletchling, pkmn.spheal],
        uncommon : [pkmn.surskit],
        rare : [pkmn.tropius]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFlying
    }
}


areas.valorLakeside = {
    rotation : 9,
    level : wildAreaLevel3,
    type: `wild`,
    background : `lake`,
    icon: pkmn.yanma,
    spawns: {
        common : [pkmn.skitty,pkmn.yanma, pkmn.sunkern],
        uncommon : [pkmn.hoppip],
        rare : [pkmn.turtwig]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGrass
    }
}

areas.thornwoodForest = {
    rotation : 9,
    level : wildAreaLevel4,
    type: `wild`,
    background : `night`,
    icon: pkmn.foongus,
    spawns: {
        common : [pkmn.spinarak,pkmn.bellsprout, pkmn.foongus],
        uncommon : [pkmn.venipede],
        rare : [pkmn.skrelp]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsPoison
    }
}


//rotation 10
areas.unovaWorks = {
    rotation : 10,
    level : wildAreaLevel1,
    type: `wild`,
    background : `town`,
    icon: pkmn.timburr,
    spawns: {
        common : [pkmn.timburr, pkmn.mankey, pkmn.shieldon],
        uncommon : [pkmn.buneary],
        rare : [pkmn.riolu]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFighting
    }
}


areas.snowpointCliff = {
    rotation : 10,
    level : wildAreaLevel2,
    type: `wild`,
    background : `snow`,
    icon: pkmn.snom,
    spawns: {
        common : [pkmn.snom,pkmn.eiscue, pkmn.taillow],
        uncommon : [pkmn.smoochum],
        rare : [pkmn.delibird]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsIce
    }
}


areas.hollowNest = {
    rotation : 10,
    level : wildAreaLevel3,
    type: `wild`,
    background : `forest`,
    icon: pkmn.nincada,
    spawns: {
        common : [pkmn.paras,pkmn.tangela, pkmn.nincada],
        uncommon : [pkmn.wimpod],
        rare : [pkmn.chespin]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsBug
    }
}

areas.poniCanyon = {
    rotation : 10,
    level : wildAreaLevel4,
    type: `wild`,
    background : `mountain`,
    icon: pkmn.vullaby,
    spawns: {
        common : [pkmn.cubone,pkmn.baltoy, pkmn.vullaby],
        uncommon : [pkmn.hawlucha],
        rare : [pkmn.jangmoo]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsDragon
    }
}

//rotation 11
areas.seaBed = {
    rotation : 11,
    level : wildAreaLevel1,
    type: `wild`,
    background : `sea`,
    icon: pkmn.remoraid,
    spawns: {
        common : [pkmn.remoraid, pkmn.shellder, pkmn.goldeen],
        uncommon : [pkmn.corsola],
        rare : [pkmn.wailmer]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsWater
    }
}


areas.lonLonRanch = {
    rotation : 11,
    level : wildAreaLevel2,
    type: `wild`,
    background : `forest`,
    icon: pkmn.wooloo,
    spawns: {
        common : [pkmn.wooloo,pkmn.buneary, pkmn.rufflet],
        uncommon : [pkmn.bouffalant],
        rare : [pkmn.miltank]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsNormal
    }
}


areas.saruTemple = {
    rotation : 11,
    level : wildAreaLevel3,
    type: `wild`,
    background : `snow`,
    icon: pkmn.pansage,
    spawns: {
        common : [pkmn.pansage,pkmn.pansear, pkmn.panpour],
        uncommon : [pkmn.passimian],
        rare : [pkmn.chimchar]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsFire
    }
}

areas.evilSummit = {
    rotation : 11,
    level : wildAreaLevel4,
    type: `wild`,
    background : `mountain`,
    icon: pkmn.deino,
    spawns: {
        common : [pkmn.poochyena,pkmn.murkrow, pkmn.impidimp],
        uncommon : [pkmn.zorua],
        rare : [pkmn.deino]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsDark
    }
}

//rotation 12
areas.fuegoIronworks = {
    rotation : 12,
    level : wildAreaLevel1,
    type: `wild`,
    background : `plant`,
    icon: pkmn.darumaka,
    spawns: {
        common : [pkmn.togedemaru, pkmn.litleo, pkmn.darumaka],
        uncommon : [pkmn.ferroseed],
        rare : [pkmn.pawniard]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsSteel
    }
}


areas.permafrostGrotto = {
    rotation : 12,
    level : wildAreaLevel2,
    type: `wild`,
    background : `iceCave`,
    icon: pkmn.amaura,
    spawns: {
        common : [pkmn.rhyhorn,pkmn.shellos, pkmn.hisuianSneasel],
        uncommon : [pkmn.amaura],
        rare : [pkmn.mrRime]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsIce
    }
}


areas.berryForest = {
    rotation : 12,
    level : wildAreaLevel3,
    type: `wild`,
    background : `forest`,
    icon: pkmn.girafarig,
    spawns: {
        common : [pkmn.cottonee,pkmn.girafarig, pkmn.petilil],
        uncommon : [pkmn.drowzee],
        rare : [pkmn.treecko]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsPsychic
    }
}

areas.relicPassage = {
    rotation : 12,
    level : wildAreaLevel4,
    type: `wild`,
    background : `cave`,
    icon: pkmn.golett,
    spawns: {
        common : [pkmn.golett,pkmn.unownA, pkmn.shuppet],
        uncommon : [pkmn.sigilyph],
        rare : [pkmn.slakoth]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : wildRareItemsGhost
    }
}



/*
Normal 3
Fuego 3
Agua 4
Planta2
Eléctrico 2
Hielo 3
Lucha 2
Veneno 2
Tierra 2
Volador 2
Psíquico 3
Bicho 2
Roca 3
Fantasma 3
Dragón 3
Siniestro 3
Acero 2
Hada 3
*/









const rotationDungeonMax = 3;


//rotation 1
areas.sinnohUndergroundI = {
    rotation : 1,
    type: `dungeon`,
    background : `cave`,
    level : wildAreaLevel2,
    unlockDescription : `Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    icon: item.waterStone,
    spawns: {
        common : [pkmn.carbink,pkmn.boldore, pkmn.shieldon, pkmn.roggenrola],
    },
    drops: {
        common : [item.nothing],
        rare : [item.waterStone, item.thunderStone, item.sunStone, item.linkStone, item.dampRock]
    },
}

areas.beginnerDojoI = {
    rotation : 1,
    type: `dungeon`,
    background : `gym`,
    level : wildAreaLevel2,
    unlockDescription : `Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.makuhita,pkmn.tyrogue, pkmn.meditite, pkmn.riolu],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.quickAttackTm, item.emberTm, item.nuzzleTm, item.mudSlapTm, item.bulletPunchTm, item.peckTm]
    },
}

areas.advancedDojoI = {
    rotation : 1,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `Defeat Gym Leader Misty in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderMisty.defeated },
    level : wildAreaLevel3,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.hariyama,pkmn.hitmonchan, pkmn.medicham, pkmn.throh],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.swiftTm, item.incinerateTm, item.thunderPunchTm, item.bulldozeTm, item.metalClawTm, item.acrobaticsTm]
    },
}

areas.expertDojoI = {
    rotation : 1,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `Defeat Gym Leader Phoebe in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderPhoebe.defeated },
    level : wildAreaLevel4,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.lucario,pkmn.machamp, pkmn.hawlucha, pkmn.mienshao],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.strengthTm, item.flamethrowerTm, item.thunderboltTm, item.earthquakeTm, item.flashCannonTm, item.flyTm],
    },
}

areas.victoryRoadI = {
    rotation : 1,
    type: `dungeon`,
    background : `town`,
    level : wildAreaLevel5,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    icon: item.lightClay,
    spawns: {
        common : [pkmn.nidoking,pkmn.steelix, pkmn.crobat, pkmn.rhyperior],
    },
    drops: {
        common : [item.nothing],
        rare : [item.lightClay, item.powerAnklet, item.powerBand, item.powerBelt]
    },
}


//rotation 2

areas.sinnohUndergroundII = {
    rotation : 2,
    type: `dungeon`,
    background : `cave`,
    level : wildAreaLevel2,
    unlockDescription : `Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    icon: item.leafStone,
    spawns: {
        common : [pkmn.carbink,pkmn.boldore, pkmn.shieldon, pkmn.roggenrola],
    },
    drops: {
        common : [item.nothing],
        rare : [item.ovalStone, item.moonStone, item.leafStone, item.iceStone, item.icyRock, item.oddRock]
    },
}

areas.beginnerDojoII = {
    rotation : 2,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    level : wildAreaLevel2,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.makuhita,pkmn.tyrogue, pkmn.meditite, pkmn.riolu],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.acidTm, item.iceShardTm, item.twineedleTm, item.waterGunTm, item.leafageTm, item.rockSmashTm]
    },
}

areas.advancedDojoII = {
    rotation : 2,
    type: `dungeon`,
    background : `gym`,
    level : wildAreaLevel3,
    unlockDescription : `Defeat Gym Leader Misty in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderMisty.defeated },
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.hariyama,pkmn.hitmonchan, pkmn.medicham, pkmn.throh],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.crossPoisonTm, item.avalancheTm, item.bugBiteTm, item.waterPulseTm, item.magicalLeafTm, item.forcePalmTm]
    },
}

areas.expertDojoII = {
    rotation : 2,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `Defeat Gym Leader Phoebe in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderPhoebe.defeated },
    level : wildAreaLevel4,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.lucario,pkmn.machamp, pkmn.hawlucha, pkmn.mienshao],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.sludgeBombTm, item.iceBeamTm, item.bugBuzzTm, item.aquaTailTm, item.leafBladeTm, item.auraSphereTm]
    },
}

areas.victoryRoadII = {
    rotation : 2,
    type: `dungeon`,
    background : `town`,
    level : wildAreaLevel5,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    icon: item.mentalHerb,
    spawns: {
        common : [pkmn.golem,pkmn.whiscash, pkmn.aggron, pkmn.exploud],
    },
    drops: {
        common : [item.nothing],
        rare : [item.mentalHerb, item.everstone , item.powerBracer]
    },
}

//rotation 3

areas.sinnohUndergroundIII = {
    rotation : 3,
    type: `dungeon`,
    background : `cave`,
    level : wildAreaLevel2,
    unlockDescription : `Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    icon: item.fireStone,
    spawns: {
        common : [pkmn.carbink,pkmn.boldore, pkmn.shieldon, pkmn.roggenrola],
    },
    drops: {
        common : [item.nothing],
        rare : [item.fireStone, item.duskStone, item.dawnStone, item.shinyStone, item.heatRock, item.smoothRock]
    },
}

areas.beginnerDojoIII = {
    rotation : 3,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `Defeat Gym Leader Brock in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderBrock.defeated },
    level : wildAreaLevel2,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.makuhita,pkmn.tyrogue, pkmn.meditite, pkmn.riolu],
    },
    drops: {
        common : [item.nothing],
        uncommon : [ item.confusionTm, item.rockThrowTm, item.lickTm, item.twisterTm, item.pursuitTm, item.disarmingVoiceTm]
    },
}

areas.advancedDojoIII = {
    rotation : 3,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `Defeat Gym Leader Misty in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderMisty.defeated },
    level : wildAreaLevel3,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.hariyama,pkmn.hitmonchan, pkmn.medicham, pkmn.throh],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.psychoCutTm, item.rockSlideTm, item.hexTm, item.dragonTailTm, item.biteTm, item.dazzlingGleamTm]
    },
}

areas.expertDojoIII = {
    rotation : 3,
    type: `dungeon`,
    background : `gym`,
    level : wildAreaLevel4,
    unlockDescription : `Defeat Gym Leader Phoebe in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderPhoebe.defeated },
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.lucario,pkmn.machamp, pkmn.hawlucha, pkmn.mienshao],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.psychicTm, item.powerGemTm, item.shadowBallTm, item.dragonRushTm, item.darkPulseTm, item.playRoughTm]
    },
}


areas.victoryRoadIII = {
    rotation : 3,
    type: `dungeon`,
    background : `town`,
    level : wildAreaLevel5,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    icon: item.eviolite,
    spawns: {
        common : [pkmn.magnezone,pkmn.gyarados, pkmn.azumarill, pkmn.machamp],
    },
    drops: {
        common : [item.nothing],
        rare : [item.eviolite, item.powerLens, item.powerWeight]
    },
}

//        common : [item.strengthTm, item.flamethrowerTm, item.thunderboltTm, item.earthquakeTm, item.flashCannonTm, item.flyTm, item.sludgeBombTm, item.iceBeamTm, item.bugBuzzTm, item.aquaTailTm, item.leafBladeTm, item.auraSphereTm, item.psychicTm, item.powerGemTm, item.phantomForceTm, item.dragonRushTm, item.darkPulseTm, item.playRoughTm]














const rotationEventMax = 6;
const tier1difficulty = 25;
const tier2difficulty = 70;
const tier3difficulty = 200;
const tier4difficulty = 600;




areas.cosplayConvention = {
    rotation: 1,
    type: `event`,
    background : `plant`,
    level : wildAreaLevel1,
    icon: pkmn.pikachuBelle,
    spawns: {
        common : [pkmn.pichu],
        rare : [pkmn.pikachuBelle, pkmn.pikachuLibre, pkmn.pikachuPhd, pkmn.pikachuPopstar, pkmn.pikachuRockstar]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.thunderStone],
    },
    category: 1,
}


areas.suspiciousManor = {
    rotation: 1,
    type: `event`,
    background : `night`,
    level : wildAreaLevel5,
    icon: pkmn.gastly,
    spawns: {
        common : [pkmn.rattata, pkmn.litwick, pkmn.gastly],
        rare : [pkmn.charizardClone, pkmn.venusaurClone, pkmn.blastoiseClone]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.spellTag],
    },
    category: 2,
}



areas.summitOfSeasons = {
    rotation: 1,
    type: `event`,
    background : `mountain`,
    level : 90,
    icon: pkmn.luxray,
    uncatchable: true,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.luxray,pkmn.avalugg,pkmn.houndoom,pkmn.marowak],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.epochFeather]
    },
    category: 1,
}

areas.ceruleanCave = {
    rotation: 1,
    type: `event`,
    background : `cave`,
    level : 95,
    icon: pkmn.golem,
    difficulty: 5,
    uncatchable: true,
    unlockDescription : `Defeat Master Trainer Geeta in VS to unlock`,
    unlockRequirement : function() { return areas.vsMasterTrainerGeeta.defeated },
    spawns: {
        common : [pkmn.golem,pkmn.megaGarchomp,pkmn.crobat,pkmn.chansey],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.pokeflute]
    },
    category: 2,
}

areas.eventMegaBlastoise = {
    rotation: 1,
    type: `event`,
    name: `Blastoise Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaBlastoise,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.pokeflute.got--},
    unlockDescription : `Requires a <img src="img/items/pokeflute.png"> Pokeflute to enter`,
    unlockRequirement : function() { return item.pokeflute.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaBlastoise,
        slot1Moves : [move.rainDance.id,move.hydroCannon.id, move.iceBeam.id, move.thunder.id],
    },
    reward : [item.blastoisinite, pkmn.squirtle],
    category: 2,
}

areas.eventMegaCharizardY = {
    rotation: 1,
    type: `event`,
    name: `Charizard Y Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaCharizardY,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.pokeflute.got--},
    unlockDescription : `Requires a <img src="img/items/pokeflute.png"> Pokeflute to enter`,
    unlockRequirement : function() { return item.pokeflute.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaCharizardY,
        slot1Moves : [move.sunnyDay.id,move.fireBlast.id, move.airShlash.id, move.dracoMeteor.id],
    },
    reward : [item.charizarditeY, pkmn.charmander],
    category: 2,
}

areas.eventMegaVenusaur = {
    rotation: 1,
    type: `event`,
    name: `Venusaur Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaVenusaur,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.pokeflute.got--},
    unlockDescription : `Requires a <img src="img/items/pokeflute.png"> Pokeflute to enter`,
    unlockRequirement : function() { return item.pokeflute.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaVenusaur,
        slot1Moves : [move.grassyTerrain.id,move.frenzyPlant.id, move.acidArmor.id, move.sludgeWave.id],
    },
    reward : [item.venusaurite, pkmn.bulbasaur],
    category: 2,
}


/*

areas.articSummit = {
    rotation: 1,
    type: `event`,
    background : `snow`,
    uncatchable: true,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    level : 90,
    icon: pkmn.beartic,
    spawns: {
        common : [pkmn.beartic,pkmn.avalugg,pkmn.walrein,pkmn.vanilluxe],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.articRock]
    },
}


areas.fierySummit = {
    rotation: 1,
    type: `event`,
    background : `volcano`,
    level : 90,
    uncatchable: true,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    icon: pkmn.houndoom,
    spawns: {
        common : [pkmn.houndoom,pkmn.darmanitan,pkmn.magmortar,pkmn.alolanMarowak],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.fieryRock]
    },
}

*/


areas.eventZapdos = {
    rotation: 1,
    type: `event`,
    name: `Zapdos Lair`,
    background : `cave`,
    icon: pkmn.zapdos,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.epochFeather.got--},
    unlockDescription : `Requires an <img src="img/items/epochFeather.png"> Epoch Feather to enter`,
    unlockRequirement : function() { return item.epochFeather.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.zapdos,
        slot1Moves : [move.thunderbolt.id,move.discharge.id, move.hurricane.id, move.fly.id],
    },
    reward : [pkmn.zapdos],
    category: 1,
}

areas.eventArticuno = {
    rotation: 1,
    type: `event`,
    name: `Articuno Den`,
    background : `cave`,
    icon: pkmn.articuno,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.epochFeather.got--},
    unlockDescription : `Requires an <img src="img/items/epochFeather.png"> Epoch Feather to enter`,
    unlockRequirement : function() { return item.epochFeather.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.articuno,
        slot1Moves : [move.blizzard.id,move.iceBeam.id, move.hurricane.id, move.fly.id],
    },
    reward : [pkmn.articuno],
    category: 1,
}

areas.eventMoltres = {
    rotation: 1,
    type: `event`,
    name: `Moltres Roost`,
    background : `cave`,
    icon: pkmn.moltres,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.epochFeather.got--},
    unlockDescription : `Requires an <img src="img/items/epochFeather.png"> Epoch Feather to enter`,
    unlockRequirement : function() { return item.epochFeather.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.moltres,
        slot1Moves : [move.fireBlast.id,move.heatWave.id, move.hurricane.id, move.fly.id],
    },
    reward : [pkmn.moltres],
    category: 1,
}

areas.eventMegaCamerupt = {
    rotation: 1,
    type: `event`,
    name: `Camerupt Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaCamerupt,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.epochFeather.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/epochFeather.png"> Epoch Feathers to enter`,
    unlockRequirement : function() { return item.epochFeather.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaCamerupt,
        slot1Moves : [move.sunnyDay.id,move.flamethrower.id, move.flameBurst.id, move.earthquake.id],
    },
    reward : [item.cameruptite, pkmn.numel],
    category: 1,
}

areas.eventMegaManectric = {
    rotation: 1,
    type: `event`,
    name: `Manectric Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaManectric,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.epochFeather.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/epochFeather.png"> Epoch Feathers to enter`,
    unlockRequirement : function() { return item.epochFeather.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaManectric,
        slot1Moves : [move.electricTerrain.id,move.discharge.id, move.iceBeam.id, move.thunderFang.id],
    },
    reward : [item.manectite, pkmn.electrike],
    category: 1,
}

areas.eventMegaAbomasnow = {
    rotation: 1,
    type: `event`,
    name: `Abomasnow Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaAbomasnow,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.epochFeather.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/epochFeather.png"> Epoch Feathers to enter`,
    unlockRequirement : function() { return item.epochFeather.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaAbomasnow,
        slot1Moves : [move.hail.id,move.iceBeam.id, move.energyBall.id, move.surf.id],
    },
    reward : [item.abomasite, pkmn.snover],
    category: 1,
}

//rotation 2






areas.lamodeDogwalk = {
    rotation: 2,
    type: `event`,
    background : `town`,
    level : wildAreaLevel1,
    icon: pkmn.furfrouHeart,
    spawns: {
        common : [pkmn.lillipup, pkmn.snubbull, pkmn.rockruff],
        rare : [pkmn.furfrouHeart,pkmn.furfrouStar,pkmn.furfrouDiamond,pkmn.furfrouDebutante,pkmn.furfrouMatron,pkmn.furfrouDandy,pkmn.furfrouReine, pkmn.furfrouKabuki, pkmn.furfrouPharaoh]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.silkScarf],
    },
    category: 1,
}



areas.primitiveGrove = {
    rotation: 2,
    type: `event`,
    background : `forest`,
    level : 90,
    icon: pkmn.yanmega,
    uncatchable: true,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.haxorus,pkmn.aerodactyl,pkmn.rampardos,pkmn.yanmega],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.ancientOrchid]
    },
    category: 1,
}


areas.eventGreatTusk = {
    rotation: 2,
    type: `event`,
    name: `Great Tusk Revival`,
    background : `cave`,
    icon: pkmn.greatTusk,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `Requires an <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.greatTusk,
        slot1Moves : [move.earthquake.id,move.bulkUp.id, move.focusBlast.id, move.earthPower.id],
    },
    reward : [pkmn.greatTusk],
    category: 1,
}

areas.eventScreamTail = {
    rotation: 2,
    type: `event`,
    name: `Scream Tail Revival`,
    background : `cave`,
    icon: pkmn.screamTail,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `Requires an <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.screamTail,
        slot1Moves : [move.moonblast.id,move.psychic.id, move.hyperVoice.id, move.disarmingVoice.id],
    },
    reward : [pkmn.screamTail],
    category: 1,
}


areas.eventSlitherWing = {
    rotation: 2,
    type: `event`,
    name: `Slither Wing Revival`,
    background : `cave`,
    icon: pkmn.slitherWing,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `Requires an <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.slitherWing,
        slot1Moves : [move.stringShot.id,move.bugBuzz.id, move.signalBeam.id, move.fly.id],
    },
    reward : [pkmn.slitherWing],
    category: 1,
}



areas.eventBruteBonnet = {
    rotation: 2,
    type: `event`,
    name: `Brute Bonnet Revival`,
    background : `cave`,
    icon: pkmn.bruteBonnet,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `Requires an <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.bruteBonnet,
        slot1Moves : [move.spore.id,move.seedBomb.id, move.solarBeam.id, move.darkPulse.id],
    },
    reward : [pkmn.bruteBonnet],
    category: 1,
}

areas.eventFlutterMane = {
    rotation: 2,
    type: `event`,
    name: `Flutter Mane Revival`,
    background : `cave`,
    icon: pkmn.flutterMane,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `Requires an <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.flutterMane,
        slot1Moves : [move.nastyPlot.id,move.shadowBall.id, move.moonblast.id, move.babydollEyes.id],
    },
    reward : [pkmn.flutterMane],
    category: 1,
}

areas.eventSandyShocks = {
    rotation: 2,
    type: `event`,
    name: `Sandy Shocks Revival`,
    background : `cave`,
    icon: pkmn.sandyShocks,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.ancientOrchid.got--},
    unlockDescription : `Requires an <img src="img/items/ancientOrchid.png"> Ancient Orchid to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.sandyShocks,
        slot1Moves : [move.earthquake.id,move.thunderbolt.id, move.discharge.id, move.electroWeb.id],
    },
    reward : [pkmn.sandyShocks],
    category: 1,
}


areas.eventRoaringMoon = {
    rotation: 2,
    type: `event`,
    name: `Roaring Moon Revival`,
    background : `cave`,
    icon: pkmn.roaringMoon,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.ancientOrchid.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/ancientOrchid.png"> Ancient Orchids to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.roaringMoon,
        slot1Moves : [move.agility.id,move.fly.id, move.dragonRush.id, move.crunch.id],
    },
    reward : [pkmn.roaringMoon],
    category: 1,
}


areas.eventMegaAerodactly = {
    rotation: 2,
    type: `event`,
    name: `Aerodactyl Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaAerodactyl,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.ancientOrchid.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/ancientOrchid.png"> Ancient Orchids to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaAerodactyl,
        slot1Moves : [move.accelerock.id,move.rockSlide.id, move.airShlash.id, move.earthquake.id],
    },
    reward : [item.aerodactylite, pkmn.aerodactyl],
    category: 1,
}

areas.eventMegaGyarados = {
    rotation: 2,
    type: `event`,
    name: `Gyarados Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaGyarados,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.ancientOrchid.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/ancientOrchid.png"> Ancient Orchids to enter`,
    unlockRequirement : function() { return item.ancientOrchid.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaGyarados,
        slot1Moves : [move.icyWind.id,move.aquaTail.id, move.fly.id, move.crunch.id],
    },
    reward : [item.gyaradosite, pkmn.magikarp],
    category: 1,
}




areas.ecosphere = {
    rotation: 2,
    type: `event`,
    background : `route`,
    level : wildAreaLevel5,
    icon: pkmn.vivillon,
    spawns: {
        common : [pkmn.scatterbug],
        uncommon: [pkmn.vivillon],
        rare : [pkmn.vivillonArchipelago,pkmn.vivillonContinental,pkmn.vivillonGarden,pkmn.vivillonHighPlains,pkmn.vivillonIcySnow,pkmn.vivillonJungle,pkmn.vivillonMarine, pkmn.vivillonMonsoon, pkmn.vivillonOcean, pkmn.vivillonPolar, pkmn.vivillonRiver, pkmn.vivillonSandstorm, pkmn.vivillonSavanna, pkmn.vivillonTundra]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.silverPowder],
    },
    category: 2,
}


areas.primalFissure = {
    rotation: 2,
    type: `event`,
    background : `volcano`,
    level : 95,
    icon: pkmn.salamence,
    difficulty: 5,
    uncatchable: true,
    unlockDescription : `Defeat Master Trainer Geeta in VS to unlock`,
    unlockRequirement : function() { return areas.vsMasterTrainerGeeta.defeated },
    spawns: {
        common : [pkmn.tyranitar,pkmn.salamence,pkmn.garchomp,pkmn.heatran],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.primalEarth]
    },
    category: 2,
}


areas.eventMegaGarchomp = {
    rotation: 2,
    type: `event`,
    name: `Garchomp Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaGarchomp,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.primalEarth.got--},
    unlockDescription : `Requires a <img src="img/items/primalEarth.png"> Primal Earth to enter`,
    unlockRequirement : function() { return item.primalEarth.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaGarchomp,
        slot1Moves : [move.bulldoze.id,move.earthquake.id, move.ironHead.id, move.zenHeadbut.id],
    },
    reward : [item.garchompite, pkmn.gible],
    category: 2,
}

areas.eventMegaTyranitar = {
    rotation: 2,
    type: `event`,
    name: `Tyranitar Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaTyranitar,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.primalEarth.got--},
    unlockDescription : `Requires a <img src="img/items/primalEarth.png"> Primal Earth to enter`,
    unlockRequirement : function() { return item.primalEarth.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaTyranitar,
        slot1Moves : [move.ironDefense.id,move.earthquake.id, move.crunch.id, move.gigaImpact.id],
    },
    reward : [item.tyranitarite, pkmn.larvitar],
    category: 2,
}

areas.eventTapuBulu = {
    rotation: 2,
    type: `event`,
    name: `Virgin Meadow`,
    background : `forest`,
    icon: pkmn.tapuBulu,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.primalEarth.got--},
    unlockDescription : `Requires a <img src="img/items/primalEarth.png"> Primal Earth to enter`,
    unlockRequirement : function() { return item.primalEarth.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.tapuBulu,
        slot1Moves : [move.grassyTerrain.id,move.playRough.id, move.seedBomb.id, move.earthquake.id],
    },
    reward : [pkmn.tapuBulu],
    category: 2,
}












//rotation 3

areas.exoticPond = {
    rotation: 3,
    type: `event`,
    background : `sea`,
    level : wildAreaLevel1,
    icon: pkmn.magikarp,
    spawns: {
        common : [pkmn.magikarp],
        rare : [pkmn.magikarpKoi, pkmn.magikarpRegal, pkmn.magikarpSakura, pkmn.magikarpSkelly, pkmn.magikarpSoar, pkmn.magikarpTiger]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.mysticWater],
    },
    category: 1,
}

areas.meteorCave = {
    rotation: 3,
    type: `event`,
    background : `cave`,
    level : wildAreaLevel5,
    icon: pkmn.minior,
    spawns: {
        common : [pkmn.minior],
        rare : [pkmn.miniorBlue, pkmn.miniorGreen, pkmn.miniorIndigo, pkmn.miniorOrange, pkmn.miniorRed, pkmn.miniorViolet, pkmn.miniorYellow]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.hardStone],
    },
    category: 2,
}

areas.ancientTomb = {
    rotation: 3,
    type: `event`,
    background : `desert`,
    level : 90,
    icon: pkmn.rhyperior,
    uncatchable: true,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.tyranitar,pkmn.rhyperior,pkmn.flygon,pkmn.garchomp],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.ancientKeystone]
    },
    category: 1,
}

areas.steelTomb = {
    rotation: 3,
    type: `event`,
    background : `mountain`,
    level : 95,
    icon: pkmn.metagross,
    difficulty: 5,
    uncatchable: true,
    unlockDescription : `Defeat Master Trainer Geeta in VS to unlock`,
    unlockRequirement : function() { return areas.vsMasterTrainerGeeta.defeated },
    spawns: {
        common : [pkmn.metagross,pkmn.bastiodon,pkmn.excadrill,pkmn.aggron],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.steelKeystone]
    },
    category: 2,
}





areas.eventMegaSceptile = {
    rotation: 3,
    type: `event`,
    name: `Sceptile Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaSceptile,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.steelKeystone.got--},
    unlockDescription : `Requires an <img src="img/items/steelKeystone.png"> Steel Keystone to enter`,
    unlockRequirement : function() { return item.steelKeystone.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaSceptile,
        slot1Moves : [move.thunderWave.id,move.outrage.id, move.focusBlast.id, move.solarBeam.id],
    },
    reward : [item.sceptilite, pkmn.treecko],
    category: 2,
}

areas.eventMegaSwampert = {
    rotation: 3,
    type: `event`,
    name: `Swampert Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaSwampert,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.steelKeystone.got--},
    unlockDescription : `Requires an <img src="img/items/steelKeystone.png"> Steel Keystone to enter`,
    unlockRequirement : function() { return item.steelKeystone.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaSwampert,
        slot1Moves : [move.rainDance.id,move.aquaJet.id, move.earthquake.id, move.icePunch.id],
    },
    reward : [item.swampertite, pkmn.mudkip],
    category: 2,
}

areas.eventMegaBlaziken = {
    rotation: 3,
    type: `event`,
    name: `Blaziken Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaBlaziken,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.steelKeystone.got--},
    unlockDescription : `Requires an <img src="img/items/steelKeystone.png"> Steel Keystone to enter`,
    unlockRequirement : function() { return item.steelKeystone.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaBlaziken,
        slot1Moves : [move.flareBlitz.id,move.blazeKick.id, move.lowSweep.id, move.bounce.id],
    },
    reward : [item.blazikenite, pkmn.torchic],
    category: 2,
}

/*



areas.frozenTomb = {
    rotation: 3,
    type: `event`,
    background : `snow`,
    level : 90,
    icon: pkmn.mamoswine,
    uncatchable: true,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.mamoswine,pkmn.abomasnow,pkmn.avalugg,pkmn.crabominable],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.frozenKeystone]
    },
}

*/

areas.eventRegirock = {
    rotation: 3,
    type: `event`,
    name: `Regirock Tomb`,
    background : `cave`,
    icon: pkmn.regirock,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.ancientKeystone.got--},
    unlockDescription : `Requires an <img src="img/items/ancientKeystone.png"> Ancient Keystone to enter`,
    unlockRequirement : function() { return item.ancientKeystone.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.regirock,
        slot1Moves : [move.zapCannon.id,move.ancientPower.id, move.earthquake.id, move.stoneEdge.id],
    },
    reward : [pkmn.regirock],
    category: 1,
}

areas.eventRegisteel = {
    rotation: 3,
    type: `event`,
    name: `Registeel Tomb`,
    background : `cave`,
    icon: pkmn.registeel,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.ancientKeystone.got--},
    unlockDescription : `Requires an <img src="img/items/ancientKeystone.png"> Ancient Keystone to enter`,
    unlockRequirement : function() { return item.ancientKeystone.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.registeel,
        slot1Moves : [move.zapCannon.id,move.ancientPower.id, move.ironHead.id, move.rockPolish.id],
    },
    reward : [pkmn.registeel],
    category: 1,
}

areas.eventRegice = {
    rotation: 3,
    type: `event`,
    name: `Regice Tomb`,
    background : `cave`,
    icon: pkmn.regice,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.ancientKeystone.got--},
    unlockDescription : `Requires an <img src="img/items/ancientKeystone.png"> Ancient Keystone to enter`,
    unlockRequirement : function() { return item.ancientKeystone.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.regice,
        slot1Moves : [move.zapCannon.id,move.ancientPower.id, move.iceBeam.id, move.blizzard.id],
    },
    reward : [pkmn.regice],
    category: 1,
}

areas.eventMegaMawile = {
    rotation: 3,
    type: `event`,
    name: `Mawile Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaMawile,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.ancientKeystone.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/ancientKeystone.png"> Ancient Keystones to enter`,
    unlockRequirement : function() { return item.ancientKeystone.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaMawile,
        slot1Moves : [move.charm.id,move.ironHead.id, move.playRough.id, move.ironTail.id],
    },
    reward : [item.mawilite, pkmn.mawile],
    category: 1,
}

areas.eventMegaGlalie = {
    rotation: 3,
    type: `event`,
    name: `Glalie Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaGlalie,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.ancientKeystone.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/ancientKeystone.png"> Ancient Keystones to enter`,
    unlockRequirement : function() { return item.ancientKeystone.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaGlalie,
        slot1Moves : [move.hail.id,move.blizzard.id, move.iceBeam.id, move.thunderbolt.id],
    },
    reward : [item.glalitite, pkmn.snorunt],
    category: 1,
}

areas.eventMegaSteelix = {
    rotation: 3,
    type: `event`,
    name: `Steelix Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaSteelix,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.ancientKeystone.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/ancientKeystone.png"> Ancient Keystones to enter`,
    unlockRequirement : function() { return item.ancientKeystone.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaSteelix,
        slot1Moves : [move.ironDefense.id,move.ironTail.id, move.earthquake.id, move.rockSlide.id],
    },
    reward : [item.steelixite, pkmn.onix],
    category: 1,
}

//rotation 4

areas.paupauFestival = {
    rotation: 4,
    type: `event`,
    background : `night`,
    level : wildAreaLevel1,
    icon: pkmn.oricorioBaile,
    spawns: {
        common : [pkmn.spinda, pkmn.whismur, pkmn.maractus],
        rare : [pkmn.oricorioBaile, pkmn.oricorioPau, pkmn.oricorioPomPom, pkmn.oricorioSensu]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.sharpBeak],
    },
    category: 1,
}


areas.flowerMeadow = {
    rotation: 4,
    type: `event`,
    background : `forest`,
    level : wildAreaLevel5,
    icon: pkmn.flabebe,
    spawns: {
        common : [pkmn.flabebe],
        uncommon : [pkmn.florges],
        rare : [pkmn.flabebeBlue, pkmn.flabebeOrange, pkmn.flabebeWhite, pkmn.flabebeYellow]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.miracleSeed],
    },
    category: 2,
}



areas.aetherHeadquarters = {
    rotation: 4,
    type: `event`,
    background : `lab`,
    level : 90,
    icon: pkmn.golisopod,
    uncatchable: true,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.golisopod,pkmn.drampa,pkmn.kommoo,pkmn.crabominable],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.aetherKeycard]
    },
    category: 1,
}



areas.eventNaganadel = {
    rotation: 4,
    type: `event`,
    name: `Chamber-00`,
    background : `lab`,
    icon: pkmn.naganadel,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.aetherKeycard.got--},
    unlockDescription : `Requires an <img src="img/items/aetherKeycard.png"> Aether Keycard to enter`,
    unlockRequirement : function() { return item.aetherKeycard.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.naganadel,
        slot1Moves : [move.acidArmor.id,move.dragonPulse.id, move.toxic.id, move.sludgeWave.id],
    },
    reward : [pkmn.poipole],
    category: 1,
}

areas.eventSilvally = {
    rotation: 4,
    type: `event`,
    name: `Experimental Lab`,
    background : `lab`,
    icon: pkmn.silvally,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.aetherKeycard.got--},
    unlockDescription : `Requires an <img src="img/items/aetherKeycard.png"> Aether Keycard to enter`,
    unlockRequirement : function() { return item.aetherKeycard.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.silvally,
        slot1Moves : [move.swordsDance.id,move.fireFang.id, move.iceFang.id, move.thunderFang.id],
    },
    reward : [pkmn.typeNull],
    category: 1,
}

areas.eventCosmoem = {
    rotation: 4,
    type: `event`,
    name: `Distant Nebula`,
    background : `space`,
    icon: pkmn.cosmoem,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.aetherKeycard.got--},
    unlockDescription : `Requires an <img src="img/items/aetherKeycard.png"> Aether Keycard to enter`,
    unlockRequirement : function() { return item.aetherKeycard.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.cosmoem,
        slot1Moves : [move.calmMind.id,move.shadowBall.id, move.psychic.id, move.extrasensory.id],
    },
    reward : [pkmn.cosmog],
    category: 1,
}

areas.eventGuzzlord = {
    rotation: 4,
    type: `event`,
    name: `Empty Reality`,
    background : `plant`,
    icon: pkmn.guzzlord,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.aetherKeycard.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/aetherKeycard.png"> Aether Keycard to enter`,
    unlockRequirement : function() { return item.aetherKeycard.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.guzzlord,
        slot1Moves : [move.hyperVoice.id,move.screech.id, move.crunch.id, move.alluringVoice.id],
    },
    reward : [pkmn.guzzlord],
    category: 1,
}

areas.eventXurkitree = {
    rotation: 4,
    type: `event`,
    name: `Glowing Reality`,
    background : `night`,
    icon: pkmn.xurkitree,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.aetherKeycard.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/aetherKeycard.png"> Aether Keycard to enter`,
    unlockRequirement : function() { return item.aetherKeycard.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.xurkitree,
        slot1Moves : [move.electricTerrain.id,move.thunderWave.id, move.thunder.id, move.iceBeam.id],
    },
    reward : [pkmn.xurkitree],
    category: 1,
}

areas.eventNihilego = {
    rotation: 4,
    type: `event`,
    name: `Chamber-01`,
    background : `lab`,
    icon: pkmn.nihilego,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.aetherKeycard.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/aetherKeycard.png"> Aether Keycard to enter`,
    unlockRequirement : function() { return item.aetherKeycard.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.nihilego,
        slot1Moves : [move.amnesia.id,move.sludgeWave.id, move.powerGem.id, move.earthPower.id],
    },
    reward : [pkmn.nihilego],
    category: 1,
}

areas.eventKartana = {
    rotation: 4,
    type: `event`,
    name: `Chamber-02`,
    background : `lab`,
    icon: pkmn.kartana,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.aetherKeycard.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/aetherKeycard.png"> Aether Keycard to enter`,
    unlockRequirement : function() { return item.aetherKeycard.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.kartana,
        slot1Moves : [move.screech.id,move.razorLeaf.id, move.ironHead.id, move.machPunk.id],
    },
    reward : [pkmn.kartana],
    category: 1,
}

areas.eventBuzzwole = {
    rotation: 4,
    type: `event`,
    name: `Tropical Reality`,
    background : `lake`,
    icon: pkmn.buzzwole,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.aetherKeycard.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/aetherKeycard.png"> Aether Keycard to enter`,
    unlockRequirement : function() { return item.aetherKeycard.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.buzzwole,
        slot1Moves : [move.bulkUp.id,move.closeCombat.id, move.xScissor.id, move.crossChop.id],
    },
    reward : [pkmn.buzzwole],
    category: 1,
}


areas.eventPheromosa = {
    rotation: 4,
    type: `event`,
    name: `Chamber-03`,
    background : `lab`,
    icon: pkmn.pheromosa,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.aetherKeycard.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/aetherKeycard.png"> Aether Keycard to enter`,
    unlockRequirement : function() { return item.aetherKeycard.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.pheromosa,
        slot1Moves : [move.agility.id,move.machPunk.id, move.uTurn.id, move.pounce.id],
    },
    reward : [pkmn.pheromosa],
    category: 1,
}

areas.eventBlacephalon = {
    rotation: 4,
    type: `event`,
    name: `Chamber-04`,
    background : `lab`,
    icon: pkmn.blacephalon,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.aetherKeycard.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/aetherKeycard.png"> Aether Keycard to enter`,
    unlockRequirement : function() { return item.aetherKeycard.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.blacephalon,
        slot1Moves : [move.calmMind.id,move.mindBlown.id, move.shadowBall.id, move.confuseRay.id],
    },
    reward : [pkmn.blacephalon],
    category: 1,
}



areas.wormholeSpace = {
    rotation: 4,
    type: `event`,
    background : `space`,
    level : 95,
    icon: pkmn.porygonZ,
    difficulty: 5,
    uncatchable: true,
    unlockDescription : `Defeat Master Trainer Geeta in VS to unlock`,
    unlockRequirement : function() { return areas.vsMasterTrainerGeeta.defeated },
    spawns: {
        common : [pkmn.goodra,pkmn.porygonZ,pkmn.dusknoir,pkmn.starmie],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.wormholeResidue]
    },
    category: 2,
}



areas.eventMegaMetagross = {
    rotation: 4,
    type: `event`,
    name: `Metagross Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaMetagross,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.wormholeResidue.got--},
    unlockDescription : `Requires a <img src="img/items/wormholeResidue.png"> Wormhole Residue to enter`,
    unlockRequirement : function() { return item.wormholeResidue.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaMetagross,
        slot1Moves : [move.ironDefense.id,move.ironHead.id, move.zenHeadbut.id, move.earthquake.id],
    },
    reward : [item.metagrossite, pkmn.beldum],
    category: 2,
}


areas.eventTapuFini = {
    rotation: 4,
    type: `event`,
    name: `Tempest Trench`,
    background : `trench`,
    icon: pkmn.tapuFini,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.wormholeResidue.got--},
    unlockDescription : `Requires a <img src="img/items/wormholeResidue.png"> Wormhole Residue to enter`,
    unlockRequirement : function() { return item.wormholeResidue.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.tapuFini,
        slot1Moves : [move.rainDance.id,move.hydroPump.id, move.moonblast.id, move.flashCannon.id],
    },
    reward : [pkmn.tapuFini],
    category: 2,
}

areas.eventTapuLele = {
    rotation: 4,
    type: `event`,
    name: `Strange Space`,
    background : `space`,
    icon: pkmn.tapuLele,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.wormholeResidue.got--},
    unlockDescription : `Requires a <img src="img/items/wormholeResidue.png"> Wormhole Residue to enter`,
    unlockRequirement : function() { return item.wormholeResidue.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.tapuLele,
        slot1Moves : [move.mistBall.id,move.psychic.id, move.moonblast.id, move.fireBlast.id],
    },
    reward : [pkmn.tapuLele],
    category: 2,
}




//rotation 5




areas.protonCity = {
    rotation: 5,
    type: `event`,
    background : `mall`,
    level : 90,
    icon: pkmn.porygonZ,
    uncatchable: true,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.porygonZ,pkmn.klinklang,pkmn.magnezone,pkmn.garchomp],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.futureDisk]
    },
    category: 1,
}





areas.climatologyLab = {
    rotation: 5,
    type: `event`,
    background : `lab`,
    level : wildAreaLevel5,
    icon: pkmn.castform,
    spawns: {
        common : [pkmn.elekid, pkmn.ralts, pkmn.patrat],
        uncommon : [pkmn.castform],
        rare : [pkmn.deerlingAutumn, pkmn.deerlingSpring, pkmn.deerlingWinter]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.magnet],
    },
    category: 2,
}






areas.fusionPlant = {
    rotation: 5,
    type: `event`,
    background : `plant`,
    level : 95,
    icon: pkmn.aggron,
    difficulty: 5,
    uncatchable: true,
    unlockDescription : `Defeat Master Trainer Geeta in VS to unlock`,
    unlockRequirement : function() { return areas.vsMasterTrainerGeeta.defeated },
    spawns: {
        common : [pkmn.aggron,pkmn.megaManectric,pkmn.lucario,pkmn.bellibolt],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.futureContraption]
    },
    category: 2,
}



areas.eventMegaGengar = {
    rotation: 5,
    type: `event`,
    name: `Gengar Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaGengar,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.futureContraption.got--},
    unlockDescription : `Requires a <img src="img/items/futureContraption.png"> Future Contraption to enter`,
    unlockRequirement : function() { return item.futureContraption.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaGengar,
        slot1Moves : [move.fog.id,move.shadowBall.id, move.darkPulse.id, move.sludgeWave.id],
    },
    reward : [item.gengarite, pkmn.gastly],
    category: 2,
}



areas.eventThundurusTherian = {
    rotation: 5,
    type: `event`,
    name: `Far Cloudscape`,
    background : `sea`,
    icon: pkmn.thundurusTherian,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.futureContraption.got--},
    unlockDescription : `Requires a <img src="img/items/futureContraption.png"> Future Contraption to enter`,
    unlockRequirement : function() { return item.futureContraption.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.thundurusTherian,
        slot1Moves : [move.thunderWave.id,move.thunder.id, move.iceBeam.id, move.airShlash.id],
    },
    reward : [pkmn.thundurusTherian],
    category: 2,
}

areas.eventTapuKoko = {
    rotation: 5,
    type: `event`,
    name: `Capacitor Tower`,
    background : `plant`,
    icon: pkmn.tapuKoko,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.futureContraption.got--},
    unlockDescription : `Requires a <img src="img/items/futureContraption.png"> Future Contraption to enter`,
    unlockRequirement : function() { return item.futureContraption.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.tapuKoko,
        slot1Moves : [move.electricTerrain.id,move.thunderPunch.id, move.playRough.id, move.seedBomb.id],
    },
    reward : [pkmn.tapuKoko],
    category: 2,
}





areas.eventIronThorns = {
    rotation: 5,
    type: `event`,
    name: `Iron Thorns Revival`,
    background : `plant`,
    icon: pkmn.ironThorns,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.futureDisk.got--},
    unlockDescription : `Requires a <img src="img/items/futureDisk.png"> Future Disk to enter`,
    unlockRequirement : function() { return item.futureDisk.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.ironThorns,
        slot1Moves : [move.ironDefense.id,move.thunder.id, move.rockSlide.id, move.earthquake.id],
    },
    reward : [pkmn.ironThorns],
    category: 1,
}

areas.eventIronHands = {
    rotation: 5,
    type: `event`,
    name: `Iron Hands Revival`,
    background : `plant`,
    icon: pkmn.ironHands,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.futureDisk.got--},
    unlockDescription : `Requires a <img src="img/items/futureDisk.png"> Future Disk to enter`,
    unlockRequirement : function() { return item.futureDisk.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.ironHands,
        slot1Moves : [move.magneticFlux.id,move.thunderbolt.id, move.ironHead.id, move.closeCombat.id],
    },
    reward : [pkmn.ironHands],
    category: 1,
}

areas.eventIronJugulis = {
    rotation: 5,
    type: `event`,
    name: `Iron Jugulis Revival`,
    background : `plant`,
    icon: pkmn.ironJugulis,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.futureDisk.got--},
    unlockDescription : `Requires a <img src="img/items/futureDisk.png"> Future Disk to enter`,
    unlockRequirement : function() { return item.futureDisk.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.ironJugulis,
        slot1Moves : [move.nastyPlot.id,move.darkPulse.id, move.flamethrower.id, move.thunderbolt.id],
    },
    reward : [pkmn.ironJugulis],
    category: 1,
}





areas.eventIronTreads = {
    rotation: 5,
    type: `event`,
    name: `Iron Treads Revival`,
    background : `plant`,
    icon: pkmn.ironTreads,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.futureDisk.got--},
    unlockDescription : `Requires a <img src="img/items/futureDisk.png"> Future Disk to enter`,
    unlockRequirement : function() { return item.futureDisk.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.ironTreads,
        slot1Moves : [move.earthquake.id,move.ironDefense.id, move.ironHead.id, move.earthPower.id],
    },
    reward : [pkmn.ironTreads],
    category: 1,
}


areas.eventIronBundle = {
    rotation: 5,
    type: `event`,
    name: `Iron Bundle Revival`,
    background : `plant`,
    icon: pkmn.ironBundle,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.futureDisk.got--},
    unlockDescription : `Requires a <img src="img/items/futureDisk.png"> Future Disk to enter`,
    unlockRequirement : function() { return item.futureDisk.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.ironBundle,
        slot1Moves : [move.magneticFlux.id,move.thunder.id, move.iceBeam.id, move.hydroPump.id],
    },
    reward : [pkmn.ironBundle],
    category: 1,
}

areas.eventIronMoth = {
    rotation: 5,
    type: `event`,
    name: `Iron Moth Revival`,
    background : `plant`,
    icon: pkmn.ironMoth,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.futureDisk.got--},
    unlockDescription : `Requires a <img src="img/items/futureDisk.png"> Future Disk to enter`,
    unlockRequirement : function() { return item.futureDisk.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.ironMoth,
        slot1Moves : [move.quiverDance.id,move.thunderbolt.id, move.bugBuzz.id, move.heatWave.id],
    },
    reward : [pkmn.ironMoth],
    category: 1,
}


areas.eventIronValiant = {
    rotation: 5,
    type: `event`,
    name: `Iron Valiant Revival`,
    background : `plant`,
    icon: pkmn.ironValiant,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.futureDisk.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/futureDisk.png"> Future Disk to enter`,
    unlockRequirement : function() { return item.futureDisk.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.ironValiant,
        slot1Moves : [move.ironDefense.id,move.powerupPunch.id, move.ironHead.id, move.playRough.id],
    },
    reward : [pkmn.ironValiant],
    category: 1,
}



areas.eventMegaScizor = {
    rotation: 5,
    type: `event`,
    name: `Scizor Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaScizor,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.futureDisk.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/futureDisk.png"> Future Disk to enter`,
    unlockRequirement : function() { return item.futureDisk.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaScizor,
        slot1Moves : [move.agility.id,move.machPunk.id, move.xScissor.id, move.ironHead.id],
    },
    reward : [item.scizorite, pkmn.scyther],
    category: 1,
}


areas.eventMegaAggron = {
    rotation: 5,
    type: `event`,
    name: `Aggron Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaAggron,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.futureDisk.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/futureDisk.png"> Future Disk to enter`,
    unlockRequirement : function() { return item.futureDisk.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaAggron,
        slot1Moves : [move.ironDefense.id,move.ironHead.id, move.ironTail.id, move.earthquake.id],
    },
    reward : [item.aggronite, pkmn.aron],
    category: 1,
}





//rotation 6



areas.alphaRuins = {
    rotation: 6,
    type: `event`,
    background : `cave`,
    level : wildAreaLevel1,
    icon: pkmn.unownA,
    spawns: {
        common : [pkmn.unownA,pkmn.unownB, pkmn.unownC, pkmn.unownD, pkmn.unownE, pkmn.unownF, pkmn.unownG, pkmn.unownH, pkmn.unownI, pkmn.unownJ, pkmn.unownK, pkmn.unownL, pkmn.unownM, pkmn.unownN, pkmn.unownO, pkmn.unownP, pkmn.unownQ, pkmn.unownR, pkmn.unownS, pkmn.unownT, pkmn.unownU, pkmn.unownV, pkmn.unownW, pkmn.unownX, pkmn.unownY, pkmn.unownZ],
        rare : [pkmn.unownQuestion, pkmn.unownExclamation]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.twistedSpoon],
    },
    category: 1,
}


areas.lakeValor = {
    rotation: 6,
    type: `event`,
    background : `lake`,
    level : 90,
    icon: pkmn.gyarados,
    uncatchable: true,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.gyarados,pkmn.staraptor,pkmn.froslass,pkmn.tangrowth],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.wisdomPetal]
    },
    category: 1,
}





areas.galacticWarehouse = {
    rotation: 6,
    type: `event`,
    background : `plant`,
    level : wildAreaLevel5,
    icon: pkmn.rotomFrost,
    spawns: {
        common : [pkmn.gastly, pkmn.rattata, pkmn.misdreavus],
        rare : [pkmn.rotomFan, pkmn.rotomFrost, pkmn.rotomHeat, pkmn.rotomMow, pkmn.rotomWash]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.magnet],
    },
    category: 2,
}


areas.galacticHeadquarters = {
    rotation: 6,
    type: `event`,
    background : `lab`,
    level : 95,
    icon: pkmn.purugly,
    difficulty: 5,
    uncatchable: true,
    unlockDescription : `Defeat Master Trainer Geeta in VS to unlock`,
    unlockRequirement : function() { return areas.vsMasterTrainerGeeta.defeated },
    spawns: {
        common : [pkmn.gengar,pkmn.purugly,pkmn.bronzong,pkmn.megaBanette],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.redChain]
    },
    category: 2,
}



areas.eventMegaGallade = {
    rotation: 6,
    type: `event`,
    name: `Gallade Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaGallade,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.redChain.got--},
    unlockDescription : `Requires a <img src="img/items/redChain.png"> Red Chain to enter`,
    unlockRequirement : function() { return item.redChain.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.megaGallade,
        slot1Moves : [move.psychoCut.id,move.playRough.id, move.closeCombat.id, move.nightSlash.id],
    },
    reward : [item.galladite, pkmn.ralts],
    category: 2,
}

areas.eventCresselia = {
    rotation: 6,
    type: `event`,
    name: `Dream Plains`,
    background : `night`,
    icon: pkmn.cresselia,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.redChain.got--},
    unlockDescription : `Requires a <img src="img/items/redChain.png"> Red Chain to enter`,
    unlockRequirement : function() { return item.redChain.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.cresselia,
        slot1Moves : [move.calmMind.id,move.psychic.id, move.moonblast.id, move.airShlash.id],
    },
    reward : [pkmn.cresselia],
    category: 2,
}

areas.eventHeatran = {
    rotation: 6,
    type: `event`,
    name: `Stark Mountain`,
    background : `volcano`,
    icon: pkmn.heatran,
    trainer: true,
    encounter: true,
    difficulty: tier3difficulty,
    encounterEffect : function() {item.redChain.got--},
    unlockDescription : `Requires a <img src="img/items/redChain.png"> Red Chain to enter`,
    unlockRequirement : function() { return item.redChain.got>0 },
    level : 100,
    team : {
        slot1 : pkmn.heatran,
        slot1Moves : [move.magmaStorm.id,move.signalBeam.id, move.fireBlast.id, move.ironHead.id],
    },
    reward : [pkmn.heatran],
    category: 2,
}



/*



areas.lakeAcuity = {
    rotation: 6,
    type: `event`,
    background : `lake`,
    level : 90,
    icon: pkmn.luxray,
    uncatchable: true,
    unlockDescription : `Defeat Elite Trainer Cynthia in VS to unlock`,
    unlockRequirement : function() { return areas.vsEliteTrainerCynthia.defeated },
    spawns: {
        common : [pkmn.luxray,pkmn.dusknoir,pkmn.gallade,pkmn.lickilicky],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.wisdomPetal]
    },
    category: 1,
}

*/

areas.eventMesprit = {
    rotation: 6,
    type: `event`,
    name: `Mesprit cavern`,
    background : `cave`,
    icon: pkmn.mesprit,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.wisdomPetal.got--},
    unlockDescription : `Requires a <img src="img/items/wisdomPetal.png"> Wisdom Petal to enter`,
    unlockRequirement : function() { return item.wisdomPetal.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.mesprit,
        slot1Moves : [move.calmMind.id,move.psychic.id, move.extrasensory.id, move.moonblast.id],
    },
    reward : [pkmn.mesprit],
    category: 1,
}

areas.eventAzelf = {
    rotation: 6,
    type: `event`,
    name: `Azelf cavern`,
    background : `cave`,
    icon: pkmn.azelf,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.wisdomPetal.got--},
    unlockDescription : `Requires a <img src="img/items/wisdomPetal.png"> Wisdom Petal to enter`,
    unlockRequirement : function() { return item.wisdomPetal.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.azelf,
        slot1Moves : [move.nastyPlot.id,move.psychic.id, move.extrasensory.id, move.moonblast.id],
    },
    reward : [pkmn.azelf],
    category: 1,
}


areas.eventUxie = {
    rotation: 6,
    type: `event`,
    name: `Uxie cavern`,
    background : `cave`,
    icon: pkmn.uxie,
    trainer: true,
    encounter: true,
    difficulty: tier1difficulty,
    encounterEffect : function() {item.wisdomPetal.got--},
    unlockDescription : `Requires a <img src="img/items/wisdomPetal.png"> Wisdom Petal to enter`,
    unlockRequirement : function() { return item.wisdomPetal.got>0 },
    level : 90,
    team : {
        slot1 : pkmn.uxie,
        slot1Moves : [move.amnesia.id,move.psychic.id, move.extrasensory.id, move.moonblast.id],
    },
    reward : [pkmn.uxie],
    category: 1,
}


areas.eventMegaPidgeot = {
    rotation: 6,
    type: `event`,
    name: `Pidgeot Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaPidgeot,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.wisdomPetal.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/wisdomPetal.png"> Wisdom Petals to enter`,
    unlockRequirement : function() { return item.wisdomPetal.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaPidgeot,
        slot1Moves : [move.featherDance.id,move.fly.id, move.hyperVoice.id, move.heatWave.id],
    },
    reward : [item.pidgeotite, pkmn.pidgey],
    category: 1,
}

areas.eventMegaBeedrill = {
    rotation: 6,
    type: `event`,
    name: `Beedrill Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaBeedrill,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.wisdomPetal.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/wisdomPetal.png"> Wisdom Petals to enter`,
    unlockRequirement : function() { return item.wisdomPetal.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaBeedrill,
        slot1Moves : [move.stringShot.id,move.xScissor.id, move.crossPoison.id, move.bugBuzz.id],
    },
    reward : [item.beedrillite, pkmn.weedle],
    category: 1,
}

areas.eventMegaAlakazam = {
    rotation: 6,
    type: `event`,
    name: `Alakazam Mega-Showdown`,
    background : `gym`,
    icon: pkmn.megaAlakazam,
    trainer: true,
    encounter: true,
    difficulty: tier2difficulty,
    encounterEffect : function() {item.wisdomPetal.got-=3},
    unlockDescription : `Requires x3 <img src="img/items/wisdomPetal.png"> Wisdom Petals to enter`,
    unlockRequirement : function() { return item.wisdomPetal.got>2 },
    level : 100,
    team : {
        slot1 : pkmn.megaAlakazam,
        slot1Moves : [move.amnesia.id,move.psychic.id, move.energyBall.id, move.moonblast.id],
    },
    reward : [item.alakazite, pkmn.abra],
    category: 1,
}




//vs set----------------------------------------------------
areas.vsYounsterBilly = {
    name: `Youngster Billy`,
    background : `gym`,
    sprite : `youngster`,
    trainer: true,
    type: `vs`,
    level : 5,
    team : {
        slot1 : pkmn.rattata,
        slot1Moves : [move.quickAttack.id,move.leer.id],
        slot2 : pkmn.shinx,
        slot2Moves : [move.nuzzle.id, move.quickAttack.id],
        slot3 : pkmn.starly,
        slot3Moves : [move.peck.id],
    },
    reward : [pkmn.chewtle, item.bottleCap]
}

areas.vsAromaLadyCatherine = {
    name: `Aroma Lady Jana`,
    background : `gym`,
    sprite : `aromaLady`,
    trainer: true,
    type: `vs`,
    level : 10,
    team : {
        slot1 : pkmn.budew,
        slot1Moves : [move.vineWhip.id,move.babydollEyes.id],
        slot2 : pkmn.oddish,
        slot2Moves : [move.leafage.id, move.acid.id],
        slot3 : pkmn.combee,
        slot3Moves : [move.struggleBug.id, move.leer.id],
        slot4 : pkmn.happiny,
        slot4Moves : [move.fakeTears.id, move.disarmingVoice.id],
    },
    reward : [pkmn.riolu, item.bottleCap]
}

areas.vsBugCatcherMilo = {
    name: `Bug Catcher Milo`,
    background : `gym`,
    sprite : `bugCatcher`,
    trainer: true,
    type: `vs`,
    level : 15,
    team : {
        slot1 : pkmn.volbeat,
        slot1Moves : [move.pounce.id,move.tackle.id],
        slot2 : pkmn.paras,
        slot2Moves : [move.leafage.id, move.poisonPowder.id],
        slot3 : pkmn.beautifly,
        slot3Moves : [move.gust.id, move.playNice.id],
        slot4 : pkmn.nincada,
        slot4Moves : [move.furyCutter.id, move.screech.id],
        slot5 : pkmn.pinsir,
        slot5Moves : [move.twineedle.id, move.bugBuzz.id],
    },
    reward : [pkmn.tangela, item.chartiBerry,  item.bottleCap]
}

areas.vsGymLeaderBrock = {
    name: `Gym Leader Brock`,
    background : `gym`,
    sprite : `brock`,
    trainer: true,
    type: `vs`,
    level : 20,
    team : {
        slot1 : pkmn.onix,
        slot1Moves : [move.rockThrow.id,move.mudShot.id],
        slot2 : pkmn.geodude,
        slot2Moves : [move.rollout.id, move.quickAttack.id],
        slot3 : pkmn.kabuto,
        slot3Moves : [move.ancientPower.id, move.aquaJet.id],
        slot4 : pkmn.omanyte,
        slot4Moves : [move.smackDown.id, move.waterGun.id],
        slot5 : pkmn.rhyhorn,
        slot5Moves : [move.mudSlap.id, move.rockThrow.id],
        slot6 : pkmn.aerodactyl,
        slot6Moves : [move.smackDown.id, move.gust.id],
    },
    reward : [item.hardStone, item.goldenBottleCap],
    encounterEffect: function() {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `New features unlocked!`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >New Wild Area unlocked</div>
        <div style="filter:hue-rotate(0deg)" >New Dungeon: Sinnoh Underground</div>
        <div style="filter:hue-rotate(0deg)" >New Dungeon: Beginner Dojo</div>
        <div style="filter:hue-rotate(50deg)" >Mystery Gift unlocked</div>
        <div style="filter:hue-rotate(200deg)" >Export Reward unlocked</div>
        <div style="filter:hue-rotate(300deg)" >Poke-Mart unlocked</div>
        </div>
        `
        openTooltip()
    }
}

areas.vsBlackBeltRyan = {
    name: `Black Belt Ryan`,
    background : `gym`,
    sprite : `blackBelt`,
    trainer: true,
    type: `vs`,
    level : 25,
    team : {
        slot1 : pkmn.hitmonchan,
        slot1Moves : [move.machPunk.id,move.bulkUp.id, move.rockSmash.id],
        slot2 : pkmn.poliwrath,
        slot2Moves : [move.aquaJet.id, move.vacuumWave.id, move.machPunk.id],
        slot3 : pkmn.primeape,
        slot3Moves : [move.dizzyPunch.id, move.powerupPunch.id, move.swagger.id],
        slot4 : pkmn.breloom,
        slot4Moves : [move.machPunk.id, move.vacuumWave.id, move.thunderPunch.id],
        slot5 : pkmn.sawk,
        slot5Moves : [move.machPunk.id, move.bulkUp.id, move.firePunch.id],
        slot6 : pkmn.machoke,
        slot6Moves : [move.rockSmash.id, move.brickBreak.id, move.machPunk.id],
    },
    reward : [pkmn.makuhita, item.bottleCap]
}

areas.vsSchoolKidAaron = {
    name: `School Kid Aaron`,
    background : `gym`,
    sprite : `schoolKid`,
    trainer: true,
    type: `vs`,
    level : 30,
    team : {
        slot1 : pkmn.mrmime,
        slot1Moves : [move.confusion.id,move.futureSight.id, move.psybeam.id],
        slot2 : pkmn.porygon2,
        slot2Moves : [move.tackle.id, move.swagger.id, move.triAttack.id],
        slot3 : pkmn.ledian,
        slot3Moves : [move.quickAttack.id, move.powerupPunch.id, move.swagger.id],
        slot4 : pkmn.herdier,
        slot4Moves : [move.leer.id, move.strength.id, move.stomp.id],
        slot5 : pkmn.kirlia,
        slot5Moves : [move.psybeam.id, move.alluringVoice.id, move.fairyWind.id],
        slot6 : pkmn.kadabra,
        slot6Moves : [move.calmMind.id, move.psybeam.id, move.confusion.id],
    },
    reward : [pkmn.pichu, item.bottleCap]
}

areas.vsRocketGrunt1 = {
    name: `Rocket Grunt`,
    background : `gym`,
    sprite : `rocketGruntM`,
    trainer: true,
    type: `vs`,
    level : 35,
    team : {
        slot1 : pkmn.muk,
        slot1Moves : [move.sludge.id,move.acid.id, move.toxic.id],
        slot2 : pkmn.fearow,
        slot2Moves : [move.featherDance.id, move.swagger.id, move.skyDrop.id],
        slot3 : pkmn.raticate,
        slot3Moves : [move.hyperVoice.id, move.stomp.id, move.swagger.id],
        slot4 : pkmn.hypno,
        slot4Moves : [move.extrasensory.id, move.futureSight.id, move.amnesia.id],
        slot5 : pkmn.golbat,
        slot5Moves : [move.toxic.id, move.poisonFang.id, move.acrobatics.id],
        slot6 : pkmn.haunter,
        slot6Moves : [move.hex.id, move.ominousWind.id, move.psychic.id],
    },
    reward : [pkmn.gastly, item.bottleCap]
}

areas.vsGymLeaderMisty = {
    name: `Gym Leader Misty`,
    background : `gym`,
    sprite : `misty`,
    trainer: true,
    type: `vs`,
    level : 40,
    team : {
        slot1 : pkmn.golduck,
        slot1Moves : [move.aquaJet.id,move.confusion.id, move.thunderWave.id],
        slot2 : pkmn.quagsire,
        slot2Moves : [move.waterGun.id, move.mudSlap.id, move.mudShot.id],
        slot3 : pkmn.lanturn,
        slot3Moves : [move.thunderWave.id, move.chargeBeam.id, move.waterGun.id],
        slot4 : pkmn.floatzel,
        slot4Moves : [move.aquaJet.id, move.futureSight.id, move.chillingWater.id],
        slot5 : pkmn.lapras,
        slot5Moves : [move.waterGun.id, move.waterPulse.id, move.psybeam.id],
        slot6 : pkmn.starmie,
        slot6Moves : [move.psychic.id, move.auroraBeam.id, move.waterPulse.id],
    },
    reward : [item.mysticWater, item.goldenBottleCap],
    encounterEffect: function() {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `New features unlocked!`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >New Wild Area unlocked</div>
        <div style="filter:hue-rotate(0deg)" >New Dungeon: Advanced Dojo</div>
        <div style="filter:hue-rotate(300deg)" >Training unlocked</div>
        </div>
        `
        openTooltip()
    }
}

areas.vsSwimmerDan = {
    name: `Swimmer Dan`,
    background : `gym`,
    sprite : `swimmer`,
    trainer: true,
    type: `vs`,
    level : 45,
    team : {
        slot1 : pkmn.wishiwashi,
        slot1Moves : [move.aquaJet.id,move.zenHeadbut.id, move.waterGun.id],
        slot2 : pkmn.toxapex,
        slot2Moves : [move.waterfall.id, move.toxic.id, move.crossPoison.id],
        slot3 : pkmn.dewgong,
        slot3Moves : [move.iceBeam.id, move.auroraBeam.id, move.waterfall.id],
        slot4 : pkmn.marowak,
        slot4Moves : [move.bulldoze.id, move.mudShot.id, move.rototiller.id],
        slot5 : pkmn.cloyster,
        slot5Moves : [move.iceShard.id, move.surf.id, move.waterGun.id],
        slot6 : pkmn.alolanRaichu,
        slot6Moves : [move.psychic.id, move.zenHeadbut.id, move.surf.id],
    },
    reward : [pkmn.magikarp, item.bottleCap]
}

areas.vsVeteranToshiro = {
    name: `Veteran Toshiro`,
    background : `gym`,
    sprite : `veteran`,
    trainer: true,
    type: `vs`,
    level : 50,
    team : {
        slot1 : pkmn.lickitung,
        slot1Moves : [move.strength.id,move.bodyPress.id, move.thunderWave.id],
        slot2 : pkmn.pyroar,
        slot2Moves : [move.hyperVoice.id, move.flameCharge.id, move.nobleRoar.id],
        slot3 : pkmn.kangaskhan,
        slot3Moves : [move.dizzyPunch.id, move.powerupPunch.id, move.metalClaw.id],
        slot4 : pkmn.bewear,
        slot4Moves : [move.strength.id, move.machPunk.id, move.bodyPress.id],
        slot5 : pkmn.beheeyem,
        slot5Moves : [move.futureSight.id, move.psychic.id, move.zenHeadbut.id],
        slot6 : pkmn.shiftry,
        slot6Moves : [move.leafage.id, move.leafBlade.id, move.pursuit.id],
    },
    reward : [pkmn.swirlix, item.bottleCap]
}

areas.vsClownDuck = {
    name: `Clown Duck`,
    background : `gym`,
    sprite : `clown`,
    trainer: true,
    type: `vs`,
    level : 55,
    team : {
        slot1 : pkmn.absol,
        slot1Moves : [move.snarl.id,move.feintAttack.id, move.honeClaws.id],
        slot2 : pkmn.chandelure,
        slot2Moves : [move.shadowSneak.id, move.confuseRay.id, move.shadowBall.id],
        slot3 : pkmn.ludicolo,
        slot3Moves : [move.thunderbolt.id, move.magicalLeaf.id, move.waterfall.id],
        slot4 : pkmn.gliscor,
        slot4Moves : [move.honeClaws.id, move.earthquake.id, move.smog.id],
        slot5 : pkmn.leafeon,
        slot5Moves : [move.leafBlade.id, move.cottonSpore.id, move.energyBall.id],
        slot6 : pkmn.sirfetchd,
        slot6Moves : [move.dizzyPunch.id, move.powerupPunch.id, move.metalClaw.id],
    },
    reward : [pkmn.ducklett, item.bottleCap]
}

areas.vsGymLeaderPhoebe = {
    name: `Gym Leader Phoebe`,
    background : `gym`,
    sprite : `phoebe`,
    trainer: true,
    type: `vs`,
    level : 60,
    team : {
        slot1 : pkmn.drifblim,
        slot1Moves : [move.icyWind.id, move.hex.id, move.confuseRay.id, move.shadowSneak.id],
        slot2 : pkmn.mismagius,
        slot2Moves : [move.ominousWind.id, move.psychic.id, move.shadowBall.id, move.thunderWave.id],
        slot3 : pkmn.gengar,
        slot3Moves : [move.lick.id, move.hex.id, move.shadowBall.id, move.shadowSneak.id],
        slot4 : pkmn.cofagrigus,
        slot4Moves : [move.ominousWind.id, move.hex.id, move.shadowBall.id, move.shadowSneak.id],
        slot5 : pkmn.dusknoir,
        slot5Moves : [move.willOWisp.id, move.hex.id, move.confuseRay.id, move.thunderWave.id],
        slot6 : pkmn.dragapult,
        slot6Moves : [move.dragonClaw.id, move.hex.id, move.shadowBall.id, move.dragonDance.id],
    },
    reward : [item.spellTag, item.goldenBottleCap],
    encounterEffect: function() {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `New features unlocked!`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >New Wild Area unlocked</div>
        <div style="filter:hue-rotate(0deg)" >New Dungeon: Expert Dojo</div>
        </div>
        `
        openTooltip()
    }
}


areas.vsTwinTrainersBellisse = {
    name: `Twin Trainers Bellise`,
    background : `gym`,
    sprite : `twins`,
    trainer: true,
    type: `vs`,
    level : 65,
    team : {
        slot1 : pkmn.lickilicky,
        slot1Moves : [move.strength.id,move.bodyPress.id, move.hyperBeam.id],
        slot2 : pkmn.raichu,
        slot2Moves : [move.magneticFlux.id, move.discharge.id, move.thunderbolt.id],
        slot3 : pkmn.rapidash,
        slot3Moves : [move.fireFang.id, move.flameCharge.id, move.bodyPress.id],
        slot4 : pkmn.nidoking,
        slot4Moves : [move.honeClaws.id, move.earthquake.id, move.smog.id],
        slot5 : pkmn.nidoqueen,
        slot5Moves : [move.earthPower.id, move.rototiller.id, move.dig.id],
        slot6 : pkmn.wigglytuff,
        slot6Moves : [move.hyperVoice.id, move.moonblast.id, move.hyperBeam.id],
    },
    reward : [pkmn.plusle, item.bottleCap]
}

areas.vsAceTrainerRicardo = {
    name: `Ace Trainer Ricardo`,
    background : `gym`,
    sprite : `aceTrainerSnowM`,
    trainer: true,
    type: `vs`,
    level : 70,
    team : {
        slot1 : pkmn.charizard,
        slot1Moves : [move.flamethrower.id,move.fly.id, move.honeClaws.id],
        slot2 : pkmn.rotomWash,
        slot2Moves : [move.discharge.id, move.confuseRay.id, move.scald.id],
        slot3 : pkmn.lopunny,
        slot3Moves : [move.dizzyPunch.id, move.bulkUp.id, move.crossChop.id],
        slot4 : pkmn.steelix,
        slot4Moves : [move.ironDefense.id, move.earthquake.id, move.ironTail.id],
        slot5 : pkmn.drapion,
        slot5Moves : [move.crossPoison.id, move.bugBuzz.id, move.smog.id],
        slot6 : pkmn.salamence,
        slot6Moves : [move.fireFang.id, move.dragonDance.id, move.dragonClaw.id],
    },
    reward : [pkmn.charmander, item.bottleCap]
}

areas.vsAceTrainerLily = {
    name: `Ace Trainer Lily`,
    background : `gym`,
    sprite : `aceTrainerSnowF`,
    trainer: true,
    type: `vs`,
    level : 75,
    team : {
        slot1 : pkmn.primarina,
        slot1Moves : [move.hyperVoice.id,move.scald.id, move.moonblast.id],
        slot2 : pkmn.aegislash,
        slot2Moves : [move.shadowSneak.id, move.confuseRay.id, move.shadowBall.id],
        slot3 : pkmn.lucario,
        slot3Moves : [move.bulletPunch.id, move.ironDefense.id, move.auraSphere.id],
        slot4 : pkmn.meganium,
        slot4Moves : [move.stunSpore.id, move.energyBall.id, move.solarBeam.id],
        slot5 : pkmn.swampert,
        slot5Moves : [move.earthquake.id, move.waterfall.id, move.bulkUp.id],
        slot6 : pkmn.tyranitar,
        slot6Moves : [move.crunch.id, move.hyperBeam.id, move.earthPower.id],
    },
    reward : [pkmn.mudkip, item.bottleCap]
}

areas.vsEliteTrainerCynthia = {
    name: `Elite Trainer Cynthia`,
    background : `gym`,
    sprite : `cynthia`,
    difficulty : 5,
    trainer: true,
    type: `vs`,
    level : 80,
    team : {
        slot1 : pkmn.eelektross,
        slot1Moves : [move.thunderbolt.id, move.magneticFlux.id, move.discharge.id, move.nastyPlot.id],
        slot2 : pkmn.porygonZ,
        slot2Moves : [move.triAttack.id, move.psychic.id, move.hyperBeam.id, move.nastyPlot.id],
        slot3 : pkmn.milotic,
        slot3Moves : [move.scald.id, move.waterfall.id, move.liquidation.id, move.psychic.id],
        slot4 : pkmn.spiritomb,
        slot4Moves : [move.confuseRay.id, move.hex.id, move.shadowBall.id, move.shadowSneak.id],
        slot5 : pkmn.togekiss,
        slot5Moves : [move.airShlash.id, move.thunderWave.id, move.dazzlingGleam.id, move.moonblast.id],
        slot6 : pkmn.megaGarchomp,
        slot6Moves : [move.swordsDance.id, move.dragonTail.id, move.dragonRush.id, move.earthquake.id],
    },
    reward : [item.dragonFang, item.goldenBottleCap],
    encounterEffect: function() {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `New features unlocked!`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >Tier I Event Raids unlocked</div>
        <div style="filter:hue-rotate(0deg)" >New Dungeon: Victory Road</div>
        <div style="filter:hue-rotate(50deg)" >Level Training unlocked</div>
        </div>
        `
        openTooltip()
    }
}

areas.vsEliteFourLorelei = {
    name: `Elite Four Lorelei`,
    background : `gym`,
    sprite : `lorelei`,
    trainer: true,
    type: `vs`,
    difficulty : 7,
    level : 85,
    team : {
        slot1 : pkmn.weavile,
        slot1Moves : [move.iceShard.id,move.icicleCrash.id, move.nightSlash.id],
        slot2 : pkmn.crabominable,
        slot2Moves : [move.avalanche.id, move.confuseRay.id, move.lowSweep.id],
        slot3 : pkmn.mamoswine,
        slot3Moves : [move.iceShard.id, move.avalanche.id, move.earthPower.id],
        slot4 : pkmn.regice,
        slot4Moves : [move.iceBeam.id, move.energyBall.id, move.thunderbolt.id],
        slot5 : pkmn.avalugg,
        slot5Moves : [move.avalanche.id, move.icicleCrash.id, move.ancientPower.id],
        slot6 : pkmn.articuno,
        slot6Moves : [move.iceBeam.id, move.blizzard.id, move.fly.id],
    },
    reward : [pkmn.totodile, item.bottleCap]
}

areas.vsEliteFourFlint = {
    name: `Elite Four Flint`,
    background : `gym`,
    sprite : `flint`,
    trainer: true,
    difficulty : 7,
    type: `vs`,
    level : 90,
    team : {
        slot1 : pkmn.houndoom,
        slot1Moves : [move.willOWisp.id,move.fireBlast.id, move.darkPulse.id],
        slot2 : pkmn.charizard,
        slot2Moves : [move.flamethrower.id, move.fireBlast.id, move.airShlash.id],
        slot3 : pkmn.arcanine,
        slot3Moves : [move.flamethrower.id, move.extremeSpeed.id, move.fireSpin.id],
        slot4 : pkmn.regirock,
        slot4Moves : [move.earthPower.id, move.earthquake.id, move.ancientPower.id],
        slot5 : pkmn.infernape,
        slot5Moves : [move.flamethrower.id, move.powerupPunch.id, move.crossChop.id],
        slot6 : pkmn.moltres,
        slot6Moves : [move.flamethrower.id, move.fireBlast.id, move.fly.id],
    },
    reward : [pkmn.cyndaquil, item.bottleCap]
}

areas.vsEliteFourPoppy = {
    name: `Elite Four Poppy`,
    background : `gym`,
    sprite : `poppy`,
    difficulty : 8,
    trainer: true,
    type: `vs`,
    level : 95,
    team : {
        slot1 : pkmn.lucario,
        slot1Moves : [move.bulletPunch.id,move.powerupPunch.id, move.lowSweep.id],
        slot2 : pkmn.excadrill,
        slot2Moves : [move.earthquake.id, move.honeClaws.id, move.metalClaw.id],
        slot3 : pkmn.magnezone,
        slot3Moves : [move.bulletPunch.id, move.thunderbolt.id, move.flashCannon.id],
        slot4 : pkmn.registeel,
        slot4Moves : [move.ironHead.id, move.zapCannon.id, move.ironTail.id],
        slot5 : pkmn.metagross,
        slot5Moves : [move.bulletPunch.id, move.ironHead.id, move.zenHeadbut.id],
        slot6 : pkmn.zapdos,
        slot6Moves : [move.thunderbolt.id, move.thunderWave.id, move.fly.id],
    },
    reward : [pkmn.chikorita, item.bottleCap]
}

areas.vsEliteFourLance = {
    name: `Elite Four Lance`,
    background : `gym`,
    sprite : `lance`,
    trainer: true,
    type: `vs`,
    difficulty : 8,
    level : 100,
    team : {
        slot1 : pkmn.salamence,
        slot1Moves : [move.dragonClaw.id,move.fly.id, move.fireFang.id, move.dragonRush.id],
        slot2 : pkmn.goodra,
        slot2Moves : [move.solarBeam.id, move.dragonRush.id, move.dragonClaw.id, move.acidArmor.id],
        slot3 : pkmn.haxorus,
        slot3Moves : [move.dragonClaw.id, move.dragonRush.id, move.extremeSpeed.id, move.earthquake.id],
        slot4 : pkmn.dragonite,
        slot4Moves : [move.thunderWave.id, move.fly.id, move.thunderPunch.id, move.dragonTail.id],
        slot5 : pkmn.garchomp,
        slot5Moves : [move.dragonClaw.id, move.earthquake.id, move.dragonTail.id, move.ironHead.id],
        slot6 : pkmn.rayquaza,
        slot6Moves : [move.dragonDance.id, move.fly.id, move.dragonClaw.id, move.flamethrower.id],
    },
    reward : [item.luckIncense, item.goldenBottleCap],
    encounterEffect: function() {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `New features unlocked!`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >Tier II Event Raids unlocked</div>
        <div style="filter:hue-rotate(0deg)" >Genetics unlocked</div>
        </div>
        `
        openTooltip()
    }
}

areas.vsTeamLeaderColress = {
    name: `Team Leader Colress`,
    background : `gym`,
    sprite : `colress`,
    difficulty : 9,
    trainer: true,
    type: `vs`,
    level : 105,
    team : {
        slot1 : pkmn.magnezone,
        slot1Moves : [move.thunderWave.id,move.flashCannon.id, move.thunder.id],
        slot2 : pkmn.empoleon,
        slot2Moves : [move.hydroPump.id, move.scald.id, move.flashCannon.id],
        slot3 : pkmn.lucario,
        slot3Moves : [move.powerupPunch.id, move.ironHead.id, move.closeCombat.id],
        slot4 : pkmn.cobalion,
        slot4Moves : [move.agility.id, move.ironHead.id, move.ironTail.id],
        slot5 : pkmn.metagross,
        slot5Moves : [move.zenHeadbut.id, move.ironHead.id, move.psychoCut.id],
        slot6 : pkmn.heatran,
        slot6Moves : [move.ironDefense.id, move.fireBlast.id, move.flamethrower.id],
    },
    reward : [item.abilityPatch, item.bottleCap]
}

areas.vsTeamLeaderArchie = {
    name: `Team Leader Archie`,
    background : `gym`,
    sprite : `archie`,
    difficulty : 9,
    trainer: true,
    type: `vs`,
    level : 110,
    team : {
        slot1 : pkmn.primarina,
        slot1Moves : [move.sweetKiss.id,move.scald.id, move.moonblast.id],
        slot2 : pkmn.greninja,
        slot2Moves : [move.scald.id, move.darkPulse.id, move.nightSlash.id],
        slot3 : pkmn.gyarados,
        slot3Moves : [move.dragonDance.id, move.fly.id, move.bounce.id],
        slot4 : pkmn.suicune,
        slot4Moves : [move.nastyPlot.id, move.iceBeam.id, move.chillingWater.id],
        slot5 : pkmn.swampert,
        slot5Moves : [move.earthquake.id, move.dig.id, move.icePunch.id],
        slot6 : pkmn.kyogre,
        slot6Moves : [move.calmMind.id, move.hydroPump.id, move.iceBeam.id],
    },
    reward : [item.abilityPatch, item.bottleCap]
}

areas.vsTeamLeaderMaxie = {
    name: `Team Leader Maxie`,
    background : `gym`,
    sprite : `maxie`,
    difficulty : 10,
    trainer: true,
    type: `vs`,
    level : 115,
    team : {
        slot1 : pkmn.delphox,
        slot1Moves : [move.confuseRay.id,move.psychic.id, move.extrasensory.id],
        slot2 : pkmn.volcarona,
        slot2Moves : [move.quiverDance.id, move.bugBuzz.id, move.heatWave.id],
        slot3 : pkmn.hisuianArcanine,
        slot3Moves : [move.extremeSpeed.id, move.rockSlide.id, move.flamethrower.id],
        slot4 : pkmn.entei,
        slot4Moves : [move.swordsDance.id, move.flareBlitz.id, move.earthquake.id],
        slot5 : pkmn.magmortar,
        slot5Moves : [move.nastyPlot.id, move.flamethrower.id, move.fireBlast.id],
        slot6 : pkmn.groudon,
        slot6Moves : [move.bulkUp.id, move.firePunch.id, move.earthquake.id],
    },
    reward : [item.abilityPatch, item.bottleCap]
}

areas.vsTeamLeaderGiovanni = {
    name: `Team Leader Giovanni`,
    background : `gym`,
    sprite : `giovanni`,
    difficulty : 10,
    trainer: true,
    type: `vs`,
    level : 120,
    team : {
        slot1 : pkmn.slaking,
        slot1Moves : [move.bulkUp.id,move.gigaImpact.id, move.shadowPunch.id, move.extremeSpeed.id],
        slot2 : pkmn.krookodile,
        slot2Moves : [move.honeClaws.id, move.earthquake.id, move.nightSlash.id, move.sandstorm.id],
        slot3 : pkmn.tyranitar,
        slot3Moves : [move.earthquake.id, move.rockSlide.id, move.ironDefense.id, move.crunch.id],
        slot4 : pkmn.megaKangaskhan,
        slot4Moves : [move.powerupPunch.id, move.gigaImpact.id, move.closeCombat.id, move.thunderPunch.id],
        slot5 : pkmn.hydreigon,
        slot5Moves : [move.nastyPlot.id, move.dracoMeteor.id, move.darkPulse.id, move.toxic.id],
        slot6 : pkmn.mewtwo,
        slot6Moves : [move.calmMind.id, move.psychic.id, move.shadowBall.id, move.confuseRay.id],
    },
    reward : [item.abilityCapsule, item.goldenBottleCap],
    encounterEffect: function() {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `New features unlocked!`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(0deg)" >Battle Frontier unlocked</div>
        <div style="filter:hue-rotate(100deg)" >Elite Event tab unlocked</div>
        </div>
        `
        openTooltip()
    }
}







areas.vsTeamLeaderCyrus = { //setiv4
    name: `Team Leader Cyrus`,
    background : `gym`,
    sprite : `cyrus`,
    difficulty : 11,
    trainer: true,
    type: `vs`,
    level : 125,
    team : {
        slot1 : pkmn.gyarados,
        slot1Moves : [move.dragonDance.id,move.fly.id, move.waterfall.id],
        slot2 : pkmn.crobat,
        slot2Moves : [move.featherDance.id, move.dualWingbeat.id, move.toxic.id],
        slot3 : pkmn.weavile,
        slot3Moves : [move.agility.id, move.icicleCrash.id, move.nightSlash.id],
        slot4 : pkmn.palkia,
        slot4Moves : [move.hydroPump.id, move.iceBeam.id, move.spacialRend.id],
        slot5 : pkmn.dialga,
        slot5Moves : [move.flashCannon.id, move.earthPower.id, move.roarOfTime.id],
        slot6 : pkmn.giratina,
        slot6Moves : [move.dragonDance.id, move.dragonClaw.id, move.shadowForce.id],
    },
    reward : [item.destinyKnot, item.bottleCap]
}

areas.vsTeamLeaderGhetsis = {
    name: `Team Leader Ghetsis`,
    background : `gym`,
    sprite : `ghetsis`,
    difficulty : 12,
    trainer: true,
    type: `vs`,
    level : 130,
    team : {
        slot1 : pkmn.drapion,
        slot1Moves : [move.swordsDance.id,move.xScissor.id, move.poisonJab.id],
        slot2 : pkmn.seismitoad,
        slot2Moves : [move.thunderWave.id, move.scald.id, move.earthquake.id],
        slot3 : pkmn.hydreigon,
        slot3Moves : [move.dragonDance.id, move.crunch.id, move.dracoMeteor.id],
        slot4 : pkmn.reshiram,
        slot4Moves : [move.calmMind.id, move.iceBeam.id, move.blueFlare.id],
        slot5 : pkmn.zekrom,
        slot5Moves : [move.honeClaws.id, move.dragonClaw.id, move.boltStrike.id],
        slot6 : pkmn.kyurem,
        slot6Moves : [move.nastyPlot.id, move.darkPulse.id, move.glaciate.id],
    },
    reward : [item.energyRoot, item.bottleCap]
}

areas.vsMasterTrainerSteven = {
    name: `Master Trainer Steven`,
    background : `gym`,
    sprite : `steven`,
    difficulty : 13,
    trainer: true,
    type: `vs`,
    level : 135,
    team : {
        slot1 : pkmn.blaziken,
        slot1Moves : [move.agility.id,move.blazeKick.id, move.crossChop.id],
        slot2 : pkmn.feraligatr,
        slot2Moves : [move.earthPower.id, move.iceBeam.id, move.scald.id],
        slot3 : pkmn.arcanine,
        slot3Moves : [move.extremeSpeed.id, move.flareBlitz.id, move.willOWisp.id],
        slot4 : pkmn.latios,
        slot4Moves : [move.swordsDance.id, move.flareBlitz.id, move.earthquake.id],
        slot5 : pkmn.deoxys,
        slot5Moves : [move.nastyPlot.id, move.flamethrower.id, move.fireBlast.id],
        slot6 : pkmn.megaMetagross,
        slot6Moves : [move.bulkUp.id, move.firePunch.id, move.earthquake.id],
    },
    reward : [item.timeCandy, item.bottleCap]
}

areas.vsMasterTrainerGeeta = {
    name: `Master Trainer Geeta`,
    background : `gym`,
    sprite : `geeta`,
    difficulty : 14,
    trainer: true,
    type: `vs`,
    level : 140,
    team : {
        slot1 : pkmn.kingambit,
        slot1Moves : [move.swordsDance.id,move.knockOff.id, move.ironHead.id, move.psychoCut.id],
        slot2 : pkmn.avalugg,
        slot2Moves : [move.thunderWave.id, move.icicleCrash.id, move.earthquake.id, move.rockBlast.id],
        slot3 : pkmn.megaAltaria,
        slot3Moves : [move.featherDance.id, move.calmMind.id, move.moonblast.id, move.iceBeam.id],
        slot4 : pkmn.megaAggron,
        slot4Moves : [move.earthquake.id, move.ironDefense.id, move.bodyPress.id, move.stoneEdge.id],
        slot5 : pkmn.koraidon,
        slot5Moves : [move.outrage.id, move.dracoMeteor.id, move.closeCombat.id, move.toxic.id],
        slot6 : pkmn.miraidon,
        slot6Moves : [move.electricTerrain.id, move.voltTackle.id, move.flashCannon.id, move.dragonPulse.id],
    },
    reward : [item.autoRefightTicket, item.goldenBottleCap],
        encounterEffect: function() {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `New features unlocked!`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >Tier III Event Raids unlocked</div>
        </div>
        `
        openTooltip()
    }
}







//little cup - D-C tiers
//league 1


const exclusiveFrontierPkmn = [
    
pkmn.vivillonModern,

pkmn.relicanth, pkmn.heatmor, pkmn.durant, pkmn.comfey, pkmn.morpeko, pkmn.klefki, pkmn.munna, pkmn.finneon, pkmn.skorupi, pkmn.stunky, pkmn.zangoose, pkmn.gulpin,
pkmn.teddiursa, pkmn.pineco, pkmn.shuckle, pkmn.minccino, pkmn.pincurchin, pkmn.stonjourner, pkmn.smeargle, pkmn.stantler, pkmn.nickit, pkmn.porygon,

pkmn.charmander, pkmn.squirtle, pkmn.bulbasaur, pkmn.chikorita, pkmn.cyndaquil, pkmn.totodile, pkmn.mudkip, pkmn.torchic, pkmn.treecko, pkmn.turtwig, pkmn.piplup, pkmn.chimchar,
pkmn.tepig, pkmn.snivy, pkmn.oshawott, pkmn.froakie, pkmn.chespin, pkmn.fennekin, pkmn.rowlet, pkmn.litten, pkmn.popplio, pkmn.grookey, pkmn.scorbunny, pkmn.sobble, pkmn.sprigatito, pkmn.fuecoco, pkmn.quaxly,

pkmn.meltan

]

const rotationFrontierMax = 3;
areas.frontierMorty = { //rock
    sprite : `hiker`,
    league: 1,
    typing: `rock`,
    trainer: true,
    type: `frontier`,
}

areas.frontierHamburg = { //water
    sprite : `sailor`,
    league: 1,
    typing: `water`,
    trainer: true,
    type: `frontier`,
}

areas.frontierLaila = { //electric
    sprite : `beauty`,
    league: 1,
    typing: `electric`,
    trainer: true,
    type: `frontier`,
}

areas.frontierBianque = { //grass
    sprite : `aromaLady`,
    typing: `grass`,
    league: 1,
    trainer: true,
    type: `frontier`,
}

areas.frontierMiguel = { //poison
    sprite : `janitor`,
    typing: `poison`,
    league: 1,
    trainer: true,
    type: `frontier`,
}

areas.frontierMistica = { //psychic
    sprite : `psychic`,
    league: 1,
    typing: `psychic`,
    trainer: true,
    type: `frontier`,
}


areas.frontierPierro = { //fire
    sprite : `firebreather`,
    typing: `fire`,
    league: 1,
    trainer: true,
    type: `frontier`,
}


areas.frontierMauro = { //normal
    sprite : `artist`,
    typing: `normal`,
    league: 1,
    trainer: true,
    type: `frontier`,
}


areas.frontierKiro = { //dark
    sprite : `shadow`,
    league: 1,
    typing: `dark`,
    trainer: true,
    type: `frontier`,
}


areas.frontierKatarina = { //flying
    sprite : `birdkeeper`,
    typing: `flying`,
    league: 1,
    trainer: true,
    type: `frontier`,
}

areas.frontierFausto = { //dragon
    sprite : `pokemaniac`,
    league: 1,
    typing: `dragon`,
    trainer: true,
    type: `frontier`,
}

areas.frontierMomo = { //fairy
    sprite : `channeler`,
    typing: `fairy`,
    league: 1,
    trainer: true,
    type: `frontier`,
}

areas.frontierJairo = { //bug
    sprite : `bugCatcher`,
    typing: `bug`,
    league: 1,
    trainer: true,
    type: `frontier`,
}

areas.frontierJunimo = { // ice
    sprite : `gentleman`,
    typing: `ice`,
    league: 1,
    trainer: true,
    type: `frontier`,
}

areas.frontierLion = { //steel
    sprite : `scientist`,
    typing: `steel`,
    league: 1,
    trainer: true,
    type: `frontier`,
}


areas.frontierGordon = { //ground
    sprite : `hiker2`,
    typing: `ground`,
    league: 1,
    trainer: true,
    type: `frontier`,
}

areas.frontierTaria = { //fighting
    sprite : `battlegirl`,
    league: 1,
    typing: `fighting`,
    trainer: true,
    type: `frontier`,
}

areas.frontierIota = { //ghost
    sprite : `hexmaniac`,
    typing: `ghost`,
    league: 1,
    trainer: true,
    type: `frontier`,
}





//great league - B tiers
//league 2
areas.frontierRoark = { //rock
    sprite : `roark`,
    league: 2,
    typing: `rock`,
    trainer: true,
    type: `frontier`,
}

areas.frontierNessa = { //water
    sprite : `nessa`,
    league: 2,
    typing: `water`,
    trainer: true,
    type: `frontier`,
}

areas.frontierLtSurge = { //electric
    sprite : `ltsurge`,
    league: 2,
    typing: `electric`,
    trainer: true,
    type: `frontier`,
}

areas.frontierErika = { //grass
    sprite : `erika`,
    typing: `grass`,
    league: 2,
    trainer: true,
    type: `frontier`,
}

areas.frontierRoxie = { //poison
    sprite : `roxie`,
    typing: `poison`,
    league: 2,
    trainer: true,
    type: `frontier`,
}

areas.frontierSabrina = { //psychic
    sprite : `sabrina`,
    league: 2,
    typing: `psychic`,
    trainer: true,
    type: `frontier`,
}


areas.frontierBlaine = { //fire
    sprite : `blaine`,
    typing: `fire`,
    league: 2,
    trainer: true,
    type: `frontier`,
}


areas.frontierNorman = { //normal
    sprite : `norman`,
    typing: `normal`,
    league: 2,
    trainer: true,
    type: `frontier`,
}


areas.frontierMarnie = { //dark
    sprite : `marnie`,
    league: 2,
    typing: `dark`,
    trainer: true,
    type: `frontier`,
}


areas.frontierSkyla = { //flying
    sprite : `skyla`,
    typing: `flying`,
    league: 2,
    trainer: true,
    type: `frontier`,
}

areas.frontierIris = { //dragon
    sprite : `iris`,
    league: 2,
    typing: `dragon`,
    trainer: true,
    type: `frontier`,
}

areas.frontierOpal = { //fairy
    sprite : `opal`,
    typing: `fairy`,
    league: 2,
    trainer: true,
    type: `frontier`,
}

areas.frontierBurgh = { //bug
    sprite : `burgh`,
    typing: `bug`,
    league: 2,
    trainer: true,
    type: `frontier`,
}

areas.frontierCandice = { // ice
    sprite : `candice`,
    typing: `ice`,
    league: 2,
    trainer: true,
    type: `frontier`,
}

areas.frontierJasmine = { //steel
    sprite : `jasmine`,
    typing: `steel`,
    league: 2,
    trainer: true,
    type: `frontier`,
}


areas.frontierClay = { //ground
    sprite : `clay`,
    typing: `ground`,
    league: 2,
    trainer: true,
    type: `frontier`,
}

areas.frontierKorrina = { //fighting
    sprite : `korrina`,
    league: 2,
    typing: `fighting`,
    trainer: true,
    type: `frontier`,
}

areas.frontierMorty = { //ghost
    sprite : `morty`,
    typing: `ghost`,
    league: 2,
    trainer: true,
    type: `frontier`,
}


//league 3 -A tier
areas.frontierOlivia = { //rock
    sprite : `olivia`,
    league: 3,
    typing: `rock`,
    trainer: true,
    type: `frontier`,
}

areas.frontierSiebold = { //water
    sprite : `siebold`,
    league: 3,
    typing: `water`,
    trainer: true,
    type: `frontier`,
}

areas.frontierDiamant = { //electric
    sprite : `ingo`,
    league: 3,
    typing: `electric`,
    trainer: true,
    type: `frontier`,
}

areas.frontierMatron = { //grass
    sprite : `madame`,
    typing: `grass`,
    league: 3,
    trainer: true,
    type: `frontier`,
}

areas.frontierKoga = { //poison
    sprite : `koga`,
    typing: `poison`,
    league: 3,
    trainer: true,
    type: `frontier`,
}

areas.frontierLucian = { //psychic
    sprite : `lucian`,
    league: 3,
    typing: `psychic`,
    trainer: true,
    type: `frontier`,
}


areas.frontierCrispin = { //fire
    sprite : `crispin`,
    typing: `fire`,
    league: 3,
    trainer: true,
    type: `frontier`,
}


areas.frontierLarry = { //normal
    sprite : `larry`,
    typing: `normal`,
    league: 3,
    trainer: true,
    type: `frontier`,
}


areas.frontierSidney = { //dark
    sprite : `sidney`,
    league: 3,
    typing: `dark`,
    trainer: true,
    type: `frontier`,
}


areas.frontierKahili = { //flying
    sprite : `kahili`,
    typing: `flying`,
    league: 3,
    trainer: true,
    type: `frontier`,
}

areas.frontierDrake = { //dragon
    sprite : `drake`,
    league: 3,
    typing: `dragon`,
    trainer: true,
    type: `frontier`,
}

areas.frontierLacey = { //fairy
    sprite : `lacey`,
    typing: `fairy`,
    league: 3,
    trainer: true,
    type: `frontier`,
}

areas.frontierAaron = { //bug
    sprite : `aaron`,
    typing: `bug`,
    league: 3,
    trainer: true,
    type: `frontier`,
}

areas.frontierGlacia = { //ice
    sprite : `glacia`,
    typing: `ice`,
    league: 3,
    trainer: true,
    type: `frontier`,
}

areas.frontierWikstrom = { //steel
    sprite : `wikstrom`,
    typing: `steel`,
    league: 3,
    trainer: true,
    type: `frontier`,
}


areas.frontierBertha = { //ground
    sprite : `bertha`,
    typing: `ground`,
    league: 3,
    trainer: true,
    type: `frontier`,
}

areas.frontierBruno = { //fighting
    sprite : `bruno`,
    league: 3,
    typing: `fighting`,
    trainer: true,
    type: `frontier`,
}

areas.frontierAcerola = { //ghost
    sprite : `acerola`,
    typing: `ghost`,
    league: 3,
    trainer: true,
    type: `frontier`,
}


//league 4 S-SS-20% tier
areas.frontierPeony = { //rock
    sprite : `peony`,
    league: 4,
    typing: `rock`,
    trainer: true,
    type: `frontier`,
}

areas.frontierArchie = { //water
    sprite : `archie`,
    league: 4,
    typing: `water`,
    trainer: true,
    type: `frontier`,
}

areas.frontierColress = { //electric
    sprite : `colress`,
    league: 4,
    typing: `electric`,
    trainer: true,
    type: `frontier`,
}

areas.frontierNemona = { //grass
    sprite : `nemona`,
    typing: `grass`,
    league: 4,
    trainer: true,
    type: `frontier`,
}

areas.frontierGuzma = { //poison
    sprite : `guzma`,
    typing: `poison`,
    league: 4,
    trainer: true,
    type: `frontier`,
}

areas.frontierKieran = { //psychic
    sprite : `kieran`,
    league: 4,
    typing: `psychic`,
    trainer: true,
    type: `frontier`,
}

areas.frontierMaxie = { //fire
    sprite : `maxie`,
    typing: `fire`,
    league: 4,
    trainer: true,
    type: `frontier`,
}

areas.frontierPenny = { //normal
    sprite : `penny`,
    typing: `normal`,
    league: 4,
    trainer: true,
    type: `frontier`,
}


areas.frontierGiovanni = { //dark
    sprite : `giovanni`,
    league: 4,
    typing: `dark`,
    trainer: true,
    type: `frontier`,
}


areas.frontierWallace = { //flying
    sprite : `wallace`,
    typing: `flying`,
    league: 4,
    trainer: true,
    type: `frontier`,
}

areas.frontierCyrus = { //dragon
    sprite : `cyrus`,
    league: 4,
    typing: `dragon`,
    trainer: true,
    type: `frontier`,
}

areas.frontierDiantha = { //fairy
    sprite : `diantha`,
    typing: `fairy`,
    league: 4,
    trainer: true,
    type: `frontier`,
}

areas.frontierTrace = { //bug
    sprite : `trace`,
    typing: `bug`,
    league: 4,
    trainer: true,
    type: `frontier`,
}

areas.frontierGhetsis = { //ice
    sprite : `ghetsis`,
    typing: `ice`,
    league: 4,
    trainer: true,
    type: `frontier`,
}

areas.frontierSteven = { //steel
    sprite : `steven`,
    typing: `steel`,
    league: 4,
    trainer: true,
    type: `frontier`,
}

areas.frontierLeon = { //ground
    sprite : `leon`,
    typing: `ground`,
    league: 4,
    trainer: true,
    type: `frontier`,
}

areas.frontierAlder = { //fighting
    sprite : `alder`,
    league: 4,
    typing: `fighting`,
    trainer: true,
    type: `frontier`,
}

areas.frontierGeeta = { //ghost
    sprite : `geeta`,
    typing: `ghost`,
    league: 4,
    trainer: true,
    type: `frontier`,
}

areas.frontierSpiralingTower = {
    type: `frontier`,
    level : 100,
    background : `tower`,
    floor : 1,
    icon: pkmn.pikachu,
}





function secretFight(area){
    closeTooltip()
     saved.currentAreaBuffer = area;
     document.getElementById("preview-team-exit").style.display = "flex";
     document.getElementById("team-menu").style.zIndex = "50";
     document.getElementById("team-menu").style.display = "flex";
     document.getElementById("menu-button-parent").style.display = "none";
     updatePreviewTeam(); afkSeconds = 0;
     document.getElementById("explore-menu").style.display = "none"
     document.getElementById("settings-menu").style.display = "none"
     document.getElementById("dictionary-menu").style.display = "none"
}

areas.missingArea = {
    background : `missing`,
    trainer: true,
    encounter: true,
    difficulty: tier4difficulty,
    level : 100,
    team : {
        slot1 : pkmn.missingno,
        slot1Moves : [move.agility.id,move.triAttack.id, move.thunderWave.id, move.fly.id],
    },
    reward : [pkmn.missingno],
}

areas.studioA = {
    background : `mall`,
    trainer: true,
    encounter: true,
    difficulty: tier4difficulty,
    level : 100,
    team : {
        slot1 : pkmn.f00,
        slot1Moves : [move.thunderWave.id,move.nastyPlot.id, move.thunder.id, move.iceBeam.id],
    },
    reward : [pkmn.f00],
}




const wildlifePoolCommon = [
    
    pkmn.lechonk.id, pkmn.tarountula.id, pkmn.nymble.id, pkmn.fidough.id, pkmn.smoliv.id,  pkmn.tadbulb.id, pkmn.shroodle.id, pkmn.bramblin.id, pkmn.capsakid.id, 
    pkmn.flittle.id, pkmn.wiglett.id, pkmn.varoom.id, pkmn.glimmet.id, pkmn.greavard.id, pkmn.veluza.id,
    
    
    pkmn.spearow.id, pkmn.nidoranF.id, pkmn.nidoranM.id, pkmn.vulpix.id, pkmn.venonat.id, pkmn.diglett.id, pkmn.psyduck.id,  pkmn.growlithe.id, pkmn.poliwag.id, 
    pkmn.ponyta.id, pkmn.seel.id, pkmn.krabby.id, pkmn.staryu.id, pkmn.sentret.id, pkmn.hoothoot.id, pkmn.ledyba.id, pkmn.aipom.id, pkmn.mareep.id,  
    pkmn.horsea.id, pkmn.phanpy.id, pkmn.wurmple.id, pkmn.lotad.id, pkmn.shroomish.id,  pkmn.minun.id, pkmn.budew.id, pkmn.barboach.id, pkmn.corphish.id, 
    pkmn.duskull.id, pkmn.bidoof.id, pkmn.shinx.id, pkmn.burmy.id, pkmn.buizel.id, pkmn.cherubi.id,  pkmn.tympole.id, pkmn.sewaddle.id, 
    pkmn.purrloin.id, pkmn.blitzle.id, pkmn.drilbur.id, pkmn.karrablast.id, pkmn.tynamo.id, pkmn.shelmet.id, pkmn.bunnelby.id, pkmn.flabebe.id, pkmn.skiddo.id, 
    pkmn.dwebble.id, pkmn.tirtouga.id, pkmn.solosis.id, pkmn.pancham.id, pkmn.spritzee.id, pkmn.clauncher.id, pkmn.bergmite.id, pkmn.yungoos.id, 
    pkmn.wishiwashi.id, pkmn.dewpider.id, pkmn.cutiefly.id, pkmn.fomantis.id, pkmn.morelull.id, pkmn.stufful.id, pkmn.bounsweet.id, pkmn.sandygast.id, pkmn.skwovet.id, pkmn.gossifleur.id, 
    pkmn.yamper.id, pkmn.toxel.id, pkmn.indeedee.id, pkmn.cufant.id, pkmn.plusle.id, pkmn.chewtle.id,


    //fodder
    pkmn.rattata.id, pkmn.zigzagoon.id, pkmn.starly.id, pkmn.pidgey.id, pkmn.patrat.id, pkmn.caterpie.id, pkmn.taillow.id, pkmn.lillipup.id,
    pkmn.fletchling.id, pkmn.zubat.id, pkmn.poochyena.id, pkmn.pidove.id, pkmn.weedle.id, pkmn.rookidee.id, 
    pkmn.pikipek.id, pkmn.spinarak.id, pkmn.hoppip.id, pkmn.wingull.id, pkmn.wooloo.id, pkmn.sunkern.id,
    pkmn.scatterbug.id, pkmn.kricketot.id, pkmn.whismur.id,  pkmn.venipede.id, pkmn.blipbug.id, pkmn.pawmi.id,
    pkmn.oddish.id, pkmn.bellsprout.id,pkmn.geodude.id, pkmn.magikarp.id, pkmn.marill.id, pkmn.wooper.id,
    pkmn.seedot.id, pkmn.slakoth.id, pkmn.nincada.id, pkmn.skitty.id, pkmn.electrike.id,
    pkmn.combee.id, pkmn.shellos.id, pkmn.roggenrola.id, pkmn.woobat.id, pkmn.timburr.id,
    pkmn.litwick.id, pkmn.joltik.id, pkmn.foongus.id, pkmn.flabebe.id, pkmn.espurr.id, pkmn.honedge.id





]

const wildlifePoolUncommon = [
    
    pkmn.tandemaus.id, pkmn.maschiff.id, pkmn.klawf.id, pkmn.finizen.id, pkmn.orthworm.id, 
    
    pkmn.lapras.id, pkmn.omanyte.id, pkmn.qwilfish.id, pkmn.happiny.id, pkmn.kecleon.id, pkmn.volbeat.id, pkmn.cranidos.id, pkmn.audino.id, pkmn.sawk.id, pkmn.crabrawler.id, 
    pkmn.basculin.id, pkmn.emolga.id, pkmn.alomomola.id, pkmn.stunfisk.id, pkmn.komala.id, pkmn.clobbopus.id, pkmn.gligar.id, pkmn.inkay.id, pkmn.nacli.id, pkmn.glameow.id, 

    //fodder
    pkmn.ducklett.id, pkmn.tauros.id, pkmn.kabuto.id, pkmn.ditto.id, pkmn.dunsparce.id, pkmn.girafarig.id,
    pkmn.miltank.id, pkmn.illumise.id, pkmn.castform.id, pkmn.tropius.id, pkmn.croagunk.id,
    pkmn.throh.id, pkmn.maractus.id, pkmn.sigilyph.id,
    pkmn.binacle.id, pkmn.helioptile.id, pkmn.carbink.id,pkmn.mudbray.id, pkmn.salandit.id,pkmn.togedemaru.id
    



]

const wildlifePoolRare = [
    
    pkmn.charcadet.id, pkmn.bombirdier.id, pkmn.cyclizar.id, pkmn.dondozo.id, pkmn.tatsugiri.id, pkmn.frigibax.id, pkmn.tinkatink.id, pkmn.vivillonFancy.id,
    
    
    pkmn.heracross.id, pkmn.skarmory.id, pkmn.absol.id, pkmn.feebas.id, pkmn.munchlax.id, pkmn.phione.id, pkmn.axew.id, pkmn.druddigon.id, pkmn.oranguru.id, pkmn.turtonator.id, 
    pkmn.mimikyu.id, pkmn.dracozolt.id, pkmn.arctozolt.id, pkmn.dracovish.id, pkmn.arctovish.id, pkmn.duraludon.id, pkmn.cetoddle.id, pkmn.luvdisc.id, pkmn.aron.id, pkmn.meowth.id, 

    //fodder
    pkmn.aerodactyl.id, pkmn.dratini.id, pkmn.larvitar.id, pkmn.ralts.id, pkmn.mawile.id, pkmn.sableye.id, pkmn.bagon.id, pkmn.beldum.id,
    pkmn.riolu.id, pkmn.gible.id, pkmn.spiritomb.id, pkmn.rotom.id, pkmn.zorua.id, pkmn.deino.id, pkmn.goomy.id, pkmn.noibat.id,
    pkmn.jangmoo.id, pkmn.dhelmise.id, pkmn.passimian.id, pkmn.drampa.id, pkmn.dreepy.id, pkmn.eiscue.id



]

areas.wildlifePark = {
    level : wildAreaLevel1,
    background : `forest`,
    icon: pkmn.honedge,
    spawns: {
        common : [pkmn.kabuto,pkmn.koffing, pkmn.honedge],
        uncommon : [pkmn.ditto],
        rare : [pkmn.dreepy]
    },
    drops: {
        common : [item.mysteryEgg]
    }
}








areas.training = {
    background: `gym`
}




for (const i in areas){
    areas[i].id = i

    if (areas[i].trainer) areas[i].defeated = false

    if (areas[i].type == "wild" && areas[i].level == wildAreaLevel2) {
        areas[i].unlockDescription = `Defeat Gym Leader Brock in VS to unlock`
        areas[i].unlockRequirement = function() { return areas.vsGymLeaderBrock.defeated }
    }

    if (areas[i].type == "wild" && areas[i].level == wildAreaLevel3) {
        areas[i].unlockDescription = `Defeat Gym Leader Misty in VS to unlock`
        areas[i].unlockRequirement = function() { return areas.vsGymLeaderMisty.defeated }
    }

    if (areas[i].type == "wild" && areas[i].level == wildAreaLevel4) {
        areas[i].unlockDescription = `Defeat Gym Leader Phoebe in VS to unlock`
        areas[i].unlockRequirement = function() { return areas.vsGymLeaderPhoebe.defeated }
    }

}