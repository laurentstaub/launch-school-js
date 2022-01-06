/*
You are given an array prices where prices[i] is the price of a given stock on
the ith day.

You want to maximize your profit by choosing a single day to buy one stock and
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot
achieve any profit, return 0.

Input: array
Output: number

We need to get the largest difference difference in the array
Rule: the "larger" number must be after the other "smaller one"

Approach 1: brute force (NOT EFFICIENT O(N)^2)
declare a variable largest difference
declare a variable best day
we calculate all the differences in the array
we store the index of the largest difference

Approach 2: compare differences
[7, 2, 3, 8, 1]
We iterate over the array
calculate the small differences (index + 1 less index)


const maxProfit = function(prices) {
  let largestDiff = null;

  for (let index1 = 0; index1 < prices.length; index1 += 1) {
    for (let index2 = index1 + 1; index2 < prices.length; index2 += 1) {
      let diff = prices[index2] - prices[index1];

      if (diff > largestDiff) {
        largestDiff = diff;
        bestDay = index2;
      }
    }
  }

  return largestDiff;
};
*/

const maxProfit = function(prices) {
  let buyPrice = prices[0];
  let largestDiff = 0;

  for (let index = 0; index < prices.length; index += 1) {
    let tempDiff = prices[index + 1] - prices[index];

    if (tempDiff > 0) {
      if (prices[index] < buyPrice) {
        buyPrice = prices[index];
      }

      if (prices[index + 1] - buyPrice > largestDiff) {
        largestDiff = prices[index + 1] - buyPrice;
      }
    }
  }

  return largestDiff;
};

console.log(maxProfit([1, 2])); // 1
console.log(maxProfit([2, 1])); // 0
console.log(maxProfit([7, 2, 3, 8, 1])); // 6
console.log(maxProfit([7, 2, 3, 8, 1, 9])); // 8
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0