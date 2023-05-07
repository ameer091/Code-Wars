/*
Array.diff

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  // Create a new empty array to hold the results
  const result = [];

  // Loop through each element of the first array
  for (let i = 0; i < a.length; i++) {
    // Check if the current element is not in the second array
    if (!b.includes(a[i])) {
      // If it is not, add it to the result array
      result.push(a[i]);
    }
  }

  // Return the result array
  return result;
}


//Other Solutions
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

//Other Solutions
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}
