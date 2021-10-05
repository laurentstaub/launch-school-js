function sum(number) {
  return number
    .toString()
    .split('')
    .reduce((acc, current) => acc + parseInt(current), 0);
}