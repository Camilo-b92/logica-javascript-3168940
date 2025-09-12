const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); 
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return "Error: please choose rock, paper, scissors, or try the secret cheat code ";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return "BOOM! User wins with the secret cheat code!";
  }

  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('paper'); //puedes probar 'rock', 'paper', 'scissors' o el cheat 'bomb'
  const computerChoice = getComputerChoice();

  console.log("User choice:", userChoice);
  console.log("Computer choice:", computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
