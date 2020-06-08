multiplicativeAverage([3, 5]); // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"

function multiplicativeAverage(arr) {
  let product = arr.reduce((a, c) => a * c, 1) / arr.length;

  return product.toFixed(3);
}
