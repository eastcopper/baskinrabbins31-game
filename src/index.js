const number = document.getElementById('number');
const plus1 = document.getElementById('plus1');
const plus2 = document.getElementById('plus2');
const plus3 = document.getElementById('plus3');

let num = 0;

number.innerHTML = `${num}`;

plus1.addEventListener('click', function () {
    num++;
    number.innerHTML = `${num}`;
})
plus2.addEventListener('click', function () {
    num += 2;
    number.innerHTML = `${num}`;
})
plus3.addEventListener('click', function () {
    num += 3;
    number.innerHTML = `${num}`;
})