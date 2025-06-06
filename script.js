let clicks = 0;
let multiplier = 1;
let CPS = 0;

function updateDisplay() {
    document.getElementById("clicks").innerText = "Clicks: " + clicks;
    document.getElementById("multiplier").innerText = "Multiplier: " + multiplier;
    document.getElementById("CPS").innerText = "CPS: " + CPS;
}

function saveGame() {
    localStorage.setItem("clickerData", JSON.stringify({
      clicks,
      multiplier,
      CPS
    }));
 }

function loadGame() {
    const saved = JSON.parse(localStorage.getItem("clickerData"));
    if (saved) {
      clicks = saved.clicks;
      multiplier = saved.multiplier;
      CPS = saved.CPS;
    }
    updateDisplay();
}

    window.onload = loadGame;

    document.getElementById("redBox").onclick = function() {
      clicks += 1 * multiplier;
      updateDisplay();
      saveGame();
    };

    document.getElementById("blueBox").onclick = function() {
      if (clicks >= 50) {
        clicks -= 50;
        multiplier += 1;
        updateDisplay();
        saveGame();
      }
    };

    document.getElementById("greenBox").onclick = function() {
      if (clicks >= 100) {
        clicks -= 100;
        CPS += 1;
        updateDisplay();
        saveGame();
      }
    };

    // Passive income every second
    setInterval(() => {
      clicks += CPS;
      updateDisplay();
      saveGame();
    }, 1000);