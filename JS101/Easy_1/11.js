// determine ASCII values
// Test cases
console.log(asciiValue("Four score")); // 984
console.log(asciiValue("Launch School")); // 1251
console.log(asciiValue("a")); // 97
console.log(asciiValue("")); // 0

function asciiValue(sentence) {
  let letters = sentence.split("");
  let sum = 0;
  letters.forEach((el) => {
    sum += el.charCodeAt(0);
  });
  return sum;
}
