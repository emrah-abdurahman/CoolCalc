// Assigning both the current display and operation displays to variables
const displayOperation = document.querySelector("#displayOperation");
const displayCurrent = document.querySelector("#displayCurrent");

// Gathering all buttons into a NodeList variable and ddding a click event listener for all buttons
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    const buttonType = button.getAttribute("data-button-type");
    if (buttonType === "number-button") numUpdateDisplay(button.innerText);
    if (buttonType === "operator-button")
      operatorUpdateDisplay(button.innerText);
    if (buttonType === "clear-button") clearDisplay();
  });
}

// Updates the current display when a number button has been clicked by the user
function numUpdateDisplay(value) {
  if (displayCurrent.innerText === "0") {
    displayCurrent.innerText = value;
  } else {
    displayCurrent.innerText += value;
  }
}

// Updates the operator display when the user clicks on an arithmetic operator
function operatorUpdateDisplay(value) {
  let total = 0;
  if (Number(displayCurrent.innerText)) {
    total += Number(displayCurrent.innerText);
    displayOperation.innerText = `${total}${value}`.toString();
  }
}

// Clears the display when the user clicks on the Clear button
function clearDisplay() {
  displayOperation.innerText = "";
  displayCurrent.innerText = "0";
}
