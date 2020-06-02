// calculate the area of the room
// input length and breadth in meters - input as string -> convert to Number
// output - area in both sq meter and sq feet - Number

let readLine = require("readline-sync");

let sq_to_feet = 10.7639;

let length = parseInt(
  readLine.question("Enter the length of the room in meters:"),
  10
);

let width = parseInt(
  readLine.question("Enter the width of the room in meters:"),
  10
);

let areaInMeters = length * width;

let areaInfeet = areaInMeters * sq_to_feet;

console.log(`Area in meters: ${areaInMeters}`);
console.log(`Area in meters: ${areaInfeet}`);
