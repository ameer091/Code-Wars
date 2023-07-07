/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
*/


function buildTower(floors) {
  const tower = []; // Initialize an empty array to store the tower floors
  const maxWidth = 2 * floors - 1; // Calculate the maximum width of the tower

  // Loop through each floor
  for (let i = 0; i < floors; i++) {
    const spaces = " ".repeat(floors - i - 1); // Calculate the number of spaces on each side of the blocks
    const blocks = "*".repeat(2 * i + 1); // Calculate the number of blocks for the current floor
    const floor = spaces + blocks + spaces; // Concatenate the spaces, blocks, and spaces to form a floor
    tower.push(floor); // Add the floor to the tower array
  }

  return tower; // Return the completed tower array
}

//Other solutions
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

//Other Solutions
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

//Other Solutions
function towerBuilder(n) {
  return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}

//Other Solution
function towerBuilder(nFloors) {
  // build here
  let space,star, tower = [];
  for(i = 1; i <= nFloors; i++){
    space = " ".repeat(nFloors - i);
    star  = "*".repeat((2*i) - 1);
    tower.push(`${space}${star}${space}`);
  }
  return tower
}
