var startmenu = document.getElementById("start-menu"); // Gets menus
var nameinput = document.getElementById("name-input");
var diffmenu = document.getElementById("diff-select")
// Change whatever you want here to make it look nicer/work more around your "range"

function diff(){//difficulty menu
    gamemode = document.getElementById("game-mode").value; //Gets the mode you picked

    startmenu.style.display = "none"; //Disables the start menu

}

function playerNameSelect(){
    difficulty = document.getElementById("diff").value
    diffmenu.style.display = "none"; //Disables diff menu
    nameinput.style.display = "block"; //Enables the name select

    if (gameMode === "robot") { // if you picked robot, disables the player 2 name input
        document.getElementById("player2").value = "Robot";
        document.getElementById("player2").disabled = true;
    }
}

function startgame(){

}
