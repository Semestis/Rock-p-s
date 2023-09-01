

const rockButton = document.querySelector('#pick1');
const paperButton = document.querySelector('#pick2');
const scissorButton = document.querySelector('#pick3')
const outcomeDiv = document.querySelector('.outcome');
const roundEnd = document.querySelector('#Computer')
const playerScoreSpan = document.querySelector('.player-Score')
const computerScoreSpan = document.querySelector('.computer-Score')


let compScore = 0;
let playerScore = 0;





  const playRound = (PlayerSelection, ComputerChoice) => {

  if (ComputerChoice === PlayerSelection) {
    const p = document.createElement('p')
    p.innerText = "It's a tie!"
    outcomeDiv.appendChild(p)
  } else if (ComputerChoice === 'Rock' && PlayerSelection === 'Paper') {
    const p = document.createElement('p')
    p.innerText = "You won!";
    outcomeDiv.appendChild(p)
    playerScore++
  } else if (ComputerChoice ==='Rock' && PlayerSelection === 'Scissors') {
    const p = document.createElement('p')
    p.innerText = "The Computer won!"
    outcomeDiv.appendChild(p)
    compScore++
  } 
  if (ComputerChoice === 'Paper' && PlayerSelection === 'Rock') {
    const p = document.createElement('p')
    p.innerHTML = "The Computer won!"
    outcomeDiv.appendChild(p)
    compScore++
  } else if (ComputerChoice === "Paper" && PlayerSelection === "Scissors") {
    const p = document.createElement('p')
    p.innerText = "You won!";
    outcomeDiv.appendChild(p)
    playerScore++
  } 
  if (ComputerChoice === "Scissors" && PlayerSelection === "Rock") {
    const p = document.createElement('p')
    p.innerText = "You won!";
    outcomeDiv.appendChild(p)
    playerScore++  
  } else if (ComputerChoice === "Scissors" && PlayerSelection === "Paper") {
    const p = document.createElement('p')
    p.innerText = "The Computer won!"
    outcomeDiv.appendChild(p)
    compScore++
 
  } 
 
}

 const updateScore = (playerScore, compScore) => {
  playerScoreSpan.innerText = `Player Score : ${playerScore}\n` 
  computerScoreSpan.innerText = `\nComputer Score:${compScore}`



 }

  rockButton.addEventListener('click', () => {

    const PlayerSelection = 'Rock';
    const ComputerChoice = getComputerChoice();
    playRound(PlayerSelection, ComputerChoice);
    updateScore(playerScore, compScore)
    getScore(compScore, playerScore)


    
  
  })
  
  paperButton.addEventListener('click', () => {

    const PlayerSelection = 'Paper';
    const ComputerChoice = getComputerChoice();
    playRound(PlayerSelection, ComputerChoice);
    updateScore(playerScore, compScore)
    getScore(compScore, playerScore)
    
  
  })
  
  scissorButton.addEventListener('click', () => {

    const PlayerSelection = 'Scissors';
    const ComputerChoice = getComputerChoice();
    playRound(PlayerSelection, ComputerChoice);
    updateScore(playerScore, compScore)
    getScore(compScore, playerScore)
  
  })
  






  
  
  function getComputerChoice () {
    const arrOfChoices = ['Rock', 'Paper', 'Scissors']
    const randomNum = Math.floor(Math.random()* arrOfChoices.length)
    return arrOfChoices[randomNum]
  }
 





//const computer = getComputerChoice();

//const winner = playRound();
  

  
  
  //console.log("You chose " + player + "!", "\nThe computer chose " + computer + "!\n\n" + winner);


  const getScore = (compScore, playerScore) => {
  
    if (compScore === 5) {
      const h2 = document.createElement('h2')
      h2.classList.add('.head2')
      roundEnd.appendChild(h2)
      h2.innerText = `Comp wins by ${compScore} to ${playerScore}!`
      
    } else if (playerScore === 5) {
      const h3 = document.createElement('h3')
      h3.classList.add('.head3')
      roundEnd.appendChild(h3)
      h3.innerText = (`You won by ${playerScore} to ${compScore}`)
    }
  }
  


