// convert number to string

integerToString(4321); // "4321"
integerToString(0); // "0"
integerToString(5000); // "5000"
integerToString(1234567890); // "1234567890"

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function integerToString(number) {
  result = [];
  while (number > 0) {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    result.push(remainder);
  }
  return result.reverse().join("");
}
