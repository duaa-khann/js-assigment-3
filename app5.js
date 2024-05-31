

var firstName = prompt("Please enter your first name:");


var lastName = prompt("Please enter your last name:");


var fullName = firstName.concat(" ", lastName);

var greetingMessage = "Hello, " + fullName + "!";


document.getElementById("greeting").innerText = greetingMessage;