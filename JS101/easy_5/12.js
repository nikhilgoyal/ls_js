const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

function afterMidnight(time) {
  let [hours, minutes] = time.split(":").map((el) => Number(el));
  return (hours * MINUTES_IN_HOUR + minutes) % MINUTES_IN_DAY;
}

function beforeMidnight(time) {
  let deltaminutes = MINUTES_IN_DAY - afterMidnight(time);
  return deltaminutes === MINUTES_IN_DAY ? 0 : deltaminutes;
}
