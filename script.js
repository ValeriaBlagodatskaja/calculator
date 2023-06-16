function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 != 0 || num1 != 0) {
    return num1 / num2;
  } else {
    return "Error: Cannot divide by zero";
  }
}

function calculate(num1, currentOperator, num2) {
  if (currentOperator === "+") {
    return add(num1, num2);
  } else if (currentOperator === "-") {
    return substract(num1, num2);
  } else if (currentOperator === "*") {
    return multiply(num1, num2);
  } else if (currentOperator === "/") {
    return divide(num1, num2);
  } else {
    return "Error: Invalid operation";
  }
}

let currentOperator = null;
let hasPressedOperator = false;
let calcButton = document.getElementById("calc-button");
let displayArea = document.getElementById("result-display");
let prevValue = "";

function updateDisplay(buttonValue) {
  prevValue = displayArea.innerHTML;

  if (hasPressedOperator) {
    displayArea.innerHTML = "";
    hasPressedOperator = false;
  }

  displayArea.innerHTML += buttonValue;
}

function getOperator(operator) {
  currentOperator = operator;
  hasPressedOperator = true;
  console.log(currentOperator);
}
calcButton.addEventListener("click", () => {
  console.log("prevValue", prevValue);
  console.log("current value", displayArea.innerHTML);
  console.log("currentOperator", currentOperator);
  displayArea.innerHTML = calculate(
    parseFloat(prevValue),
    currentOperator,
    parseFloat(displayArea.innerHTML)
  );
});
