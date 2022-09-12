const palindromes = function (str) {
  let getLettersOnly = (i) =>
    i === str.length ? "" :
    str.charCodeAt(i) >= 65 &&
    str.charCodeAt(i) <= 90 ||
    str.charCodeAt(i) >= 97 &&
    str.charCodeAt(i) <= 122 ? str[i] + getLettersOnly(i + 1) :
    getLettersOnly(i + 1);

  let reverseStr = (str, index) =>
    index === 0 ? str[0] :
    str[index] + reverseStr(str, index - 1);

  let reducedStr = getLettersOnly(0).toLowerCase();
  
  return reducedStr == reverseStr(reducedStr, reducedStr.length - 1);
};

// Do not edit below this line
module.exports = palindromes;
