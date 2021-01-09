'use strict';
const scorePlayerOne = document.getElementById('score--0');
const currentScorePlayerOne = document.getElementById('current--0');
const scorePlayerTwo = document.getElementById('score--1');
const currentScorePlayerTwo = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const backgroundOne = document.querySelector('.player--0');
const backgroundTwo = document.querySelector('.player--1');

let playerOneTurn = true;
let rolledNumber;
let scoreOne = 0;
let scoreTwo = 0;
let currentScoreOne = 0;
let currentScoreTwo = 0;

const rollDice = () => {
  const rolledNumber = Math.ceil(Math.random() * 6);
  dice.setAttribute('src', `dice-${rolledNumber}.png`);

  if (playerOneTurn) {
    if (rolledNumber === 1) {
      currentScoreOne = 0;
      switchPlayers();
    } else {
      currentScoreOne += rolledNumber;
    }
    currentScorePlayerOne.textContent = currentScoreOne;
  } else {
    if (rolledNumber === 1) {
      currentScoreTwo = 0;
      switchPlayers();
    } else {
      currentScoreTwo += rolledNumber;
    }
    currentScorePlayerTwo.textContent = currentScoreTwo;
  }
};

const switchPlayers = () => {
  playerOneTurn = !playerOneTurn;
  backgroundOne.classList.toggle('player--active');
  backgroundTwo.classList.toggle('player--active');
  currentScorePlayerOne.textContent = '0';
  currentScorePlayerTwo.textContent = '0';
};

const resetGame = () => {
  playerOneTurn = true;
  currentScorePlayerOne.textContent = '0';
  currentScorePlayerTwo.textContent = '0';
  scorePlayerOne.textContent = '0';
  scorePlayerTwo.textContent = '0';
  backgroundOne.classList.add('player--active');
  backgroundTwo.classList.remove('player--active');
  backgroundOne.classList.remove('player--winner');
  backgroundTwo.classList.remove('player--winner');
  rollBtn.addEventListener('click', rollDice);
};
const holdScore = () => {
  if (playerOneTurn) {
    scoreOne += currentScoreOne;
    scorePlayerOne.textContent = scoreOne;
    currentScoreOne = 0;
  } else {
    scoreTwo += currentScoreTwo;
    scorePlayerTwo.textContent = scoreTwo;
    currentScoreTwo = 0;
  }
  checkWin();
  switchPlayers();
};
const checkWin = () => {
  if (scoreOne >= 100 || scoreTwo >= 100) {
    playerOneTurn
      ? backgroundOne.classList.add('player--winner')
      : backgroundTwo.classList.add('player--winner');
    rollBtn.removeEventListener('click', rollDice);
    holdBtn.removeEventListener('click', holdScore);
  }
};
newGameBtn.addEventListener('click', resetGame);
rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);
