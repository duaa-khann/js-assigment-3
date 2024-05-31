
var num = 35.36;

var numAsString = num.toString().replace(".", "");


document.getElementById("originalValue").innerText = "Original value: " + num;
document.getElementById("convertedValue").innerText = "Converted value: " + numAsString;