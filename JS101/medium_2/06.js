sumSquareDifference(3); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10); // 2640
sumSquareDifference(1); // 0
sumSquareDifference(100); // 25164150

function sumSquareDifference(number) {
  return sqOfsum(number) - sumOfSq(number);
}

function sqOfsum(number) {
  let sum = Array.from(Array(number + 1).keys()).reduce((a, c) => a + c);
  return sum * sum;
}

function sumOfSq(number) {
  let sum = [...Array(number + 1).keys()].reduce((a, c) => a + c * c);
  return sum;
}
