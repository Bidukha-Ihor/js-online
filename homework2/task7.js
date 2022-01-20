// Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой). Данная функция должна обьязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.
//
//     ```js
// getDivisors(12); // [1, 2, 3, 4, 6, 12]
// getDivisors('Content'); // Error: parameter type is not a Number
// getDivisors(0); // Error: parameter can't be a 0

function getDivisors(n) {
    if (typeof n !== 'number') {
        throw new Error('all parameters type should be a Number!');
    }
    if (n < 1) {
        throw new Error('parameter can\'t be a 0');
    }
    let devisors = [];
    let dev = 0;
    do {
        dev++;
        if (n % dev === 0) {
            devisors.push(dev);
        }
    } while (dev <= n)
    return devisors;
}

console.log(getDivisors(12));
try {
    getDivisors('Content'); // Error: parameter type is not a Number
}catch (e) {
    console.log(e);
}
console.log(getDivisors(0)); // Error: parameter can't be a 0