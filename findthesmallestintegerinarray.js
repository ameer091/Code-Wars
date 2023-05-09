/*

Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

function findSmallestInt(arr) {
  // Step 1: Initialize the smallest integer to the first element of the array
  let smallestInt = arr[0];

  // Step 2: Loop through the rest of the array, starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Step 3: Compare the current element to the current smallest integer
    if (arr[i] < smallestInt) {
      // Step 4: If the current element is smaller, update the smallest integer
      smallestInt = arr[i];
    }
  }

  // Step 5: Return the smallest integer
  return smallestInt;
}

//Other Solutions
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//Other Solutions
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
  }
}

//Other Solutions
class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a, b) {
    return a - b; } )
    return args[0];
  }
}