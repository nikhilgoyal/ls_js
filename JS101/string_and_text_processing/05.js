swapCase("CamelCase"); // "cAMELcASE"
swapCase("Tonight on XYZ-TV"); // "tONIGHT ON xyz-tv"

function swapCase(string) {
  return string
    .split("")
    .map((el) => {
      if (el === el.toLowerCase()) {
        return el.toUpperCase();
      } else {
        return el.toLowerCase();
      }
    })
    .join("");
}
