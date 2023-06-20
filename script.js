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
  console.log(num1, currentOperator, num2);
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
  if (hasPressedOperator) {
    displayArea.innerHTML = "";
    hasPressedOperator = false;
  }

  displayArea.innerHTML += buttonValue;
}

function getOperator(operator) {
  currentOperator = operator;
  hasPressedOperator = true;
  prevValue += displayArea.innerHTML;
  console.log(currentOperator);
}
calcButton.addEventListener("click", () => {
  console.log(prevValue);
  console.log(currentOperator);
  console.log(displayArea.innerHTML);
  displayArea.innerHTML = calculate(
    Number(prevValue),
    currentOperator,
    Number(displayArea.innerHTML)
  );
});
function deleteOneValue() {
  displayArea.innerHTML = displayArea.innerHTML.slice(0, -1);
}
function deleteAll() {
  displayArea.innerHTML = "";
}
function addNegative() {
  let currentValue = Number(displayArea.innerHTML);
  return (displayArea.innerHTML = (-currentValue).toString());
}
