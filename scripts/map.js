/*
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(num => num * 2
)// doesn't need to use return. Will return automatically

console.log(doubledNumbers);

//BASIC SYNTAX FOR map()
const numbers = [1, 2, 3]; 
const multiplier = 10;

const transformed = numbers.map(function (currentValue, i, arr) {
  console.log('Current Value: ', currentValue);
  console.log('Index ', i);
  console.log('Array: ', arr);
  console.log('This Value: ', this);
  return currentValue * this;
}, multiplier); // We’ll use "thisValue" to provide a multiplier 


console.log('Result: ', transformed);
*/

const names = ["anna", "john", "mike"];

const newNames = names.map((name) => {
  return name.toUpperCase()
}) //in JavaScript when using a curly braces You need to explicitly use return, otherwise values will return undefined
console.log(newNames);




