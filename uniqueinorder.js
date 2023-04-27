/*
Unique In Order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  //A list of some sort that may be a string or an array

//return an array where the values that are repeated in array (if they are before the previous index in the array/string are not there anymore)

//example let unorganizedString = 'AABBCCDD' should return [A, B, C, D]

//example let unorganizadArray = [1111122222222334444444455] = [1, 2, 3, 4, 5]

//
let = blankArray = []

for(let i = 0; i < iterable.length; i++){
  if(iterable[i] !== iterable[i + 1]){
    blankArray.push(iterable[i])
  }
}
  return blankArray
}


//Other solutions
function uniqueInOrder(it) {
  var result = []
  var last

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }

  return result
}

//Other solutions
var uniqueInOrder=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}

