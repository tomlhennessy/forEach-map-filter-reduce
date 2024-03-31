/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/
// helper function if character is vowel
let isVowel = function(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// helper function to find index of last vowel in a word
let findLastVowelIndex = function(word) {
    for  (let i = word.length - 1; i >= 0; i--) {
        if (isVowel(word[i])) {
            return i;
        }
    }
    return -1; // if no vowel found
}

// helper function to repeat characters after last vowel in a word
let repeatAfterVowel = function(word, index) {
    const suffix = word.substring(index);
    return word + suffix;
}


// main function to translate sentence
let repeatingTranslate = function(sentence) {
    return sentence.split(' ').map(word => {
        if (word.length < 3) {
            return word; // short words remain unchanged
        } else {
            const lastVowelIndex = findLastVowelIndex(word);
            if (lastVowelIndex === -1 || isVowel(word[word.length - 1])) {
                return word + word; // if ends with a vowel, repeat the word
            } else {
                return repeatAfterVowel(word, lastVowelIndex); // repeat characters after last vowel
            }
        }
    }).join(' ');
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
