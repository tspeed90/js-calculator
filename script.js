let stringToCalculate = "";
function appendInputCharacter(e) {
  stringToCalculate += e.target.textContent;
  displayCalculation();
}

function displayCalculation() {
  document.querySelector('.display').textContent = stringToCalculate;
}

let buttons = document.querySelectorAll(".number, .operator");

for (let button of buttons) {
  button.addEventListener('click', appendInputCharacter);
}
