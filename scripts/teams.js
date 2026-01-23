
saved.previewTeams = {}
//--Hardcoded teams. Painful, i feel you
saved.previewTeams.preview1 = {}
saved.previewTeams.preview2 = {}
saved.previewTeams.preview3 = {}
saved.previewTeams.preview4 = {}
saved.previewTeams.preview5 = {}
saved.previewTeams.preview6 = {}
saved.previewTeams.preview7 = {}
saved.previewTeams.preview8 = {}
saved.previewTeams.preview9 = {}
saved.previewTeams.preview10 = {}
saved.previewTeams.preview11 = {}
saved.previewTeams.preview12 = {}
saved.previewTeams.preview13 = {}
saved.previewTeams.preview14 = {}
saved.previewTeams.preview15 = {}
saved.previewTeams.preview16 = {}
saved.previewTeams.preview17 = {}
saved.previewTeams.preview18 = {}
saved.previewTeams.preview19 = {}
saved.previewTeams.preview20 = {}
saved.previewTeams.preview21 = {}
saved.previewTeams.preview22 = {}
saved.previewTeams.preview23 = {}
saved.previewTeams.preview24 = {}
saved.previewTeams.preview25 = {}
saved.previewTeams.preview26 = {}
saved.previewTeams.preview27 = {}
saved.previewTeams.preview28 = {}
saved.previewTeams.preview29 = {}
saved.previewTeams.preview30 = {}

for (const i in saved.previewTeams) {
    saved.previewTeams[i].slot1 = { } 
    saved.previewTeams[i].slot2 = { } 
    saved.previewTeams[i].slot3 = { } 
    saved.previewTeams[i].slot4 = { } 
    saved.previewTeams[i].slot5 = { } 
    saved.previewTeams[i].slot6 = { } 

    saved.previewTeams[i].slot1.item = undefined
    saved.previewTeams[i].slot2.item = undefined
    saved.previewTeams[i].slot3.item = undefined
    saved.previewTeams[i].slot4.item = undefined
    saved.previewTeams[i].slot5.item = undefined
    saved.previewTeams[i].slot6.item = undefined

    saved.previewTeams[i].slot1.pkmn = undefined
    saved.previewTeams[i].slot2.pkmn = undefined
    saved.previewTeams[i].slot3.pkmn = undefined
    saved.previewTeams[i].slot4.pkmn = undefined
    saved.previewTeams[i].slot5.pkmn = undefined
    saved.previewTeams[i].slot6.pkmn = undefined
}

//--Manages team screen
saved.currentPreviewTeam = "preview1"

document.getElementById("team-slot-selector").addEventListener("change", e => {
  saved.currentPreviewTeam = document.getElementById("team-slot-selector").value
  updatePreviewTeam()
});

