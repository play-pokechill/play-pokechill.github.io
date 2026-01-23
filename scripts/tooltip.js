



function closePkmnEditor(){

    //setPkmnTeam()
    voidAnimation("pkmn-editor","tooltipBoxAppear 0.2s reverse 1 ease-in")


    setTimeout(() => {
    document.getElementById("pkmn-editor-movepool").innerHTML = ""
    document.getElementById("pkmn-editor-current-moves").innerHTML = ""
    document.getElementById("pkmn-editor").style.display = "none"
    }, 150);




}



function closeTooltip() {
    if (document.getElementById("team-name-field") && 
        document.getElementById("team-name-field").value != "") {
        saved.previewTeams[saved.currentPreviewTeam].name = 
            document.getElementById("team-name-field").value;
        changeTeamNames();
    }
    
    //remove current stack
    tooltipStack.pop();
    
    //if theres previous
    if (tooltipStack.length > 0) {
        const prev = tooltipStack[tooltipStack.length - 1];
        tooltipStack.pop();
        tooltipData(prev.category, prev.ttdata);
    } else {
        // close completely
        voidAnimation("tooltipBackground", "tooltipBoxAppear 0.2s reverse 1 ease-in");
        setTimeout(() => {
            document.getElementById("tooltipTop").style.display = "flex";
            document.getElementById("tooltipTitle").style.display = "inline";
            document.getElementById("tooltipMid").style.display = "inline";
            document.getElementById("tooltipBottom").style.display = "inline";
            document.getElementById("tooltipTop").innerHTML = "";
            document.getElementById("tooltipTitle").innerHTML = "";
            document.getElementById("tooltipMid").innerHTML = "";
            document.getElementById("tooltipBottom").innerHTML = "";
            document.getElementById("tooltipBackground").style.display = "none";
        }, 150);
    }
}


function openTooltip(){
    voidAnimation("tooltipBackground","tooltipBoxAppear 0.2s 1")
    document.getElementById("tooltipBackground").style.display = "flex"
}


document.getElementById("tooltipBackground").addEventListener("click", (e) => {
    if (e.target.id === "tooltipBackground" && !document.getElementById("prevent-tooltip-exit")) {
        closeTooltip();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !document.getElementById("prevent-tooltip-exit")) {
        closeTooltip();
    }
});




let moveSlotReplace = undefined 

let tooltipStack = [];

