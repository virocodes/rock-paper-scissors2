function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "rock") {
            return "It's a tie!";
        }
        else if (computerSelection.toLowerCase() == "paper") {
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection.toLowerCase() == "paper") {
            return "It's a tie!";
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            return "You Lose! Scissors beats Papers";
        }
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection.toLowerCase() == "paper") {
            return "You Win! Scissors beats Paper";
        }
        else if (computerSelection.toLowerCase() == "scissors") {
            return "It's a tie!";
        }
    }
}

function game() {
    let compWins = 0;
    let playWins = 0;
    for (let i = 0; i < 5; i++) {
        let playSelect = prompt("Rock, Paper, or Scissors?");
        let play = playRound(playSelect, getComputerChoice());
        console.log(play);
        if (play[4] == 'L') {
            compWins++;
        }
        else if (play[4] == 'W') {
            playWins++;
        }
        console.log(`You have ${playWins} wins, the computer has ${compWins} wins`);
    }

    if (playWins > compWins) {
        console.log("You win!");
    }
    else if (compWins > playWins) {
        console.log("You lose!");
    }
    else {
        console.log("It's a tie!");
    }
}

game();