
        var A = ["cake", "apple pie", "cookie", "chips", "patties"];

        function searchItem(item) {
            
            var lowercaseItem = item.toLowerCase();
            var found = false;

            
            for (var i = 0; i < A.length; i++) {
                
                var lowercaseArrayItem = A[i].toLowerCase()
                if (lowercaseArrayItem === lowercaseItem) {
                    found = true;
                    break;
                }
            }

            
            if (found) {
                alert("Yes, '" + item + "' is found in the list.");
            } else {
                alert("No, '" + item + "' is not found in the list.");
            }
        }

        
        var userInput = prompt("Enter an item to search:");
        searchItem(userInput);








