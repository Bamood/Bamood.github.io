var startmenu = document.getElementById("start-menu"); // Gets menus
var nameinput = document.getElementById("name-input");
var diffmenu = document.getElementById("diff-select");
var gamemode = document.getElementById("game-mode").value; //Gets the mode you picked
// Change whatever you want here to make it look nicer/work more around your "range"

function diff(){//difficulty menu
    
    if (gamemode == "robot") {
        startmenu.style.display = "none"; //Enables the name select
        diffmenu.style.display = "block"; //Disables diff menu
    } else
    {
        startmenu.style.display = "none"; //Disables diff menu
        nameinput.style.display = "block"; //Enables the name select
    }

}

function playerNameSelect(){
    diffmenu.style.display = "none"; //Disables diff menu
    nameinput.style.display = "block"; //Enables the name select

    if (gamemode == "robot") { // if you picked robot, disables the player 2 name input
        document.getElementById("player2").value = "Robot";
        document.getElementById("player2").disabled = true;
    }
}

function startgame(){

}
