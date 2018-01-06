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
//TODO: add to keyboard event listener AND to click event listener
function calculate() {
  let operators = /[+\-/*]/;
  let values = stringToCalculate.split(operators);
  stringToCalculate = values.reduce((sum, value) => {
      value = parseInt(value, 10);
      return sum + value;
  }, 0);
  stringToCalculate = stringToCalculate.toString();
}

let buttons = document.querySelectorAll(".number, .operator");

document.addEventListener('keyup', function(e) {
  if (e.key === "Backspace" || e.keyCode === 8) {
    removeFinalCharacter();
  } else if (e.key === "=") {
    console.log(stringToCalculate)
    calculate();
  } else if (/[0-9+\-*/=.]/.test(e.key)) {
    if (stringToCalculate === "0") {
      stringToCalculate = "";
    }
    stringToCalculate += e.key;
    console.log(stringToCalculate);
  }
  displayCalculation();
});

document.querySelector('.clear').addEventListener('click', function() {
  stringToCalculate = "0";
  displayCalculation();
});

document.querySelector('.delete').addEventListener('click', removeFinalCharacter);

for (let button of buttons) {
  button.addEventListener('click', appendInputCharacter);
}

document.querySelector('.equals').addEventListener('click', function() {
  calculate();
  displayCalculation();
});
