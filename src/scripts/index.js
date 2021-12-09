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

//---------------------------- GAME ------------------------
const displayPlayer = document.getElementById('displayPlayer');
const cell = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');

let board = ['','','','','','','','',''];
let players = {
    X : '<i class="fas fa-times"></i>',
    O : '<i class="fas fa-circle-notch"></i>'
}
let currentPlayer = players.X;
let isGameActive = true;

const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';

/*
    0 1 2
    3 4 5
    6 7 8
*/
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
            announce(currentPlayer === players.X ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
}


const announce = (type) =>{
    switch(type){
        case PLAYERO_WON:
            console.log('Player O won');
            break;
        case PLAYERX_WON:
            console.log('Player X won');
            break;
        case TIE:
            console.log('TIE');
            break;
    }
}

const isValidAction = (tile) => {
    if (tile.innerText === players.X || tile.innerText === players.O){
        return false;
    }

    return true;
};

const updateBoard =  (index) => {
    board[index] = currentPlayer;
}

const changePlayer = ()=>{
    console.log(currentPlayer);
    currentPlayer = currentPlayer === players.X ? players.O : players.X;
    displayPlayer.innerHTML = currentPlayer;
}

const userAction = (cell, index) => {
    if(isValidAction(cell) && isGameActive){
        console.log(cell);
        cell.innerHTML = currentPlayer;
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }
}

cell.forEach((cell, index) =>{
    cell.addEventListener('click', () => userAction(cell, index));
})
