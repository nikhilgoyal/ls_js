//Write a program that will ask for user's name.
//The program will then greet the user.
//If the user writes "name!" then the computer yells back to the user.

let readline = require("readline-sync");

let name = readline.question("What is your name");

if (name.substr(-1) === "!") {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}
