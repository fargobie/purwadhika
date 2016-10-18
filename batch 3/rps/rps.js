var userChoice = prompt("Masukkan rock, paper atau scissors").toLowerCase();
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice < 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);

var compare = function(choice1, choice2) {

    if(choice1 === choice2){
        return "Seri";
    } else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "Menang";
        } else {
            return "Kalah";
        }
    } else if(choice1 === "scissors") {
        if(choice2 === "paper") {
            return "Menang";
        } else {
            return "Kalah";
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "Menang";
        } else {
            return "Kalah";
        }
    }
}

document.write(compare(userChoice, computerChoice));
