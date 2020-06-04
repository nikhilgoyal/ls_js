// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

let readline = require("readline-sync");

let age = readline.question("What is your age? ");
let retireAge = readline.question("At what age would you like to retire? ");

let currentYear = new Date().getFullYear();
let yearsToWork = retireAge - age;

console.log(
  `It's ${currentYear}. You will retire in ${currentYear + yearsToWork}`
);
console.log(`You have only ${yearsToWork} years of work to go!`);
