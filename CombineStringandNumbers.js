/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x){
  //an array of mixed values, specifically numbers and string
  //doesn't seem to be booleans or special characters
  //return is a single number
  // let num = ['1', 1, '2', 3]
  // let num = 7
  //This is the counter
  let num = 0;
  //Go over the entire array
    for (i =0; i < x.length; i++){
  //Change the instance of the string to a number and add it to the counter
      num += parseInt(x[i]);
    }
 //return the counter
  return num
  }

  //Other solutions
  function sumMix(x){
    return x.map(a => a).reduce((a, b) => a + b);
  }
 //Another solution
  function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
  }

//Another solution
onst sumMix=x=>x.reduce((a,b)=>+b+a,0)