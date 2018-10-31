//Game values

let min = 1,
    max = 10,
    winningNum = getRandomWin(min, max),
    guessNum = 3;


//UI elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Asign values

minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

//Listen for guess 
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);

    //Validate
    if(isNaN(guess) || guess < min || guess > max){
       setMessage(`You should enter number beetween ${min} and ${max}`,'red');        
    
    }
    //Checking of WON
    if (guess === winningNum) {
        //Gane Over WON

        gameOver(true, `${guess} is correct, You WON!`)
    }
    else {
    // guessNum left
        guessNum = guessNum - 1;

        if (guessNum === 0){
            //Game Over Lose
        gameOver(false, `You lose, correct number was ${winningNum}`) ;
        }
        // Game continues
        else {
            message.innerText = `${guessNum} attemts left`;
            message.style.color = 'red';
            guessInput.value = '';

        }

    }
    
})


function setMessage (msg, color){
    message.innerText = msg;
    message.style.color = color;
}

function gameOver (won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    message.style.color = color;
    message.style.borderColor = color;
    guessInput.style.borderColor = color;
    guessInput.disabled = true;
    
    //Game again?
    guessBtn.value = 'Play again';
    guessBtn.className = 'play-again';
    setMessage(msg);
}

function getRandomWin(min, max){
    return Math.floor(Math.random()*(max - min +1) + min);
}