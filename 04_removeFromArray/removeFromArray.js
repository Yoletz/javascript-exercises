
const removeFromArray = function(arr, ...args) {
  let newArr = [];

  outerLoop:
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        continue outerLoop;
      }
    }
    newArr.push(arr[i]);
  }

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
