let calcButton = document.getElementById("calc-button");
let displayArea = document.getElementById("result-display");

function updateDisplay(buttonValue) {
  const currentFormula = displayArea.innerHTML;
  const lastCharacter = currentFormula[currentFormula.length - 1];

  // Check if the last character is an operator
  if (
    lastCharacter === "+" ||
    lastCharacter === "-" ||
    lastCharacter === "*" ||
    lastCharacter === "/"
  ) {
    // Check if the current button value is also an operator
    if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "*" ||
      buttonValue === "/"
    ) {
      // Replace the last operator with the new one
      displayArea.innerHTML = currentFormula.slice(0, -1) + buttonValue;
    } else {
      // Append the button value to the display
      displayArea.innerHTML += buttonValue;
    }
  } else {
    // Append the button value to the display
    displayArea.innerHTML += buttonValue;
  }
}

calcButton.addEventListener("click", () => {
  const userEnteredFormula = displayArea.innerHTML;
  displayArea.innerHTML = eval(userEnteredFormula);
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
