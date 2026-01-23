
/**
 * Pokechill Moveset Popup Module
 *
 * A self-contained module for calculating and displaying learnable movesets based on level.
 * Handles data processing, icon caching, and UI rendering within a private scope.
 * By Enyxiel
 */

(function () {
    "use strict";

    // --- 0. Safety Checks & Global Dependencies ---

    if (typeof move === "undefined") {
        console.warn("[MovesetGenerator] 'move' database not found. This module may not function correctly.");
    }

    // --- 1. Module State & Constants ---

    const ICON_CACHE = {};
    let activeSplitFilter = null;

    const ICONS_TO_PRELOAD = [
        "special", "physical", "restricted", "normal", "fire", "water", "grass", "electric",
        "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost",
        "dragon", "dark", "steel", "fairy"
    ];

    // --- 2. Utilities ---

    /**
     * Converts a hex color string to an RGBA string.
     * @param {string} hex - The hex color string.
     * @param {number} alpha - The alpha channel (0-1).
     * @returns {string} The RGBA string.
     */
    function hexToRGBA(hex, alpha) {
        if (!hex) {
            return `rgba(255, 255, 255, ${alpha})`;
        }
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    /**
     * Safely strips HTML tags from a string.
     * @param {string} html - The input HTML string.
     * @returns {string} The text content.
     */
    function safeStrip(html) {
        if (typeof stripHTML === "function") {
            return stripHTML(html);
        }
        if (typeof DOMParser !== "undefined") {
            const doc = new DOMParser().parseFromString(html, "text/html");
            return (doc && doc.body && doc.body.textContent) || "";
        }
        // Fallback of last resort
        return html.replace(/<[^>]*>/g, "").trim();
    }

    /**
     * Escapes special characters to prevent HTML injection (XSS).
     * Turns <script> into &lt;script&gt; so it displays as text.
     * @param {string|number} str - The input to escape.
     * @returns {string} The escaped string.
     */
    function escapeHTML(str) {
        if (str === null || str === undefined) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /**
     * Retrieves the color for a specific type key.
     * @param {string} key - The type key.
     * @returns {string} The hex color code.
     */
    function getTypeColor(key) {
        return typeof returnTypeColor === "function" ? returnTypeColor(key) : "#ffffff";
    }

    // --- 3. Icon Handling ---

    /**
     * Parses the SVG string and safely forces the specific size attributes.
     * Uses DOMParser to handle existing attributes or whitespace correctly.
     * @param {string} svgString - The raw SVG content.
     * @param {string} color - The CSS color.
     * @param {number} size - The size in pixels.
     * @returns {string} The HTML string.
     */
    function wrapSVG(svgString, color, size) {
        if (!svgString) return "";

        try {
            // Parse the string into a real DOM structure
            const parser = new DOMParser();
            const doc = parser.parseFromString(svgString, "image/svg+xml");
            const svgEl = doc.documentElement;

            // Check for parsing errors
            if (svgEl.querySelector("parsererror") || svgEl.tagName.toLowerCase() !== "svg") {
                console.warn("[MovesetGenerator] Invalid SVG data encountered.");
                return "";
            }

            // Force the size attributes - safely overwrites existing width/height if they exist
            svgEl.setAttribute("width", size);
            svgEl.setAttribute("height", size);

            return `<span class="icon-wrapper" style="color:${color};">${svgEl.outerHTML}</span>`;

        } catch (e) {
            console.error("[MovesetGenerator] Error processing SVG:", e);
            return "";
        }
    }

    /**
     * Loads and caches an SVG icon.
     * Includes error handling for 404s/network issues.
     * @param {string} name - The icon name.
     * @param {string} color - The icon color.
     * @param {number} size - The icon size.
     * @returns {Promise<string>} The HTML string.
     */
    async function loadSVGIcon(name, color = "#fff", size = 18) {
        const path = `/img/icons/${name}.svg`;
        if (ICON_CACHE[path]) {
            return wrapSVG(ICON_CACHE[path], color, size);
        }
        try {
            const response = await fetch(path);

            // Prevents caching of 404 responses.
            if (!response.ok) {
                throw new Error(`Failed to load ${name}: "${response.status} ${response.statusText}`);
            }

            const svg = await response.text();
            ICON_CACHE[path] = svg;
            return wrapSVG(svg, color, size);
        } catch (error) {
            console.error(`[MovesetGenerator] Failed to load icon: ${name}`, error);
            return "";
        }
    }

    ICONS_TO_PRELOAD.forEach((name) => {
        loadSVGIcon(name).catch(() => {});
    });

    // --- 4. Data Logic ---

    // Ignore rng to show possible moves.
    function getMaxRarityTier(level) {
        let tier = 1;
        if (level >= 10) tier++;
        if (level >= 20) tier++;
        if (level >= 30) tier++;
        if (level >= 50) tier++;
        if (level >= 60) tier++;
        return Math.min(tier, 3);
    }

    // Use max rarity to show possible moves.
    function getAllPossibleMovesByTier(level) {
        const tier = getMaxRarityTier(level);
        return Object.keys(move).filter((m) => move[m].rarity <= tier);
    }

    function categorizeMovesForPokemon(pkmnObj, level) {
        const types = pkmnObj.type;
        const allPossible = getAllPossibleMovesByTier(level);

        const sameType = {};
        types.forEach((t) => (sameType[t] = []));

        const movesetMatch = [];
        const allTag = [];

        allPossible.forEach((m) => {
            const data = move[m];

            const canlearn = 
                Array.isArray(data.moveset) &&
                (
                data.moveset.includes("all") ||
                types.some((t) => data.moveset.includes(t))
                );

            if (!canlearn) {
                return;
            }

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
            } else if (types.some((t) => data.moveset.includes(t))) {
                movesetMatch.push(entry);
            } else if (data.moveset.includes("all")) {
                allTag.push(entry);
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

    // --- 5. UI Rendering Logic ---

    function toggleSplitFilter(splitType) {
        const popup = document.getElementById("movePopup");
        if (!popup) {
            return;
        }

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

    async function buildTableHTML(label, arr) {
        if (!arr.length) {
            return "";
        }

        const rows = await Promise.all(
            arr.map(async (e) => {
                // Escape all user-facing content to prevent XSS
                const moveName = escapeHTML(format(e.ID));
                const power = escapeHTML(e.Power ?? "-");
                const info = escapeHTML(e.Info);

                // Type Icon
                const themedColor = "var(--light2, #fff)";
                const typeIcon = e.Type ? await loadSVGIcon(e.Type.toLowerCase(), themedColor) : "";

                // Muted Background
                const key = (e.Type || "").toLowerCase();
                const muted = hexToRGBA(getTypeColor(key), 0.95);
                const rowBgStyle = muted ? `style="background:${muted}"` : "";

                // Restricted Icon
                let restrictedIcon = "";
                if (move[e.ID] && move[e.ID].restricted === true) {
                    const iconSvg = await loadSVGIcon("restricted", muted);
                    restrictedIcon = `<span class="restricted-icon">${iconSvg}</span>`;
                }

                // Split Info
                const rawSplit = e.Split || "";
                let splitName = "";
                let capitalizedSplit = "-";
                let splitIcon = "";

                if (rawSplit) {
                    splitName = escapeHTML(rawSplit.toLowerCase());
                    capitalizedSplit = splitName.charAt(0).toUpperCase() + splitName.slice(1);
                    splitIcon = await loadSVGIcon(splitName, themedColor);
                }

                // Rendering
                return `
                <tr ${rowBgStyle} data-split="${splitName}">
                    <td class="col-type">${typeIcon}</td>
                    <td class="col-move">
                        ${moveName}
                        ${restrictedIcon}
                    </td>
                    <td class="col-split">
                        <span class="split-trigger" data-split-trigger="${splitName}" 
                              title="${splitName ? `Filter by ${capitalizedSplit} moves` : "No split"}">
                            <span class="split-desktop">
                                <span class="split-icon-desktop">${splitIcon}</span>
                                <span class="split-text">${capitalizedSplit}</span>
                            </span>
                            <span class="split-mobile">
                                ${splitIcon}
                            </span>
                        </span>
                    </td>
                    <td class="col-bp">${power}</td>
                    <td class="col-info">${info}</td>
                </tr>`;
            })
        );

        // Type Icons for Header
        const themedColor = "var(--light2, #fff)";
        const physIcon = await loadSVGIcon("physical", themedColor);
        const specIcon = await loadSVGIcon("special", themedColor);
        const safeLabel = escapeHTML(label);

        return `
            <h3 class="move-popup-header">${safeLabel}</h3>
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
            </table>`;
    }

    async function showMovePopup(pkmnObj, initialLevel) {
        // Reset the filter state to ensure a clean view for the new popup instance
        activeSplitFilter = null;

        const old = document.getElementById("movePopup");
        if (old) {
            old.remove();
        }

        const wrapper = document.createElement("div");
        wrapper.id = "movePopup";
        wrapper.className = "move-popup-wrapper";

        // Close on outside click, context menu or escape key
        const closePopup = () => {
            wrapper.remove();
            document.removeEventListener("keydown", handleEsc);
        };
        const handleEsc = (e) => {
            if (e.key === "Escape") closePopup();
        };
        wrapper.oncontextmenu = (e) => {
            e.preventDefault();
            closePopup();
            return false;
        };
        wrapper.onclick = closePopup;
        document.addEventListener("keydown", handleEsc);
        const box = document.createElement("div");
        box.className = "move-popup-box";
        box.onclick = (e) => e.stopPropagation();

        // Header
        const topBar = document.createElement("div");
        topBar.className = "move-popup-top-bar";

        const title = document.createElement("h2");
        title.className = "move-popup-title";
        topBar.appendChild(title);

        // Level Control
        const levelControl = document.createElement("div");
        levelControl.className = "level-control-container";

        const levelLabel = document.createElement("span");
        levelLabel.className = "level-label";
        levelLabel.appendChild(document.createTextNode("Lv. "));

        const levelValueSpan = document.createElement("span");
        levelValueSpan.id = "levelValueDisplay";
        levelValueSpan.textContent = initialLevel;
        levelLabel.appendChild(levelValueSpan);
        
        levelControl.appendChild(levelLabel);

        const levelInput = document.createElement("input");
        levelInput.type = "range";
        levelInput.className = "level-slider";
        levelInput.setAttribute("aria-label", "Pokemon Level");
        levelInput.min = 1;
        levelInput.max = 100;
        levelInput.value = initialLevel;
        levelControl.appendChild(levelInput);

        topBar.appendChild(levelControl);
        box.appendChild(topBar);

        // Content
        const contentContainer = document.createElement("div");
        box.appendChild(contentContainer);

        contentContainer.addEventListener("click", (e) => {
            const trigger = e.target.closest(".split-trigger");
            if (trigger) {
                const splitType = trigger.getAttribute("data-split-trigger");
                if (splitType) {
                    toggleSplitFilter(splitType);
                }
            }
        });

        async function updateContent(newLevel) {
            const report = getMoveCalculatorReport(pkmnObj, newLevel);
            title.textContent = `Moves for ${format(report.pokemon)}`;
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

        await updateContent(initialLevel);

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Close";
        closeBtn.className = "move-popup-close-btn";
        closeBtn.onclick = () => wrapper.remove();
        box.appendChild(closeBtn);

        wrapper.appendChild(box);
        document.body.appendChild(wrapper);
    }

    // --- 6. Styles Injection ---

    (function injectMovePopupStyles() {
        if (document.getElementById("moveset-generator-styles")) {
            return;
        }

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
        .level-slider::-moz-range-thumb {
            width: 18px; height: 18px; border: none; /* Firefox adds a default border */
            border-radius: 50%; background: var(--light2, #fff); cursor: pointer;
            transition: transform 0.1s;
        }
        .level-slider::-webkit-slider-thumb:hover { transform: scale(1.2); }
        .level-slider::-moz-range-thumb:hover { transform: scale(1.2); }
        .move-popup-header {
            margin: 10px 0 10px 0; font-size: 22px; color: var(--light2, #fff);
            padding: 6px 10px; border-radius: 6px; background: var(--dark2, #333);
        }
        .move-table {
            width: 100%; border-collapse: separate; border-spacing: 0;
            margin-bottom: 16px; font-size: 15px; background: transparent;
            margin-left: auto; margin-right: auto;
            border-radius:8px;
            overflow:hidden;
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
        .move-table tr { position: relative; transition: opacity 0.2s ease;}
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
            .col-move-header, .col-move {
                white-space: normal; 
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