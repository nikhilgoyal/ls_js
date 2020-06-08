sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]

function sequence(number) {
  let result = [];
  for (let i = number; i > 0; i--) {
    result.push(i);
  }
  return result.reverse();
}
