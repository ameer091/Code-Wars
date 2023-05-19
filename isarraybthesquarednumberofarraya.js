/*
Are they the "same"?

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.
*/

function comp(a, b) {
  // Check if either array is null or has different lengths
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  // Create a map to store the counts of elements in array a
  const countMap = {};

  // Iterate over each element in array a and update the count in the map
  for (let num of a) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  // Iterate over each element in array b
  for (let num of b) {
    // Calculate the square root of the current element in b
    const squareRoot = Math.sqrt(num);

    // If the square root is not a valid number or the count of the square root in a is zero,
    // or the count is already zero in the countMap, return false
    if (isNaN(squareRoot) || !countMap[squareRoot] || countMap[squareRoot] === 0) {
      return false;
    }

    // Decrement the count of the square root in the countMap
    countMap[squareRoot]--;
  }

  // If all elements in b have been matched to elements in a, return true
  return true;
}


//Other Solutions
function comp(a, b) {
  // Check if either array is null or has different lengths
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  // Create an empty object to store the counts of elements in array a
  let countMap = {};

  // Count the occurrences of each element in array a
  for (let i = 0; i < a.length; i++) {
    let num = a[i];

    // If the number is not already a property in countMap, initialize the count to 0
    if (!countMap[num]) {
      countMap[num] = 0;
    }

    // Increment the count of the number in countMap
    countMap[num] = countMap[num] + 1;
  }

  // Check if each element in array b is the square of an element in array a
  for (let i = 0; i < b.length; i++) {
    let square = b[i];

    // Calculate the square root of the current element in b
    let squareRoot = Math.sqrt(square);

    // If the square root is not a valid number or the count of the square root in a is zero, return false
    if (isNaN(squareRoot) || !countMap[squareRoot] || countMap[squareRoot] === 0) {
      return false;
    }

    // Decrement the count of the square root in countMap
    countMap[squareRoot] = countMap[squareRoot] - 1;
  }

  // If all elements in b have been matched to elements in a, return true
  return true;
}


//Other Solutions
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

//Other Solutions
function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}

//Other Solutions
const comp = (array1, array2) =>
	Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.every(item => {
    const index = array2.indexOf(Math.pow(item, 2))
    return index > -1 ? array2.splice(index, 1) : false
  })


//Other Solutions
function comp(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  return a.map(x => x * x).sort().toString() === b.sort().toString();
}

//Other Solutions
function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.every((item, index) => item * item == array2[index]);
}