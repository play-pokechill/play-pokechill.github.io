saved.firstTimePlaying = true //esta flag se tiene que quitar cuando seleccione el pkmn, es lo que hace que no puedas guardar


function saveGame() {
  if (saved.firstTimePlaying == true) return //scary!
  let data = {};

  // Variable suelta
  data.saved = saved;
  data.team = team;

  // Items
  for (const i in item) {
    data[i] = {};
    data[i].got = item[i].got;
    data[i].newItem = item[i].newItem;
  }

  // Areas
  for (const i in areas) {
    data[i] = {};
    data[i].defeated = areas[i].defeated;

    if (areas[i].type=="frontier") data[i].level = areas[i].level;
    if (areas[i].type=="frontier") data[i].team = areas[i].team;
    if (areas[i].type=="frontier") data[i].difficulty = areas[i].difficulty;
    if (areas[i].type=="frontier") data[i].tier = areas[i].tier;
    if (areas[i].type=="frontier") data[i].reward = areas[i].reward;
    if (areas[i].type=="frontier") data[i].background = areas[i].background;
    if (areas[i].id=="training") data[i].tier = areas[i].tier;
    if (areas[i].id=="training") data[i].currentTraining = areas[i].currentTraining;
    if (areas[i].id=="wildlifePark") data[i].spawns = areas[i].spawns;
    if (areas[i].id=="wildlifePark") data[i].icon = areas[i].icon;
  }

  // Pokémon
  for (const i in pkmn) {
    if (!data[i]) data[i] = {};
    data[i].caught = pkmn[i].caught;
    data[i].movepool = pkmn[i].movepool;
    data[i].level = pkmn[i].level;
    data[i].moves = pkmn[i].moves;
    data[i].newmoves = pkmn[i].newmoves;
    data[i].ivs = pkmn[i].ivs;
    data[i].exp = pkmn[i].exp;
    data[i].newEvolution = pkmn[i].newEvolution;
    data[i].ability = pkmn[i].ability;
    data[i].shiny = pkmn[i].shiny;
    data[i].shinyDisabled = pkmn[i].shinyDisabled;
    data[i].hiddenAbilityUnlocked = pkmn[i].hiddenAbilityUnlocked;
    data[i].tag = pkmn[i].tag;
    data[i].ribbons = pkmn[i].ribbons;
    data[i].pokerus = pkmn[i].pokerus;
    data[i].recordSpiraling = pkmn[i].recordSpiraling;
  }

  localStorage.setItem("gameData", JSON.stringify(data));
}

// ---- CARGAR ----
function loadGame() {
  const raw = localStorage.getItem("gameData");
  if (!raw) {
    return;
  } 

  const data = JSON.parse(raw);

  if (data.saved !== undefined) saved = data.saved;
  if (data.team !== undefined) team = data.team;

  for (const i in item) {
    if (data[i]) {
      item[i].got = data[i].got;
      item[i].newItem = data[i].newItem;
    }
  }

  for (const i in areas) {
    if (data[i]) {
      areas[i].defeated = data[i].defeated;

    if (areas[i].type=="frontier") areas[i].level = data[i].level;
    if (areas[i].type=="frontier") areas[i].team = data[i].team;
    if (areas[i].type=="frontier") areas[i].difficulty = data[i].difficulty;
    if (areas[i].type=="frontier") areas[i].tier = data[i].tier;
    if (areas[i].type=="frontier") areas[i].reward = data[i].reward;
    if (areas[i].type=="frontier") areas[i].background = data[i].background;
    if (areas[i].id=="training") areas[i].tier = data[i].tier;
    if (areas[i].id=="training") areas[i].currentTraining = data[i].currentTraining;
    if (areas[i].id=="wildlifePark") areas[i].spawns = data[i].spawns;
    if (areas[i].id=="wildlifePark") areas[i].icon = data[i].icon;

  }
  }

  for (const i in pkmn) {
    if (data[i]) {
      pkmn[i].caught = data[i].caught;
      pkmn[i].movepool = data[i].movepool;
      pkmn[i].level = data[i].level;
      pkmn[i].moves = data[i].moves;
      pkmn[i].newmoves = data[i].newmoves;
      pkmn[i].ivs = data[i].ivs;
      pkmn[i].exp = data[i].exp;
      pkmn[i].newEvolution = data[i].newEvolution;
      pkmn[i].ability = data[i].ability;
      pkmn[i].shiny = data[i].shiny;
      pkmn[i].shinyDisabled = data[i].shinyDisabled;
      pkmn[i].hiddenAbilityUnlocked = data[i].hiddenAbilityUnlocked;
      pkmn[i].tag = data[i].tag;
      pkmn[i].ribbons = data[i].ribbons;
      pkmn[i].pokerus = data[i].pokerus;
      pkmn[i].recordSpiraling = data[i].recordSpiraling;
    }
  }

}


