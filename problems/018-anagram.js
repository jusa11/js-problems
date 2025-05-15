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
    if (x.length !== y.length) {
        return false;
    }
    if (x === "" || y === "") {
        return false;
    }
    const wordX = x.toLocaleLowerCase().split("");
    const wordY = y.toLocaleLowerCase().split("");
    let res = true;

    wordX.forEach((letterX, index) => {
        const countLetterX = wordX.filter((el) => el === letterX);
        const countLetterY = wordY.filter((el) => el === letterX);
   
        if (countLetterX.length !== countLetterY.length) {
            res = false;
            return;
        }

        const checkLetterX = wordY.includes(letterX);
        const checkLetterY = wordX.includes(wordY[index]);
        if (!checkLetterX || !checkLetterY) {
            res = false;
        }
    });

    return res;
}

console.log(anagram("11222", "11122"));

module.exports = anagram;
