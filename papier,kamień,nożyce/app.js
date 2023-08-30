const playerPointsSpan = document.querySelector('.player-points');
const compPointsSpan = document.querySelector('.comp-points');
const optionButtons = document.querySelectorAll('.options')
const compChoiceSpan = document.querySelector('.comp-choice');
const playerChoiceSpan = document.querySelector('.player-choice');
const resultText  = document.querySelector('.result-text');
const resetGameButton = document.querySelector('.reset-game');

let playerPoints = 0;
let compPoints = 0;
let playerChoice = '';
let compChoice = '';

const availableCompChoices = ['ROCK', 'PAPER', 'SCISSORS']

optionButtons.forEach((button) => button.addEventListener('click', playerSelect));
resultText.addEventListener('click', resetFunction);

function setGame() {
    playerPointsSpan.innerHTML = playerPoints;
    compPointsSpan.innerHTML = compPoints;
    resultText.innerHTML = 'Choose  you weapon!';
}
window.onload = setGame();

function playerSelect(event) {
    optionButtons.forEach((button) => button.classList.remove("active"));
    playerChoice = event.target.dataset.option;
    event.target.classList.add("active");

    compSelect()
}

function compSelect() {
    const randomIndex = Math.floor(Math.random() * availableCompChoices.length)
    compChoice = availableCompChoices(randomIndex);

    checkResult();
}

function checkResult() {
    let winner = '';

    if(playerChoice === 'ROCK' && compChoice === 'SCISSORS' ||
     playerChoice === 'PAPER' && compChoice === 'ROCK' ||
      playerChoice === 'SCISSORS' && compChoice === 'PAPER') {
        winner = 'You won';
        playerPoints++;
        playerChoiceSpan.innerHTML = playerPoints;
    } else if (compChoice === playerChoice) {
        winner = 'Draw'
    } else {
        winner = 'You lost';
        compPoints++;
        compPointsSpan.innerHTML = compPoints;
    }

    compChoiceSpan.innerHTML = compChoice;
    playerChoiceSpan.innerHTML = playerChoice;
    resultText.innerHTML = winner;
}

function resetFunction() {
   
}   