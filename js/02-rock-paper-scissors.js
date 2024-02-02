/*eslint-env browser*/
function getUserChoice () {
    "use strict";
    var input;
    var invalidInput = true;

    do {
        input = String(window.prompt("Please choose either rock (R), paper (P), or scissors (S): ")).toUpperCase();

        if (input === "P" || input === "S" || input === "R") {
            invalidInput = false;
        }
    }  while(invalidInput);

    return input;
}

function getComputerChoice () {
    "use strict";
    var randomNum = Math.floor((Math.random() * 10));

    if (randomNum <= 3) {
        return "R";
    }
    else if (randomNum <= 6) {
        return "P";
    }
    else if (randomNum <= 9) {
        return "S";
    }
}

function letterToFullName (letter) {
    "use strict";
    switch (letter) {
        case "R":
            return "Rock";
        case "S":
            return "Scissors";
        case "P": 
            return "Paper";
    }
}

function playGame (userChoice, computerChoice) {
    "use strict";
    if (userChoice === "R" && computerChoice === "S") {
        window.alert("You selected " + letterToFullName(userChoice) + "; the computer selected " + letterToFullName(computerChoice) + ". YOU WIN!");
    }
    else if (userChoice === "S" && computerChoice === "R") {
        window.alert("You selected " + letterToFullName(userChoice) + "; the computer selected " + letterToFullName(computerChoice) + ". You lose!");
    }
    else if (userChoice === "S" && computerChoice === "P") {
        window.alert("You selected " + letterToFullName(userChoice) + "; the computer selected " + letterToFullName(computerChoice) + ". YOU WIN!");
    }
    else if (userChoice === "P" && computerChoice === "S") {
        window.alert("You selected " + letterToFullName(userChoice) + "; the computer selected " + letterToFullName(computerChoice) + ". You lose!");
    }
    else if (userChoice === "P" && computerChoice === "R") {
        window.alert("You selected " + letterToFullName(userChoice) + "; the computer selected " + letterToFullName(computerChoice) + ". YOU WIN!");
    }
    else if (userChoice === "R" && computerChoice === "P") {
        window.alert("You selected " + letterToFullName(userChoice) + "; the computer selected " + letterToFullName(computerChoice) + ". You lose!")
    }
    else if (userChoice === computerChoice) {
        window.alert("Both you and the computer selected " + letterToFullName(userChoice) + ". So, there is a tie.");
    }
}

function main() {
    var userChoice, computerChoice;
    
    userChoice = getUserChoice();

    computerChoice = getComputerChoice();

    playGame(userChoice, computerChoice);
}

main();