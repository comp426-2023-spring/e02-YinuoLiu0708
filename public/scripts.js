// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

var game;

function play(){
    var rps = document.getElementById('rps');
    var rpsls = document.getElementById('rpsls');
    var opponent = document.getElementById('opponent');

    if (rps.checked){
        game = 'rps';
    } else if (rpsls.checked){
        game = 'rpsls';
    }

    if (opponent.checked && rps.checked){
        window.location.href = "game-rps.html";
    } 

    if (opponent.checked && rpsls.checked){
        window.location.href = "game-rpsls.html";
    }

    if (!opponent.checked && rps.checked){
        rpsNoOpponent().then(shot => {
            document.getElementById("no-opponent").value = shot.player;
        })
    }
}

function choose(shot){
    document.getElementById('shot').value = shot;

}

function rpsNoOpponent() {
    const url = "/app/rps"
    return response = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

function viewRules(){
    window.location.href = "rules.html";
}

function home(){
    window.location.href = "index.html";
}