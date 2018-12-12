let playerScore= 0 ;
let computerScore = 0;
let drawScore = 0;
let playerChoice;
let computerSelection;

function playRound(){
    if (playerChoice == computerSelection) {
        drawScore++;
    } else if (playerChoice == 'rock'){
        if (computerSelection == 'paper'){
            computerScore ++;
        } else if (computerSelection =='scissors'){
            playerScore++;
        }
    } else if (playerChoice == 'paper'){
        if (computerSelection == 'scissor'){
            computerScore ++;
        } else if (computerSelection == 'rock'){
            playerScore++;
        }
    } else if (playerChoice == 'scissors'){
        if (computerSelection == 'rock'){
            computerScore++;
        } else if (computerSelection == 'paper'){
            playerScore++;
        }
    }
}
function computerPlay (){
      let choices = ['rock', 'paper', 'scissors'];
      computerSelection = choices[Math.floor(Math.random()* choices.length)];
  }

function getPlayerChoice(choice){
    playerChoice = choice;
}

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);

}
function resetScore(){
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
}
function scoreDisplay(){
    document.getElementById('playerChoice').textContent = 'Player chose: ' +capitalize(playerChoice);
    document.getElementById('computerSelection').textContent = 'Computer chose: ' +capitalize(computerSelection);
    document.getElementById('playerScore').textContent = 'Player score: ' +playerScore;
    document.getElementById('computerScore').textContent = 'Computer score: ' +computerScore;
    document.getElementById('drawScore').textContent = 'Draws so far: ' +drawScore;
}

function game(){
  computerPlay();
  playRound();
  scoreDisplay();
}
