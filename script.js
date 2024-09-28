function calculator() {
    let firstNumber = prompt("Enter the first number:");
    firstNumber = parseFloat(firstNumber);

    if (isNaN(firstNumber)) {
        alert("Invalid input! Please enter a numeric value.");
        return;
    }

    let secondNumber = prompt("Enter the second number:");
    secondNumber = parseFloat(secondNumber);

    if (isNaN(secondNumber)) {
        alert("Invalid input! Please enter a numeric value.");
        return;
    }

    let operator = prompt("Enter an operator (+, -, *, /):");

    let result;

    if (operator === '+') {
        result = firstNumber + secondNumber;
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else if (operator === '/') {
        if (secondNumber === 0) {
            alert("Error! Division by zero is not allowed.");
            return;
        }
        result = firstNumber / secondNumber;
    } else {
        alert("Invalid operator! Please enter one of (+, -, *, /).");
        return;
    }

    alert("Answer Dekho: " + result);
}

calculator();
