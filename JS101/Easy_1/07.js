// problem in short
// out of the two string args - figure out the shorter one and then do short + long + short
// solution
// using if else figure out the shorter and then return concated result
// gotcha - ignoring if the string are the same length

// test case
console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"

function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}
