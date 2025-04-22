/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
    const toArr = value.split("");
    let count = toArr.length;

    toArr.forEach((el) => (el !== toArr[count - 1] ? false : count--));
    return count === 0 ? true : false;
}

console.log(isPalindrome("true"));

module.exports = isPalindrome;
