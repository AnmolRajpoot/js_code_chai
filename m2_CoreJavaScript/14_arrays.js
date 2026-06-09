// cd code_chai/m2_CoreJavaScript 

// node 14_arrays.js



// Ways to Declare Arrays in JavaScript

// 1. Array Literal (Most Common ✅)
const fruits = ["Apple", "Banana", "Mango"];

// 2. Using new Array()
const fruits1 = new Array("Apple", "Banana", "Mango");

// 3. Empty Array
const Array1 = [];
// or
const Array2 = new Array();

// 4. Array with Fixed Length
const Array3 = new Array(5);
console.log(Array3);

// 5. Using Array.of()

const Array4 = Array.of(1, 2, 3, 4);
console.log(Array4);

// 6. Using Array.from()
// Creates an array from an iterable or array-like object.

const Array5 = Array.from("Hello");
console.log(Array5);

// nterview Notes
// 1. []                 → Array Literal (Most Used)
// 2. new Array()        → Constructor
// 3. Array.of()         → Creates array from values
// 4. Array.from()       → Creates array from iterable/array-like objects
// 5. new Array(size)    → Creates empty array with given length


const arr = [1,2,3,4,5]
console.log(arr);

console.log("values at index 0,1,2,3,4");

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// Shallow Copy:
// - Copies only first level.
// - Nested objects/arrays share references.
// - Changes in nested data affect original.

// Deep Copy:
// - Copies everything recursively.
// - No shared references.
// - Changes do not affect original.

// Shallow Copy:
// - Spread (...)
// - Object.assign()

// Deep Copy:
// - structuredClone() ✅
// - JSON.parse(JSON.stringify()) ⚠️


console.log("slicing in arrays");
const arr1 = [1,2,3,4,5]

// still to pratrice


console.log("Methods in Arrays");

console.log(arr);

arr.push(6); // adds element at the end
console.log(arr);
arr.pop(); // removes last element
console.log(arr);
arr.unshift(0); // adds element at the beginning
console.log(arr);
arr.shift(); // removes first element
console.log(arr);
arr.indexOf(3); // returns index of first occurrence of element
console.log(arr.indexOf(3));
arr.includes(3); // checks if element exists in array
console.log(arr.includes(3));
arr.reverse(); // reverses the array
console.log(arr);
arr.sort(); // sorts the array (lexicographically for strings)
console.log(arr);






























