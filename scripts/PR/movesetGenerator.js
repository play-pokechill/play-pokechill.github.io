/**
 * Pokechill Moveset Popup Module
 *
 * A self-contained module for calculating and displaying learnable movesets based on level.
 * Handles data processing, icon caching, and UI rendering within a private scope.
 */

(function () {
    "use strict";





    // --- 0. Safety Checks & Global Dependencies ---

    // Check for the existence of the 'move' database using typeof to avoid ReferenceErrors.
    // The script relies on 'move' (database), 'returnTypeColor', and 'stripHTML' from the core game.
    if (typeof move === "undefined") {
        console.warn("[MovesetGenerator] 'move' database not found. This module may not function correctly.");
    }





    // --- 1. Module State & Constants ---

    const ICON_CACHE = {};
    
    // Tracks the currently active split filter (Physical/Special)
    let activeSplitFilter = null; 

    const ICONS_TO_PRELOAD = [
        "special", "physical", "restricted", "normal", "fire", "water", "grass", "electric", "ice",
        "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon",
        "dark", "steel", "fairy",
    ];





    // --- 2. Utilities ---

    /**
     * Converts a hex color string to an RGBA string.
     */
    function hexToRGBA(hex, alpha) {
        if (!hex) return `rgba(255, 255, 255, ${alpha})`;
        // Handle shorthand hex if necessary, but assuming standard format from game data
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    /**
     * Formats a camelCase or pascalCase string into Title Case with spaces.
     */
    function formatMoveName(str) {
        return str
            .replace(/([A-Z])/g, " $1")
            .trim()
            .split(/\s+/)
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join(" ");
    }





    // --- 3. Icon Handling ---

    /**
     * Loads an SVG icon, caches it, and wraps it with styling.
     */
    async function loadSVGIcon(name, color = "#fff", size = 18) {
        const path = `/img/icons/${name}.svg`;

        if (ICON_CACHE[path]) {
            return wrapSVG(ICON_CACHE[path], color, size);
        }

        try {
            const response = await fetch(path);
            const svg = await response.text();
            ICON_CACHE[path] = svg;
            return wrapSVG(svg, color, size);
        } catch (error) {
            console.error(`[MovesetGenerator] Failed to load icon: ${name}`, error);
            return "";
        }
    }

    function wrapSVG(svg, color, size) {
        // Ensure the SVG has the correct dimensions
        const sizedSvg = svg.replace("<svg", `<svg width="${size}" height="${size}"`);
        return `<span class="icon-wrapper" style="color:${color};">${sizedSvg}</span>`;
    }

    // Preload icons immediately
    ICONS_TO_PRELOAD.forEach((name) => {
        loadSVGIcon(name).catch(() => {});
    });





    // --- 4. Data Logic ---

    function getMaxRarityTier(level) {
        let tier = 1;
        if (level >= 10) tier++;
        if (level >= 20) tier++;
        if (level >= 30) tier++;
        if (level >= 50) tier++;
        if (level >= 60) tier++;
        return Math.min(tier, 3);
    }

    function getAllPossibleMovesByTier(level) {
        const maxTier = getMaxRarityTier(level);
        return Object.keys(move).filter((m) => move[m].rarity <= maxTier);
    }

    function categorizeMovesForPokemon(pkmnObj, level) {
        const types = pkmnObj.type;
        const allPossible = getAllPossibleMovesByTier(level);

        const sameType = {};
        types.forEach((t) => (sameType[t] = []));

        const movesetMatch = [];
        const allTag = [];

        // Helper to safely strip HTML
        const safeStrip = (html) => {
            // Check for global function 'stripHTML'
            if (typeof stripHTML === "function") return stripHTML(html);
            
            // Fallback if game function missing
            const tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        };

        allPossible.forEach((m) => {
            const data = move[m];
            const rawInfo = typeof data.info === "function" ? data.info() : "";
            const cleanInfo = safeStrip(rawInfo);

            const entry = {
                ID: m,
                Type: data.type ?? null,
                Split: data.split ?? null,
                Power: data.power ?? null,
                Info: cleanInfo,
            };

            if (types.includes(data.type)) {
                sameType[data.type].push(entry);
            } else if (data.moveset && data.moveset.includes("all")) {
                allTag.push(entry);
            } else if (data.moveset && types.some((t) => data.moveset.includes(t))) {
                movesetMatch.push(entry);
            }
        });

        const sortByPower = (arr) => arr.sort((a, b) => (b.Power ?? 0) - (a.Power ?? 0));

        Object.keys(sameType).forEach((t) => sortByPower(sameType[t]));

        return {
            sameType,
            movesetMatch: sortByPower(movesetMatch),
            allTag: sortByPower(allTag),
        };
    }

    function getMoveCalculatorReport(pkmnObj, level = 100) {
        const buckets = categorizeMovesForPokemon(pkmnObj, level);
        return {
            pokemon: pkmnObj.id,
            level,
            possibleMoves: buckets,
        };
    }





    // --- 5. Internal UI Logic ---

    /**
     * Toggles the visual filter for Physical/Special splits.
     * Updates the DOM based on the `data-split` attribute.
     */
    function toggleSplitFilter(splitType) {
        const popup = document.getElementById("movePopup");
        if (!popup) return;

        if (activeSplitFilter === splitType) {
            activeSplitFilter = null;
            popup.querySelectorAll("tr[data-split]").forEach((row) => {
                row.classList.remove("row-dimmed");
            });
            return;
        }

        activeSplitFilter = splitType;
        popup.querySelectorAll("tr[data-split]").forEach((row) => {
            const rowSplit = row.getAttribute("data-split");
            if (rowSplit === splitType) {
                row.classList.remove("row-dimmed");
            } else {
                row.classList.add("row-dimmed");
            }
        });
    }

    /**
     * Builds the HTML for a single move table section.
     */
    async function buildTableHTML(label, arr) {
        if (!arr.length) return "";

        // Helper to get color
        const getColor = (key) => typeof returnTypeColor === "function" 
            ? returnTypeColor(key) 
            : "#ffffff";

        const rows = await Promise.all(
            arr.map(async (e) => {
                const key = (e.Type || "").toLowerCase();
                const muted = hexToRGBA(getColor(key), 0.95);
                const rowBgStyle = muted ? `style="background:${muted}"` : "";
                const themedColor = "var(--light2, #fff)";

                const typeIcon = await loadSVGIcon(e.Type.toLowerCase(), themedColor);
                const moveName = formatMoveName(e.ID);

                let restrictedIcon = "";
                if (move[e.ID] && move[e.ID].restricted === true) {
                    const iconSvg = await loadSVGIcon("restricted", muted);
                    restrictedIcon = `<span class="restricted-icon">${iconSvg}</span>`;
                }

                const splitName = (e.Split || "").toLowerCase();
                const capitalizedSplit = splitName.charAt(0).toUpperCase() + splitName.slice(1);
                const splitIcon = await loadSVGIcon(splitName, themedColor);

                return `
                <tr ${rowBgStyle} data-split="${splitName}">
                    <td class="col-type">${typeIcon}</td>
                    <td class="col-move">
                        ${moveName}
                        ${restrictedIcon}
                    </td>
                    <td class="col-split">
                        <span class="split-trigger" data-split-trigger="${splitName}" 
                              title="Filter by ${capitalizedSplit}">
                            <span class="split-desktop">
                                <span class="split-icon-desktop">${splitIcon}</span>
                                <span class="split-text">${capitalizedSplit}</span>
                            </span>
                            <span class="split-mobile">
                                ${splitIcon}
                            </span>
                        </span>
                    </td>
                    <td class="col-bp">${e.Power ?? "-"}</td>
                    <td class="col-info">${e.Info}</td>
                </tr>
            `;
            })
        );

        const themedColor = "var(--light2, #fff)";
        const physIcon = await loadSVGIcon("physical", themedColor);
        const specIcon = await loadSVGIcon("special", themedColor);

        return `
            <h3 class="move-popup-header">${label}</h3>
            <table class="move-table">
                <thead>
                    <tr>
                        <th class="col-type-header"></th>
                        <th class="col-move-header">Move</th>
                        <th class="col-split-header">
                            <span class="split-header-desktop">Split</span>
                            <span class="split-header-mobile">
                                <span class="split-header-diagonal">
                                    <span class="icon-phys">${physIcon}</span>
                                    <span class="icon-spec">${specIcon}</span>
                                    <span class="diag-line"></span>
                                </span>
                            </span>
                        </th>
                        <th class="col-bp-header">BP</th>
                        <th class="col-info-header">Info</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows.join("")}
                </tbody>
            </table>
        `;
    }

    /**
     * Creates and displays the move popup modal.
     */
    async function showMovePopup(pkmnObj, initialLevel) {
        const old = document.getElementById("movePopup");
        if (old) old.remove();

        const wrapper = document.createElement("div");
        wrapper.id = "movePopup";
        wrapper.className = "move-popup-wrapper";

        wrapper.oncontextmenu = (e) => {
            e.preventDefault();
            wrapper.remove();
            return false;
        };

        const box = document.createElement("div");
        box.className = "move-popup-box";
        box.onclick = (e) => e.stopPropagation();

        // --- Header Section ---
        const topBar = document.createElement("div");
        topBar.className = "move-popup-top-bar";

        const title = document.createElement("h2");
        title.className = "move-popup-title";
        topBar.appendChild(title);

        // --- Slider Control ---
        const levelControl = document.createElement("div");
        levelControl.className = "level-control-container";

        const levelLabel = document.createElement("span");
        levelLabel.className = "level-label";
        levelLabel.innerHTML = `Lv. <span id="levelValueDisplay">${initialLevel}</span>`;
        levelControl.appendChild(levelLabel);

        const levelInput = document.createElement("input");
        levelInput.type = "range";
        levelInput.className = "level-slider";
        levelInput.min = 1;
        levelInput.max = 100;
        levelInput.value = initialLevel;
        levelControl.appendChild(levelInput);

        topBar.appendChild(levelControl);
        box.appendChild(topBar);

        // --- Content Container ---
        const contentContainer = document.createElement("div");
        box.appendChild(contentContainer);

        // --- Event Delegation for Split Toggles ---
        contentContainer.addEventListener("click", (e) => {
            const trigger = e.target.closest(".split-trigger");
            if (trigger) {
                const splitType = trigger.getAttribute("data-split-trigger");
                if (splitType) {
                    toggleSplitFilter(splitType);
                }
            }
        });

        // --- Render Logic ---
        async function updateContent(newLevel) {
            const report = getMoveCalculatorReport(pkmnObj, newLevel);
            title.textContent = `Moves for ${report.pokemon}`;

            const buckets = report.possibleMoves;
            let contentHTML = "";

            for (const typeName of Object.keys(buckets.sameType)) {
                const capitalizedType = typeName.charAt(0).toUpperCase() + typeName.slice(1);
                contentHTML += await buildTableHTML(
                    `Same-Type: ${capitalizedType}`,
                    buckets.sameType[typeName]
                );
            }

            contentHTML += await buildTableHTML("Moveset Tag Matches", buckets.movesetMatch);
            contentHTML += await buildTableHTML("All-Type Moves", buckets.allTag);

            contentContainer.innerHTML = contentHTML;

            if (activeSplitFilter) {
                const popup = document.getElementById("movePopup");
                if (popup) {
                    popup.querySelectorAll("tr[data-split]").forEach((row) => {
                        const rowSplit = row.getAttribute("data-split");
                        if (rowSplit !== activeSplitFilter) {
                            row.classList.add("row-dimmed");
                        }
                    });
                }
            }
        }

        levelInput.oninput = (e) => {
            const val = parseInt(e.target.value);
            document.getElementById("levelValueDisplay").textContent = val;
            updateContent(val);
        };

        // Initial Render
        await updateContent(initialLevel);

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.className = "move-popup-close-btn";
        closeBtn.onclick = () => wrapper.remove();
        box.appendChild(closeBtn);

        wrapper.appendChild(box);
        document.body.appendChild(wrapper);
    }





    // --- 6. Styles Injection (Self-Contained) ---

    (function injectMovePopupStyles() {
        if (document.getElementById("moveset-generator-styles")) return;

        const css = `
        .move-popup-wrapper {
            position: fixed; inset: 0; width: 100vw; height: 100vh;
            background: rgba(0,0,0,0.75); z-index: 99999;
            overflow-y: auto; box-sizing: border-box; padding: 20px;
        }
        .move-popup-box {
            background: var(--dark1, #1e1e1e); color: var(--light2, #e0e0e0);
            padding: 10px; width: 100%; max-width: 1100px; margin: 0 auto;
            box-sizing: border-box; font-family: sans-serif;
            box-shadow: 0 0 20px rgba(0,0,0,0.6); border-radius: 15px;
        }
        .move-popup-top-bar {
            display: flex; justify-content: center; align-items: center;
            gap: 10px; margin-bottom: 0px; flex-wrap: wrap;
        }
        .move-popup-title {
            margin: 0; font-size: 28px; color: var(--light2, #fff); text-align: center;
        }
        .level-control-container {
            display: flex; align-items: center; gap: 15px;
            background: var(--dark2, #333); padding: 8px 15px; border-radius: 20px;
        }
        .level-label {
            font-size: 16px; font-weight: bold; color: var(--light2, #fff);
            min-width: 60px; text-align: right;
        }
        .level-slider {
            -webkit-appearance: none; width: 140px; height: 6px;
            background: var(--dark1, #1e1e1e); border-radius: 3px;
            outline: none; cursor: pointer;
        }
        .level-slider::-webkit-slider-thumb {
            -webkit-appearance: none; appearance: none; width: 18px; height: 18px;
            border-radius: 50%; background: var(--light2, #fff); cursor: pointer;
            transition: transform 0.1s;
        }
        .level-slider::-webkit-slider-thumb:hover { transform: scale(1.2); }
        .move-popup-header {
            margin: 10px 0 10px 0; font-size: 22px; color: var(--light2, #fff);
            padding: 6px 5px; border-radius: 6px; background: var(--dark2, #333);
        }
        .move-table {
            width: 100%; border-collapse: separate; border-spacing: 0;
            margin-bottom: 16px; font-size: 15px; background: transparent;
            margin-left: auto; margin-right: auto;
        }
        .move-table thead { background: var(--dark2, #333); }
        .move-table th:first-child { border-top-left-radius: 8px; }
        .move-table th:last-child { border-top-right-radius: 8px; }
        .move-table tbody tr:last-child td:first-child { border-bottom-left-radius: 8px; }
        .move-table tbody tr:last-child td:last-child { border-bottom-right-radius: 8px; }
        .move-table th {
            padding: 8px; color: var(--light2, #fff); position: relative; z-index: 2; border: none;
        }
        .move-table td {
            padding: 4px 6px; color: var(--light2, #fff); position: relative; z-index: 1; border: none;
        }
        .move-table tr + tr td { border-top: 3px solid var(--dark2, #333) !important; }
        .move-table tr { position: relative; transition: opacity 0.2s ease; }
        .move-table tr::before {
            content: ""; position: absolute; top: 2px; left: 32px; right: 6px; bottom: 3px;
            background: var(--dark2, #222); border-radius: 4px; pointer-events: none; z-index: 0;
        }
        .move-table tr + tr::before { top: 5px; }
        .move-table tbody tr:last-child::before {
            border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;
        }
        .move-popup-close-btn {
            display: block; margin: 20px auto 0 auto; padding: 10px 60px;
            border-radius: 6px; border: none; background: var(--dark2, #444);
            color: var(--light2, #fff); cursor: pointer; font-size: 16px;
        }
        .move-popup-close-btn:hover { opacity: 0.9; }
        .icon-wrapper { 
            display: inline-block; vertical-align: middle; margin-top:4px;
        }
        .col-type, .col-type-header, .col-bp, .col-bp-header {
            width: 1%; white-space: nowrap; text-align: center;
        }
        .col-move-header, .col-move {
            width: 1%; white-space: nowrap; text-align: left; padding-right: 2px;
        }
        .restricted-icon {
            display: inline-block; vertical-align: middle; margin-left: -5px;
        }
        .col-split-header, .col-split {
            width: 1%; white-space: nowrap; text-align: left; padding-left: 2px;
        }
        .col-info, .col-info-header { width: auto; text-align: left; }
        .col-info { font-size: clamp(10px, 2vw, 100%); }
        .split-trigger {
            cursor: pointer; transition: transform 0.1s, opacity 0.1s;
            display: inline-flex; align-items: center; border-radius: 4px;
        }
        .split-trigger:hover { 
            opacity: 0.8; background: rgba(255,255,255,0.05);
        }
        .split-trigger:active { transform: scale(0.95); }
        .row-dimmed { opacity: 0.15; filter: grayscale(0.8); }
        .split-header-diagonal {
            position: relative; display: inline-block; width: 20px; height: 20px;
        }
        .split-header-diagonal svg { width: 12px; height: 12px; }
        .icon-phys { position: absolute; top: -8px; left: -5px; }
        .icon-spec { position: absolute; bottom: -7px; right: 0px; }
        .diag-line {
            position: absolute; bottom: 0; left: 0; width: 25px;
            border-top: 2px solid var(--light2, #fff);
            transform: rotate(-45deg); transform-origin: bottom left; opacity: 0.3;
        }
        @media (min-width: 601px) {
            .split-header-desktop, .split-desktop {
                display: inline-flex; align-items: center; gap: 6px;
            }
            .split-header-mobile, .split-mobile { display: none; }
        }
        @media (max-width: 600px) {
            .split-header-desktop, .split-desktop { display: none; }
            .split-header-mobile, .split-mobile {
                display: inline-block; width: 100%; text-align: center;
            }
        }
        `;

        const style = document.createElement("style");
        style.id = "moveset-generator-styles";
        style.textContent = css;
        document.head.appendChild(style);
    })();





    // --- 7. Public API ---

    /**
     * The only function exposed to the global scope.
     * @param {object} poke - The Pokemon object.
     * @param {number} level - The starting level (default 100).
     */
    window.getMoveset = function (poke, level = 100) {
        showMovePopup(poke, level);
    };

})();