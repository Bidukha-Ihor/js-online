//Написать код который посчитает сумму всех парных элементов в масиве.
var arr = [1, 2, 3, 4];
var sum = 0;
for (let a of arr) {
    if (a % 2 === 0) {
        sum += a;
    }
}
console.log(sum);
console.log('---by key---');
sum = 0;
for (let i in arr) {
    if (i % 2 === 0) {
        sum += arr[i];
    }
}
console.log(sum);