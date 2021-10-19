"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;

function displayTheMessage(message) {
  document.querySelector(".message").textContent = message;
}

function setTheValue(dataToDisplay) {
  document.querySelector(".score").textContent = dataToDisplay;
}

document.querySelector(".check").addEventListener(
  "click",
  function () {
    const userGuessedNumber = Number(document.querySelector(".guess").value);
    //No Value Provided
    if (!userGuessedNumber) {
      // document.querySelector('.message').textContent = "Please Provide a number";

      displayTheMessage("Please Provide a number");
    }

    // Value Matches the Secret Number
    else if (userGuessedNumber === secretNumber) {
      // document.querySelector('.message').textContent = "You Have Guessed Correctly!!";
      displayTheMessage("You Have Guessed Correctly!!");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "green";

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else if (userGuessedNumber !== secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          userGuessedNumber > secretNumber ? "Too High." : "Too Low";
        score--;
        // document.querySelector('.score').textContent = score;
        setTheValue(score);
      } else {
        // document.querySelector('.message').textContent = "Game oVer";
        displayTheMessage("Khatam tata bye bye gaya");
        // document.querySelector('.score').textContent = 0;
        setTheValue(0);
      }
    }
  }

  //Value is greater than the secret number
  //     else if(userGuessedNumber > secretNumber)
  //     {
  //         if(score > 1)
  //         {
  //             document.querySelector('.message').textContent = "Too High. Try Again";
  //             score --;
  //             document.querySelector('.score').textContent = score;
  //         }
  //         else
  //         {
  //             document.querySelector('.message').textContent = "Game oVer";
  //             score --;
  //             document.querySelector('.score').textContent = score;
  //         }

  //     }

  // // Value is smaller than the secret value
  //     else if(userGuessedNumber < secretNumber)
  //     {
  //         if(score > 1)
  //         {
  //         document.querySelector('.message').textContent = "Too Low. Try Again!!";
  //         score --;
  //         document.querySelector('.score').textContent = score;
  //         }
  //         else
  //         {
  //             document.querySelector('.message').textContent = "Game oVer";
  //             score --;
  //             document.querySelector('.score').textContent = score;
  //         }
  //     }
  // }
);

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.score').textContent = score;
  setTheValue(score);
  // document.querySelector('.message').textContent = "Start guessing...";
  displayTheMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
