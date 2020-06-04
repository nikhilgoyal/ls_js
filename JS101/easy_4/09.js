//wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
//wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
wordSizes(""); // {}

function wordSizes(string) {
  string = string.replace(/[^a-zA-Z0-9_ ]/g, "");
  let res = {};
  let nos = string.split(" ").map((el) => el.length);
  nos.forEach((el) => {
    res[el] = res[el] || 0;
    res[el] += 1;
  });
  return res;
}
