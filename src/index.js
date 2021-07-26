const playerNumber = document.getElementById('playerNumber');
const robotNumber = document.getElementById('robotNumber');
const winnning = document.getElementById('winning');
const number = document.getElementById('number');
const plus1 = document.getElementById('plus1');
const plus2 = document.getElementById('plus2');
const plus3 = document.getElementById('plus3');
const novice = document.getElementById('novice');
const master = document.getElementById('master');

let num = 0;
let select = false;
let easy = false;
let hard = false;
let win;
let game = true;

playerNumber.innerHTML = `${num}`;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function start() {
    if (easy && game) {
        randomNumber = getRandomIntInclusive(1, 3)
        num += randomNumber;
        win = false;
        comparison();
        robotNumber.innerHTML = `컴퓨터는 ${randomNumber}를 선택하였습니다. ${num}`
        number.innerHTML = `${num}`;
    }
}

function comparison() {
    console.log(win);
    if (num >= 31) {
        if (!win) {
            winnning.innerHTML = `당신이 이겼습니다.`
        }
        else {
            winnning.innerHTML = `당신이 졌습니다.`
        }
        number.innerHTML = `${num}`;
        game = false;
    }
}

novice.addEventListener('click', function () {
    if (!hard) {
        easy = true;
        select = true;
    }
    
})

master.addEventListener('click', function () {
    if (!easy) {
        hard = true;
        select = true;
    }
    
})

plus1.addEventListener('click', function () {
    if (select && game) {
        num++;
        playerNumber.innerHTML = `당신은 1을 선택하였습니다. ${num}`;
        win = true;
        comparison();
        start();
    }
    else {
        alert('난이도를 골라주세요')
    }
})

plus2.addEventListener('click', function () {
    if (select && game) {
        num += 2;
        playerNumber.innerHTML = `당신은 2를 선택하였습니다. ${num}`;
        win = true;
        comparison();
        start();
    }
    else {
        alert('난이도를 골라주세요')
    }
})

plus3.addEventListener('click', function () {
    if (select && game) {
        num += 3;
        playerNumber.innerHTML = `당신은 3을 선택하였습니다. ${num}`;
        win = true;
        comparison();
        start();
    }
    else {
        alert('난이도를 골라주세요')
    }
})