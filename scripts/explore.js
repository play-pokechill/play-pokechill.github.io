

saved.overrideBattleTimer = defaultPlayerMoveTimer
//let saved.overrideBattleTimer = defaultPlayerMoveTimer

let team = {}

team.slot1 = { } 
team.slot2 = { } 
team.slot3 = { } 
team.slot4 = { } 
team.slot5 = { } 
team.slot6 = { } 

team.slot1.pkmn = undefined
team.slot2.pkmn = undefined
team.slot3.pkmn = undefined
team.slot4.pkmn = undefined
team.slot5.pkmn = undefined
team.slot6.pkmn = undefined

team.slot1.buffs = {}
team.slot2.buffs = {}
team.slot3.buffs = {}
team.slot4.buffs = {}
team.slot5.buffs = {}
team.slot6.buffs = {}

team.slot1.item = undefined
team.slot2.item = undefined
team.slot3.item = undefined
team.slot4.item = undefined
team.slot5.item = undefined
team.slot6.item = undefined

/*function rng(number){
    return Math.random() < number
}*/

function rng(number){
    return Math.random() < number
}

function rngSeeded(number){
    return mulberry32(dailySeed)() < number;
    
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function voidAnimation(divName, animationName) {
    const element = document.getElementById(divName);
    if (!element) return;

    element.style.animation = 'none';
    void element.offsetWidth;
    element.style.animation = `${animationName}`; 
}

function format(input) {
    let str = String(input);
    if (move[input]?.rename) str = String(move[input].rename);
    if (pkmn[input]?.rename) str = String(pkmn[input].rename);
    if (ability[input]?.rename) str = String(ability[input].rename);

    str = str.replace(/hisuian/gi, 'hsn. ');
    str = str.replace(/alolan/gi, 'aln. ');

    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/g, c => c.toUpperCase())
        .replace(/Mega /gi, 'M. ');
}

/*function arrayPick(array, n = 1, seed) {
    if (!Array.isArray(array) || array.length === 0) return [];
    const rng = dailySeed+seed

    // use n to determine max pick
    const count = Math.min(n, array.length);

    const pool = [...array];
    const picks = [];

    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * pool.length);
        picks.push(pool[index]);
        pool.splice(index, 1); // prevents repetition
    }

    return n === 1 ? picks[0] : picks;
}*/

function arrayPick(array, n = 1, seed) {
  if (!Array.isArray(array) || array.length === 0) return [];

  const rng = seed === undefined
    ? Math.random
    : seed;

  const count = Math.min(n, array.length);
  const pool = [...array];
  const picks = [];

  for (let i = 0; i < count; i++) {
    const index = Math.floor(rng() * pool.length);
    picks.push(pool[index]);
    pool.splice(index, 1);
  }

  return n === 1 ? picks[0] : picks;
}


function mulberry32(a) {
  return function() {
    a |= 0;
    a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t ^= t + Math.imul(t ^ t >>> 7, 61 | t);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}





function givePkmn(poke, level) {
    const finalLevel = level ?? 1;

    poke.caught++;
    poke.movepool = poke.movepool || [];
    poke.moves = poke.moves || { slot1: null, slot2: null, slot3: null, slot4: null };
    // Asegurarse de que exista newMoves
    poke.newMoves = poke.newMoves || [];

    for (let lvl = 1; lvl <= finalLevel; lvl++) {
        if (lvl === 1 || lvl % 7 === 0) {
            const learntMove = learnPkmnMove(poke.id, lvl);
            if (!learntMove) continue;

            // Añadir al movepool solo si no está ya
            if (!poke.movepool.includes(learntMove)) {
                poke.movepool.push(learntMove);
            }

        }
    }

    // equips moves into slots
    const slots = ["slot1", "slot2", "slot3", "slot4"];
    const equippedMoves = Object.values(poke.moves).filter(m => m);
    const availableMoves = poke.movepool.filter(m => !equippedMoves.includes(m));

    let i = 0;
    for (const slot of slots) {
    if (!poke.moves[slot] && availableMoves[i]) {
        poke.moves[slot] = availableMoves[i];
        i++;
    }
    }

    poke.level = finalLevel;



    poke.ability = learnPkmnAbility(poke.id);

    if (rng(1/400)) poke.shiny = true



    updatePokedex();
}


//saved.currentArea = areas.activeVolcano.id;
saved.currentArea = undefined;
saved.currentAreaBuffer = undefined;
saved.currentPkmn;

let wildPkmnHp;
let wildPkmnHpMax;
let wildLevel = 0

let currentTrainerSlot = 1

let currentTrainingWave = 0

function setWildPkmn(){

    barProgressWild = 0
    exploreCombatWildTurn = 1  

    if (saved.currentArea == undefined) return

    document.getElementById(`team-indicator`).style.display = `none`
    document.getElementById(`spiraling-indicator`).style.display = `none`
    document.getElementById(`training-indicator`).style.display = `none`


    wildPkmnHp = 0

    let spawnedPkmn;
    let maxTrainerSlot = 1
    let hpMultiplier = 2
    let randomMoves = [];














    if (saved.currentArea == areas.training.id) {

    document.getElementById(`training-indicator`).style.display = `flex`
    document.getElementById(`training-indicator-counter`).textContent = `Remaining: ${currentTrainingWave}`

    returnPkmnDivision(pkmn[saved.trainingPokemon])

    let areaDivision = numericDivision(returnPkmnDivision(pkmn[saved.trainingPokemon]))

    if (areas.training.tier==1) areaDivision++
    if (areas.training.tier>=3 && rng(0.8)) areaDivision--

    

    hpMultiplier = 3;
    if (areas.training.tier==2) hpMultiplier = 8;
    if (areas.training.tier==3) hpMultiplier = 17;

    areaDivision = numericDivision(areaDivision, "inverse")

    //attempts a safe approach
    spawnedPkmn = randomDivisionPkmn(areaDivision, typeWeak(pkmn[saved.trainingPokemon].type[0],pkmn[saved.trainingPokemon].type[1],1), undefined, undefined, "training")
    if (pkmn[saved.trainingPokemon].type[1] != undefined && rng(0.5)) spawnedPkmn = randomDivisionPkmn(areaDivision, typeWeak(pkmn[saved.trainingPokemon].type[0],pkmn[saved.trainingPokemon].type[1],2), undefined, undefined, "training")



    //if it cant, safe of a higher division
    if (!pkmn[spawnedPkmn]) {
    areaDivision = numericDivision(areaDivision)
    areaDivision--
    areaDivision = numericDivision(areaDivision, "inverse")

    spawnedPkmn = randomDivisionPkmn(areaDivision, typeWeak(pkmn[saved.trainingPokemon].type[0],pkmn[saved.trainingPokemon].type[1],1), undefined, undefined, "training")
    if (pkmn[saved.trainingPokemon].type[1] != undefined && rng(0.5)) spawnedPkmn = randomDivisionPkmn(areaDivision, typeWeak(pkmn[saved.trainingPokemon].type[0],pkmn[saved.trainingPokemon].type[1],2), undefined, undefined, "training")
    }


    //if still cant, try to make it safe in one of the types
    if (!pkmn[spawnedPkmn]) {
    areaDivision = numericDivision(returnPkmnDivision(pkmn[saved.trainingPokemon]))
    areaDivision = numericDivision(areaDivision, "inverse")

    spawnedPkmn = randomDivisionPkmn(areaDivision, typeWeak(pkmn[saved.trainingPokemon].type[0],1), undefined, undefined, "training")
    if (pkmn[saved.trainingPokemon].type[1] != undefined && rng(0.5)) spawnedPkmn = randomDivisionPkmn(areaDivision, typeWeak(pkmn[saved.trainingPokemon].type[0],2), undefined, undefined, "training")
    }


    //if still cant, unsafe of same division, out of luck
    if (!pkmn[spawnedPkmn]) {
    areaDivision = numericDivision(returnPkmnDivision(pkmn[saved.trainingPokemon]))
    areaDivision = numericDivision(areaDivision, "inverse")

    spawnedPkmn = randomDivisionPkmn(areaDivision, typeWeak(pkmn[saved.trainingPokemon].type[0],pkmn[saved.trainingPokemon].type[1],1))
    if (pkmn[saved.trainingPokemon].type[1] != undefined && rng(0.5)) spawnedPkmn = randomDivisionPkmn(areaDivision, typeWeak(pkmn[saved.trainingPokemon].type[0],pkmn[saved.trainingPokemon].type[1],2))
    }


    wildLevel = pkmn[saved.trainingPokemon].level
    if (areas.training.tier==2) wildLevel = pkmn[saved.trainingPokemon].level+10
    if (areas.training.tier==3) wildLevel = pkmn[saved.trainingPokemon].level+20



    for (let i = 0; i < 4; i++) {
    if (100 > i * 10) {
        const moveKey = learnPkmnMoveSeeded(
            spawnedPkmn,
            100,
            "wild",
            currentTrainingWave + i,
            randomMoves
        );

        if (moveKey != null)
            randomMoves.push(moveKey);
    }
}






    if (currentTrainingWave<=0) {  training[areas.training.currentTraining].effect(); leaveCombat(); setTrainingMenu(); return }




    } else if (saved.currentArea == areas.frontierSpiralingTower.id) {
    document.getElementById(`spiraling-indicator`).style.display = `flex`
    document.getElementById(`spiraling-highest-floor`).textContent = `Highest Floor: ${saved.maxSpiralFloor}`
    document.getElementById(`spiraling-current-floor`).textContent = `Floor: ${saved.currentSpiralFloor}`
    wildLevel = 98 + (2*saved.currentSpiralFloor)

    let divisionToUse = "C"
    if (rotationFrontierCurrent == 2) divisionToUse = "B"
    if (rotationFrontierCurrent == 3) divisionToUse = "A"
    if (rotationFrontierCurrent == 4) divisionToUse = "S"
    
    spawnedPkmn = randomDivisionPkmn(divisionToUse, saved.currentSpiralingType, undefined, saved.currentSpiralFloor)

for (let i = 0; i < 4; i++) {
    if (wildLevel > i * 10) {
        const moveKey = learnPkmnMoveSeeded(
            spawnedPkmn,
            100,
            "wild",
            saved.currentSpiralFloor + i,
            randomMoves
        );

        if (moveKey != null)
            randomMoves.push(moveKey);
    }
}

    hpMultiplier = 5 + Math.floor(saved.currentSpiralFloor / 3);

    }
    else if (areas[saved.currentArea].trainer) {
        document.getElementById(`team-indicator-slot-1`).style.display = `none`;
        document.getElementById(`team-indicator-slot-2`).style.display = `none`;
        document.getElementById(`team-indicator-slot-3`).style.display = `none`;
        document.getElementById(`team-indicator-slot-4`).style.display = `none`;
        document.getElementById(`team-indicator-slot-5`).style.display = `none`;
        document.getElementById(`team-indicator-slot-6`).style.display = `none`;

        document.getElementById(`team-indicator-slot-1`).style.filter = `brightness(1)`
        document.getElementById(`team-indicator-slot-2`).style.filter = `brightness(1)`
        document.getElementById(`team-indicator-slot-3`).style.filter = `brightness(1)`
        document.getElementById(`team-indicator-slot-4`).style.filter = `brightness(1)`
        document.getElementById(`team-indicator-slot-5`).style.filter = `brightness(1)`
        document.getElementById(`team-indicator-slot-6`).style.filter = `brightness(1)`

        document.getElementById(`team-indicator`).style.display = `flex`
        document.getElementById(`team-indicator-slot-1`).style.display = `flex`
        if (areas[saved.currentArea].team.slot2) {document.getElementById(`team-indicator-slot-2`).style.display = `flex`; maxTrainerSlot = 2}
        if (areas[saved.currentArea].team.slot3) {document.getElementById(`team-indicator-slot-3`).style.display = `flex`; maxTrainerSlot = 3}
        if (areas[saved.currentArea].team.slot4) {document.getElementById(`team-indicator-slot-4`).style.display = `flex`; maxTrainerSlot = 4}
        if (areas[saved.currentArea].team.slot5) {document.getElementById(`team-indicator-slot-5`).style.display = `flex`; maxTrainerSlot = 5}
        if (areas[saved.currentArea].team.slot6) {document.getElementById(`team-indicator-slot-6`).style.display = `flex`; maxTrainerSlot = 6}

        if (currentTrainerSlot>1) document.getElementById(`team-indicator-slot-1`).style.filter = `brightness(0.5)`
        if (currentTrainerSlot>2) document.getElementById(`team-indicator-slot-2`).style.filter = `brightness(0.5)`
        if (currentTrainerSlot>3) document.getElementById(`team-indicator-slot-3`).style.filter = `brightness(0.5)`
        if (currentTrainerSlot>4) document.getElementById(`team-indicator-slot-4`).style.filter = `brightness(0.5)`
        if (currentTrainerSlot>5) document.getElementById(`team-indicator-slot-5`).style.filter = `brightness(0.5)`

        if (currentTrainerSlot>maxTrainerSlot) { //trainer won


            
            if (areas[saved.currentArea].reward){
            const rewards = areas[saved.currentArea].reward;
            for (const i of rewards) {
            if (item[i.id]!=undefined) {
                let itemId = i.id
                if (item[i.id].type=="held" && item[i.id].got>= 20) itemId = item.bottleCap.id
                item[itemId].got++
                item[itemId].newItem++
            } 
            if (pkmn[i.id]!=undefined) {
                //pkmn[i.id].caught++
                pkmn[i.id].newPokemon = true
            } 
            }
            }

            if (areas[saved.currentArea].encounterEffect) areas[saved.currentArea].encounterEffect()

            if (areas[saved.currentArea].encounter && areas[saved.currentArea].unlockRequirement && !areas[saved.currentArea].unlockRequirement() ) saved.autoRefight = false

            areas[saved.currentArea].defeated = true;
            leaveCombat(); 
            wildPkmnHp = wildPkmnHpMax
            return
        }


        spawnedPkmn = areas[saved.currentArea].team.slot1.id; randomMoves = areas[saved.currentArea].team.slot1Moves
        if (areas[saved.currentArea].team.slot2 && currentTrainerSlot == 2) {spawnedPkmn = areas[saved.currentArea].team.slot2.id; randomMoves = areas[saved.currentArea].team.slot2Moves}
        if (areas[saved.currentArea].team.slot3 && currentTrainerSlot == 3) {spawnedPkmn = areas[saved.currentArea].team.slot3.id; randomMoves = areas[saved.currentArea].team.slot3Moves}
        if (areas[saved.currentArea].team.slot4 && currentTrainerSlot == 4) {spawnedPkmn = areas[saved.currentArea].team.slot4.id; randomMoves = areas[saved.currentArea].team.slot4Moves}
        if (areas[saved.currentArea].team.slot5 && currentTrainerSlot == 5) {spawnedPkmn = areas[saved.currentArea].team.slot5.id; randomMoves = areas[saved.currentArea].team.slot5Moves}
        if (areas[saved.currentArea].team.slot6 && currentTrainerSlot == 6) {spawnedPkmn = areas[saved.currentArea].team.slot6.id; randomMoves = areas[saved.currentArea].team.slot6Moves}

        wildLevel = areas[saved.currentArea].level
        hpMultiplier = 4 

        


    } 
    else {
     

    if (areas[saved.currentArea].level !== undefined) wildLevel = random(areas[saved.currentArea].level-9,areas[saved.currentArea].level)
    
    if (areas[saved.currentArea].spawns.common) spawnedPkmn = arrayPick(areas[saved.currentArea].spawns.common).id 
    if (rng(0.08) && areas[saved.currentArea].spawns.uncommon) spawnedPkmn = arrayPick(areas[saved.currentArea].spawns.uncommon).id
    if (rng(0.01) && areas[saved.currentArea].spawns.rare) spawnedPkmn = arrayPick(areas[saved.currentArea].spawns.rare).id

    if (areas[saved.currentArea].spawns.common == undefined) spawnedPkmn = arrayPick(areas[saved.currentArea].spawns.rare).id


    // picks amount of moves based on level
const thresholds = [0, 10, 20, 30];
for (let t of thresholds) {
    if (wildLevel > t) {
        const moveId = learnPkmnMove(spawnedPkmn, wildLevel, "wild");
        if (moveId && !randomMoves.includes(moveId)) {
            randomMoves.push(moveId);
        } else {
            randomMoves.push(undefined);
        }
    }
}

    } 





    saved.currentPkmn = spawnedPkmn

    if (areas[saved.currentArea].difficulty!=undefined) hpMultiplier = areas[saved.currentArea].difficulty



    //abilities
    if (testAbility(`active`,  ability.intimidate.id ) ) {wildBuffs.atkdown1 = 3; updateWildBuffs() }
    if (testAbility(`active`,  ability.dauntingLook.id ) ) {wildBuffs.satkdown1 = 3; updateWildBuffs() }




    
    document.getElementById("explore-wild-name").innerHTML = format(spawnedPkmn) + ` <span class="explore-pkmn-level" > lvl ${wildLevel} </span>`
    document.getElementById("explore-wild-sprite").src = `img/pkmn/sprite/${spawnedPkmn}.png`

    if (pkmn[spawnedPkmn].float) document.getElementById("explore-wild-sprite").classList.add(`floating-pkmn`)
    if (!pkmn[spawnedPkmn].float && document.getElementById("explore-wild-sprite").classList.contains(`floating-pkmn`)) document.getElementById("explore-wild-sprite").classList.remove(`floating-pkmn`)


    //wildPkmnHp = 100 + (
    //(pkmn[spawnedPkmn].bst.hp * 25) * 0.2 +      
    //(wildLevel * 2)        
    //) * 10;


    let hpStars = pkmn[spawnedPkmn].bst.hp
    if (saved.currentArea == areas.training.id) hpStars = returnDivisionStars(pkmn[spawnedPkmn])
    if (saved.currentArea == areas.training.id && pkmn[saved.trainingPokemon].type.includes("normal")) hpStars /= 1.5
    if (saved.currentArea == areas.training.id && pkmn[saved.trainingPokemon].type.includes("dragon")) hpStars /= 1.5


    wildPkmnHp =
    (100 + (hpStars * 30)
    * ( 1+(wildLevel * 0.2) )       
    ) * hpMultiplier;

    

    wildPkmnHpMax = wildPkmnHp

    if (pkmn[saved.currentPkmn].temporalType!=undefined) pkmn[saved.currentPkmn].temporalType = undefined 
    document.getElementById("explore-wild-sprite-data").dataset.pkmn = spawnedPkmn

    document.getElementById("explore-header-moves-wild").innerHTML = ""





// filtra undefined y los mueve al final
randomMoves = randomMoves.filter(m => m !== undefined).concat(randomMoves.filter(m => m === undefined));

// rellena hasta 4 movimientos
while (randomMoves.length < 4) randomMoves.push(undefined);
    //

    for (let index = 0; index < randomMoves.length; index++) {
    const i = randomMoves[index];

    if (i === undefined) {
        const divMove = document.createElement("div");
        divMove.className = "pkmn-movebox";
        divMove.style.pointerEvents = "none";
        document.getElementById("explore-header-moves-wild").appendChild(divMove);
        continue;
    }

    let signatureIcon = ""
    if (move[i].moveset == undefined) signatureIcon = `<svg style="color:${returnTypeColor(move[i].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>`
    if (move[i].restricted) signatureIcon += `<svg style="color:${returnTypeColor(move[i].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity="0.5"/><path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"/></svg>`

    const divMove = document.createElement("div");
    divMove.className = "pkmn-movebox";
    divMove.style.borderColor = returnTypeColor(move[i].type);
    divMove.id = `pkmn-movebox-wild-${index+1}`;
    divMove.innerHTML =
        `<div id="pkmn-movebox-wild-${index+1}-bar"
              class="pkmn-movebox-progress"
              style="background: ${returnTypeColor(move[i].type)}"></div>
         <span>${format(i)}${signatureIcon}</span>
         <img style="background: ${returnTypeColor(move[i].type)}"
              src="img/icons/${move[i].type}.svg">`;

     divMove.dataset.move = i;

    document.getElementById("explore-header-moves-wild").appendChild(divMove);
    }


    



    voidAnimation(`explore-wild-sprite`,`wildPokemonSpawn 0.5s 1`)
    updateWildPkmn()


}


function updateItemsGot(){


    document.getElementById("explore-drops").innerHTML = ""

    for (const i in item) {


        if (item[i]?.newItem == 0) continue


        const divItem = document.createElement("div");
        divItem.className = "explore-item";
        divItem.id = `explore-item-${i}`;

        divItem.dataset.item = i

        if (item[i].type !== "tm") divItem.innerHTML = `<img src="img/items/${i}.png"> <span>x${item[i].newItem}</span>`;
        if (item[i].type == "tm") divItem.innerHTML = `<img src="img/items/tm${format(move[item[i].move].type)}.png"> <span>x${item[i].newItem}</span>`;


        document.getElementById("explore-drops").appendChild(divItem);


    }







}

saved.hasPayDayBeenUsed = false
saved.hasTeatimeBeenUsed = false


function dropItem(){

    if (saved.currentArea == undefined) return

    let drop;
    drop = arrayPick(areas[saved.currentArea].drops?.common).id


    let rareDropChance = 0.03

     for (const slot in team) {

        if (team[slot].pkmn === undefined ) continue
        if (testAbility(slot, ability.pickPocket.id) ) rareDropChance += 0.01
        if (team[slot].item == item.luckIncense.id) rareDropChance += item.luckIncense.power()/100
     }

     if (saved.hasPayDayBeenUsed == true){
        rareDropChance += 0.01
     }

    if (areas[saved.currentArea].drops?.uncommon && rng(0.15)) drop = arrayPick(areas[saved.currentArea].drops?.uncommon).id
    if (areas[saved.currentArea].drops?.rare && rng(rareDropChance)) drop = arrayPick(areas[saved.currentArea].drops?.rare).id

    if (item[drop].type=="held" && item[drop].got>= 20) drop = item.bottleCap.id
    if (item[drop].type!=="held" && item[drop].evo && item[drop].got>= 10) drop = item.bottleCap.id



    if (drop == undefined) return
    if (drop == "nothing") return

    item[drop].newItem ++
    item[drop].got ++

    updateItemsGot()



}


function transition(){
    document.getElementById(`white-transition`).style.display = "flex"
    voidAnimation(`white-transition`, `transition 1s 1 linear`)
    setTimeout(() => {
    document.getElementById(`white-transition`).style.display = "none"
    }, 900);
}

saved.lastAreaJoined = undefined
function leaveCombat(){


    document.getElementById("area-rejoin").style.display = "flex"
    if ((areas[saved.currentArea].type == "vs" || areas[saved.currentArea].type == "frontier") && areas[saved.currentArea].defeated) document.getElementById("area-rejoin").style.display = "none"
    if (areas[saved.currentArea].id == areas.training.id && (training[areas.training.currentTraining].condition && training[areas.training.currentTraining].condition()!=true) ) document.getElementById("area-rejoin").style.display = "none"
    if ( areas[saved.currentArea].unlockRequirement && !areas[saved.currentArea].unlockRequirement() ) document.getElementById("area-rejoin").style.display = "none"

    if (saved.tutorial && saved.tutorialStep === "battle") {saved.tutorialStep = "battleEnd"; openTutorial()}

    saved.lastAreaJoined = saved.currentArea
    saved.currentAreaBuffer = undefined
    currentTrainerSlot = 1
    if (storedAfkSeconds<30) transition()
    exploreCombatWildTurn = 0


    for (const buff in wildBuffs){ if ( wildBuffs[buff]>0) wildBuffs[buff] = 0 }
    saved.weatherCooldown = 0
    saved.weatherTimer = 0
    
    for (const i in team[exploreActiveMember].buffs){
    if (team[exploreActiveMember].buffs[i]>0) team[exploreActiveMember].buffs[i] = 0
    } 
    
    updateTeamBuffs()
    updateWildBuffs()







    if (document.getElementById(`menu-button`).classList.contains(`menu-button-open`)) openMenu()

    document.getElementById("area-end").style.display = "flex"
    document.getElementById("explore-drops").innerHTML = ""
    document.getElementById(`content-explore`).style.display = "none"
    voidAnimation("area-end","bg-horizontal 600s infinite")

    if (saved.currentArea == areas.training.id) {
        document.getElementById("training-menu").style.display = "flex"
        setTrainingMenu()


    } else if (areas[saved.currentArea].type == "vs" || areas[saved.currentArea].type == "frontier") {
        document.getElementById("vs-menu").style.display = "flex"
        if (areas[saved.currentArea].type == "frontier") updateFrontier()//to update highest floor reached
    } else  document.getElementById("explore-menu").style.display = "flex"

    if (areas[saved.currentArea].trainer) {updateVS()}



    let noItems = true
    let noPkmn = true

    if (storedAfkSeconds==0) document.getElementById("area-end-item-list").innerHTML = ""
    if (storedAfkSeconds==0) document.getElementById("area-end-pkmn-list").innerHTML = "";
    document.getElementById("area-end-item-title").innerHTML = "New Items!"

    //spiraling tower rewards
    if (saved.currentSpiralFloor!==1 && (saved.currentSpiralFloor == saved.maxSpiralFloor)) {
    const totalRewardsEarned = Math.floor(saved.maxSpiralFloor / 1)
    const rewardsToGive = totalRewardsEarned - saved.spiralRewardsClaimed

    if (saved.currentSpiralFloor>29) {
        for (const slot in team) {
            if (team[slot].pkmn == undefined) continue
            giveRibbon(team[slot].pkmn, "tower1") 
        }

    } 


    for (let i = 0; i < rewardsToGive; i++) {
        const rewards = []

        for (const i in spiralingRewards) {
            if (spiralingRewards[i].rarity === 2 && rng(0.3)) continue
            if (spiralingRewards[i].rarity === 3 && rng(0.6)) continue
            if (spiralingRewards[i].rarity === 4 && rng(0.8)) continue
            rewards.push(spiralingRewards[i].item)
        }

        const rewardId = arrayPick(rewards)
        item[rewardId].newItem++
        item[rewardId].got++
        
    }

    saved.spiralRewardsClaimed += rewardsToGive
    }






    //new items
    for (const i in item) {
        if (i === item.mysteryEgg.id) continue
        if (item[i].newItem == 0) continue

        const divItem = document.createElement("div");
        divItem.className = "area-end-item";
        divItem.dataset.item = i
        if (item[i].type !== "tm") divItem.innerHTML = `<img src="img/items/${i}.png"><span>+${item[i].newItem}</span>`;
        if (item[i].type == "tm") divItem.innerHTML = `<img src="img/items/tm${format(move[item[i].move].type)}.png"><span>+${item[i].newItem}</span>`;
        document.getElementById("area-end-item-list").appendChild(divItem);

        item[i].newItem = 0;
        noItems = false;
    }

    //new pokemon


    let rarePkmnChance = 0.01
    let shinyPkmnChance = 1/400
    let shinyPkmnChanceEncounter = 1/120
    for (const slot in team) {

        if (team[slot].pkmn === undefined ) continue
        if (team[slot].item == item.pureIncense.id) rarePkmnChance += item.pureIncense.power()/100
        if (team[slot].item == item.shinyCharm.id) shinyPkmnChance *= (item.shinyCharm.power() /100) +1
        if (team[slot].item == item.shinyCharm.id) shinyPkmnChanceEncounter *= (item.shinyCharm.power() /100) +1
        
    }

    if (saved.hasTeatimeBeenUsed == true){
        rarePkmnChance += 0.01
     }


    if (item.mysteryEgg.got>0 && areas[saved.currentArea].spawns!=undefined) {//wild


    for (let i = 0; i < item.mysteryEgg.got; i++) {
    let hatchedPkmn ;


    if (areas[saved.currentArea].spawns.common) hatchedPkmn = arrayPick(areas[saved.currentArea].spawns.common).id
    if (areas[saved.currentArea].spawns.uncommon && rng(0.08)) hatchedPkmn = arrayPick(areas[saved.currentArea].spawns.uncommon).id
    if (areas[saved.currentArea].spawns.rare && rng(rarePkmnChance)) hatchedPkmn = arrayPick(areas[saved.currentArea].spawns.rare).id

    if (areas[saved.currentArea].spawns.common == undefined) hatchedPkmn = arrayPick(areas[saved.currentArea].spawns.rare).id
    
    
    let divTag = ""

    for (const iv in pkmn[hatchedPkmn].ivs){
        const ivId = pkmn[hatchedPkmn].ivs[iv]
        //let maxIv = 3
        let newIv = 0

        if (rng(0.10)) newIv++
        if (rng(0.10)) newIv++
        if (rng(0.10)) newIv++
        if (rng(0.10)) newIv++           
        if (rng(0.10)) newIv++
        if (rng(0.10)) newIv++           
        if (rng(0.10)) newIv++           
        if (newIv>6) newIv = 6           

        if (newIv>ivId) {
            pkmn[hatchedPkmn].ivs[iv] = newIv
             divTag = `<span>Iv's Up!</span>`
        }
    }

    if (pkmn[hatchedPkmn].caught === 0) { //first time got
        const newMove = learnPkmnMove(hatchedPkmn,1)
        pkmn[hatchedPkmn].movepool.push(newMove)
        pkmn[hatchedPkmn].moves.slot1 = newMove 
        pkmn[hatchedPkmn].ability = learnPkmnAbility(pkmn[hatchedPkmn].id)    
        divTag = `<span>New!</span>`
    } 


    if (rng(shinyPkmnChance) && pkmn[hatchedPkmn].shiny!=true){ //shiny
        pkmn[hatchedPkmn].shiny = true
        divTag = `<span>✦Shiny✦!</span>`
    }

    

    const divPkmn = document.createElement("div");
    divPkmn.dataset.pkmnEditor = hatchedPkmn

    pkmn[hatchedPkmn].caught++

    if (saved.hideGotPkmn == "true" && divTag=="") continue

    divPkmn.innerHTML = `<img class="sprite-trim" src="img/pkmn/sprite/${hatchedPkmn}.png">`+divTag;
    if (divTag == `<span>✦Shiny✦!</span>`) divPkmn.innerHTML = `<img class="sprite-trim" src="img/pkmn/shiny/${hatchedPkmn}.png">`+divTag;
    document.getElementById("area-end-pkmn-list").appendChild(divPkmn);

    noPkmn = false
    }

    }


    for (const i in pkmn) { // if new pokemon via trainer reward
    if (pkmn[i].newPokemon !== true) continue


    let divTag = ""

    for (const iv in pkmn[i].ivs){
        const ivId = pkmn[i].ivs[iv]
        //let maxIv = 3
        let newIv = 0

        if (rng(0.20)) newIv++
        if (rng(0.20)) newIv++
        if (rng(0.20)) newIv++
        if (rng(0.20)) newIv++           
        if (rng(0.20)) newIv++
        if (rng(0.20)) newIv++           
        if (rng(0.20)) newIv++           
        if (newIv>6) newIv = 6           

        if (newIv>ivId) {
            pkmn[i].ivs[iv] = newIv
             divTag = `<span>Iv's Up!</span>`
        }
    }

    if (pkmn[i].caught === 0) { //first time got
        const newMove = learnPkmnMove(i,1)
        pkmn[i].movepool.push(newMove)
        pkmn[i].moves.slot1 = newMove 
        pkmn[i].ability = learnPkmnAbility(pkmn[i].id)    
        divTag = `<span>New!</span>`
    } 


    if (rng(shinyPkmnChanceEncounter)){ //shiny
        pkmn[i].shiny = true
        divTag = `<span>✦Shiny✦!</span>`
    }

    

    const divPkmn = document.createElement("div");
    divPkmn.dataset.pkmnEditor = i


    divPkmn.innerHTML = `<img class="sprite-trim" src="img/pkmn/sprite/${i}.png">`+divTag;
    if (divTag == `<span>✦Shiny✦!</span>`) divPkmn.innerHTML = `<img class="sprite-trim" src="img/pkmn/shiny/${i}.png">`+divTag;
    document.getElementById("area-end-pkmn-list").appendChild(divPkmn);

    pkmn[i].caught++
    noPkmn = false
    pkmn[i].newPokemon = undefined

    }




    document.getElementById("area-end-moves-title").style.display = "none"
    document.getElementById("area-end-moves-title").innerHTML = ""
    for (i in pkmn) {//new moves notification
        if (pkmn[i].newMoves.length == 0) continue

        const div = document.createElement("span");
        div.innerHTML = `${format(i)} has learnt ${joinWithAnd(pkmn[i].newMoves)}!`

        document.getElementById("area-end-moves-title").appendChild(div);
        document.getElementById("area-end-moves-title").style.display = "flex"
        pkmn[i].newMoves = [];
    }

    for (i in pkmn) {//new pokemon notification
        if (pkmn[i].newEvolution !== true) continue


        const div = document.createElement("span");
        div.innerHTML = `${format(i)} has been unlocked!`

        document.getElementById("area-end-moves-title").appendChild(div);
        document.getElementById("area-end-moves-title").style.display = "flex"
        pkmn[i].newEvolution = undefined;
    }


    document.getElementById("area-end-pkmn-list").style.display = "flex"
    document.getElementById("area-end-item-list").style.display = "flex"
    document.getElementById("area-end-pkmn-title").style.display = "flex"
    document.getElementById("area-end-item-title").style.display = "flex"

    if (noPkmn) document.getElementById("area-end-pkmn-title").style.display = "none"
    if (noPkmn) document.getElementById("area-end-pkmn-list").style.display = "none"
    if (noItems) document.getElementById("area-end-item-title").style.display = "none"
    if (noItems) document.getElementById("area-end-item-list").style.display = "none"
    if (noItems && noPkmn) {
        document.getElementById("area-end-item-title").innerHTML = "No new items or Pokemon :("
        if (saved.currentArea == areas.training.id) document.getElementById("area-end-item-title").innerHTML = `<div style="display:flex; flex-direction:column; width: 100%; height:auto; justify-content:center; align-items:center; flex-shrink:0; text-align:center">Training Failed :(<br><br>Try to improve your Pokemon further:<br> <div class="genetics-overview-tags" > <div style="filter:hue-rotate(0deg)">Get better type-matching moves</div> <div style="filter:hue-rotate(0deg)">Get better moves that correctly match your stat distribution (Physical/Special)</div> <div style="filter:hue-rotate(0deg)">Use Stat Up moves that match your moves</div> <div style="filter:hue-rotate(0deg)">Unlock a Hidden Ability</div> <div style="filter:hue-rotate(0deg)">Get a better Ability</div> <div style="filter:hue-rotate(0deg)">Modify stats with Genetics</div> </div></div>`
        document.getElementById("area-end-item-title").style.display = "flex"
    }

    //if (areas[saved.currentArea]?.trainer && areas[saved.currentArea]?.defeated) document.getElementById("area-end-item-title").innerHTML = "Rewards have been automatically added"



    document.getElementById("area-refight").style.display = "none"
    if ( item.autoRefightTicket.got>0 && areas[saved.currentArea].type!="vs" && areas[saved.currentArea].type!="frontier" && areas[saved.currentArea].id != "training" && areas[saved.currentArea].encounter != true ) {
        document.getElementById("area-refight").style.display = "flex"
        document.getElementById("area-refight").innerHTML = `
        <svg style="margin-right:0.3rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M10.797 2.482a.61.61 0 0 1 0 .866L9.44 4.705h.924c1.393 0 2.305.572 2.845 1.343c.515.736.651 1.593.651 2.153c0 .561-.136 1.418-.651 2.154c-.54.77-1.452 1.342-2.845 1.342c-.948 0-1.695-.48-2.295-1.08c-.584-.584-1.093-1.347-1.56-2.046l-.019-.03c-.49-.734-.936-1.4-1.425-1.889c-.481-.48-.935-.721-1.429-.721c-1.01 0-1.54.39-1.84.82c-.327.466-.43 1.05-.43 1.45s.103.985.43 1.451c.3.43.83.82 1.84.82c.512 0 .982-.259 1.482-.775a.613.613 0 0 1 .88.852c-.612.632-1.379 1.148-2.362 1.148c-1.393 0-2.305-.571-2.845-1.342C.276 9.619.14 8.762.14 8.2s.137-1.418.651-2.153c.54-.77 1.452-1.343 2.845-1.343c.948 0 1.695.48 2.295 1.08c.584.585 1.093 1.348 1.56 2.047l.019.03c.49.734.936 1.4 1.425 1.889c.481.48.935.721 1.429.721c1.01 0 1.54-.39 1.84-.82c.327-.466.43-1.05.43-1.45s-.103-.986-.43-1.451c-.3-.43-.83-.82-1.84-.82H7.961a.613.613 0 0 1-.433-1.046L9.93 2.482a.61.61 0 0 1 .866 0" clip-rule="evenodd"/></svg>
        Auto-Refight <span> (Requires an <img src="img/items/autoRefightTicket.png"> Auto-Refight Ticket)</span>
        `
        
    }
    if ( areas[saved.currentArea].encounter && areas[saved.currentArea].unlockRequirement && areas[saved.currentArea].unlockRequirement()) {
        document.getElementById("area-refight").style.display = "flex"
        document.getElementById("area-refight").innerHTML = `
        <svg style="margin-right:0.3rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M10.797 2.482a.61.61 0 0 1 0 .866L9.44 4.705h.924c1.393 0 2.305.572 2.845 1.343c.515.736.651 1.593.651 2.153c0 .561-.136 1.418-.651 2.154c-.54.77-1.452 1.342-2.845 1.342c-.948 0-1.695-.48-2.295-1.08c-.584-.584-1.093-1.347-1.56-2.046l-.019-.03c-.49-.734-.936-1.4-1.425-1.889c-.481-.48-.935-.721-1.429-.721c-1.01 0-1.54.39-1.84.82c-.327.466-.43 1.05-.43 1.45s.103.985.43 1.451c.3.43.83.82 1.84.82c.512 0 .982-.259 1.482-.775a.613.613 0 0 1 .88.852c-.612.632-1.379 1.148-2.362 1.148c-1.393 0-2.305-.571-2.845-1.342C.276 9.619.14 8.762.14 8.2s.137-1.418.651-2.153c.54-.77 1.452-1.343 2.845-1.343c.948 0 1.695.48 2.295 1.08c.584.585 1.093 1.348 1.56 2.047l.019.03c.49.734.936 1.4 1.425 1.889c.481.48.935.721 1.429.721c1.01 0 1.54-.39 1.84-.82c.327-.466.43-1.05.43-1.45s-.103-.986-.43-1.451c-.3-.43-.83-.82-1.84-.82H7.961a.613.613 0 0 1-.433-1.046L9.93 2.482a.61.61 0 0 1 .866 0" clip-rule="evenodd"/></svg>
        Auto-Refight <span> (Wont use <img src="img/items/autoRefightTicket.png"> Auto-Refight Tickets)</span>
        `
    } 



    saved.hasPayDayBeenUsed = false
    saved.hasTeatimeBeenUsed = false



    item.mysteryEgg.got = 0
    item.mysteryEgg.newItem = 0


    if (areas[saved.currentArea].encounter && areas[saved.currentArea].unlockRequirement && !areas[saved.currentArea].unlockRequirement() ) {
        afkSeconds = 0
        saved.autoRefight = false
    } 

    if (saved.autoRefight == true) storedAfkSeconds = afkSeconds
    afkSeconds = 0

    saved.currentArea = undefined

    setWildAreas()


        
        
    if (saved.autoRefight == true) {
        rejoinArea()
    }





    saveGame()




}

storedAfkSeconds = 0 //this is used above

saved.autoRefight = false

function autoRefight(){


    saved.autoRefight = true;
    rejoinArea()

}


function rejoinArea(){


    if (saved.currentArea == saved.lastAreaJoined) return

    
    saved.currentArea = saved.lastAreaJoined





    if (storedAfkSeconds>30){ //if the player is auto-refighting


        afkSeconds = storedAfkSeconds


        if (saved.tutorial && saved.tutorialStep === "battleEnd") {saved.tutorialStep = "none"; openTutorial()}

        saved.currentArea = saved.lastAreaJoined

        document.getElementById(`explore-menu`).style.display = `none`
        document.getElementById(`vs-menu`).style.display = `none`
        document.getElementById(`training-menu`).style.display = `none`

        document.getElementById(`area-end`).style.display = `none`;
        document.getElementById("content-explore").style.display = "flex"
        document.getElementById("menu-button-parent").style.display = "flex"
        initialiseArea()
        saveGame()


        return

    }



    voidAnimation(`explore-transition`, `exploreTransition 1s 1`)
    document.getElementById(`explore-transition`).style.display = `flex`

    setTimeout(() => {

                afkSeconds = storedAfkSeconds

            if (saved.tutorial && saved.tutorialStep === "battleEnd") {saved.tutorialStep = "none"; openTutorial()}

            saved.currentArea = saved.lastAreaJoined

                    document.getElementById(`explore-menu`).style.display = `none`
                    document.getElementById(`vs-menu`).style.display = `none`
                    document.getElementById(`training-menu`).style.display = `none`

          document.getElementById(`area-end`).style.display = `none`;
          document.getElementById("content-explore").style.display = "flex"
        document.getElementById("menu-button-parent").style.display = "flex"
          initialiseArea()
              saveGame()

    }, 500);




}




function updateWildPkmn(){

    if (saved.currentArea === undefined) return

    let respawnTimer = 1000
    if (saved.overrideBattleTimer != defaultPlayerMoveTimer) respawnTimer = 1

    if (afkSeconds>0) respawnTimer = 0 //woomp woomp











    const percent = (wildPkmnHp / wildPkmnHpMax) * 100;









const hpBars = [
  { el: document.getElementById("exploe-wild-hp"), color: null }, // dynamic
  { el: document.getElementById("exploe-wild-hp-2"), color: "rgb(134, 141, 238)" },
  { el: document.getElementById("exploe-wild-hp-3"), color: "rgb(238, 236, 134)" },
  { el: document.getElementById("exploe-wild-hp-4"), color: "rgb(238, 134, 134)" },
];

let activeBars = 1;

if (areas[saved.currentArea].encounter) {
  if (areas[saved.currentArea].difficulty == tier2difficulty) activeBars = 2;
  if (areas[saved.currentArea].difficulty == tier3difficulty) activeBars = 3;
  if (areas[saved.currentArea].difficulty == tier4difficulty) activeBars = 4;
}

const segment = 100 / activeBars;

// loop from top bar → base bar
for (let i = activeBars - 1; i >= 0; i--) {
  const bar = hpBars[i].el;

  bar.style.display = "flex";

  const start = segment * i;
  const end = start + segment;

  if (percent > start) {
    bar.style.width =
      percent >= end ? "100%" : ((percent - start) / segment) * 100 + "%";
  } else {
    bar.style.width = "0%";
  }

  // fixed colors for hp2, hp3...
  if (hpBars[i].color) {
    bar.style.background = hpBars[i].color;
  }
}

// hide unused bars
for (let i = activeBars; i < hpBars.length; i++) {
  hpBars[i].el.style.display = "none";
}













    if (percent <= 0) { //on wild death enemy kill


    if (afkSeconds>0) afkSeconds-- //account for the lack of timer respawn




    if (saved.currentArea == areas.training.id) {
    currentTrainingWave--
    document.getElementById(`training-indicator-counter`).textContent = `Remaining: ${currentTrainingWave}`
    }


    if (saved.currentArea == areas.frontierSpiralingTower.id) {
    saved.currentSpiralFloor++
    saved.maxSpiralFloor = Math.max(saved.maxSpiralFloor,saved.currentSpiralFloor)
    document.getElementById(`spiraling-current-floor`).textContent = `Floor: ${saved.currentSpiralFloor}`
    document.getElementById(`spiraling-highest-floor`).textContent = `Highest Floor: ${saved.maxSpiralFloor}`
    }

    //abilities
    if (testAbility(`active`,  ability.moxie.id)) team[exploreActiveMember].buffs.atkup1 = 3
    if (testAbility(`active`,  ability.strategist.id)) team[exploreActiveMember].buffs.satkup1 = 3

    if (testAbility(`active`,  ability.beastBoost.id)){
        if (returnHighestStat(team[exploreActiveMember].pkmn)=="spe") team[exploreActiveMember].buffs.speup1 = 3
        if (returnHighestStat(team[exploreActiveMember].pkmn)=="atk") team[exploreActiveMember].buffs.atkup1 = 3
        if (returnHighestStat(team[exploreActiveMember].pkmn)=="def") team[exploreActiveMember].buffs.defup1 = 3
        if (returnHighestStat(team[exploreActiveMember].pkmn)=="satk") team[exploreActiveMember].buffs.satkup1 = 3
        if (returnHighestStat(team[exploreActiveMember].pkmn)=="sdef") team[exploreActiveMember].buffs.sdefup1 = 3
    }


    if (rng(1/100000)) giveRibbon(team[exploreActiveMember].pkmn, "smile")


    for (const buff in wildBuffs){ if ( wildBuffs[buff]>0) wildBuffs[buff] = 0 }
    updateWildBuffs()

    if (rng(0.20) && !areas[saved.currentArea]?.trainer && saved.currentArea != areas.frontierSpiralingTower.id && saved.currentArea != areas.training.id) dropItem()
    //document.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}-bar`).style.transition = "0s linear"
    //document.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}-bar`).style.width = "0%";

    document.getElementById("exploe-wild-hp").style.width = "0%"; 
    voidAnimation(`explore-wild-sprite`,`wildPokemonDown ${respawnTimer+1}s 1`)

    

    let baseExpGain = 34/2
    if (areas[saved.currentArea]?.trainer || saved.currentArea == areas.frontierSpiralingTower.id || saved.currentArea == areas.training.id) baseExpGain = 0

    let expGained = 0
    if ( wildLevel > (pkmn[ team[exploreActiveMember].pkmn.id ].level-10) ) { expGained = baseExpGain ;}
    if (wildLevel >= pkmn[ team[exploreActiveMember].pkmn.id ].level + 5) { expGained = baseExpGain*3 }
    if (wildLevel >= pkmn[ team[exploreActiveMember].pkmn.id ].level + 10) { expGained = baseExpGain*6 }
    if (wildLevel >= pkmn[ team[exploreActiveMember].pkmn.id ].level + 20) { expGained = baseExpGain*12 }
    if (wildLevel >= pkmn[ team[exploreActiveMember].pkmn.id ].level + 40) { expGained = baseExpGain*64 }
    if (wildLevel >= pkmn[ team[exploreActiveMember].pkmn.id ].level + 50) { expGained = baseExpGain*128 }
    if (pkmn[ team[exploreActiveMember].pkmn.id ].level==100) expGained = 0


    if (team[exploreActiveMember].item==="luckyEgg") expGained *= (item.luckyEgg.power() /100) +1
    pkmn[ team[exploreActiveMember].pkmn.id ].exp += expGained

    for (const i in team) {
    if (team[i].pkmn === undefined) continue
    if (i == undefined) continue
    if (exploreActiveMember == i) continue

    expGained = 0
    if (wildLevel > (pkmn[ team[i].pkmn.id ].level-10) ) { expGained = baseExpGain ;}
    if (wildLevel >= pkmn[ team[i].pkmn.id ].level + 5) { expGained = baseExpGain*3 }
    if (wildLevel >= pkmn[ team[i].pkmn.id ].level + 10) { expGained = baseExpGain*6 }
    if (wildLevel >= pkmn[ team[i].pkmn.id ].level + 20) { expGained = baseExpGain*12 }
    if (wildLevel >= pkmn[ team[i].pkmn.id ].level + 30) { expGained = baseExpGain*32 }
    if (wildLevel >= pkmn[ team[i].pkmn.id ].level + 40) { expGained = baseExpGain*64 }
    if (wildLevel >= pkmn[ team[i].pkmn.id ].level + 50) { expGained = baseExpGain*128 }
    if ( pkmn[ team[i].pkmn.id ].level == 100) expGained = 0

    if (team[i].item==="luckyEgg") expGained *= (item.luckyEgg.power() /100) +1

    pkmn[ team[i].pkmn.id ].exp+= expGained/2

    }
    

    updateTeamBuffs()
    updateTeamExp()


    if (areas[saved.currentArea]?.trainer) currentTrainerSlot++



    setTimeout(() => {



        
        setWildPkmn()
    document.getElementById("exploe-wild-hp").style.transition = "0s"
    document.getElementById("exploe-wild-hp").style.width = percent + "%"; 
    setTimeout(() => {
            document.getElementById("exploe-wild-hp").style.transition = "0.5s"
    }, respawnTimer/5);
    updateWildPkmn()
    }, respawnTimer);

    
    


    } 



}


function giveRibbon(target, id){

    const poke = pkmn[target.id]

    if (poke.ribbons == undefined) poke.ribbons = []
    if (poke.ribbons.includes(id)) return
    poke.ribbons.push(id)

}


function closePkmnEditor(){

    //setPkmnTeam()
    voidAnimation("pkmn-editor","tooltipBoxAppear 0.2s reverse 1 ease-in")


    setTimeout(() => {
    document.getElementById("pkmn-editor-movepool").innerHTML = ""
    document.getElementById("pkmn-editor-current-moves").innerHTML = ""
    document.getElementById("pkmn-editor").style.display = "none"
    }, 150);




}



function closeTooltip(){

    if (document.getElementById("team-name-field") && document.getElementById("team-name-field").value!="") { //rename team
        saved.previewTeams[saved.currentPreviewTeam].name = document.getElementById("team-name-field").value
        changeTeamNames()
    }


    voidAnimation("tooltipBackground","tooltipBoxAppear 0.2s reverse 1 ease-in")



    setTimeout(() => {

    document.getElementById("tooltipTop").style.display = "flex";
    document.getElementById("tooltipTitle").style.display = "inline";
    document.getElementById("tooltipMid").style.display = "inline";
    document.getElementById("tooltipBottom").style.display = "inline"

    document.getElementById("tooltipTop").innerHTML = ""
    document.getElementById("tooltipTitle").innerHTML = ""
    document.getElementById("tooltipMid").innerHTML = ""
    document.getElementById("tooltipBottom").innerHTML = ""
    document.getElementById("tooltipBackground").style.display = "none"
    }, 150);


}


function openTooltip(){
    voidAnimation("tooltipBackground","tooltipBoxAppear 0.2s 1")
    document.getElementById("tooltipBackground").style.display = "flex"
}

document.getElementById("tooltipBackground").addEventListener("click", (e) => {
          if (!document.getElementById("prevent-tooltip-exit")) closeTooltip()
});


function returnTypeColor(type) {
    switch(type) {
        case "bug": return "#92BD2D";
        case "dark": return "#595761";
        case "dragon": return "#0C6AC8";
        case "electric": return "#F2D94E";
        case "fairy": return "#EF90E6";
        case "fighting": return "#D3425F";
        case "fire": return "#FBA64C";
        case "flying": return "#A1BBEC";
        case "ghost": return "#5F6DBC";
        case "grass": return "#60BE58";
        case "ground": return "#DA7C4D";
        case "ice": return "#76D1C1";
        case "normal": return "#A0A29F";
        case "poison": return "#B763CF";
        case "psychic": return "#FA8582";
        case "rock": return "#C9BC8A";
        case "steel": return "#5795A3";
        case "water": return "#539DDF";
        default: return "#000000"; 
    }
}

saved.playerPkmnHp = 1
let playerPkmnHpMax = 1

let cancelCurrentPlayerAttack = false


function openMenu(){

    if (saved.firstTimePlaying){
        if (pkmn.litten.caught==0 && pkmn.turtwig.caught==0 && pkmn.froakie.caught==0){
        navigator.brave?.isBrave?.().then(esBrave => {
        if (esBrave) alert("Disable brave shield to properly run the page!");
        });
        }

    }




    if (saved.mysteryGiftClaimed == true) document.getElementById(`menu-mystery-gift`).style.display = "none"
    const today = new Date();
    if (today > mysteryGift.duration) document.getElementById(`menu-mystery-gift`).style.display = "none"

    if (!saved.claimedExportReward) {document.getElementById(`menu-export-reward`).style.display = "flex"} else document.getElementById(`menu-export-reward`).style.display = "none"

    saved.currentAreaBuffer = undefined
    
    if (areas.vsEliteFourLance.defeated == false)  {document.getElementById(`menu-item-genetics`).className = `menu-item menu-item-locked`}
    else {document.getElementById(`menu-item-genetics`).className = `menu-item`}


    if (areas.vsGymLeaderMisty.defeated == false)  {document.getElementById(`menu-item-training`).className = `menu-item menu-item-locked`}
    else {document.getElementById(`menu-item-training`).className = `menu-item`}

    if (areas.vsGymLeaderBrock.defeated == false)  {
        document.getElementById(`menu-item-shop`).className = `menu-item menu-item-locked`
        document.getElementById(`menu-export-reward`).className = `menu-item menu-item-locked`
        document.getElementById(`menu-mystery-gift`).className = `menu-item menu-item-locked`
    }
    else {
        document.getElementById(`menu-item-shop`).className = `menu-item`
        document.getElementById(`menu-export-reward`).className = `menu-item`
        document.getElementById(`menu-mystery-gift`).className = `menu-item`
    }

    if (saved.tutorialStep != "none")  {
        document.getElementById(`menu-item-vs`).className = `menu-item menu-item-locked`
        document.getElementById(`menu-item-items`).className = `menu-item menu-item-locked`
        document.getElementById(`menu-item-team`).className = `menu-item menu-item-locked`
        document.getElementById(`menu-item-dex`).className = `menu-item menu-item-locked`
        document.getElementById(`menu-item-guide`).className = `menu-item menu-item-locked`
        document.getElementById(`menu-item-dictionary`).className = `menu-item menu-item-locked`
    }
    else {
        document.getElementById(`menu-item-vs`).className = `menu-item`
        document.getElementById(`menu-item-items`).className = `menu-item`
        document.getElementById(`menu-item-team`).className = `menu-item`
        document.getElementById(`menu-item-dex`).className = `menu-item`
        document.getElementById(`menu-item-guide`).className = `menu-item`
        document.getElementById(`menu-item-dictionary`).className = `menu-item`
    }




    if (saved.currentArea!==undefined){
        document.getElementById(`menu-item-vs`).style.filter = "brightness(0.6)"
        document.getElementById(`menu-item-team`).style.filter = "brightness(0.6)"
        document.getElementById(`menu-item-training`).style.filter = "brightness(0.6)"
    } else {
        document.getElementById(`menu-item-vs`).style.filter = "brightness(1)"
        document.getElementById(`menu-item-team`).style.filter = "brightness(1)"
        document.getElementById(`menu-item-training`).style.filter = "brightness(1)"
    }

    if (saved.currentArea == areas.training.id) {
        document.getElementById(`menu-item-travel`).style.filter = "brightness(0.6)"
        document.getElementById(`menu-item-training`).style.filter = "brightness(1)"
    } else document.getElementById(`menu-item-travel`).style.filter = "brightness(1)"



    if (document.getElementById(`menu-button`).classList.contains(`menu-button-open`)) {
    document.getElementById(`menu-button`).classList.remove(`menu-button-open`)
    return
    } 
    document.getElementById(`menu-button`).classList.add(`menu-button-open`)


}





function updateTeamItems(){

    
    for (const slot in team) {

        if (team[slot].item === undefined) {
            if (document.getElementById(`team-${slot}-held-item`)) document.getElementById(`team-${slot}-held-item`).innerHTML = ""
            continue
        }

        const div = document.createElement("img");
        if (document.getElementById(`team-${slot}-held-item`)) document.getElementById(`team-${slot}-held-item`).dataset.item = team[slot].item
        div.src = `img/items/${team[slot].item}.png`;
        if (document.getElementById(`team-${slot}-held-item`)) document.getElementById(`team-${slot}-held-item`).appendChild(div);
        
    };

}




function updateTeamExp(){




for (const i in team) {

    if (team[i].pkmn === undefined) continue

    const percent = ((pkmn[ team[i].pkmn.id ].exp + 1) / 100 ) * 100;
    
    document.getElementById(`explore-${i}-exp`).style.width = percent + "%"; 
    if (pkmn[ team[i].pkmn.id ].level>=100) document.getElementById(`explore-${i}-exp`).style.width = "100%"; 


    if (pkmn[ team[i].pkmn.id ].exp>=100){ // on level up



        if (pkmn[ team[i].pkmn.id ].level % 7 === 0) {//every 7 levels, learn move

            const learntMove = learnPkmnMove(pkmn[ team[i].pkmn.id ].id, pkmn[ team[i].pkmn.id ].level)

            if (learntMove !== undefined) {

            pkmn[ team[i].pkmn.id ].movepool.push(learntMove)
            if (pkmn[ team[i].pkmn.id ].moves.slot2 === null || pkmn[ team[i].pkmn.id ].moves.slot2 === undefined) pkmn[ team[i].pkmn.id ].moves.slot2 = learntMove //fix
            else if (pkmn[ team[i].pkmn.id ].moves.slot3 === null || pkmn[ team[i].pkmn.id ].moves.slot3 === undefined) pkmn[ team[i].pkmn.id ].moves.slot3 = learntMove
            else if (pkmn[ team[i].pkmn.id ].moves.slot4 === null || pkmn[ team[i].pkmn.id ].moves.slot4 === undefined) pkmn[ team[i].pkmn.id ].moves.slot4 = learntMove

            pkmn[ team[i].pkmn.id ].newMoves.push(learntMove)

            setPkmnTeam()

            }





        }


        
        pkmn[ team[i].pkmn.id ].exp -= 100
        pkmn[ team[i].pkmn.id ].level++
        document.getElementById(`explore-${i}-lvl`).innerHTML = `lvl ${pkmn[ team[i].pkmn.id ].level}`
        updateTeamExp()




        if (pkmn[ team[i].pkmn.id ].evolve && pkmn[team[i].pkmn.id].evolve()[1].level>0){ // if it evolves by level up

        if (pkmn[ team[i].pkmn.id ].level >= pkmn[team[i].pkmn.id].evolve()[1].level && pkmn[ pkmn[team[i].pkmn.id].evolve()[1].pkmn.id ].caught===0) {

                givePkmn(pkmn[ pkmn[team[i].pkmn.id].evolve()[1].pkmn.id ],1)

        } 

        }



    }

    


}




}


function updateTeamPkmn(){



    for (const i in team) {


    if (team[i].pkmn === undefined) continue

    if (!document.getElementById(`explore-${i}-hp`)) continue



    const percent = (pkmn[ team[i].pkmn.id ].playerHp / pkmn[ team[i].pkmn.id ].playerHpMax) * 100;
    if (percent > 60) document.getElementById(`explore-${i}-hp`).style.background = "rgb(130, 211, 130)"
    if (percent < 60) document.getElementById(`explore-${i}-hp`).style.background = "rgba(221, 168, 99, 1)"
    if (percent < 30) document.getElementById(`explore-${i}-hp`).style.background = "rgba(219, 112, 112, 1)"

    document.getElementById(`explore-${i}-hp`).style.width = percent + "%"; 


    if (pkmn[ team[i].pkmn.id ].playerHp <= 0) { //on player death
        document.getElementById(`explore-${i}-hp`).style.width = "0%"; 
        document.getElementById(`explore-team-member-${i}-sprite`).style.filter = "grayscale(1)"; 
        document.getElementById(`explore-team-member-${i}-sprite`).style.animation = "none"; 
        document.getElementById(`explore-${i}-member`).classList.add('member-inactive');
    }

    if (pkmn[ team[exploreActiveMember].pkmn.id ].playerHp <= 0) { 


        for (const i in team[exploreActiveMember].buffs){
            if (team[exploreActiveMember].buffs[i]>0) team[exploreActiveMember].buffs[i] = 0
        } updateTeamBuffs()

        cancelCurrentPlayerAttack = true
        exploreCombatPlayerTurn = 1


        //if (team?.slot6?.pkmn?.id !== undefined) if (pkmn[ team?.slot6?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot6`
        //if (team?.slot5?.pkmn?.id !== undefined) if (pkmn[ team?.slot5?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot5`
        //if (team?.slot4?.pkmn?.id !== undefined) if (pkmn[ team?.slot4?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot4`
        //if (team?.slot3?.pkmn?.id !== undefined) if (pkmn[ team?.slot3?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot3`
        //if (team?.slot2?.pkmn?.id !== undefined) if (pkmn[ team?.slot2?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot2`
        //if (team?.slot1?.pkmn?.id !== undefined) if (pkmn[ team?.slot1?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot1`
        
            
        

        document.getElementById(`explore-${exploreActiveMember}-member`).classList.remove('member-inactive')

        switchMemberNext()


        //exploreCombatPlayer()

    }



    }


        if ( saved.currentArea !== undefined &&
        (team?.slot6?.pkmn?.id === undefined || pkmn[ team.slot6.pkmn?.id ].playerHp <= 0) &&
        (team?.slot5?.pkmn?.id === undefined || pkmn[ team.slot5.pkmn?.id ].playerHp <= 0) &&
        (team?.slot4?.pkmn?.id === undefined || pkmn[ team.slot4.pkmn?.id ].playerHp <= 0) &&
        (team?.slot3?.pkmn?.id === undefined || pkmn[ team.slot3.pkmn?.id ].playerHp <= 0) &&
        (team?.slot2?.pkmn?.id === undefined || pkmn[ team.slot2.pkmn?.id ].playerHp <= 0) &&
        (team?.slot1?.pkmn?.id === undefined || pkmn[ team.slot1.pkmn?.id ].playerHp <= 0))
        {

         
        leaveCombat();
        
        if (saved.autoRefight == true) {
            if (areas[saved.currentArea].encounter!=true) item.autoRefightTicket.got--
            if (areas[saved.currentArea].encounter!=true && item.autoRefightTicket.got<1) saved.autoRefight = false
        }
   
        }



}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Escape") {
    if (document.getElementById("tooltipTop").style.display !== "none") {
      closeTooltip();
    }
  }
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

document.addEventListener("selectstart", (e) => {
  e.preventDefault();
});

let moveSlotReplace = undefined 

document.addEventListener("contextmenu", e => {

    let el = e.target;
    if (el.parentElement && el !== el.parentElement) {
        if (el.parentElement.contains(el) && el.children.length === 0) { el = el.parentElement; }
    }



    if (el.dataset.area !== undefined) {


        document.getElementById("tooltipTop").style.display = "none";
        document.getElementById("tooltipTitle").style.display = "Area Information";
        document.getElementById("tooltipMid").style.display = "none";
        document.getElementById("tooltipBottom").innerHTML = `<div id="area-preview-spawns"><strong>Area Pokemon</strong></div>`;
        const uncatchableIcon = `<svg fill="currentColor" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1126 1126"><defs><style>.cls-1,.cls-2{fill:none;}.cls-2{stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:100px;}</style></defs><path fill="currentColor" class="cls-1" d="M646.27,1091.94c48.25,3.71,96,.07,142.34-13.67,136.22-40.33,229.87-127.25,281-259.63,12.92-33.47,19.88-68.48,23.33-104.17.33-3.46.83-6.17-4.62-6.16q-98,.3-196,0c-3.42,0-4.7,1.17-5.18,4.31-.71,4.59-1.53,9.17-2.63,13.68-27.08,111-135,180.24-247.43,158.68q-3-.57-5.9-1.23L474.51,1040.42C526.88,1070.09,584.27,1087.18,646.27,1091.94Z" transform="translate(-109.65 -105.51)"/><path fill="currentColor" class="cls-1" d="M678,530.53c-80.91,0-147,66-146.91,146.59h0c0,52.23,27.78,98.34,69.26,124.36L802.4,599.39A147.31,147.31,0,0,0,678,530.53Z" transform="translate(-109.65 -105.51)"/><path class="cls-1" d="M468.93,713.13c-.58-3.44-1.83-4.87-5.73-4.85-32.53.24-65,.16-97.52.16h-96c-7.34,0-7.35,0-6.51,7.5a454.8,454.8,0,0,0,7.62,48.7q30.69,138.51,137.28,229.09L553.24,848.55A211.37,211.37,0,0,1,468.93,713.13Z" transform="translate(-109.65 -105.51)"/><path class="cls-1" d="M824.25,690.68,691.74,823.19C761.64,816.6,817.73,760.54,824.25,690.68Z" transform="translate(-109.65 -105.51)"/><path d="M270.79,764.64a454.8,454.8,0,0,1-7.62-48.7c-.84-7.5-.83-7.5,6.51-7.5h96c32.49,0,65,.08,97.52-.16,3.9,0,5.15,1.41,5.73,4.85a211.37,211.37,0,0,0,84.31,135.42l47.07-47.07c-41.48-26-69.24-72.13-69.26-124.36h0c0-80.62,66-146.63,146.91-146.59A147.31,147.31,0,0,1,802.4,599.39L1047,354.81Q961.93,256.53,828.6,211.49c-35.72-12.07-72.59-18.83-110.19-22a480.64,480.64,0,0,0-103.69,2.35c-83,11-158.7,40.81-226.1,90.55Q253.71,382,206.71,542.94a460.76,460.76,0,0,0-17.86,106.37c-.2,2-.5,3.93-.89,5.86v43c1.7,6.66,1.21,13.52,1.76,20.28,3.47,42.11,11.73,83.28,26.63,122.76q47.33,125.31,139.23,205l52.49-52.48Q301.48,903.15,270.79,764.64Z" transform="translate(-109.65 -105.51)"/><path d="M691.74,823.19l-60.56,60.56q2.93.66,5.9,1.23C749.51,906.54,857.43,837.3,884.51,726.3c1.1-4.51,1.92-9.09,2.63-13.68.48-3.14,1.76-4.31,5.18-4.31q98,.3,196,0c5.45,0,5,2.7,4.62,6.16-3.45,35.69-10.41,70.7-23.33,104.17-51.13,132.38-144.78,219.3-281,259.63-46.34,13.74-94.09,17.38-142.34,13.67-62-4.76-119.39-21.85-171.76-51.52l-53.35,53.35a546.1,546.1,0,0,0,106.31,49c41,14,83.37,21.17,126.64,23.08,1.64.08,3.36-.18,4.85.82h38c7-1.8,14.21-1.18,21.31-1.78q149.68-12.5,266.38-106.38,121.33-98,164.66-247.69a464.67,464.67,0,0,0,17.81-106.33c.1-2.11.58-4.21.88-6.31v-42c-1.7-6.82-1.22-13.85-1.8-20.77-4.43-53.08-16.73-104.29-38.6-152.8a559.5,559.5,0,0,0-32.91-62.39L824.25,690.68C817.73,760.54,761.64,816.6,691.74,823.19Z" transform="translate(-109.65 -105.51)"/><line class="cls-2" x1="50" y1="1076" x2="1076" y2="50"/></svg>`
        if (areas[el.dataset.area].type == "dungeon") { document.getElementById("tooltipBottom").innerHTML = `<div id="area-preview-spawns"><strong>Area Pokemon ${uncatchableIcon}</strong></div>`; }
        if (areas[el.dataset.area].uncatchable) { document.getElementById("tooltipBottom").innerHTML = `<div id="area-preview-spawns"><strong>Area Pokemon ${uncatchableIcon}</strong></div>`; }

        const spawns = areas[el.dataset.area].spawns;

        for (const [listName, list] of Object.entries(spawns)) {
        for (const item of list) {
        const div = document.createElement("div");
        let tag = "";

        if (listName === "uncommon") { tag = `<span>Uncommon</span>`; }
        if (listName === "rare") { tag = `<span>Rare!</span>`; }

        if (pkmn[item.id].shiny && areas[el.dataset.area].uncatchable!=true && areas[el.dataset.area].type != "dungeon") tag += `<div class="wild-shiny-tag">✦</div>`



        div.className = "area-preview";
        if (pkmn[item.id].caught===0 && areas[el.dataset.area].type !== "dungeon" && areas[el.dataset.area].uncatchable!=true) div.classList.add('hidden-pkmn')
        if (pkmn[item.id].caught>0 || areas[el.dataset.area].type == "dungeon" || areas[el.dataset.area].uncatchable) div.dataset.pkmn = item.id


        div.innerHTML = `<img class="sprite-trim" src="img/pkmn/sprite/${item.id}.png">` + tag;
        if (pkmn[item.id].shiny && areas[el.dataset.area].uncatchable!=true && areas[el.dataset.area].type != "dungeon") div.innerHTML = `<img class="sprite-trim" src="img/pkmn/shiny/${item.id}.png">` + tag;
        document.getElementById("area-preview-spawns").appendChild(div);
        }}

        if (areas[el.dataset.area].drops !== undefined) {

        

        document.getElementById("tooltipMid").innerHTML = `<div id="area-preview-items"><strong>Area Items</strong></div>`;

        const drops = areas[el.dataset.area].drops;

        for (const [listName, list] of Object.entries(drops)) {
        for (const item of list) {
        if (item.id === "mysteryEgg") continue
        if (item.id === "nothing") continue
        const div = document.createElement("div");
        document.getElementById("tooltipMid").style.display = "inline";
        div.dataset.item = item.id
        let tag = "";
        if (listName === "rare") { tag = `<span>Rare!</span>`; }
        if (listName === "uncommon") { tag = `<span>Uncommon</span>`; }
        div.className = "area-preview";
        if (item.type!=="tm") div.innerHTML = `<img style="scale:2" src="img/items/${item.id}.png">` + tag;
        if (item.type=="tm") div.innerHTML = `<img style="scale:2" src="img/items/tm${format(move[item.move].type)}.png">` + tag;
        document.getElementById("area-preview-items").appendChild(div);
        }}

        }

        
        


        openTooltip()

    }


    if (el.dataset.trainer !== undefined) {


        document.getElementById("tooltipTop").style.display = "none";
        document.getElementById("tooltipTitle").style.display = "Area Information";
        document.getElementById("tooltipMid").style.display = "none";
        document.getElementById("tooltipBottom").innerHTML = `<div id="area-preview-spawns"><strong>Team Preview</strong></div>`;


        const spawns = [];
        if (areas[el.dataset.trainer].team.slot1) spawns.push(areas[el.dataset.trainer].team.slot1.id)
        if (areas[el.dataset.trainer].team.slot2) spawns.push(areas[el.dataset.trainer].team.slot2.id)
        if (areas[el.dataset.trainer].team.slot3) spawns.push(areas[el.dataset.trainer].team.slot3.id)
        if (areas[el.dataset.trainer].team.slot4) spawns.push(areas[el.dataset.trainer].team.slot4.id)
        if (areas[el.dataset.trainer].team.slot5) spawns.push(areas[el.dataset.trainer].team.slot5.id)
        if (areas[el.dataset.trainer].team.slot6) spawns.push(areas[el.dataset.trainer].team.slot6.id)
        
        for (const item of spawns) {

        let tag = ""
        if (pkmn[item].shiny && areas[el.dataset.trainer].type != "vs" && areas[el.dataset.trainer].type != "frontier") tag += `<div class="wild-shiny-tag">✦</div>`


        const div = document.createElement("div");
        div.className = "area-preview";
        div.dataset.pkmn = item
        div.innerHTML = `<img class="sprite-trim" src="img/pkmn/sprite/${item}.png">`;
        if (pkmn[item].shiny && areas[el.dataset.trainer].type != "vs" && areas[el.dataset.trainer].type != "frontier") div.innerHTML = `<img class="sprite-trim" src="img/pkmn/shiny/${item}.png"> ${tag}`;
        document.getElementById("area-preview-spawns").appendChild(div);
        }

        if (areas[el.dataset.trainer].reward !== undefined) {

        

        document.getElementById("tooltipMid").innerHTML = `<div id="area-preview-items"><strong>Victory Rewards</strong></div>`;

        const rewards = areas[el.dataset.trainer].reward;

        for (const i of rewards) {
        const div = document.createElement("div");
        document.getElementById("tooltipMid").style.display = "inline";
        let meow = `pkmn/sprite`
        if (item[i.id]!=undefined) {div.dataset.item = i.id; meow = "items" }
        else {div.dataset.pkmn = i.id;}
        div.className = "area-preview";
        if (i.type!=="tm") div.innerHTML = `<img style="scale:2" src="img/${meow}/${i.id}.png">`;
        if (i.type=="tm") div.innerHTML = `<img style="scale:2" src="img/${meow}/tm${format(move[i.move].type)}.png">` + tag;
        if (meow == `pkmn/sprite`) div.innerHTML = `<img style="scale:1" src="img/${meow}/${i.id}.png">`;
        document.getElementById("area-preview-items").appendChild(div);
        }

        }

        
        


        openTooltip()

    }

    if (el.dataset.buff !== undefined) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `${format(el.dataset.buff)}`
        document.getElementById("tooltipMid").style.display = `none`
        if (el.dataset.buff==="burn") document.getElementById("tooltipBottom").innerHTML = `Halves Physical Attack and deals damage every turn`
        if (el.dataset.buff==="poisoned") document.getElementById("tooltipBottom").innerHTML = `Halves Special Attack and deals damage every turn`
        if (el.dataset.buff==="sleep") document.getElementById("tooltipBottom").innerHTML = `Moves fail to deal damage`
        if (el.dataset.buff==="freeze") document.getElementById("tooltipBottom").innerHTML = `Moves fail to deal damage`
        if (el.dataset.buff==="confused") document.getElementById("tooltipBottom").innerHTML = `50% chance for moves to fail to deal damage`
        if (el.dataset.buff==="paralysis") document.getElementById("tooltipBottom").innerHTML = `25% chance for moves to fail to deal damage and Speed is reduced by 75%`
        
        if (el.dataset.buff==="sunny") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Fire-Type moves by 75% and reduces the damage of Water-Type moves by 50%`
        if (el.dataset.buff==="rainy") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Water-Type moves by 75% and reduces the damage of Fire-Type moves by 50%`
        if (el.dataset.buff==="sandstorm") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Rock and Ground-Type moves by 75%`
        if (el.dataset.buff==="hail") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Ice-Type moves by 75%`
        if (el.dataset.buff==="foggy") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Dark and Ghost-Type moves by 75%`
        if (el.dataset.buff==="electricTerrain") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Electric and Steel-Type moves by 75%`
        if (el.dataset.buff==="grassyTerrain") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Grass and Bug-Type moves by 75%`
        if (el.dataset.buff==="mistyTerrain") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Fairy and Psychic-Type moves by 75%`

        
        
        
        openTooltip()
    }

    if (el.dataset.help !== undefined) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipMid").style.display = `none`

        if (el.dataset.help === `VS`) document.getElementById("tooltipTitle").innerHTML = `VS Trainers`
        if (el.dataset.help === `VS`) document.getElementById("tooltipBottom").innerHTML = `Defeat increasingly difficult trainers and carve yourself a path of fame! You may unlock additional areas to explore as your progress`

        if (el.dataset.help === `Frontier`) document.getElementById("tooltipTitle").innerHTML = `Battle Frontier`
        if (el.dataset.help === `Frontier`) document.getElementById("tooltipBottom").innerHTML = `The Battle Frontier houses different types of challenges under a specific division restriction that rotates every three days. Trainers fought here will reset every day`

        if (el.dataset.help === `Spiral`) document.getElementById("tooltipTitle").innerHTML = `Spiraling Tower`
        if (el.dataset.help === `Spiral`) document.getElementById("tooltipBottom").innerHTML = `The Spiraling Tower is an infinitely-scaling challenge in which every Pokemon defeated will increase the difficulty. Type Immunities inside this challenge will be instead converted to resistances<br><br>Every time you enter the tower, you will start from floor 1, but you can try as many times as you'd like<br><br>Your highest reached floor will be saved, and reset when the league rotation changes. You will be rewarded for every new highest floor reached at the end of the battle`
        if (el.dataset.help === `Spiral`) document.getElementById("tooltipMid").style.display = `inline`
        if (el.dataset.help === `Spiral`) document.getElementById("tooltipMid").innerHTML = `Current Type Rotation: ${format(saved.currentSpiralingType)}`

        if (el.dataset.help === `Wild Areas`) document.getElementById("tooltipTitle").innerHTML = `Wild Areas`
        if (el.dataset.help === `Wild Areas`) document.getElementById("tooltipBottom").innerHTML = `All Pokemon in Wild Areas might be caught by defeating them. Wild Areas rotate every day, so be sure to check out what can be caught today!`

        if (el.dataset.help === `Dungeons`) document.getElementById("tooltipTitle").innerHTML = `Dungeons`
        if (el.dataset.help === `Dungeons`) document.getElementById("tooltipBottom").innerHTML = `Pokemon in Dungeons can't be caught, but they can drop useful items and EXP. Dungeons rotate every day aswell`

        if (el.dataset.help === `Training`) document.getElementById("tooltipTitle").innerHTML = `Training`
        if (el.dataset.help === `Training`) document.getElementById("tooltipBottom").innerHTML = `Challenge your Pokemon against waves of foes in order to get stronger. You will naturally have typing advantage against Pokemon fought against, and their level will scale to yours. Type Immunities inside training will be instead converted to resistances.<br><br>Failing a training will result in no gains`

        if (el.dataset.help === `Events`) document.getElementById("tooltipTitle").innerHTML = `Events`
        if (el.dataset.help === `Events`) document.getElementById("tooltipBottom").innerHTML = `Events might house both items and Pokemon to get. Events marked with a skull signify powerful foes that usually require an item to catch (The item wont be consumed if failed to defeat) that can be adquired in the collection events. All Events rotate every three days.`

        if (el.dataset.help === `Genetics`) document.getElementById("tooltipTitle").innerHTML = `Genetics`
        if (el.dataset.help === `Genetics`) document.getElementById("tooltipBottom").innerHTML = `With genetics, you can modify the parameters of a level 100 Pokemon (the host) and influence them based on another Pokemon (the sample)<br><br>Doing so, the level of the host will reset back to 1 while keeping all 4 of its currently selected moves, aswell as re-rolling its ability and a chance to increase its IV's<br><br>Genetics can also be influenced by using genetic-aiding items, which you can use at the end of the operation<br><br>You can find more information about the specifics of genetics in the guide section`

        if (el.dataset.help === `Shop`) document.getElementById("tooltipTitle").innerHTML = `Poke-Mart`
        if (el.dataset.help === `Shop`) document.getElementById("tooltipBottom").innerHTML = `You can buy items here with Bottle Caps. Yeah`

        openTooltip()
    }




    if (el.dataset.ability !== undefined) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = format(el.dataset.ability)
        document.getElementById("tooltipTitle").style.display = `inline`
        document.getElementById("tooltipMid").innerHTML = `Common Ability`
        if (ability[el.dataset.ability].rarity===2) document.getElementById("tooltipMid").innerHTML = `Uncommon Ability`
        if (ability[el.dataset.ability].rarity===3) document.getElementById("tooltipMid").innerHTML = `Rare Ability`
        document.getElementById("tooltipBottom").innerHTML = ability[el.dataset.ability].info()
        openTooltip()
    }


    if (el.dataset.ribbon !== undefined) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = ribbon[el.dataset.ribbon].name
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = ribbon[el.dataset.ribbon].description
        openTooltip()
    }


    if (el.dataset.training !== undefined) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = training[el.dataset.training].name
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = training[el.dataset.training].info
        openTooltip()
    }


    if (el.dataset.move !== undefined) {

        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `inline`
        document.getElementById("tooltipTop").innerHTML = `<img src="img/items/tm${format(move[el.dataset.move].type)}.png">`
        document.getElementById("tooltipTitle").innerHTML = format(el.dataset.move)
        document.getElementById("tooltipMid").style.display = "inline"


        const affectedAbilities = []
        if (move[el.dataset.move].affectedBy!==undefined) affectedAbilities.push(move[el.dataset.move].affectedBy)
        if (move[el.dataset.move].hitEffect) affectedAbilities.push(ability.sereneGrace.id)
        if (move[el.dataset.move].hitEffect && (move[el.dataset.move].power>0 && move[el.dataset.move].unaffectedBySheerForce!=true) ) affectedAbilities.push(ability.sheerForce.id)
        if (move[el.dataset.move].multihit && move[el.dataset.move].multihit[1] > move[el.dataset.move].multihit[0]) affectedAbilities.push(ability.skillLink.id)
        if (move[el.dataset.move].power <= 60 && move[el.dataset.move].power!=0) affectedAbilities.push(ability.technician.id)
            
        const restrictedIcon = `<svg style="color:${returnTypeColor(move[el.dataset.move].type)}; margin: -0.3rem 0rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity="0.5"/><path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"/></svg>`


        let affectedText = ""
        if (affectedAbilities.length>0) affectedText =`<br>Affected by ${joinWithAnd(affectedAbilities)}`
        if (move[el.dataset.move].restricted) affectedText +=`<br>This move is restricted (${restrictedIcon}) and only one of them can be present in the active moves at a time`


        document.getElementById("tooltipMid").innerHTML = `${move[el.dataset.move].power} Power, ${format(move[el.dataset.move].split)}${affectedText}`
        if (move[el.dataset.move].info == undefined) document.getElementById("tooltipBottom").innerHTML = `No additional effects`
        else document.getElementById("tooltipBottom").innerHTML = move[el.dataset.move].info()
        openTooltip()

    }

    if (el.dataset.item !== undefined) {

        document.getElementById("tooltipTop").style.display = "flex"
        if (item[el.dataset.item].type !== "tm") document.getElementById("tooltipTop").innerHTML = `<img src="img/items/${el.dataset.item}.png">`
        if (item[el.dataset.item].type == "tm") document.getElementById("tooltipTop").innerHTML = `<img src="img/items/tm${format(move[item[el.dataset.item].move].type)}.png">`
        
        document.getElementById("tooltipTitle").innerHTML = format(el.dataset.item)
        document.getElementById("tooltipBottom").innerHTML = item[el.dataset.item].info()
        

        if (item[el.dataset.item].type==="held"){
            document.getElementById("tooltipTitle").innerHTML = format(el.dataset.item) + `<br>Level ${returnItemLevel(el.dataset.item)}`
            document.getElementById("tooltipMid").innerHTML = `${returnItemLevel(el.dataset.item,"stars")}<br>${item[el.dataset.item].got} in total ${returnItemLevel(el.dataset.item,"left")}`
        }

        else document.getElementById("tooltipMid").innerHTML = `${item[el.dataset.item].got} in bag`

        openTooltip()

    }


    if (el.dataset.pkmn !== undefined) {

        document.getElementById("tooltipTop").style.display = "none";
        document.getElementById("tooltipTitle").style.display = "none";
        let hiddenAbility = `WIP`
        let signatureMove = ""
        if (pkmn[el.dataset.pkmn].signature != undefined) signatureMove = `<div id="inpect-pkmn-signature" style="box-shadow: none; outline:none"> <svg style="margin: 0 0.3rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg> Signature Move: ${format(pkmn[el.dataset.pkmn].signature.id)} </div>`
        if (pkmn[el.dataset.pkmn].hiddenAbility != undefined) hiddenAbility = format(pkmn[el.dataset.pkmn].hiddenAbility.id)

        document.getElementById("tooltipMid").innerHTML = `${returnTypeMultipliers(pkmn[el.dataset.pkmn])}`;

        document.getElementById("tooltipBottom").innerHTML = `
        <div id="tooltip-inspect-pkmn">
            
        <div style="display: flex;">

            <div class="pkmn-stats-panel-info" style="display:flex; flex-direction:column;"> 
            
            <strong  class="explore-pkmn-level">${format(el.dataset.pkmn)}</strong>
            <strong  class="inspect-pkmn-types" style="background:transparent;">${returnPkmnTypes(el.dataset.pkmn)}</strong>
            <div class="explore-sprite" id="inspect-pkmn-image">
            <img  class="sprite-trim" style="animation: pkmn-active 0.5s infinite; z-index: 1;" src="img/pkmn/sprite/${el.dataset.pkmn}.png">
            <img style="scale:1;animation: none; position: absolute; opacity: 0.3; width: 4.5rem; z-index: 0; transform: translateY(2.5rem);" src="img/resources/pkmn-shadow.png">
            </div>
            
            </div>
             <div class="explore-header-infobox" style="background: transparent;     padding-left: 2rem;">
                <div class="pkmn-stats-panel">
                    <div class="pkmn-stats-panel-bst">
                   
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0.3" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"/></svg>
                        ${returnStatDots(el.dataset.pkmn, "hp")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.975l1.475-1.475H15.5v-2.025L16.975 12L15.5 10.525V8.5h-2.025L12 7.025L10.525 8.5H8.5v2.025L7.025 12L8.5 13.475V15.5h2.025zm0 6.325L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65z"/></svg>
                        ${returnStatDots(el.dataset.pkmn, "atk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11.991c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473V8l-9 3z"/><path fill="currentColor" d="M14.101 21.527C16.761 20.365 21 17.63 21 11.991V11l-9-3v14c1.02 0 1.38-.158 2.101-.473M8.838 2.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082C3 5.62 3 7.22 3 10.417V11l9-3V2c-.811 0-1.595.268-3.162.805" opacity="0.5"/><path fill="currentColor" d="m15.735 3l-.573-.195C13.595 2.268 12.812 2 12 2v6l9 3v-.583c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081"/></svg>
                        ${returnStatDots(el.dataset.pkmn, "def")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M306.72 22.688c-87.212.763-181.58 53.14-238.19 140.406c-.944 1.46-1.677 3.068-2.593 4.53c.455-.397.86-.917 1.313-1.31c-40.253 56.984-35.183 136.503 15.813 187.5c54.553 54.552 141.745 56.65 199.093 6.78c-4.676 6.576-9.916 13.137-15.812 19.03c-57 57-149.53 57-206.53 0c-17.814-17.81-30.103-38.73-36.783-61.312c2.928 65.605 34.97 122.74 93.907 151.97c103.593 51.374 250.2-2.8 326.875-121C510.904 245.856 502.47 127.374 429.938 65c-10.36-8.91-22.206-16.483-35.156-22.906c-25.897-12.844-54.454-19.11-83.905-19.407c-1.38-.013-2.772-.012-4.156 0zm1.06 62.406c47.14-.705 82.63 23.414 90.376 58.906v.03c1.417 6.492 1.806 13.565 1.344 21.032c-3.682 59.742-68.786 126.655-145.438 149.563c-.945.282-1.872.422-2.812.688l.938-.47c-37.843 12.718-74.086-.708-84.438-33.624c-7.03-22.36-.468-48.544 15.25-70.408c-1.695 7.2-.05 13.91 5.344 18.375c10.643 8.816 31.83 5.575 47.312-7.25c15.483-12.824 19.394-30.37 8.75-39.187c-6.294-5.214-16.287-6.21-26.594-3.5l.532-.313c-.755.257-1.52.54-2.28.813c-.344.123-.69.217-1.033.344a54 54 0 0 0-8 3.344c-.656.307-1.315.61-1.968.937c-42.374 21.24-83.226 68.335-71.656 105.125c3.616 11.497 10.213 20.614 19.094 27.094c-30.253-10.44-48.35-34.526-46.563-68.53c3.682-70.837 83.193-133.31 159.844-156.22c14.673-4.385 28.802-6.553 42-6.75z"/></svg>
                        ${returnStatDots(el.dataset.pkmn, "satk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="m311.874 171.817l65.452-99.754l-.865-.367l50.206 12.144l-.221 17.259l.049 93.284l.119 25.42c.562 109.632-58.957 176.828-107.749 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.403-2.682l-5.725-2.644l-7.222-3.591l-10.821-5.871l-12.434-7.468l-10.839-7.169c-48.347-33.416-112.698-97.735-117.398-205.151l-.274-12.587V84.09L256.45 42.668l22.726 5.497l-62.978 142.683l48.901 20.757l-80.615 154.048l176.882-172.827z" clip-rule="evenodd"/></svg>
                        ${returnStatDots(el.dataset.pkmn, "sdef")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 19v-2H5.675q-.5 0-.7-.45t.125-.8l6.15-6.9q.3-.35.75-.35t.75.35l6.15 6.9q.325.35.125.8t-.7.45H15v2q0 .425-.288.713T14 20h-4q-.425 0-.712-.288T9 19m3-13l-5.025 5.675q-.15.15-.35.238t-.4.087q-.65 0-.912-.575t.162-1.075l5.775-6.5q.3-.35.75-.35t.75.35l5.775 6.5q.425.5.163 1.075t-.913.575q-.2 0-.4-.075t-.35-.25z"/></svg>
                         ${ returnStatDots(el.dataset.pkmn, "spe")}
                    </div>
                </div>
            </div>
            </div>
            </div>
             <div class="inspect-info" style="background: transparent;">

                    
                    <div style="box-shadow: none; outline:none" id="inpect-pkmn-ability">
                        <svg style="margin: 0 0.3rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-opacity="0.25" fill-rule="evenodd" d="M2.455 11.116C3.531 9.234 6.555 5 12 5c5.444 0 8.469 4.234 9.544 6.116c.221.386.331.58.32.868c-.013.288-.143.476-.402.852C20.182 14.694 16.706 19 12 19s-8.182-4.306-9.462-6.164c-.26-.376-.39-.564-.401-.852c-.013-.288.098-.482.318-.868M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="1.2" d="M12 5c-5.444 0-8.469 4.234-9.544 6.116c-.221.386-.331.58-.32.868c.013.288.143.476.402.852C3.818 14.694 7.294 19 12 19s8.182-4.306 9.462-6.164c.26-.376.39-.564.401-.852s-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.2"/></g></svg>
                        ${hiddenAbility}</div>

                        ${signatureMove}

                    <div style="box-shadow: none; outline:none">
                        ${returnDivisionLetter(returnPkmnDivision(pkmn[el.dataset.pkmn]))}</div>


                        

            <div style="box-shadow: none; outline:none; cursor:default">
                        Caught: ${pkmn[el.dataset.pkmn].caught}
                </div>

                </div>

                

                
                
            
        `
        if (pkmn[el.dataset.pkmn].hiddenAbility != undefined) document.getElementById("inpect-pkmn-ability").dataset.ability = pkmn[el.dataset.pkmn].hiddenAbility.id
        if (pkmn[el.dataset.pkmn].signature != undefined) document.getElementById("inpect-pkmn-signature").dataset.move = pkmn[el.dataset.pkmn].signature.id

        if (pkmn[el.dataset.pkmn].caught>0) {document.getElementById(`inspect-pkmn-image`).dataset.pkmnEditor = pkmn[el.dataset.pkmn].id;}


        openTooltip()

    }


    if (el.dataset.pkmnEditor !== undefined) {

        if (areas[saved.currentArea]?.trainer && document.getElementById(`team-menu`).style.display !== "flex" ||  saved.currentArea == areas.frontierSpiralingTower.id ||  saved.currentArea == areas.training.id) return //cant edit vs trainers to prevent full heal

        const poke = pkmn[el.dataset.pkmnEditor]

        voidAnimation("pkmn-editor","tooltipBoxAppear 0.2s 1")
        document.getElementById("pkmn-editor").style.display = "flex"



        if (poke.signature!==undefined && poke.level == 100 && !poke.movepool.includes(poke.signature.id)) poke.movepool.push(poke.signature.id)

        

        currentEditedPkmn = poke.id
        closeTooltip()
        
    if (pkmn[currentEditedPkmn].tag) document.getElementById("explore-pkmn-tag").value = pkmn[currentEditedPkmn].tag;
    else document.getElementById("explore-pkmn-tag").value = "none";

        document.getElementById("pkmn-shiny-switch").style.display = "none"
        if (pkmn[poke.id].shiny){
        document.getElementById("pkmn-shiny-switch").style.display = "flex"
        }

        if (pkmn[poke.id].shiny && pkmn[poke.id].shinyDisabled!=true) document.getElementById("pkmn-editor-sprite").src = `img/pkmn/shiny/${poke.id}.png` 
        else document.getElementById("pkmn-editor-sprite").src = `img/pkmn/sprite/${poke.id}.png`
        document.getElementById("pkmn-editor-name").innerHTML = format(poke.id)
        if (pkmn[poke.id].shiny) document.getElementById("pkmn-editor-name").innerHTML = `${format(poke.id)} <span style="color:#FF4671">✦</span>`
        document.getElementById("pkmn-editor-level").innerHTML = `Level ${poke.level}`
        document.getElementById("pkmn-editor-type").innerHTML = returnPkmnTypes(poke.id)


        document.getElementById(`pkmn-editor-ribbons`).innerHTML = ""
        if (poke.ribbons) {
            for (const e of poke.ribbons){

                const ribbonDiv = document.createElement("span")
                ribbonDiv.innerHTML = `<img src="img/ribbons/${e}.png">`
                ribbonDiv.dataset.ribbon = e
                document.getElementById(`pkmn-editor-ribbons`).appendChild(ribbonDiv)

            }
        }

        // if it has a leveled evolution
        let evolutionTag = ""
        if (pkmn[el.dataset.pkmnEditor].evolve && pkmn[el.dataset.pkmnEditor].evolve()[1].level>0){
            evolutionTag = `<span>Unlocks ${format(pkmn[el.dataset.pkmnEditor].evolve()[1].pkmn.id)} at level ${pkmn[el.dataset.pkmnEditor].evolve()[1].level} ❌</span>`
            if (pkmn[ pkmn[el.dataset.pkmnEditor].evolve()[1].pkmn.id ].caught>0) evolutionTag = `<span>Unlocks ${format(pkmn[el.dataset.pkmnEditor].evolve()[1].pkmn.id)} at level ${pkmn[el.dataset.pkmnEditor].evolve()[1].level} ✔️</span>`
        }

        //if by item
        if (pkmn[el.dataset.pkmnEditor].evolve){
        for (const evo in pkmn[el.dataset.pkmnEditor]?.evolve()) {
        if (pkmn[el.dataset.pkmnEditor].evolve()[evo].level!==undefined) continue
        if (pkmn[el.dataset.pkmnEditor].evolve()[evo].item==undefined || item[pkmn[el.dataset.pkmnEditor].evolve()[evo].item.id] == undefined) continue
        let levelRequired = wildAreaLevel2
        if (pkmn[el.dataset.pkmnEditor].evolve()[evo].item.id == "linkStone") levelRequired = wildAreaLevel4
        if (pkmn[el.dataset.pkmnEditor].evolve()[evo].item.id == "oddRock") levelRequired = wildAreaLevel4
        if (pkmn[el.dataset.pkmnEditor].evolve()[evo].pkmn.id.slice(0, 4) === "mega") levelRequired = 100
        if (pkmn[ pkmn[el.dataset.pkmnEditor].evolve()[evo].pkmn.id ].caught>0) evolutionTag += `<span>Unlocks ${format(pkmn[el.dataset.pkmnEditor].evolve()[evo].pkmn.id)} by using a ${format(item[pkmn[el.dataset.pkmnEditor].evolve()[evo].item.id].id)} at level ${levelRequired}+ ✔️</span>`
        else evolutionTag += `<span>Unlocks ${format(pkmn[el.dataset.pkmnEditor].evolve()[evo].pkmn.id)} by using a ${format(item[pkmn[el.dataset.pkmnEditor].evolve()[evo].item.id].id)} at level ${levelRequired}+ ❌</span>`

        }
        }
        

        document.getElementById("pkmn-editor-extra-info").innerHTML = evolutionTag

        document.getElementById("pkmn-editor-stats").innerHTML = `
        <div style="display:flex; justify-content:start; align-items:start; flex-direction:column">
        <div class="pkmn-stats-panel-bst">
                    <span class="editor-stat-number" >${((pkmn[el.dataset.pkmnEditor].bst.hp * 30) * Math.pow(1.1, pkmn[el.dataset.pkmnEditor].ivs.hp)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0.3" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"/></svg>
                        ${returnStatDots(poke.id, "hp")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <span class="editor-stat-number" >${((pkmn[el.dataset.pkmnEditor].bst.atk * 30) * Math.pow(1.1, pkmn[el.dataset.pkmnEditor].ivs.atk)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.975l1.475-1.475H15.5v-2.025L16.975 12L15.5 10.525V8.5h-2.025L12 7.025L10.525 8.5H8.5v2.025L7.025 12L8.5 13.475V15.5h2.025zm0 6.325L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65z"/></svg>
                        ${returnStatDots(poke.id, "atk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <span class="editor-stat-number" >${((pkmn[el.dataset.pkmnEditor].bst.def * 30) * Math.pow(1.1, pkmn[el.dataset.pkmnEditor].ivs.def)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11.991c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473V8l-9 3z"/><path fill="currentColor" d="M14.101 21.527C16.761 20.365 21 17.63 21 11.991V11l-9-3v14c1.02 0 1.38-.158 2.101-.473M8.838 2.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082C3 5.62 3 7.22 3 10.417V11l9-3V2c-.811 0-1.595.268-3.162.805" opacity="0.5"/><path fill="currentColor" d="m15.735 3l-.573-.195C13.595 2.268 12.812 2 12 2v6l9 3v-.583c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081"/></svg>
                        ${returnStatDots(poke.id, "def")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <span class="editor-stat-number" >${((pkmn[el.dataset.pkmnEditor].bst.satk * 30) * Math.pow(1.1, pkmn[el.dataset.pkmnEditor].ivs.satk)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M306.72 22.688c-87.212.763-181.58 53.14-238.19 140.406c-.944 1.46-1.677 3.068-2.593 4.53c.455-.397.86-.917 1.313-1.31c-40.253 56.984-35.183 136.503 15.813 187.5c54.553 54.552 141.745 56.65 199.093 6.78c-4.676 6.576-9.916 13.137-15.812 19.03c-57 57-149.53 57-206.53 0c-17.814-17.81-30.103-38.73-36.783-61.312c2.928 65.605 34.97 122.74 93.907 151.97c103.593 51.374 250.2-2.8 326.875-121C510.904 245.856 502.47 127.374 429.938 65c-10.36-8.91-22.206-16.483-35.156-22.906c-25.897-12.844-54.454-19.11-83.905-19.407c-1.38-.013-2.772-.012-4.156 0zm1.06 62.406c47.14-.705 82.63 23.414 90.376 58.906v.03c1.417 6.492 1.806 13.565 1.344 21.032c-3.682 59.742-68.786 126.655-145.438 149.563c-.945.282-1.872.422-2.812.688l.938-.47c-37.843 12.718-74.086-.708-84.438-33.624c-7.03-22.36-.468-48.544 15.25-70.408c-1.695 7.2-.05 13.91 5.344 18.375c10.643 8.816 31.83 5.575 47.312-7.25c15.483-12.824 19.394-30.37 8.75-39.187c-6.294-5.214-16.287-6.21-26.594-3.5l.532-.313c-.755.257-1.52.54-2.28.813c-.344.123-.69.217-1.033.344a54 54 0 0 0-8 3.344c-.656.307-1.315.61-1.968.937c-42.374 21.24-83.226 68.335-71.656 105.125c3.616 11.497 10.213 20.614 19.094 27.094c-30.253-10.44-48.35-34.526-46.563-68.53c3.682-70.837 83.193-133.31 159.844-156.22c14.673-4.385 28.802-6.553 42-6.75z"/></svg>
                        ${returnStatDots(poke.id, "satk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <span class="editor-stat-number" >${((pkmn[el.dataset.pkmnEditor].bst.sdef * 30) * Math.pow(1.1, pkmn[el.dataset.pkmnEditor].ivs.sdef)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="m311.874 171.817l65.452-99.754l-.865-.367l50.206 12.144l-.221 17.259l.049 93.284l.119 25.42c.562 109.632-58.957 176.828-107.749 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.403-2.682l-5.725-2.644l-7.222-3.591l-10.821-5.871l-12.434-7.468l-10.839-7.169c-48.347-33.416-112.698-97.735-117.398-205.151l-.274-12.587V84.09L256.45 42.668l22.726 5.497l-62.978 142.683l48.901 20.757l-80.615 154.048l176.882-172.827z" clip-rule="evenodd"/></svg>
                        ${returnStatDots(poke.id, "sdef")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <span class="editor-stat-number" >${((pkmn[el.dataset.pkmnEditor].bst.spe * 30) * Math.pow(1.1, pkmn[el.dataset.pkmnEditor].ivs.spe)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 19v-2H5.675q-.5 0-.7-.45t.125-.8l6.15-6.9q.3-.35.75-.35t.75.35l6.15 6.9q.325.35.125.8t-.7.45H15v2q0 .425-.288.713T14 20h-4q-.425 0-.712-.288T9 19m3-13l-5.025 5.675q-.15.15-.35.238t-.4.087q-.65 0-.912-.575t.162-1.075l5.775-6.5q.3-.35.75-.35t.75.35l5.775 6.5q.425.5.163 1.075t-.913.575q-.2 0-.4-.075t-.35-.25z"/></svg>
                        ${returnStatDots(poke.id, "spe")}
                    </div>
                    </div>
                    <svg style="height: 3rem; width:3rem; margin-top:0.3rem; color:rgb(110, 105, 105)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.22 6.894a3.7 3.7 0 0 0-1.4-1.37l-6-3.31a3.83 3.83 0 0 0-3.63 0l-6 3.31a3.7 3.7 0 0 0-1.4 1.37a3.74 3.74 0 0 0-.52 1.9v6.41a3.79 3.79 0 0 0 1.92 3.27l6 3.3a3.74 3.74 0 0 0 3.63 0l6-3.31a3.72 3.72 0 0 0 1.91-3.26v-6.36a3.64 3.64 0 0 0-.51-1.95m-1 8.31a2.2 2.2 0 0 1-1.14 1.95l-6 3.31q-.158.089-.33.14v-8.18l7.3-4.39c.092.242.136.5.13.76z"/></svg>
            
                    `

        document.getElementById("pkmn-editor-ivs").innerHTML = `
                        <div style="display:flex; justify-content:start; align-items:start; flex-direction:column">

        <div class="pkmn-stats-panel-bst">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0.3" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"/></svg>
                        ${returnIVDots(poke.id, "hp")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.975l1.475-1.475H15.5v-2.025L16.975 12L15.5 10.525V8.5h-2.025L12 7.025L10.525 8.5H8.5v2.025L7.025 12L8.5 13.475V15.5h2.025zm0 6.325L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65z"/></svg>
                        ${returnIVDots(poke.id, "atk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11.991c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473V8l-9 3z"/><path fill="currentColor" d="M14.101 21.527C16.761 20.365 21 17.63 21 11.991V11l-9-3v14c1.02 0 1.38-.158 2.101-.473M8.838 2.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082C3 5.62 3 7.22 3 10.417V11l9-3V2c-.811 0-1.595.268-3.162.805" opacity="0.5"/><path fill="currentColor" d="m15.735 3l-.573-.195C13.595 2.268 12.812 2 12 2v6l9 3v-.583c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081"/></svg>
                        ${returnIVDots(poke.id, "def")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M306.72 22.688c-87.212.763-181.58 53.14-238.19 140.406c-.944 1.46-1.677 3.068-2.593 4.53c.455-.397.86-.917 1.313-1.31c-40.253 56.984-35.183 136.503 15.813 187.5c54.553 54.552 141.745 56.65 199.093 6.78c-4.676 6.576-9.916 13.137-15.812 19.03c-57 57-149.53 57-206.53 0c-17.814-17.81-30.103-38.73-36.783-61.312c2.928 65.605 34.97 122.74 93.907 151.97c103.593 51.374 250.2-2.8 326.875-121C510.904 245.856 502.47 127.374 429.938 65c-10.36-8.91-22.206-16.483-35.156-22.906c-25.897-12.844-54.454-19.11-83.905-19.407c-1.38-.013-2.772-.012-4.156 0zm1.06 62.406c47.14-.705 82.63 23.414 90.376 58.906v.03c1.417 6.492 1.806 13.565 1.344 21.032c-3.682 59.742-68.786 126.655-145.438 149.563c-.945.282-1.872.422-2.812.688l.938-.47c-37.843 12.718-74.086-.708-84.438-33.624c-7.03-22.36-.468-48.544 15.25-70.408c-1.695 7.2-.05 13.91 5.344 18.375c10.643 8.816 31.83 5.575 47.312-7.25c15.483-12.824 19.394-30.37 8.75-39.187c-6.294-5.214-16.287-6.21-26.594-3.5l.532-.313c-.755.257-1.52.54-2.28.813c-.344.123-.69.217-1.033.344a54 54 0 0 0-8 3.344c-.656.307-1.315.61-1.968.937c-42.374 21.24-83.226 68.335-71.656 105.125c3.616 11.497 10.213 20.614 19.094 27.094c-30.253-10.44-48.35-34.526-46.563-68.53c3.682-70.837 83.193-133.31 159.844-156.22c14.673-4.385 28.802-6.553 42-6.75z"/></svg>
                        ${returnIVDots(poke.id, "satk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="m311.874 171.817l65.452-99.754l-.865-.367l50.206 12.144l-.221 17.259l.049 93.284l.119 25.42c.562 109.632-58.957 176.828-107.749 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.403-2.682l-5.725-2.644l-7.222-3.591l-10.821-5.871l-12.434-7.468l-10.839-7.169c-48.347-33.416-112.698-97.735-117.398-205.151l-.274-12.587V84.09L256.45 42.668l22.726 5.497l-62.978 142.683l48.901 20.757l-80.615 154.048l176.882-172.827z" clip-rule="evenodd"/></svg>
                        ${returnIVDots(poke.id, "sdef")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 19v-2H5.675q-.5 0-.7-.45t.125-.8l6.15-6.9q.3-.35.75-.35t.75.35l6.15 6.9q.325.35.125.8t-.7.45H15v2q0 .425-.288.713T14 20h-4q-.425 0-.712-.288T9 19m3-13l-5.025 5.675q-.15.15-.35.238t-.4.087q-.65 0-.912-.575t.162-1.075l5.775-6.5q.3-.35.75-.35t.75.35l5.775 6.5q.425.5.163 1.075t-.913.575q-.2 0-.4-.075t-.35-.25z"/></svg>
                        ${returnIVDots(poke.id, "spe")}
                    </div>
                    </div>
                    <svg style="height: 3rem; width:3rem; margin-top:0.3rem; color:rgb(110, 105, 105)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q0-3.475 1.45-5.637t4-4.363q-2.55-2.2-4-4.362T5 2v-.25q0-.425.288-.712T6 .75t.713.288T7 1.75V2q0 .275.013.513T7.05 3h9.9q.025-.25.038-.488T17 2v-.25q0-.425.288-.712T18 .75t.713.288t.287.712V2q0 3.475-1.45 5.638t-4 4.362q2.55 2.2 4 4.363T19 22v.25q0 .425-.288.713T18 23.25t-.712-.288T17 22.25V22q0-.275-.012-.513T16.95 21h-9.9q-.025.25-.037.488T7 22v.25q0 .425-.288.713T6 23.25t-.712-.288T5 22.25zM8.45 7h7.1q.325-.475.563-.95T16.55 5h-9.1q.2.55.437 1.038T8.45 7M12 10.7q.5-.425.975-.85t.9-.85h-3.75q.425.425.9.85t.975.85M10.125 15h3.75q-.425-.425-.9-.85T12 13.3q-.5.425-.975.85t-.9.85M7.45 19h9.1q-.2-.55-.437-1.037T15.55 17h-7.1q-.325.475-.562.95T7.45 19"/></svg>
        `

                    document.getElementById("pkmn-edit-division").innerHTML =  `<span>${returnDivisionLetter(returnPkmnDivision(poke))}</span>division`

        if (poke.type.includes(`dragon`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/special3.png)`
        if (poke.type.includes(`steel`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/city.png)`
        if (poke.type.includes(`electric`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/city2.png)`
        if (poke.type.includes(`ghost`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/cave.png)`
        if (poke.type.includes(`normal`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/city2.png)`
        if (poke.type.includes(`fighting`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/city.png)`
        if (poke.type.includes(`bug`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/forest.png)`
        if (poke.type.includes(`dark`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/cavern.png)`
        if (poke.type.includes(`poison`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/cave.png)`
        if (poke.type.includes(`fairy`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/pink.png)`
        if (poke.type.includes(`ground`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/beach.png)`
        if (poke.type.includes(`flying`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/sky.png)`
        if (poke.type.includes(`rock`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/desert.png)`
        if (poke.type.includes(`water`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/ocean.png)`
        if (poke.type.includes(`ice`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/mountain.png)`
        if (poke.type.includes(`grass`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/forest.png)`
        if (poke.type.includes(`fire`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/volcano.png)`
        if (poke.type.includes(`psychic`)) document.getElementById(`pkmn-editor-side-content`).style.backgroundImage = `url(img/bg/mini/space.png)`



     
    
    if (pkmn[el.dataset.pkmnEditor].ability == undefined) pkmn[el.dataset.pkmnEditor].ability = learnPkmnAbility(pkmn[el.dataset.pkmnEditor].id)    
    
    const abilityIcon = `<svg style="margin-right:0.3rem"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.833 10.117L16.937 7.24c-.07-.035-.106-.106-.142-.177l-2.912-5.896c-.498-1.03-1.776-1.457-2.807-.96a2.1 2.1 0 0 0-.959.96L7.205 7.063a.8.8 0 0 1-.142.177l-5.896 2.913c-1.03.497-1.457 1.776-.96 2.806a2.1 2.1 0 0 0 .96.96l5.896 2.876c.07.036.106.107.142.142l2.948 5.896c.497 1.03 1.776 1.457 2.806.96a2.1 2.1 0 0 0 .959-.96l2.877-5.896c.036-.07.107-.142.142-.142l5.896-2.912c1.03-.498 1.457-1.776.96-2.806c-.178-.427-.533-.746-.96-.96m-4.368.427l-2.735 2.38c-.533.497-.924 1.136-1.066 1.847l-.71 3.551c-.036.143-.178.25-.32.214c-.071 0-.107-.036-.142-.107l-2.38-2.735c-.497-.533-1.137-.923-1.847-1.066l-3.552-.71c-.142-.035-.249-.178-.213-.32c0-.07.035-.106.106-.142l2.735-2.38c.533-.497.924-1.136 1.066-1.847l.71-3.551c.036-.143.178-.25.32-.214a.27.27 0 0 1 .142.071l2.38 2.735c.497.533 1.137.924 1.847 1.066l3.552.71c.142.036.249.178.213.32a.4.4 0 0 1-.106.178"/></svg>`
    let abilityTier = ``
    if (ability[ pkmn[el.dataset.pkmnEditor].ability ].rarity==2) abilityTier = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.97 14.607a1.07 1.07 0 0 1-.73 1l-1.88.62a3.9 3.9 0 0 0-1.56 1a4.06 4.06 0 0 0-1 1.57l-.65 1.87a1.14 1.14 0 0 1-.38.52a1.1 1.1 0 0 1-.63.2a1 1 0 0 1-.62-.2a1.07 1.07 0 0 1-.39-.53l-.63-1.88a4 4 0 0 0-2.53-2.54l-1.88-.62a1.13 1.13 0 0 1-.53-.39a1.06 1.06 0 0 1 .54-1.64l1.87-.62a4 4 0 0 0 2.56-2.55l.62-1.86a1 1 0 0 1 .36-.52a1 1 0 0 1 .61-.23a1 1 0 0 1 .64.18a1 1 0 0 1 .41.52l.63 1.9a4 4 0 0 0 2.55 2.56l1.87.65a1 1 0 0 1 .52.38a1.1 1.1 0 0 1 .23.61M12.1 7.656a1 1 0 0 1-.67.93l-1.34.44a2.6 2.6 0 0 0-1 .64a2.7 2.7 0 0 0-.64 1l-.47 1.34a1 1 0 0 1-.34.47a1.05 1.05 0 0 1-.58.19a1 1 0 0 1-.93-.68l-.44-1.34a2.6 2.6 0 0 0-.64-1a2.7 2.7 0 0 0-1-.64l-1.35-.45a.92.92 0 0 1-.48-.36a.93.93 0 0 1-.19-.57a1 1 0 0 1 .19-.58a1 1 0 0 1 .49-.34l1.34-.45a2.7 2.7 0 0 0 1-.64c.29-.277.509-.62.64-1l.45-1.32a1 1 0 0 1 .33-.48a.93.93 0 0 1 .56-.2a.87.87 0 0 1 .58.16a1 1 0 0 1 .38.47l.45 1.37c.135.378.354.72.64 1a2.7 2.7 0 0 0 1 .64l1.35.47a1 1 0 0 1 .65.92z"/></svg>`
    if (ability[ pkmn[el.dataset.pkmnEditor].ability ].rarity==3) abilityTier = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"/></svg>`
    document.getElementById("pkmn-edit-ability").className = ""
    if (ability[ pkmn[el.dataset.pkmnEditor].ability ].rarity==2) document.getElementById("pkmn-edit-ability").classList.add("ability-uncommon")
    if (ability[ pkmn[el.dataset.pkmnEditor].ability ].rarity==3) document.getElementById("pkmn-edit-ability").classList.add("ability-rare")
    document.getElementById("pkmn-edit-ability").dataset.ability = pkmn[el.dataset.pkmnEditor].ability
    document.getElementById("pkmn-edit-ability").innerHTML = `<span>${abilityIcon+format(pkmn[el.dataset.pkmnEditor].ability)}</span>${abilityTier}`


    document.getElementById("pkmn-stats-lore").style.display = "none"
    document.getElementById("pkmn-stats-lore").innerHTML = ""
    if (pkmn[el.dataset.pkmnEditor].lore){
        document.getElementById("pkmn-stats-lore").innerHTML = `<div onclick="if (document.getElementById('pkmn-stats-lore-info').style.maxHeight == '10rem') {document.getElementById('pkmn-stats-lore-info').style.maxHeight = '0rem'; document.getElementById('pkmn-stats-lore-info').style.padding = '0rem'; return} document.getElementById('pkmn-stats-lore-info').style.maxHeight = '10rem'; document.getElementById('pkmn-stats-lore-info').style.padding = '1rem';">Expand Lore
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-opacity="0.25" fill-rule="evenodd" d="M2.455 11.116C3.531 9.234 6.555 5 12 5c5.444 0 8.469 4.234 9.544 6.116c.221.386.331.58.32.868c-.013.288-.143.476-.402.852C20.182 14.694 16.706 19 12 19s-8.182-4.306-9.462-6.164c-.26-.376-.39-.564-.401-.852c-.013-.288.098-.482.318-.868M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="1.2" d="M12 5c-5.444 0-8.469 4.234-9.544 6.116c-.221.386-.331.58-.32.868c.013.288.143.476.402.852C3.818 14.694 7.294 19 12 19s8.182-4.306 9.462-6.164c.26-.376.39-.564.401-.852s-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.2"/></g></svg>
                    </div>
                    <span id="pkmn-stats-lore-info"  > ${pkmn[el.dataset.pkmnEditor].lore}
                    </span>`
         document.getElementById("pkmn-stats-lore").style.display = "flex"
    }


    let signatureIcon = ""
    if (pkmn[el.dataset.pkmnEditor].signature) {
        signatureIcon = `<svg style="color:${returnTypeColor(move[pkmn[el.dataset.pkmnEditor].signature.id].type)}; margin:0 0.25rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>`
        document.getElementById("pkmn-stats-stat-signature").style.display = "flex"
        document.getElementById("pkmn-edit-signature").innerHTML = `${signatureIcon} ${format(pkmn[el.dataset.pkmnEditor].signature.id)}`
        if (pkmn[el.dataset.pkmnEditor].movepool.includes(pkmn[el.dataset.pkmnEditor].signature.id)) document.getElementById("pkmn-edit-signature").innerHTML = `${signatureIcon} ${format(pkmn[el.dataset.pkmnEditor].signature.id)} ✔️`
        document.getElementById("pkmn-edit-signature").dataset.move = pkmn[el.dataset.pkmnEditor].signature.id

    } else document.getElementById("pkmn-stats-stat-signature").style.display = "none"


    let abilityHiddenIcon = `<svg style="margin-right:0.3rem"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-opacity="0.25" fill-rule="evenodd" d="M2.455 11.116C3.531 9.234 6.555 5 12 5c5.444 0 8.469 4.234 9.544 6.116c.221.386.331.58.32.868c-.013.288-.143.476-.402.852C20.182 14.694 16.706 19 12 19s-8.182-4.306-9.462-6.164c-.26-.376-.39-.564-.401-.852c-.013-.288.098-.482.318-.868M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="1.2" d="M12 5c-5.444 0-8.469 4.234-9.544 6.116c-.221.386-.331.58-.32.868c.013.288.143.476.402.852C3.818 14.694 7.294 19 12 19s8.182-4.306 9.462-6.164c.26-.376.39-.564.401-.852s-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.2"/></g></svg>`
    if (pkmn[el.dataset.pkmnEditor].hiddenAbility){
    let abilityHiddenTier = ``
    if (ability[ pkmn[el.dataset.pkmnEditor].hiddenAbility.id ].rarity==2) abilityHiddenTier = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.97 14.607a1.07 1.07 0 0 1-.73 1l-1.88.62a3.9 3.9 0 0 0-1.56 1a4.06 4.06 0 0 0-1 1.57l-.65 1.87a1.14 1.14 0 0 1-.38.52a1.1 1.1 0 0 1-.63.2a1 1 0 0 1-.62-.2a1.07 1.07 0 0 1-.39-.53l-.63-1.88a4 4 0 0 0-2.53-2.54l-1.88-.62a1.13 1.13 0 0 1-.53-.39a1.06 1.06 0 0 1 .54-1.64l1.87-.62a4 4 0 0 0 2.56-2.55l.62-1.86a1 1 0 0 1 .36-.52a1 1 0 0 1 .61-.23a1 1 0 0 1 .64.18a1 1 0 0 1 .41.52l.63 1.9a4 4 0 0 0 2.55 2.56l1.87.65a1 1 0 0 1 .52.38a1.1 1.1 0 0 1 .23.61M12.1 7.656a1 1 0 0 1-.67.93l-1.34.44a2.6 2.6 0 0 0-1 .64a2.7 2.7 0 0 0-.64 1l-.47 1.34a1 1 0 0 1-.34.47a1.05 1.05 0 0 1-.58.19a1 1 0 0 1-.93-.68l-.44-1.34a2.6 2.6 0 0 0-.64-1a2.7 2.7 0 0 0-1-.64l-1.35-.45a.92.92 0 0 1-.48-.36a.93.93 0 0 1-.19-.57a1 1 0 0 1 .19-.58a1 1 0 0 1 .49-.34l1.34-.45a2.7 2.7 0 0 0 1-.64c.29-.277.509-.62.64-1l.45-1.32a1 1 0 0 1 .33-.48a.93.93 0 0 1 .56-.2a.87.87 0 0 1 .58.16a1 1 0 0 1 .38.47l.45 1.37c.135.378.354.72.64 1a2.7 2.7 0 0 0 1 .64l1.35.47a1 1 0 0 1 .65.92z"/></svg>`
    if (ability[ pkmn[el.dataset.pkmnEditor].hiddenAbility.id ].rarity==3) abilityHiddenTier = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"/></svg>`
    document.getElementById("pkmn-edit-ability-hidden").className = ""
    if (ability[ pkmn[el.dataset.pkmnEditor].hiddenAbility.id ].rarity==2) document.getElementById("pkmn-edit-ability-hidden").classList.add("ability-uncommon")
    if (ability[ pkmn[el.dataset.pkmnEditor].hiddenAbility.id ].rarity==3) document.getElementById("pkmn-edit-ability-hidden").classList.add("ability-rare")
    if (pkmn[el.dataset.pkmnEditor].hiddenAbilityUnlocked!=true) abilityHiddenIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity="0.5"/><path fill="currentColor" d="M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"/></svg>`
    if (pkmn[el.dataset.pkmnEditor].hiddenAbilityUnlocked!=true) {document.getElementById("pkmn-edit-ability-hidden").style.filter = "brightness(0.5)"} else {document.getElementById("pkmn-edit-ability-hidden").style.filter = "brightness(1)"}
    document.getElementById("pkmn-edit-ability-hidden").dataset.ability = pkmn[el.dataset.pkmnEditor].hiddenAbility.id
    document.getElementById("pkmn-edit-ability-hidden").innerHTML = `<span>${abilityHiddenIcon+format(pkmn[el.dataset.pkmnEditor].hiddenAbility.id)}</span>${abilityHiddenTier}`
    } else{
    document.getElementById("pkmn-edit-ability-hidden").className = ""
    document.getElementById("pkmn-edit-ability-hidden").innerHTML = `<span>${abilityHiddenIcon}WIP</span>`
    if (document.getElementById("pkmn-edit-ability-hidden").dataset.ability) delete document.getElementById("pkmn-edit-ability-hidden").dataset.ability;
    }




    function updateMoves() {
    for (const key in pkmn[el.dataset.pkmnEditor].moves) {

    let moveId = pkmn[el.dataset.pkmnEditor].moves[key];

    //safefails if your slots magically disapear
    if (pkmn[el.dataset.pkmnEditor].moves.slot1 == undefined) pkmn[el.dataset.pkmnEditor].moves.slot1 = undefined
    if (pkmn[el.dataset.pkmnEditor].moves.slot2 == undefined) pkmn[el.dataset.pkmnEditor].moves.slot2 = undefined
    if (pkmn[el.dataset.pkmnEditor].moves.slot3 == undefined) pkmn[el.dataset.pkmnEditor].moves.slot3 = undefined
    if (pkmn[el.dataset.pkmnEditor].moves.slot4 == undefined) pkmn[el.dataset.pkmnEditor].moves.slot4 = undefined

    
    if (moveId == null) {
            continue
    } else moveId = pkmn[el.dataset.pkmnEditor].moves[key];

    
    const divMove = document.createElement("div") 
    divMove.className = "pkmn-movebox"
    divMove.style.borderColor = returnTypeColor(move[moveId].type)
    //divMove.id = `pkmn-movebox-${e}-team-${i}`


    divMove.addEventListener("click", e => {


    document.querySelectorAll('.highlighted-move').forEach(el => el.classList.remove('highlighted-move'));
  
    divMove.classList.add('highlighted-move')

    moveSlotReplace = key


    })


    let signatureIcon = ""
    if (move[moveId].moveset == undefined) signatureIcon = `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>`
    if (move[moveId].restricted) signatureIcon += `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity="0.5"/><path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"/></svg>`



    divMove.innerHTML = 
    `<div
    class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[ moveId ].type)} "></div><span>`
    + format(moveId) + signatureIcon +
     `</span></span><strong>(${move[moveId].power} BP, ${format(move[moveId].split)})</strong><img style="background: ${returnTypeColor(move[ moveId ].type)} " src="img/icons/${move[ moveId ].type }.svg">`

     divMove.dataset.move = moveId

    document.getElementById(`pkmn-editor-current-moves`).appendChild(divMove)
    }

    if (document.getElementById(`team-menu`).style.display == "flex") updatePreviewTeam()
    }

    updateMoves()

    
    function updateMovepool() {

const movepool = pkmn[el.dataset.pkmnEditor].movepool

const sortedMovepool = movepool
  //safefail
  .filter(m => m != null)
  .sort((a, b) => {
    const powerA = move[a].power ?? 0
    const powerB = move[b].power ?? 0
    return powerB - powerA
  })

    for (const e of sortedMovepool) {

    const moveId = e


    //prevents having moves, but not being equiped (safefail) //fix
    if (pkmn[el.dataset.pkmnEditor].moves.slot1 == undefined && pkmn[el.dataset.pkmnEditor].moves.slot1!= e && pkmn[el.dataset.pkmnEditor].moves.slot2!= e && pkmn[el.dataset.pkmnEditor].moves.slot3!= e && pkmn[el.dataset.pkmnEditor].moves.slot4!= e) pkmn[el.dataset.pkmnEditor].moves.slot1 = e
    if (pkmn[el.dataset.pkmnEditor].moves.slot2 == undefined && pkmn[el.dataset.pkmnEditor].moves.slot1!= e && pkmn[el.dataset.pkmnEditor].moves.slot2!= e && pkmn[el.dataset.pkmnEditor].moves.slot3!= e && pkmn[el.dataset.pkmnEditor].moves.slot4!= e) pkmn[el.dataset.pkmnEditor].moves.slot2 = e
    if (pkmn[el.dataset.pkmnEditor].moves.slot3 == undefined && pkmn[el.dataset.pkmnEditor].moves.slot1!= e && pkmn[el.dataset.pkmnEditor].moves.slot2!= e && pkmn[el.dataset.pkmnEditor].moves.slot3!= e && pkmn[el.dataset.pkmnEditor].moves.slot4!= e) pkmn[el.dataset.pkmnEditor].moves.slot3 = e
    if (pkmn[el.dataset.pkmnEditor].moves.slot4 == undefined && pkmn[el.dataset.pkmnEditor].moves.slot1!= e && pkmn[el.dataset.pkmnEditor].moves.slot2!= e && pkmn[el.dataset.pkmnEditor].moves.slot3!= e && pkmn[el.dataset.pkmnEditor].moves.slot4!= e) pkmn[el.dataset.pkmnEditor].moves.slot4 = e




    const divMove = document.createElement("div") 
    divMove.className = "pkmn-movebox"
    divMove.style.borderColor = returnTypeColor(move[ moveId ].type)

    const movesArray = Object.values(pkmn[el.dataset.pkmnEditor].moves);

    if (movesArray.includes(moveId)) {
    divMove.style.filter = "brightness(0.5)"
    }

    divMove.addEventListener("click", e => {

    

    if (moveSlotReplace === undefined) return
    


    if (movesArray.includes(moveId)) {
    return;
    }




    if (move[moveId].restricted && saved.currentArea != undefined){


        document.getElementById("tooltipTop").style.display = "none"
        document.getElementById("tooltipBottom").style.display = "none"
        document.getElementById("tooltipTitle").innerHTML = `Restricted Move`
        document.getElementById("tooltipMid").innerHTML = `Restricted moves cannot be freely switched during combat`
        openTooltip()
        return
    }


    document.querySelectorAll('.highlighted-move').forEach(el => {


    el.classList.remove('highlighted-move');
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = `moveboxFire 1 0.3s`;
    });

    pkmn[el.dataset.pkmnEditor].moves[moveSlotReplace] = moveId

    document.getElementById(`explore-team`).innerHTML = ""
    setPkmnTeam()
    document.getElementById(`pkmn-editor-current-moves`).innerHTML = ""
    updateMoves()
    document.getElementById(`pkmn-editor-movepool`).innerHTML = ""
    updateMovepool()

    //cancelCurrentPlayerAttack = true
    //moveSlotReplace = key


    })


    let signatureIcon = ""
    if (move[moveId].moveset == undefined) signatureIcon = `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>`
    if (move[moveId].restricted) signatureIcon += `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity="0.5"/><path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"/></svg>`



    divMove.innerHTML = 
    `<div
    class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[ moveId ].type)} "></div><span>`
    + format(moveId) + signatureIcon +
     `</span><strong>(${move[moveId].power} BP, ${format(move[moveId].split)})</strong><img style="background: ${returnTypeColor(move[ moveId ].type)} " src="img/icons/${move[ moveId ].type }.svg">`

     divMove.dataset.move = moveId

    document.getElementById(`pkmn-editor-movepool`).appendChild(divMove)
    }

    }

    updateMovepool()




    }







});


function returnPkmnTypes(id){
    if (pkmn[id].type[1] != undefined) return `<div style="background:${returnTypeColor(pkmn[id].type[0])}">${format(pkmn[id].type[0])}</div><div style="background:${returnTypeColor(pkmn[id].type[1])}">${format(pkmn[id].type[1])}</div>`
    else return `<div style="background:${returnTypeColor(pkmn[id].type[0])}">${format(pkmn[id].type[0])}</div>`
}

function returnStatDots(id, stat){

    const val = pkmn[id].bst[stat];
    const max = 6;

    const filled = Array(val).fill("★ ").join(" ");
    const empty  = Array(max - val).fill("·").join(" ");

    if (val === max) return `<span style="color:#29A1E5">${filled}</span>`;

    return `<span style="color:#29A1E5">${filled}</span><strong style="margin-left: 0.3rem">${empty}</strong>`;
}

function returnIVDots(id, stat){

    const val = Math.min(pkmn[id].ivs[stat],6);
    const max = 6;

    

    const filled = Array(val).fill("★ ").join(" ");
    const empty  = Array(max - val).fill("·").join(" ");

    if (val === max) return `<span style="color:#F4607C">${filled}</span>`;

    return `<span style="color:#F4607C">${filled}</span><strong style="margin-left: 0.3rem">${empty}</strong>`;
}


function returnItemLevel(id, mod) {

    let level;
    if (item[id].got >= 20) level = 5;
    else if (item[id].got >= 15) level = 4;
    else if (item[id].got >= 10) level = 3;
    else if (item[id].got >= 5) level = 2;
    else level = 1;

    if (mod == "left") {
        if (level === 5) return "(max level reached)";

        let nextThreshold;
        if (level === 1) nextThreshold = 5;
        else if (level === 2) nextThreshold = 10;
        else if (level === 3) nextThreshold = 15;
        else if (level === 4) nextThreshold = 20;

        let left = nextThreshold - item[id].got;
        return `(${left} left for next level)`;
    }

    if (mod == "stars") {
        if (level === 1) return `<span style="color:#4fffa7ff">✦</span>✦✦✦✦`;
        else if (level === 2) return `<span style="color:#4fffa7ff">✦✦</span>✦✦✦`;
        else if (level === 3) return `<span style="color:#4fffa7ff">✦✦✦</span>✦✦`;
        else if (level === 4) return `<span style="color:#4fffa7ff">✦✦✦✦</span>✦`;
        else if (level === 5) return `<span style="color:#4fffa7ff">✦✦✦✦✦</span>`;
    }

    return level;
}






function shouldCombatStop(){

    if (document.getElementById(`tooltipBackground`).style.display === "flex") return true
    //if (document.getElementById(`pkmn-editor`).style.display === "flex") return true
    //if (document.getElementById(`team-menu`).style.display === "flex") return true
    //if (document.getElementById(`item-menu`).style.display === "flex") return true
    //if (document.getElementById(`pokedex-menu`).style.display === "flex") return true
    if (document.getElementById(`team-menu`).style.display === "flex") return true
    if (wildLevel===0) return true
    if (wildPkmnHp<0) return true
    if (saved.currentArea === undefined) return true
    return false

}





















/*function gameLoop(now) {
    let delta = now - lastDeltaTime;
    lastDeltaTime = now;

    // Prevents huge leaps
    if (delta > 250) delta = 250;

    accumulator += delta;

    while (accumulator >= STEP) {
        exploreCombatPlayer(); 
        exploreCombatWild(); 
        accumulator -= STEP;
    }

    requestAnimationFrame(gameLoop);
}*/



const STEP = 1000 / 60; 
let lastDeltaTime = performance.now();
let accumulator = 0;
const MAX_STEPS_PER_FRAME = 5000; 

function gameLoop(now) {
    let delta = now - lastDeltaTime;
    lastDeltaTime = now;

    if (delta > 250) delta = 250;

    accumulator += delta;

    let stepsExecuted = 0;

    
    // 🔥 FAST FORWARD AFK
    while (
        (accumulator >= STEP || afkSeconds > 0) &&
        stepsExecuted < MAX_STEPS_PER_FRAME
    ) {

        exploreCombatPlayer();
        exploreCombatWild();

        // consumir tiempo lógico
        if (afkSeconds > 0) {
        if (shouldCombatStop()==false) afkSeconds -= STEP / 1000;
        if (afkSeconds < 0) afkSeconds = 0;
        } else {
            accumulator -= STEP;
        }

        stepsExecuted++;


    }

    requestAnimationFrame(gameLoop);
}








































let exploreActiveMember = 'slot1'
let exploreCombatPlayerTurn = 1
let barProgressPlayer = 0;
let nextMoveBoxPlayer;
let nextMovePlayer;
let moveTimerPlayer; 
let barPlayer;


function exploreCombatPlayer() {

    if (shouldCombatStop()) {
    //    requestAnimationFrame(exploreCombatPlayer)
        return;
    }

    //set parameters once
    if (nextMoveBoxPlayer != document.getElementById(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}`)) nextMoveBoxPlayer = document.getElementById(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}`);
    if (nextMovePlayer != nextMoveBoxPlayer?.dataset?.move) nextMovePlayer = nextMoveBoxPlayer?.dataset?.move;
    if (moveTimerPlayer != move[nextMovePlayer]?.timer) moveTimerPlayer = move[nextMovePlayer]?.timer; 
    if (barPlayer != document.getElementById(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}-bar`)) barPlayer = document.getElementById(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}-bar`);

    //rotation reset
    if (exploreCombatPlayerTurn >= 5){
        exploreCombatPlayerTurn = 1;
        //requestAnimationFrame(exploreCombatPlayer)
        return;
    }

    // if it finds an undefined move
    if (!nextMovePlayer) {
        exploreCombatPlayerTurn++;
        //requestAnimationFrame(exploreCombatPlayer)
        return;
    }




    //override battle timer (debug)
    if (saved.overrideBattleTimer != defaultPlayerMoveTimer && moveTimerPlayer != saved.overrideBattleTimer) moveTimerPlayer = saved.overrideBattleTimer
    

    //abilities
    if (testAbility(`active`, ability.prankster.id) && (move[nextMovePlayer].type == "dark" || move[nextMovePlayer].type == "ghost")) moveTimerPlayer /= 1.5

    if (testAbility(`active`, ability.prankster.id) && testAbility(`active`, ability.gloomilate.id) && move[nextMovePlayer].type == "normal" ) moveTimerPlayer /= 1.5

    if (testAbility(`active`, ability.cacophony.id) && move[nextMovePlayer].affectedBy?.includes(ability.cacophony.id) ) moveTimerPlayer /= 2
    if (testAbility(`active`, ability.dancer.id) && move[nextMovePlayer].affectedBy?.includes(ability.dancer.id) ) moveTimerPlayer /= 2


    //buff modifiers
    if (team[exploreActiveMember].buffs?.paralysis > 0) moveTimerPlayer *=  1.75
    if (team[exploreActiveMember].buffs?.spedown1 > 0) moveTimerPlayer *= 1.5
    if (team[exploreActiveMember].buffs?.spedown2 > 0) moveTimerPlayer *= 1.75
    if (team[exploreActiveMember].buffs?.speup1 > 0) moveTimerPlayer /= 1.5
    if (team[exploreActiveMember].buffs?.speup2 > 0) moveTimerPlayer /= 1.75












    /*if (afkSeconds > 0) { //afk time
        const increment = 100 / (
        (moveTimerPlayer * (Math.pow(0.9, pkmn[team[exploreActiveMember].pkmn.id].bst.spe) * Math.pow(0.95, pkmn[team[exploreActiveMember].pkmn.id].ivs.spe)))
        / (1000 / 60)
        );

        // Cada segundo AFK = 60 "ticks" de avance
        let ticks = afkSeconds * 60;

        // No pasarse del 100%
        const simulate = Math.min(ticks, Math.ceil((100 - barProgressPlayer) / increment));

        barProgressPlayer += simulate * increment;

        // Consumir segundos exactos en función de lo simulado
        afkSeconds -= simulate / 60;
    } else {
        barProgressPlayer += 100 / ((moveTimerPlayer * (Math.pow(0.9, pkmn[team[exploreActiveMember].pkmn.id].bst.spe) * Math.pow(0.95, pkmn[team[exploreActiveMember].pkmn.id].ivs.spe) )     ) / (1000 / 60));
        barPlayer.style.width = `${barProgressPlayer}%`;
    }*/

    if (afkSeconds > 0) { //afk time
        
    } else {
        barPlayer.style.width = `${barProgressPlayer}%`;
    }

    let speedStars = pkmn[team[exploreActiveMember].pkmn.id].bst.spe
    if (areas[saved.currentArea].id == areas.training.id) speedStars = returnDivisionStars(pkmn[team[exploreActiveMember].pkmn.id])

        barProgressPlayer += 100 / ( (moveTimerPlayer * (Math.pow(0.9, speedStars) * Math.pow(0.95, pkmn[team[exploreActiveMember].pkmn.id].ivs.spe) )     ) / (1000 / 60));


    if (barProgressPlayer < 99) {
        //requestAnimationFrame(exploreCombatPlayer)
        return
    } else {

        barProgressPlayer = 0
        if (afkSeconds <= 0) voidAnimation(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}`, "moveboxFire 1 0.3s");
        exploreCombatPlayerTurn++;
        barPlayer.style.width = `0%`;

        //on move execution
        let totalPower = 0
        const attacker = pkmn[ team[exploreActiveMember].pkmn.id ]
        const defender = pkmn[ saved.currentPkmn ]


        


        let nextMove = move[nextMovePlayer]
        if (nextMove.id == move.sketch.id) nextMove =  move[ attacker.moves.slot1  ]
        if (nextMove.id == move.metronome.id) {
            const allMoves = []
            for (const moves in move){
                allMoves.push(move[moves].id)
            }

            const selectedMove = arrayPick(allMoves,1)
            console.info(`Metronome casts: `+format(selectedMove))
            nextMove =  move[ selectedMove  ]
        } 
        if (nextMove.id == move.meFirst.id) nextMove =  move[ document?.getElementById(`pkmn-movebox-wild-1`).dataset.move  ]


        if (nextMove.castEffect) nextMove.castEffect()


        let movePower = nextMove.power


        if (nextMove.powerMod) movePower *= nextMove.powerMod()




        //abilities
        if (testAbility(`active`, ability.technician.id) && movePower<=60 ) movePower *= 1.5


        let multihit = 1
        if (nextMove.multihit) multihit = random(nextMove.multihit[0], nextMove.multihit[1])
        if (nextMove.multihit && testAbility(`active`, ability.skillLink.id)) multihit = nextMove.multihit[1]
        movePower *= multihit


        if (nextMove.id == move.mimic.id) {
            nextMove =  move[ document?.getElementById(`pkmn-movebox-wild-1`).dataset.move  ]
            movePower*=2
        }



        if (testAbility(`active`, ability.ironFist.id) && nextMove.affectedBy?.includes(ability.ironFist.id) ) movePower *= 1.5
        if (testAbility(`active`, ability.strongJaw.id) && nextMove.affectedBy?.includes(ability.strongJaw.id) ) movePower *= 2
        if (testAbility(`active`, ability.toughClaws.id) && nextMove.affectedBy?.includes(ability.toughClaws.id) ) movePower *= 2
        if (testAbility(`active`, ability.sharpness.id) && nextMove.affectedBy?.includes(ability.sharpness.id) ) movePower *= 1.5
        if (testAbility(`active`, ability.megaLauncher.id) && nextMove.affectedBy?.includes(ability.megaLauncher.id) ) movePower *= 1.5
        if (testAbility(`active`, ability.metalhead.id) && nextMove.affectedBy?.includes(ability.metalhead.id) ) movePower *= 1.5


        
        

        if (nextMove.split == 'physical') {
            totalPower = 
            ( movePower + Math.max(0, ( (attacker.bst.atk * 30) * Math.pow(1.1, attacker.ivs.atk) ) - (defender.bst.def * 30) )  )
            * ( 1+(attacker.level * 0.1) )        
            * 1;
            
            if (areas[saved.currentArea].id == areas.training.id){

            totalPower = 
            ( movePower + Math.max(0, ( (returnDivisionStars(attacker, "atk") * 30) * Math.pow(1.1, attacker.ivs.atk) ) - ( returnDivisionStars(defender) * 30) )  )
            * ( 1+(attacker.level * 0.1) )        
            * 1;

            }

        }


        if (nextMove.split == 'special') {
            totalPower = 
            ( movePower +  Math.max(0, ( (attacker.bst.satk * 30) * Math.pow(1.1, attacker.ivs.satk) ) - (defender.bst.sdef * 30) )  )
            * ( 1+(attacker.level * 0.1) )         
            * 1;
            
            if (areas[saved.currentArea].id == areas.training.id){

            totalPower = 
            ( movePower + Math.max(0, ( (returnDivisionStars(attacker, "satk") * 30) * Math.pow(1.1, attacker.ivs.atk) ) - ( returnDivisionStars(defender) * 30) )  )
            * ( 1+(attacker.level * 0.1) )        
            * 1;

            }
            
        }


        //buffs
        if (nextMove.split == 'special') {
            if (team[exploreActiveMember].buffs?.satkup1 > 0) totalPower *=1.5
            if (team[exploreActiveMember].buffs?.satkup2 > 0) totalPower *=2

            if (team[exploreActiveMember].buffs?.satkdown1 > 0) totalPower /=1.5
            if (team[exploreActiveMember].buffs?.satkdown2 > 0) totalPower /=2

            if (team[exploreActiveMember].buffs?.poisoned > 0 && !testAbility(`active`, ability.guts.id) ) totalPower /=1.5


         if ( testAbility(`active`,  ability.unaware.id) == false ){

            if (wildBuffs.sdefup1 > 0) totalPower /=1.5
            if (wildBuffs.sdefup2 > 0) totalPower /=2

            if (wildBuffs.sdefdown1 > 0) totalPower *=1.5
            if (wildBuffs.sdefdown2 > 0) totalPower *=2         

         }



        }

        if (nextMove.split == 'physical') {
            if (team[exploreActiveMember].buffs?.atkup1 > 0) totalPower *=1.5
            if (team[exploreActiveMember].buffs?.atkup2 > 0) totalPower *=2

            if (team[exploreActiveMember].buffs?.atkdown1 > 0) totalPower /=1.5
            if (team[exploreActiveMember].buffs?.atkdown2 > 0) totalPower /=2

            if (team[exploreActiveMember].buffs?.burn > 0 && !testAbility(`active`, ability.guts.id) ) totalPower /=1.5

         if ( testAbility(`active`,  ability.unaware.id ) == false ){

            if (wildBuffs.defup1 > 0) totalPower /=1.5
            if (wildBuffs.defup2 > 0) totalPower /=2

            if (wildBuffs.defdown1 > 0) totalPower *=1.5
            if (wildBuffs.defdown2 > 0) totalPower *=2



         }

        }


        let moveType = nextMove.type
        if (testAbility(`active`, ability.normalize.id)) {moveType = "normal"; totalPower*=1.2}

        if (testAbility(`active`, ability.ferrilate.id) && moveType=="normal") {moveType = "steel"; totalPower*=1.3}
        if (testAbility(`active`, ability.glaciate.id) && moveType=="normal") {moveType = "ice"; totalPower*=1.3}
        if (testAbility(`active`, ability.terralate.id) && moveType=="normal") {moveType = "ground"; totalPower*=1.3}
        if (testAbility(`active`, ability.toxilate.id) && moveType=="normal") {moveType = "poison"; totalPower*=1.3}
        if (testAbility(`active`, ability.hydrolate.id) && moveType=="normal") {moveType = "water"; totalPower*=1.3}
        if (testAbility(`active`, ability.pyrolate.id) && moveType=="normal") {moveType = "fire"; totalPower*=1.3}
        if (testAbility(`active`, ability.chrysilate.id) && moveType=="normal") {moveType = "bug"; totalPower*=1.3}
        if (testAbility(`active`, ability.galvanize.id) && moveType=="normal") {moveType = "electric"; totalPower*=1.3}
        if (testAbility(`active`, ability.gloomilate.id) && moveType=="normal") {moveType = "dark"; totalPower*=1.3}
        if (testAbility(`active`, ability.espilate.id) && moveType=="normal") {moveType = "psychic"; totalPower*=1.3}
        if (testAbility(`active`, ability.aerilate.id) && moveType=="normal") {moveType = "flying"; totalPower*=1.3}
        if (testAbility(`active`, ability.pixilate.id) && moveType=="normal") {moveType = "fairy"; totalPower*=1.3}
        if (testAbility(`active`, ability.verdify.id) && moveType=="normal") {moveType = "grass"; totalPower*=1.3}



        if (testAbility(`active`, ability.protean.id)) pkmn[team[exploreActiveMember].pkmn.id].type = [moveType]


        //stab
        let stabBonus = 1.5
        if (attacker.type.includes(moveType) && testAbility(`active`,  ability.adaptability.id ) ) stabBonus = 1.7

        if (attacker.type.includes(moveType)) totalPower *=stabBonus
        //type effectiveness
        let typeMultiplier = typeEffectiveness(moveType, pkmn[saved.currentPkmn].type)

        if ( testAbility(`active`, ability.scrappy.id) && pkmn[saved.currentPkmn].type.includes("ghost") && (moveType == 'fighting' || moveType == 'normal')  ) typeMultiplier=1
        if ( testAbility(`active`, ability.tintedLens.id) && (typeMultiplier == 0.5 || typeMultiplier == 0.25) ) typeMultiplier=1
        if ( testAbility(`active`, ability.noGuard.id) && typeMultiplier == 0 ) typeMultiplier=1

        if (defender.temporalType) typeMultiplier *= typeEffectiveness(moveType, defender.temporalType)

        //this wont exactly do what the move says it does, but eh, close enough
        if ( nextMove.id == move.freezeDry.id && pkmn[saved.currentPkmn].type=="water" && typeEffectiveness("water", pkmn[saved.currentPkmn].type)==1 ) typeMultiplier+= 0.5



        totalPower *= typeMultiplier



        //items
        if (team[exploreActiveMember].item == item.blackBelt.id && moveType == 'fighting') totalPower *= (item.blackBelt.power() /100) +1
        if (team[exploreActiveMember].item == item.blackGlasses.id && moveType == 'dark') totalPower *= (item.blackGlasses.power() /100) +1
        if (team[exploreActiveMember].item == item.charcoal.id && moveType == 'fire') totalPower *= (item.charcoal.power() /100) +1
        if (team[exploreActiveMember].item == item.dragonFang.id && moveType == 'dragon') totalPower *= (item.dragonFang.power() /100) +1
        if (team[exploreActiveMember].item == item.fairyFeather.id && moveType == 'fairy') totalPower *= (item.fairyFeather.power() /100) +1
        if (team[exploreActiveMember].item == item.hardStone.id && moveType == 'rock') totalPower *= (item.hardStone.power() /100) +1
        if (team[exploreActiveMember].item == item.magnet.id && moveType == 'electric') totalPower *= (item.magnet.power() /100) +1
        if (team[exploreActiveMember].item == item.metalCoat.id && moveType == 'steel') totalPower *= (item.metalCoat.power() /100) +1
        if (team[exploreActiveMember].item == item.miracleSeed.id && moveType == 'grass') totalPower *= (item.miracleSeed.power() /100) +1
        if (team[exploreActiveMember].item == item.mysticWater.id && moveType == 'water') totalPower *= (item.mysticWater.power() /100) +1
        if (team[exploreActiveMember].item == item.neverMeltIce.id && moveType == 'ice') totalPower *= (item.neverMeltIce.power() /100) +1
        if (team[exploreActiveMember].item == item.poisonBarb.id && moveType == 'poison') totalPower *= (item.poisonBarb.power() /100) +1
        if (team[exploreActiveMember].item == item.sharpBeak.id && moveType == 'flying') totalPower *= (item.sharpBeak.power() /100) +1
        if (team[exploreActiveMember].item == item.silkScarf.id && moveType == 'normal') totalPower *= (item.silkScarf.power() /100) +1
        if (team[exploreActiveMember].item == item.silverPowder.id && moveType == 'bug') totalPower *= (item.silverPowder.power() /100) +1
        if (team[exploreActiveMember].item == item.softSand.id && moveType == 'ground') totalPower *= (item.softSand.power() /100) +1
        if (team[exploreActiveMember].item == item.spellTag.id && moveType == 'ghost') totalPower *= (item.spellTag.power() /100) +1
        if (team[exploreActiveMember].item == item.twistedSpoon.id && moveType == 'psychic') totalPower *= (item.twistedSpoon.power() /100) +1
                 
        if (team[exploreActiveMember].item == item.lightClay.id) totalPower *= (item.lightClay.power() /100) +1
        
        if (team[exploreActiveMember].item == item.flameOrb.id && nextMove.split == 'special') totalPower *= item.flameOrb.power()
        if (team[exploreActiveMember].item == item.toxicOrb.id && nextMove.split == 'physical') totalPower *= item.toxicOrb.power()

        if (team[exploreActiveMember].item == item.choiceSpecs.id && nextMove.split == 'special') totalPower *= item.choiceSpecs.power()
        if (team[exploreActiveMember].item == item.choiceBand.id && nextMove.split == 'physical') totalPower *= item.choiceBand.power()
        
        if (team[exploreActiveMember].item == item.lifeOrb.id) totalPower *= item.lifeOrb.power()

        //mega items //really bad implementation!
        if (team[exploreActiveMember].item == item.glalitite.id && team[exploreActiveMember].pkmn.id == pkmn.megaGlalie.id) totalPower *= item.glalitite.power()
        if (team[exploreActiveMember].item == item.absolite.id && team[exploreActiveMember].pkmn.id == pkmn.megaAbsol.id) totalPower *= item.absolite.power()
        if (team[exploreActiveMember].item == item.aerodactylite.id && team[exploreActiveMember].pkmn.id == pkmn.megaAerodactyl.id) totalPower *= item.aerodactylite.power()
        if (team[exploreActiveMember].item == item.aggronite.id && team[exploreActiveMember].pkmn.id == pkmn.megaAggron.id) totalPower *= item.aggronite.power()
        if (team[exploreActiveMember].item == item.alakazite.id && team[exploreActiveMember].pkmn.id == pkmn.megaAlakazam.id) totalPower *= item.alakazite.power()
        if (team[exploreActiveMember].item == item.altarianite.id && team[exploreActiveMember].pkmn.id == pkmn.megaAltaria.id) totalPower *= item.altarianite.power()
        if (team[exploreActiveMember].item == item.ampharosite.id && team[exploreActiveMember].pkmn.id == pkmn.megaAmpharos.id) totalPower *= item.ampharosite.power()
        if (team[exploreActiveMember].item == item.audinite.id && team[exploreActiveMember].pkmn.id == pkmn.megaAudino.id) totalPower *= item.audinite.power()
        if (team[exploreActiveMember].item == item.banettite.id && team[exploreActiveMember].pkmn.id == pkmn.megaBanette.id) totalPower *= item.banettite.power()
        if (team[exploreActiveMember].item == item.beedrillite.id && team[exploreActiveMember].pkmn.id == pkmn.megaBeedrill.id) totalPower *= item.beedrillite.power()
        if (team[exploreActiveMember].item == item.blastoisinite.id && team[exploreActiveMember].pkmn.id == pkmn.megaBlastoise.id) totalPower *= item.blastoisinite.power()
        if (team[exploreActiveMember].item == item.blazikenite.id && team[exploreActiveMember].pkmn.id == pkmn.megaBlaziken.id) totalPower *= item.blazikenite.power()
        if (team[exploreActiveMember].item == item.cameruptite.id && team[exploreActiveMember].pkmn.id == pkmn.megaCamerupt.id) totalPower *= item.cameruptite.power()
        if (team[exploreActiveMember].item == item.charizarditeX.id && team[exploreActiveMember].pkmn.id == pkmn.megaCharizardX.id) totalPower *= item.charizarditeX.power()
        if (team[exploreActiveMember].item == item.charizarditeY.id && team[exploreActiveMember].pkmn.id == pkmn.megaCharizardY.id) totalPower *= item.charizarditeY.power()
        if (team[exploreActiveMember].item == item.diancite.id && team[exploreActiveMember].pkmn.id == pkmn.megaDiancie.id) totalPower *= item.diancite.power()
        if (team[exploreActiveMember].item == item.galladite.id && team[exploreActiveMember].pkmn.id == pkmn.megaGallade.id) totalPower *= item.galladite.power()
        if (team[exploreActiveMember].item == item.garchompite.id && team[exploreActiveMember].pkmn.id == pkmn.megaGarchomp.id) totalPower *= item.garchompite.power()
        if (team[exploreActiveMember].item == item.gardevoirite.id && team[exploreActiveMember].pkmn.id == pkmn.megaGardevoir.id) totalPower *= item.gardevoirite.power()
        if (team[exploreActiveMember].item == item.gengarite.id && team[exploreActiveMember].pkmn.id == pkmn.megaGengar.id) totalPower *= item.gengarite.power()
        if (team[exploreActiveMember].item == item.gyaradosite.id && team[exploreActiveMember].pkmn.id == pkmn.megaGyarados.id) totalPower *= item.gyaradosite.power()
        if (team[exploreActiveMember].item == item.heracronite.id && team[exploreActiveMember].pkmn.id == pkmn.megaHeracross.id) totalPower *= item.heracronite.power()
        if (team[exploreActiveMember].item == item.houndoominite.id && team[exploreActiveMember].pkmn.id == pkmn.megaHoundoom.id) totalPower *= item.houndoominite.power()
        if (team[exploreActiveMember].item == item.kangaskhanite.id && team[exploreActiveMember].pkmn.id == pkmn.megaKangaskhan.id) totalPower *= item.kangaskhanite.power()
        if (team[exploreActiveMember].item == item.lopunnite.id && team[exploreActiveMember].pkmn.id == pkmn.megaLopunny.id) totalPower *= item.lopunnite.power()
        if (team[exploreActiveMember].item == item.lucarionite.id && team[exploreActiveMember].pkmn.id == pkmn.megaLucario.id) totalPower *= item.lucarionite.power()
        if (team[exploreActiveMember].item == item.manectite.id && team[exploreActiveMember].pkmn.id == pkmn.megaManectric.id) totalPower *= item.manectite.power()
        if (team[exploreActiveMember].item == item.mawilite.id && team[exploreActiveMember].pkmn.id == pkmn.megaMawile.id) totalPower *= item.mawilite.power()
        if (team[exploreActiveMember].item == item.medichamite.id && team[exploreActiveMember].pkmn.id == pkmn.megaMedicham.id) totalPower *= item.medichamite.power()
        if (team[exploreActiveMember].item == item.metagrossite.id && team[exploreActiveMember].pkmn.id == pkmn.megaMetagross.id) totalPower *= item.metagrossite.power()
        if (team[exploreActiveMember].item == item.mewtwoniteX.id && team[exploreActiveMember].pkmn.id == pkmn.megaMewtwoX.id) totalPower *= item.mewtwoniteX.power()
        if (team[exploreActiveMember].item == item.mewtwoniteY.id && team[exploreActiveMember].pkmn.id == pkmn.megaMewtwoY.id) totalPower *= item.mewtwoniteY.power()
        if (team[exploreActiveMember].item == item.pidgeotite.id && team[exploreActiveMember].pkmn.id == pkmn.megaPidgeot.id) totalPower *= item.pidgeotite.power()
        if (team[exploreActiveMember].item == item.pinsirite.id && team[exploreActiveMember].pkmn.id == pkmn.megaPinsir.id) totalPower *= item.pinsirite.power()
        if (team[exploreActiveMember].item == item.sablenite.id && team[exploreActiveMember].pkmn.id == pkmn.megaSableye.id) totalPower *= item.sablenite.power()
        if (team[exploreActiveMember].item == item.abomasite.id && team[exploreActiveMember].pkmn.id == pkmn.megaAbomasnow.id) totalPower *= item.abomasite.power()
        if (team[exploreActiveMember].item == item.salamencite.id && team[exploreActiveMember].pkmn.id == pkmn.megaSalamence.id) totalPower *= item.salamencite.power()
        if (team[exploreActiveMember].item == item.sceptilite.id && team[exploreActiveMember].pkmn.id == pkmn.megaSceptile.id) totalPower *= item.sceptilite.power()
        if (team[exploreActiveMember].item == item.scizorite.id && team[exploreActiveMember].pkmn.id == pkmn.megaScizor.id) totalPower *= item.scizorite.power()
        if (team[exploreActiveMember].item == item.sharpedonite.id && team[exploreActiveMember].pkmn.id == pkmn.megaSharpedo.id) totalPower *= item.sharpedonite.power()
        if (team[exploreActiveMember].item == item.slowbronite.id && team[exploreActiveMember].pkmn.id == pkmn.megaSlowbro.id) totalPower *= item.slowbronite.power()
        if (team[exploreActiveMember].item == item.steelixite.id && team[exploreActiveMember].pkmn.id == pkmn.megaSteelix.id) totalPower *= item.steelixite.power()
        if (team[exploreActiveMember].item == item.swampertite.id && team[exploreActiveMember].pkmn.id == pkmn.megaSwampert.id) totalPower *= item.swampertite.power()
        if (team[exploreActiveMember].item == item.tyranitarite.id && team[exploreActiveMember].pkmn.id == pkmn.megaTyranitar.id) totalPower *= item.tyranitarite.power()
        if (team[exploreActiveMember].item == item.venusaurite.id && team[exploreActiveMember].pkmn.id == pkmn.megaVenusaur.id) totalPower *= item.venusaurite.power()

        if (nextMove.power === 0) totalPower = 0

        if (areas[saved.currentArea].id != areas.training.id){
        if (team[exploreActiveMember].buffs?.confused>0 && rng(0.5)) totalPower = 0
        if (team[exploreActiveMember].buffs?.paralysis>0 && rng(0.25)) totalPower = 0
        if (team[exploreActiveMember].buffs?.freeze>0 ) totalPower = 0
        if (team[exploreActiveMember].buffs?.sleep>0 ) totalPower = 0
        }


        //abilities
        const below50hp = pkmn[team[exploreActiveMember].pkmn.id]?.playerHp < (pkmn[team[exploreActiveMember].pkmn.id]?.playerHpMax * 0.5);
        if (below50hp && testAbility(`active`, ability.overgrow.id) && moveType == 'grass' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.blaze.id) && moveType == 'fire' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.swarm.id) && moveType == 'bug' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.torrent.id) && moveType == 'water' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.bastion.id) && moveType == 'steel' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.average.id) && moveType == 'normal' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.resolve.id) && moveType == 'fighting' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.mistify.id) && moveType == 'psychic' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.hexerei.id) && moveType == 'ghost' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.glimmer.id) && moveType == 'fairy' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.skyward.id) && moveType == 'flying' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.draconic.id) && moveType == 'dragon' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.noxious.id) && moveType == 'poison' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.solid.id) && moveType == 'rock' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.rime.id) && moveType == 'ice' ) totalPower *= 1.3
        if (below50hp && testAbility(`active`, ability.voltage.id) && moveType == 'electric' ) totalPower *= 1.3

        if ( testAbility(`active`, ability.rivalry.id) && pkmn[saved.currentPkmn].type.some(t => pkmn[team[exploreActiveMember].pkmn.id].type.includes(t)) ) totalPower *= 1.5
        
        if (testAbility(`active`, ability.sheerForce.id) &&  nextMove.hitEffect) totalPower *= 1.2
        
        if (testAbility(`active`, ability.hugePower.id) && nextMove.split == 'physical') totalPower *= 2

        if (testAbility(`active`, ability.toxicBoost.id) && team[exploreActiveMember].buffs?.poisoned>0 ) totalPower *= 1.2
        if (testAbility(`active`, ability.flareBoost.id) && team[exploreActiveMember].buffs?.burn>0 ) totalPower *= 1.2

        if (team[exploreActiveMember].item == undefined && testAbility(`active`,  ability.unburden.id )) team[exploreActiveMember].buffs.speup1 = 10


        if (testAbility(`active`, ability.supremeOverlord.id)) {
            let overlordBoost = 1
            for (const member in team) {
                if (team[member].pkmn==undefined) continue
                if (pkmn[team[member].pkmn.id].playerHp<=0) overlordBoost += 0.1
            }
            totalPower *= overlordBoost
        }

        if (testAbility(`active`, ability.gorillaTactics.id)) totalPower *= 1.2


        if ( ( testAbility(`active`,  ability.quarkDrive.id) && saved.weatherTimer>0 && saved.weather=="electricTerrain" )
        || ( testAbility(`active`,  ability.protosynthesis.id) && saved.weatherTimer>0 && saved.weather=="sunny" ) ){
            if (returnHighestStat(team[exploreActiveMember].pkmn)=="spe") moveBuff("wild",'speup1',"self")
            if (returnHighestStat(team[exploreActiveMember].pkmn)=="atk") moveBuff("wild",'atkup1',"self")
            if (returnHighestStat(team[exploreActiveMember].pkmn)=="def") moveBuff("wild",'defup1',"self")
            if (returnHighestStat(team[exploreActiveMember].pkmn)=="satk") moveBuff("wild",'satkup1',"self")
            if (returnHighestStat(team[exploreActiveMember].pkmn)=="sdef") moveBuff("wild",'sdefup1',"self")
        }



        //weather
        
        if (saved.weatherTimer>0 && saved.weather=="sunny" && moveType == 'fire') totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="sunny" && moveType == 'water') totalPower /= 1.5
        if (saved.weatherTimer>0 && saved.weather=="rainy" && moveType == 'water') totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="rainy" && moveType == 'fairy') totalPower /= 1.5
        if (saved.weatherTimer>0 && saved.weather=="sandstorm" && (moveType == 'rock' || moveType == 'ground') ) totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="hail" &&  moveType == 'ice' ) totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="foggy" && (moveType == 'ghost' || moveType == 'dark') ) totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="electricTerrain" && (moveType == 'electric' || moveType == 'steel') ) totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="mistyTerrain" && (moveType == 'fairy' || moveType == 'psychic') ) totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="grassyTerrain" && (moveType == 'grass' || moveType == 'bug') ) totalPower *= 1.75
        


        if (saved.weatherTimer>0){
        if (testAbility("active", ability.chlorophyll.id)  && saved.weather == "sunny") {moveBuff("wild",'speup1',"self")}
        if (testAbility("active", ability.slushRush.id ) && saved.weather == "hail") {moveBuff("wild",'speup1',"self")}
        if (testAbility("active", ability.swiftSwim.id ) && saved.weather == "rainy") {moveBuff("wild",'speup1',"self")}
        if (testAbility("active", ability.sandRush.id)  && saved.weather == "sandstorm") {moveBuff("wild",'speup1',"self")}

        if (testAbility("active", ability.solarPower.id ) && saved.weather == "sunny") {moveBuff("wild",'satkup1',"self")}
        if (testAbility("active", ability.iceBody.id ) && saved.weather == "hail") {moveBuff("wild",'defup1',"self")}
        if (testAbility("active", ability.rainDish.id ) && saved.weather == "rainy") {moveBuff("wild",'satkup1',"self")}
        if (testAbility("active", ability.sandForce.id ) && saved.weather == "sandstorm") {moveBuff("wild",'atkup1',"self")}
        }

 
        const statusBuffs = ['burn', 'freeze', 'confused', 'paralysis', 'poisoned', 'sleep'];

        const hasAnyStatus = statusBuffs.some(
        buff => team[exploreActiveMember].buffs[buff] > 0
        );

        if (hasAnyStatus) {
        if (testAbility("active",  ability.marvelScale.id) ) moveBuff("wild",'defup1',"self")
        if (testAbility("active",  ability.livingShield.id) ) moveBuff("wild",'sdefup1',"self")
        if (testAbility("active",  ability.guts.id) ) moveBuff("wild",'atkup1',"self")
        if (testAbility("active",  ability.brittleArmor.id) ) moveBuff("wild",'satkup1',"self")
        }







        if (attacker.shiny==true) totalPower *= 1.15



        wildPkmnHp -= totalPower;
        if (testAbility(`active`, ability.parentalBond.id)) wildPkmnHp -= totalPower/2;
       



        if ( testAbility(`active`,  ability.magicGuard.id ) == false ){


        let dotDamage = 50
        if (areas[saved.currentArea]?.trainer || saved.currentArea == areas.frontierSpiralingTower.id) dotDamage = 12


        if (areas[saved.currentArea].id != areas.training.id) {


        if (team[exploreActiveMember].buffs?.burn>0 && !testAbility(`active`, ability.flareBoost.id)) {attacker.playerHp -=  attacker.playerHpMax/dotDamage;}
        if (team[exploreActiveMember].buffs?.poisoned>0  && !testAbility(`active`, ability.toxicBoost.id)) {attacker.playerHp -=  attacker.playerHpMax/dotDamage;}


        }

        if (team[exploreActiveMember].item == item.lifeOrb.id) {attacker.playerHp -=  attacker.playerHpMax/10;}

        }


                
        for (const i in team[exploreActiveMember].buffs){
            if (team[exploreActiveMember].buffs[i]>0) team[exploreActiveMember].buffs[i] -= 1
        }

        saved.weatherTimer--
        saved.weatherCooldown--
            

        for (let i = 0; i < multihit; i++) {

        if (!(team[exploreActiveMember].buffs?.freeze>0 || team[exploreActiveMember].buffs?.sleep>0)){
        if (testAbility(`active`,  ability.sheerForce.id ) == false || ( testAbility(`active`, ability.sheerForce.id ) && (totalPower==0 || move.unaffectedBySheerForce==true)  )){
        if (nextMove.hitEffect && (typeEffectiveness(moveType, pkmn[saved.currentPkmn].type)!= 0 || totalPower==0 || testAbility(`active`,  ability.noGuard.id ))) {
            nextMove.hitEffect("wild")
        }
        }
        }
        

        }

        if (testAbility(`active`, ability.sereneGrace.id) && nextMove.hitEffect) nextMove.hitEffect("wild")
        if (testAbility(`active`, ability.parentalBond.id) && nextMove.hitEffect) nextMove.hitEffect("wild")


        updateTeamBuffs()
        updateWildBuffs()
        updateWildPkmn();


        const fractionDamage = ( 100 + ((attacker.bst.hp * 30) * Math.pow(1.15, attacker.ivs.hp)) + ((attacker.bst.def * 15) * Math.pow(1.15, attacker.ivs.def)) + ((attacker.bst.sdef * 15) * Math.pow(1.15, attacker.ivs.sdef)) )
        let fatigueDamage = attacker.playerHpMax/fractionDamage

        if (areas[saved.currentArea]?.trainer || areas[saved.currentArea]?.type == "frontier") fatigueDamage = 0
        if (saved.currentArea == areas.training.id) fatigueDamage = 0


        attacker.playerHp -= fatigueDamage
        updateTeamPkmn()



    }

 //requestAnimationFrame(exploreCombatPlayer)
}


function typeEffectiveness(attacking, defending) {
  const effective = 1.5, resist = 0.5;
  const chart = {
    normal:  { rock: resist, ghost: 0, steel: resist },
    fire:    { fire: resist, water: resist, grass: effective, ice: effective, bug: effective, rock: resist, dragon: resist, steel: effective },
    water:   { fire: effective, water: resist, grass: resist, ground: effective, rock: effective, dragon: resist },
    electric:{ water: effective, electric: resist, grass: resist, ground: 0, flying: effective, dragon: resist },
    grass:   { fire: resist, water: effective, grass: resist, poison: resist, ground: effective, flying: resist, bug: resist, rock: effective, dragon: resist, steel: resist },
    ice:     { fire: resist, water: resist, grass: effective, ice: resist, ground: effective, flying: effective, dragon: effective, steel: resist },
    fighting:{ normal: effective, ice: effective, rock: effective, dark: effective, steel: effective, poison: resist, flying: resist, psychic: resist, bug: resist, fairy: resist, ghost: 0 },
    poison:  { grass: effective, fairy: effective, poison: resist, ground: resist, rock: resist, ghost: resist, steel: 0 },
    ground:  { fire: effective, electric: effective, grass: resist, poison: effective, flying: 0, bug: resist, rock: effective, steel: effective },
    flying:  { electric: resist, grass: effective, fighting: effective, bug: effective, rock: resist, steel: resist },
    psychic: { fighting: effective, poison: effective, psychic: resist, dark: 0, steel: resist },
    bug:     { fire: resist, grass: effective, fighting: resist, poison: resist, flying: resist, psychic: effective, ghost: resist, dark: effective, steel: resist, fairy: resist },
    rock:    { fire: effective, ice: effective, fighting: resist, ground: resist, flying: effective, bug: effective, steel: resist },
    ghost:   { normal: 0, psychic: effective, ghost: effective, dark: resist },
    dragon:  { dragon: effective, steel: resist, fairy: 0 },
    dark:    { fighting: resist, psychic: effective, ghost: effective, dark: resist, fairy: resist },
    steel:   { fire: resist, water: resist, electric: resist, ice: effective, rock: effective, steel: resist, fairy: effective },
    fairy:   { fire: resist, fighting: effective, poison: resist, dragon: effective, dark: effective, steel: resist }
  };

  const result = defending.reduce((mul, defType) => mul * (chart[attacking]?.[defType] ?? 1), 1);
  if ((saved.currentArea == areas.frontierSpiralingTower.id || saved.currentArea == areas.training.id) && result==0) return 0.5 

  return result
}



function typeWeak(myType1, myType2 = null, ranking = 1) { //ts was made by gpt ask him about it 
  const allTypes = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice', 
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];
  
  const myTypes = myType2 ? [myType1, myType2] : [myType1];
  
  const typeScores = [];
  
  for (const enemyType of allTypes) {
    const damages = myTypes.map(type => typeEffectiveness(type, [enemyType]));
    const avgDamage = damages.reduce((a, b) => a + b, 0) / damages.length;
    const maxDamage = Math.max(...damages);
    const minDamage = Math.min(...damages);
    
    const enemyDamageToMe = typeEffectiveness(enemyType, myTypes);
    
    let score = 0;
    
    if (minDamage <= 0.5) {
      score -= 100; 
    }
    
    if (avgDamage === 0) {
      score -= 2000;
    } else if (maxDamage >= 1.5) {
      score += 150 * avgDamage; 
    } else if (avgDamage === 1) {
      score += 100;
    } else {
      score += 50 * avgDamage;
    }
    
    if (enemyDamageToMe === 0) {
      score += 200;
    } else if (enemyDamageToMe <= 0.5) {
      score += 150;
    } else if (enemyDamageToMe === 1) {
      score += 50;
    } else if (enemyDamageToMe >= 1.5) {
      score -= 150;
    }
    
    typeScores.push({
      type: enemyType,
      score: score,
      avgDamage: avgDamage,
      maxDamage: maxDamage,
      minDamage: minDamage,
      defensiveMultiplier: enemyDamageToMe
    });
  }
  
  typeScores.sort((a, b) => b.score - a.score);
  
  const index = ranking - 1;
  if (index >= 0 && index < typeScores.length) {
    return typeScores[index].type;
  }
  
  return null;
}


function returnTypeMultipliers(pkmn) {
    const types = [
        "normal","fire","water","electric","grass","ice","fighting","poison",
        "ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"
    ];

    //array for sorting
    const multipliers = types.map(attackingType => {
        return {
            type: attackingType,
            multiplier: typeEffectiveness(attackingType, pkmn.type)
        };
    });

    multipliers.sort((a, b) => b.multiplier - a.multiplier);

    return multipliers.map(({type, multiplier}) => {
        if(multiplier === 1) return ''; //ignores neutral
        const color = returnTypeColor(type);
        return `<div style="
            background-color:${color};
            color:#fff;
            padding:4px 8px;
            margin:2px;
            border-radius:4px;
            display:inline-block;
        ">
            ${type} x${multiplier}
        </div>`;
    }).join('');
}



/*function exploreCombatWild() { //deprecated

    //if (saved.currentArea == undefined) return


    let nextMoveBox = document?.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}`);
    let nextMove = nextMoveBox?.dataset?.move;

    if (!nextMove && (saved.currentArea != undefined)) {
        exploreCombatWildTurn = 1;
        exploreCombatWild();
        return;
    }

    let moveTimer = move[nextMove]?.timer; 
    let barProgress = 0;

    let bar ;
    if (saved.currentArea != undefined) document.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}-bar`);
    //bar.style.transition = "0s linear";
    //bar.style.width = "0%";

    if (saved.overrideBattleTimer != defaultPlayerMoveTimer) moveTimer = saved.overrideBattleTimer


    if (wildBuffs.paralysis > 0) moveTimer *= 2
    if (wildBuffs.spedown1 > 0) moveTimer *= 1.5
    if (wildBuffs.spedown2 > 0) moveTimer *= 2
    if (wildBuffs.speup1 > 0) moveTimer /= 1.5
    if (wildBuffs.speup2 > 0) moveTimer /= 2

    function animate(timestamp) {


        if (document.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}-bar`) != null) bar = document.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}-bar`)

        if ( shouldCombatStop() ){
            exploreCombatWildTurn = 1;
            requestAnimationFrame(animate);
            return
        }


        if (wildPkmnHp <= 0) {
            exploreCombatWildTurn = 1;
            barProgress = 0;
            requestAnimationFrame(animate);
            return; 
        }


        if (afkSeconds > 0 && !areas[saved.currentArea]?.trainer) { //afk time
            const increment = 100 / (
            (moveTimer * Math.pow(0.9, pkmn[saved.currentPkmn].bst.spe))
            / (1000 / 60)
            );

            // Cada segundo AFK = 60 "ticks" de avance
            let ticks = afkSeconds * 60;

            // No pasarse del 100%
            const simulate = Math.min(ticks, Math.ceil((100 - barProgress) / increment));

            barProgress += simulate * increment;

            // Consumir segundos exactos en función de lo simulado
            afkSeconds -= simulate / 60;
        }













        //barProgress += 100 / (moveTimer / (1000 / 60) );
        barProgress += 100 / ((moveTimer * Math.pow(0.9, pkmn[saved.currentPkmn].bst.spe)) / (1000 / 60));


        bar.style.width = `${barProgress}%`;


        //if (wildPkmnHp <= 0) {
 
        //    barProgress = 0;
        //    requestAnimationFrame(animate);
        //    return; 
            
        //}
       

        if (barProgress < 99) {
            requestAnimationFrame(animate);
        } else {

            // movimiento finalizado
            bar.style.transition = "0s linear";
            bar.style.width = "0%";

            voidAnimation(`pkmn-movebox-wild-${exploreCombatWildTurn}`, "moveboxFire 1 0.5s");




            if (nextMove != undefined) {


                let totalPower = 0

                 if (move[nextMove].split == 'physical') {
                 totalPower = 
                 ( move[nextMove].power + Math.max(0, (pkmn[ saved.currentPkmn ].bst.atk * 30) - (  (pkmn[ team[exploreActiveMember].pkmn.id ].bst.def * 30) * Math.pow(1.1, pkmn[ team[exploreActiveMember].pkmn.id ].ivs.def)  ) )  )
                 * ( 1+(wildLevel * 0.1) )        
                 * 1;
                 }

                 if (move[nextMove].split == 'special') {
                 totalPower = 
                 ( move[nextMove].power +  Math.max(0, (pkmn[ saved.currentPkmn ].bst.satk * 30) - (  (pkmn[ team[exploreActiveMember].pkmn.id ].bst.sdef * 30) * Math.pow(1.1, pkmn[ team[exploreActiveMember].pkmn.id ].ivs.sdef)  ) )  )
                 * ( 1+(wildLevel * 0.1) )         
                 * 1;
                 }

                 //buffs
                 if (move[nextMove].split == 'special') {
                 if (wildBuffs.satkup1 > 0) totalPower *=1.5
                 if (wildBuffs.satkup2 > 0) totalPower *=2
                 if (wildBuffs.poisoned > 0) totalPower /=1.5
                 if (team[exploreActiveMember].sdefup1 > 0) totalPower /=1.5
                 if (team[exploreActiveMember].sdefup2 > 0) totalPower /=2
                 }

                 if (move[nextMove].split == 'physical') {
                 if (wildBuffs.atkup1 > 0) totalPower *=1.5
                 if (wildBuffs.atkup2 > 0) totalPower *=2
                 if (wildBuffs.burn > 0) totalPower /=1.5
                 if (team[exploreActiveMember].defup1 > 0) totalPower /=1.5
                 if (team[exploreActiveMember].defup2 > 0) totalPower /=2
                 }


                 let superEffective = false
                 if (typeEffectiveness(move[nextMove].type, pkmn[team[exploreActiveMember].pkmn.id].type) == 1.5) superEffective = true

                 //stab
                 if (pkmn[saved.currentPkmn].type.includes(move[nextMove].type)) totalPower *=1.5
                 
                 //type effectiveness
                 totalPower *= typeEffectiveness(move[nextMove].type, pkmn[team[exploreActiveMember].pkmn.id].type)


                if (team[exploreActiveMember].item == item.occaBerry.id && move[nextMove].type == 'fire' && superEffective) {totalPower /= (item.occaBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.passhoBerry.id && move[nextMove].type == 'water' && superEffective) {totalPower /= (item.passhoBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.wacanBerry.id && move[nextMove].type == 'electric' && superEffective) {totalPower /= (item.wacanBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.rindoBerry.id && move[nextMove].type == 'grass' && superEffective) {totalPower /= (item.rindoBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.yacheBerry.id && move[nextMove].type == 'ice' && superEffective) {totalPower /= (item.yacheBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.chopleBerry.id && move[nextMove].type == 'fighting' && superEffective) {totalPower /= (item.chopleBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.kebiaBerry.id && move[nextMove].type == 'poison' && superEffective) {totalPower /= (item.kebiaBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.shucaBerry.id && move[nextMove].type == 'ground' && superEffective) {totalPower /= (item.cobaBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.cobaBerry.id && move[nextMove].type == 'flying' && superEffective) {totalPower /= (item.occaBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.payapaBerry.id && move[nextMove].type == 'psychic' && superEffective) {totalPower /= (item.payapaBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.tangaBerry.id && move[nextMove].type == 'bug' && superEffective) {totalPower /= (item.tangaBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.chartiBerry.id && move[nextMove].type == 'rock' && superEffective) {totalPower /= (item.chartiBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.kasibBerry.id && move[nextMove].type == 'ghost' && superEffective) {totalPower /= (item.kasibBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.habanBerry.id && move[nextMove].type == 'dragon' && superEffective) {totalPower /= (item.habanBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.colburBerry.id && move[nextMove].type == 'dark' && superEffective) {totalPower /= (item.colburBerry.power() /100) +1}
                if (team[exploreActiveMember].item == item.babiriBerry.id && move[nextMove].type == 'steel' && superEffective) {totalPower /= (item.babiriBerry.power() /100) +1}


                if (move[nextMove].power === 0) totalPower = 0


                if (wildBuffs.confused>0 && rng(0.5)) totalPower = 0
                if (wildBuffs.paralysis>0 && rng(0.25)) totalPower = 0
                if (wildBuffs.freeze>0 ) totalPower = 0
                if (wildBuffs.sleep>0 ) totalPower = 0

                

                pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -= totalPower;



                if (wildBuffs.burn>0 ) {wildPkmnHp -=  wildPkmnHpMax/4 ; updateWildPkmn()}
                if (wildBuffs.poisoned>0 ) {wildPkmnHp -=  wildPkmnHpMax/4 ; updateWildPkmn()}


                for (const buff in wildBuffs){
                    if ( wildBuffs[buff]>0) wildBuffs[buff]--
                }

                if (move[nextMove].hitEffect) move[nextMove].hitEffect("player")
                 updateWildBuffs()
                 updateTeamBuffs()
                 


            } 













            exploreCombatWildTurn++;



            if (exploreCombatWildTurn >= 5) exploreCombatWildTurn = 1;

            exploreCombatWild();
            updateTeamPkmn()
        }
    }

    requestAnimationFrame(animate);
}*/




let exploreCombatWildTurn = 1
let barProgressWild = 0;
let nextMoveBoxWild;
let nextMoveWild;
let moveTimerWild; 
let barWild;


function exploreCombatWild() {

    if (shouldCombatStop()) {
        //requestAnimationFrame(exploreCombatWild)
        return;
    }

    //set parameters once
    if (nextMoveBoxWild != document?.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}`)) nextMoveBoxWild = document?.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}`); 
    if (nextMoveWild != nextMoveBoxWild?.dataset?.move) nextMoveWild = nextMoveBoxWild?.dataset?.move;
    if (moveTimerWild != move[nextMoveWild]?.timer) moveTimerWild = move[nextMoveWild]?.timer; 
    if (barWild != document.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}-bar`)) barWild = document.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}-bar`)

    //end of move rotation
    if (!nextMoveWild) {
        exploreCombatWildTurn = 1;
        //requestAnimationFrame(exploreCombatWild)
        return;
    }

    //override battle timer (debug)
    if (saved.overrideBattleTimer != defaultPlayerMoveTimer && moveTimerWild != saved.overrideBattleTimer) moveTimerWild = saved.overrideBattleTimer
    
    //buff modifiers
    if (wildBuffs.paralysis > 0) moveTimerWild = move[nextMoveWild]?.timer * 1.75
    if (wildBuffs.spedown1 > 0) moveTimerWild = move[nextMoveWild]?.timer * 1.5
    if (wildBuffs.spedown2 > 0) moveTimerWild = move[nextMoveWild]?.timer * 1.75
    if (wildBuffs.speup1 > 0) moveTimerWild = move[nextMoveWild]?.timer / 1.5
    if (wildBuffs.speup2 > 0) moveTimerWild = move[nextMoveWild]?.timer / 1.75




    //afk time
    /*
    if (afkSeconds > 0) { 
        const increment = 100 / (
        (moveTimerWild * Math.pow(0.9, pkmn[saved.currentPkmn].bst.spe))
        / (1000 / 60)
        );

        // Cada segundo AFK = 60 "ticks" de avance
        let ticks = afkSeconds * 60;

        // No pasarse del 100%
        const simulate = Math.min(ticks, Math.ceil((100 - barProgressWild) / increment));

        barProgressWild += simulate * increment;

        // Consumir segundos exactos en función de lo simulado
        afkSeconds -= simulate / 60;
    } else {
        barProgressWild += 100 / ((moveTimerWild * Math.pow(0.9, pkmn[saved.currentPkmn].bst.spe)) / (1000 / 60));
        barWild.style.width = `${barProgressWild}%`;
    }*/


    if (afkSeconds > 0) { //afk time
        
    } else {
        barWild.style.width = `${barProgressWild}%`;
    }

    let speedStars = pkmn[saved.currentPkmn].bst.spe
    if (areas[saved.currentArea].id == areas.training.id) speedStars = returnDivisionStars(pkmn[saved.currentPkmn])


    barProgressWild += 100 / ((moveTimerWild * Math.pow(0.9, speedStars)) / (1000 / 60));



    if (barProgressWild < 99) {
        //requestAnimationFrame(exploreCombatWild)
        return
    } else {

        barProgressWild = 0
        if (afkSeconds <= 0) voidAnimation(`pkmn-movebox-wild-${exploreCombatWildTurn}`, "moveboxFire 1 0.3s");
        exploreCombatWildTurn++;
        if (exploreCombatWildTurn >= 5) exploreCombatWildTurn = 1;
        barWild.style.width = `0%`;

        //move execution

        let totalPower = 0


        if (move[nextMoveWild].split == 'physical') {
            totalPower = 
            ( move[nextMoveWild].power + Math.max(0, (pkmn[ saved.currentPkmn ].bst.atk * 30) - (  (pkmn[ team[exploreActiveMember].pkmn.id ].bst.def * 30) * Math.pow(1.1, pkmn[ team[exploreActiveMember].pkmn.id ].ivs.def)  ) )  )
            * ( 1+(wildLevel * 0.1) )        
            * 1;
            
            if (areas[saved.currentArea].id == areas.training.id){
            totalPower = 
            ( move[nextMoveWild].power + Math.max(0, (returnDivisionStars(pkmn[ saved.currentPkmn ]) * 30) - (  (returnDivisionStars(pkmn[ saved.currentPkmn ]) * 30) * Math.pow(1.1, pkmn[ team[exploreActiveMember].pkmn.id ].ivs.def)  ) )  )
            * ( 1+(wildLevel * 0.1) )         
            * 1;
            }
            
        }

        if (move[nextMoveWild].split == 'special') {
            totalPower = 
            ( move[nextMoveWild].power + Math.max(0, (pkmn[ saved.currentPkmn ].bst.satk * 30) - (  (pkmn[ team[exploreActiveMember].pkmn.id ].bst.sdef * 30) * Math.pow(1.1, pkmn[ team[exploreActiveMember].pkmn.id ].ivs.sdef)  ) )  )
            * ( 1+(wildLevel * 0.1) )         
            * 1;
            
            if (areas[saved.currentArea].id == areas.training.id){
            totalPower = 
            ( move[nextMoveWild].power + Math.max(0, (returnDivisionStars(pkmn[ saved.currentPkmn ]) * 30) - (  (returnDivisionStars(pkmn[ saved.currentPkmn ]) * 30) * Math.pow(1.1, pkmn[ team[exploreActiveMember].pkmn.id ].ivs.sdef)  ) )  )
            * ( 1+(wildLevel * 0.1) )         
            * 1;
            }
            
        }






        //buffs
        if (move[nextMoveWild].split == 'special') {
            if (wildBuffs.satkup1 > 0) totalPower *=1.5
            if (wildBuffs.satkup2 > 0) totalPower *=2

            if (wildBuffs.satkdown1 > 0) totalPower /=1.5
            if (wildBuffs.satkdown2 > 0) totalPower /=2

            if (wildBuffs.poisoned > 0) totalPower /=1.5


            if (team[exploreActiveMember].sdefup1 > 0) totalPower /=1.5
            if (team[exploreActiveMember].sdefup2 > 0) totalPower /=2

            if (team[exploreActiveMember].sdefdown1 > 0) totalPower *=1.5
            if (team[exploreActiveMember].sdefdown2 > 0) totalPower *=2      
        }

        if (move[nextMoveWild].split == 'physical') {
            if (wildBuffs.atkup1 > 0) totalPower *=1.5
            if (wildBuffs.atkup2 > 0) totalPower *=2

            if (wildBuffs.atkdown1 > 0) totalPower /=1.5
            if (wildBuffs.atkdown2 > 0) totalPower /=2

            if (wildBuffs.burn > 0) totalPower /=1.5


            if (team[exploreActiveMember].defup1 > 0) totalPower /=1.5
            if (team[exploreActiveMember].defup2 > 0) totalPower /=2

            if (team[exploreActiveMember].defdown1 > 0) totalPower *=1.5
            if (team[exploreActiveMember].defdown2 > 0) totalPower *=2
        }




        let superEffective = false
        if (typeEffectiveness(move[nextMoveWild].type, pkmn[team[exploreActiveMember].pkmn.id].type) == 1.5) superEffective = true

        //stab
        if (pkmn[saved.currentPkmn].type.includes(move[nextMoveWild].type)) totalPower *=1.5
                 
        //type effectiveness
        let typeMultiplier = typeEffectiveness(move[nextMoveWild].type, pkmn[team[exploreActiveMember].pkmn.id].type)
        totalPower *= typeMultiplier


        if (team[exploreActiveMember].item == item.occaBerry.id && move[nextMoveWild].type == 'fire' && superEffective) {totalPower /= (item.occaBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.passhoBerry.id && move[nextMoveWild].type == 'water' && superEffective) {totalPower /= (item.passhoBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.wacanBerry.id && move[nextMoveWild].type == 'electric' && superEffective) {totalPower /= (item.wacanBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.rindoBerry.id && move[nextMoveWild].type == 'grass' && superEffective) {totalPower /= (item.rindoBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.yacheBerry.id && move[nextMoveWild].type == 'ice' && superEffective) {totalPower /= (item.yacheBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.chopleBerry.id && move[nextMoveWild].type == 'fighting' && superEffective) {totalPower /= (item.chopleBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.kebiaBerry.id && move[nextMoveWild].type == 'poison' && superEffective) {totalPower /= (item.kebiaBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.shucaBerry.id && move[nextMoveWild].type == 'ground' && superEffective) {totalPower /= (item.shucaBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.cobaBerry.id && move[nextMoveWild].type == 'flying' && superEffective) {totalPower /= (item.cobaBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.payapaBerry.id && move[nextMoveWild].type == 'psychic' && superEffective) {totalPower /= (item.payapaBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.tangaBerry.id && move[nextMoveWild].type == 'bug' && superEffective) {totalPower /= (item.tangaBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.chartiBerry.id && move[nextMoveWild].type == 'rock' && superEffective) {totalPower /= (item.chartiBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.kasibBerry.id && move[nextMoveWild].type == 'ghost' && superEffective) {totalPower /= (item.kasibBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.habanBerry.id && move[nextMoveWild].type == 'dragon' && superEffective) {totalPower /= (item.habanBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.colburBerry.id && move[nextMoveWild].type == 'dark' && superEffective) {totalPower /= (item.colburBerry.power() /100) +1}
        if (team[exploreActiveMember].item == item.babiriBerry.id && move[nextMoveWild].type == 'steel' && superEffective) {totalPower /= (item.babiriBerry.power() /100) +1}

        if (team[exploreActiveMember].item == item.eviolite.id && pkmn[team[exploreActiveMember].pkmn.id].evolve !== undefined && ( pkmn[team[exploreActiveMember].pkmn.id].evolve()[1].pkmn.id.slice(0, 4) !== "mega" || team[exploreActiveMember].pkmn.id == pkmn.bayleef.id) ) 
        {totalPower /= item.eviolite.power();}

        if (team[exploreActiveMember].item == item.mentalHerb.id) {totalPower /= (item.mentalHerb.power() /100) +1}

        if (move[nextMoveWild].power === 0) totalPower = 0

        if (wildBuffs.confused>0 && rng(0.5)) totalPower = 0
        if (wildBuffs.paralysis>0 && rng(0.25)) totalPower = 0
        if (wildBuffs.freeze>0 ) totalPower = 0
        if (wildBuffs.sleep>0 ) totalPower = 0


        //abilities
        if (testAbility(`active`,  ability.grabGuard.id ) && move[nextMoveWild].type == 'fighting') totalPower /= 2
        if (testAbility(`active`,  ability.waterGuard.id ) && move[nextMoveWild].type == 'water') totalPower /= 2
        if (testAbility(`active`,  ability.flameGuard.id ) && move[nextMoveWild].type == 'fire') totalPower /= 2
        if (testAbility(`active`,  ability.curseGuard.id ) && move[nextMoveWild].type == 'ghost') totalPower /= 2
        if (testAbility(`active`,  ability.poisonGuard.id ) && move[nextMoveWild].type == 'poison') totalPower /= 2
        if (testAbility(`active`,  ability.iceGuard.id ) && move[nextMoveWild].type == 'ice') totalPower /= 2
        if (testAbility(`active`,  ability.psychicGuard.id ) && move[nextMoveWild].type == 'psychic') totalPower /= 2
        if (testAbility(`active`,  ability.fairyGuard.id ) && move[nextMoveWild].type == 'fairy') totalPower /= 2
        if (testAbility(`active`,  ability.leafGuard.id ) && move[nextMoveWild].type == 'grass') totalPower /= 2
        if (testAbility(`active`,  ability.plainGuard.id ) && move[nextMoveWild].type == 'normal') totalPower /= 2
        if (testAbility(`active`,  ability.sinisterGuard.id ) && move[nextMoveWild].type == 'dark') totalPower /= 2
        if (testAbility(`active`,  ability.steelGuard.id ) && move[nextMoveWild].type == 'steel') totalPower /= 2
        if (testAbility(`active`,  ability.dragonGuard.id ) && move[nextMoveWild].type == 'dragon') totalPower /= 2
        if (testAbility(`active`,  ability.rockGuard.id ) && move[nextMoveWild].type == 'rock') totalPower /= 2
        if (testAbility(`active`,  ability.groundGuard.id ) && move[nextMoveWild].type == 'ground') totalPower /= 2
        if (testAbility(`active`,  ability.flyingGuard.id ) && move[nextMoveWild].type == 'flying') totalPower /= 2

        if (testAbility(`active`,  ability.voltAbsorb.id  )&& move[nextMoveWild].type == 'electric') totalPower = 0
        if (testAbility(`active`,  ability.waterAbsorb.id ) && move[nextMoveWild].type == 'water') totalPower = 0
        if (testAbility(`active`,  ability.flareAbsorb.id ) && move[nextMoveWild].type == 'fire') totalPower = 0
        if (testAbility(`active`,  ability.curseAbsorb.id  )&& move[nextMoveWild].type == 'ghost') totalPower = 0
        if (testAbility(`active`,  ability.poisonAbsorb.id  )&& move[nextMoveWild].type == 'poison') totalPower = 0
        if (testAbility(`active`,  ability.frostAbsorb.id  )&& move[nextMoveWild].type == 'ice') totalPower = 0
        if (testAbility(`active`,  ability.psychicAbsorb.id  )&& move[nextMoveWild].type == 'psychic') totalPower = 0
        if (testAbility(`active`,  ability.lightAbsorb.id  )&& move[nextMoveWild].type == 'fairy') totalPower = 0
        if (testAbility(`active`,  ability.growthAbsorb.id  )&& move[nextMoveWild].type == 'grass') totalPower = 0

        if (testAbility(`active`,  ability.static.id ) && rng(0.1)) wildBuffs.paralysis = 3
        if (testAbility(`active`,  ability.flameBody.id ) && rng(0.1)) wildBuffs.burn = 3
        if (testAbility(`active`,  ability.poisonPoint.id ) && rng(0.1)) wildBuffs.poisoned = 3
        if (testAbility(`active`,  ability.strangeCharm.id  )&& rng(0.1)) wildBuffs.confused = 3
        if (testAbility(`active`,  ability.effectSpore.id ) && rng(0.05)) wildBuffs.sleep = 3
        if (testAbility(`active`,  ability.glacialBody.id ) && rng(0.05)) wildBuffs.freeze = 3

        const below50hp = pkmn[team[exploreActiveMember].pkmn.id]?.playerHp < (pkmn[team[exploreActiveMember].pkmn.id]?.playerHpMax * 0.5);
        if (!below50hp && testAbility(`active`,  ability.multiscale.id )) totalPower /= 2

        if (testAbility(`active`,  ability.levitate.id ) && move[nextMoveWild].type==="ground") totalPower = 0
        if (testAbility(`active`,  ability.thickFat.id ) && (move[nextMoveWild].type==="fire" || move[nextMoveWild].type==="ice") ) totalPower /= 2


        //weather
        
        if (saved.weatherTimer>0 && saved.weather=="sunny" && move[nextMoveWild].type == 'fire') totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="sunny" && move[nextMoveWild].type == 'water') totalPower /= 1.5
        if (saved.weatherTimer>0 && saved.weather=="rainy" && move[nextMoveWild].type == 'water') totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="rainy" && move[nextMoveWild].type == 'fairy') totalPower /= 1.5
        if (saved.weatherTimer>0 && saved.weather=="sandstorm" && (move[nextMoveWild].type == 'rock' || move[nextMoveWild].type == 'ground') ) totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="hail" &&  move[nextMoveWild].type == 'ice' ) totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="foggy" && (move[nextMoveWild].type == 'ghost' || move[nextMoveWild].type == 'dark') ) totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="electricTerrain" && (move[nextMoveWild].type == 'electric' || move[nextMoveWild].type == 'steel') ) totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="mistyTerrain" && (move[nextMoveWild].type == 'fairy' || move[nextMoveWild].type == 'psychic') ) totalPower *= 1.75
        if (saved.weatherTimer>0 && saved.weather=="grassyTerrain" && (move[nextMoveWild].type == 'grass' || move[nextMoveWild].type == 'bug') ) totalPower *= 1.75
        














        pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -= totalPower;

        let dotDamage = 5
        if (areas[saved.currentArea]?.trainer || saved.currentArea == areas.frontierSpiralingTower.id || saved.currentArea == areas.training.id) dotDamage = 12
        if (areas[saved.currentArea]?.encounter) dotDamage = 100


        if (wildBuffs.burn>0 && testAbility("active",  ability.scorch.id) ) dotDamage /= 2
        if (wildBuffs.poisoned>0 && testAbility("active",  ability.corrosion.id) ) dotDamage /= 2
        
        if (wildBuffs.burn>0 ) {wildPkmnHp -=  wildPkmnHpMax/dotDamage ; updateWildPkmn()}
        if (wildBuffs.poisoned>0 ) {wildPkmnHp -=  wildPkmnHpMax/dotDamage ; updateWildPkmn()}

        for (const buff in wildBuffs){
            if ( wildBuffs[buff]>0) wildBuffs[buff]--
        }

        if (wildBuffs.freeze==0 && wildBuffs.sleep==0 ){
        if (move[nextMoveWild].hitEffect && ( typeEffectiveness(move[nextMoveWild].type, pkmn[team[exploreActiveMember].pkmn.id].type)!= 0 || totalPower==0 ) ) move[nextMoveWild].hitEffect("player")
        }

        //can be optimised
        updateWildBuffs()
        updateTeamBuffs()
        updateTeamPkmn()
    }

 //requestAnimationFrame(exploreCombatWild)
}

function initialiseArea(){


    if (saved.currentArea == areas.training.id &&  areas.training.tier==1) currentTrainingWave = 30
    if (saved.currentArea == areas.training.id &&  areas.training.tier==2) currentTrainingWave = 30
    if (saved.currentArea == areas.training.id &&  areas.training.tier==3) currentTrainingWave = 30

    exploreActiveMember = `slot1`


    setPkmnTeamHp()
    setPkmnTeam()
    setWildPkmn()
    updateTeamExp()

    for (const buff in wildBuffs){ if ( wildBuffs[buff]>0) wildBuffs[buff] = 0 }
    saved.weatherCooldown = 0
    saved.weatherTimer = 0
    
    for (const i in team[exploreActiveMember].buffs){
    if (team[exploreActiveMember].buffs[i]>0) team[exploreActiveMember].buffs[i] = 0
    } 

    //reset move buildup, ie rollout
    for (const moveID in move) if(move[moveID].buildup!==undefined) move[moveID].buildup = 0
    
    updateTeamBuffs()
    updateWildBuffs()

    exploreCombatPlayerTurn = 1
    exploreCombatWildTurn = 0
    //exploreCombatPlayer()
    //exploreCombatPlayer()
    //exploreCombatWild()


    saveGame()



    document.getElementById("auto-refight-info").style.display = "none"

    if (saved.autoRefight==true){
    document.getElementById("auto-refight-info").style.display = "flex"
    document.getElementById("auto-refight-info").innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
        
           <div> Auto-Refight is active! <span>(x${item.autoRefightTicket.got} <img src="img/items/autoRefightTicket.png"> Auto-Refight Tickets remaining)</span> Click to disable it</div>
    `
    }

    if (saved.autoRefight==true && areas[saved.currentArea].encounter){
    document.getElementById("auto-refight-info").style.display = "flex"
    document.getElementById("auto-refight-info").innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
        
           <div> Auto-Refight is active! <span>(Wont consume an <img src="img/items/autoRefightTicket.png"> Auto-Refight Ticket)</span> Click to disable it</div>
    `
    }






    if (testAbility(`active`,  ability.drizzle.id )) changeWeather("rainy")
    if (testAbility(`active`,  ability.drought.id )) changeWeather("sunny")
    if (testAbility(`active`,  ability.sandStream.id )) changeWeather("sandstorm")
    if (testAbility(`active`,  ability.snowWarning.id )) changeWeather("hail")
    if (testAbility(`active`,  ability.somberField.id )) changeWeather("foggy")
    if (testAbility(`active`,  ability.electricSurge.id )) changeWeather("electricTerrain")
    if (testAbility(`active`,  ability.grassySurge.id )) changeWeather("grassyTerrain")
    if (testAbility(`active`,  ability.mistySurge.id )) changeWeather("mistyTerrain")







}

saved.lastWildlifeRotation = undefined

function setWildAreas() {

    document.getElementById("event-banner").style.display = "none"
    document.getElementById("event-banner-category").style.display = "none"


    document.getElementById("explore-selector").innerHTML = `
            <div style="background: #967546; outline: solid 1px #FF9E3D; color: white; z-index: 2;" onclick="setWildAreas()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m17.861 3.163l.16.054l1.202.4c.463.155.87.29 1.191.44c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.781.04 1.27v8.212c0 .698 0 1.287-.054 1.753c-.056.484-.182.962-.535 1.348a2.25 2.25 0 0 1-.746.538c-.478.212-.971.18-1.448.081c-.46-.096-1.018-.282-1.68-.503l-.043-.014c-1.12-.374-1.505-.49-1.877-.477a2.3 2.3 0 0 0-.441.059c-.363.085-.703.299-1.686.954l-1.382.922l-.14.093c-1.062.709-1.8 1.201-2.664 1.317c-.863.116-1.705-.165-2.915-.57l-.16-.053l-1.202-.4c-.463-.155-.87-.29-1.191-.44c-.348-.162-.667-.37-.911-.71c-.244-.338-.341-.706-.385-1.088c-.04-.353-.04-.78-.04-1.269V8.665c0-.699 0-1.288.054-1.753c.056-.484.182-.962.535-1.348a2.25 2.25 0 0 1 .746-.538c.478-.213.972-.181 1.448-.081c.46.095 1.018.282 1.68.503l.043.014c1.12.373 1.505.49 1.878.477a2.3 2.3 0 0 0 .44-.059c.363-.086.703-.3 1.686-.954l1.382-.922l.14-.094c1.062-.708 1.8-1.2 2.663-1.316c.864-.116 1.706.165 2.916.57m-2.111.943V16.58c.536.058 1.1.246 1.843.494l.125.042c.717.239 1.192.396 1.555.472c.356.074.477.04.532.016a.75.75 0 0 0 .249-.179c.04-.044.11-.149.152-.51c.043-.368.044-.869.044-1.624V7.163c0-.54-.001-.88-.03-1.138c-.028-.239-.072-.328-.112-.382c-.039-.054-.109-.125-.326-.226c-.236-.11-.56-.218-1.07-.389l-1.165-.388c-.887-.296-1.413-.464-1.797-.534m-1.5 12.654V4.434c-.311.18-.71.441-1.276.818l-1.382.922l-.11.073c-.688.46-1.201.802-1.732.994v12.326c.311-.18.71-.442 1.276-.819l1.382-.921l.11-.073c.688-.46 1.201-.802 1.732-.994m-6 3.135V7.42c-.536-.058-1.1-.246-1.843-.494l-.125-.042c-.717-.239-1.192-.396-1.556-.472c-.355-.074-.476-.041-.53-.017a.75.75 0 0 0-.25.18c-.04.043-.11.148-.152.509c-.043.368-.044.87-.044 1.625v8.128c0 .54.001.88.03 1.138c.028.239.072.327.112.382c.039.054.109.125.326.226c.236.11.56.218 1.07.389l1.165.388c.887.295 1.412.463 1.797.534" clip-rule="evenodd"/></svg>                Wild Areas</div>
            <div onclick="setDungeonAreas()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 10a8 8 0 1 1 16 0v8.667c0 1.246 0 1.869-.268 2.333a2 2 0 0 1-.732.732c-.464.268-1.087.268-2.333.268H7.333C6.087 22 5.464 22 5 21.732A2 2 0 0 1 4.268 21C4 20.536 4 19.913 4 18.667z"/><path d="M20 18H9c-.943 0-1.414 0-1.707.293S7 19.057 7 20v2m13-8h-7c-.943 0-1.414 0-1.707.293S11 15.057 11 16v2m9-8h-3c-.943 0-1.414 0-1.707.293S15 11.057 15 12v2"/></g></svg>
                Dungeons</div>
            <div onclick="setEventAreas()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.658 11.002l-1.47 3.308c-1.856 4.174-2.783 6.261-1.77 7.274s3.098.085 7.272-1.77L13 18.342c2.517-1.119 3.776-1.678 3.976-2.757s-.774-2.053-2.722-4l-1.838-1.839c-1.947-1.948-2.921-2.922-4-2.721c-1.079.2-1.638 1.459-2.757 3.976M6.5 10.5l7 7m-9-2l4 4M16 8l3-3m-4.803-3c.4.667.719 2.4-1.197 4m9 3.803c-.667-.4-2.4-.719-4 1.197m0-9v.02M22 6v.02M21 13v.02M11 3v.02"/></svg>
                Events</div>
    `



    document.getElementById("explore-listing").innerHTML = ""
    document.getElementById("explore-menu-header").innerHTML = `
    <div style="display:flex; gap:0.2rem" >
    <span >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m17.861 3.163l.16.054l1.202.4c.463.155.87.29 1.191.44c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.781.04 1.27v8.212c0 .698 0 1.287-.054 1.753c-.056.484-.182.962-.535 1.348a2.25 2.25 0 0 1-.746.538c-.478.212-.971.18-1.448.081c-.46-.096-1.018-.282-1.68-.503l-.043-.014c-1.12-.374-1.505-.49-1.877-.477a2.3 2.3 0 0 0-.441.059c-.363.085-.703.299-1.686.954l-1.382.922l-.14.093c-1.062.709-1.8 1.201-2.664 1.317c-.863.116-1.705-.165-2.915-.57l-.16-.053l-1.202-.4c-.463-.155-.87-.29-1.191-.44c-.348-.162-.667-.37-.911-.71c-.244-.338-.341-.706-.385-1.088c-.04-.353-.04-.78-.04-1.269V8.665c0-.699 0-1.288.054-1.753c.056-.484.182-.962.535-1.348a2.25 2.25 0 0 1 .746-.538c.478-.213.972-.181 1.448-.081c.46.095 1.018.282 1.68.503l.043.014c1.12.373 1.505.49 1.878.477a2.3 2.3 0 0 0 .44-.059c.363-.086.703-.3 1.686-.954l1.382-.922l.14-.094c1.062-.708 1.8-1.2 2.663-1.316c.864-.116 1.706.165 2.916.57m-2.111.943V16.58c.536.058 1.1.246 1.843.494l.125.042c.717.239 1.192.396 1.555.472c.356.074.477.04.532.016a.75.75 0 0 0 .249-.179c.04-.044.11-.149.152-.51c.043-.368.044-.869.044-1.624V7.163c0-.54-.001-.88-.03-1.138c-.028-.239-.072-.328-.112-.382c-.039-.054-.109-.125-.326-.226c-.236-.11-.56-.218-1.07-.389l-1.165-.388c-.887-.296-1.413-.464-1.797-.534m-1.5 12.654V4.434c-.311.18-.71.441-1.276.818l-1.382.922l-.11.073c-.688.46-1.201.802-1.732.994v12.326c.311-.18.71-.442 1.276-.819l1.382-.921l.11-.073c.688-.46 1.201-.802 1.732-.994m-6 3.135V7.42c-.536-.058-1.1-.246-1.843-.494l-.125-.042c-.717-.239-1.192-.396-1.556-.472c-.355-.074-.476-.041-.53-.017a.75.75 0 0 0-.25.18c-.04.043-.11.148-.152.509c-.043.368-.044.87-.044 1.625v8.128c0 .54.001.88.03 1.138c.028.239.072.327.112.382c.039.054.109.125.326.226c.236.11.56.218 1.07.389l1.165.388c.887.295 1.412.463 1.797.534" clip-rule="evenodd"/></svg>    Wild Areas
    </span>
    <span class="header-help" data-help="Wild Areas"><svg  style="opacity:0.8; pointer-events:none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><g opacity="0.2"><path d="M12.739 17.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill-rule="evenodd" d="M10.71 5.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 1 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.71 9.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V11.08c0-.8.649-1.45 1.45-1.45" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.239 8.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5" clip-rule="evenodd"/></g><path d="M11 16.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"/><path fill-rule="evenodd" d="M9.71 4.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V10.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.638 8.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"/></g></svg></span>
    </div>

    <div class="rotation-timer">
    <strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724"/><path fill="currentColor" d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" opacity="0.5"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></svg>
    Rotation ${rotationWildCurrent}/${rotationWildMax}</strong>
    <div class="time-counter-daily"></div>
    </div>
    `

    document.getElementById("explore-menu-header").style.backgroundImage = "url(img/bg/forest.png)"

    let ticketIndex = 0







    //generate the wildlife park pokemon
    if (saved.lastWildlifeRotation != rotationWildCurrent && document.getElementById("explore-menu").style.display == "flex" ) {
        
        saved.lastWildlifeRotation = rotationWildCurrent

        const uncommonPick = [].concat(arrayPick(wildlifePoolUncommon, 1)).map(name => pkmn[name])

        areas.wildlifePark.spawns.common = arrayPick(wildlifePoolCommon,3).map(name => pkmn[name]);
        areas.wildlifePark.spawns.uncommon = uncommonPick
        areas.wildlifePark.spawns.rare = [].concat(arrayPick(wildlifePoolRare, 1)).map(name => pkmn[name])
        areas.wildlifePark.icon = arrayPick(uncommonPick)
        
    }



    const divPark = document.createElement("div");
    divPark.className = "explore-ticket";
    divPark.innerHTML = `
                <span class="hitbox"></span>
                <div style="width: 100%;">
                <svg class="barcode-flair" xmlns="http://www.w3.org/2000/svg" width="236" height="144"><svg id="barcodeSVG" role="img" aria-label="Barcode preview" width="234px" height="142px" x="0px" y="0px" viewBox="0 0 234 142" xmlns="http://www.w3.org/2000/svg" version="1.1" style="transform: translate(0,0)"><rect x="0" y="0" width="234" height="142" style="fill:none;"/><g transform="translate(10, 10)" style="fill:#000000;"><text style="font: 20px Roboto" text-anchor="start" x="0" y="122">5</text></g><g transform="translate(34, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="112"/><rect x="4" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="3" y="134"></text></g><g transform="translate(40, 10)" style="fill:#000000;"><rect x="6" y="0" width="2" height="100"/><rect x="10" y="0" width="4" height="100"/><rect x="16" y="0" width="2" height="100"/><rect x="22" y="0" width="6" height="100"/><rect x="30" y="0" width="4" height="100"/><rect x="38" y="0" width="4" height="100"/><rect x="46" y="0" width="2" height="100"/><rect x="52" y="0" width="4" height="100"/><rect x="58" y="0" width="8" height="100"/><rect x="68" y="0" width="2" height="100"/><rect x="74" y="0" width="6" height="100"/><rect x="82" y="0" width="2" height="100"/><text style="font: 20px Roboto" text-anchor="middle" x="42" y="122">901234</text></g><g transform="translate(124, 10)" style="fill:#000000;"><rect x="2" y="0" width="2" height="112"/><rect x="6" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="5" y="134"></text></g><g transform="translate(134, 10)" style="fill:#000000;"><rect x="0" y="0" width="4" height="100"/><rect x="8" y="0" width="4" height="100"/><rect x="14" y="0" width="4" height="100"/><rect x="20" y="0" width="4" height="100"/><rect x="28" y="0" width="2" height="100"/><rect x="38" y="0" width="2" height="100"/><rect x="42" y="0" width="2" height="100"/><rect x="46" y="0" width="6" height="100"/><rect x="56" y="0" width="2" height="100"/><rect x="62" y="0" width="6" height="100"/><rect x="70" y="0" width="2" height="100"/><rect x="78" y="0" width="2" height="100"/><text style="font: 20px Roboto" text-anchor="middle" x="42" y="122">123457</text></g><g transform="translate(218, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="112"/><rect x="4" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="3" y="134"></text></g></svg></svg>
                <span class="explore-ticket-left">
                <span class="ticket-flair">
                #0000
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M25.719 4.781a2.9 2.9 0 0 0-1.125.344l-4.719 2.5L13.5 6.062l-.375-.093l-.375.187l-2.156 1.25l-1.281.75l1.187.906l2.719 2.063l-3.406 1.813l-3.657-1.657l-.437-.187l-.438.219l-1.75.937l-1.156.625l.875.938l5.406 5.812l.5.594l.688-.375L15 17.094l-1.031 5.687l-.344 1.813l1.719-.719l2.562-1.094l.375-.156l.157-.375l3.718-9.031l5.25-2.813c1.446-.777 2.028-2.617 1.25-4.062a3 3 0 0 0-1.781-1.438a3.1 3.1 0 0 0-1.156-.125m.187 2c.125-.008.254-.004.375.032a.979.979 0 0 1 .188 1.812l-5.594 3.031l-.313.156l-.125.344l-3.718 8.938l-.438.187l1.063-5.906l.375-2.031l-1.813.969l-6.312 3.406l-3.969-4.313l.156-.094l3.657 1.626l.468.218l.406-.25l15.22-8.031a.9.9 0 0 1 .374-.094M13.375 8.094l3.844.937l-2.063 1.063l-2.25-1.719zM3 26v2h26v-2z"/></svg>
                </span>
                        <span style="font-size:1.2rem">${format(areas.wildlifePark.id)}</span>
                        <span><strong style="background:#B18451">Level: ${Math.max(1,areas.wildlifePark.level-10)}-${areas.wildlifePark.level}</strong><span></span></span>
                    </span>
                </div>
                <div style="width: 8rem;" class="explore-ticket-right">
                    <span class="explore-ticket-bg" style="background-image: url(img/bg/${areas.wildlifePark.background}.png);"></span>
                    <img class="explore-ticket-sprite sprite-trim" style="z-index: 10;" src="img/pkmn/sprite/${areas.wildlifePark.icon.id}.png">
                </div>
        `;
    document.getElementById("explore-listing").appendChild(divPark);
    divPark.dataset.area = areas.wildlifePark.id

    divPark.addEventListener("click", e => { 
            saved.currentAreaBuffer = areas.wildlifePark.id
            document.getElementById(`preview-team-exit`).style.display = "flex"
            document.getElementById(`team-menu`).style.zIndex = `50`
            document.getElementById(`team-menu`).style.display = `flex`
            document.getElementById("menu-button-parent").style.display = "none"
            updatePreviewTeam()
            afkSeconds = 0
            document.getElementById(`explore-menu`).style.display = `none`
        })
























    for (const i in areas) {
        if (areas[i].type !== "wild") continue;
        if (areas[i].rotation !== rotationWildCurrent) continue;

        const divAreas = document.createElement("div");
        divAreas.className = "explore-ticket";

        divAreas.dataset.area = i

        if ( areas[i].unlockRequirement == undefined || areas[i].unlockRequirement() ) {
        divAreas.addEventListener("click", e => { 
            saved.currentAreaBuffer = i
            document.getElementById(`preview-team-exit`).style.display = "flex"
            document.getElementById(`team-menu`).style.zIndex = `50`
            document.getElementById(`team-menu`).style.display = `flex`
            document.getElementById("menu-button-parent").style.display = "none"
            updatePreviewTeam()
            afkSeconds = 0
            document.getElementById(`explore-menu`).style.display = `none`
        })
        }


        let unlockRequirement = ""
        if (areas[i].unlockRequirement && !areas[i].unlockRequirement()) unlockRequirement =`<span class="ticket-unlock">
       
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity="0.5"/><path fill="currentColor" d="M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"/></svg>
       <span>${areas[i].unlockDescription}</span>
       </span>`
        ticketIndex++

        divAreas.innerHTML = `
                ${unlockRequirement}
                <span class="hitbox"></span>
                <div style="width: 100%;">
                <svg class="barcode-flair" xmlns="http://www.w3.org/2000/svg" width="236" height="144"><svg id="barcodeSVG" role="img" aria-label="Barcode preview" width="234px" height="142px" x="0px" y="0px" viewBox="0 0 234 142" xmlns="http://www.w3.org/2000/svg" version="1.1" style="transform: translate(0,0)"><rect x="0" y="0" width="234" height="142" style="fill:none;"/><g transform="translate(10, 10)" style="fill:#000000;"><text style="font: 20px Roboto" text-anchor="start" x="0" y="122">5</text></g><g transform="translate(34, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="112"/><rect x="4" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="3" y="134"></text></g><g transform="translate(40, 10)" style="fill:#000000;"><rect x="6" y="0" width="2" height="100"/><rect x="10" y="0" width="4" height="100"/><rect x="16" y="0" width="2" height="100"/><rect x="22" y="0" width="6" height="100"/><rect x="30" y="0" width="4" height="100"/><rect x="38" y="0" width="4" height="100"/><rect x="46" y="0" width="2" height="100"/><rect x="52" y="0" width="4" height="100"/><rect x="58" y="0" width="8" height="100"/><rect x="68" y="0" width="2" height="100"/><rect x="74" y="0" width="6" height="100"/><rect x="82" y="0" width="2" height="100"/><text style="font: 20px Roboto" text-anchor="middle" x="42" y="122">901234</text></g><g transform="translate(124, 10)" style="fill:#000000;"><rect x="2" y="0" width="2" height="112"/><rect x="6" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="5" y="134"></text></g><g transform="translate(134, 10)" style="fill:#000000;"><rect x="0" y="0" width="4" height="100"/><rect x="8" y="0" width="4" height="100"/><rect x="14" y="0" width="4" height="100"/><rect x="20" y="0" width="4" height="100"/><rect x="28" y="0" width="2" height="100"/><rect x="38" y="0" width="2" height="100"/><rect x="42" y="0" width="2" height="100"/><rect x="46" y="0" width="6" height="100"/><rect x="56" y="0" width="2" height="100"/><rect x="62" y="0" width="6" height="100"/><rect x="70" y="0" width="2" height="100"/><rect x="78" y="0" width="2" height="100"/><text style="font: 20px Roboto" text-anchor="middle" x="42" y="122">123457</text></g><g transform="translate(218, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="112"/><rect x="4" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="3" y="134"></text></g></svg></svg>
                <span class="explore-ticket-left">
                <span class="ticket-flair">
                #000${ticketIndex}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M25.719 4.781a2.9 2.9 0 0 0-1.125.344l-4.719 2.5L13.5 6.062l-.375-.093l-.375.187l-2.156 1.25l-1.281.75l1.187.906l2.719 2.063l-3.406 1.813l-3.657-1.657l-.437-.187l-.438.219l-1.75.937l-1.156.625l.875.938l5.406 5.812l.5.594l.688-.375L15 17.094l-1.031 5.687l-.344 1.813l1.719-.719l2.562-1.094l.375-.156l.157-.375l3.718-9.031l5.25-2.813c1.446-.777 2.028-2.617 1.25-4.062a3 3 0 0 0-1.781-1.438a3.1 3.1 0 0 0-1.156-.125m.187 2c.125-.008.254-.004.375.032a.979.979 0 0 1 .188 1.812l-5.594 3.031l-.313.156l-.125.344l-3.718 8.938l-.438.187l1.063-5.906l.375-2.031l-1.813.969l-6.312 3.406l-3.969-4.313l.156-.094l3.657 1.626l.468.218l.406-.25l15.22-8.031a.9.9 0 0 1 .374-.094M13.375 8.094l3.844.937l-2.063 1.063l-2.25-1.719zM3 26v2h26v-2z"/></svg>
                </span>
                        <span style="font-size:1.2rem">${format(i)}</span>
                        <span><strong style="background:#B18451">Level: ${Math.max(1,areas[i].level-10)}-${areas[i].level}</strong><span></span></span>
                    </span>
                </div>
                <div style="width: 8rem;" class="explore-ticket-right">
                    <span class="explore-ticket-bg" style="background-image: url(img/bg/${areas[i].background}.png);"></span>
                    <img class="explore-ticket-sprite sprite-trim" style="z-index: 10;" src="img/pkmn/sprite/${areas[i].icon.id}.png">
                </div>
        `;
        document.getElementById("explore-listing").appendChild(divAreas);

    }
    updateDailyCounters()

}

function setDungeonAreas() {



        document.getElementById("event-banner").style.display = "none"
    document.getElementById("event-banner-category").style.display = "none"


    document.getElementById("explore-selector").innerHTML = `
            <div onclick="setWildAreas()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m17.861 3.163l.16.054l1.202.4c.463.155.87.29 1.191.44c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.781.04 1.27v8.212c0 .698 0 1.287-.054 1.753c-.056.484-.182.962-.535 1.348a2.25 2.25 0 0 1-.746.538c-.478.212-.971.18-1.448.081c-.46-.096-1.018-.282-1.68-.503l-.043-.014c-1.12-.374-1.505-.49-1.877-.477a2.3 2.3 0 0 0-.441.059c-.363.085-.703.299-1.686.954l-1.382.922l-.14.093c-1.062.709-1.8 1.201-2.664 1.317c-.863.116-1.705-.165-2.915-.57l-.16-.053l-1.202-.4c-.463-.155-.87-.29-1.191-.44c-.348-.162-.667-.37-.911-.71c-.244-.338-.341-.706-.385-1.088c-.04-.353-.04-.78-.04-1.269V8.665c0-.699 0-1.288.054-1.753c.056-.484.182-.962.535-1.348a2.25 2.25 0 0 1 .746-.538c.478-.213.972-.181 1.448-.081c.46.095 1.018.282 1.68.503l.043.014c1.12.373 1.505.49 1.878.477a2.3 2.3 0 0 0 .44-.059c.363-.086.703-.3 1.686-.954l1.382-.922l.14-.094c1.062-.708 1.8-1.2 2.663-1.316c.864-.116 1.706.165 2.916.57m-2.111.943V16.58c.536.058 1.1.246 1.843.494l.125.042c.717.239 1.192.396 1.555.472c.356.074.477.04.532.016a.75.75 0 0 0 .249-.179c.04-.044.11-.149.152-.51c.043-.368.044-.869.044-1.624V7.163c0-.54-.001-.88-.03-1.138c-.028-.239-.072-.328-.112-.382c-.039-.054-.109-.125-.326-.226c-.236-.11-.56-.218-1.07-.389l-1.165-.388c-.887-.296-1.413-.464-1.797-.534m-1.5 12.654V4.434c-.311.18-.71.441-1.276.818l-1.382.922l-.11.073c-.688.46-1.201.802-1.732.994v12.326c.311-.18.71-.442 1.276-.819l1.382-.921l.11-.073c.688-.46 1.201-.802 1.732-.994m-6 3.135V7.42c-.536-.058-1.1-.246-1.843-.494l-.125-.042c-.717-.239-1.192-.396-1.556-.472c-.355-.074-.476-.041-.53-.017a.75.75 0 0 0-.25.18c-.04.043-.11.148-.152.509c-.043.368-.044.87-.044 1.625v8.128c0 .54.001.88.03 1.138c.028.239.072.327.112.382c.039.054.109.125.326.226c.236.11.56.218 1.07.389l1.165.388c.887.295 1.412.463 1.797.534" clip-rule="evenodd"/></svg>                Wild Areas</div>
            <div style="background: #58644bff; outline: solid 1px #82df60ff; color: white; z-index: 2;" onclick="setDungeonAreas()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 10a8 8 0 1 1 16 0v8.667c0 1.246 0 1.869-.268 2.333a2 2 0 0 1-.732.732c-.464.268-1.087.268-2.333.268H7.333C6.087 22 5.464 22 5 21.732A2 2 0 0 1 4.268 21C4 20.536 4 19.913 4 18.667z"/><path d="M20 18H9c-.943 0-1.414 0-1.707.293S7 19.057 7 20v2m13-8h-7c-.943 0-1.414 0-1.707.293S11 15.057 11 16v2m9-8h-3c-.943 0-1.414 0-1.707.293S15 11.057 15 12v2"/></g></svg>
                Dungeons</div>
            <div onclick="setEventAreas()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.658 11.002l-1.47 3.308c-1.856 4.174-2.783 6.261-1.77 7.274s3.098.085 7.272-1.77L13 18.342c2.517-1.119 3.776-1.678 3.976-2.757s-.774-2.053-2.722-4l-1.838-1.839c-1.947-1.948-2.921-2.922-4-2.721c-1.079.2-1.638 1.459-2.757 3.976M6.5 10.5l7 7m-9-2l4 4M16 8l3-3m-4.803-3c.4.667.719 2.4-1.197 4m9 3.803c-.667-.4-2.4-.719-4 1.197m0-9v.02M22 6v.02M21 13v.02M11 3v.02"/></svg>
                Events</div>
    `

    document.getElementById("explore-listing").innerHTML = ""
    document.getElementById("explore-menu-header").innerHTML = `
    <div style="display:flex; gap:0.2rem" >
    <span >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 10a8 8 0 1 1 16 0v8.667c0 1.246 0 1.869-.268 2.333a2 2 0 0 1-.732.732c-.464.268-1.087.268-2.333.268H7.333C6.087 22 5.464 22 5 21.732A2 2 0 0 1 4.268 21C4 20.536 4 19.913 4 18.667z"/><path d="M20 18H9c-.943 0-1.414 0-1.707.293S7 19.057 7 20v2m13-8h-7c-.943 0-1.414 0-1.707.293S11 15.057 11 16v2m9-8h-3c-.943 0-1.414 0-1.707.293S15 11.057 15 12v2"/></g></svg>
    Dungeons
    </span>
    <span class="header-help" data-help="Dungeons"><svg  style="opacity:0.8; pointer-events:none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><g opacity="0.2"><path d="M12.739 17.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill-rule="evenodd" d="M10.71 5.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 1 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.71 9.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V11.08c0-.8.649-1.45 1.45-1.45" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.239 8.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5" clip-rule="evenodd"/></g><path d="M11 16.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"/><path fill-rule="evenodd" d="M9.71 4.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V10.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.638 8.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"/></g></svg></span>
    </div>

    <div class="rotation-timer">
    <strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724"/><path fill="currentColor" d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" opacity="0.5"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></svg>
    Rotation ${rotationDungeonCurrent}/${rotationDungeonMax}</strong>
    <div class="time-counter-daily"></div>
    </div>



    `
    document.getElementById("explore-menu-header").style.backgroundImage = "url(img/bg/cave.png)" 
    let ticketIndex = 0

    for (const i in areas) {
        if (areas[i].type !== "dungeon") continue;
        if (areas[i].rotation !== rotationDungeonCurrent) continue;


        const divAreas = document.createElement("div");
        divAreas.className = "explore-ticket";
        divAreas.dataset.area = i

        if ( areas[i].unlockRequirement == undefined || areas[i].unlockRequirement() ) {
        divAreas.addEventListener("click", e => { 

            saved.currentAreaBuffer = i
            document.getElementById(`preview-team-exit`).style.display = "flex"
            document.getElementById(`team-menu`).style.zIndex = `50`
            document.getElementById(`team-menu`).style.display = `flex`
            document.getElementById("menu-button-parent").style.display = "none"
            updatePreviewTeam()
            afkSeconds = 0
            document.getElementById(`explore-menu`).style.display = `none`

        })
    }

        let unlockRequirement = ""
        if (areas[i].unlockRequirement && !areas[i].unlockRequirement()) unlockRequirement =`<span class="ticket-unlock">
       
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity="0.5"/><path fill="currentColor" d="M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"/></svg>
       <span>${areas[i].unlockDescription}</span>
       </span>`
        ticketIndex++

        divAreas.innerHTML = `
                ${unlockRequirement}
                <span class="hitbox"></span>

                
                <div style="width: 100%;">


                <svg class="barcode-flair" xmlns="http://www.w3.org/2000/svg" width="236" height="144"><svg id="barcodeSVG" role="img" aria-label="Barcode preview" width="234px" height="142px" x="0px" y="0px" viewBox="0 0 234 142" xmlns="http://www.w3.org/2000/svg" version="1.1" style="transform: translate(0,0)"><rect x="0" y="0" width="234" height="142" style="fill:none;"/><g transform="translate(10, 10)" style="fill:#000000;"><text style="font: 20px Roboto" text-anchor="start" x="0" y="122">5</text></g><g transform="translate(34, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="112"/><rect x="4" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="3" y="134"></text></g><g transform="translate(40, 10)" style="fill:#000000;"><rect x="6" y="0" width="2" height="100"/><rect x="10" y="0" width="4" height="100"/><rect x="16" y="0" width="2" height="100"/><rect x="22" y="0" width="6" height="100"/><rect x="30" y="0" width="4" height="100"/><rect x="38" y="0" width="4" height="100"/><rect x="46" y="0" width="2" height="100"/><rect x="52" y="0" width="4" height="100"/><rect x="58" y="0" width="8" height="100"/><rect x="68" y="0" width="2" height="100"/><rect x="74" y="0" width="6" height="100"/><rect x="82" y="0" width="2" height="100"/><text style="font: 20px Roboto" text-anchor="middle" x="42" y="122">901234</text></g><g transform="translate(124, 10)" style="fill:#000000;"><rect x="2" y="0" width="2" height="112"/><rect x="6" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="5" y="134"></text></g><g transform="translate(134, 10)" style="fill:#000000;"><rect x="0" y="0" width="4" height="100"/><rect x="8" y="0" width="4" height="100"/><rect x="14" y="0" width="4" height="100"/><rect x="20" y="0" width="4" height="100"/><rect x="28" y="0" width="2" height="100"/><rect x="38" y="0" width="2" height="100"/><rect x="42" y="0" width="2" height="100"/><rect x="46" y="0" width="6" height="100"/><rect x="56" y="0" width="2" height="100"/><rect x="62" y="0" width="6" height="100"/><rect x="70" y="0" width="2" height="100"/><rect x="78" y="0" width="2" height="100"/><text style="font: 20px Roboto" text-anchor="middle" x="42" y="122">123457</text></g><g transform="translate(218, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="112"/><rect x="4" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="3" y="134"></text></g></svg></svg>



                    <span class="explore-ticket-left">

                    
                <span class="ticket-flair">
                #000${ticketIndex}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M25.719 4.781a2.9 2.9 0 0 0-1.125.344l-4.719 2.5L13.5 6.062l-.375-.093l-.375.187l-2.156 1.25l-1.281.75l1.187.906l2.719 2.063l-3.406 1.813l-3.657-1.657l-.437-.187l-.438.219l-1.75.937l-1.156.625l.875.938l5.406 5.812l.5.594l.688-.375L15 17.094l-1.031 5.687l-.344 1.813l1.719-.719l2.562-1.094l.375-.156l.157-.375l3.718-9.031l5.25-2.813c1.446-.777 2.028-2.617 1.25-4.062a3 3 0 0 0-1.781-1.438a3.1 3.1 0 0 0-1.156-.125m.187 2c.125-.008.254-.004.375.032a.979.979 0 0 1 .188 1.812l-5.594 3.031l-.313.156l-.125.344l-3.718 8.938l-.438.187l1.063-5.906l.375-2.031l-1.813.969l-6.312 3.406l-3.969-4.313l.156-.094l3.657 1.626l.468.218l.406-.25l15.22-8.031a.9.9 0 0 1 .374-.094M13.375 8.094l3.844.937l-2.063 1.063l-2.25-1.719zM3 26v2h26v-2z"/></svg>
                </span>

                        <span style="font-size:1.2rem">${format(i)}</span>
                        <span><strong style="background:#6BBC77">Level: ${Math.max(1,areas[i].level-10)}-${areas[i].level}</strong><span></span></span>
                    </span>
                </div>
                <div style="width: 8rem;" class="explore-ticket-right">
                    <span class="explore-ticket-bg" style="background-image: url(img/bg/${areas[i].background}.png);"></span>
                    <img class="explore-ticket-sprite" style="z-index: 10; scale: 2; image-rendering:pixelated; filter:drop-shadow(rgba(0,0,0,0.4) 2px 2px)" src="img/items/${areas[i].icon.id}.png">
                </div>
        `;
        document.getElementById("explore-listing").appendChild(divAreas);

    }

    updateDailyCounters()

}



let eventCategory = 1

function setEventAreas() {


    if (saved.tutorialStep !== "none") {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `Complete the tutorial to access events`
        openTooltip()
        return
    }



    if (eventCategory==2 && areas.vsTeamLeaderGiovanni.defeated!=true){
        eventCategory=1
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `Defeat Team Leader Giovanni in VS mode to unlock`
        openTooltip()
        return
    }

    if (eventCategory==3){
        eventCategory=1
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `Not yet implemented`
        openTooltip()
        return
    }



    document.getElementById("event-banner").style.display = "flex"
    document.getElementById("event-banner-category").style.display = "flex"
    let eventTitle = ""

    if (rotationEventCurrent==1) eventTitle = `Return To Kanto`
    if (rotationEventCurrent==2) eventTitle = `Primeval Wilds`
    if (rotationEventCurrent==3) eventTitle = `Ancients Awoken`
    if (rotationEventCurrent==4) eventTitle = `Aether Takeover`
    if (rotationEventCurrent==5) eventTitle = `Science Future`
    if (rotationEventCurrent==6) eventTitle = `Sinnoh Expedition`

    if (rotationEventCurrent==1) document.getElementById("event-banner").style.backgroundImage = "url(img/bg/event/kanto.png)"
    if (rotationEventCurrent==2) document.getElementById("event-banner").style.backgroundImage = "url(img/bg/event/past.png)"
    if (rotationEventCurrent==3) document.getElementById("event-banner").style.backgroundImage = "url(img/bg/event/ancient.png)"
    if (rotationEventCurrent==4) document.getElementById("event-banner").style.backgroundImage = "url(img/bg/event/aether.jpg)"
    if (rotationEventCurrent==5) document.getElementById("event-banner").style.backgroundImage = "url(img/bg/event/future.jpg)"
    if (rotationEventCurrent==6) document.getElementById("event-banner").style.backgroundImage = "url(img/bg/event/sinnoh.jpg)"

    document.getElementById("event-banner").innerHTML = `<span>- ${eventTitle} -</span>`

    document.getElementById("event-selector-1").style = `initial`
    document.getElementById("event-selector-2").style = `initial`
    //document.getElementById("event-selector-3").style = `initial`
    document.getElementById("event-selector-"+eventCategory).style = `background: #91718B; outline: solid 1px #F97DFF; color: white`




    document.getElementById("explore-selector").innerHTML = `
            <div onclick="setWildAreas()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m17.861 3.163l.16.054l1.202.4c.463.155.87.29 1.191.44c.348.162.667.37.911.709s.341.707.385 1.088c.04.353.04.781.04 1.27v8.212c0 .698 0 1.287-.054 1.753c-.056.484-.182.962-.535 1.348a2.25 2.25 0 0 1-.746.538c-.478.212-.971.18-1.448.081c-.46-.096-1.018-.282-1.68-.503l-.043-.014c-1.12-.374-1.505-.49-1.877-.477a2.3 2.3 0 0 0-.441.059c-.363.085-.703.299-1.686.954l-1.382.922l-.14.093c-1.062.709-1.8 1.201-2.664 1.317c-.863.116-1.705-.165-2.915-.57l-.16-.053l-1.202-.4c-.463-.155-.87-.29-1.191-.44c-.348-.162-.667-.37-.911-.71c-.244-.338-.341-.706-.385-1.088c-.04-.353-.04-.78-.04-1.269V8.665c0-.699 0-1.288.054-1.753c.056-.484.182-.962.535-1.348a2.25 2.25 0 0 1 .746-.538c.478-.213.972-.181 1.448-.081c.46.095 1.018.282 1.68.503l.043.014c1.12.373 1.505.49 1.878.477a2.3 2.3 0 0 0 .44-.059c.363-.086.703-.3 1.686-.954l1.382-.922l.14-.094c1.062-.708 1.8-1.2 2.663-1.316c.864-.116 1.706.165 2.916.57m-2.111.943V16.58c.536.058 1.1.246 1.843.494l.125.042c.717.239 1.192.396 1.555.472c.356.074.477.04.532.016a.75.75 0 0 0 .249-.179c.04-.044.11-.149.152-.51c.043-.368.044-.869.044-1.624V7.163c0-.54-.001-.88-.03-1.138c-.028-.239-.072-.328-.112-.382c-.039-.054-.109-.125-.326-.226c-.236-.11-.56-.218-1.07-.389l-1.165-.388c-.887-.296-1.413-.464-1.797-.534m-1.5 12.654V4.434c-.311.18-.71.441-1.276.818l-1.382.922l-.11.073c-.688.46-1.201.802-1.732.994v12.326c.311-.18.71-.442 1.276-.819l1.382-.921l.11-.073c.688-.46 1.201-.802 1.732-.994m-6 3.135V7.42c-.536-.058-1.1-.246-1.843-.494l-.125-.042c-.717-.239-1.192-.396-1.556-.472c-.355-.074-.476-.041-.53-.017a.75.75 0 0 0-.25.18c-.04.043-.11.148-.152.509c-.043.368-.044.87-.044 1.625v8.128c0 .54.001.88.03 1.138c.028.239.072.327.112.382c.039.054.109.125.326.226c.236.11.56.218 1.07.389l1.165.388c.887.295 1.412.463 1.797.534" clip-rule="evenodd"/></svg>                Wild Areas</div>
            <div  onclick="setDungeonAreas()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 10a8 8 0 1 1 16 0v8.667c0 1.246 0 1.869-.268 2.333a2 2 0 0 1-.732.732c-.464.268-1.087.268-2.333.268H7.333C6.087 22 5.464 22 5 21.732A2 2 0 0 1 4.268 21C4 20.536 4 19.913 4 18.667z"/><path d="M20 18H9c-.943 0-1.414 0-1.707.293S7 19.057 7 20v2m13-8h-7c-.943 0-1.414 0-1.707.293S11 15.057 11 16v2m9-8h-3c-.943 0-1.414 0-1.707.293S15 11.057 15 12v2"/></g></svg>
                Dungeons</div>
            <div style="background: #91718B; outline: solid 1px #F97DFF; color: white; z-index: 2;" onclick="setEventAreas()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.658 11.002l-1.47 3.308c-1.856 4.174-2.783 6.261-1.77 7.274s3.098.085 7.272-1.77L13 18.342c2.517-1.119 3.776-1.678 3.976-2.757s-.774-2.053-2.722-4l-1.838-1.839c-1.947-1.948-2.921-2.922-4-2.721c-1.079.2-1.638 1.459-2.757 3.976M6.5 10.5l7 7m-9-2l4 4M16 8l3-3m-4.803-3c.4.667.719 2.4-1.197 4m9 3.803c-.667-.4-2.4-.719-4 1.197m0-9v.02M22 6v.02M21 13v.02M11 3v.02"/></svg>
                Events</div>
    `



    document.getElementById("explore-listing").innerHTML = ""
    document.getElementById("explore-menu-header").innerHTML = `


    <div style="display:flex; gap:0.2rem" >
    <span >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.658 11.002l-1.47 3.308c-1.856 4.174-2.783 6.261-1.77 7.274s3.098.085 7.272-1.77L13 18.342c2.517-1.119 3.776-1.678 3.976-2.757s-.774-2.053-2.722-4l-1.838-1.839c-1.947-1.948-2.921-2.922-4-2.721c-1.079.2-1.638 1.459-2.757 3.976M6.5 10.5l7 7m-9-2l4 4M16 8l3-3m-4.803-3c.4.667.719 2.4-1.197 4m9 3.803c-.667-.4-2.4-.719-4 1.197m0-9v.02M22 6v.02M21 13v.02M11 3v.02"/></svg>
    Events
    </span>
    <span class="header-help" data-help="Events"><svg  style="opacity:0.8; pointer-events:none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><g opacity="0.2"><path d="M12.739 17.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill-rule="evenodd" d="M10.71 5.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 1 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.71 9.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V11.08c0-.8.649-1.45 1.45-1.45" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.239 8.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5" clip-rule="evenodd"/></g><path d="M11 16.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"/><path fill-rule="evenodd" d="M9.71 4.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V10.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.638 8.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"/></g></svg></span>
    </div>

    <div class="rotation-timer">
    <strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724"/><path fill="currentColor" d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" opacity="0.5"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></svg>
    Rotation ${rotationEventCurrent}/${rotationEventMax}</strong>
    <div class="time-counter-event"></div>
    </div>
    `
    document.getElementById("explore-menu-header").style.backgroundImage = "url(img/bg/mini/special6.png)" 
    let ticketIndex = 0

  for (const i in areas) {
        if (areas[i].type !== "event") continue;
        if (areas[i].category !== eventCategory) continue;
        
        if (!Array.isArray(areas[i].rotation) && areas[i].rotation !== rotationEventCurrent) continue;    
        if (Array.isArray(areas[i].rotation) && !areas[i].rotation.includes(rotationEventCurrent)) continue;    

        const divAreas = document.createElement("div");
        divAreas.className = "explore-ticket";
        divAreas.dataset.area = i

        if ( areas[i].unlockRequirement == undefined || areas[i].unlockRequirement() ) {



        divAreas.addEventListener("click", e => { 
            
            if (areas[i].encounter && areas[i].difficulty===tier2difficulty && areas.vsEliteFourLance.defeated!=true) return
            saved.currentAreaBuffer = i
            document.getElementById(`preview-team-exit`).style.display = "flex"
            document.getElementById(`team-menu`).style.zIndex = `50`
            document.getElementById(`team-menu`).style.display = `flex`
            document.getElementById("menu-button-parent").style.display = "none"
            updatePreviewTeam()
            afkSeconds = 0
            document.getElementById(`explore-menu`).style.display = `none`

        })
    }


       let unlockRequirement = ""
       if (areas[i].unlockRequirement && !areas[i].unlockRequirement()) unlockRequirement =`<span class="ticket-unlock">
       
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity="0.5"/><path fill="currentColor" d="M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"/></svg>
       <span>${areas[i].unlockDescription}</span>
       </span>`
       if (areas[i].encounter && areas[i].difficulty===tier2difficulty && areas.vsEliteFourLance.defeated!=true) unlockRequirement =`<span class="ticket-unlock">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity="0.5"/><path fill="currentColor" d="M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"/></svg>
       Defeat Elite Four Lance in VS to unlock</span>`


       let eventTag ;
       eventTag = `<strong class="event-tag">Wild Zone ✦</strong>`
       if (areas[i].uncatchable) eventTag = `<strong style="filter:hue-rotate(140deg)" class="event-tag">Collection ◈</strong>`
       if (areas[i].encounter && areas[i].difficulty===tier1difficulty) eventTag = `<strong style="filter:hue-rotate(50deg)" class="event-tag">Tier I Raid ❖</strong>`
       if (areas[i].encounter && areas[i].difficulty===tier2difficulty) eventTag = `<strong style="filter:hue-rotate(200deg)" class="event-tag">Tier II Raid ❖</strong>`
       if (areas[i].encounter && areas[i].difficulty===tier3difficulty) eventTag = `<strong style="filter:hue-rotate(300deg)" class="event-tag">Tier III Raid ❖</strong>`

       let nameTag = ""
       if (areas[i].encounter) nameTag = `<svg class="event-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264" opacity="0.5"/><path fill="currentColor" d="m12.952 12.699l-.098-.176c-.38-.682-.57-1.023-.854-1.023s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.136.399-.136s.202.046.399.136l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354"/></svg>`

       let eventName = format(i)
       if (areas[i].name) eventName = areas[i].name


        let levelrange = `${Math.max(1,areas[i].level-10)}-${areas[i].level}`
        if (areas[i].encounter) levelrange = areas[i].level
        ticketIndex++

        divAreas.innerHTML = `







                        ${unlockRequirement}
                <span class="hitbox"></span>

                
                <div style="width: 100%;">


                <svg class="barcode-flair" xmlns="http://www.w3.org/2000/svg" width="236" height="144"><svg id="barcodeSVG" role="img" aria-label="Barcode preview" width="234px" height="142px" x="0px" y="0px" viewBox="0 0 234 142" xmlns="http://www.w3.org/2000/svg" version="1.1" style="transform: translate(0,0)"><rect x="0" y="0" width="234" height="142" style="fill:none;"/><g transform="translate(10, 10)" style="fill:#000000;"><text style="font: 20px Roboto" text-anchor="start" x="0" y="122">5</text></g><g transform="translate(34, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="112"/><rect x="4" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="3" y="134"></text></g><g transform="translate(40, 10)" style="fill:#000000;"><rect x="6" y="0" width="2" height="100"/><rect x="10" y="0" width="4" height="100"/><rect x="16" y="0" width="2" height="100"/><rect x="22" y="0" width="6" height="100"/><rect x="30" y="0" width="4" height="100"/><rect x="38" y="0" width="4" height="100"/><rect x="46" y="0" width="2" height="100"/><rect x="52" y="0" width="4" height="100"/><rect x="58" y="0" width="8" height="100"/><rect x="68" y="0" width="2" height="100"/><rect x="74" y="0" width="6" height="100"/><rect x="82" y="0" width="2" height="100"/><text style="font: 20px Roboto" text-anchor="middle" x="42" y="122">901234</text></g><g transform="translate(124, 10)" style="fill:#000000;"><rect x="2" y="0" width="2" height="112"/><rect x="6" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="5" y="134"></text></g><g transform="translate(134, 10)" style="fill:#000000;"><rect x="0" y="0" width="4" height="100"/><rect x="8" y="0" width="4" height="100"/><rect x="14" y="0" width="4" height="100"/><rect x="20" y="0" width="4" height="100"/><rect x="28" y="0" width="2" height="100"/><rect x="38" y="0" width="2" height="100"/><rect x="42" y="0" width="2" height="100"/><rect x="46" y="0" width="6" height="100"/><rect x="56" y="0" width="2" height="100"/><rect x="62" y="0" width="6" height="100"/><rect x="70" y="0" width="2" height="100"/><rect x="78" y="0" width="2" height="100"/><text style="font: 20px Roboto" text-anchor="middle" x="42" y="122">123457</text></g><g transform="translate(218, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="112"/><rect x="4" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="3" y="134"></text></g></svg></svg>



                    <span class="explore-ticket-left">

                    
                <span class="ticket-flair">
                #000${ticketIndex}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M25.719 4.781a2.9 2.9 0 0 0-1.125.344l-4.719 2.5L13.5 6.062l-.375-.093l-.375.187l-2.156 1.25l-1.281.75l1.187.906l2.719 2.063l-3.406 1.813l-3.657-1.657l-.437-.187l-.438.219l-1.75.937l-1.156.625l.875.938l5.406 5.812l.5.594l.688-.375L15 17.094l-1.031 5.687l-.344 1.813l1.719-.719l2.562-1.094l.375-.156l.157-.375l3.718-9.031l5.25-2.813c1.446-.777 2.028-2.617 1.25-4.062a3 3 0 0 0-1.781-1.438a3.1 3.1 0 0 0-1.156-.125m.187 2c.125-.008.254-.004.375.032a.979.979 0 0 1 .188 1.812l-5.594 3.031l-.313.156l-.125.344l-3.718 8.938l-.438.187l1.063-5.906l.375-2.031l-1.813.969l-6.312 3.406l-3.969-4.313l.156-.094l3.657 1.626l.468.218l.406-.25l15.22-8.031a.9.9 0 0 1 .374-.094M13.375 8.094l3.844.937l-2.063 1.063l-2.25-1.719zM3 26v2h26v-2z"/></svg>
                </span>

                        <span style="font-size:1.1rem">${eventName}${nameTag}</span>
                        <span><strong style="background:#D57392">Level: ${levelrange}</strong>${eventTag}<span></span></span>
                    </span>
                </div>
                <div style="width: 8rem;" class="explore-ticket-right">
                    <span class="explore-ticket-bg" style="background-image: url(img/bg/${areas[i].background}.png);"></span>
                    <img class="explore-ticket-sprite sprite-trim" style="z-index: 10;" src="img/pkmn/sprite/${areas[i].icon.id}.png">
                </div>







        `;

        if (areas[i].encounter) {
        delete divAreas.dataset.area;
        divAreas.dataset.trainer = i
        //divAreas.classList.add("encounter-ticket")
        }


        document.getElementById("explore-listing").appendChild(divAreas);




    }



    updateEventCounters()


}




let rotationEventCurrent = 1;
let rotationWildCurrent = 1;
let rotationDungeonCurrent = 1;
let rotationFrontierCurrent = 1;

let dailySeed = 0

function getSeed() {
  const now = new Date();
  const utcTime = now.getTime(); 
  const halfDayNumber = Math.floor(utcTime / (1000 * 60 * 60 * 12));
  const dayNumber = Math.floor(utcTime / (1000 * 60 * 60 * 24));
  dailySeed = dayNumber

  rotationWildCurrent = ((halfDayNumber-6) % rotationWildMax) + 1;
  rotationDungeonCurrent = (halfDayNumber % rotationDungeonMax) + 1;

  const period = Math.floor(dayNumber / 3);
  rotationEventCurrent = ((period-3) % rotationEventMax) + 1;
  rotationFrontierCurrent = (period % rotationFrontierMax) + 1;

  return dayNumber;
}

let lastHalfDayNumber = Math.floor(Date.now() / (1000 * 60 * 60 * 12));

function updateDailyCounters() {
  const contadores = document.querySelectorAll('.time-counter-daily');

  const ahora = Date.now();
  const halfDayNumber = Math.floor(ahora / (1000 * 60 * 60 * 12));

  if (halfDayNumber !== lastHalfDayNumber) {
    lastHalfDayNumber = halfDayNumber;

    getSeed();
    setWildAreas();
    setDungeonAreas();
  }

  const nextHalfDayStart = (halfDayNumber + 1) * (1000 * 60 * 60 * 12);
  const diff = nextHalfDayStart - ahora;

  const horas = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const minutos = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const segundos = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

  contadores.forEach(c => {
    c.textContent = `${horas}:${minutos}:${segundos}`;
  });
}

let lastEventPeriod = Math.floor(
  Math.floor(Date.now() / 86400000) / 3
);

function updateEventCounters() {
  const contadores = document.querySelectorAll('.time-counter-event');

  const ahora = Date.now();
  const dayNumber = Math.floor(ahora / 86400000);
  const currentPeriod = Math.floor(dayNumber / 3);

  if (currentPeriod !== lastEventPeriod) {
    lastEventPeriod = currentPeriod;

    getSeed();
    setEventAreas();
  }

  const nextPeriodStart = (currentPeriod + 1) * 3 * 86400000;
  const diff = nextPeriodStart - ahora;

  const horas = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const minutos = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const segundos = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

  contadores.forEach(c => {
    c.textContent = `${horas}:${minutos}:${segundos}`;
  });
}


setInterval(updateDailyCounters, 1000);
setInterval(updateEventCounters, 1000);


document.getElementById("explore-pkmn-tag").addEventListener("change", e => {
  pkmn[currentEditedPkmn].tag = document.getElementById("explore-pkmn-tag").value
  if (document.getElementById("explore-pkmn-tag").value=="none") pkmn[currentEditedPkmn].tag = undefined
  updatePokedex()
});

document.getElementById("pokedex-filter-tag").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-type").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-type-2").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-level").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-ability").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-shiny").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-signature").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-ribbon").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-division").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-evolution").addEventListener("change", e => {
  updatePokedex()
});

function resetPokedexFilters(){
    document.getElementById("pokedex-search").value = ""
    document.getElementById("pokedex-filter-tag").value = "all";
    document.getElementById("pokedex-filter-type").value = "all";
    document.getElementById("pokedex-filter-type-2").value = "all";
    document.getElementById("pokedex-filter-level").value = "all";
    document.getElementById("pokedex-filter-division").value = "all";
    document.getElementById("pokedex-filter-evolution").value = "all";
    document.getElementById("pokedex-filter-ability").value = "all";
    document.getElementById("pokedex-filter-shiny").value = "all";
    document.getElementById("pokedex-filter-signature").value = "all";
    document.getElementById("pokedex-filter-ribbon").value = "all";
}


document.getElementById("pokedex-sort-filter").addEventListener("change", e => {
  updatePokedex()
});




document.getElementById("pokedex-search").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    searchedPkmn = fusePkmn.search(document.getElementById("pokedex-search").value)
    document.getElementById("pokedex-search").blur()
    updatePokedex()
  }
});



let fusePkmn;
let searchedPkmn = []


function updatePokedex(){

    if (document.getElementById(`pokedex-menu`).style.display!=="flex") return

    document.getElementById(`pokedex-list`).innerHTML = ""
    document.getElementById("pokedex-filters-title").style.display = "none"
    document.getElementById("pokedex-filters-cancel").style.display = "none"
    document.getElementById("pokedex-filters-remove").style.display = "none"


    if (dexTeamSelect != undefined) {
        document.getElementById("pokedex-filters-title").style.display = "flex"
        document.getElementById("pokedex-filters-cancel").style.display = "flex"
        document.getElementById("pokedex-filters-remove").style.display = "flex"
        document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to add to the team`
    }

    if (tmToTeach != undefined) {
        document.getElementById("pokedex-filters-title").style.display = "flex"
        document.getElementById("pokedex-filters-cancel").style.display = "flex"
        document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to teach ${format(tmToTeach)}`
    }

    if (evoItemToUse != undefined) {
        document.getElementById("pokedex-filters-title").style.display = "flex"
        document.getElementById("pokedex-filters-cancel").style.display = "flex"
        document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to use the ${format(evoItemToUse)}`
    }

    if (vitaminToUse != undefined) {
        document.getElementById("pokedex-filters-title").style.display = "flex"
        document.getElementById("pokedex-filters-cancel").style.display = "flex"
        document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to use the ${format(vitaminToUse)}`
    }

    if (itemToUse != undefined) {
        document.getElementById("pokedex-filters-title").style.display = "flex"
        document.getElementById("pokedex-filters-cancel").style.display = "flex"
        document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to use the ${format(itemToUse)}`
    }

    if (dexHostSelect == true) {
        document.getElementById("pokedex-filters-title").style.display = "flex"
        document.getElementById("pokedex-filters-cancel").style.display = "flex"
        document.getElementById("pokedex-filters-title").innerHTML = `Select a host Pokemon`
    }

    if (dexTrainSelect == true) {
        document.getElementById("pokedex-filters-title").style.display = "flex"
        document.getElementById("pokedex-filters-cancel").style.display = "flex"
        document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to train`
    }

    if (dexSampleSelect == true) {
        document.getElementById("pokedex-filters-title").style.display = "flex"
        document.getElementById("pokedex-filters-cancel").style.display = "flex"
        document.getElementById("pokedex-filters-title").innerHTML = `Select a sample Pokemon`
    }

    let totalPokemon = 0
    let gotPokemon = 0
    let sortedPokemon = []






    //create an array, used for sorting
    for (const i in pkmn) {
        //filters
        if (pkmn[i].ability == undefined) pkmn[i].ability = learnPkmnAbility(pkmn[i].id)   
        if (document.getElementById(`pokedex-filter-type`).value !== "all" && !pkmn[i].type.includes(document.getElementById(`pokedex-filter-type`).value)) continue
        if (document.getElementById(`pokedex-filter-type-2`).value !== "all" && !pkmn[i].type.includes(document.getElementById(`pokedex-filter-type-2`).value)) continue
        if (document.getElementById(`pokedex-filter-level`).value !== "all" && !( pkmn[i].level <= (document.getElementById(`pokedex-filter-level`).value) &&  pkmn[i].level >= (document.getElementById(`pokedex-filter-level`).value-19) )    ) continue
        if (document.getElementById(`pokedex-filter-ability`).value !== "all" && document.getElementById(`pokedex-filter-ability`).value!=4 && ability[pkmn[i].ability].rarity !=  document.getElementById(`pokedex-filter-ability`).value   ) continue
        if (document.getElementById(`pokedex-filter-ability`).value == "4" && (pkmn[i].hiddenAbilityUnlocked == true ||  pkmn[i].hiddenAbility==undefined) ) continue        
        if ((v = document.getElementById("pokedex-filter-shiny").value) !== "all" && pkmn[i].shiny != (v === "true" ? true : undefined)) continue;
        if (document.getElementById(`pokedex-filter-division`).value !== "all" && returnPkmnDivision(pkmn[i]) !=  document.getElementById(`pokedex-filter-division`).value   ) continue
        if (document.getElementById(`pokedex-filter-tag`).value !== "all" && document.getElementById(`pokedex-filter-tag`).value !== "none" && pkmn[i].tag!==document.getElementById(`pokedex-filter-tag`).value ) continue
        if (document.getElementById(`pokedex-filter-tag`).value == "none" && pkmn[i].tag!=undefined ) continue
        if (document.getElementById(`pokedex-filter-ribbon`).value !== "all" && pkmn[i].ribbons==undefined ) continue
        if (document.getElementById(`pokedex-filter-tag`).value !== "hidden" && pkmn[i].tag=="hidden" ) continue

        if (document.getElementById(`pokedex-filter-signature`).value == "false" && pkmn[i].signature==undefined ) continue
        
        let missingEvolution = false;
        let missingLevelEvolution = false;
        if (pkmn[i].evolve !== undefined) {
        for (const evo in pkmn[i]?.evolve()) {
        if ( pkmn[i].evolve()[evo].pkmn.caught==0 ) missingEvolution = true
        if ( pkmn[i].evolve()[evo].pkmn.caught==0 ) {
            missingEvolution = true
            // Check for uncaught level-based evolutions
            if ( pkmn[i].evolve()[evo].level !== undefined ) missingLevelEvolution = true
        }

        }
        } 
 
        
        if (document.getElementById(`pokedex-filter-evolution`).value !== "all" && !missingEvolution  ) continue

        if (document.getElementById(`pokedex-filter-evolution`).value == "level-only" && !missingLevelEvolution  ) continue



        totalPokemon++

        if (pkmn[i].caught==0) continue

        if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===1 && (returnPkmnDivision(pkmn[i])!="C" &&  returnPkmnDivision(pkmn[i])!="D")) continue
        if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===2 && (returnPkmnDivision(pkmn[i])!="B" && returnPkmnDivision(pkmn[i])!="C" &&  returnPkmnDivision(pkmn[i])!="D")) continue
        if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===3 && (returnPkmnDivision(pkmn[i])!="A" && returnPkmnDivision(pkmn[i])!="B" && returnPkmnDivision(pkmn[i])!="C" &&  returnPkmnDivision(pkmn[i])!="D")) continue

        gotPokemon++
        sortedPokemon.push(pkmn[i])
    }


    const sort = document.getElementById("pokedex-sort-filter").value

if (sort !== "default") {
    sortedPokemon.sort((b, a) => {

        if (sort === "level")
            return a.level - b.level

        if (sort.endsWith("Bst")) {
            const stat = sort.replace("Bst", "")
            return a.bst[stat] - b.bst[stat]
        }

        if (sort.endsWith("Iv")) {
            const stat = sort.replace("Iv", "")
            return a.ivs[stat] - b.ivs[stat]
        }

        return 0
    })
}


fusePkmn = new Fuse(sortedPokemon, {
    keys: [ { name: 'name', getFn: obj => obj.id }, 'type', "level", `ability`, `hiddenAbility.id`, `movepool`],
    threshold: 0.2
})


if (document.getElementById("pokedex-search").value!="") {
    sortedPokemon = searchedPkmn.map(r => r.item);
}


    for (const p of sortedPokemon) {

        const div = document.createElement(`div`)

        const i = p.id

        div.dataset.pkmnEditor = i

        let nameMarks = ""
        let markColor = "#FF4671" //default shiny star color
        if (pkmn[i].tag=="red") markColor = `#FF4942`
        if (pkmn[i].tag=="orange") markColor = `#FFAD42`
        if (pkmn[i].tag=="yellow") markColor = `#FFFF5E`
        if (pkmn[i].tag=="green") markColor = `#4F9E3A`
        if (pkmn[i].tag=="lime") markColor = `#A8EA6B`
        if (pkmn[i].tag=="blue") markColor = `#5454FF`
        if (pkmn[i].tag=="teal") markColor = `#6BEAA4`
        if (pkmn[i].tag=="pink") markColor = `pink`
        if (pkmn[i].tag=="magenta") markColor = `#CA478F`

        if (pkmn[i].shiny) nameMarks += `<strong style="color:${markColor}; margin-left:0.2rem">✦</strong>`
        else{
        if (pkmn[i].tag=="red") nameMarks += `<strong style="color:${markColor}; margin-left:0.2rem">⬤</strong>`
        if (pkmn[i].tag=="orange") nameMarks += `<strong style="color:${markColor}; margin-left:0.2rem">⬤</strong>`
        if (pkmn[i].tag=="yellow") nameMarks += `<strong style="color:${markColor}; margin-left:0.2rem">⬤</strong>`
        if (pkmn[i].tag=="green") nameMarks += `<strong style="color:${markColor}; margin-left:0.2rem">⬤</strong>`
        if (pkmn[i].tag=="lime") nameMarks += `<strong style="color:${markColor}; margin-left:0.2rem">⬤</strong>`
        if (pkmn[i].tag=="blue") nameMarks += `<strong style="color:${markColor}; margin-left:0.2rem">⬤</strong>`
        if (pkmn[i].tag=="teal") nameMarks += `<strong style="color:${markColor}; margin-left:0.2rem">⬤</strong>`
        if (pkmn[i].tag=="pink") nameMarks += `<strong style="color:${markColor}; margin-left:0.2rem">⬤</strong>`
        if (pkmn[i].tag=="magenta") nameMarks += `<strong style="color:${markColor}; margin-left:0.2rem">⬤</strong>`
        }



        div.innerHTML = `<span style="display:flex; white-space:nowrap">lvl ${pkmn[i].level} ${nameMarks}</span><img class="sprite-trim" src="img/pkmn/sprite/${i}.png">`
        if (pkmn[i].shiny) div.innerHTML = `<span style="display:flex; white-space:nowrap">lvl ${pkmn[i].level} ${nameMarks}</span> <img class="sprite-trim" src="img/pkmn/shiny/${i}.png">`
        if (pkmn[i].shiny && pkmn[i].shinyDisabled == true) div.innerHTML = `<span style="display:flex; white-space:nowrap">lvl ${pkmn[i].level} ${nameMarks}</span><img class="sprite-trim" src="img/pkmn/sprite/${i}.png">`

        if (dexTeamSelect!==undefined) { //preview team display
            document.getElementById(`pokedex-filters-cancel`).style.display = "flex"
        }


        if (tmToTeach != undefined) {



        //filter pokemon by being able to learn
        if (!move[tmToTeach].moveset.includes("all") &&  !move[tmToTeach].moveset.some(t => pkmn[i].type.includes(t))) continue;

        //filter pokemon out that already have the move
        if (pkmn[i].movepool.includes(tmToTeach)) continue;
            div.addEventListener("click", e => { 
                pkmn[i].movepool.push(move[tmToTeach].id)
                item[tmToTeach+"Tm"].got--
                updateItemBag()
                exitTmTeaching()
            })
        }


        if (evoItemToUse != undefined ) {

            //sketch ahh code but i think it works

            if (pkmn[i].evolve==undefined) continue

            let hidePkmn = true

            for (const evo in pkmn[i].evolve()) {

            if (pkmn[i].evolve()[evo].item !== undefined && pkmn[i].evolve()[evo].item.id === evoItemToUse) hidePkmn = false

            if (pkmn[i].evolve()[evo]?.item?.id==undefined) continue
            if (item[pkmn[i].evolve()[evo]?.item.id]?.id !== evoItemToUse) continue


            if (pkmn[ pkmn[i].evolve()[evo].pkmn.id ].caught!=0)  hidePkmn = true

            let levelToEvolve = wildAreaLevel2
            if (evoItemToUse === "linkStone") levelToEvolve = wildAreaLevel4
            if (evoItemToUse === "oddRock") levelToEvolve = wildAreaLevel4
            if (pkmn[i].evolve()[evo].pkmn.id.slice(0, 4) === "mega") levelToEvolve = 100
 
            if (pkmn[i].level<levelToEvolve) hidePkmn = true


            div.addEventListener("click", e => { 
                givePkmn(pkmn[ pkmn[i].evolve()[evo].pkmn.id ],1)
                item[evoItemToUse].got--
                document.getElementById("tooltipTop").style.display = "none"    
                document.getElementById("tooltipMid").style.display = "none"
                document.getElementById("tooltipBottom").innerHTML = `${format(pkmn[ pkmn[i].evolve()[evo].pkmn.id ].id)} has been unlocked!`
                openTooltip()
                updateItemBag()
                
                exitTmTeaching()
         })

         }

         if (hidePkmn) continue

        
        }


        if (vitaminToUse != undefined) {

            
            if (vitaminToUse === "hpUp" && pkmn[i].ivs.hp >= 6) continue
            if (vitaminToUse === "protein" && pkmn[i].ivs.atk >= 6) continue
            if (vitaminToUse === "iron" && pkmn[i].ivs.def >= 6) continue
            if (vitaminToUse === "calcium" && pkmn[i].ivs.satk >= 6) continue
            if (vitaminToUse === "zinc" && pkmn[i].ivs.sdef >= 6) continue
            if (vitaminToUse === "carbos" && pkmn[i].ivs.spe >= 6) continue

                div.addEventListener("click", e => { 

                let statToRise;
                if (vitaminToUse === "hpUp") statToRise = "hp"
                if (vitaminToUse === "protein") statToRise = "atk"
                if (vitaminToUse === "iron") statToRise = "def"
                if (vitaminToUse === "calcium") statToRise = "satk"
                if (vitaminToUse === "zinc") statToRise = "sdef"
                if (vitaminToUse === "carbos") statToRise = "spe"

                pkmn[i].ivs[statToRise]++
                item[vitaminToUse].got--

                updatePokedex()
                
                if (item[vitaminToUse].got<=0){
                updateItemBag()
                exitTmTeaching()
                }

         })

        
        }

        if (itemToUse != undefined) {

            
            if (itemToUse == item.rareCandy.id){
                if (pkmn[i].level >= 100) continue

                div.addEventListener("click", e => { 

                pkmn[i].level++
                let learntMove = learnPkmnMove(pkmn[i].id, pkmn[i].level)
                if (learntMove != undefined) {
                if (pkmn[ i ].level % 7 === 0) pkmn[ i ].movepool.push(learntMove)
                }


                item.rareCandy.got--
                updatePokedex()  


                if (item.rareCandy.got<=0){
                updateItemBag()
                exitTmTeaching()
                }
                })
                
            }


            if (itemToUse == item.abilityCapsule.id){
                if (pkmn[i].hiddenAbility == undefined) continue
                if (pkmn[i].hiddenAbilityUnlocked == true) continue

                div.addEventListener("click", e => { 

                pkmn[i].hiddenAbilityUnlocked = true
                item.abilityCapsule.got--
                updatePokedex()  


                if (item.abilityCapsule.got<=0){
                updateItemBag()
                exitTmTeaching()
                }
                })
                
            }

                
            if (itemToUse == item.abilityPatch.id){

                div.addEventListener("click", e => { 

                const newAbility = learnPkmnAbility(i)
                pkmn[i].ability = newAbility
                
                item.abilityPatch.got--
                
                document.getElementById("tooltipTitle").innerHTML = `New ability!`
                document.getElementById("tooltipTop").style.display = "none"    
                document.getElementById("tooltipMid").innerHTML = `<div class="genetics-overview-tags"><div style="filter:hue-rotate(0deg)">★ ${format(newAbility)}</div></div>`
                if (ability[newAbility].rarity===2) document.getElementById("tooltipMid").innerHTML = `<div class="genetics-overview-tags"><div style="filter:hue-rotate(100deg)">★ ${format(newAbility)} (Uncommon!)</div></div>`
                if (ability[newAbility].rarity===3) document.getElementById("tooltipMid").innerHTML = `<div class="genetics-overview-tags"><div style="filter:hue-rotate(200deg)">★ ${format(newAbility)} (Rare!)</div></div>`
        
                document.getElementById("tooltipBottom").style.display = "none" 
                openTooltip()


                if (item.abilityPatch.got<=0){
                updateItemBag()
                exitTmTeaching()
                }
                })
                
            }

        
        }

    if (dexTeamSelect != undefined) { //called when switching team member

        //this prevents already equipped pokemon to be equipped again
        if (saved.previewTeams[saved.currentPreviewTeam].slot1.pkmn == pkmn[i].id) continue
        if (saved.previewTeams[saved.currentPreviewTeam].slot2.pkmn == pkmn[i].id) continue
        if (saved.previewTeams[saved.currentPreviewTeam].slot3.pkmn == pkmn[i].id) continue
        if (saved.previewTeams[saved.currentPreviewTeam].slot4.pkmn == pkmn[i].id) continue
        if (saved.previewTeams[saved.currentPreviewTeam].slot5.pkmn == pkmn[i].id) continue
        if (saved.previewTeams[saved.currentPreviewTeam].slot6.pkmn == pkmn[i].id) continue

        div.addEventListener("click", e => { 
            saved.previewTeams[saved.currentPreviewTeam][dexTeamSelect].pkmn = pkmn[i].id
            updatePreviewTeam()
            document.getElementById(`pokedex-menu`).style.zIndex = "30"
            document.getElementById(`team-menu`).style.zIndex = "50"
            document.getElementById(`team-menu`).style.display = "flex"
            updateItemBag()
            document.getElementById(`pokedex-menu`).style.display = "none"
            document.getElementById(`pokedex-menu`).style.zIndex = "30"
            dexTeamSelect = undefined
        })

    }



        if (dexHostSelect == true) {

            if (pkmn[i].level!=100) continue
            if (i == "ditto") continue //gotcha
            if (pkmn[i].id == saved.geneticSample) continue


            div.addEventListener("click", e => { 

                saved.geneticHost = pkmn[i].id


                document.getElementById(`pokedex-menu`).style.display = "none"
                document.getElementById(`pokedex-menu`).style.zIndex = "30"
                

                dexHostSelect = undefined
                setGeneticMenu()
            })

        }



        if (dexTrainSelect == true) {

            if (pkmn[i].id == saved.trainingPokemon) continue
            if (i == "ditto") continue //gotcha 2.0


            div.addEventListener("click", e => { 

                saved.trainingPokemon = pkmn[i].id


                document.getElementById(`pokedex-menu`).style.display = "none"
                document.getElementById(`pokedex-menu`).style.zIndex = "30"
                

                dexTrainSelect = undefined
                setTrainingMenu()
            })

        }
        

        if (dexSampleSelect == true) {


   
            if (pkmn[i].id == saved.geneticHost) continue


            div.addEventListener("click", e => { 

                saved.geneticSample = pkmn[i].id


                document.getElementById(`pokedex-menu`).style.display = "none"
                document.getElementById(`pokedex-menu`).style.zIndex = "30"
                

                dexSampleSelect = undefined
                setGeneticMenu()
            })

        }



        document.getElementById("pokedex-list").appendChild(div);

    }


    document.getElementById(`pokedex-total`).innerHTML = `Caught: ${gotPokemon}/${totalPokemon}`
    if (gotPokemon == totalPokemon) {document.getElementById(`pokedex-total`).style.background = "rgba(187, 146, 85, 1)";     document.getElementById(`pokedex-total`).innerHTML = `Caught: ${gotPokemon}/${totalPokemon} <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="SVGIz3eBe9X"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M8 44h8m-4 0V4"/><path fill="#555555" d="M40 6H12v16h28l-4-8z"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGIz3eBe9X)"/></svg>`
}
    else document.getElementById(`pokedex-total`).style.background = "rgba(91, 114, 163, 1)"

    document.getElementById(`pokedex-total`).style.display = "flex"
    if (document.getElementById(`pokedex-filter-level`).value !== "all") document.getElementById(`pokedex-total`).style.display = "none"
    if (document.getElementById(`pokedex-filter-shiny`).value !== "all") document.getElementById(`pokedex-total`).style.display = "none"
    if (document.getElementById(`pokedex-filter-tag`).value !== "all") document.getElementById(`pokedex-total`).style.display = "none"
    if (document.getElementById(`pokedex-filter-ability`).value !== "all") document.getElementById(`pokedex-total`).style.display = "none"
    if (document.getElementById(`pokedex-filter-evolution`).value !== "all") document.getElementById(`pokedex-total`).style.display = "none"
    if (document.getElementById("pokedex-search").value!="") document.getElementById(`pokedex-total`).style.display = "none"

}

function exitTmTeaching(mod){ //what a fucking disgrace of a code i wrote here

                if (evoItemToUse || tmToTeach || vitaminToUse || itemToUse){
                evoItemToUse = undefined
                tmToTeach = undefined
                vitaminToUse = undefined
                itemToUse = undefined
                document.getElementById("menu-button-parent").style.display = "flex"

                


                document.getElementById(`pokedex-menu`).style.zIndex = "30"
                document.getElementById(`item-menu`).style.zIndex = "40"
                document.getElementById(`item-menu`).style.display = "flex"
                updateItemBag()

                document.getElementById(`pokedex-menu`).style.display = "none"
                document.getElementById(`pokedex-menu`).style.zIndex = "30"
}



    if (dexHostSelect==true && mod=="remove"){
        saved.geneticHost = undefined;
        setGeneticMenu()
    }

    if (dexHostSelect==true){
        document.getElementById(`pokedex-menu`).style.zIndex = "30"
        document.getElementById(`pokedex-menu`).style.display = "none"
        dexHostSelect = undefined
    }

    if (dexTrainSelect==true){
        document.getElementById(`pokedex-menu`).style.zIndex = "30"
        document.getElementById(`pokedex-menu`).style.display = "none"
        dexTrainSelect = undefined
    }

    if (dexSampleSelect==true){
        document.getElementById(`pokedex-menu`).style.zIndex = "30"
        document.getElementById(`pokedex-menu`).style.display = "none"
        dexSampleSelect = undefined
        setGeneticMenu()
    }


    //handles removing a team pokemon
    if (dexTeamSelect !== undefined && mod=="remove") { 

        document.getElementById(`team-menu`).style.zIndex = "50";
        document.getElementById(`team-menu`).style.display = "flex" ;
        document.getElementById(`pokedex-menu`).style.display = "none";
        document.getElementById(`pokedex-menu`).style.zIndex = "30"
        saved.previewTeams[saved.currentPreviewTeam][dexTeamSelect].item = undefined;
        saved.previewTeams[saved.currentPreviewTeam][dexTeamSelect].pkmn = undefined;
        dexTeamSelect = undefined;
        updatePreviewTeam()

    }

    //handles exit out of team swapping
    if (dexTeamSelect !== undefined && mod=="cancel") {

        document.getElementById(`team-menu`).style.zIndex = "50";
        document.getElementById(`team-menu`).style.display = "flex" ;
        document.getElementById(`pokedex-menu`).style.display = "none";
        document.getElementById(`pokedex-menu`).style.zIndex = "30"
        dexTeamSelect = undefined;
        updatePreviewTeam()

    }


}

function switchMenu(id){

    document.getElementById(`pokedex-menu`).scrollTop = 0
    saved.currentAreaBuffer = undefined


    if (/vs|items|team|dex|dictionary|guide/.test(id) && saved.tutorialStep != "none") {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `Complete the tutorial first`
        openTooltip()
        return
    }

    if (id=="shop" && areas.vsGymLeaderBrock.defeated == false) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `Defeat Gym Leader Brock in VS mode to unlock`
        openTooltip()
        return
    }



    if (id=="genetics" && areas.vsEliteFourLance.defeated == false) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `Defeat Elite Four Lance in VS mode to unlock`
        openTooltip()
        return
    }

    if (id=="training" && areas.vsGymLeaderMisty.defeated == false) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `Defeat Gym Leader Misty in VS mode to unlock`
        openTooltip()
        return
    }


    if (id=="team") document.getElementById(`auto-build-button`).style.display = "none"
    else document.getElementById(`auto-build-button`).style.display = "flex"

    if (id=="team") document.getElementById(`pkmn-team-return`).style.display = "none"
    else document.getElementById(`pkmn-team-return`).style.display = "flex"


    if (id=="dex") document.getElementById(`pokedex-filters`).style.paddingTop = "6.5rem"
    else document.getElementById(`pokedex-filters`).style.paddingTop = "1rem"


    //if (id=="team") document.getElementById(`preview-team-exit`).textContent = "Save and exit"
    //else document.getElementById(`preview-team-exit`).textContent = "Save and go!"
    

    if (saved.tutorial && saved.tutorialStep === "intro") {saved.tutorialStep = "travel"; openTutorial()}

    document.getElementById(`explore-menu`).style.zIndex = "30"
    document.getElementById(`pokedex-menu`).style.zIndex = "30"
    document.getElementById(`item-menu`).style.zIndex = "30"
    document.getElementById(`vs-menu`).style.zIndex = "30"
    document.getElementById(`content-explore`).style.zIndex = "30"
    document.getElementById(`team-menu`).style.zIndex = "30"
    document.getElementById(`settings-menu`).style.zIndex = "30"
    document.getElementById(`guide-menu`).style.zIndex = "30"
    document.getElementById(`genetics-menu`).style.zIndex = "30"
    document.getElementById(`shop-menu`).style.zIndex = "30"
    document.getElementById(`training-menu`).style.zIndex = "30"
    document.getElementById(`dictionary-menu`).style.zIndex = "30"


    if (id==="travel") {

        if (saved.currentArea == areas.training.id) {openMenu(); return; }


        if (saved.currentArea==undefined) {
        document.getElementById(`explore-menu`).style.display = "flex"
        document.getElementById(`explore-menu`).style.zIndex = "40"
        setWildAreas()
        }

        else {
        document.getElementById(`content-explore`).style.display = "flex"
        document.getElementById(`content-explore`).style.zIndex = "40"    
        }


    } 

    if (id==="dex") {
        document.getElementById(`pokedex-menu`).style.display = "flex"
        document.getElementById(`pokedex-menu`).style.zIndex = "40"
        updatePokedex()
    } 

    if (id==="dictionary") {
        document.getElementById(`dictionary-menu`).style.display = "flex"
        document.getElementById(`dictionary-menu`).style.zIndex = "40"
        updateDictionary()
    } 

    if (id==="training") {

        if (saved.currentArea!==undefined && saved.currentArea!= areas.training.id) {openMenu(); return; }

        if (saved.currentArea==undefined) {
        document.getElementById(`training-menu`).style.display = "flex"
        document.getElementById(`training-menu`).style.zIndex = "40"
        setTrainingMenu()
        }

        else {
        setTimeout(() => {
        document.getElementById(`content-explore`).style.display = "flex"
        document.getElementById(`content-explore`).style.zIndex = "40"         
        }, 1);
        }


    } 

    if (id==="shop") {
        document.getElementById(`shop-menu`).style.display = "flex"
        document.getElementById(`shop-menu`).style.zIndex = "40"
        updateItemShop()
    } 

    if (id==="genetics") {
        document.getElementById(`genetics-menu`).style.display = "flex"
        document.getElementById(`genetics-menu`).style.zIndex = "40"
        setGeneticMenu()
    } 

    if (id==="settings") {
        document.getElementById(`settings-menu`).style.display = "flex"
        document.getElementById(`settings-menu`).style.zIndex = "40"
    } 

    if (id==="guide") {
        document.getElementById(`guide-menu`).style.display = "flex"
        document.getElementById(`guide-menu`).style.zIndex = "40"
    } 

    if (id==="team") {

        if (saved.currentArea!==undefined) {openMenu(); return; }


        document.getElementById(`team-menu`).style.display = "flex"
        document.getElementById(`team-menu`).style.zIndex = "40"
        document.getElementById(`preview-team-exit`).style.display = "none"
        updatePreviewTeam()
    } 

    if (id==="items") {
        document.getElementById(`item-menu`).style.display = "flex"
        document.getElementById(`item-menu`).style.zIndex = "40"
        updateItemBag()
    } 

    if (id==="vs") {
        if (saved.currentArea!==undefined) {openMenu(); return; }
        document.getElementById(`vs-menu`).style.display = "flex"
        document.getElementById(`vs-menu`).style.zIndex = "40"
        updateVS()
    } 


    if (id!=="items") document.getElementById(`item-menu`).style.display = "none"
    if (id!=="dex") document.getElementById(`pokedex-menu`).style.display = "none"
    if (id!=="travel") document.getElementById(`explore-menu`).style.display = "none"    
    if (id!=="travel") document.getElementById(`content-explore`).style.display = "none"    
    if (id!=="vs") document.getElementById(`vs-menu`).style.display = "none"    
    if (id!=="team") document.getElementById(`team-menu`).style.display = "none"    
    if (id!=="settings") document.getElementById(`settings-menu`).style.display = "none"    
    if (id!=="guide") document.getElementById(`guide-menu`).style.display = "none"    
    if (id!=="genetics") document.getElementById(`genetics-menu`).style.display = "none"    
    if (id!=="shop") document.getElementById(`shop-menu`).style.display = "none"    
    if (id!=="training") document.getElementById(`training-menu`).style.display = "none"    
    if (id!=="dictionary") document.getElementById(`dictionary-menu`).style.display = "none"    


    openMenu()


}

let bagCategory = 'held'
let tmToTeach = undefined
let evoItemToUse = undefined
let vitaminToUse = undefined
let itemToUse = undefined

function updateItemBag(){

    document.getElementById(`item-menu-list`).innerHTML = ""
    document.getElementById("pokedex-filters-remove").style.display = "none"
    document.getElementById("item-menu-cancel").style.display = "none"
    document.getElementById("item-menu-remove").style.display = "none"

    for (const i in item) {

        if (!item[i].type?.includes(bagCategory)) continue
        //if (item[i].evo && bagCategory!== "key" && !item[i].type?.includes(bagCategory)) continue
        
        if (item[i].rotation && !Array.isArray(item[i].rotation) && item[i].rotation!== rotationEventCurrent) item[i].got=0
        if (item[i].rotation && Array.isArray(item[i].rotation) && !item[i].rotation.includes(rotationEventCurrent)) item[i].got=0

        //if (!rng(0.05)) continue
        if (item[i].got==0) continue


        const div = document.createElement(`div`)

        div.dataset.item = i
        if (item[i].type !== "tm") div.innerHTML = `<img src="img/items/${i}.png"> <span class="item-list-name">${format(i)}</span> <span>x${item[i].got}</span>`
        if (item[i].move && move[item[i].move]) div.innerHTML = `<img src="img/items/tm${format(move[item[i].move].type)}.png"> <span class="item-list-name">${format(i)} <strong style="opacity:0.6; font-weight:200; white-space:nowrap; font-size:0.9rem; margin-left:0.2rem"> (${move[item[i].move].power} BP, ${format(move[item[i].move].split).slice(0, 3)})</strong> </span>  <span>x${item[i].got}</span>`



        if (item[i].type == "tm" && dexTeamSelect==undefined) {

            div.addEventListener("click", e => { 
            document.getElementById(`pokedex-menu`).style.display = "flex"
            document.getElementById(`pokedex-menu`).style.zIndex = "40"

            tmToTeach = item[i].move

            updatePokedex()

            document.getElementById("pokedex-filters-title").style.display = "flex"
            document.getElementById("pokedex-filters-cancel").style.display = "flex"
            document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to teach ${format(item[i].move)}`
            document.getElementById("menu-button-parent").style.display = "none"
            document.getElementById(`item-menu`).style.display = "none"

            })
        }


        if (item[i].usable) { 
            div.addEventListener("click", e => { 
            item[i].effect() 
            })
        }


        if (item[i].evo && dexTeamSelect==undefined) {
            div.addEventListener("click", e => { 
            document.getElementById(`pokedex-menu`).style.display = "flex"
            document.getElementById(`pokedex-menu`).style.zIndex = "40"

            evoItemToUse = item[i].id

            updatePokedex()

            document.getElementById("pokedex-filters-title").style.display = "flex"
            document.getElementById("pokedex-filters-cancel").style.display = "flex"
            document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to use the ${format(i)}`
            document.getElementById("menu-button-parent").style.display = "none"
            document.getElementById(`item-menu`).style.display = "none"

            })
        }


        if (item[i].vitamin && dexTeamSelect==undefined) {
            div.addEventListener("click", e => { 
            document.getElementById(`pokedex-menu`).style.display = "flex"
            document.getElementById(`pokedex-menu`).style.zIndex = "40"

            vitaminToUse = item[i].id

            updatePokedex()

            document.getElementById("pokedex-filters-title").style.display = "flex"
            document.getElementById("pokedex-filters-cancel").style.display = "flex"
            document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to use the ${format(i)}`
            document.getElementById("menu-button-parent").style.display = "none"
            document.getElementById(`item-menu`).style.display = "none"

            })
        }


        if (item[i].itemToUse && dexTeamSelect==undefined) {
            div.addEventListener("click", e => { 
            document.getElementById(`pokedex-menu`).style.display = "flex"
            document.getElementById(`pokedex-menu`).style.zIndex = "40"

            itemToUse = item[i].id

            updatePokedex()

            document.getElementById("pokedex-filters-title").style.display = "flex"
            document.getElementById("pokedex-filters-cancel").style.display = "flex"
            document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to use the ${format(i)}`
            document.getElementById("menu-button-parent").style.display = "none"
            document.getElementById(`item-menu`).style.display = "none"

            })
        }


    //called when switching team items
    if (dexTeamSelect != undefined) { 
        document.getElementById("item-menu-cancel").style.display = "inline"
        document.getElementById("item-menu-remove").style.display = "inline"
        document.getElementById("pokedex-filters-remove").style.display = "flex"
        bagCategory = 'held'

        if (item[i].type !== "held") continue
        //prevents equipping duplicated items
        if (saved.previewTeams[saved.currentPreviewTeam].slot1.item == i) continue
        if (saved.previewTeams[saved.currentPreviewTeam].slot2.item == i) continue
        if (saved.previewTeams[saved.currentPreviewTeam].slot3.item == i) continue
        if (saved.previewTeams[saved.currentPreviewTeam].slot4.item == i) continue
        if (saved.previewTeams[saved.currentPreviewTeam].slot5.item == i) continue
        if (saved.previewTeams[saved.currentPreviewTeam].slot6.item == i) continue

        div.addEventListener("click", e => { 
            saved.previewTeams[saved.currentPreviewTeam][dexTeamSelect].item = item[i].id
            updatePreviewTeam()
            updateItemBag()
            document.getElementById(`item-menu`).style.display = "none"
            document.getElementById(`item-menu`).style.zIndex = "30"
            document.getElementById(`team-menu`).style.display = "flex"
            dexTeamSelect = undefined
        })
    }


    if (geneticItemSelect == true) {

        document.getElementById("item-menu-cancel").style.display = "inline"
        if (item[i].genetics!=true) continue

        const sharedType = pkmn[saved.geneticHost].type.filter(type => pkmn[saved.geneticSample].type.includes(type) ).length;
        if (i == item.destinyKnot.id && (sharedType==0 || saved.geneticSample == "ditto") ) continue


        div.addEventListener("click", e => { 
            document.getElementById("item-menu").style.display = "none"
            document.getElementById("item-menu").style.zIndex = "30"
            document.getElementById("item-menu-cancel").style.display = "none"
             item[i].got--

            saved.geneticOperation = undefined;
            setGeneticMenu("end", i);
            openTooltip()
            geneticItemSelect = false
        })




    }


        document.getElementById("item-menu-list").appendChild(div);

    }

}




function updateVS() {





        document.getElementById("vs-selector").innerHTML = `
            <div style="background: #465f96; outline: solid 1px #3d61ff; color: white; z-index: 2;"  onclick="updateVS()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.618 15.27l.817.788q.242.242.565.242t.566-.242l.816-.789h1.08q.343 0 .575-.232t.232-.575v-1.08l.789-.816q.242-.243.242-.566t-.242-.565l-.789-.817v-1.08q0-.343-.232-.575t-.575-.232h-1.083l-.95-.945q-.183-.186-.427-.186t-.43.186l-.95.945H9.538q-.344 0-.576.232t-.232.576v1.08l-.789.816Q7.7 11.677 7.7 12t.242.566l.789.816v1.08q0 .343.232.575t.576.232zM9.066 19h-2.45q-.667 0-1.141-.475T5 17.386v-2.451l-1.79-1.803q-.237-.243-.349-.534t-.111-.594q0-.301.112-.596t.347-.538L5 9.066v-2.45q0-.667.475-1.141T6.615 5h2.451l1.803-1.79q.243-.237.534-.349t.594-.111q.301 0 .596.112t.538.347L14.934 5h2.45q.667 0 1.142.475T19 6.615v2.451l1.79 1.803q.237.243.349.534t.111.594q0 .301-.111.596t-.348.538L19 14.934v2.45q0 .667-.475 1.142t-1.14.474h-2.451l-1.803 1.79q-.243.237-.534.349t-.594.111q-.301 0-.596-.111t-.538-.348zm.433-1l2.059 2.058q.173.173.442.173t.442-.173L14.502 18h2.882q.27 0 .443-.173t.173-.442V14.5l2.058-2.059q.173-.173.173-.442t-.173-.442L18 9.498V6.617q0-.27-.173-.443T17.385 6H14.5l-2.059-2.058Q12.27 3.77 12 3.77t-.442.173L9.498 6H6.617q-.27 0-.443.173T6 6.616v2.883l-2.058 2.059q-.173.173-.173.442t.173.442L6 14.502v2.882q0 .27.173.443t.443.173zM12 12"/></svg>
            Trainers</div>
            <div onclick="updateFrontier()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M17 22H7a2 2 0 0 1-2-2v-8.818a.6.6 0 0 0-.1-.333L3.1 8.15a.6.6 0 0 1-.1-.333V2.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V2.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V2.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v5.218a.6.6 0 0 1-.1.333l-1.8 2.698a.6.6 0 0 0-.1.333V20a2 2 0 0 1-2 2Z"/></svg>
            Battle Frontier</div>
    `


    document.getElementById(`frontier-listing`).innerHTML = ""
    document.getElementById(`vs-listing`).innerHTML = ""

    document.getElementById("vs-menu-header").innerHTML = `

    <div style="display:flex; gap:0.2rem" >
    <span >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.618 15.27l.817.788q.242.242.565.242t.566-.242l.816-.789h1.08q.343 0 .575-.232t.232-.575v-1.08l.789-.816q.242-.243.242-.566t-.242-.565l-.789-.817v-1.08q0-.343-.232-.575t-.575-.232h-1.083l-.95-.945q-.183-.186-.427-.186t-.43.186l-.95.945H9.538q-.344 0-.576.232t-.232.576v1.08l-.789.816Q7.7 11.677 7.7 12t.242.566l.789.816v1.08q0 .343.232.575t.576.232zM9.066 19h-2.45q-.667 0-1.141-.475T5 17.386v-2.451l-1.79-1.803q-.237-.243-.349-.534t-.111-.594q0-.301.112-.596t.347-.538L5 9.066v-2.45q0-.667.475-1.141T6.615 5h2.451l1.803-1.79q.243-.237.534-.349t.594-.111q.301 0 .596.112t.538.347L14.934 5h2.45q.667 0 1.142.475T19 6.615v2.451l1.79 1.803q.237.243.349.534t.111.594q0 .301-.111.596t-.348.538L19 14.934v2.45q0 .667-.475 1.142t-1.14.474h-2.451l-1.803 1.79q-.243.237-.534.349t-.594.111q-.301 0-.596-.111t-.538-.348zm.433-1l2.059 2.058q.173.173.442.173t.442-.173L14.502 18h2.882q.27 0 .443-.173t.173-.442V14.5l2.058-2.059q.173-.173.173-.442t-.173-.442L18 9.498V6.617q0-.27-.173-.443T17.385 6H14.5l-2.059-2.058Q12.27 3.77 12 3.77t-.442.173L9.498 6H6.617q-.27 0-.443.173T6 6.616v2.883l-2.058 2.059q-.173.173-.173.442t.173.442L6 14.502v2.882q0 .27.173.443t.443.173zM12 12"/></svg>
    VS Trainers
    </span>
    <span class="header-help" data-help="VS"><svg  style="opacity:0.8; pointer-events:none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><g opacity="0.2"><path d="M12.739 17.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill-rule="evenodd" d="M10.71 5.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 1 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.71 9.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V11.08c0-.8.649-1.45 1.45-1.45" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.239 8.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5" clip-rule="evenodd"/></g><path d="M11 16.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"/><path fill-rule="evenodd" d="M9.71 4.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V10.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.638 8.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"/></g></svg></span>
    </div>


    `
    document.getElementById("vs-menu-header").style.backgroundImage = "url(img/bg/gym.png)"


    let firstOne = true

 for (const i in areas) {
    if (areas[i].type !== "vs") continue;
    if (areas[i].defeated) continue;

    

        const divAreas = document.createElement("div");
        divAreas.className = "explore-ticket ticket-event";


        if (firstOne) divAreas.dataset.trainer = i

        if (!firstOne) divAreas.style.cursor = "default"

        if (firstOne) {
        divAreas.addEventListener("click", e => { 

            saved.currentAreaBuffer = i
            document.getElementById(`preview-team-exit`).style.display = "flex"
            document.getElementById(`team-menu`).style.zIndex = `50`
            document.getElementById(`team-menu`).style.display = `flex`
            document.getElementById("menu-button-parent").style.display = "none"
            updatePreviewTeam()
            afkSeconds = 0
                document.getElementById(`explore-menu`).style.display = `none`

        })
    }


           let nameTag = "";
       if (areas[i].reward.includes(item.goldenBottleCap)) nameTag = `<svg class="event-icon" style="color:#465f96" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.795 2h-2c-1.886 0-2.829 0-3.414.586c-.586.586-.586 1.528-.586 3.414v3.5h10V6c0-1.886 0-2.828-.586-3.414S14.681 2 12.795 2" opacity="0.5"/><path fill="currentColor" fill-rule="evenodd" d="M13.23 5.783a3 3 0 0 0-2.872 0L5.564 8.397A3 3 0 0 0 4 11.031v4.938a3 3 0 0 0 1.564 2.634l4.794 2.614a3 3 0 0 0 2.872 0l4.795-2.614a3 3 0 0 0 1.564-2.634V11.03a3 3 0 0 0-1.564-2.634zM11.794 10.5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354s-.19.088-.399.135l-.19.044c-.739.167-1.108.25-1.195.532c-.088.283.163.577.666 1.165l.13.152c.144.167.215.25.247.354s.022.215 0 .438l-.02.203c-.076.785-.114 1.178.116 1.352s.575.015 1.266-.303l.179-.082c.196-.09.294-.135.398-.135s.203.045.399.135l.179.082c.69.319 1.036.477 1.266.303s.192-.567.116-1.352l-.02-.203c-.022-.223-.033-.334 0-.438c.032-.103.103-.187.246-.354l.13-.152c.504-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.194-.532l-.191-.044c-.21-.047-.315-.07-.399-.135c-.084-.064-.138-.16-.246-.354l-.098-.176c-.38-.682-.57-1.023-.855-1.023" clip-rule="evenodd"/></svg>`



        divAreas.className = `vs-card`
        divAreas.innerHTML = `
                        <span class="hitbox"></span>

                <img class="vs-card-flair" src="img/icons/pokeball.svg">
                <div class="vs-card-bg"></div>
                    <span class="explore-ticket-left" style="z-index: 2;">
                        <span id="trainer-name-${areas[i].name}" style="font-size:1.3rem">${areas[i].name}${nameTag}</span>
                        <span><strong style="font-size:1rem; background:#465f96">Trainer Level ${Math.max(1,(areas[i].level))}</strong></span>
                    </span>
                <div>
                </div>
                <div class="vs-card-left">
                    <img id="trainer-image-${areas[i].name}" class="sprite-trim" src="img/trainers/${areas[i].sprite}.png">
                </div>
        `;


        


        document.getElementById(`vs-listing`).appendChild(divAreas)

            if (!firstOne) {
            divAreas.style.filter = "brightness(0.3)"
            document.getElementById(`trainer-image-${areas[i].name}`).style.filter = "brightness(0)"
            document.getElementById(`trainer-name-${areas[i].name}`).innerHTML = "???"
            
        }
        firstOne = false


 }

 if (document.getElementById(`vs-listing`).innerHTML == "") document.getElementById(`vs-listing`).innerHTML = `<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; background:#ECDEB7; border-radius:0.3rem; height:15rem; width:15rem; text-align:center"><img src="img/pkmn/sprite/pikachuRockstar.png">All trainers defeated!<br><span style="font-size:0.9rem; opacity:0.7">How about the Battle Frontier?</span></div>`

}

updateVS()

saved.lastFrontierRotation = undefined
saved.lastTowerRotation = undefined
saved.currentSpiralFloor = 1
saved.maxSpiralFloor = 1
saved.spiralRewardsClaimed = 0

saved.currentSpiralingType = `normal`


function resetSpiralingTower(){

    if (saved.lastTowerRotation == rotationEventCurrent) return
    if (saved.lastTowerRotation != rotationEventCurrent) { saved.lastTowerRotation = rotationEventCurrent }

    saved.spiralRewardsClaimed = 0
    saved.maxSpiralFloor = 1    
    saved.currentSpiralingType = arrayPick([`normal`,`fire`,`water`,`grass`,`bug`,`poison`,`dark`,`ghost`,`psychic`,`fighting`,`flying`,`dragon`,`fairy`,`steel`,`ground`,`rock`,`electric`,`ice`])
   
}

function createFrontierTrainers(){

    if (saved.lastFrontierRotation == rotationWildCurrent) return
    if (saved.lastFrontierRotation != rotationWildCurrent) { saved.lastFrontierRotation = rotationWildCurrent }


const trainers = [];

for (const i in areas) {  
  if (areas[i].type !== "frontier") continue;
  areas[i].tier = undefined
  areas[i].team = undefined
  areas[i].defeated = undefined
  areas[i].difficulty = undefined
  areas[i].reward = undefined
  areas[i].level = undefined
}

for (const i in areas) {  
  if (areas[i].type !== "frontier") continue;
  if (areas[i].league !== rotationFrontierCurrent) continue;
  trainers.push(areas[i]);
}

for (let i = trainers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [trainers[i], trainers[j]] = [trainers[j], trainers[i]];
}

trainers.slice(0, 4).forEach((area, index) => {
  area.tier = index + 1;
});


for (const i in areas) {
  if (areas[i].type !== "frontier") continue;
  if (areas[i].tier == undefined) continue;
  
  areas[i].background = "tower"

  if (areas[i].tier==1) areas[i].level = 100
  if (areas[i].tier==2) areas[i].level = 120
  if (areas[i].tier==3) areas[i].level = 130
  if (areas[i].tier==4) areas[i].level = 150

  if (areas[i].tier==1) areas[i].difficulty = 8
  if (areas[i].tier==2) areas[i].difficulty = 10
  if (areas[i].tier==3) areas[i].difficulty = 15
  if (areas[i].tier==4) areas[i].difficulty = 20

  if (areas[i].tier==1) areas[i].reward = [item.goldenBottleCap, arrayPick(exclusiveFrontierPkmn)]
  if (areas[i].tier==2) areas[i].reward = [item.goldenBottleCap, arrayPick(exclusiveFrontierPkmn)]
  if (areas[i].tier==3) areas[i].reward = [item.goldenBottleCap, arrayPick(exclusiveFrontierPkmn)]
  if (areas[i].tier==4) areas[i].reward = [item.goldenBottleCap, arrayPick(exclusiveFrontierPkmn)]

  let divisionToUse = "C"
  if (rotationFrontierCurrent == 2) divisionToUse = "B"
  if (rotationFrontierCurrent == 3) divisionToUse = "A"
  if (rotationFrontierCurrent == 4) divisionToUse = "S"

  let pkmn1 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing)]
  let pkmn2 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing, [pkmn1?.id])]
  let pkmn3 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing, [pkmn1?.id, pkmn2?.id])]
  let pkmn4 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing, [pkmn1?.id, pkmn2?.id, pkmn3?.id])]
  let pkmn5 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing, [pkmn1?.id, pkmn2?.id, pkmn3?.id, pkmn4?.id])]
  let pkmn6 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing, [pkmn1?.id, pkmn2?.id, pkmn3?.id, pkmn4?.id, pkmn5?.id])]


  if (rotationFrontierCurrent == 3) divisionToUse = "B"
  if (rotationFrontierCurrent == 4) divisionToUse = "A"

  if (pkmn1 == undefined) pkmn1 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing)]
  if (pkmn2 == undefined) pkmn2 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing, [pkmn1])]
  if (pkmn3 == undefined) pkmn3 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing, [pkmn1, pkmn2])]
  if (pkmn4 == undefined) pkmn4 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing, [pkmn1, pkmn2, pkmn3])]
  if (pkmn5 == undefined) pkmn5 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing, [pkmn1, pkmn2, pkmn3, pkmn4])]
  if (pkmn6 == undefined) pkmn6 = pkmn[randomDivisionPkmn(divisionToUse, areas[i].typing, [pkmn1, pkmn2, pkmn3, pkmn4, pkmn5])]


  areas[i].team = {}
  areas[i].team.slot1 = pkmn1
  areas[i].team.slot1Moves = [learnPkmnMove(pkmn1.id, 100, "wild"),learnPkmnMove(pkmn1.id, 100, "wild"),learnPkmnMove(pkmn1.id, 100, "wild"),learnPkmnMove(pkmn1.id, 100, "wild")]
  areas[i].team.slot2 = pkmn2
  areas[i].team.slot2Moves = [learnPkmnMove(pkmn2.id, 100, "wild"),learnPkmnMove(pkmn2.id, 100, "wild"),learnPkmnMove(pkmn2.id, 100, "wild"),learnPkmnMove(pkmn2.id, 100, "wild")]
  areas[i].team.slot3 = pkmn3
  areas[i].team.slot3Moves = [learnPkmnMove(pkmn3.id, 100, "wild"),learnPkmnMove(pkmn3.id, 100, "wild"),learnPkmnMove(pkmn3.id, 100, "wild"),learnPkmnMove(pkmn3.id, 100, "wild")]
  areas[i].team.slot4 = pkmn4
  areas[i].team.slot4Moves = [learnPkmnMove(pkmn4.id, 100, "wild"),learnPkmnMove(pkmn4.id, 100, "wild"),learnPkmnMove(pkmn4.id, 100, "wild"),learnPkmnMove(pkmn4.id, 100, "wild")]
  areas[i].team.slot5 = pkmn5
  areas[i].team.slot5Moves = [learnPkmnMove(pkmn5.id, 100, "wild"),learnPkmnMove(pkmn5.id, 100, "wild"),learnPkmnMove(pkmn5.id, 100, "wild"),learnPkmnMove(pkmn5.id, 100, "wild")]
  areas[i].team.slot6 = pkmn6
  areas[i].team.slot6Moves = [learnPkmnMove(pkmn6.id, 100, "wild"),learnPkmnMove(pkmn6.id, 100, "wild"),learnPkmnMove(pkmn6.id, 100, "wild"),learnPkmnMove(pkmn6.id, 100, "wild")]


}











    
}

/*function randomDivisionPkmn(division, type, exclude) {
    const selection = []

    for (const i in pkmn) {
        if (returnPkmnDivision(pkmn[i]) !== division) continue
        if (!pkmn[i].type.includes(type)) continue
        if (i.includes("unown")) continue
        if (exclude && exclude.includes(pkmn[i].id)) continue

        selection.push(i)
    }

    return arrayPick(selection,undefined,rng)
}*/

function randomDivisionPkmn(division, type, exclude, seed, mod) {
  const selection = [];

  const rng = seed === undefined
    ? undefined
    : mulberry32(seed);


  for (const i in pkmn) {
    if (returnPkmnDivision(pkmn[i]) !== division) continue;
    if (!pkmn[i].type.includes(type)) continue;
    if (i.includes("unown")) continue;
    if (exclude && exclude.includes(pkmn[i].id)) continue;

    if (mod=="training") {
        
        if ( typeEffectiveness([ pkmn[i].type[1] ], pkmn[saved.trainingPokemon].type) > 1 ) continue
        if ( typeEffectiveness([ pkmn[i].type[0] ], pkmn[saved.trainingPokemon].type) > 1 ) continue

        if ( typeEffectiveness([ pkmn[saved.trainingPokemon].type[0] ], [ pkmn[i].type[0] ]) < 1 ) continue
        if ( typeEffectiveness([ pkmn[saved.trainingPokemon].type[0] ], [ pkmn[i].type[1] ]) < 1 ) continue

        if ( typeEffectiveness([ pkmn[saved.trainingPokemon].type[1] ], [ pkmn[i].type[0] ]) < 1 ) continue
        if ( typeEffectiveness([ pkmn[saved.trainingPokemon].type[1] ], [ pkmn[i].type[1] ]) < 1 )continue

    }

    selection.push(i);
  }



  return rng === undefined
    ? arrayPick(selection)
    : arrayPick(selection, undefined, rng);
}


const spiralingRewards = {
    1 : {item: item.abilityPatch.id, rarity: 1},
    2 : {item: item.abilityCapsule.id, rarity: 2},
    4 : {item: item.timeCandy.id, rarity: 3},
    6 : {item: item.energyRoot.id, rarity: 3},
    3 : {item: item.destinyKnot.id, rarity: 4},
    5 : {item: item.timeCandyXL.id, rarity: 4},
    7 : {item: item.autoRefightTicket.id, rarity: 4},
}


function updateFrontier() {


        if (areas.vsTeamLeaderGiovanni.defeated != true){

        document.getElementById("tooltipTop").style.display = "none"
        document.getElementById("tooltipBottom").style.display = "none"
        document.getElementById("tooltipTitle").style.display = "none"
        document.getElementById("tooltipMid").innerHTML = `Defeat Team Leader Giovanni in VS mode to unlock`
        openTooltip()
        return

    }


    createFrontierTrainers()
    resetSpiralingTower()
    document.getElementById(`frontier-listing`).innerHTML = ""

        document.getElementById("vs-selector").innerHTML = `
            <div   onclick="updateVS()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.618 15.27l.817.788q.242.242.565.242t.566-.242l.816-.789h1.08q.343 0 .575-.232t.232-.575v-1.08l.789-.816q.242-.243.242-.566t-.242-.565l-.789-.817v-1.08q0-.343-.232-.575t-.575-.232h-1.083l-.95-.945q-.183-.186-.427-.186t-.43.186l-.95.945H9.538q-.344 0-.576.232t-.232.576v1.08l-.789.816Q7.7 11.677 7.7 12t.242.566l.789.816v1.08q0 .343.232.575t.576.232zM9.066 19h-2.45q-.667 0-1.141-.475T5 17.386v-2.451l-1.79-1.803q-.237-.243-.349-.534t-.111-.594q0-.301.112-.596t.347-.538L5 9.066v-2.45q0-.667.475-1.141T6.615 5h2.451l1.803-1.79q.243-.237.534-.349t.594-.111q.301 0 .596.112t.538.347L14.934 5h2.45q.667 0 1.142.475T19 6.615v2.451l1.79 1.803q.237.243.349.534t.111.594q0 .301-.111.596t-.348.538L19 14.934v2.45q0 .667-.475 1.142t-1.14.474h-2.451l-1.803 1.79q-.243.237-.534.349t-.594.111q-.301 0-.596-.111t-.538-.348zm.433-1l2.059 2.058q.173.173.442.173t.442-.173L14.502 18h2.882q.27 0 .443-.173t.173-.442V14.5l2.058-2.059q.173-.173.173-.442t-.173-.442L18 9.498V6.617q0-.27-.173-.443T17.385 6H14.5l-2.059-2.058Q12.27 3.77 12 3.77t-.442.173L9.498 6H6.617q-.27 0-.443.173T6 6.616v2.883l-2.058 2.059q-.173.173-.173.442t.173.442L6 14.502v2.882q0 .27.173.443t.443.173zM12 12"/></svg>
            Trainers</div>
            <div style="background: #964646ff; outline: solid 1px #ff3d3dff; color: white; z-index: 2;" onclick="updateFrontier()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M17 22H7a2 2 0 0 1-2-2v-8.818a.6.6 0 0 0-.1-.333L3.1 8.15a.6.6 0 0 1-.1-.333V2.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V2.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V2.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v5.218a.6.6 0 0 1-.1.333l-1.8 2.698a.6.6 0 0 0-.1.333V20a2 2 0 0 1-2 2Z"/></svg>
            Battle Frontier</div>
    `


    document.getElementById(`vs-listing`).innerHTML = ""


    const cupsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16c-5.76 0-6.78-5.74-6.96-10.294c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16" opacity="0.5"/><path fill="currentColor" d="m17.64 12.422l2.817-1.565c.752-.418 1.128-.627 1.336-.979C22 9.526 22 9.096 22 8.235v-.073c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888L19 5l-.017.085q-.008.283-.022.621c-.088 2.225-.377 4.733-1.32 6.716M5.04 5.706c.087 2.225.376 4.733 1.32 6.716l-2.817-1.565c-.752-.418-1.129-.627-1.336-.979S2 9.096 2 8.235v-.073c0-1.043 0-1.565.283-1.958s.778-.558 1.768-.888L5 5l.017.087q.008.281.022.62"/><path fill="currentColor" fill-rule="evenodd" d="M5.25 22a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="currentColor" d="M15.458 21.25H8.542l.297-1.75a1 1 0 0 1 .98-.804h4.361a1 1 0 0 1 .98.804z" opacity="0.5"/><path fill="currentColor" d="M12 16q-.39 0-.75-.034v2.73h1.5v-2.73A8 8 0 0 1 12 16"/></svg>`
    
    let divisionText = ``
    if (rotationFrontierCurrent==1) divisionText = `<span style="font-size: 1.5rem; padding:0">${cupsvg}Little Cup${cupsvg}</span><div>${returnDivisionLetter("C")} division and below only</div>`
    if (rotationFrontierCurrent==2) divisionText = `<span style="font-size: 1.5rem; padding:0">${cupsvg}Great League${cupsvg}</span><div>${returnDivisionLetter("B")} division and below only</div>`
    if (rotationFrontierCurrent==3) divisionText = `<span style="font-size: 1.5rem; padding:0">${cupsvg}Ultra League${cupsvg}</span><div>${returnDivisionLetter("A")} division and below only</div>`
    if (rotationFrontierCurrent==4) divisionText = `<span style="font-size: 1.5rem; padding:0">${cupsvg}Master League${cupsvg}</span><div>${returnDivisionLetter("S")} division and below only</div>`
    
    
    document.getElementById(`frontier-listing`).innerHTML = `<div class="frontier-league">${divisionText}</div>`


    document.getElementById("vs-menu-header").innerHTML = `



    <div style="display:flex; gap:0.2rem" >
    <span >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M17 22H7a2 2 0 0 1-2-2v-8.818a.6.6 0 0 0-.1-.333L3.1 8.15a.6.6 0 0 1-.1-.333V2.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V2.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V2.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v5.218a.6.6 0 0 1-.1.333l-1.8 2.698a.6.6 0 0 0-.1.333V20a2 2 0 0 1-2 2Z"/></svg>
    VS Frontier
    </span>
    <span class="header-help" data-help="Frontier"><svg  style="opacity:0.8; pointer-events:none" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="currentColor"><g opacity="0.2"><path d="M12.739 17.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><path fill-rule="evenodd" d="M10.71 5.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 1 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556" clip-rule="evenodd"/><path fill-rule="evenodd" d="M10.71 9.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V11.08c0-.8.649-1.45 1.45-1.45" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14.239 8.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5" clip-rule="evenodd"/></g><path d="M11 16.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"/><path fill-rule="evenodd" d="M9.71 4.065c-.807 0-1.524.24-2.053.614c-.51.36-.825.826-.922 1.308a.75.75 0 1 1-1.47-.297c.186-.922.762-1.696 1.526-2.236c.796-.562 1.82-.89 2.919-.89c2.325 0 4.508 1.535 4.508 3.757c0 1.292-.768 2.376-1.834 3.029a.75.75 0 0 1-.784-1.28c.729-.446 1.118-1.093 1.118-1.749c0-1.099-1.182-2.256-3.008-2.256m0 5.265a.75.75 0 0 1 .75.75v1.502a.75.75 0 1 1-1.5 0V10.08a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12.638 8.326a.75.75 0 0 1-.258 1.029l-2.285 1.368a.75.75 0 1 1-.77-1.287l2.285-1.368a.75.75 0 0 1 1.028.258" clip-rule="evenodd"/></g></svg></span>
    </div>

    <div style="display:flex; gap:0.2rem">
    <div class="rotation-timer">
    <strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724"/><path fill="currentColor" d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" opacity="0.5"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></svg>
    Rotation ${rotationFrontierCurrent}/${rotationFrontierMax}</strong>
    <div class="time-counter-event"></div>
    </div>

    <div class="rotation-timer">
    <strong><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724"/><path fill="currentColor" d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" opacity="0.5"/><path fill="currentColor" d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></svg>
    Trainer Reset</strong>
    <div class="time-counter-daily"></div>
    </div>
    </div>

    `

    updateEventCounters()
    updateDailyCounters()
    document.getElementById("vs-menu-header").style.backgroundImage = "url(img/bg/tower.png)"


    //spiraling tower
    const spiral = document.createElement("div");
    divisionText = `C`
    if (rotationFrontierCurrent==2) divisionText = `B`
    if (rotationFrontierCurrent==3) divisionText = `A`
    if (rotationFrontierCurrent==4) divisionText = `S`
    
    spiral.className = "explore-ticket";
    spiral.innerHTML = `
        <span class="hitbox"></span>
        <div style="width: 100%;">
        <svg class="barcode-flair" xmlns="http://www.w3.org/2000/svg" width="236" height="144"><svg id="barcodeSVG" role="img" aria-label="Barcode preview" width="234px" height="142px" x="0px" y="0px" viewBox="0 0 234 142" xmlns="http://www.w3.org/2000/svg" version="1.1" style="transform: translate(0,0)"><rect x="0" y="0" width="234" height="142" style="fill:none;"/><g transform="translate(10, 10)" style="fill:#000000;"><text style="font: 20px Roboto" text-anchor="start" x="0" y="122">5</text></g><g transform="translate(34, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="112"/><rect x="4" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="3" y="134"></text></g><g transform="translate(40, 10)" style="fill:#000000;"><rect x="6" y="0" width="2" height="100"/><rect x="10" y="0" width="4" height="100"/><rect x="16" y="0" width="2" height="100"/><rect x="22" y="0" width="6" height="100"/><rect x="30" y="0" width="4" height="100"/><rect x="38" y="0" width="4" height="100"/><rect x="46" y="0" width="2" height="100"/><rect x="52" y="0" width="4" height="100"/><rect x="58" y="0" width="8" height="100"/><rect x="68" y="0" width="2" height="100"/><rect x="74" y="0" width="6" height="100"/><rect x="82" y="0" width="2" height="100"/><text style="font: 20px Roboto" text-anchor="middle" x="42" y="122">901234</text></g><g transform="translate(124, 10)" style="fill:#000000;"><rect x="2" y="0" width="2" height="112"/><rect x="6" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="5" y="134"></text></g><g transform="translate(134, 10)" style="fill:#000000;"><rect x="0" y="0" width="4" height="100"/><rect x="8" y="0" width="4" height="100"/><rect x="14" y="0" width="4" height="100"/><rect x="20" y="0" width="4" height="100"/><rect x="28" y="0" width="2" height="100"/><rect x="38" y="0" width="2" height="100"/><rect x="42" y="0" width="2" height="100"/><rect x="46" y="0" width="6" height="100"/><rect x="56" y="0" width="2" height="100"/><rect x="62" y="0" width="6" height="100"/><rect x="70" y="0" width="2" height="100"/><rect x="78" y="0" width="2" height="100"/><text style="font: 20px Roboto" text-anchor="middle" x="42" y="122">123457</text></g><g transform="translate(218, 10)" style="fill:#000000;"><rect x="0" y="0" width="2" height="112"/><rect x="4" y="0" width="2" height="112"/><text style="font: 20px Roboto" text-anchor="middle" x="3" y="134"></text></g></svg></svg>
        <span class="explore-ticket-left">
        <span class="ticket-flair">
        #INF
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M25.719 4.781a2.9 2.9 0 0 0-1.125.344l-4.719 2.5L13.5 6.062l-.375-.093l-.375.187l-2.156 1.25l-1.281.75l1.187.906l2.719 2.063l-3.406 1.813l-3.657-1.657l-.437-.187l-.438.219l-1.75.937l-1.156.625l.875.938l5.406 5.812l.5.594l.688-.375L15 17.094l-1.031 5.687l-.344 1.813l1.719-.719l2.562-1.094l.375-.156l.157-.375l3.718-9.031l5.25-2.813c1.446-.777 2.028-2.617 1.25-4.062a3 3 0 0 0-1.781-1.438a3.1 3.1 0 0 0-1.156-.125m.187 2c.125-.008.254-.004.375.032a.979.979 0 0 1 .188 1.812l-5.594 3.031l-.313.156l-.125.344l-3.718 8.938l-.438.187l1.063-5.906l.375-2.031l-1.813.969l-6.312 3.406l-3.969-4.313l.156-.094l3.657 1.626l.468.218l.406-.25l15.22-8.031a.9.9 0 0 1 .374-.094M13.375 8.094l3.844.937l-2.063 1.063l-2.25-1.719zM3 26v2h26v-2z"/></svg>
        </span>
        <span style="font-size:1.2rem">Spiraling Tower</span>
        <span><strong style="background:#964646ff">Highest Reached Floor: ${saved.maxSpiralFloor}</strong><span></span></span>
        </span>
        </div>
        <div style="width: 8rem;" class="explore-ticket-right">
        <span class="explore-ticket-bg" style="background-image: url(img/bg/${areas.frontierSpiralingTower.background}.png);"></span>
        <img class="explore-ticket-sprite sprite-trim" style="z-index: 10;" src="img/pkmn/sprite/${randomDivisionPkmn(divisionText,saved.currentSpiralingType)}.png">
        </div>
    `;
    document.getElementById("frontier-listing").appendChild(spiral);
    spiral.dataset.help = "Spiral"
    spiral.addEventListener("click", e => { 
        saved.currentAreaBuffer = areas.frontierSpiralingTower.id
        document.getElementById(`preview-team-exit`).style.display = "flex"
        document.getElementById(`team-menu`).style.zIndex = `50`
        document.getElementById(`team-menu`).style.display = `flex`
        document.getElementById("menu-button-parent").style.display = "none"
        updatePreviewTeam()
        afkSeconds = 0
        document.getElementById(`explore-menu`).style.display = `none`
    })














//code for rotating trainers ahead
const frontierArray = [];

for (const i in areas) {
    if (areas[i].type !== "frontier") continue;
    if (areas[i].team == undefined) continue;
    if (areas[i].defeated) continue;

    frontierArray.push({ key: i, data: areas[i] });
}

frontierArray.sort((a, b) => a.data.tier - b.data.tier);

    for (const obj of frontierArray) {

    const i = obj.key;

        const divAreas = document.createElement("div");
        divAreas.className = "explore-ticket ticket-event";

        divAreas.dataset.trainer = i

        let nameTag = "";
       //if (areas[i].reward.includes(item.goldenBottleCap)) nameTag = `<svg class="event-icon" style="color:#465f96" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.795 2h-2c-1.886 0-2.829 0-3.414.586c-.586.586-.586 1.528-.586 3.414v3.5h10V6c0-1.886 0-2.828-.586-3.414S14.681 2 12.795 2" opacity="0.5"/><path fill="currentColor" fill-rule="evenodd" d="M13.23 5.783a3 3 0 0 0-2.872 0L5.564 8.397A3 3 0 0 0 4 11.031v4.938a3 3 0 0 0 1.564 2.634l4.794 2.614a3 3 0 0 0 2.872 0l4.795-2.614a3 3 0 0 0 1.564-2.634V11.03a3 3 0 0 0-1.564-2.634zM11.794 10.5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354s-.19.088-.399.135l-.19.044c-.739.167-1.108.25-1.195.532c-.088.283.163.577.666 1.165l.13.152c.144.167.215.25.247.354s.022.215 0 .438l-.02.203c-.076.785-.114 1.178.116 1.352s.575.015 1.266-.303l.179-.082c.196-.09.294-.135.398-.135s.203.045.399.135l.179.082c.69.319 1.036.477 1.266.303s.192-.567.116-1.352l-.02-.203c-.022-.223-.033-.334 0-.438c.032-.103.103-.187.246-.354l.13-.152c.504-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.194-.532l-.191-.044c-.21-.047-.315-.07-.399-.135c-.084-.064-.138-.16-.246-.354l-.098-.176c-.38-.682-.57-1.023-.855-1.023" clip-rule="evenodd"/></svg>`
        let prefix = "Rookie Trainer "
        if (areas[i].tier==2) prefix = "Veteran Trainer "
        if (areas[i].tier==3) prefix = "Ace Trainer "
        if (areas[i].tier==4) prefix = "Master Trainer "

        divAreas.addEventListener("click", e => { 

            saved.currentAreaBuffer = i
            document.getElementById(`preview-team-exit`).style.display = "flex"
            document.getElementById(`team-menu`).style.zIndex = `50`
            document.getElementById(`team-menu`).style.display = `flex`
            document.getElementById("menu-button-parent").style.display = "none"
            updatePreviewTeam()
            afkSeconds = 0
            document.getElementById(`explore-menu`).style.display = `none`

        })

    
        divAreas.className = `vs-card`
        divAreas.innerHTML = `
                        <span class="hitbox"></span>

                <img class="vs-card-flair" src="img/icons/pokeball.svg">
                <div class="vs-card-bg"></div>
                    <span class="explore-ticket-left" style="z-index: 2;">
                        <span style="font-size:1.3rem">${prefix}${i.replace(/frontier/gi, "")}${nameTag}</span>
                        <span><strong style="font-size:1rem; background:#964646ff">Trainer Level ${Math.max(1,(areas[i].level))}</strong></span>
                    </span>
                <div>
                </div>
                <div class="vs-card-left">
                    <img id="trainer-image-${areas[i].name}" class="sprite-trim" src="img/trainers/${areas[i].sprite}.png">
                </div>
        `;


        document.getElementById(`frontier-listing`).appendChild(divAreas)

 }

 //if (document.getElementById(`vs-listing`).innerHTML == "") document.getElementById(`vs-listing`).innerHTML = `<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; background:#ECDEB7; border-radius:0.3rem; height:15rem; width:15rem; text-align:center"><img src="img/pkmn/sprite/pikachuRockstar.png">All trainers defeated!<br><span style="font-size:0.9rem; opacity:0.7">How about the Battle Frontier?</span></div>`

 
}


/*let afkSeconds = 0
function afkTimer(){
    if (document.hidden) afkSeconds++
    if (!document.hidden) afkSeconds = 0
}

setInterval(afkTimer, 1000);*/


saved.lastFrameRecorded = Date.now();
saved.lastExportReset ??= Date.now();

let afkSeconds = 0;
let afkSecondsGenetics = 0;

function loop() {
    const timeNow = Date.now();
    const elapsed = (timeNow - saved.lastFrameRecorded) / 1000;
    saved.lastFrameRecorded = timeNow;
    
    afkSecondsGenetics += elapsed;

    //if (afkSeconds>0 && document.getElementById("content-explore").style.display == "flex" && document.getElementById(`tooltipBackground`).style.display !== "flex") document.getElementById("afk-overlay").style.display = "flex"
    //else document.getElementById("afk-overlay").style.display = "none"

    
    if (elapsed > 0.1) {
        afkSeconds += elapsed;



        const elapsedDifference = (timeNow - saved.lastExportReset) / 1000;

        if (elapsedDifference >= 43200) {
            saved.claimedExportReward = false;
            saved.lastExportReset = timeNow;
        }




    }

    requestAnimationFrame(loop);
}


saved.weather = undefined
saved.weatherTimer = 0
saved.weatherCooldown = 0

function updateWildBuffs(){


    document.getElementById("wild-buff-list").innerHTML = ""


    for (const i in wildBuffs) {

        if (wildBuffs[i] === 0) continue
        //if (i === 'atkup1' && wildBuffs.atkup2>0) continue

        const div = document.createElement("span");
        div.className = "buff-tag";
        div.style.filter = `hue-rotate(${formatBuffs(i,"hue")}deg)`
        div.innerHTML = formatBuffs(i);
        document.getElementById("wild-buff-list").appendChild(div);

    };

    if (saved.weather!==undefined && saved.weatherTimer>0){
        const div = document.createElement("span");
        div.className = "buff-tag";
        let weatherIcon = ""
        //if (saved.weather=="sunny"){ div.style.filter = `hue-rotate(130deg)`; weatherIcon = ``}
        if (saved.weather=="sunny"){ div.style.filter = `hue-rotate(130deg)`; weatherIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414m-12.728 0a1 1 0 0 1 1.497 1.32l-.083.094l-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083l.707.707a1 1 0 0 1-1.32 1.497l-.094-.083l-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"/></g></svg>`}
        if (saved.weather=="rainy"){ div.style.filter = `hue-rotate(-20deg)`; weatherIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path fill="currentColor" d="M4.5 0C3.29 0 2.23.86 2 2C.9 2 0 2.9 0 4c0 .53.2.99.53 1.34c.26-.22.6-.34.97-.34c.2 0 .39.05.56.13C2.23 4.49 2.8 4 3.5 4c.69 0 1.27.49 1.44 1.13c.17-.07.36-.13.56-.13c.63 0 1.15.39 1.38.94c.64-.17 1.13-.75 1.13-1.44c0-.65-.42-1.29-1-1.5v-.5A2.5 2.5 0 0 0 4.51 0zM3.34 5a.5.5 0 0 0-.34.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 0 0-.59-.5h-.06zm-2 1a.5.5 0 0 0-.34.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.59-.5h-.06zm4 0a.5.5 0 0 0-.34.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.59-.5h-.06z"/></svg>`}
        
        if (saved.weather=="sandstorm"){ div.style.filter = `hue-rotate(140deg)`; weatherIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M5.268 5H4v1h3a2 2 0 1 0-1.732-1M3 6H2V5h1zm8.085 1H9v1h3.5a1.5 1.5 0 1 0-1.415-1M8 7v1H2V7zM6 9v1H2V9zm3.5 1H7V9h4.5a2.5 2.5 0 1 1-2 1" clip-rule="evenodd"/></svg>`}
        if (saved.weather=="hail"){ div.style.filter = `hue-rotate(-50deg)`; weatherIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13 3a1 1 0 1 0-2 0v.962l-.654-.346a1 1 0 1 0-.935 1.768l1.589.84v1.902a4 4 0 0 0-1.854 1.072l-1.648-.952l.067-1.796a1 1 0 0 0-1.999-.074l-.027.739l-.833-.48a1 1 0 1 0-1 1.731l.833.481l-.627.394a1 1 0 0 0 1.064 1.693l1.522-.956l1.647.951a4 4 0 0 0 0 2.142l-1.647.95l-1.522-.955a1 1 0 0 0-1.064 1.693l.627.394l-.833.48a1 1 0 1 0 1 1.733l.832-.481l.028.74a1 1 0 1 0 1.999-.075l-.067-1.796l1.648-.952A4 4 0 0 0 11 15.874v1.902l-1.589.84a1 1 0 0 0 .935 1.768l.654-.346V21a1 1 0 1 0 2 0v-.962l.654.346a1 1 0 0 0 .935-1.768L13 17.776v-1.902a4 4 0 0 0 1.854-1.071l1.648.951l-.067 1.796a1 1 0 1 0 1.999.075l.027-.74l.833.481a1 1 0 1 0 1-1.732l-.832-.48l.626-.394a1 1 0 0 0-1.064-1.694l-1.522.956l-1.647-.95a4 4 0 0 0 0-2.143l1.647-.951l1.522.956a1 1 0 0 0 1.064-1.694l-.627-.393l.833-.481a1 1 0 1 0-1-1.732l-.833.48l-.027-.739a1 1 0 1 0-1.999.075l.067 1.796l-1.648.951A4 4 0 0 0 13 8.126V6.224l1.589-.84a1 1 0 0 0-.935-1.768L13 3.962z"/></g></svg>`}
        if (saved.weather=="electricTerrain"){ div.style.filter = `hue-rotate(180deg)`; weatherIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7"/></svg>`}
        if (saved.weather=="mistyTerrain"){ div.style.filter = `hue-rotate(50deg)`; weatherIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12.057a1.9 1.9 0 0 0 .614.743c1.06.713 2.472.112 3.043-.919c.839-1.513-.022-3.368-1.525-4.08c-2-.95-4.371.154-5.24 2.086c-1.095 2.432.29 5.248 2.71 6.246c2.931 1.208 6.283-.418 7.438-3.255c1.36-3.343-.557-7.134-3.896-8.41c-3.855-1.474-8.2.68-9.636 4.422c-1.63 4.253.823 9.024 5.082 10.576c4.778 1.74 10.118-.941 11.833-5.59A9.4 9.4 0 0 0 21 11.063"/></svg>`}
        if (saved.weather=="grassyTerrain"){ div.style.filter = `hue-rotate(220deg)`; weatherIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M6.356 3.235a1 1 0 0 1 1.168-.087c3.456 2.127 5.35 4.818 6.36 7.78c.25.733.445 1.48.596 2.236c1.029-1.73 2.673-3.102 5.149-4.092a1 1 0 0 1 1.329 1.215l-.181.604C19.417 15.419 19 16.806 19 20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1c0-3.864-.472-6.255-1.949-10.684a1 1 0 0 1 1.32-1.244c1.395.557 2.455 1.301 3.255 2.18a24 24 0 0 0-1.554-5.88a1 1 0 0 1 .284-1.137"/></g></svg>`}
        if (saved.weather=="foggy"){ div.style.filter = `grayscale(1)`; weatherIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8 21.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"/><path fill="currentColor" d="M12.476 2C9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765c0 .522.096 1.023.271 1.485h18.92A5.57 5.57 0 0 0 22 12.353c0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2" opacity="0.5"/><path fill="currentColor" d="M2 15.249a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"/><path fill="currentColor" d="M5 18.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z" opacity="0.5"/></svg>`}

        div.innerHTML = format(saved.weather)+weatherIcon;
        document.getElementById("wild-buff-list").appendChild(div);
    }


}


function changeWeather(id,mod) {


if (saved.weatherCooldown<=0 || mod=="force"){
saved.weather = id
let weatherTurns = 15
if (id=="rainy" && team[exploreActiveMember].item == item.dampRock.id) weatherTurns += item.dampRock.power()
if (id=="sunny" && team[exploreActiveMember].item == item.heatRock.id) weatherTurns += item.heatRock.power()
if (id=="hail" && team[exploreActiveMember].item == item.icyRock.id) weatherTurns += item.icyRock.power()
if (id=="sandstorm" && team[exploreActiveMember].item == item.smoothRock.id) weatherTurns += item.smoothRock.power()
saved.weatherTimer = weatherTurns
saved.weatherCooldown = 30
updateWildBuffs()

}



}

function updateTeamBuffs(){

    if (document.getElementById("team-member-slot1-buff-list")) document.getElementById("team-member-slot1-buff-list").innerHTML = ""
    if (document.getElementById("team-member-slot2-buff-list"))document.getElementById("team-member-slot2-buff-list").innerHTML = ""
    if (document.getElementById("team-member-slot3-buff-list"))document.getElementById("team-member-slot3-buff-list").innerHTML = ""
    if (document.getElementById("team-member-slot4-buff-list"))document.getElementById("team-member-slot4-buff-list").innerHTML = ""
    if (document.getElementById("team-member-slot5-buff-list"))document.getElementById("team-member-slot5-buff-list").innerHTML = ""
    if (document.getElementById("team-member-slot6-buff-list"))document.getElementById("team-member-slot6-buff-list").innerHTML = ""

    for (const slot in team) {

        if (team[slot].pkmn === undefined ) continue
        
        for ( const i in team[slot].buffs) {

        //items
        if (team[slot].item == item.flameOrb.id) team[slot].buffs.burn = 3
        if (team[slot].item == item.toxicOrb.id) team[slot].buffs.poisoned = 3

        if (team[slot].buffs[i] === 0) continue








        if (testAbility(slot, ability.insomnia.id) && i == "sleep") team[slot].buffs.sleep = 0
        if (testAbility(slot, ability.immunity.id) && i == "poisoned") team[slot].buffs.poisoned = 0
        if (testAbility(slot, ability.limber.id) && i == "paralysis") team[slot].buffs.paralysis = 0
        if (testAbility(slot, ability.ownTempo.id) && i == "confused") team[slot].buffs.confused = 0
        if (testAbility(slot, ability.magmaArmor.id) && i == "freeze") team[slot].buffs.freeze = 0
        if (testAbility(slot, ability.waterVeil.id) && i == "burn") team[slot].buffs.burn = 0

        if (testAbility(slot, ability.hyperCutter.id ) && (i == "atkdown1" || i == "atkdown2")) {team[slot].buffs.atkdown1 = 0; team[slot].buffs.atkdown2 = 0; continue}
        if (testAbility(slot, ability.bigPecks.id ) && (i == "defdown1" || i == "defdown2")) {team[slot].buffs.defdown1 = 0; team[slot].buffs.defdown2 = 0; continue}



        if (testAbility(slot, ability.fullMetalBody.id) && /atkdown1|atkdown2|defdown1|defdown2|stakdown1|stakdown2|sdefdown1|sdefdown2|spedown1|spedown2/.test(i) ) team[slot].buffs[i] = 0

        const div = document.createElement("span");
        div.className = "buff-tag";
        div.style.filter = `hue-rotate(${formatBuffs(i,"hue")}deg)`
        div.innerHTML = formatBuffs(i);
        document.getElementById(`team-member-${slot}-buff-list`).appendChild(div);
        }
    };

}



const tagBurn = `<span data-buff="burn"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("fire")}">Burn</span></span>`
const tagFreeze = `<span data-buff="freeze"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("ice")}">Freeze</span></span>`
const tagParalysis = `<span data-buff="paralysis"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("electric")}">Paralysis</span></span>`
const tagPoisoned = `<span data-buff="poisoned"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("poison")}">Poisoned</span></span>`
const tagSleep = `<span data-buff="sleep"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("normal")}">Sleep</span></span>`
const tagConfused = `<span data-buff="confused"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("psychic")}">Confused</span></span>`

const tagSunny = `<span data-buff="sunny"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("fire")}">Sunny</span></span>`
const tagRainy = `<span data-buff="rainy"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("water")}">Rainy</span></span>`
const tagSandstorm = `<span data-buff="sandstorm"><span style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("ground")}">Sandstorm</span></span>`
const tagHail = `<span data-buff="hail"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("ice")}">Hail</span></span>`
const tagFoggy = `<span data-buff="foggy"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("ghost")}">Foggy</span></span>`
const tagElectricTerrain = `<span data-buff="electricTerrain"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("electric")}">Electric Terrain</span></span>`
const tagGrassyTerrain = `<span data-buff="grassyTerrain"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("grass")}">Grassy Terrain</span></span>`
const tagMistyTerrain = `<span data-buff="mistyTerrain"><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("fairy")}">Misty Terrain</span></span>`

const wildBuffs = {
  burn: 0,
  freeze: 0,
  paralysis: 0,
  poisoned: 0,
  sleep: 0,
  confused: 0,
  atkup1: 0,
  atkup2: 0,
  atkdown1: 0,
  atkdown2: 0,
  satkup1: 0,
  satkup2: 0,
  satkdown1: 0,
  satkdown2: 0,
  defup1: 0,
  defup2: 0,
  defdown1: 0,
  defdown2: 0,
  sdefup1: 0,
  sdefup2: 0,
  sdefdown1: 0,
  sdefdown2: 0,
  speup1: 0,
  speup2: 0,
  spedown1: 0,
  spedown2: 0,




};

function formatBuffs(buff,mod) {

    if (mod=="hue"){
    if (buff==="burn") return `150`
    if (buff==="freeze") return `-50`
    if (buff==="paralysis") return `170`
    if (buff==="poisoned") return `20`
    if (buff==="sleep") return `0`
    if (buff==="confused") return `100`
    if (buff==="atkup1") return `130`
    if (buff==="atkup2") return `130`
    if (buff==="atkdown1") return `-10`
    if (buff==="atkdown2") return `-10`
    if (buff==="defup1") return `130`
    if (buff==="defup2") return `130`
    if (buff==="defdown1") return `-10`
    if (buff==="defdown2") return `-10`
    if (buff==="satkup1") return `130`
    if (buff==="satkup2") return `130`
    if (buff==="satkdown1") return `-10`
    if (buff==="satkdown2") return `-10`
    if (buff==="sdefup1") return `130`
    if (buff==="sdefup2") return `130`
    if (buff==="sdefdown1") return `-10`
    if (buff==="sdefdown2") return `-10`
    if (buff==="speup1") return `130`
    if (buff==="speup2") return `130`
    if (buff==="spedown1") return `-10`
    if (buff==="spedown2") return `-10`   
    }

    if (mod==undefined){
    if (buff==="burn") return `BRN`
    if (buff==="freeze") return `FRZ`
    if (buff==="paralysis") return `PAR`
    if (buff==="poisoned") return `PSN`
    if (buff==="sleep") return `ZZZ`
    if (buff==="confused") return `CNF`
    if (buff==="atkup1") return `ATK ▲`
    if (buff==="atkup2") return `ATK ▲▲`
    if (buff==="atkdown1") return `ATK ▼`
    if (buff==="atkdown2") return `ATK ▼▼`
    if (buff==="defup1") return `DEF ▲`
    if (buff==="defup2") return `DEF ▲▲`
    if (buff==="defdown1") return `DEF ▼`
    if (buff==="defdown2") return `DEF ▼▼`
    if (buff==="satkup1") return `SATK ▲`
    if (buff==="satkup2") return `SATK ▲▲`
    if (buff==="satkdown1") return `SATK ▼`
    if (buff==="satkdown2") return `SATK ▼▼`
    if (buff==="sdefup1") return `SDEF ▲`
    if (buff==="sdefup2") return `SDEF ▲▲`
    if (buff==="sdefdown1") return `SDEF ▼`
    if (buff==="sdefdown2") return `SDEF ▼▼`
    if (buff==="speup1") return `SPE ▲`
    if (buff==="speup2") return `SPE ▲▲`
    if (buff==="spedown1") return `SPE ▼`
    if (buff==="spedown2") return `SPE ▼▼`   
    }

}


function moveBuff(target,buff,mod){


    let affectedTurns = 3
    if (buff == "spedown1") affectedTurns = 2
    if (buff == "spedown2") affectedTurns = 2
    if (buff == "paralysis") affectedTurns = 2


    if (target==="wild" && mod=="team") { 

        if (team[exploreActiveMember].item == item.lightClay.id && /atkup1|atkup2|defup1|defup2|stakup1|stakup2|sdefup1|sdefup2|speup1|speup2/.test(buff) ) affectedTurns++
        if (team[exploreActiveMember].item == item.mentalHerb.id && /atkdown1|atkdown2|defdown1|defdown2|stakdown1|stakdown2|sdefdown1|sdefdown2|spedown1|spedown2burn|freeze|confused|paralysis|poisoned|sleep/.test(buff) ) affectedTurns--

        for (const slot in team) {
            team[slot].buffs[buff] = affectedTurns
        }
    }


    if ((target==="player" && mod=="self") || (mod==undefined && target==="wild")) {

        if (buff == "paralysis" && pkmn[saved.currentPkmn].type.includes("electric")) return
        if (/burn|freeze|confused|paralysis|poisoned|sleep/.test(buff) && (wildBuffs.burn>0 || wildBuffs.freeze>0 || wildBuffs.confused>0 || wildBuffs.paralysis>0 || wildBuffs.poisoned>0 || wildBuffs.sleep>0 )) return

        wildBuffs[buff] = affectedTurns

        if (testAbility(`active`, ability.imposter.id ) &&  /atkup1|atkup2|defup1|defup2|stakup1|stakup2|sdefup1|sdefup2|speup1|speup2/.test(buff)) team[exploreActiveMember].buffs[buff] = affectedTurns;


        return
    } 


    if ((target==="wild" && mod=="self") || (mod==undefined && target==="player")) {

        if (buff == "paralysis" && pkmn[team[exploreActiveMember].pkmn.id].type.includes("electric")) return
        if (/burn|freeze|confused|paralysis|poisoned|sleep/.test(buff) && (team[exploreActiveMember].buffs?.burn>0 || team[exploreActiveMember].buffs?.freeze>0 || team[exploreActiveMember].buffs?.confused>0 || team[exploreActiveMember].buffs?.paralysis>0 || team[exploreActiveMember].buffs?.poisoned>0 || team[exploreActiveMember].buffs?.sleep>0 )) return

        if (testAbility(`active`, ability.synchronize.id ) && /burn|freeze|confused|paralysis|poisoned|sleep/.test(buff)) { wildBuffs[buff] = 3; updateWildBuffs()}

        if (testAbility(`active`, ability.wonderSkin.id ) && /burn|freeze|confused|paralysis|poisoned|sleep/.test(buff) && rng(0.5)) return
        
        if (team[exploreActiveMember].item == item.lightClay.id && /atkup1|atkup2|defup1|defup2|stakup1|stakup2|sdefup1|sdefup2|speup1|speup2/.test(buff) ) affectedTurns++
        if (team[exploreActiveMember].item == item.mentalHerb.id && /atkdown1|atkdown2|defdown1|defdown2|stakdown1|stakdown2|sdefdown1|sdefdown2|spedown1|spedown2burn|freeze|confused|paralysis|poisoned|sleep/.test(buff) ) affectedTurns--

        //if (pkmn[team[exploreActiveMember].pkmn.id].ability == ability.hydratation.id && saved.weather == "rainy" && saved.weatherTimer>0 && /burn|freeze|confused|paralysis|poisoned|sleep|defdown1|defdown2|atkdown1|atkdown2|sdefdown1|sdefdown2|satkdown1|satkdown2|spedown1|spedown2/.test(buff)) {return}
        if (testAbility(`active`, ability.hydratation.id ) && saved.weather == "rainy" && saved.weatherTimer>0 && /burn|freeze|confused|paralysis|poisoned|sleep/.test(buff)) {return}
        if (testAbility(`active`, ability.sandVeil.id ) && saved.weather == "sandstorm" && saved.weatherTimer>0 && /burn|freeze|confused|paralysis|poisoned|sleep/.test(buff)) {return}
        if (testAbility(`active`, ability.snowCloak.id ) && saved.weather == "hail" && saved.weatherTimer>0 && /burn|freeze|confused|paralysis|poisoned|sleep/.test(buff)) {return}

        if (testAbility(`active`, ability.grassyPelt.id)  && saved.weather == "rainy" && saved.weatherTimer>0 && /burn|freeze|confused|paralysis|poisoned|sleep|defdown1|defdown2|atkdown1|atkdown2|sdefdown1|sdefdown2|satkdown1|satkdown2|spedown1|spedown2/.test(buff)) {return}
        if (testAbility(`active`, ability.sandyPelt.id ) && saved.weather == "sunny" && saved.weatherTimer>0 && /burn|freeze|confused|paralysis|poisoned|sleep|defdown1|defdown2|atkdown1|atkdown2|sdefdown1|sdefdown2|satkdown1|satkdown2|spedown1|spedown2/.test(buff)) {return}
        if (testAbility(`active`, ability.moistPelt.id ) && saved.weather == "sandstorm" && saved.weatherTimer>0 && /burn|freeze|confused|paralysis|poisoned|sleep|defdown1|defdown2|atkdown1|atkdown2|sdefdown1|sdefdown2|satkdown1|satkdown2|spedown1|spedown2/.test(buff)) {return}
        if (testAbility(`active`, ability.fieryPelt.id ) && saved.weather == "hail" && saved.weatherTimer>0 && /burn|freeze|confused|paralysis|poisoned|sleep|defdown1|defdown2|atkdown1|atkdown2|sdefdown1|sdefdown2|satkdown1|satkdown2|spedown1|spedown2/.test(buff)) {return}
        if (testAbility(`active`, ability.pixiePelt.id ) && saved.weather == "foggy" && saved.weatherTimer>0 && /burn|freeze|confused|paralysis|poisoned|sleep|defdown1|defdown2|atkdown1|atkdown2|sdefdown1|sdefdown2|satkdown1|satkdown2|spedown1|spedown2/.test(buff)) {return}

        if (testAbility(`active`, ability.simple.id) && buff.endsWith("1")) {
            const upgradedBuff = buff.slice(0, -1) + "2";
            team[exploreActiveMember].buffs[upgradedBuff] = affectedTurns;
            return
        }

        if (testAbility(`active`, ability.contrary.id) && typeof buff === "string" && (buff.includes("down") || buff.includes("up")) ) {
        const inverse = buff.includes("down")
        ? buff.replace("down", "up")
        : buff.replace("up", "down");
        team[exploreActiveMember].buffs[inverse] = affectedTurns;  
        return
        }

        team[exploreActiveMember].buffs[buff] = affectedTurns
        return
    } 
    
}

saved.claimedExportReward = false

function claimExportReward(){


        if (areas.vsGymLeaderBrock.defeated == false) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `Defeat Gym Leader Brock in VS mode to unlock`
        openTooltip()
        return
        }

        document.getElementById("tooltipTitle").innerHTML = `Reward Received`
        document.getElementById("tooltipMid").style.display = `none`
        

        const rewardArray = [item.hpUp.id, item.protein.id, item.iron.id, item.calcium.id, item.zinc.id, item.carbos.id]
        const reward = arrayPick(rewardArray)

        const parentDiv = document.createElement("div");
        parentDiv.id = "reward-items-display"
        parentDiv.style.display = "flex"
        parentDiv.style.gap = "1rem"
        parentDiv.style.width = "100%"
        parentDiv.style.justifyContent = "center"

        
        document.getElementById("tooltipBottom").appendChild(parentDiv);


        const div = document.createElement("div");
        div.dataset.item = reward
        div.innerHTML = `<img style="scale:2; image-rendering: pixelated; cursor:help" src="img/items/${reward}.png">`;
        document.getElementById("reward-items-display").appendChild(div);

        const divCandy = document.createElement("div");
        divCandy.dataset.item = item.timeCandy.id
        divCandy.innerHTML = `<img style="scale:2; image-rendering: pixelated; cursor:help" src="img/items/${item.timeCandy.id}.png">`;
        document.getElementById("reward-items-display").appendChild(divCandy);


        saved.claimedExportReward = true;
        saveGame()
        exportData()
        item[reward].got++
        item.timeCandy.got++
        openMenu()

        
        openTooltip()

        

}

let currentEditedPkmn;

function switchShiny(){

    if (pkmn[currentEditedPkmn].shiny && pkmn[currentEditedPkmn].shinyDisabled!==true){
        pkmn[currentEditedPkmn].shinyDisabled = true
        document.getElementById("pkmn-editor-sprite").src = `img/pkmn/sprite/${currentEditedPkmn}.png` 
        return
    }

    if (pkmn[currentEditedPkmn].shiny && pkmn[currentEditedPkmn].shinyDisabled==true){
        pkmn[currentEditedPkmn].shinyDisabled = false
        document.getElementById("pkmn-editor-sprite").src = `img/pkmn/shiny/${currentEditedPkmn}.png` 
        return
    }

}

function exitPkmnTeam(){


    document.getElementById(`explore-menu`).style.display = `flex`
    document.getElementById(`team-menu`).style.zIndex = `30`
    document.getElementById(`team-menu`).style.display = `none`
    document.getElementById("menu-button-parent").style.display = "flex"
    saved.currentArea = undefined


}


function returnPkmnDivision(id,mod){

    const totalSum = id.bst.hp + id.bst.atk + id.bst.satk + id.bst.def + id.bst.sdef + id.bst.spe

    if (mod=="sum") return totalSum
    if (totalSum<10) return "D"
    if (totalSum<14) return "C"
    if (totalSum<16) return "B"
    if (totalSum<19) return "A"
    if (totalSum<21) return "S"
    if (totalSum<24) return "SS"
    else return "SSS"

}


function returnDivisionLetter(division){


    if (division==="D") return `<strong style="color:#DAA867" class="tier-letter">D</strong>`
    if (division==="C") return `<strong style="color:#73C46A" class="tier-letter">C</strong>`
    if (division==="B") return `<strong class="tier-letter">B</strong>`
    if (division==="A") return `<strong style="color:#EB535D" class="tier-letter">A</strong>`
    if (division==="S") return `<strong class="tier-letter-s">S</strong>`
    if (division==="SS") return `<strong class="tier-letter-s">SS</strong>`
    if (division==="SSS") return `<strong class="tier-letter-s">SSS</strong>`
    if (division==="SSS+") return `<strong class="tier-letter-s">SSS+</strong>`

}

saved.geneticHost = undefined;
saved.geneticSample = undefined;
saved.geneticOperation = undefined;
saved.geneticOperationTotal = undefined;

let dexHostSelect = undefined
let dexSampleSelect = undefined
let geneticItemSelect = false




    document.getElementById("genetics-host-div").addEventListener("click", e => {

        if (saved.geneticOperation !== undefined) return

        document.getElementById(`pokedex-menu`).style.display = "flex"
        document.getElementById(`pokedex-menu`).style.zIndex = "200"

        dexHostSelect = true

        updatePokedex()

    })


    document.getElementById("genetics-sample-div").addEventListener("click", e => {

        if (saved.geneticOperation !== undefined) return

        document.getElementById(`pokedex-menu`).style.display = "flex"
        document.getElementById(`pokedex-menu`).style.zIndex = "200"

        dexSampleSelect = true

        updatePokedex()

    })


    document.getElementById("genetics-start").addEventListener("click", e => {

        if (saved.geneticOperation <= 1){
            
            


        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `Opration finished!<br>Do you want to use a genetic-aiding item?`
        document.getElementById("tooltipMid").innerHTML = `The item will be consumed on use`
        document.getElementById("tooltipBottom").innerHTML = `
        
        <span style="display:flex; justify-content:center; align-items:center; width:100%">
        
        <div 
        onClick = '
        saved.geneticOperation = undefined;
        setGeneticMenu("end");
        '
        style="cursor:pointer; font-size:2rem; width:40%"> Nope </div>
        
        
        
        <div onClick = '
        document.getElementById("item-menu").style.zIndex = "400";
        document.getElementById("item-menu").style.display = "flex";
        document.getElementById("item-menu-cancel").style.display = "inline";
        geneticItemSelect = true;
        bagCategory = "key";
        updateItemBag();
        closeTooltip()


        ' style="cursor:pointer; font-size:2rem; width:40%" id="prevent-tooltip-exit">Yeah!
        </div>

        </span>
        
        `



        openTooltip()


            return
        }

        if (saved.geneticOperation != undefined){
            
            


        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `Are you sure you want to abort the operation?`
        document.getElementById("tooltipMid").innerHTML = `Nothing but time will be lost`
        document.getElementById("tooltipBottom").innerHTML = `<div onClick = "

        saved.geneticOperation = undefined;
        setGeneticMenu();
        closeTooltip()

        " style="cursor:pointer; font-size:2rem" id="prevent-tooltip-exit">Yeah!</div>`
        openTooltip()


            return
        }

        if (saved.geneticHost == undefined || saved.geneticSample == undefined) return
        setGeneticMenu("start")
        return

    })


function setGeneticMenu(mod, item){

    

const hostPkmn = pkmn[saved.geneticHost];
const samplePkmn = pkmn[saved.geneticSample];

if (saved.geneticHost != undefined) {
document.getElementById("genetics-host-div").innerHTML = `<img class="sprite-trim" style="z-index: 1; transform-origin: bottom; margin-top: auto; position: absolute; bottom: -4.5rem;" id="genetics-host" src="img/pkmn/sprite/${hostPkmn.id}.png">
<img style="animation: none; position: absolute; opacity: 0.4; width: 4.5rem; z-index: 0; transform: translateY(0.5rem); image-rendering: initial;" src="img/resources/pkmn-shadow.png">`
if (pkmn[saved.geneticHost].shiny) {document.getElementById("genetics-host").src = `img/pkmn/shiny/${saved.geneticHost}.png`;}
} else {
document.getElementById("genetics-host-div").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"/></svg>`
}


if (saved.geneticSample != undefined) {
document.getElementById("genetics-sample-div").innerHTML = `<img class="sprite-trim" style="animation: none; z-index: 1;" id="genetics-sample" src="img/pkmn/sprite/${samplePkmn.id}.png">`
if (pkmn[saved.geneticSample].shiny) {document.getElementById("genetics-sample").src = `img/pkmn/shiny/${samplePkmn.id}.png`; }
} else {
document.getElementById("genetics-sample-div").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32"/></svg>`
}



if (saved.geneticHost!==undefined) {document.getElementById("genetics-host-div").dataset.pkmnEditor = saved.geneticHost} else {delete document.getElementById("genetics-host-div").dataset.pkmnEditor;}
if (saved.geneticSample!==undefined) {document.getElementById("genetics-sample-div").dataset.pkmnEditor = saved.geneticSample} else {delete document.getElementById("genetics-host-div").dataset.pkmnEditor;}


if (saved.geneticHost== undefined || saved.geneticSample == undefined) powerCost = 0
else {
if (returnPkmnDivision(hostPkmn) === "D")  powerCost = 1
if (returnPkmnDivision(hostPkmn) === "C")  powerCost = 3
if (returnPkmnDivision(hostPkmn) === "B")  powerCost = 4
if (returnPkmnDivision(hostPkmn) === "A")  powerCost = 6
if (returnPkmnDivision(hostPkmn) === "S")  powerCost = 8
if (returnPkmnDivision(hostPkmn) === "SS")  powerCost = 10
if (returnPkmnDivision(hostPkmn) === "SSS")  powerCost = 12
}

let compability = 1;
if (saved.geneticHost== undefined || saved.geneticSample == undefined) compability = 1
else {

const sharedType = hostPkmn.type.filter(type => samplePkmn.type.includes(type) ).length;

if (sharedType === 1) compability = 2;
if (sharedType === 2) compability = 3;

const familyHost = getEvolutionFamily(hostPkmn);
const familySample = getEvolutionFamily(samplePkmn);
if (familyHost.has(samplePkmn) || familySample.has(hostPkmn)) {
    compability = 4;
}

if (samplePkmn.id === "ditto") compability = 2

}




document.getElementById("genetics-bar-compatibility").style.width = `${((compability-1) / 3) * 100}%`


document.getElementById("genetics-bar-power").style.width = `${(powerCost / 12) * 100}%`

if (powerCost >= 8) document.getElementById("genetics-bar-power").style.backgroundColor = `coral`
else {document.getElementById("genetics-bar-power").style.backgroundColor = `rgb(229, 143, 255)`}

const timeNeeded = ( 10 * powerCost ) *60
const [h, m, x] = [
  (timeNeeded / 3600) | 0,
  ((timeNeeded % 3600) / 60) | 0,
  (timeNeeded % 60) | 0
];

document.getElementById("genetics-data-time").innerHTML = `${h}h ${m}m ${x}s`

document.getElementById("genetics-warning").style.display = "none"
if (powerCost>=8) document.getElementById("genetics-warning").style.display = "flex"
if (powerCost==8) document.getElementById("genetics-warning").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="28" d="M12 10l4 7h-8Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path d="M12 10l4 7h-8Z" opacity="0"><animate attributeName="d" begin="0.4s" dur="0.8s" keyTimes="0;0.25;1" repeatCount="indefinite" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"/><animate attributeName="opacity" begin="0.4s" dur="0.8s" keyTimes="0;0.1;0.75;1" repeatCount="indefinite" values="0;1;1;0"/></path></g></svg>Warning, high Power Cost! Only 5 out of 6 maximum IV's per stat will be inherited!`
if (powerCost==10) document.getElementById("genetics-warning").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="28" d="M12 10l4 7h-8Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path d="M12 10l4 7h-8Z" opacity="0"><animate attributeName="d" begin="0.4s" dur="0.8s" keyTimes="0;0.25;1" repeatCount="indefinite" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"/><animate attributeName="opacity" begin="0.4s" dur="0.8s" keyTimes="0;0.1;0.75;1" repeatCount="indefinite" values="0;1;1;0"/></path></g></svg>Warning, very high Power Cost! Only 4 out of 6 maximum IV's per stat will be inherited!`
if (powerCost==12) document.getElementById("genetics-warning").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="28" d="M12 10l4 7h-8Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path d="M12 10l4 7h-8Z" opacity="0"><animate attributeName="d" begin="0.4s" dur="0.8s" keyTimes="0;0.25;1" repeatCount="indefinite" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"/><animate attributeName="opacity" begin="0.4s" dur="0.8s" keyTimes="0;0.1;0.75;1" repeatCount="indefinite" values="0;1;1;0"/></path></g></svg>Warning, extreme Power Cost! Only 3 out of 6 maximum IV's per stat will be inherited!`

let shinyChance = 1/100
if (saved.geneticHost== undefined || saved.geneticSample == undefined) shinyChance = 0
else {
if (samplePkmn.shiny && compability == 2) shinyChance = 1/25
if (samplePkmn.shiny && compability == 3) shinyChance = 1/10
if (samplePkmn.shiny && compability == 4) shinyChance = 1/1
if (pkmn[saved.geneticHost].shiny) shinyChance = 0
}


document.getElementById("genetics-data-shiny").innerHTML = `${(  shinyChance*100  ).toFixed(0)}%`


let moveChance = 0.05
if ( compability == 2) moveChance = 0.30
if ( compability == 3) moveChance = 0.50
if ( compability == 4) moveChance = 0.50
if ( compability == 0) moveChance = 0

document.getElementById("genetics-data-moves").innerHTML = `${(  moveChance*100  ).toFixed(0)}%`


let ivChance = 1/50
if ( compability == 2) ivChance = 1/20
if ( compability == 3) ivChance = 1/6.5
if ( compability == 4) ivChance = 1/2
if ( compability == 0) ivChance = 0

document.getElementById("genetics-data-hp").innerHTML = `${(  ivChance*100  ).toFixed(0)}%`
document.getElementById("genetics-data-atk").innerHTML = `${(  ivChance*100  ).toFixed(0)}%`
document.getElementById("genetics-data-def").innerHTML = `${(  ivChance*100  ).toFixed(0)}%`
document.getElementById("genetics-data-satk").innerHTML = `${(  ivChance*100  ).toFixed(0)}%`
document.getElementById("genetics-data-sdef").innerHTML = `${(  ivChance*100  ).toFixed(0)}%`
document.getElementById("genetics-data-spe").innerHTML = `${(  ivChance*100  ).toFixed(0)}%`

if (mod==="start"){
    afkSecondsGenetics = 0
    saved.geneticOperation = timeNeeded
    saved.geneticOperationTotal = timeNeeded
}

if (saved.geneticOperation !== undefined){
    document.getElementById("genetics-start").textContent = "Abort"
    document.getElementById("genetics-start").style.color = "coral"
    document.getElementById("genetics-start").style.outlineColor = "coral"
    document.getElementById("genetics-progress").style.display = "flex"
    document.getElementById("genetics-arrow").style.animation = "genetics-arrow 2s infinite"
    document.getElementById("genetics-host").style.animation = "pkmn-active 0.5s infinite"
    document.getElementById("genetics-progress-time").innerHTML = returnHMS(saved.geneticOperation)
    document.getElementById("genetics-progress-bar").style.width = `${100 - (saved.geneticOperation / saved.geneticOperationTotal) * 100}%`;

} else {
    document.getElementById("genetics-start").textContent = "Start"
    document.getElementById("genetics-start").style.color = "rgb(189, 123, 219)"
    document.getElementById("genetics-start").style.outlineColor = "rgb(189, 123, 219)"
    document.getElementById("genetics-progress").style.display = "none"
    document.getElementById("genetics-arrow").style.animation = "none"
    if (document.getElementById("genetics-host")) document.getElementById("genetics-host").style.animation = "none"
}

if (saved.geneticOperation <= 1){
    document.getElementById("genetics-start").textContent = "Finish"
    document.getElementById("genetics-start").style.color = "lawngreen"
    document.getElementById("genetics-start").style.outlineColor = "lawngreen"
}

if (mod==="end"){

    

    let summaryTags = ""

    pkmn[saved.geneticHost].level = 1
    pkmn[saved.geneticHost].exp = 1

    if (rng(shinyChance)) {pkmn[saved.geneticHost].shiny = true; summaryTags += `<div style="filter:hue-rotate(100deg)">✦ Shiny Mutation!</div>` }

    if (item == "destinyKnot"){ //ability swap
    const hostAbility = pkmn[saved.geneticHost].ability
    const sampleAbility = pkmn[saved.geneticSample].ability
    pkmn[saved.geneticHost].ability = sampleAbility
    pkmn[saved.geneticSample].ability = hostAbility
    summaryTags += `<div style="filter:hue-rotate(-50deg)">★ Ability swapped!</div>`
    } else {
    const newAbility = learnPkmnAbility(saved.geneticHost)
    if (item!=="everstone") {pkmn[saved.geneticHost].ability = newAbility; summaryTags += `<div style="filter:hue-rotate(-50deg)">★ New ability: ${format(newAbility)}!</div>`}
    }

    pkmn[saved.geneticHost].movepool = []
    if (pkmn[saved.geneticHost].moves.slot1 !== undefined )pkmn[saved.geneticHost].movepool.push(pkmn[saved.geneticHost].moves.slot1)
    if (pkmn[saved.geneticHost].moves.slot2 !== undefined )pkmn[saved.geneticHost].movepool.push(pkmn[saved.geneticHost].moves.slot2)
    if (pkmn[saved.geneticHost].moves.slot3 !== undefined )pkmn[saved.geneticHost].movepool.push(pkmn[saved.geneticHost].moves.slot3)
    if (pkmn[saved.geneticHost].moves.slot4 !== undefined )pkmn[saved.geneticHost].movepool.push(pkmn[saved.geneticHost].moves.slot4)

    pkmn[saved.geneticSample].movepool.forEach(moveID => {
        if (rng(moveChance) && !(pkmn[saved.geneticHost].movepool.includes(moveID)) && move[moveID].moveset!==undefined ) {pkmn[saved.geneticHost].movepool.push(moveID); summaryTags += `<div style="filter:hue-rotate(0deg)">◇ Move inherited: ${format(moveID)}!</div>`}
    });

    
    let ivChanceHp = ivChance
    if (item == "powerWeight") ivChanceHp *= 20
    let ivChanceAtk = ivChance
    if (item == "powerBracer") ivChanceAtk *= 20
    let ivChanceDef = ivChance
    if (item == "powerBelt") ivChanceDef *= 20
    let ivChanceSatk = ivChance
    if (item == "powerLens") ivChanceSatk *= 20
    let ivChanceSdef = ivChance
    if (item == "powerBand") ivChanceSdef *= 20
    let ivChanceSpe = ivChance
    if (item == "powerAnklet") ivChanceSpe *= 20

    let ivCap = 6
    if (powerCost==8) ivCap = 5
    if (powerCost==10) ivCap = 4
    if (powerCost==12) ivCap = 3


    if (rng(ivChanceHp) && pkmn[saved.geneticHost].ivs.hp<Math.min(ivCap, pkmn[saved.geneticSample].ivs.hp)) {pkmn[saved.geneticHost].ivs.hp = Math.min(ivCap, pkmn[saved.geneticSample].ivs.hp) ; summaryTags += `<div style="filter:hue-rotate(200deg)">❖ HP Iv's inherited!</div>`}
    if (rng(ivChanceAtk) && pkmn[saved.geneticHost].ivs.atk<Math.min(ivCap, pkmn[saved.geneticSample].ivs.atk)) {pkmn[saved.geneticHost].ivs.atk = Math.min(ivCap, pkmn[saved.geneticSample].ivs.atk) ; summaryTags += `<div style="filter:hue-rotate(200deg)">❖ Attack Iv's inherited!</div>`}
    if (rng(ivChanceDef) && pkmn[saved.geneticHost].ivs.def<Math.min(ivCap, pkmn[saved.geneticSample].ivs.def)) {pkmn[saved.geneticHost].ivs.def = Math.min(ivCap, pkmn[saved.geneticSample].ivs.def) ; summaryTags += `<div style="filter:hue-rotate(200deg)">❖ Defense Iv's inherited!</div>`}
    if (rng(ivChanceSatk) && pkmn[saved.geneticHost].ivs.satk<Math.min(ivCap, pkmn[saved.geneticSample].ivs.satk)) {pkmn[saved.geneticHost].ivs.satk = Math.min(ivCap, pkmn[saved.geneticSample].ivs.satk) ; summaryTags += `<div style="filter:hue-rotate(200deg)">❖ Special Attack Iv's inherited!</div>`}
    if (rng(ivChanceSdef) && pkmn[saved.geneticHost].ivs.sdef<Math.min(ivCap, pkmn[saved.geneticSample].ivs.sdef)) {pkmn[saved.geneticHost].ivs.sdef = Math.min(ivCap, pkmn[saved.geneticSample].ivs.sdef) ; summaryTags += `<div style="filter:hue-rotate(200deg)">❖ Special Defense Iv's inherited!</div>`}
    if (rng(ivChanceSpe) && pkmn[saved.geneticHost].ivs.spe<Math.min(ivCap, pkmn[saved.geneticSample].ivs.spe)) {pkmn[saved.geneticHost].ivs.spe = Math.min(ivCap, pkmn[saved.geneticSample].ivs.spe) ; summaryTags += `<div style="filter:hue-rotate(200deg)">❖ Speed Iv's inherited!</div>`}


    for (const iv in pkmn[saved.geneticHost].ivs){
        const ivId = pkmn[saved.geneticHost].ivs[iv]
        //let maxIv = 3
        let newIv = 0

        if (rng(0.20)) newIv++
        if (rng(0.20)) newIv++
        if (rng(0.20)) newIv++
        if (rng(0.20)) newIv++           
        if (rng(0.20)) newIv++
        if (rng(0.20)) newIv++           
        if (rng(0.20)) newIv++
        if (newIv>6) newIv = 6           
        
        if (newIv>ivId) {
            pkmn[saved.geneticHost].ivs[iv] = newIv
            if (iv === "hp") summaryTags += `<div style="filter:hue-rotate(250deg)">◆ HP Iv's increased!</div>`
            if (iv === "atk") summaryTags += `<div style="filter:hue-rotate(250deg)">◆ Attack Iv's increased!</div>`
            if (iv === "def") summaryTags += `<div style="filter:hue-rotate(250deg)">◆ Defense Iv's increased!</div>`
            if (iv === "satk") summaryTags += `<div style="filter:hue-rotate(250deg)">◆ Special Attack Iv's increased!</div>`
            if (iv === "sdef") summaryTags += `<div style="filter:hue-rotate(250deg)">◆ Special Defense Iv's increased!</div>`
            if (iv === "spe") summaryTags += `<div style="filter:hue-rotate(250deg)">◆ Speed Iv's increased!</div>`
        }
    }


    if (summaryTags == "") summaryTags = "No new genetic changes"
    
    document.getElementById("tooltipTitle").innerHTML = `Operation overview`
    document.getElementById("tooltipTop").style.display = "none"    
    document.getElementById("tooltipMid").innerHTML = `<div class="genetics-overview-tags" id="prevent-tooltip-exit">${summaryTags}</div>`
    document.getElementById("tooltipBottom").innerHTML = `<div style="display:flex;justify-content:center;align-items:center; width:100%; cursor:help"><div class="area-preview" data-pkmn-editor="${saved.geneticHost}"><img   class="sprite-trim" src="img/pkmn/sprite/${saved.geneticHost}.png"> </div></div>`


    saved.geneticHost = undefined

    setGeneticMenu()

}



}




setInterval(() => {
    if (saved.geneticOperation==undefined) return
    if (saved.geneticOperation===1)  {saved.geneticOperation--; setGeneticMenu();}
    if (saved.geneticOperation<1 && document.getElementById("genetics-start").textContent == "Abort") setGeneticMenu();
    if (saved.geneticOperation==0) return
    if (saved.geneticOperation<0) saved.geneticOperation=1
    //if (document.visibilityState === "visible") saved.geneticOperation--
    if (saved.geneticOperation>1 && afkSecondsGenetics>0){
        saved.geneticOperation -= afkSecondsGenetics
        afkSecondsGenetics = 0
    }
    document.getElementById("genetics-progress-time").innerHTML = returnHMS(saved.geneticOperation)
    document.getElementById("genetics-progress-bar").style.width = `${100 - (saved.geneticOperation / saved.geneticOperationTotal) * 100}%`;
}, 1000);







let dexTrainSelect = undefined


    document.getElementById("training-sprite-div").addEventListener("click", e => {

        document.getElementById(`pokedex-menu`).style.display = "flex"
        document.getElementById(`pokedex-menu`).style.zIndex = "200"

        dexTrainSelect = true

        updatePokedex()

    })


saved.trainingPokemon = undefined

const training = {}

training.level = {
    name: `Level Training`,
    info: `Fully max a Pokemon's level. Can only be done with less than Level 100`,
    tier: 2,
    color: `#dfc969`,
    condition: function() { if (pkmn[saved.trainingPokemon].level<100 && areas.vsEliteTrainerCynthia.defeated == true) return true },
    effect: function() {

        

        for (let i = 0; i < 101; i++) {
        if (pkmn[saved.trainingPokemon].level >= 100) continue
        pkmn[saved.trainingPokemon].level++
        let learntMove = learnPkmnMove(pkmn[saved.trainingPokemon].id, pkmn[saved.trainingPokemon].level)
        if (learntMove != undefined) {
        if (pkmn[ saved.trainingPokemon ].level % 7 === 0) pkmn[ saved.trainingPokemon ].movepool.push(learntMove)
        }
        }

        setTimeout(() => {
        const div = document.createElement("span");
        div.innerHTML = `${format(saved.trainingPokemon)} is now level ${pkmn[saved.trainingPokemon].level}!`
        document.getElementById("area-end-moves-title").appendChild(div);
        document.getElementById("area-end-moves-title").style.display = "flex"
        document.getElementById("area-end-item-title").style.display = "none"
        }, 10);

    }
}

training.iv1 = { //disapears if you have more than x ivs
    name: `IV Training I`,
    info: `Gain 2 random IV stars. Can only be done with less than 10 IV stars`,
    tier: 1,
    color: `#699edf`,
    condition: function() {
        const id = pkmn[saved.trainingPokemon]
        const totalSum = id.ivs.hp + id.ivs.atk + id.ivs.satk + id.ivs.def + id.ivs.sdef + id.ivs.spe
        if (totalSum<10) return true
    },
    effect: function() {
        
    const i = saved.trainingPokemon
    const cap = 2
    const stats = Object.keys(pkmn[i].ivs);
    const increases = {};
    let points = 2;

    while (points > 0) {
        const available = stats.filter(
            s =>
                pkmn[i].ivs[s] < 6 &&
                (increases[s] || 0) < cap
        );

        if (available.length === 0) break;

        const stat = available[Math.floor(Math.random() * available.length)];

        pkmn[i].ivs[stat]++;
        increases[stat] = (increases[stat] || 0) + 1;
        points--;
    }

    const parts = Object.entries(increases).map(
        ([stat, n]) => `${stat} ${n} point${n > 1 ? "s" : ""}`
    );

    let text = `Increased ${parts.slice(0, -1).join(", ")} and ${parts.at(-1)}!`
    if (parts.length === 1) text = `Increased ${parts[0]}!`;


        setTimeout(() => {
        const div = document.createElement("span");
        div.innerHTML = text
        document.getElementById("area-end-moves-title").appendChild(div);
        document.getElementById("area-end-moves-title").style.display = "flex"
        document.getElementById("area-end-item-title").style.display = "none"
        }, 10);

    }
}

training.iv2 = { //doesnt appear until you have more than x ivs
    name: `IV Training II`,
    info: `Gain 2 random IV stars. Can only be done with less than 22 IV stars`,
    tier: 2,
    color: `#699edf`,
    condition: function() {
        const id = pkmn[saved.trainingPokemon]
        const totalSum = id.ivs.hp + id.ivs.atk + id.ivs.satk + id.ivs.def + id.ivs.sdef + id.ivs.spe
        if (totalSum>=10 && totalSum<22) return true
    },
    effect: function() {
        
    const i = saved.trainingPokemon
    const cap = 4
    const stats = Object.keys(pkmn[i].ivs);
    const increases = {};
    let points = 2;

    while (points > 0) {
        const available = stats.filter(
            s =>
                pkmn[i].ivs[s] < 6 &&
                (increases[s] || 0) < cap
        );

        if (available.length === 0) break;

        const stat = available[Math.floor(Math.random() * available.length)];

        pkmn[i].ivs[stat]++;
        increases[stat] = (increases[stat] || 0) + 1;
        points--;
    }

    const parts = Object.entries(increases).map(
        ([stat, n]) => `${stat} ${n} point${n > 1 ? "s" : ""}`
    );

    let text = `Increased ${parts.slice(0, -1).join(", ")} and ${parts.at(-1)}!`
    if (parts.length === 1) text = `Increased ${parts[0]}!`;


        setTimeout(() => {
        const div = document.createElement("span");
        div.innerHTML = text
        document.getElementById("area-end-moves-title").appendChild(div);
        document.getElementById("area-end-moves-title").style.display = "flex"
        document.getElementById("area-end-item-title").style.display = "none"
        }, 10);

    }
}

training.iv3 = { //doesnt appear until you have more than x ivs
    name: `IV Training III`,
    info: `Gain 2 random IV stars`,
    tier: 3,
    color: `#699edf`,
    condition: function() {
        const id = pkmn[saved.trainingPokemon]
        const totalSum = id.ivs.hp + id.ivs.atk + id.ivs.satk + id.ivs.def + id.ivs.sdef + id.ivs.spe
        if (totalSum>=22 && totalSum<36) return true
    },
    effect: function() {
        
    const i = saved.trainingPokemon
    const cap = 6
    const stats = Object.keys(pkmn[i].ivs);
    const increases = {};
    let points = 2;

    while (points > 0) {
        const available = stats.filter(
            s =>
                pkmn[i].ivs[s] < 6 &&
                (increases[s] || 0) < cap
        );

        if (available.length === 0) break;

        const stat = available[Math.floor(Math.random() * available.length)];

        pkmn[i].ivs[stat]++;
        increases[stat] = (increases[stat] || 0) + 1;
        points--;
    }

    const parts = Object.entries(increases).map(
        ([stat, n]) => `${stat} ${n} point${n > 1 ? "s" : ""}`
    );

    let text = `Increased ${parts.slice(0, -1).join(", ")} and ${parts.at(-1)}!`
    if (parts.length === 1) text = `Increased ${parts[0]}!`;


        setTimeout(() => {
        const div = document.createElement("span");
        div.innerHTML = text
        document.getElementById("area-end-moves-title").appendChild(div);
        document.getElementById("area-end-moves-title").style.display = "flex"
        document.getElementById("area-end-item-title").style.display = "none"
        }, 10);

    }
}

training.ability = {
    name: `Ability Training`,
    info: `Rerolls the Pokemon Ability`,
    tier: 1,
    color: `#69df96`,
    effect: function() {
        const newAbility = learnPkmnAbility(saved.trainingPokemon)
        pkmn[saved.trainingPokemon].ability = newAbility

        setTimeout(() => {
        const div = document.createElement("span");
        div.innerHTML = `${format(saved.trainingPokemon)} now has ${format(newAbility)}!`
        document.getElementById("area-end-moves-title").appendChild(div);
        document.getElementById("area-end-moves-title").style.display = "flex"
        document.getElementById("area-end-item-title").style.display = "none"
        }, 10);

    }
}

training.hiddenAbility = {
    name: `Hidden Ability Training`,
    info: `Unlocks the Pokemon Hidden Ability`,
    tier: 2,
    color: `#69df96`,
    condition: function() { if (pkmn[saved.trainingPokemon].hiddenAbility && pkmn[saved.trainingPokemon].hiddenAbilityUnlocked!=true) return true },
    effect: function() {
        pkmn[saved.trainingPokemon].hiddenAbilityUnlocked = true

        setTimeout(() => {
        const div = document.createElement("span");
        div.innerHTML = `${format(saved.trainingPokemon)} now has ${format(pkmn[saved.trainingPokemon].hiddenAbility.id)}!`
        document.getElementById("area-end-moves-title").appendChild(div);
        document.getElementById("area-end-moves-title").style.display = "flex"
        document.getElementById("area-end-item-title").style.display = "none"
        }, 10);

    }
}

training.move = { //disapears if you have 20+ moves or smth
    name: `Move Training`,
    info: `Learn a new Pokemon Move. Can only be done with less than 20 moves, or when a new move is available`,
    tier: 1,
    color: `#cf79c1`,
    condition: function() { if (learnPkmnMove(pkmn[saved.trainingPokemon].id, pkmn[saved.trainingPokemon].level)!=undefined && pkmn[saved.trainingPokemon].movepool.length<20) return true },
    effect: function() {
        let learntMove = learnPkmnMove(pkmn[saved.trainingPokemon].id, pkmn[saved.trainingPokemon].level)

        pkmn[saved.trainingPokemon].movepool.push(learntMove)

        setTimeout(() => {
        const div = document.createElement("span");
        div.innerHTML = `${format(saved.trainingPokemon)} learnt ${format(learntMove)}!`
        document.getElementById("area-end-moves-title").appendChild(div);
        document.getElementById("area-end-moves-title").style.display = "flex"
        document.getElementById("area-end-item-title").style.display = "none"
        }, 10);

    }
}


function setTrainingMenu() {





    if (saved.trainingPokemon != undefined) {
        document.getElementById("training-sprite-div").innerHTML = `<img class="sprite-trim" style="z-index: 1; transform-origin: bottom; margin-top: auto; position: absolute; bottom: 0rem;" id="genetics-host" src="img/pkmn/sprite/${saved.trainingPokemon}.png">`
        if (pkmn[saved.trainingPokemon].shiny) {document.getElementById("genetics-host").src = `img/pkmn/shiny/${saved.trainingPokemon}.png`;}
        voidAnimation("training-sack", "train-sack 1.5s infinite")
    } else {
        document.getElementById("training-sprite-div").innerHTML = `<svg style="color:white; scale:2; opacity:0.8; margin-bottom:-2rem;" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="SVGjidSMeWm"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path fill="#555555" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path stroke-linecap="round" d="M24 16v16m-8-8h16"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGjidSMeWm)"/></svg>`
        voidAnimation("training-sack", "none")
    }




    if (saved.trainingPokemon!==undefined) {document.getElementById("training-sprite-div").dataset.pkmnEditor = saved.trainingPokemon} else {delete document.getElementById("training-sprite-div").dataset.pkmnEditor;}

    document.getElementById("training-list").innerHTML = ""
    
    function returnStars(n,color) {
        if (color!=undefined){
            if (color==1) return -80
            if (color==2) return 0
            if (color==3) return 150
            if (color==4) return 100
            if (color==5) return 50
        }
        return '★'.repeat(n);
    }


    for (const i in training){

    if (saved.trainingPokemon==undefined) continue

    const div = document.createElement("div");
    div.className = "training-module";
    div.style.borderColor = training[i].color
    div.dataset.training = i
    if (training[i].condition && training[i].condition()!=true) div.style.filter = "brightness(0.5)"

    div.innerHTML = `
    <span>${training[i].name}</span>
    <strong style="outline-color: ${training[i].color}; color: ${training[i].color}" >Difficulty: ${returnStars(training[i].tier)}</strong>
    `
    div.style.pointerEvents = "initial"


    document.getElementById("training-list").appendChild(div);




    div.addEventListener("click", e => { 







        let restrictedError = false
        let restricedActive = 0

    for (const activeMoves in pkmn[saved.trainingPokemon].moves) {
        if (pkmn[saved.trainingPokemon].moves[activeMoves] == undefined) continue
        if (move[pkmn[saved.trainingPokemon].moves[activeMoves]].restricted) restricedActive++
    }

    if (restricedActive>1) restrictedError = true

    

    const restrictedIcon = `<svg style="color:${returnTypeColor("normal")}; margin: -0.3rem 0rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity="0.5"/><path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"/></svg>`

    if (restrictedError) {
        document.getElementById("tooltipTop").style.display = "none"
        document.getElementById("tooltipBottom").style.display = "none"
        document.getElementById("tooltipTitle").innerHTML = `Restricted Moves`
        document.getElementById("tooltipMid").innerHTML = `The training Pokemon has multiple restricted moves (${restrictedIcon}) equipped!`
        openTooltip()
        return
    }






        if (training[i].condition && training[i].condition()!=true) return
        areas.training.tier = training[i].tier
        areas.training.currentTraining = i
        afkSeconds = 0
        document.getElementById(`explore-menu`).style.display = `none`

        div.style.pointerEvents = "none"


    for ( const slot in team){
    team[slot].pkmn = undefined
    team[slot].item = undefined
    }

    team.slot1.pkmn = pkmn[saved.trainingPokemon]

        
    voidAnimation(`explore-transition`, `exploreTransition 1s 1`)
    document.getElementById(`explore-transition`).style.display = `flex`


    setTimeout(() => {
        saved.currentArea = areas.training.id
        saved.lastAreaJoined = areas.training.id
        document.getElementById("content-explore").style.display = "flex"
        document.getElementById(`training-menu`).style.display = `none`;
        initialiseArea()
    }, 500);

    })
        
    }







}

setTrainingMenu()





























function returnHMS(seconds) {
  const h = (seconds / 3600) | 0;
  const m = ((seconds % 3600) / 60) | 0;
  const s = (seconds % 60) | 0;

  return `${h}h ${m}m ${s}s`;
}

function getEvolutionFamily(base) {
    const family = new Set();
    const stack = [base];

    while (stack.length > 0) {
        const current = stack.pop();

        if (family.has(current)) continue;
        family.add(current);

        if (typeof current.evolve === "function") {
            const evoObj = current.evolve();
            for (const key in evoObj) {
                if (evoObj[key].pkmn) {
                    stack.push(evoObj[key].pkmn);
                }
            }
        }
    }

    return family;
}







function returnHighestStat(pokemon) { //ignores hp bst, used for beast boost etc
    return Object.keys(pokemon.bst)
        .filter(stat => stat !== "hp")
        .reduce((a, b) => pokemon.bst[a] > pokemon.bst[b] ? a : b);
}



function debugSetIvs(number){
    for (const i in pkmn){
        pkmn[i].ivs.hp = number
        pkmn[i].ivs.atk = number
        pkmn[i].ivs.def = number
        pkmn[i].ivs.sdef = number
        pkmn[i].ivs.satk = number
        pkmn[i].ivs.spe = number
    }
}

function debugGetPkmn(level,mod){
    for (const i in pkmn){
        givePkmn(pkmn[i],level)
        if (mod === "shiny") pkmn[i].shiny = true
        if (mod === "ha") pkmn[i].hiddenAbilityUnlocked = true
    }
}



function testAbility(target,ability){


    if (target == "active"){
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability) return true
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.hiddenAbility?.id == ability && pkmn[ team[exploreActiveMember].pkmn.id ]?.hiddenAbilityUnlocked == true) return true
    }

    if (/slot1|slot2|slot3|slot4|slot5|slot6/.test(target)){
        if (pkmn[ team[target].pkmn.id ]?.ability == ability) return true
        if (pkmn[ team[target].pkmn.id ]?.hiddenAbility?.id == ability && pkmn[ team[target].pkmn.id ]?.hiddenAbilityUnlocked == true) return true
    }


    return false
}

saved.mysteryGiftClaimed = undefined

const mysteryGift = {
    effect: function() {  
        const id = pkmn.spinda.id
        if (pkmn[id].caught==0) givePkmn(pkmn[id],1)
        pkmn[id].shiny = true
        giveRibbon(pkmn[id],"souvenir")
      },
    duration: new Date(2026, 1 - 1, 15),
    info: `Long Press/Right click the present below to receive a gift Spinda!<br>It will be shiny and carrying a Souvenir Ribbon`,
    icon: pkmn.spinda.id
}

function numericDivision(letter,mod){
    if (mod=="inverse"){
    if (letter == 0) return "SSS"
    if (letter == 1) return "SSS"
    if (letter == 2) return "SS"
    if (letter == 3) return "S"
    if (letter == 4) return "A"
    if (letter == 5) return "B"
    if (letter == 6) return "C"
    if (letter == 7) return "D"
    else return "D"
    }
    if (letter == "SSS") return 1
    if (letter == "SS") return 2
    if (letter == "S") return 3
    if (letter == "A") return 4
    if (letter == "B") return 5
    if (letter == "C") return 6
    if (letter == "D") return 7
    else return 7
}


function returnDivisionStars(target, stat){

    let bonus = 0

    if (stat=="atk"){
        //if (target.bst.atk>target.bst.satk) bonus++
        if (target.bst.atk<target.bst.satk) bonus--
    }

    if (stat=="satk"){
        //if (target.bst.atk<target.bst.satk) bonus++
        if (target.bst.atk>target.bst.satk) bonus--
    }

    const division = returnPkmnDivision(target)

    return 4 + bonus

    /*if (division == "D" || division == "C") return 2 + bonus
    if (division == "B") return 3 + bonus
    if (division == "A") return 4 + bonus
    if (division == "S") return 5 + bonus
    if (division == "SS" || division == "SSS") return 6 + bonus*/



}


function claimMysteryGift(){


        if (areas.vsGymLeaderBrock.defeated == false) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `Defeat Gym Leader Brock in VS mode to unlock`
        openTooltip()
        return
        }

    openMenu()
    document.getElementById("tooltipTop").innerHTML = `<img src="img/pkmn/shiny/${mysteryGift.icon}.png">`
    document.getElementById("tooltipTitle").innerHTML = `Mystery Gift`
    document.getElementById("tooltipMid").innerHTML = `${mysteryGift.info}<br>You have until ${mysteryGift.duration.toLocaleString("en-US", {month: "long",day: "numeric"})} to claim`
    document.getElementById("tooltipBottom").innerHTML = `<span data-pkmn-editor=${mysteryGift.icon} id="mystery-claim-button"><img src="img/items/gift.png" style="scale:4; image-rendering:pixelated; padding: 3rem 0; cursor:help" 
    style="cursor:pointer; font-size:2rem" id="prevent-tooltip-exit"></span>`
    openTooltip()

    document.getElementById("mystery-claim-button").addEventListener("contextmenu", (e) => {
    mysteryGift.effect();
    saved.mysteryGiftClaimed = true
    });

}


window.addEventListener('load', function() {


    loadGame();
    getSeed()

    //this safefail prevents loading into unexistiing areas
    if (!areas[saved.currentArea]) saved.currentArea = undefined

    if (saved.currentArea !== undefined) {
        document.getElementById("team-preview").innerHTML = ""
        document.getElementById("content-explore").style.display = "flex"
        initialiseArea()        
        updateItemsGot() 
    } 
    
    //setPkmnTeam()
    //setWildPkmn()

    updateItemShop()

    //exploreCombatPlayer()
    //exploreCombatWild()
    requestAnimationFrame(gameLoop);


    if (saved.firstTimePlaying){
            newGameIntro()
    }
    
    setTimeout(() => {
        saveGame()
    }, 5000);


    changeTheme()

    
    updateGameVersion()
    openTutorial()

    saved.lastExportReset ??= Date.now();
    saved.currentPreviewNumber ??= 1;
    saved.weatherCooldown ??= 0

    requestAnimationFrame(loop);

    changeTeamNames()

    //updateTeamExp()
});
