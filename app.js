// Initializing the variables and getting all buttons
let displayNum = 0;
let nums = [];
let currentoperator = "";
let leftOperand;
let rightOperand;
let display = document.querySelector("#display");
let displayOperation = document.querySelector("#displayOperation");
let btns = document.querySelectorAll(".button");
//Adding a click event listener for all buttons

for (let btn of btns) {
  btn.addEventListener("click", function () {
    updateDisplay(this);
  });
}

// Function for updating the display depending on which button is pressed
function updateDisplay(btn) {
  switch (btn.innerText) {
    case "C":
      clearDisplay();
      break;
    case "0":
      numBtnUpdateDisplay(0);
      break;
    case "1":
      numBtnUpdateDisplay(1);
      break;
    case "2":
      numBtnUpdateDisplay(2);
      break;
    case "3":
      numBtnUpdateDisplay(3);
      break;
    case "4":
      numBtnUpdateDisplay(4);
      break;
    case "5":
      numBtnUpdateDisplay(5);
      break;
    case "6":
      numBtnUpdateDisplay(6);
      break;
    case "7":
      numBtnUpdateDisplay(7);
      break;
    case "8":
      numBtnUpdateDisplay(8);
      break;
    case "9":
      numBtnUpdateDisplay(9);
      break;
    case "+":
      operatorUpdateDisplay("+");
      break;
  }
}

function numBtnUpdateDisplay(value) {
  if (total[0] === 0) {
    total.pop();
    total.push(value);
    displayCurrent.innerHTML = `<p><b>${total.join("")}</b></p>`;
    return;
  }
  total.push(value);
  displayCurrent.innerHTML = `<p><b>${total.join("")}</b></p>`;
}

function operatorUpdateDisplay(value) {
  leftOperand = Number(total.join(""));
  currentoperator = value;
  console.log(currentoperator);
  displayOperation.innerHTML = `<p><b>${total.join(
    ""
  )} ${currentoperator}</b></p>`;
  total = [0];
}

function clearDisplay() {
  total = [0];
  displayOperation.innerHTML = `<p><b></b></p>`;
  displayCurrent.innerHTML = `<p><b>${total.join("")}</b></p>`;
}
