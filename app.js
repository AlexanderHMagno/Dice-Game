let scores, roundScore, activePlayer,gameHasfinished;
startGame();


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameHasfinished == 0) {

        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        if (dice !== 1) {
            diceDOM.style.display = 'block';
            diceDOM.src = `./pictures/dice-${dice}.png`;
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
           
            nextPlayer();

        }

    }
})



document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameHasfinished == 0) {
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        scores[activePlayer] >= 10 ? winner() : nextPlayer();


    }

})



document.querySelector('.btn-new').addEventListener('click', function () {
    document.getElementById('name-' + activePlayer).textContent = 'Player ' + (activePlayer+1);
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    
   startGame();
})


function startGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = Math.round(Math.random());
    gameHasfinished = 0;
    document.querySelector('.dice').style.display ='none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

function nextPlayer() {
    document.querySelector('.dice').style.display ='none';
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

}

function winner() {
    gameHasfinished = 1;
    document.getElementById('name-' + activePlayer).textContent = 'Winner';
    document.querySelector('.dice').style.display = "none";
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}

