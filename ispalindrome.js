/*
Is it a palindrome?

DESCRIPTION:
Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the reversed string is equal to the original string
  return formattedStr === formattedStr.split('').reverse().join('');
}

//Other Solutions
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}

//Other Solutions
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

//Other Solutions
function isPalindrome(x) {
  x = x.toLowerCase()
  let a = 0
  let b = x.length
  while (a < b) {
    if (x[a] != x[b-1])
      return false
    a++
    b--
  }
  return true
}