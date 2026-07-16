```javascript
/*
=========================================
PROJECT MIMIC
Main Menu
=========================================
*/

window.addEventListener("DOMContentLoaded", () => {

    console.log("Project Mimic Loaded");

    const playButton = document.getElementById("play");
    const settingsButton = document.getElementById("settings");
    const creditsButton = document.getElementById("credits");
    const quitButton = document.getElementById("quit");

    if (playButton) {

        playButton.addEventListener("click", startGame);

    }

    if (settingsButton) {

        settingsButton.addEventListener("click", openSettings);

    }

    if (creditsButton) {

        creditsButton.addEventListener("click", openCredits);

    }

    if (quitButton) {

        quitButton.addEventListener("click", quitGame);

    }

});

function startGame() {

    console.log("Starting Game...");

    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        /*
            Later this becomes:

            window.location.href = "game.html";

            or

            initializeGame();

        */

        alert("Game loading...");

        document.body.style.opacity = "1";

    }, 1000);

}

function openSettings() {

    alert("Settings coming soon.");

}

function openCredits() {

    alert(
`PROJECT MIMIC

Created by Owens

Built with JavaScript
HTML
CSS

More credits coming soon.`
    );

}

function quitGame() {

    alert(
        "You can close this tab to quit."
    );

}
```
