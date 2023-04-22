/*
Quarter of the year

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12
*/

const quarterOf = (month) => {
  // Your code here
    if (typeof month !== 'number' || month < 1 || month > 12) {
    throw new Error('Invalid input. Please provide a valid integer between 1 and 12.');
  }

  const quarter = Math.ceil(month / 3);
  return quarter;

}

//Other solutions

const quarterOf = m => Math.ceil(m/3);


//Other solutions
//This would have been how I would have done it before.  I think it is easier to read, but maybe not the most efficient.
const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }

}