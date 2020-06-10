sum(23); // 5
sum(496); // 19
sum(123456789); // 45

function sum(number) {
  return String(number)
    .split("")
    .map((el) => +el)
    .reduce((a, c) => a + c, 0);
}
