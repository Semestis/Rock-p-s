

const rockButton = document.querySelector('#pick1');
const paperButton = document.querySelector('#pick2');
const scissorButton = document.querySelector('#pick3')
const outcomeDiv = document.querySelector('.outcome');


let compScore = 0;
let playerScore = 0;





  function playRound(PlayerSelection, ComputerChoice)  {

  if (ComputerChoice == PlayerSelection) {
    const p = document.createElement('p')
    p.innerHTML = "It's a tie!"
  } else if ((ComputerChoice == "Rock") && (PlayerSelection == "Paper")) {
    console.log(playerScore++);
    const p = document.createElement('p')
    p.innerText = "You won!";
  } else if ((ComputerChoice == "Rock") && (PlayerSelection == "Scissors")) {
    const p = document.createElement('p')
    p.innerText = "The Computer won!"
    compScore = ++compScore;
  } 
  if ((ComputerChoice == "Paper") && (PlayerSelection == "Rock")) {
    const p = document.createElement('p')
    p.innerHTML = "The Computer won!"
    compScore = ++compScore; 
  } else if ((ComputerChoice == "Paper") && (PlayerSelection == "Scissors")) {
    const p = document.createElement('p')
    p.innerText = "You won!";
    console.log(playerScore++);
  } 
  if ((ComputerChoice == "Scissors") && (PlayerSelection == "Rock")) {
    const p = document.createElement('p')
    p.innerText = "You won!";
    console.log(playerScore++);   
  } else if ((ComputerChoice == "Scissors") && (PlayerSelection == "Paper")) {
    const p = document.createElement('p')
    p.innerText = "The Computer won!"
    compScore = ++compScore;
 
  } 
 
  }


  rockButton.addEventListener('click', () => {

    const PlayerSelection = 'Rock';
    const ComputerChoice = getComputerChoice();
    playRound(PlayerSelection, ComputerChoice);
   
   console.log(PlayerSelection)
   console.log(getComputerChoice())
   
  
  
  })
  



 function getPlayerSelection (rock, paper, scissors) {

 } 




  
  
  function getComputerChoice () {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random()* arrOfChoices.length)
    return arrOfChoices[randomNum]
  }
 





const computer = getComputerChoice();

const winner = playRound();
  

  
  
  //console.log("You chose " + player + "!", "\nThe computer chose " + computer + "!\n\n" + winner);


  function getScore () {
  
    if (compScore == 3) {
      return "The computer have won!";
    } else if (playerScore == 3) {
      return "You won this time!";
    }
  }
  


