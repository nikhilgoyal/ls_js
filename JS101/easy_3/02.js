//+--------------------------------------------+
//|                                            |
//| To boldly go where no one has gone before. |
//|                                            |
//+--------------------------------------------+

logInBox("To boldly go where no one has gone before.");

function logInBox(string) {
  let stringLength = string.length;
  console.log(`+${"-".repeat(stringLength + 2)}+`);
  console.log(`|${"\xa0".repeat(stringLength + 2)}|`);
  console.log(`|\xa0${string}\xa0|`);
  console.log(`|${"\xa0".repeat(stringLength + 2)}|`);
  console.log(`+${"-".repeat(stringLength + 2)}+`);
}
