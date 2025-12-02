const pkmn = {}






// National Pokedex

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
    }
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
    }
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
    }
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
    evolve: function() { return { 1: { pkmn: pkmn.metapod, level: 7 } } },
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
    evolve: function() { return { 1: { pkmn: pkmn.butterfree, level: evolutionLevel1 } } },
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
    }
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
    evolve: function() { return { 1: { pkmn: pkmn.kakuna, level: 7 } } },
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
    evolve: function() { return { 1: { pkmn: pkmn.beedrill, level: evolutionLevel1 } } },
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
    }
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
}

pkmn.pidgeotto = {
    type: ["normal","flying"],
    bst: {
        hp: 63,
        atk: 60,
        def: 55,
        satk: 50,
        sdef: 50,
        spe: 71,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pidgeot, level: evolutionLevel2 } } },
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
    }
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
    }
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
    }
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
    }
}

// 025 Pikachu → Raichu
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
    evolve: function() { return { 1: { pkmn: pkmn.pikachu, happiness: true } } },
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
    }
}

// 026 Sandshrew → Sandslash
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
    }
}

// 027 Nidoran♀ → Nidorina → Nidoqueen
pkmn.nidoran_f = {
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
}

pkmn.nidoqueen = {
    type: ["poison","ground"],
    bst: {
        hp: 90,
        atk: 92,
        def: 87,
        satk: 75,
        sdef: 85,
        spe: 76,
    }
}

// 028 Nidoran♂ → Nidorino → Nidoking
pkmn.nidoran_m = {
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
    }
}

// 031 Clefairy → Clefable
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
    }
}

// 032 Vulpix → Ninetales
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
    }
}

// 033 Jigglypuff → Wigglytuff
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
    }
}



// 034 Zubat → Golbat → Crobat
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
    evolve: function() { return { 1: { pkmn: pkmn.crobat, happiness: true } } },
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
    }
}



// 037 Venonat → Venomoth
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
    }
}

// 038 Diglett → Dugtrio
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
    }
}

// 039 Meowth → Persian
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
    }
}

// 040 Psyduck → Golduck
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
    }
}


// 042 Oddish → Gloom → Vileplume / Bellossom
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
    }
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
    }
}



// 044 Venonat → Venomoth
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
    }
}

// 045 Diglett → Dugtrio
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
    }
}

// 046 Meowth → Persian
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
    }
}

// 047 Psyduck → Golduck
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
    }
}

// 048 Mankey → Primeape
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
    }
}

// 049 Growlithe → Arcanine
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
    }
}

// 050 Poliwag → Poliwhirl → Poliwrath / Politoed
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
}

pkmn.poliwhirl = {
    type: ["water"],
    bst: {
        hp: 65,
        atk: 65,
        def: 65,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.poliwrath, item: item.waterStone }, 
            2: { pkmn: pkmn.politoed, item: item.kingsRock } 
        } 
    },
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
    }
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
    }
}

// 051 Abra → Kadabra → Alakazam
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
}

pkmn.kadabra = {
    type: ["psychic"],
    bst: {
        hp: 40,
        atk: 35,
        def: 30,
        satk: 120,
        sdef: 70,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alakazam, trade: true } } },
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
    }
}

// 052 Machop → Machoke → Machamp
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
    evolve: function() { return { 1: { pkmn: pkmn.machamp, trade: true } } },
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
    }
}


// 061 Spearow → Fearow
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
    }
}


// 070 Weepinbell → Victreebel
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
    }
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
    }
}

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
    }
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
    evolve: function() { return { 1: { pkmn: pkmn.golem, trade: true } } },
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
    }
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
    moves : {
      slot1: move.mudSlap
    }
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
            2: { pkmn: pkmn.slowking, item: item.kingsRock } 
        } 
    },
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
    evolve: function() { return { 1: { pkmn: pkmn.magnezone, location: "Magnet Rock" } } },
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
    }
}

// 082 Voltorb → Electrode
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
    }
}

// 083 Exeggcute → Exeggutor
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
    }
}

// 084 Cubone → Marowak
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
    }
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
    }
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
    }
}

// 089 Shellder → Cloyster
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
    }
}

// 091 Drowzee → Hypno
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
    }
}

// 093 Gastly → Haunter → Gengar
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
    evolve: function() { return { 1: { pkmn: pkmn.gengar, trade: true } } },
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
    }
}


// 097 Krabby → Kingler
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
    }
}

// 105 Hitmonlee
pkmn.hitmonlee = {
    type: ["fighting"],
    bst: {
        hp: 50,
        atk: 120,
        def: 53,
        satk: 35,
        sdef: 110,
        spe: 87,
    }
}

// 106 Hitmonchan
pkmn.hitmonchan = {
    type: ["fighting"],
    bst: {
        hp: 50,
        atk: 105,
        def: 79,
        satk: 35,
        sdef: 110,
        spe: 76,
    }
}

// 107 Lickitung → Lickilicky
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
    evolve: function() { return { 1: { pkmn: pkmn.lickilicky, item: item.kingsRock } } },
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
    }
}

// 108 Koffing → Weezing
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
    }
}

// 110 Rhyhorn → Rhydon → Rhyperior
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
    evolve: function() { return { 1: { pkmn: pkmn.rhyperior, item: item.protectivePadding } } },
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
    }
}


// 115 Tangela → Tangrowth
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
    }
}

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
    }
}

// 116 Kangaskhan
pkmn.kangaskhan = {
    type: ["normal"],
    bst: {
        hp: 105,
        atk: 95,
        def: 80,
        satk: 40,
        sdef: 80,
        spe: 90,
    }
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
    }
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
    }
}

// 123 Scyther → Scizor
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
    }
}

// 124 Jynx
pkmn.jynx = {
    type: ["ice","psychic"],
    bst: {
        hp: 65,
        atk: 50,
        def: 35,
        satk: 115,
        sdef: 95,
        spe: 95,
    }
}

// 125 Elekid > Electabuzz → Electivire
pkmn.elekid = {
    type: ["electric"],
    bst: {
        hp: 45,
        atk: 63,
        def: 37,
        satk: 65,
        sdef: 55,
        spe: 95,
    }
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
    evolve: function() { return { 1: { pkmn: pkmn.electivire, item: item.electirizer } } },
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
    }
}

// 126 Magby > Magmar → Magmortar
pkmn.magby = {
    type: ["fire"],
    bst: {
        hp: 45,
        atk: 75,
        def: 37,
        satk: 70,
        sdef: 55,
        spe: 83,
    }
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
    evolve: function() { return { 1: { pkmn: pkmn.magmortar, item: item.magmarizer } } },
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
    }
}

