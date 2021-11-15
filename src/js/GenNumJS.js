let sekretNumber;
let numberTries = COUNT;
let prevTry = 0;

function start() {
  document.querySelector('#gamearea').addEventListener('submit', (event) => {
    startPlaying();
    event.preventDefault();
  });
  dom.rulesBlock.classList.add(hiddenElement);
  dom.game.classList.remove(hiddenElement);
  sekretNumber = getRandom(1, 100);
}
function reset() {
  dom.game.classList.add(hiddenElement);
  dom.rulesBlock.classList.remove(hiddenElement);
  dom.numButton.removeAttribute('disabled', 'disabled');
  dom.progress.style.width = '100%'
  dom.numButton.style.opacity = "1";
  dom.result.innerHTML = '';
  numberTries = COUNT;
  secretNumber = getRandom(1, 100);
  prevTry = 0;
}
function getRandom(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function startPlaying () {
  dom.result.classList.add(activeword);
  switch (true) {
    case numberTries === 0: {
      dom.numButton.setAttribute('disabled', 'disabled');
      dom.numButton.style.opacity = "0.3";
      dom.result.innerHTML = `Ты проиграл(а)! Я загадал число ${sekretNumber}`;
    }
      break;
    case (dom.numInput.value < 1): {
      dom.result.innerHTML = 'Число ' + dom.numInput.value + ' меньше 1!';
    }
      break;
    case (dom.numInput.value > 100): {
      dom.result.innerHTML = 'Число ' + dom.numInput.value + ' Больше 100!';
    }
      break;
    case (dom.numInput.value >= 1 && dom.numInput.value <= 100):
      dom.result.innerHTML = checkGuess(+dom.numInput.value, sekretNumber);
      dom.progress.style.width = numberTries*20+'%';
      break;
    default: dom.result.innerHTML = 'Что-то пошло не так...';
  }
}
function checkGuess(inputNumber, randomNumber) {
  switch (true) {
    case inputNumber === randomNumber: {
      dom.numButton.setAttribute('disabled', 'disabled');
      dom.numButton.style.opacity = "0.3";
      return 'Поздравляем! Вы угадали!';
    }
    case numberTries === 5:
      prevTry = inputNumber;
      numberTries--;
      return ' ';
    case Math.abs(inputNumber - randomNumber) > Math.abs(prevTry - randomNumber): {
      prevTry = inputNumber;
      numberTries--;
      return 'Холоднее!!!!!!!';
    }
    case Math.abs(inputNumber - randomNumber) < Math.abs(prevTry - randomNumber): {
      prevTry = inputNumber;
      numberTries--;
      return 'Теплее!!!!!!!';
    }
    case prevTry === inputNumber: {
      numberTries--;
      return 'Уже было!!!!';
    }
    default: return 'Что-то пошло не так...'

  }
}
dom.startButton.addEventListener(clickword, start);
dom.numButton.addEventListener(clickword, startPlaying);
dom.resetButton.addEventListener(clickword, reset)