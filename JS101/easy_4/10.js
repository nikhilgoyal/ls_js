// swap first and last letter

console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"

function swap(string) {
  let swapWords = string.split(" ").map((el) => {
    return el.length === 1 ? el : el[el.length - 1] + el.slice(1, -1) + el[0];
  });
  return swapWords;
}
