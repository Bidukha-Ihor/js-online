// Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обьязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.
//
//     ```js
// f(1); // Воскресенье
// f(2); // Понедельник
// f(8); // Error: parameter should be in the range of 1 to 7
// f('1'); // Error: parameter type is not a Number

var f = function (day) {
    let result = '';
    if (typeof day !== 'number') {
        throw new Error('all parameters type should be a Number!');
    }
    if (day < 1 || day > 7) {
        throw new Error('parameter should be in the range of 1 to 7');
    }
    switch (day) {
        case 1:
            result = 'Понедельник';
            break;
        case 2:
            result = 'Вторник';
            break;
        case 3:
            result = 'Среда';
            break;
        case 4:
            result = 'Четверг';
            break;
        case 5:
            result = 'Пятница';
            break;
        case 6:
            result = 'Суббота';
            break;
        case 7:
            result = 'Воскресенье';
            break;
    }
    return result;
}

console.log(f(1)); // Воскресенье
console.log(f(2)); // Понедельник
try {
    f(8); // Error: parameter should be in the range of 1 to 7
} catch (e) {
    console.log(e);
}
console.log(f('1')); // Error: parameter type is not a Number