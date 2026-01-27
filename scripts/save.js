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
    if (areas[i].type=="frontier") data[i].itemReward = areas[i].itemReward;
    if (areas[i].type=="frontier") data[i].background = areas[i].background;
    if (areas[i].id=="training") data[i].tier = areas[i].tier;
    if (areas[i].id=="training") data[i].currentTraining = areas[i].currentTraining;
    if (areas[i].id=="wildlifePark") data[i].spawns = areas[i].spawns;
    if (areas[i].id=="wildlifePark") data[i].icon = areas[i].icon;
    if (areas[i].id==areas.frontierBattleFactory.id) data[i].icon = areas[i].icon;
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
    data[i].movepoolMemory = pkmn[i].movepoolMemory;
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
    if (areas[i].type=="frontier") areas[i].itemReward = data[i].itemReward;
    if (areas[i].type=="frontier") areas[i].background = data[i].background;
    if (areas[i].id=="training") areas[i].tier = data[i].tier;
    if (areas[i].id=="training") areas[i].currentTraining = data[i].currentTraining;
    if (areas[i].id=="wildlifePark") areas[i].spawns = data[i].spawns;
    if (areas[i].id=="wildlifePark") areas[i].icon = data[i].icon;
    if (areas[i].id==areas.frontierBattleFactory.id) areas[i].icon = data[i].icon;

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
      pkmn[i].movepoolMemory = data[i].movepoolMemory;
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


async function importDataFromRemote() {
  const input = document.getElementById("dataInput").value.trim();
  if (!input) {
    alert("Please paste a Gist URL or Gist RAW URL.");
    return;
  }

  try {
    const rawUrl = await resolveGistRawUrl(input);
    console.log("Resolved RAW URL:", rawUrl);

    const res = await fetch(rawUrl, {
      headers: { Accept: "application/json, text/plain;q=0.9, */*;q=0.8" },
      cache: "no-cache",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);

    // Read as text first; some RAW endpoints might not set JSON content-type
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("The RAW content is not valid JSON.");
    }

    console.log("Gist JSON:", data);
    localStorage.setItem("gameData", JSON.stringify(data));
    loadGame();
    window.location.reload(); // if you still want to refresh
  } catch (err) {
    console.error("Failed to import from Gist:", err);
    alert(err.message || "Failed to import from Gist.");
  }
}

async function resolveGistRawUrl(urlOrRaw) {
  // If the user already pasted a RAW URL, return as-is
  try {
    const u = new URL(urlOrRaw);
    if (u.hostname === "gist.githubusercontent.com" && u.pathname.includes("/raw")) {
      return urlOrRaw;
    }

    if (u.hostname === "gist.github.com") {
      const parts = u.pathname.split("/").filter(Boolean); // [user, gistId, ...]
      if (parts.length < 2) {
        throw new Error("Invalid Gist URL.");
      }
      const user = parts[0];
      const gistId = parts[1];

      // If filename is specified via query (?file=...) or hash (#file-...)
      let filename = u.searchParams.get("file");
      if (!filename && u.hash && u.hash.startsWith("#file-")) {
        // Convert #file-my-json-json to my.json.json
        const raw = u.hash.slice("#file-".length);
        filename = raw
          .replace(/-json$/i, ".json")
          .replace(/-([a-z0-9])/gi, (m, c) => "." + c)
          .replace(/-/g, "");
      }

      if (!filename) {
        // No filename specified: call Gist API to list files, pick the only file
        const apiUrl = `https://api.github.com/gists/${gistId}`;
        const apiRes = await fetch(apiUrl, { cache: "no-cache" });
        if (!apiRes.ok) {
          throw new Error(`Failed to read Gist metadata (HTTP ${apiRes.status}).`);
        }
        const gist = await apiRes.json();
        const fileNames = Object.keys(gist.files || {});
        if (fileNames.length === 0) {
          throw new Error("This Gist has no files.");
        }
        if (fileNames.length > 1) {
          // If multiple files, you can choose a strategy; here we pick the first
          // or you can instruct the user to specify ?file=<name>
          filename = fileNames[0];
        } else {
          filename = fileNames[0];
        }
      }

      // Build RAW URL
      return `https://gist.githubusercontent.com/${user}/${gistId}/raw/${encodeURIComponent(
        filename
      )}`;
    }

    // If it's some other host, assume the user supplied a valid raw URL already
    return urlOrRaw;
  } catch {
    // Not a URL: treat as-is (will likely fail upstream)
    return urlOrRaw;
  }
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