// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

let readline = require("readline-sync");

let choices = [];
choices.push(parseInt(readline.question("Enter the 1st number: ")));
choices.push(parseInt(readline.question("Enter the 2nd number: ")));
choices.push(parseInt(readline.question("Enter the 3rd number: ")));
choices.push(parseInt(readline.question("Enter the 4th number: ")));
choices.push(parseInt(readline.question("Enter the 5th number: ")));
let lastNum = parseInt(readline.question("Enter the 5th number: "));

if (choices.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${choices.join(",")}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${choices.join(",")}.`);
}
