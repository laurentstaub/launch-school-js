function fridayThe13ths(year) {
  const UNLUCKY = 13;
  const FRIDAY = 5;
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return months.reduce((acc, month) => {
    let dayOf13 = new Date(year, month, UNLUCKY).getDay();
    if (dayOf13 === FRIDAY) return acc + 1;
    return acc;
  }, 0);
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2