let button = document.querySelector('#btn');
let userInput = document.querySelector('#input-box');
let guessSlot = document.querySelector('#guesses');
let remaining = document.querySelector('#remaining');
let lowOrHi = document.querySelector('#lowOrHi');
let startOver = document.querySelector('.resultParas');


// let prevGuess = [];
let numGuess = 1;

let newButton = document.createElement('button');
let randomNumber = parseInt(Math.random() * 15 + 1);

let playGame = true;

if(playGame){
  button.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validationGuess(guess);
  });
}

function validationGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a valid number.');
  }else if(guess < 1){
    alert('Please Enter a number more than 1.');
  }else if(guess > 15){
    alert('Please Enter a number less than 15.');
  }else{
    
    if(numGuess > 15){
      checkGuess(guess);
      displayMessage(`Game Over: Random Number is: ${randomNumber}`);
      endGame();
    }else{
      clearGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You Guessed it right`);
    endGame();
  }else if(guess < randomNumber){
    displayMessage(`Your Guess is too low`);
  }else if(guess > randomNumber){
    displayMessage(`Your Guess is too high`);
  }
}

function clearGuess(guess){
  if (numGuess > 1) {
    guessSlot.removeChild(guessSlot.lastChild);
  }
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${16 - numGuess}`;

 
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  newButton.classList.add('button');
  newButton.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(newButton);
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random() * 15 + 1);
  numGuess = 1;
  guessSlot.innerHTML =  '';
  remaining.innerHTML = `${16 - numGuess}`;
  userInput.removeAttribute('disabled')
  startOver.removeChild(newButton)
  playGame = true
  remaining.innerHTML = ''
  lowOrHi =  ''
  })
}
 