/*

function updatePreviewTeam(){

    const currentTeam = saved.previewTeams[saved.currentPreviewTeam]

    if (saved.tutorial && saved.tutorialStep === "travel") {saved.tutorialStep = "moves"; openTutorial()}
    saved.firstTimePlaying = false

    document.getElementById("team-preview").innerHTML = ""
    let slotNumber = 0

    for (const i in currentTeam) {
    
    const div = document.createElement("div")
    div.className = `explore-team-member`
    div.id = `explore-${i}-member`
    //change team member by clicking
    div.addEventListener("click", e => {
        document.getElementById(`pokedex-menu`).style.display = "flex"
        document.getElementById(`pokedex-menu`).style.zIndex = "200"
        document.getElementById(`pokedex-menu`).scrollTop = 0
        dexTeamSelect = i
        document.getElementById("pokedex-filters-title").style.display = "flex"
        document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to add to the team`
        document.getElementById(`team-menu`).style.display = "none"
        setTimeout(() => {
        updatePokedex()    
        }, 1);
        
    })

    //if the pokemon slot aint empty
    if (currentTeam[i].pkmn !== undefined) {
    slotNumber++

    let itemDiv = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity="0.2"/><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"/></g></svg>`
    if (currentTeam[i].item !== undefined) itemDiv = `<img src="img/items/${ currentTeam[i].item }.png">`

    let nameTag = ""
    if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===1 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="C" &&  returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="D")) nameTag += ` ⛔`
    if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===2 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="B" && returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="C" &&  returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="D")) nameTag += ` ⛔`
    if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===3 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="A" && returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="B" && returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="C" &&  returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="D")) nameTag += ` ⛔`

    


    let restrictedError = false
        if (currentTeam[i].pkmn == undefined) continue
        let restricedActive = 0

    
    for (const activeMoves in pkmn[currentTeam[i].pkmn].moves) {
        if (pkmn[currentTeam[i].pkmn].moves[activeMoves] == undefined) continue
        if (move[pkmn[currentTeam[i].pkmn].moves[activeMoves]].restricted) restricedActive++
    }

    if (restricedActive>1) restrictedError = true

    
    if (restrictedError) nameTag += ` ⛔`





    let pkmnName = `${format(currentTeam[i].pkmn)} ${nameTag} <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${pkmn[ currentTeam[i].pkmn ].level}</span>`
    if (pkmn[currentTeam[i].pkmn].shiny) pkmnName = `${format(currentTeam[i].pkmn)} ${nameTag} <span style="color:#FF4671;">✦</span> <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${pkmn[ currentTeam[i].pkmn ].level}</span>`

    let pkmnSprite = `<img class="sprite-trim" src="img/pkmn/sprite/${currentTeam[i].pkmn}.png" id="explore-team-member-${i}-sprite">`
    if (pkmn[currentTeam[i].pkmn].shiny) pkmnSprite = `<img class="sprite-trim" src="img/pkmn/shiny/${currentTeam[i].pkmn}.png" id="explore-team-member-${i}-sprite">`
    if (pkmn[currentTeam[i].pkmn].shiny && pkmn[currentTeam[i].pkmn].shinyDisabled == true) pkmnSprite = `<img class="sprite-trim" src="img/pkmn/sprite/${currentTeam[i].pkmn}.png" id="explore-team-member-${i}-sprite">`

    div.innerHTML = `
        <div class="team-member-slotnumber">#0${slotNumber}</div>
        <div class="team-held-item" id="team-${i}-held-item" data-item="${currentTeam[i].item}">${itemDiv}</div>
        <div class="explore-sprite" id="explore-team-member-${i}-spriteData">
        ${pkmnSprite}
        </div>
        <div class="explore-header-infobox">
        <div class="explore-header-hpbox">
        <span style="color: white;">${pkmnName}</span>
        </div>
        <div class="explore-header-moves" id="explore-team-member-${i}-moves-preview">
        </div>
        </div>
    `

    document.getElementById("team-preview").appendChild(div)
    document.getElementById(`explore-team-member-${i}-spriteData`).dataset.pkmnEditor = currentTeam[i].pkmn

    //change team item by clicking
    document.getElementById(`team-${i}-held-item`).addEventListener("click", e => { 
        document.getElementById("item-menu-cancel").style.display = "inline"
        document.getElementById("item-menu-remove").style.display = "inline"
        document.getElementById(`item-menu`).style.display = "flex"
        setTimeout(() => { //due to poor implementation, the select pkmn menu opens too. oops!
        document.getElementById(`pokedex-menu`).style.display = "none" }, 1);
        document.getElementById(`item-menu`).style.zIndex = "900"
        dexTeamSelect = i
        updateItemBag()
        document.getElementById(`team-menu`).style.display = "none"
    })

    //create moves in the team slots
    for (const e in pkmn[currentTeam[i].pkmn].moves) {

    let moveId = pkmn[currentTeam[i].pkmn].moves[e]
    if (moveId == undefined) { continue }


    let signatureIcon = ""
    if (move[moveId].moveset == undefined) signatureIcon = `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>`
    if (move[moveId].restricted) signatureIcon += `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity="0.5"/><path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"/></svg>`

             
    const divMove = document.createElement("div") 
    divMove.className = "pkmn-movebox"
    divMove.style.borderColor = returnTypeColor(move[moveId].type)
    divMove.id = `pkmn-movebox-${e}-team-${i}-preview`
    divMove.innerHTML = 
        `<div id = "pkmn-movebox-${e}-team-${i}-bar-preview"
        class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[ moveId ].type)} "></div><span>`
        + format(moveId) + signatureIcon + `</span><img style="background: ${returnTypeColor(move[ moveId ].type)} " src="img/icons/${move[ moveId ].type }.svg">
    `
    divMove.dataset.move = moveId
    document.getElementById(`explore-team-member-${i}-moves-preview`).appendChild(divMove)
    }

    }

    //create empty pokemon slot
    if (currentTeam[i].pkmn == undefined && i !== "name") {
    div.style.opacity = 0.6
    div.innerHTML = `
        <div class="team-held-item" id="team-${i}-held-item"></div>
        <div class="explore-sprite" id="explore-team-member-${i}-spriteData">
        <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity="0.2"/><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"/></g></svg>
        </div>
        <div class="explore-header-infobox">
        <div class="explore-header-hpbox">
        <span style="color: white;">Add Pokemon</span>
        </div>
        <div class="explore-header-moves" id="explore-team-member-${i}-moves-preview">
        </div>
        </div>
    `
    document.getElementById("team-preview").appendChild(div)
    }

}
}

*/



