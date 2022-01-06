/*
Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

Input: number
Output: number

In each month, check if the 13th falls a Friday
*/

function fridayThe13ths(year) {
  let count = 0;

  for (let month = 1; month <= 12; month += 1) {
    let dayThirteen = new Date(year + "-" + month + "-" + "13");
    if (dayThirteen.getDay() === 5) count += 1;
  }

  return count;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2