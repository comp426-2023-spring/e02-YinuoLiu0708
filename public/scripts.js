// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var shot;

function play(){
    var rps = document.getElementById('rps');
    var rpsls = document.getElementById('rpsls');
    var opponent = document.getElementById('opponent');

    window.location.href = "game.html";

    if (rps.checked){
        var lizard = document.getElementById("lizard");
        lizard.style.display = "none";

    }
    const base_url = window.location.href + 'app/';
    const url = base_url + 'rps' + '/play' + '/' + shot;
}

function choose(choice){
    shot = choice;
}

function viewRules(){
    window.location.href = "rules.html";
}

function home(){
    window.location.href = "index.html";
}