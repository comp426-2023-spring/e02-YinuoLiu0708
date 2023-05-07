// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


async function play(){
    var rps = document.getElementById('rps');
    var rpsls = document.getElementById('rpsls');
    var opponent = document.getElementById('opponent');
    var game;

    if (rps.checked){
        game = 'rps';
    } else {
        game = 'rpsls';
    }

    const url = window.location.href + 'app/' + game + '/play'

    if (opponent.checked && rps.checked){
        window.location.href = "game-rps.html";
    } 

    if (opponent.checked && rpsls.checked){
        window.location.href = "game-rpsls.html";
    }

}

async function choose(shot){

}

function viewRules(){
    window.location.href = "rules.html";
}

function home(){
    window.location.href = "index.html";
}