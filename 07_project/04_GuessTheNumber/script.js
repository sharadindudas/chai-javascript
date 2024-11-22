const submit = document.querySelector(".guessSubmit");
const userInput = document.querySelector(".guessField");
const LoworHigh = document.querySelector(".lowOrHi");
const guesses = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const div = document.createElement("div");
const result = document.querySelector(".resultParas");

let randomNumber = parseInt(Math.random() * 100 + 1);
let prevGuess = []; // Keeps all the No. guessed in this Array
let playGame = true; // Keeps the game running
let numGuess = 1; // No of guessed made
console.log(randomNumber);

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    }
    else if (guess < 1) {
        alert("Please enter a number greater than 1");
    }
    else if (guess > 100) {
        alert("Please enter a number less than 100");
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess();
            displayMessage(`Game is over and Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess();
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right in ${numGuess} attempts`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`The number is low`);
    }
    else if (guess > randomNumber) {
        displayMessage(`The number is high`);
    }
}

function displayGuess() {
    userInput.value = "";
    guesses.innerHTML = `${prevGuess.join(", ")}`;
    numGuess++;
    remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    LoworHigh.innerHTML = `${message}`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    submit.setAttribute("disabled", "");
    div.innerHTML = `<button id="newGame" class="button" style="cursor: pointer;">Start Over</button>`
    result.appendChild(div);
    playGame = false;
    startOver();
}

function startOver() {
    const newGamebtn = document.querySelector("#newGame");
    newGamebtn.addEventListener("click", () => {
        prevGuess = [];
        playGame = true;
        numGuess = 1;
        randomNumber = parseInt(Math.random() * 100 + 1);
        userInput.removeAttribute("disabled");
        submit.removeAttribute("disabled");
        result.removeChild(div);
        guesses.innerHTML = "";
        remainingGuess.innerHTML = `${11 - numGuess}`;
        displayMessage("");
    })
}