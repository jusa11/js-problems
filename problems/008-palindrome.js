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
    let left = 0;
    let right = toArr.length - 1;

    while (left < right) {
        if (toArr[left] !== toArr[right]) return false;

        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("true"));

module.exports = isPalindrome;
