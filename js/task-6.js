"use strict";

let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  } else {
    let numbersLength = numbers.push(Number(input));
  }
}
if (numbers.length !== 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total = total + numbers[i];
  }
}
console.log(`Общая сумма чисел равна ${total}`);
