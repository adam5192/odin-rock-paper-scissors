function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        switch(computerSelection) {
            case "rock":
                return "tie game!";
                break;
            case "paper":
                return "You lose! Paper beats rock :(";
                break;
            case "scissors":
                return "You win! Rock beats scissors :)";
                break;
        }
    } else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                return "You win! Paper beats rock :)";
                break;
            case "paper":
                return "tie game!";
                break;
            case "scissors":
                return "You lose! Scissors beats paper :(";
                break;
        }
    } else if (playerSelection == "scissors") {
        switch(computerSelection) {
            case "rock":
                return "You lose! Rock beats scissors :(";
                break;
            case "paper":
                return "You win! Scissors beats paper :)";
                break;
            case "scissors":
                return "tie game!";
                break;
        }
    }
} 

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++){
        let playerSelection = promptChoice();
        let message = playRound(playerSelection, getComputerChoice());

        if(message.charAt(0) === 't'){
            userScore++;
            computerScore++;
        } else if(message.charAt(4) === 'w') {
            userScore++;
        } else computerScore++; 

        console.log(message + `Your Score: ${userScore} Computer Score: ${computerScore}`);
    }

    if(userScore > computerScore) console.log("You won the game!");
    else if(userScore == computerScore) console("It's a tie!");
    else console.log("You lost :(");
}

function promptChoice() {
    let playerSelection = "";
    //loop until input is valid
    while (playerSelection === "" || (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")) {
        playerSelection = prompt("Enter your choice: 'rock', 'paper' or 'scissors'");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            alert("Invalid input! Please choose 'rock', 'paper' or 'scissors'")
        }
    }
    return playerSelection;
}