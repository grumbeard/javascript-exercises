let findTheOldest = function() {
  people = arguments[0];
  let oldestPerson = people.reduce((currentPerson, nextPerson) => {
    let ageCurrent = 0;
    let ageNext = 0;

    if (currentPerson.yearOfDeath) {
      ageCurrent = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    } else {
      ageCurrent = new Date().getFullYear() - currentPerson.yearOfBirth;
    }
    if (nextPerson.yearOfDeath) {
      ageNext = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
    } else {
      ageNext = new Date().getFullYear() - nextPerson.yearOfBirth;
    }
    return ageCurrent > ageNext ? currentPerson : nextPerson;
  });
  return oldestPerson;
}

module.exports = findTheOldest
