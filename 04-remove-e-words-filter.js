/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

let removeEWords = function(sentence) {
    // split sentence into array of words
    let words = sentence.split(' ');

    // create new array with words that don't have letter 'e'
    let filteredWords = words.filter(function(word) {
      // check if word does not contain 'e' (case-insensitive)
      return !word.toLowerCase().includes('e');
    });

    // join filtered words back into string
    return filteredWords.join(' ');
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
