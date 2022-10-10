/// Define the function for AI gen number
/// function to choose number between 1 and 3 
// If number is 1 rock 2 paper 3 scissors
// Ask user for input rock paper or scissors
// If user is rock 1 paper 2 scissors 3,
// Do for computer ONLY:
//////// if computer 1 and user 1, draw
// if computer 1 and user 2, user wins
// if computer 1 and user 3, computer wins
// if computer 2 and user 1, computer wins 
//////// if computer 2 and user 2, draw
// if computer 2 and user 3, user wins
// if computer 3 and user 1, computer wins
// if computer 3 and user 2, user wins
//////// if computer 3 and user 3, draw

// RANDOM NUMBER GENERATOR FOR THE COMPUTER // 

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const computer = randomIntFromInterval(1,3)

// NUMBER FROM THE player //

const player = Number(prompt("Type 1 for Rock, 2 for Paper and 3 for Scissors!"))

console.log(computer)
console.log(player)

// COMPUTER ROCK (1) //

if (computer == 1 && player == 2) {
    console.log("You win, paper beats rock!")
}
if (computer == 1 && player == 3) {
    console.log("You lose, rock beats scissors!")
}
if (computer == 2 && player == 1) {
    console.log("You lose, paper beats rock!")
}

