const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;
};

const multiply = function(a) {
  let total = 1;
  for (let i = 0; i < a.length; i++) {
    total = total * a[i];
  }
  return total;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = 1; i <= n; i++) {
      total = total * i;
    }
    return total;
  }
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
