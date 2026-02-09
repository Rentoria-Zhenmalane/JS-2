

//ACTIVITY1
const numbers = [1, 2, 3, 4, 5, 6];

const evenNum = numbers.filter(num => num % 2 === 0)
console.log(evenNum);


//Acitivity 2: Filter the array so that it only includes words with 3 letters or less.

const words = ["hi", "hello", "hey", "bye", "good"];
const newWord = words.filter(function (word) {
  /*
    if (word.length <= 3) {
      return word; //returns the string if condition is true 
    }
      //works but code below is cleaner and semantically correct.
  */
  return word.length <= 3; //cleaner version
  // Returns the boolean itself
});
console.log(newWord);



//ACTIVITY 3 (medium): Return only students who passed (score ≥ 75).

const students = [
  { name: "Anna", score: 80 },
  { name: "Ben", score: 70 },
  { name: "Cara", score: 90 }
]

const passed = students.filter((student) => {
  return student.score >= 75;
});
console.log(passed);


//ACTIVITY 4 (medium): Filter out strings that don’t include “@”.
const emails = [
  "user@gmail.com",
  "invalidEmail",
  "admin@yahoo.com",
  "hello.world"
];

const newE = emails.filter((e) => {
  return e.includes("@");// .includes() is a JS method that checks if a string has a certain value.
});
console.log(newE);


//ACTIVITY 5 (HARD): Return users who are active AND at least 18 years old.

const users = [
  { name: "Leo", age: 18, active: true },
  { name: "Mia", age: 22, active: false },
  { name: "Noah", age: 19, active: true }
];

const u = users.filter(function (user) {
  /*
  if (user.age >= 18 && user.active === true) {
    return user;
  };
  //Works but the code below is much clenaer and semantically correct.
  */
  return user.age >= 18 && user.active //active is already a boolean so no need to active === true

});
console.log(u);


//ACTIVITY 6 (HARD): Filter products that are in stock and cost less than 500.

const products = [
  { name: "Shoes", price: 1200, inStock: true },
  { name: "Shirt", price: 450, inStock: true },
  { name: "Cap", price: 300, inStock: false },
];

const p = products.filter(function (product) {
  return product.price <= 500 && product.inStock;
});
console.log(p);

/*
filter() asks one question for each item:
❓ Should this item stay in the array?
👉 Answer with true or false
That’s it. Nothing more.

*/