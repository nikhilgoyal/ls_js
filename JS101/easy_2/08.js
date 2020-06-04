console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

function oddities(arr) {
  let result = [];
  let i = 0;
  arr.forEach((el) => {
    if (arr[i] !== undefined) {
      result.push(arr[i]);
    }
    i += 2;
  });

  return result;
}
