const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

function trailingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function timeOfDay(givenMinutes) {
  if (givenMinutes < 0) {
    givenMinutes = (givenMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    givenMinutes = givenMinutes % MINUTES_PER_DAY;
  }
  let hours = trailingZero(Math.floor(givenMinutes / MINUTES_PER_HOUR));
  let minutes = trailingZero(givenMinutes % MINUTES_PER_HOUR);
  return `${hours}:${minutes}`;
}