// 127 Pinsir → Mega Pinsir
pkmn.pinsir = {
    type: ["bug"],
    bst: {
        hp: 65,
        atk: 125,
        def: 100,
        satk: 55,
        sdef: 70,
        spe: 85,
    }
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
    }
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
    }
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
    }
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
    }
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
            4: { pkmn: pkmn.espeon, happiness: true, time: "day" },
            5: { pkmn: pkmn.umbreon, happiness: true, time: "night" },
            6: { pkmn: pkmn.leafeon, location: "Eterna Forest" },
            7: { pkmn: pkmn.glaceon, location: "Snowpoint" },
            8: { pkmn: pkmn.sylveon, affection: 2 } 
        } 
    },
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
}

pkmn.aerodactyl = {
    type: ["rock","flying"],
    bst: {
        hp: 80,
        atk: 105,
        def: 65,
        satk: 60,
        sdef: 75,
        spe: 130,
    }
}

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
    evolve: function() { return { 1: { pkmn: pkmn.kabutops, level: evolutionLevel3 } } },
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
    }
}

// 141 Kabuto → Kabutops
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
    }
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
}

pkmn.dragonair = {
    type: ["dragon"],
    bst: {
        hp: 61,
        atk: 84,
        def: 65,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dragonite, level: evolutionLevel3 } } },
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
    }
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
    }
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
    }
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
    }
}

// 165 Ledyba → Ledian
pkmn.ledyba = {
    type: ["bug","flying"],
    bst: {
        hp: 40,
        atk: 20,
        def: 30,
        satk: 40,
        sdef: 80,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ledian, level: evolutionLevel1 } } },
}

pkmn.ledian = {
    type: ["bug","flying"],
    bst: {
        hp: 55,
        atk: 35,
        def: 50,
        satk: 55,
        sdef: 110,
        spe: 85,
    }
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
}

pkmn.ariados = {
    type: ["bug","poison"],
    bst: {
        hp: 70,
        atk: 90,
        def: 70,
        satk: 60,
        sdef: 70,
        spe: 40,
    }
}

// 172 Chinchou → Lanturn
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
    }
}

// 174 Pichu → Pikachu → Raichu
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
    evolve: function() { return { 1: { pkmn: pkmn.pikachu, happiness: true } } },
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
    }
}

// 177 Cleffa → Clefairy → Clefable
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
    evolve: function() { return { 1: { pkmn: pkmn.clefairy, happiness: true } } },
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
    }
}

// 180 Marill → Azumarill
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
    evolve: function() { return { 1: { pkmn: pkmn.azumarill, level: evolutionLevel1 } } },
}

pkmn.azumarill = {
    type: ["water","fairy"],
    bst: {
        hp: 100,
        atk: 50,
        def: 80,
        satk: 60,
        sdef: 80,
        spe: 50,
    }
}

// 181 Azurill → Marill
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
    evolve: function() { return { 1: { pkmn: pkmn.marill, happiness: true } } },
}


// 184 Sudowoodo
pkmn.sudowoodo = {
    type: ["rock"],
    bst: {
        hp: 70,
        atk: 100,
        def: 115,
        satk: 30,
        sdef: 65,
        spe: 30,
    }
}


// 186 Hoppip → Skiploom → Jumpluff
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
    }
}

// 189 Aipom → Ambipom
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
    evolve: function() { return { 1: { pkmn: pkmn.ambipom, trade: true, item: item.heldItem } } },
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
    }
}

// 190 Sunkern → Sunflora
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
    }
}

// 191 Yanma → Yanmega
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
    }
}

// 193 Wooper → Quagsire
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
    }
}


// 197 Murkrow → Honchkrow
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
}


pkmn.unownW = {
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
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    }
}
pkmn.unownQuestion = {
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
// 202 Wobbuffet
pkmn.wobbuffet = {
    type: ["psychic"],
    bst: {
        hp: 190,
        atk: 33,
        def: 58,
        satk: 33,
        sdef: 58,
        spe: 33,
    }
}

// 203 Girafarig
pkmn.girafarig = {
    type: ["normal","psychic"],
    bst: {
        hp: 70,
        atk: 80,
        def: 65,
        satk: 90,
        sdef: 65,
        spe: 85,
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
    }
}

// 206 Dunsparce
pkmn.dunsparce = {
    type: ["normal"],
    bst: {
        hp: 100,
        atk: 70,
        def: 70,
        satk: 65,
        sdef: 65,
        spe: 45,
    }
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
    evolve: function() { return { 1: { pkmn: pkmn.gliscor, item: item.razorFang, time: "night" } } },
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
    }
}

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
    }
}

// 211 Qwilfish
pkmn.qwilfish = {
    type: ["water","poison"],
    bst: {
        hp: 65,
        atk: 95,
        def: 75,
        satk: 55,
        sdef: 55,
        spe: 85,
    }
}

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
    }
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
    }
}

// 215 Sneasel → Weavile
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
    evolve: function() { return { 1: { pkmn: pkmn.weavile, item: item.razorClaw, time: "night" } } },
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
    }
}

// 217 Teddiursa → Ursaring
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
    }
}

// 219 Slugma → Magcargo
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
    }
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
    evolve: function() { return { 1: { pkmn: pkmn.mamoswine, item: item.diveClaw } } },
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
    }
}

// 221 Corsola
pkmn.corsola = {
    type: ["water","rock"],
    bst: {
        hp: 55,
        atk: 55,
        def: 85,
        satk: 65,
        sdef: 85,
        spe: 35,
    }
}

// 222 Remoraid → Octillery
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
    }
}

// 224 Delibird
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

// 225 Mantine
pkmn.mantine = {
    type: ["water","flying"],
    bst: {
        hp: 65,
        atk: 40,
        def: 70,
        satk: 80,
        sdef: 140,
        spe: 70,
    }
}

// 226 Skarmory
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

// 227 Houndour → Houndoom
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
    }
}

// 229 Kingdra
pkmn.kingdra = {
    type: ["water","dragon"],
    bst: {
        hp: 75,
        atk: 95,
        def: 95,
        satk: 95,
        sdef: 95,
        spe: 85,
    }
}

// 230 Phanpy → Donphan
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

// 232 Porygon2
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
    evolve: function() { return { 1: { pkmn: pkmn.porygon2, item: item.upGrade } } },
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
    evolve: function() { return { 1: { pkmn: pkmn.porygonZ, item: item.dubiousDisc } } },
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
    }
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
    }
}

