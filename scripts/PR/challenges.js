// Custom Challenges - Create or import custom challenges
// by gwenillia

(function () {
  const CONFIG = {
    AREA_ID: "customChallenge",
    MAX_TEAM: 6,
    MIN_TEAM: 1,
  };

  const state = {
    active: false,
    snapshot: null,
    pkmnSnapshots: {},
    pendingStart: false
  };

  const nameMaps = {
    pokemon: null,
    moves: null,
    abilities: null,
    items: null
  };

  // ============= Utilities =============
  const normalize = (val) => String(val || "").toLowerCase().replace(/[^a-z0-9]/g, "");

  const buildNameMap = (source, formatter, renameKey) => {
    const map = {};
    const add = (label, id) => {
      const key = normalize(label);
      if (key) map[key] = id;
    };
    
    for (const id in source) {
      add(id, id);
      if (formatter) add(formatter(id), id);
      if (renameKey && source[id]?.[renameKey]) add(source[id][renameKey], id);
    }
    return map;
  };

  const ensureNameMaps = () => {
    if (!nameMaps.pokemon) {
      nameMaps.pokemon = buildNameMap(pkmn, format, "rename");
      nameMaps.moves = buildNameMap(move, format, "rename");
      nameMaps.abilities = buildNameMap(ability, format, "rename");
      nameMaps.items = buildNameMap(item, format, "rename");
    }
  };

  const ensureCustomArea = () => {
    if (!areas[CONFIG.AREA_ID]) {
      areas[CONFIG.AREA_ID] = {
        id: CONFIG.AREA_ID,
        trainer: true,
        customChallenge: true
      };
    }
    return areas[CONFIG.AREA_ID];
  };

  const ensureSavedChallenges = () => {
    if (!saved.customChallenges) saved.customChallenges = [];
  };

  // ============= Pokemon Data Management =============
  const snapshotPkmn = (id) => ({
    level: pkmn[id].level,
    exp: pkmn[id].exp,
    ivs: { ...(pkmn[id].ivs || {}) },
    moves: { ...(pkmn[id].moves || {}) },
    movepool: [...(pkmn[id].movepool || [])],
    newmoves: [...(pkmn[id].newmoves || [])],
    newEvolution: pkmn[id].newEvolution,
    ability: pkmn[id].ability,
    hiddenAbilityUnlocked: pkmn[id].hiddenAbilityUnlocked,
    tag: pkmn[id].tag,
    ribbons: [...(pkmn[id].ribbons || [])]
  });

  const restorePkmn = (id, snap) => Object.assign(pkmn[id], snap);

  const snapshotTeam = () => {
    const snap = [];
    for (let i = 1; i <= CONFIG.MAX_TEAM; i++) {
      const slot = team[`slot${i}`];
      snap.push(slot?.pkmn ? { id: slot.pkmn.id, item: slot.item } : null);
    }
    return snap;
  };

  const restoreTeam = (snap) => {
    if (!snap) return;
    for (let i = 1; i <= CONFIG.MAX_TEAM; i++) {
      const key = `slot${i}`;
      const data = snap[i - 1];
      team[key].pkmn = data ? pkmn[data.id] : undefined;
      team[key].item = data?.item;
    }
  };

  const setPokemonStats = (mon, applyMoves = true) => {
    if (!state.pkmnSnapshots[mon.id]) {
      state.pkmnSnapshots[mon.id] = snapshotPkmn(mon.id);
    }

    Object.assign(pkmn[mon.id], {
      level: mon.level,
      exp: 0,
      ivs: { ...mon.ivs },
      ability: mon.ability ?? pkmn[mon.id].ability,
    });

    if (applyMoves) {
      pkmn[mon.id].moves = {
        slot1: mon.moves[0],
        slot2: mon.moves[1],
        slot3: mon.moves[2],
        slot4: mon.moves[3]
      };
      pkmn[mon.id].movepool = [...mon.moves];
    }
  };

  const applyPlayerTeam = (teamList) => {
    for (let i = 1; i <= CONFIG.MAX_TEAM; i++) {
      const key = `slot${i}`;
      const mon = teamList[i - 1];
      if (mon) {
        setPokemonStats(mon);
        team[key].pkmn = pkmn[mon.id];
        team[key].item = mon.item;
      } else {
        team[key].pkmn = undefined;
        team[key].item = undefined;
      }
    }
  };

  const applyEnemyTeam = (teamList) => {
    const area = ensureCustomArea();
    area.team = {};
    area.teamLevels = {};
    let totalLevel = 0;

    teamList.forEach((mon, i) => {
      const key = `slot${i + 1}`;
      setPokemonStats(mon);
      area.team[key] = pkmn[mon.id];
      area.team[`${key}Moves`] = mon.moves;
      area.teamLevels[key] = mon.level;
      totalLevel += mon.level;
    });

    area.level = teamList.length > 0 ? Math.round(totalLevel / teamList.length) : 1;
  };

  const restoreCustomTeam = () => {
    restoreTeam(state.snapshot);
    Object.keys(state.pkmnSnapshots).forEach(id => restorePkmn(id, state.pkmnSnapshots[id]));
    Object.assign(state, {
      snapshot: null,
      pkmnSnapshots: {},
      active: false,
    });
  };

  // ============= Parsing =============
  const normalizeStatName = (name) => {
    const key = normalize(name);
    const statMap = {
      hp: "hp",
      atk: "atk", attack: "atk",
      def: "def", defense: "def",
      spa: "satk", spatk: "satk", specialattack: "satk", spattack: "satk",
      spd: "sdef", spdef: "sdef", specialdefense: "sdef", spdefense: "sdef",
      spe: "spe", speed: "spe"
    };
    return statMap[key] || null;
  };

  const parseIvLine = (line, mon, errors) => {
    const ivLine = line.replace(/^ivs:/i, "").trim();
    ivLine.split("/").forEach(part => {
      const match = part.trim().match(/(\d+)\s*([a-zA-Z.\s]+)/);
      if (!match) return;
      
      const value = parseInt(match[1], 10);
      const statKey = normalizeStatName(match[2]);
      
      if (!statKey) {
        errors.push(`Unknown IV stat: ${match[2].trim()}`);
      } else if (isNaN(value) || value < 0 || value > 6) {
        errors.push(`Invalid IV value for ${statKey}: ${value}`);
      } else {
        mon.ivs[statKey] = Math.max(0, Math.min(6, value));
      }
    });
  };

  const parsePokemonHeader = (header, errors, sideLabel) => {
    const result = {
      id: undefined,
      level: 1,
      ability: undefined,
      ivs: { hp: 0, atk: 0, def: 0, satk: 0, sdef: 0, spe: 0 },
      moves: [],
      item: undefined
    };

    let [line, ...itemParts] = header.trim().split("@");
    const itemPart = itemParts.join("@").trim();
    
    let name = line.trim();

    const pokemonId = nameMaps.pokemon[normalize(name)];
    if (!pokemonId) {
      errors.push(`Unknown ${sideLabel} Pokémon: ${name}`);
    } else {
      result.id = pokemonId;
    }

    if (itemPart) {
      const itemId = nameMaps.items[normalize(itemPart)];
      if (!itemId) {
        errors.push(`Unknown ${sideLabel} item: ${itemPart}`);
      } else {
        result.item = itemId;
      }
    }

    return result;
  };

  const parseChallengeText = (raw) => {
    ensureNameMaps();
    const result = { title: "", notes: "", playerTeam: [], enemyTeam: [], errors: [] };
    const lines = raw.split(/\r?\n/);
    let current = null;
    let currentSide = null;

    const pushCurrent = () => {
      if (!current || !currentSide) return;
      result[`${currentSide}Team`].push(current);
    };

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) return;

      // Title/Notes
      const titleMatch = trimmed.match(/^title:\s*(.+)$/i);
      if (titleMatch) {
        result.title = titleMatch[1].trim();
        return;
      }
      const notesMatch = trimmed.match(/^notes:\s*(.+)$/i);
      if (notesMatch) {
        result.notes = notesMatch[1].trim();
        return;
      }

      // Pokemon tag
      const tagMatch = trimmed.match(/^\[(player|enemy)\]\s*(.+)$/i);
      if (tagMatch) {
        pushCurrent();
        currentSide = tagMatch[1].toLowerCase();
        current = parsePokemonHeader(tagMatch[2], result.errors, tagMatch[1]);
        return;
      }

      if (!current) return;

      // Ability
      if (/^ability:/i.test(trimmed)) {
        const abilityName = trimmed.replace(/^ability:/i, "").trim();
        const abilityId = nameMaps.abilities[normalize(abilityName)];
        if (!abilityId) result.errors.push(`Unknown ability: ${abilityName}`);
        else current.ability = abilityId;
        return;
      }

      // Level
      if (/^level:/i.test(trimmed)) {
        const levelValue = parseInt(trimmed.replace(/^level:/i, "").trim(), 10);
        if (isNaN(levelValue) || levelValue < 1) {
          result.errors.push(`Invalid level: ${trimmed}`);
        } else {
          current.level = levelValue;
        }
        return;
      }


      // IVs
      if (/^ivs:/i.test(trimmed)) {
        parseIvLine(trimmed, current, result.errors);
        return;
      }

      // Moves
      if (/^-\s+/.test(trimmed)) {
        const moveName = trimmed.replace(/^-\s+/, "").trim();
        const moveId = nameMaps.moves[normalize(moveName)];
        if (!moveId) {
          result.errors.push(`Unknown move: ${moveName}`);
        } else if (current.moves.length >= 4) {
          result.errors.push(`Too many moves for ${format(current.id)}.`);
        } else {
          current.moves.push(moveId);
        }
      }
    });

    pushCurrent();

    // Validation
    if (result.enemyTeam.length < CONFIG.MIN_TEAM || result.enemyTeam.length > CONFIG.MAX_TEAM) {
      result.errors.push(`Enemy team must have ${CONFIG.MIN_TEAM}-${CONFIG.MAX_TEAM} Pokémon.`);
    }
    [...result.playerTeam, ...result.enemyTeam].forEach(mon => {
      if (mon.moves.length === 0) {
        result.errors.push(`${format(mon.id)} needs at least one move.`);
      }
    });

    return result;
  };

  // ============= UI Functions =============
  const formatTeamPreview = (team) => 
    team.length ? team.map(mon => `${format(mon.id)} (Lv ${mon.level})`).join(", ") : "None";

  const renderPreview = (parseResult) => {
    const preview = document.getElementById("custom-challenge-preview");
    if (!preview) return;
    preview.innerHTML = `
      <strong>Player Pool:</strong> ${formatTeamPreview(parseResult.playerTeam)}<br>
      <strong>Enemy Team:</strong> ${formatTeamPreview(parseResult.enemyTeam)}<br>
      <strong>Reward:</strong> 1 Bottle Cap
    `;
  };

  const showError = (msg) => {
    const el = document.getElementById("custom-challenge-error");
    if (el) el.textContent = msg;
  };

  const clearError = () => showError("");

  const openEditor = (challenge) => {
    const editor = document.getElementById("custom-challenge-editor");
    if (!editor) return;
    
    editor.style.display = "flex";
    document.getElementById("custom-challenge-title").value = challenge?.title ?? "";
    document.getElementById("custom-challenge-notes").value = challenge?.notes ?? "";
    document.getElementById("custom-challenge-text").value = challenge?.rawText ?? 
    `[Player] Pikachu @ Life Orb
Ability: Static
Level: 50
IVs: 6 HP / 0 Atk / 0 Def / 6 SpA / 6 SpD / 6 Spe
- Thunderbolt
[Enemy] Gengar
Ability: Levitate
Level: 50
IVs: 0 HP / 0 Atk / 0 Def / 6 SpA / 6 SpD / 6 Spe
- Shadow Ball"
    
    
    `;
    editor.dataset.editId = challenge?.id ?? "";
    document.getElementById("custom-challenge-preview").innerHTML = "";
    clearError();

    const list = document.getElementById("custom-challenges-list");
    if (!list) return;

    if (challenge?.id) {
      const card = list.querySelector(`[data-challenge-id="${challenge.id}"]`);
      if (card) card.insertAdjacentElement("afterend", editor);
    } else {
      list.insertAdjacentElement("beforebegin", editor);
    }
  };

  const closeEditor = () => {
    const editor = document.getElementById("custom-challenge-editor");
    if (!editor) return;
    editor.style.display = "none";
    editor.dataset.editId = "";
    clearError();
  };

  const handleSave = () => {
    const title = document.getElementById("custom-challenge-title");
    const notes = document.getElementById("custom-challenge-notes");
    const text = document.getElementById("custom-challenge-text");
    const editor = document.getElementById("custom-challenge-editor");

    const rawTitle = title.value.trim();
    const rawText = text.value.trim();
    if (!rawTitle) {
      showError("Give your challenge a title.");
      return;
    }

    if (!rawText) {
      showError("Make a challenge text first.");
      return;
    }

    const parseResult = parseChallengeText(rawText);
    if (parseResult.errors.length) {
      showError(parseResult.errors.join(" "));
      renderPreview(parseResult);
      return;
    }

    const editId = editor.dataset.editId;
    const existing = editId ? saved.customChallenges.find(e => e.id === editId) : null;
    const challenge = {
      id: editId || `challenge-${Date.now()}`,
      title: title.value.trim() || parseResult.title || "Custom Challenge",
      notes: notes.value.trim() || parseResult.notes || "",
      rawText,
      playerTeam: parseResult.playerTeam,
      enemyTeam: parseResult.enemyTeam,
      imported: existing?.imported || false
    };

    if (editId) {
      const index = saved.customChallenges.findIndex(e => e.id === editId);
      if (index >= 0) saved.customChallenges[index] = challenge;
    } else {
      saved.customChallenges.unshift(challenge);
    }

    saveGame();
    closeEditor();
    updateCustomChallenges();
  };

  const handlePreview = () => {
    const text = document.getElementById("custom-challenge-text");
    if (!text) return;
    const rawText = text.value.trim();
    if (!rawText) return;
    const parseResult = parseChallengeText(rawText);
    renderPreview(parseResult);
    parseResult.errors.length ? showError(parseResult.errors.join(" ")) : clearError();
  };

  const encodeChallenge = (challenge) => {
    const payload = {
      title: challenge.title,
      notes: challenge.notes,
      rawText: challenge.rawText
    };
    return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  };

  const decodeChallenge = (encoded) =>
    JSON.parse(decodeURIComponent(escape(atob(encoded))));

  const openChallengeDialog = ({ title, body, actions }) => {
    const tooltipBackground = document.getElementById("tooltipBackground");
    const tooltipTop = document.getElementById("tooltipTop");
    const tooltipTitle = document.getElementById("tooltipTitle");
    const tooltipMid = document.getElementById("tooltipMid");
    const tooltipBottom = document.getElementById("tooltipBottom");

    tooltipTop.style.display = "none";
    tooltipTitle.style.display = "inline";
    tooltipMid.style.display = "inline";
    tooltipBottom.style.display = "inline";
    tooltipTitle.textContent = title;
    tooltipMid.innerHTML = body || "";

    const bottom = tooltipBottom;
    bottom.innerHTML = "<span id=\"prevent-tooltip-exit\"></span>";

    actions.forEach(({ label, onClick }) => {
      const button = document.createElement("div");
      button.textContent = label;
      button.style.cursor = "pointer";
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        onClick();
      });
      bottom.appendChild(button);
    });

    if (typeof openTooltip === "function") {
      openTooltip();
    }
  };

  const handleImport = () => {
    clearError();
    openChallengeDialog({
      title: "Import Challenge",
      body: `
        <textarea id="custom-challenge-import-input" placeholder="Paste challenge code" style="min-height:8rem; width:100%; padding:.5rem;"></textarea>
        <div id="custom-challenge-import-error" style="color:#ff9e9e; margin-top:0.4rem;"></div>
      `,
      actions: [
        {
          label: "Import",
          onClick: () => {
            const input = document.getElementById("custom-challenge-import-input");
            const errorEl = document.getElementById("custom-challenge-import-error");
            if (errorEl) errorEl.textContent = "";
            if (!input) return;
            const encoded = String(input.value || "").trim();
            if (!encoded) return;

            let data;
            try {
              data = decodeChallenge(encoded);
            } catch (error) {
              if (errorEl) errorEl.textContent = "Invalid challenge code.";
              return;
            }

            const rawText = String(data?.rawText || "").trim();
            if (!rawText) {
              if (errorEl) errorEl.textContent = "Invalid challenge code.";
              return;
            }

            const parseResult = parseChallengeText(rawText);
            if (parseResult.errors.length) {
              if (errorEl) errorEl.textContent = parseResult.errors.join(" ");
              return;
            }

            ensureSavedChallenges();
            saved.customChallenges.unshift({
              id: `challenge-${Date.now()}`,
              title: String(data?.title ?? parseResult.title ?? "Custom Challenge").trim(),
              notes: String(data?.notes ?? parseResult.notes ?? "").trim(),
              rawText,
              playerTeam: parseResult.playerTeam,
              enemyTeam: parseResult.enemyTeam,
              imported: true
            });

            saveGame();
            updateCustomChallenges();
            closeTooltip();
          }
        },
      ]
    });
  };

  const handleExport = (challenge) => {
    if (!challenge) return;

    const encoded = encodeChallenge(challenge);
    openChallengeDialog({
      title: "Challenge Export",
      body: `
        <textarea id=\"custom-challenge-export-code\" readonly style=\"min-height:8rem; width:100%; padding:.5rem;\">${encoded}</textarea>
        <div style=\"opacity:0.75; margin-top:0.4rem;\">Share this code to import the challenge.</div>
      `,
      actions: [
        {
          label: "Copy",
          onClick: () => {
            const output = document.getElementById("custom-challenge-export-code");
            if (!output) return;
            output.select();
            output.setSelectionRange(0, output.value.length);
            if (navigator.clipboard?.writeText) {
              navigator.clipboard.writeText(output.value).catch(() => {});
            }
          }
        },
      ]
    });
  };

  const confirmDelete = (challengeId) => {
    const index = saved.customChallenges.findIndex(e => e.id === challengeId);
    if (index === -1) return;
    saved.customChallenges.splice(index, 1);
    saveGame();
    updateCustomChallenges();
  };

  const beginChallenge = (challenge, parseResult, selectedTeam) => {
    const area = ensureCustomArea();
    state.snapshot = snapshotTeam();
    state.pkmnSnapshots = {};

    if (challenge.isMainChallenge && Array.isArray(challenge.reward)) {
      area.reward = [...challenge.reward];
    } else {
      delete area.reward;
    }

    const uniqueIds = new Set([
      ...selectedTeam.map(m => m.id),
      ...parseResult.enemyTeam.map(m => m.id)
    ]);
    uniqueIds.forEach(id => state.pkmnSnapshots[id] = snapshotPkmn(id));

    applyPlayerTeam(selectedTeam);
    applyEnemyTeam(parseResult.enemyTeam);

    area.name = challenge.title;
    area.customChallenge = true;
    area.defeated = false;

    Object.assign(saved, {
      currentArea: area.id,
      lastAreaJoined: area.id,
      currentAreaBuffer: undefined,
      autoRefight: false
    });

    currentTrainerSlot = 1;
    if (typeof barProgressPlayer !== "undefined") barProgressPlayer = 0;
    if (typeof barProgressWild !== "undefined") barProgressWild = 0;
    if (typeof exploreCombatPlayerTurn !== "undefined") exploreCombatPlayerTurn = 1;
    if (typeof exploreCombatWildTurn !== "undefined") exploreCombatWildTurn = 0;
    if (typeof cancelCurrentPlayerAttack !== "undefined") cancelCurrentPlayerAttack = true;
    if (typeof afkSeconds !== "undefined") afkSeconds = 0;
    setPkmnTeamHp();

    Object.assign(state, {
      active: true,
      pendingStart: true
    });

    document.getElementById("area-end").style.display = "none";
    voidAnimation("explore-transition", "exploreTransition 1s 1");
    document.getElementById("explore-transition").style.display = "flex";

    setTimeout(() => {
      ["custom-challenges-menu", "explore-menu", "vs-menu"].forEach(id => {
        document.getElementById(id).style.display = "none";
      });
      document.getElementById("content-explore").style.display = "flex";
      document.getElementById("menu-button-parent").style.display = "flex";
      saved.currentArea = area.id;
      initialiseArea();
    }, 500);
  };

  const openPlayerSelection = (challenge, parseResult) => {
    const selection = new Set();


    document.getElementById("tooltipTop").style.display = "none";
    document.getElementById("tooltipBottom").innerHTML = "<span id=\"prevent-tooltip-exit\"></span>";
    document.getElementById("tooltipTitle").innerHTML = "Choose Your Team";
    document.getElementById("tooltipMid").innerHTML = `
      <div id="custom-challenge-selection-count">Selected 0/${CONFIG.MAX_TEAM}</div>
      <div style="opacity:0.8; margin-top:0.3rem;">Pick ${CONFIG.MIN_TEAM}-${CONFIG.MAX_TEAM} Pokémon from the player pool.</div>
      <div id="custom-challenge-selection-error" style="color:#ff9e9e; margin-top:0.4rem;"></div>
    `;

    const list = document.createElement("div");
    list.className = "custom-challenge-select-list";

    parseResult.playerTeam.forEach((mon, idx) => {
      const entry = document.createElement("div");
      entry.className = "custom-challenge-select-card";
      entry.dataset.index = String(idx);
      const sprite = `img/pkmn/sprite/${mon.id}.png`;
      
      // Build IV display
      const ivDisplay = Object.entries(mon.ivs)
        .map(([stat, val]) => `${stat.toUpperCase()}: ${val}`)
        .join(" / ");
      
      // Build moves display
      const movesDisplay = mon.moves
        .map(moveId => format(moveId))
        .join(", ");
      
      // Item icon if exists
      const itemIcon = mon.item 
        ? `<img src="img/items/${mon.item}.png" class="custom-challenge-item-icon" title="${format(mon.item)}" alt="${format(mon.item)}">` 
        : '';
      
      entry.innerHTML = `
        ${itemIcon}
        <img class="custom-challenge-select-sprite" src="${sprite}">
        <div class="custom-challenge-select-info">
          <span class="custom-challenge-select-name">${format(mon.id)}</span>
          <span class="custom-challenge-select-level">Level ${mon.level}</span>
          ${mon.ability ? `<span class="custom-challenge-select-ability">Ability: ${format(mon.ability)}</span>` : ''}
          <span class="custom-challenge-select-ivs">${ivDisplay}</span>
          <span class="custom-challenge-select-moves">${movesDisplay}</span>
        </div>
      `;
      
      entry.addEventListener("click", () => {
        const errorEl = document.getElementById("custom-challenge-selection-error");
        if (errorEl) errorEl.textContent = "";

        if (selection.has(idx)) {
          selection.delete(idx);
          entry.classList.remove("selected");
        } else {
          if (selection.size >= CONFIG.MAX_TEAM) {
            if (errorEl) errorEl.textContent = `You can only select ${CONFIG.MAX_TEAM} Pokémon.`;
            return;
          }
          selection.add(idx);
          entry.classList.add("selected");
        }
        
        const counter = document.getElementById("custom-challenge-selection-count");
        if (counter) counter.textContent = `Selected ${selection.size}/${CONFIG.MAX_TEAM}`;
      });
      
      list.appendChild(entry);
    });

    const startButton = document.createElement("div");
    startButton.className = "custom-challenge-button start-challenge-button";
    startButton.textContent = "Start Challenge";
    startButton.style.cssText = "cursor:pointer; margin-top:0.6rem;";
    startButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const errorEl = document.getElementById("custom-challenge-selection-error");
      if (selection.size < CONFIG.MIN_TEAM) {
        if (errorEl) errorEl.textContent = `Select at least ${CONFIG.MIN_TEAM} Pokémon.`;
        return;
      }
      if (errorEl) errorEl.textContent = "";
      const selectedTeam = Array.from(selection).map(i => parseResult.playerTeam[i]);
      closeTooltip();
      beginChallenge(challenge, parseResult, selectedTeam);
    });

    const tooltipBottom = document.getElementById("tooltipBottom");
    tooltipBottom.appendChild(list);
    tooltipBottom.appendChild(startButton);
    
    openTooltip();
  };

  const startChallenge = (challenge) => {
    if (state.active) return;
    const parseResult = parseChallengeText(challenge.rawText);
    if (parseResult.errors.length) {
      showError(parseResult.errors.join(" "));
      return;
    }
    openPlayerSelection(challenge, parseResult);
  };

  const renderChallengeCard = (challenge, options = {}) => {
    const card = document.createElement("div");
    card.className = "custom-challenge-card";
    card.dataset.challengeId = challenge.id;

    const {
      allowEdit = false,
      allowExport = false,
      allowDelete = false
    } = options;

    const title = document.createElement("div");
    title.className = "custom-challenge-card-title";
    title.textContent = challenge.title;

    const notes = document.createElement("div");
    if (challenge.notes) {
      notes.textContent = challenge.notes;
      notes.style.cssText = "opacity:0.8; font-size:0.95rem;";
    }

    const teams = document.createElement("div");
    teams.className = "custom-challenge-card-teams";
    teams.innerHTML = `
      <span><strong>Team:</strong> ${formatTeamPreview(challenge.playerTeam || [])}</span>
      <span><strong>Enemy:</strong> ${formatTeamPreview(challenge.enemyTeam || [])}</span>
    `;

    let rewardBlock;
    if (challenge.isMainChallenge && Array.isArray(challenge.reward) && challenge.reward.length) {
      rewardBlock = document.createElement("div");
      rewardBlock.className = "custom-challenge-card-reward";
      rewardBlock.innerHTML = "<strong>Reward:</strong>";

      const rewards = document.createElement("div");
      rewards.className = "custom-challenge-reward-items";

      challenge.reward.forEach((reward) => {
        const rewardId = reward?.id;
        if (!rewardId) return;
        if (item[rewardId] === undefined && pkmn[rewardId] === undefined) return;

        const rewardItem = document.createElement("div");
        rewardItem.className = "custom-challenge-reward-item";
        rewardItem.title = format(rewardId);

        if (item[rewardId] !== undefined) {
          rewardItem.dataset.item = rewardId;
          rewardItem.innerHTML = `<img src="img/items/${rewardId}.png" alt="${format(rewardId)}">`;
        } else {
          rewardItem.dataset.pkmn = rewardId;
          rewardItem.innerHTML = `<img src="img/pkmn/sprite/${rewardId}.png" alt="${format(rewardId)}">`;
        }

        rewards.appendChild(rewardItem);
      });

      if (rewards.childElementCount) {
        rewardBlock.appendChild(rewards);
      } else {
        rewardBlock = undefined;
      }
    }

    const icons = document.createElement("div");
    icons.className = "custom-challenge-card-icons";

    const createIconButton = (svg, className, handler) => {
      const btn = document.createElement("div");
      btn.className = `custom-challenge-card-icon ${className || ""}`;
      btn.innerHTML = svg;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        handler();
      });
      return btn;
    };

    const editIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"/>
      </svg>
    `;

    const deleteIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"/>
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
        <path d="M10 11v6"/>
        <path d="M14 11v6"/>
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
      </svg>
    `;

    const exportIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 3h7v7"/>
        <path d="M10 14L21 3"/>
        <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>
      </svg>
    `;

    if (allowEdit) {
      icons.appendChild(createIconButton(editIcon, "", () => openEditor(challenge)));
    }
    if (allowExport) {
      icons.appendChild(createIconButton(exportIcon, "", () => handleExport(challenge)));
    }
    if (allowDelete) {
      icons.appendChild(createIconButton(deleteIcon, "danger", () => confirmDelete(challenge.id)));
    }

    const actions = document.createElement("div");
    actions.className = "custom-challenge-card-actions";

    const createButton = (text, handler, className = "") => {
      const btn = document.createElement("div");
      btn.className = `custom-challenge-button ${className}`;
      btn.textContent = text;
      btn.style.cursor = "pointer";
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        handler();
      });
      return btn;
    };

    actions.appendChild(createButton("Start", () => startChallenge(challenge)));

    if (icons.childElementCount) card.appendChild(icons);
    card.appendChild(title);
    if (challenge.notes) card.appendChild(notes);
    card.appendChild(teams);
    if (rewardBlock) card.appendChild(rewardBlock);
    card.appendChild(actions);

    return card;
  };

  const updateCustomChallenges = () => {
    ensureSavedChallenges();
    const list = document.getElementById("custom-challenges-list");
    if (!list) return;
    const editor = document.getElementById("custom-challenge-editor");
    if (editor && editor.parentElement === list) {
      list.insertAdjacentElement("afterend", editor);
    }
    list.innerHTML = "";

    if (!saved.customChallenges.length) {
      const empty = document.createElement("div");
      empty.className = "custom-challenge-card";
      empty.textContent = "No custom challenges yet.";
      list.appendChild(empty);
      return;
    }

    saved.customChallenges.forEach(challenge => {
      list.appendChild(renderChallengeCard(challenge, {
        allowEdit: !challenge.imported,
        allowExport: !challenge.imported,
        allowDelete: true
      }));
    });
  };

  const updateMainChallenges = () => {
    const list = document.getElementById("main-challenges-list");
    if (!list) return;
    list.innerHTML = "";

    if (!Array.isArray(window.mainChallenges) || !window.mainChallenges.length) {
      const empty = document.createElement("div");
      empty.className = "custom-challenge-card";
      empty.textContent = "Main Challenges are coming soon.";
      list.appendChild(empty);
      return;
    }

    window.mainChallenges.forEach(challenge => {
      const parseResult = parseChallengeText(challenge.rawText || "");
      const challengeData = {
        ...challenge,
        isMainChallenge: true,
        playerTeam: parseResult.playerTeam,
        enemyTeam: parseResult.enemyTeam
      };
      list.appendChild(renderChallengeCard(challengeData, {
        allowEdit: false,
        allowExport: false,
        allowDelete: false
      }));
    });
  };

  const setChallengesTab = (tab) => {
    const mainTab = document.getElementById("custom-challenges-tab-main");
    const customTab = document.getElementById("custom-challenges-tab-custom");
    const mainBtn = document.getElementById("custom-challenges-tab-main-button");
    const customBtn = document.getElementById("custom-challenges-tab-custom-button");
    if (!mainTab || !customTab || !mainBtn || !customBtn) return;

    const activeMainStyle = "background: #465f96; outline: solid 1px #3d61ff; color: white; z-index: 2;";
    const activeCustomStyle = "background: #964646ff; outline: solid 1px #ff3d3dff; color: white; z-index: 2;";
    const inactiveStyle = "";

    const headerTitle = document.getElementById("custom-challenges-title");
    const headerHelp = document.getElementById("custom-challenges-help");

    if (tab === "main") {
      mainTab.style.display = "flex";
      customTab.style.display = "none";
      mainBtn.style.cssText = activeMainStyle;
      customBtn.style.cssText = inactiveStyle;
      if (headerTitle) headerTitle.textContent = "Challenges";
      if (headerHelp) headerHelp.dataset.help = "Main Challenges";
    } else {
      mainTab.style.display = "none";
      customTab.style.display = "flex";
      mainBtn.style.cssText = inactiveStyle;
      customBtn.style.cssText = activeCustomStyle;
      if (headerTitle) headerTitle.textContent = "Custom Challenges";
      if (headerHelp) headerHelp.dataset.help = "Custom Challenges";
    }
  };

  // ============= Function Wrapping =============
  const wrapLeaveCombat = () => {
    if (typeof leaveCombat !== "function") return;
    const original = leaveCombat;

    leaveCombat = function () {
      const result = original();
      if (state.active) restoreCustomTeam();
      
      if (areas[saved.lastAreaJoined]?.customChallenge) {
        ["vs-menu", "explore-menu"].forEach(id => {
          document.getElementById(id).style.display = "none";
        });
        document.getElementById("custom-challenges-menu").style.display = "flex";
        updateCustomChallenges();
      }
      
      return result;
    };
  };

  const wrapSetWildPkmn = () => {
    if (typeof setWildPkmn !== "function") return;
    const original = setWildPkmn;

    setWildPkmn = function () {
      if (state.pendingStart && areas[saved.currentArea]?.customChallenge) {
        currentTrainerSlot = 1;
        state.pendingStart = false;
      }
      return original();
    };
  };

  // ============= Initialization =============
  const setupEditorListeners = () => {
    const listeners = [
      ["custom-challenge-new", "click", () => openEditor(null)],
      ["custom-challenge-import", "click", handleImport],
      ["custom-challenge-save", "click", handleSave],
      ["custom-challenge-cancel", "click", closeEditor],
      ["custom-challenge-text", "input", handlePreview]
    ];

    listeners.forEach(([id, event, handler]) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener(event, handler);
    });
  };

  const init = () => {
    if (!document.getElementById("custom-challenges-menu") || typeof saved === "undefined") {
      setTimeout(init, 500);
      return;
    }
    ensureSavedChallenges();
    ensureCustomArea();
    ensureNameMaps();
    setupEditorListeners();
    wrapLeaveCombat();
    wrapSetWildPkmn();
    updateCustomChallenges();
    updateMainChallenges();
    setChallengesTab("main");
  };

  window.updateCustomChallenges = updateCustomChallenges;
  window.setChallengesTab = setChallengesTab;
  init();
})();
