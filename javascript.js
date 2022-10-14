
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

console.log(computerrps)

function playerrps() {
    playerval = prompt("Enter rock, paper or scissors:").toLowerCase()
    while (playerval != "rock" || playerval != "paper" || playerval != "scissors") {
        //console.log("Wrong value, type again")//
        playerval = prompt("Wrong value, type again!").toLowerCase()
    }
    return playerval
}

console.log(playerrps)

// var computer = computerrps() 

// var player = playerrps()

// if (player == computer) {
//     alert("DRAW!")
// }
// else if ((computer == "rock" && player == "paper")||(computer == "paper" && player == "scissors")||(computer == "scissors" && player == "rock")) {
//     alert("You win, beautiful!")
// }
// else {
//     alert("You lose, stinkyhead")
// }

//const player = prompt("Enter rock, paper or scissors:")

//console.log(computer)
//console.log(player)

// If/Else statements. //

// if (computer == 1 && player == 2) {
//     alert("You win, paper beats rock!")
// }
// if (computer == 1 && player == 3) {
//     alert("You lose, rock beats scissors!")
// }
// if (computer == 2 && player == 1) {
//     alert("You lose, paper beats rock!")
// }
// if (computer == 2 && player == 3) {
//     alert("You win, scissors beats paper!")
// }
// if (computer == 3 && player == 1) {
//     alert("You lose, rock beats scissors!")
// }
// if (computer == 3 && player == 2) {
//     alert("You lose, scissors beats paper!")
// }
// if (computer == player) {
//     alert("It's a draw!")
// }
// if (player > 3) {
//     alert("Enter either 1, 2 or 3. Reload the page and try again.")
// }
