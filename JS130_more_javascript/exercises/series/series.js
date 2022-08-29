"use strict";

/* Series

Write a program that will take a string of digits and return all the possible consecutive number series of a specified length in that string.

For example, the string "01234" has the following 3-digit series:

* 012
* 123
* 234

Likewise, here are the 4-digit series:

* 0123
* 1234

Finally, if you ask for a 6-digit series from a 5-digit string, you should throw an error.

Problem
- input number string
- output: nested array

Rules
- return all the possible consecutive number series based on the specified length
- each subarray element contains the number of digits equal to the number passed as an argument to the method

Examples
  test('test simple slices of one', () => {
    let series = new Series('01234');
    expect(series.slices(1)).toEqual([[0], [1], [2], [3], [4]]);
  });

Data Structure
  - input string
  - array
  - output nested array

Algorithm
- constructor() takes a string argument

BRUTE FORCE METHOD
"1234" in slices of 2
let result = []
when index + number > length stop iteration
slice 0, 2. => "12" => split => [ 1, 2 ] => push to array
slice 1, 3. => "23" => split => [ 2, 3 ] => push to array
return result

ORIGINAL METHOD
"1234" in slices of 2
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]


- slices() method
  - accept number to represent length of each subarray
  - init result array
  - iterate from 0 until `index` <= `length` - `number`
    - slice the string from index to `index` + `number`
    - split substrings into subarray and push it to array
  - return result array

  */

class Series {
  constructor(numberString) {
    this.numberString = numberString;
  }

  slices(number) {
    let result = [];

    if (this.numberString.length < number) throw new Error("Bad!");

    for (let index = 0; index <= this.numberString.length - number; index += 1) {
      let subArray = this.numberString
        .slice(index, index + number)
        .split("")
        .map(number => Number(number));
        
      result.push(subArray);
    }

    return result;
  }
}

module.exports = Series;