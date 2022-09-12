const leapYears = function(num) {
  let isDivisible = (n, m) =>
    n % m == 0;

  return isDivisible(num, 4) &&
    !isDivisible(num, 100) ||
    isDivisible(num, 4) &&
    isDivisible(num, 100) &&
    isDivisible(num, 400);
};

// Do not edit below this line
module.exports = leapYears;
