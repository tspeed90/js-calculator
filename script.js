let stringToCalculate = "0";
displayCalculation();
function appendInputCharacter(e) {
  if (stringToCalculate === "0") {
    stringToCalculate = "";
  }
  stringToCalculate += e.target.textContent;
  displayCalculation();
}

function displayCalculation() {
  document.querySelector('.display').textContent = stringToCalculate;
}

function removeFinalCharacter() {
  stringToCalculate = stringToCalculate.substring(0, stringToCalculate.length -1);
  if (stringToCalculate.length < 1) {
    stringToCalculate = "0";
  }
  displayCalculation();
}

let buttons = document.querySelectorAll(".number, .operator");

document.addEventListener('keypress', function(e) {
  if (stringToCalculate === "0") {
    stringToCalculate = "";
  }
  if (/[0-9+\-*/=.]/.test(e.key)) {
    stringToCalculate += e.key;
    displayCalculation();
    console.log(stringToCalculate);
  }
});

document.querySelector('.clear').addEventListener('click', function() {
  stringToCalculate = "0";
  displayCalculation();
});

document.querySelector('.delete').addEventListener('click', removeFinalCharacter);

document.addEventListener('keydown', function(e) {
  if (e.key === "Backspace" || e.keyCode === 8) {
    removeFinalCharacter();
  }
});

for (let button of buttons) {
  button.addEventListener('click', appendInputCharacter);
}
