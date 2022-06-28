let hand = ["Rock", "Paper", "Scissors"];
let playerHand = "Paper";

function computerPlay() {
  let randomIndex = Math.floor(Math.random() * 3);
  console.log("Computer: " + hand[randomIndex]);
  return hand[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    console.log("You Win!");
  } else if (
    (playerSelection == "Rock" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")
  ) {
    console.log("You Lose!");
  } else if (playerSelection == computerSelection) {
    console.log("You Tied!");
  } else {
    console.log("Error");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerHand, computerPlay());
  }
}
game();
