

//automatically checks git commits and warns when running outdated version
//PR submitted by enyxiel
//changes made by duck are marked with PR-EDIT


let initialCommit = null;
let updateShown = false;
let updateInterval = null;

async function getLatestCommit() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/play-pokechill/play-pokechill.github.io/commits/main",
      { cache: "no-cache" }
    );

    if (!res.ok) {
      console.warn(`GitHub API error: ${res.status}`);
      return null;
    }
    
    const data = await res.json();
    return data.sha || null;

  } catch (err) {
    console.warn(`Failed to fetch latest commit: ${err}`);
    return null;
  }
}

async function checkForUpdates() {
  const latest = await getLatestCommit();
  if (!latest) return; // Fetch failed; try again later

  if (!initialCommit) {
    // First run: store the current commit
    initialCommit = latest;
  } else if (initialCommit !== latest) {
    // Update detected — stop polling and notify listeners
    clearInterval(updateInterval);
    window.dispatchEvent(new Event("app-update-available"));
  }
}

// Initial setup
(async () => {
  initialCommit = await getLatestCommit();
  

  // Poll every 5 minutes (12 requests/hour — safe/friendly for GitHub API limits)
  updateInterval = setInterval(checkForUpdates, 300000);
})();


window.addEventListener("app-update-available", () => {
  // Prevent duplicate banners
  if (updateShown) return;
  updateShown = true;

  const banner = document.createElement("div");
  banner.textContent = "A new update is available. Refresh to update.";
  banner.style.position = "fixed";  
  banner.style.top = "0";  
  banner.style.left = "0";  
  banner.style.width = "100%";  
  banner.style.background = "rgb(104, 158, 60)";  
  banner.style.color = "white";  
  banner.style.padding = "10px";  
  banner.style.textAlign = "center";  
  banner.style.cursor = "pointer";  
  banner.style.zIndex = "9999";
  banner.onclick = () => location.reload();
  document.body.appendChild(banner);
});