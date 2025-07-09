let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')



let prevGuess = [];
let numGuess = 1;
let playGame = true;


if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}



function validateGuess(guess) {
    //check value are b/w 1 to 100 or not or value prtesent or not
    if (isNaN(guess)) {
        alert("Please enter a valid number...")
    }else if (guess<1) {
        alert("Please enter a number more then 1")
    }else if (guess>100) {
        alert("Please enter a number less then 100")
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
 


function checkGuess(guess) {
    // check wether value are equal to random or not...
    if (guess === randomNumber) {
        displayMessage(`Congratulation, you gussed it right.`)
        endGame()
    }else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low.`)
    }else if (guess > randomNumber) {
        displayMessage(`Number is TOOO high.`)
    }
}


function displayGuess(guess) {
    // clean value and update the gusses and update array
    userInput.value = "";
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}


function displayMessage(message) {
    // pass message and print
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}





function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')  
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game...</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}



function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        newGame = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true;
    })
}



