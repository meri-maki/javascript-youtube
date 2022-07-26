//based on PROTOTYPES you can create multiple INSTANCES (ЭКЗЕМПЛЯРЫ)

class Comment { //NAME IN PASCAL CASE (First Letter)
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote () {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment')

console.log(firstComment) //prints Comment { text: 'First comment', votesQty: 0 }

firstComment instanceof Comment // true
firstComment instanceof Object // true

firstComment.upvote()
console.log(firstComment.votesQty) //prints 1

console.log(firstComment.valueOf()) //Comment { text: 'First comment', votesQty: 1 }

//STATIC METHODS 
// НЕ НАСЛЕДУТСЯ ЭКЗЕМПЛЯРАМИ КЛАССОВ

class Comment2 {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

Comment2.mergeComments('abc.', 'def') // 'abc. def'

const secondComment = new Comment2('Second comment')

console.log(secondComment) //Comment2 { text: 'Second comment', votesQty: 0 }

//secondComment.mergeComments('a', 'b') //TypeError: secondComment.mergeComments is not a function

//mergeComment is not accessible for PROTOTYPES of COMMENT2

//EXTENDING CLASSES

class NumbersArray extends Array { //no need to add CONSTRUCTOR it is called automatically by PARENT (Array)
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}

const myArray = new NumbersArray(2, 5, 7)

console.log(myArray) //prints NumbersArray(3) [ 2, 5, 7 ]
myArray.sum()
console.log(myArray.sum()) //prints 14

