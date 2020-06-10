sumOfSums([3, 5, 2]); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]); // 4
// sumOfSums([1, 2, 3, 4, 5]); // 35

// function sumOfSums(arr) {
//   let result = 0;
//   for (let i = 1; i <= arr.length; i++) {
//     result += arr.slice(0, i).reduce((a, c) => a + c, 0);
//   }
//   console.log(result);
// }

function sumOfSums(number) {
  let yo = number
    .map((_, idx) => number.slice(0, idx + 1).reduce((a, c) => a + c))
    .reduce((a, c) => a + c);

  console.log(yo);
}
