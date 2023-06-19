/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/
function between(a, b) {
  const range = [];

 for (let i = a; i <= b; i++) {
   range.push(i);
 }

 return range;
}

//Other Solutions
const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

//Other Solutions
const between = (a, b) =>
  [...Array(b - a + 1)].map((_, idx) => idx + a);