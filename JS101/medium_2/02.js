console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"

function triangle(a, b, c) {
  let perimeter = a + b + c;
  let longest = Math.max(a, b, c);
  let smallest = Math.min(a, b, c);
  let middle = perimeter - longest - smallest;

  if (!isValid(smallest, middle, longest)) return "invalid";

  return getType(a, b, c);
}

function isValid(smallest, middle, longest) {
  return smallest > 0 && smallest + middle > longest;
}

function getType(a, b, c) {
  if (a === b && b === c) return "equilateral";
  if (a === b || b === c || a === c) return "isoceles";
  return "scalene";
}
