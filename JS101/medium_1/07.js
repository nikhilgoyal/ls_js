fibonacci(1); // 1
fibonacci(2); // 2
fibonacci(3); // 3
fibonacci(50); // 12586269025
fibonacci(75); // 2111485077978050

function fibonacci(nth) {
  let result = [1, 1];
  for (let idx = 3; idx <= nth; idx++) {
    result = [result[1], result[0] + result[1]];
  }
  console.log(result[1]);
}
