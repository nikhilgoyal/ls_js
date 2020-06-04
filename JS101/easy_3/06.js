// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

let readline = require("readline-sync");

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter an adjective: ");
let adverb = readline.question("Enter an adverb: ");

let line1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
let line2 = `The ${adjective} ${noun} ${verb} ${adverb} over the lazy dog.`;
let line3 = `The ${noun} ${adverb} ${verb} up ${adjective} Joe's turtle.`;

console.log(line1);
console.log(line2);
console.log(line3);
