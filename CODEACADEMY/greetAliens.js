/* Write a function, greetAliens(), that takes in an array of strings 
and uses a for loop to print a greeting with each string in the array.*/

const greetAliens = greet => {
  for (let i=0; i<greet.length; i++) {
    console.log(`Oh powerful ${greet[i]}, we humans offer our unconditional surrender!`);
  }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
/* prints Oh powerful Blorgous, we humans offer our unconditional surrender!
Oh powerful Glamyx, we humans offer our unconditional surrender!
Oh powerful Wegord, we humans offer our unconditional surrender!
Oh powerful SpaceKing, we humans offer our unconditional surrender! */

// ANOTHER SOLUTION
aliens.forEach(name => console.log(`Oh powerful ${name}, we humans offer our unconditional surrender!`))