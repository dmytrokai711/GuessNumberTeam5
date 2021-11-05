let prevTry = dom.numInput.value;
let sekretNumber;

function getRandom(max) { return Math.floor(Math.random() * (max + 1)); }

function progressbar(){
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

function checkGuess(inputNumber) {
  // const userGuess = Number(guessField.value);
  
  // if (guessCount === 1) {
  //   guesses.textContent = 'Число из прошлой попытки =';
  // }
  // guesses.textContent += userGuess + ' ';

  switch(true){
    case inputNumber === randomNumber: 
      result.innerHTML = 'Поздравляем! Вы угадали!';
    break;
    case (inputNumber - randomNumber) > (prevTry - randomNumber): 
      result.innerHTML = 'Холоднее!!!!!!!';
    break;
    case (inputNumber - randomNumber) < (prevTry - randomNumber):result.innerHTML = 'Теплее!!!!!!!';
    break;

  }
  // guessCount++;
  // guessField.value = '';
  // guessField.focus();
}
  dom.startButton.addEventListener(clickword, function () {
    dom.rulesBlock.classList.add(hiddenElement);
    dom.game.classList.remove(hiddenElement);
    sekretNumber = getRandom(100);
});
  dom.numInput.addEventListener(clickword, function () {
    dom.condition.classList.add(activeword);
});

  dom.numButton.addEventListener(clickword, function () {
    dom.result.classList.add(activeword);
    if (dom.numInput.value < 1) {
      dom.result.innerHTML = 'Число ' + dom.numInput.value + ' меньше 1!';
    }
    else if (dom.numInput.value > 100) {
      dom.result.innerHTML = 'Число ' + dom.numInput.value + ' Больше 100!';
    }
    else if (dom.numInput.value >= 1 && dom.numInput.value <= 100) {
        checkGuess(dom.numInput.value);
    }
});


dom.resetButton.addEventListener(clickword, function () {
  dom.game.classList.add(hiddenElement);
  dom.rulesBlock.classList.remove(hiddenElement);
  dom.result.innerHTML = '';
    /*numberTries = 5;
    secretNumber = random(100);*/
})
  