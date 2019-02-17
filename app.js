
let scores, roundScore, activePlayer,gameHasfinished,maxScore;
startGame();
maxScore = 100;




document.getElementById('max-score').addEventListener('change',function(){
    maxScore = document.getElementById('max-score').value;
    })

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameHasfinished == 0) {

        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        var dice1DOM = document.querySelector('.dice1');
        var dice2DOM = document.querySelector('.dice2');
        dice1DOM.src = `./pictures/dice-${dice1}.png`;
        dice2DOM.src = `./pictures/dice-${dice2}.png`;
        if (dice1 !== 1 && dice2 !== 1) {
            dice1DOM.style.display = 'block';
            dice2DOM.style.display = 'block';
            roundScore= roundScore+dice1+dice2;
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
        scores[activePlayer] >= maxScore ? winner() : nextPlayer();


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
    document.querySelector('.dice1').style.display ='none';
    document.querySelector('.dice2').style.display ='none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

function nextPlayer() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');

}

function winner() {
    gameHasfinished = 1;
    document.getElementById('name-' + activePlayer).textContent = 'Winner';
    document.querySelector('.dice1').style.display ='none';
    document.querySelector('.dice2').style.display ='none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
}



//change color of the skin 

document.querySelector('.color1').addEventListener('click',pintar);
document.querySelector('.color2').addEventListener('click',pintar);
document.querySelector('.color3').addEventListener('click',pintar);
document.querySelector('.color4').addEventListener('click',pintar);
document.querySelector('.color5').addEventListener('click',pintar);

function pintar(){
    document.documentElement.style.setProperty('--main-color', this.getAttribute('rel'));
}


