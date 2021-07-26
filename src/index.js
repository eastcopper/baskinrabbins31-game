const playerNumber = document.getElementById('playerNumber');
const robotNumber = document.getElementById('robotNumber');
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

playerNumber.innerHTML = `${num}`;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function start() {
    if (easy) {
        randomNumber = getRandomIntInclusive(1, 3)
        num += randomNumber;
        robotNumber.innerHTML = `컴퓨터는 ${randomNumber}를 선택하였습니다. ${num}`
        number.innerHTML = `${num}`;
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
    if (select) {
        num++;
        playerNumber.innerHTML = `당신은 1을 선택하였습니다. ${num}`;
        start();
    }
    else {
        alert('난이도를 골라주세요')
    }
})

plus2.addEventListener('click', function () {
    if (select) {
        num += 2;
        playerNumber.innerHTML = `당신은 2를 선택하였습니다. ${num}`;
        start();
    }
    else {
        alert('난이도를 골라주세요')
    }
})

plus3.addEventListener('click', function () {
    if (select) {
        num += 3;
        playerNumber.innerHTML = `당신은 3을 선택하였습니다. ${num}`;
        start();
    }
    else {
        alert('난이도를 골라주세요')
    }
})