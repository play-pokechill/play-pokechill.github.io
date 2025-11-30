const areas = {}



//area 1 rs = rare pkmn
//area 2 rs = single target high base stats pkmn
//area 3 rs = starter
//area 4 rs = pseudo-legendary


const rotationWildMax = 4;

const wildAreaLevel1 = 10
const wildAreaLevel2 = 30
const wildAreaLevel3 = 50
const wildAreaLevel4 = 70
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
        rare : [item.silverPowder]
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
        rare : [item.spellTag]
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
        rare : [item.miracleSeed]
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
        rare : [item.hardStone]
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
        rare : [item.silkScarf]
    }
}

areas.citySewers = {
    rotation : 2,
    level : wildAreaLevel2,
    type: `wild`,
    background : `plant`,
    icon: pkmn.trubbish,
    spawns: {
        common : [pkmn.rattata,pkmn.ekans, pkmn.trubbish],
        uncommon : [pkmn.alolanGrimer],
        rare : [pkmn.sandile]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.poisonBarb]
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
        rare : [item.charcoal]
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
        rare : [item.magnet]
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
        rare : [item.blackGlasses]
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
        rare : [item.fairyFeather]
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
        rare : [item.softSand]
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
        rare : [item.metalCoat]
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
        rare : [item.sharpBeak]
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
        rare : [item.dragonFang]
    }
}

areas.coolBeach = {
    rotation : 4,
    level : wildAreaLevel3,
    type: `wild`,
    background : `beach`,
    icon: pkmn.pyukumuku,
    spawns: {
        common : [pkmn.starmie,pkmn.pyukumuku, pkmn.binacle],
        uncommon : [pkmn.slowpoke],
        rare : [pkmn.squirtle]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.mysticWater]
    }
}

areas.computeringLab = {
    rotation : 4,
    level : wildAreaLevel4,
    type: `wild`,
    background : `lab`,
    icon: pkmn.porygon,
    spawns: {
        common : [pkmn.abra,pkmn.dedenne, pkmn.helioptile],
        uncommon : [pkmn.porygon],
        rare : [pkmn.beldum]
    },
    drops: {
        common : [item.mysteryEgg],
        rare : [item.twistedSpoon]
    }
}







/*






























areas.frozenPlains = {
    type: `wild`,
    background : `snow`,
    tier : 2,
    icon: pkmn.swinub,
    spawns: {
        common : [pkmn.swinub,pkmn.snorunt, pkmn.cubchoo],
        uncommon : [pkmn.sneasel],
        rare : [pkmn.alolanVulpix]
    },
    drops: {
        common : [item.mysteryEgg],
    }
}








*/









const rotationDungeonMax = 3;


//rotation 1
areas.beginnerTrainingI = {
    rotation : 1,
    type: `dungeon`,
    background : `gym`,
    level : wildAreaLevel2,
    unlockDescription : `🔒 Defeat Gym Leader Brock in VS to unlock`,
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

areas.advancedTrainingI = {
    rotation : 1,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Misty in VS to unlock`,
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

areas.expertTrainingI = {
    rotation : 1,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Phoebe in VS to unlock`,
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


//rotation 2
areas.beginnerTrainingII = {
    rotation : 2,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Brock in VS to unlock`,
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

areas.advancedTrainingII = {
    rotation : 2,
    type: `dungeon`,
    background : `gym`,
    level : wildAreaLevel3,
    unlockDescription : `🔒 Defeat Gym Leader Misty in VS to unlock`,
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

areas.expertTrainingII = {
    rotation : 2,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Phoebe in VS to unlock`,
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

//rotation 3
areas.beginnerTrainingIII = {
    rotation : 3,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Brock in VS to unlock`,
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

areas.advancedTrainingIII = {
    rotation : 3,
    type: `dungeon`,
    background : `gym`,
    unlockDescription : `🔒 Defeat Gym Leader Misty in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderMisty.defeated },
    level : wildAreaLevel3,
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.hariyama,pkmn.hitmonchan, pkmn.medicham, pkmn.throh],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.psychoCutTm, item.rockSlideTm, item.bitterMaliceTm, item.dragonTailTm, item.biteTm, item.spiritBreakTm]
    },
}

