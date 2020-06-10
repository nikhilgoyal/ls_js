console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"

function triangle(a, b, c) {
  let sum = a + b + c;
  if (!isValid(a, b, c)) return "inValid";
  if (a < 90 && b < 90 && c < 90) return "acute";
  if (a === 90 || b === 90 || c === 90) return "right";
  return "obtuse";
}

function isValid(a, b, c) {
  return a + b + c === 180 && a > 0 && b > 0 && c > 0;
}

// honestly this code is so unreadable