// 236 Tyrogue → Hitmonlee / Hitmonchan / Hitmontop
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
            1: { pkmn: pkmn.hitmonlee, atkHigher: true },
            2: { pkmn: pkmn.hitmonchan, defHigher: true },
            3: { pkmn: pkmn.hitmontop, atkEqualsDef: true } 
        } 
    },
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
    }
}

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
    }
}

// 242 Blissey
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
    evolve: function() { return { 1: { pkmn: pkmn.chansey, happiness: true } } },
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
    evolve: function() { return { 1: { pkmn: pkmn.blissey, happiness: true } } },
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
    }
}

// 245 Raikou
pkmn.raikou = {
    type: ["electric"],
    bst: {
        hp: 90,
        atk: 85,
        def: 75,
        satk: 115,
        sdef: 100,
        spe: 115,
    }
}

// 246 Entei
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

// 247 Suicune
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

// 248 Larvitar → Pupitar → Tyranitar
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
    }
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
    }
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
    }
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
    }
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
}

pkmn.marshtomp = {
    type: ["water","ground"],
    bst: {
        hp: 70,
        atk: 85,
        def: 70,
        satk: 60,
        sdef: 70,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.swampert, level: evolutionLevel2 } } },
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
    }
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
    }
}

// 263 Zigzagoon → Linoone
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
            1: { pkmn: pkmn.silcoon, personality: "beauty" }, 
            2: { pkmn: pkmn.cascoon, personality: "tough" } 
        } 
    },
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
    }
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
}

pkmn.dustox = {
    type: ["bug","poison"],
    bst: {
        hp: 60,
        atk: 50,
        def: 70,
        satk: 50,
        sdef: 90,
        spe: 65,
    }
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
    }
}

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
    }
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
    }
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
    }
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
    }
}

// 281 Ralts → Kirlia → Gardevoir / Gallade
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
            2: { pkmn: pkmn.gallade, item: item.dawnStone, gender: "male" }
        } 
    },
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
    }
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
    }
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
    }
}

// 288 Vigoroth → Slaking
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
}

pkmn.slaking = {
    type: ["normal"],
    bst: {
        hp: 150,
        atk: 160,
        def: 100,
        satk: 95,
        sdef: 65,
        spe: 100,
    }
}

// 291 Nincada → Ninjask / Shedinja
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
                 2: { pkmn: pkmn.shedinja, extraCondition: true } }
    },
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
    }
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
    }
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
    }
}

// 297 Makuhita → Hariyama
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
    }
}

// 301 Aron → Lairon → Aggron
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
    }
}

// 304 Meditite → Medicham
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
    }
}

// 307 Mawile
pkmn.mawile = {
    type: ["steel","fairy"],
    bst: {
        hp: 50,
        atk: 85,
        def: 85,
        satk: 55,
        sdef: 55,
        spe: 50,
    }
}

// 309 Plusle
pkmn.plusle = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 50,
        def: 40,
        satk: 85,
        sdef: 75,
        spe: 95,
    }
}

// 310 Minun
pkmn.minun = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 40,
        def: 50,
        satk: 75,
        sdef: 85,
        spe: 95,
    }
}

// 311 Volbeat
pkmn.volbeat = {
    type: ["bug"],
    bst: {
        hp: 65,
        atk: 73,
        def: 55,
        satk: 47,
        sdef: 75,
        spe: 85,
    }
}

// 312 Illumise
pkmn.illumise = {
    type: ["bug"],
    bst: {
        hp: 65,
        atk: 47,
        def: 55,
        satk: 73,
        sdef: 75,
        spe: 85,
    }
}



// 313 Roselia → Roserade

pkmn.budew = {
    type: ["grass","poison"],
    bst: {
        hp: 40,
        atk: 30,
        def: 35,
        satk: 50,
        sdef: 70,
        spe: 55,
    }
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
    }
}

// 315 Gulpin → Swalot
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
    }
}

// 317 Carvanha → Sharpedo
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
    }
}

// 319 Wailmer → Wailord
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
    }
}

// 322 Skitty → Delcatty
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
    evolve: function() { return { 1: { pkmn: pkmn.delcatty, item: item.shinyStone } } },
}

pkmn.delcatty = {
    type: ["normal"],
    bst: {
        hp: 70,
        atk: 65,
        def: 65,
        satk: 55,
        sdef: 55,
        spe: 90,
    }
}


// 325 Spinda
pkmn.spinda = {
    type: ["normal"],
    bst: {
        hp: 60,
        atk: 60,
        def: 60,
        satk: 60,
        sdef: 60,
        spe: 60,
    }
}

// 327 Trapinch → Vibrava → Flygon
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
}

pkmn.flygon = {
    type: ["ground","dragon"],
    bst: {
        hp: 80,
        atk: 100,
        def: 80,
        satk: 80,
        sdef: 80,
        spe: 100,
    }
}

// 330 Barboach → Whiscash
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
}

pkmn.whiscash = {
    type: ["water","ground"],
    bst: {
        hp: 110,
        atk: 78,
        def: 73,
        satk: 76,
        sdef: 71,
        spe: 60,
    }
}

// 331 Corphish → Crawdaunt
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

// 334 Cacnea → Cacturne
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
    }
}

pkmn.torkoal = {
    type: ["fire"],
    bst: {
        hp: 70,
        atk: 85,
        def: 140,
        satk: 85,
        sdef: 70,
        spe: 20,
    }
}



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
    }
}

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
    }
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
    }
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
    }
}



// 342 Baltoy → Claydol
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
    }
}

// 344 Spheal → Sealeo → Walrein
pkmn.spheal = {
    type: ["ice","water"],
    bst: {
        hp: 70,
        atk: 40,
        def: 50,
        satk: 55,
        sdef: 50,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sealeo, level: evolutionLevel2 } } },
}

pkmn.sealeo = {
    type: ["ice","water"],
    bst: {
        hp: 90,
        atk: 60,
        def: 70,
        satk: 75,
        sdef: 70,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.walrein, level: evolutionLevel3 } } },
}

pkmn.walrein = {
    type: ["ice","water"],
    bst: {
        hp: 110,
        atk: 80,
        def: 90,
        satk: 95,
        sdef: 90,
        spe: 65,
    }
}


// 350 Surskit → Masquerain
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
    }
}


// 358 Tropius
pkmn.tropius = {
    type: ["grass","flying"],
    bst: {
        hp: 99,
        atk: 68,
        def: 83,
        satk: 72,
        sdef: 87,
        spe: 51,
    }
}

// 359 Chimecho

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
    evolve: function() { return { 1: { pkmn: pkmn.chimecho, level: 0, friendship: true } } }, // evoluciona con amistad
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
    }
}

