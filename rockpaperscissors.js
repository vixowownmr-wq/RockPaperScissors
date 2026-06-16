const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const resultsDiv = document.querySelector("#results");

let humanScore = 0;
let computerScore = 0;

rockButton.addEventListener("click", () => {
    const result = playRound("Rock");
    resultsDiv.innerHTML = 
    result
     + "<br>Human: " + humanScore 
     + "<br>Computer: " + computerScore;
    console.log(result);
});

paperButton.addEventListener("click", () => {
    const result = playRound("Paper");
    resultsDiv.innerHTML = 
    result
     + "<br>Human: " + humanScore 
     + "<br>Computer: " + computerScore;
    console.log(result);
});

scissorsButton.addEventListener("click", () => {
    const result = playRound("Scissors");
    resultsDiv.innerHTML = 
    result
     + "<br>Human: " + humanScore 
     + "<br>Computer: " + computerScore;
    console.log(result);
});

function playRound(humanChoice) {

    if(humanScore === 5 || computerScore === 5) {
        return "The game is already over"
    }
    
    const computerChoice = getComputerChoice();
    console.log(getComputerChoice);

    console.log("Human:", humanChoice);
    console.log("Computer:", computerChoice);

    if(humanChoice === computerChoice) {
        return "¡¡¡It's a draw!!!";
    }
    
    if(
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        humanScore++;

        if(humanScore === 5) {
            return "Human wins the game!!!";
        }

        return "You win :)";
    } else {
        computerScore++;

        if(computerScore === 5) {
            return "Computer wins the game!!!";
        }

        return "You lose :(";
    }
}

function getComputerChoice() {
    const numero = Math.random();

    switch (true) {
        case numero < 1 / 3:
            return "Rock";
        case numero < 2 / 3:
            return "Paper";
        default:
            return "Scissors";
    }
}

