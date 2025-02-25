console.log("Hello Odin!");
console.log("Welcome to Rock Paper Scissors.");

let humanScore = 0;
let computerScore = 0;
let winner = "";

const resultsContainer = document.querySelector("#results");
const gameOutcome = document.createElement("h3");
const gameScore = document.createElement("h3");

// function proper(str) {
//   let firstLetter = str.slice(0, 1);
//   let restOfWord = str.slice(1);
//   return firstLetter.toUpperCase() + restOfWord.toLowerCase();
// }
//
// function getHumanChoice() {
//   humanChoice = prompt("Choose Rock, Paper, or Scissors: ");
//   if (
//     (humanChoice.toLowerCase() === "rock") |
//     (humanChoice.toLowerCase() === "paper") |
//     (humanChoice.toLowerCase() === "scissors")
//   ) {
//     return proper(humanChoice);
//   } else {
//     return "error";
//   }
// }
// console.log(getHumanChoice());

function getComputerChoice() {
  let randChoice = Math.random();
  let makeChoice = "";
  if (randChoice <= 1 / 3) {
    makeChoice = "Rock";
  } else if (randChoice <= 2 / 3) {
    makeChoice = "Paper";
  } else {
    makeChoice = "Scissors";
  }
  return makeChoice;
}
// console.log(getComputerChoice());

function playRound(human) {
  let computer = getComputerChoice();
  // let human = getHumanChoice();
  if (human === computer) {
    // console.log(`It's a tie! The computer also chose ${computer}.`);
    gameOutcome.textContent = `It's a tie! The computer also chose ${computer}.`;
  } else if (
    ((human === "Rock") & (computer === "Scissors")) |
    ((human === "Paper") & (computer === "Rock")) |
    ((human === "Scissors") & (computer === "Paper"))
  ) {
    // console.log(`You win! ${human} beats ${computer}.`);
    humanScore++;
    gameOutcome.textContent = `You win! ${human} beats ${computer}.`;
  } else {
    // console.log(`You lose... ${computer} beats ${human}.`);
    computerScore++;
    gameOutcome.textContent = `You lose... ${computer} beats ${human}.`;
  }

  gameScore.textContent = `Current Score:
    Player ${humanScore},
    Computer ${computerScore}.
    ${winner}`;
  resultsContainer.appendChild(gameOutcome);
  resultsContainer.appendChild(gameScore);
}

const playerRock = document.querySelector("#rock");
playerRock.addEventListener("click", () => {
  playRound("Rock");
});
const playerPaper = document.querySelector("#paper");
playerPaper.addEventListener("click", () => {
  playRound("Paper");
});
const playerScissors = document.querySelector("#scissors");
playerScissors.addEventListener("click", () => {
  playRound("Scissors");
});

// if (humanScore === computerScore) {
//   winner = "The game is a tie.";
// } else if (humanScore > computerScore) {
//   winner = "You win the game!";
// } else {
//   winner = "The computer wins this time...";
// }

// console.log(`Final Score:
//     Player ${humanScore},
//     Computer ${computerScore}.
//     ${winner}`);
