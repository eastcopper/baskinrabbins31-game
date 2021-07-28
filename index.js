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
let beforePlayerNumber = 0;
let select = false;
let easy = false;
let hard = false;
let win;
let game = true;
let stop = false;
let robotBeforeNumber = 0;

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
        robotBeforeNumber = randomNumber;
    }
    if (hard && game) {
        let robotWin = false;
        for (let i = 1; i < 4; i++) {
            for (let j = 0; j < 8; j++) {
                if (num + i == (4 * j) + 2) {
                    num += i;
                    win = false;
                    comparison();
                    robotNumber.innerHTML = `컴퓨터는 ${i}를 선택하였습니다. ${num}`
                    number.innerHTML = `${num}`;
                    robotBeforeNumber = i;
                    robotWin = true;
                }
            }
        }
        if (!robotWin) {
            randomNumber = getRandomIntInclusive(1, 3);
            num += randomNumber;;
            win = false;
            comparison();
            robotNumber.innerHTML = `컴퓨터는 ${randomNumber}를 선택하였습니다. ${num}`
            number.innerHTML = `${num}`;
            robotBeforeNumber = randomNumber;
        }
    }
}

function comparison() {
    console.log(win);
    if (num >= 31) {
        if (!win) {
            winnning.innerHTML = `당신이 이겼습니다.`
        }
        else {
            finalNumber = num - beforePlayerNumber;
            winnning.innerHTML = `당신이 졌습니다.`
            playerNumber.innerHTML = `컴퓨터는 ${robotBeforeNumber}를 선택하였습니다. ${finalNumber}`;
            robotNumber.innerHTML = `당신은 ${beforePlayerNumber}을 선택하였습니다. ${num}`;
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
        beforePlayerNumber = 1;
        num += beforePlayerNumber;
        playerNumber.innerHTML = `당신은 ${beforePlayerNumber}을 선택하였습니다. ${num}`;
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
        beforePlayerNumber = 2;
        num += beforePlayerNumber;
        playerNumber.innerHTML = `당신은 ${beforePlayerNumber}를 선택하였습니다. ${num}`;
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
        beforePlayerNumber = 3;
        num += beforePlayerNumber;
        playerNumber.innerHTML = `당신은 ${beforePlayerNumber}을 선택하였습니다. ${num}`;
        win = true;
        comparison();
        start();
    }
    else {
        alert('난이도를 골라주세요')
    }
})