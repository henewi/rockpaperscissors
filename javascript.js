// Define the function for AI gen number
// function to choose number between 1 and 3 
// If number is 1 rock 2 paper 3 scissors
// Ask user for input rock paper or scissors
// If user is rock 1 paper 2 scissors 3,
// Do for computer ONLY:
// if computer 1 and user 1, draw
// if computer 1 and user 2, user wins
// if computer 1 and user 3, computer wins
// if computer 2 and user 1, user wins 
// if computer 2 and user 2, draw
// if computer 2 and user 3, computer wins
// if computer 3 and user 1, computer wins
// if computer 3 and user 2, user wins
// if computer 3 and user 3, draw

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const computer = randomIntFromInterval(1,3)
