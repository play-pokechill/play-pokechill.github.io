

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

function rng(number){
    return Math.random() < number
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
    const str = String(input); // fuerza a que sea string
    return str
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b\w/g, c => c.toUpperCase());
}

function arrayPick(array, n = 1) {
    if (!Array.isArray(array) || array.length === 0) return [];

    // Si pides más de los que hay, se limita
    const count = Math.min(n, array.length);

    // Copia para no mutar el original
    const pool = [...array];
    const picks = [];

    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * pool.length);
        picks.push(pool[index]);
        pool.splice(index, 1); // evita repetir
    }

    return n === 1 ? picks[0] : picks;
}


function givePkmn(poke, level) {
    const finalLevel = level ?? 1;

    poke.caught = 1;
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

    // Equipar slot1 con el último movimiento del movepool sólo si no está ya equipado
    const lastMove = poke.movepool[poke.movepool.length - 1];
    if (lastMove) {
    poke.moves.slot1 = lastMove;
        
    }

    poke.level = finalLevel;



    poke.ability = learnPkmnAbility(poke.id);



    updatePokedex();
}


//saved.currentArea = areas.activeVolcano.id;
saved.currentArea = undefined;
saved.currentPkmn;

let wildPkmnHp;
let wildPkmnHpMax;
let wildLevel = 0

let currentTrainerSlot = 1

function setWildPkmn(){

    barProgressWild = 0
    exploreCombatWildTurn = 1  

    if (saved.currentArea == undefined) return

    wildPkmnHp = 0

    let spawnedPkmn;
    let maxTrainerSlot = 1
    let hpMultiplier = 2
    let randomMoves = [];


    if (areas[saved.currentArea].trainer) {
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
            if (item[i.id]!=undefined) item[i.id].got++
            if (pkmn[i.id]!=undefined && pkmn[i.id].caught==0) {
                pkmn[i.id].caught++
                const learntMove = learnPkmnMove(pkmn[i.id].id, 1)
                pkmn[i.id].movepool.push(learntMove)
                pkmn[i.id].moves.slot1 = learntMove
            } 
            }
            }


            areas[saved.currentArea].defeated = true;
            leaveCombat(); 
            return}


        spawnedPkmn = areas[saved.currentArea].team.slot1.id; randomMoves = areas[saved.currentArea].team.slot1Moves
        if (areas[saved.currentArea].team.slot2 && currentTrainerSlot == 2) {spawnedPkmn = areas[saved.currentArea].team.slot2.id; randomMoves = areas[saved.currentArea].team.slot2Moves}
        if (areas[saved.currentArea].team.slot3 && currentTrainerSlot == 3) {spawnedPkmn = areas[saved.currentArea].team.slot3.id; randomMoves = areas[saved.currentArea].team.slot3Moves}
        if (areas[saved.currentArea].team.slot4 && currentTrainerSlot == 4) {spawnedPkmn = areas[saved.currentArea].team.slot4.id; randomMoves = areas[saved.currentArea].team.slot4Moves}
        if (areas[saved.currentArea].team.slot5 && currentTrainerSlot == 5) {spawnedPkmn = areas[saved.currentArea].team.slot5.id; randomMoves = areas[saved.currentArea].team.slot5Moves}
        if (areas[saved.currentArea].team.slot6 && currentTrainerSlot == 6) {spawnedPkmn = areas[saved.currentArea].team.slot6.id; randomMoves = areas[saved.currentArea].team.slot6Moves}

        wildLevel = areas[saved.currentArea].level
        hpMultiplier = 3 

        


    } 
    else {
        document.getElementById(`team-indicator`).style.display = `none`
     




    if (areas[saved.currentArea].level !== undefined) wildLevel = random(areas[saved.currentArea].level-9,areas[saved.currentArea].level)
    
    spawnedPkmn = arrayPick(areas[saved.currentArea].spawns.common).id 
    if (rng(0.08) && areas[saved.currentArea].spawns.uncommon) spawnedPkmn = arrayPick(areas[saved.currentArea].spawns.uncommon).id
    if (rng(0.01) && areas[saved.currentArea].spawns.rare) spawnedPkmn = arrayPick(areas[saved.currentArea].spawns.rare).id


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



    //abilities
    if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.intimidate.id) {wildBuffs.atkdown1 = 3; updateWildBuffs() }
    if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.dauntingLook.id) {wildBuffs.satkdown1 = 3; updateWildBuffs() }




    
    document.getElementById("explore-wild-name").innerHTML = format(spawnedPkmn) + ` <span class="explore-pkmn-level" > lvl ${wildLevel} </span>`
    document.getElementById("explore-wild-sprite").src = `img/pkmn/sprite/${spawnedPkmn}.png`

    if (pkmn[spawnedPkmn].float) document.getElementById("explore-wild-sprite").classList.add(`floating-pkmn`)
    if (!pkmn[spawnedPkmn].float && document.getElementById("explore-wild-sprite").classList.contains(`floating-pkmn`)) document.getElementById("explore-wild-sprite").classList.remove(`floating-pkmn`)


    //wildPkmnHp = 100 + (
    //(pkmn[spawnedPkmn].bst.hp * 25) * 0.2 +      
    //(wildLevel * 2)        
    //) * 10;

    wildPkmnHp =
    (100 + (pkmn[spawnedPkmn].bst.hp * 30)
    * ( 1+(wildLevel * 0.2) )       
    ) * hpMultiplier;

    

    wildPkmnHpMax = wildPkmnHp


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

    const divMove = document.createElement("div");
    divMove.className = "pkmn-movebox";
    divMove.style.borderColor = returnTypeColor(move[i].type);
    divMove.id = `pkmn-movebox-wild-${index+1}`;
    divMove.innerHTML =
        `<div id="pkmn-movebox-wild-${index+1}-bar"
              class="pkmn-movebox-progress"
              style="background: ${returnTypeColor(move[i].type)}"></div>
         <span>${format(i)}</span>
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



function dropItem(){

    if (saved.currentArea == undefined) return

    let drop;
    drop = arrayPick(areas[saved.currentArea].drops?.common).id


    let rareDropChance = 0.03

     for (const slot in team) {

        if (team[slot].pkmn === undefined ) continue
        if (pkmn[ team[slot].pkmn.id ]?.ability == ability.pickPocket.id) rareDropChance += 0.02
     }

    if (rng(0.15)) drop = arrayPick(areas[saved.currentArea].drops?.uncommon).id
    if (rng(rareDropChance)) drop = arrayPick(areas[saved.currentArea].drops?.rare).id



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


function leaveCombat(){

    if (saved.tutorial && saved.tutorialStep === "battle") {saved.tutorialStep = "battleEnd"; openTutorial()}

    currentTrainerSlot = 1
    afkSeconds = 0
    transition()
    exploreCombatWildTurn = 0


   for (const slot in team) {//purge buffs

        if (team[slot].pkmn === undefined ) continue
        
        for ( const i in team[slot].buffs) {

            if (team[slot].buffs[i]>0) team[slot].buffs[i] = 0
        }
    };


            if (document.getElementById(`menu-button`).classList.contains(`menu-button-open`)) openMenu()

        document.getElementById("area-end").style.display = "flex"
        document.getElementById("explore-drops").innerHTML = ""
        document.getElementById(`content-explore`).style.display = "none"



    if (areas[saved.currentArea].trainer) {
        document.getElementById("vs-menu").style.display = "flex"
    } else  document.getElementById("explore-menu").style.display = "flex"

    if (areas[saved.currentArea].trainer) {updateVS()}


    setTimeout(() => {
            
    }, 400);

    let noItems = true
    let noPkmn = true

    document.getElementById("area-end-item-list").innerHTML = ""
    document.getElementById("area-end-pkmn-list").innerHTML = ""

    document.getElementById("area-end-item-title").innerHTML = "New Items!"

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
    if (item.mysteryEgg.got>0 && areas[saved.currentArea].spawns!=undefined) {

    for (let i = 0; i < item.mysteryEgg.got; i++) {
    let hatchedPkmn = arrayPick(areas[saved.currentArea].spawns.common).id
    if (areas[saved.currentArea].spawns.uncommon && rng(0.08)) hatchedPkmn = arrayPick(areas[saved.currentArea].spawns.uncommon).id
    if (areas[saved.currentArea].spawns.rare && rng(0.01)) hatchedPkmn = arrayPick(areas[saved.currentArea].spawns.rare).id

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

    

    const divPkmn = document.createElement("div");
    divPkmn.dataset.pkmnEditor = hatchedPkmn

    divPkmn.innerHTML = `<img class="sprite-trim" src="img/pkmn/sprite/${hatchedPkmn}.png">`+divTag;
    document.getElementById("area-end-pkmn-list").appendChild(divPkmn);

    pkmn[hatchedPkmn].caught++
    noPkmn = false
    }

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
        document.getElementById("area-end-item-title").style.display = "flex"
    }

    if (areas[saved.currentArea]?.trainer && areas[saved.currentArea]?.defeated) document.getElementById("area-end-item-title").innerHTML = "Rewards have been automatically added"


    item.mysteryEgg.got = 0
    item.mysteryEgg.newItem = 0

    saved.currentArea = undefined

    setWildAreas()

    saveGame()



}




function updateWildPkmn(){

    if (saved.currentArea === undefined) return

    let respawnTimer = 1000
    if (saved.overrideBattleTimer != defaultPlayerMoveTimer) respawnTimer = 1

    if (afkSeconds>0) respawnTimer = 0



    const percent = (wildPkmnHp / wildPkmnHpMax) * 100;
    if (percent > 60) document.getElementById("exploe-wild-hp").style.background = "rgb(130, 211, 130)"
    if (percent < 60) document.getElementById("exploe-wild-hp").style.background = "rgba(221, 168, 99, 1)"
    if (percent < 30) document.getElementById("exploe-wild-hp").style.background = "rgba(219, 112, 112, 1)"

    document.getElementById("exploe-wild-hp").style.width = percent + "%"; 

    if (percent <= 0) { //on wild death enemy kill


    //abilities
    if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.moxie.id) team[exploreActiveMember].buffs.atkup1 = 3
    if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.strategist.id) team[exploreActiveMember].buffs.satkup1 = 3


    for (const buff in wildBuffs){ if ( wildBuffs[buff]>0) wildBuffs[buff] = 0 }
    updateWildBuffs()

    if (rng(0.20)) dropItem()
    //document.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}-bar`).style.transition = "0s linear"
    //document.getElementById(`pkmn-movebox-wild-${exploreCombatWildTurn}-bar`).style.width = "0%";

    document.getElementById("exploe-wild-hp").style.width = "0%"; 
    voidAnimation(`explore-wild-sprite`,`wildPokemonDown ${respawnTimer+1}s 1`)

    

    let baseExpGain = 34/2
    if (areas[saved.currentArea]?.trainer) baseExpGain = 0

    let expGained = 0
    if ( wildLevel > (pkmn[ team[exploreActiveMember].pkmn.id ].level-10) ) { expGained = baseExpGain ;}
    if (wildLevel >= pkmn[ team[exploreActiveMember].pkmn.id ].level + 5) { expGained = baseExpGain*3 }
    if (wildLevel >= pkmn[ team[exploreActiveMember].pkmn.id ].level + 10) { expGained = baseExpGain*6 }
    if (wildLevel >= pkmn[ team[exploreActiveMember].pkmn.id ].level + 20) { expGained = baseExpGain*12 }
    
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

    pkmn[ team[i].pkmn.id ].exp+= expGained/2

    }
    


    updateTeamExp()


    if (areas[saved.currentArea].trainer) currentTrainerSlot++



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


function closePkmnEditor(){


    voidAnimation("pkmn-editor","tooltipBoxAppear 0.2s reverse 1 ease-in")



    setTimeout(() => {
    document.getElementById("pkmn-editor-movepool").innerHTML = ""
    document.getElementById("pkmn-editor-current-moves").innerHTML = ""
    document.getElementById("pkmn-editor").style.display = "none"
    }, 150);




}



