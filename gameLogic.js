var textArray = ["Rock", "Paper", "Scissors"];
function computerPlay (){
  "use strict";
    var choice = Math.floor(Math.random()* textArray.length);
    return textArray[choice];
}

function playRound(a,b){
  "use strict";
  a.toLowerCase();
  a = a.charAt(0).toUpperCase()+a.slice(1);

  if((a =="Rock" && b == "Scissors") || (a =="Paper" && b =="Rock") ||
  (a == "Scissors" && b =="Paper")){
    return "You win!";
  } else if ((a == "Rock" && b =="Paper") || (a=="Paper" && b=="Scissors") ||
  (a =="Scissors" && b =="Rock")){

    return "You lose!";

  } else if (a == b){
    return "Draw!";
  } else {
    throw "Invalid option. Try again.";
  }
}

function game(){
  let playerScore=0;
  let computerScore= 0;
  for (let i=1; i<=5; i++){
   let playerSelection = prompt(("Round "+i+": Rock, Paper or Scissors?"));
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes("win")){
      playerScore++;
    } else if (roundResult.includes("lose")){
      computerScore++;
    }

  console.log()
  }

  message =(playerScore > computerScore)?"You win!": (playerScore < computerScore)?"You lose!":"Draw!";

  return endresult = "\nEnd result: \nYour score: " + playerScore +"\nComputer score: "+computerScore+"\n"+message;

}


console.log(game());
