/*
Reverse Words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

function reverseWords(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Split the current word into an array of characters, reverse it, and join it back into a string
    words[i] = words[i].split('').reverse().join('');
  }

  // Join the array of words back into a string with spaces
  return words.join(' ');
}


//Other Solutions
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

//Other Solutions
function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

//Other Solutions
function reverseWords(str) {
  return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}
