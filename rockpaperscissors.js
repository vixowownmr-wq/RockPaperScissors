function getComputerChoice () {
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
const computerChoice = getComputerChoice();




let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    if(humanChoice === computerChoice) {
        return "¡¡¡It's a draw!!!"}
        if(
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Scissors" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Rock")
        ) {
            humanScore++;
            return "You win :)"
        }
    else {
        computerScore++;
        return "You lose :("
    }      
}



function playGame(i) {
    function getHumanChoice() {
        const yourChoice = prompt("Choose yout option, Rock, Paper or Scissors: ");
        return yourChoice;
    }
    
    
    for(let i=0;i<5;i++) {
        const human = getHumanChoice();
        const computer = getComputerChoice();
        const result = playRound(human, computer);
        console.log(result);
        console.log("TU: " + humanScore + " Computadora: " + computerScore);
    }
  
}

console.log(playGame(5));













