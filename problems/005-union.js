/**
 * Напишите функцию union(a, b) возвращающую упорядоченный по возрастанию массив
 * состоящий из чисел встречающихся в обоих наборах.
 *
 * Пример:
 *
 * union([1, 1, 3, 2, 5], [5, 3, 7, 7]) === [3, 5]
 * union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18]) === [6, 12]
 * union([1, 2, 3], [11, 0, -1]) === []
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */

function union(a, b) {
    return [...a]
        .sort((a, b) => a - b)
        .filter((num, index, arr) => num !== arr[index + 1])
        .filter((num) => b.includes(num));
}
console.log(union([1, 1, 3, 2, 5], [5, 3, 7, 7]));

module.exports = union;
