// Задача-2
// ####Задача 2
//
// Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
//
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
//
//     ```javascript
// const arr = [1,2,3];
// filter(arr, function(item, i, arr) {});
// ```
var filter = function (arr, cb) {
    let result = new Array();
    if (Array.isArray(arr) && typeof cb === 'function') {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if(cb(item, i, arr)){
                result.push(item) ;
            }
        }
    } else {
        throw new TypeError('incorrect arguments!');
    }
    return result;
}
const arr = [1, 2, 3];

let result = filter(arr, function (item, i, arr) {
    return item > 1;
});

console.log(result);

console.log(filter(arr, ''));
console.log(filter('hello', function (item, i, arr) {
    return false;
}));