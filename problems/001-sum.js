/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */

// 1 вариант
/* function sum(n) {
    return n <= 1 ? 1 : n + sum(n - 1);
} */

// 2 вариант
function sum(n) {
    if (n <= 1) {
        return 1;
    }
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result;
}
module.exports = sum;