function editTeamName(){
    document.getElementById("tooltipTop").style.display = "none"
    document.getElementById("tooltipBottom").style.display = "none"
    document.getElementById("tooltipTitle").innerHTML = "Edit team name"
    const select = document.getElementById("team-slot-selector");
    const text = select.options[select.selectedIndex].text;
    document.getElementById("tooltipMid").innerHTML = `
    <input id="team-name-field" type="text" maxlength="15" placeholder="${text}">
    <span id="prevent-tooltip-exit"></span>
    `

    document.getElementById("team-name-field").addEventListener("keydown", e => {
        if (e.key === "Enter") {
        document.getElementById("team-name-field").blur()
        }
    });

    openTooltip()
}

function changeTeamNames(){
    const select = document.getElementById("team-slot-selector");
    for (const option of select.options) {
        for (const team in saved.previewTeams) {
            if (option.value !== team) continue
            if (saved.previewTeams[team].name!==undefined) option.text = saved.previewTeams[team].name
        }
    }

    document.getElementById("team-slot-selector").text = saved.previewTeams[saved.currentPreviewTeam].name
} 


let dexTeamSelect = undefined

//--Swaps the preset team into the real team, executed when entering battle 
function injectPreviewTeam(){

    const currentTeam = saved.previewTeams[saved.currentPreviewTeam]

    let frontierError = false
    for (const i in currentTeam) {
        if (currentTeam[i].pkmn == undefined) continue
        if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===1 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="C" &&  returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="D")) frontierError = true
        if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===2 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="B" && returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="C" &&  returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="D")) frontierError = true
        if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===3 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="A" && returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="B" && returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="C" &&  returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="D")) frontierError = true
    }

    if (frontierError) {
        document.getElementById("tooltipTop").style.display = "none"
        document.getElementById("tooltipBottom").style.display = "none"
        document.getElementById("tooltipTitle").innerHTML = `Banned Pokemon`
        document.getElementById("tooltipMid").innerHTML = `One or more Pokemon in the current team do not met the division restrictions of the current league`
        openTooltip()
        return
    }


    let restrictedError = false
    for (const i in currentTeam) {
        if (currentTeam[i].pkmn == undefined) continue
        let restricedActive = 0

    for (const activeMoves in pkmn[currentTeam[i].pkmn].moves) {
        if (pkmn[currentTeam[i].pkmn].moves[activeMoves] == undefined) continue
        if (move[pkmn[currentTeam[i].pkmn].moves[activeMoves]].restricted) restricedActive++
    }

    if (restricedActive>1) restrictedError = true

    }

    const restrictedIcon = `<svg style="color:${returnTypeColor("normal")}; margin: -0.3rem 0rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity="0.5"/><path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"/></svg>`

    if (restrictedError) {
        document.getElementById("tooltipTop").style.display = "none"
        document.getElementById("tooltipBottom").style.display = "none"
        document.getElementById("tooltipTitle").innerHTML = `Restricted Moves`
        document.getElementById("tooltipMid").innerHTML = `One or more Pokemon in the current team have multiple restricted moves (${restrictedIcon}) equipped`
        openTooltip()
        return
    }



    saved.currentArea = saved.currentAreaBuffer

    if (saved.tutorial && saved.tutorialStep === "moves") {saved.tutorialStep = "battle"; openTutorial(); item.mysteryEgg.got++; item.mysteryEgg.newItem++ }

    if (pkmn[currentTeam.slot1.pkmn]===undefined){
        document.getElementById("tooltipTop").style.display = "none"    
        document.getElementById("tooltipMid").style.display = "none"
        document.getElementById("tooltipBottom").innerHTML = "First team slot must not be empty!"
        openTooltip()
        return
    }

    for ( const slot in team){
    team[slot].pkmn = pkmn[currentTeam[slot].pkmn]
    team[slot].item = currentTeam[slot].item


    }





    for (const i in team){
    if (team[i].pkmn==undefined) continue
    if (team[i].damageDealt) team[i].damageDealt = 0
    }




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




