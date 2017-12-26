// List of links to show. Each link has:
// - a title
// - a URL
// - an author (the person who added it)

var linkList = [
    {
        title: "Kottke",
        url: "http://kottke.org",
        author: "brett.suggs"
    },
    {
        title: "National Geographic",
        url: "http://www.nationalgeographic.com",
        author: "jessica"
    },
    {
        title: "American Museum of Natural History",
        url: "http://www.amnh.org",
        author: "aurora.nicole"
    }
];



function createLinkElement(link) {
    var linktitle = document.createElement("a");
    linktitle.href = link.url;
    linktitle.style.color = "#428bca";
    linktitle.style.textDecoration = "none";
    linktitle.style.marginRight = "5px";
    linktitle.appendChild(document.createTextNode(link.title));

    var linkUrl = document.createElement("span");
    linkUrl.appendChild(document.createTextNode(link.url));

    var titleLine = document.createElement("h4");
    titleLine.style.margin = "0px";
    titleLine.appendChild(linktitle);
    titleLine.appendChild(linkUrl);

    var detailsLine = document.createElement("span");
    detailsLine.appendChild(document.createTextNode("Added by " + link.author));

    var linkDiv = document.createElement("div");
    linkDiv.classList.add("link");
    linkDiv.appendChild(titleLine);
    linkDiv.appendChild(detailsLine);

    return linkDiv;
}


var content = document.getElementById("content");
var printMyForm = document.getElementById("printMyForm");
var printNewLink = document.getElementById("printNewLink");

var addButton = document.createElement("button");
addButton.appendChild(document.createTextNode("Add"));
addButton.onclick = function addNewLink(){
    addButton.style.display = "none";
    myForm.style.display ="inline";
};
printMyForm.appendChild(addButton);


yourName = document.createElement("INPUT");
yourName.placeholder = "Your name";
yourName.name = "name";
yourName.id = "new_author";
yourName.required = "required";

linkTitle = document.createElement("INPUT");
linkTitle.placeholder = "Link title";
linkTitle.name = "link";
linkTitle.id = "new_link";
linkTitle.required = "required";

linkUrl = document.createElement("INPUT");
linkUrl.placeholder = "Link URL";
linkUrl.name = "url";
linkUrl.id = "new_url";
linkUrl.required = "required";

addLink = document.createElement("INPUT");
addLink.setAttribute("type", "submit");
addLink.value = "add link";
addLink.onclick = function saveLink(){
    linkList.unshift({"title" : document.getElementById("new_link").value, "url" : document.getElementById("new_url").value, "author" : document.getElementById("new_author").value});
};


var myForm = document.createElement("form");
printMyForm.style.marginBottom = "15px";
myForm.style.display = "none";
myForm.id = "my_form";
myForm.submit();
myForm.appendChild(yourName);
myForm.appendChild(linkTitle);
myForm.appendChild(linkUrl);
myForm.appendChild(addLink);
printMyForm.appendChild(myForm);
document.getElementById("my_form").addEventListener("submit", function(event) {
    event.preventDefault();
    var newLink = createLinkElement(linkList[0]);
    printNewLink.appendChild(newLink);
    myForm.style.display = "none";
    message.style.display = "inline";
    setTimeout(function(){message.style.display="none"}, 2000);
});

var message = document.createElement("h4");
message.style.color = "#428bca";
message.style.width = "100%";
message.style.backgroundColor = "#49C5D0";
message.style.display = "none";
printMyForm.appendChild(message);
message.appendChild(document.createTextNode("The link to " + document.getElementById("new_link").value + " was successfully added!"));


linkList.forEach(function (link) {
    var linkElement = createLinkElement(link);
    content.appendChild(linkElement);
});


