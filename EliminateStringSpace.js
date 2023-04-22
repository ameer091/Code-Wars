function noSpace(x){
//We are to assume that the parameters are strings
//We want to remove all of the spaces from the string
//So for example let spaceString ='Please remove the spaces from me'
//Should result in 'Pleaseremovethespacesfromme'
let noSpaceString = ''
//Go over the entire string
for(i =0; i < x.length; i++){
//If the the index of the string is not a blank space
  if(x[i] !== ' '){
//Add whatever is at the index to the empty string
    noSpaceString += x[i]
  }
}
//Return that string
  return noSpaceString
}

// Here is a solution using regular expressions
function noSpace(x){
  return x.replace(/\s/g, '');
}

// Here is another way to solve it
function noSpace(x){return x.split(' ').join('')}

//Here is another way to solve it
onst noSpace = x => x.replace(/ /g, "");