function setPkmnTeamHp(){


    saved.currentSpiralFloor = 1


    for (const i in team) {

    if (team[i].pkmn === undefined) continue

    let hpMultiplier = 10
    if (areas[saved.currentArea].trainer || saved.currentArea == areas.frontierSpiralingTower.id) hpMultiplier = 4
    if (saved.currentArea == areas.training.id) hpMultiplier = 80 //100


    
    if (saved.currentArea == areas.training.id) {

    //health ivs count less on training
    pkmn[team[i].pkmn.id].playerHp =
    (100 + ( (returnDivisionStars(pkmn[team[i].pkmn.id]) * 30) * Math.pow(1.05, pkmn[team[i].pkmn.id].ivs.hp) )
    * ( 1+(pkmn[team[i].pkmn.id].level * 0.2) )       
    ) * hpMultiplier;


    } else {


    pkmn[team[i].pkmn.id].playerHp =
    (100 + ( (pkmn[team[i].pkmn.id].bst.hp * 30) * Math.pow(1.1, pkmn[team[i].pkmn.id].ivs.hp) )
    * ( 1+(pkmn[team[i].pkmn.id].level * 0.2) )       
    ) * hpMultiplier;



    }




    pkmn[ team[i].pkmn.id ].playerHpMax = pkmn[ team[i].pkmn.id ].playerHp


    }


   for (const slot in team) {//purge buffs

        if (team[slot].pkmn === undefined ) continue
        
        for ( const i in team[slot].buffs) {

            if (team[slot].buffs[i]>0) team[slot].buffs[i] = 0
        }
    };
    

}


function switchMemberNext() { //used for stuff like u turn
    let current = Number(exploreActiveMember.replace("slot", ""));
    let checked = 0;

    while (checked < 6) {
        current++;
        if (current > 6) current = 1;
        checked++;

        let nextSlot = "slot" + current;

        if (
            team[nextSlot]?.pkmn !== undefined &&
            pkmn[ team[nextSlot].pkmn.id ].playerHp > 0
        ) {
            switchMember(nextSlot);
            return;
        }
    }
}


function switchMember(member){


    if (areas[saved.currentArea].id == "training") return
    if (exploreActiveMember == member) return


    //conitions for not switching (will be ignored if the player is dead)
    if (pkmn[ team[exploreActiveMember].pkmn.id ].playerHp > 0) {

        if (team[exploreActiveMember].item == item.choiceSpecs.id) return
        if (team[exploreActiveMember].item == item.choiceBand.id) return
        if (testAbility(`active`,  ability.gorillaTactics.id )) return

        if (document.getElementById(`explore-${exploreActiveMember}-member`).classList.contains("member-inactive")) return;
        
    }


    if (pkmn[ team[member].pkmn.id ].playerHp <= 0) return;




    //reset move buildup, ie rollout
    for (const learntMoveID of pkmn[ team[exploreActiveMember].pkmn.id ].movepool) if(move[learntMoveID]?.buildup!==undefined) move[learntMoveID].buildup = 0


    barProgressPlayer = 0
    if (barPlayer) barPlayer.style.width = 0
    exploreCombatPlayerTurn = 1
    exploreActiveMember = member



    if (testAbility(`active`,  ability.naturalCure.id )) {team[exploreActiveMember].buffs.confused = 0; team[exploreActiveMember].buffs.burn = 0; team[exploreActiveMember].buffs.freeze = 0; team[exploreActiveMember].buffs.paralysis = 0; team[exploreActiveMember].buffs.poisoned = 0; team[exploreActiveMember].buffs.sleep = 0; updateTeamBuffs() }
    if (testAbility(`active`,  ability.drizzle.id )) changeWeather("rainy")
    if (testAbility(`active`,  ability.drought.id )) changeWeather("sunny")
    if (testAbility(`active`,  ability.sandStream.id )) changeWeather("sandstorm")
    if (testAbility(`active`,  ability.snowWarning.id )) changeWeather("hail")
    if (testAbility(`active`,  ability.somberField.id )) changeWeather("foggy")
    if (testAbility(`active`,  ability.electricSurge.id )) changeWeather("electricTerrain")
    if (testAbility(`active`,  ability.grassySurge.id )) changeWeather("grassyTerrain")
    if (testAbility(`active`,  ability.mistySurge.id )) changeWeather("mistyTerrain")
        

    //manage styles
    const members = document.querySelectorAll('.explore-team-member');
    members.forEach(member => member.classList.add('member-inactive'));
    document.getElementById(`explore-${exploreActiveMember}-member`).classList.remove('member-inactive');

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

        

        switchMember(i)
        
        
        
    })

    pkmn[ team[i].pkmn.id ].currentTurn = 1;





    
    div.id = `explore-${i}-member`


    let pkmnName = `${format(team[i].pkmn.id)} <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${pkmn[team[i].pkmn.id].level}</span>`
    if (pkmn[team[i].pkmn.id].shiny) pkmnName = `${format(team[i].pkmn.id)} <span style="color:#FF4671;">✦</span> <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${pkmn[team[i].pkmn.id].level}</span>`


    let pkmnSprite = `<img class="sprite-trim" src="img/pkmn/sprite/${team[i].pkmn.id}.png" id="explore-team-member-${i}-sprite">`
    if (pkmn[team[i].pkmn.id].shiny) pkmnSprite = `<img class="sprite-trim" src="img/pkmn/shiny/${team[i].pkmn.id}.png" id="explore-team-member-${i}-sprite">`
    if (pkmn[team[i].pkmn.id].shiny && pkmn[team[i].pkmn.id].shinyDisabled == true) pkmnSprite = `<img class="sprite-trim" src="img/pkmn/sprite/${team[i].pkmn.id}.png" id="explore-team-member-${i}-sprite">`

    div.innerHTML = `
    <div class="team-held-item" id="team-${i}-held-item"></div>
    <div class="team-buff-list" id="team-member-${i}-buff-list"></div>
    <div class="explore-sprite" id="explore-team-member-${i}-spriteData">
            ${pkmnSprite}
            </div>

            <div class="explore-header-infobox">

                <img class="explore-team-member-flair" src="img/icons/pokeball.svg">
                <div class="explore-header-hpbox">
                <span style="color: white;">${pkmnName}</span>
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




    if (moveId == undefined){ //fix
            const divMove = document.createElement("div") 
            divMove.className = "pkmn-movebox"
            divMove.style.pointerEvents = "none"
            divMove.style.display = "none"
            document.getElementById(`explore-team-member-${i}-moves`).appendChild(divMove)
            continue
    }


    let signatureIcon = ""
    if (move[moveId].moveset == undefined) signatureIcon = `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>`
    if (move[moveId].restricted) signatureIcon += `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity="0.5"/><path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"/></svg>`



    const divMove = document.createElement("div") 
    divMove.className = "pkmn-movebox"
    divMove.style.borderColor = returnTypeColor(move[moveId].type)
    divMove.id = `pkmn-movebox-${e}-team-${i}`
    divMove.innerHTML = 
    `<div
    id = "pkmn-movebox-${e}-team-${i}-bar"
    class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[ moveId ].type)} "></div><span>`
    + format(moveId) + signatureIcon +
     `</span><img style="background: ${returnTypeColor(move[ moveId ].type)} " src="img/icons/${move[ moveId ].type }.svg">`

     divMove.dataset.move = moveId
    document.getElementById(`explore-team-member-${i}-moves`).appendChild(divMove)
    }



    }


    updateTeamItems()
    updateTeamPkmn()


}



























