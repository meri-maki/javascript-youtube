// ERRORS

/* TRY/CATCH
try {
    //выполнение блока кода
} catch (error) {
    //этот блок выполняется в случае возникновения ошибки в блоке try
} */

/* EXAMPLE WITH ERROR
const fnWithError = () => {
    throw new Error('Some error')
}

fnWithError() // in browser Uncaught Error: Some error

console.log('Continue') */

const fnWithError = () => {
    throw new Error('Some error')
}

try {
    fnWithError()
} catch (error) {
    console.error(error) //вывод ошибки (полностью)
    console.log(error.message)  //сообщение(текст) ошибки
}

console.log('Continue') // with TRY/CATCH the rest of the code is executed

/* WHAT WAS LOGGED INTO CONSOLE
Error: Some error ----- console.error(error)
    at fnWithError (/Users/anastasiaprakhova/Documents/CODING/JS/Javascript course/javascript-youtube/script-5.js:20:11)
    at Object.<anonymous> (/Users/anastasiaprakhova/Documents/CODING/JS/Javascript course/javascript-youtube/script-5.js:24:5)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
Some error---- console.log(error.message)
Continue */