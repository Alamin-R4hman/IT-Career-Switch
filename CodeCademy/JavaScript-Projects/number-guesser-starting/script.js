let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

//console.log(generateTarget());

/*
const compareGuesses = (playerGuess, computerGuess, secretNumber) => {
  const humanDifference = Math.abs(playerGuess - secretNumber);
  const computerDifference = Math.abs(computerGuess - secretNumber);

  if (humanDifference === computerDifference) {
    return 'Tie';
  } else if (humanDifference < computerDifference){
    return true;
  } else {
    return false;
  }
};
*/

//console.log(compareGuesses(5,5,6));

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
     computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
}

const compareGuesses = (playerGuess, computerGuess, secretNumber) => {
  const humanDifference = getAbsoluteDistance(playerGuess, secretNumber);
  const computerDifference = getAbsoluteDistance(computerGuess, secretNumber);

  if (humanDifference === computerDifference) {
    return true; // Human wins in a tie
  } else if (humanDifference < computerDifference) {
    return true; // Human wins
  } else {
    return false; // Computer wins
  }
};

const isGuessInRange = (guess) => {
  if (guess < 0 || guess > 9) {
    alert('Your guess is out of range! Please enter a number between 0 and 9.');
    return false;
  }
}

/*
Certainly! Let’s go through the code step-by-step, including the new additions for the project:

Variables for Scores and Rounds:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

code

These variables keep track of the human and computer scores, as well as the current round number.

generateTarget Function:

const generateTarget = () => {
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

code

This function generates a random target number between 0 and 9 for each round.

getAbsoluteDistance Function:

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
}

code

This new function calculates the absolute distance between two numbers, which helps determine how close a guess is to the target.

compareGuesses Function:

const compareGuesses = (playerGuess, computerGuess, secretNumber) => {
  const humanDifference = getAbsoluteDistance(playerGuess, secretNumber);
  const computerDifference = getAbsoluteDistance(computerGuess, secretNumber);

  if (humanDifference === computerDifference) {
    return true; // Human wins in a tie
  } else if (humanDifference < computerDifference) {
    return true; // Human wins
  } else {
    return false; // Computer wins
  }
};

code

This function compares the human and computer guesses to the secret target number. It uses getAbsoluteDistance to determine which guess is closer. If the distances are equal, the human wins.

updateScore Function:

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

code

This function updates the score of the winner (either ‘human’ or ‘computer’) by incrementing the appropriate score variable.

advanceRound Function:

const advanceRound = () => currentRoundNumber++;

code

This function increments the round number by 1 after each round.

isGuessInRange Function (continued):
const isGuessInRange = (guess) => {
  if (guess < 0 || guess > 9) {
    alert('Your guess is out of range! Please enter a number between 0 and 9.');
    return false;
  }
  return true;
}

code

Purpose: This function ensures that the user’s guess is within the valid range of 0 to 9.
Logic:
It checks if the guess is less than 0 or greater than 9.
If the guess is out of range, it uses alert() to notify the user and returns false.
If the guess is within range, it returns true.
This function can be used to validate user input before proceeding with the game logic, ensuring that only valid guesses are considered.

Overall, these functions work together to create a number guessing game where the user and computer make guesses, scores are updated based on who is closer to the target, and rounds advance as the game progresses. The additional functions (getAbsoluteDistance and isGuessInRange) enhance the game’s functionality by improving code organization and input validation.
*/