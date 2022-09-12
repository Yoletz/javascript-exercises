const getTheTitles = function(arr) {
  let getTitle = (item) =>
    item.title;
  
  return arr.map(getTitle);
};

// Do not edit below this line
module.exports = getTheTitles;
