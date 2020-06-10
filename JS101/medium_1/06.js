fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(5); // 5
fibonacci(1); // 144
console.log(fibonacci(50)); // 6765

function fibonacci(number) {
  if (number <= 2) return 1;
  return fibonacci(number - 1) + fibonacci(number - 2);
}
