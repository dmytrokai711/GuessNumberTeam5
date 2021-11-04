const numInput = document.querySelector('.userNum');
const rulesBlock = document.querySelector('.rules');
const numButton = document.querySelector('.button');
const resetButton = document.querySelector('.resetButton');
const condition = document.querySelector('.condition');
const result = document.querySelector('.par');
const game = document.querySelector('.game');
const startButton = document.querySelector('#start');
const randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

const guessCount = 5;

//const numberTries = 5;
function random(max) { return Math.floor(Math.random() * (max + 1)); }

startButton.addEventListener("click", function () {
    rulesBlock.classList.add('hidden');
    game.classList.remove('hidden')
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


resetButton.addEventListener("click", function () {
    game.classList.add('hidden');
    rulesBlock.classList.remove('hidden')
    /*result.innerHTML = '';
    numberTries = 5;
    secretNumber = random(100);*/
})

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Число из прошлой попытки =';
    }
    guesses.textContent += userGuess + ' ';
  
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Поздравляем! Вы угадали!';
      //lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
      lastResult.textContent = 'Неверно. Попробуйте снова!';
      //lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Теплее!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Холоднее!';
      }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  
  let progresscount  = 0;
  function progressbar(){
    if (progresscount == 0) {
      progresscount = 1;
      let elem = document.getElementById();
      const width = 10;
      let id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          progresscount = 0;
        } else {
          width++;
          elem.style.width = 50 + "%";
          elem.innerHTML = 50 + "%";
        }
      }
    }
  }; 