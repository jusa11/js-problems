/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    let numberToArray = number.split("");

    let nums1 = numberToArray.slice(0, 3).reduce((acc, num) => acc + +num, 0);
    let nums2 = numberToArray.slice(3, 6).reduce((acc, num) => acc + +num, 0);

    return nums1 === nums2;
}

console.log(checkTicket("005212"));

module.exports = checkTicket;
