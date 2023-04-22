/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(str){

//Make an empty string to put the new string into
  var newStr = "";
//Iterate over the string
  for(var i=0;i<str.length;i++){
//If the number it the index is greater than or equal to 5
    if(Number(str[i])>=5){
//Add a 1 to the new string
      newStr += "1"
    }
//If it's not greater than or equal to five, then that means it's less than it
    else{
//Add a 0 to the new string
      newStr += "0";
    }
  }
//Return the new string
  return newStr;
}

// Other ways to solve
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
  }

//Another way
function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

//Another
function fakeBin(x){
  return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}