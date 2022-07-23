/*Write a function shoutGreetings() that takes in 
an array of strings and returns a new array. 
This new array should contain all the strings from 
the argument array but with capitalized letters and 
an exclamation point appended to the end: 'heya' will become 'HEYA!'*/

const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

/*
// As a function declaration AND using a loop:
function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']

console.log(shoutGreetings(greetings)) // prints [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]