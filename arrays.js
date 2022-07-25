// ARRAYS ----- МАССИВЫ

const myArray = [1, 2, 3]
console.log(myArray) //[ 1, 2, 3 ]

myArray.forEach(el => console.log(el*2)) //prints 2 4 6

console.log(myArray) //[ 1, 2, 3 ] FOREACH DOESNT CHANGE ORIGINAL ARRAY

const newArray = myArray.forEach(el => console.log(el*2))
console.log(newArray) // returns undefined FOREACH RETURNS UNDEFINED

const newArray2 = myArray.map(el => el*9)
console.log(newArray2) // returns NEW ARRAY [ 9, 18, 27 ] WITHOUT CHANGING ORIGINAL

//EXAMPLE OF FOREACH - HOW CAN BE USED WITH 2 PARAMETERS
const example = ['first', 'second', 'third']

example.forEach((element, index) => {
    console.log(element, index)
}) 
/* prints first 0
second 1
third 2 */

//OBJECTS AND ARRAYS
const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

Object.values(myObject).forEach(value => {
    console.log(value)
})

/* prints 
10
true
abc */

Object.keys({}) //results in EMPTY ARRAY

Object.keys({name: 'Ana', age: 23}) //results in ['name', 'age'] ARRAY

Object.values({name: 'Ana', age: 23}) //results in ['Ana', 23]
