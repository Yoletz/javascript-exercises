const caesar = function(str, num) {
  const A_UPPER = 65;
  const Z_UPPER = 90;
  const A_LOWER = 97;
  const Z_LOWER = 122;

  function shiftCharCode(start, end, code, integer) {
    let shiftIter = (c, i) =>
      c + i > end ? shiftIter(start, i - (end + 1 - c)) :
      c + i < start ? shiftIter(end, i + (c - (start - 1))) :
      c + i;
    
    return shiftIter(code, integer);
  }

  function shiftString(index) {
    let currentChar = str.charCodeAt(index);

    return index == str.length ? "" : (
      currentChar >= A_UPPER && 
      currentChar <= Z_UPPER ? 
        String.fromCharCode(shiftCharCode(A_UPPER, Z_UPPER, currentChar, num)) :
      currentChar >= A_LOWER && 
      currentChar <= Z_LOWER ? 
        String.fromCharCode(shiftCharCode(A_LOWER, Z_LOWER, currentChar, num)) :
      str[index]
    ) + shiftString(index + 1);
  }

  return shiftString(0);
};

// Do not edit below this line
module.exports = caesar;
