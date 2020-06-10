fridayThe13ths(1986); // 1
fridayThe13ths(2015); // 3
fridayThe13ths(2017); // 2

function fridayThe13ths(year) {
  let result = [];
  for (let i = 1; i <= 12; i++) {
    result.push(new Date(year, i, 13));
  }
  let yo = result.reduce((count, day) => {
    return day.getDay() === 5 ? count + 1 : count;
  }, 0);

  console.log(yo);
}
