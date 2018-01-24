function calculate() {
  let tokens = parseInput();
  stringToCalculate = evaluateTokens(tokens) + "";
  displayCalculation();
}

function parseInput() {
  let tokens = [];
  let nextToken = "";
  let nextTokenType = null;
  for (let i = 0; i < stringToCalculate.length; i++) {
    let character = stringToCalculate[i];
    if (nextTokenType === null) {
      if (isDigit(character)) {
        nextToken += character;
        nextTokenType = "number";
      } else {
        throw "Expected a number";
      }
    } else if (nextTokenType === "number") {
      if (isDigit(character)) {
        nextToken += character;
      } else if (isOperator(character)) {
        tokens.push(parseInt(nextToken, 10));
        tokens.push(character);
        nextToken = "";
        nextTokenType = null;
      }
    }
  }
  tokens.push(parseInt(nextToken, 10));
  return tokens;
}

function evaluateTokens(tokens) {
  let accumulator = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    if (tokens[i] === '+') {
      accumulator += tokens[i + 1];
    }
  }
  return accumulator;
}
  
function isDigit(character) {
  if (/[0-9]/.test(character)) {
    return true;
  } else {
    return false;
  }
}

function isOperator(character) {
  if (character === "+") {
    return true;
  } else {
    return false;
  }
}
