const numInput = document.querySelector('.userNum');
const numButton = document.querySelector('.button');
const resetButton = document.querySelector('.resetButton');
const condition = document.querySelector('.condition');
const result = document.querySelector('.par');

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

resetButton.addEventListener("click", function () {
    result.classList.add('active');
    result.innerHTML = '';
    //функция рандом и обнуление попыток
})