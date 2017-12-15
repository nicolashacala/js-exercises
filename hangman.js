var wordToGuess = ["b", "o", "n", "j", "o", "u", "r"];
var guess = ["", "", "", "", "", "", ""];
var wrongOne = [];
var goodOne = 0;
var wrongLetters;
var attemptLeft = 5;
var alphaExp = /^[a-zA-Z]+$/;

var askToPlay =  confirm("Play with me!");


if (askToPlay === true){
    var letter = prompt("Try to guess the word, give me a letter!");
    guessLetter(letter);
}
else{
    alert("Go f*** yourself then");
}

function guessLetter(letter) {
    goodOne = 0;
    wrongLetters = 0;
    var letterToLowerCase = letter.toLowerCase();

    for (i = 0; i <= 6; i++){
        if (letterToLowerCase === wrongOne[i]){
            wrongLetters++;
        }
    }
    if (wrongLetters > 0){
        console.log("Ask for help. You stupid");
        letter = prompt("Did you call a friend?");
        guessLetter(letter);
    }
    else if (letter.length > 1){
        console.log("Only one letter...");
        letter = prompt("Do I really need to explain the rules?");
        guessLetter(letter);
    }
    else if (!letter.match(alphaExp)){
        console.log("OMG...");
        letter = prompt("I could tell you were a champion");
        guessLetter(letter);
    }

    for (i = 0; i <= 6; i++) {
            if (letterToLowerCase === wordToGuess[i] && guess[i] === "") {
                guess[i] = letterToLowerCase;
                goodOne++;
            }
            else if (letterToLowerCase === guess[i]) {
                console.log("You already gave that one asshole");
                letter = prompt("Focus this time!");
                guessLetter(letter);
            }
        }
        if (wordToGuess.toString() === guess.toString()) {
            console.log(guess);
            console.log("well done dickhead");
        }
        else if (goodOne > 0) {
            console.log(guess);
            console.log("Nice one");
            letter = prompt("Keep it going");
            guessLetter(letter);
        }
        else {
            wrongOne[wrongOne.length] = letterToLowerCase;
            attemptLeft--;
            if (attemptLeft < 1) {
                console.log("AHAHAHAHAH MORRON!");
            }
            else if (attemptLeft > 1) {
                console.log(guess);
                console.log("LOL Try again! " + attemptLeft + " attempts left!");
                letter = prompt("Come on Bastard, guess!");
                guessLetter(letter);
            }
            else {
                console.log(guess);
                console.log("LOL Try again! " + attemptLeft + " attempt left!");
                letter = prompt("You are almost a looser");
                guessLetter(letter);
            }
        }
}
