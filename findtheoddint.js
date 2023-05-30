/*
DESCRIPTION:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
function findOddNumber(array) {
  // Create an empty object to store the count of each number
  let count = {};

  // Iterate over the input array
  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    // Increase the count of the current number by 1
    // If the number doesn't exist in the count object, initialize it with 0 before incrementing
    count[num] = (count[num] || 0) + 1;
  }

  // Iterate over the count object
  for (const num in count) {
    // Check if the count of the current number is odd
    if (count[num] % 2 !== 0) {
      // Return the odd number as an integer
      return parseInt(num);
    }
  }
}
