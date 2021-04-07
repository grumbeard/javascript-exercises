function add () {
  // Assuming all numbers to be added are given as individual arguments
  let sum = 0;
	for (let arg in arguments) {
    sum += arguments[arg]
  }
  return sum;
}

function subtract () {
  // Assuming first argument is number to be subtracted from
  // Assuming numbers to be subtracted are given as individual arguments that follow
  let sum = 0;
  for (let arg in arguments) {
    arg == 0 ? sum += arguments[arg] : sum -= arguments[arg];
  }
  return sum;
}

function sum () {
  // Assuming numbers to be summed given in single array as first argument
  return arguments[0].reduce(((total, nextNum) => nextNum ? total + nextNum : total), 0);
}

function multiply () {
  // Assuming numbers to be multiplied are given in single array as first argument
  if (arguments[0].length == 0) return undefined;
  return arguments[0].reduce((total, nextNum) => total * nextNum);
}

function power() {
  // Assuming first argument is number to be raised to power of second argument
  return arguments[0] ? arguments[0]**arguments[1] : undefined;
}

function factorial() {
  // Assuming only, 1 number which's factorial is to be calculated, is provided as argument
  // Multiply each number from 1 to given number
  let num = arguments[0];
  let factorial = 1;
  if (!num) return num == 0 ? 1 : undefined;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

function factor() {
  // Assuming only, 1 number which's factorial is to be calculated, is provided as argument
  let factors = [];
  // For each number that argument can be divisible by without remainder, add to list of factorials
  let num = arguments[0];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) factors.push(i);
  }
  return factors;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial,
  factor
}
