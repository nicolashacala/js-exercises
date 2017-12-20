var titleElements = document.getElementsByTagName("h2"); // All h2s

console.log(titleElements[0]); // Show the first h2

var wondersElements = document.getElementsByClassName("wonders");

for (var i = 0; i < wondersElements.length; i++) {

    console.log(wondersElements[i]);

}
console.log(document.getElementById("new"));

// All "ancient" wonders that still exist

console.log(document.getElementById("ancient").getElementsByClassName("exists").length); // Will show 1
