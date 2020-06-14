const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

function transpose(matrix) {
  let result = [];
  let innerArr;
  for (let i = 0; i < matrix.length; i++) {
    innerArr = [];
    for (let y = 0; y < matrix.length; y++) {
      innerArr.push(matrix[i][y]);
    }
    result.push(innerArr);
  }
  return result;
}
