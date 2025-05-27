/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    const arr = value.split("");

    let count = 1;
    let newArr = [];

    arr.forEach((el, index) => {
        if (el === arr[index + 1]) {
            count += 1;
        } else if (count > 1) {
            newArr.push(count + el);
            count = 1;
        } else {
            newArr.push(el);
        }
    });

    return newArr.join("");
}

console.log(rle("AAABC"));
console.log(rle("aAAaaB"));
console.log(rle("false"));

module.exports = rle;
