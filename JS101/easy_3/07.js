console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676

function twice(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  console.log(center);
  if (stringNumber.substring(0, center) === stringNumber.substring(center)) {
    return number;
  } else {
    return number * 2;
  }
}
