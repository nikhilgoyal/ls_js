console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

function penultimate(str) {
  let words = str.split(" ");
  return words[words.length - 2];
}
