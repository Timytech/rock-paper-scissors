const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const finalScore = document.querySelector("#finalScore")
const info = document.querySelector("#tips");

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {

  gameCount +=1;
  player = button.textContent;
  computerChoice();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = playRound();
  finalScore.textContent = gameOver();

}));

function computerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch(randNum) {
    case 1: computer = "ROCK";
    break;

    case 2: computer = "PAPER";
    break;

    case 3: computer = "SCISSORS"
    break;
  }
}

function playRound() {
  if(player == computer){
    gameCount -=1;
    return "Draw! It's a tie"
  }
  else if(computer == "ROCK" && player == "PAPER"){
    playerScore +=1
    return `You Win! ${player} beats ${computer}` 
  }

  else if(computer == "PAPER" && player == "SCISSORS"){
    playerScore +=1
    return `You Win! ${player} beats ${computer}` 
  }

  else if(computer == "SCISSORS" && player == "ROCK"){
    playerScore +=1
    return `You Win! ${player} beats ${computer}`
  }
  
  else {
    computerScore +=1
    return `You Lose! ${computer} beats ${player}`
  }
}

function gameOver() {
  if(gameCount === 5) {
    disableButtons()
    info.textContent = "Game Over! Reload the page to play again."
    if(playerScore > computerScore){
      return `You won the game! You scored ${playerScore}/5 Cheers!` 
    } else{
      return `Alas! I beat you now! You scored only ${playerScore}/5`
    }
  }
}

function disableButtons() {
  choiceBtns.forEach(elem => {
      elem.disabled = true
  })
}