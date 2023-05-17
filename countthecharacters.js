/*
Count characters in your string

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function countCharacters(str) {
  // Create an empty object to store the character counts
  const charCount = {};

  // Iterate over each character in the string
  for (let char of str) {
    // Check if the character is already a property in the charCount object
    // If it is, increment the count by 1; if not, initialize the count to 1
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Return the object containing the character counts
  return charCount;
}


//Other Solutions
function count (string) {
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

//Other Solutions
function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}

//Other Solutions
function count (string) {
  var result = {};

  for(let i = 0; i < string.length; i++) {
    if(result.hasOwnProperty(string[i])){
      result[string[i]] += 1;
    } else {
      result[string[i]] = 1;
    }
  }

  return result;
}

//Other Solutions
function count (string) {
  return string.split("").reduce(function(obj, elem) {
    if (elem in obj)
      obj[elem]++;
    else
      obj[elem] = 1;
    return obj;
  }, {});
}