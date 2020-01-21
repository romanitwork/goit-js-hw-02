"use strict";

const findLongestWord = function(string) {
  const numberOfWord = string.split(" ");
  let longestWord = numberOfWord[0];
  for (let i = 1; i < numberOfWord.length; i++) {
    if (longestWord.length < numberOfWord.length[i]) {
      longestWord = numberOfWord[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
