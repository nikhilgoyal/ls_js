multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  for (let value1 of arr1) {
    for (let value2 of arr2) {
      result.push(value1 * value2);
    }
  }
  return result.sort((a, b) => a - b);
}