//---------Drag and drop team slots, phone compatible, uses native browser dragging
//---PR submited by Claude


let draggedSlot = null;
let touchDragElement = null;
let ghostElement = null;
let touchStartX = 0;
let touchStartY = 0;
let isTouchDragging = false;
let touchHoldTimeout = null;
let canStartDrag = false;

function updatePreviewTeam(){
    const currentTeam = saved.previewTeams[saved.currentPreviewTeam]

    if (saved.tutorial && saved.tutorialStep === "travel") {saved.tutorialStep = "moves"; openTutorial()}
    saved.firstTimePlaying = false

    document.getElementById("team-preview").innerHTML = ""
    let slotNumber = 0

    for (const i in currentTeam) {
    
        const div = document.createElement("div")
        div.className = `explore-team-member`
        div.id = `explore-${i}-member`
        div.dataset.slot = i; // Importante: guardamos el slot
        
        // CONFIGURAR DRAG & DROP NATIVO
        div.draggable = true; // Hacer el div arrastrable
        
        // Event listeners para drag & drop nativo (Desktop)
        div.addEventListener('dragstart', handleDragStart);
        div.addEventListener('dragover', handleDragOver);
        div.addEventListener('drop', handleDrop);
        div.addEventListener('dragend', handleDragEnd);
        div.addEventListener('dragenter', handleDragEnter);
        div.addEventListener('dragleave', handleDragLeave);
        
        // Event listeners para touch (Mobile)
        div.addEventListener('touchstart', handleTouchStart, { passive: false });
        div.addEventListener('touchmove', handleTouchMove, { passive: false });
        div.addEventListener('touchend', handleTouchEnd);
        
        //change team member by clicking
        div.addEventListener("click", e => {
            document.getElementById(`pokedex-menu`).style.display = "flex"
            document.getElementById(`pokedex-menu`).style.zIndex = "200"
            document.getElementById(`pokedex-menu`).scrollTop = 0
            dexTeamSelect = i
            document.getElementById("pokedex-filters-title").style.display = "flex"
            document.getElementById("pokedex-filters-title").innerHTML = `Select a Pokemon to add to the team`
            document.getElementById(`team-menu`).style.display = "none"
            setTimeout(() => {
                updatePokedex()    
            }, 1);
        })

        //if the pokemon slot aint empty
        if (currentTeam[i].pkmn !== undefined) {
            slotNumber++

            let itemDiv = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity="0.2"/><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"/></g></svg>`
            if (currentTeam[i].item !== undefined) itemDiv = `<img src="img/items/${ currentTeam[i].item }.png">`

            let nameTag = ""
            if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===1 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="C" &&  returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="D")) nameTag += ` ⛔`
            if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===2 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="B" && returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="C" &&  returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="D")) nameTag += ` ⛔`
            if (areas[saved.currentAreaBuffer]?.type=="frontier" && rotationFrontierCurrent===3 && (returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="A" && returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="B" && returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="C" &&  returnPkmnDivision(pkmn[currentTeam[i].pkmn])!="D")) nameTag += ` ⛔`

            let restrictedError = false
            if (currentTeam[i].pkmn == undefined) continue
            let restricedActive = 0

            for (const activeMoves in pkmn[currentTeam[i].pkmn].moves) {
                if (pkmn[currentTeam[i].pkmn].moves[activeMoves] == undefined) continue
                if (move[pkmn[currentTeam[i].pkmn].moves[activeMoves]].restricted) restricedActive++
            }

            if (restricedActive>1) restrictedError = true
            if (restrictedError) nameTag += ` ⛔`

            let pkmnName = `${format(currentTeam[i].pkmn)} ${nameTag} <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${pkmn[ currentTeam[i].pkmn ].level}</span>`
            if (pkmn[currentTeam[i].pkmn].shiny) pkmnName = `${format(currentTeam[i].pkmn)} ${nameTag} <span style="color:#FF4671;">✦</span> <span class="explore-pkmn-level" id="explore-${i}-lvl">lvl ${pkmn[ currentTeam[i].pkmn ].level}</span>`

            let pkmnSprite = `<img class="sprite-trim" src="img/pkmn/sprite/${currentTeam[i].pkmn}.png" id="explore-team-member-${i}-sprite">`
            if (pkmn[currentTeam[i].pkmn].shiny) pkmnSprite = `<img class="sprite-trim" src="img/pkmn/shiny/${currentTeam[i].pkmn}.png" id="explore-team-member-${i}-sprite">`
            if (pkmn[currentTeam[i].pkmn].shiny && pkmn[currentTeam[i].pkmn].shinyDisabled == true) pkmnSprite = `<img class="sprite-trim" src="img/pkmn/sprite/${currentTeam[i].pkmn}.png" id="explore-team-member-${i}-sprite">`

            div.innerHTML = `
                <div class="team-member-slotnumber">#0${slotNumber}</div>
                <div class="team-held-item" id="team-${i}-held-item" data-item="${currentTeam[i].item}">${itemDiv}</div>
                <div class="explore-sprite" id="explore-team-member-${i}-spriteData">
                ${pkmnSprite}
                </div>
                <div class="explore-header-infobox">
                <div class="explore-header-hpbox">
                <span style="color: white;">${pkmnName}</span>
                </div>
                <div class="explore-header-moves" id="explore-team-member-${i}-moves-preview">
                </div>
                </div>
            `

            document.getElementById("team-preview").appendChild(div)
            document.getElementById(`explore-team-member-${i}-spriteData`).dataset.pkmnEditor = currentTeam[i].pkmn

            //change team item by clicking
            document.getElementById(`team-${i}-held-item`).addEventListener("click", e => { 
                e.stopPropagation(); // Prevenir que se abra el menú de pokémon
                
                document.getElementById("item-menu-cancel").style.display = "inline"
                document.getElementById("item-menu-remove").style.display = "inline"
                document.getElementById(`item-menu`).style.display = "flex"
                setTimeout(() => {
                    document.getElementById(`pokedex-menu`).style.display = "none" 
                }, 1);
                document.getElementById(`item-menu`).style.zIndex = "900"
                dexTeamSelect = i
                updateItemBag()
                document.getElementById(`team-menu`).style.display = "none"
            })



            // Event listeners para touch (Mobile)
            document.getElementById(`team-${i}-held-item`).addEventListener('touchstart', handleTouchStart, { passive: false });
            document.getElementById(`team-${i}-held-item`).addEventListener('touchmove', handleTouchMove, { passive: false });
            document.getElementById(`team-${i}-held-item`).addEventListener('touchend', handleTouchEnd);

            // Event listeners para drag & drop nativo (Desktop)
            document.getElementById(`team-${i}-held-item`).addEventListener('dragstart', handleDragStart);
            document.getElementById(`team-${i}-held-item`).addEventListener('dragover', handleDragOver);
            document.getElementById(`team-${i}-held-item`).addEventListener('drop', handleDrop);
            document.getElementById(`team-${i}-held-item`).addEventListener('dragend', handleDragEnd);
            document.getElementById(`team-${i}-held-item`).addEventListener('dragenter', handleDragEnter);
            document.getElementById(`team-${i}-held-item`).addEventListener('dragleave', handleDragLeave);


            //create moves in the team slots
            for (const e in pkmn[currentTeam[i].pkmn].moves) {
                let moveId = pkmn[currentTeam[i].pkmn].moves[e]
                if (moveId == undefined) { continue }

                let signatureIcon = ""
                if (move[moveId].moveset == undefined) signatureIcon = `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>`
                if (move[moveId].restricted) signatureIcon += `<svg style="color:${returnTypeColor(move[moveId].type)}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity="0.5"/><path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"/></svg>`

                const divMove = document.createElement("div") 
                divMove.className = "pkmn-movebox"
                divMove.style.borderColor = returnTypeColor(move[moveId].type)
                divMove.id = `pkmn-movebox-${e}-team-${i}-preview`
                divMove.innerHTML = 
                    `<div id = "pkmn-movebox-${e}-team-${i}-bar-preview"
                    class="pkmn-movebox-progress" style="background: ${returnTypeColor(move[ moveId ].type)} "></div><span>`
                    + format(moveId) + signatureIcon + `</span><img style="background: ${returnTypeColor(move[ moveId ].type)} " src="img/icons/${move[ moveId ].type }.svg">
                `
                divMove.dataset.move = moveId
                document.getElementById(`explore-team-member-${i}-moves-preview`).appendChild(divMove)
            }
        }

        //create empty pokemon slot
        if (currentTeam[i].pkmn == undefined && i !== "name") {
            div.style.opacity = 0.6
            div.innerHTML = `
                <div class="team-held-item" id="team-${i}-held-item"></div>
                <div class="explore-sprite" id="explore-team-member-${i}-spriteData">
                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity="0.2"/><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"/></g></svg>
                </div>
                <div class="explore-header-infobox">
                <div class="explore-header-hpbox">
                <span style="color: white;">Add Pokemon</span>
                </div>
                <div class="explore-header-moves" id="explore-team-member-${i}-moves-preview">
                </div>
                </div>
            `
            document.getElementById("team-preview").appendChild(div)
        }
    }
}

