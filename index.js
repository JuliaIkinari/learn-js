const prompt = require('prompt-sync')();
// const переменная = 'Hello world!'
// console.log('переменная')
// console.log(переменная)
// переменная = 'fuck u'
// console.log(переменная)
console.clear()
let number = 23;
let boolean = true
let number_as_string = '23'
let name = 'julia';
// console.log(number + number)
// console.log(boolean)
// console.log(number_as_string + number_as_string)
// console.log(name + name)
// console.log(number === 23)
let input = prompt('сколько тебе лет?')
// console.log(+input)
let input_as_number = +input

if (input_as_number < 18) {
  console.log('Вы не совершенно летний')
}
else if(input_as_number < 21){
  console.log('Если вы из России, добро пожаловать!')
}
else{

  console.log('Добро пожаловать в Бар!!!')
}
