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