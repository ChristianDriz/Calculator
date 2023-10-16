// $(document).ready(function () {

//     $('.btn').click(function (e) { 
//         e.preventDefault();
        
//         var value = $(this).val();

//         $('.typan').val($('.typan').val() + value);

//     });

//     $('.clear-all').click(function (e) { 
//         e.preventDefault();
        
//         $('.typan').val('');
//     });
// });


// function insert(num){
//     document.getElementById('typan').value += num;
// }

// function deleteAll(){
//     document.getElementById('typan').value = "";
// }

// function deleteOne(){
//     document.getElementById('typan').value = "";
// }



let displayValue = "";

// Function to update the display
function updateDisplay() {
    document.getElementById("typan").value = displayValue;
}

// Function to add a digit to the display
function insert(digit) {
    displayValue += digit;
    updateDisplay();
}

// Function to add an operator to the display
function operator(operator) {
    if (displayValue !== "") {
        displayValue += operator;
        updateDisplay();
    }
}

// Function to calculate the result and update the display
function calculate() {
    if (displayValue !== "") {
        try {
        const result = eval(displayValue);
        displayValue = String(result);
    } catch (error) {
        displayValue = "Error";
    }
        updateDisplay();
  }
}

// Function to clear the display
function deleteAll() {
    displayValue = "";
    updateDisplay();
}

// Function to remove one character from the display
function deleteOne() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}
