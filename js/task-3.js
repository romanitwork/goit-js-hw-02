"use strict";

const findLongestWord = function(string) {
  const numberOfWord = string.split(" ");
  let longestWordNummer = 0;
  let longestWord;
  for (let i = 0; i < numberOfWord.length; i++) {
    if (numberOfWord[i].length > longestWordNummer) {
      longestWordNummer = numberOfWord[i].length;
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
