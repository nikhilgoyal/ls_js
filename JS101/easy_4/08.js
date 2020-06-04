//Write a function that takes a string consisting of zero or more space separated words,
//and returns an object that shows the number of words of different sizes.

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(""); // {}

function wordSizes(string) {
  let res = {};
  let nos = string.split(" ").map((el) => el.length);
  nos.forEach((el) => {
    if (!res[el]) {
      res[el] = 0;
    }
    res[el] += 1;
  });
  return res;
}
