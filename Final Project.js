const startMenu = document.getElementById("start-menu");
const nameInput = document.getElementById("name-input");

function playerNameSelect() {
    gameMode = document.getElementById("game-mode").value;

    startMenu.style.display = "none";
    nameInput.style.display = "block";

    if (gameMode === "robot") {
        document.getElementById("player2").value = "Robot";
        document.getElementById("player2").disabled = true;
    }
}