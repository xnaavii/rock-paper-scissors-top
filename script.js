function getComputerChoice() {
  // Randomly returns "rock", "paper" or "scissors"

  // Get random number 1 - 3
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  // Return a choice depending on the number
  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else if (randomNumber === 3) {
    return 'scissors';
  }
}

function getHumanChoice() {
  // Prompts user for the choice and returns it
  let humanChoice = prompt("Choose: 'rock', 'paper' or 'scissors'");
  return humanChoice;
}