// 360 Absol
pkmn.absol = {
    type: ["dark"],
    bst: {
        hp: 65,
        atk: 130,
        def: 60,
        satk: 75,
        sdef: 60,
        spe: 75,
    }
}


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
            2: { pkmn: pkmn.froslass, item: item.dawnStone, gender: "female" }
        }
    },
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
    }
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
    }
}


// 366 Huntail
pkmn.huntail = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 104,
        def: 105,
        satk: 94,
        sdef: 75,
        spe: 52,
    }
}

// 367 Gorebyss
pkmn.gorebyss = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 84,
        def: 105,
        satk: 114,
        sdef: 75,
        spe: 52,
    }
}

// 368 Relicanth
pkmn.relicanth = {
    type: ["water","rock"],
    bst: {
        hp: 100,
        atk: 90,
        def: 130,
        satk: 45,
        sdef: 65,
        spe: 55,
    }
}

// 369 Luvdisc
pkmn.luvdisc = {
    type: ["water"],
    bst: {
        hp: 43,
        atk: 30,
        def: 55,
        satk: 40,
        sdef: 65,
        spe: 97,
    }
}

// 370 Bagon → Shelgon → Salamence
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
    }
}

// 373 Beldum → Metang → Metagross
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
    }
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
    }
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
    }
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
        spe: 50,
    }
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
    }
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
    }
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
    }
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
    }
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
    }
}

// 385 Jirachi
pkmn.jirachi = {
    type: ["steel","psychic"],
    bst: {
        hp: 100,
        atk: 100,
        def: 100,
        satk: 100,
        sdef: 100,
        spe: 100,
    }
}

// 386 Deoxys (Normal Form)
pkmn.deoxys = {
    type: ["psychic"],
    bst: {
        hp: 50,
        atk: 150,
        def: 50,
        satk: 150,
        sdef: 50,
        spe: 150,
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
    }
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
    }
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
    }
}

// 400 Kricketot → Kricketune
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
    }
}

// 401 Kricketune
// (ya está en 400)

// 402 Shinx → Luxio → Luxray
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
    }
}

// 405 Budew → Roselia → Roserade
// (Roselia y Roserade ya están definidas en 313)

// 407 Cranidos → Rampardos
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
    }
}

// 409 Shieldon → Bastiodon
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
    }
}

// 411 Burmy → Wormadam / Mothim
pkmn.burmy = {
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
            1: { pkmn: pkmn.wormadam, gender: "female" },
            2: { pkmn: pkmn.mothim, gender: "male" }
        } 
    },
}

pkmn.wormadam = {
    type: ["bug","grass"], // default plant cloak; other cloaks pueden cambiar tipo
    bst: {
        hp: 60,
        atk: 59,
        def: 85,
        satk: 79,
        sdef: 105,
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
    }
}

// 414 Combee → Vespiquen
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
    evolve: function() { return { 1: { pkmn: pkmn.vespiquen, gender: "female" } } },
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
    }
}

// 416 Pachirisu
pkmn.pachirisu = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 45,
        def: 70,
        satk: 45,
        sdef: 90,
        spe: 95,
    }
}

// 417 Buizel → Floatzel
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
    }
}

// 419 Cherubi → Cherrim
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
    }
}

// 420 Shellos → Gastrodon
pkmn.shellos = {
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
}

pkmn.gastrodon = {
    type: ["water","ground"],
    bst: {
        hp: 111,
        atk: 83,
        def: 68,
        satk: 92,
        sdef: 82,
        spe: 39,
    }
}

// 421 Drifloon → Drifblim
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
    }
}

// 423 Buneary → Lopunny
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
    }
}

// 425 Buizel → Floatzel
// (ya está en 417)

// 427 Pachirisu
// (ya está en 416)

// 428 Gible → Gabite → Garchomp
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
    }
}

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
    }
}

// 433 Chingling → Chimecho
// (Chimecho ya está en 359)

// 435 Stunky → Skuntank
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

// 437 Bronzor → Bronzong
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
    }
}

// 439 Mime Jr. → Mr. Mime
pkmn.mimejr = {
    type: ["psychic","fairy"],
    bst: {
        hp: 20,
        atk: 25,
        def: 45,
        satk: 70,
        sdef: 90,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mrmime, level: 0, item: item.dummyTm } } }, 
    // evolución por amistad; placeholder item
}

pkmn.mrmime = {
    type: ["psychic","fairy"],
    bst: {
        hp: 40,
        atk: 45,
        def: 65,
        satk: 100,
        sdef: 120,
        spe: 90,
    }
}


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
    }
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
    }
}


// 446 Munchlax → Snorlax
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
    evolve: function() { return { 1: { pkmn: pkmn.snorlax, level: 0 } } }, // amistad
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
    }
}

// 448 Riolu → Lucario
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
    evolve: function() { return { 1: { pkmn: pkmn.lucario, level: 0, friendship: true } } }, // evoluciona con amistad
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
    }
}

// 450 Hippopotas → Hippowdon
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
    }
}

// 452 Skorupi → Drapion
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
    }
}

// 454 Croagunk → Toxicroak
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
    }
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
    }
}

// 458 Mantyke → Mantine
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
    evolve: function() { return { 1: { pkmn: pkmn.mantine, item: item.dummyTm } } }, // Evoluciona al nivel con Remoraid en el equipo
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
    }
}

// 460 Snover → Abomasnow
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
    }
}


// 468 Togekiss
pkmn.togekiss = {
    type: ["fairy","flying"],
    bst: {
        hp: 85,
        atk: 50,
        def: 95,
        satk: 120,
        sdef: 115,
        spe: 80,
    }
}

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
    }
}




// 476 Probopass
pkmn.probopass = {
    type: ["rock","steel"],
    bst: {
        hp: 60,
        atk: 55,
        def: 145,
        satk: 75,
        sdef: 150,
        spe: 40,
    }
}

// 477 Dusknoir



pkmn.dusknoir = {
    type: ["ghost"],
    bst: {
        hp: 45,
        atk: 100,
        def: 135,
        satk: 65,
        sdef: 135,
        spe: 45,
    }
}

// 478 Froslass
// (ya está en 361)


// Rotom (todas las formas)
pkmn.rotom = {
    type: ["electric","ghost"],
    bst: {
        hp: 50,
        atk: 50,
        def: 77,
        satk: 95,
        sdef: 77,
        spe: 91,
    }
}

// Todos los electrodomésticos de Rotom tienen las mismas stats
// Rotom Heat
pkmn.rotomHeat = {
    type: ["electric","fire"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    }
}

// Rotom Wash
pkmn.rotomWash = {
    type: ["electric","water"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    }
}

