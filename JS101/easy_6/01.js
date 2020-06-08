repeater("Hello"); // "HHeelllloo"
repeater("Good job!"); // "GGoooodd  jjoobb!!"
repeater(""); // ""

function repeater(str) {
  return str
    .split("")
    .map((el) => el + el)
    .join("");
}
