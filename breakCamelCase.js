/*Break camelCase

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

// complete the function
function solution(string) {
  //create a new empty string to put where you're going to make the changes
  let result = "";
  //loop over the string that is the parameter
  for (let i = 0; i < string.length; i++) {
  //use a regular express to see if there are any capital letters and not a capital letter that is at the beginning of the string
    if (/[A-Z]/.test(string.charAt(i)) && i > 0) {
  //that's where we add a space to the new string we are creating
      result += " ";
    }
  //Finally, we add the current character to the result string and continue with the next character in the loop. Once the loop is complete, we return the modified result string.
    result += string.charAt(i);
  }
  return result;
}

//Other solutions
function addSpaces(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
}

//Other solutions
// complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}

//Other solutions

function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

