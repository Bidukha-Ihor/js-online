// ####Задача 4
//
// Создать имплементацию функции `some`, логика работы такая же как и у родного метода.
//
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
//
//     ```javascript
// const arr = [1,2,3];
// some(arr, function(item, i, arr) {});
// ```
var some = function (arr, cb) {
    if (Array.isArray(arr) && typeof cb === 'function') {
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i], i, arr)) {
                return true;
            }
        }
    } else {
        throw new TypeError('incorrect arguments!');
    }
    return false;
}
const arr = [1, 2, 3];

let result1 = some(arr, (item) => {
    return item > 1;
});

let result2 = some(arr, (item, i) => {
    return i === 2;
});

console.log(result1);
console.log(result2);

//оригинальная функция
console.log(arr.some((item) => {
    return item === 3;
}));

console.log(some(arr, ''));
console.log(some('hello', function (item, i, arr) {
    return false;
}));