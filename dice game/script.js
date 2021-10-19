'use strict';

//Selecting the elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const currentScoreOfPlayer0 = document.querySelector('#current--0');
const currentScoreOfPlayer1 = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//Initial Values
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');



//Rolling the dice functionality
const btnRoll = document.querySelector('.btn--roll');
let score = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true

const switchThePlayer = function()
{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


btnRoll.addEventListener('click',function()
{
    //Generate Random Dice Roll
    if(playing)
    {
    const valueOfDice = Math.trunc(Math.random() * 6 + 1); 

    diceElement.classList.remove('hidden');
    diceElement.src = (`dice-${valueOfDice}.png`);

    if(valueOfDice!== 1)
    {
    currentScore += valueOfDice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
    else
    {
       switchThePlayer();
    }
}
});

//Hold Button

const btnHold = document.querySelector('.btn--hold');

btnHold.addEventListener('click',function()
{
    if(playing)
    {

   
    //Add current to score of active player
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    //Check if score is 100 and finish the game
    if(score[activePlayer] >= 20)
    {
        playing = false;
        diceElement.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    //Switch to the next player
    switchThePlayer();
}
});

//Resetting Button

const resetbtn = document.querySelector('.btn--new');

resetbtn.addEventListener('click',function()
{

    currentScore = 0;
    playing = true;
    activePlayer = 0;
    score = [0,0];

    document.getElementById(`score--0`).textContent = score[activePlayer];
    document.getElementById(`score--1`).textContent = score[activePlayer];

    diceElement.classList.remove('hidden');

    currentScoreOfPlayer0.textContent = currentScore;
    currentScoreOfPlayer1.textContent = currentScore;

    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');


    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');


})