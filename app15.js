
var str = "The quick brown fox jumps over the lazy dog";


var lowerStr = str.toLowerCase();


var wordToSearch = "the";


var wordsArray = lowerStr.split(" ");


var count = 0;

for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === wordToSearch) {
    count++;
}
}

document.getElementById("result").innerText = "The word 'the' occurs " + count + " times.";