//This number guessing game generates a random number between 1 and 100. Using the browser functions prompt and alert, it asks the user to guess the number. 
//The user has 4 tries to guess the number. If they guess right, the game congratulates them. 
//Otherwise, they get a message saying what the correct number was, as well as their list of guesses.

function guessGame() {
    var num = Math.ceil( Math.random() * 100 );
    var userGuesses = [];
    for (var i = 3; i >=0; i--) {
        var userInput = prompt("Gimme a number between 1 and 100");
        if (userInput !== num) {
            alert("You have " + i + " more guesses");
            userGuesses.push(userInput);
        } else {   
            alert("Congrats, you're a number-guessing wizard!");
            userGuesses.push(userInput);
            break;
        }
    }
    alert("The right answer was " + num + ". Your guesses were " + userGuesses + ".");
}