/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

*/

let twoDimensionalProduct = function(array) {
    // use reduce to flatten the array and calculate the product
    return array.reduce((totalProduct, innerArray) => {
      // use reduce on each inner array to calculate the product of its elements
      const innerProduct = innerArray.reduce((product, num) => product * num, 1);
      // multiply the total product by product of current inner array
      return totalProduct * innerProduct;
    }, 1); // intitialise with 1 to start the product calculation
};
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = twoDimensionalProduct;
} catch (e) {
    module.exports = null;
}
