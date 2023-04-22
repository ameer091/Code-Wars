/*
Categorize New Member

DESCRIPTION:
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data){
  //Array of arrays
  //return an array of strings

  //create a new array where you put the decision
  let newArr = []

  //go over the array of arrays
  for(let i = 0; i < data.length; i++){
      //if array[0] is less than 55, add open to the new array
    if(data[i][0] < 55){
      newArr.push("Open")
    } else if (data[i][0] >= 55 && data[i][1] > 7){
      newArr.push("Senior")
    } else if (data[i][0] >= 55 && data[i][1] <= 7){
      newArr.push("Open")
    }

  }
console.log(newArr)
  //if array[0] is equal to 55 or greater and arry[1] is > 7 add senior to the array

  //return the new array
}

//Other solutions
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

//Other solutions
function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}