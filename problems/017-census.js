/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */

// Itterative approach
/* function census(list) {
    let personNumber;
    let age = -1;

    list.forEach((person, index) => {
        if (person.gender === "Male" && person.age > age) {
            personNumber = index;
            age = person.age;
        }
    });

    return age > 0 ? personNumber + 1 : undefined;
} */

// Declarative approach
function census(list) {
    const result = list.reduce(
        (acc, person, index) => {
            if (person.age > acc.maxAge && person.gender === "Male") {
                acc.maxAge = person.age;
                acc.personNumber = index + 1;
            }
            return acc;
        },
        { maxAge: -1, personNumber: undefined }
    );

    return result.personNumber !== undefined ? result.personNumber : undefined;
}

console.log(
    census([
        { age: 39, gender: "Male" },
        { age: 4, gender: "Female" },
        { age: 40, gender: "Female" },
        { age: 38, gender: "Male" },
    ])
);

module.exports = census;
