// Sum or Product of Consecutive Integers
// Test case
//Please enter an integer greater than 0: 5
//Enter "s" to compute the sum, or "p" to compute the product. s
//The sum of the integers between 1 and 5 is 15.
// ---------
//Please enter an integer greater than 0: 6
//Enter "s" to compute the sum, or "p" to compute the product. p
//The product of the integers between 1 and 6 is 720.

let readLine = require("readline-sync");
let numChoice = parseInt(
  readLine.question("Please enter an integer greater than 0:"),
  10
);

let choice = readLine
  .question('Enter "s" to compute the sum, or "p" to compute the product.')
  .toLowerCase();

function sumOf(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

function productOf(number) {
  let product = 1;
  for (let i = 1; i <= number; i++) {
    product *= i;
  }
  return product;
}

if (choice === "s") {
  let sum = sumOf(numChoice);
  console.log(`The sum of the integers between 1 and ${numChoice} is ${sum}.`);
} else if (choice === "p") {
  let product = productOf(numChoice);
  console.log(
    `The product of the integers between 1 and ${numChoice} is ${product}.`
  );
} else {
  console.log("wrong choice");
}
