/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    if (!value) return "";

    const strToArr = value.split(/[.,? ]+/).filter((el) => el !== "");

    const countWord = {};

    for (const [index, word] of strToArr.entries()) {
        const sortWord = word
            .toLocaleLowerCase()
            .split("")
            .filter((symbol) => symbol !== ".")
            .sort()
            .join("");

        if (!countWord[sortWord]) {
            countWord[sortWord] = [];
        }

        countWord[sortWord].push({ [word]: index });
    }

    let resArr = [];

    for (const key in countWord) {
        if (countWord[key].length > 1) {
            resArr = [...resArr, ...countWord[key]];
        }
    }

    let indexes = [];
    for (const obj of resArr) {
        for (const key in obj) {
            indexes = [...indexes, obj[key]];
        }
    }

    const anagramsWords = indexes.sort().map((el, index) => {
        return strToArr[el];
    });

    return anagramsWords.join(" ");
}

console.log(searchAnagrams("Лист Путь СТИЛ ТУПЬ стиль путь литс тупь"));
console.log(searchAnagrams("Вижу апельсин значит живу. Спаниель"));

module.exports = searchAnagrams;