// ========== FUNCIONES DRAG & DROP NATIVAS (DESKTOP) ==========

function handleDragStart(e) {
    draggedSlot = this.dataset.slot;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    
    // Estilo visual para el elemento que se está arrastrando
    setTimeout(() => {
        this.style.opacity = '0.4';
    }, 0);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necesario para permitir drop
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    // Agregar estilo visual cuando entramos sobre un slot válido
    if (this.dataset.slot !== draggedSlot) {
        this.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    // Remover estilo visual cuando salimos del slot
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation(); //prevent browswer from opening the content
    }
    
    const targetSlot = this.dataset.slot;
    const targetItemSlot = this.offsetParent.dataset.slot;

    // only swap if different slot
    if (draggedSlot !== targetSlot) {
// it's an item swap if targetSlot is undef
        if (!targetSlot && targetItemSlot) {
            swapItemSlots(draggedSlot, targetItemSlot);
        } else {
            swapTeamSlots(draggedSlot, targetSlot);
        }
    }
    
    this.classList.remove('drag-over');
    return false;
}

function handleDragEnd(e) {
    this.style.opacity = '';
    
    // remove drag-over class
    document.querySelectorAll('.explore-team-member').forEach(el => {
        el.classList.remove('drag-over');
    });
}

// ========== TOUCH (MOBILE) ==========

