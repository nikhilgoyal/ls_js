substringsAtStart("abc"); // ["a", "ab", "abc"]
substringsAtStart("a"); // ["a"]
substringsAtStart("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function substringsAtStart(string) {
  let result = [];
  let i = 1;
  while (i <= string.length) {
    result.push(string.substr(0, i));
    i++;
  }
  console.log(result);
  return result;
}
