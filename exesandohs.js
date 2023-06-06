/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
  // Convert the input string to lowercase for case insensitivity
  const lowerCaseStr = str.toLowerCase();

  // Count the occurrences of 'x' and 'o' in the string
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === 'x') {
      countX++;
    } else if (lowerCaseStr[i] === 'o') {
      countO++;
    }
  }

  // Return true if the counts of 'x' and 'o' are equal, false otherwise
  return countX === countO;
}

//Other Solutions
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

//Other Solutions
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

//Other Solutions
function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

//Other Solutions
function XO(str) {
  var a = str.replace(/x/gi, ''),
      b = str.replace(/o/gi, '');
  return a.length === b.length;
}

//Other Solutions
function XO(str) {
  var sum = 0;
  for(var i=0; i<str.length; i++){
    if(str[i].toLowerCase() == 'x') sum++;
    if(str[i].toLowerCase() == 'o') sum--;
  }
  return sum == 0;
}