/*
PROBLEM
Modify the function from the previous exercise so it ignores non-alphabetic
characters when determining whether it should uppercase or lowercase each
letter. The non-alphabetic characters should still be included in the return
value; they just don't count when toggling the desired case.

EXAMPLES
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
*/

function staggeredCase(string) {
  let caseSwitch = 'upper';

  return string
    .split('')
    .map((char) => {
      if (char.toUpperCase() === char.toLowerCase()) {
        return char;
      }
      else if (caseSwitch === 'upper') {
        caseSwitch = 'lower';
        return char.toUpperCase();
      }
      else if (caseSwitch === 'lower') {
        caseSwitch = 'upper';
        return char.toLowerCase();
      }
    })
    .join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));