let calcButton = document.getElementById("calc-button");
let displayArea = document.getElementById("result-display");

function updateDisplay(buttonValue) {
  const currentFormula = displayArea.innerHTML;
  const lastCharacter = currentFormula[currentFormula.length - 1];

  if (
    lastCharacter === "+" ||
    lastCharacter === "-" ||
    lastCharacter === "*" ||
    lastCharacter === "/"
  ) {
    if (
      buttonValue === "+" ||
      buttonValue === "-" ||
      buttonValue === "*" ||
      buttonValue === "/"
    ) {
      displayArea.innerHTML = currentFormula.slice(0, -1) + buttonValue;
    } else {
      displayArea.innerHTML += buttonValue;
    }
  } else {
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
