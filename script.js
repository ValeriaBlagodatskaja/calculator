function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (b != 0) {
    return x / y;
  } else {
    return "Error: Cannot divide by zero";
  }
}

let firstNumber = num1;
let secondNumber = num2;
let operator = op;

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
