/*
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.
*/
const the13th = 13;

function fridayThe13ths(year) {
  let counter = 0;

  for (let month = 0; month <= 11; month += 1) {
    let date13th = new Date(year, month, the13th);
    if (date13th.getDay() === 5) counter += 1;
  }

  return counter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2