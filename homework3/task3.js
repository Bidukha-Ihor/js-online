// ####Задача 3
//
// Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
//
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
//
//     ```javascript
// const arr = [1,2,3];
// every(arr, function(item, i, arr) {});
// ```

var every = function (arr, cb) {
    if (Array.isArray(arr) && typeof cb === 'function') {
        for (let i = 0; i < arr.length; i++) {
            if(!cb(arr[i], i, arr)){
               return false;
            }
        }
    } else {
        throw new TypeError('incorrect arguments!');
    }
    return true;
}
const arr = [1, 2, 3];

let result1 = every(arr, function (item) {
    return item > 1;
});

let result2 = every(arr, function (item) {
    return item > 0;
});

console.log(result1);
console.log(result2);

console.log(every(arr, ''));
console.log(every('hello', function (item, i, arr) {
    return false;
}));