union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]

function union(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let res = [...new Set(arr)];
  console.log(res);
}
