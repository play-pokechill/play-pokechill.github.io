


//builds a move table based on pokemon and level. only accesible through commands. not compatible on phone
//"by enyxiel" i really just stole his code
//changes made by duck are marked with PR-EDIT


function getMoveset(poke,level){ //PR-EDIT
    showMovePopup(getMoveCalculatorReport(poke, level))
}


const TYPE_COLORS = {
    normal:  "#A8A77A",
    fire:    "#EE8130",
    water:   "#6390F0",
    electric:"#F7D02C",
    grass:   "#7AC74C",
    ice:     "#96D9D6",
    fighting:"#C22E28",
    poison:  "#A33EA1",
    ground:  "#E2BF65",
    flying:  "#A98FF3",
    psychic: "#F95587",
    bug:     "#A6B91A",
    rock:    "#B6A136",
    ghost:   "#735797",
    dragon:  "#6F35FC",
    dark:    "#705746",
    steel:   "#B7B7CE",
    fairy:   "#D685AD"
};

function formatMoveName(str) {
    return str
        .replace(/([A-Z])/g, " $1")   // split before capitals
        .trim()
        .split(/\s+/)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
}

function getMaxRarityTier(level) {
    let tier = 1;
    if (level >= 10) tier++;
    if (level >= 20) tier++;
    if (level >= 30) tier++;
    if (level >= 50) tier++;
    if (level >= 60) tier++;
    return Math.min(tier, 3);
}

function getUnlockedTiers(level) {
    const maxTier = getMaxRarityTier(level);
    const tiers = [];
    for (let t = 1; t <= maxTier; t++) tiers.push(t);
    return tiers;
}

function getAllPossibleMovesByTier(level) {
    const unlockedTiers = getUnlockedTiers(level);
    return Object.keys(move).filter(m => unlockedTiers.includes(move[m].rarity));
}

function categorizeMovesForPokemon(pkmnObj, level) {
    const types = pkmnObj.type; // e.g. ["Fire", "Flying"]
    const allPossible = getAllPossibleMovesByTier(level);

    // Separate buckets for each type
    const sameType = {};
    types.forEach(t => sameType[t] = []);

    const movesetMatch = [];
    const allTag = [];

    allPossible.forEach(m => {
        const data = move[m];
        const rawInfo = typeof data.info === "function" ? data.info() : "";
        const cleanInfo = stripHTML(rawInfo);

        const entry = {
            ID: m,
            Type: data.type ?? null,
            Split: data.split ?? null,
            Power: data.power ?? null,
            Info: cleanInfo
        };

        if (types.includes(data.type)) {
            sameType[data.type].push(entry);
        } 
        else if (data.moveset && data.moveset.includes("all")) {
            allTag.push(entry);
        } 
        else if (data.moveset && types.some(t => data.moveset.includes(t))) {
            movesetMatch.push(entry);
        }
    });

    const sortByPower = arr =>
        arr.sort((a, b) => (b.Power ?? 0) - (a.Power ?? 0));

    // Sort each type bucket
    Object.keys(sameType).forEach(t => sortByPower(sameType[t]));

    return {
        sameType,
        movesetMatch: sortByPower(movesetMatch),
        allTag: sortByPower(allTag)
    };
}

function getMoveCalculatorReport(pkmnObj, level) {
    const buckets = categorizeMovesForPokemon(pkmnObj, level);

    return {
        pokemon: pkmnObj.id,
        level,
        possibleMoves: buckets
    };
}

