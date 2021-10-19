"use strict";

const drum = document.querySelectorAll(".drum");

for (let i = 0; i < drum.length; i++) {
  drum[i].addEventListener("click", function () {
    let btnPressed = this.innerHTML;
     playTheSound(btnPressed);
     btnAnimation(btnPressed);
    }
  )};


document.addEventListener("keydown",function(event)
{
  playTheSound(event.key);
  btnAnimation(event.key);
});


const playTheSound = function(btnPressed)
{
  switch (btnPressed) {
    case "w":
      let tomAudio1 = new Audio("/sounds/tom-1.mp3");
      tomAudio1.play();
      break;
    case "a":
      let tomAudio2 = new Audio("/sounds/tom-2.mp3");
      tomAudio2.play();
      break;
    case "s":
      let tomAudio3 = new Audio("/sounds/tom-3.mp3");
      tomAudio3.play();
      break;
    case "d":
      let tomAudio4 = new Audio("/sounds/tom-4.mp3");
      tomAudio4.play();
      break;
    case "j":
      let snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("/sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("/sounds/kick-bass.mp3");
      kick.play();
      break;
  }
}

const btnAnimation = function(btnPressed)
{
  let activeBtn = document.querySelector("." + btnPressed);
  activeBtn.classList.add("pressed");

  setTimeout (function()
{
  activeBtn.classList.remove("pressed");
},100);
}

