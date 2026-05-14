console.log("Hello world!")


function getComputerChoice () {
    const numero = Math.random();

    switch (true) {
        case numero < 1 / 3:
            return 'Rock';
        case numero < 2 / 3:
            return 'Paper';
        default:
            return 'Scissors';
    
            
    }

}

console.log(getComputerChoice());

