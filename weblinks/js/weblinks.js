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
printMyForm.style.marginBottom = "15px";
var printNewLink = document.getElementById("printNewLink");

var addButton = document.createElement("button");
addButton.appendChild(document.createTextNode("Add"));
addButton.onclick = function addNewLink(){
    addButton.style.display = "none";
    myForm.style.display ="inline";
};
printMyForm.appendChild(addButton);


var yourName = document.createElement("INPUT");
yourName.placeholder = "Your name";
yourName.name = "name";
yourName.id = "new_author";
yourName.required = "required";

var linkTitle = document.createElement("INPUT");
linkTitle.placeholder = "Link title";
linkTitle.name = "link";
linkTitle.id = "new_link";
linkTitle.required = "required";

var linkUrl = document.createElement("INPUT");
linkUrl.placeholder = "Link URL";
linkUrl.name = "url";
linkUrl.id = "new_url";
linkUrl.required = "required";

var addLink = document.createElement("INPUT");
addLink.setAttribute("type", "submit");
addLink.value = "add link";
addLink.onclick = function saveLink(){
    if(!/^https?:\/\//i.test(document.getElementById("new_url").value)){
        document.getElementById("new_url").value = 'http://' + document.getElementById("new_url").value;
    }
    linkList.unshift({"title" : document.getElementById("new_link").value, "url" : document.getElementById("new_url").value, "author" : document.getElementById("new_author").value});
};


var myForm = document.createElement("form");
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
    printNewLink.insertAdjacentElement("afterBegin", newLink);
    myForm.reset();
    myForm.style.display = "none";
    message.style.display = "inline";
    setTimeout(function(){message.style.display="none"}, 2000);
    setTimeout(function(){addButton.style.display = "inline"}, 2000);
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