function exportData() {
  const raw = localStorage.getItem("gameData");
  if (!raw) return;

  const blob = new Blob([raw], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `Pokechill-${new Date().toISOString().split("T")[0]}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

function importData() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";

  input.onchange = () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        localStorage.setItem("gameData", JSON.stringify(data));

        loadGame();

        window.location.reload();
      } catch (err) {
        alert("Error loading data.");
      }
    };

    reader.readAsText(file);
  };

  input.click();
}







function exportToText() {
  const raw = localStorage.getItem("gameData");
  if (!raw) {
    console.log("No save data found");
    return null;
  }
  
  return raw;
}

function loadFromText() {
  const input = document.getElementById("text-data-raw");
  if (!input) {
    alert("Element with id 'text-data-raw' not found");
    return;
  }

  const jsonData = input.value.trim();
  if (!jsonData) {
    alert("No data found in the input");
    return;
  }

  try {
    const data = JSON.parse(jsonData);
    localStorage.setItem("gameData", JSON.stringify(data));
    loadGame();
    window.location.reload();
  } catch (err) {
    alert("Error loading data: " + err.message);
  }
}

// paste from clipboard using the API
async function pasteFromClipboard() {
  const input = document.getElementById("text-data-raw");
  if (!input) {
    alert("Element with id 'text-data-raw' not found");
    return;
  }

  try {
    const text = await navigator.clipboard.readText();
    input.value = text;
    alert("Data pasted successfully!");
  } catch (err) {
    alert("Could not paste from clipboard. Please paste manually or grant clipboard permissions.");
  }
}

function textData() {
  saveGame();
  document.getElementById("tooltipTop").style.display = `none`;
  document.getElementById("tooltipTitle").style.display = `none`;

  const savedData = exportToText();

  if (savedData) {
    document.getElementById("tooltipMid").innerHTML = `
      This is your savefile code<br>You can copy or paste savefile codes here to export or import saves<br>
      <textarea id="text-data-raw" rows="10" style="width:95%; resize:vertical; font-family:monospace; font-size:0.9rem;"></textarea>
    `;
    
    document.getElementById("text-data-raw").value = savedData;

    document.getElementById("tooltipBottom").innerHTML = `
      <div style="display:flex;width:100%; align-items:center;justify-content:center; flex-wrap:wrap;">
        <div onClick='navigator.clipboard.writeText(document.getElementById("text-data-raw").value); alert("Data copied to the Clipboard!");' 
             style="cursor:pointer; font-size:2rem; width:33%; padding:10px;" id="prevent-tooltip-exit">
          Copy
        </div>
        <div onClick='pasteFromClipboard()' 
             style="cursor:pointer; font-size:2rem; width:33%; padding:10px;" id="prevent-tooltip-exit">
          Paste
        </div>
        <div onClick='loadFromText()' 
             style="cursor:pointer; font-size:2rem; width:33%; padding:10px;" id="prevent-tooltip-exit">
          Load
        </div>
      </div>
    `;
  } else {
    document.getElementById("tooltipMid").innerHTML = `
      You can copy or paste savefile codes here to export or import saves<br>
      <textarea id="text-data-raw" rows="10" style="width:95%; resize:vertical; font-family:monospace; font-size:0.9rem;"></textarea>
    `;

    document.getElementById("tooltipBottom").innerHTML = `
      <div style="display:flex;width:100%; align-items:center;justify-content:center;">
        <div onClick='pasteFromClipboard()' 
             style="cursor:pointer; font-size:2rem; width:50%; padding:10px;" id="prevent-tooltip-exit">
          Paste
        </div>
        <div onClick='loadFromText()' 
             style="cursor:pointer; font-size:2rem; width:50%; padding:10px;" id="prevent-tooltip-exit">
          Load
        </div>
      </div>
    `;
  }

  openTooltip();
}





setInterval(saveGame, 1 * 60 * 1000); 

document.addEventListener("keydown", (ev) => {
  if (ev.key.toLowerCase() === "s") {
    saveGame();
  }
});

function clearData() {
  localStorage.clear();
  window.location.reload();
}