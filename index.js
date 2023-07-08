function getComputerChoice() {
  const myArray = ["rock", "paper", "scissors"];
  const randNumber = Math.floor(Math.random() * 3);
  const giveRandom = myArray[randNumber];
  return giveRandom;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It is a rock Tie! Do it again";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    return "You Lose! You picked rock while your opponent picked paper";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    return "You Win! You picked rock while your opponent picked scissors";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It is a paper Tie! Do it again";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    return "You Win! You picked paper while your opponent picked rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    return "You Lose! You picked paper while your opponent picked scissors";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It is a scissors Tie! Do it again";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    return "You Lose! You picked scissors while your opponent picked rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    return "You Win! You picked scissors while your opponent picked paper";
  }
}
const playerSelection = "rock";

// console.log(playRound(playerSelection, computerSelection));
let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Select your pick",
      "Rock, Paper or Scissors?"
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    return "Yay! You won this round.";
  } else if (playerScore < computerScore) {
    return "You Lost! Better luck next time.";
  } else {
    return "It is a tie! That was not a bad start.";
  }
}
console.log(game());
