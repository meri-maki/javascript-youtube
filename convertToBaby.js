/*Write a function, convertToBaby(), that takes in an array as an argument and,
using a loop, returns a new array with each string in the array prepended with 'baby '.*/

const convertToBaby = arr => {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}

/*
// As a function declaration:
function convertToBaby(arr) {
    const babyArray = [];
    for (let i = 0; i < arr.length; i++) {
          babyArray.push('baby ' + arr[i]);
    }
    return babyArray
}
*/ 

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) /*prints [ 'baby panda',
'baby turtle',
'baby giraffe',
'baby hippo',
'baby sloth',
'baby human' ] */

// ANOTHER SOLUTION
const babyAnimals = animals.map(x => 'baby ' + x)

console.log(babyAnimals) //prints same result