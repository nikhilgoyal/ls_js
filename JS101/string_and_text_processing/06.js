staggeredCase("I Love Launch School!"); // "I LoVe lAuNcH ScHoOl!"
//staggeredCase("ALL_CAPS"); // "AlL_CaPs"
//staggeredCase("ignore 77 the 444 numbers"); // "IgNoRe 77 ThE 444 NuMbErS"

function staggeredCase(string) {
  return string
    .split("")
    .map((el, idx) => {
      if (idx % 2 === 0) {
        return el.toUpperCase();
      } else {
        return el.toLowerCase();
      }
    })
    .join("");
}
