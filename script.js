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

const buttons = document.querySelectorAll('main > button');
const resultdiv = document.querySelector('.results');
let results = document.createElement('h2');
let log = document.createElement('h2');
let final = document.createElement('h2');
resultdiv.appendChild(results);
resultdiv.appendChild(log);
resultdiv.appendChild(final);

let compWins = 0;
let playWins = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let restext = playRound(button.className, getComputerChoice());
        results.textContent = restext;
        if (restext[4] == 'L') {
            compWins++;
        }
        else if (restext[4] == 'W') {
            playWins++;
        }
        log.textContent = `You have ${playWins} wins, the computer has ${compWins} wins`;
        if (compWins >= 5) {
            final.textContent = "You Lose!";
        }
        else if (playWins >= 5) {
            final.textContent = "You Win!";
        }
    });
});

    
