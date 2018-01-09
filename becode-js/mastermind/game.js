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

// Codebreaker

var feedBack = function(){
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

var pushToPlayerPreviousAnswer = function(){
	for (var i = 0; i < playerAnswer.length; i++) {
		var domPeg = document.createElement('DIV');
		domPeg.id = playerAnswer[i];
		domPeg.className = 'peg';
		domPlayerPreviousAnswers.appendChild(domPeg);
	}
}

function checkCode(){
	for (var i = 0; i < playerAnswer.length; i++) {
		playerAnswer[i] = domPlayerAnswer.childNodes[i].id;
	}
	feedBack();
	if(blackPeg === 4){
		alert('You won');
	}
	else{
		pushToPlayerPreviousAnswer();
		for (var i = 0; i < domPlayerAnswer.childNodes.length; i++) {
			domPlayerAnswer.childNodes[i].id = '';
		}
	}
}

// Display

/// Variables

var domPlayerAnswer = document.createElement('DIV');
var domPlayerPreviousAnswers = document.createElement('DIV');
var domFeedBack = document.createElement('DIV');
var domSlots = document.createElement('DIV');
var domCheckButton = document.createElement('BUTTON');

/// DOM

domPlayerAnswer.id = 'player-answer';
domPlayerAnswer.setAttribute("ondrop", "drop(event)");
domPlayerAnswer.setAttribute("ondragover", "allowDrop(event)");

domPlayerPreviousAnswers.id = 'player-previous-answers';

domFeedBack.id = 'feedback';

domSlots.id = 'slots';

domCheckButton.id = 'check-button';
domCheckButton.appendChild(document.createTextNode("Check your code"));
domCheckButton.setAttribute('onclick', 'checkCode()');

document.body.appendChild(domPlayerPreviousAnswers);
document.body.appendChild(domFeedBack);
document.body.appendChild(domPlayerAnswer);
document.body.appendChild(domSlots);
document.body.appendChild(domCheckButton);


/// Functions

function createPegs(container, element){
	for (var i = 0; i < element.length; i++) {
		var domPeg = document.createElement('DIV');
		domPeg.id = element[i];
		domPeg.className = 'peg';
		domPeg.draggable = 'true';
		domPeg.setAttribute("ondragstart", "drag(event)");
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

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(ev.target.className === 'peg'){
    ev.target.id = (document.getElementById(data)).id;
	}
}

createPegs(domSlots, pegs);
createEmptyPegs(domPlayerAnswer, playerAnswer);