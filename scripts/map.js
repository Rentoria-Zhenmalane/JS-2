/*

//ACTIVITY 1
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(num => num * 2
)// doesn't need to use return. Will return automatically

console.log(doubledNumbers);

console.log('Result: ', transformed);


//ACTIVITY 3
const names = ["anna", "john", "mike"];

const newNames = names.map((name) => {
  return name.toUpperCase()
}) //in JavaScript when using a curly braces You need to explicitly use return, otherwise values will return undefined
console.log(newNames);



//ACTIVITY 5
const prices = [100, 250, 400];
const tax = 0.12; //This will be our thisValue in map()

const totalTax = prices.map(function (price) {
  return price + (price * tax) //Used PEMDAS here for shorter syntax
}, tax)// passed the value of tax from above(0.12) so we can use it later for computation.

console.log('VAT: ', totalTax);

//ACTIVITY 6
//Use map() to return a new array where: Each name is uppercase, Each name is prefixed with "@"

const users = ["zhen", "alex", "maria"];

const newNames = users.map((name) => {
  return "@" + name.toUpperCase();
});

console.log(newNames);


//ACTIVITY 7
//Use map() to return a new array where: Each number is multiplied by itself

const numbers = [2, 4, 6, 8];

const squaredNumber = numbers.map(number => number * number);
console.log(squaredNumber);


//ACTIVITY 8 
//Use map() to return a new array of objects like this:

//Rules:
//score >= 90 → "A"
//score >= 80 → "B"
//score >= 70 → "C"
//score >= 60 → "D"
//below 60 → "F"

const scores = [95, 82, 67, 58, 74];

const result = scores.map(function (score) {
  let grade

  if (score >= 90) {
    grade = 'A'
  } else if (score >= 80) {
    grade = 'B'
  } else if (score >= 70) {
    grade = 'C'
  } else if (score >= 60) {
    grade = 'D'
  } else {
    grade = 'F'
  }

  return {grade, score }; //returns the values in an object array 

});
console.log(result);



const items = [
  {
    name: 'shirt',
    price: 500
  },
  {
    name: 'pants',
    price: 1200
  },
  {
    name: 'shoes',
    price: 2500
  }
];



const newItem = items.map((item) => {
  let discountedPrice

  discountedPrice = item.price - 0.2 * item.price
  return {
    name: item.name,
    price: item.price,
    discountedPrice: discountedPrice
  };
})

console.log(newItem);
*/



//ACTIVITY 2
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


/*
Map works only on:
    ->real arrays
    ->things that behave like arrays if borrowed

-You can’t skip items with map().
-map() is an array method that ALWAYS takes a function and ALWAYS returns a new array by transforming each element.
-map() transforms, mutation methods modify.
-map() is just a fancy loop that returns a new array.

map() = loop → transform → return → new array

Mutation methods:
push()
pop()
splice()
sort()
reverse()

*/



