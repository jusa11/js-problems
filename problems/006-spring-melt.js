/**
 * Уставшие от необычно теплой зимы, жители решили узнать,
 * действительно ли это самая длинная оттепель за всю историю наблюдений за погодой.
 * Они обратились к синоптикам, а те, в свою очередь,
 * занялись исследованиями статистики за прошлые годы.
 * Их интересует, сколько дней длилась самая длинная оттепель.
 *
 * Напишите функцию getSpringMeltStreak(temperature) помогающую синоптикам вычислить самый длинный период,
 * в который среднесуточная температура ежедневно превышала 0 градусов Цельсия
 *
 * Пример:
 *
 * getSpringMeltStreak([-20, 30, -40, 50, 10, -10]) === 2
 * getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3]) === 4
 * getSpringMeltStreak([-10, 0, -10, 0, -10]) === 0
 *
 * @param {number[]} temperature массив чисел, где каждое – среднесуточная температура в соответствующий день
 * @returns {number}
 */
function getSpringMeltStreak(temperature) {
    let tempCount = 0;
    let maxTemp = 0;

    temperature.forEach((temp, index) => {
        if (temp > 0) {
            tempCount++;
        }
        if (temp < 0 ) {
            maxTemp = tempCount;
            tempCount = 0;
        }
        if (tempCount > maxTemp) {
            maxTemp = tempCount;
        }
    });
    return maxTemp;
}

console.log(getSpringMeltStreak([-20, 30, -40, 50, 10, -10]));

module.exports = getSpringMeltStreak;
