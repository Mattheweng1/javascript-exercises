const findTheOldest = function(people) {
    const peopleWithAge = people.map((person) => {
        if ('yearOfDeath' in person) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = new Date().getFullYear() - person.yearOfBirth;
        }
        return person;
    });
    peopleWithAge.sort((personA, personB) => {
        return personA.age > personB.age ? -1 : 1;
    });
    const oldestPerson = peopleWithAge[0];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
