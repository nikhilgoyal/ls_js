console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

function greetings(arr, obj) {
  let name = arr.join(" ");
  let work = obj.title + " " + obj.occupation;
  return `Hello, ${name}, Nice to have a ${work} around.`;
  // the entire function can be returned in one line
  // meaning the calculations can be done in interpolation
}
