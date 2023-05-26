/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

function countSheep(array) {
  if (!Array.isArray(array)) {
    return 0;
  }

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count++;
    }
  }

  return count;
}


//Other Solutions, I really like this one
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

//Other Solutions
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var num = 0;

  for(var i = 0; i < arrayOfSheep.length; i++)
    if(arrayOfSheep[i] == true)
      num++;

  return num;
}

//Other Solutions
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}

//Other Solutions
let countSheeps = x => x.filter( s => s ).length;

