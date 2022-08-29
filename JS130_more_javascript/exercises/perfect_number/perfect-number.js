class PerfectNumber {
  static classify(number) {
    if (number < 1) throw new Error("You must input a number greater than 1.");

    let sumOfFactors = 0;
    for (let index = 1; index <= Math.ceil(number / 2); index += 1) {
      if (number % index === 0) sumOfFactors += index;
    }

    if (sumOfFactors === number) return 'perfect';
    else if (sumOfFactors > number) return 'abundant';
    else return 'deficient'
  }
}

module.exports = PerfectNumber;