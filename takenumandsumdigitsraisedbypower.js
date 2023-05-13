/*
The number
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number:
89
=
8
1
+
9
2
89=8
1
 +9
2


The next number in having this property is
135
135:

See this property again:
135
=
1
1
+
3
2
+
5
3
135=1
1
 +3
2
 +5
3


Task
We need a function to collect these numbers, that may receive two integers
�
a,
�
b that defines the range
[
�
,
�
]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range
[
�
,
�
]
[a,b] the function should output an empty list.

90, 100 --> []
Enjoy it!!
*/

function sumDigPow(a, b) {
  // Create an empty array to store the numbers that fulfill the property
  const result = [];

  // Iterate through each number within the range [a, b]
  for (let num = a; num <= b; num++) {
    // Convert the number to an array of its individual digits
    const digits = Array.from(String(num), Number);

    // Calculate the sum of the digits raised to the power of their respective positions
    const sum = digits.reduce((acc, digit, index) => acc + Math.pow(digit, index + 1), 0);

    // If the sum is equal to the original number, add it to the result array
    if (sum === num) {
      result.push(num);
    }
  }

  // Return the array of numbers that fulfill the property
  return result;
}

//Other Solutions
function filterFunc(n) {
  return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
}

function *range(a, b) {
  for (var i = a; i <= b; ++i) yield i;
}

function sumDigPow(a, b) {
  return Array.from(range(a, b)).filter(filterFunc);
}

//Other Solutions
const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89,135, 175, 518, 598, 1306, 1676, 2427, 2646798];

const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );


//Other Solutions
function isEureka(n) {
  const nArr = n.toString().split('').map(x => parseInt(x));
  const compN = nArr.reduce((prev, curr, i) => {
    curr = i === 0 ? Math.pow(curr, i+2) : Math.pow(curr, i+1);
    return prev + curr;
  });
  return n === compN;
}

function sumDigPow(a, b) {
  const arr = [];

  for (let i = a; i <= b; i++) {
    if (isEureka(i)) {
      arr.push(i);
    }
  }

  return arr;
}
