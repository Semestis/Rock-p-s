

const rockButton = document.querySelector('#pick1');
const paperButton = document.querySelector('#pick2');
const scissorButton = document.querySelector('#pick3')
const outcomeDiv = document.querySelector('.outcome');


//let compScore = 0;
//let playerScore = 0;





  const playRound = (PlayerSelection, ComputerChoice) => {

  if (ComputerChoice === PlayerSelection) {
    const p = document.createElement('p')
    p.innerText = "It's a tie!"
    outcomeDiv.appendChild(p)
  } else if (ComputerChoice === 'Rock' && PlayerSelection === 'Paper') {
    const p = document.createElement('p')
    p.innerText = "You won!";
    outcomeDiv.appendChild(p)
  } else if (ComputerChoice ==='Rock' && PlayerSelection === 'Scissors') {
    const p = document.createElement('p')
    p.innerText = "The Computer won!"
    outcomeDiv.appendChild(p)
  } 
  if (ComputerChoice === 'Paper' && PlayerSelection === 'Rock') {
    const p = document.createElement('p')
    p.innerHTML = "The Computer won!"
    outcomeDiv.appendChild(p)
  } else if (ComputerChoice === "Paper" && PlayerSelection === "Scissors") {
    const p = document.createElement('p')
    p.innerText = "You won!";
    outcomeDiv.appendChild(p)
  } 
  if (ComputerChoice === "Scissors" && PlayerSelection === "Rock") {
    const p = document.createElement('p')
    p.innerText = "You won!";
    outcomeDiv.appendChild(p)  
  } else if (ComputerChoice === "Scissors" && PlayerSelection === "Paper") {
    const p = document.createElement('p')
    p.innerText = "The Computer won!"
    outcomeDiv.appendChild(p)
 
  } 
 
}


  rockButton.addEventListener('click', () => {

    const PlayerSelection = 'Rock';
    const ComputerChoice = getComputerChoice();
    playRound(PlayerSelection, ComputerChoice);

    console.log(PlayerSelection)
    console.log(ComputerChoice)
    
  
  })
  
  paperButton.addEventListener('click', () => {

    const PlayerSelection = 'Paper';
    const ComputerChoice = getComputerChoice();
    playRound(PlayerSelection, ComputerChoice);
    console.log(PlayerSelection)
    console.log(ComputerChoice)
    
  
  })
  
  scissorButton.addEventListener('click', () => {

    const PlayerSelection = 'Scissors';
    const ComputerChoice = getComputerChoice();
    playRound(PlayerSelection, ComputerChoice);
    console.log(PlayerSelection)
    console.log(ComputerChoice)
    
  
  })
  






  
  
  function getComputerChoice () {
    const arrOfChoices = ['Rock', 'Paper', 'Scissors']
    const randomNum = Math.floor(Math.random()* arrOfChoices.length)
    return arrOfChoices[randomNum]
  }
 





//const computer = getComputerChoice();

//const winner = playRound();
  

  
  
  //console.log("You chose " + player + "!", "\nThe computer chose " + computer + "!\n\n" + winner);


  function getScore () {
  
    if (compScore == 3) {
      return "The computer have won!";
    } else if (playerScore == 3) {
      return "You won this time!";
    }
  }
  


