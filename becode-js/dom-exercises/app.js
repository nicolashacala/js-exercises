document.body.className = 'bg-olive';

document.getElementById('first-paragraph').className = 'aqua';

var bgSilver = document.getElementsByClassName('bg-silver');

for (var i = 0; i < bgSilver.length; i++) {
	bgSilver[i].className = 'teal';
}

document.querySelector('table#my-table').className = 'bg-purple';

var allP = document.querySelector('main.container').querySelectorAll('p');

for (var i = 0; i < allP.length; i++) {
	allP[i].className = 'shadow';
}

var allPre = document.querySelectorAll('pre');

for (var i = 0; i < allPre.length; i++) {
	allPre[i].setAttribute("style", "border-top : 3px solid red; border-bottom : 3px solid red;");
	allPre[i].style.color = 'yellow';
	allPre[i].style.backgroundColor = 'black';
}

document.querySelector('h3').innerHTML = '<em>Itelic title ! yeah !</em>';

document.querySelector('h2').innerHTML = '<strong>HTML doens\'t work !</strong>';

var listElement = document.createElement("li");
listElement.appendChild(document.createTextNode("Mon meilleur ami est "));

var googleLink = document.createElement("a");
googleLink.href = 'http://www.google.com';
googleLink.style.color = 'black';
googleLink.appendChild(document.createTextNode('Google'));
listElement.appendChild(googleLink);

document.querySelector('ul').appendChild(listElement);


var olElement = document.querySelector('ol');

while (olElement.firstChild){
	olElement.removeChild(olElement.firstChild);
}


var codingWebsites = ["Silent Teacher", "Code Monkey", "CodeCombat"];

codingWebsites.forEach(function (liElement){
	var codingWebsitesLi = document.createElement('li');
	codingWebsitesLi.appendChild(document.createTextNode(liElement));
	olElement.appendChild(codingWebsitesLi);
});