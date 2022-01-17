//Отсортировать массив по возрастанию.
var arr = [6, 5, 4, 3, 2, 1];
// [1,2,3,4,5,6]
for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);