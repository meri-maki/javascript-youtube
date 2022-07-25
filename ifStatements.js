// IF

const age = 26

/*if (age > 18) {
    console.log('Is adult')
} else if (age >= 12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}*/

//after if statement above we only get 1 result

if (age > 18) {
    console.log('Is adult')
}

if (age >= 12) {
    console.log('Is teenager')
} 
if (age < 12) {
    console.log('Is child')
}

//if age = 26 we get 2 results Is adult AND Is teenager

//TO GET ONLY ONE RESULT WE NEED TO SPECIFY CONDITIONS

if (age >= 18) {
    console.log('Is adult')
}

if (age >= 12 && age < 18) {
    console.log('Is teenager')
} 
if (age < 12) {
    console.log('Is child')
}

// ТЕРНАРНЫЙ ОПЕРАТОР

// CONDITION ? EXPRESSION 1 : EXPRESSION 2

// IF CONDITIONS is TRUE do EXPRESSION 1 if FALSE do EXPRESSION 2

/* BETTER DO THIS (MORE READABLE)

CONDITION
    ? EXPRESSION 1
    : EXPRESSION 2
*/

const value = 11

value
    ? console.log('True')
    : console.log('False')

// results in True

