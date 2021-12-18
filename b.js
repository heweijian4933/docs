// b.js
let Login = require('./a.js')

const login = new Login('admin', '123456')
console.log(login.username); // 'admin'

console.log(login.checkPassword('123456'));   // true

console.log(login.PASSWORD)  // undefined
// console.log(login[PASSWORD]) // throw error, PASSWORD is not defined, 因在本文这里 PASSWORD 作为一个变量还未定制，所以会报错
console.log(login["PASSWORD"]) // undefined

let PASSWORD = Symbol();

login[PASSWORD] = '378139'
login.PASSWORD = "222222222"
console.log(login[PASSWORD]) // '378139'
console.log(login.PASSWORD)  // '222222222'
console.log(login); //
/*
Login {
  username: 'admin',
  PASSWORD: '222222222',
  [Symbol()]: '123456',
  [Symbol()]: '378139'
}
 */

console.log(login.showLoginNative());
/*
showLoginNative admin 123456 Login {
  username: 'admin',
  PASSWORD: '222222222',
  [Symbol()]: '123456',
  [Symbol()]: '378139'
}
*/

/*
所以 Symbol 更像是一种类字符串，在两个独立的作用域分别对相同的键赋值 symbol 类型的值的时候，该变量能够独立起作用，不会相互干扰
*/