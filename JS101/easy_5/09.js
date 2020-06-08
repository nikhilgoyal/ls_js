let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

function countOccurrences(vehicles) {
  let count = {};
  for (let i = 0; i < vehicles.length; i++) {
    if (count[vehicles[i]]) {
      count[vehicles[i]] += 1;
    } else {
      count[vehicles[i]] = 1;
    }
  }
  let entries = Object.entries(count);
  for (const [vehicle, count] of entries) {
    console.log(`${vehicle} => ${count}`);
  }
}

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
