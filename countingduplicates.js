/*
Counting Duplicates

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(str) {
  //create an empty object to store the count of each character in the string
  const charCount = {};
  //create a counter to keep track of the repeated characters in the string
  let repeatCount = 0;

  // Count the occurrence of each character in the string by looping
  for (let i = 0; i < str.length; i++) {
    //Find the current index of whatever characer you're looking at make it a value in the object to keep track.  Also be aware that you need to check for whether or not you are dealing with a capital letter
    const char = str.charAt(i).toLowerCase();
    //If the character in the index does not have a number, add 1
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Count the number of repeated characters by looping through those, however use an for in loop instead for an object
  for (const char in charCount) {
  //if there is more than one character that has more than one instance of it being repeated in the string
    if (charCount[char] > 1) {
  //increase counter by one
      repeatCount++;
    }
  }
  //return the counter
  return repeatCount;
}

//Other solutions
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

//Other solutions
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

//Other solutions
const countRepeatedChars = str => new Set([...str.toLowerCase()].filter(char => str.toLowerCase().indexOf(char) !== str.toLowerCase().lastIndexOf(char))).size;

//Other solutions
function duplicateCount(text){
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];

  lower.split('').forEach(function(letter) {
    if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
}