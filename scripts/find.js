/*
//Activity 1 (Easy): You have an array of numbers: [3, 7, 12, 19, 21]. Find the first number that is greater than 10.
const numbers = [3, 7, 12, 19, 21];

const found = numbers.find(function (num) {
  return num > 10;
});
console.log(found);


//Activity 2 (Easy): Given an array of strings: ["apple", "banana", "cherry", "date"]. Find the first string that starts with the letter "c".

const strings = ["apple", "banana", "cherry", "date"];

const found = strings.find(string => string.startsWith("c")); //let's you find any string that starts with a certain character.
console.log(found);

//Activity 3 (Medium): You have an array of objects representing students, find the first student whose score is below 70.

const students = [
  { name: "Alice", score: 82 },
  { name: "Bob", score: 67 },
  { name: "Charlie", score: 95 },
  { name: "David", score: 58 }
];

const lowScore = students.find((student) => {
  return student.score < 70;
});
console.log(lowScore);


//Activity 4 (Medium): Given an array of numbers, find the first even number greater than 10.

const number = [5, 12, 8, 130, 44];

const result = number.find((num) => {
  return num > 10 && num % 2 === 0;
});
console.log(result);


//Activity 5 (Hard): You have an array of objects representing products, find the first product where the name contains the letter "o" and the price is above 50.

const products = [
  { id: 101, name: "Laptop", price: 30 },
  { id: 102, name: "Carpet", price: 25 },
  { id: 103, name: "Key", price: 75 },
  { id: 104, name: "knob", price: 300 }
];

const found = products.find((o) => {
  return o.price > 50 && o.name.includes("o")  // Let's you find a certain character inside a string.
});
console.log(found);


//Activity 6 (Hard): You have an array of mixed types, find the first string that has exactly 5 characters.

const array = [12, "hello", true, 42, "world", false];

const found = array.find((arrayyy) => {
  return typeof arrayyy === "string" && arrayyy.length === 5;
  //If an array has mixed types, always check the type of your array first.
});
console.log(found);
*/


/*
Key Differences from other array methods:

vs .filter() → .filter() returns all elements that match the condition as a new array, while .find() stops at the first match and returns just that element.

vs .map() → .map() transforms every element into something new; .find() only searches and returns one element.

vs .some() → .some() returns a boolean if at least one element passes; .find() returns the element itself.

*/