const NUMBER_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit(string) {
  Object.keys(NUMBER_WORDS).forEach((words) => {
    let regex = new RegExp("\\b" + words + "\\b", "g");
    string = string.replace(regex, NUMBER_WORDS[words]);
  });

  return string;
}

wordToDigit("Please call me at five five five one two three four. Thanks.");
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit("The weight is done.")); // "The weight is done."