function closeTooltip(){


    voidAnimation("tooltipBackground","tooltipBoxAppear 0.2s reverse 1 ease-in")



    setTimeout(() => {

    document.getElementById("tooltipTop").style.display = "flex";
    document.getElementById("tooltipTitle").style.display = "inline";
    document.getElementById("tooltipMid").style.display = "inline";
    document.getElementById("tooltipBottom").innerHTML = "inline"

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

    if (document.getElementById(`content-explore`).style.display == "flex"){
        document.getElementById(`menu-item-travel`).style.filter = "brightness(0.6)"
        document.getElementById(`menu-item-vs`).style.filter = "brightness(0.6)"
        document.getElementById(`menu-item-team`).style.filter = "brightness(0.6)"
    } else {
        document.getElementById(`menu-item-travel`).style.filter = "brightness(1)"
        document.getElementById(`menu-item-vs`).style.filter = "brightness(1)"
        document.getElementById(`menu-item-team`).style.filter = "brightness(1)"
    }

    if (document.getElementById(`menu-button`).classList.contains(`menu-button-open`)) {
    document.getElementById(`menu-button`).classList.remove(`menu-button-open`)
    return
    } 
    document.getElementById(`menu-button`).classList.add(`menu-button-open`)


}

saved.currentPreviewTeam = saved.preview1
let dexTeamSelect = undefined
let currentPreviewNumber = 1 //sigh


function cyclePreviewTeams(order){


    currentPreviewNumber += order

    if (currentPreviewNumber > 6) currentPreviewNumber = 1
    if (currentPreviewNumber < 1) currentPreviewNumber = 6

    if (currentPreviewNumber == 1) saved.currentPreviewTeam = saved.preview1
    if (currentPreviewNumber == 2) saved.currentPreviewTeam = saved.preview2
    if (currentPreviewNumber == 3) saved.currentPreviewTeam = saved.preview3
    if (currentPreviewNumber == 4) saved.currentPreviewTeam = saved.preview4
    if (currentPreviewNumber == 5) saved.currentPreviewTeam = saved.preview5
    if (currentPreviewNumber == 6) saved.currentPreviewTeam = saved.preview6

    updatePreviewTeam()



}

function injectPreviewTeam(){

    if (saved.tutorial && saved.tutorialStep === "moves") {saved.tutorialStep = "battle"; openTutorial(); item.mysteryEgg.got++; item.mysteryEgg.newItem++ }

    if (pkmn[saved.currentPreviewTeam.slot1.pkmn]===undefined){

    document.getElementById("tooltipTop").style.display = "none"    
    document.getElementById("tooltipMid").style.display = "none"
    document.getElementById("tooltipBottom").innerHTML = "First team slot must not be empty!"
    openTooltip()
    return

}


    team.slot1.pkmn = pkmn[saved.currentPreviewTeam.slot1.pkmn]
    team.slot2.pkmn = pkmn[saved.currentPreviewTeam.slot2.pkmn]
    team.slot3.pkmn = pkmn[saved.currentPreviewTeam.slot3.pkmn]
    team.slot4.pkmn = pkmn[saved.currentPreviewTeam.slot4.pkmn]
    team.slot5.pkmn = pkmn[saved.currentPreviewTeam.slot5.pkmn]
    team.slot6.pkmn = pkmn[saved.currentPreviewTeam.slot6.pkmn]

    team.slot1.item = saved.currentPreviewTeam.slot1.item
    team.slot2.item = saved.currentPreviewTeam.slot2.item
    team.slot3.item = saved.currentPreviewTeam.slot3.item
    team.slot4.item = saved.currentPreviewTeam.slot4.item
    team.slot5.item = saved.currentPreviewTeam.slot5.item
    team.slot6.item = saved.currentPreviewTeam.slot6.item

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

function updatePreviewTeam(){

    if (saved.tutorial && saved.tutorialStep === "travel") {saved.tutorialStep = "moves"; openTutorial()}
    saved.firstTimePlaying = false

    if (currentPreviewNumber == 1) saved.currentPreviewTeam = saved.preview1
    if (currentPreviewNumber == 2) saved.currentPreviewTeam = saved.preview2
    if (currentPreviewNumber == 3) saved.currentPreviewTeam = saved.preview3
    if (currentPreviewNumber == 4) saved.currentPreviewTeam = saved.preview4
    if (currentPreviewNumber == 5) saved.currentPreviewTeam = saved.preview5
    if (currentPreviewNumber == 6) saved.currentPreviewTeam = saved.preview6

    document.getElementById("team-preview").innerHTML = ""

    document.getElementById("team-preview-slot-1").style.background = "#acacac"
    document.getElementById("team-preview-slot-2").style.background = "#acacac"
    document.getElementById("team-preview-slot-3").style.background = "#acacac"
    document.getElementById("team-preview-slot-4").style.background = "#acacac"
    document.getElementById("team-preview-slot-5").style.background = "#acacac"
    document.getElementById("team-preview-slot-6").style.background = "#acacac"
    if (saved.currentPreviewTeam == saved.preview1) document.getElementById("team-preview-slot-1").style.background = "#7ed0f0ff"
    if (saved.currentPreviewTeam == saved.preview2) document.getElementById("team-preview-slot-2").style.background = "#7ed0f0ff"
    if (saved.currentPreviewTeam == saved.preview3) document.getElementById("team-preview-slot-3").style.background = "#7ed0f0ff"
    if (saved.currentPreviewTeam == saved.preview4) document.getElementById("team-preview-slot-4").style.background = "#7ed0f0ff"
    if (saved.currentPreviewTeam == saved.preview5) document.getElementById("team-preview-slot-5").style.background = "#7ed0f0ff"
    if (saved.currentPreviewTeam == saved.preview6) document.getElementById("team-preview-slot-6").style.background = "#7ed0f0ff"


for (const i in saved.currentPreviewTeam) {

    //if (saved.currentPreviewTeam[i].pkmn === undefined) continue
    
    const div = document.createElement("div")
    div.className = `explore-team-member`


    div.addEventListener("click", e => { //change team member

        document.getElementById(`pokedex-menu`).style.display = "flex"
            document.getElementById(`pokedex-menu`).style.zIndex = "200"

            dexTeamSelect = i

            updatePokedex()


            document.getElementById("pokedex-filters-title").style.display = "flex"
            document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon add to team`
//document.getElementById("menu-button-parent").style.display = "none"

            document.getElementById(`team-menu`).style.display = "none"
        
    })

    
    div.id = `explore-${i}-member`


    if (saved.currentPreviewTeam[i].pkmn !== undefined) {


    let itemDiv = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity="0.2"/><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"/></g></svg>`
    if (saved.currentPreviewTeam[i].item !== undefined) itemDiv = `<img src="img/items/${ saved.currentPreviewTeam[i].item }.png">`

    div.innerHTML = `
    <div class="team-held-item" id="team-${i}-held-item" data-item="${saved.currentPreviewTeam[i].item}">${itemDiv}</div>
    <div class="explore-sprite" id="explore-team-member-${i}-spriteData">
            <img class="sprite-trim" src="img/pkmn/sprite/${saved.currentPreviewTeam[i].pkmn}.png" id="explore-team-member-${i}-sprite">
            </div>

            <div class="explore-header-infobox">

                <div class="explore-header-hpbox">
                <span style="color: white;">${format(saved.currentPreviewTeam[i].pkmn)} <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${pkmn[ saved.currentPreviewTeam[i].pkmn ].level}</span></span>
                </div>

                <div class="explore-header-moves" id="explore-team-member-${i}-moves">

                </div>



            </div>
    `

    setTimeout(() => {
            document.getElementById(`explore-team-member-${i}-spriteData`).dataset.pkmnEditor = saved.currentPreviewTeam[i].pkmn
    }, 1);

        document.getElementById("team-preview").appendChild(div)


   

        document.getElementById(`team-${i}-held-item`).addEventListener("click", e => { //change item

        document.getElementById("item-menu-cancel").style.display = "inline"
        document.getElementById(`item-menu`).style.display = "flex"

        setTimeout(() => { //due to poor implementation, the select pkmn menu opens too. oops!
                    document.getElementById(`pokedex-menu`).style.display = "none"
        }, 1);
            document.getElementById(`item-menu`).style.zIndex = "900"

            dexTeamSelect = i

            updateItemBag()


            //document.getElementById("menu-button-parent").style.display = "none"

                document.getElementById(`team-menu`).style.display = "none"
    })


    




        for (const e in pkmn[saved.currentPreviewTeam[i].pkmn].moves) {

    let moveId = pkmn[saved.currentPreviewTeam[i].pkmn].moves[e]


    if (moveId == undefined){
            continue
    }


    
    const divMove = document.createElement("div") 
    divMove.className = "pkmn-movebox"
    divMove.style.borderColor = returnTypeColor(move[moveId].type)
    divMove.id = `pkmn-movebox-${e}-team-${i}`
    divMove.innerHTML = 
    `<div
    id = "pkmn-movebox-${e}-team-${i}-bar"
    class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[ moveId ].type)} "></div><span>`
    + format(moveId) +
     `</span><img style="background: ${returnTypeColor(move[ moveId ].type)} " src="img/icons/${move[ moveId ].type }.svg">`

     divMove.dataset.move = moveId

    document.getElementById(`explore-team-member-${i}-moves`).appendChild(divMove)
    }




    }

    if (saved.currentPreviewTeam[i].pkmn == undefined) {

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

updatePreviewTeam()


function setPkmnTeamHp(){

    for (const i in team) {

    if (team[i].pkmn === undefined) continue

    let hpMultiplier = 10
    if (areas[saved.currentArea].trainer) hpMultiplier = 3

    pkmn[team[i].pkmn.id].playerHp =
    (100 + ( (pkmn[team[i].pkmn.id].bst.hp * 30) * Math.pow(1.1, pkmn[team[i].pkmn.id].ivs.hp) )
    * ( 1+(pkmn[team[i].pkmn.id].level * 0.2) )       
    ) * hpMultiplier;


    pkmn[ team[i].pkmn.id ].playerHpMax = pkmn[ team[i].pkmn.id ].playerHp


    }


}



function setPkmnTeam(){

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

        if (!div.classList.contains("member-inactive")) return;
        if (pkmn[ team[i].pkmn.id ].playerHp <= 0) return;

        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.naturalCure.id) {team[exploreActiveMember].buffs.confused = 0; team[exploreActiveMember].buffs.burn = 0; team[exploreActiveMember].buffs.freeze = 0; team[exploreActiveMember].buffs.paralysis = 0; team[exploreActiveMember].buffs.poisoned = 0; team[exploreActiveMember].buffs.sleep = 0; updateTeamBuffs() }

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

    pkmn[ team[i].pkmn.id ].currentTurn = 1;





    
    div.id = `explore-${i}-member`



    div.innerHTML = `
    <div class="team-held-item" id="team-${i}-held-item"></div>
    <div class="team-buff-list" id="team-member-${i}-buff-list"></div>
    <div class="explore-sprite" id="explore-team-member-${i}-spriteData">
            <img class="sprite-trim" src="img/pkmn/sprite/${team[i].pkmn.id}.png" id="explore-team-member-${i}-sprite">
            </div>

            <div class="explore-header-infobox">

                <img class="explore-team-member-flair" src="img/icons/pokeball.svg">
                <div class="explore-header-hpbox">
                <span style="color: white;">${format(team[i].pkmn.id)} <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${team[i].pkmn.level}</span></span>
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



    if (moveId == undefined){
            const divMove = document.createElement("div") 
            divMove.className = "pkmn-movebox"
            divMove.style.pointerEvents = "none"
            document.getElementById(`explore-team-member-${i}-moves`).appendChild(divMove)
            continue
    }

    
    const divMove = document.createElement("div") 
    divMove.className = "pkmn-movebox"
    divMove.style.borderColor = returnTypeColor(move[moveId].type)
    divMove.id = `pkmn-movebox-${e}-team-${i}`
    divMove.innerHTML = 
    `<div
    id = "pkmn-movebox-${e}-team-${i}-bar"
    class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[ moveId ].type)} "></div><span>`
    + format(moveId) +
     `</span><img style="background: ${returnTypeColor(move[ moveId ].type)} " src="img/icons/${move[ moveId ].type }.svg">`

     divMove.dataset.move = moveId

    document.getElementById(`explore-team-member-${i}-moves`).appendChild(divMove)
    }



    }


    updateTeamItems()
    updateTeamPkmn()


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


    if (pkmn[ team[i].pkmn.id ].exp>=100){ // on level up



        if (pkmn[ team[i].pkmn.id ].level % 7 === 0) {//every 7 levels, learn move

            const learntMove = learnPkmnMove(pkmn[ team[i].pkmn.id ].id, pkmn[ team[i].pkmn.id ].level)


            pkmn[ team[i].pkmn.id ].movepool.push(learntMove)
            if (pkmn[ team[i].pkmn.id ].moves.slot2 === null) pkmn[ team[i].pkmn.id ].moves.slot2 = learntMove
            else if (pkmn[ team[i].pkmn.id ].moves.slot3 === null) pkmn[ team[i].pkmn.id ].moves.slot3 = learntMove
            else if (pkmn[ team[i].pkmn.id ].moves.slot4 === null) pkmn[ team[i].pkmn.id ].moves.slot4 = learntMove

            pkmn[ team[i].pkmn.id ].newMoves.push(learntMove)

            setPkmnTeam()


        }


        
        pkmn[ team[i].pkmn.id ].exp -= 100
        pkmn[ team[i].pkmn.id ].level++
        document.getElementById(`explore-${i}-lvl`).innerHTML = `lvl ${pkmn[ team[i].pkmn.id ].level}`
        updateTeamExp()




        if (pkmn[ team[i].pkmn.id ].evolve && pkmn[team[i].pkmn.id].evolve()[1].level>0){ // if it evolves by level up

        if (pkmn[ team[i].pkmn.id ].level >= pkmn[team[i].pkmn.id].evolve()[1].level && pkmn[ pkmn[team[i].pkmn.id].evolve()[1].pkmn.id ].caught===0) {

                pkmn[ pkmn[team[i].pkmn.id].evolve()[1].pkmn.id ].caught++

                const evolutionMove = learnPkmnMove(pkmn[ pkmn[team[i].pkmn.id].evolve()[1].pkmn.id ].id, 1)
                pkmn[ pkmn[team[i].pkmn.id].evolve()[1].pkmn.id ].movepool.push(evolutionMove)
                pkmn[ pkmn[team[i].pkmn.id].evolve()[1].pkmn.id ].moves.slot1 = evolutionMove
                pkmn[ pkmn[team[i].pkmn.id].evolve()[1].pkmn.id ].newEvolution = true

        } 

        }



    }

    


}




}


function updateTeamPkmn(){



    for (const i in team) {


    if (team[i].pkmn === undefined) continue


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


        if (team?.slot6?.pkmn?.id !== undefined) if (pkmn[ team?.slot6?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot6`
        if (team?.slot5?.pkmn?.id !== undefined) if (pkmn[ team?.slot5?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot5`
        if (team?.slot4?.pkmn?.id !== undefined) if (pkmn[ team?.slot4?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot4`
        if (team?.slot3?.pkmn?.id !== undefined) if (pkmn[ team?.slot3?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot3`
        if (team?.slot2?.pkmn?.id !== undefined) if (pkmn[ team?.slot2?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot2`
        if (team?.slot1?.pkmn?.id !== undefined) if (pkmn[ team?.slot1?.pkmn?.id ].playerHp > 0) exploreActiveMember = `slot1`
        
        if ( saved.currentArea !== undefined &&
        (team?.slot6?.pkmn?.id === undefined || pkmn[ team.slot6.pkmn?.id ].playerHp <= 0) &&
        (team?.slot5?.pkmn?.id === undefined || pkmn[ team.slot5.pkmn?.id ].playerHp <= 0) &&
        (team?.slot4?.pkmn?.id === undefined || pkmn[ team.slot4.pkmn?.id ].playerHp <= 0) &&
        (team?.slot3?.pkmn?.id === undefined || pkmn[ team.slot3.pkmn?.id ].playerHp <= 0) &&
        (team?.slot2?.pkmn?.id === undefined || pkmn[ team.slot2.pkmn?.id ].playerHp <= 0) &&
        (team?.slot1?.pkmn?.id === undefined || pkmn[ team.slot1.pkmn?.id ].playerHp <= 0))
        {
        leaveCombat();
   
        }
            
        

        document.getElementById(`explore-${exploreActiveMember}-member`).classList.remove('member-inactive')



        //exploreCombatPlayer()

    }

    }



}

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

        const spawns = areas[el.dataset.area].spawns;

        for (const [listName, list] of Object.entries(spawns)) {
        for (const item of list) {
        const div = document.createElement("div");
        let tag = "";
        if (listName === "uncommon") { tag = `<span>Uncommon</span>`; }
        if (listName === "rare") { tag = `<span>Rare!</span>`; }
        div.className = "area-preview";
        if (pkmn[item.id].caught===0) div.classList.add('hidden-pkmn')
        if (pkmn[item.id].caught>0) div.dataset.pkmn = item.id
        div.innerHTML = `<img class="sprite-trim" src="img/pkmn/sprite/${item.id}.png">` + tag;
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
        const div = document.createElement("div");
        div.className = "area-preview";
        div.dataset.pkmn = item
        div.innerHTML = `<img class="sprite-trim" src="img/pkmn/sprite/${item}.png">`;
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
        if (el.dataset.buff==="burn") document.getElementById("tooltipBottom").innerHTML = `Halves Physical Attack and deals 1/4 of total hp`
        if (el.dataset.buff==="poisoned") document.getElementById("tooltipBottom").innerHTML = `Halves Special Attack and deals 1/4 of total hp`
        if (el.dataset.buff==="sleep") document.getElementById("tooltipBottom").innerHTML = `Moves fail to deal damage`
        if (el.dataset.buff==="freeze") document.getElementById("tooltipBottom").innerHTML = `Moves fail to deal damage`
        if (el.dataset.buff==="confused") document.getElementById("tooltipBottom").innerHTML = `50% chance for moves to fail to deal damage`
        if (el.dataset.buff==="paralysis") document.getElementById("tooltipBottom").innerHTML = `25% chance for moves to fail to deal damage and Speed is reduced by 100%`
        openTooltip()
    }

    if (el.dataset.help === `VS`) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `VS Trainers`
        document.getElementById("tooltipMid").style.display = `none`
        document.getElementById("tooltipBottom").innerHTML = `Defeat increasingly difficult trainers and carve yourself a path of fame! You may unlock additional areas to explore as your progress`
        openTooltip()
    }


    if (el.dataset.help === `Wild Areas`) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `Wild Areas`
        document.getElementById("tooltipMid").style.display = `none`
        document.getElementById("tooltipBottom").innerHTML = `All Pokemon in Wild Areas might be caught by defeating them. Wild Areas rotate every day, so be sure to check out what can be caught today!`
        openTooltip()
    }

    if (el.dataset.help === `Dungeons`) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `Dungeons`
        document.getElementById("tooltipMid").style.display = `none`
        document.getElementById("tooltipBottom").innerHTML = `Pokemon in Dungeons can't be caught, but they can drop useful items and EXP. Dungeons rotate every day aswell`
        openTooltip()
    }

    if (el.dataset.help === `Events`) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `Events`
        document.getElementById("tooltipMid").style.display = `none`
        document.getElementById("tooltipBottom").innerHTML = `Events are separated in two categories. Area Events, the first one, might house both items and Pokemon to get. Legendary Trainers require a special item that can be rarely found in the adjacent area in order to be fought, and will award a Legendary Pokemon once defeated. All Events rotate every three days.`
        openTooltip()
    }

    if (el.dataset.ability !== undefined) {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = format(el.dataset.ability)
        document.getElementById("tooltipMid").innerHTML = `Common Ability`
        if (ability[el.dataset.ability].rarity===2) document.getElementById("tooltipMid").innerHTML = `Uncommon Ability`
        if (ability[el.dataset.ability].rarity===3) document.getElementById("tooltipMid").innerHTML = `Rare Ability`
        document.getElementById("tooltipBottom").innerHTML = ability[el.dataset.ability].info()
        openTooltip()
    }


    if (el.dataset.move !== undefined) {

        document.getElementById("tooltipTop").innerHTML = `<img src="img/items/tm${format(move[el.dataset.move].type)}.png">`
        document.getElementById("tooltipTitle").innerHTML = format(el.dataset.move)
        document.getElementById("tooltipMid").style.display = "inline"
        document.getElementById("tooltipMid").innerHTML = `${move[el.dataset.move].power} Power, ${format(move[el.dataset.move].split)}`
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

        else document.getElementById("tooltipMid").style.display = "none"

        openTooltip()

    }


    if (el.dataset.pkmn !== undefined) {

        document.getElementById("tooltipTop").style.display = "none";
        document.getElementById("tooltipTitle").style.display = "none";
        document.getElementById("tooltipMid").style.display = "none";
        document.getElementById("tooltipBottom").innerHTML = `
        <div id="tooltip-inspect-pkmn">
            
        <div style="display: flex;">

            <div class="pkmn-stats-panel-info" style="display:flex; flex-direction:column;"> 
            
            <strong  class="explore-pkmn-level">${format(el.dataset.pkmn)}</strong>
            <strong  class="explore-pkmn-level" style="background:transparent; color: gray">${returnPkmnTypes(el.dataset.pkmn)}</strong>
            <div class="explore-sprite">
            <img class="sprite-trim" style="animation: pkmn-active 0.5s infinite; z-index: 1;" src="img/pkmn/sprite/${el.dataset.pkmn}.png">
            <img style="scale:1;animation: none; position: absolute; opacity: 0.3; width: 4.5rem; z-index: 0; transform: translateY(2.5rem);" src="img/resources/pkmn-shadow.png">
            </div>
            
            </div>
             <div class="explore-header-infobox" style="background: transparent;">
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
                        ${returnStatDots(el.dataset.pkmn, "spe")}
                    </div>
                </div>
            </div>
            </div>
            </div>
             <div class="pkmn-stats-stat-switch" style="background: transparent;">
                    <div style="box-shadow: none; outline:none">
                        [Coming Soon]</div>
                    <div style="box-shadow: none; outline:none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-opacity="0.25" fill-rule="evenodd" d="M2.455 11.116C3.531 9.234 6.555 5 12 5c5.444 0 8.469 4.234 9.544 6.116c.221.386.331.58.32.868c-.013.288-.143.476-.402.852C20.182 14.694 16.706 19 12 19s-8.182-4.306-9.462-6.164c-.26-.376-.39-.564-.401-.852c-.013-.288.098-.482.318-.868M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="1.2" d="M12 5c-5.444 0-8.469 4.234-9.544 6.116c-.221.386-.331.58-.32.868c.013.288.143.476.402.852C3.818 14.694 7.294 19 12 19s8.182-4.306 9.462-6.164c.26-.376.39-.564.401-.852s-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.2"/></g></svg>
                        [Coming Soon]</div>
                </div>
            
            
        `

        openTooltip()

    }


    if (el.dataset.pkmnEditor !== undefined) {

        if (areas[saved.currentArea]?.trainer && document.getElementById(`team-menu`).style.display !== "flex") return //cant edit vs trainers to prevent full heal

        const poke = pkmn[el.dataset.pkmnEditor]

        voidAnimation("pkmn-editor","tooltipBoxAppear 0.2s 1")
        document.getElementById("pkmn-editor").style.display = "flex"

        document.getElementById("pkmn-editor-sprite").src = `img/pkmn/sprite/${poke.id}.png`
        document.getElementById("pkmn-editor-name").innerHTML = format(poke.id)
        document.getElementById("pkmn-editor-level").innerHTML = `lvl ${poke.level}`
        document.getElementById("pkmn-editor-type").innerHTML = returnPkmnTypes(poke.id)


        let evolutionTag = ""
        if (pkmn[el.dataset.pkmnEditor].evolve && pkmn[el.dataset.pkmnEditor].evolve()[1].level>0){// if it has a leveled evolution
            evolutionTag = `<span>Unlocks ${format(pkmn[el.dataset.pkmnEditor].evolve()[1].pkmn.id)} at level ${pkmn[el.dataset.pkmnEditor].evolve()[1].level} ❌</span>`
            if (pkmn[ pkmn[el.dataset.pkmnEditor].evolve()[1].pkmn.id ].caught>0) evolutionTag = `<span>Unlocks ${format(pkmn[el.dataset.pkmnEditor].evolve()[1].pkmn.id)} at level ${pkmn[el.dataset.pkmnEditor].evolve()[1].level} ✔️</span>`
        }

        if (pkmn[el.dataset.pkmnEditor].evolve && pkmn[el.dataset.pkmnEditor].evolve()[1].item && item[pkmn[el.dataset.pkmnEditor].evolve()[1].item.id] != undefined){
            evolutionTag = `<span>Unlocks ${format(pkmn[el.dataset.pkmnEditor].evolve()[1].pkmn.id)} by using a ${format(item[pkmn[el.dataset.pkmnEditor].evolve()[1].item.id].id)} at level 30+ ❌</span>`
            if (pkmn[ pkmn[el.dataset.pkmnEditor].evolve()[1].pkmn.id ].caught>0) evolutionTag = `<span>Unlocks ${format(pkmn[el.dataset.pkmnEditor].evolve()[1].pkmn.id)} by using a ${format(item[pkmn[el.dataset.pkmnEditor].evolve()[1].item.id].id)} at level 30+ ✔️</span>`
        }

        document.getElementById("pkmn-editor-extra-info").innerHTML = evolutionTag

        document.getElementById("pkmn-editor-stats").innerHTML = `
        <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0.3" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"/></svg>
                        ${returnStatDots(poke.id, "hp")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.975l1.475-1.475H15.5v-2.025L16.975 12L15.5 10.525V8.5h-2.025L12 7.025L10.525 8.5H8.5v2.025L7.025 12L8.5 13.475V15.5h2.025zm0 6.325L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65z"/></svg>
                        ${returnStatDots(poke.id, "atk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11.991c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473V8l-9 3z"/><path fill="currentColor" d="M14.101 21.527C16.761 20.365 21 17.63 21 11.991V11l-9-3v14c1.02 0 1.38-.158 2.101-.473M8.838 2.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082C3 5.62 3 7.22 3 10.417V11l9-3V2c-.811 0-1.595.268-3.162.805" opacity="0.5"/><path fill="currentColor" d="m15.735 3l-.573-.195C13.595 2.268 12.812 2 12 2v6l9 3v-.583c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081"/></svg>
                        ${returnStatDots(poke.id, "def")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M306.72 22.688c-87.212.763-181.58 53.14-238.19 140.406c-.944 1.46-1.677 3.068-2.593 4.53c.455-.397.86-.917 1.313-1.31c-40.253 56.984-35.183 136.503 15.813 187.5c54.553 54.552 141.745 56.65 199.093 6.78c-4.676 6.576-9.916 13.137-15.812 19.03c-57 57-149.53 57-206.53 0c-17.814-17.81-30.103-38.73-36.783-61.312c2.928 65.605 34.97 122.74 93.907 151.97c103.593 51.374 250.2-2.8 326.875-121C510.904 245.856 502.47 127.374 429.938 65c-10.36-8.91-22.206-16.483-35.156-22.906c-25.897-12.844-54.454-19.11-83.905-19.407c-1.38-.013-2.772-.012-4.156 0zm1.06 62.406c47.14-.705 82.63 23.414 90.376 58.906v.03c1.417 6.492 1.806 13.565 1.344 21.032c-3.682 59.742-68.786 126.655-145.438 149.563c-.945.282-1.872.422-2.812.688l.938-.47c-37.843 12.718-74.086-.708-84.438-33.624c-7.03-22.36-.468-48.544 15.25-70.408c-1.695 7.2-.05 13.91 5.344 18.375c10.643 8.816 31.83 5.575 47.312-7.25c15.483-12.824 19.394-30.37 8.75-39.187c-6.294-5.214-16.287-6.21-26.594-3.5l.532-.313c-.755.257-1.52.54-2.28.813c-.344.123-.69.217-1.033.344a54 54 0 0 0-8 3.344c-.656.307-1.315.61-1.968.937c-42.374 21.24-83.226 68.335-71.656 105.125c3.616 11.497 10.213 20.614 19.094 27.094c-30.253-10.44-48.35-34.526-46.563-68.53c3.682-70.837 83.193-133.31 159.844-156.22c14.673-4.385 28.802-6.553 42-6.75z"/></svg>
                        ${returnStatDots(poke.id, "satk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="m311.874 171.817l65.452-99.754l-.865-.367l50.206 12.144l-.221 17.259l.049 93.284l.119 25.42c.562 109.632-58.957 176.828-107.749 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.403-2.682l-5.725-2.644l-7.222-3.591l-10.821-5.871l-12.434-7.468l-10.839-7.169c-48.347-33.416-112.698-97.735-117.398-205.151l-.274-12.587V84.09L256.45 42.668l22.726 5.497l-62.978 142.683l48.901 20.757l-80.615 154.048l176.882-172.827z" clip-rule="evenodd"/></svg>
                        ${returnStatDots(poke.id, "sdef")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 19v-2H5.675q-.5 0-.7-.45t.125-.8l6.15-6.9q.3-.35.75-.35t.75.35l6.15 6.9q.325.35.125.8t-.7.45H15v2q0 .425-.288.713T14 20h-4q-.425 0-.712-.288T9 19m3-13l-5.025 5.675q-.15.15-.35.238t-.4.087q-.65 0-.912-.575t.162-1.075l5.775-6.5q.3-.35.75-.35t.75.35l5.775 6.5q.425.5.163 1.075t-.913.575q-.2 0-.4-.075t-.35-.25z"/></svg>
                        ${returnStatDots(poke.id, "spe")}
                    </div>
                    <svg style="height: 3rem; width:3rem; margin-top:1rem; color:rgb(110, 105, 105)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.22 6.894a3.7 3.7 0 0 0-1.4-1.37l-6-3.31a3.83 3.83 0 0 0-3.63 0l-6 3.31a3.7 3.7 0 0 0-1.4 1.37a3.74 3.74 0 0 0-.52 1.9v6.41a3.79 3.79 0 0 0 1.92 3.27l6 3.3a3.74 3.74 0 0 0 3.63 0l6-3.31a3.72 3.72 0 0 0 1.91-3.26v-6.36a3.64 3.64 0 0 0-.51-1.95m-1 8.31a2.2 2.2 0 0 1-1.14 1.95l-6 3.31q-.158.089-.33.14v-8.18l7.3-4.39c.092.242.136.5.13.76z"/></svg>
        `

        document.getElementById("pkmn-editor-ivs").innerHTML = `
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
                    <svg style="height: 3rem; width:3rem; margin-top:1rem; color:rgb(110, 105, 105)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q0-3.475 1.45-5.637t4-4.363q-2.55-2.2-4-4.362T5 2v-.25q0-.425.288-.712T6 .75t.713.288T7 1.75V2q0 .275.013.513T7.05 3h9.9q.025-.25.038-.488T17 2v-.25q0-.425.288-.712T18 .75t.713.288t.287.712V2q0 3.475-1.45 5.638t-4 4.362q2.55 2.2 4 4.363T19 22v.25q0 .425-.288.713T18 23.25t-.712-.288T17 22.25V22q0-.275-.012-.513T16.95 21h-9.9q-.025.25-.037.488T7 22v.25q0 .425-.288.713T6 23.25t-.712-.288T5 22.25zM8.45 7h7.1q.325-.475.563-.95T16.55 5h-9.1q.2.55.437 1.038T8.45 7M12 10.7q.5-.425.975-.85t.9-.85h-3.75q.425.425.9.85t.975.85M10.125 15h3.75q-.425-.425-.9-.85T12 13.3q-.5.425-.975.85t-.9.85M7.45 19h9.1q-.2-.55-.437-1.037T15.55 17h-7.1q-.325.475-.562.95T7.45 19"/></svg>
        `


     
    
    if (pkmn[el.dataset.pkmnEditor].ability == undefined) pkmn[el.dataset.pkmnEditor].ability = learnPkmnAbility(pkmn[el.dataset.pkmnEditor].id)    
    
    let abilityTier = ``
    if (ability[ pkmn[el.dataset.pkmnEditor].ability ].rarity==2) abilityTier = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.97 14.607a1.07 1.07 0 0 1-.73 1l-1.88.62a3.9 3.9 0 0 0-1.56 1a4.06 4.06 0 0 0-1 1.57l-.65 1.87a1.14 1.14 0 0 1-.38.52a1.1 1.1 0 0 1-.63.2a1 1 0 0 1-.62-.2a1.07 1.07 0 0 1-.39-.53l-.63-1.88a4 4 0 0 0-2.53-2.54l-1.88-.62a1.13 1.13 0 0 1-.53-.39a1.06 1.06 0 0 1 .54-1.64l1.87-.62a4 4 0 0 0 2.56-2.55l.62-1.86a1 1 0 0 1 .36-.52a1 1 0 0 1 .61-.23a1 1 0 0 1 .64.18a1 1 0 0 1 .41.52l.63 1.9a4 4 0 0 0 2.55 2.56l1.87.65a1 1 0 0 1 .52.38a1.1 1.1 0 0 1 .23.61M12.1 7.656a1 1 0 0 1-.67.93l-1.34.44a2.6 2.6 0 0 0-1 .64a2.7 2.7 0 0 0-.64 1l-.47 1.34a1 1 0 0 1-.34.47a1.05 1.05 0 0 1-.58.19a1 1 0 0 1-.93-.68l-.44-1.34a2.6 2.6 0 0 0-.64-1a2.7 2.7 0 0 0-1-.64l-1.35-.45a.92.92 0 0 1-.48-.36a.93.93 0 0 1-.19-.57a1 1 0 0 1 .19-.58a1 1 0 0 1 .49-.34l1.34-.45a2.7 2.7 0 0 0 1-.64c.29-.277.509-.62.64-1l.45-1.32a1 1 0 0 1 .33-.48a.93.93 0 0 1 .56-.2a.87.87 0 0 1 .58.16a1 1 0 0 1 .38.47l.45 1.37c.135.378.354.72.64 1a2.7 2.7 0 0 0 1 .64l1.35.47a1 1 0 0 1 .65.92z"/></svg>`
    if (ability[ pkmn[el.dataset.pkmnEditor].ability ].rarity==3) abilityTier = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"/></svg>`

    document.getElementById("pkmn-edit-ability").className = ""

    if (ability[ pkmn[el.dataset.pkmnEditor].ability ].rarity==2) document.getElementById("pkmn-edit-ability").classList.add("ability-uncommon")
    if (ability[ pkmn[el.dataset.pkmnEditor].ability ].rarity==3) document.getElementById("pkmn-edit-ability").classList.add("ability-rare")

    document.getElementById("pkmn-edit-ability").dataset.ability = pkmn[el.dataset.pkmnEditor].ability

    document.getElementById("pkmn-edit-ability").innerHTML = `<span>${format(pkmn[el.dataset.pkmnEditor].ability)}</span>${abilityTier}`


    function updateMoves() {
    for (const key in pkmn[el.dataset.pkmnEditor].moves) {

    let moveId = pkmn[el.dataset.pkmnEditor].moves[key];
    
    if (moveId == null) {
            const divMove = document.createElement("div") 
            divMove.className = "pkmn-movebox"
            divMove.innerHTML = "Empty"
            document.getElementById(`pkmn-editor-current-moves`).appendChild(divMove)



    divMove.addEventListener("click", e => {
    document.querySelectorAll('.highlighted-move').forEach(el => el.classList.remove('highlighted-move'));
    divMove.classList.add('highlighted-move')
    moveSlotReplace = key


    })



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


    divMove.innerHTML = 
    `<div
    class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[ moveId ].type)} "></div><span>`
    + format(moveId) +
     `</span><img style="background: ${returnTypeColor(move[ moveId ].type)} " src="img/icons/${move[ moveId ].type }.svg">`

     divMove.dataset.move = moveId

    document.getElementById(`pkmn-editor-current-moves`).appendChild(divMove)
    }

    if (document.getElementById(`team-menu`).style.display == "flex") updatePreviewTeam()
    }

    updateMoves()

    
    function updateMovepool() {

    for (const e of pkmn[el.dataset.pkmnEditor].movepool) {

    const moveId = e

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


    divMove.innerHTML = 
    `<div
    class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[ moveId ].type)} "></div><span>`
    + format(moveId) +
     `</span><img style="background: ${returnTypeColor(move[ moveId ].type)} " src="img/icons/${move[ moveId ].type }.svg">`

     divMove.dataset.move = moveId

    document.getElementById(`pkmn-editor-movepool`).appendChild(divMove)
    }

    }

    updateMovepool()




    }







});


function returnPkmnTypes(id){
    if (pkmn[id].type[1] != undefined) return `${format(pkmn[id].type[0])} / ${format(pkmn[id].type[1])}`
    else return `${format(pkmn[id].type[0])}`
}

function returnStatDots(id, stat){

    const val = pkmn[id].bst[stat];
    const max = 6;

    const filled = Array(val).fill("★ ").join(" ");
    const empty  = Array(max - val).fill("·").join(" ");

    if (val === max) return `<span style="color:#008FE0">${filled}</span>`;

    return `<span style="color:#008FE0">${filled}</span><strong style="margin-left: 0.3rem">${empty}</strong>`;
}

function returnIVDots(id, stat){

    const val = pkmn[id].ivs[stat];
    const max = 6;

    const filled = Array(val).fill("★ ").join(" ");
    const empty  = Array(max - val).fill("·").join(" ");

    if (val === max) return `<span style="color:#E174F6">${filled}</span>`;

    return `<span style="color:#E174F6">${filled}</span><strong style="margin-left: 0.3rem">${empty}</strong>`;
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


    if (document.getElementById(`pkmn-editor`).style.display === "flex") return true
    if (document.getElementById(`team-menu`).style.display === "flex") return true
    if (document.getElementById(`item-menu`).style.display === "flex") return true
    if (document.getElementById(`pokedex-menu`).style.display === "flex") return true
    if (wildLevel===0) return true
    if (wildPkmnHp<0) return true
    if (saved.currentArea === undefined) return true
    if (document.getElementById(`tooltipBackground`).style.display === "flex") return true
    if (document.getElementById(`pkmn-editor`).style.display === "flex") return true
    return false

}

/*function exploreCombatPlayer() {


    let nextMoveBox = document.getElementById(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}`);
    let nextMove = nextMoveBox?.dataset?.move;


    if (!nextMove && (saved.currentArea != undefined)) {
        exploreCombatPlayerTurn = 1;
        exploreCombatPlayer();
        return;
    }

    let moveTimer = move[nextMove]?.timer;
    let barProgress = 0
    let bar;


    if (saved.overrideBattleTimer != defaultPlayerMoveTimer) moveTimer = saved.overrideBattleTimer

    if (team[exploreActiveMember].buffs?.paralysis > 0) moveTimer *= 2
    if (team[exploreActiveMember].buffs?.spedown1 > 0) moveTimer *= 1.5
    if (team[exploreActiveMember].buffs?.spedown2 > 0) moveTimer *= 2
    if (team[exploreActiveMember].buffs?.speup1 > 0) moveTimer /= 1.5
    if (team[exploreActiveMember].buffs?.speup2 > 0) moveTimer /= 2

    function animate(timestamp) {

        if (saved.currentArea != undefined) bar = document.getElementById(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}-bar`);

        if (wildPkmnHp <=0 || shouldCombatStop() ){ //cond to stop combat
            exploreCombatPlayerTurn = 1;
            requestAnimationFrame(animate);
            return
        }



        if (cancelCurrentPlayerAttack){
            barProgress = 0;
            bar.style.width = "0%";
            nextMoveBox = document.getElementById(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}`);
            bar = document.getElementById(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}-bar`);
            cancelCurrentPlayerAttack = false
            requestAnimationFrame(animate);
            return

        }



        if (afkSeconds > 0 && !areas[saved.currentArea]?.trainer) { //afk time
            const increment = 100 / (
            (moveTimer * (Math.pow(0.9, pkmn[team[exploreActiveMember].pkmn.id].bst.spe) * Math.pow(0.95, pkmn[team[exploreActiveMember].pkmn.id].ivs.spe)))
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

        //if (!startTime) startTime = timestamp;
        
        barProgress += 100 / ((moveTimer * (Math.pow(0.9, pkmn[team[exploreActiveMember].pkmn.id].bst.spe) * Math.pow(0.95, pkmn[team[exploreActiveMember].pkmn.id].ivs.spe) )     ) / (1000 / 60));

        //let progress = (timestamp - startTime) / moveTimer;
        //if (progress > 1) progress = 1;
        bar.style.width = `${barProgress}%`;

        if (pkmn[ team[exploreActiveMember].pkmn.id ].playerHp <= 0) {
            bar.style.width = "0%";
            return;
        }


        




        if (barProgress < 99) {
            requestAnimationFrame(animate);
        } else {
            bar.style.transition = "0s linear";
            bar.style.width = "0%";

            voidAnimation(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}`, "moveboxFire 1 0.5s");





            if (nextMove != undefined) {

                let totalPower = 0
                const atacker = pkmn[ team[exploreActiveMember].pkmn.id ]
                const defender = pkmn[ saved.currentPkmn ]



                //let sattack = (atacker.bst.satk * 30)
                //if (team[exploreActiveMember].buffs.atkup1 > 0) sattack*= 1.5
            
                 if (move[nextMove].split == 'physical') {
                 totalPower = 
                 ( move[nextMove].power + Math.max(0, ( (atacker.bst.atk * 30) * Math.pow(1.1, atacker.ivs.atk) ) - (defender.bst.def * 30) )  )
                 * ( 1+(pkmn[ team[exploreActiveMember].pkmn.id ].level * 0.1) )        
                 * 1;
                 }

                 if (move[nextMove].split == 'special') {
                 totalPower = 
                 ( move[nextMove].power +  Math.max(0, ( (atacker.bst.satk * 30) * Math.pow(1.1, atacker.ivs.satk) ) - (defender.bst.sdef * 30) )  )
                 * ( 1+(atacker.level * 0.1) )         
                 * 1;
                 }


                 //buffs
                 if (move[nextMove].split == 'special') {
                 if (team[exploreActiveMember].buffs?.satkup1 > 0) totalPower *=1.5
                 if (team[exploreActiveMember].buffs?.satkup2 > 0) totalPower *=2
                 if (team[exploreActiveMember].buffs?.poisoned > 0) totalPower /=1.5
                 if (wildBuffs.sdefup1 > 0) totalPower /=1.5
                 if (wildBuffs.sdefup2 > 0) totalPower /=2
                 }

                 if (move[nextMove].split == 'physical') {
                 if (team[exploreActiveMember].buffs?.atkup1 > 0) totalPower *=1.5
                 if (team[exploreActiveMember].buffs?.atkup2 > 0) totalPower *=2
                 if (team[exploreActiveMember].buffs?.burn > 0) totalPower /=1.5
                 if (wildBuffs.defup1 > 0) totalPower /=1.5
                 if (wildBuffs.defup2 > 0) totalPower /=2
                 }

                 //stab
                 if (atacker.type.includes(move[nextMove].type)) totalPower *=1.5
                 
                 //type effectiveness
                 totalPower *= typeEffectiveness(move[nextMove].type, pkmn[saved.currentPkmn].type)

                 //items
                 if (team[exploreActiveMember].item == item.blackBelt.id && move[nextMove].type == 'fighting') totalPower *= (item.blackBelt.power() /100) +1
                 if (team[exploreActiveMember].item == item.blackGlasses.id && move[nextMove].type == 'dark') totalPower *= (item.blackGlasses.power() /100) +1
                 if (team[exploreActiveMember].item == item.charcoal.id && move[nextMove].type == 'fire') totalPower *= (item.charcoal.power() /100) +1
                 if (team[exploreActiveMember].item == item.dragonFang.id && move[nextMove].type == 'dragon') totalPower *= (item.dragonFang.power() /100) +1
                 if (team[exploreActiveMember].item == item.fairyFeather.id && move[nextMove].type == 'fairy') totalPower *= (item.fairyFeather.power() /100) +1
                 if (team[exploreActiveMember].item == item.hardStone.id && move[nextMove].type == 'rock') totalPower *= (item.hardStone.power() /100) +1
                 if (team[exploreActiveMember].item == item.magnet.id && move[nextMove].type == 'electric') totalPower *= (item.magnet.power() /100) +1
                 if (team[exploreActiveMember].item == item.metalCoat.id && move[nextMove].type == 'steel') totalPower *= (item.metalCoat.power() /100) +1
                 if (team[exploreActiveMember].item == item.miracleSeed.id && move[nextMove].type == 'grass') totalPower *= (item.miracleSeed.power() /100) +1
                 if (team[exploreActiveMember].item == item.mysticWater.id && move[nextMove].type == 'water') totalPower *= (item.mysticWater.power() /100) +1
                 if (team[exploreActiveMember].item == item.neverMeltIce.id && move[nextMove].type == 'ice') totalPower *= (item.neverMeltIce.power() /100) +1
                 if (team[exploreActiveMember].item == item.poisonBarb.id && move[nextMove].type == 'poison') totalPower *= (item.poisonBarb.power() /100) +1
                 if (team[exploreActiveMember].item == item.sharpBeak.id && move[nextMove].type == 'flying') totalPower *= (item.sharpBeak.power() /100) +1
                 if (team[exploreActiveMember].item == item.silkScarf.id && move[nextMove].type == 'normal') totalPower *= (item.silkScarf.power() /100) +1
                 if (team[exploreActiveMember].item == item.silverPowder.id && move[nextMove].type == 'bug') totalPower *= (item.silverPowder.power() /100) +1
                 if (team[exploreActiveMember].item == item.softSand.id && move[nextMove].type == 'ground') totalPower *= (item.softSand.power() /100) +1
                 if (team[exploreActiveMember].item == item.spellTag.id && move[nextMove].type == 'ghost') totalPower *= (item.spellTag.power() /100) +1
                 if (team[exploreActiveMember].item == item.twistedSpoon.id && move[nextMove].type == 'psychic') totalPower *= (item.twistedSpoon.power() /100) +1
                 

                 if (move[nextMove].power === 0) totalPower = 0


                if (team[exploreActiveMember].buffs?.confused>0 && rng(0.5)) totalPower = 0
                if (team[exploreActiveMember].buffs?.paralysis>0 && rng(0.25)) totalPower = 0
                if (team[exploreActiveMember].buffs?.freeze>0 ) totalPower = 0
                if (team[exploreActiveMember].buffs?.sleep>0 ) totalPower = 0


                 wildPkmnHp -= totalPower;


                if (areas[saved.currentArea]?.trainer){
                if (team[exploreActiveMember].buffs?.burn>0 ) {pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -=  pkmn[ team[exploreActiveMember].pkmn.id ].playerHpMax/4;  updateTeamPkmn()}
                if (team[exploreActiveMember].buffs?.poisoned>0 ) {pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -=  pkmn[ team[exploreActiveMember].pkmn.id ].playerHpMax/4;  updateTeamPkmn()}
                } else {
                if (team[exploreActiveMember].buffs?.burn>0 ) {pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -=  pkmn[ team[exploreActiveMember].pkmn.id ].playerHpMax/30;  updateTeamPkmn()}
                if (team[exploreActiveMember].buffs?.poisoned>0 ) {pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -=  pkmn[ team[exploreActiveMember].pkmn.id ].playerHpMax/30;  updateTeamPkmn()}
                }


                
                    for (const i in team[exploreActiveMember].buffs){
                    if (team[exploreActiveMember].buffs[i]>0) team[exploreActiveMember].buffs[i] -= 1
                    }
                

                 if (move[nextMove].hitEffect) move[nextMove].hitEffect("wild")
                 updateTeamBuffs()
                 updateWildBuffs()


                 atacker.playerHp -= atacker.playerHpMax/200
                 updateTeamPkmn()

            } 








            exploreCombatPlayerTurn++;
            if (exploreCombatPlayerTurn >= 5) exploreCombatPlayerTurn = 1;

            exploreCombatPlayer();
            updateWildPkmn();
        }
    }

    requestAnimationFrame(animate);
}*/


let exploreActiveMember = 'slot1'
let exploreCombatPlayerTurn = 1
let barProgressPlayer = 0;
let nextMoveBoxPlayer;
let nextMovePlayer;
let moveTimerPlayer; 
let barPlayer;


function exploreCombatPlayer() {

    if (shouldCombatStop()) {
        requestAnimationFrame(exploreCombatPlayer)
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
        requestAnimationFrame(exploreCombatPlayer)
        return;
    }

    // if it finds an undefined move
    if (!nextMovePlayer) {
        exploreCombatPlayerTurn++;
        requestAnimationFrame(exploreCombatPlayer)
        return;
    }




    //override battle timer (debug)
    if (saved.overrideBattleTimer != defaultPlayerMoveTimer && moveTimerPlayer != saved.overrideBattleTimer) moveTimerPlayer = saved.overrideBattleTimer
    

    //abilities
    if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.prankster.id && move[nextMovePlayer].type == "dark") moveTimerPlayer /= 1.5


    //buff modifiers
    if (team[exploreActiveMember].buffs?.paralysis > 0) moveTimerPlayer *=  2
    if (team[exploreActiveMember].buffs?.spedown1 > 0) moveTimerPlayer *= 1.5
    if (team[exploreActiveMember].buffs?.spedown2 > 0) moveTimerPlayer *= 2
    if (team[exploreActiveMember].buffs?.speup1 > 0) moveTimerPlayer /= 1.5
    if (team[exploreActiveMember].buffs?.speup2 > 0) moveTimerPlayer /= 2

    if (afkSeconds > 0 && !areas[saved.currentArea]?.trainer) { //afk time
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
    }


    if (barProgressPlayer < 99) {
        requestAnimationFrame(exploreCombatPlayer)
        return
    } else {

        barProgressPlayer = 0
        if (afkSeconds <= 0) voidAnimation(`pkmn-movebox-slot${exploreCombatPlayerTurn}-team-${exploreActiveMember}`, "moveboxFire 1 0.3s");
        exploreCombatPlayerTurn++;
        barPlayer.style.width = `0%`;

        //on move execution
        let totalPower = 0
        const atacker = pkmn[ team[exploreActiveMember].pkmn.id ]
        const defender = pkmn[ saved.currentPkmn ]





        let movePower = move[nextMovePlayer].power

        //abilities
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.technician.id && movePower<60 ) movePower *= 1.5


            
        if (move[nextMovePlayer].split == 'physical') {
            totalPower = 
            ( movePower + Math.max(0, ( (atacker.bst.atk * 30) * Math.pow(1.1, atacker.ivs.atk) ) - (defender.bst.def * 30) )  )
            * ( 1+(pkmn[ team[exploreActiveMember].pkmn.id ].level * 0.1) )        
            * 1;
        }

        if (move[nextMovePlayer].split == 'special') {
            totalPower = 
            ( movePower +  Math.max(0, ( (atacker.bst.satk * 30) * Math.pow(1.1, atacker.ivs.satk) ) - (defender.bst.sdef * 30) )  )
            * ( 1+(atacker.level * 0.1) )         
            * 1;
        }


        //buffs
        if (move[nextMovePlayer].split == 'special') {
            if (team[exploreActiveMember].buffs?.satkup1 > 0) totalPower *=1.5
            if (team[exploreActiveMember].buffs?.satkup2 > 0) totalPower *=2
            if (team[exploreActiveMember].buffs?.poisoned > 0) totalPower /=1.5


         if ( pkmn[ team[exploreActiveMember].pkmn.id ]?.ability != ability.unaware.id ){

            if (wildBuffs.sdefup1 > 0) totalPower /=1.5
            if (wildBuffs.sdefup2 > 0) totalPower /=2

         }



        }

        if (move[nextMovePlayer].split == 'physical') {
            if (team[exploreActiveMember].buffs?.atkup1 > 0) totalPower *=1.5
            if (team[exploreActiveMember].buffs?.atkup2 > 0) totalPower *=2
            if (team[exploreActiveMember].buffs?.burn > 0) totalPower /=1.5

         if ( pkmn[ team[exploreActiveMember].pkmn.id ]?.ability != ability.unaware.id ){

            if (wildBuffs.defup1 > 0) totalPower /=1.5
            if (wildBuffs.defup2 > 0) totalPower /=2

         }

        }

        //stab
        let stabBonus = 1.5
        if (atacker.type.includes(move[nextMovePlayer].type) && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.adaptability.id) stabBonus = 2

        if (atacker.type.includes(move[nextMovePlayer].type)) totalPower *=stabBonus
         
        //type effectiveness
        let typeMultiplier = typeEffectiveness(move[nextMovePlayer].type, pkmn[saved.currentPkmn].type)

        if ( pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.scrappy.id && pkmn[saved.currentPkmn].type.includes("ghost") && (move[nextMovePlayer].type == 'fighting' || move[nextMovePlayer].type == 'normal')  ) typeMultiplier=1
        if ( pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.tintedLens.id && typeMultiplier == 0.5 ) typeMultiplier=1
        if ( pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.noGuard.id && typeMultiplier == 0 ) typeMultiplier=1


        totalPower *= typeMultiplier



        //items
        if (team[exploreActiveMember].item == item.blackBelt.id && move[nextMovePlayer].type == 'fighting') totalPower *= (item.blackBelt.power() /100) +1
        if (team[exploreActiveMember].item == item.blackGlasses.id && move[nextMovePlayer].type == 'dark') totalPower *= (item.blackGlasses.power() /100) +1
        if (team[exploreActiveMember].item == item.charcoal.id && move[nextMovePlayer].type == 'fire') totalPower *= (item.charcoal.power() /100) +1
        if (team[exploreActiveMember].item == item.dragonFang.id && move[nextMovePlayer].type == 'dragon') totalPower *= (item.dragonFang.power() /100) +1
        if (team[exploreActiveMember].item == item.fairyFeather.id && move[nextMovePlayer].type == 'fairy') totalPower *= (item.fairyFeather.power() /100) +1
        if (team[exploreActiveMember].item == item.hardStone.id && move[nextMovePlayer].type == 'rock') totalPower *= (item.hardStone.power() /100) +1
        if (team[exploreActiveMember].item == item.magnet.id && move[nextMovePlayer].type == 'electric') totalPower *= (item.magnet.power() /100) +1
        if (team[exploreActiveMember].item == item.metalCoat.id && move[nextMovePlayer].type == 'steel') totalPower *= (item.metalCoat.power() /100) +1
        if (team[exploreActiveMember].item == item.miracleSeed.id && move[nextMovePlayer].type == 'grass') totalPower *= (item.miracleSeed.power() /100) +1
        if (team[exploreActiveMember].item == item.mysticWater.id && move[nextMovePlayer].type == 'water') totalPower *= (item.mysticWater.power() /100) +1
        if (team[exploreActiveMember].item == item.neverMeltIce.id && move[nextMovePlayer].type == 'ice') totalPower *= (item.neverMeltIce.power() /100) +1
        if (team[exploreActiveMember].item == item.poisonBarb.id && move[nextMovePlayer].type == 'poison') totalPower *= (item.poisonBarb.power() /100) +1
        if (team[exploreActiveMember].item == item.sharpBeak.id && move[nextMovePlayer].type == 'flying') totalPower *= (item.sharpBeak.power() /100) +1
        if (team[exploreActiveMember].item == item.silkScarf.id && move[nextMovePlayer].type == 'normal') totalPower *= (item.silkScarf.power() /100) +1
        if (team[exploreActiveMember].item == item.silverPowder.id && move[nextMovePlayer].type == 'bug') totalPower *= (item.silverPowder.power() /100) +1
        if (team[exploreActiveMember].item == item.softSand.id && move[nextMovePlayer].type == 'ground') totalPower *= (item.softSand.power() /100) +1
        if (team[exploreActiveMember].item == item.spellTag.id && move[nextMovePlayer].type == 'ghost') totalPower *= (item.spellTag.power() /100) +1
        if (team[exploreActiveMember].item == item.twistedSpoon.id && move[nextMovePlayer].type == 'psychic') totalPower *= (item.twistedSpoon.power() /100) +1
                 

        if (move[nextMovePlayer].power === 0) totalPower = 0


        if (team[exploreActiveMember].buffs?.confused>0 && rng(0.5)) totalPower = 0
        if (team[exploreActiveMember].buffs?.paralysis>0 && rng(0.25)) totalPower = 0
        if (team[exploreActiveMember].buffs?.freeze>0 ) totalPower = 0
        if (team[exploreActiveMember].buffs?.sleep>0 ) totalPower = 0



        //abilities
        const below50hp = pkmn[team[exploreActiveMember].pkmn.id]?.playerHp < (pkmn[team[exploreActiveMember].pkmn.id]?.playerHpMax * 0.5);
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.overgrow.id && move[nextMoveWild].type == 'grass' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.blaze.id && move[nextMoveWild].type == 'fire' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.swarm.id && move[nextMoveWild].type == 'bug' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.torrent.id && move[nextMoveWild].type == 'water' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.bastion.id && move[nextMoveWild].type == 'steel' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.average.id && move[nextMoveWild].type == 'normal' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.resolve.id && move[nextMoveWild].type == 'fighting' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.mistify.id && move[nextMoveWild].type == 'psychic' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.hexerei.id && move[nextMoveWild].type == 'ghost' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.glimmer.id && move[nextMoveWild].type == 'fairy' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.skyward.id && move[nextMoveWild].type == 'flying' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.draconic.id && move[nextMoveWild].type == 'dragon' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.noxious.id && move[nextMoveWild].type == 'poison' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.solid.id && move[nextMoveWild].type == 'rock' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.rime.id && move[nextMoveWild].type == 'ice' ) totalPower *= 1.3
        if (below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.voltage.id && move[nextMoveWild].type == 'electric' ) totalPower *= 1.3

        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.ironFist.id && /dynamicPunch|dizzyPunch|firePunch|thunderPunch|bulletPunch|icePunch|powerupPunch|hammerArm|shadowPunch/.test(nextMoveWild) ) totalPower *= 1.3
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.strongJaw.id && /fireFang|thunderFang|poisonFang|iceFang|bugBite|bite|crunch/.test(nextMoveWild) ) totalPower *= 1.3
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.toughClaws.id && /furyCutter|shadowClaw|metalClaw|dragonClaw|nightSlash/.test(nextMoveWild) ) totalPower *= 1.3

        if ( pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.rivalry.id && pkmn[saved.currentPkmn].type.some(t => pkmn[team[exploreActiveMember].pkmn.id].type.includes(t)) ) totalPower *= 1.3
        

        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.sheerForce.id &&  move[nextMovePlayer].hitEffect) totalPower *= 1.2

        wildPkmnHp -= totalPower;


         if ( pkmn[ team[exploreActiveMember].pkmn.id ]?.ability != ability.magicGuard.id ){

        if (areas[saved.currentArea]?.trainer){
        if (team[exploreActiveMember].buffs?.burn>0 ) {pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -=  pkmn[ team[exploreActiveMember].pkmn.id ].playerHpMax/4;}
        if (team[exploreActiveMember].buffs?.poisoned>0 ) {pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -=  pkmn[ team[exploreActiveMember].pkmn.id ].playerHpMax/4;}
        } else {
            if (team[exploreActiveMember].buffs?.burn>0 ) {pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -=  pkmn[ team[exploreActiveMember].pkmn.id ].playerHpMax/30;}
            if (team[exploreActiveMember].buffs?.poisoned>0 ) {pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -=  pkmn[ team[exploreActiveMember].pkmn.id ].playerHpMax/30;}
        }

        }


                
        for (const i in team[exploreActiveMember].buffs){
            if (team[exploreActiveMember].buffs[i]>0) team[exploreActiveMember].buffs[i] -= 1
        }
            


          /*      if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability != ability.sheerForce.id) {


        if (move[nextMoveWild].hitEffect && typeEffectiveness(move[nextMoveWild].type, pkmn[team[exploreActiveMember].pkmn.id].type)!= 0) {
            move[nextMoveWild].hitEffect("player")
        }

        }

        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.sheerForce.id && move[nextMoveWild].hitEffect)*/


        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability != ability.sheerForce.id || (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.sheerForce.id && totalPower==0  )){
        if (move[nextMovePlayer].hitEffect && typeEffectiveness(move[nextMovePlayer].type, pkmn[saved.currentPkmn].type)!= 0) {
            move[nextMovePlayer].hitEffect("wild")
        }
        }

        updateTeamBuffs()
        updateWildBuffs()
        updateWildPkmn();


        atacker.playerHp -= atacker.playerHpMax/200
        updateTeamPkmn()

    }

 requestAnimationFrame(exploreCombatPlayer)
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
    fighting:{ normal: effective, ice: effective, rock: effective, dark: effective, steel: effective, poison: resist, flying: resist, psychic: resist, bug: resist, ghost: 0 },
    poison:  { grass: effective, poison: resist, ground: resist, rock: resist, ghost: resist, steel: 0 },
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

  return defending.reduce((mul, defType) => mul * (chart[attacking]?.[defType] ?? 1), 1);
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
        requestAnimationFrame(exploreCombatWild)
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
        requestAnimationFrame(exploreCombatWild)
        return;
    }

    //override battle timer (debug)
    if (saved.overrideBattleTimer != defaultPlayerMoveTimer && moveTimerWild != saved.overrideBattleTimer) moveTimerWild = saved.overrideBattleTimer
    
    //buff modifiers
    if (wildBuffs.paralysis > 0) moveTimerWild = move[nextMoveWild]?.timer * 2
    if (wildBuffs.spedown1 > 0) moveTimerWild = move[nextMoveWild]?.timer * 1.5
    if (wildBuffs.spedown2 > 0) moveTimerWild = move[nextMoveWild]?.timer * 2
    if (wildBuffs.speup1 > 0) moveTimerWild = move[nextMoveWild]?.timer / 1.5
    if (wildBuffs.speup2 > 0) moveTimerWild = move[nextMoveWild]?.timer / 2

    //afk time
    if (afkSeconds > 0 && !areas[saved.currentArea]?.trainer) { 
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
    }


    if (barProgressWild < 99) {
        requestAnimationFrame(exploreCombatWild)
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
        }

        if (move[nextMoveWild].split == 'special') {
            totalPower = 
            ( move[nextMoveWild].power + Math.max(0, (pkmn[ saved.currentPkmn ].bst.satk * 30) - (  (pkmn[ team[exploreActiveMember].pkmn.id ].bst.sdef * 30) * Math.pow(1.1, pkmn[ team[exploreActiveMember].pkmn.id ].ivs.sdef)  ) )  )
            * ( 1+(wildLevel * 0.1) )         
            * 1;
        }


        //buffs
        if (move[nextMoveWild].split == 'special') {
            if (wildBuffs.satkup1 > 0) totalPower *=1.5
            if (wildBuffs.satkup2 > 0) totalPower *=2
            if (wildBuffs.poisoned > 0) totalPower /=1.5
            if (team[exploreActiveMember].sdefup1 > 0) totalPower /=1.5
            if (team[exploreActiveMember].sdefup2 > 0) totalPower /=2
        }

        if (move[nextMoveWild].split == 'physical') {
            if (wildBuffs.atkup1 > 0) totalPower *=1.5
            if (wildBuffs.atkup2 > 0) totalPower *=2
            if (wildBuffs.burn > 0) totalPower /=1.5
            if (team[exploreActiveMember].defup1 > 0) totalPower /=1.5
            if (team[exploreActiveMember].defup2 > 0) totalPower /=2
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

        if (move[nextMoveWild].power === 0) totalPower = 0

        if (wildBuffs.confused>0 && rng(0.5)) totalPower = 0
        if (wildBuffs.paralysis>0 && rng(0.25)) totalPower = 0
        if (wildBuffs.freeze>0 ) totalPower = 0
        if (wildBuffs.sleep>0 ) totalPower = 0


        //abilities
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.grabGuard.id && move[nextMoveWild].type == 'fighting') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.waterGuard.id && move[nextMoveWild].type == 'water') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.flameGuard.id && move[nextMoveWild].type == 'fire') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.curseGuard.id && move[nextMoveWild].type == 'ghost') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.poisonGuard.id && move[nextMoveWild].type == 'poison') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.iceGuard.id && move[nextMoveWild].type == 'ice') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.psychicGuard.id && move[nextMoveWild].type == 'psychic') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.fairyGuard.id && move[nextMoveWild].type == 'fairy') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.leafGuard.id && move[nextMoveWild].type == 'grass') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.plainGuard.id && move[nextMoveWild].type == 'normal') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.sinisterGuard.id && move[nextMoveWild].type == 'dark') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.steelGuard.id && move[nextMoveWild].type == 'steel') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.dragonGuard.id && move[nextMoveWild].type == 'dragon') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.rockGuard.id && move[nextMoveWild].type == 'rock') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.groundGuard.id && move[nextMoveWild].type == 'ground') totalPower /= 2
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.flyingGuard.id && move[nextMoveWild].type == 'flying') totalPower /= 2

        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.voltAbsorb.id && move[nextMoveWild].type == 'electric') totalPower = 0
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.waterAbsorb.id && move[nextMoveWild].type == 'water') totalPower = 0
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.flareAbsorb.id && move[nextMoveWild].type == 'fire') totalPower = 0
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.curseAbsorb.id && move[nextMoveWild].type == 'ghost') totalPower = 0
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.poisonAbsorb.id && move[nextMoveWild].type == 'poison') totalPower = 0
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.frostAbsorb.id && move[nextMoveWild].type == 'ice') totalPower = 0
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.psychicAbsorb.id && move[nextMoveWild].type == 'psychic') totalPower = 0
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.lightAbsorb.id && move[nextMoveWild].type == 'fairy') totalPower = 0
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.growthAbsorb.id && move[nextMoveWild].type == 'grass') totalPower = 0

        if (team[exploreActiveMember].item == undefined && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.unburden.id) team[exploreActiveMember].buffs.speup1 = 10

        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.static.id && rng(0.1)) wildBuffs.paralysis = 3
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.flameBody.id && rng(0.1)) wildBuffs.burn = 3
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.poisonPoint.id && rng(0.1)) wildBuffs.poisoned = 3
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.strangeCharm.id && rng(0.1)) wildBuffs.confused = 3
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.effectSpore.id && rng(0.05)) wildBuffs.sleep = 3
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.glacialBody.id && rng(0.05)) wildBuffs.freeze = 3

        const below50hp = pkmn[team[exploreActiveMember].pkmn.id]?.playerHp < (pkmn[team[exploreActiveMember].pkmn.id]?.playerHpMax * 0.5);
        if (!below50hp && pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.multiscale.id) totalPower /= 2

        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.levitate.id && move[nextMoveWild].type==="ground") totalPower = 0
        if (pkmn[ team[exploreActiveMember].pkmn.id ]?.ability == ability.thickFat.id && (move[nextMoveWild].type==="fire" || move[nextMoveWild].type==="ice") ) totalPower /= 2

















        pkmn[ team[exploreActiveMember].pkmn.id ].playerHp -= totalPower;


        if (wildBuffs.burn>0 ) {wildPkmnHp -=  wildPkmnHpMax/4 ; updateWildPkmn()}
        if (wildBuffs.poisoned>0 ) {wildPkmnHp -=  wildPkmnHpMax/4 ; updateWildPkmn()}

        for (const buff in wildBuffs){
            if ( wildBuffs[buff]>0) wildBuffs[buff]--
        }

        if (move[nextMoveWild].hitEffect && typeEffectiveness(move[nextMoveWild].type, pkmn[team[exploreActiveMember].pkmn.id].type)!= 0) move[nextMoveWild].hitEffect("player")

        //can be optimised
        updateWildBuffs()
        updateTeamBuffs()
        updateTeamPkmn()
    }

 requestAnimationFrame(exploreCombatWild)
}

