var scores, roundScore, activePlayer, gamePlaying, winningScore, input;

init();

document.querySelector('.input').addEventListener('keypress', function(e) {
        
            var key = e.which || e.keyCode;
            if(key === 13) {
               document.querySelector('.input').style.display = 'none';
                document.querySelector('.home').style.display = 'none';
           } 
       });


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
       //1. Random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //2. Display the result
    var diceDOM1 = document.querySelector('.dice1')
    var diceDOM2 = document.querySelector('.dice2')
    diceDOM1.style.display = 'block';
    diceDOM2.style.display = 'block';
    diceDOM1.src = 'dice-' + dice1 + '.png';
    diceDOM2.src = 'dice-' + dice2 + '.png';
    //3. Update the round score if the rolled number is not a 1
    if(dice1 !== 1 && dice2 !== 1) {
        //Add score
        roundScore += (dice1 + dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
    }    
    }    
});


document.querySelector('.btn-hold').addEventListener('click', function() {
   if (gamePlaying) {
      // Add current score to global score
    scores[activePlayer] += roundScore;
    // Update the UI(user interface)
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
       input = document.querySelector('.input').value;
       // Undefined, 0, null or "" are COERCED to false
       //Anything else is coerced to true
       
       
       if(input) {
           winningScore = input;
       } else {
           winningScore = 100;
       }
       
       
    //Check if player won the game
    //if scores[activePlayer] >= 100 then won the game
    if(scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    } 
   } 
});

    
document.querySelector('.btn-new').addEventListener('click', init);


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //Turnary operator - This is the same as writing: if(activePlayer === 0) { activePlayer =1;} else {activePlayer = 0;}
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
}

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.input').style.display = 'block';
    document.querySelector('.input').value = "";
    document.querySelector('.home').style.display = 'block';
}


document.querySelector('.book').addEventListener('click', function() {
   document.querySelector('.modal').style.display = 'block';
    document.querySelector('.book').style.display = 'none';
    
});

document.querySelector('.closing').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.book').style.display = 'block';
});













