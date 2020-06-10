wordCap("four score and seven"); // "Four Score And Seven"
wordCap("the javaScript language"); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'

function wordCap(string) {
  return string
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.substr(1).toLowerCase())
    .join(" ");
}
