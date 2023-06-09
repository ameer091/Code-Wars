/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letters = new Set();

  // Convert the sentence to lowercase and remove numbers and punctuation
  const cleanSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');

  // Iterate through each character in the clean sentence
  for (let i = 0; i < cleanSentence.length; i++) {
    const char = cleanSentence[i];
    letters.add(char);
  }

  // Check if all alphabet letters are present
  for (let letter of alphabet) {
    if (!letters.has(letter)) {
      return false;
    }
  }

  return true;
}


//Other Solutions
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

//Other Solutions
function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

//Other Solutions
function isPangram(string) {
  const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];

  return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}

