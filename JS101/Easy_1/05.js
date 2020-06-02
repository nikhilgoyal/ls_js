// Tip Calculator
// input
//What is the bill? 200
//What is the tip percentage? 15
// output
//The tip is $30.00
//The total is $230.00

let readLine = require("readline-sync");

let bill = parseInt(readLine.question("What is the bill?"), 10);
let tipPercentage = parseInt(
  readLine.question("What is the tip percentage?"),
  10
);

let totalTip = (bill * tipPercentage) / 100;
let total = bill + totalTip;

console.log(`The total tip is $${totalTip}`);
console.log(`The total is $${total}`);
