//OBJECTS

const button = {
    width: 100,
    text: 'Button'
}

const redButton = {
    ...button, // ADDS PROPERTIES OF BUTTON TO REDBUTTON BY ... OPERATOR
    color: 'red'
}

console.log(button); //prints { width: 100, text: 'Button' }

console.log(redButton); //prints { width: 100, text: 'Button', color: 'red' }

redButton.width = 200;

console.log(redButton); //prints { width: 200, text: 'Button', color: 'red' }  DOESNT CHANGE ORIGINAL OBJECT VALUE

const button2 = {
    width: 100,
    text: 'Button',
    color: 'black' //LETS SEE WHAT HAPPENS IF WE TRY TO CREATE NEW OBJECT BUT WITH DIFFERENT COLOR
}

const redButton2 = {
    ...button2, // IF WE PUT ...BUTTON AFTER COLOR: 'RED', 'RED' WILL BE OVERRIDDEN BY 'BLACK' AS IN THE COPIED OBJECT
    color: 'red' //THIS VALUE OVERRIDES 'BLACK' IN COPIED OBJECT
}

console.log(button2); //prints { width: 100, text: 'Button', color: 'black' }

console.log(redButton2); //prints { width: 100, text: 'Button', color: 'red' }

// COPYING MULTIPLE OBJECT PROPERTIES TO NEW OBJECT - MERGE OBJECTS

const cat = {
    size: 'small',
    color: 'white'
}

const dog = {
    name: 'Jack',
    weight: 1
}

const catodog = {
    ...cat,
    ...dog
}

console.log(catodog); //prints { size: 'small', color: 'white', name: 'Jack', weight: 1 }