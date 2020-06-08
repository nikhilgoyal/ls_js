console.log(digitList(12345)); // [1, 2, 3, 4, 5]
digitList(7); // [7]
console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
digitList(444); // [4, 4, 4]

function digitList(num) {
  let stringArr = num.toString().split("");
  return stringArr.map((el) => +el);
}
