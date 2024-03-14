// Change whatever you want here to make it look nicer/work more around your "range"

function diff(){//difficulty menu

    var gamemode = document.getElementById("game-mode").value; //Gets the mode you picked
    if (gamemode == "human") {
        document.getElementById("start-menu").style.display="none"; //Disables diff menu
        document.getElementById("name-input").style.display="block"; //Enables the name select
        
    } else
    {
        document.getElementById("start-menu").style.display="none";//Disables start menu
        document.getElementById("diff-select").style.display="block"; //Enables the name select
    }

}

function playerNameSelect(){
    var gamemode = document.getElementById("game-mode").value; //Gets the mode you picked
    document.getElementById("diff-select").style.display="none"; //Disables diff menu
    document.getElementById("name-input").style.display="block"; //Enables the name select

    if (gamemode == "robot") { // if you picked robot, disables the player 2 name input
        document.getElementById("player2").value = "Robot";
        document.getElementById("player2").disabled = true;
    }
}

function startgame(){

    

}

