


let scores,roundScore,activePlayer;

scores = [0,0];
roundScore=0;
activePlayer =0;

document.getElementById('score-0').textContent = '0'; 
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click',function(){
    var dice= Math.floor(Math.random()*6)+1;
    var diceDOM =  document.querySelector('.dice');
    if( dice !== 1 ){    
       diceDOM.style.display = 'block';
       diceDOM.src = `./pictures/dice-${dice}.png`;
       roundScore+=dice;
       document.getElementById('current-'+activePlayer).textContent = roundScore;
    }else{
        diceDOM.style.display = 'none';
        roundScore = 0;
        document.getElementById('current-'+activePlayer).textContent = '0';
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
        activePlayer===0?activePlayer=1:activePlayer=0;
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
    }
})



document.querySelector('.btn-hold').addEventListener('click',function(){

    scores[activePlayer]+=document.getElementById('current-'+activePlayer).val;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    
    document.getElementById('current-'+activePlayer).textContent = 0;
    activePlayer===0?activePlayer=1:activePlayer=0;
    document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');

})



//document.querySelector('#current-'+ activePlayer).textContent = 1;

