console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map(function (char) {
      if (char.match(/[a-z]/i)) {
        let newChar;
        if (needUpper) {
          newChar = char.toUpperCase();
        } else {
          newChar = char.toLowerCase();
        }

        needUpper = !needUpper;
        return newChar;
      } else {
        return char;
      }
    })
    .join("");
}
