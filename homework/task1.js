//Перепишите код, заменив оператор `if` на тернарный оператор `?`
var a = 1;
var b = 2;
var result;
if (a + b < 4) {
    result = true;
} else {
    result = false;
}
console.log('operator if =' + result);
result = (a + b < 4) ? true : false;
console.log('ternary operator =' + result);
result = a + b < 4;
console.log('expression =' + result);