// Rotom Frost
pkmn.rotomFrost = {
    type: ["electric","ice"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    }
}

// Rotom Fan
pkmn.rotomFan = {
    type: ["electric","flying"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    }
}

// Rotom Mow
pkmn.rotomMow = {
    type: ["electric","grass"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    }
}

// 480 Uxie
pkmn.uxie = {
    type: ["psychic"],
    bst: {
        hp: 75,
        atk: 75,
        def: 130,
        satk: 75,
        sdef: 130,
        spe: 95,
    }
}

// 481 Mesprit
pkmn.mesprit = {
    type: ["psychic"],
    bst: {
        hp: 80,
        atk: 105,
        def: 105,
        satk: 105,
        sdef: 105,
        spe: 80,
    }
}

// 482 Azelf
pkmn.azelf = {
    type: ["psychic"],
    bst: {
        hp: 75,
        atk: 125,
        def: 70,
        satk: 125,
        sdef: 70,
        spe: 115,
    }
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
    }
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
    }
}

// 485 Heatran
pkmn.heatran = {
    type: ["fire","steel"],
    bst: {
        hp: 91,
        atk: 90,
        def: 106,
        satk: 130,
        sdef: 106,
        spe: 77,
    }
}

// 486 Regigigas
pkmn.regigigas = {
    type: ["normal"],
    bst: {
        hp: 110,
        atk: 160,
        def: 110,
        satk: 80,
        sdef: 110,
        spe: 100,
    }
}

// 487 Giratina (Altered Form)
pkmn.giratina = {
    type: ["ghost","dragon"],
    bst: {
        hp: 150,
        atk: 100,
        def: 120,
        satk: 100,
        sdef: 120,
        spe: 90,
    }
}

// 488 Cresselia
pkmn.cresselia = {
    type: ["psychic"],
    bst: {
        hp: 120,
        atk: 70,
        def: 120,
        satk: 75,
        sdef: 130,
        spe: 85,
    }
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
    }
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
    }
}

// 491 Darkrai
pkmn.darkrai = {
    type: ["dark"],
    bst: {
        hp: 70,
        atk: 90,
        def: 90,
        satk: 135,
        sdef: 90,
        spe: 125,
    }
}

// 492 Shaymin (Land Form)
pkmn.shaymin = {
    type: ["grass"],
    bst: {
        hp: 100,
        atk: 100,
        def: 100,
        satk: 100,
        sdef: 100,
        spe: 100,
    }
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
    }
}

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
    }
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
}

pkmn.serperior = {
    type: ["grass"],
    bst: {
        hp: 75,
        atk: 75,
        def: 95,
        satk: 75,
        sdef: 95,
        spe: 113,
    }
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
    }
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
    }
}

// 504 Patrat
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
}

// 505 Watchog
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
}

pkmn.herdier = {
  type: ["normal"],
  bst: {
    hp: 65,
    atk: 80,
    def: 65,
    satk: 35,
    sdef: 65,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.stoutland, level: evolutionLevel2 } } },
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
  evolve: function() { return { 1: { pkmn: pkmn.liepard, level: evolutionLevel1 } } },  // nivel estimado, revisa si lo usas
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
  evolve: function() { return { 1: { pkmn: pkmn.musharna, item: item.dreamStone /* o equivalente */ } } },
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
}

pkmn.tranquill = {
  type: ["normal","flying"],
  bst: {
    hp: 62,
    atk: 77,
    def: 62,
    satk: 50,
    sdef: 42,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.unfezant, level: evolutionLevel2 } } },
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
}

pkmn.boldore = {
  type: ["rock"],
  bst: {
    hp: 70,
    atk: 105,
    def: 105,
    satk: 50,
    sdef: 50,
    spe: 20,
  },
  evolve: function() { return { 1: { pkmn: pkmn.gigalith, item: item.stealthRock/*o un objeto de “union” si lo usas*/ } } },
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
  evolve: function() { return { 1: { pkmn: pkmn.swoobat, happiness: true } } },
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
  evolve: function() { return { 1: { pkmn: pkmn.conkeldurr, item: item.machoBrace/*o “union” si usas algo así*/ } } },
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
  evolve: function() { return { 1: { pkmn: pkmn.leavanny, happiness: true } } },
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
}

// 544 Cottonee → Whimsicott
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
}

// 546 Petilil → Lilligant
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
}

// 548 Basculin
pkmn.basculin = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 92,
    def: 65,
    satk: 80,
    sdef: 55,
    spe: 98,
  },
}

// 549 Sandile → Krokorok → Krookodile
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
}

// 552 Darumaka → Darmanitan
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
}

// 554 Maractus
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
}

// 555 Dwebble → Crustle
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
}

// 557 Scraggy → Scrafty
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
}

// 559 Sigilyph
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
}

// 560 Yamask → Cofagrigus
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
}

// 562 Tirtouga → Carracosta
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
}

// 564 Archen → Archeops
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
}

pkmn.archeops = {
  type: ["rock","flying"],
  bst: {
    hp: 75,
    atk: 140,
    def: 65,
    satk: 112,
    sdef: 65,
    spe: 110,
  },
}

// 567 Trubbish → Garbodor
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
}

// 569 Zorua → Zoroark
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
}

// 571 Minccino → Cinccino
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
}

// 573 Gothita → Gothorita → Gothitelle
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
}

// 576 Solosis → Duosion → Reuniclus
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
}

pkmn.duosion = {
  type: ["psychic"],
  bst: {
    hp: 65,
    atk: 40,
    def: 50,
    satk: 125,
    sdef: 60,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.reuniclus, level: evolutionLevel3 } } },
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
}

// 579 Ducklett → Swanna
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
}

// 581 Vanillite → Vanillish → Vanilluxe
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
}

// 584 Deerling → Sawsbuck
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
}

// 586 Emolga
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
}

// 587 Karrablast → Escavalier
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
  evolve: function() { return { 1: { pkmn: pkmn.escavalier, trade: true } } },
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
}

// 589 Foongus → Amoonguss
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
}

// 591 Frillish → Jellicent
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

// 593 Alomomola
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

// 594 Joltik → Galvantula
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
}

// 596 Ferroseed → Ferrothorn
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
}

// 598 Klink → Klang → Klinklang
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
}

// 601 Tynamo → Eelektrik → Eelektross
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
}

// 604 Elgyem → Beheeyem
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

// 605 Litwick → Lampent → Chandelure
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
  evolve: function() { return { 1: { pkmn: pkmn.chandelure, item: item.fireStone } } },
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
}

// 608 Axew → Fraxure → Haxorus
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
}

