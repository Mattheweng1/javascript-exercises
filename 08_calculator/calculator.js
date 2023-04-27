const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((accumulator, nextItem) => accumulator + nextItem, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, nextItem) => accumulator * nextItem, 1);
};

const power = function(x,y) {
	return x ** y;
};

const factorial = function(x) {
  let solution = 1;
	for (i = x; i >= 2; i--) {
    solution *= i;
  }
  return solution;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
