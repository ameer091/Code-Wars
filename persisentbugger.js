/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
  let count = 0;

  while (num >= 10) {
    let product = 1;
    // Convert num to string and split into an array of digits
    const digits = String(num).split('');

    // Multiply all the digits together
    for (let i = 0; i < digits.length; i++) {
      product *= digits[i];
    }

    num = product; // Update num with the product
    count++; // Increment the count
  }

  return count;
}

//Other Solutions
function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }

  return times;
}

//Other Solutions
const persistence = num => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0;
}

//Other Solutions
function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num.toString().split('').reduce((t, c) => c * t);
  }
  return i;
}

//Other Solutions
function persistence(num, cnt=0) {
  let arrayNum = num.toString().split('');
  return arrayNum.length === 1 ?
    cnt :
    persistence(arrayNum.reduce((x,y) => x*y), ++cnt)
}

//Other Solutions
function persistence(num)
{
  for (var i = 0; num > 9; i++)
  {
    num = num.toString().split("").reduce((s,d) => s * d);
  }
  return i;
}
