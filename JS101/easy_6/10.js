reverseWords("Professional"); // "lanoisseforP"
reverseWords("Walk around the block"); // "Walk dnuora the kcolb"
reverseWords("Launch School"); // "hcnuaL loohcS"

function reverseWords(string) {
  return string
    .split(" ")
    .map((el) => (el.length > 5 ? el.split("").reverse().join("") : el));
}
