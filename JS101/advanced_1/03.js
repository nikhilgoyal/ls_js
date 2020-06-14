const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1],
];

let newMatrix = transpose(matrix);
console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]

transpose([[1, 2, 3, 4]]); // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]); // [[1, 2, 3, 4]]
transpose([[1]]); // [[1]]

transpose([
  [1, 2, 3, 4, 5],
  [4, 3, 2, 1, 0],
  [3, 7, 8, 6, 2],
]);
[
  [1, 4, 3],
  [2, 3, 7],
  [3, 2, 8],
  [4, 1, 6],
  [5, 0, 2],
];

function transpose(matrix) {
  let result = [];
  let innerArr;
  let row = matrix[0].length;
  let column = matrix.length;
  for (let y = 0; y < row; y++) {
    innerArr = [];
    for (let i = 0; i < column; i++) {
      innerArr.push(matrix[i][y]);
    }
    result.push(innerArr);
  }
  return result;
}
