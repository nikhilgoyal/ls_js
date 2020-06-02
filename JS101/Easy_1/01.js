// input -> integer, can be positive, negative or zero
// output -> true if number is odd

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

// examples and test cases

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
