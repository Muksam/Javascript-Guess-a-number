const  randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')


let prevGuess = []

let numGuess = 1 
let playGame = true

if(playGame) {
    submit.addEventListener('click',function(e){
     e.preventDefault();
     const guess = parseInt(userInput.value)
     validateGuess(guess)
    })
}
function validateGuess(guess) {
   if (isNaN(guess)) {
    alert('please inter the valid number');
   } else if (guess < 1) {
    alert('please inter the valid number');
   } else if (guess > 100) {
    alert ('please inter valid number');
   } else {
     prevGuess.push(guess);
     if(numGuess === 11) {
        displayGuess(guess)
        displayMessage(`Game Over, Random number was ${randomNumber}`)
        endGame()
     } else {
        displayGuess(guess)
        checkGuess(guess)
     }
   }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guess it right`)
  }else if (guess < randomNumber) {
    displayMessage (`your guess is to low`)
  }else if (guess > randomNumber) {
    displayMessage(` your guess is to high`)
  }
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
} 

function displayMessage(message) {
   lowOrHi.innerHTML = `<h2>${message}</h2>`
}
 
function endGame() {
     userInput.value = '';
     userInput.setAttribute('disabled','');
     p.addClassList.add('button');
     p.innerHTML = `<h2 id = 'newGame'>Start a New Game</h2>`;
     startOver.appendChild(p);
     playGame = false;
     startGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener
  ('click',function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame= true;
  }) 
}