function tooltipData(category, ttdata){


    tooltipStack.push({ category, ttdata });

    if (category == "area") {



        document.getElementById("tooltipTop").style.display = "none";
        document.getElementById("tooltipTitle").style.display = "Area Information";
        document.getElementById("tooltipMid").style.display = "none";
        document.getElementById("tooltipBottom").innerHTML = `<div id="area-preview-spawns"><strong>Area Pokemon</strong></div>`;
        const uncatchableIcon = `<svg fill="currentColor" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1126 1126"><defs><style>.cls-1,.cls-2{fill:none;}.cls-2{stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:100px;}</style></defs><path fill="currentColor" class="cls-1" d="M646.27,1091.94c48.25,3.71,96,.07,142.34-13.67,136.22-40.33,229.87-127.25,281-259.63,12.92-33.47,19.88-68.48,23.33-104.17.33-3.46.83-6.17-4.62-6.16q-98,.3-196,0c-3.42,0-4.7,1.17-5.18,4.31-.71,4.59-1.53,9.17-2.63,13.68-27.08,111-135,180.24-247.43,158.68q-3-.57-5.9-1.23L474.51,1040.42C526.88,1070.09,584.27,1087.18,646.27,1091.94Z" transform="translate(-109.65 -105.51)"/><path fill="currentColor" class="cls-1" d="M678,530.53c-80.91,0-147,66-146.91,146.59h0c0,52.23,27.78,98.34,69.26,124.36L802.4,599.39A147.31,147.31,0,0,0,678,530.53Z" transform="translate(-109.65 -105.51)"/><path class="cls-1" d="M468.93,713.13c-.58-3.44-1.83-4.87-5.73-4.85-32.53.24-65,.16-97.52.16h-96c-7.34,0-7.35,0-6.51,7.5a454.8,454.8,0,0,0,7.62,48.7q30.69,138.51,137.28,229.09L553.24,848.55A211.37,211.37,0,0,1,468.93,713.13Z" transform="translate(-109.65 -105.51)"/><path class="cls-1" d="M824.25,690.68,691.74,823.19C761.64,816.6,817.73,760.54,824.25,690.68Z" transform="translate(-109.65 -105.51)"/><path d="M270.79,764.64a454.8,454.8,0,0,1-7.62-48.7c-.84-7.5-.83-7.5,6.51-7.5h96c32.49,0,65,.08,97.52-.16,3.9,0,5.15,1.41,5.73,4.85a211.37,211.37,0,0,0,84.31,135.42l47.07-47.07c-41.48-26-69.24-72.13-69.26-124.36h0c0-80.62,66-146.63,146.91-146.59A147.31,147.31,0,0,1,802.4,599.39L1047,354.81Q961.93,256.53,828.6,211.49c-35.72-12.07-72.59-18.83-110.19-22a480.64,480.64,0,0,0-103.69,2.35c-83,11-158.7,40.81-226.1,90.55Q253.71,382,206.71,542.94a460.76,460.76,0,0,0-17.86,106.37c-.2,2-.5,3.93-.89,5.86v43c1.7,6.66,1.21,13.52,1.76,20.28,3.47,42.11,11.73,83.28,26.63,122.76q47.33,125.31,139.23,205l52.49-52.48Q301.48,903.15,270.79,764.64Z" transform="translate(-109.65 -105.51)"/><path d="M691.74,823.19l-60.56,60.56q2.93.66,5.9,1.23C749.51,906.54,857.43,837.3,884.51,726.3c1.1-4.51,1.92-9.09,2.63-13.68.48-3.14,1.76-4.31,5.18-4.31q98,.3,196,0c5.45,0,5,2.7,4.62,6.16-3.45,35.69-10.41,70.7-23.33,104.17-51.13,132.38-144.78,219.3-281,259.63-46.34,13.74-94.09,17.38-142.34,13.67-62-4.76-119.39-21.85-171.76-51.52l-53.35,53.35a546.1,546.1,0,0,0,106.31,49c41,14,83.37,21.17,126.64,23.08,1.64.08,3.36-.18,4.85.82h38c7-1.8,14.21-1.18,21.31-1.78q149.68-12.5,266.38-106.38,121.33-98,164.66-247.69a464.67,464.67,0,0,0,17.81-106.33c.1-2.11.58-4.21.88-6.31v-42c-1.7-6.82-1.22-13.85-1.8-20.77-4.43-53.08-16.73-104.29-38.6-152.8a559.5,559.5,0,0,0-32.91-62.39L824.25,690.68C817.73,760.54,761.64,816.6,691.74,823.19Z" transform="translate(-109.65 -105.51)"/><line class="cls-2" x1="50" y1="1076" x2="1076" y2="50"/></svg>`
        if (areas[ttdata].type == "dungeon") { document.getElementById("tooltipBottom").innerHTML = `<div id="area-preview-spawns"><strong>Area Pokemon ${uncatchableIcon}</strong></div>`; }
        if (areas[ttdata].uncatchable) { document.getElementById("tooltipBottom").innerHTML = `<div id="area-preview-spawns"><strong>Area Pokemon ${uncatchableIcon}</strong></div>`; }

        const spawns = areas[ttdata].spawns;

        for (const [listName, list] of Object.entries(spawns)) {
        for (const item of list) {
        const div = document.createElement("div");
        let tag = "";

        if (listName === "uncommon") { tag = `<span>Uncommon</span>`; }
        if (listName === "rare") { tag = `<span>Rare!</span>`; }

        if (pkmn[item.id].shiny && areas[ttdata].uncatchable!=true && areas[ttdata].type != "dungeon") tag += `<div class="wild-shiny-tag">✦</div>`



        div.className = "area-preview";
        if (pkmn[item.id].caught===0 && areas[ttdata].type !== "dungeon" && areas[ttdata].uncatchable!=true) div.classList.add('hidden-pkmn')
        if (pkmn[item.id].caught>0 || areas[ttdata].type == "dungeon" || areas[ttdata].uncatchable) div.dataset.pkmn = item.id


        div.innerHTML = `<img class="sprite-trim" src="img/pkmn/sprite/${item.id}.png">` + tag;
        if (pkmn[item.id].shiny && areas[ttdata].uncatchable!=true && areas[ttdata].type != "dungeon") div.innerHTML = `<img class="sprite-trim" src="img/pkmn/shiny/${item.id}.png">` + tag;
        document.getElementById("area-preview-spawns").appendChild(div);
        }}

        if (areas[ttdata].drops !== undefined) {

        

        document.getElementById("tooltipMid").innerHTML = `<div id="area-preview-items"><strong>Area Items</strong></div>`;

        const drops = areas[ttdata].drops;

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


    if (category == "trainer") {


        document.getElementById("tooltipTop").style.display = "none";
        document.getElementById("tooltipTitle").style.display = "Area Information";
        document.getElementById("tooltipMid").style.display = "none";
        document.getElementById("tooltipBottom").innerHTML = `<div id="area-preview-spawns"><strong>Team Preview</strong></div>`;


        const spawns = [];
        if (areas[ttdata].team.slot1) spawns.push(areas[ttdata].team.slot1.id)
        if (areas[ttdata].team.slot2) spawns.push(areas[ttdata].team.slot2.id)
        if (areas[ttdata].team.slot3) spawns.push(areas[ttdata].team.slot3.id)
        if (areas[ttdata].team.slot4) spawns.push(areas[ttdata].team.slot4.id)
        if (areas[ttdata].team.slot5) spawns.push(areas[ttdata].team.slot5.id)
        if (areas[ttdata].team.slot6) spawns.push(areas[ttdata].team.slot6.id)
        
        for (const item of spawns) {

        let tag = ""
        if (pkmn[item].shiny && areas[ttdata].type != "vs" && areas[ttdata].type != "frontier") tag += `<div class="wild-shiny-tag">✦</div>`


        const div = document.createElement("div");
        div.className = "area-preview";
        div.dataset.pkmn = item
        div.innerHTML = `<img class="sprite-trim" src="img/pkmn/sprite/${item}.png">`;
        if (pkmn[item].shiny && areas[ttdata].type != "vs" && areas[ttdata].type != "frontier") div.innerHTML = `<img class="sprite-trim" src="img/pkmn/shiny/${item}.png"> ${tag}`;
        document.getElementById("area-preview-spawns").appendChild(div);
        }

        if (areas[ttdata].reward !== undefined) {

        

        document.getElementById("tooltipMid").innerHTML = `<div id="area-preview-items"><strong>Victory Rewards</strong></div>`;

        const rewards = areas[ttdata].reward;

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

    if (category == "buff") {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `${format(ttdata)}`
        document.getElementById("tooltipMid").style.display = `none`
        if (ttdata==="burn") document.getElementById("tooltipBottom").innerHTML = `Decreases Physical Attack by 50% and deals damage every turn`
        if (ttdata==="poisoned") document.getElementById("tooltipBottom").innerHTML = `Decreases Special Attack by 50% and deals damage every turn`
        if (ttdata==="sleep") document.getElementById("tooltipBottom").innerHTML = `Moves fail to deal damage`
        if (ttdata==="freeze") document.getElementById("tooltipBottom").innerHTML = `Moves fail to deal damage`
        if (ttdata==="confused") document.getElementById("tooltipBottom").innerHTML = `50% chance for moves to fail to deal damage`
        if (ttdata==="paralysis") document.getElementById("tooltipBottom").innerHTML = `25% chance for moves to fail to deal damage and Speed is reduced by 75%`
        
        if (ttdata==="sunny") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Fire-Type moves by 75% and decreases the damage of Water-Type moves by 50%`
        if (ttdata==="rainy") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Water-Type moves by 75% and decreases the damage of Fire-Type moves by 50%`
        if (ttdata==="sandstorm") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Rock and Ground-Type moves by 75%`
        if (ttdata==="hail") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Ice-Type moves by 75%`
        if (ttdata==="foggy") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Dark and Ghost-Type moves by 75%`
        if (ttdata==="electricTerrain") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Electric and Steel-Type moves by 75%`
        if (ttdata==="grassyTerrain") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Grass and Bug-Type moves by 75%`
        if (ttdata==="mistyTerrain") document.getElementById("tooltipBottom").innerHTML = `Increases the damage of Fairy and Psychic-Type moves by 75%`

        
        
        
        openTooltip()
    }

    if (category == "help") {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipMid").style.display = `none`

        if (ttdata === `VS`) document.getElementById("tooltipTitle").innerHTML = `VS Trainers`
        if (ttdata === `VS`) document.getElementById("tooltipBottom").innerHTML = `Defeat increasingly difficult trainers and carve yourself a path of fame! You may unlock additional areas to explore as your progress`

        if (ttdata === `Frontier`) document.getElementById("tooltipTitle").innerHTML = `Battle Frontier`
        if (ttdata === `Frontier`) document.getElementById("tooltipBottom").innerHTML = `The Battle Frontier houses different types of challenges under a specific division restriction that rotates every three days. Trainers fought here will reset every day`

        if (ttdata === `Spiral`) document.getElementById("tooltipTitle").innerHTML = `Spiraling Tower`
        if (ttdata === `Spiral`) document.getElementById("tooltipBottom").innerHTML = `The Spiraling Tower is an infinitely-scaling challenge in which every Pokemon defeated will increase the difficulty. Type Immunities inside this challenge will be instead converted to resistances<br><br>Every time you enter the tower, you will start from floor 1, but you can try as many times as you'd like<br><br>Your highest reached floor will be saved, and reset when the league rotation changes. You will be rewarded for every new highest floor reached at the end of the battle`
        if (ttdata === `Spiral`) document.getElementById("tooltipMid").style.display = `inline`
        if (ttdata === `Spiral`) document.getElementById("tooltipMid").innerHTML = `Current Type Rotation: ${format(saved.currentSpiralingType)}`

        if (ttdata === `Wild Areas`) document.getElementById("tooltipTitle").innerHTML = `Wild Areas`
        if (ttdata === `Wild Areas`) document.getElementById("tooltipBottom").innerHTML = `All Pokemon in Wild Areas might be caught by defeating them. Wild Areas rotate every day, so be sure to check out what can be caught today!`

        if (ttdata === `Dungeons`) document.getElementById("tooltipTitle").innerHTML = `Dungeons`
        if (ttdata === `Dungeons`) document.getElementById("tooltipBottom").innerHTML = `Pokemon in Dungeons can't be caught, but they can drop useful items and EXP. Dungeons rotate every day aswell`

        if (ttdata === `Training`) document.getElementById("tooltipTitle").innerHTML = `Training`
        if (ttdata === `Training`) document.getElementById("tooltipBottom").innerHTML = `Challenge your Pokemon against waves of foes in order to get stronger. You will naturally have typing advantage against Pokemon fought against, and their level will scale to yours. Type Immunities inside training will be instead converted to resistances.<br><br>Failing a training will result in no gains`

        if (ttdata === `Events`) document.getElementById("tooltipTitle").innerHTML = `Events`
        if (ttdata === `Events`) document.getElementById("tooltipBottom").innerHTML = `Events might house both items and Pokemon to get. Events marked with a skull signify powerful foes that usually require an item to catch (The item wont be consumed if failed to defeat) that can be acquired in the collection events. All Events rotate every three days.`

        if (ttdata === `Genetics`) document.getElementById("tooltipTitle").innerHTML = `Genetics`
        if (ttdata === `Genetics`) document.getElementById("tooltipBottom").innerHTML = `With genetics, you can modify the parameters of a level 100 Pokemon (the host) and influence them based on another Pokemon (the sample)<br><br>Doing so, the level of the host will reset back to 1 while keeping all 4 of its currently selected moves, and a chance to increase its IV's<br><br>Genetics can also be influenced by using genetic-aiding items, which you can use at the end of the operation<br><br>You can find more information about the specifics of genetics in the guide section`

        if (ttdata === `Pokerus`) document.getElementById("tooltipTitle").innerHTML = `Pokerus`
        if (ttdata === `Pokerus`) document.getElementById("tooltipBottom").innerHTML = `Every 12 hours, some of your Pokemon will contract Pokerus. This virus is entirely beneficial, and will add one level of compatibility to the Pokemon in genetics when used as a host`

        if (ttdata === `settingsNewPkmn`) document.getElementById("tooltipTitle").innerHTML = `Setting`
        if (ttdata === `settingsNewPkmn`) document.getElementById("tooltipBottom").innerHTML = `Automatically hides got Pokemon that are not new after a battle. Excluded from this setting are: New Pokemon, Iv's Ups and Shiny Pokemon`

        if (ttdata === `settingsAlternateWild`) document.getElementById("tooltipTitle").innerHTML = `Setting`
        if (ttdata === `settingsAlternateWild`) document.getElementById("tooltipBottom").innerHTML = `Decreases the current Wild Area rotation by -1. Useful if you missed yesterday's rotation, or if your schedule doesnt line up with my game`


        if (ttdata === `searchDictionary`) document.getElementById("tooltipTitle").innerHTML = `Keywords`
        if (ttdata === `searchDictionary`) document.getElementById("tooltipBottom").innerHTML = `Operators:<br>![keyword]: Exclude from search<br>[keywordA] or [keywordB]: Search keywordA OR keywordB<br>[keywordA] [keywordB]: Search for keywordA AND keywordB<br><br>Pokemon keywords:<br>unobtainable, wild, park, event, frontier, shiny, caught, [type], [hidden ability]<br><br>Move keywords:<br>physical, special, [type], [ability]`
        if (ttdata === `searchDictionary`) document.getElementById("dictionary-search").blur()


        if (ttdata === `searchPokedex`) document.getElementById("tooltipTitle").innerHTML = `Keywords`
        if (ttdata === `searchPokedex`) document.getElementById("tooltipBottom").innerHTML = `Operators:<br>![keyword]: Exclude from search<br>[keywordA] or [keywordB]: Search keywordA OR keywordB<br>[keywordA] [keywordB]: Search for keywordA AND keywordB<br><br>Keywords:<br>shiny, pokerus, [type], [ability], [hidden ability], [level], [move]`
        if (ttdata === `searchPokedex`) document.getElementById("pokedex-search").blur()

        if (ttdata === `Main Challenges`) document.getElementById("tooltipTitle").innerHTML = `Main Challenges`
        if (ttdata === `Main Challenges`) document.getElementById("tooltipBottom").innerHTML = `Story-driven battles and curated challenges live here. More Main Challenges are coming soon.`

        if (ttdata === `Custom Challenges`) document.getElementById("tooltipTitle").innerHTML = `Custom Challenges`
        if (ttdata === `Custom Challenges`) document.getElementById("tooltipBottom").innerHTML = `Create custom battles from your own pools and enemy teams. Import and export challenge codes to share them.`




        openTooltip()
    }




    if (category== "ability") {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = format(ttdata)
        document.getElementById("tooltipTitle").style.display = `inline`
        document.getElementById("tooltipMid").innerHTML = `Common Ability`
        if (ability[ttdata].rarity===2) document.getElementById("tooltipMid").innerHTML = `Uncommon Ability`
        if (ability[ttdata].rarity===3) document.getElementById("tooltipMid").innerHTML = `Rare Ability`
        document.getElementById("tooltipBottom").innerHTML = ability[ttdata].info()
        openTooltip()
    }


    if (category=="ribbon") {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = ribbon[ttdata].name
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = ribbon[ttdata].description
        if (ttdata==`tower1` && pkmn[currentEditedPkmn].recordSpiraling!=undefined) document.getElementById("tooltipMid").innerHTML +=`<br>(Highest Spiraling Tower floor reached: ${pkmn[currentEditedPkmn].recordSpiraling})`
        openTooltip()
    }


    if (category=="training") {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = training[ttdata].name
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = training[ttdata].info
        openTooltip()
    }


    if (category=="move") {

        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `inline`
        document.getElementById("tooltipTop").innerHTML = `<img src="img/items/tm${format(move[ttdata].type)}.png">`
        document.getElementById("tooltipTitle").innerHTML = format(ttdata)
        document.getElementById("tooltipMid").style.display = "inline"


        const affectedAbilities = []
        if (move[ttdata].affectedBy !== undefined) {
        affectedAbilities.push(...move[ttdata].affectedBy)
        }            
        const restrictedIcon = `<svg style="color:${returnTypeColor(move[ttdata].type)}; margin: -0.3rem 0rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69c0-5.291-3.873-8.815-6.658-10.434c-.619-.36-1.342.113-1.342.828v1.828c0 1.442-.606 4.074-2.29 5.169c-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11C3 20.221 8.289 22 10.933 22q.232 0 .484-.015c.446-.056 0 .099 1.415-.185" opacity="0.5"/><path fill="currentColor" d="M8 18.444c0 2.62 2.111 3.43 3.417 3.542c.446-.056 0 .099 1.415-.185C13.871 21.434 15 20.492 15 18.444c0-1.297-.819-2.098-1.46-2.473c-.196-.115-.424.03-.441.256c-.056.718-.746 1.29-1.215.744c-.415-.482-.59-1.187-.59-1.638v-.59c0-.354-.357-.59-.663-.408C9.495 15.008 8 16.395 8 18.445"/></svg>`


        let affectedText = ""
        if (affectedAbilities.length>0) affectedText =`<br>Affected by ${joinWithAnd(affectedAbilities)}`
        if (move[ttdata].restricted) affectedText +=`<br>This move is restricted (${restrictedIcon}) and only one of them can be present in the active moves at a time`


        document.getElementById("tooltipMid").innerHTML = `${format(move[ttdata].type)}, ${move[ttdata].power} Power, ${format(move[ttdata].split)}${affectedText}`
        if (move[ttdata].info == undefined) document.getElementById("tooltipBottom").innerHTML = `No additional effects`
        else document.getElementById("tooltipBottom").innerHTML = move[ttdata].info()
        openTooltip()

    }

    if (category=="item") {

        document.getElementById("tooltipTop").style.display = "flex"
        if (item[ttdata].type !== "tm") document.getElementById("tooltipTop").innerHTML = `<img src="img/items/${ttdata}.png">`
        if (item[ttdata].type == "tm") document.getElementById("tooltipTop").innerHTML = `<img src="img/items/tm${format(move[item[ttdata].move].type)}.png">`
        
        document.getElementById("tooltipTitle").innerHTML = format(ttdata)
        document.getElementById("tooltipBottom").innerHTML = item[ttdata].info()
        

        if (item[ttdata].type==="held"){
            document.getElementById("tooltipTitle").innerHTML = format(ttdata) + `<br>Level ${returnItemLevel(ttdata)}`
            document.getElementById("tooltipMid").innerHTML = `${returnItemLevel(ttdata,"stars")}<br>${item[ttdata].got} in total ${returnItemLevel(ttdata,"left")}`
        }

        else document.getElementById("tooltipMid").innerHTML = `${item[ttdata].got} in bag`

        openTooltip()

    }


    if (category == "pkmn") {

        document.getElementById("tooltipTop").style.display = "none";
        document.getElementById("tooltipTitle").style.display = "none";
        let hiddenAbility = `WIP`
        let signatureMove = ""
        if (pkmn[ttdata].signature != undefined) signatureMove = `<div id="inpect-pkmn-signature" style="box-shadow: none; outline:none"> <svg style="margin: 0 0.3rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg> Signature Move: ${format(pkmn[ttdata].signature.id)} </div>`
        if (pkmn[ttdata].hiddenAbility != undefined) hiddenAbility = format(pkmn[ttdata].hiddenAbility.id)

        document.getElementById("tooltipMid").innerHTML = `${returnTypeMultipliers(pkmn[ttdata])}`;

        document.getElementById("tooltipBottom").innerHTML = `
        <div id="tooltip-inspect-pkmn">
            
        <div style="display: flex;">

            <div class="pkmn-stats-panel-info" style="display:flex; flex-direction:column;"> 
            
            <strong  class="explore-pkmn-level">${format(ttdata)}</strong>
            <strong  class="inspect-pkmn-types" style="background:transparent;">${returnPkmnTypes(ttdata)}</strong>
            <div class="explore-sprite" id="inspect-pkmn-image">
            <img  class="sprite-trim" style="animation: pkmn-active 0.5s infinite; z-index: 1;" src="img/pkmn/sprite/${ttdata}.png">
            <img style="scale:1;animation: none; position: absolute; opacity: 0.3; width: 4.5rem; z-index: 0; transform: translateY(2.5rem);" src="img/resources/pkmn-shadow.png">
            </div>
            
            </div>
             <div class="explore-header-infobox" style="background: transparent;     padding-left: 2rem;">
                <div class="pkmn-stats-panel">
                    <div class="pkmn-stats-panel-bst">
                   
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0.3" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"/></svg>
                        ${returnStatDots(ttdata, "hp")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.975l1.475-1.475H15.5v-2.025L16.975 12L15.5 10.525V8.5h-2.025L12 7.025L10.525 8.5H8.5v2.025L7.025 12L8.5 13.475V15.5h2.025zm0 6.325L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65z"/></svg>
                        ${returnStatDots(ttdata, "atk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11.991c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473V8l-9 3z"/><path fill="currentColor" d="M14.101 21.527C16.761 20.365 21 17.63 21 11.991V11l-9-3v14c1.02 0 1.38-.158 2.101-.473M8.838 2.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082C3 5.62 3 7.22 3 10.417V11l9-3V2c-.811 0-1.595.268-3.162.805" opacity="0.5"/><path fill="currentColor" d="m15.735 3l-.573-.195C13.595 2.268 12.812 2 12 2v6l9 3v-.583c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081"/></svg>
                        ${returnStatDots(ttdata, "def")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M306.72 22.688c-87.212.763-181.58 53.14-238.19 140.406c-.944 1.46-1.677 3.068-2.593 4.53c.455-.397.86-.917 1.313-1.31c-40.253 56.984-35.183 136.503 15.813 187.5c54.553 54.552 141.745 56.65 199.093 6.78c-4.676 6.576-9.916 13.137-15.812 19.03c-57 57-149.53 57-206.53 0c-17.814-17.81-30.103-38.73-36.783-61.312c2.928 65.605 34.97 122.74 93.907 151.97c103.593 51.374 250.2-2.8 326.875-121C510.904 245.856 502.47 127.374 429.938 65c-10.36-8.91-22.206-16.483-35.156-22.906c-25.897-12.844-54.454-19.11-83.905-19.407c-1.38-.013-2.772-.012-4.156 0zm1.06 62.406c47.14-.705 82.63 23.414 90.376 58.906v.03c1.417 6.492 1.806 13.565 1.344 21.032c-3.682 59.742-68.786 126.655-145.438 149.563c-.945.282-1.872.422-2.812.688l.938-.47c-37.843 12.718-74.086-.708-84.438-33.624c-7.03-22.36-.468-48.544 15.25-70.408c-1.695 7.2-.05 13.91 5.344 18.375c10.643 8.816 31.83 5.575 47.312-7.25c15.483-12.824 19.394-30.37 8.75-39.187c-6.294-5.214-16.287-6.21-26.594-3.5l.532-.313c-.755.257-1.52.54-2.28.813c-.344.123-.69.217-1.033.344a54 54 0 0 0-8 3.344c-.656.307-1.315.61-1.968.937c-42.374 21.24-83.226 68.335-71.656 105.125c3.616 11.497 10.213 20.614 19.094 27.094c-30.253-10.44-48.35-34.526-46.563-68.53c3.682-70.837 83.193-133.31 159.844-156.22c14.673-4.385 28.802-6.553 42-6.75z"/></svg>
                        ${returnStatDots(ttdata, "satk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="m311.874 171.817l65.452-99.754l-.865-.367l50.206 12.144l-.221 17.259l.049 93.284l.119 25.42c.562 109.632-58.957 176.828-107.749 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.403-2.682l-5.725-2.644l-7.222-3.591l-10.821-5.871l-12.434-7.468l-10.839-7.169c-48.347-33.416-112.698-97.735-117.398-205.151l-.274-12.587V84.09L256.45 42.668l22.726 5.497l-62.978 142.683l48.901 20.757l-80.615 154.048l176.882-172.827z" clip-rule="evenodd"/></svg>
                        ${returnStatDots(ttdata, "sdef")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 19v-2H5.675q-.5 0-.7-.45t.125-.8l6.15-6.9q.3-.35.75-.35t.75.35l6.15 6.9q.325.35.125.8t-.7.45H15v2q0 .425-.288.713T14 20h-4q-.425 0-.712-.288T9 19m3-13l-5.025 5.675q-.15.15-.35.238t-.4.087q-.65 0-.912-.575t.162-1.075l5.775-6.5q.3-.35.75-.35t.75.35l5.775 6.5q.425.5.163 1.075t-.913.575q-.2 0-.4-.075t-.35-.25z"/></svg>
                         ${ returnStatDots(ttdata, "spe")}
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
                        ${returnDivisionLetter(returnPkmnDivision(pkmn[ttdata]))}</div>


                        

            <div style="box-shadow: none; outline:none; cursor:default">
                        Caught: ${pkmn[ttdata].caught}
                </div>

                </div>

                

                
                
            
        `
        if (pkmn[ttdata].hiddenAbility != undefined) document.getElementById("inpect-pkmn-ability").dataset.ability = pkmn[ttdata].hiddenAbility.id
        if (pkmn[ttdata].signature != undefined) document.getElementById("inpect-pkmn-signature").dataset.move = pkmn[ttdata].signature.id

        if (pkmn[ttdata].caught>0) {document.getElementById(`inspect-pkmn-image`).dataset.pkmnEditor = pkmn[ttdata].id;}


        openTooltip()

    }


    if (category == "pkmnEditor") {





        const poke = pkmn[ttdata]

        voidAnimation("pkmn-editor","tooltipBoxAppear 0.2s 1")
        document.getElementById("pkmn-editor").style.display = "flex"



        if (poke.signature!==undefined && poke.level == 100 && !poke.movepool.includes(poke.signature.id)) poke.movepool.push(poke.signature.id)

        

        currentEditedPkmn = poke.id
        tooltipStack.length = 0;
        closeTooltip()
        
    if (pkmn[currentEditedPkmn].tag) document.getElementById("explore-pkmn-tag").value = pkmn[currentEditedPkmn].tag;
    else document.getElementById("explore-pkmn-tag").value = "none";

        document.getElementById("pkmn-shiny-switch").style.display = "none"
        if (pkmn[poke.id].shiny){
        document.getElementById("pkmn-shiny-switch").style.display = "flex"
        }

        let nameTag =""
        if (pkmn[poke.id].pokerus) nameTag = `<span data-help="Pokerus"><span style="color:white; background:${returnTypeColor("poison")}; padding:0 0.3rem; border-radius:3px; margin-left:0.3rem; cursor:help;">PKRS</span></span>`

        if (pkmn[poke.id].shiny && pkmn[poke.id].shinyDisabled!=true) document.getElementById("pkmn-editor-sprite").src = `img/pkmn/shiny/${poke.id}.png` 
        else document.getElementById("pkmn-editor-sprite").src = `img/pkmn/sprite/${poke.id}.png`
        document.getElementById("pkmn-editor-name").innerHTML = `${format(poke.id)}${nameTag}`
        if (pkmn[poke.id].shiny) document.getElementById("pkmn-editor-name").innerHTML = `${format(poke.id)} <span style="color:#FF4671">✦</span>${nameTag}`
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
        if (pkmn[ttdata].evolve && pkmn[ttdata].evolve()[1].level>0){
            evolutionTag = `<span>Unlocks ${format(pkmn[ttdata].evolve()[1].pkmn.id)} at level ${pkmn[ttdata].evolve()[1].level} ❌</span>`
            if (pkmn[ pkmn[ttdata].evolve()[1].pkmn.id ].caught>0) evolutionTag = `<span>Unlocks ${format(pkmn[ttdata].evolve()[1].pkmn.id)} at level ${pkmn[ttdata].evolve()[1].level} ✔️</span>`
        }

        //if by item
        if (pkmn[ttdata].evolve){
        for (const evo in pkmn[ttdata]?.evolve()) {
        if (pkmn[ttdata].evolve()[evo].level!==undefined) continue
        if (pkmn[ttdata].evolve()[evo].item==undefined || item[pkmn[ttdata].evolve()[evo].item.id] == undefined) continue
        let levelRequired = wildAreaLevel2
        if (pkmn[ttdata].evolve()[evo].item.id == "linkStone") levelRequired = wildAreaLevel4
        if (pkmn[ttdata].evolve()[evo].item.id == "oddRock") levelRequired = wildAreaLevel4
        if (pkmn[ttdata].evolve()[evo].pkmn.id.slice(0, 4) === "mega") levelRequired = 100
        if (pkmn[ pkmn[ttdata].evolve()[evo].pkmn.id ].caught>0) evolutionTag += `<span>Unlocks ${format(pkmn[ttdata].evolve()[evo].pkmn.id)} by using a ${format(item[pkmn[ttdata].evolve()[evo].item.id].id)} at level ${levelRequired}+ ✔️</span>`
        else evolutionTag += `<span>Unlocks ${format(pkmn[ttdata].evolve()[evo].pkmn.id)} by using a ${format(item[pkmn[ttdata].evolve()[evo].item.id].id)} at level ${levelRequired}+ ❌</span>`

        }
        }
        

        document.getElementById("pkmn-editor-extra-info").innerHTML = evolutionTag

        document.getElementById("pkmn-editor-stats").innerHTML = `
        <div style="display:flex; justify-content:start; align-items:start; flex-direction:column">
        <div class="pkmn-stats-panel-bst">
                    <span class="editor-stat-number" >${((pkmn[ttdata].bst.hp * 30) * Math.pow(1.1, pkmn[ttdata].ivs.hp)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0.3" d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"/></svg>
                        ${returnStatDots(poke.id, "hp")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <span class="editor-stat-number" >${((pkmn[ttdata].bst.atk * 30) * Math.pow(1.1, pkmn[ttdata].ivs.atk)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.975l1.475-1.475H15.5v-2.025L16.975 12L15.5 10.525V8.5h-2.025L12 7.025L10.525 8.5H8.5v2.025L7.025 12L8.5 13.475V15.5h2.025zm0 6.325L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65z"/></svg>
                        ${returnStatDots(poke.id, "atk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <span class="editor-stat-number" >${((pkmn[ttdata].bst.def * 30) * Math.pow(1.1, pkmn[ttdata].ivs.def)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 11.991c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473V8l-9 3z"/><path fill="currentColor" d="M14.101 21.527C16.761 20.365 21 17.63 21 11.991V11l-9-3v14c1.02 0 1.38-.158 2.101-.473M8.838 2.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082C3 5.62 3 7.22 3 10.417V11l9-3V2c-.811 0-1.595.268-3.162.805" opacity="0.5"/><path fill="currentColor" d="m15.735 3l-.573-.195C13.595 2.268 12.812 2 12 2v6l9 3v-.583c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081"/></svg>
                        ${returnStatDots(poke.id, "def")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <span class="editor-stat-number" >${((pkmn[ttdata].bst.satk * 30) * Math.pow(1.1, pkmn[ttdata].ivs.satk)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M306.72 22.688c-87.212.763-181.58 53.14-238.19 140.406c-.944 1.46-1.677 3.068-2.593 4.53c.455-.397.86-.917 1.313-1.31c-40.253 56.984-35.183 136.503 15.813 187.5c54.553 54.552 141.745 56.65 199.093 6.78c-4.676 6.576-9.916 13.137-15.812 19.03c-57 57-149.53 57-206.53 0c-17.814-17.81-30.103-38.73-36.783-61.312c2.928 65.605 34.97 122.74 93.907 151.97c103.593 51.374 250.2-2.8 326.875-121C510.904 245.856 502.47 127.374 429.938 65c-10.36-8.91-22.206-16.483-35.156-22.906c-25.897-12.844-54.454-19.11-83.905-19.407c-1.38-.013-2.772-.012-4.156 0zm1.06 62.406c47.14-.705 82.63 23.414 90.376 58.906v.03c1.417 6.492 1.806 13.565 1.344 21.032c-3.682 59.742-68.786 126.655-145.438 149.563c-.945.282-1.872.422-2.812.688l.938-.47c-37.843 12.718-74.086-.708-84.438-33.624c-7.03-22.36-.468-48.544 15.25-70.408c-1.695 7.2-.05 13.91 5.344 18.375c10.643 8.816 31.83 5.575 47.312-7.25c15.483-12.824 19.394-30.37 8.75-39.187c-6.294-5.214-16.287-6.21-26.594-3.5l.532-.313c-.755.257-1.52.54-2.28.813c-.344.123-.69.217-1.033.344a54 54 0 0 0-8 3.344c-.656.307-1.315.61-1.968.937c-42.374 21.24-83.226 68.335-71.656 105.125c3.616 11.497 10.213 20.614 19.094 27.094c-30.253-10.44-48.35-34.526-46.563-68.53c3.682-70.837 83.193-133.31 159.844-156.22c14.673-4.385 28.802-6.553 42-6.75z"/></svg>
                        ${returnStatDots(poke.id, "satk")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <span class="editor-stat-number" >${((pkmn[ttdata].bst.sdef * 30) * Math.pow(1.1, pkmn[ttdata].ivs.sdef)).toFixed(0) }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="m311.874 171.817l65.452-99.754l-.865-.367l50.206 12.144l-.221 17.259l.049 93.284l.119 25.42c.562 109.632-58.957 176.828-107.749 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.403-2.682l-5.725-2.644l-7.222-3.591l-10.821-5.871l-12.434-7.468l-10.839-7.169c-48.347-33.416-112.698-97.735-117.398-205.151l-.274-12.587V84.09L256.45 42.668l22.726 5.497l-62.978 142.683l48.901 20.757l-80.615 154.048l176.882-172.827z" clip-rule="evenodd"/></svg>
                        ${returnStatDots(poke.id, "sdef")}
                    </div>
                    <div class="pkmn-stats-panel-bst">
                        <span class="editor-stat-number" >${((pkmn[ttdata].bst.spe * 30) * Math.pow(1.1, pkmn[ttdata].ivs.spe)).toFixed(0) }</span>
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



     
    
    if (pkmn[ttdata].ability == undefined) pkmn[ttdata].ability = learnPkmnAbility(pkmn[ttdata].id)    
    
    const abilityIcon = `<svg style="margin-right:0.3rem"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.833 10.117L16.937 7.24c-.07-.035-.106-.106-.142-.177l-2.912-5.896c-.498-1.03-1.776-1.457-2.807-.96a2.1 2.1 0 0 0-.959.96L7.205 7.063a.8.8 0 0 1-.142.177l-5.896 2.913c-1.03.497-1.457 1.776-.96 2.806a2.1 2.1 0 0 0 .96.96l5.896 2.876c.07.036.106.107.142.142l2.948 5.896c.497 1.03 1.776 1.457 2.806.96a2.1 2.1 0 0 0 .959-.96l2.877-5.896c.036-.07.107-.142.142-.142l5.896-2.912c1.03-.498 1.457-1.776.96-2.806c-.178-.427-.533-.746-.96-.96m-4.368.427l-2.735 2.38c-.533.497-.924 1.136-1.066 1.847l-.71 3.551c-.036.143-.178.25-.32.214c-.071 0-.107-.036-.142-.107l-2.38-2.735c-.497-.533-1.137-.923-1.847-1.066l-3.552-.71c-.142-.035-.249-.178-.213-.32c0-.07.035-.106.106-.142l2.735-2.38c.533-.497.924-1.136 1.066-1.847l.71-3.551c.036-.143.178-.25.32-.214a.27.27 0 0 1 .142.071l2.38 2.735c.497.533 1.137.924 1.847 1.066l3.552.71c.142.036.249.178.213.32a.4.4 0 0 1-.106.178"/></svg>`
    let abilityTier = ``
    if (ability[ pkmn[ttdata].ability ].rarity==2) abilityTier = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.97 14.607a1.07 1.07 0 0 1-.73 1l-1.88.62a3.9 3.9 0 0 0-1.56 1a4.06 4.06 0 0 0-1 1.57l-.65 1.87a1.14 1.14 0 0 1-.38.52a1.1 1.1 0 0 1-.63.2a1 1 0 0 1-.62-.2a1.07 1.07 0 0 1-.39-.53l-.63-1.88a4 4 0 0 0-2.53-2.54l-1.88-.62a1.13 1.13 0 0 1-.53-.39a1.06 1.06 0 0 1 .54-1.64l1.87-.62a4 4 0 0 0 2.56-2.55l.62-1.86a1 1 0 0 1 .36-.52a1 1 0 0 1 .61-.23a1 1 0 0 1 .64.18a1 1 0 0 1 .41.52l.63 1.9a4 4 0 0 0 2.55 2.56l1.87.65a1 1 0 0 1 .52.38a1.1 1.1 0 0 1 .23.61M12.1 7.656a1 1 0 0 1-.67.93l-1.34.44a2.6 2.6 0 0 0-1 .64a2.7 2.7 0 0 0-.64 1l-.47 1.34a1 1 0 0 1-.34.47a1.05 1.05 0 0 1-.58.19a1 1 0 0 1-.93-.68l-.44-1.34a2.6 2.6 0 0 0-.64-1a2.7 2.7 0 0 0-1-.64l-1.35-.45a.92.92 0 0 1-.48-.36a.93.93 0 0 1-.19-.57a1 1 0 0 1 .19-.58a1 1 0 0 1 .49-.34l1.34-.45a2.7 2.7 0 0 0 1-.64c.29-.277.509-.62.64-1l.45-1.32a1 1 0 0 1 .33-.48a.93.93 0 0 1 .56-.2a.87.87 0 0 1 .58.16a1 1 0 0 1 .38.47l.45 1.37c.135.378.354.72.64 1a2.7 2.7 0 0 0 1 .64l1.35.47a1 1 0 0 1 .65.92z"/></svg>`
    if (ability[ pkmn[ttdata].ability ].rarity==3) abilityTier = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"/></svg>`
    document.getElementById("pkmn-edit-ability").className = ""
    if (ability[ pkmn[ttdata].ability ].rarity==2) document.getElementById("pkmn-edit-ability").classList.add("ability-uncommon")
    if (ability[ pkmn[ttdata].ability ].rarity==3) document.getElementById("pkmn-edit-ability").classList.add("ability-rare")
    document.getElementById("pkmn-edit-ability").dataset.ability = pkmn[ttdata].ability
    document.getElementById("pkmn-edit-ability").innerHTML = `<span>${abilityIcon+format(pkmn[ttdata].ability)}</span>${abilityTier}`


    document.getElementById("pkmn-stats-lore").style.display = "none"
    document.getElementById("pkmn-stats-lore").innerHTML = ""
    if (pkmn[ttdata].lore){
        document.getElementById("pkmn-stats-lore").innerHTML = `<div onclick="if (document.getElementById('pkmn-stats-lore-info').style.maxHeight == '10rem') {document.getElementById('pkmn-stats-lore-info').style.maxHeight = '0rem'; document.getElementById('pkmn-stats-lore-info').style.padding = '0rem'; return} document.getElementById('pkmn-stats-lore-info').style.maxHeight = '10rem'; document.getElementById('pkmn-stats-lore-info').style.padding = '1rem';">Expand Lore
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-opacity="0.25" fill-rule="evenodd" d="M2.455 11.116C3.531 9.234 6.555 5 12 5c5.444 0 8.469 4.234 9.544 6.116c.221.386.331.58.32.868c-.013.288-.143.476-.402.852C20.182 14.694 16.706 19 12 19s-8.182-4.306-9.462-6.164c-.26-.376-.39-.564-.401-.852c-.013-.288.098-.482.318-.868M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="1.2" d="M12 5c-5.444 0-8.469 4.234-9.544 6.116c-.221.386-.331.58-.32.868c.013.288.143.476.402.852C3.818 14.694 7.294 19 12 19s8.182-4.306 9.462-6.164c.26-.376.39-.564.401-.852s-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.2"/></g></svg>
                    </div>
                    <span id="pkmn-stats-lore-info"  > ${pkmn[ttdata].lore}
                    </span>`
         document.getElementById("pkmn-stats-lore").style.display = "flex"
    }


    let signatureIcon = ""
    if (pkmn[ttdata].signature) {
        signatureIcon = `<svg style="color:${returnTypeColor(move[pkmn[ttdata].signature.id].type)}; margin:0 0.25rem" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>`
        document.getElementById("pkmn-stats-stat-signature").style.display = "flex"
        document.getElementById("pkmn-edit-signature").innerHTML = `${signatureIcon} ${format(pkmn[ttdata].signature.id)}`
        if (pkmn[ttdata].movepool.includes(pkmn[ttdata].signature.id)) document.getElementById("pkmn-edit-signature").innerHTML = `${signatureIcon} ${format(pkmn[ttdata].signature.id)} ✔️`
        document.getElementById("pkmn-edit-signature").dataset.move = pkmn[ttdata].signature.id

    } else document.getElementById("pkmn-stats-stat-signature").style.display = "none"


    let abilityHiddenIcon = `<svg style="margin-right:0.3rem"xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-opacity="0.25" fill-rule="evenodd" d="M2.455 11.116C3.531 9.234 6.555 5 12 5c5.444 0 8.469 4.234 9.544 6.116c.221.386.331.58.32.868c-.013.288-.143.476-.402.852C20.182 14.694 16.706 19 12 19s-8.182-4.306-9.462-6.164c-.26-.376-.39-.564-.401-.852c-.013-.288.098-.482.318-.868M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="1.2" d="M12 5c-5.444 0-8.469 4.234-9.544 6.116c-.221.386-.331.58-.32.868c.013.288.143.476.402.852C3.818 14.694 7.294 19 12 19s8.182-4.306 9.462-6.164c.26-.376.39-.564.401-.852s-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.2"/></g></svg>`
    if (pkmn[ttdata].hiddenAbility){
    let abilityHiddenTier = ``
    if (ability[ pkmn[ttdata].hiddenAbility.id ].rarity==2) abilityHiddenTier = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.97 14.607a1.07 1.07 0 0 1-.73 1l-1.88.62a3.9 3.9 0 0 0-1.56 1a4.06 4.06 0 0 0-1 1.57l-.65 1.87a1.14 1.14 0 0 1-.38.52a1.1 1.1 0 0 1-.63.2a1 1 0 0 1-.62-.2a1.07 1.07 0 0 1-.39-.53l-.63-1.88a4 4 0 0 0-2.53-2.54l-1.88-.62a1.13 1.13 0 0 1-.53-.39a1.06 1.06 0 0 1 .54-1.64l1.87-.62a4 4 0 0 0 2.56-2.55l.62-1.86a1 1 0 0 1 .36-.52a1 1 0 0 1 .61-.23a1 1 0 0 1 .64.18a1 1 0 0 1 .41.52l.63 1.9a4 4 0 0 0 2.55 2.56l1.87.65a1 1 0 0 1 .52.38a1.1 1.1 0 0 1 .23.61M12.1 7.656a1 1 0 0 1-.67.93l-1.34.44a2.6 2.6 0 0 0-1 .64a2.7 2.7 0 0 0-.64 1l-.47 1.34a1 1 0 0 1-.34.47a1.05 1.05 0 0 1-.58.19a1 1 0 0 1-.93-.68l-.44-1.34a2.6 2.6 0 0 0-.64-1a2.7 2.7 0 0 0-1-.64l-1.35-.45a.92.92 0 0 1-.48-.36a.93.93 0 0 1-.19-.57a1 1 0 0 1 .19-.58a1 1 0 0 1 .49-.34l1.34-.45a2.7 2.7 0 0 0 1-.64c.29-.277.509-.62.64-1l.45-1.32a1 1 0 0 1 .33-.48a.93.93 0 0 1 .56-.2a.87.87 0 0 1 .58.16a1 1 0 0 1 .38.47l.45 1.37c.135.378.354.72.64 1a2.7 2.7 0 0 0 1 .64l1.35.47a1 1 0 0 1 .65.92z"/></svg>`
    if (ability[ pkmn[ttdata].hiddenAbility.id ].rarity==3) abilityHiddenTier = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"/></svg>`
    document.getElementById("pkmn-edit-ability-hidden").className = ""
    if (ability[ pkmn[ttdata].hiddenAbility.id ].rarity==2) document.getElementById("pkmn-edit-ability-hidden").classList.add("ability-uncommon")
    if (ability[ pkmn[ttdata].hiddenAbility.id ].rarity==3) document.getElementById("pkmn-edit-ability-hidden").classList.add("ability-rare")
    if (pkmn[ttdata].hiddenAbilityUnlocked!=true) abilityHiddenIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity="0.5"/><path fill="currentColor" d="M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"/></svg>`
    if (pkmn[ttdata].hiddenAbilityUnlocked!=true) {document.getElementById("pkmn-edit-ability-hidden").style.filter = "brightness(0.5)"} else {document.getElementById("pkmn-edit-ability-hidden").style.filter = "brightness(1)"}
    document.getElementById("pkmn-edit-ability-hidden").dataset.ability = pkmn[ttdata].hiddenAbility.id
    document.getElementById("pkmn-edit-ability-hidden").innerHTML = `<span>${abilityHiddenIcon+format(pkmn[ttdata].hiddenAbility.id)}</span>${abilityHiddenTier}`
    } else{
    document.getElementById("pkmn-edit-ability-hidden").className = ""
    document.getElementById("pkmn-edit-ability-hidden").innerHTML = `<span>${abilityHiddenIcon}WIP</span>`
    if (document.getElementById("pkmn-edit-ability-hidden").dataset.ability) delete document.getElementById("pkmn-edit-ability-hidden").dataset.ability;
    }




    function updateMoves() {
    for (const key in pkmn[ttdata].moves) {

    let moveId = pkmn[ttdata].moves[key];

    //safefails if your slots magically disapear
    if (pkmn[ttdata].moves.slot1 == undefined) pkmn[ttdata].moves.slot1 = undefined
    if (pkmn[ttdata].moves.slot2 == undefined) pkmn[ttdata].moves.slot2 = undefined
    if (pkmn[ttdata].moves.slot3 == undefined) pkmn[ttdata].moves.slot3 = undefined
    if (pkmn[ttdata].moves.slot4 == undefined) pkmn[ttdata].moves.slot4 = undefined

    
    if (moveId == null) {
            continue
    } else moveId = pkmn[ttdata].moves[key];

    
    const divMove = document.createElement("div") 
    divMove.className = "pkmn-movebox"
    divMove.style.borderColor = returnTypeColor(move[moveId].type)
    //divMove.id = `pkmn-movebox-${e}-team-${i}`


    divMove.addEventListener("click", e => {


    if (moveSlotReplace == undefined) {

    document.querySelectorAll('.highlighted-move').forEach(el => el.classList.remove('highlighted-move'));
    divMove.classList.add('highlighted-move')
    moveSlotReplace = key


    } else {


    document.querySelectorAll('.highlighted-move').forEach(el => {
    el.classList.remove('highlighted-move');
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = `moveboxFire 1 0.3s`;
    });


    //FIX THIS CODE
    const tempMove = pkmn[ttdata].moves[moveSlotReplace]
    pkmn[ttdata].moves[moveSlotReplace] = moveId
    pkmn[ttdata].moves[key] = tempMove


        moveSlotReplace = undefined

        
    document.getElementById(`explore-team`).innerHTML = ""
    setPkmnTeam()
    document.getElementById(`pkmn-editor-current-moves`).innerHTML = ""
    updateMoves()
    document.getElementById(`pkmn-editor-movepool`).innerHTML = ""
    updateMovepool()

    }




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

const movepool = pkmn[ttdata].movepool

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
    if (pkmn[ttdata].moves.slot1 == undefined && pkmn[ttdata].moves.slot1!= e && pkmn[ttdata].moves.slot2!= e && pkmn[ttdata].moves.slot3!= e && pkmn[ttdata].moves.slot4!= e) pkmn[ttdata].moves.slot1 = e
    if (pkmn[ttdata].moves.slot2 == undefined && pkmn[ttdata].moves.slot1!= e && pkmn[ttdata].moves.slot2!= e && pkmn[ttdata].moves.slot3!= e && pkmn[ttdata].moves.slot4!= e) pkmn[ttdata].moves.slot2 = e
    if (pkmn[ttdata].moves.slot3 == undefined && pkmn[ttdata].moves.slot1!= e && pkmn[ttdata].moves.slot2!= e && pkmn[ttdata].moves.slot3!= e && pkmn[ttdata].moves.slot4!= e) pkmn[ttdata].moves.slot3 = e
    if (pkmn[ttdata].moves.slot4 == undefined && pkmn[ttdata].moves.slot1!= e && pkmn[ttdata].moves.slot2!= e && pkmn[ttdata].moves.slot3!= e && pkmn[ttdata].moves.slot4!= e) pkmn[ttdata].moves.slot4 = e




    const divMove = document.createElement("div") 
    divMove.className = "pkmn-movebox"
    divMove.style.borderColor = returnTypeColor(move[ moveId ].type)

    const movesArray = Object.values(pkmn[ttdata].moves);

    if (movesArray.includes(moveId)) {
    divMove.style.filter = "brightness(0.5)"
    }

    divMove.addEventListener("click", e => {

    

    if (moveSlotReplace === undefined) return
    


    if (movesArray.includes(moveId)) {
    return;
    }


    if (areas[saved.currentArea]?.trainer && saved.currentArea != undefined ||  saved.currentArea == areas.frontierSpiralingTower.id ||  saved.currentArea == areas.training.id) {

        document.getElementById("tooltipTop").style.display = "none"
        document.getElementById("tooltipBottom").style.display = "none"
        document.getElementById("tooltipTitle").innerHTML = `Restricted Action`
        document.getElementById("tooltipMid").innerHTML = `Moves cannot be freely switched at this moment`
        openTooltip()
        return

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

    pkmn[ttdata].moves[moveSlotReplace] = moveId

    moveSlotReplace = undefined

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






    if (category == "dictionaryAbility") {

        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = format(ttdata)
        document.getElementById("tooltipMid").innerHTML = `Common Ability<br>${ability[ttdata].info()}`
        if (ability[ttdata].rarity===2) document.getElementById("tooltipMid").innerHTML = `Uncommon Ability<br>${ability[ttdata].info()}`
        if (ability[ttdata].rarity===3) document.getElementById("tooltipMid").innerHTML = `Rare Ability<br>${ability[ttdata].info()}`
        
        if (ability[ttdata].type){

        let signatureText = ""
        const signatureArray = []
        for (const e in pkmn){
            if (pkmn[e].hiddenAbility?.id == ttdata) signatureArray.push(e)
        }
        if (signatureArray.length>0) signatureText = `<br><br>Additionally, appears as the Hidden ability of ${joinWithAnd(signatureArray)}`
        

        document.getElementById("tooltipBottom").innerHTML = `
        Learnable by ${joinWithAnd(ability[ttdata].type)} types ${signatureText}
        `
        } else {

        const signatureArray = []
        for (const e in pkmn){
            if (pkmn[e].hiddenAbility?.id == ttdata) signatureArray.push(e)
        }

        if (signatureArray.length>0) {
        document.getElementById("tooltipBottom").innerHTML = `
        This ability can only appear as the Hidden Ability of ${joinWithAnd(signatureArray)}
        `
        } else{
        document.getElementById("tooltipBottom").innerHTML = `
        This ability is currently unobtainable :(
        ` 
        }

        }

        openTooltip()


    }



   if (category == "dictionaryMove") {



        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `inline`
        document.getElementById("tooltipTop").innerHTML = `<img src="img/items/tm${format(move[ttdata].type)}.png">`
        document.getElementById("tooltipTitle").innerHTML = format(ttdata)
        document.getElementById("tooltipMid").style.display = "inline"


        const affectedAbilities = []
        if (move[ttdata].affectedBy !== undefined) {
        affectedAbilities.push(...move[ttdata].affectedBy)
        }
            
        let affectedText = ""
        if (affectedAbilities.length>0) affectedText =`<br>Affected by ${joinWithAnd(affectedAbilities)}`


        document.getElementById("tooltipMid").innerHTML = `${move[ttdata].power} Power, ${format(move[ttdata].split)}${affectedText}`
        if (move[ttdata].info != undefined) document.getElementById("tooltipMid").innerHTML += `<br>${move[ttdata].info()}`
        
        
        
        
        
        if (move[ttdata].moveset) {

        let rarity = `(Common)`
        if (move[ttdata].rarity == 2) rarity = `(Uncommon)`
        if (move[ttdata].rarity == 3) rarity = `(Rare)`

        document.getElementById("tooltipBottom").innerHTML = `
        Learnable by ${joinWithAnd(move[ttdata].moveset)} types ${rarity}
        `
        } else{

        const signatureArray = []
        for (const e in pkmn){
            if (pkmn[e].signature?.id == ttdata) signatureArray.push(e)
        }



        document.getElementById("tooltipBottom").innerHTML = `
        This move can only appear as the Signature Move of ${joinWithAnd(signatureArray)}
        `
        }

        
        
    
        openTooltip()


    }



    if (category == "dictionaryPkmn") {

        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipTop").innerHTML = `<div style="cursor:help" data-pkmn="${ttdata}"><img src="img/pkmn/sprite/${ttdata}.png"></div>`
        if (pkmn[ttdata].shiny) document.getElementById("tooltipTop").innerHTML = `<div style="cursor:help" data-pkmn="${ttdata}"><img src="img/pkmn/shiny/${ttdata}.png"></div>`
        if (pkmn[ttdata].caught == 0) document.getElementById("tooltipTop").innerHTML = `<div><img style="filter:brightness(0)" src="img/pkmn/sprite/${ttdata}.png"></div>`
        document.getElementById("tooltipTitle").innerHTML = format(ttdata)
        document.getElementById("tooltipMid").style.display = "inline"



        let wildSpawn = ""
        let eventSpawn = ""
        let encounterSpawn = ""

        for (const i in areas){
            if (areas[i].type=="wild") {
                if (areas[i].spawns.common.includes(pkmn[ttdata]) || areas[i].spawns.uncommon.includes(pkmn[ttdata]) || areas[i].spawns.rare.includes(pkmn[ttdata])){
                    wildSpawn = areas[i].id
                }
            }



            if (areas[i].type=="event" && areas[i].uncatchable != true){
                if (areas[i].spawns?.common?.includes(pkmn[ttdata]) || areas[i].spawns?.uncommon?.includes(pkmn[ttdata]) || areas[i].spawns?.rare?.includes(pkmn[ttdata])){
                    eventSpawn = areas[i].id
                }
            }


            if (areas[i].encounter) {
                if ( areas[i].team.slot1 == pkmn[ttdata] || areas[i].reward.includes(pkmn[ttdata])) encounterSpawn = areas[i].id
            }
        }


        let parkSpawn = ""


        




        let spawnLocation = ""
        if (wildSpawn != "") spawnLocation += `<span>Found in the wild area ${format(wildSpawn)} (Rotation ${areas[wildSpawn].rotation})</span>`
        if ( wildlifePoolCommon.includes(ttdata) || wildlifePoolUncommon.includes(ttdata) || wildlifePoolRare.includes(ttdata) ) spawnLocation += `<span>Found randomly in the Wildlife Park wild area</span>`
        if ( exclusiveFrontierPkmn.includes(pkmn[ttdata]) ) spawnLocation += `<span>Obtained as a random reward in the Battle Frontier</span>`
        if (encounterSpawn != "") spawnLocation += `<span>Obtained in the event ${format(areas[encounterSpawn].name)} (Rotation ${areas[encounterSpawn].rotation})</span>`
        if (eventSpawn != "") spawnLocation += `<span>Found in the event ${format(eventSpawn)} (Rotation ${areas[eventSpawn].rotation})</span>`
        if (spawnLocation == "") spawnLocation = `This Pokemon cannot be caught on its current stage`
        if (pkmn[ttdata].tagObtainedIn == "unobtainable") spawnLocation = `This Pokemon is unobtainable`

        document.getElementById("tooltipMid").innerHTML = `
        <span style="display:flex; flex-direction:column">${spawnLocation}<span>
        `



        document.getElementById("tooltipBottom").innerHTML = `
        <div>Abilities</div>
        <div style="width:100%; height:100%; position:relative; display:flex;justify-content:start;align-items:center;flex-direction:column; max-height:25vh; overflow-y:scroll; padding-top:0.5rem;">${getAbilityPoolByTier(pkmn[ttdata])}</div>
        
        <div onclick="window.getMoveset(pkmn.${ttdata})" class="custom-challenge-button" style="margin-top:0.5rem">Check learnable moves</div>


        `


        openTooltip()



    }




    if (category == "dictionaryItem") {



        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `inline`
        document.getElementById("tooltipTitle").innerHTML = format(ttdata)
        document.getElementById("tooltipMid").style.display = "inline"

        if (item[ttdata].type !== "tm") document.getElementById("tooltipTop").innerHTML = `<img src="img/items/${ttdata}.png">`
        if (item[ttdata].type == "tm") document.getElementById("tooltipTop").innerHTML = `<img src="img/items/tm${format(move[item[ttdata].move].type)}.png">`





        document.getElementById("tooltipMid").innerHTML = `${item[ttdata].info()}<br>(You have ${item[ttdata].got})`




        let obtainText = ""


        for (const i in areas){
            if (areas[i].type=="wild") {
            if (areas[i].drops?.common?.includes(item[ttdata]) || areas[i].drops?.uncommon?.includes(item[ttdata]) || areas[i].drops?.rare?.includes(item[ttdata])){
                obtainText += `<span>Can be dropped in the wild area ${format(i)} (Rotation ${areas[i].rotation})</span>`
            }
            }

            if (areas[i].type=="event") {
            if (areas[i].drops?.common?.includes(item[ttdata]) || areas[i].drops?.uncommon?.includes(item[ttdata]) || areas[i].drops?.rare?.includes(item[ttdata])){
                obtainText += `<span>Can be dropped in the event area ${format(i)} (Rotation ${areas[i].rotation})</span>`
            }
            }

            if (areas[i].type=="dungeon") {
            if (areas[i].drops?.common?.includes(item[ttdata]) || areas[i].drops?.uncommon?.includes(item[ttdata]) || areas[i].drops?.rare?.includes(item[ttdata])){
                obtainText += `<span>Can be dropped in the dungeon area ${format(i)} (Rotation ${areas[i].rotation})</span>`
            }
            }


            if (areas[i].encounter) {
            if (areas[i].reward?.includes(item[ttdata])){
                obtainText += `<span>Reward from the event ${format(areas[i].name)} (Rotation ${areas[i].rotation})</span>`
            }
            }
        }

        if ([item.hpUp.id, item.protein.id, item.iron.id, item.calcium.id, item.zinc.id, item.carbos.id, item.timeCandy.id].includes(ttdata)) obtainText += `<span>Obtained via Export Reward</span>`

        for (const i in spiralingRewards) if (spiralingRewards[i].item==ttdata) obtainText += `<span>Reward from Spiraling Tower</span>`


        for (const i in shop) {
            if (shop[i].icon == ttdata) obtainText += `<span>Can be bought in the Poke-Mart</span>`
        }



        if (obtainText=="") obtainText += `<span>This item is currently unobtainable</span>`


        
        
        document.getElementById("tooltipBottom").innerHTML = `<span style="display:flex; flex-direction:column">${obtainText}<span>`

        
     
    
        openTooltip()


    }




}



document.addEventListener("contextmenu", e => {

    let el = e.target;
    if (el.parentElement && el !== el.parentElement) {
        if (el.parentElement.contains(el) && el.children.length === 0) { el = el.parentElement; }
    }

    if (el.dataset.area !== undefined) {
        tooltipData("area", el.dataset.area)
    }

    if (el.dataset.trainer !== undefined) {
        tooltipData("trainer", el.dataset.trainer)
    }

    if (el.dataset.buff !== undefined) {
        tooltipData("buff", el.dataset.buff)
    }

    if (el.dataset.help !== undefined) {
        tooltipData("help", el.dataset.help)
    }

    if (el.dataset.ability !== undefined) {
        tooltipData("ability", el.dataset.ability)
    }


    if (el.dataset.ribbon !== undefined) {
        tooltipData("ribbon", el.dataset.ribbon)
    }


    if (el.dataset.training !== undefined) {
        tooltipData("training", el.dataset.training)
    }


    if (el.dataset.move !== undefined) {
        tooltipData("move", el.dataset.move)
    }

    if (el.dataset.item !== undefined) {
        tooltipData("item", el.dataset.item)
    }


    if (el.dataset.pkmn !== undefined) {
        tooltipData("pkmn", el.dataset.pkmn)
    }


    if (el.dataset.pkmnEditor !== undefined) {
        tooltipData("pkmnEditor", el.dataset.pkmnEditor)
    }


    if (el.dataset.dictionaryAbility !== undefined) {
        tooltipData("dictionaryAbility", el.dataset.dictionaryAbility)
    }

    if (el.dataset.dictionaryMove !== undefined) {
        tooltipData("dictionaryMove", el.dataset.dictionaryMove)
    }

    if (el.dataset.dictionaryPkmn !== undefined) {
        tooltipData("dictionaryPkmn", el.dataset.dictionaryPkmn)
    }

    if (el.dataset.dictionaryItem !== undefined) {
        tooltipData("dictionaryItem", el.dataset.dictionaryItem)
    }







});