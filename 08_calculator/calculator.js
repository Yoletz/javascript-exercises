const add = function(n, m) {
	return n + m;
};

const subtract = function(n, m) {
	return n - m;
};

const sum = function(numArr) {
  let sumIter = (i) => 
    i === numArr.length ? 0 :
    numArr[i] + sumIter(i + 1);

  return sumIter(0);
};

const multiply = function(numArr) {
  let productIter = (i) => 
    i === numArr.length ? 1 :
    numArr[i] * productIter(i + 1);

  return productIter(0);
};

const power = function(n, exp) {
  let powIter = (i) =>
    i === 0 ? 1 :
    powIter(i - 1) * n;

	return powIter(exp);
};

const factorial = function(n) {
  return n == 0 ? 1 :
    factorial(n - 1) * n;
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
