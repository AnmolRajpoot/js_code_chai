// 9_DatatypesSummary.js

// primitives: are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed once they are created. The primitive data types in JavaScript are:
//
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (introduced in ES6, used to create unique identifiers for object properties)
// 7. bigint (introduced in ES2020, used to represent integers larger than 2^53 - 1)


// Reference (non-primitive): types are more complex data types that can store collections of values and more complex entities. They are mutable, meaning their values can be changed after they are created. The reference data types in JavaScript include:

// 1. object (used to store collections of data and more complex entities, including arrays, functions, and other objects)
// 2. array (a special type of object used to store ordered collections of values)
// 3. function (a special type of object that can be called and executed)


// javascript is dinmically typed or Statically typed ?
// JavaScript is a dynamically typed language, which means that variables can hold values of any type and the type of a variable can change at runtime. In contrast, statically typed languages require variables to be declared with a specific type, and the type cannot change after it has been declared. In JavaScript, you can assign a value of one type to a variable and then later assign a value of a different type to the same variable without any errors, which is a characteristic of dynamically typed languages.

// JavaScript is a dynamically typed language.
// Simple meaning:

// You don't need to declare a variable's type.
// A variable can hold different types of values at different times.

let value = 10;       // Number
value = "Hello";      // String
value = true;         // Boolean

// Dynamic Typing = Type checked at runtime (while the program runs).
// Statically Typed Languages: C, C++, Java, Go, Rust, TypeScript (mostly).



const score = 100 // number (primitive data type used to represent numeric values, including integers and floating-point numbers)
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol( '123' )

console.log(id === anotherId); 

const bidNumber = 1213365566119151741852963n // bigint (primitive data type used to represent integers larger than 2^53 - 1, denoted by appending 'n' to the end of the number)


console.log("Object");

const user = {
    name: "John",
    age: 30
} // object (reference data type used to store collections of data and more complex entities)

console.log(user.name); // "John" (accessing object properties using dot notation)
console.log(user["age"]); // 30 (accessing object properties using bracket notation)


console.log("Array");
const Array = [1, 2, 3, 4, 5] // array (a special type of object used to store ordered collections of values)
console.log(Array[0]); // 1 (accessing array elements using index, arrays are zero-indexed)
console.log(Array.length); // 5 (accessing the length property of the array)


console.log("Function");
function greet(name) {
    return `Hello, ${name}!`;
} // function (a special type of object that can be called and executed)
console.log(greet("Alice")); // "Hello, Alice!" (calling the function and passing an argument)


console.log("data types of variables -----")
console.log(typeof bidNumber); // "bigint" (using the typeof operator to check the type of a variable)
console.log(typeof user); // "object" (using the typeof operator to check the type of a variable)
console.log(typeof greet); // "function" (using the typeof operator to check the type of a variable)    





























