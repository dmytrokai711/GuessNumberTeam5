const numInput = document.querySelector('.userNum');
const rulesBlock = document.querySelector('.rules');
const numButton = document.querySelector('.button');
const condition = document.querySelector('.condition');
const result = document.querySelector('.par');
const startButton = document.querySelector('#start');

startButton.addEventListener("click", function () {
    rulesBlock.classList.add('hidden');
});
numInput.addEventListener("click", function () {
    condition.classList.add('active');
});

numButton.addEventListener("click", function () {
    result.classList.add('active');
    if (numInput.value < 1) {
        result.innerHTML = 'Число ' + numInput.value + ' меньше 1!';
    }
    else if (numInput.value > 100) {
        result.innerHTML = 'Число ' + numInput.value + ' Больше 100!';
    }
    else if (numInput.value >= 1 && numInput.value <= 100) {
        //вызов функции
    }
});
