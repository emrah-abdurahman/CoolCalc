// Assigning both the current display and operation displays to variables
const displayOperation = document.querySelector("#displayOperation");
const displayCurrent = document.querySelector("#displayCurrent");
let operatorButtonClicked = false;
let preOperatorUserSum = 0;
let total = 0;

// Initializing current total display
displayCurrent.innerText = total.toString();

// Gathering all buttons into a NodeList variable and adding a click event listener for all buttons
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    const buttonType = button.getAttribute("data-button-type");
    if (buttonType === "number-button")
      currentNumUpdateDisplay(button.innerText);
    if (buttonType === "operator-button") {
      operatorButtonClicked = true;
      operatorUpdateDisplay(button.innerText);
    }
    if (buttonType === "clear-button") clearDisplay();
  });
}

// Updates the current display when a number button has been clicked by the user
function currentNumUpdateDisplay(numValue) {
  if (displayCurrent.innerText === "0" && numValue === "0") {
    return;
  } else if (displayCurrent.innerText === "0") {
    displayCurrent.innerText = "";
    displayCurrent.innerText += numValue;
    preOperatorUserSum = Number(displayCurrent.innerText);
    console.log(preOperatorUserSum);
  } else {
    preOperatorUserSum += Number(numValue);
    displayCurrent.innerText = preOperatorUserSum.toString();
    console.log(preOperatorUserSum);
  }
}

// Updates the operator display when the user clicks on an arithmetic operator
function operatorUpdateDisplay(operatorValue) {
  switch (operatorValue) {
    case "+":
      total += preOperatorUserSum;
      displayCurrent.innerText = total.toString();
      displayOperation.innerText = `${total}+`;
      preOperatorUserSum = 0;
      break;
    case "-":
      total -= preOperatorUserSum;
      displayCurrent.innerText = total.toString();
      displayOperation.innerText = `${total}-`;
      preOperatorUserSum = 0;
      break;
  }

  // if (Number(displayCurrent.innerText) && operatorButtonClicked) {
  //   if (displayOperation.innerText) {
  //     total += Number(displayCurrent.innerText);
  //     displayCurrent.innerText = total;
  //     displayOperation.innerText = `${total}${value}`.toString();
  //     operatorButtonClicked = false;
  //     return;
  //   }
  //   operatorButtonClicked = true; // Is this needed?
  //   total += Number(displayCurrent.innerText);
  //   displayOperation.innerText = `${total}${value}`.toString();
  // }
}

// Clears the display when the user clicks on the Clear button
function clearDisplay() {
  preOperatorUserSum = 0;
  total = 0;
  displayOperation.innerText = "";
  displayCurrent.innerText = total.toString();
  console.log(preOperatorUserSum);
}
