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

number.innerHTML = `${num}`;

novice.addEventListener('click', function () {
    easy = true;
    select = true;
})

master.addEventListener('click', function () {
    hard = true;
    select = true;
})

plus1.addEventListener('click', function () {
    if (select) {
        num++;
        number.innerHTML = `${num}`;
    }
    else {
        alert('난이도를 골라주세요')
    }

})

plus2.addEventListener('click', function () {
    if (select) {
        num += 2;
        number.innerHTML = `${num}`;
    }
    else {
        alert('난이도를 골라주세요')
    }
})

plus3.addEventListener('click', function () {
    if (select) {
        num += 3;
        number.innerHTML = `${num}`;
    }
    else {
        alert('난이도를 골라주세요')
    }
})