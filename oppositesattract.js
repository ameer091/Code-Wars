/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


*/

function areTheyInLove(flower1Petals, flower2Petals) {
  const flower1Even = flower1Petals % 2 === 0;
  const flower2Even = flower2Petals % 2 === 0;

  return flower1Even !== flower2Even;
}

//Other Solutions
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

//Other Solutions
function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1
}

//Other Solutions
let lovefunc = (f1, f2) => !!((f1+f2)%2)
