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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock"
    ) {
        return "Lost";
    } else {
        return "Won";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Play Rock, Paper or Scissors!");
        let computerSelection = getComputerChoice();
        let gameString = `${playerSelection} against ${computerSelection}.`;

        let result = playRound(playerSelection, computerSelection);


        if (result === "Tie") {
            alert(`${gameString} It's a tie!`);
        } else if (result === "Lost") {
            computerScore++;
            alert(`${gameString} You lost!`);
        } else {
            playerScore++;
            alert(`${gameString} You won!`);
        }
    }
    alert(`Scores: Player ${playerScore}, Computer ${computerScore}`);
}

game();