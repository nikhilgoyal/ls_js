console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]

function halvsies(arr) {
  let center = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    let firsthalf = arr.slice(0, center);
    let secondhalf = arr.slice(center);
    //res.push(firsthalf, secondhalf);
    return [firsthalf, secondhalf];
  } else {
    let firsthalf = arr.slice(0, center + 1);
    let secondhalf = arr.slice(center + 1);
    return [firsthalf, secondhalf];
  }
}
