const sumAll = function(start, end) {
  let isWrongInput = (num) =>
    typeof num !== "number" ||
    num < 0 || num === NaN ||
    num === Infinity;

  let iterSum = (i) =>
    i === end ? end :
    i + iterSum(i + 1);

  return isWrongInput(start) || isWrongInput(end) ? "ERROR" :
    start > end ? sumAll(end, start) :
    iterSum(start);
};

// Do not edit below this line
module.exports = sumAll;
