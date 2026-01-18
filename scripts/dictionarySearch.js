



let dictionaryFilter = "pokemon"

let searchedDictionary = []
const dictionaryItems = []




document.getElementById("dictionary-search").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const fuseResults = fuseDictionary.search(document.getElementById("dictionary-search").value)
    // convert obj to string
    searchedDictionary = fuseResults.map(result => result.item)
    document.getElementById("dictionary-search").blur()

    if (document.getElementById("dictionary-search").value!="") dictionaryFilter = "search"
    if (document.getElementById("dictionary-search").value=="") {dictionaryFilter = "pokemon"; searchedDictionary = []}

    updateDictionary()

  }
});






function updateDictionary(){


    document.getElementById("dictionary-list").innerHTML = ""


    for (const i in ability){
        const div = document.createElement("div")

        let icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.833 10.117L16.937 7.24c-.07-.035-.106-.106-.142-.177l-2.912-5.896c-.498-1.03-1.776-1.457-2.807-.96a2.1 2.1 0 0 0-.959.96L7.205 7.063a.8.8 0 0 1-.142.177l-5.896 2.913c-1.03.497-1.457 1.776-.96 2.806a2.1 2.1 0 0 0 .96.96l5.896 2.876c.07.036.106.107.142.142l2.948 5.896c.497 1.03 1.776 1.457 2.806.96a2.1 2.1 0 0 0 .959-.96l2.877-5.896c.036-.07.107-.142.142-.142l5.896-2.912c1.03-.498 1.457-1.776.96-2.806c-.178-.427-.533-.746-.96-.96m-4.368.427l-2.735 2.38c-.533.497-.924 1.136-1.066 1.847l-.71 3.551c-.036.143-.178.25-.32.214c-.071 0-.107-.036-.142-.107l-2.38-2.735c-.497-.533-1.137-.923-1.847-1.066l-3.552-.71c-.142-.035-.249-.178-.213-.32c0-.07.035-.106.106-.142l2.735-2.38c.533-.497.924-1.136 1.066-1.847l.71-3.551c.036-.143.178-.25.32-.214a.27.27 0 0 1 .142.071l2.38 2.735c.497.533 1.137.924 1.847 1.066l3.552.71c.142.036.249.178.213.32a.4.4 0 0 1-.106.178"/></svg>`
        if (ability[i].rarity==2) icon = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.97 14.607a1.07 1.07 0 0 1-.73 1l-1.88.62a3.9 3.9 0 0 0-1.56 1a4.06 4.06 0 0 0-1 1.57l-.65 1.87a1.14 1.14 0 0 1-.38.52a1.1 1.1 0 0 1-.63.2a1 1 0 0 1-.62-.2a1.07 1.07 0 0 1-.39-.53l-.63-1.88a4 4 0 0 0-2.53-2.54l-1.88-.62a1.13 1.13 0 0 1-.53-.39a1.06 1.06 0 0 1 .54-1.64l1.87-.62a4 4 0 0 0 2.56-2.55l.62-1.86a1 1 0 0 1 .36-.52a1 1 0 0 1 .61-.23a1 1 0 0 1 .64.18a1 1 0 0 1 .41.52l.63 1.9a4 4 0 0 0 2.55 2.56l1.87.65a1 1 0 0 1 .52.38a1.1 1.1 0 0 1 .23.61M12.1 7.656a1 1 0 0 1-.67.93l-1.34.44a2.6 2.6 0 0 0-1 .64a2.7 2.7 0 0 0-.64 1l-.47 1.34a1 1 0 0 1-.34.47a1.05 1.05 0 0 1-.58.19a1 1 0 0 1-.93-.68l-.44-1.34a2.6 2.6 0 0 0-.64-1a2.7 2.7 0 0 0-1-.64l-1.35-.45a.92.92 0 0 1-.48-.36a.93.93 0 0 1-.19-.57a1 1 0 0 1 .19-.58a1 1 0 0 1 .49-.34l1.34-.45a2.7 2.7 0 0 0 1-.64c.29-.277.509-.62.64-1l.45-1.32a1 1 0 0 1 .33-.48a.93.93 0 0 1 .56-.2a.87.87 0 0 1 .58.16a1 1 0 0 1 .38.47l.45 1.37c.135.378.354.72.64 1a2.7 2.7 0 0 0 1 .64l1.35.47a1 1 0 0 1 .65.92z"/></svg>`
        if (ability[i].rarity==3) icon = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.6 3.6 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.1 1.1 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.8 3.8 0 0 0-1.4-.87l-1.71-.56a1.1 1.1 0 0 1-.51-.37a1.1 1.1 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.5 2.5 0 0 0-.58.94l-.43 1.24a.9.9 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.2 2.2 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.93.93 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.1 1.1 0 0 1-.49-.15a.9.9 0 0 1-.32-.44l-.21-.62a.7.7 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.9.9 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.9.9 0 0 1 .42-.3l.61-.2a.9.9 0 0 0 .33-.2a.9.9 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.9.9 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"/></svg>`

        if (ability[i].type==undefined) icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fill-opacity="0.25" fill-rule="evenodd" d="M2.455 11.116C3.531 9.234 6.555 5 12 5c5.444 0 8.469 4.234 9.544 6.116c.221.386.331.58.32.868c-.013.288-.143.476-.402.852C20.182 14.694 16.706 19 12 19s-8.182-4.306-9.462-6.164c-.26-.376-.39-.564-.401-.852c-.013-.288.098-.482.318-.868M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"/><path stroke="currentColor" stroke-width="1.2" d="M12 5c-5.444 0-8.469 4.234-9.544 6.116c-.221.386-.331.58-.32.868c.013.288.143.476.402.852C3.818 14.694 7.294 19 12 19s8.182-4.306 9.462-6.164c.26-.376.39-.564.401-.852s-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.2"/></g></svg>`

        div.dataset.dictionaryAbility = i

        if (!dictionaryItems.includes(i)) dictionaryItems.push(i)

        div.innerHTML = ` ${icon} ${format(i)} `

        if (dictionaryFilter=="ability" || searchedDictionary.includes(i)) document.getElementById("dictionary-list").appendChild(div)
    }
    

    for (const i in item){
        if (item[i].hidden) continue
        if (item[i].rotation) continue
        const div = document.createElement("div")

        let icon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M13.462 9.692C13.462 12.664 10.77 14 7 14S.537 12.664.537 9.713c0-2.825 1.235-4.432 3.705-5.885a4.59 4.59 0 0 0 5.52-.004c2.467 1.438 3.7 3.045 3.7 5.868M8.743 3.008l1.27-1.985A.7.7 0 0 0 9.41 0H4.843a.7.7 0 0 0-.603 1.077l1.047 1.95c1.061.635 2.4.629 3.456-.019" clip-rule="evenodd"/></svg>`
        if (item[i].type=="held" && item[i].got>=20) icon = `<svg style="color:#CEA446" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M13.462 9.692C13.462 12.664 10.77 14 7 14S.537 12.664.537 9.713c0-2.825 1.235-4.432 3.705-5.885a4.59 4.59 0 0 0 5.52-.004c2.467 1.438 3.7 3.045 3.7 5.868M8.743 3.008l1.27-1.985A.7.7 0 0 0 9.41 0H4.843a.7.7 0 0 0-.603 1.077l1.047 1.95c1.061.635 2.4.629 3.456-.019" clip-rule="evenodd"/></svg>`
        if (item[i].got<=0) icon = `<svg style="opacity:0.3" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M9.21.001H4.79a1.263 1.263 0 0 0-1.06 1.894l.904 1.413c-1.213.657-2.199 1.365-2.904 2.25C.89 6.613.489 7.866.489 9.453c0 1.582.735 2.759 1.953 3.51c1.18.727 2.783 1.04 4.558 1.04s3.378-.313 4.558-1.04c1.218-.751 1.952-1.929 1.952-3.51c0-1.587-.4-2.84-1.239-3.893c-.705-.886-1.69-1.594-2.905-2.251l.905-1.413l.028-.048A1.264 1.264 0 0 0 9.21 0M2.708 6.337c.584-.734 1.454-1.365 2.67-2.01a2.4 2.4 0 0 0 3.246 0c1.216.645 2.086 1.276 2.67 2.01c.633.796.968 1.76.968 3.115c0 1.127-.492 1.911-1.359 2.446c-.904.557-2.244.853-3.902.853s-2.998-.296-3.902-.853c-.867-.535-1.359-1.32-1.359-2.446c0-1.355.335-2.32.968-3.115" clip-rule="evenodd"/></svg>`

        div.dataset.dictionaryItem = i

        if (!dictionaryItems.includes(i)) dictionaryItems.push(i)


        div.innerHTML = ` ${icon} ${format(i)} `

        if (dictionaryFilter=="item" || searchedDictionary.includes(i)) document.getElementById("dictionary-list").appendChild(div)
    }
    

    for (const i in move){
        const div = document.createElement("div")

        let icon = `<span><img src="img/icons/${move[ i ].type }.svg"></span>`

        div.dataset.dictionaryMove = i

        if (!dictionaryItems.includes(i)) dictionaryItems.push(i)


        div.innerHTML = ` ${icon} ${format(i)} `

        if (dictionaryFilter=="move" || searchedDictionary.includes(i)) document.getElementById("dictionary-list").appendChild(div)
    }
    

    

    
    for (const i in pkmn){
        const div = document.createElement("div")
        if (pkmn[i].hidden) continue

        let icon = `<svg style="opacity:0.3" fill="currentColor" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1126 1126"><defs><style>.cls-1,.cls-2{fill:none;}.cls-2{stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:100px;}</style></defs><path fill="currentColor" class="cls-1" d="M646.27,1091.94c48.25,3.71,96,.07,142.34-13.67,136.22-40.33,229.87-127.25,281-259.63,12.92-33.47,19.88-68.48,23.33-104.17.33-3.46.83-6.17-4.62-6.16q-98,.3-196,0c-3.42,0-4.7,1.17-5.18,4.31-.71,4.59-1.53,9.17-2.63,13.68-27.08,111-135,180.24-247.43,158.68q-3-.57-5.9-1.23L474.51,1040.42C526.88,1070.09,584.27,1087.18,646.27,1091.94Z" transform="translate(-109.65 -105.51)"/><path fill="currentColor" class="cls-1" d="M678,530.53c-80.91,0-147,66-146.91,146.59h0c0,52.23,27.78,98.34,69.26,124.36L802.4,599.39A147.31,147.31,0,0,0,678,530.53Z" transform="translate(-109.65 -105.51)"/><path class="cls-1" d="M468.93,713.13c-.58-3.44-1.83-4.87-5.73-4.85-32.53.24-65,.16-97.52.16h-96c-7.34,0-7.35,0-6.51,7.5a454.8,454.8,0,0,0,7.62,48.7q30.69,138.51,137.28,229.09L553.24,848.55A211.37,211.37,0,0,1,468.93,713.13Z" transform="translate(-109.65 -105.51)"/><path class="cls-1" d="M824.25,690.68,691.74,823.19C761.64,816.6,817.73,760.54,824.25,690.68Z" transform="translate(-109.65 -105.51)"/><path d="M270.79,764.64a454.8,454.8,0,0,1-7.62-48.7c-.84-7.5-.83-7.5,6.51-7.5h96c32.49,0,65,.08,97.52-.16,3.9,0,5.15,1.41,5.73,4.85a211.37,211.37,0,0,0,84.31,135.42l47.07-47.07c-41.48-26-69.24-72.13-69.26-124.36h0c0-80.62,66-146.63,146.91-146.59A147.31,147.31,0,0,1,802.4,599.39L1047,354.81Q961.93,256.53,828.6,211.49c-35.72-12.07-72.59-18.83-110.19-22a480.64,480.64,0,0,0-103.69,2.35c-83,11-158.7,40.81-226.1,90.55Q253.71,382,206.71,542.94a460.76,460.76,0,0,0-17.86,106.37c-.2,2-.5,3.93-.89,5.86v43c1.7,6.66,1.21,13.52,1.76,20.28,3.47,42.11,11.73,83.28,26.63,122.76q47.33,125.31,139.23,205l52.49-52.48Q301.48,903.15,270.79,764.64Z" transform="translate(-109.65 -105.51)"/><path d="M691.74,823.19l-60.56,60.56q2.93.66,5.9,1.23C749.51,906.54,857.43,837.3,884.51,726.3c1.1-4.51,1.92-9.09,2.63-13.68.48-3.14,1.76-4.31,5.18-4.31q98,.3,196,0c5.45,0,5,2.7,4.62,6.16-3.45,35.69-10.41,70.7-23.33,104.17-51.13,132.38-144.78,219.3-281,259.63-46.34,13.74-94.09,17.38-142.34,13.67-62-4.76-119.39-21.85-171.76-51.52l-53.35,53.35a546.1,546.1,0,0,0,106.31,49c41,14,83.37,21.17,126.64,23.08,1.64.08,3.36-.18,4.85.82h38c7-1.8,14.21-1.18,21.31-1.78q149.68-12.5,266.38-106.38,121.33-98,164.66-247.69a464.67,464.67,0,0,0,17.81-106.33c.1-2.11.58-4.21.88-6.31v-42c-1.7-6.82-1.22-13.85-1.8-20.77-4.43-53.08-16.73-104.29-38.6-152.8a559.5,559.5,0,0,0-32.91-62.39L824.25,690.68C817.73,760.54,761.64,816.6,691.74,823.19Z" transform="translate(-109.65 -105.51)"/><line class="cls-2" x1="50" y1="1076" x2="1076" y2="50"/></svg>`
        if (pkmn[i].caught>0) icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" id="Pokeball--Streamline-Tabler" height="32" width="32"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0" stroke-width="2"></path><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0" stroke-width="2"></path><path d="M3 12h6" stroke-width="2"></path><path d="M15 12h6" stroke-width="2"></path></svg>`
        if (pkmn[i].caught>0 && pkmn[i].shiny) icon = `<svg style="color:#CEA446" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" id="Pokeball--Streamline-Tabler" height="32" width="32"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0 -18 0" stroke-width="2"></path><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0" stroke-width="2"></path><path d="M3 12h6" stroke-width="2"></path><path d="M15 12h6" stroke-width="2"></path></svg>`


        div.dataset.dictionaryPkmn = i

        if (!dictionaryItems.includes(i)) dictionaryItems.push(i)


        div.innerHTML = ` ${icon} ${format(i)} `

        if (dictionaryFilter=="pokemon" || searchedDictionary.includes(i)) document.getElementById("dictionary-list").appendChild(div)
    }
    


fuseDictionary = new Fuse(dictionaryItems, {
  threshold: 0.2
})



    
}


