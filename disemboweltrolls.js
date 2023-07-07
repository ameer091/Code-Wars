/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function removeVowels(str) {
  // Define a regular expression to match vowels (case-insensitive)
  const vowelsRegex = /[aeiou]/gi;

  // Use the replace() method with the regular expression to remove vowels
  const result = str.replace(vowelsRegex, '');

  return result;
}


//Other Solutions
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//Other Solutions
disemvowel = str => str.replace(/[aeiou]/gi,'');


//Other Solutions
function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}


//Other Solutions
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

//Other Solutions
function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}