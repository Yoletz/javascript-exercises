const reverseString = function(str) {
  let reverse = (index) =>
    index < 0 ? "" :
    index == 0 ? str[index] :
    str[index] + reverse(index - 1);

  return reverse(str.length - 1);
};

// Do not edit below this line
module.exports = reverseString;
