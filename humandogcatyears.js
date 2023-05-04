/*
Cat years, Dog years

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

function calculatePetAges(humanYears) {
  let catYears = 0; // Initialize a variable to hold the cat years
  let dogYears = 0; // Initialize a variable to hold the dog years

  // Calculate cat years
  if (humanYears >= 1) { // If the human age is greater than or equal to 1
    catYears += 15; // Add 15 years to the cat age
  }
  if (humanYears >= 2) { // If the human age is greater than or equal to 2
    catYears += 9; // Add 9 years to the cat age
  }
  if (humanYears >= 3) { // If the human age is greater than or equal to 3
    catYears += (humanYears - 2) * 4; // Add the remaining cat years based on the formula
  }

  // Calculate dog years
  if (humanYears >= 1) { // If the human age is greater than or equal to 1
    dogYears += 15; // Add 15 years to the dog age
  }
  if (humanYears >= 2) { // If the human age is greater than or equal to 2
    dogYears += 9; // Add 9 years to the dog age
  }
  if (humanYears >= 3) { // If the human age is greater than or equal to 3
    dogYears += (humanYears - 2) * 5; // Add the remaining dog years based on the formula
  }

  return [humanYears, catYears, dogYears]; // Return an array with human, cat, and dog ages
}

//Other soltuions.  I think this one is really cool.
var humanYearsCatYearsDogYears = function(y) {
  if (y == 1) return [1, 15, 15]
  if (y == 2) return [2, 24, 24]
  return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}

//Other Solutions
const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    }
    else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    }
    else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears,catYears,dogYears];
}

//Other solutions.  I also really like this one
const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];