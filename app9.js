function convertToUpperCase() {

var input = document.getElementById("userInput").value;


var upperCaseInput = input.toUpperCase();


document.getElementById("result").innerText = "Converted text: " + upperCaseInput;}
