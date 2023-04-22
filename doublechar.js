/* Double Char
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

function doubleChar(str) {
  // Your code here
  // Create a new string
    let newDString =''
  //iterate over the string
  for (let i = 0; i < str.length; i++) {
    //repeat the index at i
    newDString += str[i].repeat(2)
  }
  //return the string
  return newDString

}


//other solutions

const doubleChar = (str) => str.split("").map(c => c + c).join("");

//other solutions
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}