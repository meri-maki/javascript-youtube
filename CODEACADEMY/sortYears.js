/*Write a function sortYears() that 
takes in an array of years, and, 
using the built-in .sort() method, 
returns that array with the years sorted in descending order.*/

const sortYears = arr => arr.sort();

const sortYearsDescending = arr => arr.sort((x,y) => y - x);
/*
// As a function declaration AND using a named function:
function sortYears(arr) {
      const checkYears = (year1, year2) => year2 - year1
      return arr.sort(checkYears)
}
*/

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years)) //prints [ 1922, 1951, 1963, 1970, 1982, 1999, 2011, 2018 ]
console.log(sortYearsDescending(years)) //prints [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]