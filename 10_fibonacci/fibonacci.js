const fibonacci = function(input) {
  let num = parseInt(input);

  return num === 1 || num === 0 ? num :
    num < 0 ? "OOPS" :
    fibonacci(num - 2) + fibonacci(num - 1);
};

// Do not edit below this line
module.exports = fibonacci;
