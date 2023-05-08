/*Regex validate PIN code

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

//I'm pretty proud that I got this answer desipite not having the most amount of exp with regular expressions

function validatePIN (pin) {
  let checkForNumber = /^[0-9]*$/
  let checkForLetter = /^[A-Za-z]*$/

  if (((checkForNumber.test(pin) === true) && (checkForLetter.test(pin) !== true)) && (pin.length === 4 || pin.length === 6)){
    return true
  } else {
    return false
  }
  }

  //This is a much faster way to do it

  function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }

  //Other solutions

  function validatePIN (pin) {

    var pinlen = pin.length;
    var isCorrectLength = (pinlen == 4 || pinlen == 6);
    var hasOnlyNumbers = pin.match(/^\d+$/);

    if(isCorrectLength && hasOnlyNumbers){
      return true;
    }

    return false;

  }

  //Other interesting solution

  function validatePIN (pin) {
    //return true or false
    var n = pin.length;
    if( n != 4 && n != 6)
        return false;
    for (var i in pin)
        if (pin[i] > '9' || pin[i] < '0')
            return false;
    return true;
  }

  //small update
  //another small update