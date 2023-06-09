/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShortestLength(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Initialize the shortest length with the maximum possible value
  let shortestLength = Infinity;

  // Iterate over each word in the array
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;

    // Update the shortest length if the current word is shorter
    if (wordLength < shortestLength) {
      shortestLength = wordLength;
    }
  }

  // Return the shortest length
  return shortestLength;
}


//Other Solutions
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

//Other Solutions
function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}


//Other Solutions
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;