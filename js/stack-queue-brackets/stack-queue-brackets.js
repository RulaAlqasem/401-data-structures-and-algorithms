let validateBrackets = function (inputString) {
  let stack = [];
  let prackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(' || inputString[i] === '{' || inputString[i] === '[') {
      stack.push(inputString[i]);
    }
    else if ((inputString[i] >= 'a' && inputString[i] <= 'z') || (inputString[i] >= 'A' && inputString[i] <= 'Z') || (inputString[i] === ' ') || (inputString[i] === '-')) {
      console.log('nth')
    }
    else {
      let last = stack.pop();
      if (inputString[i] !== prackets[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

module.exports = validateBrackets;