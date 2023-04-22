/*Beginner Series #1 School Paperwork

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

n= 5, m=5: 25
n=-5, m=5:  0
*/


function paperwork(n, m) {
if(Math.sign(n) >= 1 && Math.sign(m) >= 1){
  return n*m
}
  return 0
}


//Other solutions
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

//Other solutions
function paperwork(n, m) {
  if (m < 0 || n < 0) {
    return 0;
  }
  return m * n;
}
//Other solutions
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}