function handleTouchStart(e) {
    // No iniciar drag si se toca el item holder
    if (e.target.closest('.team-held-item')) {
        touchDragElement = e.target.closest('.team-held-item');
    } else {
        touchDragElement = this;
    }    
    touchDragElement = this;
    draggedSlot = this.dataset.slot;
    isTouchDragging = false;
    canStartDrag = false;
    
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    
    touchHoldTimeout = setTimeout(() => {
        canStartDrag = true;
        // haptic feedback if available
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        touchDragElement.style.transform = 'scale(1.02)';
        touchDragElement.style.transition = 'transform 0.1s';
    }, 250);
}

function handleTouchMove(e) {
    if (!touchDragElement) return;
    
    const touch = e.touches[0];
    const moveX = touch.clientX - touchStartX;
    const moveY = touch.clientY - touchStartY;
    const distance = Math.sqrt(moveX * moveX + moveY * moveY);
    
    // Si se mueve mucho antes del delay, cancelar el drag y permitir scroll
    if (!canStartDrag && distance > 10) {
        clearTimeout(touchHoldTimeout);
        touchDragElement.style.transform = '';
        touchDragElement = null;
        draggedSlot = null;
        return;
    }
    
    // Solo permitir drag si ya pasó el delay
    if (!canStartDrag) return;
    
    // Activar drag
    if (!isTouchDragging) {
        isTouchDragging = true;
        e.preventDefault(); // Prevenir scroll
        
        // Crear elemento ghost
        createGhostElement(touchDragElement, touch.clientX, touch.clientY);
        
        // Reducir opacidad del original
        touchDragElement.style.opacity = '0.4';
        touchDragElement.style.transform = '';
    }
    
    e.preventDefault(); // Prevenir scroll mientras arrastramos
    
    // Mover el ghost
    if (ghostElement) {
       // if dragging item, don't apply style offset
        ghostElement.style.left = touch.clientX - (ghostElement.className === 'team-held-item' ? 0 : ghostElement.offsetWidth / 2) + 'px';
        ghostElement.style.top = touch.clientY - (ghostElement.className === 'team-held-item' ? 0 : ghostElement.offsetHeight / 2) + 'px';
    }
    
    // Detectar sobre qué elemento estamos
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const teamMemberBelow = elementBelow?.closest('.explore-team-member');
    
    // Remover highlight de todos
    document.querySelectorAll('.explore-team-member').forEach(el => {
        el.classList.remove('drag-over');
    });
    
    // Agregar highlight al objetivo
    if (teamMemberBelow && teamMemberBelow !== touchDragElement) {
        teamMemberBelow.classList.add('drag-over');
    }
}

