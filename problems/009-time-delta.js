/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    const newX = x.split(":");
    const newY = y.split(":");

    const totalTime =
        newY[0] * 3600 +
        newY[1] * 60 +
        +newY[2] -
        (newX[0] * 3600 + newX[1] * 60 + +newX[2]);

    console.log(totalTime);
    return totalTime;
}

getTimeDelta("01:01:01", "02:02:02");

module.exports = getTimeDelta;
