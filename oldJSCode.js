// Declaring global variables
let total = 0;
let display = document.querySelector("#display");
const numBtns = document.querySelectorAll(".numericalBtn");
const cBtn = document.querySelector("#cBtn");

// Initial statements to be run to set the initial display and the events for the buttons
display.innerHTML = `<p><b>${total}</b></p>`;
cBtn.addEventListener("click", () => {
  total = 0;
  updateDisplay();
});
for (let numBtn of numBtns) {
  numBtn.addEventListener("click", function () {
    updateDisplay(this);
  });
}

// A function to update the user display
function updateDisplay(btn) {
  if (total === 0 && btn.innerText === 0) {
    return;
  }
  if (total === 0) {
    total = btn.innerText;
  }
  total += btn.innerText;
  display = total.toString();
}

if (total === 0 && this.innerText === "0") {
  return;
}
if (total === 0) {
  total = this.innerText;
  updateDisplay();
}
total += this.innerText;
updateDisplay();

display.innerHTML = `<p><b>${total}</b></p>`;
