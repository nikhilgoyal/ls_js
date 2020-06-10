substrings("abcde");

// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

function substringsAtStart(string) {
  let result = [];
  let i = 1;
  while (i <= string.length) {
    result.push(string.substr(0, i));
    i++;
  }
  return result;
}

function substrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let eachstring = string.substr(i, string.length);
    result.push(substringsAtStart(eachstring));
  }
  console.log(result);
  return result;
}