// 611 Cubchoo → Beartic
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
}

// 613 Cryogonal
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
}

// 614 Shelmet → Accelgor
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
  evolve: function() { return { 1: { pkmn: pkmn.accelgor, trade: true/*tradición de intercambio con Karrablast*/ } } },
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
}

// 616 Stunfisk
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
}

// 618 Mienshao
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
}

// 619 Druddigon
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
}

// 620 Golett → Golurk
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
}

// 622 Pawniard → Bisharp
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
}

// 624 Bouffalant
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
}

// 625 Rufflet → Braviary
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
}

// 627 Vullaby → Mandibuzz
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

// 629 Heatmor
pkmn.heatmor = {
  type: ["fire"],
  bst: {
    hp: 85,
    atk: 97,
    def: 66,
    satk: 105,
    sdef: 66,
    spe: 65,
  },
}

// 630 Durant
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
}

// 632 Deino → Zweilous → Hydreigon
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
}

pkmn.zweilous = {
  type: ["dark","dragon"],
  bst: {
    hp: 72,
    atk: 85,
    def: 70,
    satk: 65,
    sdef: 70,
    spe: 58,
  },
  evolve: function() { return { 1: { pkmn: pkmn.hydreigon, level: evolutionLevel3 } } },
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
}

// 635 Larvesta → Volcarona
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
}

// 637 Cobalion
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
}

// 638 Terrakion
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

// 639 Virizion
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
}

// 640 Tornadus
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
}

// 641 Thundurus
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
}

// 642 Reshiram
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
}

// 643 Zekrom
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
}

// 644 Landorus
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
}

// 645 Kyurem
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
}

// 646 Keldeo
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
}

// 647 Meloetta
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
  // Forma de cambio es opcional y puede definirse aparte si se desea
}

// 648 Genesect
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
}

// 649 Chespin → Quilladin → Chesnaught
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

// 652 Fennekin → Braixen → Delphox
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
}

pkmn.braixen = {
  type: ["fire"],
  bst: {
    hp: 59,
    atk: 59,
    def: 58,
    satk: 90,
    sdef: 70,
    spe: 73,
  },
  evolve: function() { return { 1: { pkmn: pkmn.delphox, level: evolutionLevel2 } } },
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
}

// 655 Froakie → Frogadier → Greninja
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
}

// 658 Bunnelby → Diggersby
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
}

// 660 Fletchling → Fletchinder → Talonflame
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
}

pkmn.fletchinder = {
  type: ["fire","flying"],
  bst: {
    hp: 62,
    atk: 73,
    def: 55,
    satk: 56,
    sdef: 52,
    spe: 84,
  },
  evolve: function() { return { 1: { pkmn: pkmn.talonflame, level: evolutionLevel2 } } },
}

pkmn.talonflame = {
  type: ["fire","flying"],
  bst: {
    hp: 78,
    atk: 81,
    def: 71,
    satk: 74,
    sdef: 69,
    spe: 126,
  },
}

// 665 Scatterbug → Spewpa → Vivillon
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
}

// 668 Litleo → Pyroar
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
}

// 670 Flabébé → Floette → Florges
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
}

pkmn.florges = {
  type: ["fairy"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 154,
    spe: 75,
  },
}

// 673 Skiddo → Gogoat
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
}

// 675 Pancham → Pangoro
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
}

// 677 Furfrou
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
}

// 678 Espurr → Meowstic
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
}

// 680 Honedge → Doublade → Aegislash
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
}

// 685 Spritzee → Aromatisse
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
}

// 687 Swirlix → Slurpuff
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
  evolve: function() { return { 1: { pkmn: pkmn.slurpuff, item: item.cutiePie } } },
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
}

// 689 Inkay → Malamar
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
}

// 691 Binacle → Barbaracle
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
}

// 693 Skrelp → Dragalge
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
}

// 695 Clauncher → Clawitzer
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
}

// 697 Helioptile → Heliolisk
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
}

// 699 Tyrunt → Tyrantrum
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
  evolve: function() { return { 1: { pkmn: pkmn.tyrantrum, item: item.rareBone } } },
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
}

// 701 Amaura → Aurorus
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
}


// 704 Sylveon
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
}

// 705 Hawlucha
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
}

// 706 Dedenne
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
}

// 707 Carbink
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
}

// 708 Goomy → Sliggoo → Goodra
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
}

// 711 Klefki
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
}

// 712 Phantump → Trevenant
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
}

// 714 Pumpkaboo → Gourgeist
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
}

// 716 Bergmite → Avalugg
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
}

// 718 Noibat → Noivern
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
}

// 721 Rowlet → Dartrix → Decidueye
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
}

// 728 Litten → Torracat → Incineroar
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
}

// 731 Popplio → Brionne → Primarina
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
}

pkmn.primarina = {
  type: ["water","fairy"],
  bst: {
    hp: 80,
    atk: 74,
    def: 74,
    satk: 126,
    sdef: 116,
    spe: 60,
  },
}

// 734 Pikipek → Trumbeak → Toucannon
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
}

// 737 Yungoos → Gumshoos
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
}

// 741 Oricorio (Baile Style)
pkmn.oricorio = {
  type: ["fire","flying"],
  bst: {
    hp: 75,
    atk: 70,
    def: 70,
    satk: 98,
    sdef: 70,
    spe: 93,
  },
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
}

// 745 Wishiwashi
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
  // Forma escuela se puede manejar aparte si se desea
}

// 746 Mareanie → Toxapex
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

// 748 Mudbray → Mudsdale
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
}

// 750 Dewpider → Araquanid
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
}

// 752 Fomantis → Lurantis
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
}

pkmn.lurantis = {
  type: ["grass"],
  bst: {
    hp: 70,
    atk: 105,
    def: 90,
    satk: 80,
    sdef: 90,
    spe: 45,
  },
}

// 754 Morelull → Shiinotic
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
}

// 756 Salandit → Salazzle
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
}

// 758 Stufful → Bewear
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
}

// 760 Bounsweet → Steenee → Tsareena
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
}


// 765 Comfey
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
}

// 766 Oranguru
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
}

// 767 Passimian
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
}

pkmn.rockruff = {
    type: ["rock"],
    bst: {
        hp: 45,
        atk: 65,
        def: 40,
        satk: 30,
        sdef: 40,
        spe: 60,
    }
}

pkmn.lycanroc_midday = {
    type: ["rock"],
    bst: {
        hp: 75,
        atk: 115,
        def: 65,
        satk: 55,
        sdef: 65,
        spe: 112,
    }
}

