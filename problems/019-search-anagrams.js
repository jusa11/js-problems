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

    let indexOfAnagram = [];

    strToArr.reduce((acc, word, index) => {
        const sortWord = word
            .toLocaleLowerCase()
            .split("")
            .filter((symbol) => symbol !== ".");
        const newWord = sortWord.sort().join("");

        acc.findIndex((word, currentIndex) => {
            if (word === newWord) {
                indexOfAnagram = [...indexOfAnagram, currentIndex, index].sort(
                    (a, b) => a - b
                );
            }
        });

        return [...acc, newWord];
    }, []);


    return indexOfAnagram.map(i => strToArr[i]).join(" ")


}

console.log(searchAnagrams("Лист Путь СТИЛ ТУПЬ стиль путь литс тупь"));

module.exports = searchAnagrams;
