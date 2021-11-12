let sekretNumber;
let numberTries = 5;
let prevTry = -1;

function getRandom(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function progressbar() {
  if (COUNT == 0) {
    COUNT = 1;
    let elem = document.getElementById();
    const width = 10;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        COUNT = 0;
      } else {
        width++;
        elem.style.width = 50 + "%";
        elem.innerHTML = 50 + "%";
      }
    }
  }
};

function checkGuess(inputNumber, randomNumber) {
  switch (true) {
    case inputNumber === randomNumber: {
      dom.numButton.setAttribute('disabled', 'disabled');
      dom.numButton.style.opacity = "0.3";
      return 'Поздравляем! Вы угадали!';
    }
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

dom.startButton.addEventListener(clickword, function () {
  dom.rulesBlock.classList.add(hiddenElement);
  dom.game.classList.remove(hiddenElement);
  sekretNumber = getRandom(1, 100);
});

dom.numInput.addEventListener(clickword, function () {
  dom.condition.classList.add(activeword);
});

dom.numButton.addEventListener(clickword, function () {
  dom.result.classList.add(activeword);
  switch (true) {
    case numberTries === 0: {
      dom.numButton.setAttribute('disabled', 'disabled');
      dom.numButton.style.opacity = "0.3";
      dom.result.innerHTML = 'Ты проиграл(а)!';
    }
      break;
    case (dom.numInput.value < 1): {
      numberTries--;
      dom.result.innerHTML = 'Число ' + dom.numInput.value + ' меньше 1!';
    }
      break;
    case (dom.numInput.value > 100): {
      numberTries--;
      dom.result.innerHTML = 'Число ' + dom.numInput.value + ' Больше 100!';
    }
      break;
    case (dom.numInput.value >= 1 && dom.numInput.value <= 100):
      dom.result.innerHTML = checkGuess(+dom.numInput.value, sekretNumber);
      break;
    default: dom.result.innerHTML = 'Что-то пошло не так...';
  }
});

dom.resetButton.addEventListener(clickword, function () {
  dom.game.classList.add(hiddenElement);
  dom.rulesBlock.classList.remove(hiddenElement);
  dom.numButton.removeAttribute('disabled', 'disabled');
  dom.numButton.style.opacity = "1";
  dom.result.innerHTML = '';
  numberTries = 5;
  secretNumber = getRandom(1, 100);
})