
function isSpecialSymbol(char) {
    var specialSymbols = ['@', '.', ',', '!'];
    return specialSymbols.includes(char);
}


function validateUsername() {
    
    var username = prompt("Enter your username:");

    
    var isValid = true;

    
    for (var i = 0; i < username.length; i++) {
        
        if (isSpecialSymbol(username[i])) {
            isValid = false;
            break;
        }
    }

    
    if (!isValid) {
        alert("Invalid username. Please enter a username without @, ., ,, or !");
    } else {
        alert("Valid username: " + username);
    }
}

window.onload = validateUsername;