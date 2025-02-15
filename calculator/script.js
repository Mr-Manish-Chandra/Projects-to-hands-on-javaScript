
        let display = document.getElementById("display");
    
        function appendToDisplay(value) {
            let currentValue = display.value;
            let parts = currentValue.split(/[\+\-\*\/]/); // Split by operators
            let lastNumber = parts[parts.length - 1];
    
            // Prevent multiple leading zeros
        if ((lastNumber === "0" && value !== "." && isFinite(value)) || 
            (lastNumber === "" && value === "00")) {
            return; // Ignore input
        }

        // Prevent multiple "00" at the start or after an operator
        if (lastNumber === "00") {
            return;
        }

        display.value += value;
    }

        function clearDisplay() {
            display.value = "";
        }
    
        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }
    
        function addDecimal() {
            let parts = display.value.split(/[\+\-\*\/]/);
            let lastNumber = parts[parts.length - 1];
    
            if (!lastNumber.includes(".")) { 
                display.value += "."; 
            }
        }
    
        function calculateResult() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
  