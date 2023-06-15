/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

function timeSinceMidnight(h, m, s) {
  var milliseconds = (h * 3600 + m * 60 + s) * 1000;
  return milliseconds;
}

// Example usage:
var h = 0;
var m = 1;
var s = 1;

var result = timeSinceMidnight(h, m, s);
console.log(result); // Output: 61000


//Other Solutions
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}

//Other Solutions
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);


//Other Solutions
function past(h, m, s){
  var hours = h * 60 * 60 * 1000;
  var minutes = m * 60 * 1000;
  var seconds = s * 1000;

  return hours + minutes + seconds;
}