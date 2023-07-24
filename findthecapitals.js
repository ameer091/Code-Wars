/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

function capitals(word) {
  // Create an empty array to store the indexes of capital letters
  const indexes = [];

  // Loop through each character of the input 'word'
  for (let i = 0; i < word.length; i++) {
    // Get the current character at index 'i'
    const char = word.charAt(i);

    // Check if the character is equal to its uppercase version
    if (char === char.toUpperCase()) {
      // If the character is a capital letter, add its index to the 'indexes' array
      indexes.push(i);
    }
  }

  // Return the array containing the positions of all capital letters
  return indexes;
}

// Test cases
console.log(capitals('CodEWaRs')); // Output: [0, 3, 4, 6]

//Other Solutions
var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

//Other Solutions
var capitals = function (word) {
  return word.split('').reduce(function(n, l, i){
    return /[A-Z]/.test(l) && n.push(i), n;
  }, []);
};