/*
Write Number in Expanded Form

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 30

NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  // Convert number to string to easily manipulate each digit
  const numString = num.toString();
  // Create an empty array to store the expanded form of the number
  const expandedArray = [];

  // Loop through each digit in the number from left to right
  for (let i = 0; i < numString.length; i++) {
    // Get the current digit as a number
    const digit = parseInt(numString[i]);

    // If the digit is zero, skip to the next iteration of the loop
    if (digit === 0) continue;

    // Calculate the place value of the digit
    const placeValue = Math.pow(10, numString.length - i - 1);

    // Calculate the expanded form of the digit and add it to the array
    const expandedDigit = digit * placeValue;
    expandedArray.push(expandedDigit);
  }

  // Join the expanded form array with ' + ' separator to form the final string
  return expandedArray.join(' + ');
}
//Other solutions
function expandedForm(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}

//Other solutions
function expandedForm(num) {
	num = String(num);
	let result = [];
	for (var i = 0; i < num.length; i++) {
		if (num[i] == 0) continue;
		else result.push(num[i] + "0".repeat(num.length -i -1))
	}
	return result.join(" + ")
}