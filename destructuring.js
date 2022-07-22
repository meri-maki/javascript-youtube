// DESTRUCTURING ASSIGNMENT

//OBJECT
const userProfile = {
    name: 'Ana',
    age: 23,
    commentsQty: 11,
    hasSignedAgreement: false
}

const {name, age } = userProfile // name and age are new variables
const {hasSignedAgreement } = userProfile

console.log(name)
console.log(age)
//console.log(commentsQty) ----- NOT DEFINED

//ARRAYS
const fruits = ['banana', 'apple']
const [fruit1, fruit2] = fruits

console.log(fruit1) //prints banana
console.log(fruit2) //prints apple

//FUNCTIONS
const userInfo = ({name, age, commentsQty}) => {
    if (!commentsQty) {
        return console.log(`User ${name}, age ${age} has no comments.`)
    }

    return console.log(`User ${name}, age ${age} has ${commentsQty} comments.`)
}

userInfo(userProfile) //prints User Ana, age 23 has 11 comments.