document.addEventListener("click", e => {

    let el = e.target;
    if (el.parentElement && el !== el.parentElement) {
        if (el.parentElement.contains(el) && el.children.length === 0) { el = el.parentElement; }
    }



    if (el.dataset.dictionaryAbility !== undefined) {

        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = format(el.dataset.dictionaryAbility)
        document.getElementById("tooltipMid").innerHTML = `Common Ability<br>${ability[el.dataset.dictionaryAbility].info()}`
        if (ability[el.dataset.dictionaryAbility].rarity===2) document.getElementById("tooltipMid").innerHTML = `Uncommon Ability<br>${ability[el.dataset.dictionaryAbility].info()}`
        if (ability[el.dataset.dictionaryAbility].rarity===3) document.getElementById("tooltipMid").innerHTML = `Rare Ability<br>${ability[el.dataset.dictionaryAbility].info()}`
        
        if (ability[el.dataset.dictionaryAbility].type){

        let signatureText = ""
        const signatureArray = []
        for (const e in pkmn){
            if (pkmn[e].hiddenAbility?.id == el.dataset.dictionaryAbility) signatureArray.push(e)
        }
        if (signatureArray.length>0) signatureText = `<br><br>Additionally, appears as the Hidden ability of ${joinWithAnd(signatureArray)}`
        

        document.getElementById("tooltipBottom").innerHTML = `
        Learnable by ${joinWithAnd(ability[el.dataset.dictionaryAbility].type)} types ${signatureText}
        `
        } else {

        const signatureArray = []
        for (const e in pkmn){
            if (pkmn[e].hiddenAbility?.id == el.dataset.dictionaryAbility) signatureArray.push(e)
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




    if (el.dataset.dictionaryMove !== undefined) {



        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `inline`
        document.getElementById("tooltipTop").innerHTML = `<img src="img/items/tm${format(move[el.dataset.dictionaryMove].type)}.png">`
        document.getElementById("tooltipTitle").innerHTML = format(el.dataset.dictionaryMove)
        document.getElementById("tooltipMid").style.display = "inline"


        const affectedAbilities = []
        if (move[el.dataset.dictionaryMove].affectedBy!==undefined) affectedAbilities.push(move[el.dataset.dictionaryMove].affectedBy)
        if (move[el.dataset.dictionaryMove].hitEffect) affectedAbilities.push(ability.sereneGrace.id)
        if (move[el.dataset.dictionaryMove].hitEffect && (move[el.dataset.dictionaryMove].power>0 && move[el.dataset.dictionaryMove].unaffectedBySheerForce!=true) ) affectedAbilities.push(ability.sheerForce.id)
        if (move[el.dataset.dictionaryMove].multihit && move[el.dataset.dictionaryMove].multihit[1] > move[el.dataset.dictionaryMove].multihit[0]) affectedAbilities.push(ability.skillLink.id)
        if (move[el.dataset.dictionaryMove].power <= 60 && move[el.dataset.dictionaryMove].power!=0) affectedAbilities.push(ability.technician.id)
            
        let affectedText = ""
        if (affectedAbilities.length>0) affectedText =`<br>Affected by ${joinWithAnd(affectedAbilities)}`


        document.getElementById("tooltipMid").innerHTML = `${move[el.dataset.dictionaryMove].power} Power, ${format(move[el.dataset.dictionaryMove].split)}${affectedText}`
        if (move[el.dataset.dictionaryMove].info != undefined) document.getElementById("tooltipMid").innerHTML += `<br>${move[el.dataset.dictionaryMove].info()}`
        
        
        
        
        
        if (move[el.dataset.dictionaryMove].moveset) {

        let rarity = `(Common)`
        if (move[el.dataset.dictionaryMove].rarity == 2) rarity = `(Uncommon)`
        if (move[el.dataset.dictionaryMove].rarity == 3) rarity = `(Rare)`

        document.getElementById("tooltipBottom").innerHTML = `
        Learnable by ${joinWithAnd(move[el.dataset.dictionaryMove].moveset)} types ${rarity}
        `
        } else{

        const signatureArray = []
        for (const e in pkmn){
            if (pkmn[e].signature?.id == el.dataset.dictionaryMove) signatureArray.push(e)
        }



        document.getElementById("tooltipBottom").innerHTML = `
        This move can only appear as the Signature Move of ${joinWithAnd(signatureArray)}
        `
        }

        
        
    
        openTooltip()


    }



    if (el.dataset.dictionaryPkmn !== undefined) {

        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipTop").innerHTML = `<div style="cursor:help" data-pkmn="${el.dataset.dictionaryPkmn}"><img src="img/pkmn/sprite/${el.dataset.dictionaryPkmn}.png"></div>`
        if (pkmn[el.dataset.dictionaryPkmn].shiny) document.getElementById("tooltipTop").innerHTML = `<div style="cursor:help" data-pkmn="${el.dataset.dictionaryPkmn}"><img src="img/pkmn/shiny/${el.dataset.dictionaryPkmn}.png"></div>`
        if (pkmn[el.dataset.dictionaryPkmn].caught == 0) document.getElementById("tooltipTop").innerHTML = `<div><img style="filter:brightness(0)" src="img/pkmn/sprite/${el.dataset.dictionaryPkmn}.png"></div>`
        document.getElementById("tooltipTitle").innerHTML = format(el.dataset.dictionaryPkmn)
        document.getElementById("tooltipMid").style.display = "inline"



        let wildSpawn = ""
        let eventSpawn = ""
        let encounterSpawn = ""

        for (const i in areas){
            if (areas[i].type=="wild") {
                if (areas[i].spawns.common.includes(pkmn[el.dataset.dictionaryPkmn]) || areas[i].spawns.uncommon.includes(pkmn[el.dataset.dictionaryPkmn]) || areas[i].spawns.rare.includes(pkmn[el.dataset.dictionaryPkmn])){
                    wildSpawn = areas[i].id
                }
            }



            if (areas[i].type=="event" && areas[i].uncatchable != true){
                if (areas[i].spawns?.common?.includes(pkmn[el.dataset.dictionaryPkmn]) || areas[i].spawns?.uncommon?.includes(pkmn[el.dataset.dictionaryPkmn]) || areas[i].spawns?.rare?.includes(pkmn[el.dataset.dictionaryPkmn])){
                    eventSpawn = areas[i].id
                }
            }


            if (areas[i].encounter) {
                if ( areas[i].team.slot1 == pkmn[el.dataset.dictionaryPkmn] || areas[i].team.reward == [pkmn[el.dataset.dictionaryPkmn]]) encounterSpawn = areas[i].id
            }
        }


        let parkSpawn = ""


        




        let spawnLocation = ""
        if (wildSpawn != "") spawnLocation += `<span>Found in the wild area ${format(wildSpawn)} (Rotation ${areas[wildSpawn].rotation})</span>`
        if ( wildlifePoolCommon.includes(el.dataset.dictionaryPkmn) || wildlifePoolUncommon.includes(el.dataset.dictionaryPkmn) || wildlifePoolRare.includes(el.dataset.dictionaryPkmn) ) spawnLocation += `<span>Found randomly in the Wildlife Park wild area</span>`
        if ( exclusiveFrontierPkmn.includes(pkmn[el.dataset.dictionaryPkmn]) ) spawnLocation += `<span>Obtained as a random reward in the Battle Frontier</span>`
        if (encounterSpawn != "") spawnLocation += `<span>Obtained in the event ${format(areas[encounterSpawn].name)} (Rotation ${areas[encounterSpawn].rotation})</span>`
        if (eventSpawn != "") spawnLocation += `<span>Found in the event ${format(eventSpawn)} (Rotation ${areas[eventSpawn].rotation})</span>`


        if (spawnLocation == "") spawnLocation = `This Pokemon cannot be caught on its current stage`

        document.getElementById("tooltipMid").innerHTML = `
        <span style="display:flex; flex-direction:column">${spawnLocation}<span>
        `



        document.getElementById("tooltipBottom").innerHTML = `
        <div>Abilities</div>
        <div style="width:100%; height:100%; position:relative; display:flex;justify-content:start;align-items:center;flex-direction:column; max-height:25vh; overflow-y:scroll; padding-top:0.5rem;">${getAbilityPoolByTier(pkmn[el.dataset.dictionaryPkmn])}</div>
        
        `


        openTooltip()



    }







    if (el.dataset.dictionaryItem !== undefined) {



        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `inline`
        document.getElementById("tooltipTitle").innerHTML = format(el.dataset.dictionaryItem)
        document.getElementById("tooltipMid").style.display = "inline"

        if (item[el.dataset.dictionaryItem].type !== "tm") document.getElementById("tooltipTop").innerHTML = `<img src="img/items/${el.dataset.dictionaryItem}.png">`
        if (item[el.dataset.dictionaryItem].type == "tm") document.getElementById("tooltipTop").innerHTML = `<img src="img/items/tm${format(move[item[el.dataset.dictionaryItem].move].type)}.png">`





        document.getElementById("tooltipMid").innerHTML = `${item[el.dataset.dictionaryItem].info()}<br>(You have ${item[el.dataset.dictionaryItem].got})`




        let obtainText = ""


        for (const i in areas){
            if (areas[i].type=="wild") {
            if (areas[i].drops?.common?.includes(item[el.dataset.dictionaryItem]) || areas[i].drops?.uncommon?.includes(item[el.dataset.dictionaryItem]) || areas[i].drops?.rare?.includes(item[el.dataset.dictionaryItem])){
                obtainText += `<span>Can be dropped in the wild area ${format(i)} (Rotation ${areas[i].rotation})</span>`
            }
            }

            if (areas[i].type=="event") {
            if (areas[i].drops?.common?.includes(item[el.dataset.dictionaryItem]) || areas[i].drops?.uncommon?.includes(item[el.dataset.dictionaryItem]) || areas[i].drops?.rare?.includes(item[el.dataset.dictionaryItem])){
                obtainText += `<span>Can be dropped in the event area ${format(i)} (Rotation ${areas[i].rotation})</span>`
            }
            }

            if (areas[i].type=="dungeon") {
            if (areas[i].drops?.common?.includes(item[el.dataset.dictionaryItem]) || areas[i].drops?.uncommon?.includes(item[el.dataset.dictionaryItem]) || areas[i].drops?.rare?.includes(item[el.dataset.dictionaryItem])){
                obtainText += `<span>Can be dropped in the dungeon area ${format(i)} (Rotation ${areas[i].rotation})</span>`
            }
            }


            if (areas[i].encounter) {
            if (areas[i].reward?.includes(item[el.dataset.dictionaryItem])){
                obtainText += `<span>Reward from the event ${format(areas[i].name)} (Rotation ${areas[i].rotation})</span>`
            }
            }
        }

        if ([item.hpUp.id, item.protein.id, item.iron.id, item.calcium.id, item.zinc.id, item.carbos.id, item.timeCandy.id].includes(el.dataset.dictionaryItem)) obtainText += `<span>Obtained via Export Reward</span>`

        for (const i in spiralingRewards) if (spiralingRewards[i].item==el.dataset.dictionaryItem) obtainText += `<span>Reward from Spiraling Tower</span>`


        for (const i in shop) {
            if (shop[i].icon == el.dataset.dictionaryItem) obtainText += `<span>Can be bought in the Poke-Mart</span>`
        }



        if (obtainText=="") obtainText += `<span>This item is currently unobtainable</span>`


        
        
        document.getElementById("tooltipBottom").innerHTML = `<span style="display:flex; flex-direction:column">${obtainText}<span>`

        
     
    
        openTooltip()


    }

    




})





//banger formulas submitted by Enyxiel

function stripHTML(str) {
    return str.replace(/<[^>]*>/g, "").trim();
}

function getAbilityPoolByTier(poke) {
    if (!poke || !poke.type) {
        console.log("Must pass a full Pokemon object, e.g. pkmn.charizard");
        return "";
    }

    const types = poke.type;
    const hidden = poke.hiddenAbility?.id;

    const raritySplit = [0.736, 0.2, 0.064];
    const pct = n => (n * 100).toFixed(1) + "%";

    const buckets = { 1: [], 2: [], 3: [] };

    Object.keys(ability).forEach(a => {
        const ab = ability[a];

        if (!ab.type) return;
        if (a === hidden) return;

        const matches =
            ab.type.includes("all") ||
            ab.type.some(t => types.includes(t));

        if (!matches) return;

        buckets[ab.rarity].push(a);
    });

    const list = [];

    [1, 2, 3].forEach(rarity => {
        const abilities = buckets[rarity];
        const totalChance = raritySplit[rarity - 1];

        const perAbilityChance =
            abilities.length
                ? pct(totalChance / abilities.length)
                : "0%";

        abilities.forEach(id => {
            list.push(
                `<div class="dictionary-overview-data" style="cursor:help" data-ability="${id}"><span>${format(id)}</span><div></div><span>${perAbilityChance}</span></div>`
            );
        });
    });

    return list.join("");
}




















