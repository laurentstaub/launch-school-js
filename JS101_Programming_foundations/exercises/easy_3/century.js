/*
Write a function that takes a year as input and returns the century. The return
value should be a string that begins with the century number, and ends with
'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000
comprise the 20th century.


PROBLEM
-------
Input: number (year)
Output: string (number)

EXAMPLES
--------
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

DATA STRUCTURE
--------------
strings and numbers

ALGORITHM
---------
We need to divide the number and round it up
We turn the nuùber to a string
Then if the last character is a:
  "1", we append "st"
  "2", we append "nd"
  "3", we append "rd"
  else, we append "th"

CODE
----
*/

function century(year) {
  let century = String(Math.ceil(year / 100));
  let lastCharacter = century[century.length - 1];
  let twoLastChar = century[century.length - 2]
                          + century[century.length - 1];

  if (twoLastChar === "11" || twoLastChar === "12" || twoLastChar === "13") {
    return (century += "th");
  } else {
    switch (lastCharacter) {
      case "1": return (century += "st");
      case "2": return (century += "nd");
      case "3": return (century += "rd");
      default: return (century += "th");
    }
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

