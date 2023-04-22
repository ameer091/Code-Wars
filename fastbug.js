/*
Beginner Series #4 Cockroach
DESCRIPTION:
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

*/

function cockroachSpeed(s) {
  return Math.floor(s*27.777778);
}

//Other solutions
const cockroachSpeed = s => Math.floor(s / 0.036);

//Other solutions
function cockroachSpeed(s) {
  const secsInHour = 3600;
  const centimetersInKilometers = 100000;

  return Math.floor((s*centimetersInKilometers)/secsInHour);
}