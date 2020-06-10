//palindromes("abcde"); // []
palindromes("madam"); // [ "madam", "ada" ]
palindromes("hello-madam-did-madam-goodbye");
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes("knitting cassettes"));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

function substrings(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let eachword = string.substr(i, string.length);
    for (let y = 1; y <= eachword.length; y++) {
      result.push(eachword.substr(0, y));
    }
  }
  return result;
}

function palindromes(string) {
  let substring = substrings(string);
  let yo = substring.filter((word) => {
    return word.length > 1 && word === word.split("").reverse().join("");
  });
  return yo;
}
