/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
    if (x === "" || y === "") return false;

    const sortX = x.toLocaleLowerCase().split("").sort();
    const sortY = y.toLocaleLowerCase().split("").sort();
    console.log(sortX.join());

    return sortX.join() === sortY.join();
}

console.log(anagram("Волос", "Слово"));

module.exports = anagram;
