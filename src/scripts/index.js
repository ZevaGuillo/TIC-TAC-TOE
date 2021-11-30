const btn_multiplayer = document.getElementById('multiplayer');
const btn_computer = document.getElementById('computer');
const btn_easy = document.getElementById('easy');
const btn_hard = document.getElementById('hard');

btn_multiplayer.style.backgroundColor = '#f39984';
btn_easy.style.backgroundColor= '#f0ba8a';

let rival = 'MultiPlayer';
let level = 'Easy';

// ----------------------------Botones----------------------------------------

btn_computer.addEventListener('click',(e)=>{
    changeColorButton(btn_multiplayer, e.target, 'rgb(243, 153, 132)');
    rival = e.target.textContent;
});

btn_multiplayer.addEventListener('click',(e)=>{
    changeColorButton(btn_computer, e.target, 'rgb(243, 153, 132)');
    rival = e.target.textContent;
});

btn_hard.addEventListener('click',(e)=>{
    changeColorButton(btn_easy, e.target, 'rgb(240, 186, 138)');
    level = e.target.textContent;
});

btn_easy.addEventListener('click',(e)=>{
    changeColorButton(btn_hard, e.target, 'rgb(240, 186, 138)');
    level = e.target.textContent;
});

function changeColorButton(button1, button2, color){
    if(button1.style.backgroundColor === color){
        button1.style.backgroundColor = '#EBEBF2';
        button2.style.backgroundColor= color;
    }
}

