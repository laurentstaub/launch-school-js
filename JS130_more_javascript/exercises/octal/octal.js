/*
PROBLEM
convert an octal string to a base 10 number

EXAMPLES
let octal = new Octal('10');
octal.toDecimal() => 8

10 = 1 * 8^1 + 0 * 8^0
10 => 8 (base 10)

135 = 1 * 8^2 + 3 * 8^1 + 5 * 8^0
135 = 64 + 24 + 5
135 => 93 (base 10)

ALGORITHM
number indexNumber(x 0 * 8^length) + number index 1 * 8^length - 1 + ..... + 

let total = 0
let rank = Number(number[length)]

for (let index = 0; index < length; index + 1)
  total += number[index] * 8^rank
  rank -= 1

  return total
- return decimal number
*/

/*
class Octal {
  constructor(number) {
    this.number = number;
  }

  toDecimal() {
    if (/[^0-7]/.test(this.number)) return 0;

    return this.number
      .split('')
      .reverse()
      .reduce(((acc, val, index) => acc + val * 8 ** index), 0);
  }
}
*/

class Octal {
  constructor(number) {
    this.number = number;
  }

  toDecimal() {
    if (/[^0-7]/.test(this.number)) return 0;

    return 
  }
}

module.exports = Octal;

    /*
    const VALID_CHARS = '01234567';
    let total = 0;
    let number = this.number;
    let rank = number.length - 1;

    for (let index = 0; index < number.length; index += 1, rank -= 1) {
      if (!VALID_CHARS.includes(number[index])) return 0;
      total += Number(number[index]) * 8 ** rank;
    }

    return total;
    */