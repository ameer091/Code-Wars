//Digit*Digit

/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/
function squareDigits (num){

let changeToS = num.toString()

let changeToA = changeToS.split('')

let squareIt = changeToA.map(x => x**2)

let bringitTogether = Number(squareIt.join(''))
return bringitTogether
}

//This is one line that works of the above function.
function squareDigits(num){
  console.log(Number(num.toString().split('').map(x => x**2).join('')))
}

//Other solutions
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}

//Another
function squareDigits(num){
  var string = num.toString();
  var results = [];
  for (var i = 0; i < string.length; i++){
      results[i] = string[i] * string[i];
  }
  return Number(results.join(''));
};

//Another One
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}