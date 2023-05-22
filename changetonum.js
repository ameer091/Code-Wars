/*
DESCRIPTION:
Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

function stringToNumber(str) {
  // Use parseInt to convert the string into a number
  // The second argument, 10, specifies that the string should be interpreted as a decimal number
  // The parseInt function will parse the string until it encounters a non-numeric character or the end of the string
  // If the string starts with a "-" sign, it will be interpreted as a negative number
  return parseInt(str, 10);
}


//Other Solutions
var stringToNumber = function(str){
  return parseInt(str);
}

//Other Solutions
var stringToNumber = function(str){
  // put your code here
  return Number(str);
}

//Other Solutions
var stringToNumber = function(str){
  return +str;
}
