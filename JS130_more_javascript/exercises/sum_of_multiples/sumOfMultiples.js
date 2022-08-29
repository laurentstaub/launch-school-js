"use strict";

class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = multiples;
  }

  to(targetNumber) { // 4
    let sum = 0;

    for (let idx = 0; idx < targetNumber; idx += 1) {
      if (this.multiples.some(multiple => idx % multiple === 0)) sum += idx;

    return sum;
  }

  static to(targetNumber) {
    return new SumOfMultiples( 3, 5 ).to(targetNumber);
  }
}

module.exports = SumOfMultiples;