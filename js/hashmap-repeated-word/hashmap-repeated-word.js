'use strict';

const repeatedWord = (str) => {
  let hash = {};
  let newString = str.replace(/,/g, '').trim();
  let array = newString.split(' ');
  for (let i = 0; i < array.length; i++) {
    if (hash[array[i]] || hash[array[i]] === 0) {
      return array[i];
    }
    hash[array[i].toLowerCase()] = i;
    console.log(hash);
  }
  return null;
};

module.exports = repeatedWord;