areas.expertTrainingIII = {
    rotation : 3,
    type: `dungeon`,
    background : `gym`,
    level : wildAreaLevel4,
    unlockDescription : `🔒 Defeat Gym Leader Phoebe in VS to unlock`,
    unlockRequirement : function() { return areas.vsGymLeaderPhoebe.defeated },
    icon: item.tmDummy,
    spawns: {
        common : [pkmn.lucario,pkmn.machamp, pkmn.hawlucha, pkmn.mienshao],
    },
    drops: {
        common : [item.nothing],
        uncommon : [item.psychicTm, item.powerGemTm, item.phantomForceTm, item.dragonRushTm, item.darkPulseTm, item.playRoughTm]
    },
}



//        common : [item.strengthTm, item.flamethrowerTm, item.thunderboltTm, item.earthquakeTm, item.flashCannonTm, item.flyTm, item.sludgeBombTm, item.iceBeamTm, item.bugBuzzTm, item.aquaTailTm, item.leafBladeTm, item.auraSphereTm, item.psychicTm, item.powerGemTm, item.phantomForceTm, item.dragonRushTm, item.darkPulseTm, item.playRoughTm]














const rotationEventMax = 1;

areas.alphaRuins = {
    rotation: 1,
    type: `event`,
    background : `cave`,
    tier : 1,
    level : 10,
    icon: pkmn.unownA,
    spawns: {
        common : [pkmn.unownA,pkmn.unownB, pkmn.unownC, pkmn.unownD, pkmn.unownE, pkmn.unownF, pkmn.unownG, pkmn.unownH, pkmn.unownI, pkmn.unownJ, pkmn.unownK, pkmn.unownL, pkmn.unownM, pkmn.unownN, pkmn.unownO, pkmn.unownP, pkmn.unownQ, pkmn.unownR, pkmn.unownS, pkmn.unownT, pkmn.unownU, pkmn.unownV, pkmn.unownW, pkmn.unownX, pkmn.unownY, pkmn.unownZ],
        rare : [pkmn.unownQuestion, pkmn.unownExclamation]
    },
    drops: {
        common : [item.mysteryEgg],
    },
}

