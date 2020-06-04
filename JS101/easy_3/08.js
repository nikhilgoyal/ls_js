// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"

function getGrade(a, b, c) {
  let average = (a + b + c) / 3;

  switch (true) {
    case average >= 90 && average <= 100:
      return "A";
    case average >= 80 && average < 90:
      return "B";
    case average >= 70 && average < 80:
      return "C";
    case average >= 60 && average < 70:
      return "D";
    default:
      score = "F";
  }
}
