describe('Test our game', () => {
    describe('Try to win', () => {
    const gesNumber = 30
    it('should return "Попробуй еще раз"', () => {
        expect(checkGuess(20,gesNumber)).to.equal('Попробуй еще раз');
    });
    it('should return "Теплее!!!!!!!"', () => {
        expect(checkGuess(25,gesNumber)).to.equal('Теплее!!!!!!!');
        expect(checkGuess(28,gesNumber)).to.equal('Теплее!!!!!!!');
    });
    it('should return "Уже было!!!!"', () => {
        expect(checkGuess(28,gesNumber)).to.equal('Уже было!!!!');
        expect(checkGuess(28,gesNumber)).to.equal('Уже было!!!!');
    });
    it('should return "Холоднее!!!!!!!"', () => {
        expect(checkGuess(50,gesNumber)).to.equal('Холоднее!!!!!!!');
        expect(checkGuess(70,gesNumber)).to.equal('Холоднее!!!!!!!');
        expect(checkGuess(90,gesNumber)).to.equal('Холоднее!!!!!!!');
    });
    it('should return "Поздравляем! Вы угадали!"', () => {
        expect(checkGuess(30,gesNumber)).to.equal('Поздравляем! Вы угадали!');
    });
})
    describe('Try tets startPlaying', () => {
        let value
        it('Should return "Больше 100!"', () => {
            value = 200
            dom.numInput.value = value
            startPlaying();
            expect(dom.result.innerHTML).to.equal(`Число ${value} Больше 100!`);
            
        });
        it('Should return "меньше 1!"', () => {
            value = 0
            dom.numInput.value = value
            startPlaying();
            expect(dom.result.innerHTML).to.equal(`Число ${value} меньше 1!`);
        });
        it('Shoul return lose', () => {
            value = 30
            dom.numInput.value = value
            sekretNumber = 2
            numberTries = 0;
            startPlaying();
            expect(dom.result.innerHTML).to.equal(`Ты проиграл(а)! Я загадал число ${sekretNumber}`);
            dom.numInput.value = ''
        });
           })

 describe('Try to hide and show rules', () => {
    it('Should true', () => {
        start();
        expect(dom.rulesBlock.classList.contains(hiddenElement)).to.equal(true);
        expect(dom.game.classList.contains(hiddenElement)).to.equal(false);
    });
    it('Should hide', () => {
        reset();
        expect(dom.game.classList.contains(hiddenElement)).to.equal(true);
        expect(dom.rulesBlock.classList.contains(hiddenElement)).to.equal(false);
    });
    })
    describe('Try to play again', () => {
        it('Should clear', () => {
            reset();
            expect(dom.result.innerHTML).to.equal('');
            expect(dom.numButton.style.opacity).to.equal('1');
            expect(dom.progress.style.width).to.equal('100%');
            expect(dom.numButton.hasAttribute('disabled')).to.equal(false);
        });
        })
     describe('Try light mode', () => {
        it('Should change mode', () => {
            changeTheme();
            expect(dom.theme.classList.contains('light')).to.equal(true);
        });
        it('Should change mode', () => {
            changeTheme();
            expect(dom.theme.classList.contains('dark')).to.equal(true);
        });
        })
})
