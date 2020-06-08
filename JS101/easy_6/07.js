console.log(swapName("Joe Roberts")); // "Roberts, Joe"

function swapName(name) {
  let yo = name.split(" ");
  return `${yo[1]}, ${yo[0]}`;
}
