let sekretNumber;
let numberTries = +dom.count.value;
let prevTry;
let min = +dom.min.value;
let max = +dom.max.value;

function changeTheme() {
    if (dom.theme.getAttribute("href") === "./src/css/genNum.css") {
        dom.theme.classList.add('light');
        dom.theme.classList.remove('dark');
        dom.theme.href = "./src/css/lightTeme.css";
        dom.lamp.src = "./img/lightLamp.png";
        dom.logo.src = "./img/randomizerLight.png";
        dom.imgSet.src="./img/klipartzLight.com.png";
    } else {
        dom.theme.classList.add('dark');
        dom.theme.classList.remove('light');
        dom.theme.href = "./src/css/genNum.css";
        dom.lamp.src = "./img/lamp.png";
        dom.logo.src = "./img/randomizer (2).png";
        dom.imgSet.src="./img/klipartz.com.png"
    }
}

function start() {
    dom.rulesBlock.classList.add(hiddenElement);
    dom.game.classList.remove(hiddenElement);
    dom.settingsButt.classList.remove(hiddenElement);
    min = +dom.min.value;
    max = +dom.max.value;
    dom.condition.innerHTML = `Введите число от ${min} до ${max}!`;
    dom.result.innerHTML = 'Ну давай вводи уже'
    sekretNumber = getRandom(min, max);
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
    dom.condition.innerHTML = `Введите число от ${min} до ${max}!`;
    dom.progress.style.width = '100%'
    dom.numButton.style.opacity = "1";
    dom.result.innerHTML = '';
    numberTries = dom.count.value;
    sekretNumber = getRandom(min, max);
    prevTry = 0;
    numbers.splice(0);
    
}
function newRules() {
    dom.game.classList.remove(hiddenElement);
    dom.settings.classList.add(hiddenElement);
    dom.settingsButt.classList.remove(hiddenElement);
    min = +dom.min.value;
    max = +dom.max.value;
    numberTries = +dom.count.value; 
    dom.result.innerHTML = 'Ну давай вводи уже';
    dom.condition.innerHTML = `Введите число от ${min} до ${max}!`
    dom.progress.style.width = '100%'
    dom.numInput.value = '';
    dom.numButton.removeAttribute('disabled', 'disabled');
    dom.numButton.style.opacity = "1";
    sekretNumber = getRandom(min, max);
}

function getRandom(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function startPlaying() {
    //dom.result.classList.add(activeword);
    switch (true) {
        case numberTries === 0: {
            dom.numButton.setAttribute('disabled', 'disabled');
            dom.numButton.style.opacity = "0.3";
            dom.result.innerHTML = `Ты проиграл(а)! Я загадал число ${sekretNumber}`;
        }
            break;
        case (+dom.numInput.value < min): {
            dom.result.innerHTML = 'Число ' + dom.numInput.value + ` меньше ${min}!`;
        }
            break;
        case (+dom.numInput.value > max): {
            dom.result.innerHTML = 'Число ' + dom.numInput.value + ` Больше ${max}!`;
        }
            break;
        case (+dom.numInput.value >= min && dom.numInput.value <= max):
            dom.result.innerHTML = checkGuess(+dom.numInput.value, sekretNumber);
            dom.progress.style.width = numberTries * (100 / dom.count.value) + '%';
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
        case +numberTries === +dom.count.value:
            prevTry = inputNumber;
            numberTries--;
            return 'Попробуй еще раз';
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