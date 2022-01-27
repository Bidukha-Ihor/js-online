// ####Задача 6
//
// Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.
//
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только массив
// - Второй параметр обязателен и может принимать только функцию
// - Третий параметр обязателен и может принимать только строку или число
//
//     ```javascript
// const arr = [1,2,3];
// const acc = 0;
// reduceRight(arr, function(acc, item, i, arr) {}, acc);
// ```

var reduceRight = function (arr, cb, acc) {
    if (!Array.isArray(arr)) {
        throw new TypeError('Первый параметр обязателен и может принимать только массив');
    }
    if (typeof cb !== 'function') {
        throw new TypeError('Второй параметр обязателен и может принимать только функцию');
    }
    if (!(typeof acc === 'string' || typeof acc === 'number')) {
        throw new TypeError('Третий параметр обязателен и может принимать только строку или число');
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = cb(acc, arr[i], i, arr)
    }
    return acc;
}
const arr = [1, 2, 3];

let result = reduceRight(arr, (acc, item) => {
    console.log(acc);
    return acc + item * 2;
}, 0);

console.log(result);

reduceRight(arr, (acc, item) => {
    console.log(acc);
    return acc + item * 2;
}, {});