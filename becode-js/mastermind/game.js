// Codemaker

/// Variables

var pegs = ["RD", "BU", "YW", "GN", "OG", "PP"];
var code = [];
var feedBack = [];
var blackPeg = 0;
var whitePeg = 0;
var playerAnswer = ["", "", "", ""];

/// Functions

function codeMaking(){
	for (var i = 0; i < 4; i++) {
		var randomNumb = Math.floor(Math.random()*6);
		code.push(pegs[randomNumb]);
	}
}

function feedBack(){
	blackPeg = 0;
	whitePeg = 0;
	for (var i = 0; i < playerAnswer.length; i++) {
		if (playerAnswer[i] === code[i]){
			blackPeg++;
		}
		for (var j = 0; j < code.length; j++) {
			if (playerAnswer[i] === code[j] && playerAnswer[i] !== code[i]){
				whitePeg++
			}
		}
		
	}
}

// Codebreaker


// Display

/// Variables

var domPlayerAnswer = document.createElement('DIV');
var domPlayerPreviousAnswers = document.createElement('DIV');
var domFeedBack = document.createElement('DIV');
var domSlots = document.createElement('DIV');

/// DOM

domPlayerAnswer.id = 'player-answer';
domPlayerPreviousAnswers.id = 'player-previous-answers';
domFeedBack.id = 'feedback';
domSlots.id = 'slots';


document.body.appendChild(domPlayerAnswer);
document.body.appendChild(domPlayerPreviousAnswers);
document.body.appendChild(domFeedBack);
document.body.appendChild(domSlots);


function createPegs(container, element){
	for (var i = 0; i < element.length; i++) {
		var domPeg = document.createElement('DIV');
		domPeg.id = element[i];
		domPeg.className = 'peg';
		container.appendChild(domPeg);
	}
}

function createEmptyPegs(container, element){
	for (var i = 0; i < element.length; i++) {
		var emptyPeg = document.createElement('DIV');
		emptyPeg.className = 'peg';
		container.appendChild(emptyPeg);	
	}
}

createPegs(domSlots, pegs);
createEmptyPegs(domPlayerAnswer, playerAnswer);