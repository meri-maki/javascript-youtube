//PROMISES

const { reject } = require("async")

// Промисы позволяют обрабатывать отложенные во времени события

const myPromise = new Promise((resolve, reject) => {
    /*
    * Выполнение асинхронных действий
    *
    * Внутри этой функции нужно в результате вызвать одну из функций resolve or reject
    */
})

myPromise
    .then (value => {
        /*
        * Действия в случае успешного исполнения промиса
        * Значение value -- это значение, переданное в вызове функции resolve ВНУТРИ промиса
        */
    })
    .catch (error => {
        /*
        * Действия в случае отклонения промиса
        * Значение value -- это значение, переданное в вызове функции resolve ВНУТРИ промиса
        */
    })

    //RUN FROM BROWSER

// fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error))




 // fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    console.log(response)
    response.json()
  })
  .then(json => console.log(json))
  .catch(error => console.error(error))



  //getData an be imported to avoid double .then
  const getData = url => new Promise (
    (resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
  )


  getData('https://jsonplaceholder.typicode.com/todos')
  .then(data => console.log(data))
  .catch(error => console.log(error.message))


  //ASYNC AWAIT
  //Асинхронная функция всегда возвращает промис вместо значения

  async function asyncFn0() { //ASYNC before function
    //Always returns Promise
}

const asyncFn1 = async () => { //ASYNC before () parameters
    //Always returns Promise
}



// EXAMPLE
const asyncFn2 = async () => {
    return 'Success!'
}

asyncFn2()

asyncFn2()
    .then(value => console.log(value))   


// EXAMPLE WITH ERROR
const asyncFn3 = async () => {
    throw new Error('ERROR!')
}

asyncFn3()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))



//AWAIT
const asyncFn4 = async () => {
    await Promise
}



asyncFn4()

//EXAMPLE 
const timerPromise = () => 
new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000))

const asyncFn5 = async () => {
    console.log('Timer start')
    await timerPromise()
    console.log('Timer stop')
}

asyncFn5()

//EVOLVED EXAMPLE ABOVE
const timerPromise = () => 
new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000))

const asyncFn5 = async () => {
    console.log('Timer start')
    const startTime = performance.now() //так можно засечь время
    await timerPromise()
    const endTime = performance.now()
    console.log('Timer stopped', endTime - startTime)
}

asyncFn5()

// Переход с Промисов на ASYNC/AWAIT

/* OLD
const getData = url => new Promise (
    (resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
  )


  getData('https://jsonplaceholder.typicode.com/todos')
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
*/

const getData = async url => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try {
    const data = await getData(url) //use try/catch to avold uncaught error //avoid using AWAIT outside ASYNC
    console.log(data)
} catch (error) {
    console.log(error.message)
}