/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

*/

function binaryToDecimal(arr) {
  var decimal = 0; // Initialize the decimal value to 0
  var length = arr.length; // Get the length of the binary array

  // Iterate over the binary array from the least significant bit to the most significant bit
  for (var i = 0; i < length; i++) {
    // Multiply the current bit by the corresponding power of 2 and add it to the decimal value
    decimal += arr[length - 1 - i] * Math.pow(2, i);
  }

  return decimal; // Return the decimal value
}


//Other Solutions
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

//Other Solutions
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};

//Other Solutions
function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}


