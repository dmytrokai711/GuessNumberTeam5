let sekretNumber;
let numberTries = dom.count.value;
let prevTry;

function start() {
    document.querySelector('#gamearea').addEventListener('submit', (event) => {
        startPlaying();
        event.preventDefault();
    });
    dom.rulesBlock.classList.add(hiddenElement);
    dom.game.classList.remove(hiddenElement);
    dom.settingsButt.classList.remove(hiddenElement);
    sekretNumber = getRandom(dom.min.value, dom.max.value);
}

function settingGame() {
    dom.game.classList.add(hiddenElement);
    dom.settings.classList.remove(hiddenElement);
    dom.settingsButt.classList.add(hiddenElement);
}

function reset() {
    dom.game.classList.add(hiddenElement);
    dom.rulesBlock.classList.remove(hiddenElement);
    dom.settings.classList.add(hiddenElement);
    dom.settingsButt.classList.add(hiddenElement);
    dom.numButton.removeAttribute('disabled', 'disabled');
    dom.progress.style.width = '100%'
    dom.numButton.style.opacity = "1";
    dom.result.innerHTML = '';
    numberTries = dom.count.value;
    sekretNumber = getRandom(dom.min.value, dom.max.value);
    prevTry = 0;
    numbers.splice(0);
}

function getRandom(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function startPlaying() {
    dom.result.classList.add(activeword);
    switch (true) {
        case numberTries === 0: {
            dom.numButton.setAttribute('disabled', 'disabled');
            dom.numButton.style.opacity = "0.3";
            dom.result.innerHTML = `Ты проиграл(а)! Я загадал число ${sekretNumber}`;
        }
            break;
        case (dom.numInput.value < dom.min.value): {
            dom.result.innerHTML = 'Число ' + dom.numInput.value + ' меньше ' + dom.min.value;
        }
            break;
        case (dom.numInput.value > dom.max.value): {
            dom.result.innerHTML = 'Число ' + dom.numInput.value + ' Больше ' + dom.max.value;
        }
            break;
        case (dom.numInput.value >= 1 && dom.numInput.value <= 100):
            dom.result.innerHTML = checkGuess(+dom.numInput.value, sekretNumber);
            dom.progress.style.width = numberTries * 20 + '%';
            break;
        default: dom.result.innerHTML = 'Что-то пошло не так...';
    }
}

function checkGuess(inputNumber, randomNumber) {
    for (let value of numbers)
        if (value === inputNumber) {
            numberTries--;
            numbers.push(Number(dom.numInput.value));
            return 'Уже было!!!!'
        }
    switch (true) {
        case inputNumber === randomNumber: {
            dom.numButton.setAttribute('disabled', 'disabled');
            dom.numButton.style.opacity = "0.3";
            return 'Поздравляем! Вы угадали!';
        }
        case numberTries === 5:
            prevTry = inputNumber;
            numberTries--;
            return 'Не угадал!';
        case Math.abs(inputNumber - randomNumber) > Math.abs(prevTry - randomNumber): {
            prevTry = inputNumber;
            numberTries--;
            numbers.push(Number(dom.numInput.value));
            return 'Холоднее!!!!!!!';
        }
        case Math.abs(inputNumber - randomNumber) < Math.abs(prevTry - randomNumber): {
            prevTry = inputNumber;
            numberTries--;
            numbers.push(Number(dom.numInput.value));
            return 'Теплее!!!!!!!';
        }
        case prevTry === inputNumber: {
            numberTries--;
            numbers.push(Number(dom.numInput.value));
            return 'Уже было!!!!';
        }
        default: return 'Что-то пошло не так...'

    }
}