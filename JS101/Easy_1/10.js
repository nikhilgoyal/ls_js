// sum of multiples of 3 and 5

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(20)); // 98
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168

function multisum(number) {
  let multiples = [];
  let givenNumbers = [3, 5];

  givenNumbers.forEach((el) => {
    let mo = el;
    while (mo <= number) {
      multiples.push(mo);
      mo += el;
    }
  });
  multiples = [...new Set(multiples)];
  return multiples.reduce((a, c) => a + c, 0);
}
