// Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.
//
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если был передан пустой массив
//
//     ```javascript
// const arr = [3,2,1];
// reverse(arr); // [1,2,3]
// ```

function reverse(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('параметр обязателен и может принимать только массив');
    }
    if (arr.length === 0) {
        throw new Error('пустой массив');
    }
    let res = new Array();
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res;
}

const arr = [3, 2, 1];
console.log(reverse(arr)); // [1,2,3]

try {
    reverse(undefined);
} catch (e) {
    console.log(e)
}
reverse([]);