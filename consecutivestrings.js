/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption

*/

function longestConsec(strarr, k) {
  const n = strarr.length; // Get the length of the input array

  // Check for invalid input conditions
  if (n === 0 || k > n || k <= 0) {
    return ""; // Return an empty string as specified
  }

  let longestString = ""; // Initialize the variable to store the longest string

  // Iterate through the array
  for (let i = 0; i < n - k + 1; i++) {
    // Extract a slice of k consecutive strings from the array and join them
    const currentString = strarr.slice(i, i + k).join("");

    // Compare the length of the current string with the longest string found so far
    if (currentString.length > longestString.length) {
      longestString = currentString; // Update the longest string if the current one is longer
    }
  }

  return longestString; // Return the first longest string consisting of k consecutive strings
}

//Other Solutions
function longestConsec(strarr, k) {
  var longest = "";
  for(var i=0;k>0 && i<=strarr.length-k;i++){
    var tempArray = strarr.slice(i,i+k);
    var tempStr = tempArray.join("");
    if(tempStr.length > longest.length){
      longest = tempStr;
    }
  }
  return longest;
}

//Other Solutions
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}

//Other Solutions
function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  let result = '';
  for (let i = 0; i <= strarr.length - k; i++) {
    let str = '';
    for (let j = i; j < i + k; j++) {
      str += strarr[j];
    }
    if (result.length < str.length) {
      result = str;
    }
  }
  return result;
}

//Other Solutions
function longestConsec(strarr, k) {
  if( strarr.length==0 || k> strarr.length || k <1 ) return "";
  let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
      i = lens.indexOf( Math.max(...lens) );
  return strarr.slice(i,i+k).join('')
}

//Other Solutions
function longestConsec(strarr, k) {
  var n = strarr.length;
  if ((n === 0) || (k > n) || (k <= 0)) return "";
  var arr = strarr.map(function(u) { return u.length; });
  var sm = 0;
  for (var i = 0; i < k; i++) sm += arr[i];
  var mx_sm = sm, mx_nd = k - 1;
  for (var u = k; u < n; u++) {
      sm = sm + arr[u] - arr[u - k];
      if (sm > mx_sm) {
          mx_sm = sm; mx_nd = u;
      }
  }
  var start =  mx_nd - k + 1;
  return strarr.slice(start, mx_nd+1).join("");
}


