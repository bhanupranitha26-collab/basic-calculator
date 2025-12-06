let display = document.getElementById("display");

// Append numbers/operators to the display
function append(value) {
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    display.value = "";
}

// Remove last digit
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

// Allow keyboard support
document.addEventListener("keydown", function(e) {
    if (e.key >= '0' && e.key <= '9') append(e.key);
    if (['+', '-', '*', '/', '.'].includes(e.key)) append(e.key);
    
    if (e.key === "Backspace") backspace();
    if (e.key === "Enter") calculate();
    if (e.key === "Escape") clearDisplay();
});
