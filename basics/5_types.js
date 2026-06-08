"use sterict"; // treat all JS code as newer version

// alert(3+3) // we are using node.jd not browser, so alert is not defined

console.log(3+3); // we can use console.log to print to console

console.log("Hello, World!"); // we can print strings too




// types of data in JS
let age = 25; // number
let name = "John"; // string
let isStudent = true; // boolean
let hobbies = ["reading", "swimming"]; // array
let address = { street: "123 Main St", city: "New York" }; // object   

// number => 2 to the power of 53 - 1
// bigint
// string => "" or ' ' or ` `
            // different ways to define strings
            // template literals allow us to embed expressions inside strings
            // example:

            // let name = "Alice";
            // console.log(`Hello, ${name}!`); // Hello, Alice!
            // we can also use template literals for multi-line strings

            // let message = `This is a multi-line string.
            // console.log(message);    

            // we can also use template literals for string interpolation
            // let a = 5;
            // let b = 10;
            // console.log(`The sum of ${a} and ${b} is ${a + b}.`); // The sum of 5 and 10 is 15.

            // template literals => `Hello, ${name}!`

// boolean
// null => represents the intentional absence of any object value
// undefined => represents the absence of a value or a variable that has not been assigned a value  
// symbol => a unique and immutable primitive value that can be used as the key of an object property
// bigint => a numeric data type that can represent integers with arbitrary precision


// objests are collections of key-value pairs
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

console.log(typeof person.name); // string
console.log(typeof person.age); // number
console.log(typeof person.isStudent); // boolean


// ##### 
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a quirk in JavaScript, null is not actually an object)
// why null's type is object? => this is a bug in JavaScript, but it has been kept for backward compatibility.






