function staggeredCase(string, countNonAlpha = false) {
  let upper = false;

  return string
    .split('')
    .map((char) => {
      if (!countNonAlpha && !char.match(/[a-z]/i)) return char;
      upper = !upper;
      return upper === true ? char.toUpperCase() : char.toLowerCase();
    })
    .join('');
}

console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("ALL CAPS"));
console.log(staggeredCase("ALL CAPS", true));
console.log(
  staggeredCase("ignore 77 the 444 numbers")
);
console.log(staggeredCase('ignore 77 the 444 numbers', true));   // "IgNoRe 77 ThE 4444 nUmBeRs"