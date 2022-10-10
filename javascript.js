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

function computerrps() {
    let computerval = randomIntFromInterval(1,3)
    switch(computerval) {
        case 1:
            result = "rock";
            break;
        case 2:
            result = "paper";
            break;
        case 3:
            result = "scissors";
            break;
        default: 
            result = "plonker"    
    }
    return result
}

console.log(computerrps()) 

const computer = randomIntFromInterval(1,3) // 

// NUMBER FROM THE player //

const player = Number(prompt("Type 1 for Rock, 2 for Paper and 3 for Scissors!"))

//console.log(computer)
//console.log(player)

// If/Else statements. //

if (computer == 1 && player == 2) {
    alert("You win, paper beats rock!")
}
if (computer == 1 && player == 3) {
    alert("You lose, rock beats scissors!")
}
if (computer == 2 && player == 1) {
    alert("You lose, paper beats rock!")
}
if (computer == 2 && player == 3) {
    alert("You win, scissors beats paper!")
}
if (computer == 3 && player == 1) {
    alert("You lose, rock beats scissors!")
}
if (computer == 3 && player == 2) {
    alert("You lose, scissors beats paper!")
}
if (computer == player) {
    alert("It's a draw!")
}
if (player > 3) {
    alert("Enter either 1, 2 or 3. Reload the page and try again.")
}
