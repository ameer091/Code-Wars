/*

Count the divisors of a number

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/


function getDivisorsCnt(n){
  // initialize count to zero
  let count = 0;
  // compute the square root of n and round down to the nearest integer
  const sqrt_n = Math.floor(Math.sqrt(n));
  // iterate over all integers from 1 to the square root of n
  for (let i = 1; i <= sqrt_n; i++) {
    //if i is a divisor of n, add 2 to the count (since both i and n/i are divisors of n)
    if (n % i === 0) {
      count += 2;
    }
  }
  // check if n is a perfect square
  if (sqrt_n ** 2 === n) {
    // if n is a perfect square, we have counted the square root twice, so we need to subtract 1 from the count
    count--;
  }
  // return the count of divisors of n
  return count;
}