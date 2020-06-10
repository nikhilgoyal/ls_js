letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
//letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
//letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
//letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };
  string.split("").forEach((el) => {
    if (el.match(/[a-z]/g)) {
      result.lowercase += 1;
    } else if (el.match(/[A-Z]/g)) {
      result.uppercase += 1;
    } else if (el.match(/[0-9+-\s]/g)) {
      result.neither += 1;
    }
  });
  console.log(result);
}
