// ARRAYS ----- МАССИВЫ

const myArray = [1, 2, 3]
console.log(myArray) //[ 1, 2, 3 ]

myArray.forEach(el => console.log(el*2)) //prints 2 4 6

console.log(myArray) //[ 1, 2, 3 ] FOREACH DOESNT CHANGE ORIGINAL ARRAY

const newArray = myArray.forEach(el => console.log(el*2))
console.log(newArray) // returns undefined FOREACH RETURNS UNDEFINED

const newArray2 = myArray.map(el => el*9)
console.log(newArray2) // returns NEW ARRAY [ 9, 18, 27 ] WITHOUT CHANGING ORIGINAL
