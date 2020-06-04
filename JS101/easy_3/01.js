// remove duplicates

crunch("ddaaiillyy ddoouubbllee"); // "daily double"
crunch("4444abcabccba"); // "4abcabcba"
crunch("ggggggggggggggg"); // "g"
crunch("a"); // "a"
crunch(""); // ""

function crunch(string) {
  //let letters = string.split("");
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      result += string[i];
    }
  }
  console.log(result);
  return result;
}
