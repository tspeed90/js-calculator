function parseInput(stringToCalculate) {
  stringToCalculate = stringToCalculate.replace(/(\d)[-]/g, '$1+-');
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
        tokens.push(parseFloat(nextToken, 10));
        tokens.push(character);
        nextToken = "";
        nextTokenType = null;
      }
    }
  }
  if (isDigit(nextToken)) {
    tokens.push(parseFloat(nextToken, 10));
  }
  
  while(isOperator(tokens[tokens.length -1])) {
    tokens.pop();
  }
  return tokens;
}

function evaluateTokens(tokens) {
  for (let i = 1; i < tokens.length; i++) {
    if (tokens[i] === '*') {
      tokens[i-1] *= tokens[i + 1];
      tokens.splice(i, 2); 
      i--;
    } else if (tokens[i] === '/') {
      tokens[i-1] /= tokens[i + 1];
      tokens.splice(i, 2);
      i--;
    }
  }
  let accumulator = tokens[0];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === '+') {
      accumulator += tokens[i + 1];
    }
  }
  return accumulator;
}
  
function isDigit(character) {
  if (/[0-9.-]/.test(character)) {
    return true;
  } else {
    return false;
  }
}

function isOperator(character) {
  if (character === "+" || character === "*" || character === "/") {
    return true;
  } else {
    return false;
  }
}
