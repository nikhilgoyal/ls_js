longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

function longestSentence(string) {
  let sentences = string
    .match(/\w.*?[.!?]/g)
    .sort((a, b) => b.split(" ").length - a.split(" ").length);
  let final = sentences[0];

  console.log(final);
  console.log(`The longest sentence has ${final.split(" ").length} words`);

  console.log(final);
}
