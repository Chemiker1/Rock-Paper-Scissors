function getComputerChoice() {
    // Returns randomly "Rock", "Paper" or "Scissors"

    let randomInt = Math.floor(Math.random() * 3); // 0, 1 or 2

    switch (randomInt) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let gameString = `${playerSelection} against ${computerSelection}.`;

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return gameString + " It's a tie!";
    } else if (
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock"
    ) {
        return gameString + " You lost!";
    } else {
        return gameString + " You won!";
    }
}