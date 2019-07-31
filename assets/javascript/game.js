
// Creates an array that lists out all of the options).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h ", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Declaring variables to track wins and losses
var wins = 0;
var losses = 0;
var guesses = 10;

var x = [];

// Create variables that hold references to the places in the HTML to display the outcome.

var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");


// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    var userGuess = event.key;
    x.push(userGuess);
    console.log(x);
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    if ((userGuess === computerGuess)) {
        wins++;
        guesses = 10;
        x = [];
    }

    if ((userGuess !== computerGuess) && (guesses === 0)) {
        losses++;
        guesses = 10;
        x = [];
    }
    guesses--;

    
    
    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = x.join(",");
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesText.textContent = guesses;

};


