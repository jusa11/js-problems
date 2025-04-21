/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let team1 = 0;
    let team2 = 0;
    points.forEach((point) => {
        let newArr = point.split("-");
        team1 += +newArr[0];
        team2 += +newArr[1];
    });
    if (team1 > team2) {
        return 1;
    }
    if (team1 < team2) {
        return 2;
    } else {
        return undefined;
    }
}

console.log(getWinner(["36-32", "32-24", "20-28", "30-26"]));

module.exports = getWinner;
