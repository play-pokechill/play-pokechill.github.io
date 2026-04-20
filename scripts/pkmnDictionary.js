const pkmn = {}

// National Pokédex

const evolutionLevel1 = 30
const evolutionLevel2 = 50
const evolutionLevel3 = 70

// 001 Bulbasaur → Ivysaur → Venusaur
pkmn.bulbasaur = {
    type: ["grass","poison"],
    bst: {
        hp: 45,
        atk: 49,
        def: 49,
        satk: 65,
        sdef: 65,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ivysaur, level: evolutionLevel1 } } },
    hiddenAbility: ability.thickFat,
    signature : move.frenzyPlant
}

pkmn.ivysaur = {
    type: ["grass","poison"],
    bst: {
        hp: 60,
        atk: 62,
        def: 63,
        satk: 80,
        sdef: 80,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.venusaur, level: evolutionLevel2 } } },
    hiddenAbility: ability.thickFat,
    signature : move.frenzyPlant
}

pkmn.venusaur = {
    type: ["grass","poison"],
    bst: {
        hp: 80,
        atk: 82,
        def: 83,
        satk: 100,
        sdef: 100,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaVenusaur, item: item.venusaurite } } },
    hiddenAbility: ability.thickFat,
    signature : move.frenzyPlant,
    variants: function() { return [pkmn.venusaurClone] },
}

pkmn.venusaurClone = {
    type: ["poison","grass"],
    bst: {
        hp: 80,
        atk: 82,
        def: 83,
        satk: 100,
        sdef: 100,
        spe: 80,
    },
    hiddenAbility: ability.imposter,
    signature : move.frenzyPlant
}

pkmn.megaVenusaur = {
    type: ["grass","poison"],
    bst: {
        hp: 80,
        atk: 100,
        def: 123,
        satk: 122,
        sdef: 120,
        spe: 80,
    },
    hiddenAbility: ability.thickFat,
    signature : move.frenzyPlant
}

pkmn.venusaurGmax = {
    type: ["grass","poison"],
    bst: {
        hp: 80*1.3,
        atk: 100*1.3,
        def: 123*1.3,
        satk: 122*1.0,
        sdef: 120*1.3,
        spe: 80*1.3,
    },
    hiddenAbility: ability.thickFat,
    signature : move.frenzyPlant
}

// 004 Charmander → Charmeleon → Charizard
pkmn.charmander = {
    type: ["fire"],
    bst: {
        hp: 39,
        atk: 52,
        def: 43,
        satk: 60,
        sdef: 50,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.charmeleon, level: evolutionLevel1 } } },
    hiddenAbility: ability.toughClaws,
    signature : move.flameBurst
}

pkmn.charmeleon = {
    type: ["fire"],
    bst: {
        hp: 58,
        atk: 64,
        def: 58,
        satk: 80,
        sdef: 65,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.charizard, level: evolutionLevel2 } } },
    hiddenAbility: ability.toughClaws,
    signature : move.flameBurst
}

pkmn.charizard = {
    type: ["fire","flying"],
    bst: {
        hp: 78,
        atk: 84,
        def: 78,
        satk: 109,
        sdef: 85,
        spe: 100,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.megaCharizardX, item: item.charizarditeX }, 
            2: { pkmn: pkmn.megaCharizardY, item: item.charizarditeY },
        } 
    },
    hiddenAbility: ability.toughClaws,
    signature : move.flameBurst,
    variants: function() { return [pkmn.charizardClone] },
}

pkmn.charizardClone = {
    type: ["flying","fire"],
    bst: {
        hp: 78,
        atk: 84,
        def: 78,
        satk: 109,
        sdef: 85,
        spe: 100,
    },
    hiddenAbility: ability.imposter,
    signature : move.flameBurst
}

pkmn.megaCharizardX = {
    type: ["fire","dragon"],
    bst: {
        hp: 78,
        atk: 130,
        def: 111,
        satk: 130,
        sdef: 85,
        spe: 100,
    },
    hiddenAbility: ability.toughClaws,
    signature : move.brutalClaw
}

pkmn.megaCharizardY = {
    type: ["fire","flying"],
    bst: {
        hp: 78,
        atk: 104,
        def: 78,
        satk: 159,
        sdef: 115,
        spe: 100,
    },
    hiddenAbility: ability.drought,
    signature : move.flameBurst
}

pkmn.charizardGmax = {
    type: ["fire","flying"],
    bst: {
        hp: 78*1.3,
        atk: 104*1.3,
        def: 78*1.3,
        satk: 159*1.0,
        sdef: 115*1.3,
        spe: 100*1.3,
    },
    hiddenAbility: ability.drought,
    signature : move.flameBurst
}

// 007 Squirtle → Wartortle → Blastoise
pkmn.squirtle = {
    type: ["water"],
    bst: {
        hp: 44,
        atk: 48,
        def: 65,
        satk: 50,
        sdef: 64,
        spe: 43,
    },
    evolve: function() { return { 1: { pkmn: pkmn.wartortle, level: evolutionLevel1 } } },
    hiddenAbility: ability.rainDish,
    signature : move.hydroCannon
}

pkmn.wartortle = {
    type: ["water"],
    bst: {
        hp: 59,
        atk: 63,
        def: 80,
        satk: 65,
        sdef: 80,
        spe: 58,
    },
    evolve: function() { return { 1: { pkmn: pkmn.blastoise, level: evolutionLevel2 } } },
    hiddenAbility: ability.rainDish,
    signature : move.hydroCannon
}

pkmn.blastoise = {
    type: ["water"],
    bst: {
        hp: 79,
        atk: 83,
        def: 100,
        satk: 85,
        sdef: 105,
        spe: 78,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaBlastoise, item: item.blastoisinite } } },
    hiddenAbility: ability.rainDish,
    signature : move.hydroCannon,
    variants: function() { return [pkmn.blastoiseClone] },
}

pkmn.blastoiseClone = {
    type: ["water"],
    bst: {
        hp: 79,
        atk: 83,
        def: 100,
        satk: 85,
        sdef: 105,
        spe: 78,
    },
    hiddenAbility: ability.imposter,
    signature : move.hydroCannon
}

pkmn.megaBlastoise = {
    type: ["water"],
    bst: {
        hp: 79,
        atk: 103,
        def: 120,
        satk: 135,
        sdef: 115,
        spe: 78,
    },
    signature : move.hydroCannon,
    hiddenAbility: ability.megaLauncher,
}

pkmn.blastoiseGmax = {
    type: ["water"],
    bst: {
        hp: 79*1.3,
        atk: 103*1.3,
        def: 120*1.0,
        satk: 135*1.3,
        sdef: 115*1.3,
        spe: 78*1.3,
    },
    signature : move.hydroCannon,
    hiddenAbility: ability.megaLauncher,
}

// 010 Caterpie → Metapod → Butterfree
pkmn.caterpie = {
    type: ["bug"],
    bst: {
        hp: 45,
        atk: 30,
        def: 35,
        satk: 20,
        sdef: 20,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.metapod, level: evolutionLevel1 } } },
    hiddenAbility: ability.tintedLens,
}

pkmn.metapod = {
    type: ["bug"],
    bst: {
        hp: 50,
        atk: 20,
        def: 55,
        satk: 25,
        sdef: 25,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.butterfree, level: evolutionLevel2 } } },
    hiddenAbility: ability.tintedLens,
}

pkmn.butterfree = {
    type: ["bug","flying"],
    bst: {
        hp: 60,
        atk: 45,
        def: 50,
        satk: 90,
        sdef: 80,
        spe: 70,
    },
    hiddenAbility: ability.tintedLens,
}

pkmn.butterfreeGmax = {
    type: ["bug","flying"],
    bst: {
        hp: 60*1.9,
        atk: 45*1.9,
        def: 50*1.9,
        satk: 90*1.9,
        sdef: 80*1.9,
        spe: 70*1.9,
    },
    hiddenAbility: ability.tintedLens,
}

// 013 Weedle → Kakuna → Beedrill
pkmn.weedle = {
    type: ["bug","poison"],
    bst: {
        hp: 40,
        atk: 35,
        def: 30,
        satk: 20,
        sdef: 20,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kakuna, level: evolutionLevel1 } } },
    hiddenAbility: ability.adaptability,
    eggMove : move.toxicThread
}

pkmn.kakuna = {
    type: ["bug","poison"],
    bst: {
        hp: 45,
        atk: 25,
        def: 50,
        satk: 25,
        sdef: 25,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.beedrill, level: evolutionLevel2 } } },
    hiddenAbility: ability.adaptability,
    eggMove : move.toxicThread
}

pkmn.beedrill = {
    type: ["bug","poison"],
    bst: {
        hp: 65,
        atk: 90,
        def: 40,
        satk: 45,
        sdef: 80,
        spe: 75,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaBeedrill, item: item.beedrillite } } },
    hiddenAbility: ability.adaptability,
    eggMove : move.toxicThread
}

pkmn.megaBeedrill = {
    type: ["bug","poison"],
    bst: {
        hp: 80,
        atk: 150,
        def: 40,
        satk: 15,
        sdef: 80,
        spe: 160,
    },
    hiddenAbility: ability.adaptability,
    eggMove : move.toxicThread
}

// 016 Pidgey → Pidgeotto → Pidgeot
pkmn.pidgey = {
    type: ["normal","flying"],
    bst: {
        hp: 40,
        atk: 45,
        def: 40,
        satk: 35,
        sdef: 35,
        spe: 56,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pidgeotto, level: evolutionLevel1 } } },
    hiddenAbility: ability.unburden,
    eggMove : move.meFirst
}

pkmn.pidgeotto = {
    type: ["normal","flying"],
    bst: {
        hp: 80,
        atk: 60,
        def: 55,
        satk: 50,
        sdef: 50,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pidgeot, level: evolutionLevel2 } } },
    hiddenAbility: ability.unburden,
    eggMove : move.meFirst
}

pkmn.pidgeot = {
    type: ["normal","flying"],
    bst: {
        hp: 83,
        atk: 80,
        def: 75,
        satk: 70,
        sdef: 70,
        spe: 101,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaPidgeot, item: item.pidgeotite } } },
    hiddenAbility: ability.unburden,
    eggMove : move.meFirst
}

pkmn.megaPidgeot = {
    type: ["normal","flying"],
    bst: {
        hp: 83,
        atk: 80,
        def: 80,
        satk: 135,
        sdef: 80,
        spe: 121,
    },
    hiddenAbility: ability.noGuard,
    eggMove : move.meFirst
}

// 019 Rattata → Raticate
pkmn.rattata = {
    type: ["normal"],
    bst: {
        hp: 30,
        atk: 56,
        def: 35,
        satk: 25,
        sdef: 35,
        spe: 72,
    },
    evolve: function() { return { 1: { pkmn: pkmn.raticate, level: evolutionLevel1 } } },
    hiddenAbility: ability.guts,
    variants: function() { return [pkmn.alolanRattata] },
}

pkmn.alolanRattata = {
    type: ["dark", "normal"],
    bst: {
        hp: 30,
        atk: 56,
        def: 35,
        satk: 25,
        sdef: 35,
        spe: 72,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanRaticate, level: evolutionLevel1 } } },
    hiddenAbility: ability.blackPelt,
}

pkmn.raticate = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 81,
        def: 60,
        satk: 50,
        sdef: 70,
        spe: 97,
    },
    hiddenAbility: ability.guts,
    variants: function() { return [pkmn.alolanRaticate] },
}

pkmn.alolanRaticate = {
    type: ["dark", "normal"],
    bst: {
        hp: 75,
        atk: 71,
        def: 70,
        satk: 40,
        sdef: 80,
        spe: 77,
    },
    hiddenAbility: ability.blackPelt,
}

// 021 Spearow → Fearow
pkmn.spearow = {
    type: ["normal","flying"],
    bst: {
        hp: 40,
        atk: 60,
        def: 30,
        satk: 31,
        sdef: 31,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.fearow, level: evolutionLevel1 } } },
    hiddenAbility: ability.bigPecks,
}

pkmn.fearow = {
    type: ["normal","flying"],
    bst: {
        hp: 65,
        atk: 90,
        def: 65,
        satk: 61,
        sdef: 61,
        spe: 100,
    },
    hiddenAbility: ability.bigPecks,
}

// 023 Ekans → Arbok
pkmn.ekans = {
    type: ["poison"],
    bst: {
        hp: 35,
        atk: 60,
        def: 44,
        satk: 40,
        sdef: 54,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.arbok, level: evolutionLevel1 } } },
    hiddenAbility: ability.intimidate,
}

pkmn.arbok = {
    type: ["poison"],
    bst: {
        hp: 60,
        atk: 95,
        def: 69,
        satk: 65,
        sdef: 79,
        spe: 80,
    },
    hiddenAbility: ability.intimidate,
}

// 025 Pichu → Pikachu → Raichu

pkmn.pichu = {
    type: ["electric"],
    bst: {
        hp: 20,
        atk: 40,
        def: 15,
        satk: 35,
        sdef: 35,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pikachu, level: evolutionLevel1 } } },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    variants: function() { return [pkmn.spikyPichu] },
}

pkmn.spikyPichu = {
    type: ["electric"],
    bst: {
        hp: 20,
        atk: 40,
        def: 15,
        satk: 35,
        sdef: 35,
        spe: 60,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle
}

pkmn.pikachu = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.raichu, item: item.thunderStone } } },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    variants: function() { return [pkmn.pikachuAsh, pkmn.pikachuWorld, pkmn.pikachuHoenn, pkmn.pikachuUnova, pkmn.pikachuKalos, pkmn.pikachuBelle, pkmn.pikachuLibre, pkmn.pikachuPhd, pkmn.pikachuPopstar, pkmn.pikachuRockstar] },
}

pkmn.pikachuGmax = {
    type: ["electric"],
    bst: {
        hp: 200,
        atk: 120,
        def: 90,
        satk: 120,
        sdef: 90,
        spe: 110,
    },
    signature : move.voltTackle,
    hiddenAbility: ability.electricSurge,
}

pkmn.pikachuAsh = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle
}

pkmn.pikachuWorld = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle
}

pkmn.pikachuHoenn = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle
}

pkmn.pikachuUnova = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle
}

pkmn.pikachuKalos = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle
}

pkmn.pikachuBelle = {
    type: ["electric","normal"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    signature : move.voltTackle
}

pkmn.pikachuLibre = {
    type: ["electric","fighting"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    signature : move.voltTackle,
}

pkmn.pikachuPhd = {
    type: ["electric","psychic"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    signature : move.voltTackle
}

pkmn.pikachuPopstar = {
    type: ["electric","fairy"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    signature : move.voltTackle
}

pkmn.pikachuRockstar = {
    type: ["electric","fire"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    signature : move.voltTackle
}

pkmn.raichu = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
        evolve: function() { 
        return { 
            1: { pkmn: pkmn.megaRaichuX, item: item.raichutiteX }, 
            2: { pkmn: pkmn.megaRaichuY, item: item.raichutiteY },
        } 
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    variants: function() { return [pkmn.alolanRaichu] },
}

pkmn.alolanRaichu = {
    type: ["electric", "psychic"],
    bst: {
        hp: 60,
        atk: 85,
        def: 50,
        satk: 95,
        sdef: 85,
        spe: 110,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
}

pkmn.megaRaichuX = {
    type: ["electric"],
    bst: {
        hp: 120,
        atk: 175,
        def: 95,
        satk: 90,
        sdef: 95,
        spe: 100,
    },
    hiddenAbility: ability.ambidextrous,
    signature : move.voltTackle,
}

pkmn.megaRaichuY = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 160,
        def: 55,
        satk: 160,
        sdef: 80,
        spe: 140,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
}

// 027 Sandshrew → Sandslash

pkmn.sandshrew = {
    type: ["ground"],
    bst: {
        hp: 50,
        atk: 75,
        def: 85,
        satk: 20,
        sdef: 30,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sandslash, level: evolutionLevel1 } } },
    hiddenAbility: ability.skillLink,
    eggMove : move.boneRush,
    variants: function() { return [pkmn.alolanSandshrew] },
}

pkmn.alolanSandshrew = {
    type: ["ice", "steel"],
    bst: {
        hp: 50,
        atk: 75,
        def: 90,
        satk: 10,
        sdef: 35,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanSandslash, level: evolutionLevel1 } } },
    hiddenAbility: ability.slushRush,
    signature : move.iceBall
}

pkmn.sandslash = {
    type: ["ground"],
    bst: {
        hp: 75,
        atk: 100,
        def: 110,
        satk: 45,
        sdef: 55,
        spe: 65,
    },
    hiddenAbility: ability.skillLink,
    eggMove : move.boneRush,
    variants: function() { return [pkmn.alolanSandslash] },
}

pkmn.alolanSandslash = {
    type: ["ice", "steel"],
    bst: {
        hp: 75,
        atk: 100,
        def: 120,
        satk: 25,
        sdef: 65,
        spe: 65,
    },
    hiddenAbility: ability.slushRush,
    signature : move.iceBall
}

// 029 Nidoran♀ → Nidorina → Nidoqueen
pkmn.nidoranF = {
    type: ["poison"],
    bst: {
        hp: 55,
        atk: 47,
        def: 52,
        satk: 40,
        sdef: 40,
        spe: 41,
    },
    evolve: function() { return { 1: { pkmn: pkmn.nidorina, level: evolutionLevel1 } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.poisonTail,
    variants: function() { return [pkmn.nidoranM] },
}

pkmn.nidorina = {
    type: ["poison"],
    bst: {
        hp: 70,
        atk: 62,
        def: 67,
        satk: 55,
        sdef: 55,
        spe: 56,
    },
    evolve: function() { return { 1: { pkmn: pkmn.nidoqueen, item: item.moonStone } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.poisonTail
}

pkmn.nidoqueen = {
    type: ["poison","ground"],
    bst: {
        hp: 90,
        atk: 105,
        def: 87,
        satk: 75,
        sdef: 85,
        spe: 76,
    },
    hiddenAbility: ability.sheerForce,
    eggMove : move.poisonTail
}

// 032 Nidoran♂ → Nidorino → Nidoking
pkmn.nidoranM = {
    type: ["poison"],
    bst: {
        hp: 46,
        atk: 57,
        def: 40,
        satk: 40,
        sdef: 40,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.nidorino, level: evolutionLevel1 } } },
    hiddenAbility: ability.sheerForce,
    variants: function() { return [pkmn.nidoranF] },
}

pkmn.nidorino = {
    type: ["poison"],
    bst: {
        hp: 61,
        atk: 72,
        def: 57,
        satk: 55,
        sdef: 55,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.nidoking, item: item.moonStone } } },
    hiddenAbility: ability.sheerForce,
}

pkmn.nidoking = {
    type: ["poison","ground"],
    bst: {
        hp: 81,
        atk: 102,
        def: 77,
        satk: 85,
        sdef: 75,
        spe: 85,
    },
    hiddenAbility: ability.sheerForce,
}

// 035 Cleffa → Clefairy → Clefable
pkmn.cleffa = {
    type: ["fairy"],
    bst: {
        hp: 50,
        atk: 25,
        def: 28,
        satk: 45,
        sdef: 55,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.clefairy, level: evolutionLevel1 } } },
    hiddenAbility: ability.magicGuard,
    eggMove : move.lunarDance
}

pkmn.clefairy = {
    type: ["fairy"],
    bst: {
        hp: 70,
        atk: 45,
        def: 48,
        satk: 60,
        sdef: 65,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.clefable, item: item.moonStone } } },
    hiddenAbility: ability.magicGuard,
    eggMove : move.lunarDance
}

pkmn.clefable = {
    type: ["fairy"],
    bst: {
        hp: 95,
        atk: 70,
        def: 73,
        satk: 95,
        sdef: 90,
        spe: 60,
    },
    hiddenAbility: ability.magicGuard,
    eggMove : move.lunarDance
}

pkmn.megaClefable = {
    type: ["fairy", "flying"],
    bst: {
        hp: 95,
        atk: 80,
        def: 93,
        satk: 135,
        sdef: 110,
        spe: 70,
    },
    hiddenAbility: ability.magicGuard,
    eggMove : move.lunarDance
}

// 037 Vulpix → Ninetales
pkmn.vulpix = {
    type: ["fire"],
    bst: {
        hp: 38,
        atk: 41,
        def: 40,
        satk: 50,
        sdef: 65,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ninetales, item: item.fireStone } } },
    hiddenAbility: ability.drought,
    variants: function() { return [pkmn.alolanVulpix] },
}

pkmn.alolanVulpix = {
    type: ["ice"],
    bst: {
        hp: 38,
        atk: 41,
        def: 40,
        satk: 50,
        sdef: 65,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanNinetales, level: evolutionLevel2 } } },
    hiddenAbility: ability.snowWarning,
}

pkmn.ninetales = {
    type: ["fire"],
    bst: {
        hp: 73,
        atk: 76,
        def: 75,
        satk: 81,
        sdef: 100,
        spe: 100,
    },
    hiddenAbility: ability.drought,
    variants: function() { return [pkmn.alolanNinetales] },
}

pkmn.alolanNinetales = {
    type: ["ice", "fairy"],
    bst: {
        hp: 73,
        atk: 67,
        def: 75,
        satk: 81,
        sdef: 100,
        spe: 109,
    },
    hiddenAbility: ability.snowWarning,
}

// 039 Igglybuff → Jigglypuff → Wigglytuff
pkmn.igglybuff = {
    type: ["normal","fairy"],
    bst: {
        hp: 90,
        atk: 30,
        def: 15,
        satk: 40,
        sdef: 20,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.jigglypuff, level: evolutionLevel1 } } },
    hiddenAbility: ability.pixilate,
    eggMove : move.eggBomb
}

pkmn.jigglypuff = {
    type: ["normal","fairy"],
    bst: {
        hp: 115,
        atk: 45,
        def: 20,
        satk: 45,
        sdef: 25,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.wigglytuff, item: item.moonStone } } },
    hiddenAbility: ability.pixilate,
    eggMove : move.eggBomb
}

pkmn.wigglytuff = {
    type: ["normal","fairy"],
    bst: {
        hp: 140,
        atk: 70,
        def: 45,
        satk: 85,
        sdef: 50,
        spe: 45,
    },
    hiddenAbility: ability.pixilate,
    eggMove : move.eggBomb
}

// 041 Zubat → Golbat → Crobat
pkmn.zubat = {
    type: ["poison","flying"],
    bst: {
        hp: 40,
        atk: 45,
        def: 35,
        satk: 30,
        sdef: 40,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.golbat, level: evolutionLevel1 } } },
    hiddenAbility: ability.dauntingLook,
}

pkmn.golbat = {
    type: ["poison","flying"],
    bst: {
        hp: 75,
        atk: 80,
        def: 70,
        satk: 65,
        sdef: 75,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.crobat, item: item.linkStone } } },
    hiddenAbility: ability.dauntingLook,
}

pkmn.crobat = {
    type: ["poison","flying"],
    bst: {
        hp: 85,
        atk: 90,
        def: 80,
        satk: 70,
        sdef: 80,
        spe: 130,
    },
    hiddenAbility: ability.dauntingLook,
}

// 043 Oddish → Gloom → Vileplume / Bellossom
pkmn.oddish = {
    type: ["grass","poison"],
    bst: {
        hp: 45,
        atk: 50,
        def: 55,
        satk: 75,
        sdef: 65,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gloom, level: evolutionLevel1 } } },
    hiddenAbility: ability.chlorophyll,
    signature : move.trailblaze
}

pkmn.gloom = {
    type: ["grass","poison"],
    bst: {
        hp: 60,
        atk: 65,
        def: 70,
        satk: 85,
        sdef: 75,
        spe: 40,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.vileplume, item: item.leafStone }, 
            2: { pkmn: pkmn.bellossom, item: item.sunStone } 
        } 
    },
    hiddenAbility: ability.chlorophyll,
    signature : move.trailblaze
}

pkmn.vileplume = {
    type: ["grass","poison"],
    bst: {
        hp: 75,
        atk: 80,
        def: 85,
        satk: 110,
        sdef: 90,
        spe: 50,
    },
    hiddenAbility: ability.chlorophyll,
    signature : move.trailblaze
}

pkmn.bellossom = {
    type: ["grass"],
    bst: {
        hp: 75,
        atk: 80,
        def: 95,
        satk: 90,
        sdef: 100,
        spe: 50,
    },
    hiddenAbility: ability.dancer,
    signature : move.trailblaze
}

// 046 Paras → Parasect
pkmn.paras = {
    type: ["bug","grass"],
    bst: {
        hp: 35,
        atk: 70,
        def: 55,
        satk: 45,
        sdef: 55,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.parasect, level: evolutionLevel2 } } },
    hiddenAbility: ability.colorSpore,
}

pkmn.parasect = {
    type: ["bug","grass"],
    bst: {
        hp: 60,
        atk: 95,
        def: 80,
        satk: 60,
        sdef: 80,
        spe: 30,
    },
    hiddenAbility: ability.colorSpore,
}

// 048 Venonat → Venomoth
pkmn.venonat = {
    type: ["bug","poison"],
    bst: {
        hp: 60,
        atk: 55,
        def: 50,
        satk: 40,
        sdef: 55,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.venomoth, level: evolutionLevel2 } } },
    hiddenAbility: ability.moltShed,
}

pkmn.venomoth = {
    type: ["bug","poison"],
    bst: {
        hp: 70,
        atk: 65,
        def: 60,
        satk: 90,
        sdef: 75,
        spe: 90,
    },
    hiddenAbility: ability.moltShed,
}

// 050 Diglett → Dugtrio
pkmn.diglett = {
    type: ["ground"],
    bst: {
        hp: 10,
        atk: 55,
        def: 25,
        satk: 35,
        sdef: 45,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dugtrio, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandForce,
    variants: function() { return [pkmn.alolanDiglett] },
}

pkmn.alolanDiglett = {
    type: ["ground", "steel"],
    bst: {
        hp: 10,
        atk: 55,
        def: 30,
        satk: 35,
        sdef: 45,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanDugtrio, level: evolutionLevel2 } } },
}

pkmn.dugtrio = {
    type: ["ground"],
    bst: {
        hp: 35,
        atk: 100,
        def: 50,
        satk: 50,
        sdef: 70,
        spe: 120,
    },
    hiddenAbility: ability.sandForce,
    variants: function() { return [pkmn.alolanDugtrio] },
}

pkmn.alolanDugtrio = {
    type: ["ground", "steel"],
    bst: {
        hp: 35,
        atk: 100,
        def: 60,
        satk: 50,
        sdef: 70,
        spe: 110,
    }
}

// 052 Meowth → Persian / Galarian Meowth → Perrserker
pkmn.meowth = {
    type: ["normal"],
    bst: {
        hp: 40,
        atk: 45,
        def: 35,
        satk: 40,
        sdef: 40,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.persian, level: evolutionLevel2 } } },
    hiddenAbility: ability.technician,
    signature : move.payDay,
    variants: function() { return [pkmn.alolanMeowth, pkmn.galarianMeowth] },
}

pkmn.meowthGmax = {
    type: ["normal"],
    bst: {
        hp: 90*2,
        atk: 45*3,
        def: 35*3,
        satk: 40*3,
        sdef: 40*3,
        spe: 40*3,
    },
    hiddenAbility: ability.technician,
    signature : move.payDay
}

pkmn.alolanMeowth = {
    type: ["dark"],
    bst: {
        hp: 40,
        atk: 35,
        def: 35,
        satk: 50,
        sdef: 40,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanPersian, level: evolutionLevel2 } } },
    hiddenAbility: ability.technician,
    signature : move.payDay
}

pkmn.galarianMeowth = {
    type: ["steel"],
    bst: {
        hp: 50,
        atk: 65,
        def: 55,
        satk: 40,
        sdef: 40,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.perrserker, level: evolutionLevel2 } } }
}

pkmn.persian = {
    type: ["normal"],
    bst: {
        hp: 65,
        atk: 70,
        def: 60,
        satk: 65,
        sdef: 65,
        spe: 115,
    },
    hiddenAbility: ability.technician,
    signature : move.payDay,
    variants: function() { return [pkmn.alolanPersian] },
}

pkmn.alolanPersian = {
    type: ["dark"],
    bst: {
        hp: 65,
        atk: 60,
        def: 60,
        satk: 75,
        sdef: 65,
        spe: 115,
    },
    hiddenAbility: ability.technician,
    signature : move.payDay
}

pkmn.perrserker = {
  type: ["steel"],
  bst: {
    hp: 70,
    atk: 110,
    def: 100,
    satk: 50,
    sdef: 60,
    spe: 50,
  },
}

// 054 Psyduck → Golduck
pkmn.psyduck = {
    type: ["water"],
    bst: {
        hp: 50,
        atk: 52,
        def: 48,
        satk: 65,
        sdef: 50,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.golduck, level: evolutionLevel2 } } },
    hiddenAbility: ability.rainDish,
    signature : move.soak
}

pkmn.golduck = {
    type: ["water"],
    bst: {
        hp: 80,
        atk: 82,
        def: 78,
        satk: 95,
        sdef: 80,
        spe: 85,
    },
    hiddenAbility: ability.rainDish,
    signature : move.soak
}

// 056 Mankey → Primeape
pkmn.mankey = {
    type: ["fighting"],
    bst: {
        hp: 40,
        atk: 80,
        def: 35,
        satk: 35,
        sdef: 45,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.primeape, level: evolutionLevel2 } } },
    hiddenAbility: ability.rivalry,
    signature : move.rageFist
}

pkmn.primeape = {
    type: ["fighting"],
    bst: {
        hp: 65,
        atk: 105,
        def: 60,
        satk: 60,
        sdef: 70,
        spe: 95,
    },
    hiddenAbility: ability.rivalry,
    signature : move.rageFist,
    evolve: function() { return { 1: { pkmn: pkmn.annihilape, item: item.oddRock } } }
}

pkmn.annihilape = {
  type: ["fighting", "ghost"],
  bst: {
    hp: 110,
    atk: 115,
    def: 80,
    satk: 50,
    sdef: 90,
    spe: 90,
  },
    hiddenAbility: ability.rivalry,
    signature : move.rageFist,
}

// 058 Growlithe → Arcanine
pkmn.growlithe = {
    type: ["fire"],
    bst: {
        hp: 55,
        atk: 70,
        def: 45,
        satk: 70,
        sdef: 50,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.arcanine, item: item.fireStone } } },
    hiddenAbility: ability.fieryPelt,
    eggMove : move.howl,
    variants: function() { return [pkmn.hisuianGrowlithe] },
}

pkmn.hisuianGrowlithe = {
    type: ["fire", "rock"],
    bst: {
        hp: 55,
        atk: 70,
        def: 55,
        satk: 70,
        sdef: 50,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.hisuianArcanine, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandyPelt,
    signature : move.heatCrash
}

pkmn.arcanine = {
    type: ["fire"],
    bst: {
        hp: 90,
        atk: 110,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 95,
    },
    hiddenAbility: ability.fieryPelt,
    eggMove : move.howl,
    variants: function() { return [pkmn.hisuianArcanine] },
}

pkmn.hisuianArcanine = {
    type: ["fire", "rock"],
    bst: {
        hp: 90,
        atk: 110,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 95,
    },
    hiddenAbility: ability.sandyPelt,
    signature : move.heatCrash
}

// 060 Poliwag → Poliwhirl → Poliwrath / Politoed
pkmn.poliwag = {
    type: ["water"],
    bst: {
        hp: 40,
        atk: 50,
        def: 40,
        satk: 40,
        sdef: 40,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.poliwhirl, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
}

pkmn.poliwhirl = {
    type: ["water"],
    bst: {
        hp: 75,
        atk: 75,
        def: 65,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.poliwrath, item: item.waterStone }, 
            2: { pkmn: pkmn.politoed, item: item.oddRock } 
        } 
    },
    hiddenAbility: ability.swiftSwim,
}

pkmn.poliwrath = {
    type: ["water","fighting"],
    bst: {
        hp: 90,
        atk: 95,
        def: 95,
        satk: 70,
        sdef: 90,
        spe: 70,
    },
    hiddenAbility: ability.swiftSwim,
}

pkmn.politoed = {
    type: ["water"],
    bst: {
        hp: 90,
        atk: 75,
        def: 75,
        satk: 90,
        sdef: 100,
        spe: 70,
    },
    hiddenAbility: ability.drizzle,
}

// 063 Abra → Kadabra → Alakazam
pkmn.abra = {
    type: ["psychic"],
    bst: {
        hp: 25,
        atk: 20,
        def: 15,
        satk: 105,
        sdef: 55,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kadabra, level: evolutionLevel1 } } },
    hiddenAbility: ability.magicGuard,
    signature : move.kinesis
}

pkmn.kadabra = {
    type: ["psychic"],
    bst: {
        hp: 40,
        atk: 35,
        def: 30,
        satk: 120,
        sdef: 100,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alakazam, item: item.linkStone } } },
    hiddenAbility: ability.magicGuard,
    signature : move.kinesis
}

pkmn.alakazam = {
    type: ["psychic"],
    bst: {
        hp: 55,
        atk: 50,
        def: 45,
        satk: 135,
        sdef: 95,
        spe: 120,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAlakazam, item: item.alakazite } } },
    hiddenAbility: ability.magicGuard,
    signature : move.kinesis
}

pkmn.megaAlakazam = {
    type: ["psychic"],
    bst: {
        hp: 55,
        atk: 50,
        def: 65,
        satk: 175,
        sdef: 105,
        spe: 150,
    },
    hiddenAbility: ability.magicGuard,
    signature : move.kinesis
}

// 066 Machop → Machoke → Machamp
pkmn.machop = {
    type: ["fighting"],
    bst: {
        hp: 70,
        atk: 80,
        def: 50,
        satk: 35,
        sdef: 35,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.machoke, level: evolutionLevel2 } } },
    hiddenAbility: ability.guts,
    signature : move.dynamicPunch
}

pkmn.machoke = {
    type: ["fighting"],
    bst: {
        hp: 80,
        atk: 100,
        def: 70,
        satk: 50,
        sdef: 60,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.machamp, item: item.linkStone } } },
    hiddenAbility: ability.guts,
    signature : move.dynamicPunch
}

pkmn.machamp = {
    type: ["fighting"],
    bst: {
        hp: 90,
        atk: 130,
        def: 80,
        satk: 65,
        sdef: 85,
        spe: 55,
    },
    hiddenAbility: ability.guts,
    signature : move.dynamicPunch
}

pkmn.machampGmax = {
    type: ["fighting"],
    bst: {
        hp: 90*1.5,
        atk: 130*1.5,
        def: 80*1.5,
        satk: 65*1.5,
        sdef: 85*1.5,
        spe: 55*1.5,
    },
    hiddenAbility: ability.guts,
    signature : move.dynamicPunch
}

// 069 Bellsprout → Weepinbell → Victreebel
pkmn.bellsprout = {
    type: ["grass","poison"],
    bst: {
        hp: 50,
        atk: 75,
        def: 35,
        satk: 70,
        sdef: 30,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.weepinbell, level: evolutionLevel1 } } },
    hiddenAbility: ability.chlorophyll,
    eggMove : move.appleAcid
}

pkmn.weepinbell = {
    type: ["grass","poison"],
    bst: {
        hp: 65,
        atk: 90,
        def: 50,
        satk: 85,
        sdef: 45,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.victreebel, item: item.leafStone } } },
    hiddenAbility: ability.chlorophyll,
    eggMove : move.appleAcid
}

pkmn.victreebel = {
    type: ["grass","poison"],
    bst: {
        hp: 80,
        atk: 105,
        def: 65,
        satk: 100,
        sdef: 70,
        spe: 70,
    },
    hiddenAbility: ability.chlorophyll,
    eggMove : move.appleAcid
}

pkmn.megaVictreebel = {
    type: ["grass","poison"],
    bst: {
        hp: 80,
        atk: 125,
        def: 85,
        satk: 135,
        sdef: 95,
        spe: 70,
    },
    hiddenAbility: ability.chlorophyll,
    eggMove : move.appleAcid
}

// 072 Tentacool → Tentacruel
pkmn.tentacool = {
    type: ["water","poison"],
    bst: {
        hp: 40,
        atk: 40,
        def: 35,
        satk: 50,
        sdef: 100,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.tentacruel, level: evolutionLevel2 } } },
    hiddenAbility: ability.merciless,
    eggMove : move.venoshock
}

pkmn.tentacruel = {
    type: ["water","poison"],
    bst: {
        hp: 80,
        atk: 70,
        def: 65,
        satk: 80,
        sdef: 120,
        spe: 100,
    },
    hiddenAbility: ability.merciless,
    eggMove : move.venoshock
}

// 074 Geodude → Graveler → Golem
pkmn.geodude = {
    type: ["rock","ground"],
    bst: {
        hp: 40,
        atk: 80,
        def: 100,
        satk: 30,
        sdef: 30,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.graveler, level: evolutionLevel2 } } },
    hiddenAbility: ability.stoned,
    eggMove : move.rockWrecker,
    variants: function() { return [pkmn.alolanGeodude] },
}

pkmn.alolanGeodude = {
    type: ["rock", "electric"],
    bst: {
        hp: 40,
        atk: 80,
        def: 100,
        satk: 30,
        sdef: 30,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanGraveler, level: evolutionLevel2 } } },
    hiddenAbility: ability.stoned,
    eggMove : move.electroBall
}

pkmn.graveler = {
    type: ["rock","ground"],
    bst: {
        hp: 55,
        atk: 95,
        def: 115,
        satk: 45,
        sdef: 45,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.golem, item: item.linkStone } } },
    hiddenAbility: ability.stoned,
    eggMove : move.rockWrecker,
    variants: function() { return [pkmn.alolanGraveler] },
}

pkmn.alolanGraveler = {
    type: ["rock", "electric"],
    bst: {
        hp: 55,
        atk: 95,
        def: 115,
        satk: 45,
        sdef: 45,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanGolem, level: evolutionLevel2 } } },
    hiddenAbility: ability.stoned,
    eggMove : move.auraWheel
}

pkmn.golem = {
    type: ["rock","ground"],
    bst: {
        hp: 80,
        atk: 120,
        def: 130,
        satk: 55,
        sdef: 65,
        spe: 45,
    },
    hiddenAbility: ability.stoned,
    eggMove : move.rockWrecker,
    variants: function() { return [pkmn.alolanGolem] },
}

pkmn.alolanGolem = {
    type: ["rock", "electric"],
    bst: {
        hp: 80,
        atk: 120,
        def: 130,
        satk: 55,
        sdef: 65,
        spe: 45,
    },
    hiddenAbility: ability.stoned,
    eggMove : move.auraWheel
}

// 077 Ponyta → Rapidash
pkmn.ponyta = {
    type: ["fire"],
    bst: {
        hp: 50,
        atk: 85,
        def: 55,
        satk: 65,
        sdef: 65,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.rapidash, level: evolutionLevel3 } } },
    hiddenAbility: ability.flameGuard,
    variants: function() { return [pkmn.galarianPonyta] },
}

pkmn.galarianPonyta = {
    type: ["psychic"],
    bst: {
        hp: 50,
        atk: 85,
        def: 55,
        satk: 65,
        sdef: 65,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.galarianRapidash, level: evolutionLevel3 } } },
    hiddenAbility: ability.pastelVeil,
}

pkmn.rapidash = {
    type: ["fire"],
    bst: {
        hp: 65,
        atk: 100,
        def: 70,
        satk: 80,
        sdef: 80,
        spe: 105,
    },
    hiddenAbility: ability.flameGuard,
    variants: function() { return [pkmn.galarianRapidash] },
}

pkmn.galarianRapidash = {
    type: ["psychic", "fairy"],
    bst: {
        hp: 65,
        atk: 100,
        def: 70,
        satk: 80,
        sdef: 80,
        spe: 105,
    },
    hiddenAbility: ability.pastelVeil,
}

// 079 Slowpoke → Slowbro / Slowking
pkmn.slowpoke = {
    type: ["water","psychic"],
    bst: {
        hp: 90,
        atk: 65,
        def: 65,
        satk: 40,
        sdef: 40,
        spe: 15,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.slowbro, level: evolutionLevel2 }, 
            2: { pkmn: pkmn.slowking, item: item.oddRock } 
        } 
    },
    hiddenAbility: ability.unaware,
    signature : move.chillyReception,
    variants: function() { return [pkmn.galarianSlowpoke] },
}

pkmn.galarianSlowpoke = {
    type: ["psychic"],
    bst: {
        hp: 90,
        atk: 65,
        def: 65,
        satk: 40,
        sdef: 40,
        spe: 15,
    },
    evolve: function() { 
        return {
            1: { pkmn: pkmn.galarianSlowbro, level: evolutionLevel2 }, 
            2: { pkmn: pkmn.galarianSlowking, item: item.oddRock }
        } 
    }
}

pkmn.slowbro = {
    type: ["water","psychic"],
    bst: {
        hp: 95,
        atk: 75,
        def: 110,
        satk: 100,
        sdef: 80,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSlowbro, item: item.slowbronite } } },
    hiddenAbility: ability.unaware,
    signature : move.chillyReception,
    variants: function() { return [pkmn.galarianSlowbro] },
}

pkmn.megaSlowbro = {
    type: ["water","psychic"],
    bst: {
        hp: 95,
        atk: 75,
        def: 180,
        satk: 130,
        sdef: 80,
        spe: 30,
    },
    hiddenAbility: ability.unaware,
    signature : move.chillyReception
}

pkmn.galarianSlowbro = {
    type: ["poison","psychic"],
    bst: {
        hp: 95,
        atk: 100,
        def: 95,
        satk: 100,
        sdef: 70,
        spe: 30,
    }
}

pkmn.slowking = {
    type: ["water","psychic"],
    bst: {
        hp: 95,
        atk: 75,
        def: 80,
        satk: 100,
        sdef: 110,
        spe: 30,
    },
    hiddenAbility: ability.strategist,
    variants: function() { return [pkmn.galarianSlowking] },
}

pkmn.galarianSlowking = {
    type: ["poison","psychic"],
    bst: {
        hp: 95,
        atk: 65,
        def: 80,
        satk: 110,
        sdef: 110,
        spe: 30,
    }
}

// 081 Magnemite → Magneton → Magnezone
pkmn.magnemite = {
    type: ["electric","steel"],
    bst: {
        hp: 25,
        atk: 35,
        def: 70,
        satk: 95,
        sdef: 55,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.magneton, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
}

pkmn.magneton = {
    type: ["electric","steel"],
    bst: {
        hp: 50,
        atk: 60,
        def: 95,
        satk: 120,
        sdef: 70,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.magnezone, item: item.thunderStone } } },
    hiddenAbility: ability.levitate,
}

pkmn.magnezone = {
    type: ["electric","steel"],
    bst: {
        hp: 70,
        atk: 70,
        def: 115,
        satk: 130,
        sdef: 90,
        spe: 60,
    },
    hiddenAbility: ability.levitate,
}

// 083 Farfetch'd / Galarian Farfetch'd → Sirfetch'd
pkmn.farfetchd = {
    type: ["normal","flying"],
    bst: {
        hp: 52,
        atk: 90,
        def: 55,
        satk: 58,
        sdef: 62,
        spe: 60,
    },
    variants: function() { return [pkmn.galarianFarfetchd] },
}

pkmn.galarianFarfetchd = {
    type: ["fighting"],
    bst: {
        hp: 52,
        atk: 95,
        def: 55,
        satk: 58,
        sdef: 62,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sirfetchd, level: evolutionLevel2 } } },
    hiddenAbility: ability.reckless,
    signature : move.meteorAssault
}

pkmn.sirfetchd = {
  type: ["fighting"],
  bst: {
    hp: 62,
    atk: 135,
    def: 95,
    satk: 68,
    sdef: 82,
    spe: 65,
  },
    hiddenAbility: ability.reckless,
    signature : move.meteorAssault
}

// 084 Doduo → Dodrio
pkmn.doduo = {
    type: ["normal","flying"],
    bst: {
        hp: 35,
        atk: 85,
        def: 45,
        satk: 35,
        sdef: 35,
        spe: 75,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dodrio, level: evolutionLevel2 } } },
    hiddenAbility: ability.parentalBond,
    signature : move.triAttack
}

pkmn.dodrio = {
    type: ["normal","flying"],
    bst: {
        hp: 60,
        atk: 110,
        def: 70,
        satk: 60,
        sdef: 60,
        spe: 110,
    },
    hiddenAbility: ability.parentalBond,
    signature : move.triAttack
}

// 086 Seel → Dewgong
pkmn.seel = {
    type: ["water"],
    bst: {
        hp: 65,
        atk: 45,
        def: 55,
        satk: 45,
        sdef: 70,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dewgong, level: evolutionLevel2 } } },
    hiddenAbility: ability.moistPelt,
}

pkmn.dewgong = {
    type: ["water","ice"],
    bst: {
        hp: 90,
        atk: 70,
        def: 80,
        satk: 70,
        sdef: 95,
        spe: 70,
    },
    hiddenAbility: ability.moistPelt,
}

// 088 Grimer → Muk
pkmn.grimer = {
    type: ["poison"],
    bst: {
        hp: 80,
        atk: 80,
        def: 50,
        satk: 40,
        sdef: 50,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.muk, level: evolutionLevel2 } } },
    hiddenAbility: ability.toxicBoost,
    signature : move.venoshock,
    variants: function() { return [pkmn.alolanGrimer] },
}

pkmn.alolanGrimer = {
    type: ["poison", "dark"],
    bst: {
        hp: 80,
        atk: 80,
        def: 50,
        satk: 40,
        sdef: 50,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanMuk, level: evolutionLevel2 } } },
    hiddenAbility: ability.powerOfAlchemy,
}

pkmn.muk = {
    type: ["poison"],
    bst: {
        hp: 105,
        atk: 105,
        def: 75,
        satk: 65,
        sdef: 100,
        spe: 50,
    },
    hiddenAbility: ability.toxicBoost,
    signature : move.venoshock,
    variants: function() { return [pkmn.alolanMuk] },
}

pkmn.alolanMuk = {
    type: ["poison", "dark"],
    bst: {
        hp: 105,
        atk: 105,
        def: 75,
        satk: 65,
        sdef: 100,
        spe: 50,
    },
    hiddenAbility: ability.powerOfAlchemy,
}

// 090 Shellder → Cloyster
pkmn.shellder = {
    type: ["water"],
    bst: {
        hp: 30,
        atk: 65,
        def: 100,
        satk: 45,
        sdef: 25,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.cloyster, item: item.waterStone } } },
    hiddenAbility: ability.skillLink,
    signature : move.clamp
}

pkmn.cloyster = {
    type: ["water","ice"],
    bst: {
        hp: 50,
        atk: 95,
        def: 180,
        satk: 85,
        sdef: 45,
        spe: 70,
    },
    hiddenAbility: ability.skillLink,
    signature : move.clamp
}

// 092 Gastly → Haunter → Gengar
pkmn.gastly = {
    type: ["ghost","poison"],
    bst: {
        hp: 30,
        atk: 35,
        def: 30,
        satk: 100,
        sdef: 35,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.haunter, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
}

pkmn.haunter = {
    type: ["ghost","poison"],
    bst: {
        hp: 45,
        atk: 50,
        def: 45,
        satk: 115,
        sdef: 55,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gengar, item: item.linkStone } } },
    hiddenAbility: ability.levitate,
}

pkmn.gengar = {
    type: ["ghost","poison"],
    bst: {
        hp: 60,
        atk: 65,
        def: 60,
        satk: 130,
        sdef: 75,
        spe: 110,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGengar, item: item.gengarite } } },
    hiddenAbility: ability.levitate,
}

pkmn.megaGengar = {
    type: ["ghost","poison"],
    bst: {
        hp: 90,
        atk: 65,
        def: 80,
        satk: 180,
        sdef: 125,
        spe: 130,
    },
    hiddenAbility: ability.somberField,
}

pkmn.gengarGmax = {
    type: ["ghost","poison"],
    bst: {
        hp: 110*1.1,
        atk: 65*1.5,
        def: 80*1.5,
        satk: 190*1.1,
        sdef: 95*1.5,
        spe: 90*1.1,
    },
    hiddenAbility: ability.somberField,
}

// 095 Onix
pkmn.onix = {
    type: ["rock","ground"],
    bst: {
        hp: 35,
        atk: 45,
        def: 160,
        satk: 30,
        sdef: 45,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.steelix, item: item.metalCoat } } },
    hiddenAbility: ability.sheerForce,
}

pkmn.steelix = {
    type: ["steel","ground"],
    bst: {
        hp: 75,
        atk: 85,
        def: 200,
        satk: 55,
        sdef: 65,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSteelix, item: item.steelixite } } },
    hiddenAbility: ability.sheerForce,
}

pkmn.megaSteelix = {
    type: ["steel","ground"],
    bst: {
        hp: 75,
        atk: 125,
        def: 230,
        satk: 55,
        sdef: 95,
        spe: 30,
    },
    hiddenAbility: ability.sheerForce,
}

// 096 Drowzee → Hypno
pkmn.drowzee = {
    type: ["psychic"],
    bst: {
        hp: 60,
        atk: 48,
        def: 45,
        satk: 43,
        sdef: 90,
        spe: 42,
    },
    evolve: function() { return { 1: { pkmn: pkmn.hypno, level: evolutionLevel2 } } },
    hiddenAbility: ability.sinisterGuard,
}

pkmn.hypno = {
    type: ["psychic"],
    bst: {
        hp: 85,
        atk: 73,
        def: 70,
        satk: 73,
        sdef: 115,
        spe: 67,
    },
    hiddenAbility: ability.sinisterGuard,
}

// 098 Krabby → Kingler
pkmn.krabby = {
    type: ["water"],
    bst: {
        hp: 30,
        atk: 105,
        def: 90,
        satk: 25,
        sdef: 25,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kingler, level: evolutionLevel2 } } },
    hiddenAbility: ability.toughClaws,
    signature : move.crabhammer
}

pkmn.kingler = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 130,
        def: 115,
        satk: 50,
        sdef: 50,
        spe: 75,
    },
    hiddenAbility: ability.toughClaws,
    signature : move.crabhammer
}

pkmn.kinglerGmax = {
    type: ["water"],
    bst: {
        hp: 55*1.5,
        atk: 130*1.5,
        def: 115*1.5,
        satk: 50*1.5,
        sdef: 50*1.5,
        spe: 75*1.5,
    },
    hiddenAbility: ability.toughClaws,
    signature : move.crabhammer
}

// 100 Voltorb → Electrode
pkmn.voltorb = {
    type: ["electric"],
    bst: {
        hp: 40,
        atk: 30,
        def: 50,
        satk: 55,
        sdef: 55,
        spe: 100,
    },
    evolve: function() { return { 1: { pkmn: pkmn.electrode, level: evolutionLevel2 } } },
    hiddenAbility: ability.hyperconductor,
    signature : move.electroBall,
    variants: function() { return [pkmn.hisuianVoltorb] },
}

pkmn.hisuianVoltorb = {
    type: ["electric", "grass"],
    bst: {
        hp: 40,
        atk: 30,
        def: 50,
        satk: 55,
        sdef: 55,
        spe: 100,
    },
    evolve: function() { return { 1: { pkmn: pkmn.hisuianElectrode, level: evolutionLevel2 } } },
    hiddenAbility: ability.grassySurge,
    signature : move.chloroblast
}

pkmn.electrode = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 50,
        def: 70,
        satk: 80,
        sdef: 80,
        spe: 150,
    },
    hiddenAbility: ability.hyperconductor,
    signature : move.electroBall,
    variants: function() { return [pkmn.hisuianElectrode] },
}

pkmn.hisuianElectrode = {
    type: ["electric", "grass"],
    bst: {
        hp: 60,
        atk: 50,
        def: 70,
        satk: 80,
        sdef: 80,
        spe: 150,
    },
    hiddenAbility: ability.grassySurge,
    signature : move.chloroblast
}

// 102 Exeggcute → Exeggutor
pkmn.exeggcute = {
    type: ["grass","psychic"],
    bst: {
        hp: 60,
        atk: 40,
        def: 80,
        satk: 60,
        sdef: 45,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.exeggutor, item: item.leafStone } } },
    hiddenAbility: ability.parentalBond,
    signature : move.barrage
}

pkmn.exeggutor = {
    type: ["grass","psychic"],
    bst: {
        hp: 95,
        atk: 95,
        def: 85,
        satk: 125,
        sdef: 75,
        spe: 55,
    },
    hiddenAbility: ability.parentalBond,
    signature : move.barrage,
    variants: function() { return [pkmn.alolanExeggutor] },
}

pkmn.alolanExeggutor = {
    type: ["grass", "dragon"],
    bst: {
        hp: 95,
        atk: 105,
        def: 85,
        satk: 125,
        sdef: 75,
        spe: 45,
    },
    hiddenAbility: ability.skillLink,
    eggMove : move.barrage
}

// 104 Cubone → Marowak
pkmn.cubone = {
    type: ["ground"],
    bst: {
        hp: 50,
        atk: 50,
        def: 95,
        satk: 40,
        sdef: 50,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.marowak, level: evolutionLevel2 } } },
    hiddenAbility: ability.parentalBond,
    signature : move.boneRush
}

pkmn.marowak = {
    type: ["ground"],
    bst: {
        hp: 60,
        atk: 80,
        def: 110,
        satk: 50,
        sdef: 80,
        spe: 45,
    },
    hiddenAbility: ability.parentalBond,
    signature : move.boneRush,
    variants: function() { return [pkmn.alolanMarowak] },
}

pkmn.alolanMarowak = {
    type: ["fire", "ghost"],
    bst: {
        hp: 60,
        atk: 80,
        def: 110,
        satk: 50,
        sdef: 80,
        spe: 45,
    },
    hiddenAbility: ability.dancer,
}

// 236-106-107-237 Tyrogue → Hitmonlee / Hitmonchan / Hitmontop
pkmn.tyrogue = {
    type: ["fighting"],
    bst: {
        hp: 35,
        atk: 35,
        def: 35,
        satk: 35,
        sdef: 35,
        spe: 35,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.hitmonchan, level: evolutionLevel2 },
            2: { pkmn: pkmn.hitmonlee, item: item.blackBelt },
            3: { pkmn: pkmn.hitmontop, item: item.oddRock } 
        } 
    },
    hiddenAbility: ability.unburden,
}

pkmn.hitmonlee = {
    type: ["fighting"],
    bst: {
        hp: 50,
        atk: 120,
        def: 53,
        satk: 35,
        sdef: 110,
        spe: 87,
    },
    hiddenAbility: ability.technician,
}

pkmn.hitmonchan = {
    type: ["fighting"],
    bst: {
        hp: 50,
        atk: 105,
        def: 79,
        satk: 35,
        sdef: 110,
        spe: 76,
    },
    hiddenAbility: ability.ironFist,
}

pkmn.hitmontop = {
    type: ["fighting"],
    bst: {
        hp: 50,
        atk: 95,
        def: 95,
        satk: 35,
        sdef: 110,
        spe: 70,
    },
    hiddenAbility: ability.contrary,
}

// 108 Lickitung → Lickylicky
pkmn.lickitung = {
    type: ["normal"],
    bst: {
        hp: 90,
        atk: 55,
        def: 75,
        satk: 60,
        sdef: 75,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lickilicky, item: item.ovalStone } } },
    hiddenAbility: ability.thickFat,
}

pkmn.lickilicky = {
    type: ["normal"],
    bst: {
        hp: 110,
        atk: 85,
        def: 95,
        satk: 80,
        sdef: 95,
        spe: 50,
    },
    hiddenAbility: ability.thickFat,
}

// 109 Koffing → Weezing
pkmn.koffing = {
    type: ["poison"],
    bst: {
        hp: 40,
        atk: 65,
        def: 95,
        satk: 60,
        sdef: 45,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.weezing, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
}

pkmn.weezing = {
    type: ["poison"],
    bst: {
        hp: 65,
        atk: 90,
        def: 120,
        satk: 85,
        sdef: 70,
        spe: 60,
    },
    hiddenAbility: ability.levitate,
    variants: function() { return [pkmn.galarianWeezing] },
}

pkmn.galarianWeezing = {
    type: ["poison", "fairy"],
    bst: {
        hp: 65,
        atk: 90,
        def: 120,
        satk: 85,
        sdef: 70,
        spe: 60,
    },
    hiddenAbility: ability.aromaVeil,
}

// 111 Rhyhorn → Rhydon → Rhyperior
pkmn.rhyhorn = {
    type: ["ground","rock"],
    bst: {
        hp: 80,
        atk: 85,
        def: 95,
        satk: 30,
        sdef: 30,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.rhydon, level: evolutionLevel3 } } },
    hiddenAbility: ability.sandRush,
    signature : move.rockWrecker
}

pkmn.rhydon = {
    type: ["ground","rock"],
    bst: {
        hp: 105,
        atk: 130,
        def: 120,
        satk: 45,
        sdef: 45,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.rhyperior, item: item.linkStone } } },
    hiddenAbility: ability.sandRush,
    signature : move.rockWrecker
}

pkmn.rhyperior = {
    type: ["ground","rock"],
    bst: {
        hp: 115,
        atk: 140,
        def: 130,
        satk: 55,
        sdef: 55,
        spe: 40,
    },
    hiddenAbility: ability.sandRush,
    signature : move.rockWrecker
}

// 113 Happiny → Chansey → Blissey
pkmn.happiny = {
    type: ["normal"],
    bst: {
        hp: 100,
        atk: 5,
        def: 5,
        satk: 15,
        sdef: 65,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.chansey, item: item.ovalStone } } },
    hiddenAbility: ability.sereneGrace,
    signature : move.eggBomb
}

pkmn.chansey = {
    type: ["normal"],
    bst: {
        hp: 250,
        atk: 5,
        def: 5,
        satk: 35,
        sdef: 105,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.blissey, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    signature : move.eggBomb
}

pkmn.blissey = {
    type: ["normal"],
    bst: {
        hp: 255,
        atk: 10,
        def: 10,
        satk: 75,
        sdef: 135,
        spe: 55,
    },
    hiddenAbility: ability.sereneGrace,
    signature : move.eggBomb
}

// 114 Tangela → Tangrowth
pkmn.tangela = {
    type: ["grass"],
    bst: {
        hp: 65,
        atk: 55,
        def: 115,
        satk: 100,
        sdef: 40,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.tangrowth, level: evolutionLevel2 } } },
    hiddenAbility: ability.growthAbsorb,
}

pkmn.tangelaEvent = {
    rename: `tangela`,
    hidden: true,
    type: ["ghost"],
    bst: {
        hp: 65,
        atk: 55,
        def: 115,
        satk: 100,
        sdef: 40,
        spe: 60,
    },
    hiddenAbility: ability.curseAbsorb,
}

pkmn.tangrowth = {
    type: ["grass"],
    bst: {
        hp: 100,
        atk: 100,
        def: 125,
        satk: 110,
        sdef: 50,
        spe: 50,
    },
    hiddenAbility: ability.growthAbsorb,
}

// 115 Kangaskhan
pkmn.kangaskhan = {
    type: ["normal"],
    bst: {
        hp: 105,
        atk: 95,
        def: 80,
        satk: 40,
        sdef: 80,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaKangaskhan, item: item.kangaskhanite } } },
    hiddenAbility: ability.parentalBond,
    eggMove : move.headCharge,
}

pkmn.megaKangaskhan = {
    type: ["normal"],
    bst: {
        hp: 120,
        atk: 125,
        def: 100,
        satk: 60,
        sdef: 100,
        spe: 100,
    },
    hiddenAbility: ability.parentalBond,
    eggMove : move.headCharge,
}

// 116 Horsea → Seadra → Kingdra
pkmn.horsea = {
    type: ["water"],
    bst: {
        hp: 30,
        atk: 40,
        def: 70,
        satk: 70,
        sdef: 25,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.seadra, level: evolutionLevel2 } } },
    eggMove : move.snipeShot,
    hiddenAbility: ability.reckless,
}

pkmn.seadra = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 65,
        def: 95,
        satk: 95,
        sdef: 45,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kingdra, level: evolutionLevel3 } } },
    eggMove : move.snipeShot,
    hiddenAbility: ability.reckless,
}

pkmn.kingdra = {
    type: ["water","dragon"],
    bst: {
        hp: 75,
        atk: 95,
        def: 95,
        satk: 95,
        sdef: 95,
        spe: 85,
    },
    eggMove : move.snipeShot,
    hiddenAbility: ability.reckless,
}

// 118 Goldeen → Seaking
pkmn.goldeen = {
    type: ["water"],
    bst: {
        hp: 45,
        atk: 67,
        def: 60,
        satk: 35,
        sdef: 50,
        spe: 63,
    },
    evolve: function() { return { 1: { pkmn: pkmn.seaking, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
}

pkmn.seaking = {
    type: ["water"],
    bst: {
        hp: 80,
        atk: 92,
        def: 65,
        satk: 65,
        sdef: 80,
        spe: 68,
    },
    hiddenAbility: ability.swiftSwim,
}

// 120 Staryu → Starmie
pkmn.staryu = {
    type: ["water"],
    bst: {
        hp: 30,
        atk: 45,
        def: 55,
        satk: 70,
        sdef: 55,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.starmie, item: item.waterStone } } },
    hiddenAbility: ability.synchronize,
    signature : move.camouflage
}

pkmn.starmie = {
    type: ["water","psychic"],
    bst: {
        hp: 60,
        atk: 75,
        def: 85,
        satk: 100,
        sdef: 85,
        spe: 115,
    },
    hiddenAbility: ability.synchronize,
    signature : move.camouflage
}

pkmn.megaStarmie = {
    type: ["water","psychic"],
    bst: {
        hp: 60,
        atk: 140,
        def: 105,
        satk: 130,
        sdef: 105,
        spe: 120,
    },
    signature : move.camouflage
}

// 122 Mime Jr. → Mr. Mime / Galarian Mr. Mime → Mr. Rime
pkmn.mimejr = {
    rename: `mimeJr`,
    type: ["psychic","fairy"],
    bst: {
        hp: 20,
        atk: 25,
        def: 45,
        satk: 70,
        sdef: 90,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mrmime, level: evolutionLevel1 } } },
    hiddenAbility: ability.technician,
    signature : move.mimic
}

pkmn.mrmime = {
    rename: `mrMime`,
    type: ["psychic","fairy"],
    bst: {
        hp: 40,
        atk: 45,
        def: 65,
        satk: 100,
        sdef: 120,
        spe: 90,
    },
    hiddenAbility: ability.technician,
    signature : move.mimic,
    variants: function() { return [pkmn.galarianMrmime] },
}

pkmn.galarianMrmime = {
    rename: `galarian mrMime`,
    type: ["ice","psychic"],
    bst: {
        hp: 50,
        atk: 65,
        def: 65,
        satk: 90,
        sdef: 90,
        spe: 100,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mrRime, item: item.iceStone } } },
}

pkmn.mrRime = {
  type: ["ice","psychic"],
  bst: {
    hp: 80,
    atk: 85,
    def: 75,
    satk: 110,
    sdef: 100,
    spe: 70,
  },
    signature : move.mimic
}

// 123 Scyther → Scizor / Kleavor
pkmn.scyther = {
    type: ["bug","flying"],
    bst: {
        hp: 70,
        atk: 110,
        def: 80,
        satk: 55,
        sdef: 80,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.scizor, item: item.metalCoat } } },
    hiddenAbility: ability.technician,
}

pkmn.scizor = {
    type: ["bug","steel"],
    bst: {
        hp: 70,
        atk: 130,
        def: 100,
        satk: 55,
        sdef: 80,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaScizor, item: item.scizorite } } },
    hiddenAbility: ability.technician,
}

pkmn.megaScizor = {
    type: ["bug","steel"],
    bst: {
        hp: 70,
        atk: 150,
        def: 140,
        satk: 65,
        sdef: 100,
        spe: 75,
    },
    hiddenAbility: ability.technician,
}

pkmn.kleavor = {
    type: ["bug", "rock"],
    bst: {
        hp: 70,
        atk: 135,
        def: 95,
        satk: 45,
        sdef: 70,
        spe: 85,
    },
}

// 124 Smoochum → Jynx
pkmn.smoochum = {
    type: ["ice","psychic"],
    bst: {
        hp: 45,
        atk: 30,
        def: 15,
        satk: 85,
        sdef: 65,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.jynx, level: evolutionLevel2 } } },
    hiddenAbility: ability.strategist,
    signature : move.lovelyKiss
}

pkmn.jynx = {
    type: ["ice","psychic"],
    bst: {
        hp: 65,
        atk: 50,
        def: 35,
        satk: 115,
        sdef: 95,
        spe: 95,
    },
    hiddenAbility: ability.strategist,
    signature : move.lovelyKiss
}

// 125 Elekid → Electabuzz → Electivire
pkmn.elekid = {
    type: ["electric"],
    bst: {
        hp: 45,
        atk: 63,
        def: 37,
        satk: 65,
        sdef: 55,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.electabuzz, level: evolutionLevel2 } } },
    hiddenAbility: ability.voltAbsorb,
}

pkmn.electabuzz = {
    type: ["electric"],
    bst: {
        hp: 65,
        atk: 83,
        def: 57,
        satk: 95,
        sdef: 85,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.electivire, item: item.linkStone } } },
    hiddenAbility: ability.voltAbsorb,
}

pkmn.electivire = {
    type: ["electric"],
    bst: {
        hp: 75,
        atk: 123,
        def: 67,
        satk: 95,
        sdef: 85,
        spe: 95,
    },
    hiddenAbility: ability.voltAbsorb,
}

// 126 Magby → Magmar → Magmortar
pkmn.magby = {
    type: ["fire"],
    bst: {
        hp: 45,
        atk: 75,
        def: 37,
        satk: 70,
        sdef: 55,
        spe: 83,
    },
    evolve: function() { return { 1: { pkmn: pkmn.magmar, level: evolutionLevel2 } } },
    hiddenAbility: ability.flareBoost,
    eggMove : move.armorCannon
}

pkmn.magmar = {
    type: ["fire"],
    bst: {
        hp: 65,
        atk: 75,
        def: 55,
        satk: 95,
        sdef: 55,
        spe: 93,
    },
    evolve: function() { return { 1: { pkmn: pkmn.magmortar, item: item.linkStone } } },
    hiddenAbility: ability.flareBoost,
    eggMove : move.armorCannon
}

pkmn.magmortar = {
    type: ["fire"],
    bst: {
        hp: 75,
        atk: 95,
        def: 67,
        satk: 125,
        sdef: 95,
        spe: 83,
    },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.armorCannon
}

// 127 Pinsir
pkmn.pinsir = {
    type: ["bug"],
    bst: {
        hp: 65,
        atk: 125,
        def: 100,
        satk: 55,
        sdef: 70,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaPinsir, item: item.pinsirite } } },
    hiddenAbility: ability.aerilate,
    eggMove : move.cometPunch
}

pkmn.megaPinsir = {
    type: ["bug","flying"],
    bst: {
        hp: 99,
        atk: 155,
        def: 120,
        satk: 80,
        sdef: 90,
        spe: 105,
    },
    hiddenAbility: ability.aerilate,
    eggMove : move.camouflage
}

// 128 Tauros
pkmn.tauros = {
    type: ["normal"],
    bst: {
        hp: 75,
        atk: 100,
        def: 95,
        satk: 40,
        sdef: 70,
        spe: 110,
    },
    hiddenAbility: ability.sheerForce,
    variants: function() { return [pkmn.taurosCombat, pkmn.taurosBlaze, pkmn.taurosAqua] },
}

pkmn.taurosCombat = {
    type: ["fighting"],
    bst: {
        hp: 75,
        atk: 110,
        def: 105,
        satk: 30,
        sdef: 70,
        spe: 100,
    },
    hiddenAbility: ability.angerPoint,
}

pkmn.taurosBlaze = {
    type: ["fighting", "fire"],
    bst: {
        hp: 75,
        atk: 110,
        def: 105,
        satk: 30,
        sdef: 70,
        spe: 100,
    },
    hiddenAbility: ability.angerPoint,
}

pkmn.taurosAqua = {
    type: ["fighting", "water"],
    bst: {
        hp: 75,
        atk: 110,
        def: 105,
        satk: 30,
        sdef: 70,
        spe: 100,
    },
    hiddenAbility: ability.angerPoint,
}

// 129 Magikarp → Gyarados
pkmn.magikarp = {
    type: ["water"],
    bst: {
        hp: 20,
        atk: 10,
        def: 55,
        satk: 15,
        sdef: 20,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gyarados, level: evolutionLevel1 } } },
    hiddenAbility: ability.waterGuard,
    signature : move.splash,
    variants: function() { return [pkmn.magikarpKoi, pkmn.magikarpRegal, pkmn.magikarpSakura, pkmn.magikarpSkelly, pkmn.magikarpSoar, pkmn.magikarpTiger] },
}

pkmn.magikarpKoi = {
    type: ["flying","water"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash
}

pkmn.magikarpRegal = {
    type: ["flying","steel"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash
}

pkmn.magikarpSakura = {
    type: ["flying","fairy"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash
}

pkmn.magikarpSkelly = {
    type: ["flying","dark"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash
}

pkmn.magikarpSoar = {
    type: ["flying"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash
}

pkmn.magikarpTiger = {
    type: ["flying","ground"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash
}

pkmn.gyarados = {
    type: ["water","flying"],
    bst: {
        hp: 95,
        atk: 125,
        def: 79,
        satk: 60,
        sdef: 100,
        spe: 81,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGyarados, item: item.gyaradosite } } },
    hiddenAbility: ability.intimidate,
}

pkmn.megaGyarados = {
    type: ["water","dark"],
    bst: {
        hp: 95,
        atk: 155,
        def: 109,
        satk: 70,
        sdef: 130,
        spe: 81,
    },
    hiddenAbility: ability.intimidate,
}

// 131 Lapras
pkmn.lapras = {
    type: ["water","ice"],
    bst: {
        hp: 130,
        atk: 85,
        def: 80,
        satk: 85,
        sdef: 95,
        spe: 60,
    },
    hiddenAbility: ability.waterAbsorb,
    eggMove : move.sparklingAria
}

pkmn.laprasGmax = {
    type: ["water","ice"],
    bst: {
        hp: 130*1.5,
        atk: 85*1.5,
        def: 80*1.5,
        satk: 85*1.5,
        sdef: 95*1.5,
        spe: 60*1.5,
    },
    hiddenAbility: ability.waterAbsorb,
    eggMove : move.sparklingAria
}

// 132 Ditto
pkmn.ditto = {
    type: ["normal"],
    bst: {
        hp: 48,
        atk: 48,
        def: 48,
        satk: 48,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.imposter,
    lore: `Believed to be the result of an attempt to replicate the ancestor of all Pokémon. The experiment did not achieve its intended goal, and the creature that emerged was deemed a failure.`
}

// 133 Eevee → Vaporeon / Jolteon / Flareon / Espeon / Umbreon / Leafeon / Glaceon / Sylveon
pkmn.eevee = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 55,
        def: 50,
        satk: 45,
        sdef: 65,
        spe: 55,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.vaporeon, item: item.waterStone },
            2: { pkmn: pkmn.jolteon, item: item.thunderStone },
            3: { pkmn: pkmn.flareon, item: item.fireStone },
            4: { pkmn: pkmn.espeon, item: item.dawnStone },
            5: { pkmn: pkmn.umbreon, item: item.duskStone },
            6: { pkmn: pkmn.leafeon, item: item.leafStone },
            7: { pkmn: pkmn.glaceon, item: item.iceStone },
            8: { pkmn: pkmn.sylveon, item: item.shinyStone } 
        }
    },
    hiddenAbility: ability.normalize,
    signature : move.batonPass
}

pkmn.eeveeGmax = {
    type: ["normal"],
    bst: {
        hp: 55*1.5,
        atk: 55*1.5,
        def: 50*1.5,
        satk: 45*1.5,
        sdef: 65*1.5,
        spe: 55*1.5,
    },
    hiddenAbility: ability.normalize,
    signature : move.batonPass
}

pkmn.vaporeon = {
    type: ["water"],
    bst: {
        hp: 130,
        atk: 65,
        def: 60,
        satk: 110,
        sdef: 95,
        spe: 65,
    },
    hiddenAbility: ability.hydrolate,
}

pkmn.jolteon = {
    type: ["electric"],
    bst: {
        hp: 65,
        atk: 65,
        def: 60,
        satk: 110,
        sdef: 95,
        spe: 130,
    },
    hiddenAbility: ability.galvanize,
}

pkmn.flareon = {
    type: ["fire"],
    bst: {
        hp: 65,
        atk: 130,
        def: 60,
        satk: 95,
        sdef: 110,
        spe: 65,
    },
    hiddenAbility: ability.pyrolate,
    eggMove : move.sacredFire
}

pkmn.espeon = {
    type: ["psychic"],
    bst: {
        hp: 65,
        atk: 65,
        def: 60,
        satk: 130,
        sdef: 95,
        spe: 110,
    },
    hiddenAbility: ability.espilate,
    signature : move.morningSun
}

pkmn.umbreon = {
    type: ["dark"],
    bst: {
        hp: 95,
        atk: 65,
        def: 110,
        satk: 60,
        sdef: 130,
        spe: 65,
    },
    hiddenAbility: ability.gloomilate,
}

pkmn.leafeon = {
    type: ["grass"],
    bst: {
        hp: 65,
        atk: 110,
        def: 130,
        satk: 60,
        sdef: 65,
        spe: 95,
    },
    hiddenAbility: ability.verdify,
}

pkmn.glaceon = {
    type: ["ice"],
    bst: {
        hp: 65,
        atk: 60,
        def: 110,
        satk: 130,
        sdef: 95,
        spe: 65,
    },
    hiddenAbility: ability.glaciate,
    eggMove : move.snowscape
}

pkmn.sylveon = {
  type: ["fairy"],
  bst: {
    hp: 95,
    atk: 65,
    def: 65,
    satk: 110,
    sdef: 130,
    spe: 60,
  },
    hiddenAbility: ability.pixilate,
}

// 137 Porygon → Porygon2 → Porygon-Z
pkmn.porygon = {
    type: ["normal"],
    bst: {
        hp: 65,
        atk: 60,
        def: 70,
        satk: 85,
        sdef: 75,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.porygon2, level: evolutionLevel2 } } },
    hiddenAbility: ability.adaptability,
    signature : move.conversion
}

pkmn.porygon2 = {
    type: ["normal"],
    bst: {
        hp: 85,
        atk: 80,
        def: 90,
        satk: 105,
        sdef: 95,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.porygonZ, item: item.linkStone } } },
    hiddenAbility: ability.adaptability,
    signature : move.conversion
}

pkmn.porygonZ = {
    type: ["normal"],
    bst: {
        hp: 85,
        atk: 80,
        def: 70,
        satk: 135,
        sdef: 75,
        spe: 90,
    },
    hiddenAbility: ability.adaptability,
    signature : move.conversion
}

// 138 Omanyte → Omastar
pkmn.omanyte = {
    type: ["rock","water"],
    bst: {
        hp: 35,
        atk: 40,
        def: 100,
        satk: 90,
        sdef: 55,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.omastar, level: evolutionLevel3 } } },
    hiddenAbility: ability.costar,
    eggMove : move.sparklingAria
}

pkmn.omastar = {
    type: ["rock","water"],
    bst: {
        hp: 70,
        atk: 60,
        def: 125,
        satk: 115,
        sdef: 70,
        spe: 55,
    },
    hiddenAbility: ability.costar,
    eggMove : move.sparklingAria

}

// 140 Kabuto → Kabutops
pkmn.kabuto = {
    type: ["rock","water"],
    bst: {
        hp: 30,
        atk: 80,
        def: 90,
        satk: 55,
        sdef: 45,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kabutops, level: evolutionLevel3 } } },
    hiddenAbility: ability.stoned,
}

pkmn.kabutops = {
    type: ["rock","water"],
    bst: {
        hp: 60,
        atk: 115,
        def: 105,
        satk: 65,
        sdef: 70,
        spe: 80,
    },
    hiddenAbility: ability.stoned,
}

// 142 Aerodactyl
pkmn.aerodactyl = {
    type: ["rock","flying"],
    bst: {
        hp: 80,
        atk: 105,
        def: 65,
        satk: 60,
        sdef: 75,
        spe: 130,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAerodactyl, item: item.aerodactylite } } },
    hiddenAbility: ability.toughClaws,
}

pkmn.megaAerodactyl = {
    type: ["rock","flying"],
    bst: {
        hp: 80,
        atk: 135,
        def: 85,
        satk: 70,
        sdef: 95,
        spe: 150,
    },
    hiddenAbility: ability.toughClaws,
}

// 143 Munchlax → Snorlax
pkmn.munchlax = {
    type: ["normal"],
    bst: {
        hp: 135,
        atk: 85,
        def: 40,
        satk: 40,
        sdef: 85,
        spe: 5,
    },
    evolve: function() { return { 1: { pkmn: pkmn.snorlax, level: evolutionLevel2 } } },
    hiddenAbility: ability.thickFat,
    signature : move.bellyDrum
}

pkmn.snorlax = {
    type: ["normal"],
    bst: {
        hp: 160,
        atk: 110,
        def: 65,
        satk: 65,
        sdef: 110,
        spe: 30,
    },
    hiddenAbility: ability.thickFat,
    signature : move.bellyDrum
}

pkmn.snorlaxGmax = {
    type: ["normal"],
    bst: {
        hp: 160*1.5,
        atk: 110*1.5,
        def: 65*1.4,
        satk: 65*1.4,
        sdef: 110*1.4,
        spe: 30*1.4,
    },
    hiddenAbility: ability.thickFat,
    signature : move.bellyDrum
}

// 144 Articuno
pkmn.articuno = {
    type: ["ice","flying"],
    bst: {
        hp: 90,
        atk: 85,
        def: 100,
        satk: 95,
        sdef: 125,
        spe: 85,
    },
    hiddenAbility: ability.glacialBody,
    lore : `The cold of winter. Air chills and frost gathers in its wake. Snowfall follows as it passes, and mountains are left sealed in ice where it lingers.`,
    eggMove : move.snowscape,
    variants: function() { return [pkmn.galarianArticuno] },
}

pkmn.galarianArticuno = {
    type: ["psychic","flying"],
    bst: {
        hp: 90,
        atk: 85,
        def: 85,
        satk: 125,
        sdef: 150,
        spe: 95,
    },
    hiddenAbility: ability.justified,
    signature : move.freezingGlare
}

// 145 Zapdos
pkmn.zapdos = {
    type: ["electric","flying"],
    bst: {
        hp: 90,
        atk: 90,
        def: 85,
        satk: 125,
        sdef: 90,
        spe: 100,
    },
    hiddenAbility: ability.dauntingLook,
    lore: `The storm of summer. Thunder rolls with its cry, and lightning strikes in time with its wings. The skies darken as it passes, and violent storms follow its soar.`,
    eggMove : move.charge,
    variants: function() { return [pkmn.galarianZapdos] },
}

pkmn.galarianZapdos = {
    type: ["fighting","flying"],
    bst: {
        hp: 90,
        atk: 125,
        def: 90,
        satk: 85,
        sdef: 90,
        spe: 150,
    },
    hiddenAbility: ability.angerPoint,
    signature : move.thunderousKick
}

// 146 Moltres
pkmn.moltres = {
    type: ["fire","flying"],
    bst: {
        hp: 90,
        atk: 100,
        def: 90,
        satk: 125,
        sdef: 85,
        spe: 90,
    },
    hiddenAbility: ability.fieryPelt,
    lore : `The warmth of spring. Its fire does not scorch the world, but stirs it awake, melting snow and kindling new life. The cold loosens its hold as it passes, and the land is renewed by heat and light.`,
    eggMove : move.magmaStorm,
    variants: function() { return [pkmn.galarianMoltres] },
}

pkmn.galarianMoltres = {
    type: ["dark","flying"],
    bst: {
        hp: 90,
        atk: 85,
        def: 90,
        satk: 150,
        sdef: 125,
        spe: 90,
    },
    hiddenAbility: ability.gloomilate,
    signature : move.fieryWrath
}

// 147 Dratini → Dragonair → Dragonite
pkmn.dratini = {
    type: ["dragon"],
    bst: {
        hp: 41,
        atk: 64,
        def: 45,
        satk: 50,
        sdef: 50,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dragonair, level: evolutionLevel2 } } },
    hiddenAbility: ability.multiscale,
}

pkmn.dragonair = {
    type: ["dragon"],
    bst: {
        hp: 80,
        atk: 84,
        def: 65,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dragonite, level: evolutionLevel3 } } },
    hiddenAbility: ability.multiscale,
}

pkmn.dragonite = {
    type: ["dragon","flying"],
    bst: {
        hp: 91,
        atk: 134,
        def: 95,
        satk: 100,
        sdef: 100,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaDragonite, item: item.dragonitite } } },
    hiddenAbility: ability.multiscale,
}

pkmn.megaDragonite = {
    type: ["dragon","flying"],
    bst: {
        hp: 91,
        atk: 124,
        def: 115,
        satk: 145,
        sdef: 125,
        spe: 100,
    },
    hiddenAbility: ability.multiscale,
}

// 150 Mewtwo
pkmn.mewtwo = {
    type: ["psychic"],
    bst: {
        hp: 106,
        atk: 110,
        def: 90,
        satk: 154,
        sdef: 90,
        spe: 130,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaMewtwoX, item: item.mewtwoniteX } } },
    lore: `Shaped by human hands, bears the weight of creation twisted. Though it carries the memory of life that came before, it walks a path apart, questioning the bounds of its own existence.`
}

pkmn.megaMewtwoX = {
    type: ["psychic","fighting"],
    bst: {
        hp: 106,
        atk: 190,
        def: 100,
        satk: 154,
        sdef: 100,
        spe: 130,
    }
}

pkmn.megaMewtwoY = {
    type: ["psychic"],
    bst: {
        hp: 106,
        atk: 150,
        def: 70,
        satk: 194,
        sdef: 120,
        spe: 140,
    }
}

// 151 Mew
pkmn.mew = {
    type: ["psychic"],
    bst: {
        hp: 100,
        atk: 100,
        def: 100,
        satk: 100,
        sdef: 100,
        spe: 100,
    },
    hiddenAbility: ability.protean,
    lore: `The origin from which all Pokemon as we know trace their beginnings. Its form, small and gentle, carries the memory of every creature that would follow.`
}

// 152 Chikorita → Bayleef → Meganium
pkmn.chikorita = {
    type: ["grass"],
    bst: {
        hp: 45,
        atk: 49,
        def: 65,
        satk: 49,
        sdef: 65,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.bayleef, level: evolutionLevel1 } } },
    hiddenAbility: ability.costar,
    eggMove : move.floralHealing
}

pkmn.bayleef = {
    type: ["grass"],
    bst: {
        hp: 60,
        atk: 62,
        def: 80,
        satk: 63,
        sdef: 80,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.meganium, level: evolutionLevel2 } } },
    hiddenAbility: ability.costar,
    eggMove : move.floralHealing
}

pkmn.meganium = {
    type: ["grass"],
    bst: {
        hp: 80,
        atk: 82,
        def: 100,
        satk: 83,
        sdef: 100,
        spe: 80,
    },
    hiddenAbility: ability.costar,
    eggMove : move.floralHealing
}

pkmn.megaMeganium = {
    type: ["grass", "fairy"],
    bst: {
        hp: 80,
        atk: 92,
        def: 115,
        satk: 143,
        sdef: 115,
        spe: 80,
    },
    hiddenAbility: ability.costar,
    eggMove : move.floralHealing
}

// 155 Cyndaquil → Quilava → Typhlosion
pkmn.cyndaquil = {
    type: ["fire"],
    bst: {
        hp: 39,
        atk: 52,
        def: 43,
        satk: 60,
        sdef: 50,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.quilava, level: evolutionLevel1 } } },
    hiddenAbility: ability.flareBoost,
    signature : move.inferno
}

pkmn.quilava = {
    type: ["fire"],
    bst: {
        hp: 58,
        atk: 64,
        def: 58,
        satk: 80,
        sdef: 65,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.typhlosion, level: evolutionLevel2 } } },
    hiddenAbility: ability.flareBoost,
    signature : move.inferno
}

pkmn.typhlosion = {
    type: ["fire"],
    bst: {
        hp: 78,
        atk: 84,
        def: 78,
        satk: 109,
        sdef: 85,
        spe: 100,
    },
    hiddenAbility: ability.flareBoost,
    signature : move.inferno,
    variants: function() { return [pkmn.hisuianTyphlosion] },
}

pkmn.hisuianTyphlosion = {
    type: ["fire", "ghost"],
    bst: {
        hp: 73,
        atk: 84,
        def: 78,
        satk: 119,
        sdef: 85,
        spe: 95,
    }
}

// 158 Totodile → Croconaw → Feraligatr
pkmn.totodile = {
    type: ["water"],
    bst: {
        hp: 50,
        atk: 65,
        def: 64,
        satk: 44,
        sdef: 48,
        spe: 43,
    },
    evolve: function() { return { 1: { pkmn: pkmn.croconaw, level: evolutionLevel1 } } },
    hiddenAbility: ability.sheerForce,
}

pkmn.croconaw = {
    type: ["water"],
    bst: {
        hp: 65,
        atk: 80,
        def: 80,
        satk: 59,
        sdef: 63,
        spe: 58,
    },
    evolve: function() { return { 1: { pkmn: pkmn.feraligatr, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
}

pkmn.feraligatr = {
    type: ["water"],
    bst: {
        hp: 85,
        atk: 105,
        def: 100,
        satk: 79,
        sdef: 83,
        spe: 78,
    },
    hiddenAbility: ability.sheerForce,
}

pkmn.megaFeraligatr = {
    type: ["water", "dragon"],
    bst: {
        hp: 85,
        atk: 160,
        def: 125,
        satk: 89,
        sdef: 93,
        spe: 78,
    }
}

// 161 Sentret → Furret
pkmn.sentret = {
    type: ["normal"],
    bst: {
        hp: 35,
        atk: 46,
        def: 34,
        satk: 35,
        sdef: 45,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.furret, level: evolutionLevel1 } } },
    signature : move.meFirst,
    hiddenAbility: ability.costar,
}

pkmn.furret = {
    type: ["normal"],
    bst: {
        hp: 85,
        atk: 76,
        def: 64,
        satk: 45,
        sdef: 55,
        spe: 90,
    },
    signature : move.meFirst,
    hiddenAbility: ability.costar,
}

// 163 Hoothoot → Noctowl
pkmn.hoothoot = {
    type: ["normal","flying"],
    bst: {
        hp: 60,
        atk: 30,
        def: 30,
        satk: 36,
        sdef: 56,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.noctowl, level: evolutionLevel1 } } },
    hiddenAbility: ability.tintedLens,
}

pkmn.noctowl = {
    type: ["normal","flying"],
    bst: {
        hp: 100,
        atk: 50,
        def: 50,
        satk: 76,
        sdef: 96,
        spe: 70,
    },
    hiddenAbility: ability.tintedLens,
}

// 165 Ledyba → Ledian
pkmn.ledyba = {
    type: ["bug","flying"],
    bst: {
        hp: 40,
        atk: 40,
        def: 30,
        satk: 20,
        sdef: 80,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ledian, level: evolutionLevel1 } } },
    hiddenAbility: ability.ironFist,
    signature : move.cometPunch
}

pkmn.ledian = {
    type: ["bug","flying"],
    bst: {
        hp: 55,
        atk: 55,
        def: 50,
        satk: 35,
        sdef: 110,
        spe: 85,
    },
    hiddenAbility: ability.ironFist,
    signature : move.cometPunch
}

// 167 Spinarak → Ariados
pkmn.spinarak = {
    type: ["bug","poison"],
    bst: {
        hp: 40,
        atk: 60,
        def: 40,
        satk: 40,
        sdef: 40,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ariados, level: evolutionLevel1 } } },
    signature : move.toxicThread,
    hiddenAbility: ability.moltShed,
}

pkmn.ariados = {
    type: ["bug","poison"],
    bst: {
        hp: 80,
        atk: 100,
        def: 70,
        satk: 60,
        sdef: 70,
        spe: 40,
    },
    signature : move.toxicThread,
    hiddenAbility: ability.moltShed,
}

// 169 Crobat

// 170 Chinchou → Lanturn
pkmn.chinchou = {
    type: ["water","electric"],
    bst: {
        hp: 75,
        atk: 38,
        def: 38,
        satk: 56,
        sdef: 56,
        spe: 67,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lanturn, level: evolutionLevel2 } } },
    hiddenAbility: ability.voltAbsorb,
    eggMove : move.tailGlow
}

pkmn.lanturn = {
    type: ["water","electric"],
    bst: {
        hp: 125,
        atk: 58,
        def: 58,
        satk: 76,
        sdef: 76,
        spe: 67,
    },
    hiddenAbility: ability.voltAbsorb,
    eggMove : move.tailGlow
}

// 172 Pichu
// 173 Cleffa
// 174 Igglybuff

// 175 Togepi → Togetic → Togekiss
pkmn.togepi = {
    type: ["fairy"],
    bst: {
        hp: 35,
        atk: 20,
        def: 65,
        satk: 40,
        sdef: 65,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.togetic, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    signature : move.metronome
}

pkmn.togetic = {
    type: ["fairy","flying"],
    bst: {
        hp: 55,
        atk: 40,
        def: 85,
        satk: 80,
        sdef: 105,
        spe: 40,
    },
  evolve: function() { return { 1: { pkmn: pkmn.togekiss, item: item.shinyStone /*o equivalente*/ } } },
    hiddenAbility: ability.sereneGrace,
    signature : move.metronome
}

pkmn.togekiss = {
    type: ["fairy","flying"],
    bst: {
        hp: 85,
        atk: 50,
        def: 95,
        satk: 120,
        sdef: 115,
        spe: 80,
    },
    hiddenAbility: ability.sereneGrace,
    signature : move.metronome
}

// 177 Natu → Xatu
pkmn.natu = {
    type: ["psychic", "flying"],
    bst: {
        hp: 40,
        atk: 50,
        def: 45,
        satk: 70,
        sdef: 45,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.xatu, level: evolutionLevel2 } } },
    eggMove : move.aeroblast,
    hiddenAbility: ability.neuroforce,
}

pkmn.xatu = {
    type: ["psychic","flying"],
    bst: {
        hp: 65,
        atk: 75,
        def: 70,
        satk: 95,
        sdef: 70,
        spe: 95,
    },
    eggMove : move.aeroblast,
    hiddenAbility: ability.neuroforce,
}

// 179 Mareep → Flaafy → Ampharos
pkmn.mareep = {
    type: ["electric"],
    bst: {
        hp: 55,
        atk: 40,
        def: 40,
        satk: 65,
        sdef: 45,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.flaaffy, level: evolutionLevel1 } } },
    hiddenAbility: ability.flashElectro,
    eggMove : move.zapCannon
}

pkmn.flaaffy = {
    type: ["electric"],
    bst: {
        hp: 70,
        atk: 55,
        def: 55,
        satk: 80,
        sdef: 60,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ampharos, level: evolutionLevel2 } } },
    hiddenAbility: ability.flashElectro,
    eggMove : move.zapCannon
}

pkmn.ampharos = {
    type: ["electric"],
    bst: {
        hp: 90,
        atk: 75,
        def: 85,
        satk: 115,
        sdef: 90,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAmpharos, item: item.ampharosite } } },
    hiddenAbility: ability.flashElectro,
    eggMove : move.zapCannon
}

pkmn.megaAmpharos = {
    type: ["electric","dragon"],
    bst: {
        hp: 90,
        atk: 95,
        def: 105,
        satk: 165,
        sdef: 110,
        spe: 45,
    },
    hiddenAbility: ability.flashElectro,
    eggMove : move.zapCannon
}

// 182 Bellossom

// 183 Azurill → Marill → Azumarill
pkmn.azurill = {
    type: ["normal","fairy"],
    bst: {
        hp: 50,
        atk: 20,
        def: 40,
        satk: 20,
        sdef: 40,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.marill, level: evolutionLevel1 } } },
    hiddenAbility: ability.hugePower,
}

pkmn.marill = {
    type: ["water","fairy"],
    bst: {
        hp: 70,
        atk: 20,
        def: 50,
        satk: 20,
        sdef: 50,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.azumarill, item: item.waterStone } } },
    hiddenAbility: ability.hugePower,
}

pkmn.azumarill = {
    type: ["water","fairy"],
    bst: {
        hp: 100,
        atk: 80,
        def: 80,
        satk: 60,
        sdef: 80,
        spe: 50,
    },
    hiddenAbility: ability.hugePower,
}

// 185 Bonsly → Sudowoodo
pkmn.bonsly = {
    type: ["rock"],
    bst: {
        hp: 50,
        atk: 80,
        def: 95,
        satk: 10,
        sdef: 45,
        spe: 10,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sudowoodo, level: evolutionLevel1 } } },
    eggMove : move.mimic
}

pkmn.sudowoodo = {
    type: ["rock"],
    bst: {
        hp: 70,
        atk: 100,
        def: 115,
        satk: 30,
        sdef: 65,
        spe: 30,
    },
    eggMove : move.mimic
}

// 186 Politoed

// 187 Hoppip → Skiploom → Jumpluff
pkmn.hoppip = {
    type: ["grass","flying"],
    bst: {
        hp: 35,
        atk: 35,
        def: 40,
        satk: 35,
        sdef: 55,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.skiploom, level: evolutionLevel1 } } },
    hiddenAbility: ability.windRider,
    eggMove : move.aeroblast
}

pkmn.skiploom = {
    type: ["grass","flying"],
    bst: {
        hp: 55,
        atk: 45,
        def: 50,
        satk: 45,
        sdef: 65,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.jumpluff, level: evolutionLevel2 } } },
    hiddenAbility: ability.windRider,
    eggMove : move.aeroblast
}

pkmn.jumpluff = {
    type: ["grass","flying"],
    bst: {
        hp: 75,
        atk: 55,
        def: 70,
        satk: 55,
        sdef: 95,
        spe: 110,
    },
    hiddenAbility: ability.windRider,
    eggMove : move.aeroblast
}

// 190 Aipom → Ambipom
pkmn.aipom = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 70,
        def: 55,
        satk: 40,
        sdef: 55,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ambipom, level: evolutionLevel2 } } },
    hiddenAbility: ability.skillLink,
    eggMove : move.batonPass
}

pkmn.ambipom = {
    type: ["normal"],
    bst: {
        hp: 75,
        atk: 100,
        def: 66,
        satk: 60,
        sdef: 66,
        spe: 115,
    },
    hiddenAbility: ability.skillLink,
    eggMove : move.batonPass
}

// 191 Sunkern → Sunflora
pkmn.sunkern = {
    type: ["grass"],
    bst: {
        hp: 30,
        atk: 30,
        def: 30,
        satk: 30,
        sdef: 30,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sunflora, item: item.sunStone } } },
    hiddenAbility: ability.flowerVeil,
}

pkmn.sunflora = {
    type: ["grass"],
    bst: {
        hp: 75,
        atk: 75,
        def: 55,
        satk: 105,
        sdef: 85,
        spe: 30,
    },
    hiddenAbility: ability.flowerVeil,
}

// 193 Yanma → Yanmega
pkmn.yanma = {
    type: ["bug","flying"],
    bst: {
        hp: 65,
        atk: 65,
        def: 45,
        satk: 75,
        sdef: 45,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.yanmega, level: evolutionLevel3 } } },
    hiddenAbility: ability.speedBoost,
    eggMove : move.braveBird
}

pkmn.yanmega = {
    type: ["bug","flying"],
    bst: {
        hp: 86,
        atk: 76,
        def: 86,
        satk: 116,
        sdef: 56,
        spe: 95,
    },
    hiddenAbility: ability.speedBoost,
    eggMove : move.braveBird
}

// 194 Wooper → Quagsire / Paldean Wooper → Clodsire
pkmn.wooper = {
    type: ["water","ground"],
    bst: {
        hp: 55,
        atk: 45,
        def: 45,
        satk: 25,
        sdef: 25,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.quagsire, level: evolutionLevel1 } } },
    signature : move.mudSport,
    hiddenAbility: ability.unaware,
    variants: function() { return [pkmn.paldeanWooper] },
}

pkmn.paldeanWooper = {
    type: ["poison","ground"],
    bst: {
        hp: 55,
        atk: 45,
        def: 45,
        satk: 25,
        sdef: 25,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.clodsire, level: evolutionLevel2 } } },
    hiddenAbility: ability.gooey,
}

pkmn.quagsire = {
    type: ["water","ground"],
    bst: {
        hp: 95,
        atk: 85,
        def: 85,
        satk: 65,
        sdef: 65,
        spe: 35,
    },
    signature : move.mudSport,
    hiddenAbility: ability.unaware,
}

pkmn.clodsire = {
  type: ["poison", "ground"],
  bst: {
    hp: 130,
    atk: 75,
    def: 60,
    satk: 45,
    sdef: 100,
    spe: 20,
  },
    hiddenAbility: ability.gooey,
}

// 196 Espeon
// 197 Umbreon

// 198 Murkrow → Honchkrow
pkmn.murkrow = {
    type: ["dark","flying"],
    bst: {
        hp: 60,
        atk: 85,
        def: 42,
        satk: 85,
        sdef: 42,
        spe: 91,
    },
    evolve: function() { return { 1: { pkmn: pkmn.honchkrow, item: item.duskStone } } },
    hiddenAbility: ability.prankster,
}

pkmn.honchkrow = {
    type: ["dark","flying"],
    bst: {
        hp: 100,
        atk: 125,
        def: 52,
        satk: 105,
        sdef: 52,
        spe: 71,
    },
    hiddenAbility: ability.prankster,
}

// 199 Slowking

// 200 Misdreavus → Mismagius
pkmn.misdreavus = {
    type: ["ghost"],
    bst: {
        hp: 60,
        atk: 60,
        def: 60,
        satk: 85,
        sdef: 85,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mismagius, item: item.duskStone } } },
    hiddenAbility: ability.levitate,
}

pkmn.mismagius = {
    type: ["ghost"],
    bst: {
        hp: 60,
        atk: 60,
        def: 60,
        satk: 105,
        sdef: 105,
        spe: 105,
    },
    hiddenAbility: ability.levitate,
}

// 201 Unown
pkmn.unownA = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.adaptability,
    variants: function() { return [pkmn.unownB, pkmn.unownC, pkmn.unownD, pkmn.unownE, pkmn.unownF, pkmn.unownG, pkmn.unownH, pkmn.unownI, pkmn.unownJ, pkmn.unownK, pkmn.unownL, pkmn.unownM, pkmn.unownN, pkmn.unownO, pkmn.unownP, pkmn.unownQ, pkmn.unownR, pkmn.unownS, pkmn.unownT, pkmn.unownU, pkmn.unownV, pkmn.unownW, pkmn.unownX, pkmn.unownY, pkmn.unownZ, pkmn.unownExclamation, pkmn.unownQuestion] },
}

pkmn.unownB = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.beastBoost,
}

pkmn.unownC = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.climaTact,
}

pkmn.unownD = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.dancer,
}

pkmn.unownE = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.espilate,
}

pkmn.unownF = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.filter,
}

pkmn.unownG = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.gorillaTactics,
}

pkmn.unownH = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.hugePower,
}

pkmn.unownI = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.imposter,
}

pkmn.unownJ = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.justified,
}

pkmn.unownK = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    }
}

pkmn.unownL = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.libero,
}

pkmn.unownM = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.magicGuard,
}

pkmn.unownN = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.noGuard,
}

pkmn.unownO = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.ownTempo,
}

pkmn.unownP = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.parentalBond,
}

pkmn.unownQ = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.quarkDrive,
}

pkmn.unownR = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.reckless,
}

pkmn.unownS = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.simple,
}

pkmn.unownT = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.technician,
}

pkmn.unownU = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.unburden,
}

pkmn.unownV = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.voltAbsorb,
}

pkmn.unownW = {
    type: ["psychic"],
    bst: {
        hp: 1,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.wonderGuard,
}

pkmn.unownX = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    }
}

pkmn.unownY = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    }
}

pkmn.unownZ = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    }
}

pkmn.unownExclamation = {
    type: ["psychic"],
    bst: {
        hp: 80,
        atk: 72,
        def: 48,
        satk: 100,
        sdef: 120,
        spe: 48,
    },
    hiddenAbility: ability.angerPoint,
}

pkmn.unownQuestion = {
    type: ["psychic"],
    bst: {
        hp: 80,
        atk: 72,
        def: 48,
        satk: 100,
        sdef: 120,
        spe: 48,
    },
    hiddenAbility: ability.unaware,
}

// 202 Wynaut → Wobbuffet
pkmn.wynaut = {
    type: ["psychic"],
    bst: {
        hp: 95,
        atk: 23,
        def: 48,
        satk: 23,
        sdef: 48,
        spe: 23,
    },
    evolve: function() { return { 1: { pkmn: pkmn.wobbuffet, level: evolutionLevel2 } } },
    hiddenAbility: ability.unaware,
}

pkmn.wobbuffet = {
    type: ["psychic"],
    bst: {
        hp: 190,
        atk: 33,
        def: 58,
        satk: 83,
        sdef: 58,
        spe: 33,
    },
    hiddenAbility: ability.unaware,
}

// 203 Girafarig → Farigiraf
pkmn.girafarig = {
    type: ["normal","psychic"],
    bst: {
        hp: 70,
        atk: 80,
        def: 65,
        satk: 90,
        sdef: 65,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.farigiraf, item: item.oddRock } } },
    hiddenAbility: ability.neuroforce,
    eggMove : move.psyshieldBash

}

pkmn.farigiraf = {
  type: ["normal", "psychic"],
  bst: {
    hp: 120,
    atk: 90,
    def: 70,
    satk: 110,
    sdef: 70,
    spe: 60,
  }
}

// 204 Pineco → Forretress
pkmn.pineco = {
    type: ["bug"],
    bst: {
        hp: 50,
        atk: 65,
        def: 90,
        satk: 35,
        sdef: 35,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.forretress, level: evolutionLevel2 } } },
    hiddenAbility: ability.stamina,
}

pkmn.forretress = {
    type: ["bug","steel"],
    bst: {
        hp: 75,
        atk: 90,
        def: 140,
        satk: 60,
        sdef: 60,
        spe: 40,
    },
    hiddenAbility: ability.stamina,
}

// 206 Dunsparce → Dudunsparce
pkmn.dunsparce = {
    type: ["normal"],
    bst: {
        hp: 100,
        atk: 70,
        def: 70,
        satk: 65,
        sdef: 65,
        spe: 45,
    },
    hiddenAbility: ability.sereneGrace,
    signature : move.hyperDrill
}

pkmn.dudunsparce = {
  type: ["normal"],
  bst: {
    hp: 125,
    atk: 100,
    def: 80,
    satk: 85,
    sdef: 75,
    spe: 55,
  },
    signature : move.hyperDrill
}

pkmn.dududunsparce = {
  type: ["normal"],
  bst: {
    hp: 125,
    atk: 100,
    def: 80,
    satk: 85,
    sdef: 75,
    spe: 55,
  },
    signature : move.hyperDrill
}

// 207 Gligar → Gliscor
pkmn.gligar = {
    type: ["ground","flying"],
    bst: {
        hp: 65,
        atk: 75,
        def: 105,
        satk: 35,
        sdef: 65,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gliscor, level: evolutionLevel3 } } },
    hiddenAbility: ability.toxicBoost,
}

pkmn.gliscor = {
    type: ["ground","flying"],
    bst: {
        hp: 75,
        atk: 95,
        def: 125,
        satk: 45,
        sdef: 75,
        spe: 95,
    },
    hiddenAbility: ability.toxicBoost,
}

// 208 Steelix

// 209 Snubbull → Granbull
pkmn.snubbull = {
    type: ["fairy"],
    bst: {
        hp: 60,
        atk: 80,
        def: 50,
        satk: 40,
        sdef: 40,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.granbull, level: evolutionLevel1 } } },
    hiddenAbility: ability.pixiePelt,
}

pkmn.granbull = {
    type: ["fairy"],
    bst: {
        hp: 90,
        atk: 120,
        def: 75,
        satk: 60,
        sdef: 60,
        spe: 45,
    },
    hiddenAbility: ability.pixiePelt,
}

// 211 Qwilfish / Hisuian Qwilfish → Overqwil
pkmn.qwilfish = {
    type: ["water","poison"],
    bst: {
        hp: 65,
        atk: 95,
        def: 75,
        satk: 55,
        sdef: 55,
        spe: 85,
    },
    hiddenAbility: ability.intimidate,
    signature : move.barbBarrage,
    variants: function() { return [pkmn.hisuianQwilfish] },
}

pkmn.hisuianQwilfish = {
    type: ["dark", "poison"],
    bst: {
        hp: 65,
        atk: 95,
        def: 85,
        satk: 55,
        sdef: 55,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.overqwil, level: evolutionLevel2 } } },
    signature : move.barbBarrage,
    hiddenAbility: ability.merciless,
}

pkmn.overqwil = {
    type: ["dark", "poison"],
    bst: {
        hp: 85,
        atk: 115,
        def: 95,
        satk: 65,
        sdef: 65,
        spe: 85,
    },
    signature : move.barbBarrage,
    hiddenAbility: ability.merciless,
}

// 212 Scizor

// 213 Shuckle
pkmn.shuckle = {
    type: ["bug","rock"],
    bst: {
        hp: 20,
        atk: 10,
        def: 230,
        satk: 10,
        sdef: 230,
        spe: 5,
    },
    hiddenAbility: ability.contrary,
    eggMove : move.batonPass,
}

// 214 Heracross
pkmn.heracross = {
    type: ["bug","fighting"],
    bst: {
        hp: 80,
        atk: 125,
        def: 75,
        satk: 40,
        sdef: 95,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaHeracross, item: item.heracronite } } },
    hiddenAbility: ability.skillLink,
    signature : move.megahorn
}

pkmn.megaHeracross = {
    type: ["bug","fighting"],
    bst: {
        hp: 80,
        atk: 185,
        def: 115,
        satk: 40,
        sdef: 105,
        spe: 75,
    },
    hiddenAbility: ability.skillLink,
    signature : move.megahorn
}

// 215 Sneasel → Weavile / Hisuian Sneasel → Sneasler
pkmn.sneasel = {
    type: ["dark","ice"],
    bst: {
        hp: 55,
        atk: 95,
        def: 55,
        satk: 35,
        sdef: 75,
        spe: 115,
    },
    evolve: function() { return { 1: { pkmn: pkmn.weavile, item: item.duskStone} } },
    hiddenAbility: ability.sharpness,
    signature : move.tripleAxel,
    variants: function() { return [pkmn.hisuianSneasel] },
}

pkmn.hisuianSneasel = {
    type: ["fighting", "poison"],
    bst: {
        hp: 55,
        atk: 95,
        def: 55,
        satk: 35,
        sdef: 75,
        spe: 115,
    },
        evolve: function() { return { 1: { pkmn: pkmn.hisuianSneasler, level: evolutionLevel2 } } },
    hiddenAbility: ability.merciless,
}

pkmn.weavile = {
    type: ["dark","ice"],
    bst: {
        hp: 70,
        atk: 120,
        def: 65,
        satk: 45,
        sdef: 85,
        spe: 125,
    },
    hiddenAbility: ability.sharpness,
    signature : move.tripleAxel
}

pkmn.hisuianSneasler = {
    rename: `sneasler`,
    type: ["fighting", "poison"],
    bst: {
        hp: 70,
        atk: 120,
        def: 65,
        satk: 45,
        sdef: 85,
        spe: 125,
    },
    hiddenAbility: ability.merciless,
}

// 216 Teddiursa → Ursaring → Ursaluna
pkmn.teddiursa = {
    type: ["normal"],
    bst: {
        hp: 60,
        atk: 80,
        def: 50,
        satk: 50,
        sdef: 50,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ursaring, level: evolutionLevel2 } } },
    hiddenAbility: ability.guts,
    signature : move.headlongRush
}

pkmn.ursaring = {
    type: ["normal"],
    bst: {
        hp: 90,
        atk: 130,
        def: 75,
        satk: 75,
        sdef: 75,
        spe: 55,
    },
    hiddenAbility: ability.guts,
    signature : move.headlongRush
}

pkmn.ursaluna = {
    type: ["ground", "normal"],
    bst: {
        hp: 130,
        atk: 140,
        def: 105,
        satk: 45,
        sdef: 80,
        spe: 50,
    },
}

pkmn.ursalunaBloodmoon = {
    type: ["ground", "normal"],
    bst: {
        hp: 113,
        atk: 70,
        def: 120,
        satk: 135,
        sdef: 65,
        spe: 52,
    },
}

// 218 Slugma → Magcargo
pkmn.slugma = {
    type: ["fire"],
    bst: {
        hp: 40,
        atk: 40,
        def: 40,
        satk: 70,
        sdef: 40,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.magcargo, level: evolutionLevel2 } } },
    hiddenAbility: ability.flameBody,
}

pkmn.magcargo = {
    type: ["fire","rock"],
    bst: {
        hp: 60,
        atk: 50,
        def: 120,
        satk: 90,
        sdef: 80,
        spe: 30,
    },
    hiddenAbility: ability.flameBody,
}

// 220 Swinub → Piloswine → Mamoswine
pkmn.swinub = {
    type: ["ice","ground"],
    bst: {
        hp: 50,
        atk: 50,
        def: 40,
        satk: 30,
        sdef: 30,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.piloswine, level: evolutionLevel2 } } },
    hiddenAbility: ability.thickFat,
    eggMove : move.highHorsepower
}

pkmn.piloswine = {
    type: ["ice","ground"],
    bst: {
        hp: 100,
        atk: 100,
        def: 80,
        satk: 60,
        sdef: 60,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mamoswine, item: item.iceStone } } },
    hiddenAbility: ability.thickFat,
    eggMove : move.highHorsepower
}

pkmn.mamoswine = {
    type: ["ice","ground"],
    bst: {
        hp: 110,
        atk: 130,
        def: 80,
        satk: 70,
        sdef: 60,
        spe: 80,
    },
    hiddenAbility: ability.thickFat,
    eggMove : move.highHorsepower
}

// 222 Corsola / Galarian Corsola → Cursola
pkmn.corsola = {
    type: ["water","rock"],
    bst: {
        hp: 55,
        atk: 55,
        def: 85,
        satk: 65,
        sdef: 85,
        spe: 35,
    },
    hiddenAbility: ability.costar,
    variants: function() { return [pkmn.galarianCorsola] },
}

pkmn.galarianCorsola = {
    type: ["ghost"],
    bst: {
        hp: 60,
        atk: 55,
        def: 100,
        satk: 65,
        sdef: 100,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.cursola, level: evolutionLevel2 } } },
}

pkmn.cursola = {
  type: ["ghost"],
  bst: {
    hp: 60,
    atk: 95,
    def: 50,
    satk: 145,
    sdef: 130,
    spe: 30,
  },
}

// 223 Remoraid → Octillery
pkmn.remoraid = {
    type: ["water"],
    bst: {
        hp: 35,
        atk: 65,
        def: 35,
        satk: 65,
        sdef: 35,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.octillery, level: evolutionLevel2 } } },
    hiddenAbility: ability.moody,
}

pkmn.octillery = {
    type: ["water"],
    bst: {
        hp: 75,
        atk: 105,
        def: 75,
        satk: 105,
        sdef: 75,
        spe: 45,
    },
    hiddenAbility: ability.moody,
}

// 225 Delibird
pkmn.delibird = {
    type: ["ice","flying"],
    bst: {
        hp: 45,
        atk: 55,
        def: 45,
        satk: 65,
        sdef: 45,
        spe: 75,
    }
}

// 226 Mantyke → Mantine
pkmn.mantyke = {
    type: ["water","flying"],
    bst: {
        hp: 45,
        atk: 20,
        def: 50,
        satk: 60,
        sdef: 120,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mantine, item: item.waterStone } } },
    hiddenAbility: ability.waterAbsorb,
}

pkmn.mantine = {
    type: ["water","flying"],
    bst: {
        hp: 85,
        atk: 40,
        def: 70,
        satk: 80,
        sdef: 140,
        spe: 70,
    },
    hiddenAbility: ability.waterAbsorb,
}

// 227 Skarmory
pkmn.skarmory = {
    type: ["steel","flying"],
    bst: {
        hp: 65,
        atk: 80,
        def: 140,
        satk: 40,
        sdef: 70,
        spe: 70,
    }
}

pkmn.megaSkarmory = {
    type: ["steel","flying"],
    bst: {
        hp: 65,
        atk: 140,
        def: 110,
        satk: 40,
        sdef: 100,
        spe: 110,
    }
}

// 228 Houndour → Houndoom
pkmn.houndour = {
    type: ["dark","fire"],
    bst: {
        hp: 45,
        atk: 60,
        def: 30,
        satk: 80,
        sdef: 50,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.houndoom, level: evolutionLevel2 } } },
    hiddenAbility: ability.solarPower,
    eggMove: move.howl,
}

pkmn.houndoom = {
    type: ["dark","fire"],
    bst: {
        hp: 75,
        atk: 90,
        def: 50,
        satk: 110,
        sdef: 80,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaHoundoom, item: item.houndoominite } } },
    hiddenAbility: ability.solarPower,
    eggMove: move.howl,
}

pkmn.megaHoundoom = {
    type: ["dark","fire"],
    bst: {
        hp: 75,
        atk: 90,
        def: 90,
        satk: 140,
        sdef: 90,
        spe: 115,
    },
    hiddenAbility: ability.solarPower,
    eggMove: move.howl,
}

// 230 Kingdra

// 231 Phanpy → Donphan
pkmn.phanpy = {
    type: ["ground"],
    bst: {
        hp: 90,
        atk: 60,
        def: 60,
        satk: 40,
        sdef: 40,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.donphan, level: evolutionLevel2 } } },
}

pkmn.donphan = {
    type: ["ground"],
    bst: {
        hp: 90,
        atk: 120,
        def: 120,
        satk: 60,
        sdef: 60,
        spe: 50,
    }
}

// 233 Porygon2

// 234 Stantler → Wyrdeer
pkmn.stantler = {
    type: ["normal"],
    bst: {
        hp: 73,
        atk: 95,
        def: 62,
        satk: 85,
        sdef: 65,
        spe: 85,
    },
    signature : move.psyshieldBash
}

pkmn.wyrdeer = {
    type: ["normal", "psychic"],
    bst: {
        hp: 103,
        atk: 105,
        def: 72,
        satk: 105,
        sdef: 75,
        spe: 65,
    },
    signature : move.psyshieldBash,
    hiddenAbility: ability.pixiePelt,
}

// 235 Smeargle
pkmn.smeargle = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 20,
        def: 35,
        satk: 20,
        sdef: 45,
        spe: 75,
    },
    hiddenAbility: ability.moody,
    signature : move.sketch
}

// 236 Tyrogue
// 237 Hitmontop
// 238 Smoochum
// 239 Elekid
// 240 Magby

// 241 Miltank
pkmn.miltank = {
    type: ["normal"],
    bst: {
        hp: 95,
        atk: 80,
        def: 105,
        satk: 40,
        sdef: 70,
        spe: 100,
    },
    hiddenAbility: ability.stamina,
}

// 242 Blissey

// 243 Raikou
pkmn.raikou = {
    type: ["electric"],
    bst: {
        hp: 90,
        atk: 85,
        def: 75,
        satk: 115,
        sdef: 100,
        spe: 115,
    },
    eggMove : move.charge
}

// 244 Entei
pkmn.entei = {
    type: ["fire"],
    bst: {
        hp: 115,
        atk: 115,
        def: 85,
        satk: 90,
        sdef: 75,
        spe: 100,
    }
}

// 245 Suicune
pkmn.suicune = {
    type: ["water"],
    bst: {
        hp: 100,
        atk: 75,
        def: 115,
        satk: 90,
        sdef: 115,
        spe: 85,
    }
}

// 246 Larvitar → Pupitar → Tyranitar
pkmn.larvitar = {
    type: ["rock","ground"],
    bst: {
        hp: 50,
        atk: 64,
        def: 50,
        satk: 45,
        sdef: 50,
        spe: 41,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pupitar, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandStream,
}

pkmn.pupitar = {
    type: ["rock","ground"],
    bst: {
        hp: 70,
        atk: 84,
        def: 70,
        satk: 65,
        sdef: 70,
        spe: 51,
    },
    evolve: function() { return { 1: { pkmn: pkmn.tyranitar, level: evolutionLevel3 } } },
    hiddenAbility: ability.sandStream,
}

pkmn.tyranitar = {
    type: ["rock","dark"],
    bst: {
        hp: 100,
        atk: 134,
        def: 110,
        satk: 95,
        sdef: 100,
        spe: 61,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaTyranitar, item: item.tyranitarite } } },
    hiddenAbility: ability.sandStream,
}

pkmn.megaTyranitar = {
    type: ["rock","dark"],
    bst: {
        hp: 100,
        atk: 164,
        def: 150,
        satk: 95,
        sdef: 120,
        spe: 71,
    },
    hiddenAbility: ability.sandStream,
}

// 249 Lugia
pkmn.lugia = {
    type: ["psychic","flying"],
    bst: {
        hp: 106,
        atk: 90,
        def: 130,
        satk: 90,
        sdef: 154,
        spe: 110,
    },
    signature: move.aeroblast
}

// 250 Ho-oh
pkmn.hooh = {
    type: ["fire","flying"],
    bst: {
        hp: 106,
        atk: 130,
        def: 90,
        satk: 110,
        sdef: 154,
        spe: 90,
    },
    signature: move.sacredFire

}

// 251 Celebi
pkmn.celebi = {
    type: ["psychic","grass"],
    bst: {
        hp: 100,
        atk: 100,
        def: 100,
        satk: 100,
        sdef: 100,
        spe: 100,
    },
    hiddenAbility: ability.grassySurge,
    lore: `Traveling through time and appearing where the past and future meet, it preserves the natural order, ensuring that the cycles of life, growth, and seasons continue uninterrupted.`
}

// 252 Treecko → Grovyle → Sceptile
pkmn.treecko = {
    type: ["grass"],
    bst: {
        hp: 40,
        atk: 45,
        def: 35,
        satk: 65,
        sdef: 55,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.grovyle, level: evolutionLevel1 } } },
    hiddenAbility: ability.tintedLens,
    eggMove : move.dragonDarts
}

pkmn.grovyle = {
    type: ["grass"],
    bst: {
        hp: 50,
        atk: 65,
        def: 45,
        satk: 85,
        sdef: 65,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sceptile, level: evolutionLevel2 } } },
    hiddenAbility: ability.tintedLens,
    eggMove : move.dragonDarts
}

pkmn.sceptile = {
    type: ["grass"],
    bst: {
        hp: 70,
        atk: 85,
        def: 65,
        satk: 105,
        sdef: 85,
        spe: 120,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSceptile, item: item.sceptilite } } },
    hiddenAbility: ability.tintedLens,
    eggMove : move.dragonDarts
}

pkmn.megaSceptile = {
    type: ["grass","dragon"],
    bst: {
        hp: 80,
        atk: 110,
        def: 85,
        satk: 155,
        sdef: 85,
        spe: 155,
    },
    hiddenAbility: ability.tintedLens,
    eggMove : move.dragonDarts
}

// 255 Torchic → Combusken → Blaziken
pkmn.torchic = {
    type: ["fire"],
    bst: {
        hp: 45,
        atk: 60,
        def: 40,
        satk: 70,
        sdef: 50,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.combusken, level: evolutionLevel1 } } },
    signature : move.blazeKick,
    hiddenAbility: ability.speedBoost,
}

pkmn.combusken = {
    type: ["fire","fighting"],
    bst: {
        hp: 60,
        atk: 85,
        def: 60,
        satk: 85,
        sdef: 60,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.blaziken, level: evolutionLevel2 } } },
    signature : move.blazeKick,
    hiddenAbility: ability.speedBoost,
}

pkmn.blaziken = {
    type: ["fire","fighting"],
    bst: {
        hp: 80,
        atk: 120,
        def: 70,
        satk: 110,
        sdef: 70,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaBlaziken, item: item.blazikenite } } },
    signature : move.blazeKick,
    hiddenAbility: ability.speedBoost,
}

pkmn.megaBlaziken = {
    type: ["fire","fighting"],
    bst: {
        hp: 80,
        atk: 160,
        def: 80,
        satk: 130,
        sdef: 80,
        spe: 100,
    },
    signature : move.blazeKick,
    hiddenAbility: ability.speedBoost,
}

// 258 Mudkip → Marshtomp → Swampert
pkmn.mudkip = {
    type: ["water"],
    bst: {
        hp: 50,
        atk: 70,
        def: 50,
        satk: 50,
        sdef: 50,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.marshtomp, level: evolutionLevel1 } } },
    hiddenAbility: ability.swiftSwim,
    eggMove : move.crabhammer
}

pkmn.marshtomp = {
    type: ["water","ground"],
    bst: {
        hp: 80,
        atk: 85,
        def: 70,
        satk: 60,
        sdef: 70,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.swampert, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
    eggMove : move.crabhammer
}

pkmn.swampert = {
    type: ["water","ground"],
    bst: {
        hp: 100,
        atk: 110,
        def: 90,
        satk: 85,
        sdef: 90,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSwampert, item: item.swampertite } } },
    hiddenAbility: ability.swiftSwim,
    eggMove : move.crabhammer
}

pkmn.megaSwampert = {
    type: ["water","ground"],
    bst: {
        hp: 100,
        atk: 150,
        def: 110,
        satk: 95,
        sdef: 110,
        spe: 70,
    },
    hiddenAbility: ability.swiftSwim,
    eggMove : move.crabhammer
}

// 261 Poochyena → Mightyena
pkmn.poochyena = {
    type: ["dark"],
    bst: {
        hp: 35,
        atk: 55,
        def: 35,
        satk: 30,
        sdef: 30,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mightyena, level: evolutionLevel1 } } },
    hiddenAbility: ability.moxie,
    signature : move.howl
}

pkmn.mightyena = {
    type: ["dark"],
    bst: {
        hp: 70,
        atk: 90,
        def: 70,
        satk: 60,
        sdef: 60,
        spe: 70,
    },
    hiddenAbility: ability.moxie,
    signature : move.howl
}

// 263 Zigzagoon → Linoone / Galarian Zigzagoon → Galarian Linoone → Obstagoon
pkmn.zigzagoon = {
    type: ["normal"],
    bst: {
        hp: 38,
        atk: 30,
        def: 41,
        satk: 30,
        sdef: 41,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.linoone, level: evolutionLevel1 } } },
    variants: function() { return [pkmn.galarianZigzagoon] },
}

pkmn.galarianZigzagoon = {
    type: ["dark", "normal"],
    bst: {
        hp: 38,
        atk: 30,
        def: 41,
        satk: 30,
        sdef: 41,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.galarianLinoone, level: evolutionLevel1 } } },
    hiddenAbility: ability.blackPelt,
    variants: function() { return [pkmn.galarianLinoone] },
}

pkmn.linoone = {
    type: ["normal"],
    bst: {
        hp: 78,
        atk: 70,
        def: 61,
        satk: 50,
        sdef: 61,
        spe: 100,
    }
}

pkmn.galarianLinoone = {
    type: ["dark", "normal"],
    bst: {
        hp: 78,
        atk: 70,
        def: 61,
        satk: 50,
        sdef: 61,
        spe: 100,
    },
    evolve: function() { return { 1: { pkmn: pkmn.obstagoon, level: evolutionLevel3 } } },
    hiddenAbility: ability.blackPelt,
}

pkmn.obstagoon = {
  type: ["dark","normal"],
  bst: {
    hp: 93,
    atk: 90,
    def: 101,
    satk: 60,
    sdef: 81,
    spe: 95,
  },
    hiddenAbility: ability.guts,
}

// 265 Wurmple → Silcoon / Cascoon → Beautifly / Dustox
pkmn.wurmple = {
    type: ["bug"],
    bst: {
        hp: 45,
        atk: 45,
        def: 35,
        satk: 20,
        sdef: 30,
        spe: 20,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.silcoon, item: item.shinyStone }, 
            2: { pkmn: pkmn.cascoon, item: item.sunStone } 
        } 
    },
    hiddenAbility: ability.rivalry,
}

pkmn.silcoon = {
    type: ["bug"],
    bst: {
        hp: 50,
        atk: 35,
        def: 55,
        satk: 25,
        sdef: 25,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.beautifly, level: evolutionLevel1 } } },
    hiddenAbility: ability.rivalry,
}

pkmn.beautifly = {
    type: ["bug","flying"],
    bst: {
        hp: 60,
        atk: 70,
        def: 50,
        satk: 100,
        sdef: 50,
        spe: 65,
    },
    hiddenAbility: ability.galeWings,
}

pkmn.cascoon = {
    type: ["bug"],
    bst: {
        hp: 50,
        atk: 35,
        def: 55,
        satk: 25,
        sdef: 25,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dustox, level: evolutionLevel1 } } },
    hiddenAbility: ability.moltShed,
}

pkmn.dustox = {
    type: ["bug","poison"],
    bst: {
        hp: 80,
        atk: 50,
        def: 80,
        satk: 80,
        sdef: 90,
        spe: 65,
    },
    hiddenAbility: ability.moltShed,
}

// 270 Lotad → Lombre → Ludicolo
pkmn.lotad = {
    type: ["water","grass"],
    bst: {
        hp: 40,
        atk: 30,
        def: 30,
        satk: 40,
        sdef: 50,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lombre, level: evolutionLevel1 } } },
    hiddenAbility: ability.drizzle,
    eggMove : move.aquaStep
}

pkmn.lombre = {
    type: ["water","grass"],
    bst: {
        hp: 60,
        atk: 50,
        def: 50,
        satk: 60,
        sdef: 70,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ludicolo, item: item.waterStone } } },
    hiddenAbility: ability.drizzle,
    eggMove : move.aquaStep
}

pkmn.ludicolo = {
    type: ["water","grass"],
    bst: {
        hp: 80,
        atk: 70,
        def: 70,
        satk: 90,
        sdef: 100,
        spe: 70,
    },
    hiddenAbility: ability.drizzle,
    eggMove : move.aquaStep
}



// 273 Seedot → Nuzleaf → Shiftry
pkmn.seedot = {
    type: ["grass"],
    bst: {
        hp: 40,
        atk: 40,
        def: 50,
        satk: 30,
        sdef: 30,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.nuzleaf, level: evolutionLevel1 } } },
    hiddenAbility: ability.windRider,
}

pkmn.nuzleaf = {
    type: ["grass","dark"],
    bst: {
        hp: 70,
        atk: 70,
        def: 40,
        satk: 60,
        sdef: 40,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.shiftry, item: item.leafStone } } },
    hiddenAbility: ability.windRider,
}

pkmn.shiftry = {
    type: ["grass","dark"],
    bst: {
        hp: 90,
        atk: 100,
        def: 60,
        satk: 90,
        sdef: 60,
        spe: 80,
    },
    hiddenAbility: ability.windRider,
}

// 276 Taillow → Swellow
pkmn.taillow = {
    type: ["normal","flying"],
    bst: {
        hp: 40,
        atk: 55,
        def: 30,
        satk: 30,
        sdef: 30,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.swellow, level: evolutionLevel1 } } },
    hiddenAbility: ability.guts,
}

pkmn.swellow = {
    type: ["normal","flying"],
    bst: {
        hp: 60,
        atk: 85,
        def: 60,
        satk: 50,
        sdef: 50,
        spe: 125,
    },
    hiddenAbility: ability.guts,
}

// 278 Wingull → Pelipper
pkmn.wingull = {
    type: ["water","flying"],
    bst: {
        hp: 40,
        atk: 30,
        def: 30,
        satk: 55,
        sdef: 30,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pelipper, level: evolutionLevel2 } } },
    hiddenAbility: ability.drizzle,
}

pkmn.pelipper = {
    type: ["water","flying"],
    bst: {
        hp: 60,
        atk: 50,
        def: 100,
        satk: 85,
        sdef: 70,
        spe: 65,
    },
    hiddenAbility: ability.drizzle,
}

// 280 Ralts → Kirlia → Gardevoir / Gallade
pkmn.ralts = {
    type: ["psychic","fairy"],
    bst: {
        hp: 28,
        atk: 25,
        def: 25,
        satk: 45,
        sdef: 35,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kirlia, level: evolutionLevel1 } } },
    hiddenAbility: ability.pixilate,
}

pkmn.kirlia = {
    type: ["psychic","fairy"],
    bst: {
        hp: 38,
        atk: 35,
        def: 35,
        satk: 65,
        sdef: 55,
        spe: 50,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.gardevoir, level: evolutionLevel2 },
            2: { pkmn: pkmn.gallade, item: item.dawnStone }
        } 
    },
    hiddenAbility: ability.pixilate,
}

pkmn.gardevoir = {
    type: ["psychic","fairy"],
    bst: {
        hp: 68,
        atk: 65,
        def: 65,
        satk: 125,
        sdef: 115,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGardevoir, item: item.gardevoirite } } },
    hiddenAbility: ability.pixilate,
}

pkmn.megaGardevoir = {
    type: ["psychic","fairy"],
    bst: {
        hp: 78,
        atk: 85,
        def: 65,
        satk: 165,
        sdef: 155,
        spe: 110,
    },
    hiddenAbility: ability.pixilate,
}

pkmn.gallade = {
    type: ["psychic","fighting"],
    bst: {
        hp: 68,
        atk: 125,
        def: 65,
        satk: 65,
        sdef: 115,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGallade, item: item.galladite } } },
    hiddenAbility: ability.supremeOverlord,
}

pkmn.megaGallade = {
    type: ["psychic","fighting"],
    bst: {
        hp: 78,
        atk: 165,
        def: 105,
        satk: 65,
        sdef: 115,
        spe: 110,
    },
    hiddenAbility: ability.supremeOverlord,
}

// 283 Surskit → Masquerain
pkmn.surskit = {
    type: ["bug","water"],
    bst: {
        hp: 40,
        atk: 30,
        def: 32,
        satk: 50,
        sdef: 52,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.masquerain, level: evolutionLevel1 } } },
    hiddenAbility: ability.simple,
}

pkmn.masquerain = {
    type: ["bug","flying"],
    bst: {
        hp: 70,
        atk: 60,
        def: 62,
        satk: 80,
        sdef: 82,
        spe: 80,
    },
    hiddenAbility: ability.galeWings,
}

// 285 Shroomish → Breloom
pkmn.shroomish = {
    type: ["grass"],
    bst: {
        hp: 60,
        atk: 40,
        def: 60,
        satk: 40,
        sdef: 60,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.breloom, level: evolutionLevel1 } } },
    hiddenAbility: ability.colorSpore,
}

pkmn.breloom = {
    type: ["grass","fighting"],
    bst: {
        hp: 60,
        atk: 130,
        def: 80,
        satk: 60,
        sdef: 60,
        spe: 70,
    },
    hiddenAbility: ability.colorSpore,
}

// 287 Slakoth → Vigoroth → Slaking
pkmn.slakoth = {
    type: ["normal"],
    bst: {
        hp: 60,
        atk: 60,
        def: 60,
        satk: 35,
        sdef: 35,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.vigoroth, level: evolutionLevel1 } } },
    hiddenAbility: ability.sheerForce,
}

pkmn.vigoroth = {
    type: ["normal"],
    bst: {
        hp: 80,
        atk: 80,
        def: 80,
        satk: 55,
        sdef: 55,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.slaking, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
}

pkmn.slaking = {
    type: ["normal"],
    bst: {
        hp: 120,
        atk: 140,
        def: 100,
        satk: 95,
        sdef: 65,
        spe: 0,
    },
    hiddenAbility: ability.sheerForce,
}

// 290 Nincada → Ninjask / Shedinja
pkmn.nincada = {
    type: ["bug","ground"],
    bst: {
        hp: 31,
        atk: 45,
        def: 90,
        satk: 30,
        sdef: 30,
        spe: 40,
    },
    evolve: function() { 
        return { 1: { pkmn: pkmn.ninjask, level: evolutionLevel1 },
                 2: { pkmn: pkmn.shedinja, item: item.oddRock } }
    },
    hiddenAbility: ability.speedBoost,
}

pkmn.ninjask = {
    type: ["bug","flying"],
    bst: {
        hp: 61,
        atk: 90,
        def: 45,
        satk: 50,
        sdef: 50,
        spe: 160,
    },
    hiddenAbility: ability.speedBoost,
}

pkmn.shedinja = {
    type: ["bug","ghost"],
    bst: {
        hp: 1,
        atk: 90,
        def: 45,
        satk: 30,
        sdef: 30,
        spe: 40,
    },
    hiddenAbility: ability.wonderGuard,
    eggMove : move.shadowForce,
}

// 293 Whismur → Loudred → Exploud
pkmn.whismur = {
    type: ["normal"],
    bst: {
        hp: 64,
        atk: 51,
        def: 23,
        satk: 51,
        sdef: 23,
        spe: 28,
    },
    evolve: function() { return { 1: { pkmn: pkmn.loudred, level: evolutionLevel1 } } },
    signature : move.boomburst,
    hiddenAbility: ability.cacophony,
}

pkmn.loudred = {
    type: ["normal"],
    bst: {
        hp: 84,
        atk: 71,
        def: 43,
        satk: 71,
        sdef: 43,
        spe: 48,
    },
    evolve: function() { return { 1: { pkmn: pkmn.exploud, level: evolutionLevel3 } } },
    signature : move.boomburst,
    hiddenAbility: ability.cacophony,
}

pkmn.exploud = {
    type: ["normal"],
    bst: {
        hp: 104,
        atk: 91,
        def: 63,
        satk: 91,
        sdef: 73,
        spe: 68,
    },
    signature : move.boomburst,
    hiddenAbility: ability.cacophony,
}

// 296 Makuhita → Hariyama
pkmn.makuhita = {
    type: ["fighting"],
    bst: {
        hp: 72,
        atk: 60,
        def: 30,
        satk: 20,
        sdef: 30,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.hariyama, level: evolutionLevel2 } } },
    hiddenAbility: ability.noGuard,
}

pkmn.hariyama = {
    type: ["fighting"],
    bst: {
        hp: 144,
        atk: 120,
        def: 60,
        satk: 40,
        sdef: 60,
        spe: 50,
    },
    hiddenAbility: ability.noGuard,
}

// 298 Azurill

// 299 Nosepass → Probopass
pkmn.nosepass = {
    type: ["rock"],
    bst: {
        hp: 30,
        atk: 45,
        def: 135,
        satk: 45,
        sdef: 90,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.probopass, item: item.thunderStone } } },
    hiddenAbility: ability.sandyPelt,
}

pkmn.probopass = {
    type: ["rock","steel"],
    bst: {
        hp: 60,
        atk: 55,
        def: 145,
        satk: 75,
        sdef: 150,
        spe: 40,
    },
    hiddenAbility: ability.sandyPelt,
}

// 300 Skitty → Delcatty
pkmn.skitty = {
    type: ["normal"],
    bst: {
        hp: 50,
        atk: 45,
        def: 45,
        satk: 35,
        sdef: 35,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.delcatty, item: item.moonStone } } },
    hiddenAbility: ability.normalize,
}

pkmn.delcatty = {
    type: ["normal"],
    bst: {
        hp: 80,
        atk: 65,
        def: 65,
        satk: 55,
        sdef: 55,
        spe: 90,
    },
    hiddenAbility: ability.normalize,
}

// 302 Sableye
pkmn.sableye = {
    type: ["dark","ghost"],
    bst: {
        hp: 50,
        atk: 75,
        def: 75,
        satk: 65,
        sdef: 65,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSableye, item: item.sablenite } } },
    hiddenAbility: ability.prankster,
    eggMove : move.trickOrTreat,
}

pkmn.megaSableye = {
    type: ["dark","ghost"],
    bst: {
        hp: 50,
        atk: 85,
        def: 160,
        satk: 85,
        sdef: 160,
        spe: 20,
    },
    hiddenAbility: ability.prankster,
    eggMove : move.trickOrTreat,
}

// 303 Mawile
pkmn.mawile = {
    type: ["steel","fairy"],
    bst: {
        hp: 50,
        atk: 85,
        def: 85,
        satk: 55,
        sdef: 55,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaMawile, item: item.mawilite } } },
    hiddenAbility: ability.hugePower,
}

pkmn.megaMawile = {
    type: ["steel","fairy"],
    bst: {
        hp: 80,
        atk: 200,
        def: 125,
        satk: 60,
        sdef: 95,
        spe: 50,
    },
    hiddenAbility: ability.strongJaw,
}

// 304 Aron → Lairon → Aggron
pkmn.aron = {
    type: ["steel","rock"],
    bst: {
        hp: 50,
        atk: 70,
        def: 100,
        satk: 40,
        sdef: 40,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lairon, level: evolutionLevel2 } } },
    hiddenAbility: ability.metalhead,
    eggMove : move.noRetreat
}

pkmn.lairon = {
    type: ["steel","rock"],
    bst: {
        hp: 60,
        atk: 90,
        def: 140,
        satk: 50,
        sdef: 50,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.aggron, level: evolutionLevel3 } } },
    hiddenAbility: ability.metalhead,
    eggMove : move.noRetreat
}

pkmn.aggron = {
    type: ["steel","rock"],
    bst: {
        hp: 70,
        atk: 110,
        def: 180,
        satk: 60,
        sdef: 60,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAggron, item: item.aggronite } } },
    hiddenAbility: ability.metalhead,
    eggMove : move.noRetreat
}

pkmn.megaAggron = {
    type: ["steel"],
    bst: {
        hp: 70,
        atk: 140,
        def: 230,
        satk: 60,
        sdef: 80,
        spe: 50,
    },
    hiddenAbility: ability.metalhead,
    eggMove : move.noRetreat
}

// 307 Meditite → Medicham
pkmn.meditite = {
    type: ["fighting","psychic"],
    bst: {
        hp: 30,
        atk: 40,
        def: 55,
        satk: 40,
        sdef: 55,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.medicham, level: evolutionLevel2 } } },
    hiddenAbility: ability.hugePower,
    signature : move.hiJumpKick
}

pkmn.medicham = {
    type: ["fighting","psychic"],
    bst: {
        hp: 60,
        atk: 60,
        def: 75,
        satk: 60,
        sdef: 75,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaMedicham, item: item.medichamite } } },
    hiddenAbility: ability.hugePower,
    signature : move.hiJumpKick
}

pkmn.megaMedicham = {
    type: ["fighting","psychic"],
    bst: {
        hp: 60,
        atk: 160,
        def: 85,
        satk: 80,
        sdef: 85,
        spe: 100,
    },
    signature : move.hiJumpKick
}

// 309 Electrike → Manectric
pkmn.electrike = {
    type: ["electric"],
    bst: {
        hp: 40,
        atk: 45,
        def: 40,
        satk: 65,
        sdef: 40,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.manectric, level: evolutionLevel2 } } },
    hiddenAbility: ability.intimidate,
    eggMove : move.charge
}

pkmn.manectric = {
    type: ["electric"],
    bst: {
        hp: 70,
        atk: 75,
        def: 60,
        satk: 105,
        sdef: 60,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaManectric, item: item.manectite } } },
    hiddenAbility: ability.intimidate,
    eggMove : move.charge
}

pkmn.megaManectric = {
    type: ["electric"],
    bst: {
        hp: 70,
        atk: 75,
        def: 80,
        satk: 135,
        sdef: 80,
        spe: 135,
    },
    hiddenAbility: ability.intimidate,
    eggMove : move.charge
}

// 311 Plusle
pkmn.plusle = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 50,
        def: 40,
        satk: 85,
        sdef: 75,
        spe: 95,
    },
    signature : move.ionise,
    hiddenAbility: ability.spikyPelt,
}

// 312 Minun
pkmn.minun = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 40,
        def: 50,
        satk: 75,
        sdef: 85,
        spe: 95,
    },
    signature : move.ionise,
    hiddenAbility: ability.hyperconductor,
}

// 313 Volbeat
pkmn.volbeat = {
    type: ["bug"],
    bst: {
        hp: 65,
        atk: 73,
        def: 55,
        satk: 47,
        sdef: 75,
        spe: 85,
    },
    hiddenAbility: ability.dancer,
    eggMove : move.lunarDance
}

// 314 Illumise
pkmn.illumise = {
    type: ["bug"],
    bst: {
        hp: 65,
        atk: 47,
        def: 55,
        satk: 73,
        sdef: 75,
        spe: 85,
    },
    hiddenAbility: ability.dancer,
    signature : move.tailGlow
}

// 315 Roselia

// 316 Gulpin → Swalot
pkmn.gulpin = {
    type: ["poison"],
    bst: {
        hp: 70,
        atk: 43,
        def: 53,
        satk: 43,
        sdef: 53,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.swalot, level: evolutionLevel2 } } },
    hiddenAbility: ability.toxicBoost,
    signature : move.venoshock
}

pkmn.swalot = {
    type: ["poison"],
    bst: {
        hp: 100,
        atk: 73,
        def: 83,
        satk: 73,
        sdef: 83,
        spe: 55,
    },
    hiddenAbility: ability.toxicBoost,
    signature : move.venoshock
}

// 318 Carvanha → Sharpedo
pkmn.carvanha = {
    type: ["water","dark"],
    bst: {
        hp: 45,
        atk: 90,
        def: 20,
        satk: 65,
        sdef: 20,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sharpedo, level: evolutionLevel2 } } },
    hiddenAbility: ability.strongJaw,
}

pkmn.sharpedo = {
    type: ["water","dark"],
    bst: {
        hp: 70,
        atk: 120,
        def: 40,
        satk: 95,
        sdef: 40,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSharpedo, item: item.sharpedonite } } },
    hiddenAbility: ability.strongJaw,
}

pkmn.megaSharpedo = {
    type: ["water","dark"],
    bst: {
        hp: 70,
        atk: 140,
        def: 70,
        satk: 110,
        sdef: 65,
        spe: 160,
    },
    hiddenAbility: ability.strongJaw,
}

// 320 Wailmer → Wailord
pkmn.wailmer = {
    type: ["water"],
    bst: {
        hp: 130,
        atk: 70,
        def: 35,
        satk: 70,
        sdef: 35,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.wailord, level: evolutionLevel3 } } },
    hiddenAbility: ability.stamina,
}

pkmn.wailord = {
    type: ["water"],
    bst: {
        hp: 170,
        atk: 90,
        def: 45,
        satk: 90,
        sdef: 45,
        spe: 60,
    },
    hiddenAbility: ability.stamina,
}

// 322 Numel → Camerupt
pkmn.numel = {
    type: ["fire","ground"],
    bst: {
        hp: 60,
        atk: 60,
        def: 40,
        satk: 65,
        sdef: 45,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.camerupt, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.sacredFire
}

pkmn.camerupt = {
    type: ["fire","ground"],
    bst: {
        hp: 70,
        atk: 100,
        def: 70,
        satk: 105,
        sdef: 75,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaCamerupt, item: item.cameruptite } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.sacredFire
}

pkmn.megaCamerupt = {
    type: ["fire","ground"],
    bst: {
        hp: 100,
        atk: 120,
        def: 100,
        satk: 145,
        sdef: 125,
        spe: 20,
    },
    hiddenAbility: ability.sheerForce,
    eggMove : move.sacredFire
}

// 324 Torkoal
pkmn.torkoal = {
    type: ["fire"],
    bst: {
        hp: 70,
        atk: 85,
        def: 140,
        satk: 85,
        sdef: 70,
        spe: 20,
    },
    hiddenAbility: ability.drought,
    eggMove: ability.weatherBall,
}

// 325 Spoink → Grumpig
pkmn.spoink = {
    type: ["psychic"],
    bst: {
        hp: 60,
        atk: 25,
        def: 35,
        satk: 70,
        sdef: 80,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.grumpig, level: evolutionLevel2 } } },
    hiddenAbility: ability.espilate,
}

pkmn.grumpig = {
    type: ["psychic"],
    bst: {
        hp: 80,
        atk: 45,
        def: 65,
        satk: 90,
        sdef: 110,
        spe: 80,
    },
    hiddenAbility: ability.espilate,
}

// 327 Spinda
pkmn.spinda = {
    type: ["normal"],
    bst: {
        hp: 60,
        atk: 60,
        def: 60,
        satk: 60,
        sdef: 60,
        spe: 60,
    },
    hiddenAbility: ability.moody,
    eggMove : move.metronome
}

// 328 Trapinch → Vibrava → Flygon
pkmn.trapinch = {
    type: ["ground"],
    bst: {
        hp: 45,
        atk: 100,
        def: 45,
        satk: 45,
        sdef: 45,
        spe: 10,
    },
    evolve: function() { return { 1: { pkmn: pkmn.vibrava, level: evolutionLevel2 } } },
    hiddenAbility: ability.reckless,
    eggMove : move.dragonEnergy
}

pkmn.vibrava = {
    type: ["ground","dragon"],
    bst: {
        hp: 50,
        atk: 70,
        def: 50,
        satk: 50,
        sdef: 50,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.flygon, level: evolutionLevel3 } } },
    hiddenAbility: ability.reckless,
    eggMove : move.dragonEnergy
}

pkmn.flygon = {
    type: ["ground","dragon"],
    bst: {
        hp: 80,
        atk: 100,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 100,
    },
    hiddenAbility: ability.reckless,
    eggMove : move.dragonEnergy
}

// 331 Cacnea → Cacturne
pkmn.cacnea = {
    type: ["grass"],
    bst: {
        hp: 50,
        atk: 85,
        def: 40,
        satk: 85,
        sdef: 40,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.cacturne, level: evolutionLevel2 } } },
    hiddenAbility: ability.waterAbsorb,
    signature : move.needleArm
}

pkmn.cacturne = {
    type: ["grass","dark"],
    bst: {
        hp: 70,
        atk: 115,
        def: 60,
        satk: 115,
        sdef: 60,
        spe: 55,
    },
    hiddenAbility: ability.waterAbsorb,
    signature : move.needleArm
}

// 333 Swablu → Altaria
pkmn.swablu = {
    type: ["normal","flying"],
    bst: {
        hp: 45,
        atk: 40,
        def: 60,
        satk: 40,
        sdef: 75,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.altaria, level: evolutionLevel2 } } },
    hiddenAbility: ability.normalize,
    eggMove: move.aromaticMist,
}

pkmn.altaria = {
    type: ["dragon","flying"],
    bst: {
        hp: 75,
        atk: 70,
        def: 90,
        satk: 70,
        sdef: 105,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAltaria, item: item.altarianite } } },
    hiddenAbility: ability.dragonMaw,
    eggMove: move.aromaticMist,
}

pkmn.megaAltaria = {
    type: ["dragon","fairy"],
    bst: {
        hp: 75,
        atk: 110,
        def: 110,
        satk: 110,
        sdef: 105,
        spe: 80,
    },
    hiddenAbility: ability.pixilate,
    eggMove: move.aromaticMist,
}

// 335 Zangoose
pkmn.zangoose = {
    type: ["normal"],
    bst: {
        hp: 73,
        atk: 115,
        def: 60,
        satk: 60,
        sdef: 60,
        spe: 90,
    },
    hiddenAbility: ability.toxicBoost,
}

// 336 Seviper
pkmn.seviper = {
    type: ["poison"],
    bst: {
        hp: 73,
        atk: 100,
        def: 60,
        satk: 100,
        sdef: 60,
        spe: 65,
    },
    signature : move.poisonTail
}

// 337 Lunatone
pkmn.lunatone = {
    type: ["rock","psychic"],
    bst: {
        hp: 90,
        atk: 55,
        def: 65,
        satk: 95,
        sdef: 85,
        spe: 70,
    },
    hiddenAbility: ability.levitate,
    eggMove : move.lunarDance,
}

// 338 Solrock
pkmn.solrock = {
    type: ["rock","psychic"],
    bst: {
        hp: 90,
        atk: 95,
        def: 85,
        satk: 55,
        sdef: 65,
        spe: 70,
    },
    hiddenAbility: ability.levitate,
}

// 339 Barboach → Whiscash
pkmn.barboach = {
    type: ["water","ground"],
    bst: {
        hp: 50,
        atk: 48,
        def: 43,
        satk: 46,
        sdef: 41,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.whiscash, level: evolutionLevel2 } } },
    hiddenAbility : ability.rainDish
}

pkmn.whiscash = {
    type: ["water","ground"],
    bst: {
        hp: 110,
        atk: 100,
        def: 73,
        satk: 100,
        sdef: 71,
        spe: 60,
    },
    hiddenAbility : ability.rainDish
}

// 341 Corphish → Crawdaunt
pkmn.corphish = {
    type: ["water"],
    bst: {
        hp: 43,
        atk: 80,
        def: 65,
        satk: 50,
        sdef: 35,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.crawdaunt, level: evolutionLevel2 } } },
}

pkmn.crawdaunt = {
    type: ["water","dark"],
    bst: {
        hp: 63,
        atk: 120,
        def: 85,
        satk: 90,
        sdef: 55,
        spe: 55,
    }
}

// 343 Baltoy → Claydol
pkmn.baltoy = {
    type: ["ground","psychic"],
    bst: {
        hp: 40,
        atk: 40,
        def: 55,
        satk: 40,
        sdef: 70,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.claydol, level: evolutionLevel2 } } },
    hiddenAbility: ability.powerOfAlchemy,
}

pkmn.claydol = {
    type: ["ground","psychic"],
    bst: {
        hp: 60,
        atk: 70,
        def: 105,
        satk: 70,
        sdef: 120,
        spe: 75,
    },
    hiddenAbility: ability.powerOfAlchemy,
}

// 345 Lileep → Cradily
pkmn.lileep = {
    type: ["rock","grass"],
    bst: {
        hp: 66,
        atk: 41,
        def: 77,
        satk: 61,
        sdef: 87,
        spe: 23,
    },
    evolve: function() { return { 1: { pkmn: pkmn.cradily, level: evolutionLevel3 } } },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.chloroblast
}

pkmn.cradily = {
    type: ["rock","grass"],
    bst: {
        hp: 86,
        atk: 81,
        def: 97,
        satk: 81,
        sdef: 107,
        spe: 43,
    },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.chloroblast
}

// 347 Anorith → Armaldo
pkmn.anorith = {
    type: ["rock","bug"],
    bst: {
        hp: 45,
        atk: 95,
        def: 50,
        satk: 40,
        sdef: 50,
        spe: 75,
    },
    evolve: function() { return { 1: { pkmn: pkmn.armaldo, level: evolutionLevel3 } } },
    eggMove : move.rockWrecker
}

pkmn.armaldo = {
    type: ["rock","bug"],
    bst: {
        hp: 75,
        atk: 125,
        def: 100,
        satk: 70,
        sdef: 80,
        spe: 45,
    },
    eggMove : move.rockWrecker
}

// 349 Feebas → Milotic
pkmn.feebas = {
    type: ["water"],
    bst: {
        hp: 20,
        atk: 15,
        def: 20,
        satk: 10,
        sdef: 55,
        spe: 80,
    },
    hiddenAbility: ability.multiscale,
    evolve: function() { return { 1: { pkmn: pkmn.milotic, level: evolutionLevel3 } } },
}

pkmn.milotic = {
    type: ["water"],
    bst: {
        hp: 95,
        atk: 60,
        def: 79,
        satk: 100,
        sdef: 125,
        spe: 81,
    },
    hiddenAbility: ability.multiscale,
}

// 351 Castform
pkmn.castform = {
    type: ["normal"],
    bst: {
        hp: 70,
        atk: 70,
        def: 70,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    signature : move.weatherBall,
    hiddenAbility: ability.climaTact,
    variants: function() { return [pkmn.castformSunny, pkmn.castformRainy, pkmn.castformSnowy] },
}

pkmn.castformSunny = {
    type: ["fire"],
    bst: {
        hp: 70,
        atk: 70,
        def: 70,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    signature : move.weatherBall,
    hiddenAbility: ability.solarPower,
}

pkmn.castformRainy = {
    type: ["water"],
    bst: {
        hp: 70,
        atk: 70,
        def: 70,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    signature : move.weatherBall
}

pkmn.castformSnowy = {
    type: ["ice"],
    bst: {
        hp: 70,
        atk: 70,
        def: 70,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    signature : move.weatherBall
}

// 352 Kecleon
pkmn.kecleon = {
    type: ["normal"],
    bst: {
        hp: 60,
        atk: 90,
        def: 70,
        satk: 60,
        sdef: 120,
        spe: 40,
    },
    hiddenAbility: ability.protean,
}

// 353 Shuppet → Banette
pkmn.shuppet = {
    type: ["ghost"],
    bst: {
        hp: 44,
        atk: 75,
        def: 35,
        satk: 63,
        sdef: 33,
        spe: 45,
    },
    hiddenAbility: ability.prankster,
    evolve: function() { return { 1: { pkmn: pkmn.banette, level: evolutionLevel2 } } },
    eggMove : move.shadowForce,
}

pkmn.banette = {
    type: ["ghost"],
    bst: {
        hp: 64,
        atk: 115,
        def: 65,
        satk: 83,
        sdef: 63,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaBanette, item: item.banettite } } },
    hiddenAbility: ability.prankster,
    eggMove : move.shadowForce,
}

pkmn.megaBanette = {
    type: ["ghost"],
    bst: {
        hp: 64,
        atk: 165,
        def: 75,
        satk: 93,
        sdef: 83,
        spe: 75,
    },
    hiddenAbility: ability.prankster,
    eggMove : move.shadowForce,
}

// 355 Duskull → Dusclops → Dusknoir 
pkmn.duskull = {
    type: ["ghost"],
    bst: {
        hp: 20,
        atk: 40,
        def: 90,
        satk: 30,
        sdef: 90,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dusclops, level: evolutionLevel2 } } },
    hiddenAbility: ability.intangible,
    eggMove : move.spectralThief
}

pkmn.dusclops = {
    type: ["ghost"],
    bst: {
        hp: 40,
        atk: 70,
        def: 130,
        satk: 60,
        sdef: 130,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dusknoir, item: item.oddRock } } },
    hiddenAbility: ability.intangible,
    eggMove : move.spectralThief
}

pkmn.dusknoir = {
    type: ["ghost"],
    bst: {
        hp: 45,
        atk: 100,
        def: 135,
        satk: 65,
        sdef: 135,
        spe: 45,
    },
    hiddenAbility: ability.intangible,
    eggMove : move.spectralThief
}

// 357 Tropius
pkmn.tropius = {
    type: ["grass","flying"],
    bst: {
        hp: 99,
        atk: 68,
        def: 83,
        satk: 72,
        sdef: 87,
        spe: 51,
    },
    hiddenAbility: ability.galeWings,
    eggMove : move.aeroblast
}

// 358 Chingling → Chimecho
pkmn.chingling = {
    type: ["psychic"],
    bst: {
        hp: 45,
        atk: 30,
        def: 50,
        satk: 65,
        sdef: 50,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.chimecho, item: item.shinyStone } } },
    hiddenAbility: ability.cacophony,
    eggMove: move.howl,
}

pkmn.chimecho = {
    type: ["psychic"],
    bst: {
        hp: 75,
        atk: 50,
        def: 80,
        satk: 95,
        sdef: 90,
        spe: 65,
    },
    hiddenAbility: ability.cacophony,
    eggMove: move.howl,
}

pkmn.megaChimecho = {
    type: ["psychic", "steel"],
    bst: {
        hp: 75,
        atk: 50,
        def: 110,
        satk: 135,
        sdef: 120,
        spe: 65,
    },
    hiddenAbility: ability.cacophony,
    eggMove: move.howl,
}

// 359 Absol
pkmn.absol = {
    type: ["dark"],
    bst: {
        hp: 65,
        atk: 130,
        def: 60,
        satk: 75,
        sdef: 60,
        spe: 75,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAbsol, item: item.absolite } } },
    hiddenAbility: ability.sereneGrace,
}

pkmn.megaAbsol = {
    type: ["dark"],
    bst: {
        hp: 65,
        atk: 150,
        def: 60,
        satk: 115,
        sdef: 60,
        spe: 115,
    },
    hiddenAbility: ability.sereneGrace,
}

pkmn.megaAbsolZ = {
    type: ["dark", "ghost"],
    bst: {
        hp: 65,
        atk: 200,
        def: 60,
        satk: 125,
        sdef: 60,
        spe: 151,
    }
}

// 360 Wynaut

// 361 Snorunt → Glalie / Froslass
pkmn.snorunt = {
    type: ["ice"],
    bst: {
        hp: 50,
        atk: 50,
        def: 50,
        satk: 50,
        sdef: 50,
        spe: 50,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.glalie, level: evolutionLevel3 },
            2: { pkmn: pkmn.froslass, item: item.dawnStone }
        }
    },
    hiddenAbility: ability.moody,
    signature : move.snowscape
}

pkmn.snoruntEvent = {
    rename: `snorunt`,
    hidden:true,
    type: ["ice","ghost"],
    bst: {
        hp: 50,
        atk: 50,
        def: 50,
        satk: 50,
        sdef: 50,
        spe: 50,
    },
    hiddenAbility: ability.moody,
    signature : move.snowscape,
}

pkmn.glalie = {
    type: ["ice"],
    bst: {
        hp: 80,
        atk: 80,
        def: 80,
        satk: 80,
        sdef: 80,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGlalie, item: item.glalitite } } },
    hiddenAbility: ability.moody,
    signature : move.snowscape
}

pkmn.megaGlalie = {
    type: ["ice"],
    bst: {
        hp: 80,
        atk: 120,
        def: 80,
        satk: 120,
        sdef: 80,
        spe: 100,
    },
    hiddenAbility: ability.glaciate,
    signature : move.snowscape
}

pkmn.froslass = {
    type: ["ice","ghost"],
    bst: {
        hp: 70,
        atk: 80,
        def: 70,
        satk: 80,
        sdef: 70,
        spe: 110,
    },
    signature : move.snowscape,
    hiddenAbility: ability.iceBody,
}

pkmn.megaFroslass = {
    type: ["ice","ghost"],
    bst: {
        hp: 70,
        atk: 80,
        def: 70,
        satk: 140,
        sdef: 100,
        spe: 120,
    }
}

// 363 Spheal → Sealeo → Walrein
pkmn.spheal = {
    type: ["ice","water"],
    bst: {
        hp: 70,
        atk: 55,
        def: 50,
        satk: 55,
        sdef: 50,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sealeo, level: evolutionLevel2 } } },
    hiddenAbility: ability.icyPelt,
    eggMove: move.mountainGale,
}

pkmn.sealeo = {
    type: ["ice","water"],
    bst: {
        hp: 90,
        atk: 75,
        def: 70,
        satk: 75,
        sdef: 70,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.walrein, level: evolutionLevel3 } } },
    hiddenAbility: ability.icyPelt,
    eggMove: move.mountainGale,
}

pkmn.walrein = {
    type: ["ice","water"],
    bst: {
        hp: 110,
        atk: 95,
        def: 90,
        satk: 95,
        sdef: 90,
        spe: 65,
    },
    hiddenAbility: ability.icyPelt,
    eggMove: move.mountainGale,
}

// 366 Clamperl → Huntail / Gorebyss
pkmn.clamperl = {
    type: ["water"],
    bst: {
        hp: 35,
        atk: 64,
        def: 85,
        satk: 74,
        sdef: 55,
        spe: 32,
    },
    evolve: function() {
        return {
            1: { pkmn: pkmn.huntail, item: item.waterStone },
            2: { pkmn: pkmn.gorebyss, item: item.oddRock }
        } 
    },
    hiddenAbility: ability.drizzle,
    eggMove: ability.weatherBall,
}

pkmn.huntail = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 104,
        def: 105,
        satk: 94,
        sdef: 75,
        spe: 52,
    },
    eggMove : move.batonPass,
    hiddenAbility: ability.simple,
}

pkmn.gorebyss = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 84,
        def: 105,
        satk: 114,
        sdef: 75,
        spe: 52,
    },
    hiddenAbility: ability.drizzle,
    eggMove: ability.weatherBall,
}

// 369 Relicanth
pkmn.relicanth = {
    type: ["water","rock"],
    bst: {
        hp: 100,
        atk: 90,
        def: 130,
        satk: 45,
        sdef: 65,
        spe: 55,
    },
    hiddenAbility: ability.metalhead,
    eggMove: ability.rockWrecker,
}

// 370 Luvdisc
pkmn.luvdisc = {
    type: ["water"],
    bst: {
        hp: 43,
        atk: 30,
        def: 55,
        satk: 40,
        sdef: 65,
        spe: 97,
    },
    hiddenAbility: ability.multiscale,
}

// 371 Bagon → Shelgon → Salamence
pkmn.bagon = {
    type: ["dragon"],
    bst: {
        hp: 45,
        atk: 75,
        def: 60,
        satk: 40,
        sdef: 30,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.shelgon, level: evolutionLevel2 } } },
    hiddenAbility: ability.moxie,
}

pkmn.shelgon = {
    type: ["dragon"],
    bst: {
        hp: 65,
        atk: 95,
        def: 100,
        satk: 60,
        sdef: 50,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.salamence, level: evolutionLevel3 } } },
    hiddenAbility: ability.moxie,
}

pkmn.salamence = {
    type: ["dragon","flying"],
    bst: {
        hp: 95,
        atk: 135,
        def: 80,
        satk: 110,
        sdef: 80,
        spe: 100,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSalamence, item: item.salamencite } } },
    hiddenAbility: ability.moxie,
}

pkmn.megaSalamence = {
    type: ["dragon","flying"],
    bst: {
        hp: 95,
        atk: 145,
        def: 130,
        satk: 120,
        sdef: 90,
        spe: 120,
    },
    hiddenAbility: ability.aerilate,
}

// 374 Beldum → Metang → Metagross
pkmn.beldum = {
    type: ["steel","psychic"],
    bst: {
        hp: 40,
        atk: 55,
        def: 80,
        satk: 35,
        sdef: 60,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.metang, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
}

pkmn.metang = {
    type: ["steel","psychic"],
    bst: {
        hp: 60,
        atk: 75,
        def: 100,
        satk: 55,
        sdef: 80,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.metagross, level: evolutionLevel3 } } },
    hiddenAbility: ability.levitate,
}

pkmn.metagross = {
    type: ["steel","psychic"],
    bst: {
        hp: 80,
        atk: 135,
        def: 130,
        satk: 95,
        sdef: 90,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaMetagross, item: item.metagrossite } } },
    hiddenAbility: ability.levitate,
}

pkmn.megaMetagross = {
    type: ["steel","psychic"],
    bst: {
        hp: 80,
        atk: 145,
        def: 150,
        satk: 105,
        sdef: 110,
        spe: 110,
    },
    hiddenAbility: ability.toughClaws,
}

// 377 Regirock
pkmn.regirock = {
    type: ["rock"],
    bst: {
        hp: 80,
        atk: 100,
        def: 200,
        satk: 50,
        sdef: 100,
        spe: 50,
    },
    hiddenAbility: ability.solid,
    signature : move.zapCannon
}

// 378 Regice
pkmn.regice = {
    type: ["ice"],
    bst: {
        hp: 80,
        atk: 50,
        def: 100,
        satk: 100,
        sdef: 200,
        spe: 50,
    },
    hiddenAbility: ability.iceBody,
    signature : move.zapCannon
}

// 379 Registeel
pkmn.registeel = {
    type: ["steel"],
    bst: {
        hp: 80,
        atk: 75,
        def: 150,
        satk: 75,
        sdef: 150,
        spe: 20,
    },
    hiddenAbility: ability.bastion,
    signature : move.zapCannon
}

// 380 Latias
pkmn.latias = {
    type: ["dragon","psychic"],
    bst: {
        hp: 80,
        atk: 80,
        def: 90,
        satk: 110,
        sdef: 130,
        spe: 110,
    },
    hiddenAbility: ability.levitate,
    signature : move.mistBall
}

pkmn.megaLatias = {
    type: ["dragon","psychic"],
    bst: {
        hp: 120,
        atk: 100,
        def: 120,
        satk: 140,
        sdef: 180,
        spe: 140,
    },
    hiddenAbility: ability.levitate,
    signature : move.mistBall
}

// 381 Latios
pkmn.latios = {
    type: ["dragon","psychic"],
    bst: {
        hp: 80,
        atk: 90,
        def: 80,
        satk: 130,
        sdef: 110,
        spe: 110,
    },
    hiddenAbility: ability.levitate,
    signature : move.lusterPurge,
}

pkmn.megaLatios = {
    type: ["dragon","psychic"],
    bst: {
        hp: 120,
        atk: 140,
        def: 100,
        satk: 180,
        sdef: 120,
        spe: 140,
    },
    hiddenAbility: ability.levitate,
    signature : move.lusterPurge
}

// 382 Kyogre
pkmn.kyogre = {
    type: ["water"],
    bst: {
        hp: 100,
        atk: 100,
        def: 90,
        satk: 150,
        sdef: 140,
        spe: 90,
    },
    hiddenAbility: ability.drizzle,
    lore: `A reminder of the power that once carved the seas. Its ancient rivalry with Groudon lingers quietly, a balance written into the land and water.`
}

pkmn.kyogrePrimal = {
    type: ["water"],
    bst: {
        hp: 100,
        atk: 150,
        def: 90,
        satk: 180,
        sdef: 160,
        spe: 90,
    },
    lore: `The oceans made visible, and the force that first shaped the seas across the world. Waves rise and storms gather at its will.`
}

// 383 Groudon
pkmn.groudon = {
    type: ["ground"],
    bst: {
        hp: 100,
        atk: 150,
        def: 140,
        satk: 100,
        sdef: 90,
        spe: 90,
    },
    hiddenAbility: ability.drought,
    lore: `A reminder of the power that once carved the lands. Its ancient rivalry with Kyogre lingers quietly, a balance written into the land and water.`

}

pkmn.groudonPrimal = {
    type: ["ground","fire"],
    bst: {
        hp: 100,
        atk: 180,
        def: 160,
        satk: 150,
        sdef: 90,
        spe: 90,
    },
    lore: `The continents made whole, and the force that first shaped the land across the world. Mountains rise and deserts stretch at its will.`
}

// 384 Rayquaza
pkmn.rayquaza = {
    type: ["dragon","flying"],
    bst: {
        hp: 105,
        atk: 150,
        def: 90,
        satk: 150,
        sdef: 90,
        spe: 95,
    },
    lore: `The force that watches over the world from above. It tempers the chaos of the seas and the land, acting as a mediator between Kyogre and Groudon. The winds and currents obey its passage, and it stands as guardian of the skies.`
}

pkmn.megaRayquaza = {
    type: ["dragon","flying"],
    bst: {
        hp: 105,
        atk: 200,
        def: 120,
        satk: 200,
        sdef: 120,
        spe: 115,
    },
    lore: `Ascending the atmosphere, its reach extending into the upper skies. Protecting not only the world below but the space above, guarding against threats from beyond.`
}

// 385 Jirachi
pkmn.jirachi = {
    type: ["steel","psychic"],
    bst: {
        hp: 100,
        atk: 125,
        def: 100,
        satk: 125,
        sdef: 100,
        spe: 100,
    },
    hiddenAbility: ability.sereneGrace,
    signature : move.doomDesire,
    lore: `The embodiment of wishing, awakening only once in a thousand years. In those brief moments, it listens to the desires carried in the hearts of others, and its power brings those wishes into reality.`
}

// 386 Deoxys
pkmn.deoxys = {
    type: ["psychic"],
    bst: {
        hp: 50,
        atk: 150,
        def: 50,
        satk: 150,
        sdef: 50,
        spe: 150,
    },
    variants: function() { return [pkmn.deoxysAttack, pkmn.deoxysDefense, pkmn.deoxysSpeed] },
}

pkmn.deoxysAttack = {
    type: ["psychic"],
    bst: {
        hp: 50,
        atk: 200,
        def: 20,
        satk: 200,
        sdef: 20,
        spe: 150,
    }
}

pkmn.deoxysDefense = {
    type: ["psychic"],
    bst: {
        hp: 50,
        atk: 70,
        def: 200,
        satk: 70,
        sdef: 200,
        spe: 90,
    }
}

pkmn.deoxysSpeed = {
    type: ["psychic"],
    bst: {
        hp: 50,
        atk: 115,
        def: 90,
        satk: 115,
        sdef: 90,
        spe: 200,
    }
}

// 387 Turtwig → Grotle → Torterra
pkmn.turtwig = {
    type: ["grass"],
    bst: {
        hp: 55,
        atk: 68,
        def: 64,
        satk: 45,
        sdef: 55,
        spe: 31,
    },
    evolve: function() { return { 1: { pkmn: pkmn.grotle, level: evolutionLevel1 } } },
}

pkmn.grotle = {
    type: ["grass"],
    bst: {
        hp: 75,
        atk: 89,
        def: 85,
        satk: 55,
        sdef: 65,
        spe: 36,
    },
    evolve: function() { return { 1: { pkmn: pkmn.torterra, level: evolutionLevel2 } } },
}

pkmn.torterra = {
    type: ["grass","ground"],
    bst: {
        hp: 95,
        atk: 109,
        def: 105,
        satk: 75,
        sdef: 85,
        spe: 56,
    }
}

// 390 Chimchar → Monferno → Infernape
pkmn.chimchar = {
    type: ["fire"],
    bst: {
        hp: 44,
        atk: 58,
        def: 44,
        satk: 58,
        sdef: 44,
        spe: 61,
    },
    evolve: function() { return { 1: { pkmn: pkmn.monferno, level: evolutionLevel1 } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.blazeKick
}

pkmn.monferno = {
    type: ["fire","fighting"],
    bst: {
        hp: 64,
        atk: 78,
        def: 52,
        satk: 78,
        sdef: 52,
        spe: 81,
    },
    evolve: function() { return { 1: { pkmn: pkmn.infernape, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.blazeKick
}

pkmn.infernape = {
    type: ["fire","fighting"],
    bst: {
        hp: 76,
        atk: 104,
        def: 71,
        satk: 104,
        sdef: 71,
        spe: 108,
    },
    hiddenAbility: ability.sheerForce,
    eggMove : move.blazeKick
}

// 393 Piplup → Prinplup → Empoleon
pkmn.piplup = {
    type: ["water"],
    bst: {
        hp: 53,
        atk: 51,
        def: 53,
        satk: 61,
        sdef: 56,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.prinplup, level: evolutionLevel1 } } },
    hiddenAbility: ability.supremeOverlord,
}

pkmn.prinplup = {
    type: ["water"],
    bst: {
        hp: 64,
        atk: 66,
        def: 68,
        satk: 81,
        sdef: 76,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.empoleon, level: evolutionLevel2 } } },
    hiddenAbility: ability.supremeOverlord,
}

pkmn.empoleon = {
    type: ["water","steel"],
    bst: {
        hp: 84,
        atk: 86,
        def: 88,
        satk: 111,
        sdef: 101,
        spe: 60,
    },
    hiddenAbility: ability.supremeOverlord,
}

// 396 Starly → Staravia → Staraptor
pkmn.starly = {
    type: ["normal","flying"],
    bst: {
        hp: 40,
        atk: 55,
        def: 30,
        satk: 30,
        sdef: 30,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.staravia, level: evolutionLevel1 } } },
    hiddenAbility: ability.reckless,
    signature : move.braveBird
}

pkmn.staravia = {
    type: ["normal","flying"],
    bst: {
        hp: 55,
        atk: 75,
        def: 50,
        satk: 40,
        sdef: 40,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.staraptor, level: evolutionLevel2 } } },
    hiddenAbility: ability.reckless,
    signature : move.braveBird
}

pkmn.staraptor = {
    type: ["normal","flying"],
    bst: {
        hp: 85,
        atk: 120,
        def: 70,
        satk: 50,
        sdef: 60,
        spe: 100,
    },
    hiddenAbility: ability.reckless,
    signature : move.braveBird
}

pkmn.megaStaraptor = {
    type: ["fighting","flying"],
    bst: {
        hp: 85,
        atk: 140,
        def: 100,
        satk: 60,
        sdef: 90,
        spe: 110,
    }
}

// 399 Bidoof → Bibarel
pkmn.bidoof = {
    type: ["normal"],
    bst: {
        hp: 59,
        atk: 45,
        def: 40,
        satk: 35,
        sdef: 40,
        spe: 31,
    },
    evolve: function() { return { 1: { pkmn: pkmn.bibarel, level: evolutionLevel1 } } },
    hiddenAbility: ability.simple,
    eggMove : move.aquaStep
}

pkmn.bibarel = {
    type: ["normal","water"],
    bst: {
        hp: 79,
        atk: 85,
        def: 60,
        satk: 55,
        sdef: 60,
        spe: 71,
    },
    hiddenAbility: ability.simple,
    eggMove : move.aquaStep
}

// 401 Kricketot → Kricketune
pkmn.kricketot = {
    type: ["bug"],
    bst: {
        hp: 37,
        atk: 25,
        def: 41,
        satk: 25,
        sdef: 41,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kricketune, level: evolutionLevel1 } } },
    hiddenAbility: ability.metalhead,
    eggMove : move.megahorn
}

pkmn.kricketune = {
    type: ["bug"],
    bst: {
        hp: 77,
        atk: 85,
        def: 51,
        satk: 55,
        sdef: 51,
        spe: 65,
    },
    hiddenAbility: ability.metalhead,
    eggMove : move.megahorn
}

// 403 Shinx → Luxio → Luxray
pkmn.shinx = {
    type: ["electric"],
    bst: {
        hp: 45,
        atk: 65,
        def: 34,
        satk: 40,
        sdef: 34,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.luxio, level: evolutionLevel1 } } },
    hiddenAbility: ability.guts,
    signature : move.charge
}

pkmn.luxio = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 85,
        def: 49,
        satk: 60,
        sdef: 49,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.luxray, level: evolutionLevel2 } } },
    hiddenAbility: ability.guts,
    signature : move.charge
}

pkmn.luxray = {
    type: ["electric"],
    bst: {
        hp: 80,
        atk: 120,
        def: 79,
        satk: 95,
        sdef: 79,
        spe: 70,
    },
    hiddenAbility: ability.guts,
    signature : move.charge
}

// 406 Budew → Roselia → Roserade
pkmn.budew = {
    type: ["grass","poison"],
    bst: {
        hp: 40,
        atk: 30,
        def: 35,
        satk: 50,
        sdef: 70,
        spe: 55,
    },
    hiddenAbility: ability.grassySurge,
    evolve: function() { return { 1: { pkmn: pkmn.roselia, level: evolutionLevel1 } } },
}

pkmn.roselia = {
    type: ["grass","poison"],
    bst: {
        hp: 50,
        atk: 60,
        def: 45,
        satk: 100,
        sdef: 80,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.roserade, item: item.shinyStone } } },
    hiddenAbility: ability.grassySurge,
}

pkmn.roserade = {
    type: ["grass","poison"],
    bst: {
        hp: 60,
        atk: 70,
        def: 65,
        satk: 125,
        sdef: 105,
        spe: 90,
    },
    hiddenAbility: ability.grassySurge,
}

// 408 Cranidos → Rampardos
pkmn.cranidos = {
    type: ["rock"],
    bst: {
        hp: 67,
        atk: 125,
        def: 40,
        satk: 30,
        sdef: 30,
        spe: 58,
    },
    evolve: function() { return { 1: { pkmn: pkmn.rampardos, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
}

pkmn.rampardos = {
    type: ["rock"],
    bst: {
        hp: 97,
        atk: 165,
        def: 60,
        satk: 65,
        sdef: 50,
        spe: 58,
    },
    hiddenAbility: ability.sheerForce,
}

// 410 Shieldon → Bastiodon
pkmn.shieldon = {
    type: ["rock","steel"],
    bst: {
        hp: 30,
        atk: 42,
        def: 118,
        satk: 42,
        sdef: 88,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.bastiodon, level: evolutionLevel2 } } },
    hiddenAbility: ability.metalhead,
    eggMove: ability.rockWrecker,
}

pkmn.bastiodon = {
    type: ["rock","steel"],
    bst: {
        hp: 60,
        atk: 52,
        def: 168,
        satk: 47,
        sdef: 138,
        spe: 30,
    },
    hiddenAbility: ability.metalhead,
    eggMove: ability.rockWrecker,
}

// 412 Burmy → Wormadam / Mothim
pkmn.burmy = {
    rename: `burmy Plant`,
    type: ["bug"],
    bst: {
        hp: 40,
        atk: 29,
        def: 45,
        satk: 29,
        sdef: 45,
        spe: 36,
    },
    evolve: function() {
        return {
            1: { pkmn: pkmn.wormadam, item: item.leafStone },
            2: { pkmn: pkmn.mothim, item: item.shinyStone }
        } 
    },
    variants: function() { return [pkmn.burmySandy, pkmn.burmyTrash] },
}

pkmn.burmySandy = {
    type: ["bug"],
    bst: {
        hp: 40,
        atk: 29,
        def: 45,
        satk: 29,
        sdef: 45,
        spe: 36,
    },
    evolve: function() {
        return {
            1: { pkmn: pkmn.wormadamSandy, item: item.oddRock },
            2: { pkmn: pkmn.mothim, item: item.shinyStone }
        } 
    },
    eggMove: move.mudSport,
}

pkmn.burmyTrash = {
    type: ["bug"],
    bst: {
        hp: 40,
        atk: 29,
        def: 45,
        satk: 29,
        sdef: 45,
        spe: 36,
    },
    evolve: function() {
        return {
            1: { pkmn: pkmn.wormadamTrash, item: item.metalCoat },
            2: { pkmn: pkmn.mothim, item: item.shinyStone }
        } 
    },
}

pkmn.wormadam = {
    rename: `wormadam Plant`,
    type: ["bug","grass"],
    bst: {
        hp: 60,
        atk: 79,
        def: 105,
        satk: 59,
        sdef: 85,
        spe: 36,
    },
    variants: function() { return [pkmn.wormadamSandy, pkmn.wormadamTrash] },
}

pkmn.wormadamSandy = {
    type: ["bug","ground"],
    bst: {
        hp: 60,
        atk: 59,
        def: 85,
        satk: 79,
        sdef: 105,
        spe: 36,
    },
    eggMove: move.mudSport,
}

pkmn.wormadamTrash = {
    type: ["bug","steel"],
    bst: {
        hp: 60,
        atk: 69,
        def: 95,
        satk: 69,
        sdef: 95,
        spe: 36,
    }
}

pkmn.mothim = {
    type: ["bug","flying"],
    bst: {
        hp: 70,
        atk: 94,
        def: 50,
        satk: 94,
        sdef: 50,
        spe: 66,
    },
    hiddenAbility: ability.tintedLens,
}

// 415 Combee → Vespiquen
pkmn.combee = {
    type: ["bug","flying"],
    bst: {
        hp: 30,
        atk: 30,
        def: 42,
        satk: 30,
        sdef: 42,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.vespiquen, level: evolutionLevel2 } } },
    hiddenAbility: ability.chrysilate,
    signature : move.attackOrder
}

pkmn.vespiquen = {
    type: ["bug","flying"],
    bst: {
        hp: 70,
        atk: 80,
        def: 102,
        satk: 80,
        sdef: 102,
        spe: 40,
    },
    hiddenAbility: ability.chrysilate,
    signature : move.attackOrder
}

// 417 Pachirisu
pkmn.pachirisu = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 45,
        def: 70,
        satk: 45,
        sdef: 90,
        spe: 95,
    },
    hiddenAbility: ability.simple,
    eggMove : move.auraWheel
}

// 418 Buizel → Floatzel
pkmn.buizel = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 65,
        def: 35,
        satk: 60,
        sdef: 30,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.floatzel, level: evolutionLevel2 } } },
    hiddenAbility: ability.moistPelt,
    signature : move.tripleDive
}

pkmn.floatzel = {
    type: ["water"],
    bst: {
        hp: 85,
        atk: 105,
        def: 55,
        satk: 85,
        sdef: 50,
        spe: 115,
    },
    hiddenAbility: ability.moistPelt,
    signature : move.tripleDive
}

// 420 Cherubi → Cherrim
pkmn.cherubi = {
    type: ["grass"],
    bst: {
        hp: 45,
        atk: 35,
        def: 45,
        satk: 62,
        sdef: 53,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.cherrim, level: evolutionLevel2 } } },
    hiddenAbility: ability.drought,
    eggMove : move.frenzyPlant
}

pkmn.cherrim = {
    type: ["grass"],
    bst: {
        hp: 70,
        atk: 60,
        def: 70,
        satk: 87,
        sdef: 78,
        spe: 85,
    },
    hiddenAbility: ability.drought,
    eggMove : move.frenzyPlant,
    variants: function() { return [pkmn.cherrimSunshine] },
}

pkmn.cherrimSunshine = {
    type: ["grass"],
    bst: {
        hp: 70,
        atk: 90,
        def: 70,
        satk: 87,
        sdef: 117,
        spe: 85,
    },
    hiddenAbility: ability.drought,
    eggMove : move.frenzyPlant
}

// 422 Shellos → Gastrodon
pkmn.shellos = {
    rename: `shellos West`,
    type: ["water"],
    bst: {
        hp: 76,
        atk: 48,
        def: 48,
        satk: 57,
        sdef: 62,
        spe: 34,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gastrodon, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandForce,
    variants: function() { return [pkmn.shellosEast] },
}

pkmn.shellosEast = {
    rename: `shellosEast`,
    type: ["water"],
    bst: {
        hp: 76,
        atk: 48,
        def: 48,
        satk: 57,
        sdef: 62,
        spe: 34,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gastrodonEast, level: evolutionLevel2 } } },
    hiddenAbility: ability.gooey,
}

pkmn.gastrodon = {
    rename: `gastrodonWest`,
    type: ["water","ground"],
    bst: {
        hp: 111,
        atk: 83,
        def: 68,
        satk: 92,
        sdef: 82,
        spe: 39,
    },
    hiddenAbility: ability.sandForce,
    variants: function() { return [pkmn.gastrodonEast] },
}

pkmn.gastrodonEast = {
    type: ["water","ground"],
    bst: {
        hp: 111,
        atk: 83,
        def: 68,
        satk: 92,
        sdef: 82,
        spe: 39,
    },
    hiddenAbility: ability.gooey,
}

// 424 Ambipom

// 425 Drifloon → Drifblim
pkmn.drifloon = {
    type: ["ghost","flying"],
    bst: {
        hp: 90,
        atk: 50,
        def: 34,
        satk: 60,
        sdef: 44,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.drifblim, level: evolutionLevel2 } } },
    hiddenAbility: ability.windRider,
}

pkmn.drifblim = {
    type: ["ghost","flying"],
    bst: {
        hp: 150,
        atk: 80,
        def: 44,
        satk: 90,
        sdef: 54,
        spe: 80,
    },
    hiddenAbility: ability.windRider,
}

// 427 Buneary → Lopunny
pkmn.buneary = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 66,
        def: 44,
        satk: 44,
        sdef: 56,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lopunny, level: evolutionLevel2 } } },
    hiddenAbility: ability.scrappy,
}

pkmn.lopunny = {
    type: ["normal"],
    bst: {
        hp: 65,
        atk: 76,
        def: 84,
        satk: 54,
        sdef: 96,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaLopunny, item: item.lopunnite } } },
    hiddenAbility: ability.scrappy,
    eggMove: move.hiJumpKick
}

pkmn.megaLopunny = {
    type: ["normal","fighting"],
    bst: {
        hp: 80,
        atk: 136,
        def: 94,
        satk: 54,
        sdef: 96,
        spe: 135,
    },
    hiddenAbility: ability.scrappy,
    eggMove: move.hiJumpKick
}

// 429 Mismagius
// 430 Honchkrow

// 431 Glameow → Purugly
pkmn.glameow = {
    type: ["normal"],
    bst: {
        hp: 49,
        atk: 55,
        def: 42,
        satk: 42,
        sdef: 37,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.purugly, level: evolutionLevel2 } } },
    hiddenAbility: ability.thickFat,
}

pkmn.purugly = {
    type: ["normal"],
    bst: {
        hp: 71,
        atk: 82,
        def: 64,
        satk: 64,
        sdef: 59,
        spe: 112,
    },
    hiddenAbility: ability.thickFat,
}

// 433 Chingling

// 434 Stunky → Skuntank
pkmn.stunky = {
    type: ["poison","dark"],
    bst: {
        hp: 63,
        atk: 63,
        def: 47,
        satk: 41,
        sdef: 41,
        spe: 74,
    },
    evolve: function() { return { 1: { pkmn: pkmn.skuntank, level: evolutionLevel2 } } },
}

pkmn.skuntank = {
    type: ["poison","dark"],
    bst: {
        hp: 103,
        atk: 93,
        def: 67,
        satk: 71,
        sdef: 61,
        spe: 84,
    }
}

// 436 Bronzor → Bronzong
pkmn.bronzor = {
    type: ["steel","psychic"],
    bst: {
        hp: 57,
        atk: 24,
        def: 86,
        satk: 24,
        sdef: 86,
        spe: 23,
    },
    evolve: function() { return { 1: { pkmn: pkmn.bronzong, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
}

pkmn.bronzong = {
    type: ["steel","psychic"],
    bst: {
        hp: 67,
        atk: 89,
        def: 116,
        satk: 79,
        sdef: 116,
        spe: 33,
    },
    hiddenAbility: ability.levitate,
}

// 438 Bonsly
// 439 Mime Jr.
// 440 Happiny

// 441 Chatot
pkmn.chatot = {
    type: ["normal","flying"],
    bst: {
        hp: 76,
        atk: 65,
        def: 45,
        satk: 92,
        sdef: 42,
        spe: 91,
    },
    signature : move.chatter,
    hiddenAbility: ability.cacophony,
}

// 442 Spiritomb
pkmn.spiritomb = {
    type: ["ghost","dark"],
    bst: {
        hp: 50,
        atk: 92,
        def: 108,
        satk: 92,
        sdef: 108,
        spe: 35,
    },
    hiddenAbility: ability.powerOfAlchemy,
}

// 443 Gible → Gabite → Garchomp
pkmn.gible = {
    type: ["dragon","ground"],
    bst: {
        hp: 58,
        atk: 70,
        def: 45,
        satk: 40,
        sdef: 45,
        spe: 42,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gabite, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandForce,
    eggMove: move.mudSport,
}

pkmn.gabite = {
    type: ["dragon","ground"],
    bst: {
        hp: 68,
        atk: 90,
        def: 65,
        satk: 50,
        sdef: 55,
        spe: 82,
    },
    evolve: function() { return { 1: { pkmn: pkmn.garchomp, level: evolutionLevel3 } } },
    hiddenAbility: ability.sandForce,
    eggMove: move.mudSport,
}

pkmn.garchomp = {
    type: ["dragon","ground"],
    bst: {
        hp: 108,
        atk: 130,
        def: 95,
        satk: 80,
        sdef: 85,
        spe: 102,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGarchomp, item: item.garchompite } } },
    hiddenAbility: ability.sandForce,
    eggMove: move.mudSport,
}

pkmn.megaGarchomp = {
    type: ["dragon","ground"],
    bst: {
        hp: 108,
        atk: 170,
        def: 115,
        satk: 120,
        sdef: 95,
        spe: 92,
    },
    hiddenAbility: ability.sandForce,
    eggMove: move.mudSport,
}

/*

pkmn.megaGarchompZ = {
    type: ["dragon"],
    bst: {
        hp: 108,
        atk: 130,
        def: 85,
        satk: 141,
        sdef: 85,
        spe: 151,
    }
}

*/

// 446 Munchlax

// 447 Riolu → Lucario
pkmn.riolu = {
    type: ["fighting"],
    bst: {
        hp: 40,
        atk: 70,
        def: 40,
        satk: 35,
        sdef: 40,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lucario, level: evolutionLevel2 } } },
    hiddenAbility: ability.adaptability,
}

pkmn.lucario = {
    type: ["fighting","steel"],
    bst: {
        hp: 70,
        atk: 110,
        def: 70,
        satk: 115,
        sdef: 70,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaLucario, item: item.lucarionite } } },
    hiddenAbility: ability.adaptability,
}

pkmn.megaLucario = {
    type: ["fighting","steel"],
    bst: {
        hp: 80,
        atk: 155,
        def: 98,
        satk: 155,
        sdef: 70,
        spe: 137,
    },
    hiddenAbility: ability.adaptability,
}

pkmn.megaLucarioZ = {
    type: ["fighting","steel"],
    bst: {
        hp: 80,
        atk: 135,
        def: 98,
        satk: 205,
        sdef: 70,
        spe: 207,
    },
}

// 449 Hippopotas → Hippowdon
pkmn.hippopotas = {
    type: ["ground"],
    bst: {
        hp: 68,
        atk: 72,
        def: 78,
        satk: 38,
        sdef: 42,
        spe: 32,
    },
    evolve: function() { return { 1: { pkmn: pkmn.hippowdon, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandStream,
}

pkmn.hippowdon = {
    type: ["ground"],
    bst: {
        hp: 108,
        atk: 112,
        def: 118,
        satk: 68,
        sdef: 72,
        spe: 47,
    },
    hiddenAbility: ability.sandStream,
}

// 451 Skorupi → Drapion
pkmn.skorupi = {
    type: ["poison","bug"],
    bst: {
        hp: 40,
        atk: 50,
        def: 90,
        satk: 30,
        sdef: 55,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.drapion, level: evolutionLevel3 } } },
    eggMove : move.acupressure,
    hiddenAbility: ability.merciless,
}

pkmn.drapion = {
    type: ["poison","dark"],
    bst: {
        hp: 70,
        atk: 90,
        def: 110,
        satk: 60,
        sdef: 75,
        spe: 95,
    },
    eggMove : move.acupressure,
    hiddenAbility: ability.merciless,
}

// 453 Croagunk → Toxicroak
pkmn.croagunk = {
    type: ["poison","fighting"],
    bst: {
        hp: 48,
        atk: 61,
        def: 40,
        satk: 61,
        sdef: 40,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.toxicroak, level: evolutionLevel2 } } },
    signature : move.venoshock
}

pkmn.toxicroak = {
    type: ["poison","fighting"],
    bst: {
        hp: 83,
        atk: 106,
        def: 65,
        satk: 86,
        sdef: 65,
        spe: 85,
    },
    signature : move.venoshock
}

// 455 Carnivine
pkmn.carnivine = {
    type: ["grass"],
    bst: {
        hp: 74,
        atk: 100,
        def: 72,
        satk: 100,
        sdef: 72,
        spe: 46,
    },
    signature : move.reckless,
    eggMove : move.frenzyPlant
}

// 456 Finneon → Lumineon
pkmn.finneon = {
    type: ["water"],
    bst: {
        hp: 49,
        atk: 49,
        def: 56,
        satk: 49,
        sdef: 61,
        spe: 66,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lumineon, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
}

pkmn.lumineon = {
    type: ["water"],
    bst: {
        hp: 69,
        atk: 69,
        def: 76,
        satk: 69,
        sdef: 86,
        spe: 91,
    },
    hiddenAbility: ability.swiftSwim,
}

// 458 Mantyke

// 459 Snover → Abomasnow
pkmn.snover = {
    type: ["grass","ice"],
    bst: {
        hp: 60,
        atk: 62,
        def: 50,
        satk: 62,
        sdef: 60,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.abomasnow, level: evolutionLevel3 } } },
    hiddenAbility: ability.snowWarning,
    eggMove : move.freezeDry
}

pkmn.abomasnow = {
    type: ["grass","ice"],
    bst: {
        hp: 90,
        atk: 92,
        def: 75,
        satk: 92,
        sdef: 85,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAbomasnow, item: item.abomasite } } },
    hiddenAbility: ability.snowWarning,
    eggMove : move.freezeDry
}

pkmn.megaAbomasnow = {
    type: ["grass","ice"],
    bst: {
        hp: 120,
        atk: 132,
        def: 105,
        satk: 132,
        sdef: 105,
        spe: 30,
    },
    hiddenAbility: ability.snowWarning,
    eggMove : move.freezeDry
}

// 461 Weavile
// 462 Magnezone
// 463 Lickylicky
// 464 Rhyperior
// 465 Tangrowth
// 466 Electivire
// 467 Magmortar
// 468 Togekiss
// 469 Yanmega
// 470 Leafeon
// 471 Glaceon
// 472 Gliscor
// 473 Mamoswine
// 474 Porygon-Z
// 475 Gallade
// 476 Probopass
// 477 Dusknoir
// 478 Froslass

// 479 Rotom
pkmn.rotom = {
    type: ["electric","ghost"],
    bst: {
        hp: 50,
        atk: 50,
        def: 77,
        satk: 95,
        sdef: 77,
        spe: 91,
    },
    hiddenAbility: ability.levitate,
    eggMove : move.conversion,
    variants: function() { return [pkmn.rotomHeat, pkmn.rotomWash, pkmn.rotomFrost, pkmn.rotomFan, pkmn.rotomMow] },
}

pkmn.rotomHeat = {
    type: ["electric","fire"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    },
    hiddenAbility: ability.pyrolate,
}

pkmn.rotomWash = {
    type: ["electric","water"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    },
    hiddenAbility: ability.hydrolate,
}

pkmn.rotomFrost = {
    type: ["electric","ice"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    },
    hiddenAbility: ability.glaciate,
    eggMove : move.freezeDry
}

pkmn.rotomFan = {
    type: ["electric","flying"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    },
    hiddenAbility: ability.aerilate,
}

pkmn.rotomMow = {
    type: ["electric","grass"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    },
    hiddenAbility: ability.verdify,
}

// 480 Uxie
pkmn.uxie = {
    type: ["psychic"],
    bst: {
        hp: 75,
        atk: 30,
        def: 120,
        satk: 75,
        sdef: 150,
        spe: 80,
    },
    hiddenAbility: ability.sinisterGuard,
    signature : move.mysticalPower,
    lore: `Emerged to give shape to knowledge. When the world was still new, it shared understanding with humanity, allowing thought and memory to take root. Its presence quiets turmoil to the gods of time and space.`
}

// 481 Mesprit
pkmn.mesprit = {
    type: ["psychic"],
    bst: {
        hp: 100,
        atk: 105,
        def: 105,
        satk: 105,
        sdef: 105,
        spe: 120,
    },
    hiddenAbility: ability.levitate,
    signature : move.mysticalPower,
    lore: `Emerged to give shape to emotion. When the world was still new, it shared feeling with humanity, allowing joy, sorrow, and empathy to take root. Its presence soothes unrest to the gods of time and space.`
}

// 482 Azelf
pkmn.azelf = {
    type: ["psychic"],
    bst: {
        hp: 75,
        atk: 100,
        def: 70,
        satk: 120,
        sdef: 70,
        spe: 155,
    },
    hiddenAbility: ability.prankster,
    signature : move.mysticalPower,
    lore: `Emerged to give shape to will. When the world was still new, it granted resolve to humanity, allowing action, choice, and determination to take form. Its presence steels the spirit of the gods of time and space.`
}

// 483 Dialga
pkmn.dialga = {
    type: ["steel","dragon"],
    bst: {
        hp: 100,
        atk: 120,
        def: 120,
        satk: 150,
        sdef: 100,
        spe: 90,
    },
    signature : move.roarOfTime,
    lore: `Bound by weight and limit, a shape time itself can endure. Its power yet governs past and future, though restrained, for the world cannot withstand the full measure of eternity given form.`
}

pkmn.dialgaOrigin = {
    type: ["steel","dragon"],
    bst: {
        hp: 100,
        atk: 100,
        def: 190,
        satk: 160,
        sdef: 120,
        spe: 90,
    },
    lore: `Shaped by the Original One, when the universe had yet to know its first moment, It was brought forth to give law to duration. By its heartbeat, time began to flow; by its will, past and future were torn apart and given order. Without It, all life trapped by eternal stillness.`
}

// 484 Palkia
pkmn.palkia = {
    type: ["water","dragon"],
    bst: {
        hp: 90,
        atk: 120,
        def: 100,
        satk: 150,
        sdef: 120,
        spe: 100,
    },
    signature : move.spacialRend,
    hiddenAbility: ability.supremeOverlord,
    lore: `Bound by weight and limit, a shape space itself can sustain. Its power yet governs distance and separation, though restrained, for the world cannot bear the weight of infinite breadth given form.`
}

pkmn.palkiaOrigin = {
    type: ["water","dragon"],
    bst: {
        hp: 90,
        atk: 100,
        def: 120,
        satk: 190,
        sdef: 160,
        spe: 100,
    },
    lore: `Shaped by the Original One, when the universe was yet unmeasured, It was brought forth to give form to expanse. By its existence, space became vast; by its will, distance gained meaning. Without It, the world would have no breadth, no separation between sky and land, nor any path for life to walk.`
}

// 485 Heatran
pkmn.heatran = {
    type: ["fire","steel"],
    bst: {
        hp: 91,
        atk: 90,
        def: 146,
        satk: 130,
        sdef: 106,
        spe: 77,
    },
    hiddenAbility: ability.pyrolate,
    signature : move.magmaStorm,
    lore: `Formed within the depths of the earth, it moves through molten stone and scorched caverns, shaping volcanoes among the land through heat and pressure.`
}

pkmn.megaHeatran = {
    type: ["fire","steel"],
    bst: {
        hp: 120,
        atk: 120,
        def: 106,
        satk: 175,
        sdef: 201,
        spe: 67,
    }
}

// 486 Regigigas
pkmn.regigigas = {
    type: ["normal"],
    bst: {
        hp: 200,
        atk: 160,
        def: 110,
        satk: 80,
        sdef: 110,
        spe: 50,
    },
    lore: `Regigigas moved the continents into place, hauling landmasses with ropes of stone and ice, shaping the world through sheer strength. From this labor came the order of the land, after which it fell into long slumber.`,
    hiddenAbility: ability.normalize,
    signature : move.crushGrip,
}

// 487 Giratina
pkmn.giratina = {
    type: ["ghost","dragon"],
    bst: {
        hp: 150,
        atk: 100,
        def: 120,
        satk: 100,
        sdef: 120,
        spe: 90,
    },
    signature : move.shadowForce,
    lore: `Bound by weight and limit, a shape reality can tolerate. Its power yet governs antimatter and opposition, though restrained, for the world cannot endure the force that unravels all creation made whole.`
}

pkmn.giratinaOrigin = {
    type: ["ghost","dragon"],
    bst: {
        hp: 100,
        atk: 160,
        def: 100,
        satk: 150,
        sdef: 100,
        spe: 160,
    },
    lore: `Shaped by the Original One, when the laws of creation first took form, It was born in defiance of them. Given dominion over antithesis of matter, It was cast away for its violence, bound to a world where logic collapses and direction has no meaning.`
}

// 488 Cresselia
pkmn.cresselia = {
    type: ["psychic"],
    bst: {
        hp: 150,
        atk: 70,
        def: 120,
        satk: 75,
        sdef: 130,
        spe: 85,
    },
    hiddenAbility: ability.magicGuard,
    signature : move.lunarDance,
    lore: `The embodiment of moon light. From the earliest ages, it has watched over sleep and dreams, bringing peaceful rest where darkness gathers. Its feathers dispel the nightmares born by Darkrai, as they balance the quiet rhythm of night that was set into the world.`
}

// 489 Phione
pkmn.phione = {
    type: ["water"],
    bst: {
        hp: 80,
        atk: 80,
        def: 80,
        satk: 80,
        sdef: 80,
        spe: 80,
    },
    eggMove : move.tailGlow
}

// 490 Manaphy
pkmn.manaphy = {
    type: ["water"],
    bst: {
        hp: 100,
        atk: 100,
        def: 100,
        satk: 100,
        sdef: 100,
        spe: 100,
    },
    lore: `The prince of the seas, the chosen of its kind, born with a bond that links all ocean life. It guides the creatures of the waters, preserving harmony beneath the waves.`,
    eggMove : move.tailGlow
}

// 491 Darkrai
pkmn.darkrai = {
    type: ["dark"],
    bst: {
        hp: 70,
        atk: 90,
        def: 90,
        satk: 155,
        sdef: 100,
        spe: 155,
    },
    hiddenAbility: ability.lightAbsorb,
    lore: `The embodiment of night shadow. From the earliest ages, it has been bound to dreams, drawing forth fear and unrest where its presence lingers. Nightmares follow in its wake, not by intent, but as a reflection of its nature.`
}

pkmn.megaDarkrai = {
    type: ["dark"],
    bst: {
        hp: 70,
        atk: 120,
        def: 150,
        satk: 165,
        sdef: 150,
        spe: 85,
    }
}

// 492 Shaymin
pkmn.shaymin = {
    type: ["grass"],
    bst: {
        hp: 100,
        atk: 100,
        def: 100,
        satk: 125,
        sdef: 125,
        spe: 100,
    },
    hiddenAbility: ability.verdify,
    lore: `Embodying gratitude and the renewal of life, It moves across barren lands, leaving fields of flowers in its wake and restoring the vitality of nature, bringing growth and bloom to places long abandoned.`,
    variants: function() { return [pkmn.shayminSky] },
}

pkmn.shayminSky = {
    type: ["grass", "flying"],
    bst: {
        hp: 100,
        atk: 103,
        def: 75,
        satk: 170,
        sdef: 75,
        spe: 170,
    },
    hiddenAbility: ability.verdify,
    lore: `Embodying gratitude and the renewal of life, It moves across barren lands, leaving fields of flowers in its wake and restoring the vitality of nature, bringing growth and bloom to places long abandoned.`
}

// 493 Arceus
pkmn.arceus = {
    type : ["normal"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    hiddenAbility: ability.thousandArms,
    lore: `Emerging from nothing, existence was created from its birth. Pillars that govern reality shaped by its will, and yet, only a vessel for the eye to see, and the mind to comprehend.`
}

/*

pkmn.arceusFighting = {
    type : ["fighting"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusflying = {
    type : ["flying"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusPoison = {
    type : ["poison"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusGround = {
    type : ["ground"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusRock = {
    type : ["rock"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusBug = {
    type : ["bug"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusGhost = {
    type : ["ghost"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusSteel = {
    type : ["steel"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusFire = {
    type : ["fire"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusWater = {
    type : ["water"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusGrass = {
    type : ["grass"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusElectric = {
    type : ["electric"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusPsychic = {
    type : ["psychic"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusIce = {
    type : ["ice"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusDragon = {
    type : ["dragon"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusDark = {
    type : ["dark"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusFairy = {
    type : ["fairy"],
    bst: {
    hp: 120,
    atk : 120,
    def: 120,
    satk : 120,
    sdef: 120,
    spe: 120,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

*/

// 494 Victini
pkmn.victini = {
    type: ["psychic","fire"],
    bst: {
        hp: 100,
        atk: 100,
        def: 100,
        satk: 100,
        sdef: 100,
        spe: 100,
    },
    signature : move.vCreate
}

// 495 Snivy → Servine → Serperior
pkmn.snivy = {
    type: ["grass"],
    bst: {
        hp: 45,
        atk: 45,
        def: 55,
        satk: 45,
        sdef: 55,
        spe: 63,
    },
    evolve: function() { return { 1: { pkmn: pkmn.servine, level: evolutionLevel1 } } },
    hiddenAbility: ability.contrary,
}

pkmn.servine = {
    type: ["grass"],
    bst: {
        hp: 60,
        atk: 60,
        def: 75,
        satk: 60,
        sdef: 75,
        spe: 83,
    },
    evolve: function() { return { 1: { pkmn: pkmn.serperior, level: evolutionLevel2 } } },
    hiddenAbility: ability.contrary,
}

pkmn.serperior = {
    type: ["grass"],
    bst: {
        hp: 75,
        atk: 70,
        def: 95,
        satk: 75,
        sdef: 95,
        spe: 113,
    },
    hiddenAbility: ability.contrary,
}

// 498 Tepig → Pignite → Emboar
pkmn.tepig = {
    type: ["fire"],
    bst: {
        hp: 65,
        atk: 63,
        def: 45,
        satk: 45,
        sdef: 45,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pignite, level: evolutionLevel1 } } },
    hiddenAbility: ability.fieryPelt,
    signature : move.heatCrash
}

pkmn.pignite = {
    type: ["fire","fighting"],
    bst: {
        hp: 90,
        atk: 93,
        def: 55,
        satk: 70,
        sdef: 55,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.emboar, level: evolutionLevel2 } } },
    hiddenAbility: ability.fieryPelt,
    signature : move.heatCrash
}

pkmn.emboar = {
    type: ["fire","fighting"],
    bst: {
        hp: 110,
        atk: 123,
        def: 65,
        satk: 100,
        sdef: 65,
        spe: 65,
    },
    hiddenAbility: ability.fieryPelt,
    signature : move.heatCrash
}

pkmn.megaEmboar = {
    type: ["fire","fighting"],
    bst: {
        hp: 110,
        atk: 148,
        def: 75,
        satk: 110,
        sdef: 110,
        spe: 75,
    },
    hiddenAbility: ability.fieryPelt,
    signature : move.heatCrash
}

// 501 Oshawott → Dewott → Samurott
pkmn.oshawott = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 55,
        def: 45,
        satk: 63,
        sdef: 45,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dewott, level: evolutionLevel1 } } },
    hiddenAbility: ability.iaido,
    signature : move.razorShell
}

pkmn.dewott = {
    type: ["water"],
    bst: {
        hp: 75,
        atk: 75,
        def: 60,
        satk: 83,
        sdef: 60,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.samurott, level: evolutionLevel2 } } },
    hiddenAbility: ability.iaido,
    signature : move.razorShell
}

pkmn.samurott = {
    type: ["water"],
    bst: {
        hp: 95,
        atk: 100,
        def: 85,
        satk: 108,
        sdef: 70,
        spe: 70,
    },
    hiddenAbility: ability.iaido,
    signature : move.razorShell,
    variants: function() { return [pkmn.hisuianSamurott] },
}

pkmn.hisuianSamurott = {
    type: ["water", "dark"],
    bst: {
        hp: 90,
        atk: 128,
        def: 80,
        satk: 80,
        sdef: 65,
        spe: 85,
    },
    hiddenAbility: ability.iaido,
    signature : move.razorShell
}

// 504 Patrat → Watchog
pkmn.patrat = {
  type: ["normal"],
  bst: {
    hp: 45,
    atk: 55,
    def: 39,
    satk: 35,
    sdef: 39,
    spe: 42,
  },
    evolve: function() { return { 1: { pkmn: pkmn.watchog, level: evolutionLevel1 } } },
}

pkmn.watchog = {
  type: ["normal"],
  bst: {
    hp: 60,
    atk: 85,
    def: 69,
    satk: 60,
    sdef: 69,
    spe: 77,
  },
}

// 506 Lillipup → Herdier → Stoutland
pkmn.lillipup = {
  type: ["normal"],
  bst: {
    hp: 45,
    atk: 60,
    def: 45,
    satk: 25,
    sdef: 45,
    spe: 55,
  },
  evolve: function() { return { 1: { pkmn: pkmn.herdier, level: evolutionLevel1 } } },
    hiddenAbility: ability.intimidate,
}

pkmn.herdier = {
  type: ["normal"],
  bst: {
    hp: 85,
    atk: 80,
    def: 65,
    satk: 35,
    sdef: 65,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.stoutland, level: evolutionLevel2 } } },
    hiddenAbility: ability.intimidate,
}

pkmn.stoutland = {
  type: ["normal"],
  bst: {
    hp: 85,
    atk: 110,
    def: 90,
    satk: 45,
    sdef: 90,
    spe: 80,
  },
    hiddenAbility: ability.intimidate,
}

// 509 Purrloin → Liepard
pkmn.purrloin = {
  type: ["dark"],
  bst: {
    hp: 41,
    atk: 50,
    def: 37,
    satk: 50,
    sdef: 37,
    spe: 66,
  },
  evolve: function() { return { 1: { pkmn: pkmn.liepard, level: evolutionLevel1 } } },
    hiddenAbility: ability.prankster,
}

pkmn.liepard = {
  type: ["dark"],
  bst: {
    hp: 64,
    atk: 88,
    def: 50,
    satk: 88,
    sdef: 50,
    spe: 106,
  },
    hiddenAbility: ability.prankster,
}

// 511 Pansage → Simisage
pkmn.pansage = {
  type: ["grass"],
  bst: {
    hp: 50,
    atk: 53,
    def: 48,
    satk: 53,
    sdef: 48,
    spe: 64,
  },
  evolve: function() { return { 1: { pkmn: pkmn.simisage, item: item.leafStone /* o candy si lo usas */ } } },
}

pkmn.simisage = {
  type: ["grass"],
  bst: {
    hp: 75,
    atk: 98,
    def: 63,
    satk: 98,
    sdef: 63,
    spe: 101,
  },
}

// 513 Pansear → Simisear
pkmn.pansear = {
  type: ["fire"],
  bst: {
    hp: 50,
    atk: 53,
    def: 48,
    satk: 53,
    sdef: 48,
    spe: 64,
  },
  evolve: function() { return { 1: { pkmn: pkmn.simisear, item: item.fireStone } } },
    hiddenAbility: ability.scorch,
    eggMove : move.burnUp
}

pkmn.simisear = {
  type: ["fire"],
  bst: {
    hp: 75,
    atk: 98,
    def: 63,
    satk: 98,
    sdef: 63,
    spe: 101,
  },
    hiddenAbility: ability.scorch,
    eggMove : move.burnUp
}

// 515 Panpour → Simipour
pkmn.panpour = {
  type: ["water"],
  bst: {
    hp: 50,
    atk: 53,
    def: 48,
    satk: 53,
    sdef: 48,
    spe: 64,
  },
  evolve: function() { return { 1: { pkmn: pkmn.simipour, item: item.waterStone } } },
    hiddenAbility: ability.moistPelt,
    eggMove : move.snipeShot
}

pkmn.simipour = {
  type: ["water"],
  bst: {
    hp: 75,
    atk: 98,
    def: 63,
    satk: 98,
    sdef: 63,
    spe: 101,
  },
    hiddenAbility: ability.moistPelt,
    eggMove : move.snipeShot
}

// 517 Munna → Musharna
pkmn.munna = {
  type: ["psychic"],
  bst: {
    hp: 76,
    atk: 25,
    def: 45,
    satk: 67,
    sdef: 55,
    spe: 24,
  },
  evolve: function() { return { 1: { pkmn: pkmn.musharna, item: item.dawnStone /* o equivalente */ } } },
    hiddenAbility: ability.aromaVeil,
    eggMove : move.storedPower
}

pkmn.musharna = {
  type: ["psychic"],
  bst: {
    hp: 116,
    atk: 55,
    def: 85,
    satk: 107,
    sdef: 95,
    spe: 29,
  },
    hiddenAbility: ability.aromaVeil,
    eggMove : move.storedPower
}

// 519 Pidove → Tranquill → Unfezant
pkmn.pidove = {
  type: ["normal","flying"],
  bst: {
    hp: 50,
    atk: 55,
    def: 50,
    satk: 36,
    sdef: 30,
    spe: 43,
  },
  evolve: function() { return { 1: { pkmn: pkmn.tranquill, level: evolutionLevel1 } } },
    hiddenAbility: ability.rivalry,
}

pkmn.tranquill = {
  type: ["normal","flying"],
  bst: {
    hp: 80,
    atk: 77,
    def: 62,
    satk: 50,
    sdef: 42,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.unfezant, level: evolutionLevel2 } } },
    hiddenAbility: ability.rivalry,
}

pkmn.unfezant = {
  type: ["normal","flying"],
  bst: {
    hp: 80,
    atk: 115,
    def: 80,
    satk: 65,
    sdef: 55,
    spe: 93,
  },
    hiddenAbility: ability.rivalry,
}

// 522 Blitzle → Zebstrika
pkmn.blitzle = {
  type: ["electric"],
  bst: {
    hp: 45,
    atk: 60,
    def: 32,
    satk: 50,
    sdef: 32,
    spe: 76,
  },
  evolve: function() { return { 1: { pkmn: pkmn.zebstrika, level: evolutionLevel2 } } },
    hiddenAbility: ability.hyperconductor,
}

pkmn.zebstrika = {
  type: ["electric"],
  bst: {
    hp: 75,
    atk: 100,
    def: 63,
    satk: 80,
    sdef: 63,
    spe: 116,
  },
    hiddenAbility: ability.hyperconductor,
}

// 524 Roggenrola → Boldore → Gigalith
pkmn.roggenrola = {
  type: ["rock"],
  bst: {
    hp: 55,
    atk: 75,
    def: 85,
    satk: 35,
    sdef: 35,
    spe: 15,
  },
  evolve: function() { return { 1: { pkmn: pkmn.boldore, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandForce,
    eggMove : move.rockWrecker
}

pkmn.boldore = {
  type: ["rock"],
  bst: {
    hp: 80,
    atk: 105,
    def: 105,
    satk: 50,
    sdef: 50,
    spe: 20,
  },
  evolve: function() { return { 1: { pkmn: pkmn.gigalith, item: item.linkStone/*o un objeto de “union” si lo usas*/ } } },
    hiddenAbility: ability.sandForce,
    eggMove : move.rockWrecker
}

pkmn.gigalith = {
  type: ["rock"],
  bst: {
    hp: 85,
    atk: 135,
    def: 130,
    satk: 60,
    sdef: 80,
    spe: 25,
  },
    hiddenAbility: ability.sandForce,
    eggMove : move.rockWrecker
}

// 527 Woobat → Swoobat
pkmn.woobat = {
  type: ["psychic","flying"],
  bst: {
    hp: 65,
    atk: 45,
    def: 53,
    satk: 65,
    sdef: 53,
    spe: 72,
  },
  evolve: function() { return { 1: { pkmn: pkmn.swoobat, level: evolutionLevel2 } } },
    hiddenAbility: ability.simple,
}

pkmn.swoobat = {
  type: ["psychic","flying"],
  bst: {
    hp: 87,
    atk: 55,
    def: 85,
    satk: 77,
    sdef: 85,
    spe: 134,
  },
    hiddenAbility: ability.simple,
}

// 529 Drilbur → Excadrill
pkmn.drilbur = {
  type: ["ground"],
  bst: {
    hp: 75,
    atk: 95,
    def: 40,
    satk: 30,
    sdef: 45,
    spe: 68,
  },
  evolve: function() { return { 1: { pkmn: pkmn.excadrill, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandForce,
}

pkmn.excadrill = {
  type: ["ground","steel"],
  bst: {
    hp: 110,
    atk: 135,
    def: 60,
    satk: 50,
    sdef: 65,
    spe: 88,
  },
    hiddenAbility: ability.sandForce,
}

pkmn.megaExcadrill = {
  type: ["ground","steel"],
  bst: {
    hp: 110,
    atk: 165,
    def: 100,
    satk: 65,
    sdef: 65,
    spe: 103,
  }
}

// 531 Audino
pkmn.audino = {
  type: ["normal"],
  bst: {
    hp: 109,
    atk: 70,
    def: 106,
    satk: 70,
    sdef: 106,
    spe: 50,
  },
    evolve: function() { return { 1: { pkmn: pkmn.megaAudino, item: item.audinite } } },
    signature : move.acupressure,
    hiddenAbility: ability.sweetVeil,
}

pkmn.megaAudino = {
    type: ["normal","fairy"],
    bst: {
        hp: 143,
        atk: 60,
        def: 126,
        satk: 80,
        sdef: 126,
        spe: 50,
    },
    signature : move.acupressure,
    hiddenAbility: ability.sweetVeil,
}

// 532 Timburr → Gurdurr → Conkeldurr
pkmn.timburr = {
  type: ["fighting"],
  bst: {
    hp: 75,
    atk: 80,
    def: 55,
    satk: 25,
    sdef: 35,
    spe: 35,
  },
  evolve: function() { return { 1: { pkmn: pkmn.gurdurr, level: evolutionLevel2 } } },
    hiddenAbility: ability.ironFist,
}

pkmn.gurdurr = {
  type: ["fighting"],
  bst: {
    hp: 85,
    atk: 105,
    def: 85,
    satk: 40,
    sdef: 50,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.conkeldurr, item: item.linkStone/*o “union” si usas algo así*/ } } },
    hiddenAbility: ability.ironFist,
}

pkmn.conkeldurr = {
  type: ["fighting"],
  bst: {
    hp: 105,
    atk: 140,
    def: 95,
    satk: 55,
    sdef: 65,
    spe: 45,
  },
    hiddenAbility: ability.ironFist,
}

// 535 Tympole → Palpitoad → Seismitoad
pkmn.tympole = {
  type: ["water"],
  bst: {
    hp: 55,
    atk: 50,
    def: 40,
    satk: 50,
    sdef: 40,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.palpitoad, level: evolutionLevel2 } } },
    hiddenAbility: ability.terralate,
}

pkmn.palpitoad = {
  type: ["water","ground"],
  bst: {
    hp: 90,
    atk: 65,
    def: 55,
    satk: 65,
    sdef: 55,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.seismitoad, level: evolutionLevel2 } } },
    hiddenAbility: ability.terralate,
}

pkmn.seismitoad = {
  type: ["water","ground"],
  bst: {
    hp: 105,
    atk: 95,
    def: 75,
    satk: 85,
    sdef: 75,
    spe: 74,
  },
    hiddenAbility: ability.terralate,
}

// 538 Throh
pkmn.throh = {
  type: ["fighting"],
  bst: {
    hp: 120,
    atk: 100,
    def: 85,
    satk: 30,
    sdef: 85,
    spe: 45,
  },
    hiddenAbility: ability.guts,
}

// 539 Sawk
pkmn.sawk = {
  type: ["fighting"],
  bst: {
    hp: 75,
    atk: 125,
    def: 75,
    satk: 30,
    sdef: 75,
    spe: 85,
  },
    hiddenAbility: ability.ambidextrous,
    eggMove : move.hiJumpKick
}

// 540 Sewaddle → Swadloon → Leavanny
pkmn.sewaddle = {
  type: ["bug","grass"],
  bst: {
    hp: 45,
    atk: 53,
    def: 70,
    satk: 40,
    sdef: 60,
    spe: 42,
  },
  evolve: function() { return { 
    1: { pkmn: pkmn.swadloon, level: evolutionLevel1 } 
  } },
    eggMove : move.trailblaze
}

pkmn.swadloon = {
  type: ["bug","grass"],
  bst: {
    hp: 55,
    atk: 73,
    def: 90,
    satk: 50,
    sdef: 80,
    spe: 57,
  },
  evolve: function() { return { 1: { pkmn: pkmn.leavanny, item: item.leafStone } } },
    eggMove : move.trailblaze
}

pkmn.leavanny = {
  type: ["bug","grass"],
  bst: {
    hp: 75,
    atk: 103,
    def: 80,
    satk: 70,
    sdef: 80,
    spe: 92,
  },
    eggMove : move.trailblaze
}

// 543 Venipede → Whirlipede → Scolipede
pkmn.venipede = {
  type: ["bug","poison"],
  bst: {
    hp: 30,
    atk: 45,
    def: 59,
    satk: 30,
    sdef: 39,
    spe: 57,
  },
  evolve: function() { return { 1: { pkmn: pkmn.whirlipede, level: evolutionLevel1 } } },
    hiddenAbility: ability.speedBoost,
}

pkmn.whirlipede = {
  type: ["bug","poison"],
  bst: {
    hp: 40,
    atk: 55,
    def: 99,
    satk: 40,
    sdef: 79,
    spe: 47,
  },
  evolve: function() { return { 1: { pkmn: pkmn.scolipede, level: evolutionLevel2 } } },
    hiddenAbility: ability.speedBoost,
}

pkmn.scolipede = {
  type: ["bug","poison"],
  bst: {
    hp: 60,
    atk: 100,
    def: 89,
    satk: 55,
    sdef: 69,
    spe: 112,
  },
    hiddenAbility: ability.speedBoost,
}


// 546 Cottonee → Whimsicott
pkmn.cottonee = {
  type: ["grass","fairy"],
  bst: {
    hp: 40,
    atk: 27,
    def: 60,
    satk: 37,
    sdef: 50,
    spe: 66,
  },
  evolve: function() { return { 1: { pkmn: pkmn.whimsicott, item: item.sunStone /*o equivalente*/ } } },
    signature : move.cottonGuard
}

pkmn.whimsicott = {
  type: ["grass","fairy"],
  bst: {
    hp: 60,
    atk: 67,
    def: 85,
    satk: 77,
    sdef: 75,
    spe: 116,
  },
    signature : move.cottonGuard
}

// 548 Petilil → Lilligant
pkmn.petilil = {
  type: ["grass"],
  bst: {
    hp: 45,
    atk: 35,
    def: 50,
    satk: 70,
    sdef: 50,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.lilligant, item: item.sunStone } } },
    hiddenAbility: ability.costar,
}

pkmn.lilligant = {
  type: ["grass"],
  bst: {
    hp: 70,
    atk: 60,
    def: 75,
    satk: 110,
    sdef: 75,
    spe: 90,
  },
    hiddenAbility: ability.costar,
    variants: function() { return [pkmn.hisuianLilligant] },
}

pkmn.hisuianLilligant = {
  type: ["grass", "fighting"],
  bst: {
    hp: 70,
    atk: 105,
    def: 75,
    satk: 50,
    sdef: 75,
    spe: 105,
  },
    hiddenAbility: ability.costar,
}

// 550 Basculin → Basculegion
pkmn.basculin = {
  rename: `basculin Red`,
  type: ["water"],
  bst: {
    hp: 70,
    atk: 92,
    def: 65,
    satk: 80,
    sdef: 55,
    spe: 98,
  },
    hiddenAbility: ability.adaptability,
    variants: function() { return [pkmn.basculinBlue, pkmn.basculinWhite] },
}

pkmn.basculinBlue = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 92,
    def: 65,
    satk: 80,
    sdef: 55,
    spe: 98,
  },
    hiddenAbility: ability.adaptability,
}

pkmn.basculinWhite = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 92,
    def: 65,
    satk: 80,
    sdef: 55,
    spe: 98,
  },
  evolve: function() {
    return {
      1: { pkmn: pkmn.basculegionM, item: item.waterStone },
      2: { pkmn: pkmn.basculegionF, item: item.duskStone },
    }
  },
  hiddenAbility: ability.adaptability,
}

pkmn.basculegionM = {
    type: ["water", "ghost"],
    bst: {
        hp: 120,
        atk: 112,
        def: 65,
        satk: 80,
        sdef: 75,
        spe: 78,
    },
    variants: function() { return [pkmn.basculegionF] },
}

pkmn.basculegionF = {
    type: ["water", "ghost"],
    bst: {
        hp: 120,
        atk: 92,
        def: 65,
        satk: 100,
        sdef: 75,
        spe: 78,
    },
}

// 551 Sandile → Krokorok → Krookodile
pkmn.sandile = {
  type: ["ground","dark"],
  bst: {
    hp: 50,
    atk: 72,
    def: 35,
    satk: 35,
    sdef: 35,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.krokorok, level: evolutionLevel2 } } },
    hiddenAbility: ability.moxie,
}

pkmn.krokorok = {
  type: ["ground","dark"],
  bst: {
    hp: 60,
    atk: 82,
    def: 45,
    satk: 45,
    sdef: 45,
    spe: 74,
  },
  evolve: function() { return { 1: { pkmn: pkmn.krookodile, level: evolutionLevel3 } } },
    hiddenAbility: ability.moxie,
}

pkmn.krookodile = {
  type: ["ground","dark"],
  bst: {
    hp: 95,
    atk: 117,
    def: 80,
    satk: 65,
    sdef: 70,
    spe: 92,
  },
    hiddenAbility: ability.moxie,
}

// 554 Darumaka → Darmanitan
pkmn.darumaka = {
  type: ["fire"],
  bst: {
    hp: 70,
    atk: 90,
    def: 45,
    satk: 15,
    sdef: 45,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.darmanitan, level: evolutionLevel2 } } },
    hiddenAbility: ability.gorillaTactics,
    eggMove : move.blazeKick,
    variants: function() { return [pkmn.galarianDarumaka] },
}

pkmn.galarianDarumaka = {
  type: ["ice"],
  bst: {
    hp: 70,
    atk: 90,
    def: 45,
    satk: 15,
    sdef: 45,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.galarianDarmanitan, item: item.iceStone } } }
}

pkmn.darmanitan = {
  type: ["fire"],
  bst: {
    hp: 105,
    atk: 140,
    def: 55,
    satk: 30,
    sdef: 55,
    spe: 95,
  },
    hiddenAbility: ability.gorillaTactics,
    eggMove : move.blazeKick,
    variants: function() { return [pkmn.galarianDarmanitan] },
}

pkmn.galarianDarmanitan = {
  type: ["ice"],
  bst: {
    hp: 105,
    atk: 160,
    def: 55,
    satk: 30,
    sdef: 55,
    spe: 135,
  }
}

// 556 Maractus
pkmn.maractus = {
  type: ["grass"],
  bst: {
    hp: 75,
    atk: 86,
    def: 67,
    satk: 106,
    sdef: 67,
    spe: 60,
  },
    hiddenAbility: ability.waterAbsorb,
    eggMove : move.acupressure
}

// 557 Dwebble → Crustle
pkmn.dwebble = {
  type: ["bug","rock"],
  bst: {
    hp: 50,
    atk: 65,
    def: 85,
    satk: 35,
    sdef: 35,
    spe: 55,
  },
  evolve: function() { return { 1: { pkmn: pkmn.crustle, level: evolutionLevel2 } } },
    hiddenAbility: ability.filter,
}

pkmn.crustle = {
  type: ["bug","rock"],
  bst: {
    hp: 70,
    atk: 95,
    def: 125,
    satk: 65,
    sdef: 75,
    spe: 45,
  },
    hiddenAbility: ability.filter,
}

// 559 Scraggy → Scrafty
pkmn.scraggy = {
  type: ["dark","fighting"],
  bst: {
    hp: 50,
    atk: 75,
    def: 70,
    satk: 35,
    sdef: 70,
    spe: 48,
  },
  evolve: function() { return { 1: { pkmn: pkmn.scrafty, level: evolutionLevel2 } } },
    hiddenAbility: ability.moxie,
}

pkmn.scrafty = {
  type: ["dark","fighting"],
  bst: {
    hp: 65,
    atk: 90,
    def: 115,
    satk: 45,
    sdef: 115,
    spe: 58,
  },
    hiddenAbility: ability.moxie,
}

// 561 Sigilyph
pkmn.sigilyph = {
  type: ["psychic","flying"],
  bst: {
    hp: 72,
    atk: 58,
    def: 80,
    satk: 103,
    sdef: 80,
    spe: 97,
  },
    hiddenAbility: ability.magicGuard,
    signature : move.storedPower
}

// 562 Yamask → Cofagrigus / Galarian Yamask → Runerigus
pkmn.yamask = {
  type: ["ghost"],
  bst: {
    hp: 38,
    atk: 30,
    def: 85,
    satk: 55,
    sdef: 65,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.cofagrigus, level: evolutionLevel2 } } },
    hiddenAbility: ability.somberField,
    variants: function() { return [pkmn.galarianYamask] },
}

pkmn.galarianYamask = {
  type: ["ground", "ghost"],
  bst: {
    hp: 38,
    atk: 55,
    def: 85,
    satk: 30,
    sdef: 65,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.runerigus, level: evolutionLevel2 } } },
    hiddenAbility: ability.powerOfAlchemy,
}

pkmn.cofagrigus = {
  type: ["ghost"],
  bst: {
    hp: 58,
    atk: 50,
    def: 145,
    satk: 95,
    sdef: 105,
    spe: 30,
  },
    hiddenAbility: ability.somberField,
}

pkmn.runerigus = {
  type: ["ground","ghost"],
  bst: {
    hp: 58,
    atk: 95,
    def: 145,
    satk: 50,
    sdef: 105,
    spe: 30,
  },
    hiddenAbility: ability.powerOfAlchemy,
}

// 564 Tirtouga → Carracosta
pkmn.tirtouga = {
  type: ["water","rock"],
  bst: {
    hp: 54,
    atk: 78,
    def: 103,
    satk: 53,
    sdef: 45,
    spe: 22,
  },
  evolve: function() { return { 1: { pkmn: pkmn.carracosta, level: evolutionLevel2 } } },
    hiddenAbility: ability.shieldsDown,
    eggMove : move.razorShell
}

pkmn.carracosta = {
  type: ["water","rock"],
  bst: {
    hp: 74,
    atk: 108,
    def: 133,
    satk: 83,
    sdef: 65,
    spe: 32,
  },
    hiddenAbility: ability.shieldsDown,
    eggMove : move.razorShell
}

// 566 Archen → Archeops
pkmn.archen = {
  type: ["rock","flying"],
  bst: {
    hp: 55,
    atk: 112,
    def: 45,
    satk: 74,
    sdef: 45,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.archeops, level: evolutionLevel2 } } },
    hiddenAbility: ability.stoned,

}

pkmn.archeops = {
  type: ["rock","flying"],
  bst: {
    hp: 75,
    atk: 120,
    def: 65,
    satk: 92,
    sdef: 65,
    spe: 110,
  },
    hiddenAbility: ability.stoned,
}

// 568 Trubbish → Garbodor
pkmn.trubbish = {
  type: ["poison"],
  bst: {
    hp: 50,
    atk: 50,
    def: 62,
    satk: 40,
    sdef: 62,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.garbodor, level: evolutionLevel2 } } },
    hiddenAbility: ability.toxicBoost,
}

pkmn.garbodor = {
  type: ["poison"],
  bst: {
    hp: 80,
    atk: 95,
    def: 82,
    satk: 60,
    sdef: 82,
    spe: 75,
  },
    hiddenAbility: ability.toxicBoost,
}

pkmn.garbodorGmax = {
  type: ["poison"],
  bst: {
    hp: 80*1.6,
    atk: 95*1.6,
    def: 82*1.6,
    satk: 60*1.6,
    sdef: 82*1.6,
    spe: 75*1.6,
  },
    hiddenAbility: ability.toxicBoost,
}

// 570 Zorua → Zoroark
pkmn.zorua = {
  type: ["dark"],
  bst: {
    hp: 40,
    atk: 65,
    def: 40,
    satk: 80,
    sdef: 40,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.zoroark, level: evolutionLevel2 } } },
    hiddenAbility: ability.imposter,
    eggMove : move.mimic,
    variants: function() { return [pkmn.hisuianZorua] },
}

pkmn.hisuianZorua = {
  type: ["normal", "ghost"],
  bst: {
    hp: 35,
    atk: 60,
    def: 40,
    satk: 85,
    sdef: 40,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.hisuianZoroark, level: evolutionLevel2 } } },
    hiddenAbility: ability.merciless,
}

pkmn.zoroark = {
  type: ["dark"],
  bst: {
    hp: 60,
    atk: 105,
    def: 60,
    satk: 120,
    sdef: 60,
    spe: 105,
  },
    hiddenAbility: ability.imposter,
    eggMove : move.mimic,
    variants: function() { return [pkmn.hisuianZoroark] },
}

pkmn.hisuianZoroark = {
  type: ["normal", "ghost"],
  bst: {
    hp: 55,
    atk: 100,
    def: 60,
    satk: 125,
    sdef: 60,
    spe: 110,
  },
    hiddenAbility: ability.merciless,
}

// 572 Minccino → Cinccino
pkmn.minccino = {
  type: ["normal"],
  bst: {
    hp: 55,
    atk: 50,
    def: 40,
    satk: 40,
    sdef: 40,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.cinccino, item: item.shinyStone /*o equivalente*/ } } },
    hiddenAbility: ability.skillLink,
}

pkmn.cinccino = {
  type: ["normal"],
  bst: {
    hp: 75,
    atk: 95,
    def: 60,
    satk: 65,
    sdef: 60,
    spe: 115,
  },
    hiddenAbility: ability.skillLink,
}

// 574 Gothita → Gothorita → Gothitelle
pkmn.gothita = {
  type: ["psychic"],
  bst: {
    hp: 45,
    atk: 30,
    def: 50,
    satk: 55,
    sdef: 65,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.gothorita, level: evolutionLevel2 } } },
    hiddenAbility: ability.justified,
}

pkmn.gothorita = {
  type: ["psychic"],
  bst: {
    hp: 60,
    atk: 45,
    def: 70,
    satk: 75,
    sdef: 85,
    spe: 55,
  },
  evolve: function() { return { 1: { pkmn: pkmn.gothitelle, level: evolutionLevel3 } } },
    hiddenAbility: ability.justified,
}

pkmn.gothitelle = {
  type: ["psychic"],
  bst: {
    hp: 70,
    atk: 55,
    def: 95,
    satk: 95,
    sdef: 110,
    spe: 65,
  },
    hiddenAbility: ability.justified,
}

// 577 Solosis → Duosion → Reuniclus
pkmn.solosis = {
  type: ["psychic"],
  bst: {
    hp: 45,
    atk: 30,
    def: 40,
    satk: 105,
    sdef: 50,
    spe: 20,
  },
  evolve: function() { return { 1: { pkmn: pkmn.duosion, level: evolutionLevel2 } } },
    hiddenAbility: ability.magicGuard,
}

pkmn.duosion = {
  type: ["psychic"],
  bst: {
    hp: 75,
    atk: 40,
    def: 50,
    satk: 125,
    sdef: 60,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.reuniclus, level: evolutionLevel3 } } },
    hiddenAbility: ability.magicGuard,
}

pkmn.reuniclus = {
  type: ["psychic"],
  bst: {
    hp: 110,
    atk: 65,
    def: 75,
    satk: 125,
    sdef: 85,
    spe: 30,
  },
    hiddenAbility: ability.magicGuard,
}

// 580 Ducklett → Swanna
pkmn.ducklett = {
  type: ["water","flying"],
  bst: {
    hp: 62,
    atk: 44,
    def: 50,
    satk: 44,
    sdef: 50,
    spe: 55,
  },
  evolve: function() { return { 1: { pkmn: pkmn.swanna, level: evolutionLevel2 } } },
    hiddenAbility: ability.drizzle,
}

pkmn.swanna = {
  type: ["water","flying"],
  bst: {
    hp: 75,
    atk: 87,
    def: 63,
    satk: 87,
    sdef: 63,
    spe: 98,
  },
    hiddenAbility: ability.drizzle,
}

// 582 Vanillite → Vanillish → Vanilluxe
pkmn.vanillite = {
  type: ["ice"],
  bst: {
    hp: 36,
    atk: 50,
    def: 50,
    satk: 65,
    sdef: 60,
    spe: 44,
  },
  evolve: function() { return { 1: { pkmn: pkmn.vanillish, level: evolutionLevel2 } } },
    hiddenAbility: ability.snowWarning,
}

pkmn.vanillish = {
  type: ["ice"],
  bst: {
    hp: 51,
    atk: 65,
    def: 65,
    satk: 80,
    sdef: 75,
    spe: 59,
  },
  evolve: function() { return { 1: { pkmn: pkmn.vanilluxe, level: evolutionLevel3 } } },
    hiddenAbility: ability.snowWarning,
}

pkmn.vanilluxe = {
  type: ["ice"],
  bst: {
    hp: 71,
    atk: 95,
    def: 85,
    satk: 110,
    sdef: 95,
    spe: 79,
  },
    hiddenAbility: ability.snowWarning,
}

// 585 Deerling → Sawsbuck
pkmn.deerling = {
  type: ["normal","grass"],
  bst: {
    hp: 60,
    atk: 60,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.sawsbuck, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage,
    variants: function() { return [pkmn.deerlingAutumn, pkmn.deerlingSpring, pkmn.deerlingWinter] },
}

pkmn.deerlingAutumn = {
  type: ["normal","fire"],
  bst: {
    hp: 60,
    atk: 60,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.sawsbuckAutumn, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

pkmn.deerlingSpring = {
  type: ["normal","fairy"],
  bst: {
    hp: 60,
    atk: 60,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.sawsbuckSpring, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

pkmn.deerlingWinter = {
  type: ["normal","ice"],
  bst: {
    hp: 60,
    atk: 60,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.sawsbuckWinter, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

pkmn.sawsbuck = {
  type: ["normal","grass"],
  bst: {
    hp: 80,
    atk: 100,
    def: 70,
    satk: 60,
    sdef: 70,
    spe: 95,
  },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage,
    variants: function() { return [pkmn.sawsbuckAutumn, pkmn.sawsbuckSpring, pkmn.sawsbuckWinter] },
}

pkmn.sawsbuckAutumn = {
  type: ["normal","fire"],
  bst: {
    hp: 80,
    atk: 100,
    def: 70,
    satk: 60,
    sdef: 70,
    spe: 95,
  },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

pkmn.sawsbuckSpring = {
  type: ["normal","fairy"],
  bst: {
    hp: 80,
    atk: 100,
    def: 70,
    satk: 60,
    sdef: 70,
    spe: 95,
  },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

pkmn.sawsbuckWinter = {
  type: ["normal","ice"],
  bst: {
    hp: 80,
    atk: 100,
    def: 70,
    satk: 60,
    sdef: 70,
    spe: 95,
  },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

// 587 Emolga
pkmn.emolga = {
  type: ["electric","flying"],
  bst: {
    hp: 55,
    atk: 75,
    def: 60,
    satk: 75,
    sdef: 60,
    spe: 103,
  },
    hiddenAbility: ability.windRider,
}

pkmn.emolgaEvent = {
  rename: `emolga`,
  hidden:true,
  type: ["dark","flying"],
  bst: {
    hp: 55,
    atk: 75,
    def: 60,
    satk: 75,
    sdef: 60,
    spe: 103,
  },
}

// 588 Karrablast → Escavalier
pkmn.karrablast = {
  type: ["bug"],
  bst: {
    hp: 50,
    atk: 75,
    def: 45,
    satk: 40,
    sdef: 45,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.escavalier, item: item.linkStone } } },
    eggMove : move.megahorn
}

pkmn.escavalier = {
  type: ["bug","steel"],
  bst: {
    hp: 70,
    atk: 135,
    def: 105,
    satk: 60,
    sdef: 105,
    spe: 20,
  },
    eggMove : move.megahorn
}

// 590 Foongus → Amoonguss
pkmn.foongus = {
  type: ["grass","poison"],
  bst: {
    hp: 69,
    atk: 55,
    def: 45,
    satk: 55,
    sdef: 55,
    spe: 15,
  },
  evolve: function() { return { 1: { pkmn: pkmn.amoonguss, level: evolutionLevel2 } } },
    hiddenAbility: ability.colorSpore,
}

pkmn.amoonguss = {
  type: ["grass","poison"],
  bst: {
    hp: 114,
    atk: 85,
    def: 70,
    satk: 85,
    sdef: 80,
    spe: 30,
  },
    hiddenAbility: ability.imposter,
}

// 592 Frillish → Jellicent
pkmn.frillish = {
  type: ["water","ghost"],
  bst: {
    hp: 55,
    atk: 40,
    def: 50,
    satk: 65,
    sdef: 85,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.jellicent, level: evolutionLevel3 } } },
}

pkmn.jellicent = {
  type: ["water","ghost"],
  bst: {
    hp: 100,
    atk: 60,
    def: 70,
    satk: 85,
    sdef: 105,
    spe: 60,
  },
}

// 594 Alomomola
pkmn.alomomola = {
  type: ["water"],
  bst: {
    hp: 165,
    atk: 75,
    def: 80,
    satk: 40,
    sdef: 45,
    spe: 65,
  },
}

// 595 Joltik → Galvantula
pkmn.joltik = {
  type: ["bug","electric"],
  bst: {
    hp: 50,
    atk: 47,
    def: 50,
    satk: 57,
    sdef: 50,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.galvantula, level: evolutionLevel2 } } },
    hiddenAbility: ability.libero,
    eggMove : move.electroBall
}

pkmn.galvantula = {
  type: ["bug","electric"],
  bst: {
    hp: 70,
    atk: 77,
    def: 60,
    satk: 97,
    sdef: 60,
    spe: 108,
  },
    hiddenAbility: ability.libero,
    eggMove : move.electroBall
}

// 597 Ferroseed → Ferrothorn
pkmn.ferroseed = {
  type: ["grass","steel"],
  bst: {
    hp: 44,
    atk: 50,
    def: 91,
    satk: 24,
    sdef: 86,
    spe: 10,
  },
  evolve: function() { return { 1: { pkmn: pkmn.ferrothorn, level: evolutionLevel3 } } },
    hiddenAbility: ability.ferrilate,
}

pkmn.ferrothorn = {
  type: ["grass","steel"],
  bst: {
    hp: 74,
    atk: 94,
    def: 131,
    satk: 54,
    sdef: 116,
    spe: 20,
  },
    hiddenAbility: ability.ferrilate,
}

// 599 Klink → Klang → Klinklang
pkmn.klink = {
  type: ["steel"],
  bst: {
    hp: 40,
    atk: 55,
    def: 70,
    satk: 45,
    sdef: 60,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.klang, level: evolutionLevel2 } } },
    hiddenAbility: ability.fullMetalBody,
    signature : move.shiftGear
}

pkmn.klang = {
  type: ["steel"],
  bst: {
    hp: 60,
    atk: 80,
    def: 95,
    satk: 70,
    sdef: 85,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.klinklang, level: evolutionLevel3 } } },
    hiddenAbility: ability.fullMetalBody,
    signature : move.shiftGear
}

pkmn.klinklang = {
  type: ["steel"],
  bst: {
    hp: 60,
    atk: 100,
    def: 115,
    satk: 70,
    sdef: 85,
    spe: 90,
  },
    hiddenAbility: ability.fullMetalBody,
    signature : move.shiftGear
}

// 602 Tynamo → Eelektrik → Eelektross
pkmn.tynamo = {
  type: ["electric"],
  bst: {
    hp: 35,
    atk: 55,
    def: 40,
    satk: 45,
    sdef: 40,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.eelektrik, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
    signature : move.zingZap
}

pkmn.eelektrik = {
  type: ["electric"],
  bst: {
    hp: 65,
    atk: 85,
    def: 70,
    satk: 75,
    sdef: 70,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.eelektross, item: item.thunderStone } } },
    hiddenAbility: ability.levitate,
    signature : move.zingZap
}

pkmn.eelektross = {
  type: ["electric"],
  bst: {
    hp: 85,
    atk: 115,
    def: 80,
    satk: 105,
    sdef: 80,
    spe: 50,
  },
    hiddenAbility: ability.levitate,
    signature : move.zingZap
}

pkmn.megaEelektross = {
  type: ["electric"],
  bst: {
    hp: 85,
    atk: 145,
    def: 80,
    satk: 135,
    sdef: 90,
    spe: 80,
  },
    hiddenAbility: ability.levitate,
    signature : move.zingZap
}

// 605 Elgyem → Beheeyem
pkmn.elgyem = {
  type: ["psychic"],
  bst: {
    hp: 55,
    atk: 55,
    def: 55,
    satk: 85,
    sdef: 55,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.beheeyem, level: evolutionLevel3 } } },
}

pkmn.beheeyem = {
  type: ["psychic"],
  bst: {
    hp: 75,
    atk: 75,
    def: 75,
    satk: 125,
    sdef: 95,
    spe: 40,
  },
}

// 607 Litwick → Lampent → Chandelure
pkmn.litwick = {
  type: ["ghost","fire"],
  bst: {
    hp: 50,
    atk: 30,
    def: 55,
    satk: 65,
    sdef: 55,
    spe: 20,
  },
  evolve: function() { return { 1: { pkmn: pkmn.lampent, level: evolutionLevel3 } } },
    hiddenAbility: ability.flashPyro,
}

pkmn.lampent = {
  type: ["ghost","fire"],
  bst: {
    hp: 60,
    atk: 40,
    def: 60,
    satk: 95,
    sdef: 60,
    spe: 55,
  },
  evolve: function() { return { 1: { pkmn: pkmn.chandelure, item: item.duskStone } } },
    hiddenAbility: ability.flashPyro,
}

pkmn.chandelure = {
  type: ["ghost","fire"],
  bst: {
    hp: 60,
    atk: 55,
    def: 90,
    satk: 145,
    sdef: 90,
    spe: 80,
  },
    hiddenAbility: ability.flashPyro,
}

pkmn.megaChandelure = {
  type: ["ghost","fire"],
  bst: {
    hp: 60,
    atk: 75,
    def: 110,
    satk: 175,
    sdef: 110,
    spe: 90,
  }
}

// 610 Axew → Fraxure → Haxorus
pkmn.axew = {
  type: ["dragon"],
  bst: {
    hp: 46,
    atk: 87,
    def: 60,
    satk: 30,
    sdef: 40,
    spe: 57,
  },
  evolve: function() { return { 1: { pkmn: pkmn.fraxure, level: evolutionLevel2 } } },
    hiddenAbility: ability.rivalry,
}

pkmn.fraxure = {
  type: ["dragon"],
  bst: {
    hp: 66,
    atk: 117,
    def: 70,
    satk: 40,
    sdef: 50,
    spe: 67,
  },
  evolve: function() { return { 1: { pkmn: pkmn.haxorus, level: evolutionLevel3 } } },
    hiddenAbility: ability.rivalry,
}

pkmn.haxorus = {
  type: ["dragon"],
  bst: {
    hp: 76,
    atk: 147,
    def: 90,
    satk: 60,
    sdef: 70,
    spe: 97,
  },
    hiddenAbility: ability.rivalry,
}

// 613 Cubchoo → Beartic
pkmn.cubchoo = {
  type: ["ice"],
  bst: {
    hp: 55,
    atk: 70,
    def: 40,
    satk: 60,
    sdef: 40,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.beartic, level: evolutionLevel2 } } },
    hiddenAbility: ability.slushRush,
}

pkmn.beartic = {
  type: ["ice"],
  bst: {
    hp: 95,
    atk: 110,
    def: 80,
    satk: 70,
    sdef: 80,
    spe: 50,
  },
    hiddenAbility: ability.slushRush,
}

// 615 Cryogonal
pkmn.cryogonal = {
  type: ["ice"],
  bst: {
    hp: 70,
    atk: 50,
    def: 30,
    satk: 95,
    sdef: 135,
    spe: 105,
  },
    hiddenAbility: ability.levitate,
    signature : move.freezeDry
}

// 616 Shelmet → Accelgor
pkmn.shelmet = {
  type: ["bug"],
  bst: {
    hp: 50,
    atk: 40,
    def: 85,
    satk: 40,
    sdef: 65,
    spe: 25,
  },
  evolve: function() { return { 1: { pkmn: pkmn.accelgor, item: item.linkStone } } },
    hiddenAbility: ability.unburden,
    eggMove : move.meFirst
}

pkmn.accelgor = {
  type: ["bug"],
  bst: {
    hp: 80,
    atk: 70,
    def: 40,
    satk: 100,
    sdef: 60,
    spe: 145,
  },
    hiddenAbility: ability.unburden,
    eggMove : move.meFirst
}

// 618 Stunfisk
pkmn.stunfisk = {
  type: ["ground","electric"],
  bst: {
    hp: 109,
    atk: 66,
    def: 84,
    satk: 81,
    sdef: 99,
    spe: 32,
  },
    hiddenAbility: ability.simple,
    eggMove : move.camouflage
}

pkmn.galarianStunfisk = {
  type: ["ground","steel"],
  bst: {
    hp: 109,
    atk: 81,
    def: 99,
    satk: 66,
    sdef: 84,
    spe: 32,
  },
    hiddenAbility: ability.terralate,
}

// 619 Mienfoo → Mienshao
pkmn.mienfoo = {
    type: ["fighting"],
    bst: {
        hp: 45,
        atk: 85,
        def: 50,
        satk: 55,
        sdef: 50,
        spe: 65,
    },
  evolve: function() { return { 1: { pkmn: pkmn.mienshao, level: evolutionLevel3 } } },
    hiddenAbility: ability.ambidextrous,
}

pkmn.mienshao = {
  type: ["fighting"],
  bst: {
    hp: 65,
    atk: 125,
    def: 60,
    satk: 95,
    sdef: 60,
    spe: 105,
  },
    hiddenAbility: ability.ambidextrous,
}

// 621 Druddigon
pkmn.druddigon = {
  type: ["dragon"],
  bst: {
    hp: 77,
    atk: 120,
    def: 90,
    satk: 60,
    sdef: 90,
    spe: 48,
  },
    hiddenAbility: ability.merciless,
}

// 622 Golett → Golurk
pkmn.golett = {
  type: ["ground","ghost"],
  bst: {
    hp: 59,
    atk: 74,
    def: 50,
    satk: 35,
    sdef: 50,
    spe: 35,
  },
  evolve: function() { return { 1: { pkmn: pkmn.golurk, level: evolutionLevel3 } } },
    hiddenAbility: ability.ironFist,
}

pkmn.golurk = {
  type: ["ground","ghost"],
  bst: {
    hp: 89,
    atk: 124,
    def: 80,
    satk: 55,
    sdef: 80,
    spe: 55,
  },
    hiddenAbility: ability.moxie,
}

/*
pkmn.megaGolurk = {
  type: ["ground","ghost"],
  bst: {
    hp: 89,
    atk: 159,
    def: 105,
    satk: 70,
    sdef: 105,
    spe: 55,
  }
}
*/

// 624 Pawniard → Bisharp → Kingambit
pkmn.pawniard = {
  type: ["dark","steel"],
  bst: {
    hp: 45,
    atk: 85,
    def: 70,
    satk: 40,
    sdef: 40,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.bisharp, level: evolutionLevel3 } } },
    hiddenAbility: ability.sharpness,
    eggMove : move.falseSurrender
}

pkmn.bisharp = {
  type: ["dark","steel"],
  bst: {
    hp: 65,
    atk: 125,
    def: 100,
    satk: 60,
    sdef: 70,
    spe: 70,
  },
    hiddenAbility: ability.sharpness,
    evolve: function() { return { 1: { pkmn: pkmn.kingambit, item: item.oddRock } } },
    eggMove : move.falseSurrender
}

pkmn.kingambit = {
  type: ["dark", "steel"],
  bst: {
    hp: 120,
    atk: 135,
    def: 120,
    satk: 60,
    sdef: 85,
    spe: 50,
  },
    hiddenAbility: ability.supremeOverlord,
    eggMove : move.falseSurrender
}

// 626 Bouffalant
pkmn.bouffalant = {
  type: ["normal"],
  bst: {
    hp: 95,
    atk: 110,
    def: 95,
    satk: 40,
    sdef: 95,
    spe: 55,
  },
    signature : move.headCharge,
    hiddenAbility: ability.metalhead,
}

// 627 Rufflet → Braviary
pkmn.rufflet = {
  type: ["normal","flying"],
  bst: {
    hp: 70,
    atk: 83,
    def: 50,
    satk: 37,
    sdef: 50,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.braviary, level: evolutionLevel3 } } },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird
}

pkmn.braviary = {
  type: ["normal","flying"],
  bst: {
    hp: 100,
    atk: 123,
    def: 75,
    satk: 57,
    sdef: 75,
    spe: 80,
  },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird,
    variants: function() { return [pkmn.hisuianBraviary] },
}

pkmn.hisuianBraviary = {
  type: ["psychic","flying"],
  bst: {
    hp: 110,
    atk: 83,
    def: 70,
    satk: 112,
    sdef: 70,
    spe: 65,
  }
}

// 629 Vullaby → Mandibuzz
pkmn.vullaby = {
  type: ["dark","flying"],
  bst: {
    hp: 70,
    atk: 55,
    def: 75,
    satk: 45,
    sdef: 65,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.mandibuzz, level: evolutionLevel3 } } },
}

pkmn.mandibuzz = {
  type: ["dark","flying"],
  bst: {
    hp: 110,
    atk: 65,
    def: 105,
    satk: 55,
    sdef: 95,
    spe: 80,
  },
}

// 631 Heatmor
pkmn.heatmor = {
  type: ["fire"],
  bst: {
    hp: 85,
    atk: 105,
    def: 66,
    satk: 105,
    sdef: 66,
    spe: 65,
  },
    hiddenAbility: ability.scorch,
    eggMove : move.burnUp
}

// 632 Durant
pkmn.durant = {
  type: ["bug","steel"],
  bst: {
    hp: 58,
    atk: 109,
    def: 112,
    satk: 48,
    sdef: 48,
    spe: 109,
  },
    hiddenAbility: ability.fullMetalBody,
}

// 633 Deino → Zweilous → Hydreigon
pkmn.deino = {
  type: ["dark","dragon"],
  bst: {
    hp: 52,
    atk: 65,
    def: 50,
    satk: 45,
    sdef: 50,
    spe: 38,
  },
  evolve: function() { return { 1: { pkmn: pkmn.zweilous, level: evolutionLevel2 } } },
    hiddenAbility: ability.rivalry,
    eggMove : move.dragonEnergy
}

pkmn.zweilous = {
  type: ["dark","dragon"],
  bst: {
    hp: 80,
    atk: 90,
    def: 70,
    satk: 65,
    sdef: 70,
    spe: 58,
  },
  evolve: function() { return { 1: { pkmn: pkmn.hydreigon, level: evolutionLevel3 } } },
    hiddenAbility: ability.rivalry,
    eggMove : move.dragonEnergy
}

pkmn.hydreigon = {
  type: ["dark","dragon"],
  bst: {
    hp: 92,
    atk: 105,
    def: 90,
    satk: 125,
    sdef: 90,
    spe: 98,
  },
    hiddenAbility: ability.rivalry,
    eggMove : move.dragonEnergy
}

// 636 Larvesta → Volcarona
pkmn.larvesta = {
  type: ["bug","fire"],
  bst: {
    hp: 55,
    atk: 85,
    def: 55,
    satk: 50,
    sdef: 55,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.volcarona, level: evolutionLevel3 } } },
    signature : move.fieryDance
}

pkmn.volcarona = {
  type: ["bug","fire"],
  bst: {
    hp: 85,
    atk: 60,
    def: 65,
    satk: 135,
    sdef: 105,
    spe: 100,
  },
    signature : move.fieryDance
}

// 638 Cobalion
pkmn.cobalion = {
  type: ["steel","fighting"],
  bst: {
    hp: 91,
    atk: 90,
    def: 129,
    satk: 90,
    sdef: 72,
    spe: 108,
  },
    hiddenAbility: ability.fullMetalBody,
}

// 639 Terrakion
pkmn.terrakion = {
  type: ["rock","fighting"],
  bst: {
    hp: 91,
    atk: 129,
    def: 90,
    satk: 72,
    sdef: 90,
    spe: 108,
  },
}

// 640 Virizion
pkmn.virizion = {
  type: ["grass","fighting"],
  bst: {
    hp: 91,
    atk: 90,
    def: 72,
    satk: 90,
    sdef: 129,
    spe: 108,
  },
    hiddenAbility: ability.stamina,
}

// 641 Tornadus
pkmn.tornadus = {
  type: ["flying"],
  bst: {
    hp: 79,
    atk: 115,
    def: 70,
    satk: 125,
    sdef: 80,
    spe: 111,
  },
    hiddenAbility: ability.climaTact,
    variants: function() { return [pkmn.tornadusTherian] },
}

pkmn.tornadusTherian = {
    type: ["flying"],
    bst: {
        hp: 129,
        atk: 100,
        def: 80,
        satk: 110,
        sdef: 90,
        spe: 121,
    }
}

// 642 Thundurus
pkmn.thundurus = {
  type: ["electric","flying"],
  bst: {
    hp: 79,
    atk: 115,
    def: 70,
    satk: 125,
    sdef: 80,
    spe: 111,
  },
    hiddenAbility: ability.climaTact,
    variants: function() { return [pkmn.thundurusTherian] },
}

pkmn.thundurusTherian = {
    type: ["electric","flying"],
    bst: {
        hp: 129,
        atk: 115,
        def: 70,
        satk: 145,
        sdef: 80,
        spe: 121,
    },
    hiddenAbility: ability.prankster,
}

// 645 Landorus
pkmn.landorus = {
  type: ["ground","flying"],
  bst: {
    hp: 89,
    atk: 125,
    def: 90,
    satk: 115,
    sdef: 80,
    spe: 101,
  },
    hiddenAbility: ability.climaTact,
    signature : move.sandsearStorm,
    variants: function() { return [pkmn.landorusTherian] },
}

pkmn.landorusTherian = {
    type: ["ground","flying"],
    bst: {
        hp: 129,
        atk: 145,
        def: 90,
        satk: 105,
        sdef: 110,
        spe: 91,
    }
}

// 905 Enamorus
pkmn.enamorus = {
  type: ["fairy","flying"],
  bst: {
    hp: 74,
    atk: 115,
    def: 70,
    satk: 135,
    sdef: 80,
    spe: 106,
  },
    hiddenAbility: ability.contrary,
    variants: function() { return [pkmn.enamorusTherian] },
}

pkmn.enamorusTherian = {
    type: ["fairy","flying"],
    bst: {
        hp: 74,
        atk: 115,
        def: 110,
        satk: 135,
        sdef: 140,
        spe: 46,
    }
}

// 643 Reshiram
pkmn.reshiram = {
  type: ["dragon","fire"],
  bst: {
    hp: 100,
    atk: 120,
    def: 100,
    satk: 150,
    sdef: 120,
    spe: 90,
  },
    signature : move.blueFlare
}

// 644 Zekrom
pkmn.zekrom = {
  type: ["dragon","electric"],
  bst: {
    hp: 100,
    atk: 150,
    def: 120,
    satk: 120,
    sdef: 100,
    spe: 90,
  },
    signature : move.boltStrike
}


// 646 Kyurem
pkmn.kyurem = {
  type: ["dragon","ice"],
  bst: {
    hp: 125,
    atk: 130,
    def: 90,
    satk: 130,
    sdef: 90,
    spe: 95,
  },
    hiddenAbility: ability.glaciate,
    signature : move.glaciate,
    variants: function() { return [pkmn.kyuremBlack, pkmn.kyuremWhite] },
}

pkmn.kyuremBlack = {
    type: ["dragon","ice"],
    bst: {
        hp: 165,
        atk: 180,
        def: 100,
        satk: 120,
        sdef: 90,
        spe: 110,
    }
}

pkmn.kyuremWhite = {
    type: ["dragon","ice"],
    bst: {
        hp: 165,
        atk: 120,
        def: 90,
        satk: 180,
        sdef: 100,
        spe: 110,
    }
}

// 647 Keldeo
pkmn.keldeo = {
  type: ["water","fighting"],
  bst: {
    hp: 91,
    atk: 72,
    def: 90,
    satk: 129,
    sdef: 90,
    spe: 108,
  },
  variants: function() { return [pkmn.keldeoResolute] },
}

pkmn.keldeoResolute = {
  type: ["water","fighting"],
  bst: {
    hp: 91,
    atk: 72,
    def: 90,
    satk: 129,
    sdef: 90,
    spe: 108,
  },
}

// 648 Meloetta
pkmn.meloetta = {
  type: ["normal","psychic"],
  bst: {
    hp: 100,
    atk: 77,
    def: 77,
    satk: 128,
    sdef: 128,
    spe: 90,
  },
    hiddenAbility: ability.cacophony,
    signature : move.relicSong,
  variants: function() { return [pkmn.meloettaPirouette] },
}

pkmn.meloettaPirouette = {
  type: ["normal","fighting"],
  bst: {
    hp: 100,
    atk: 128,
    def: 90,
    satk: 77,
    sdef: 77,
    spe: 128,
  },
    hiddenAbility: ability.cacophony,
    signature : move.relicSong
}

// 649 Genesect
pkmn.genesect = {
  type: ["bug","steel"],
  bst: {
    hp: 71,
    atk: 120,
    def: 95,
    satk: 120,
    sdef: 95,
    spe: 99,
  },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.conversion
}

/*

pkmn.genesectDouse = {
  type: ["bug","water"],
  bst: {
    hp: 71,
    atk: 120,
    def: 95,
    satk: 120,
    sdef: 95,
    spe: 99,
  },
    hiddenAbility: ability.megaLauncher,
}

pkmn.genesectShock = {
  type: ["bug","electric"],
  bst: {
    hp: 71,
    atk: 120,
    def: 95,
    satk: 120,
    sdef: 95,
    spe: 99,
  },
    hiddenAbility: ability.megaLauncher,
}

pkmn.genesectBurn = {
  type: ["bug","fire"],
  bst: {
    hp: 71,
    atk: 120,
    def: 95,
    satk: 120,
    sdef: 95,
    spe: 99,
  },
    hiddenAbility: ability.megaLauncher,
}

pkmn.genesectChill = {
  type: ["bug","ice"],
  bst: {
    hp: 71,
    atk: 120,
    def: 95,
    satk: 120,
    sdef: 95,
    spe: 99,
  },
    hiddenAbility: ability.megaLauncher,
}

*/

// 650 Chespin → Quilladin → Chesnaught
pkmn.chespin = {
  type: ["grass"],
  bst: {
    hp: 56,
    atk: 61,
    def: 65,
    satk: 48,
    sdef: 45,
    spe: 38,
  },
  evolve: function() { return { 1: { pkmn: pkmn.quilladin, level: evolutionLevel1 } } },
}

pkmn.quilladin = {
  type: ["grass"],
  bst: {
    hp: 61,
    atk: 78,
    def: 95,
    satk: 56,
    sdef: 58,
    spe: 57,
  },
  evolve: function() { return { 1: { pkmn: pkmn.chesnaught, level: evolutionLevel2 } } },
}

pkmn.chesnaught = {
  type: ["grass","fighting"],
  bst: {
    hp: 88,
    atk: 107,
    def: 122,
    satk: 74,
    sdef: 75,
    spe: 64,
  },
}

pkmn.megaChesnaught = {
  type: ["grass","fighting"],
  bst: {
    hp: 88,
    atk: 137,
    def: 172,
    satk: 74,
    sdef: 115,
    spe: 44,
  },
}

// 653 Fennekin → Braixen → Delphox
pkmn.fennekin = {
  type: ["fire"],
  bst: {
    hp: 40,
    atk: 45,
    def: 40,
    satk: 62,
    sdef: 60,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.braixen, level: evolutionLevel1 } } },
    hiddenAbility: ability.fieryPelt,
    signature : move.mysticalFire
}

pkmn.braixen = {
  type: ["fire"],
  bst: {
    hp: 70,
    atk: 59,
    def: 58,
    satk: 90,
    sdef: 75,
    spe: 73,
  },
  evolve: function() { return { 1: { pkmn: pkmn.delphox, level: evolutionLevel2 } } },
    hiddenAbility: ability.fieryPelt,
    signature : move.mysticalFire
}

pkmn.delphox = {
  type: ["fire","psychic"],
  bst: {
    hp: 75,
    atk: 69,
    def: 72,
    satk: 114,
    sdef: 100,
    spe: 104,
  },
    hiddenAbility: ability.fieryPelt,
    signature : move.mysticalFire
}

pkmn.megaDelphox = {
  type: ["fire","psychic"],
  bst: {
    hp: 75,
    atk: 69,
    def: 72,
    satk: 159,
    sdef: 125,
    spe: 134,
  },
    hiddenAbility: ability.fieryPelt,
    signature : move.mysticalFire
}

// 656 Froakie → Frogadier → Greninja
pkmn.froakie = {
  type: ["water"],
  bst: {
    hp: 41,
    atk: 56,
    def: 40,
    satk: 62,
    sdef: 44,
    spe: 71,
  },
  evolve: function() { return { 1: { pkmn: pkmn.frogadier, level: evolutionLevel1 } } },
    hiddenAbility: ability.protean,
    signature : move.waterShuriken
}

pkmn.frogadier = {
  type: ["water"],
  bst: {
    hp: 54,
    atk: 63,
    def: 52,
    satk: 83,
    sdef: 56,
    spe: 97,
  },
  evolve: function() { return { 1: { pkmn: pkmn.greninja, level: evolutionLevel2 } } },
    hiddenAbility: ability.protean,
    signature : move.waterShuriken
}

pkmn.greninja = {
  type: ["water","dark"],
  bst: {
    hp: 72,
    atk: 95,
    def: 67,
    satk: 103,
    sdef: 71,
    spe: 122,
  },
    hiddenAbility: ability.protean,
    signature : move.waterShuriken,
    variants: function() { return [pkmn.greninjaAsh] },
}

pkmn.greninjaAsh = {
  rename: `Ash Greninja`,
  type: ["water","dark"],
  bst: {
    hp: 72,
    atk: 125,
    def: 77,
    satk: 133,
    sdef: 81,
    spe: 142,
  },
    hiddenAbility: ability.protean,
    signature : move.waterShuriken
}

pkmn.megaGreninja = {
  type: ["water","dark"],
  bst: {
    hp: 72,
    atk: 125,
    def: 77,
    satk: 133,
    sdef: 81,
    spe: 142,
  }
}

// 659 Bunnelby → Diggersby
pkmn.bunnelby = {
  type: ["normal"],
  bst: {
    hp: 38,
    atk: 36,
    def: 38,
    satk: 32,
    sdef: 36,
    spe: 57,
  },
  evolve: function() { return { 1: { pkmn: pkmn.diggersby, level: evolutionLevel1 } } },
    hiddenAbility: ability.hugePower,
    eggMove : move.highHorsepower
}

pkmn.diggersby = {
  type: ["normal","ground"],
  bst: {
    hp: 85,
    atk: 56,
    def: 77,
    satk: 50,
    sdef: 77,
    spe: 78,
  },
    hiddenAbility: ability.hugePower,
    eggMove : move.highHorsepower
}

// 661 Fletchling → Fletchinder → Talonflame
pkmn.fletchling = {
  type: ["normal","flying"],
  bst: {
    hp: 45,
    atk: 50,
    def: 43,
    satk: 40,
    sdef: 38,
    spe: 62,
  },
  evolve: function() { return { 1: { pkmn: pkmn.fletchinder, level: evolutionLevel1 } } },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird
}

pkmn.fletchinder = {
  type: ["fire","flying"],
  bst: {
    hp: 80,
    atk: 73,
    def: 55,
    satk: 56,
    sdef: 52,
    spe: 84,
  },
  evolve: function() { return { 1: { pkmn: pkmn.talonflame, level: evolutionLevel2 } } },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird
}

pkmn.talonflame = {
  type: ["fire","flying"],
  bst: {
    hp: 80,
    atk: 81,
    def: 71,
    satk: 74,
    sdef: 69,
    spe: 126,
  },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird
}

// 664 Scatterbug → Spewpa → Vivillon
pkmn.scatterbug = {
  type: ["bug"],
  bst: {
    hp: 38,
    atk: 35,
    def: 40,
    satk: 27,
    sdef: 25,
    spe: 35,
  },
  evolve: function() { return { 1: { pkmn: pkmn.spewpa, level: evolutionLevel1 } } },
    hiddenAbility: ability.tintedLens,
}

pkmn.spewpa = {
  type: ["bug"],
  bst: {
    hp: 45,
    atk: 22,
    def: 60,
    satk: 27,
    sdef: 30,
    spe: 29,
  },
  evolve: function() { return { 1: { pkmn: pkmn.vivillon, level: evolutionLevel1 } } },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillon = {
  type: ["bug","flying"],
  bst: {
    hp: 80,
    atk: 52,
    def: 50,
    satk: 90,
    sdef: 50,
    spe: 89,
  },
    hiddenAbility: ability.tintedLens,
    variants: function() { return [pkmn.vivillonArchipelago, pkmn.vivillonContinental, pkmn.vivillonElegant, pkmn.vivillonFancy, pkmn.vivillonGarden, pkmn.vivillonHighPlains, pkmn.vivillonIcySnow, pkmn.vivillonJungle, pkmn.vivillonMarine, pkmn.vivillonModern, pkmn.vivillonMonsoon, pkmn.vivillonOcean, pkmn.vivillonPokeball, pkmn.vivillonPolar, pkmn.vivillonRiver, pkmn.vivillonSandstorm, pkmn.vivillonSavanna, pkmn.vivillonSun, pkmn.vivillonTundra] },
}

pkmn.vivillonArchipelago = {
  type: ["flying","rock"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonContinental = {
  type: ["flying","electric"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonElegant = {
  type: ["flying","ghost"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonFancy = {
  type: ["flying","fairy"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonGarden = {
  type: ["flying","grass"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonHighPlains = {
  type: ["flying","fighting"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonIcySnow = {
  type: ["flying","ice"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonJungle = {
  type: ["flying","bug"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonMarine = {
  type: ["flying","water"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonModern = {
  type: ["flying","steel"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonMonsoon = {
  type: ["flying"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonOcean = {
  type: ["flying","fire"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonPokeball = {
  type: ["bug","flying"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonPolar = {
  type: ["flying","dark"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonRiver = {
  type: ["flying","water"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonSandstorm = {
  type: ["flying","ground"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonSavanna = {
  type: ["flying","bug"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonSun = {
  type: ["flying","psychic"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonTundra = {
  type: ["flying","ice"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

// 667 Litleo → Pyroar
pkmn.litleo = {
  type: ["fire","normal"],
  bst: {
    hp: 62,
    atk: 50,
    def: 58,
    satk: 73,
    sdef: 54,
    spe: 72,
  },
  evolve: function() { return { 1: { pkmn: pkmn.pyroar, level: evolutionLevel2 } } },
    hiddenAbility: ability.moxie,
    signature : move.nobleRoar
}

pkmn.pyroar = {
  type: ["fire","normal"],
  bst: {
    hp: 86,
    atk: 68,
    def: 72,
    satk: 109,
    sdef: 66,
    spe: 106,
  },
    hiddenAbility: ability.moxie,
    signature : move.nobleRoar,
    evolve: function() { return { 1: { pkmn: pkmn.megaPyroar, item: item.pyroarite } } },
}

pkmn.megaPyroar = {
  type: ["fire","normal"],
  bst: {
    hp: 86,
    atk: 88,
    def: 92,
    satk: 129,
    sdef: 86,
    spe: 126,
  },
    hiddenAbility: ability.moxie,
    signature : move.nobleRoar
}

// 669 Flabébé → Floette → Florges
pkmn.flabebe = {
  type: ["fairy"],
  bst: {
    hp: 44,
    atk: 38,
    def: 39,
    satk: 61,
    sdef: 79,
    spe: 42,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floette, level: evolutionLevel1 } } },
  hiddenAbility: ability.naturalCure,
  variants: function() { return [pkmn.flabebeBlue, pkmn.flabebeOrange, pkmn.flabebeWhite, pkmn.flabebeYellow] },
}

pkmn.flabebeBlue = {
  type: ["fairy","water"],
  bst: {
    hp: 44,
    atk: 38,
    def: 39,
    satk: 61,
    sdef: 79,
    spe: 42,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floetteBlue, level: evolutionLevel1 } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.flabebeOrange = {
  type: ["fairy","ground"],
  bst: {
    hp: 44,
    atk: 38,
    def: 39,
    satk: 61,
    sdef: 79,
    spe: 42,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floetteOrange, level: evolutionLevel1 } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.flabebeWhite = {
  type: ["fairy","ice"],
  bst: {
    hp: 44,
    atk: 38,
    def: 39,
    satk: 61,
    sdef: 79,
    spe: 42,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floetteWhite, level: evolutionLevel1 } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.flabebeYellow = {
  type: ["fairy","electric"],
  bst: {
    hp: 44,
    atk: 38,
    def: 39,
    satk: 61,
    sdef: 79,
    spe: 42,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floetteYellow, level: evolutionLevel1 } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.floette = {
  type: ["fairy"],
  bst: {
    hp: 54,
    atk: 45,
    def: 47,
    satk: 75,
    sdef: 98,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.florges, item: item.shinyStone } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.floetteBlue = {
  type: ["fairy","water"],
  bst: {
    hp: 54,
    atk: 45,
    def: 47,
    satk: 75,
    sdef: 98,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.florgesBlue, item: item.shinyStone } } },
  hiddenAbility: ability.naturalCure,
  variants: function() { return [pkmn.floetteBlue, pkmn.floetteOrange, pkmn.floetteWhite, pkmn.floetteYellow, pkmn.floetteEternal] },
}

pkmn.floetteOrange = {
  type: ["fairy","ground"],
  bst: {
    hp: 54,
    atk: 45,
    def: 47,
    satk: 75,
    sdef: 98,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.florgesOrange, item: item.shinyStone } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.floetteWhite = {
  type: ["fairy","ice"],
  bst: {
    hp: 54,
    atk: 45,
    def: 47,
    satk: 75,
    sdef: 98,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.florgesWhite, item: item.shinyStone } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.floetteYellow = {
  type: ["fairy","electric"],
  bst: {
    hp: 54,
    atk: 45,
    def: 47,
    satk: 75,
    sdef: 98,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.florgesYellow, item: item.shinyStone } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.floetteEternal = {
  type: ["fairy"],
  bst: {
    hp: 74,
    atk: 65,
    def: 67,
    satk: 125,
    sdef: 128,
    spe: 92,
  },
  // evolve: function() { return { 1: { pkmn: pkmn.megaFloette, item: item.floettite } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.megaFloette = {
  type: ["fairy"],
  bst: {
    hp: 120,
    atk: 85,
    def: 87,
    satk: 205,
    sdef: 148,
    spe: 102,
  }
}

pkmn.florges = {
  type: ["fairy"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 134,
    spe: 75,
  },
    hiddenAbility: ability.naturalCure,
  variants: function() { return [pkmn.florgesBlue, pkmn.florgesOrange, pkmn.florgesWhite, pkmn.florgesYellow] },
}

pkmn.florgesBlue = {
  type: ["fairy","water"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 134,
    spe: 75,
  },
    hiddenAbility: ability.naturalCure,
}

pkmn.florgesOrange = {
  type: ["fairy","ground"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 134,
    spe: 75,
  },
    hiddenAbility: ability.naturalCure,
}

pkmn.florgesWhite = {
  type: ["fairy","ice"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 134,
    spe: 75,
  },
    hiddenAbility: ability.naturalCure,
}

pkmn.florgesYellow = {
  type: ["fairy","electric"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 134,
    spe: 75,
  },
    hiddenAbility: ability.naturalCure,
}

// 672 Skiddo → Gogoat
pkmn.skiddo = {
  type: ["grass"],
  bst: {
    hp: 66,
    atk: 65,
    def: 48,
    satk: 62,
    sdef: 57,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.gogoat, level: evolutionLevel2 } } },
    hiddenAbility: ability.grassyPelt,
    eggMove : move.trailblaze
}

pkmn.gogoat = {
  type: ["grass"],
  bst: {
    hp: 123,
    atk: 100,
    def: 62,
    satk: 97,
    sdef: 81,
    spe: 68,
  },
    hiddenAbility: ability.grassyPelt,
    eggMove : move.trailblaze
}

// 674 Pancham → Pangoro
pkmn.pancham = {
  type: ["fighting"],
  bst: {
    hp: 67,
    atk: 82,
    def: 62,
    satk: 46,
    sdef: 48,
    spe: 43,
  },
  evolve: function() { return { 1: { pkmn: pkmn.pangoro, level: evolutionLevel2 } } },
    hiddenAbility: ability.ironFist,
}

pkmn.pangoro = {
  type: ["fighting","dark"],
  bst: {
    hp: 95,
    atk: 124,
    def: 78,
    satk: 69,
    sdef: 71,
    spe: 58,
  },
    hiddenAbility: ability.ironFist,
}

// 676 Furfrou
pkmn.furfrou = {
  type: ["normal"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
  variants: function() { return [pkmn.furfrouHeart, pkmn.furfrouStar, pkmn.furfrouDiamond, pkmn.furfrouDebutante, pkmn.furfrouMatron, pkmn.furfrouDandy, pkmn.furfrouReine, pkmn.furfrouKabuki, pkmn.furfrouPharaoh] },
}

pkmn.furfrouHeart = {
  type: ["normal","fairy"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouStar = {
  type: ["normal","ice"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouDiamond = {
  type: ["normal","electric"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouDebutante = {
  type: ["normal","ground"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouMatron = {
  type: ["normal","psychic"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouDandy = {
  type: ["normal","grass"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouReine = {
  type: ["normal","steel"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouKabuki = {
  type: ["normal","fire"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouPharaoh = {
  type: ["normal","water"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

// 677 Espurr → Meowstic
pkmn.espurr = {
  type: ["psychic"],
  bst: {
    hp: 62,
    atk: 48,
    def: 54,
    satk: 63,
    sdef: 60,
    spe: 68,
  },
  evolve: function() { return { 1: { pkmn: pkmn.meowstic, level: evolutionLevel2 } } },
    hiddenAbility: ability.pixiePelt,
}

pkmn.meowstic = {
  type: ["psychic"],
  bst: {
    hp: 74,
    atk: 48,
    def: 76,
    satk: 83,
    sdef: 81,
    spe: 104,
  },
    hiddenAbility: ability.pixiePelt,
}

/*

pkmn.megaMeowstic = {
  type: ["psychic"],
  bst: {
    hp: 74,
    atk: 48,
    def: 76,
    satk: 143,
    sdef: 101,
    spe: 124,
  },
}

*/

// 679 Honedge → Doublade → Aegislash
pkmn.honedge = {
  type: ["steel","ghost"],
  bst: {
    hp: 45,
    atk: 80,
    def: 100,
    satk: 35,
    sdef: 37,
    spe: 28,
  },
  evolve: function() { return { 1: { pkmn: pkmn.doublade, level: evolutionLevel2 } } },
    hiddenAbility: ability.iaido,
    signature : move.kingsShield
}

pkmn.doublade = {
  type: ["steel","ghost"],
  bst: {
    hp: 59,
    atk: 110,
    def: 150,
    satk: 45,
    sdef: 49,
    spe: 35,
  },
  evolve: function() { return { 1: { pkmn: pkmn.aegislash, item: item.duskStone } } },
    hiddenAbility: ability.iaido,
    signature : move.kingsShield
}

pkmn.aegislash = {
  type: ["steel","ghost"],
  bst: {
    hp: 60,
    atk: 50,
    def: 150,
    satk: 50,
    sdef: 150,
    spe: 60,
  },
    hiddenAbility: ability.iaido,
    signature : move.kingsShield
}

// 682 Spritzee → Aromatisse
pkmn.spritzee = {
  type: ["fairy"],
  bst: {
    hp: 78,
    atk: 52,
    def: 60,
    satk: 63,
    sdef: 65,
    spe: 23,
  },
  evolve: function() { return { 1: { pkmn: pkmn.aromatisse, item: item.shinyStone } } },
    hiddenAbility: ability.mistySurge,
    signature : move.aromaticMist
}

pkmn.aromatisse = {
  type: ["fairy"],
  bst: {
    hp: 101,
    atk: 72,
    def: 72,
    satk: 99,
    sdef: 89,
    spe: 29,
  },
    hiddenAbility: ability.mistySurge,
    signature : move.aromaticMist
}

// 684 Swirlix → Slurpuff
pkmn.swirlix = {
  type: ["fairy"],
  bst: {
    hp: 62,
    atk: 48,
    def: 66,
    satk: 59,
    sdef: 57,
    spe: 49,
  },
  evolve: function() { return { 1: { pkmn: pkmn.slurpuff, item: item.shinyStone } } },
    hiddenAbility: ability.unburden,
    eggMove : move.bellyDrum
}

pkmn.slurpuff = {
  type: ["fairy"],
  bst: {
    hp: 82,
    atk: 80,
    def: 86,
    satk: 85,
    sdef: 75,
    spe: 72,
  },
    hiddenAbility: ability.unburden,
    eggMove : move.bellyDrum
}

// 686 Inkay → Malamar
pkmn.inkay = {
  type: ["dark","psychic"],
  bst: {
    hp: 53,
    atk: 54,
    def: 53,
    satk: 37,
    sdef: 46,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.malamar, level: evolutionLevel2 } } },
    hiddenAbility: ability.contrary,
    eggMove : move.luminaCrash
}

pkmn.malamar = {
  type: ["dark","psychic"],
  bst: {
    hp: 86,
    atk: 92,
    def: 88,
    satk: 68,
    sdef: 75,
    spe: 73,
  },
    hiddenAbility: ability.contrary,
    eggMove : move.luminaCrash
}

pkmn.megaMalamar = {
  type: ["dark","psychic"],
  bst: {
    hp: 86,
    atk: 102,
    def: 88,
    satk: 98,
    sdef: 120,
    spe: 88,
  },
    hiddenAbility: ability.contrary,
    eggMove : move.luminaCrash
}

// 688 Binacle → Barbaracle
pkmn.binacle = {
  type: ["rock","water"],
  bst: {
    hp: 42,
    atk: 52,
    def: 67,
    satk: 39,
    sdef: 56,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.barbaracle, level: evolutionLevel2 } } },
    hiddenAbility: ability.ambidextrous,
}

pkmn.barbaracle = {
  type: ["rock","water"],
  bst: {
    hp: 72,
    atk: 105,
    def: 115,
    satk: 54,
    sdef: 86,
    spe: 68,
  },
    evolve: function() { return { 1: { pkmn: pkmn.megaBarbaracle, item: item.barbaracite } } },
    hiddenAbility: ability.ambidextrous,
}

pkmn.megaBarbaracle = {
  type: ["rock","fighting"],
  bst: {
    hp: 72,
    atk: 150,
    def: 150,
    satk: 64,
    sdef: 106,
    spe: 88,
  },
    hiddenAbility: ability.ambidextrous,
}

// 690 Skrelp → Dragalge
pkmn.skrelp = {
  type: ["poison","water"],
  bst: {
    hp: 50,
    atk: 60,
    def: 60,
    satk: 60,
    sdef: 60,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dragalge, level: evolutionLevel3 } } },
    hiddenAbility: ability.toxilate,
    eggMove : move.snipeShot
}

pkmn.dragalge = {
  type: ["poison","dragon"],
  bst: {
    hp: 65,
    atk: 75,
    def: 90,
    satk: 97,
    sdef: 123,
    spe: 44,
  },
    hiddenAbility: ability.toxilate,
    eggMove : move.snipeShot
}

pkmn.megaDragalge = {
  type: ["poison","dragon"],
  bst: {
    hp: 95,
    atk: 85,
    def: 135,
    satk: 132,
    sdef: 163,
    spe: 44,
  },
    hiddenAbility: ability.toxilate,
    eggMove : move.snipeShot
}

// 692 Clauncher → Clawitzer
pkmn.clauncher = {
  type: ["water"],
  bst: {
    hp: 50,
    atk: 53,
    def: 62,
    satk: 58,
    sdef: 63,
    spe: 44,
  },
  evolve: function() { return { 1: { pkmn: pkmn.clawitzer, level: evolutionLevel2 } } },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.hydroCannon
}

pkmn.clawitzer = {
  type: ["water"],
  bst: {
    hp: 71,
    atk: 73,
    def: 88,
    satk: 120,
    sdef: 89,
    spe: 59,
  },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.hydroCannon
}

// 694 Helioptile → Heliolisk
pkmn.helioptile = {
  type: ["electric","normal"],
  bst: {
    hp: 44,
    atk: 38,
    def: 33,
    satk: 61,
    sdef: 43,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.heliolisk, item: item.sunStone } } },
    signature : move.electrify,
}

pkmn.heliolisk = {
  type: ["electric","normal"],
  bst: {
    hp: 62,
    atk: 55,
    def: 52,
    satk: 109,
    sdef: 94,
    spe: 109,
  },
    signature : move.electrify,
}

// 696 Tyrunt → Tyrantrum
pkmn.tyrunt = {
  type: ["rock","dragon"],
  bst: {
    hp: 58,
    atk: 89,
    def: 77,
    satk: 45,
    sdef: 45,
    spe: 48,
  },
  evolve: function() { return { 1: { pkmn: pkmn.tyrantrum, level: evolutionLevel3 } } },
    hiddenAbility: ability.strongJaw,
}

pkmn.tyrantrum = {
  type: ["rock","dragon"],
  bst: {
    hp: 82,
    atk: 121,
    def: 119,
    satk: 69,
    sdef: 59,
    spe: 71,
  },
    hiddenAbility: ability.strongJaw,
}

// 698 Amaura → Aurorus
pkmn.amaura = {
  type: ["rock","ice"],
  bst: {
    hp: 77,
    atk: 59,
    def: 50,
    satk: 67,
    sdef: 63,
    spe: 46,
  },
  evolve: function() { return { 1: { pkmn: pkmn.aurorus, item: item.iceStone } } },
    hiddenAbility: ability.snowWarning,
    eggMove: ability.weatherBall,
}

pkmn.aurorus = {
  type: ["rock","ice"],
  bst: {
    hp: 123,
    atk: 77,
    def: 72,
    satk: 99,
    sdef: 92,
    spe: 58,
  },
    hiddenAbility: ability.snowWarning,
    eggMove: ability.weatherBall,
}

// 700 Sylveon

// 701 Hawlucha
pkmn.hawlucha = {
  type: ["fighting","flying"],
  bst: {
    hp: 78,
    atk: 92,
    def: 75,
    satk: 74,
    sdef: 63,
    spe: 118,
  },
    evolve: function() { return { 1: { pkmn: pkmn.megaHawlucha, item: item.hawluchanite } } },
    hiddenAbility: ability.unburden,
    signature : move.flyingPress
}

pkmn.megaHawlucha = {
  type: ["fighting","flying"],
  bst: {
    hp: 78,
    atk: 137,
    def: 100,
    satk: 74,
    sdef: 93,
    spe: 118,
  },
    hiddenAbility: ability.reckless,
    signature : move.flyingPress
}

// 702 Dedenne
pkmn.dedenne = {
  type: ["electric","fairy"],
  bst: {
    hp: 67,
    atk: 58,
    def: 57,
    satk: 81,
    sdef: 67,
    spe: 101,
  },
    hiddenAbility: ability.faeRush,
}

// 703 Carbink
pkmn.carbink = {
  type: ["rock","fairy"],
  bst: {
    hp: 50,
    atk: 50,
    def: 150,
    satk: 50,
    sdef: 150,
    spe: 50,
  },
    hiddenAbility: ability.purifyingSalt,
}

// 704 Goomy → Sliggoo → Goodra
pkmn.goomy = {
  type: ["dragon"],
  bst: {
    hp: 45,
    atk: 50,
    def: 35,
    satk: 55,
    sdef: 75,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.sliggoo, level: evolutionLevel3 } } },
    hiddenAbility: ability.gooey,
}

pkmn.sliggoo = {
  type: ["dragon"],
  bst: {
    hp: 68,
    atk: 75,
    def: 53,
    satk: 83,
    sdef: 113,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.goodra, level: evolutionLevel3 } } },
    hiddenAbility: ability.gooey,
  variants: function() { return [pkmn.hisuianSliggoo] },
}

pkmn.hisuianSliggoo = {
  type: ["steel", "dragon"],
  bst: {
    hp: 58,
    atk: 75,
    def: 83,
    satk: 83,
    sdef: 113,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.hisuianGoodra, level: evolutionLevel3 } } },
    hiddenAbility: ability.gooey,
}

pkmn.goodra = {
  type: ["dragon"],
  bst: {
    hp: 90,
    atk: 100,
    def: 70,
    satk: 110,
    sdef: 150,
    spe: 80,
  },
    hiddenAbility: ability.gooey,
  variants: function() { return [pkmn.hisuianGoodra] },
}

pkmn.hisuianGoodra = {
  type: ["steel", "dragon"],
  bst: {
    hp: 80,
    atk: 100,
    def: 100,
    satk: 110,
    sdef: 150,
    spe: 60,
  },
    hiddenAbility: ability.gooey,
}

// 707 Klefki
pkmn.klefki = {
  type: ["steel","fairy"],
  bst: {
    hp: 57,
    atk: 80,
    def: 91,
    satk: 80,
    sdef: 87,
    spe: 75,
  },
    signature : move.fairyLock
}

// 708 Phantump → Trevenant
pkmn.phantump = {
  type: ["ghost","grass"],
  bst: {
    hp: 43,
    atk: 70,
    def: 48,
    satk: 50,
    sdef: 60,
    spe: 38,
  },
  evolve: function() { return { 1: { pkmn: pkmn.trevenant, level: evolutionLevel2 } } },
    signature : move.forestCurse,
}

pkmn.trevenant = {
  type: ["ghost","grass"],
  bst: {
    hp: 85,
    atk: 110,
    def: 76,
    satk: 65,
    sdef: 82,
    spe: 56,
  },
    signature : move.forestCurse,
}

// 710 Pumpkaboo → Gourgeist
pkmn.pumpkaboo = {
  type: ["ghost","grass"],
  bst: {
    hp: 49,
    atk: 66,
    def: 70,
    satk: 44,
    sdef: 55,
    spe: 51,
  },
  evolve: function() { return { 1: { pkmn: pkmn.gourgeist, level: evolutionLevel3 } } },
    signature : move.trickOrTreat
}

pkmn.gourgeist = {
  type: ["ghost","grass"],
  bst: {
    hp: 65,
    atk: 90,
    def: 122,
    satk: 58,
    sdef: 75,
    spe: 84,
  },
    signature : move.trickOrTreat
}

// 712 Bergmite → Avalugg
pkmn.bergmite = {
  type: ["ice"],
  bst: {
    hp: 55,
    atk: 69,
    def: 85,
    satk: 32,
    sdef: 35,
    spe: 28,
  },
  evolve: function() { return { 1: { pkmn: pkmn.avalugg, level: evolutionLevel2 } } },
    hiddenAbility: ability.iceBody,
    signature : move.mountainGale
}

pkmn.avalugg = {
  type: ["ice"],
  bst: {
    hp: 95,
    atk: 117,
    def: 184,
    satk: 44,
    sdef: 46,
    spe: 28,
  },
    hiddenAbility: ability.iceBody,
    signature : move.mountainGale,
    variants: function() { return [pkmn.hisuianAvalugg] },
}

pkmn.hisuianAvalugg = {
  type: ["ice", "rock"],
  bst: {
    hp: 95,
    atk: 127,
    def: 184,
    satk: 34,
    sdef: 36,
    spe: 38,
  },
    signature : move.mountainGale
}

// 714 Noibat → Noivern
pkmn.noibat = {
  type: ["flying","dragon"],
  bst: {
    hp: 40,
    atk: 30,
    def: 35,
    satk: 45,
    sdef: 40,
    spe: 55,
  },
  evolve: function() { return { 1: { pkmn: pkmn.noivern, level: evolutionLevel3 } } },
    hiddenAbility: ability.cacophony,
    eggMove : move.boomburst
}

pkmn.noivern = {
  type: ["flying","dragon"],
  bst: {
    hp: 85,
    atk: 70,
    def: 80,
    satk: 97,
    sdef: 80,
    spe: 123,
  },
    hiddenAbility: ability.cacophony,
    eggMove : move.roarOfTime
}

// 716 Xerneas
pkmn.xerneas = {
    type: ["fairy"],
    bst: {
        hp: 126,
        atk: 131,
        def: 95,
        satk: 131,
        sdef: 98,
        spe: 99,
    }
}

// 717 Yveltal
pkmn.yveltal = {
    type: ["dark","flying"],
    bst: {
        hp: 126,
        atk: 131,
        def: 95,
        satk: 131,
        sdef: 98,
        spe: 99,
    }
}

// 718 Zygarde
pkmn.zygarde10 = {
    rename: `zygarde 10%`,
    type: ["dragon","ground"],
    bst: {
        hp: 54,
        atk: 100,
        def: 71,
        satk: 61,
        sdef: 85,
        spe: 115,
    },
    variants: function() { return [pkmn.zygarde50, pkmn.zygarde100] },
}

pkmn.zygarde50 = {
    rename: `zygarde 50%`,
    type: ["dragon","ground"],
    bst: {
        hp: 138,
        atk: 100,
        def: 151,
        satk: 81,
        sdef: 95,
        spe: 95,
    }
}

pkmn.zygarde100 = {
    rename: `zygarde 100%`,
    type: ["dragon","ground"],
    bst: {
        hp: 216,
        atk: 100,
        def: 181,
        satk: 91,
        sdef: 125,
        spe: 85,
    },
    // evolve: function() { return { 1: { pkmn: pkmn.megaZygarde, item: item.zygardite } } },
}

pkmn.megaZygarde = {
    type: ["dragon","ground"],
    bst: {
        hp: 216,
        atk: 100,
        def: 91,
        satk: 216,
        sdef: 85,
        spe: 100,
    }
}

// 719 Diancie
pkmn.diancie = {
    type: ["rock","fairy"],
    bst: {
        hp: 50,
        atk: 100,
        def: 150,
        satk: 100,
        sdef: 150,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaDiancie, item: item.diancite } } },
}

pkmn.megaDiancie = {
    type: ["rock","fairy"],
    bst: {
        hp: 50,
        atk: 160,
        def: 110,
        satk: 160,
        sdef: 110,
        spe: 110,
    }
}

// 720 Hoopa
pkmn.hoopa = {
    type: ["psychic","ghost"],
    bst: {
        hp: 80,
        atk: 110,
        def: 60,
        satk: 150,
        sdef: 130,
        spe: 70,
    },
    variants: function() { return [pkmn.hoopaUnbound] },
}

pkmn.hoopaUnbound = {
    type: ["psychic","dark"],
    bst: {
        hp: 80,
        atk: 160,
        def: 60,
        satk: 170,
        sdef: 130,
        spe: 80,
    }
}

// 721 Volcanion
pkmn.volcanion = {
    type: ["fire","water"],
    bst: {
        hp: 80,
        atk: 110,
        def: 120,
        satk: 130,
        sdef: 90,
        spe: 70,
    }
}

// 722 Rowlet → Dartrix → Decidueye
pkmn.rowlet = {
  type: ["grass","flying"],
  bst: {
    hp: 68,
    atk: 55,
    def: 55,
    satk: 50,
    sdef: 50,
    spe: 42,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dartrix, level: evolutionLevel1 } } },
    hiddenAbility: ability.noGuard,
}

pkmn.dartrix = {
  type: ["grass","flying"],
  bst: {
    hp: 78,
    atk: 75,
    def: 75,
    satk: 70,
    sdef: 70,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.decidueye, level: evolutionLevel2 } } },
    hiddenAbility: ability.noGuard,
}

pkmn.decidueye = {
  type: ["grass","ghost"],
  bst: {
    hp: 88,
    atk: 107,
    def: 75,
    satk: 100,
    sdef: 75,
    spe: 70,
  },
    hiddenAbility: ability.noGuard,
    variants: function() { return [pkmn.hisuianDecidueye] },
}

pkmn.hisuianDecidueye = {
  type: ["grass","fighting"],
  bst: {
    hp: 88,
    atk: 112,
    def: 80,
    satk: 95,
    sdef: 95,
    spe: 60,
  },
}

// 725 Litten → Torracat → Incineroar
pkmn.litten = {
  type: ["fire"],
  bst: {
    hp: 45,
    atk: 65,
    def: 40,
    satk: 60,
    sdef: 40,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.torracat, level: evolutionLevel1 } } },
    hiddenAbility: ability.intimidate,
    signature : move.darkestLariat
}


pkmn.torracat = {
  type: ["fire"],
  bst: {
    hp: 65,
    atk: 85,
    def: 50,
    satk: 80,
    sdef: 50,
    spe: 90,
  },
  evolve: function() { return { 1: { pkmn: pkmn.incineroar, level: evolutionLevel2 } } },
    hiddenAbility: ability.intimidate,
    signature : move.darkestLariat
}

pkmn.incineroar = {
  type: ["fire","dark"],
  bst: {
    hp: 95,
    atk: 115,
    def: 90,
    satk: 80,
    sdef: 90,
    spe: 60,
  },
    hiddenAbility: ability.intimidate,
    signature : move.darkestLariat
}

// 728 Popplio → Brionne → Primarina
pkmn.popplio = {
  type: ["water"],
  bst: {
    hp: 50,
    atk: 54,
    def: 54,
    satk: 66,
    sdef: 56,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.brionne, level: evolutionLevel1 } } },
    hiddenAbility: ability.cacophony,
    signature : move.sparklingAria
}

pkmn.brionne = {
  type: ["water"],
  bst: {
    hp: 60,
    atk: 69,
    def: 69,
    satk: 91,
    sdef: 81,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.primarina, level: evolutionLevel2 } } },
    hiddenAbility: ability.cacophony,
    signature : move.sparklingAria
}

pkmn.primarina = {
  type: ["water","fairy"],
  bst: {
    hp: 80,
    atk: 74,
    def: 74,
    satk: 126,
    sdef: 100,
    spe: 60,
  },
    hiddenAbility: ability.cacophony,
    signature : move.sparklingAria
}

// 731 Pikipek → Trumbeak → Toucannon
pkmn.pikipek = {
  type: ["normal","flying"],
  bst: {
    hp: 35,
    atk: 75,
    def: 30,
    satk: 30,
    sdef: 30,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.trumbeak, level: evolutionLevel1 } } },
    hiddenAbility: ability.skillLink,
    signature : move.beakBlast
}

pkmn.trumbeak = {
  type: ["normal","flying"],
  bst: {
    hp: 55,
    atk: 85,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.toucannon, level: evolutionLevel2 } } },
  hiddenAbility: ability.skillLink,
    signature : move.beakBlast
}

pkmn.toucannon = {
  type: ["normal","flying"],
  bst: {
    hp: 80,
    atk: 120,
    def: 75,
    satk: 75,
    sdef: 75,
    spe: 60,
  },
    hiddenAbility: ability.skillLink,
    signature : move.beakBlast
}

// 734 Yungoos → Gumshoos
pkmn.yungoos = {
  type: ["normal"],
  bst: {
    hp: 48,
    atk: 70,
    def: 30,
    satk: 30,
    sdef: 30,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.gumshoos, level: evolutionLevel1 } } },
    hiddenAbility: ability.adaptability,
}

pkmn.gumshoos = {
  type: ["normal"],
  bst: {
    hp: 88,
    atk: 110,
    def: 60,
    satk: 55,
    sdef: 60,
    spe: 45,
  },
    hiddenAbility: ability.adaptability,
}

// 736 Grubbin → Charjabug → Vikavolt
pkmn.grubbin = {
  type: ["bug"],
  bst: {
    hp: 47,
    atk: 62,
    def: 45,
    satk: 55,
    sdef: 45,
    spe: 46,
  },
  evolve: function() { return { 1: { pkmn: pkmn.charjabug, level: evolutionLevel2 } } },
    eggMove : move.auraWheel
}

pkmn.charjabug = {
  type: ["bug","electric"],
  bst: {
    hp: 57,
    atk: 82,
    def: 95,
    satk: 55,
    sdef: 75,
    spe: 36,
  },
  evolve: function() { return { 1: { pkmn: pkmn.vikavolt, item: item.thunderStone } } },
    eggMove : move.auraWheel
}

pkmn.vikavolt = {
  type: ["bug","electric"],
  bst: {
    hp: 77,
    atk: 70,
    def: 90,
    satk: 145,
    sdef: 75,
    spe: 43,
  },
    eggMove : move.auraWheel
}

// 739 Crabrawler → Crabominable
pkmn.crabrawler = {
  type: ["fighting"],
  bst: {
    hp: 47,
    atk: 82,
    def: 57,
    satk: 42,
    sdef: 47,
    spe: 63,
  },
  evolve: function() { return { 1: { pkmn: pkmn.crabominable, level: evolutionLevel2 } } },
    hiddenAbility: ability.icyPelt,
    signature : move.iceHammer
}

pkmn.crabominable = {
  type: ["fighting","ice"],
  bst: {
    hp: 97,
    atk: 132,
    def: 77,
    satk: 62,
    sdef: 67,
    spe: 43,
  },
    hiddenAbility: ability.icyPelt,
    signature : move.iceHammer
}

/*

pkmn.megaCrabominable = {
  type: ["fighting","ice"],
  bst: {
    hp: 97,
    atk: 157,
    def: 122,
    satk: 62,
    sdef: 107,
    spe: 33,
  }
}

*/

// 741 Oricorio
pkmn.oricorioBaile = {
  type: ["fire","flying"],
  bst: {
    hp: 75,
    atk: 70,
    def: 70,
    satk: 98,
    sdef: 100,
    spe: 110,
  },
    signature : move.revelationDance,
    hiddenAbility: ability.dancer,
    variants: function() { return [pkmn.oricorioPomPom, pkmn.oricorioPau, pkmn.oricorioSensu] },
}

pkmn.oricorioPomPom = {
  type: ["electric","flying"],
  bst: {
    hp: 75,
    atk: 70,
    def: 70,
    satk: 98,
    sdef: 100,
    spe: 110,
  },
    signature : move.revelationDance,
    hiddenAbility: ability.dancer,
}

pkmn.oricorioPau = {
  type: ["psychic","flying"],
  bst: {
    hp: 75,
    atk: 70,
    def: 70,
    satk: 98,
    sdef: 100,
    spe: 110,
  },
    signature : move.revelationDance,
    hiddenAbility: ability.dancer,
}

pkmn.oricorioSensu = {
  type: ["ghost","flying"],
  bst: {
    hp: 75,
    atk: 70,
    def: 70,
    satk: 98,
    sdef: 100,
    spe: 110,
  },
    signature : move.revelationDance,
    hiddenAbility: ability.dancer,
}

// 742 Cutiefly → Ribombee
pkmn.cutiefly = {
  type: ["bug","fairy"],
  bst: {
    hp: 40,
    atk: 45,
    def: 40,
    satk: 55,
    sdef: 40,
    spe: 84,
  },
  evolve: function() { return { 1: { pkmn: pkmn.ribombee, level: evolutionLevel2 } } },
    hiddenAbility: ability.faeRush,
}

pkmn.ribombee = {
  type: ["bug","fairy"],
  bst: {
    hp: 60,
    atk: 55,
    def: 60,
    satk: 95,
    sdef: 70,
    spe: 124,
  },
    hiddenAbility: ability.faeRush,
}

// 744 Rockruff → Lycanroc
pkmn.rockruff = {
    type: ["rock"],
    bst: {
        hp: 45,
        atk: 65,
        def: 40,
        satk: 30,
        sdef: 40,
        spe: 60,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.lycanrocMidday, item: item.sunStone }, 
            2: { pkmn: pkmn.lycanrocMidnight, item: item.moonStone },
        } 
    },
    hiddenAbility: ability.sandyPelt,
}

pkmn.lycanrocMidday = {
    type: ["rock"],
    bst: {
        hp: 75,
        atk: 115,
        def: 65,
        satk: 55,
        sdef: 65,
        spe: 112,
    },
    hiddenAbility: ability.sandyPelt,
}

pkmn.lycanrocMidnight = {
    type: ["rock"],
    bst: {
        hp: 85,
        atk: 115,
        def: 75,
        satk: 55,
        sdef: 75,
        spe: 82,
    },
    hiddenAbility: ability.moody,
}

pkmn.lycanrocDusk = {
    type: ["rock"],
    bst: {
        hp: 75,
        atk: 117,
        def: 65,
        satk: 55,
        sdef: 65,
        spe: 110,
    }
}

// 746 Wishiwashi
pkmn.wishiwashi = {
  type: ["water"],
  bst: {
    hp: 45,
    atk: 20,
    def: 20,
    satk: 25,
    sdef: 25,
    spe: 40,
  },
  variants: function() { return [pkmn.wishiwashiSchool] },
}

pkmn.wishiwashiSchool = {
  type: ["water"],
  bst: {
    hp: 45,
    atk: 140,
    def: 130,
    satk: 140,
    sdef: 135,
    spe: 30,
  }
}

// 747 Mareanie → Toxapex
pkmn.mareanie = {
  type: ["poison","water"],
  bst: {
    hp: 50,
    atk: 53,
    def: 62,
    satk: 43,
    sdef: 52,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.toxapex, level: evolutionLevel2 } } },
}

pkmn.toxapex = {
  type: ["poison","water"],
  bst: {
    hp: 50,
    atk: 63,
    def: 152,
    satk: 53,
    sdef: 142,
    spe: 35,
  },
}

// 749 Mudbray → Mudsdale
pkmn.mudbray = {
  type: ["ground"],
  bst: {
    hp: 70,
    atk: 100,
    def: 70,
    satk: 45,
    sdef: 55,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.mudsdale, level: evolutionLevel2 } } },
    signature : move.highHorsepower,
    hiddenAbility: ability.stamina,
}

pkmn.mudsdale = {
  type: ["ground"],
  bst: {
    hp: 100,
    atk: 125,
    def: 100,
    satk: 55,
    sdef: 85,
    spe: 35,
  },
    signature : move.highHorsepower,
    hiddenAbility: ability.stamina,
}

// 751 Dewpider → Araquanid
pkmn.dewpider = {
  type: ["water","bug"],
  bst: {
    hp: 38,
    atk: 40,
    def: 52,
    satk: 40,
    sdef: 72,
    spe: 27,
  },
  evolve: function() { return { 1: { pkmn: pkmn.araquanid, level: evolutionLevel1 } } },
    eggMove : move.snipeShot
}

pkmn.araquanid = {
  type: ["water","bug"],
  bst: {
    hp: 68,
    atk: 70,
    def: 92,
    satk: 50,
    sdef: 132,
    spe: 42,
  },
    eggMove : move.snipeShot
}

// 753 Fomantis → Lurantis
pkmn.fomantis = {
  type: ["grass"],
  bst: {
    hp: 40,
    atk: 55,
    def: 35,
    satk: 50,
    sdef: 35,
    spe: 35,
  },
  evolve: function() { return { 1: { pkmn: pkmn.lurantis, level: evolutionLevel2 } } },
    hiddenAbility: ability.contrary,
    eggMove : move.needleArm
}

pkmn.lurantis = {
  type: ["grass"],
  bst: {
    hp: 70,
    atk: 105,
    def: 70,
    satk: 80,
    sdef: 90,
    spe: 45,
  },
    hiddenAbility: ability.contrary,
    eggMove : move.needleArm
}

// 755 Morelull → Shiinotic
pkmn.morelull = {
  type: ["grass","fairy"],
  bst: {
    hp: 40,
    atk: 35,
    def: 55,
    satk: 65,
    sdef: 75,
    spe: 15,
  },
  evolve: function() { return { 1: { pkmn: pkmn.shiinotic, level: evolutionLevel2 } } },
    hiddenAbility: ability.colorSpore,
}

pkmn.shiinotic = {
  type: ["grass","fairy"],
  bst: {
    hp: 60,
    atk: 45,
    def: 80,
    satk: 90,
    sdef: 100,
    spe: 30,
  },
    hiddenAbility: ability.colorSpore,
}

// 757 Salandit → Salazzle
pkmn.salandit = {
  type: ["poison","fire"],
  bst: {
    hp: 48,
    atk: 44,
    def: 40,
    satk: 71,
    sdef: 40,
    spe: 77,
  },
  evolve: function() { return { 1: { pkmn: pkmn.salazzle, level: evolutionLevel2 } } },
    signature : move.fireLash,
    hiddenAbility: ability.corrosion,
}

pkmn.salazzle = {
  type: ["poison","fire"],
  bst: {
    hp: 68,
    atk: 64,
    def: 60,
    satk: 111,
    sdef: 60,
    spe: 117,
  },
    signature : move.fireLash,
    hiddenAbility: ability.corrosion,
}

// 759 Stufful → Bewear
pkmn.stufful = {
  type: ["normal","fighting"],
  bst: {
    hp: 70,
    atk: 75,
    def: 50,
    satk: 45,
    sdef: 50,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.bewear, level: evolutionLevel2 } } },
    hiddenAbility: ability.angerPoint,
}

pkmn.bewear = {
  type: ["normal","fighting"],
  bst: {
    hp: 120,
    atk: 125,
    def: 80,
    satk: 55,
    sdef: 60,
    spe: 60,
  },
    hiddenAbility: ability.angerPoint,
}

// 761 Bounsweet → Steenee → Tsareena
pkmn.bounsweet = {
  type: ["grass"],
  bst: {
    hp: 42,
    atk: 30,
    def: 38,
    satk: 30,
    sdef: 38,
    spe: 32,
  },
  evolve: function() { return { 1: { pkmn: pkmn.steenee, level: evolutionLevel1 } } },
    signature : move.tropKick,
    hiddenAbility: ability.libero,
}

pkmn.steenee = {
  type: ["grass"],
  bst: {
    hp: 52,
    atk: 40,
    def: 48,
    satk: 40,
    sdef: 48,
    spe: 62,
  },
  evolve: function() { return { 1: { pkmn: pkmn.tsareena, level: evolutionLevel2 } } },
    signature : move.tropKick,
    hiddenAbility: ability.libero,
}

pkmn.tsareena = {
  type: ["grass"],
  bst: {
    hp: 72,
    atk: 120,
    def: 98,
    satk: 50,
    sdef: 98,
    spe: 72,
  },
    signature : move.tropKick,
    hiddenAbility: ability.libero,
}

// 764 Comfey
pkmn.comfey = {
  type: ["fairy"],
  bst: {
    hp: 51,
    atk: 52,
    def: 90,
    satk: 82,
    sdef: 110,
    spe: 100,
  },
    signature : move.floralHealing,
    hiddenAbility: ability.purifyingSalt,
}

// 765 Oranguru
pkmn.oranguru = {
  type: ["normal","psychic"],
  bst: {
    hp: 90,
    atk: 60,
    def: 80,
    satk: 90,
    sdef: 110,
    spe: 60,
  },
    hiddenAbility: ability.strategist,
    eggMove : move.storedPower
}

// 766 Passimian
pkmn.passimian = {
  type: ["fighting"],
  bst: {
    hp: 100,
    atk: 120,
    def: 90,
    satk: 40,
    sdef: 60,
    spe: 80,
  },
    hiddenAbility: ability.gorillaTactics,
    eggMove : move.hiJumpKick
}

// 767 Wimpod → Golisopod
pkmn.wimpod = {
  type: ["bug","water"],
  bst: {
    hp: 25,
    atk: 35,
    def: 40,
    satk: 20,
    sdef: 30,
    spe: 80,
  },
  evolve: function() { return { 1: { pkmn: pkmn.golisopod, level: evolutionLevel2 } } },
    hiddenAbility: ability.ambidextrous,
    eggMove : move.razorShell
}

pkmn.golisopod = {
  type: ["bug","water"],
  bst: {
    hp: 75,
    atk: 125,
    def: 140,
    satk: 60,
    sdef: 90,
    spe: 40,
  },
    hiddenAbility: ability.ambidextrous,
    eggMove : move.razorShell
}

/*

pkmn.megaGolisopod = {
  type: ["bug","steel"],
  bst: {
    hp: 75,
    atk: 150,
    def: 175,
    satk: 70,
    sdef: 120,
    spe: 40,
  },
}

*/

// 769 Sandygast → Palossand
pkmn.sandygast = {
  type: ["ghost","ground"],
  bst: {
    hp: 55,
    atk: 55,
    def: 80,
    satk: 70,
    sdef: 45,
    spe: 15,
  },
  evolve: function() { return { 1: { pkmn: pkmn.palossand, level: evolutionLevel3 } } },
}

pkmn.palossand = {
  type: ["ghost","ground"],
  bst: {
    hp: 85,
    atk: 75,
    def: 110,
    satk: 100,
    sdef: 75,
    spe: 35,
  },
}

// 771 Pyukumuku
pkmn.pyukumuku = {
  type: ["water"],
  bst: {
    hp: 55,
    atk: 60,
    def: 130,
    satk: 30,
    sdef: 130,
    spe: 5,
  },
}

// 772 Type: Null → Silvally
pkmn.typeNull = {
  type: ["normal"],
  bst: {
    hp: 95,
    atk: 95,
    def: 95,
    satk: 95,
    sdef: 95,
    spe: 59,
  },
  evolve: function() { return { 1: { pkmn: pkmn.silvally, level: evolutionLevel3 } } },
    hiddenAbility: ability.adaptability,
    eggMove : move.conversion
}

pkmn.silvally = {
  type: ["normal"],
  bst: {
    hp: 110,
    atk: 95,
    def: 95,
    satk: 95,
    sdef: 95,
    spe: 95,
  },
    hiddenAbility: ability.adaptability,
    eggMove : move.conversion
}

// 774 Minior
pkmn.minior = {
  type: ["rock","flying"],
  bst: {
    hp: 60,
    atk: 60,
    def: 100,
    satk: 60,
    sdef: 100,
    spe: 60,
  },
    hiddenAbility: ability.shieldsDown,
    eggMove : move.lunarDance,
    variants: function() { return [pkmn.miniorBlue, pkmn.miniorGreen, pkmn.miniorIndigo, pkmn.miniorOrange, pkmn.miniorRed, pkmn.miniorViolet, pkmn.miniorYellow] },
}

pkmn.miniorBlue = {
  type: ["rock","water"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorGreen = {
  type: ["rock","grass"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorIndigo = {
  type: ["rock","ice"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorOrange = {
  type: ["rock","fire"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorRed = {
  type: ["rock","psychic"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorViolet = {
  type: ["rock","ghost"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorYellow = {
  type: ["rock","electric"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

// 775 Komala
pkmn.komala = {
  type: ["normal"],
  bst: {
    hp: 65,
    atk: 115,
    def: 65,
    satk: 75,
    sdef: 95,
    spe: 65,
  },
}

// 776 Turtonator
pkmn.turtonator = {
  type: ["fire","dragon"],
  bst: {
    hp: 60,
    atk: 78,
    def: 135,
    satk: 91,
    sdef: 85,
    spe: 36,
  },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.pyroBall
}

// 777 Togedemaru
pkmn.togedemaru = {
  type: ["electric","steel"],
  bst: {
    hp: 65,
    atk: 98,
    def: 63,
    satk: 40,
    sdef: 73,
    spe: 96,
  },
    signature : move.zingZap,
}

// 778 Mimikyu
pkmn.mimikyu = {
  type: ["ghost","fairy"],
  bst: {
    hp: 55,
    atk: 90,
    def: 80,
    satk: 50,
    sdef: 105,
    spe: 96,
  },
    hiddenAbility: ability.imposter,
    eggMove : move.mimic
}

// 779 Bruxish
pkmn.bruxish = {
  type: ["water","psychic"],
  bst: {
    hp: 68,
    atk: 105,
    def: 70,
    satk: 70,
    sdef: 70,
    spe: 92,
  },
    hiddenAbility: ability.strongJaw,
}

// 780 Drampa
pkmn.drampa = {
  type: ["normal","dragon"],
  bst: {
    hp: 78,
    atk: 60,
    def: 85,
    satk: 135,
    sdef: 91,
    spe: 36,
  },
}

pkmn.megaDrampa = {
  type: ["normal","dragon"],
  bst: {
    hp: 78,
    atk: 85,
    def: 110,
    satk: 160,
    sdef: 116,
    spe: 36,
  },
}

// 781 Dhelmise
pkmn.dhelmise = {
  type: ["ghost","grass"],
  bst: {
    hp: 70,
    atk: 131,
    def: 100,
    satk: 86,
    sdef: 90,
    spe: 40,
  },
    signature : move.anchorShot
}

// 782 Jangmo-o → Hakamo-o → Kommo-o
pkmn.jangmoo = {
  type: ["dragon"],
  bst: {
    hp: 45,
    atk: 55,
    def: 65,
    satk: 45,
    sdef: 45,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.hakamoo, level: evolutionLevel2 } } },
    signature : move.clangingScales,
    hiddenAbility: ability.cacophony,
}

pkmn.hakamoo = {
  type: ["dragon","fighting"],
  bst: {
    hp: 55,
    atk: 75,
    def: 90,
    satk: 55,
    sdef: 65,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.kommoo, level: evolutionLevel3 } } },
    signature : move.clangingScales,
    hiddenAbility: ability.cacophony,
}

pkmn.kommoo = {
  type: ["dragon","fighting"],
  bst: {
    hp: 75,
    atk: 110,
    def: 125,
    satk: 100,
    sdef: 105,
    spe: 85,
  },
    signature : move.clangingScales,
    hiddenAbility: ability.cacophony,
}

// 785 Tapu Koko
pkmn.tapuKoko = {
  type: ["electric","fairy"],
  bst: {
    hp: 90,
    atk: 115,
    def: 85,
    satk: 95,
    sdef: 75,
    spe: 160,
  },
    hiddenAbility: ability.electricSurge,
    eggMove: move.electrify,
}

// 786 Tapu Lele
pkmn.tapuLele = {
  type: ["psychic","fairy"],
  bst: {
    hp: 90,
    atk: 85,
    def: 75,
    satk: 150,
    sdef: 125,
    spe: 95,
  },
    hiddenAbility: ability.mistySurge,
    eggMove: move.fairyLock,
}

// 787 Tapu Bulu
pkmn.tapuBulu = {
  type: ["grass","fairy"],
  bst: {
    hp: 90,
    atk: 130,
    def: 175,
    satk: 85,
    sdef: 95,
    spe: 75,
  },
    hiddenAbility: ability.grassySurge,
    eggMove: move.forestCurse,
}

// 788 Tapu Fini
pkmn.tapuFini = {
  type: ["water","fairy"],
  bst: {
    hp: 90,
    atk: 75,
    def: 115,
    satk: 95,
    sdef: 170,
    spe: 85,
  },
    hiddenAbility: ability.mistySurge,
    eggMove: move.soak,
}

// 789 Cosmog → Cosmoem → Solgaleo / Lunala
pkmn.cosmog = {
  type: ["psychic"],
  bst: {
    hp: 43,
    atk: 29,
    def: 31,
    satk: 29,
    sdef: 31,
    spe: 37,
  },
  evolve: function() { return { 1: { pkmn: pkmn.cosmoem, level: evolutionLevel3 } } },
    eggMove : move.kinesis
}

pkmn.cosmoem = {
  type: ["psychic"],
  bst: {
    hp: 100,
    atk: 50,
    def: 161,
    satk: 100,
    sdef: 161,
    spe: 37,
  },
    eggMove : move.kinesis
}

pkmn.solgaleo = {
  type: ["psychic","steel"],
  bst: {
    hp: 137,
    atk: 137,
    def: 107,
    satk: 113,
    sdef: 89,
    spe: 97,
  },
    hiddenAbility: ability.fullMetalBody,
    signature : move.sunsteelStrike
}

pkmn.lunala = {
  type: ["psychic","ghost"],
  bst: {
    hp: 137,
    atk: 113,
    def: 89,
    satk: 137,
    sdef: 107,
    spe: 97,
  },
    signature : move.moongeistBeam
}

// 793 Nihilego
pkmn.nihilego = {
  type: ["rock","poison"],
  bst: {
    hp: 109,
    atk: 53,
    def: 50,
    satk: 147,
    sdef: 141,
    spe: 103,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.mimic
}

// 794 Buzzwole
pkmn.buzzwole = {
  type: ["bug","fighting"],
  bst: {
    hp: 120,
    atk: 140,
    def: 140,
    satk: 53,
    sdef: 53,
    spe: 79,
  },
    hiddenAbility: ability.beastBoost,
}

// 795 Pheromosa
pkmn.pheromosa = {
  type: ["bug","fighting"],
  bst: {
    hp: 80,
    atk: 140,
    def: 40,
    satk: 140,
    sdef: 40,
    spe: 161,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.meFirst
}

// 796 Xurkitree
pkmn.xurkitree = {
  type: ["electric"],
  bst: {
    hp: 100,
    atk: 89,
    def: 80,
    satk: 180,
    sdef: 80,
    spe: 100,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.ionise
}

// 797 Celesteela
pkmn.celesteela = {
  type: ["steel","flying"],
  bst: {
    hp: 80,
    atk: 120,
    def: 120,
    satk: 107,
    sdef: 101,
    spe: 61,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.anchorShot
}

// 798 Kartana
pkmn.kartana = {
  type: ["grass","steel"],
  bst: {
    hp: 59,
    atk: 181,
    def: 140,
    satk: 60,
    sdef: 40,
    spe: 120,
  },
    hiddenAbility: ability.beastBoost,
}

// 799 Guzzlord
pkmn.guzzlord = {
  type: ["dark","dragon"],
  bst: {
    hp: 223,
    atk: 131,
    def: 80,
    satk: 100,
    sdef: 53,
    spe: 43,
  },
    hiddenAbility: ability.beastBoost,
}

// 800 Necrozma
pkmn.necrozma = {
  type: ["psychic"],
  bst: {
    hp: 105,
    atk: 115,
    def: 101,
    satk: 137,
    sdef: 120,
    spe: 79,
  },
    hiddenAbility: ability.lightAbsorb,
    signature : move.prismaticLaser
}

pkmn.necrozmaDawnWings = {
    type: ["psychic","ghost"],
    bst: {
        hp: 150,
        atk: 113,
        def: 109,
        satk: 167,
        sdef: 127,
        spe: 77,
    }
}

pkmn.necrozmaDuskMane = {
    type: ["psychic","steel"],
    bst: {
        hp: 150,
        atk: 167,
        def: 127,
        satk: 113,
        sdef: 109,
        spe: 77,
    }
}

pkmn.ultraNecrozma = {
    type: ["psychic","dragon"],
    bst: {
        hp: 97,
        atk: 197,
        def: 97,
        satk: 197,
        sdef: 97,
        spe: 159,
    }
}

// 801 Magearna
pkmn.magearna = {
    type: ["steel","fairy"],
    bst: {
        hp: 80,
        atk: 95,
        def: 115,
        satk: 130,
        sdef: 115,
        spe: 65,
    },
    // evolve: function() { return { 1: { pkmn: pkmn.megaMagearna, item: item.magearnite } } },
    signature : move.gearUp
}

pkmn.magearnaOriginal = {
    type: ["steel","fairy"],
    bst: {
        hp: 80,
        atk: 95,
        def: 115,
        satk: 130,
        sdef: 115,
        spe: 65,
    },
    signature : move.gearUp
}



pkmn.megaMagearna = {
    type: ["steel","fairy"],
    bst: {
        hp: 80,
        atk: 125,
        def: 155,
        satk: 170,
        sdef: 115,
        spe: 95,
    }
}

pkmn.megaMagearnaOriginal = {
    type: ["steel","fairy"],
    bst: {
        hp: 80,
        atk: 125,
        def: 155,
        satk: 170,
        sdef: 115,
        spe: 95,
    }
}



// 802 Marshadow
pkmn.marshadow = {
    hidden:true,
    type: ["fighting","ghost"],
    bst: {
        hp: 90,
        atk: 125,
        def: 80,
        satk: 90,
        sdef: 90,
        spe: 125,
    },
    hiddenAbility: ability.soulAsterism,
    signature : move.spectralThief

}

// 803 Poipole → Naganadel
pkmn.poipole = {
  type: ["poison"],
  bst: {
    hp: 67,
    atk: 73,
    def: 67,
    satk: 73,
    sdef: 67,
    spe: 73,
  },
  evolve: function() { return { 1: { pkmn: pkmn.naganadel, level: evolutionLevel3 } } },
    hiddenAbility: ability.beastBoost,
    eggMove : move.toxicThread
}

pkmn.naganadel = {
  type: ["poison","dragon"],
  bst: {
    hp: 80,
    atk: 80,
    def: 80,
    satk: 127,
    sdef: 80,
    spe: 121,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.toxicThread
}

// 805 Stakataka
pkmn.stakataka = {
  type: ["rock","steel"],
  bst: {
    hp: 80,
    atk: 141,
    def: 211,
    satk: 53,
    sdef: 101,
    spe: 13,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.noRetreat
}

// 806 Blacephalon
pkmn.blacephalon = {
  type: ["fire","ghost"],
  bst: {
    hp: 53,
    atk: 127,
    def: 53,
    satk: 151,
    sdef: 79,
    spe: 107,
  },
    signature : move.mindBlown,
    hiddenAbility: ability.beastBoost,
}

// 807 Zeraora
pkmn.zeraora = {
  type: ["electric"],
  bst: {
    hp: 88,
    atk: 122,
    def: 75,
    satk: 102,
    sdef: 80,
    spe: 153,
  },
}



pkmn.megaZeraora = {
  type: ["electric"],
  bst: {
    hp: 88,
    atk: 157,
    def: 75,
    satk: 147,
    sdef: 80,
    spe: 153,
  },
}



// 808 Meltan → Melmetal
pkmn.meltan = {
  type: ["steel"],
  bst: {
    hp: 46,
    atk: 65,
    def: 65,
    satk: 55,
    sdef: 35,
    spe: 34,
  },
  evolve: function() { return { 1: { pkmn: pkmn.melmetal, level: evolutionLevel3 } } },
    hiddenAbility: ability.ferrilate,
    eggMove : move.gigatonHammer
}

pkmn.melmetal = {
  type: ["steel"],
  bst: {
    hp: 135,
    atk: 143,
    def: 143,
    satk: 80,
    sdef: 65,
    spe: 34,
  },
    hiddenAbility: ability.ferrilate,
    eggMove : move.gigatonHammer
}

pkmn.melmetalGmax = {
  type: ["steel"],
  bst: {
    hp: 135*1.5,
    atk: 143*1.5,
    def: 143*1.5,
    satk: 80*1.5,
    sdef: 65*1.5,
    spe: 34*1.5,
  },
    hiddenAbility: ability.ferrilate,
    eggMove : move.gigatonHammer
}

// 810 Grookey → Thwackey → Rillaboom
pkmn.grookey = {
  type: ["grass"],
  bst: {
    hp: 50,
    atk: 65,
    def: 50,
    satk: 40,
    sdef: 40,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.thwackey, level: evolutionLevel1 } } },
    hiddenAbility: ability.grassySurge,
    signature : move.drumBeating
}

pkmn.thwackey = {
  type: ["grass"],
  bst: {
    hp: 70,
    atk: 85,
    def: 70,
    satk: 55,
    sdef: 60,
    spe: 80,
  },
  evolve: function() { return { 1: { pkmn: pkmn.rillaboom, level: evolutionLevel2 } } },
    hiddenAbility: ability.grassySurge,
    signature : move.drumBeating
}

pkmn.rillaboom = {
  type: ["grass"],
  bst: {
    hp: 100,
    atk: 125,
    def: 90,
    satk: 60,
    sdef: 70,
    spe: 85,
  },
    hiddenAbility: ability.grassySurge,
    signature : move.drumBeating
}

pkmn.rillaboomGmax = {
  type: ["grass"],
  bst: {
    hp: 100*1.5,
    atk: 125*1.5,
    def: 90*1.5,
    satk: 60*1.5,
    sdef: 70*1.5,
    spe: 85*1.5,
  },
    hiddenAbility: ability.grassySurge,
    signature : move.drumBeating
}

// 813 Scorbunny → Raboot → Cinderace
pkmn.scorbunny = {
  type: ["fire"],
  bst: {
    hp: 50,
    atk: 71,
    def: 40,
    satk: 40,
    sdef: 40,
    spe: 69,
  },
  evolve: function() { return { 1: { pkmn: pkmn.raboot, level: evolutionLevel1 } } },
    signature : move.pyroBall,
    hiddenAbility: ability.libero,
}

pkmn.raboot = {
  type: ["fire"],
  bst: {
    hp: 65,
    atk: 86,
    def: 60,
    satk: 55,
    sdef: 60,
    spe: 94,
  },
  evolve: function() { return { 1: { pkmn: pkmn.cinderace, level: evolutionLevel2 } } },
    signature : move.pyroBall,
    hiddenAbility: ability.libero,
}

pkmn.cinderace = {
  type: ["fire"],
  bst: {
    hp: 80,
    atk: 110,
    def: 70,
    satk: 65,
    sdef: 75,
    spe: 119,
  },
    signature : move.pyroBall,
    hiddenAbility: ability.libero,
}

pkmn.cinderaceGmax = {
  type: ["fire"],
  bst: {
    hp: 80*1.5,
    atk: 110*1.5,
    def: 70*1.5,
    satk: 65*1.5,
    sdef: 75*1.5,
    spe: 119*1.5,
  },
    signature : move.pyroBall,
    hiddenAbility: ability.libero,
}

// 816 Sobble → Drizzile → Inteleon
pkmn.sobble = {
  type: ["water"],
  bst: {
    hp: 50,
    atk: 40,
    def: 40,
    satk: 70,
    sdef: 40,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.drizzile, level: evolutionLevel1 } } },
    signature : move.snipeShot
}

pkmn.drizzile = {
  type: ["water"],
  bst: {
    hp: 65,
    atk: 60,
    def: 55,
    satk: 95,
    sdef: 55,
    spe: 90,
  },
  evolve: function() { return { 1: { pkmn: pkmn.inteleon, level: evolutionLevel2 } } },
    signature : move.snipeShot
}

pkmn.inteleon = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 85,
    def: 65,
    satk: 125,
    sdef: 65,
    spe: 120,
  },
    signature : move.snipeShot
}

pkmn.inteleonGmax = {
  type: ["water"],
  bst: {
    hp: 70*1.5,
    atk: 85*1.5,
    def: 65*1.5,
    satk: 125*1.5,
    sdef: 65*1.5,
    spe: 120*1.5,
  },
    signature : move.snipeShot
}

// 819 Skwovet → Greedent
pkmn.skwovet = {
  type: ["normal"],
  bst: {
    hp: 70,
    atk: 55,
    def: 55,
    satk: 35,
    sdef: 35,
    spe: 25,
  },
  evolve: function() { return { 1: { pkmn: pkmn.greedent, level: evolutionLevel2 } } },
}

pkmn.greedent = {
  type: ["normal"],
  bst: {
    hp: 120,
    atk: 95,
    def: 95,
    satk: 55,
    sdef: 75,
    spe: 20,
  },
}

// 821 Rookidee → Corvisquire → Corviknight
pkmn.rookidee = {
  type: ["flying"],
  bst: {
    hp: 38,
    atk: 47,
    def: 35,
    satk: 33,
    sdef: 35,
    spe: 57,
  },
  evolve: function() { return { 1: { pkmn: pkmn.corvisquire, level: evolutionLevel1 } } },
    hiddenAbility: ability.ferrilate,
    eggMove : move.beakBlast
}

pkmn.corvisquire = {
  type: ["flying"],
  bst: {
    hp: 68,
    atk: 67,
    def: 55,
    satk: 43,
    sdef: 55,
    spe: 77,
  },
  evolve: function() { return { 1: { pkmn: pkmn.corviknight, level: evolutionLevel2 } } },
    hiddenAbility: ability.ferrilate,
    eggMove : move.beakBlast
}

pkmn.corviknight = {
  type: ["flying","steel"],
  bst: {
    hp: 98,
    atk: 87,
    def: 105,
    satk: 53,
    sdef: 85,
    spe: 67,
  },
    hiddenAbility: ability.ferrilate,
    eggMove : move.beakBlast
}

pkmn.corviknightGmax = {
  type: ["flying","steel"],
  bst: {
    hp: 98*1.5,
    atk: 87*1.5,
    def: 105*1.5,
    satk: 53*1.5,
    sdef: 85*1.5,
    spe: 67*1.5,
  },
}

// 824 Blipbug → Dottler → Orbeetle
pkmn.blipbug = {
  type: ["bug"],
  bst: {
    hp: 25,
    atk: 20,
    def: 20,
    satk: 25,
    sdef: 45,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dottler, level: evolutionLevel1 } } },
    eggMove: move.magicPowder,
}

pkmn.dottler = {
  type: ["bug","psychic"],
  bst: {
    hp: 50,
    atk: 35,
    def: 80,
    satk: 50,
    sdef: 90,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.orbeetle, level: evolutionLevel2 } } },
    eggMove: move.magicPowder,
}

pkmn.orbeetle = {
  type: ["bug","psychic"],
  bst: {
    hp: 60,
    atk: 45,
    def: 110,
    satk: 80,
    sdef: 120,
    spe: 90,
  },
    eggMove: move.magicPowder,
}

pkmn.orbeetleGmax = {
  type: ["bug","psychic"],
  bst: {
    hp: 60*1.6,
    atk: 45*1.6,
    def: 110*1.6,
    satk: 80*1.6,
    sdef: 120*1.6,
    spe: 90*1.6,
  },
    eggMove: move.magicPowder,
}

// 827 Nickit → Thievul
pkmn.nickit = {
  type: ["dark"],
  bst: {
    hp: 40,
    atk: 28,
    def: 28,
    satk: 47,
    sdef: 52,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.thievul, level: evolutionLevel1 } } },
    hiddenAbility: ability.unburden,
}

pkmn.thievul = {
  type: ["dark"],
  bst: {
    hp: 70,
    atk: 58,
    def: 58,
    satk: 87,
    sdef: 92,
    spe: 90,
  },
    hiddenAbility: ability.pickPocket,
}

// 829 Gossifleur → Eldegoss
pkmn.gossifleur = {
  type: ["grass"],
  bst: {
    hp: 40,
    atk: 40,
    def: 60,
    satk: 40,
    sdef: 60,
    spe: 10,
  },
  evolve: function() { return { 1: { pkmn: pkmn.eldegoss, level: evolutionLevel1 } } },
    hiddenAbility: ability.flowerVeil,
}

pkmn.eldegoss = {
  type: ["grass"],
  bst: {
    hp: 60,
    atk: 50,
    def: 90,
    satk: 80,
    sdef: 120,
    spe: 60,
  },
    hiddenAbility: ability.flowerVeil,
}

// 831 Wooloo → Dubwool
pkmn.wooloo = {
  type: ["normal"],
  bst: {
    hp: 42,
    atk: 40,
    def: 55,
    satk: 40,
    sdef: 45,
    spe: 48,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dubwool, level: evolutionLevel2 } } },
}

pkmn.dubwool = {
  type: ["normal"],
  bst: {
    hp: 72,
    atk: 80,
    def: 100,
    satk: 60,
    sdef: 90,
    spe: 88,
  },
}

// 833 Chewtle → Drednaw
pkmn.chewtle = {
  type: ["water"],
  bst: {
    hp: 50,
    atk: 64,
    def: 50,
    satk: 38,
    sdef: 38,
    spe: 44,
  },
  evolve: function() { return { 1: { pkmn: pkmn.drednaw, level: evolutionLevel1 } } },
    hiddenAbility: ability.strongJaw,
}

pkmn.drednaw = {
  type: ["water","rock"],
  bst: {
    hp: 90,
    atk: 115,
    def: 90,
    satk: 48,
    sdef: 68,
    spe: 60,
  },
    hiddenAbility: ability.strongJaw,
}

pkmn.drednawGmax = {
  type: ["water","rock"],
  bst: {
    hp: 90*1.65,
    atk: 115*1.65,
    def: 90*1.65,
    satk: 48*1.65,
    sdef: 68*1.65,
    spe: 60*1.65,
  },
    hiddenAbility: ability.strongJaw,
}

// 835 Yamper → Boltund
pkmn.yamper = {
  type: ["electric"],
  bst: {
    hp: 59,
    atk: 45,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 26,
  },
  evolve: function() { return { 1: { pkmn: pkmn.boltund, level: evolutionLevel2 } } },
    hiddenAbility: ability.strongJaw,
    eggMove : move.zingZap
}

pkmn.boltund = {
  type: ["electric"],
  bst: {
    hp: 69,
    atk: 90,
    def: 60,
    satk: 90,
    sdef: 60,
    spe: 121,
  },
    hiddenAbility: ability.strongJaw,
    eggMove : move.zingZap
}

// 837 Rolycoly → Carkol → Coalossal
pkmn.rolycoly = {
  type: ["rock"],
  bst: {
    hp: 30,
    atk: 40,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.carkol, level: evolutionLevel1 } } },
    hiddenAbility: ability.solarPower,
}

pkmn.carkol = {
  type: ["rock","fire"],
  bst: {
    hp: 80,
    atk: 60,
    def: 90,
    satk: 60,
    sdef: 70,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.coalossal, level: evolutionLevel2 } } },
    hiddenAbility: ability.solarPower,
}

pkmn.coalossal = {
  type: ["rock","fire"],
  bst: {
    hp: 110,
    atk: 80,
    def: 120,
    satk: 80,
    sdef: 90,
    spe: 30,
  },
    hiddenAbility: ability.solarPower,
}

pkmn.coalossalGmax = {
  type: ["rock","fire"],
  bst: {
    hp: 110*1.5,
    atk: 80*1.5,
    def: 120*1.5,
    satk: 80*1.5,
    sdef: 90*1.5,
    spe: 30*1.5,
  },
    hiddenAbility: ability.solarPower,
}

// 840 Applin → Flapple / Appletun
pkmn.applin = {
  type: ["grass","dragon"],
  bst: {
    hp: 40,
    atk: 40,
    def: 80,
    satk: 40,
    sdef: 40,
    spe: 20,
  },
  evolve: function() { 
    return { 
      1: { pkmn: pkmn.flapple, item: item.leafStone }, 
      2: { pkmn: pkmn.appletun, item: item.dragonFang },
      // 3: { pkmn: pkmn.dipplin, item: item.oddRock },
    } 
  },
    hiddenAbility: ability.thickFat,
    signature : move.appleAcid
}

pkmn.flapple = {
  type: ["grass","dragon"],
  bst: {
    hp: 70,
    atk: 110,
    def: 80,
    satk: 95,
    sdef: 60,
    spe: 70,
  },
    hiddenAbility: ability.thickFat,
    signature : move.appleAcid
}

pkmn.appletun = {
  type: ["grass","dragon"],
  bst: {
    hp: 110,
    atk: 85,
    def: 80,
    satk: 100,
    sdef: 80,
    spe: 30,
  },
    hiddenAbility: ability.dragonGuard,
    signature : move.appleAcid
}

pkmn.appletunGmax = {
  type: ["grass","dragon"],
  bst: {
    hp: 110*1.5,
    atk: 85*1.5,
    def: 80*1.5,
    satk: 100*1.5,
    sdef: 80*1.5,
    spe: 30*1.5,
  },
    hiddenAbility: ability.dragonGuard,
    signature : move.appleAcid
}

pkmn.dipplin = {
    type: ["grass","dragon"],
    bst: {
        hp: 80,
        atk: 80,
        def: 110,
        satk: 95,
        sdef: 80,
        spe: 40,
    },
  // evolve: function() { return { 1: { pkmn: pkmn.hydrapple, level: evolutionLevel3 } } },
}

pkmn.hydrapple = {
    type: ["grass", "dragon"],
    bst: {
        hp: 106,
        atk: 80,
        def: 110,
        satk: 120,
        sdef: 80,
        spe: 44,
    }
}

// 843 Silicobra → Sandaconda
pkmn.silicobra = {
  type: ["ground"],
  bst: {
    hp: 52,
    atk: 57,
    def: 75,
    satk: 35,
    sdef: 50,
    spe: 28,
  },
  evolve: function() { return { 1: { pkmn: pkmn.sandaconda, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandyPelt,
}

pkmn.sandaconda = {
  type: ["ground"],
  bst: {
    hp: 72,
    atk: 107,
    def: 125,
    satk: 65,
    sdef: 70,
    spe: 71,
  },
    hiddenAbility: ability.sandyPelt,
}

pkmn.sandacondaGmax = {
  type: ["ground"],
  bst: {
    hp: 72*1.6,
    atk: 107*1.6,
    def: 125*1.6,
    satk: 65*1.6,
    sdef: 70*1.6,
    spe: 71*1.6,
  },
    hiddenAbility: ability.sandyPelt,
}

// 845 Cramorant
pkmn.cramorant = {
  type: ["flying","water"],
  bst: {
    hp: 70,
    atk: 85,
    def: 55,
    satk: 85,
    sdef: 95,
    spe: 85,
  },
}

// 846 Arrokuda → Barraskewda
pkmn.arrokuda = {
  type: ["water"],
  bst: {
    hp: 41,
    atk: 63,
    def: 40,
    satk: 40,
    sdef: 30,
    spe: 66,
  },
  evolve: function() { return { 1: { pkmn: pkmn.barraskewda, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
}

pkmn.barraskewda = {
  type: ["water"],
  bst: {
    hp: 61,
    atk: 123,
    def: 60,
    satk: 60,
    sdef: 50,
    spe: 136,
  },
    hiddenAbility: ability.swiftSwim,
}

// 848 Toxel → Toxtricity
pkmn.toxel = {
  type: ["electric","poison"],
  bst: {
    hp: 40,
    atk: 38,
    def: 35,
    satk: 54,
    sdef: 35,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.toxtricity, level: evolutionLevel2 } } },
    hiddenAbility: ability.galvanize,
    eggMove : move.boomburst
}

pkmn.toxtricity = {
  type: ["electric","poison"],
  bst: {
    hp: 75,
    atk: 98,
    def: 70,
    satk: 114,
    sdef: 70,
    spe: 75,
  },
    hiddenAbility: ability.galvanize,
    eggMove : move.boomburst
}

pkmn.toxtricityGmax = {
  type: ["electric","poison"],
  bst: {
    hp: 75*1.5,
    atk: 98*1.5,
    def: 70*1.5,
    satk: 114*1.5,
    sdef: 70*1.5,
    spe: 75*1.5,
  },
    hiddenAbility: ability.galvanize,
    eggMove : move.boomburst
}

// 850 Sizzlipede → Centiskorch
pkmn.sizzlipede = {
  type: ["fire","bug"],
  bst: {
    hp: 50,
    atk: 65,
    def: 45,
    satk: 50,
    sdef: 50,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.centiskorch, level: evolutionLevel2 } } },
    signature : move.burnUp,
    hiddenAbility: ability.scorch,
}

pkmn.centiskorch = {
  type: ["fire","bug"],
  bst: {
    hp: 100,
    atk: 115,
    def: 65,
    satk: 90,
    sdef: 90,
    spe: 65,
  },
    signature : move.burnUp,
    hiddenAbility: ability.scorch,
}

pkmn.centiskorchGmax = {
  type: ["fire","bug"],
  bst: {
    hp: 100*1.5,
    atk: 115*1.5,
    def: 65*1.5,
    satk: 90*1.5,
    sdef: 90*1.5,
    spe: 65*1.5,
  },
    signature : move.burnUp,
    hiddenAbility: ability.scorch,
}

// 852 Clobbopus → Grapploct
pkmn.clobbopus = {
  type: ["fighting"],
  bst: {
    hp: 50,
    atk: 68,
    def: 60,
    satk: 50,
    sdef: 50,
    spe: 32,
  },
  evolve: function() { return { 1: { pkmn: pkmn.grapploct, level: evolutionLevel2 } } },
    hiddenAbility: ability.technician,
}

pkmn.grapploct = {
  type: ["fighting"],
  bst: {
    hp: 80,
    atk: 118,
    def: 90,
    satk: 70,
    sdef: 80,
    spe: 42,
  },
    hiddenAbility: ability.technician,
}

// 854 Sinistea → Polteageist
pkmn.sinistea = {
  type: ["ghost"],
  bst: {
    hp: 40,
    atk: 45,
    def: 45,
    satk: 74,
    sdef: 54,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.polteageist, item: item.duskStone } } },
    signature : move.teatime,
    hiddenAbility: ability.somberField,
}

pkmn.polteageist = {
  type: ["ghost"],
  bst: {
    hp: 60,
    atk: 65,
    def: 65,
    satk: 134,
    sdef: 114,
    spe: 70,
  },
    signature : move.teatime,
    hiddenAbility: ability.somberField,
}

// 856 Hatenna → Hattrem → Hatterene
pkmn.hatenna = {
  type: ["psychic"],
  bst: {
    hp: 42,
    atk: 30,
    def: 45,
    satk: 56,
    sdef: 53,
    spe: 39,
  },
  evolve: function() { return { 1: { pkmn: pkmn.hattrem, level: evolutionLevel2 } } },
    signature : move.magicPowder,
    hiddenAbility: ability.neuroforce,

}

pkmn.hattrem = {
  type: ["psychic"],
  bst: {
    hp: 57,
    atk: 40,
    def: 65,
    satk: 90,
    sdef: 76,
    spe: 49,
  },
  evolve: function() { return { 1: { pkmn: pkmn.hatterene, level: evolutionLevel3 } } },
    signature : move.magicPowder,
        hiddenAbility: ability.neuroforce,

}

pkmn.hatterene = {
  type: ["psychic","fairy"],
  bst: {
    hp: 57,
    atk: 90,
    def: 95,
    satk: 136,
    sdef: 103,
    spe: 29,
  },
    signature : move.magicPowder,
        hiddenAbility: ability.neuroforce,

}

pkmn.hattereneGmax = {
  type: ["psychic","fairy"],
  bst: {
    hp: 57*1.5,
    atk: 90*1.5,
    def: 95*1.5,
    satk: 136*1.5,
    sdef: 103*1.5,
    spe: 29*1.5,
  },
    signature : move.magicPowder,
        hiddenAbility: ability.neuroforce,

}

// 859 Impidimp → Morgrem → Grimmsnarl
pkmn.impidimp = {
  type: ["dark","fairy"],
  bst: {
    hp: 45,
    atk: 45,
    def: 30,
    satk: 55,
    sdef: 40,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.morgrem, level: evolutionLevel2 } } },
    hiddenAbility: ability.prankster,
    signature : move.falseSurrender
}

pkmn.morgrem = {
  type: ["dark","fairy"],
  bst: {
    hp: 80,
    atk: 60,
    def: 45,
    satk: 75,
    sdef: 55,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.grimmsnarl, level: evolutionLevel3 } } },
    hiddenAbility: ability.prankster,
    signature : move.falseSurrender
}

pkmn.grimmsnarl = {
  type: ["dark","fairy"],
  bst: {
    hp: 95,
    atk: 120,
    def: 65,
    satk: 95,
    sdef: 75,
    spe: 60,
  },
    hiddenAbility: ability.prankster,
    signature : move.falseSurrender
}

pkmn.grimmsnarlGmax = {
  type: ["dark","fairy"],
  bst: {
    hp: 95*1.6,
    atk: 120*1.6,
    def: 65*1.6,
    satk: 95*1.6,
    sdef: 75*1.6,
    spe: 60*1.6,
  },
    hiddenAbility: ability.prankster,
    signature : move.falseSurrender
}

// 862 Obstagoon
// 863 Perrserker
// 864 Cursola
// 865 Sirfetch'd
// 866 Mr. Rime
// 867 Runerigus

// 868 Milcery → Alcremie
pkmn.milcery = {
  type: ["fairy"],
  bst: {
    hp: 45,
    atk: 40,
    def: 40,
    satk: 50,
    sdef: 61,
    spe: 34,
  },
  evolve: function() { return { 1: { pkmn: pkmn.alcremie, level: evolutionLevel2 } } },
    hiddenAbility: ability.mistySurge,
    eggMove : move.teatime
}

pkmn.alcremie = {
  type: ["fairy"],
  bst: {
    hp: 65,
    atk: 60,
    def: 75,
    satk: 110,
    sdef: 121,
    spe: 64,
  },
    hiddenAbility: ability.mistySurge,
    eggMove : move.teatime
}

pkmn.alcremieGmax = {
  type: ["fairy"],
  bst: {
    hp: 65*1.6,
    atk: 60*1.6,
    def: 75*1.6,
    satk: 110*1.6,
    sdef: 121*1.6,
    spe: 64*1.6,
  },
    hiddenAbility: ability.mistySurge,
    eggMove : move.teatime
}

// 870 Falinks
pkmn.falinks = {
  type: ["fighting"],
  bst: {
    hp: 65,
    atk: 100,
    def: 100,
    satk: 70,
    sdef: 60,
    spe: 75,
  },
    evolve: function() { return { 1: { pkmn: pkmn.megaFalinks, item: item.falinksite } } },
    hiddenAbility: ability.reckless,
    signature : move.noRetreat
}

pkmn.megaFalinks = {
  type: ["fighting"],
  bst: {
    hp: 125,
    atk: 135,
    def: 135,
    satk: 70,
    sdef: 65,
    spe: 100,
  },
    hiddenAbility: ability.reckless,
    signature : move.noRetreat
}

// 871 Pincurchin
pkmn.pincurchin = {
  type: ["electric"],
  bst: {
    hp: 48,
    atk: 101,
    def: 95,
    satk: 91,
    sdef: 85,
    spe: 15,
  },
    hiddenAbility: ability.electricSurge,
    eggMove : move.acupressure
}

// 872 Snom → Frosmoth
pkmn.snom = {
  type: ["ice","bug"],
  bst: {
    hp: 30,
    atk: 25,
    def: 35,
    satk: 45,
    sdef: 30,
    spe: 20,
  },
  evolve: function() { return { 1: { pkmn: pkmn.frosmoth, level: evolutionLevel3 } } },
    hiddenAbility: ability.glaciate,
    eggMove : move.snowscape
}

pkmn.frosmoth = {
  type: ["ice","bug"],
  bst: {
    hp: 70,
    atk: 65,
    def: 60,
    satk: 125,
    sdef: 90,
    spe: 65,
  },
    hiddenAbility: ability.glaciate,
    eggMove : move.snowscape
}

// 874 Stonjourner
pkmn.stonjourner = {
  type: ["rock"],
  bst: {
    hp: 100,
    atk: 125,
    def: 135,
    satk: 20,
    sdef: 20,
    spe: 70,
  },
    hiddenAbility: ability.stoned,
}

// 875 Eiscue
pkmn.eiscue = {
  type: ["ice"],
  bst: {
    hp: 75,
    atk: 80,
    def: 110,
    satk: 65,
    sdef: 90,
    spe: 50,
  },
    hiddenAbility: ability.dancer,
    eggMove : move.bellyDrum
}

// 876 Indeedee
pkmn.indeedee = {
  type: ["psychic","normal"],
  bst: {
    hp: 60,
    atk: 65,
    def: 55,
    satk: 105,
    sdef: 95,
    spe: 95,
  },
    hiddenAbility: ability.neuroforce,
    eggMove : move.storedPower
}

// 877 Morpeko
pkmn.morpeko = {
  type: ["electric","dark"],
  bst: {
    hp: 58,
    atk: 95,
    def: 58,
    satk: 70,
    sdef: 58,
    spe: 97,
  },
    hiddenAbility: ability.moody,
    signature : move.auraWheel
}

// 878 Cufant → Copperajah
pkmn.cufant = {
  type: ["steel"],
  bst: {
    hp: 72,
    atk: 80,
    def: 49,
    satk: 40,
    sdef: 49,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.copperajah, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
}

pkmn.copperajah = {
  type: ["steel"],
  bst: {
    hp: 122,
    atk: 130,
    def: 69,
    satk: 80,
    sdef: 69,
    spe: 30,
  },
    hiddenAbility: ability.sheerForce,
}

pkmn.copperajahGmax = {
  type: ["steel"],
  bst: {
    hp: 122*1.5,
    atk: 130*1.5,
    def: 69*1.5,
    satk: 80*1.5,
    sdef: 69*1.5,
    spe: 30*1.5,
  },
    hiddenAbility: ability.sheerForce,
}

// 880 Dracozolt
pkmn.dracozolt = {
  type: ["electric","dragon"],
  bst: {
    hp: 90,
    atk: 100,
    def: 90,
    satk: 80,
    sdef: 70,
    spe: 75,
  },
}

// 881 Arctozolt
pkmn.arctozolt = {
  type: ["electric","ice"],
  bst: {
    hp: 90,
    atk: 100,
    def: 90,
    satk: 90,
    sdef: 80,
    spe: 55,
  },
    hiddenAbility: ability.slushRush,
    eggMove : move.freezeDry
}


// 882 Dracovish
pkmn.dracovish = {
  type: ["water","dragon"],
  bst: {
    hp: 90,
    atk: 90,
    def: 100,
    satk: 70,
    sdef: 80,
    spe: 75,
  },
    hiddenAbility: ability.strongJaw,
    signature : move.fishiousRend
}

// 883 Arctovish
pkmn.arctovish = {
  type: ["water","ice"],
  bst: {
    hp: 90,
    atk: 90,
    def: 100,
    satk: 80,
    sdef: 90,
    spe: 55,
  },
    hiddenAbility: ability.slushRush,
    signature : move.fishiousRend
}

// 884 Duraludon → Archaludon
pkmn.duraludon = {
  type: ["steel","dragon"],
  bst: {
    hp: 70,
    atk: 95,
    def: 115,
    satk: 120,
    sdef: 50,
    spe: 85,
  },
    hiddenAbility: ability.stamina,
    eggMove : move.kingsShield
}

pkmn.duraludonGmax = {
  type: ["steel","dragon"],
  bst: {
    hp: 70*1.5,
    atk: 95*1.5,
    def: 115*1.5,
    satk: 120*1.5,
    sdef: 50*1.5,
    spe: 85*1.5,
  },
    hiddenAbility: ability.stamina,
    eggMove : move.kingsShield
}

pkmn.archaludon = {
    type: ["steel", "dragon"],
    bst: {
        hp: 90,
        atk: 105,
        def: 130,
        satk: 125,
        sdef: 65,
        spe: 85,
    },
    hiddenAbility: ability.stamina,
    eggMove : move.kingsShield
}

// 885 Dreepy → Drakloak → Dragapult
pkmn.dreepy = {
  type: ["dragon","ghost"],
  bst: {
    hp: 28,
    atk: 60,
    def: 30,
    satk: 40,
    sdef: 30,
    spe: 82,
  },
  evolve: function() { return { 1: { pkmn: pkmn.drakloak, level: evolutionLevel2 } } },
    signature : move.dragonDarts,
    hiddenAbility: ability.megaLauncher,
}

pkmn.drakloak = {
  type: ["dragon","ghost"],
  bst: {
    hp: 68,
    atk: 80,
    def: 50,
    satk: 60,
    sdef: 50,
    spe: 102,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dragapult, level: evolutionLevel3 } } },
    signature : move.dragonDarts,
    hiddenAbility: ability.megaLauncher,
}

pkmn.dragapult = {
  type: ["dragon","ghost"],
  bst: {
    hp: 88,
    atk: 120,
    def: 75,
    satk: 100,
    sdef: 75,
    spe: 142,
  },
    signature : move.dragonDarts,
    hiddenAbility: ability.megaLauncher,
}

// 888 Zacian
pkmn.zacian = {
  type: ["fairy"],
  bst: {
    hp: 92,
    atk: 130,
    def: 115,
    satk: 80,
    sdef: 115,
    spe: 138,
  },
    hiddenAbility: ability.iaido,
}

pkmn.zacianCrowned = {
    type: ["fairy","steel"],
    bst: {
        hp: 92,
        atk: 170,
        def: 115,
        satk: 80,
        sdef: 115,
        spe: 148,
    }
}

// 889 Zamazenta
pkmn.zamazenta = {
  type: ["fighting"],
  bst: {
    hp: 92,
    atk: 130,
    def: 115,
    satk: 80,
    sdef: 115,
    spe: 138,
  },
    eggMove: move.howl,
}

pkmn.zamazentaCrowned = {
    type: ["fighting","steel"],
    bst: {
        hp: 92,
        atk: 130,
        def: 165,
        satk: 80,
        sdef: 165,
        spe: 128,
    }
}

// 890 Eternatus
pkmn.eternatus = {
  type: ["poison","dragon"],
  bst: {
    hp: 140,
    atk: 85,
    def: 95,
    satk: 145,
    sdef: 95,
    spe: 130,
  },
    hiddenAbility: ability.supremeOverlord,
}

// 891 Kubfu → Urshifu
pkmn.kubfu = {
  type: ["fighting"],
  bst: {
    hp: 60,
    atk: 90,
    def: 60,
    satk: 53,
    sdef: 50,
    spe: 72,
  },
  evolve: function() {
    return {
      1: { pkmn: pkmn.urshifuSingle, item: item.blackBelt },
      2: { pkmn: pkmn.urshifuRapid, item: item.waterStone },
    }
  }
}

pkmn.urshifuSingle = {
    rename: `urshifu S.`,
  type: ["fighting","dark"],
  bst: {
    hp: 100,
    atk: 130,
    def: 100,
    satk: 63,
    sdef: 60,
    spe: 97,
  },
}

pkmn.urshifuSingleGmax = {
    rename: `urshifu S. Gmax`,
  type: ["fighting","dark"],
  bst: {
    hp: 100*1.5,
    atk: 130*1.5,
    def: 100*1.5,
    satk: 63*1.5,
    sdef: 60*1.5,
    spe: 97*1.5,
  },
}

pkmn.urshifuRapid = {
    rename: `urshifu R.`,
  type: ["fighting","water"],
  bst: {
    hp: 100,
    atk: 130,
    def: 100,
    satk: 63,
    sdef: 60,
    spe: 97,
  },
}

pkmn.urshifuRapidGmax = {
    rename: `urshifu R. Gmax`,
  type: ["fighting","water"],
  bst: {
    hp: 100*1.5,
    atk: 130*1.5,
    def: 100*1.5,
    satk: 63*1.5,
    sdef: 60*1.5,
    spe: 97*1.5,
  },
}

// 893 Zarude
pkmn.zarude = {
  type: ["dark","grass"],
  bst: {
    hp: 105,
    atk: 120,
    def: 105,
    satk: 70,
    sdef: 95,
    spe: 105,
  },
}

pkmn.zarudeDada = {
  type: ["dark","grass"],
  bst: {
    hp: 105,
    atk: 120,
    def: 105,
    satk: 70,
    sdef: 95,
    spe: 105,
  },
}

// 894 Regieleki
pkmn.regieleki = {
  type: ["electric"],
  bst: {
    hp: 80,
    atk: 120,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 200,
  },
    hiddenAbility: ability.galvanize,
    signature : move.thunderCage
}

// 895 Regidrago
pkmn.regidrago = {
  type: ["dragon"],
  bst: {
    hp: 200,
    atk: 100,
    def: 80,
    satk: 100,
    sdef: 80,
    spe: 80,
  },
    hiddenAbility: ability.dragonMaw,
    signature : move.dragonEnergy

}

// 896 Glastrier
pkmn.glastrier = {
  type: ["ice"],
  bst: {
    hp: 100,
    atk: 145,
    def: 130,
    satk: 65,
    sdef: 110,
    spe: 30,
  },
}

// 897 Spectrier
pkmn.spectrier = {
  type: ["ghost"],
  bst: {
    hp: 100,
    atk: 65,
    def: 60,
    satk: 145,
    sdef: 80,
    spe: 130,
  },
}

// 898 Calyrex
pkmn.calyrex = {
  type: ["psychic","grass"],
  bst: {
    hp: 100,
    atk: 80,
    def: 80,
    satk: 80,
    sdef: 80,
    spe: 80,
  },
}

pkmn.calyrexIce = {
  type: ["psychic","ice"],
  bst: {
    hp: 100,
    atk: 165,
    def: 150,
    satk: 85,
    sdef: 130,
    spe: 50,
  },
}

pkmn.calyrexShadow = {
  type: ["psychic","ghost"],
  bst: {
    hp: 100,
    atk: 85,
    def: 80,
    satk: 165,
    sdef: 100,
    spe: 150,
  },
}

// 899 Wyrdeer
// 900 Kleavor
// 901 Ursaluna
// 902 Basculegion
// 903 Sneasler
// 904 Overqwil



// 906 Sprigatito → Floragato → Meowscarada
pkmn.sprigatito = {
  type: ["grass"],
  bst: {
    hp: 40,
    atk: 61,
    def: 54,
    satk: 45,
    sdef: 45,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floragato, level: evolutionLevel1 } } },
    hiddenAbility: ability.grassyPelt,
    eggMove : move.needleArm
}

pkmn.floragato = {
  type: ["grass"],
  bst: {
    hp: 61,
    atk: 80,
    def: 63,
    satk: 60,
    sdef: 63,
    spe: 83,
  },
  evolve: function() { return { 1: { pkmn: pkmn.meowscarada, level: evolutionLevel2 } } },
    hiddenAbility: ability.grassyPelt,
    eggMove : move.needleArm
}

pkmn.meowscarada = {
  type: ["grass", "dark"],
  bst: {
    hp: 76,
    atk: 110,
    def: 70,
    satk: 81,
    sdef: 70,
    spe: 123,
  },
    hiddenAbility: ability.grassyPelt,
    eggMove : move.needleArm
}

// 909 Fuecoco → Crocalor → Skeledirge
pkmn.fuecoco = {
  type: ["fire"],
  bst: {
    hp: 67,
    atk: 45,
    def: 59,
    satk: 63,
    sdef: 40,
    spe: 36,
  },
  evolve: function() { return { 1: { pkmn: pkmn.crocalor, level: evolutionLevel1 } } },
    signature : move.torchSong
}

pkmn.crocalor = {
  type: ["fire"],
  bst: {
    hp: 81,
    atk: 55,
    def: 78,
    satk: 90,
    sdef: 58,
    spe: 49,
  },
  evolve: function() { return { 1: { pkmn: pkmn.skeledirge, level: evolutionLevel2 } } },
    signature : move.torchSong
}

pkmn.skeledirge = {
  type: ["fire", "ghost"],
  bst: {
    hp: 104,
    atk: 75,
    def: 100,
    satk: 110,
    sdef: 75,
    spe: 66,
  },
    signature : move.torchSong
}

// 912 Quaxly → Quaxwell → Quaquaval
pkmn.quaxly = {
  type: ["water"],
  bst: {
    hp: 55,
    atk: 65,
    def: 45,
    satk: 50,
    sdef: 45,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.quaxwell, level: evolutionLevel1 } } },
    hiddenAbility: ability.dancer,
    signature : move.aquaStep
}

pkmn.quaxwell = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 85,
    def: 65,
    satk: 65,
    sdef: 60,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.quaquaval, level: evolutionLevel2 } } },
    hiddenAbility: ability.dancer,
    signature : move.aquaStep
}

pkmn.quaquaval = {
  type: ["water", "fighting"],
  bst: {
    hp: 85,
    atk: 100,
    def: 80,
    satk: 85,
    sdef: 75,
    spe: 85,
  },
    hiddenAbility: ability.dancer,
    signature : move.aquaStep
}

// 915 Lechonk → Oinkologne
pkmn.lechonk = {
  type: ["normal"],
  bst: {
    hp: 54,
    atk: 45,
    def: 40,
    satk: 35,
    sdef: 45,
    spe: 35,
  },
  evolve: function() { return { 1: { pkmn: pkmn.oinkologne, level: evolutionLevel1 } } }
}

pkmn.oinkologne = {
  type: ["normal"],
  bst: {
    hp: 110,
    atk: 100,
    def: 75,
    satk: 59,
    sdef: 80,
    spe: 65,
  }
}

// 917 Tarountula → Spidops
pkmn.tarountula = {
  type: ["bug"],
  bst: {
    hp: 35,
    atk: 41,
    def: 45,
    satk: 29,
    sdef: 40,
    spe: 20,
  },
  evolve: function() { return { 1: { pkmn: pkmn.spidops, level: evolutionLevel1 } } }
}

pkmn.spidops = {
  type: ["bug"],
  bst: {
    hp: 60,
    atk: 79,
    def: 92,
    satk: 52,
    sdef: 86,
    spe: 35,
  }
}

// 919 Nymble → Lokix
pkmn.nymble = {
  type: ["bug"],
  bst: {
    hp: 33,
    atk: 46,
    def: 40,
    satk: 21,
    sdef: 25,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.lokix, level: evolutionLevel1 } } },
  hiddenAbility: ability.tintedLens,
}

pkmn.lokix = {
  type: ["bug", "dark"],
  bst: {
    hp: 71,
    atk: 102,
    def: 78,
    satk: 52,
    sdef: 55,
    spe: 92,
  },
  hiddenAbility: ability.tintedLens,
}

// 921 Pawmi → Pawmo → Pawmot
pkmn.pawmi = {
  type: ["electric"],
  bst: {
    hp: 45,
    atk: 50,
    def: 20,
    satk: 40,
    sdef: 25,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.pawmo, level: evolutionLevel1 } } },
    hiddenAbility: ability.spikyPelt,
    eggMove : move.hiJumpKick
}

pkmn.pawmo = {
  type: ["electric", "fighting"],
  bst: {
    hp: 60,
    atk: 75,
    def: 40,
    satk: 50,
    sdef: 40,
    spe: 85,
  },
  evolve: function() { return { 1: { pkmn: pkmn.pawmot, level: evolutionLevel2 } } },
    hiddenAbility: ability.spikyPelt,
    eggMove : move.hiJumpKick
}

pkmn.pawmot = {
  type: ["electric", "fighting"],
  bst: {
    hp: 90,
    atk: 125,
    def: 70,
    satk: 70,
    sdef: 60,
    spe: 105,
  },
    hiddenAbility: ability.spikyPelt,
    eggMove : move.hiJumpKick
}

// 924 Tandemaus → Maushold
pkmn.tandemaus = {
  type: ["normal"],
  bst: {
    hp: 50,
    atk: 50,
    def: 45,
    satk: 40,
    sdef: 45,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.maushold, level: evolutionLevel2 } } },
    signature : move.populationBomb
}

pkmn.maushold = {
  type: ["normal"],
  bst: {
    hp: 74,
    atk: 75,
    def: 70,
    satk: 65,
    sdef: 75,
    spe: 111,
  },
    signature : move.populationBomb
}

// 926 Fidough → Dachsbun
pkmn.fidough = {
  type: ["fairy"],
  bst: {
    hp: 37,
    atk: 55,
    def: 70,
    satk: 30,
    sdef: 55,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dachsbun, level: evolutionLevel2 } } }
}

pkmn.dachsbun = {
  type: ["fairy"],
  bst: {
    hp: 57,
    atk: 80,
    def: 115,
    satk: 50,
    sdef: 80,
    spe: 95,
  }
}

// 928 Smoliv → Dolliv → Arboliva
pkmn.smoliv = {
  type: ["grass", "normal"],
  bst: {
    hp: 41,
    atk: 35,
    def: 45,
    satk: 58,
    sdef: 51,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dolliv, item: item.leafStone } } },
    eggMove : move.frenzyPlant
}

pkmn.dolliv = {
  type: ["grass", "normal"],
  bst: {
    hp: 80,
    atk: 53,
    def: 60,
    satk: 78,
    sdef: 78,
    spe: 33,
  },
  evolve: function() { return { 1: { pkmn: pkmn.arboliva, level: evolutionLevel2 } } },
    eggMove : move.frenzyPlant
}

pkmn.arboliva = {
  type: ["grass", "normal"],
  bst: {
    hp: 78,
    atk: 69,
    def: 90,
    satk: 125,
    sdef: 109,
    spe: 39,
  },
    eggMove : move.frenzyPlant
}

// 931 Squawkabilly
pkmn.squawkabilly = {
  type: ["normal", "flying"],
  bst: {
    hp: 82,
    atk: 96,
    def: 51,
    satk: 45,
    sdef: 51,
    spe: 92,
  },
    eggMove : move.mimic
}

// 932 Nacli → Naclstack → Garganacl
pkmn.nacli = {
  type: ["rock"],
  bst: {
    hp: 55,
    atk: 55,
    def: 75,
    satk: 35,
    sdef: 35,
    spe: 25,
  },
  evolve: function() { return { 1: { pkmn: pkmn.naclstack, level: evolutionLevel1 } } },
     hiddenAbility: ability.purifyingSalt,
    eggMove : move.rockWrecker
}

pkmn.naclstack = {
  type: ["rock"],
  bst: {
    hp: 80,
    atk: 60,
    def: 100,
    satk: 45,
    sdef: 85,
    spe: 35,
  },
  evolve: function() { return { 1: { pkmn: pkmn.garganacl, level: evolutionLevel2 } } },
     hiddenAbility: ability.purifyingSalt,
    eggMove : move.rockWrecker
}

pkmn.garganacl = {
  type: ["rock"],
  bst: {
    hp: 100,
    atk: 100,
    def: 130,
    satk: 45,
    sdef: 90,
    spe: 35,
  },
     hiddenAbility: ability.purifyingSalt,
    eggMove : move.rockWrecker
}

// 935 Charcadet → Armarouge / Ceruledge
pkmn.charcadet = {
  type: ["fire"],
  bst: {
    hp: 40,
    atk: 50,
    def: 40,
    satk: 50,
    sdef: 40,
    spe: 35,
  },
  evolve: function() {
    return {
      1: { pkmn: pkmn.armarouge, item: item.linkStone },
      2: { pkmn: pkmn.ceruledge, item: item.oddRock },
    }
  }
}

pkmn.armarouge = {
  type: ["fire", "psychic"],
  bst: {
    hp: 85,
    atk: 60,
    def: 100,
    satk: 125,
    sdef: 80,
    spe: 125,
  },
    hiddenAbility: ability.megaLauncher,
    signature : move.armorCannon
}

pkmn.ceruledge = {
  type: ["fire", "ghost"],
  bst: {
    hp: 75,
    atk: 125,
    def: 80,
    satk: 60,
    sdef: 100,
    spe: 125,
  },
    hiddenAbility: ability.sharpness,
    signature : move.bitterBlade
}

// 938 Tadbulb → Bellibolt
pkmn.tadbulb = {
  type: ["electric"],
  bst: {
    hp: 61,
    atk: 31,
    def: 41,
    satk: 59,
    sdef: 35,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.bellibolt, level: evolutionLevel1 } } },
    hiddenAbility: ability.flashElectro,
    eggMove : move.electroBall
}

pkmn.bellibolt = {
  type: ["electric"],
  bst: {
    hp: 109,
    atk: 64,
    def: 91,
    satk: 103,
    sdef: 83,
    spe: 45,
  },
    hiddenAbility: ability.flashElectro,
    eggMove : move.electroBall
}

// 940 Wattrel → Kilowattrel
pkmn.wattrel = {
  type: ["electric", "flying"],
  bst: {
    hp: 40,
    atk: 40,
    def: 35,
    satk: 55,
    sdef: 40,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.kilowattrel, level: evolutionLevel1 } } },
    hiddenAbility: ability.justified,
}

pkmn.kilowattrel = {
  type: ["electric", "flying"],
  bst: {
    hp: 70,
    atk: 70,
    def: 60,
    satk: 105,
    sdef: 60,
    spe: 125,
  },
    hiddenAbility: ability.justified,
}

// 942 Maschiff → Mabostiff
pkmn.maschiff = {
  type: ["dark"],
  bst: {
    hp: 60,
    atk: 78,
    def: 60,
    satk: 40,
    sdef: 51,
    spe: 51,
  },
  evolve: function() { return { 1: { pkmn: pkmn.mabosstiff, level: evolutionLevel1 } } },
    hiddenAbility: ability.blackPelt,
}

pkmn.mabosstiff = {
  type: ["dark"],
  bst: {
    hp: 80,
    atk: 120,
    def: 90,
    satk: 60,
    sdef: 70,
    spe: 85,
  },
    hiddenAbility: ability.blackPelt,
}

// 944 Shroodle → Grafaiai
pkmn.shroodle = {
  type: ["poison", "normal"],
  bst: {
    hp: 40,
    atk: 65,
    def: 35,
    satk: 40,
    sdef: 35,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.grafaiai, level: evolutionLevel1 } } },
    hiddenAbility: ability.corrosion,
    eggMove : move.sketch
}

pkmn.grafaiai = {
  type: ["poison", "normal"],
  bst: {
    hp: 63,
    atk: 95,
    def: 65,
    satk: 80,
    sdef: 72,
    spe: 110,
  },
    hiddenAbility: ability.corrosion,
    eggMove : move.sketch
}

// 946 Bramblin → Brambleghast
pkmn.bramblin = {
  type: ["grass", "ghost"],
  bst: {
    hp: 40,
    atk: 65,
    def: 30,
    satk: 45,
    sdef: 35,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.brambleghast, level: evolutionLevel1 } } },
    hiddenAbility: ability.windRider,
}

pkmn.brambleghast = {
  type: ["grass", "ghost"],
  bst: {
    hp: 55,
    atk: 115,
    def: 70,
    satk: 80,
    sdef: 70,
    spe: 90,
  },
    hiddenAbility: ability.windRider,
}

// 948 Toedscool → Toedscruel
pkmn.toedscool = {
  type: ["ground", "grass"],
  bst: {
    hp: 40,
    atk: 40,
    def: 35,
    satk: 50,
    sdef: 100,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.toedscruel, level: evolutionLevel1 } } },
    hiddenAbility: ability.merciless,
}

pkmn.toedscruel = {
  type: ["ground", "grass"],
  bst: {
    hp: 80,
    atk: 70,
    def: 65,
    satk: 80,
    sdef: 120,
    spe: 100,
  },
    hiddenAbility: ability.merciless,
}

// 950 Klawf
pkmn.klawf = {
  type: ["rock"],
  bst: {
    hp: 70,
    atk: 100,
    def: 115,
    satk: 35,
    sdef: 55,
    spe: 75,
  }
}

// 951 Capsakid → Scovillain
pkmn.capsakid = {
  type: ["grass"],
  bst: {
    hp: 50,
    atk: 62,
    def: 40,
    satk: 62,
    sdef: 40,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.scovillain, level: evolutionLevel1 } } },
    hiddenAbility: ability.contrary,
    eggMove : move.inferno,
}


pkmn.scovillain = {
  type: ["grass", "fire"],
  bst: {
    hp: 65,
    atk: 108,
    def: 65,
    satk: 108,
    sdef: 65,
    spe: 75,
  },
    hiddenAbility: ability.contrary,
    eggMove : move.inferno,
}

pkmn.megaScovillain = {
  type: ["grass", "fire"],
  bst: {
    hp: 65,
    atk: 138,
    def: 85,
    satk: 138,
    sdef: 85,
    spe: 75,
  },
    hiddenAbility: ability.contrary,
    eggMove : move.inferno,
}

// 953 Rellor → Rabsca
pkmn.rellor = {
  type: ["bug"],
  bst: {
    hp: 41,
    atk: 50,
    def: 60,
    satk: 31,
    sdef: 58,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.rabsca, level: evolutionLevel1 } } },
    hiddenAbility: ability.chrysilate,
}

pkmn.rabsca = {
  type: ["bug", "psychic"],
  bst: {
    hp: 75,
    atk: 50,
    def: 85,
    satk: 115,
    sdef: 100,
    spe: 45,
  },
    hiddenAbility: ability.chrysilate,
}

// 955 Flittle → Espathra
pkmn.flittle = {
  type: ["psychic"],
  bst: {
    hp: 30,
    atk: 35,
    def: 30,
    satk: 55,
    sdef: 30,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.espathra, level: evolutionLevel1 } } },
    hiddenAbility: ability.speedBoost,
    signature : move.luminaCrash
}

pkmn.espathra = {
  type: ["psychic"],
  bst: {
    hp: 95,
    atk: 60,
    def: 60,
    satk: 101,
    sdef: 60,
    spe: 105,
  },
    hiddenAbility: ability.speedBoost,
    signature : move.luminaCrash
}

// 957 Tinkatink → Tinkatuff → Tinkaton
pkmn.tinkatink = {
  type: ["fairy", "steel"],
  bst: {
    hp: 50,
    atk: 45,
    def: 45,
    satk: 35,
    sdef: 64,
    spe: 58,
  },
  evolve: function() { return { 1: { pkmn: pkmn.tinkatuff, level: evolutionLevel1 } } },
    hiddenAbility: ability.hugePower,
    signature : move.gigatonHammer
}

pkmn.tinkatuff = {
  type: ["fairy", "steel"],
  bst: {
    hp: 65,
    atk: 55,
    def: 55,
    satk: 45,
    sdef: 82,
    spe: 78,
  },
  evolve: function() { return { 1: { pkmn: pkmn.tinkaton, level: evolutionLevel2 } } },
  hiddenAbility: ability.hugePower,
    signature : move.gigatonHammer
}

pkmn.tinkaton = {
  type: ["fairy", "steel"],
  bst: {
    hp: 85,
    atk: 75,
    def: 77,
    satk: 70,
    sdef: 105,
    spe: 94,
  },
    hiddenAbility: ability.hugePower,
    signature : move.gigatonHammer
}

// 960 Wiglett → Wugtrio
pkmn.wiglett = {
  type: ["water"],
  bst: {
    hp: 10,
    atk: 55,
    def: 25,
    satk: 35,
    sdef: 25,
    spe: 95,
  },
  evolve: function() { return { 1: { pkmn: pkmn.wugtrio, level: evolutionLevel1 } } },
    eggMove : move.tripleDive,
    hiddenAbility: ability.technician,
}

pkmn.wugtrio = {
  type: ["water"],
  bst: {
    hp: 35,
    atk: 100,
    def: 50,
    satk: 50,
    sdef: 70,
    spe: 120,
  },
    eggMove : move.tripleDive,
    hiddenAbility: ability.technician,
}

// 962 Bombirdier
pkmn.bombirdier = {
  type: ["flying", "dark"],
  bst: {
    hp: 70,
    atk: 103,
    def: 85,
    satk: 60,
    sdef: 85,
    spe: 82,
  }
}

// 963 Finizen → Palafin
pkmn.finizen = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 45,
    def: 40,
    satk: 45,
    sdef: 40,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.palafin, level: evolutionLevel1 } } },
    signature : move.jetPunch
}

pkmn.palafin = {
  type: ["water"],
  bst: {
    hp: 100,
    atk: 70,
    def: 72,
    satk: 53,
    sdef: 62,
    spe: 100,
  },
    signature : move.jetPunch
}

/*

pkmn.palafinHero = {
  type: ["water"],
  bst: {
    hp: 100,
    atk: 160,
    def: 97,
    satk: 106,
    sdef: 87,
    spe: 100,
  }
}

*/

// 965 Varoom → Revavroom
pkmn.varoom = {
  type: ["steel", "poison"],
  bst: {
    hp: 45,
    atk: 70,
    def: 63,
    satk: 30,
    sdef: 45,
    spe: 47,
  },
  evolve: function() { return { 1: { pkmn: pkmn.revavroom, level: evolutionLevel1 } } },
    hiddenAbility: ability.hyperconductor,
}

pkmn.revavroom = {
  type: ["steel", "poison"],
  bst: {
    hp: 80,
    atk: 119,
    def: 90,
    satk: 54,
    sdef: 67,
    spe: 90,
  },
    hiddenAbility: ability.hyperconductor,
}

// 967 Cyclizar
pkmn.cyclizar = {
  type: ["dragon", "normal"],
  bst: {
    hp: 70,
    atk: 95,
    def: 65,
    satk: 85,
    sdef: 65,
    spe: 121,
  }
}

// 968 Orthworm
pkmn.orthworm = {
  type: ["steel"],
  bst: {
    hp: 70,
    atk: 85,
    def: 145,
    satk: 60,
    sdef: 55,
    spe: 65,
  },
    hiddenAbility: ability.simple,
}

// 969 Glimmet → Glimmora
pkmn.glimmet = {
  type: ["rock", "poison"],
  bst: {
    hp: 48,
    atk: 35,
    def: 42,
    satk: 105,
    sdef: 60,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.glimmora, level: evolutionLevel1 } } },
    hiddenAbility: ability.corrosion,
}

pkmn.glimmora = {
  type: ["rock", "poison"],
  bst: {
    hp: 83,
    atk: 55,
    def: 90,
    satk: 130,
    sdef: 81,
    spe: 86,
  },
    hiddenAbility: ability.corrosion,
}

pkmn.megaGlimmora = {
  type: ["rock", "poison"],
  bst: {
    hp: 83,
    atk: 90,
    def: 105,
    satk: 150,
    sdef: 96,
    spe: 101,
  },
    hiddenAbility: ability.corrosion,
}

// 971 Greavard → Houndstone
pkmn.greavard = {
  type: ["ghost"],
  bst: {
    hp: 50,
    atk: 61,
    def: 60,
    satk: 30,
    sdef: 55,
    spe: 34,
  },
  evolve: function() { return { 1: { pkmn: pkmn.houndstone, level: evolutionLevel1 } } }
}

pkmn.houndstone = {
  type: ["ghost"],
  bst: {
    hp: 72,
    atk: 101,
    def: 100,
    satk: 50,
    sdef: 97,
    spe: 68,
  }
}

// 973 Flamigo
pkmn.flamigo = {
  type: ["flying", "fighting"],
  bst: {
    hp: 82,
    atk: 115,
    def: 74,
    satk: 75,
    sdef: 64,
    spe: 90,
  },
    hiddenAbility: ability.costar,
}

// 974 Cetoddle → Cetitan
pkmn.cetoddle = {
  type: ["ice"],
  bst: {
    hp: 108,
    atk: 68,
    def: 45,
    satk: 30,
    sdef: 40,
    spe: 43,
  },
  evolve: function() { return { 1: { pkmn: pkmn.cetitan, level: evolutionLevel3 } } },
    hiddenAbility: ability.iceBody,
}

pkmn.cetitan = {
  type: ["ice"],
  bst: {
    hp: 170,
    atk: 113,
    def: 65,
    satk: 45,
    sdef: 55,
    spe: 73,
  },
    hiddenAbility: ability.iceBody,
}

// 976 Veluza
pkmn.veluza = {
  type: ["water", "psychic"],
  bst: {
    hp: 90,
    atk: 102,
    def: 73,
    satk: 78,
    sdef: 65,
    spe: 70,
  }
}

// 977 Dondozo
pkmn.dondozo = {
  type: ["water"],
  bst: {
    hp: 150,
    atk: 100,
    def: 115,
    satk: 65,
    sdef: 65,
    spe: 35,
  }
}

// 978 Tatsugiri
pkmn.tatsugiri = {
  rename: `tatsugiri Curly`,
  type: ["dragon", "water"],
  bst: {
    hp: 68,
    atk: 50,
    def: 60,
    satk: 120,
    sdef: 95,
    spe: 82,
  },
  // evolve: function() { return { 1: { pkmn: pkmn.megaTatsugiriCurly, item: item.tatsugirinite } } }
}

pkmn.tatsugiriDroopy = {
  type: ["dragon", "water"],
  bst: {
    hp: 68,
    atk: 50,
    def: 60,
    satk: 120,
    sdef: 95,
    spe: 82,
  },
  // evolve: function() { return { 1: { pkmn: pkmn.megaTatsugiriDroopy, item: item.tatsugirinite } } }
}

pkmn.tatsugiriStretchy = {
  type: ["dragon", "water"],
  bst: {
    hp: 68,
    atk: 50,
    def: 60,
    satk: 120,
    sdef: 95,
    spe: 82,
  },
  // evolve: function() { return { 1: { pkmn: pkmn.megaTatsugiriStretchy, item: item.tatsugirinite } } }
}

/*

pkmn.megaTatsugiriCurly = {
  type: ["dragon", "water"],
  bst: {
    hp: 68,
    atk: 65,
    def: 90,
    satk: 135,
    sdef: 125,
    spe: 92,
  }
}

pkmn.megaTatsugiriDroopy = {
  type: ["dragon", "water"],
  bst: {
    hp: 68,
    atk: 65,
    def: 90,
    satk: 135,
    sdef: 125,
    spe: 92,
  }
}

pkmn.megaTatsugiriStretchy = {
  type: ["dragon", "water"],
  bst: {
    hp: 68,
    atk: 65,
    def: 90,
    satk: 135,
    sdef: 125,
    spe: 92,
  }
}

*/

// 979 Annihilape
// 980 Clodsire
// 981 Farigiraf
// 982 Dudunsparce
// 983 Kingambit

// 984 Great Tusk
pkmn.greatTusk = {
    type: ["ground", "fighting"],
    bst: {
        hp: 115,
        atk: 131,
        def: 131,
        satk: 53,
        sdef: 53,
        spe: 87,
    },
    hiddenAbility: ability.protosynthesis,
}

// 985 Scream Tail
pkmn.screamTail = {
    type: ["fairy", "psychic"],
    bst: {
        hp: 115,
        atk: 65,
        def: 99,
        satk: 65,
        sdef: 115,
        spe: 111,
    },
    hiddenAbility: ability.protosynthesis,
    eggMove : move.boomburst
}

// 986 Brute Bonnet
pkmn.bruteBonnet = {
    type: ["grass", "dark"],
    bst: {
        hp: 111,
        atk: 127,
        def: 99,
        satk: 79,
        sdef: 99,
        spe: 55,
    },
    hiddenAbility: ability.protosynthesis,
    eggMove : move.cottonGuard
}

// 987 Flutter Mane
pkmn.flutterMane = {
    type: ["ghost", "fairy"],
    bst: {
        hp: 75,
        atk: 55,
        def: 55,
        satk: 135,
        sdef: 135,
        spe: 135,
    },
    hiddenAbility: ability.protosynthesis,
}

// 988 Slither Wing
pkmn.slitherWing = {
    type: ["bug", "fighting"],
    bst: {
        hp: 85,
        atk: 135,
        def: 79,
        satk: 85,
        sdef: 105,
        spe: 81,
    },
    hiddenAbility: ability.protosynthesis,
}

// 989 Sandy Shocks
pkmn.sandyShocks = {
    type: ["electric", "ground"],
    bst: {
        hp: 85,
        atk: 81,
        def: 97,
        satk: 121,
        sdef: 85,
        spe: 101,
    },
    hiddenAbility: ability.protosynthesis,
    eggMove : move.ionise
}

// 990 Iron Treads
pkmn.ironTreads = {
    type: ["ground","steel"],
    bst: {
        hp: 110,
        atk: 112,
        def: 120,
        satk: 72,
        sdef: 70,
        spe: 106,
    },
    hiddenAbility: ability.quarkDrive,
}

// 991 Iron Bundle
pkmn.ironBundle = {
    type: ["ice","water"],
    bst: {
        hp: 56,
        atk: 80,
        def: 114,
        satk: 124,
        sdef: 60,
        spe: 136,
    },
    hiddenAbility: ability.quarkDrive,
}

// 992 Iron Hands
pkmn.ironHands = {
    type: ["fighting","electric"],
    bst: {
        hp: 154,
        atk: 150,
        def: 108,
        satk: 50,
        sdef: 68,
        spe: 50,
    },
    hiddenAbility: ability.quarkDrive,
}

// 993 Iron Jugulis
pkmn.ironJugulis = {
    type: ["dark","flying"],
    bst: {
        hp: 94,
        atk: 80,
        def: 86,
        satk: 122,
        sdef: 80,
        spe: 108,
    },
    hiddenAbility: ability.quarkDrive,
}

// 994 Iron Moth
pkmn.ironMoth = {
    type: ["fire","poison"],
    bst: {
        hp: 80,
        atk: 70,
        def: 60,
        satk: 140,
        sdef: 110,
        spe: 110,
    },
    hiddenAbility: ability.quarkDrive,
    signature : move.fieryDance
}

// 995 Iron Thorns
pkmn.ironThorns = {
    type: ["rock","electric"],
    bst: {
        hp: 100,
        atk: 154,
        def: 110,
        satk: 70,
        sdef: 84,
        spe: 72,
    },
    hiddenAbility: ability.quarkDrive,
}

// 996 Frigibax → Arctibax → Baxcalibur
pkmn.frigibax = {
  type: ["dragon", "ice"],
  bst: {
    hp: 65,
    atk: 75,
    def: 45,
    satk: 35,
    sdef: 45,
    spe: 55,
  },
  evolve: function() { return { 1: { pkmn: pkmn.arctibax, level: evolutionLevel2 } } },
    hiddenAbility: ability.sharpness,
    eggMove : move.spacialRend
}

pkmn.arctibax = {
  type: ["dragon", "ice"],
  bst: {
    hp: 90,
    atk: 95,
    def: 66,
    satk: 45,
    sdef: 65,
    spe: 62,
  },
  evolve: function() { return { 1: { pkmn: pkmn.baxcalibur, level: evolutionLevel3 } } },
    hiddenAbility: ability.sharpness,
    eggMove : move.spacialRend
}

pkmn.baxcalibur = {
  type: ["dragon", "ice"],
  bst: {
    hp: 115,
    atk: 145,
    def: 92,
    satk: 75,
    sdef: 86,
    spe: 87,
  },
    hiddenAbility: ability.sharpness,
    evolve: function() { return { 1: { pkmn: pkmn.megaBaxcalibur, item: item.baxcaliburite } } },
    eggMove : move.spacialRend
}

pkmn.megaBaxcalibur = {
  type: ["dragon", "ice"],
  bst: {
    hp: 115,
    atk: 175,
    def: 117,
    satk: 105,
    sdef: 101,
    spe: 87,
  },
    hiddenAbility: ability.sharpness,
    eggMove : move.spacialRend
}

// 999 Gimmighoul → Gholdengo
pkmn.gimmighoul = {
  type: ["ghost"],
  bst: {
    hp: 45,
    atk: 30,
    def: 70,
    satk: 75,
    sdef: 70,
    spe: 10,
  },
    evolve: function() { return { 1: { pkmn: pkmn.gholdengo, level: evolutionLevel3 } } },
    eggMove : move.mimic
}

pkmn.gimmighoulRoaming = {
  type: ["ghost"],
  bst: {
    hp: 45,
    atk: 30,
    def: 25,
    satk: 75,
    sdef: 45,
    spe: 80,
  },
    eggMove : move.payDay
}

pkmn.gholdengo = {
  type: ["steel", "ghost"],
  bst: {
    hp: 87,
    atk: 60,
    def: 95,
    satk: 133,
    sdef: 91,
    spe: 84,
  },
    hiddenAbility: ability.goodAsGold,
    eggMove : move.payDay
}

// 1001 Wo-Chien
pkmn.woChien = {
  type: ["dark", "grass"],
  bst: {
    hp: 100,
    atk: 100,
    def: 200,
    satk: 120,
    sdef: 120,
    spe: 50,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.ruination
}

// 1002 Chien-Pao
pkmn.chienPao = {
  type: ["dark", "ice"],
  bst: {
    hp: 80,
    atk: 175,
    def: 125,
    satk: 90,
    sdef: 70,
    spe: 110,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.ruination
}

// 1003 Ting-Lu
pkmn.tingLu = {
  type: ["dark", "ground"],
  bst: {
    hp: 155,
    atk: 140,
    def: 152,
    satk: 40,
    sdef: 72,
    spe: 85,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.ruination
}

// 1004 Chi-Yu
pkmn.chiYu = {
  type: ["dark", "fire"],
  bst: {
    hp: 55,
    atk: 80,
    def: 80,
    satk: 175,
    sdef: 125,
    spe: 135,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.ruination
}

// 1005 Roaring Moon
pkmn.roaringMoon = {
    type: ["dragon", "dark"],
    bst: {
        hp: 105,
        atk: 139,
        def: 80,
        satk: 55,
        sdef: 101,
        spe: 119,
    },
    hiddenAbility: ability.protosynthesis,
}

// 1006 Iron Valiant
pkmn.ironValiant = {
    type: ["fairy","fighting"],
    bst: {
        hp: 74,
        atk: 130,
        def: 90,
        satk: 120,
        sdef: 60,
        spe: 116,
    },
    hiddenAbility: ability.quarkDrive,
}

// 1010 Iron Leaves
pkmn.ironLeaves = {
    type: ["grass","psychic"],
    bst: {
        hp: 90,
        atk: 130,
        def: 138,
        satk: 70,
        sdef: 108,
        spe: 104,
    },
    hiddenAbility: ability.quarkDrive,
}

// 1022 Iron Boulder
pkmn.ironBoulder = {
    type: ["rock","psychic"],
    bst: {
        hp: 90,
        atk: 120,
        def: 80,
        satk: 68,
        sdef: 108,
        spe: 124,
    },
    hiddenAbility: ability.quarkDrive,
}

// 1023 Iron Crown
pkmn.ironCrown = {
    type: ["steel","psychic"],
    bst: {
        hp: 90,
        atk: 72,
        def: 100,
        satk: 122,
        sdef: 138,
        spe: 98,
    },
    hiddenAbility: ability.quarkDrive,
}

// 1007 Koraidon
pkmn.koraidon = {
  type: ["fighting", "dragon"],
  bst: {
    hp: 115,
    atk: 135,
    def: 85,
    satk: 40,
    sdef: 95,
    spe: 155,
  }
}

// 1008 Miraidon
pkmn.miraidon = {
  type: ["electric", "dragon"],
  bst: {
    hp: 115,
    atk: 85,
    def: 70,
    satk: 135,
    sdef: 75,
    spe: 155,
  }
}

// 1009 Walking Wake
pkmn.walkingWake = {
  type: ["water", "dragon"],
  bst: {
    hp: 95,
    atk: 180,
    def: 110,
    satk: 190,
    sdef: 80,
    spe: 100,
  },
    hiddenAbility: ability.protosynthesis,
}

// 1020 Gouging Fire
pkmn.gougingFire = {
    type: ["fire","dragon"],
    bst: {
        hp: 105,
        atk: 115,
        def: 121,
        satk: 115,
        sdef: 93,
        spe: 91,
    },
    hiddenAbility: ability.protosynthesis,
}

// 1021 Raging Bolt
pkmn.ragingBolt = {
    type: ["electric","dragon"],
    bst: {
        hp: 155,
        atk: 73,
        def: 91,
        satk: 157,
        sdef: 89,
        spe: 75,
    },
    hiddenAbility: ability.protosynthesis,
}



// 1011 Dipplin

// 1012 Poltchageist → Sinistcha
pkmn.poltchageist = {
    type: ["grass","ghost"],
    bst: {
        hp: 40,
        atk: 45,
        def: 45,
        satk: 74,
        sdef: 54,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sinistcha, item: item.leafStone } } },
}

pkmn.sinistcha = {
    type: ["grass","ghost"],
    bst: {
        hp: 71,
        atk: 60,
        def: 106,
        satk: 121,
        sdef: 80,
        spe: 70,
    }
}

// 1014 Okidogi
pkmn.okidogi = {
    type: ["poison","fighting"],
    bst: {
        hp: 88,
        atk: 128,
        def: 115,
        satk: 58,
        sdef: 86,
        spe: 80,
    }
}

// 1015 Munkidori
pkmn.munkidori = {
    type: ["poison","psychic"],
    bst: {
        hp: 88,
        atk: 75,
        def: 66,
        satk: 130,
        sdef: 90,
        spe: 106,
    }
}

// 1016 Fezandipiti
pkmn.fezandipiti = {
    type: ["poison","fairy"],
    bst: {
        hp: 88,
        atk: 91,
        def: 82,
        satk: 70,
        sdef: 125,
        spe: 99,
    }
}

// 1017 Ogerpon
pkmn.ogerponTeal = {
    type: ["grass"],
    bst: {
        hp: 80,
        atk: 120,
        def: 84,
        satk: 60,
        sdef: 96,
        spe: 110,
    },
    variants: function() { return [pkmn.ogerponWellspring, pkmn.ogerponHearthflame, pkmn.ogerponCornerstone] },
}

pkmn.ogerponWellspring = {
    type: ["grass", "water"],
    bst: {
        hp: 80,
        atk: 120,
        def: 84,
        satk: 60,
        sdef: 96,
        spe: 110,
    }
}

pkmn.ogerponHearthflame = {
    type: ["grass", "fire"],
    bst: {
        hp: 80,
        atk: 120,
        def: 84,
        satk: 60,
        sdef: 96,
        spe: 110,
    }
}

pkmn.ogerponCornerstone = {
    type: ["grass", "rock"],
    bst: {
        hp: 80,
        atk: 120,
        def: 84,
        satk: 60,
        sdef: 96,
        spe: 110,
    }
}

// 1018 Archaludon
// 1019 Hydrapple





// 1024 Terapagos
pkmn.terapagos = {
    type: ["normal"],
    bst: {
        hp: 90,
        atk: 65,
        def: 85,
        satk: 65,
        sdef: 85,
        spe: 60,
    }
}

pkmn.terapagosTerastal = {
    type: ["normal"],
    bst: {
        hp: 95,
        atk: 95,
        def: 110,
        satk: 105,
        sdef: 110,
        spe: 85,
    }
}

pkmn.terapagosStellar = {
    type: ["normal"],
    bst: {
        hp: 200,
        atk: 105,
        def: 110,
        satk: 130,
        sdef: 110,
        spe: 85,
    }
}

// 1025 Pecharunt
pkmn.pecharunt = {
  type: ["poison", "ghost"],
  bst: {
    hp: 88,
    atk: 88,
    def: 160,
    satk: 88,
    sdef: 88,
    spe: 88,
  }
}

/*
const gmaxFactor = 1.2

pkmn.singleStrikeUrshifuGmax = {
    type : ["fighting","dark"],
    bst: {
    hp: 100*gmaxFactor,
    atk : 130*gmaxFactor,
    def: 100*gmaxFactor,
    satk : 63*gmaxFactor,
    sdef: 60*gmaxFactor,
    spe: 97*gmaxFactor,
    }
}*/


pkmn.missingno = {
    type: ["bird","normal"],
    bst: {
        hp: 33,
        atk: 137,
        def: 0,
        satk: 6,
        sdef: 29,
        spe: 0,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kangaskhan, level: 128 } } },
    hidden: true,
    hiddenAbility: ability.static,
}

pkmn.f00 = {
    rename: `F-00`,
    type: ["steel","normal"],
    bst: {
        hp: 45,
        atk: 63,
        def: 37,
        satk: 65,
        sdef: 55,
        spe: 95,
    },
    hiddenAbility: ability.voltAbsorb,
    hidden: true
}

pkmn.ghost = {
    type: ["ghost"],
    bst: {
        hp: 45,
        atk: 50,
        def: 45,
        satk: 115,
        sdef: 55,
        spe: 95,
    },
    hiddenAbility: ability.intangible,
    hidden: true
}

pkmn.kabutopsB = {
    rename: `Kabutops-B`,
    type: ["rock","ghost"],
    bst: {
        hp: 60,
        atk: 115,
        def: 105,
        satk: 65,
        sdef: 70,
        spe: 80,
    },
    hiddenAbility: ability.powerOfAlchemy,
    hidden: true
}

pkmn.aerodactylB = {
    rename: `Aerodactyl-B`,
    type: ["rock","ghost"],
    bst: {
        hp: 80,
        atk: 105,
        def: 65,
        satk: 60,
        sdef: 75,
        spe: 130,
    },
    hiddenAbility: ability.powerOfAlchemy,
    hidden: true
}

pkmn.humanoid = {
    type: ["dark"],
    bst: {
        hp: 80,
        atk: 100,
        def: 70,
        satk: 50,
        sdef: 60,
        spe: 45,
    },
    hiddenAbility: ability.gooey,
    hidden: true
}

pkmn.crystalOnix = {
    type: ["rock","ice"],
    bst: {
        hp: 35,
        atk: 45,
        def: 160,
        satk: 30,
        sdef: 45,
        spe: 70,
    },
    hiddenAbility: ability.brittleArmor,
    hidden: true
}



for (const i in pkmn){
     pkmn[i].id = i
     pkmn[i].exp = 0
     pkmn[i].caught = 0
     pkmn[i].level = 1
     pkmn[i].movepool = []
     pkmn[i].newMoves = []

    pkmn[i].ivs = {
        hp:0,
        atk:0,
        def:0,
        satk:0,
        sdef:0,
        spe:0,
    }


    pkmn[i].moves = {
        slot1: null,
        slot2: null,
        slot3: null,
        slot4: null,
    }

}

for (const name in pkmn) {
  const bst = pkmn[name].bst;

  for (const stat in bst) {
    bst[stat] = statToRating(bst[stat]);
  }
}

function statToRating(baseStat) {
  const r = 1 + (baseStat - 20) * (5 / 180);
  return Math.min(6, Math.max(1, Math.round(r)));
}



const ribbon = {}

ribbon.souvenir ={
    name: `Souvenir Ribbon`,
    description: `Awarded in special occasions`
}

ribbon.tower1 ={
    name: `Endurance Ribbon`,
    description: `Awarded for reaching floor 30 in the Battle Tower`
}

ribbon.smile ={
    name: `Smile Ribbon`,
    description: `Awarded very rarely for spending a lot of time together`
}

