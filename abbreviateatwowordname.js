/* Abbreviate a Two Word Name
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/
function abbrevName(name){
//Splits in into an array where the first name is nameArray[0] and the second one it nameArray[1]
  var nameArray = name.split(" ");
  //returns it with the first value in the first name + the . + the first value in the last name capitalized
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//Another solution
function abbrevName(name){

  return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

//Other solution
function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}