/*

areas.originCave = {
    type: `event`,
    background : `volcano`,
    tier : 2,
    level : 80,
    icon: pkmn.groudon,
    spawns: {
        common : [pkmn.budew,pkmn.cascoon, pkmn.paras, pkmn.caterpie],
        rare : [pkmn.sudowoodo, pkmn.chatot]
    },
}

areas.trainerGroudon = {
    name: `Team Leader Maxie`,
    sprite : `maxie`,
    trainer: true,
    type: `event`,
    background : `volcano`,
    tier : 3,
    level : 80,
    icon: pkmn.groudon,
    spawns: {
        common : [pkmn.budew,pkmn.cascoon, pkmn.paras, pkmn.caterpie],
        rare : [pkmn.sudowoodo, pkmn.chatot]
    },
}

*/





























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
    reward : [pkmn.rockruff]
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
    reward : [pkmn.riolu]
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
    reward : [item.chartiBerry]
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
        slot1Moves : [move.rockTomb.id,move.mudShot.id],
        slot2 : pkmn.geodude,
        slot2Moves : [move.rollout.id, move.quickAttack.id],
        slot3 : pkmn.kabuto,
        slot3Moves : [move.ancientPower.id, move.aquaJet.id],
        slot4 : pkmn.omanyte,
        slot4Moves : [move.smackDown.id, move.waterGun.id],
        slot5 : pkmn.rhyhorn,
        slot5Moves : [move.mudShot.id, move.ancientPower.id],
        slot6 : pkmn.aerodactyl,
        slot6Moves : [move.smackDown.id, move.skyDrop.id],
    },
    reward : [item.hardStone]
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
        slot1Moves : [move.thunderPunch.id,move.bulkUp.id, move.stormThrow.id],
        slot2 : pkmn.poliwrath,
        slot2Moves : [move.aquaJet.id, move.brickBreak.id, move.machPunk.id],
        slot3 : pkmn.primeape,
        slot3Moves : [move.dizzyPunch.id, move.powerupPunch.id, move.swagger.id],
        slot4 : pkmn.breloom,
        slot4Moves : [move.machPunk.id, move.brickBreak.id, move.thunderPunch.id],
        slot5 : pkmn.sawk,
        slot5Moves : [move.machPunk.id, move.bulkUp.id, move.firePunch.id],
        slot6 : pkmn.machoke,
        slot6Moves : [move.dizzyPunch.id, move.brickBreak.id, move.machPunk.id],
    },
    reward : [pkmn.makuhita]
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
        slot3Moves : [move.dizzyPunch.id, move.powerupPunch.id, move.swagger.id],
        slot4 : pkmn.herdier,
        slot4Moves : [move.leer.id, move.strength.id, move.stomp.id],
        slot5 : pkmn.kirlia,
        slot5Moves : [move.psybeam.id, move.alluringVoice.id, move.fairyWind.id],
        slot6 : pkmn.kadabra,
        slot6Moves : [move.calmMind.id, move.psybeam.id, move.psychic.id],
    },
    reward : [pkmn.abra]
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
        slot1Moves : [move.sludge.id,move.poisonJab.id, move.toxic.id],
        slot2 : pkmn.fearow,
        slot2Moves : [move.featherDance.id, move.swagger.id, move.drillPeck.id],
        slot3 : pkmn.raticate,
        slot3Moves : [move.hyperVoice.id, move.stomp.id, move.swagger.id],
        slot4 : pkmn.hypno,
        slot4Moves : [move.extrasensory.id, move.futureSight.id, move.amnesia.id],
        slot5 : pkmn.golbat,
        slot5Moves : [move.toxic.id, move.poisonFang.id, move.acrobatics.id],
        slot6 : pkmn.haunter,
        slot6Moves : [move.hex.id, move.ominousWind.id, move.psychic.id],
    },
    reward : [pkmn.gastly]
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
        slot1Moves : [move.aquaJet.id,move.zenHeadbut.id, move.thunderWave.id],
        slot2 : pkmn.quagsire,
        slot2Moves : [move.waterfall.id, move.dig.id, move.mudShot.id],
        slot3 : pkmn.lanturn,
        slot3Moves : [move.thunderbolt.id, move.chargeBeam.id, move.waterfall.id],
        slot4 : pkmn.floatzel,
        slot4Moves : [move.aquaJet.id, move.futureSight.id, move.chillingWater.id],
        slot5 : pkmn.lapras,
        slot5Moves : [move.waterfall.id, move.surf.id, move.zenHeadbut.id],
        slot6 : pkmn.starmie,
        slot6Moves : [move.psychic.id, move.auroraBeam.id, move.surf.id],
    },
    reward : [item.mysticWater]
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
    reward : [item.magikarp]
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
    reward : [item.shucaBerry]
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
    reward : [pkmn.ducklett]
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
        slot5Moves : [move.firePunch.id, move.hex.id, move.confuseRay.id, move.thunderWave.id],
        slot6 : pkmn.dragapult,
        slot6Moves : [move.dragonClaw.id, move.hex.id, move.shadowBall.id, move.dragonDance.id],
    },
    reward : [item.spellTag]
}





for (const i in areas){
    areas[i].id = i

    if (areas[i].trainer) areas[i].defeated = false

    if (areas[i].type == "wild" && areas[i].level == wildAreaLevel2) {
        areas[i].unlockDescription = `🔒 Defeat Gym Leader Brock in VS to unlock`
        areas[i].unlockRequirement = function() { return areas.vsGymLeaderBrock.defeated }
    }

    if (areas[i].type == "wild" && areas[i].level == wildAreaLevel3) {
        areas[i].unlockDescription = `🔒 Defeat Gym Leader Misty in VS to unlock`
        areas[i].unlockRequirement = function() { return areas.vsGymLeaderMisty.defeated }
    }

    if (areas[i].type == "wild" && areas[i].level == wildAreaLevel4) {
        areas[i].unlockDescription = `🔒 Defeat Gym Leader Phoebe in VS to unlock`
        areas[i].unlockRequirement = function() { return areas.vsGymLeaderPhoebe.defeated }
    }

}