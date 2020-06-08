console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""

function doubleConsonants(string) {
  return string
    .split("")
    .map((el) => (el.match(/aeiou0-9/gi) ? el : el + el))
    .join("");
}
