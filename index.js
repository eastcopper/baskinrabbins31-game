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
} // 랜덤 숫자

function start() {
    if (easy && game) { // 쉬움 난이도
        randomNumber = getRandomIntInclusive(1, 3)
        num += randomNumber; // 랜덤 숫자 더하기
        win = false;
        comparison();
        robotNumber.innerHTML = `컴퓨터는 ${randomNumber}를 선택하였습니다. ${num}` // 로그 띄우기
        number.innerHTML = `${num}`; // 총 점수 띄우기
        robotBeforeNumber = randomNumber;
    }
    if (hard && game) { // 고수 난이도
        let robotWin = false;
        for (let i = 1; i < 4; i++) {
            for (let j = 0; j < 8; j++) {
                if (num + i == (4 * j) + 2) {
                    num += i;
                    win = false;
                    comparison();
                    robotNumber.innerHTML = `컴퓨터는 ${i}를 선택하였습니다. ${num}` // 로그 띄우기
                    number.innerHTML = `${num}`; // 총 점수 띄우기
                    robotBeforeNumber = i;
                    robotWin = true; // 로봇의 승리가 확정됬을 때
                }
            }
        }
        if (!robotWin) { // 아직 승리가 확정되지 않았을 때
            randomNumber = getRandomIntInclusive(1, 3);
            num += randomNumber;; // 랜덤 숫자 더하기
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
    if (num > 30) { // 30을 초과했을 때
        if (!win) {
            winnning.innerHTML = `당신이 이겼습니다.` // 승리 로그 띄우기
        }
        else {
            finalNumber = num - beforePlayerNumber;
            winnning.innerHTML = `당신이 졌습니다.` // 패배 로그 띄우기
            playerNumber.innerHTML = `컴퓨터는 ${robotBeforeNumber}를 선택하였습니다. ${finalNumber}`;
            robotNumber.innerHTML = `당신은 ${beforePlayerNumber}을 선택하였습니다. ${num}`; // 로그 위치 바꾸기
        }
        number.innerHTML = `${num}`;
        game = false;
    }
}

novice.addEventListener('click', function () {
    if (!hard) {
        easy = true;
        select = true;
    } // 난이도 한 번만 고르기
})

master.addEventListener('click', function () {
    if (!easy) {
        hard = true;
        select = true;
    } // 난이도 한 번만 고르기
})

plus1.addEventListener('click', function () { // 1을 골랐을 때
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

plus2.addEventListener('click', function () { // 2를 골랐을 때
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

plus3.addEventListener('click', function () { // 3을 골랐을 때
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