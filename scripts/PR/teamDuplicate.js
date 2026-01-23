


//auto team building, lets you build teams based on weights
// by gwenillia
//changes made by duck are marked with PR-EDIT






(function () {
  function getTeamOptions() {
    const selector = document.getElementById("team-slot-selector");
    if (!selector) return [];
    return Array.from(selector.options).map(option => ({
      value: option.value,
      label: option.text
    }));
  }

  function getTeamName(teamKey) {
    const selector = document.getElementById("team-slot-selector");
    if (!selector) return teamKey;
    const option = Array.from(selector.options).find(entry => entry.value === teamKey);
    return option ? option.text : teamKey;
  }

  function teamHasMembers(teamKey) {
    const team = saved?.previewTeams?.[teamKey];
    if (!team) return false;
    for (let i = 1; i <= 6; i++) {
      if (team[`slot${i}`]?.pkmn !== undefined) return true;
    }
    return false;
  }

  function copyPreviewTeam(sourceKey, targetKey) {
    const source = saved.previewTeams[sourceKey];
    const target = saved.previewTeams[targetKey];
    for (let i = 1; i <= 6; i++) {
      const slotKey = `slot${i}`;
      if (!target[slotKey]) target[slotKey] = {};
      target[slotKey].pkmn = source[slotKey]?.pkmn;
      target[slotKey].item = source[slotKey]?.item;
    }
  }

  function updateAfterDuplicate(targetKey) {
    saved.currentPreviewTeam = targetKey;
    const selector = document.getElementById("team-slot-selector");
    if (selector) selector.value = targetKey;
    updatePreviewTeam();
    if (typeof changeTeamNames === "function") changeTeamNames();
    closeTooltip();
  }

  function handleDuplicate(targetKey) {
    const currentKey = saved.currentPreviewTeam;
    if (!targetKey || targetKey === currentKey) {
      const tooltipMid = document.getElementById("tooltipMid");
      tooltipMid.innerHTML = "Pick a different team slot.";
      return;
    }

    if (teamHasMembers(targetKey)) {
      showDuplicateConfirm(targetKey);
      return;
    }

    copyPreviewTeam(currentKey, targetKey);
    updateAfterDuplicate(targetKey);
  }

  function showDuplicateConfirm(targetKey) {
    document.getElementById("tooltipTop").style.display = "none";
    document.getElementById("tooltipTitle").innerHTML = "Overwrite Team?";
    document.getElementById("tooltipMid").innerHTML = `This will replace ${getTeamName(targetKey)}.`;

    const tooltipBottom = document.getElementById("tooltipBottom");
    tooltipBottom.innerHTML = '<span id="prevent-tooltip-exit"></span>';

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.gap = "0.75rem";

    const cancelButton = document.createElement("div");
    cancelButton.textContent = "Cancel";
    cancelButton.style.cursor = "pointer";
    cancelButton.style.flex = "1";
    cancelButton.style.display = "flex";
    cancelButton.style.justifyContent = "center";
    cancelButton.style.alignItems = "center";
    cancelButton.style.padding = "0.4rem";
    cancelButton.style.borderRadius = "0.2rem";
    cancelButton.style.background = "rgb(206, 83, 83)";
    cancelButton.style.color = "white";
    cancelButton.addEventListener("click", () => {
      closeTooltip();
      openDuplicateTeamMenu();
    });

    const confirmButton = document.createElement("div");
    confirmButton.className = "duplicate-build-confirm";
    confirmButton.textContent = "Overwrite";
    confirmButton.style.cursor = "pointer";
    confirmButton.style.flex = "1";
    confirmButton.style.display = "flex";
    confirmButton.style.justifyContent = "center";
    confirmButton.style.alignItems = "center";
    confirmButton.style.padding = "0.4rem";
    confirmButton.addEventListener("click", () => {
      copyPreviewTeam(saved.currentPreviewTeam, targetKey);
      updateAfterDuplicate(targetKey);
    });

    container.appendChild(cancelButton);
    container.appendChild(confirmButton);
    tooltipBottom.appendChild(container);

    openTooltip();
  }

  function openDuplicateTeamMenu() {
    const options = getTeamOptions();
    if (!options.length) return;
    const currentKey = saved.currentPreviewTeam;
    const defaultTarget = options.find(option => option.value !== currentKey)?.value || currentKey;

    document.getElementById("tooltipTop").style.display = "none";
    document.getElementById("tooltipTitle").innerHTML = "Copy Team"; //PR-EDIT
    document.getElementById("tooltipMid").innerHTML = "Select the target team slot to overwrite.";

    const tooltipBottom = document.getElementById("tooltipBottom");
    tooltipBottom.innerHTML = '<span id="prevent-tooltip-exit"></span>';

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "0.75rem";

    const select = document.createElement("select");
    select.id = "team-duplicate-target";
    select.style.height = "2.2rem";
    select.style.borderRadius = "0.4rem";
    select.style.border = "none";
    select.style.padding = "0 0.5rem";

    options.forEach(option => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.label;
      if (option.value === currentKey) optionElement.disabled = true;
      if (option.value === defaultTarget) optionElement.selected = true;
      select.appendChild(optionElement);
    });

    const duplicateButton = document.createElement("div");
    duplicateButton.className = "duplicate-build-confirm";
    duplicateButton.textContent = "Duplicate Team";
    duplicateButton.style.cursor = "pointer";
    duplicateButton.style.fontSize = "1.3rem";
    duplicateButton.style.display = "flex";
    duplicateButton.style.justifyContent = "center";
    duplicateButton.style.alignItems = "center";
    duplicateButton.style.padding = "0.4rem";
    duplicateButton.addEventListener("click", () => handleDuplicate(select.value));

    container.appendChild(select);
    container.appendChild(duplicateButton);
    tooltipBottom.appendChild(container);

    openTooltip();
  }

  function initDuplicateTeamButton() {
    const selector = document.querySelector(".team-menu-selector-new");
    if (!selector || document.getElementById("team-duplicate-button")) return;

    const button = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    button.setAttribute("viewBox", "0 0 24 24");
    button.setAttribute("width", "24");
    button.setAttribute("height", "24");
    button.id = "team-duplicate-button";
    button.style.marginLeft = "0";
    button.style.marginRight = "0";
    button.style.flexShrink = "0";
    button.setAttribute("title", "Duplicate team");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "currentColor");
    path.setAttribute(
      "d",
      "M16 1H4a2 2 0 0 0-2 2v12h2V3h12zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m0 16H8V7h11z"
    );

    button.appendChild(path);
    button.addEventListener("click", openDuplicateTeamMenu);

    selector.appendChild(button);
  }

  initDuplicateTeamButton();
})();
