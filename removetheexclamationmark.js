/*Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


*/

function removeExclamationMarks(s) {
  //A string that has an exclamation mark
  //Return that string with no !
  // 'This is a string! Wait no it is not'
  // 'This is a string Wait no it is not'
  // Use a for loop to go over the string
  let newString = ''
    for (i = 0; i < s.length; i++){

  // Find where there is an !
    if(s[i] !== '!') {
    // Put everything into the new string
    newString += s[i]
    }

   }
  //Return the new string
    return newString
  }

  //Other solutions, I like this way with the regular expressions
  function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }
//Other solutions
  function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }
