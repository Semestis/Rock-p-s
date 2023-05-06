








function playRound(playerSelection, computerSelection, getWinner) {

  



 function getPlayerSelection () {

  let playerString = prompt("Rock, paper or scissors?");
  const playerCase = playerString.toUpperCase();

  if (playerCase == "ROCK") {

    return "Rock";
  } if (playerCase == "PAPER") {
    return "Paper";
  } if (playerCase == "SCISSORS") {
    return "Scissors";
  } else if (playerCase != true) {
    getPlayerSelection();
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
 



  function getWinner() {

    if ((computer == "Rock") && (player == "Rock")) {
      return "It's a tie!";
    } else if ((computer == "Rock") && (player == "Paper")) {
      return "You won!";
    } else if ((computer == "Rock") && (player == "Scissors")) {
      return "The Computer won!";
    } 
    if ((computer == "Paper") && (player == "Rock")) {
      return "The Computer won!";    
    } else if ((computer == "Paper") && (player == "Paper")) {
      return "It's a tie!";
    } else if ((computer == "Paper") && (player == "Scissors")) {
      return "You won!";
    } 
    if ((computer == "Scissors") && (player == "Rock")) {
      return "You won!";     
    } else if ((computer == "Scissors") && (player == "Paper")) {
      return "The Computer won!";
    } else if ((computer == "Scissors") && (player == "Scissors")) {
      return "It's a tie!";
    } 
   
  }

  const computer = getComputerChoice();
  const player = getPlayerSelection();
  const winner = getWinner();
  

  
  
  console.log("You chose " + player + "!", "\nThe computer chose " + computer + "!\n\n" + winner);



}

function game () {

  let a = 0;
  let b = 0;
  let c = 0;
  const e = a + 1;
  const r = b + 1;

  playRound();



  if (`getWinner() == "You won!") {
    
    
    return "You have " + e +  " point(s)";

   } else if (`getWinner() === "The Computer won!") {
    return 100;
    return "Computer have " + r + " point(s)"
   } else if (`getWinner() === "It's a tie!"`) {
    return a, b;

   
   }



}
