// generate a random number between 20 and 120 (inclusive)
// Teddy is 69 years old!

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);
