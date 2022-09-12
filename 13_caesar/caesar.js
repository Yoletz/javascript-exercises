const caesar = function(str, num) {

  function shiftChar(start, end, code, integer) {
    let shiftIter = (c, i) =>
      i == 0 ? c :
      c + i > end ? shiftIter(start, i - (end + 1 - c)) :
      c + i < start ? shiftIter(end, i + (c - (start - 1))) :
      c + i;
    
    return shiftIter(code, integer);
  }

  let shiftString = (index) =>
    index == str.length ? "" :
    str.charCodeAt(index) >= 65 && 
    str.charCodeAt(index) <= 90 ? 
      String.fromCharCode(shiftChar(65, 90, str.charCodeAt(index), num)) + 
      shiftString(index + 1) :
    str.charCodeAt(index) >= 97 &&
    str.charCodeAt(index) <= 122 ? 
      String.fromCharCode(shiftChar(97, 122, str.charCodeAt(index), num)) + 
      shiftString(index + 1) :
    str[index] + shiftString(index + 1);

  return shiftString(0);
};

// Do not edit below this line
module.exports = caesar;
