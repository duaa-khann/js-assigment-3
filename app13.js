
function containsAlphabetsAndNumbers(password) {
    return /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
}


function startsWithLetter(password) {
    return /^[a-zA-Z]/.test(password);
}


function validatePassword() {
    
    var password = prompt("Enter your password:");

    
    if (containsAlphabetsAndNumbers(password) && !startsWithLetter(password) && password.length >= 6) {
        alert("Password is valid.");
    } else {
        alert("Invalid password. Please enter a valid password.");
        validatePassword(); 
    }
}

window.onload = validatePassword;