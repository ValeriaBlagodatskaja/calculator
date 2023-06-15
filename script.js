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

let num1 = 0;
let num2 = 0;
let op = 0;

function operate(op, num1, num2) {
  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return substract(num1, num2);
  } else if (op === "*") {
    return multiply(num1, num2);
  } else if (op === "/") {
    return divide(num1, num2);
  } else {
    return "Error: Invalid operation";
  }
}

const button = document.querySelectorAll(".buttons");
button.forEach((buttons) => {
  addEventListener("click", () => {
    updateDisplay(buttons.id);
  });
});

const updateDisplay = (valueClicked) => {
  displayValue += valueClicked;
  displayArea.innerText += displayValue;
};

let displayValue = 0;
let displayArea = document.getElementById("result-display");
displayArea.innerHTML += displayValue;
