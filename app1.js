function displayLength() {
    
    var mobileModel = document.getElementById("mobileModel").value;

    
    var length = mobileModel.length;

    
    document.getElementById("result").innerText = "The length of the input is: " + length;
}