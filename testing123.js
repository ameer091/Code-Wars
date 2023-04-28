/*
Testing 1-2-3
Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

var number=function(array){
  //your awesome code here
//map to use the index + 1 and then the actual element
 return (array.map((x, i) => i+1 + ': ' + x))
}

//Other Solutions
var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

//Other solutions
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)


//Other solutions
//This is how I should have done it, or at least how I would have preferred to have done it
const number = array => array.map((n, i) => `${i + 1}: ${n}`);