console.log("Hello Odin!");
console.log("Welcome to Rock Paper Scissors.");

let humanScore = 0;
let computerScore = 0;
let winner = "";

function proper(str) {
  let firstLetter = str.slice(0, 1);
  let restOfWord = str.slice(1);
  return firstLetter.toUpperCase() + restOfWord.toLowerCase();
}

function getComputerChoice() {
  let randChoice = Math.random();
  let makeChoice = "";
  if (randChoice <= 1 / 3) {
    makeChoice = "rock";
  } else if (randChoice <= 2 / 3) {
    makeChoice = "paper";
  } else {
    makeChoice = "scissors";
  }
  return proper(makeChoice);
}
// console.log(getComputerChoice());

function getHumanChoice() {
  humanChoice = prompt("Choose Rock, Paper, or Scissors: ");
  if (
    (humanChoice.toLowerCase() === "rock") |
    (humanChoice.toLowerCase() === "paper") |
    (humanChoice.toLowerCase() === "scissors")
  ) {
    return proper(humanChoice);
  } else {
    return "error";
  }
}
// console.log(getHumanChoice());

function playRound() {
  let computer = getComputerChoice();
  let human = getHumanChoice();
  if (human === "error") {
    console.log("That is not a valid input. Please refresh and try again.");
  } else if (human === computer) {
    console.log(`It's a tie! The computer also chose ${computer}.`);
  } else if (
    ((human === "Rock") & (computer === "Scissors")) |
    ((human === "Paper") & (computer === "Rock")) |
    ((human === "Scissors") & (computer === "Paper"))
  ) {
    console.log(`You win! ${human} beats ${computer}.`);
    humanScore++;
  } else {
    console.log(`You lose... ${computer} beats ${human}.`);
    computerScore++;
  }
}

for (i = 1; i <= 5; i++) {
    playRound();
}

if (humanScore === computerScore) {
    winner = "The game is a tie."
} else if (humanScore > computerScore) {
    winner = "You win the game!"
} else {
    winner = "The computer wins this time..."
}

console.log(`Final Score:
    Player ${humanScore},
    Computer ${computerScore}.
    ${winner}`);
