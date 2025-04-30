/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */

function decrypt(secret) {
    let i = 0;
    let str = "";

    do {
        let code = secret.charCodeAt(i);

        if (code === 32) {
            str += String.fromCharCode(code);
        } else {
            if (code === 97) {
                str += String.fromCharCode(122);
            }
            if (code === 122) {
                str += String.fromCharCode(97);
            } else {
                str += String.fromCharCode(code + 1);
            }
        }

        i++;
    } while (secret.length > i);

    return str;
}

console.log(decrypt("zmc vd hfmnqd rozbdr"));

module.exports = decrypt;
