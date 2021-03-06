// ####Задача 8
//
// Напишите функцию `f` . Данная функция принимает один параметр: одноуровневый или многоуровневый массив. Возвращает данная функция сумму всех элементов на всех уровнях.
//
//     Обратите внимание что функция должна возвращать число 0, если при проходе всех уровней не было найдено ни одного числа.
//
//     Функция должна содержать проверки:
//
//     - Первый параметр обязателен и может принимать только массив
// - Генерировать ошибку если на каком то уровне было найдено не число и не массив
//
//     ```javascript
// const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
// f(arr); // 12
// const arr2 = [[[[[1,2]]]]];
// f(arr2); // 3
// const arr3 = [[[[[1,2]]],2],1];
// f(arr3); // 6
// const arr4 = [[[[[]]]]];
// f(arr4); // 0
// const arr5 = [[[[[],3]]]];
// f(arr5); // 3
// ```

function f(arr){
    if(!Array.isArray(arr)){
        throw new TypeError('Первый параметр обязателен и может принимать только массив');
    }
    let sum =0;
    let cb = function (val){
       if(Array.isArray(val)){
           val.flatMap(cb);
       } else if (typeof val === 'number'){
           sum += val;
       } else {
           throw new TypeError('на каком то уровне было найдено не число и не массив');
       }
    }
    arr.flatMap((item)=>{
        cb(item);
    });
    return sum;
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr));
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); // 3
