centerOf("I Love JavaScript"); // "a"
centerOf("Launch School"); // " "
centerOf("Launch"); // "un"
centerOf("Launchschool"); // "hs"
centerOf("x"); // "x"

function centerOf(string) {
  let center = string.length / 2;
  if (string.length % 2 === 0) {
    center = `${string[center - 1]}${string[center]}`;
  } else {
    center = Math.floor(center);
    center = string[center];
  }

  console.log(center);
}
