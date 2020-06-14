let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

function rotate90(matrix) {
  let result = [];
  let innerArr;
  let row = matrix[0].length;
  let column = matrix.length;
  for (let i = 0; i < row; i++) {
    innerArr = [];
    for (let y = 0; y < column; y++) {
      innerArr.push(matrix[y][i]);
    }
    innerArr = innerArr.reverse();
    result.push(innerArr);
  }
  return result;
}
