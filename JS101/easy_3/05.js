console.log(triangle(5));

//    *
//   **
//  ***
// ****
//*****

function triangle(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    let blanks = " ".repeat(num - i);
    let stars = "*".repeat(i);
    result += blanks + stars + "\n";
  }
  return result;
}
