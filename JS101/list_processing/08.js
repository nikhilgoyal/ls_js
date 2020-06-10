buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(arr) {
  let result = [];
  arr.forEach((el) => {
    for (let i = 0; i < el[1]; i++) {
      result.push(el[0]);
    }
  });

  console.log(result);
}
