'use strict';

function leftJoin(hashOne, hashTwo) {
  for (let i = 0; i < hashOne.length; i++) {
    let keyOne = Object.keys(hashOne[i][0])[0];
    let temp = { value: hashOne[i][0][keyOne] };
    for (let j = 0; j < hashTwo.length; j++) {
      let keyTwo = Object.keys(hashTwo[j][0])[0];
      if (keyTwo === keyOne) {
        hashOne[i][0][keyOne] = [...hashOne[i][0][keyOne], hashTwo[j][0][keyTwo][0]];
        temp.value = 'true';
      }
    }
    if (temp.value !== 'true') {
      hashOne[i][0][keyOne] = [...hashOne[i][0][keyOne], null];
    }
  }
  return hashOne;
}


module.exports = leftJoin;
