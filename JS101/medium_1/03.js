maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845

function rotateRightmostDigits(number, location) {
  let numStr = String(number);
  let first = numStr.slice(0, numStr.length - location);
  let last = numStr.substring(numStr.length - location).split("");
  last = last.slice(1).concat(last[0]).join("");
  return +(first + last);
}

function maxRotation(number) {
  let idx = String(number).length;
  while (idx > 0) {
    number = rotateRightmostDigits(number, idx);
    idx--;
  }
  console.log(number);
}
