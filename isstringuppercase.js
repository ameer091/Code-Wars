/*
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

*/

String.prototype.isUpperCase = function() {
  // Step 1: Remove all spaces from the string
  const stringWithoutSpaces = this.replace(/\s/g, '');

  // Step 2: Remove all lowercase letters from the string
  const upperCaseLetters = stringWithoutSpaces.replace(/[a-z]/g, '');

  // Step 3: Check if the modified string contains only uppercase letters
  return upperCaseLetters === stringWithoutSpaces;
};

//Other Solutions
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}


//Other Solutions
String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}


//Other Solutions
String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};