/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    if (value === 0 || value === 1) {
        return value;
    }
    let fib1 = 0;
    let fib2 = 1;
    let sum;
    let i = 1;

    do {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
        ++i;
    } while (sum < value);
    return sum === value ? i : undefined;
}

console.log(isFibonacci(55));

module.exports = isFibonacci;
