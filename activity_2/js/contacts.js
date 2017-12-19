/* 
Activity: Contact manager
*/

// TODO: Complete the program
var contactList =[new Contact("Smith", "John"), new Contact("Doe", "Jane")];

function Contact (lastName, firstName){
    this.lastName = lastName;
    this.firstName = firstName;
}

function listContact (){
    console.log("Here's the list of all your contacts:");
    for(i=0; i < contactList.length; i++){
       console.log("Last name: " + contactList[i].lastName + ", first name: " + contactList[i].firstName);
    }
}

function addContact(){
    contactLastName = prompt("Please enter the last name of the new contact");
    while(contactLastName.length === 0){
        contactLastName = prompt("Please enter the last name of the new contact");
    }
    contactFirstName = prompt("Please enter the first name of the new contact");
    while(contactFirstName.length === 0){
        contactFirstName = prompt("Please enter the first name of the new contact");
    }
    contactList.push(new Contact(contactLastName, contactFirstName));
    console.log("Contact added");
}

function showOptions(){
    console.log("1: List contacts \n2: Add a contact \n0: Quit");
    choice = prompt("Please enter 1, 2 or 0 to choose your options");
    if(choice === "1"){
       listContact();
       showOptions();
    }
    else if(choice === "2"){
        addContact();
        showOptions();
    }
    else if(choice === "0"){
        alert("Bye!");
    }
    else{
        showOptions();
    }
}

function welcome(){
    console.log("Welcome to your contacts manager");
    showOptions();
}

welcome();