//how to avoid object mutation

//VERSION 1
const person = {
    name: 'Bob',
    age: 45
}

const person2 = Object.assign({}, person); //creates new empty object and assigns person's properties

person2.age = 26

console.log(person.age) //prints 45
console.log(person2.age) //prints 26

// IMPORTANT if an object has NESTED OBJECT, it won't be copied as NEW, the reference will be still active

//VERSION 2
const person3 = { ...person} // operator SPREAD - объект разделяется на свойства и эти свойства сразу присваиваются person3

person3.name = 'Alice'

console.log(person3.name) //prints Alice
//REFERENCE IS STILL ACTIVE FOR NESTED OBJECTS WITH {... OBJECT}

//VERSION 3
const person4 = JSON.parse(JSON.stringify(person))

person4.name = 'Ana'

console.log(person4) //prints { name: 'Ana', age: 45 }
console.log(person4.name) //prints Ana

//ANOTHER EXAMPLE (now NESTED OBJECTS NO LONGER HAVE REFERENCE TO ORIGINAL)
const monster = {
    name: 'Kuro',
    side: 'Evil',
    aqe: 347,
    home: {
        country: 'Japan',
        city: 'Tokyo'
    }
}

const monster2 = JSON.parse(JSON.stringify(monster))

monster2.home.city = 'Kyoto'
monster2.side = 'Good'

console.log (monster) /*prints {
    name: 'Kuro',
    side: 'Evil',
    aqe: 347,
    home: { country: 'Japan', city: 'Tokyo' }
  } */

console.log (monster2) /* prints {
    name: 'Kuro',
    side: 'Good',
    aqe: 347,
    home: { country: 'Japan', city: 'Kyoto' }
  } */