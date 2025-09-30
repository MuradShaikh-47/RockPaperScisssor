


function getRandomInt() {
    return Math.floor(Math.random() * 3); //returns the random integer between 0 - 2
}

function getComputerChoice() {
    const computerChoice = ["ROCK", "PAPER", "SCISSORS"] // returns a computer choice based on the random integer returned by the getRandomInt()
    const randomIndex = getRandomInt();
    return computerChoice[randomIndex];
}

//selcting the buttons using query selectors..

const btnRock = document.querySelector('#rock')
const btnPaper = document.querySelector('#paper')
const btnScissors = document.querySelector('#scissors')
const btnRestart = document.querySelector('#btnRestart')
btnRestart.disabled = true;



//selecting choice div and creating some html elements to show choice of player and computer

const choiceDiv = document.querySelector('.choice');
const results = document.querySelector('#result');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

const plrChoice = document.createElement('h2');
const comChoice = document.createElement('h2');
choiceDiv.appendChild(plrChoice);
choiceDiv.appendChild(comChoice);

//variables to keep track of score

let plrScore = 0;
let comScore = 0;

//main function which decides the winner and looser of the game or round..by comparing choice entered by user and computer

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    plrChoice.textContent = "Player Choice: " + playerChoice;
    comChoice.textContent = "Computer Choice: " + computerChoice;

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a DRAW..!"
    }
    else if (
        (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")

    ) {
        result = `You Win! ${playerChoice} Beats ${computerChoice}`;
        plrScore++;
    }
    else {
        result = `You Loose! ${computerChoice} Beats ${playerChoice}`;
        comScore++;
    }

    return updateScore(result);

}

// function to show the actual output on the screen of score and the result 

function updateScore(result) {
    playerScore.textContent = "Player Score: " + plrScore;
    computerScore.textContent = "Computer Score: " + comScore;
    results.textContent = "Result: " + result;

    if (plrScore === 5 || comScore === 5) {
        if (plrScore > comScore) {
            results.textContent = "Congratulations! You Win the game...";
            results.style.color = "#34ac38ff";
            disableButtons();

        }
        else {
            results.textContent = "You Loose! Better luck next time...";
            results.style.color = "#d41a1aff"
            disableButtons();
        }
    }
}

//function which disables the buttons after game is over..

function disableButtons() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    btnRestart.disabled = false;
    //  btnRestart.style.backgroundColor = "#4CAF50";
}

// function which restarts a new game from start..

function restartGame() {
    plrScore = 0;
    comScore = 0;
    plrChoice.textContent = "Player Choice: ";
    comChoice.textContent = "Computer Choice: ";
    playerScore.textContent = "Player Score: 0";
    computerScore.textContent = "Computer Score: 0";
    results.textContent = "";
    results.style.color = "#333";

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    btnRestart.disabled = true;
    // btnRestart.style.backgroundColor = "#a6a4a4";

}

// event listners which actually triggers the play round function on click 

btnRock.addEventListener('click', () => playRound("ROCK"));
btnPaper.addEventListener('click', () => playRound("PAPER"));
btnScissors.addEventListener('click', () => playRound("SCISSORS"));
btnRestart.addEventListener('click', () => restartGame());