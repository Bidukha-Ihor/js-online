// Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
//
//     ```js
// f(1,2,3); // 6
// f(1,1,1,1,1,1,1,1); // 8
// f(1,2,'s',4); // Error: all parameters type should be a Number

function f(...arr) {
    let summ = 0;
    for (n of arr) {
        if (typeof n === 'number') {
            summ += n;
        } else {
            throw new Error('all parameters type should be a Number!');
        }
    }
    return summ;
}

console.log(f(1, 2, 3)); // 6
console.log(f(1, 1, 1, 1, 1, 1, 1, 1)); // 8
console.log(f(1, 2, 's', 4)); // Error: all parameters type should be a Number