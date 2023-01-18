'use strict';

let currentSum = 0;
let globalSum = 0;
let player1currentContent = document.querySelector('#current--0');
let player2currentContent = document.querySelector('#current--1');
const player1Active = document.querySelector('.player--0');
const player2Active = document.querySelector('.player--1');
let player1Scores = document.querySelector('#score--0');
let player2Scores = document.querySelector('#score--1');
let player1Score = Number(player1Scores.textContent);
let player2Score = Number(player2Scores.textContent);

// const scoresViewer = function(players)
// {

// }
document.querySelector('.btn--roll').addEventListener('click', function () {
  let diceRollNum = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('img').src = `dice-${diceRollNum}.png`;

  if (diceRollNum !== 1) {
    currentSum += diceRollNum;
    if (player1Active.classList.contains('player--active')) {
      player1currentContent.textContent = currentSum;
    } else {
      player2currentContent.textContent = currentSum;
    }
  } else {
    currentSum = 0;
    player1Active.classList.contains('player--active')
      ? (player1currentContent.textContent = 0)
      : (player2currentContent.textContent = 0);
    // player1currentContent.textContent = 0;
    if (!player1Active.classList.contains('player--active')) {
      player1Active.classList.add('player--active');
      player2Active.classList.remove('player--active');
    } else {
      player2Active.classList.add('player--active');
      player1Active.classList.remove('player--active');
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (player1Active.classList.contains('player--active')) {
    player1Score += currentSum;
    player1Scores.textContent = player1Score;
    currentSum = 0;
  } else {
    player2Score += currentSum;
    player2Scores.textContent = player2Score;
    currentSum = 0;
  }
  player1Active.classList.contains('player--active')
    ? (player1currentContent.textContent = 0)
    : (player2currentContent.textContent = 0);
  // player1currentContent.textContent = 0;
  if (!player1Active.classList.contains('player--active')) {
    player1Active.classList.add('player--active');
    player2Active.classList.remove('player--active');
  } else {
    player2Active.classList.add('player--active');
    player1Active.classList.remove('player--active');
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  player1Score = 0;
  player2Score = 0;
  player1Scores.textContent = player1Score;
  player2Scores.textContent = player2Score;
  if (!player1Active.classList.contains('player--active')) {
    player1Active.classList.add('player--active');
    player2Active.classList.remove('player--active');
  }
  document.querySelector('img').src = ``;
});