pkmn.lycanroc_midnight = {
    type: ["rock"],
    bst: {
        hp: 85,
        atk: 115,
        def: 75,
        satk: 55,
        sdef: 75,
        spe: 82,
    }
}

pkmn.lycanroc_dusk = {
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

// 768 Wimpod → Golisopod
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
}

// 770 Sandygast → Palossand
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

// 772 Pyukumuku
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

// 773 Type: Null → Silvally
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
  evolve: function() { return { 1: { pkmn: pkmn.silvally, item: item.adamantMemory } } },
}

pkmn.silvally = {
  type: ["normal"],
  bst: {
    hp: 95,
    atk: 95,
    def: 95,
    satk: 95,
    sdef: 95,
    spe: 95,
  },
}

// 775 Minior
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
}

// 776 Komala
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

// 777 Turtonator
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
}

// 778 Togedemaru
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
}

// 779 Mimikyu
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
}

// 780 Bruxish
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
}

// 781 Drampa
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

// 782 Dhelmise
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
}

// 783 Jangmo-o → Hakamo-o → Kommo-o
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
}


// 785 Tapu Koko
pkmn.tapuKoko = {
  type: ["electric","fairy"],
  bst: {
    hp: 70,
    atk: 115,
    def: 85,
    satk: 95,
    sdef: 75,
    spe: 130,
  },
}

// 786 Tapu Lele
pkmn.tapuLele = {
  type: ["psychic","fairy"],
  bst: {
    hp: 70,
    atk: 85,
    def: 75,
    satk: 130,
    sdef: 115,
    spe: 95,
  },
}

// 787 Tapu Bulu
pkmn.tapuBulu = {
  type: ["grass","fairy"],
  bst: {
    hp: 70,
    atk: 130,
    def: 115,
    satk: 85,
    sdef: 95,
    spe: 75,
  },
}

// 788 Tapu Fini
pkmn.tapuFini = {
  type: ["water","fairy"],
  bst: {
    hp: 70,
    atk: 75,
    def: 115,
    satk: 95,
    sdef: 130,
    spe: 85,
  },
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
}

pkmn.cosmoem = {
  type: ["psychic"],
  bst: {
    hp: 43,
    atk: 29,
    def: 131,
    satk: 29,
    sdef: 131,
    spe: 37,
  },
  evolve: function() { 
    return { 
      1: { pkmn: pkmn.solgaleo, item: item.sunStone }, 
      2: { pkmn: pkmn.lunala, item: item.moonStone } 
    } 
  },
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
}

// 793 Nihilego
pkmn.nihilego = {
  type: ["rock","poison"],
  bst: {
    hp: 109,
    atk: 53,
    def: 47,
    satk: 127,
    sdef: 131,
    spe: 103,
  },
}

// 794 Buzzwole
pkmn.buzzwole = {
  type: ["bug","fighting"],
  bst: {
    hp: 107,
    atk: 139,
    def: 139,
    satk: 53,
    sdef: 53,
    spe: 79,
  },
}

// 795 Pheromosa
pkmn.pheromosa = {
  type: ["bug","fighting"],
  bst: {
    hp: 71,
    atk: 137,
    def: 37,
    satk: 137,
    sdef: 37,
    spe: 151,
  },
}

// 796 Xurkitree
pkmn.xurkitree = {
  type: ["electric"],
  bst: {
    hp: 83,
    atk: 89,
    def: 71,
    satk: 173,
    sdef: 71,
    spe: 83,
  },
}

// 797 Celesteela
pkmn.celesteela = {
  type: ["steel","flying"],
  bst: {
    hp: 97,
    atk: 101,
    def: 103,
    satk: 107,
    sdef: 101,
    spe: 61,
  },
}

// 798 Kartana
pkmn.kartana = {
  type: ["grass","steel"],
  bst: {
    hp: 59,
    atk: 181,
    def: 131,
    satk: 59,
    sdef: 31,
    spe: 109,
  },
}

// 799 Guzzlord
pkmn.guzzlord = {
  type: ["dark","dragon"],
  bst: {
    hp: 223,
    atk: 101,
    def: 53,
    satk: 97,
    sdef: 53,
    spe: 43,
  },
}

// 800 Necrozma
pkmn.necrozma = {
  type: ["psychic"],
  bst: {
    hp: 97,
    atk: 107,
    def: 101,
    satk: 127,
    sdef: 89,
    spe: 79,
  },
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
}

// 802 Marshadow
pkmn.marshadow = {
  type: ["fighting","ghost"],
  bst: {
    hp: 90,
    atk: 125,
    def: 80,
    satk: 90,
    sdef: 90,
    spe: 125,
  },
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
  evolve: function() { return { 1: { pkmn: pkmn.naganadel, item: item.rareCandy } } },
}

pkmn.naganadel = {
  type: ["poison","dragon"],
  bst: {
    hp: 73,
    atk: 73,
    def: 73,
    satk: 127,
    sdef: 73,
    spe: 121,
  },
}

// 805 Stakataka
pkmn.stakataka = {
  type: ["rock","steel"],
  bst: {
    hp: 61,
    atk: 131,
    def: 211,
    satk: 53,
    sdef: 101,
    spe: 13,
  },
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
}

// 807 Zeraora
pkmn.zeraora = {
  type: ["electric"],
  bst: {
    hp: 88,
    atk: 112,
    def: 75,
    satk: 102,
    sdef: 80,
    spe: 143,
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
  evolve: function() { return { 1: { pkmn: pkmn.melmetal, item: item.meltanCandy } } },
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
}

pkmn.cinderace = {
  type: ["fire"],
  bst: {
    hp: 80,
    atk: 116,
    def: 75,
    satk: 65,
    sdef: 75,
    spe: 119,
  },
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
  type: ["flying","normal"],
  bst: {
    hp: 38,
    atk: 47,
    def: 35,
    satk: 33,
    sdef: 35,
    spe: 57,
  },
  evolve: function() { return { 1: { pkmn: pkmn.corvisquire, level: evolutionLevel1 } } },
}

pkmn.corvisquire = {
  type: ["flying","normal"],
  bst: {
    hp: 68,
    atk: 67,
    def: 55,
    satk: 43,
    sdef: 55,
    spe: 77,
  },
  evolve: function() { return { 1: { pkmn: pkmn.corviknight, level: evolutionLevel2 } } },
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
}

// 827 Blipbug → Dottler → Orbeetle
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
}

// 830 Nickit → Thievul
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
}

// 832 Gossifleur → Eldegoss
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
}

// 834 Wooloo → Dubwool
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

// 836 Chewtle → Drednaw
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
}