function handleTouchEnd(e) {
    // Limpiar timeout si existe
    clearTimeout(touchHoldTimeout);
    
    if (!isTouchDragging) {
        // Fue un tap, no un drag - dejar que el click se ejecute
        if (touchDragElement) {
            touchDragElement.style.transform = '';
            touchDragElement.style.transition = '';
        }
        touchDragElement = null;
        draggedSlot = null;
        canStartDrag = false;
        return;
    }
    
    e.preventDefault(); // Prevenir click después de drag
    
    const touch = e.changedTouches[0];
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    const targetElement = elementBelow?.closest('.explore-team-member');
    
    if (targetElement && targetElement !== touchDragElement) {
        const targetSlot = targetElement.dataset.slot;
        const isDraggedItem = this.className === 'team-held-item';

        if (isDraggedItem) {
            swapItemSlots(draggedSlot, targetSlot);
        } else {
            swapTeamSlots(draggedSlot, targetSlot);
        }
    }
    
    // Limpiar
    if (ghostElement) {
        ghostElement.remove();
        ghostElement = null;
    }
    
    if (touchDragElement) {
        touchDragElement.style.opacity = '';
        touchDragElement.style.transform = '';
        touchDragElement.style.transition = '';
    }
    
    document.querySelectorAll('.explore-team-member').forEach(el => {
        el.classList.remove('drag-over');
    });
    
    touchDragElement = null;
    draggedSlot = null;
    isTouchDragging = false;
    canStartDrag = false;
}

function createGhostElement(element, x, y) {
    ghostElement = element.cloneNode(true);
    ghostElement.style.position = 'fixed';
    ghostElement.style.pointerEvents = 'none';
    ghostElement.style.opacity = '0.8';
    ghostElement.style.zIndex = '9999';
    ghostElement.style.transform = 'scale(1.05)';
    ghostElement.style.transition = 'none';
    ghostElement.style.left = x - (element.offsetWidth / 2) + 'px';
    ghostElement.style.top = y - (element.offsetHeight / 2) + 'px';
    ghostElement.style.width = element.offsetWidth + 'px';
    
    document.body.appendChild(ghostElement);
}

function swapTeamSlots(slot1, slot2) {
    const currentTeam = saved.previewTeams[saved.currentPreviewTeam];
    
    const temp = currentTeam[slot1];
    currentTeam[slot1] = currentTeam[slot2];
    currentTeam[slot2] = temp;
    updatePreviewTeam();
}


function swapItemSlots(slot1, slot2) {
    const currentTeam = saved.previewTeams[saved.currentPreviewTeam];

    const temp = currentTeam[slot1].item;
    currentTeam[slot1].item = currentTeam?.[slot2]?.item;
    currentTeam[slot2].item = temp;
    updatePreviewTeam();
}

















