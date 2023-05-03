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


//Other Solutions
function getDivisorsCnt(n) {
  if (n === 1) return n

  // Use formuls http://vk.cc/4G1m8t
  let divArr = [[2, 0]] // 'divisor', 'number'
  let div = divArr[0][0] // first divisor

  while (n > 1) {
    if (n % div === 0) {
      for (let i = 0; divArr.length; i++) {
        if (divArr[i][0] === div) {
          divArr[i][1] += 1
          break
        } else {
          if (i === divArr.length - 1) {
            divArr.push([div, 1])
            break
          }
        }
      }
      n /= div
    } else {
      div += 1
    }
  }

  for (let i = 0; i < divArr.length; i++) {
    n *= divArr[i][1] + 1
  }

  return n
}

//Other Solutions
function getDivisorsCnt(n){
  var num=0;
  if(n==1) return 1;
  if(n%Math.sqrt(n)==0) num++;
  for(var i=1;i<Math.sqrt(n);i++){
      if(n%i==0){
          num+=2;
      }
  }
  return num;
}

//Other Solutions
function getDivisorsCnt(n){
  var res=[], sqrt=Math.sqrt(n);
  for(let i=1; i<=sqrt; ++i){
    if(n%i==0){res.push(i); res.push(n/i);}
  }
  res = Array.from(new Set(res));
  return res.length;
}

//Other Solutions
function getDivisorsCnt(n){
  let count = 0;
  for (let i = 1; i <= n; i++) if (!(n % i)) count++;
  return count;
}



