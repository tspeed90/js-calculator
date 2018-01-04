let stringToCalculate = "";
function appendInputCharacter(e) {
  stringToCalculate += e.target.textContent;
  displayCalculation();
}

function displayCalculation() {
  document.querySelector('.display').textContent = stringToCalculate;
}

let buttons = document.querySelectorAll(".number, .operator");

document.addEventListener('keypress', function(e) {
  if (/[0-9+\-*/=.]/.test(e.key)) {
    stringToCalculate += e.key;
    console.log(stringToCalculate);
  }
});

for (let button of buttons) {
  button.addEventListener('click', appendInputCharacter);
}
