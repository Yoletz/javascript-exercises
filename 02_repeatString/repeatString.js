const repeatString = function(str, count) {
  let addString = (i) =>
    i == 0 ? "" :
    i < 0 ? "ERROR" :
    str + addString(i - 1);

  return addString(count);
};

// Do not edit below this line
module.exports = repeatString;
