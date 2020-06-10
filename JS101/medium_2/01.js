letterPercentages("abCdef 123");
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef");
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123");
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

function letterPercentages(string) {
  let length = string.length;
  let lowercase = string.match(/[a-z]/g) ? string.match(/[a-z]/g).length : 0;
  let uppercase = string.match(/[A-Z]/g) ? string.match(/[A-Z]/g).length : 0;
  let neither = string.match(/[^a-z]/gi).length;

  let result = {
    lowercase: `${((lowercase / length) * 100).toFixed(2)}`,
    uppercase: `${((uppercase / length) * 100).toFixed(2)}`,
    neither: `${((neither / length) * 100).toFixed(2)}`,
  };
  console.log(result);
}
