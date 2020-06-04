// degree to degree, minutes and seconds

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"

function dms(degree) {
  let d = Math.floor(degree);
  let m = padZero(Math.floor((degree - d) * 60));
  let s = padZero(Math.floor((degree - d - m / 60) * 3600));
  return `${d}\u00B0${m}'${s}"`;
}

function padZero(num) {
  let nums = String(num);
  return nums.length < 2 ? 0 + nums : nums;
}
