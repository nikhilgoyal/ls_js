rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917

function rotateRightmostDigits(number, location) {
  let numStr = String(number);
  let first = numStr.slice(0, numStr.length - location);
  let last = numStr.substring(numStr.length - location).split("");
  last = last.slice(1).concat(last[0]).join("");
  return +(first + last);
}
