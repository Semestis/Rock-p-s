


function playRound(playerSelection, computerSelection) {







  
  
 function getPlayerSelection () {

  let playerString = prompt("Rock, paper, scissors?");
  const playerCase = playerString.toUpperCase();

  if (playerCase == "ROCK") {

    return "Rock";
  } if (playerCase == "PAPER") {
    return "Paper";
  } if (playerCase == "SCISSORS") {
    return "Scissors";
  }

 } 


  
  
function getComputerChoice () {
  
  const computerString = ("hot");
  const computerSelection = Math.floor(Math.random() * computerString.length + 1);

  if (computerSelection == 1) {
    return "Rock";
  } if (computerSelection == 2) { 
    return "Paper";
  } if (computerSelection == 3) { 
    return "Scissors";
  }
}
 



const computer = getComputerChoice();
const player = getPlayerSelection();
  

  
  
console.log("You chose " + player + "!", "\nThe computer chose " + computer + "!");

}

  function game () {

  }