//==> Enter the first number:
//23
//==> Enter the second number:
//17
//==> 23 + 17 = 40
//==> 23 - 17 = 6
//==> 23 * 17 = 391
//==> 23 / 17 = 1
//==> 23 % 17 = 6
//==> 23 ** 17 = 141050039560662968926103

let readline = require("readline-sync");

let firstNumber = parseInt(readline.question("Enter the first number: "));
let secondNumber = parseInt(readline.question("Enter the second number: "));

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`
);