function showMovePopup(report) {
    // Remove existing popup if present
    const old = document.getElementById("movePopup");
    if (old) old.remove();

    const wrapper = document.createElement("div");
    wrapper.id = "movePopup";

    Object.assign(wrapper.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.75)",
        zIndex: 99999,
        overflowY: "auto",
        padding: "30px",
        boxSizing: "border-box"
    });

    const box = document.createElement("div");
    Object.assign(box.style, {
        background: "#1e1e1e",
        color: "#e0e0e0",
        padding: "25px",
        borderRadius: "10px",
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
        boxShadow: "0 0 20px rgba(0,0,0,0.6)"
    });

    const title = document.createElement("h2");
    title.textContent = `Moves for ${report.pokemon} (Lv ${report.level})`;
    Object.assign(title.style, {
        marginTop: "0",
        marginBottom: "20px",
        fontSize: "28px",
        color: "#ffffff"
    });
    box.appendChild(title);

    // Helper to build a table for each category
    function buildTable(label, arr, typeColor = null) {
        if (!arr.length) return;

        const header = document.createElement("h3");
        header.textContent = label;
        Object.assign(header.style, {
        marginTop: "25px",
        marginBottom: "10px",
        fontSize: "22px",
        color: "#fff",
        padding: "6px 10px",
        borderRadius: "6px",
        background: typeColor || "#333"
        });
        box.appendChild(header);


        const table = document.createElement("table");
        Object.assign(table.style, {
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
            fontSize: "15px",
            background: "#252525",
            borderRadius: "6px",
            overflow: "hidden"
        });

        table.innerHTML = `
            <thead style="background:#333;">
                <tr>
                    <th style="border-bottom:2px solid #444; text-align:left; padding:8px; color:#fff;">Move</th>
                    <th style="border-bottom:2px solid #444; text-align:left; padding:8px; color:#fff;">Type</th>
                    <th style="border-bottom:2px solid #444; text-align:left; padding:8px; color:#fff;">Split</th>
                    <th style="border-bottom:2px solid #444; text-align:left; padding:8px; color:#fff;">Power</th>
                    <th style="border-bottom:2px solid #444; text-align:left; padding:8px; color:#fff;">Info</th>
                </tr>
            </thead>
            <tbody>
                ${arr.map(e => `
                    <tr style="background:${(() => {
    // STAB sections already have colored headers → keep rows dark
    if (typeColor) return "#1e1e1e";

    // Determine tint based on move type
    const key = (e.Type || "").toLowerCase();
    const base = TYPE_COLORS[key];

    if (!base) return "#1e1e1e";

    // Convert hex → rgba with low opacity for subtle tint
    const r = parseInt(base.slice(1, 3), 16);
    const g = parseInt(base.slice(3, 5), 16);
    const b = parseInt(base.slice(5, 7), 16);

    return `rgba(${r},${g},${b},0.18)`; // soft glow on dark theme
})()};">
                        <td style="border-bottom:1px solid #333; padding:6px; color:#ddd;">${formatMoveName(e.ID)}</td>
                        <td style="border-bottom:1px solid #333; padding:6px; color:#ddd;">${e.Type}</td>
                        <td style="border-bottom:1px solid #333; padding:6px; color:#ddd;">${e.Split}</td>
                        <td style="border-bottom:1px solid #333; padding:6px; color:#ddd;">${e.Power ?? "-"}</td>
                        <td style="border-bottom:1px solid #333; padding:6px; color:#bbb;">${e.Info}</td>
                    </tr>
                `).join("")}
            </tbody>
        `;

        box.appendChild(table);
    }

    const buckets = report.possibleMoves;

    Object.keys(buckets.sameType).forEach(typeName => {
    const color = TYPE_COLORS[typeName] || "#555";
    buildTable(`Same-Type: ${typeName}`, buckets.sameType[typeName], color);
    });
    buildTable("Moveset Tag Matches", buckets.movesetMatch);
    buildTable("All-Type Moves", buckets.allTag);

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    Object.assign(closeBtn.style, {
        marginTop: "20px",
        padding: "10px 18px",
        borderRadius: "6px",
        border: "none",
        background: "#444",
        color: "white",
        cursor: "pointer",
        fontSize: "16px"
    });
    closeBtn.onclick = () => wrapper.remove();
    box.appendChild(closeBtn);

    wrapper.appendChild(box);
    document.body.appendChild(wrapper);
}