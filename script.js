


function getRandomInt() {
    return Math.floor(Math.random() * 3) + 1; //returns the random integer between 1 - 3
}

function getComputerChoice() {
    let randomInt = getRandomInt(); //implementing computer choice based on random integer generated...
    let computerChoice = "";

    if (randomInt == 1) {
        computerChoice = "rock";
    }
    else if (randomInt == 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissor";
    }
    console.log("Computer Choice: " + computerChoice.toUpperCase())

    return randomInt;

}

function getplayerChoice() {
    let userInput = 0
    let playerChoice = "";

    userInput = parseInt(prompt("Enter your choice: 1: rock 2: paper 3: scissor")) //implementing player choice based on user input...

    if (userInput == 1) {
        playerChoice = "ROCK";
    }
    else if (userInput == 2) {
        playerChoice = "PAPER";
    }
    else if (userInput == 3) {
        playerChoice = "SCISSOR";
    }
    else {
        playerChoice = "Invalid Input"
    }
    console.log("Player Choice: " + playerChoice)

    return userInput;
}



function playGame() {

    let computerScore = 0;
    let playerScore = 0;


    function playRound(playerChoice, computerChoice) {

    if (playerChoice == computerChoice) {
        console.log("It's a DRAW...!");
    }
    else if (playerChoice == 1 && computerChoice == 2) {
        console.log("You Loose! Paper Beats Rock...");
        computerScore++;
    }
    else if (playerChoice == 1 && computerChoice == 3) {
        console.log("You Win! Rock Beats Scissor...");
        playerScore++;
    }
    else if (playerChoice == 2 && computerChoice == 1) {
        console.log("You Win! Paper Beats Rock...");
        playerScore++;
    }
    else if (playerChoice == 2 && computerChoice == 3) {
        console.log("You Loose! Scissor Beats Paper...");
        computerScore++;
    }
    else if (playerChoice == 3 && computerChoice == 1) {
        console.log("You Loose! Rock Beats Scissor...");
        computerScore++;
    }
    else if (playerChoice == 3 && computerChoice == 2) {
        console.log("You Win! Scissor Beats Paper...");
        playerScore++;
    }

   

}

console.log("Round 1")
playRound(getplayerChoice(), getComputerChoice());
console.log("Round 2")
playRound(getplayerChoice(), getComputerChoice());
console.log("Round 3")
playRound(getplayerChoice(), getComputerChoice());
console.log("Round 4")
playRound(getplayerChoice(), getComputerChoice());
console.log("Round 5")
playRound(getplayerChoice(), getComputerChoice());

 console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("You Win This Round..");
    }
    else if (computerScore == playerScore) {
        console.log("It's a Draw..!")
    }
    else {
        console.log("You lost this round...");
    }
}

playGame();
