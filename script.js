let clearButton = document.querySelector('.clear');
let deleteButton = document.querySelector('.delete');
let equalsButton = document.querySelector('.equals');
let display = document.querySelector('.display');
let stringToCalculate = "0";
displayCalculation();

function appendInputCharacter(e) {
  if (stringToCalculate === "0") {
    stringToCalculate = "";
  }
  stringToCalculate += e.target.textContent.trim();
  displayCalculation();
}

function displayCalculation() {
  display.textContent = stringToCalculate;
}

function removeFinalCharacter() {
  stringToCalculate = stringToCalculate.substring(0, stringToCalculate.length -1);
  if (stringToCalculate.length < 1) {
    stringToCalculate = "0";
  }
  displayCalculation();
}

function calculate() {
  try {
    let tokens = parseInput(stringToCalculate);
    stringToCalculate = evaluateTokens(tokens) + "";
    displayCalculation();
  } catch(e) {
    display.style.border = "solid 2px red";
    throw e;
  }
}

function removeSelectedClass(e) {
  this.classList.remove('selected');
}

let buttons = document.querySelectorAll(".number, .operator");

document.addEventListener('keydown', function(e) {
  if (e.key === "Backspace" || e.keyCode === 8) {
    deleteButton.classList.add('selected');
    removeFinalCharacter(); 
  } else if (e.key === "=") {
    equalsButton.classList.add('selected');
    calculate();
  } else if (/^[0-9\-*\/=+.]$/.test(e.key)) {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent.trim() === e.key) {
        buttons[i].classList.add("selected");
      }
    }
    if (stringToCalculate === "0") {
      stringToCalculate = "";
    }
    stringToCalculate += e.key;
  }
  displayCalculation();
});

clearButton.addEventListener('click', function() {
  stringToCalculate = "0";
  displayCalculation();
  clearButton.classList.add('selected');
});
clearButton.addEventListener('transitionend', removeSelectedClass);

deleteButton.addEventListener('click', function() {
  removeFinalCharacter();
  deleteButton.classList.add('selected');
});
deleteButton.addEventListener('transitionend', removeSelectedClass);

for (let button of buttons) {
  button.addEventListener('click', function(e) {
    appendInputCharacter(e);
    button.classList.add('selected');
  });
  button.addEventListener('transitionend', removeSelectedClass);
}

equalsButton.addEventListener('click', function() {
  equalsButton.classList.add('selected');
  calculate();
});
equalsButton.addEventListener('transitionend', removeSelectedClass);
