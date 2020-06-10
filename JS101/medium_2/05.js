console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543200)); // 9876543201
//console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."

function featured(number) {
  let res = number + 1;
  while (true) {
    if (isOdd(res) && multipleOfSeven(res)) {
      if (isUniq(res)) {
        return res;
      } else {
        res += 14;
      }
    } else {
      res += 1;
    }
  }
}

function isOdd(number) {
  return number % 2 === 1;
}

function multipleOfSeven(number) {
  return number % 7 === 0;
}

function isUniq(number) {
  let numLen = String(number);
  return numLen.length === [...new Set(numLen)].length;
}

console.log(isUniq(3456));
