// cd code_chai/m2_CoreJavaScript 

// 16_Objects.js


// singleton
// Singleton = Only one instance of an object exists and is shared everywhere.


// ways to diclayer objects in js

// 1. Object Literal (Most Common ✅)
// 2. Using new Object()
// 3. Using Object.create()
// 4. Using Constructor Functions
// 5. Using ES6 Classes


// Object Creation ≠ Singleton

// Object Literal
const obj1 = {};

// Constructor Method
const obj2 = new Object();


// In many tutorials (including Chai aur Code), the instructor may say:

// Object Literal ({}) → Non-singleton
// Constructor (new Object()) → Singleton

// However, this is not the real definition of a Singleton.

// What actually determines a Singleton?

// A Singleton means:

// Only one instance of an object exists and is shared throughout the application.

// Example:

const database = {
    connect() {
        console.log("Connected");
    }
};

// Everyone uses this same object
database.connect();


// Why is it mentioned in object creation?

// Because when discussing ways to create objects, some tutorials briefly introduce the Singleton concept. But:

// Object creation = How an object is made ({}, new Object(), constructor functions, classes, etc.)
// Singleton = A design pattern about how many instances exist (one and only one)

// So Singleton is not really a way of creating objects; it's a design pattern related to object instances.


// objects in js are collection of key value pairs

// object literal
const person = {
    name: "Anmol",
    age: 22,
    hobbies: ["coding", "gaming"],
    address: {
        city: "Delhi",
        country: "India"
    }
    // "full name": "Anmol Rajpoot" //   keys can have spaces if we use quotes
}

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.address);

// // we can also use []

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["hobbies"]);
// console.log(person["address"]);

// edge case 

// console.log(person["full name"]); 
// console.log(person.full name); // this will give error because of space in key name



















