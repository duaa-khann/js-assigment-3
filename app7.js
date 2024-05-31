

var message = "Ali and Sami are best friends. They play cricket and football together.";


var newMessage = message.replace(/and/g, "&");


document.getElementById("result").innerText = newMessage;