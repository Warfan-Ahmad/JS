'use strict'

const randomNumberForPlayer1 = Math.round(Math.random() * 6 + 1);
const randomNumberForPlayer2 = Math.round(Math.random() * 6 + 1);

console.log(randomNumberForPlayer1,randomNumberForPlayer2);

document.querySelector('.img1').src = (`/images/dice${randomNumberForPlayer1}.png`);
document.querySelector('.img2').src = (`/images/dice${randomNumberForPlayer2}.png`);


if(randomNumberForPlayer1 > randomNumberForPlayer2)
{
    document.querySelector('.text').textContent = "🚩Player 1 Wins";
}
else if(randomNumberForPlayer2 > randomNumberForPlayer1)
{
    document.querySelector('.text').textContent = "Player 2 Wins🚩";
}
else
{
    document.querySelector('.text').textContent = "Draw🤞";
}
