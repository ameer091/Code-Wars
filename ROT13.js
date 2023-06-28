/*
DESCRIPTION:
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    // Check if the character is a letter
    if (/[a-zA-Z]/.test(char)) {
      var code = str.charCodeAt(i);
      var shift;

      // Determine whether to shift forward or backward
      if (/[A-Z]/.test(char)) {
        shift = 65; // ASCII code for 'A'
      } else {
        shift = 97; // ASCII code for 'a'
      }

      // Apply the shift to the character code
      code = (code - shift + 13) % 26 + shift;

      // Convert the new code back to a character
      char = String.fromCharCode(code);
    }

    result += char;
  }

  return result;
}

//Other Solutions
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}


//Other Solutions
const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));


//Other Solutions
var codeA = 'A'.charCodeAt(0),
    codeZ = 'Z'.charCodeAt(0),
    codea = 'a'.charCodeAt(0),
    codez = 'z'.charCodeAt(0);
function rot13(message){
  return message.split('').map(function(char) {
    var code = char.charCodeAt(0);
    if(codeA <= code && code <= codeZ){
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if(codea <= code && code <= codez){
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}

//Other Solutions
function rot13(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}


//Other Solutions
function rot13(message){
  //your code here
  return (message + '')
    .replace(/[a-z]/gi, function(s) {
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
    });

}


//Other Solutions
function rot13(message){
  return message.split('').map(l => {
    let charCode = l.charCodeAt(0);
    if(charCode >= 97 && charCode <= 122){
      charCode = (charCode - 97 + 13) % 26 + 97;
    }
    else if(charCode >= 65 && charCode <= 90){
      charCode = (charCode - 65 + 13) % 26 + 65;
    }
    return String.fromCharCode(charCode);
  }).join('');
}

//Other Solutions
function rot13(message){
  return message.replace(/[a-zA-Z]/g, function(c){
    var c13 = c.charCodeAt(0) + 13;
    var endCharCode = ( c > 'Z')? 122 : 90;
    return String.fromCharCode(  endCharCode < c13 ?  c.charCodeAt(0) - 13 : c13 );
  });
}