function initialiseArea(){


    exploreActiveMember = `slot1`
    setPkmnTeamHp()
    setPkmnTeam()
    setWildPkmn()
    updateTeamExp()
    
    //exploreCombatPlayer()
    //exploreCombatPlayer()
    //exploreCombatWild()







}

function setWildAreas() {

    document.getElementById("explore-listing").innerHTML = ""
    document.getElementById("explore-menu-header").innerHTML = `<span data-help="Wild Areas">Wild Areas <svg data-help="Wild Areas" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m1 13h-2v-6h2zm0-8h-2V7h2z" opacity="0.3"/><path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg> </span>`
    document.getElementById("explore-menu-header").style.backgroundImage = "url(img/bg/forest.png)"


    for (const i in areas) {
        if (areas[i].type !== "wild") continue;
        if (areas[i].rotation !== rotationWildCurrent) continue;

        const divAreas = document.createElement("div");
        divAreas.className = "explore-ticket";

        divAreas.dataset.area = i

        if ( areas[i].unlockRequirement == undefined || areas[i].unlockRequirement() ) {
        divAreas.addEventListener("click", e => { 
            saved.currentArea = i
            document.getElementById(`preview-team-exit`).style.display = "flex"
            document.getElementById(`team-menu`).style.zIndex = `50`
            document.getElementById(`team-menu`).style.display = `flex`
            document.getElementById("menu-button-parent").style.display = "none"
            updatePreviewTeam()
            afkSeconds = 0
            setTimeout(() => {
                document.getElementById(`explore-menu`).style.display = `none`
            }, 500);
        })
        }


        let unlockRequirement = ""
        if (areas[i].unlockRequirement && !areas[i].unlockRequirement()) unlockRequirement =`<span class="ticket-unlock">${areas[i].unlockDescription}</span>`


        divAreas.innerHTML = `
                ${unlockRequirement}
                <span class="hitbox"></span>
                <div style="width: 100%;  border-right: dotted var(--light1) 4px; ">
                    <span class="explore-ticket-left">
                        <span><strong>Location</strong><span> ${format(i)} </span></span>
                        <span><strong>Area Level</strong><span> ${Math.max(1,areas[i].level-10)}-${areas[i].level}</span></span>
                        <span><strong>Time Remaining</strong> ✈ <span class="time-counter-daily"></span></span>
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

    document.getElementById("explore-listing").innerHTML = ""
    document.getElementById("explore-menu-header").innerHTML = `<span data-help="Dungeons">Dungeons <svg data-help="Dungeons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m1 13h-2v-6h2zm0-8h-2V7h2z" opacity="0.3"/><path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg> </span>`
    document.getElementById("explore-menu-header").style.backgroundImage = "url(img/bg/cave.png)" 

    for (const i in areas) {
        if (areas[i].type !== "dungeon") continue;
        if (areas[i].rotation !== rotationDungeonCurrent) continue;


        const divAreas = document.createElement("div");
        divAreas.className = "explore-ticket ticket-dungeon";
        divAreas.dataset.area = i

        if ( areas[i].unlockRequirement == undefined || areas[i].unlockRequirement() ) {
        divAreas.addEventListener("click", e => { 

            saved.currentArea = i
            document.getElementById(`preview-team-exit`).style.display = "flex"
            document.getElementById(`team-menu`).style.zIndex = `50`
            document.getElementById(`team-menu`).style.display = `flex`
            document.getElementById("menu-button-parent").style.display = "none"
            updatePreviewTeam()
            afkSeconds = 0
            setTimeout(() => {
                document.getElementById(`explore-menu`).style.display = `none`
            }, 500);

        })
    }

        let unlockRequirement = ""
        if (areas[i].unlockRequirement && !areas[i].unlockRequirement()) unlockRequirement =`<span class="ticket-unlock">${areas[i].unlockDescription}</span>`


        divAreas.innerHTML = `
                ${unlockRequirement}
                <span class="hitbox"></span>
                <div style="width: 100%;  border-right: dotted var(--light1) 4px; ">
                    <span class="explore-ticket-left">
                        <span><strong>Location</strong><span> ${format(i)} </span></span>
                        <span><strong>Dungeon Level</strong><span> ${Math.max(1,areas[i].level-10)}-${areas[i].level}</span></span>
                        <span><strong>Time Remaining</strong> ✈ <span class="time-counter-daily"> </span></span>
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



function setEventAreas() {

    document.getElementById("explore-listing").innerHTML = ""
    document.getElementById("explore-menu-header").innerHTML = `<span data-help="Events">Events <svg data-help="Events" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m1 13h-2v-6h2zm0-8h-2V7h2z" opacity="0.3"/><path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg> </span>`
    document.getElementById("explore-menu-header").style.backgroundImage = "url(img/bg/mini/special6.png)" 

  for (const i in areas) {
        if (areas[i].type !== "event") continue;
        if (areas[i].rotation !== rotationEventCurrent) continue;    

        const divAreas = document.createElement("div");
        divAreas.className = "explore-ticket ticket-event";
        divAreas.dataset.area = i


        divAreas.addEventListener("click", e => { 

            saved.currentArea = i
            document.getElementById(`preview-team-exit`).style.display = "flex"
            document.getElementById(`team-menu`).style.zIndex = `50`
            document.getElementById(`team-menu`).style.display = `flex`
            document.getElementById("menu-button-parent").style.display = "none"
            updatePreviewTeam()
             afkSeconds = 0
            setTimeout(() => {
                document.getElementById(`explore-menu`).style.display = `none`
            }, 500);

        })

        divAreas.innerHTML = `
                <span class="hitbox"></span>
                <div style="width: 100%;  border-right: dotted var(--light1) 4px; ">
                    <span class="explore-ticket-left">
                        <span><strong>Location</strong><span> ${format(i)} </span></span>
                        <span><strong>Area Level</strong><span> ${Math.max(1,areas[i].level-10)}-${areas[i].level}</span></span>
                        <span><strong>Time Remaining</strong> ✈ <span class="time-counter-event"></span></span>
                    </span>
                </div>
                <div style="width: 8rem;" class="explore-ticket-right">
                    <span class="explore-ticket-bg" style="background-image: url(img/bg/${areas[i].background}.png);"></span>
                    <img class="explore-ticket-sprite sprite-trim" style="z-index: 10;" src="img/pkmn/sprite/${areas[i].icon.id}.png">
                </div>
        `;


        document.getElementById("explore-listing").appendChild(divAreas);




    }



    updateEventCounters()


}




let rotationEventCurrent = 1;

let rotationWildCurrent = 1;
let rotationDungeonCurrent = 1;

function getSeed() {
  const now = new Date();
  const utcTime = now.getTime(); // ms desde Epoch en UTC
  const halfDayNumber = Math.floor(utcTime / (1000 * 60 * 60 * 12));
  const dayNumber = Math.floor(utcTime / (1000 * 60 * 60 * 24));

  rotationWildCurrent = (halfDayNumber % rotationWildMax) + 1;
  rotationDungeonCurrent = (dayNumber % rotationDungeonMax) + 1;

  const period = Math.floor(dayNumber / 3);
  rotationEventCurrent = (period % rotationEventMax) + 1;

  return dayNumber;
}

function updateDailyCounters() {
  const contadores = document.querySelectorAll('.time-counter-daily');

  const ahora = Date.now(); // Epoch UTC, ya que Date.now() es absoluto
  const halfDayNumber = Math.floor(ahora / (1000 * 60 * 60 * 12));
  const nextHalfDayStart = (halfDayNumber + 1) * (1000 * 60 * 60 * 12);

  let diff = nextHalfDayStart - ahora;

  if (diff <= 0) {
    getSeed(); // Actualiza los valores
    setWildAreas();
    setDungeonAreas();
    // recalcula el próximo half-day en UTC
    const newHalfDayNumber = Math.floor(Date.now() / (1000 * 60 * 60 * 12));
    const newNextHalfDayStart = (newHalfDayNumber + 1) * (1000 * 60 * 60 * 12);
    diff = newNextHalfDayStart - Date.now();
  }

  const horas = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const minutos = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const segundos = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

  contadores.forEach(c => c.textContent = `${horas}:${minutos}:${segundos}`);
}

function updateEventCounters() {
  const contadores = document.querySelectorAll('.time-counter-event');

  const ahora = Date.now();
  const dayNumber = Math.floor(ahora / 86400000); // día UTC
  const currentPeriod = Math.floor(dayNumber / 3);
  const nextPeriodStart = (currentPeriod + 1) * 3;
  let finDelPeriodo = nextPeriodStart * 86400000;

  let diff = finDelPeriodo - ahora;

  if (diff <= 0) {
    getSeed(); // Actualiza los valores
    setEventAreas();
    const newDayNumber = Math.floor(Date.now() / 86400000);
    const newCurrentPeriod = Math.floor(newDayNumber / 3);
    const newNextPeriodStart = (newCurrentPeriod + 1) * 3;
    finDelPeriodo = newNextPeriodStart * 86400000;
    diff = finDelPeriodo - Date.now();
  }

  const horas = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const minutos = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const segundos = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

  contadores.forEach(c => c.textContent = `${horas}:${minutos}:${segundos}`);
}


setInterval(updateDailyCounters, 1000);
setInterval(updateEventCounters, 1000);





document.getElementById("pokedex-filter-type").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-level").addEventListener("change", e => {
  updatePokedex()
});

