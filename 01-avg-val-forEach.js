/*
Write a function `avgVal(arr)` that accepts an array as an arg. The function
should return the average of all values in the array. If the array is empty,
it should return `null`.

Solve this using Array's `forEach()` method.

Examples:

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

*/

let avgVal = function(arr) {
    // check if the array is empty
    if (arr.length === 0) {
      return null;
    }

    // initialise variables to hold the sum and count
    let sum = 0;
    let count = 0;

    // iterate through each element in the array
    arr.forEach(function(num) {
      // add the current element to the sum
      sum += num;
      // increment the count
      count++;
    });

    // calculate the average by dividing the sum by the count
    return sum / count;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = avgVal;
} catch (e) {
  module.exports = null;
}
