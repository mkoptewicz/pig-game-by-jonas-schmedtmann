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

const rollDice = () => {
  const rolledNumber = Math.ceil(Math.random() * 6);
  dice.setAttribute('src', `dice-${rolledNumber}.png`);

  if (playerOneTurn) {
    if (rolledNumber === 1) {
      scoreOne = 0;
      switchPlayers();
    } else {
      scoreOne += rolledNumber;
    }
    currentScorePlayerOne.textContent = scoreOne;
  } else {
    if (rolledNumber === 1) {
      scoreTwo = 0;
      switchPlayers();
    } else {
      scoreTwo += rolledNumber;
    }
    currentScorePlayerTwo.textContent = scoreTwo;
  }
};

const switchPlayers = () => {
  playerOneTurn = !playerOneTurn;
  backgroundOne.classList.toggle('player--active');
  backgroundTwo.classList.toggle('player--active');
};

const resetGame = () => {
  currentScorePlayerOne.textContent = '0';
  currentScorePlayerTwo.textContent = '0';
  scorePlayerOne.textContent = '0';
  scorePlayerTwo.textContent = '0';
  backgroundOne.classList.add('player--active');
  backgroundTwo.classList.remove('player--active');
};
newGameBtn.addEventListener('click', resetGame);
rollBtn.addEventListener('click', rollDice);
// holdBtn.addEventListener('click', holdScore);