pkmn.drednaw = {
  type: ["water","rock"],
  bst: {
    hp: 90,
    atk: 115,
    def: 90,
    satk: 48,
    sdef: 68,
    spe: 74,
  },
}

// 838 Yamper → Boltund
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
}

// 840 Rolycoly → Carkol → Coalossal
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
}

// 847 Applin → Flapple / Appletun
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
      1: { pkmn: pkmn.flapple, item: item.tartApple }, 
      2: { pkmn: pkmn.appletun, item: item.sweetApple } 
    } 
  },
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
}

// 850 Silicobra → Sandaconda
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
}

// 852 Cramorant
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

// 853 Arrokuda → Barraskewda
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
}

// 855 Toxel → Toxtricity
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
}

// 857 Sizzlipede → Centiskorch
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
}

// 859 Clobbopus → Grapploct
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
}

// 861 Sinistea → Polteageist
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
  evolve: function() { return { 1: { pkmn: pkmn.polteageist, item: item.iceStone } } },
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
}

// 863 Hatenna → Hattrem → Hatterene
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
}

pkmn.hattrem = {
  type: ["psychic"],
  bst: {
    hp: 57,
    atk: 40,
    def: 65,
    satk: 86,
    sdef: 73,
    spe: 49,
  },
  evolve: function() { return { 1: { pkmn: pkmn.hatterene, level: evolutionLevel3 } } },
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
}

// 866 Impidimp → Morgrem → Grimmsnarl
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
}

pkmn.morgrem = {
  type: ["dark","fairy"],
  bst: {
    hp: 65,
    atk: 60,
    def: 45,
    satk: 75,
    sdef: 55,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.grimmsnarl, level: evolutionLevel3 } } },
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
}

// 867 Obstagoon
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
}

// 868 Perrserker
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

// 869 Cursola
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

// 870 Sirfetch'd
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
}

// 871 Mr. Rime
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
}

// 872 Runerigus
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
}

// 873 Milcery → Alcremie
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
  evolve: function() { return { 1: { pkmn: pkmn.alcremie, item: item.sweet } } },
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
}

// 875 Falinks
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
}

// 876 Pincurchin
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
}

// 877 Snom → Frosmoth
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
}

// 879 Stonjourner
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
}

// 880 Eiscue
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
}

// 881 Indeedee
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
}

// 882 Morpeko
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
}

// 883 Cufant → Copperajah
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
}

// 885 Dracozolt
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

// 886 Arctozolt
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
}


// 887 Dracovish
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
}

// 888 Arctovish
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
}

// 889 Duraludon
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
}

// 890 Dreepy → Drakloak → Dragapult
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
}

// 893 Zacian
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
}

// 894 Zamazenta
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
}

// 895 Eternatus
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
}

// 896 Kubfu → Urshifu
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
  evolve: function() { return { 1: { pkmn: pkmn.urshifu, item: item.rareCandy } } },
}

pkmn.urshifu = {
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

// 898 Zarude
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

// 899 Regieleki
pkmn.regieleki = {
  type: ["electric"],
  bst: {
    hp: 80,
    atk: 100,
    def: 50,
    satk: 100,
    sdef: 50,
    spe: 200,
  },
}

// 900 Regidrago
pkmn.regidrago = {
  type: ["dragon"],
  bst: {
    hp: 200,
    atk: 100,
    def: 50,
    satk: 100,
    sdef: 50,
    spe: 80,
  },
}

// 901 Glastrier
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

// 902 Spectrier
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

// 903 Calyrex
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

// 904 Calyrex + Glastrier
pkmn.calyrexGlastrier = {
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

// 905 Calyrex + Spectrier
pkmn.calyrexSpectrier = {
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

// 906 Enamorus
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
}


































//Alolan Forms

// Alolan Rattata → Alolan Raticate
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
    }
}

// Alolan Raichu
pkmn.alolanRaichu = {
    type: ["electric", "psychic"],
    bst: {
        hp: 60,
        atk: 85,
        def: 50,
        satk: 95,
        sdef: 85,
        spe: 110,
    }
}

// Alolan Sandshrew → Alolan Sandslash
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
    }
}

// Alolan Vulpix → Alolan Ninetales
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
    }
}

// Alolan Diglett → Alolan Dugtrio
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

// Alolan Meowth → Alolan Persian
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
    }
}

// Alolan Geodude → Alolan Graveler → Alolan Golem
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
    }
}

// Alolan Grimer → Alolan Muk
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
    }
}

// Alolan Exeggutor
pkmn.alolanExeggutor = {
    type: ["grass", "dragon"],
    bst: {
        hp: 95,
        atk: 105,
        def: 85,
        satk: 125,
        sdef: 75,
        spe: 45,
    }
}

// Alolan Marowak
pkmn.alolanMarowak = {
    type: ["fire", "ghost"],
    bst: {
        hp: 60,
        atk: 80,
        def: 110,
        satk: 50,
        sdef: 80,
        spe: 45,
    }
}

// Alolan Slowpoke → Alolan Slowbro
pkmn.alolanSlowpoke = {
    type: ["water", "psychic"],
    bst: {
        hp: 90,
        atk: 65,
        def: 65,
        satk: 40,
        sdef: 40,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanSlowbro, level: evolutionLevel2 } } },
}

pkmn.alolanSlowbro = {
    type: ["water", "psychic"],
    bst: {
        hp: 95,
        atk: 75,
        def: 110,
        satk: 100,
        sdef: 80,
        spe: 30,
    }
}

// Alolan Slowking
pkmn.alolanSlowking = {
    type: ["water", "psychic"],
    bst: {
        hp: 95,
        atk: 75,
        def: 80,
        satk: 100,
        sdef: 110,
        spe: 30,
    }
}

//Hisuian Forms

// Hisuian Growlithe → Hisuian Arcanine
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
    }
}

// Hisuian Voltorb → Hisuian Electrode
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
    }
}

// Hisuian Qwilfish
pkmn.hisuianQwilfish = {
    type: ["dark", "poison"],
    bst: {
        hp: 65,
        atk: 95,
        def: 85,
        satk: 55,
        sdef: 55,
        spe: 85,
    }
}

// Hisuian Sneasel → Hisuian Sneasler
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
}

pkmn.hisuianSneasler = {
    type: ["fighting", "poison"],
    bst: {
        hp: 70,
        atk: 120,
        def: 65,
        satk: 45,
        sdef: 85,
        spe: 125,
    }
}

















pkmn.megaRayquaza = {
    type : ["dragon","flying"],
    bst: {
    hp: 105,
    atk : 180,
    def: 100,
    satk : 180,
    sdef: 100,
    spe: 115,
    }
}

const gmaxFactor = 1.5

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


