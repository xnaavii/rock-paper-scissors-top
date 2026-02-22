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

function playGame() {
  // Track game score
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // Formats the human choice to lower case
    const humanChoiceLower = humanChoice.toLowerCase().trim();

    // rock > scissors, scissors > paper, paper > rock
    // Logic for checking which object defeats which
    // Increments the score based on who won
    if (humanChoiceLower === computerChoice) {
      console.log('DRAW! Try again.');
    } else if (humanChoiceLower === 'rock' && computerChoice === 'scissors') {
      humanScore++;
      console.log('You win! Rock beats Scissors!');
    } else if (computerChoice === 'rock' && humanChoiceLower === 'scissors') {
      computerScore++;
      console.log('You lose! Rock beats Scissors!');
    } else if (humanChoiceLower === 'scissors' && computerChoice === 'paper') {
      humanScore++;
      console.log('You win! Scissors beats Paper!');
    } else if (computerChoice === 'scissors' && humanChoiceLower === 'paper') {
      computerScore++;
      console.log('You lose! Scissors beats Paper!');
    } else if (humanChoiceLower === 'paper' && computerChoice === 'rock') {
      humanScore++;
      console.log('You win! Paper beats Rock!');
    } else if (computerChoice === 'paper' && humanChoiceLower === 'rock') {
      computerScore++;
      console.log('You lose! Paper beats Rock!');
    }

    // Log the score
    console.log(`SCORE: Human: ${humanScore}, Computer: ${computerScore}`);
  }
}

// Starts the game
playGame();
