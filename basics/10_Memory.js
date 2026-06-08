// 10_Memory.js

// Stack and Heap Memory

// Stack Memory

// > Stores primitive data types:
// string, 
// number
// boolean
// null
// undefined
// bigint
// symbol

// Stores the actual value.
// Fast access.
// When copied, a new copy of the value is created.

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


// Heap Memory

// > Stores reference data types:
// object
// array
// function

// The actual data is stored in Heap.
// Variables store a reference (address) to that data.
// When copied, the reference is copied, not the actual object.


let user1 = {
    name: "Anmol"
};

let user2 = user1;

user2.name = "Raj";

console.log(user1.name); // Raj
console.log(user2.name); // Raj






































