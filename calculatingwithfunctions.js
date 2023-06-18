/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

// Number functions
function zero(operation = null) {
  if (!operation) return 0; // If no operation provided, return the number 0
  else return operation(0); // Otherwise, invoke the operation with 0 as the argument
}

function one(operation = null) {
  if (!operation) return 1; // If no operation provided, return the number 1
  else return operation(1); // Otherwise, invoke the operation with 1 as the argument
}

function two(operation = null) {
  if (!operation) return 2; // If no operation provided, return the number 2
  else return operation(2); // Otherwise, invoke the operation with 2 as the argument
}

function three(operation = null) {
  if (!operation) return 3; // If no operation provided, return the number 3
  else return operation(3); // Otherwise, invoke the operation with 3 as the argument
}

function four(operation = null) {
  if (!operation) return 4; // If no operation provided, return the number 4
  else return operation(4); // Otherwise, invoke the operation with 4 as the argument
}

function five(operation = null) {
  if (!operation) return 5; // If no operation provided, return the number 5
  else return operation(5); // Otherwise, invoke the operation with 5 as the argument
}

function six(operation = null) {
  if (!operation) return 6; // If no operation provided, return the number 6
  else return operation(6); // Otherwise, invoke the operation with 6 as the argument
}

function seven(operation = null) {
  if (!operation) return 7; // If no operation provided, return the number 7
  else return operation(7); // Otherwise, invoke the operation with 7 as the argument
}

function eight(operation = null) {
  if (!operation) return 8; // If no operation provided, return the number 8
  else return operation(8); // Otherwise, invoke the operation with 8 as the argument
}

function nine(operation = null) {
  if (!operation) return 9; // If no operation provided, return the number 9
  else return operation(9); // Otherwise, invoke the operation with 9 as the argument
}

// Operation functions
function plus(rightOperand) {
  return function (leftOperand) {
    return leftOperand + rightOperand; // Return the sum of leftOperand and rightOperand
  };
}

function minus(rightOperand) {
  return function (leftOperand) {
    return leftOperand - rightOperand; // Return the difference of leftOperand and rightOperand
  };
}

function times(rightOperand) {
  return function (leftOperand) {
    return leftOperand * rightOperand; // Return the product of leftOperand and rightOperand
  };
}

function dividedBy(rightOperand) {
  return function (leftOperand) {
    return Math.floor(leftOperand / rightOperand); // Return the floor division of leftOperand by rightOperand
  };
}


//Other Solutions\
function zero(fn) {return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(n) {return function(v) {return v + n}}
function minus(n) {return function(v) {return v - n}}
function times(n) {return function(v) {return v * n}}
function dividedBy(n) {return function(v) {return v / n}}

//Other Solutions
const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b