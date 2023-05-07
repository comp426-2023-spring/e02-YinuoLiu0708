// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var game;
var baseurl = window.location.href + 'app/';

async function play(){
    var rps = document.getElementById('rps');
    var rpsls = document.getElementById('rpsls');
    var opponent = document.getElementById('opponent');

    if (rps.checked){
        game = 'rps';
    } else {
        game = 'rpsls';
    }

    if (opponent.checked && rps.checked){
        window.location.href = "game-rps.html";
    } 

    if (opponent.checked && rpsls.checked){
        window.location.href = "game-rpsls.html";
    }
}

async function choose(shot){
    document.getElementById('shot').value = shot;

    url = baseurl + game + '/play' + '/' + shot;
    
    let response = await fetch(url);
    let data = await response.json();

    opponent_shot = data.opponent;
    result = data.result;

    document.getElementById('opponent-shot').value = opponent_shot;
    document.getElementById('result').value = result;
}

function viewRules(){
    window.location.href = "rules.html";
}

function home(){
    window.location.href = "index.html";
}