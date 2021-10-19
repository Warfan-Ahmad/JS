'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btncloseModel = document.querySelector(".close-modal");
const btnsOpenModel = document.querySelectorAll(".show-modal");

const openTheModal = function()
{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeTheModal = function()
{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i<btnsOpenModel.length;i++)
{
    btnsOpenModel[i].addEventListener('click',openTheModal);
}
overlay.addEventListener('click',openTheModal);


btncloseModel.addEventListener('click',closeTheModal);
overlay.addEventListener('click',closeTheModal);


document.addEventListener('keydown',function(e)
{
    if(e.key === "Escape" && !modal.classList.contains("hidden"))
    {
        closeTheModal();
    }
});
