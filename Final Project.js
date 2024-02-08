const startMenu = document.getElementById("start-menu"); // Gets both menus
const nameInput = document.getElementById("name-input");
// Change whatever you want here to make it look nicer/work more around your "range"
function playerNameSelect() {
    gameMode = document.getElementById("game-mode").value; //Gets the mode you picked

    startMenu.style.display = "none"; //Disables the start menu
    nameInput.style.display = "block"; //Enables the name select

    if (gameMode === "robot") { // if you picked robot, disables the player 2 name input
        document.getElementById("player2").value = "Robot";
        document.getElementById("player2").disabled = true;
    }
}