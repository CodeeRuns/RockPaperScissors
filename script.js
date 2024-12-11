let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
  
    if (computerChoice === 1) {
      return "rock";
    } else if (computerChoice === 2) {
      return "paper";
    } else if (computerChoice === 3) {
      return "scissors";
    }
  } 
  function getPlayerChoice() {
    let playerChoice = prompt("Please slect your option: Rock, Paper or Scissors?");
  
    // Exit the function if user selects cancel
    if (playerChoice === null) {
      return null;
    }
  
    // Convert any input to lowercase
    playerChoice = playerChoice.toLowerCase(); 
  
    // Check if the input is a valid choice
    // Continue asking until a valid choice is inputted
    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      return playerChoice; 
    } else {
      console.log("Enter a valid choice: rock, paper or scissors.");
      return getPlayerChoice(); 
    }
  }
  
  function playRound(playerChoice, computerChoice) {
    console.log(`You chose ${playerChoice}, Computer chose ${computerChoice}`);
  
    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
      return 0;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("You win!");
      return 1;
    } else if (
      (computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "paper" && playerChoice === "rock") ||
      (computerChoice === "scissors" && playerChoice === "paper")
    ) {
      console.log("Computer wins!");
      return 2;
    }
  }
  
  function playGame() {
    // Flag to check if game was cancelled
    let gameCancelled = false; 
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = getPlayerChoice();
  
      // If user cancels the game, stop the game immediately
      if (playerSelection === null) {
        console.log(
          "Are you sure you would like to cancel the game? To change your mind, hit refresh and go again!"
        );
        // Set flag to true
        gameCancelled = true; 
        // Exit the loop, ending the game
        break; 
      }
  
      const computerSelection = getComputerChoice();
      let result = playRound(playerSelection, computerSelection);
  
      if (result === 1) playerScore++;
      if (result === 2) computerScore++;
      console.log(`Your Score: ${playerScore}. Computer Score: ${computerScore}`);
    }
  
    // Only display the final result if the game wasn't cancelled
    if (!gameCancelled) {
      if (playerScore === computerScore) {
        console.log("You have hit a draw! Refresh the page to play again!");
      } else if (playerScore > computerScore) {
        console.log("Congratulations! You have out-smarted technology. Refresh the page to play again!");
      } else if (playerScore < computerScore) {
        console.log("So sorry, technology has beaten you this time. Refresh the page to play again!");
      }
    }
  }
  
  playGame();