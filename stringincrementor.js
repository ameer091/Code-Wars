/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/
function incrementString(str) {
  // Check if the string ends with a number
  const numberPattern = /\d+$/;
  const match = str.match(numberPattern);

  if (match) {
    // If the string ends with a number
    const existingNumber = match[0];
    const incrementedNumber = String(Number(existingNumber) + 1);
    const leadingZeros = existingNumber.length - incrementedNumber.length;
    const newNumber = '0'.repeat(Math.max(leadingZeros, 0)) + incrementedNumber;

    // Replace the existing number with the incremented one
    return str.slice(0, -existingNumber.length) + newNumber;
  } else {
    // If the string does not end with a number, append "1" to it
    return str + '1';
  }
}

//Other Solutions
function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

//Other Solutions
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

//Other Solutions
const incrementString = s => s.replace(/[0-8]?9*$/, m => String(++m));