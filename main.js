const hand = ["Rock", "Paper", "Scissors"];
const result = document.querySelector(".result");
let playerWins = 0;
let computerWins = 0;
const score = document.querySelector(".score");
const computerChoice = document.querySelector(".computerChoice");

function computerPlay() {
  let randomIndex = Math.floor(Math.random() * 3);
  console.log("Computer: " + hand[randomIndex]);
  computerChoice.textContent = "Computer Selects: " + hand[randomIndex];
  return hand[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    console.log("You Win!");
    result.textContent = "You Win!";
    playerWins++;
    console.log("Player wins: " + playerWins);
  } else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    console.log("You Lose!");
    result.textContent = "You Lose!";
    computerWins++;
    console.log("Computer wins: " + computerWins);
  } else if (playerSelection == computerSelection) {
    console.log("You Tied!");
    result.textContent = "You Tied!";
  } else {
    console.log("Error");
    result.textContent = "Error!";
  }
  if (playerWins == 5) {
    result.textContent = "GAME OVER. PLAYER HAS WON";
    playerWins = 0;
    computerWins = 0;
  } else if (computerWins == 5) {
    result.textContent = "GAME OVER. COMPUTER HAS WON";
    playerWins = 0;
    computerWins = 0;
  }
  score.textContent = `Player Score:${playerWins} Computer Score:${computerWins} `;
}

//Rock button chosen
let computerRock = document.querySelector(".rockBtn");
computerRock.addEventListener("click", () => {
  playRound("Rock", computerPlay());
});

//Paper button chosen
let computerPaper = document.querySelector(".paperBtn");
computerPaper.addEventListener("click", () => {
  playRound("Paper", computerPlay());
});

//Scissors button chosen
let computerScissors = document.querySelector(".scissorsBtn");
computerScissors.addEventListener("click", () => {
  playRound("Scissors", computerPlay());
});
