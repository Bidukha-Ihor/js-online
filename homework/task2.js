//Перепишите `if..else` с использованием нескольких операторов `?`.
//var login = 'Pitter';
var login = 'Owner';

var message;

if (login == 'Pitter') {
    message = 'Hi';
} else if (login == 'Owner') {
    message = 'Hello';
} else if (login == '') {
    message = 'unknown';
} else {
    message = '';
}
console.log(message);

message = login == 'Pitter' ? 'Hi'
            : login == 'Owner' ? 'Hello'
                : login == '' ? 'unknown'
                    : '';
console.log(message);
