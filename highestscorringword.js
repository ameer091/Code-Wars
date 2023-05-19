/*
Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function highestScoringWord(words) {
  // Define the alphabet for scoring
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Split the input string into an array of words
  const wordList = words.split(' ');

  // Initialize variables to track the highest score and the corresponding word
  let highestScore = 0;
  let highestScoringWord = '';

  // Iterate through each word in the word list
  for (let i = 0; i < wordList.length; i++) {
    const currentWord = wordList[i];
    let currentScore = 0;

    // Calculate the score for each letter in the current word
    for (let j = 0; j < currentWord.length; j++) {
      const letter = currentWord[j];
      const letterScore = alphabet.indexOf(letter) + 1;
      currentScore += letterScore;
    }

    // Update the highest score and highest scoring word if the current word has a higher score
    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestScoringWord = currentWord;
    }
  }

  // Return the word with the highest score
  return highestScoringWord;
}

//Other Solutions
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}

//Other Solutions
function high(x){
  let alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  let words = x.split(" ");
  let highestScore = 0;
  let highestScoreWord = "";

  for (let word of words) {
    let lettersSum = 0;

    for (let letter of word) {
      lettersSum += alphabets.indexOf(letter) + 1;
    }

    if (lettersSum > highestScore) {
      highestScore = lettersSum;
      highestScoreWord = word;
    }
  }

  return highestScoreWord;
}

//Other Solutions
function high(words) {

  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);

  return words
    .split(' ')
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop()
    .word;

}

//Other Solutions
function high(x){
  return x.split(' ').reduce((accum, current)=>{
      return score(current) > score(accum)? current:accum;
  })
}

function score(word){
  return word.split('').reduce((accum,current)=>{return accum+(current.charCodeAt()-96)},0)
}

//Other Solutions
const { compose, reduce, split } = require('ramda');

const score = compose(
	reduce((r, v) => r + v.charCodeAt() - 96, 0),
	split('')
);

const high = compose(
	reduce((r, v) => score(v) > score(r) ? v : r, ''),
	split(' ')
);