document.getElementById("pokedex-filter-ability").addEventListener("change", e => {
  updatePokedex()
});

function updatePokedex(){

    document.getElementById(`pokedex-list`).innerHTML = ""
    document.getElementById("pokedex-filters-title").style.display = "none"
    document.getElementById("pokedex-filters-cancel").style.display = "none"


    for (const i in pkmn) {

        if (pkmn[i].ability == undefined) pkmn[i].ability = learnPkmnAbility(pkmn[i].id)   
            

        if (document.getElementById(`pokedex-filter-type`).value !== "all" && !pkmn[i].type.includes(document.getElementById(`pokedex-filter-type`).value)) continue
        if (document.getElementById(`pokedex-filter-level`).value !== "all" && !( pkmn[i].level <= (document.getElementById(`pokedex-filter-level`).value) &&  pkmn[i].level >= (document.getElementById(`pokedex-filter-level`).value-19) )    ) continue
        if (document.getElementById(`pokedex-filter-ability`).value !== "all" && ability[pkmn[i].ability].rarity !=  document.getElementById(`pokedex-filter-ability`).value   ) continue


        //if (!rng(0.05)) continue
        if (pkmn[i].caught==0) continue


        const div = document.createElement(`div`)

        div.dataset.pkmnEditor = i
        div.innerHTML = `<span>lvl ${pkmn[i].level}</span><img class="sprite-trim" src="img/pkmn/sprite/${i}.png">`


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
                tmToTeach = undefined
                exitTmTeaching()
            })
        }


        if (evoItemToUse != undefined) {

            if (pkmn[i].level<wildAreaLevel2) continue
            if (pkmn[i].evolve == undefined) continue
            if (pkmn[i].evolve()[1].item == undefined) continue
            if (item[pkmn[i].evolve()[1].item.id] == undefined) continue
            if (item[pkmn[i].evolve()[1].item.id].id !== evoItemToUse) continue
            if (pkmn[ pkmn[i].evolve()[1].pkmn.id ].caught!=0) continue

                div.addEventListener("click", e => { 
                givePkmn(pkmn[ pkmn[i].evolve()[1].pkmn.id ],1)
                item[evoItemToUse].got--
                document.getElementById("tooltipTop").style.display = "none"    
                document.getElementById("tooltipMid").style.display = "none"
                document.getElementById("tooltipBottom").innerHTML = `${format(pkmn[ pkmn[i].evolve()[1].pkmn.id ].id)} has been unlocked!`
                openTooltip()
                updateItemBag()
                
                evoItemToUse = undefined
                exitTmTeaching()
         })

        
        }



        if (dexTeamSelect != undefined) {


            if (saved.currentPreviewTeam.slot1.pkmn == pkmn[i].id) continue
            if (saved.currentPreviewTeam.slot2.pkmn == pkmn[i].id) continue
            if (saved.currentPreviewTeam.slot3.pkmn == pkmn[i].id) continue
            if (saved.currentPreviewTeam.slot4.pkmn == pkmn[i].id) continue
            if (saved.currentPreviewTeam.slot5.pkmn == pkmn[i].id) continue
            if (saved.currentPreviewTeam.slot6.pkmn == pkmn[i].id) continue

            div.addEventListener("click", e => { 

                if (saved.currentPreviewTeam == saved.preview1) saved.preview1[dexTeamSelect].pkmn = pkmn[i].id
                if (saved.currentPreviewTeam == saved.preview2) saved.preview2[dexTeamSelect].pkmn = pkmn[i].id
                if (saved.currentPreviewTeam == saved.preview3) saved.preview3[dexTeamSelect].pkmn = pkmn[i].id
                if (saved.currentPreviewTeam == saved.preview4) saved.preview4[dexTeamSelect].pkmn = pkmn[i].id
                if (saved.currentPreviewTeam == saved.preview5) saved.preview5[dexTeamSelect].pkmn = pkmn[i].id
                if (saved.currentPreviewTeam == saved.preview6) saved.preview6[dexTeamSelect].pkmn = pkmn[i].id

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



        document.getElementById("pokedex-list").appendChild(div);

    }

}

function exitTmTeaching(){

                tmToTeach = undefined
                document.getElementById("menu-button-parent").style.display = "flex"

                document.getElementById(`pokedex-menu`).style.zIndex = "30"
                document.getElementById(`item-menu`).style.zIndex = "40"
                document.getElementById(`item-menu`).style.display = "flex"
                updateItemBag()

                document.getElementById(`pokedex-menu`).style.display = "none"
                document.getElementById(`pokedex-menu`).style.zIndex = "30"




    if (dexTeamSelect !== undefined) { //handles exit out of team swapping

            document.getElementById(`pokedex-menu`).style.zIndex = "30";
            document.getElementById(`pokedex-menu`).style.zIndex = "30";
            document.getElementById(`team-menu`).style.zIndex = "50";
            document.getElementById(`team-menu`).style.display = "flex" ;
            setTimeout(() => { document.getElementById(`pokedex-menu`).style.display = "none";
            document.getElementById(`pokedex-menu`).style.zIndex = "30" }, 500);

                if (saved.currentPreviewTeam == saved.preview1) saved.preview1[dexTeamSelect].pkmn = undefined;
                if (saved.currentPreviewTeam == saved.preview2) saved.preview2[dexTeamSelect].pkmn = undefined;
                if (saved.currentPreviewTeam == saved.preview3) saved.preview3[dexTeamSelect].pkmn = undefined; 
                if (saved.currentPreviewTeam == saved.preview4) saved.preview4[dexTeamSelect].pkmn = undefined;
                if (saved.currentPreviewTeam == saved.preview5) saved.preview5[dexTeamSelect].pkmn = undefined;
                if (saved.currentPreviewTeam == saved.preview6) saved.preview6[dexTeamSelect].pkmn = undefined;
                
                dexTeamSelect = undefined;
                updatePreviewTeam()

    }


}

function switchMenu(id){

    if (saved.tutorial && saved.tutorialStep === "intro") {saved.tutorialStep = "travel"; openTutorial()}

    document.getElementById(`explore-menu`).style.zIndex = "30"
    document.getElementById(`pokedex-menu`).style.zIndex = "30"
    document.getElementById(`item-menu`).style.zIndex = "30"
    document.getElementById(`vs-menu`).style.zIndex = "30"
    document.getElementById(`content-explore`).style.zIndex = "30"
    document.getElementById(`team-menu`).style.zIndex = "30"
    document.getElementById(`settings-menu`).style.zIndex = "30"
    document.getElementById(`guide-menu`).style.zIndex = "30"


    if (id==="travel") {

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

    if (id==="settings") {
        document.getElementById(`settings-menu`).style.display = "flex"
        document.getElementById(`settings-menu`).style.zIndex = "40"
    } 

    if (id==="guide") {
        document.getElementById(`guide-menu`).style.display = "flex"
        document.getElementById(`guide-menu`).style.zIndex = "40"
    } 

    if (id==="team") {

        if (document.getElementById(`content-explore`).style.display == "flex") {openMenu(); return; }


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
        if (document.getElementById(`content-explore`).style.display == "flex") {openMenu(); return; }
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


    openMenu()


}

let bagCategory = 'held'
let tmToTeach = undefined
let evoItemToUse = undefined

function updateItemBag(){

    document.getElementById(`item-menu-list`).innerHTML = ""

    for (const i in item) {

        if (!item[i].type?.includes(bagCategory) && !item[i].evo) continue
        if (item[i].evo && bagCategory!== "key" && !item[i].type?.includes(bagCategory)) continue
        

        //if (!rng(0.05)) continue
        if (item[i].got==0) continue


        const div = document.createElement(`div`)

        div.dataset.item = i
        if (item[i].type !== "tm") div.innerHTML = `<img src="img/items/${i}.png"> <span>${format(i)}</span> <span>x${item[i].got}</span>`
        if (item[i].move && move[item[i].move]) div.innerHTML = `<img src="img/items/tm${format(move[item[i].move].type)}.png"> <span>${format(i)}</span> <span>x${item[i].got}</span>`



        if (item[i].type == "tm") {
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


        if (item[i].evo) {
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



        if (dexTeamSelect != undefined) { //this is called when clicked on team switch item

            if (item[i].type !== "held") continue

            if (saved.currentPreviewTeam.slot1.item == i) continue
            if (saved.currentPreviewTeam.slot2.item == i) continue
            if (saved.currentPreviewTeam.slot3.item == i) continue
            if (saved.currentPreviewTeam.slot4.item == i) continue
            if (saved.currentPreviewTeam.slot5.item == i) continue
            if (saved.currentPreviewTeam.slot6.item == i) continue

            

            div.addEventListener("click", e => { 

                if (saved.currentPreviewTeam == saved.preview1) saved.preview1[dexTeamSelect].item = item[i].id
                if (saved.currentPreviewTeam == saved.preview2) saved.preview2[dexTeamSelect].item = item[i].id
                if (saved.currentPreviewTeam == saved.preview3) saved.preview3[dexTeamSelect].item = item[i].id
                if (saved.currentPreviewTeam == saved.preview4) saved.preview4[dexTeamSelect].item = item[i].id
                if (saved.currentPreviewTeam == saved.preview5) saved.preview5[dexTeamSelect].item = item[i].id
                if (saved.currentPreviewTeam == saved.preview6) saved.preview6[dexTeamSelect].item = item[i].id

                updatePreviewTeam()

                document.getElementById(`item-menu`).style.zIndex = "30"
                document.getElementById(`team-menu`).style.zIndex = "50"
                document.getElementById(`team-menu`).style.display = "flex"
                updateItemBag()

                document.getElementById(`item-menu`).style.display = "none"
                document.getElementById(`item-menu`).style.zIndex = "30"
                
                document.getElementById("item-menu-cancel").style.display = "none"
                dexTeamSelect = undefined
            })

        }


        document.getElementById("item-menu-list").appendChild(div);

    }

}




function updateVS() {


    document.getElementById(`vs-listing`).innerHTML = ""

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

            saved.currentArea = i
            document.getElementById(`preview-team-exit`).style.display = "flex"
            document.getElementById(`team-menu`).style.zIndex = `50`
            document.getElementById(`team-menu`).style.display = `flex`
            document.getElementById("menu-button-parent").style.display = "none"
            updatePreviewTeam()
            afkSeconds = 0
            setTimeout(() => {
                document.getElementById(`explore-menu`).style.display = `none`
            }, 500);

        })
    }


        divAreas.className = `vs-card`
        divAreas.innerHTML = `
                        <span class="hitbox"></span>

                <img class="vs-card-flair" src="img/icons/pokeball.svg">
                <div class="vs-card-bg"></div>
                    <span class="explore-ticket-left" style="z-index: 2;">
                        <span><strong style="font-size:1rem" id="trainer-name-${areas[i].name}">${areas[i].name}</strong></span>
                        <span><strong style="font-size:1rem">Trainer Level</strong><strong style="font-size:1rem; margin-left:0.3rem">${Math.max(1,(areas[i].level))}</strong></span>
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

}

updateVS()

/*let afkSeconds = 0
function afkTimer(){
    if (document.hidden) afkSeconds++
    if (!document.hidden) afkSeconds = 0
}

setInterval(afkTimer, 1000);*/

saved.ultimoFrame = Date.now();
let afkSeconds = 0;

function loop() {
    const ahora = Date.now();
    const transcurrido = (ahora - saved.ultimoFrame) / 1000;
    saved.ultimoFrame = ahora;

    // Si pasó más de lo normal entre frames, eso es tiempo AFK
    // Un frame normal es ~16 ms, así que cualquier salto mayor se considera AFK
    if (transcurrido > 0.1) {
        afkSeconds += transcurrido;
    }

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);



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

        if (team[slot].buffs[i] === 0) continue

        //abilities
        if (/burn|freeze|confused|paralysis|poisoned|sleep/.test(i) && team[slot].pkmn.ability == ability.marvelScale.id) team[slot].buffs.defup1 = 1
        if (/burn|freeze|confused|paralysis|poisoned|sleep/.test(i) && team[slot].pkmn.ability == ability.livingShield.id) team[slot].buffs.sdefup1 = 1
        if (/burn|freeze|confused|paralysis|poisoned|sleep/.test(i) && team[slot].pkmn.ability == ability.guts.id) team[slot].buffs.atkup1 = 1
        if (/burn|freeze|confused|paralysis|poisoned|sleep/.test(i) && team[slot].pkmn.ability == ability.brittleArmor.id) team[slot].buffs.satkup1 = 1

        if (team[slot].pkmn.ability == ability.insomnia.id && i == "sleep") team[slot].buffs.sleep = 0
        if (team[slot].pkmn.ability == ability.immunity.id && i == "poisoned") team[slot].buffs.poisoned = 0
        if (team[slot].pkmn.ability == ability.limber.id && i == "paralysis") team[slot].buffs.paralysis = 0
        if (team[slot].pkmn.ability == ability.ownTempo.id && i == "confused") team[slot].buffs.confused = 0
        if (team[slot].pkmn.ability == ability.magmaArmor.id && i == "freeze") team[slot].buffs.freeze = 0
        if (team[slot].pkmn.ability == ability.waterVeil.id && i == "burn") team[slot].buffs.burn = 0

        if (team[slot].pkmn.ability == ability.hyperCutter.id && i == "atkdown1" || i == "atkdown2") {team[slot].buffs.atkdown1 = 0; team[slot].buffs.atkdown2 = 0; continue}
        if (team[slot].pkmn.ability == ability.bigPecks.id && i == "defdown1" || i == "defdown2") {team[slot].buffs.defdown1 = 0; team[slot].buffs.defdown2 = 0; continue}

        if (team[slot].pkmn.ability == ability.synchronize.id && /burn|freeze|confused|paralysis|poisoned|sleep/.test(i) )  { wildBuffs[i] = 3; updateWildBuffs()}


        const div = document.createElement("span");
        div.className = "buff-tag";
        div.style.filter = `hue-rotate(${formatBuffs(i,"hue")}deg)`
        div.innerHTML = formatBuffs(i);
        document.getElementById(`team-member-${slot}-buff-list`).appendChild(div);
        }
    };

}



const tagBurn = `<span data-buff="burn"><span  style="cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("fire")}">Burn</span></span>`
const tagFreeze = `<span data-buff="freeze"><span  style="cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("ice")}">Freeze</span></span>`
const tagParalysis = `<span data-buff="paralysis"><span  style="cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("electric")}">Paralysis</span></span>`
const tagPoisoned = `<span data-buff="poisoned"><span  style="cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("poison")}">Poisoned</span></span>`
const tagSleep = `<span data-buff="sleep"><span  style="cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("normal")}">Sleep</span></span>`
const tagConfused = `<span data-buff="confused"><span  style="cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor("psychic")}">Confused</span></span>`


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
  sdefup1: 0,
  sdefup2: 0,
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
    if (buff == "speup1") affectedTurns = 2
    if (buff == "speup2") affectedTurns = 2
    if (buff == "spedown1") affectedTurns = 2
    if (buff == "spedown2") affectedTurns = 2
    if (buff == "paralysis") affectedTurns = 2


    if (target==="wild" && mod=="team") {
        for (const slot in team) {
            team[slot].buffs[buff] = affectedTurns
        }
    }


    if ((target==="player" && mod=="self") || (mod==undefined && target==="wild")) {

        if (buff == "paralysis" && pkmn[saved.currentPkmn].type.includes("electric")) return

        wildBuffs[buff] = affectedTurns
        return
    } 


    if ((target==="wild" && mod=="self") || (mod==undefined && target==="player")) {

        if (buff == "paralysis" && pkmn[team[exploreActiveMember].pkmn.id].type.includes("electric")) return

        if (pkmn[team[exploreActiveMember].pkmn.id]?.ability == ability.wonderSkin.id && /burn|freeze|confused|paralysis|poisoned|sleep/.test(buff) && rng(0.5)) return

        team[exploreActiveMember].buffs[buff] = affectedTurns
        return
    } 
    
}







window.addEventListener('load', function() {

    loadGame();

    if (saved.currentArea !== undefined) {
        document.getElementById("team-preview").innerHTML = ""
        document.getElementById("content-explore").style.display = "flex"
        initialiseArea()        
        updateItemsGot() 
    } 
    
    getSeed()
    //setPkmnTeam()
    //setWildPkmn()

    exploreCombatPlayer()
    exploreCombatWild()


    if (saved.firstTimePlaying){
            newGameIntro()
    }
    
    setTimeout(() => {
        saveGame()
    }, 5000);


    changeTheme()

    
    updateGameVersion()
    openTutorial()


    //updateTeamExp()
});
