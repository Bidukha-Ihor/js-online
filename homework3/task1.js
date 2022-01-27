// Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
//
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
//
//     ```javascript
// const arr = [1,2,3];
// forEach(arr, function(item, i, arr) {});
// ```

var forEach = function (arr, cb) {
    if (Array.isArray(arr) && typeof cb === 'function') {
        for (let i = 0; i < arr.length; i++) {
            cb(arr[i], i, arr)
        }
    } else {
        throw new TypeError('incorrect arguments!');
    }
}
const arr = [1, 2, 3];
forEach(arr, function (item, i, arr) {
    console.log('item arr[' + i + ']=' + item)
});

forEach(arr, '');