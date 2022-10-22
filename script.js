let gameSelector = ["rock", "paper", "scissors"];

const computerPlay = () => {
  let gameSelector_index = Math.floor(Math.random() * gameSelector.length) + 1;
  return gameSelector[gameSelector_index];
};

function oneRound(playerSelection, computerSelection) {
  return playerSelection === computerSelection
    ? "Yes you made it"
    : playerSelection === "rock" && computerSelection === "scissors"
    ? "Good job! Scissors are beaten by rock"
    : playerSelection === "paper" && computerSelection === "rock"
    ? "Good job.. Rock is beaten by Paper"
    : playerSelection === "scissors" && computerSelection === "paper"
    ? "Well done Paper is beaten by scissors"
    : "Sorry, you lose";
}

function roundOfGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let count = 0; count < 5; count++) {
    let playerSelection = prompt(
      "pick a tool between Rock, Paper and Scissors"
    ).toLowerCase();
    const computerSelection = computerPlay();
    if (
      playerSelection == "rock" ||
      playerSelection == "paper" ||
      playerSelection == "scissors"
    ) {
      if (oneRound(playerSelection, computerSelection) == "Yes you made it") {
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
      } else if (
        oneRound(playerSelection, computerSelection) ==
        `You win! ${playerSelection} beats ${computerSelection}!`
      ) {
        playerScore++;
        console.log(`Player Score: ${playerScore}`);
      } else {
        computerScore++;
      }
      console.log(oneRound(playerSelection, computerSelection));
    } else {
      console.log("The game is over");
      count--;
    }
  }
}

roundOfGame();
