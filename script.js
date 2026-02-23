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

  // Get all buttons
  const buttons = document.querySelectorAll('button');

  // Get results div
  const results = document.querySelector('#results');

  // Score Elements
  const scoreHuman = document.querySelector('#human');
  const scoreComputer = document.querySelector('#computer');

  // Display initial score = 0 - 0
  showScore(humanScore, computerScore);

  // Attach an event listener to each of the button
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const humanChoice = btn.dataset.selection;
      playRound(humanChoice, getComputerChoice());
    });
  });

  function showScore(humanScore, computerScore) {
    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;
  }

  function showResult(string) {
    const resultsPara = document.createElement('p');
    resultsPara.textContent = string;
    results.appendChild(resultsPara);
  }

  function playRound(humanChoice, computerChoice) {
    // Formats the human choice to lower case
    const humanChoiceLower = humanChoice.toLowerCase().trim();

    // rock > scissors, scissors > paper, paper > rock
    // Logic for checking which object defeats which
    // Increments the score based on who won
    if (humanChoiceLower === computerChoice) {
      showResult('DRAW! Try again.');
    } else if (humanChoiceLower === 'rock' && computerChoice === 'scissors') {
      humanScore++;
      showResult('You win! Rock beats Scissors!');
    } else if (computerChoice === 'rock' && humanChoiceLower === 'scissors') {
      computerScore++;
      showResult('You lose! Rock beats Scissors!');
    } else if (humanChoiceLower === 'scissors' && computerChoice === 'paper') {
      humanScore++;
      showResult('You win! Scissors beats Paper!');
    } else if (computerChoice === 'scissors' && humanChoiceLower === 'paper') {
      computerScore++;
      showResult('You lose! Scissors beats Paper!');
    } else if (humanChoiceLower === 'paper' && computerChoice === 'rock') {
      humanScore++;
      showResult('You win! Paper beats Rock!');
    } else if (computerChoice === 'paper' && humanChoiceLower === 'rock') {
      computerScore++;
      showResult('You lose! Paper beats Rock!');
    }

    // Log the score
    showScore(humanScore, computerScore);
  }
}

// Starts the game
playGame();
