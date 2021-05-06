// Initializing the variables and getting all buttons
// let displayNum = 0;
// let nums = [];
// let currentoperator = "";
// let leftOperand;
// let rightOperand;
let displayCurrent = document.querySelector("#displayCurrent");

//Adding a click event listener for all buttons
let btns = document.querySelectorAll(".button");
for (let btn of btns) {
  btn.addEventListener("click", function () {
    clickedBtnId(btn);
  });
}

// Function for updating the display depending on which button is pressed
function clickedBtnId(btn) {
  switch (btn.innerText) {
    case "C":
      clearDisplay();
      break;
    case "0":
      numUpdateDisplay(0);
      console.log(btn.innerText);
      break;
    case "1":
      numUpdateDisplay(1);
      break;
    case "2":
      numUpdateDisplay(2);
      break;
    case "3":
      numUpdateDisplay(3);
      break;
    case "4":
      numUpdateDisplay(4);
      break;
    case "5":
      numUpdateDisplay(5);
      break;
    case "6":
      numUpdateDisplay(6);
      break;
    case "7":
      numUpdateDisplay(7);
      break;
    case "8":
      numUpdateDisplay(8);
      break;
    case "9":
      numUpdateDisplay(9);
      break;
    case "+":
      operatorUpdateDisplay("+");
      break;
  }
}

function numUpdateDisplay(value) {
  if (displayCurrent.innerText === "0") {
    displayCurrent.innerText = "";
    displayCurrent.innerText += value.toString();
  } else {
    displayCurrent.innerText += value.toString();
  }
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
  displayCurrent.innerText = "0";
}
