const findTheOldest = function(obj) {
  let getLarger = (n, m) =>
    n > m ? n : m;
  
  let getAge = (person) => 
    !person.yearOfDeath ? (new Date()).getFullYear() - person.yearOfBirth :
    person.yearOfDeath - person.yearOfBirth;
  
  let ageArr = obj.map(getAge);
  
  let getLargest = (index) =>
    index === ageArr.length - 2 ? getLarger(ageArr[index], ageArr[index + 1]) :
    getLarger(ageArr[index], getLargest(index + 1));

  let oldestAge = getLargest(0);

  let getOldest = (person) =>
    getAge(person) === oldestAge;

  let oldestPersons = obj.filter(getOldest);

  return oldestPersons[0];
};

// Do not edit below this line
module.exports = findTheOldest;
