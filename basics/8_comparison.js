// 8_comparison.js

// comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison.

// console.log(5 > 3); // true (greater than operator)
// console.log(5 < 3); // false (less than operator)
// console.log(5 >= 3); // true (greater than or equal to operator)
// console.log(5 <= 3); // false (less than or equal to operator)
// console.log(5 == 5); // true (equality operator, checks if the values are equal, performs type coercion if necessary)
// console.log(5 === 5); // true (strict equality operator, checks if the values are equal and of the same type)
// console.log(5 != 3); // true (inequality operator, checks if the values are not equal, performs type coercion if necessary)
// console.log(5 !== 3); // true (strict inequality operator, checks if the values are not equal or not of the same type)

console.log("2">1); // true (greater than operator)
console.log("02"<1); // false (less than operator)
console.log("2">"12"); // true (greater than operator, when comparing strings, JavaScript compares them lexicographically based on their Unicode values)
console.log("2"<"12"); // false (less than operator, when comparing strings, JavaScript compares them lexicographically based on their Unicode values)
console.log("2"=="2"); // true (equality operator, checks if the values are equal, performs type coercion if necessary)
console.log("2"==="2"); // true (strict equality operator, checks if the values are equal and of the same type)
console.log("2"!="2"); // false (inequality operator, checks if the values are not equal, performs type coercion if necessary)
console.log("2"!=="2"); // false (strict inequality operator, checks if the values are not equal or not of the same type)       

console.log(null > 0) // false (greater than operator, null is converted to 0 for comparison)
console.log(null < 0) // false (less than operator, null is converted to 0 for comparison)
console.log(null >= 0) // true (greater than or equal to operator, null is converted to 0 for comparison)

// null is only equal to undefined when using the == operator, but not when using the === operator. This is because null and undefined are considered different types in JavaScript, and the === operator checks for both value and type equality, while the == operator performs type coercion before checking for equality. Therefore, null == undefined is true because they are considered equal after type coercion, but null === undefined is false because they are of different types.

console.log(null == undefined) // true (equality operator, checks if the values are equal, performs type coercion if necessary)
console.log(null === undefined) // false (strict equality operator, checks if the values are equal and of the same type)    


//  conclusion: when comparing values in JavaScript, it's important to be aware of the type coercion rules and the differences between the equality (==) and strict equality (===) operators to avoid unexpected results.

console.log(undefined == null) // true (equality operator, checks if the values are equal, performs type coercion if necessary)
console.log(undefined === null) // false (strict equality operator, checks if the values are equal and of the same type)

console.log(undefined == 0) // false (equality operator, checks if the values are equal, performs type coercion if necessary)
console.log(undefined === 0) // false (strict equality operator, checks if the values are equal and of the same type)

// conclusion in points:
// 1. null and undefined are considered equal when using the == operator, but not when using the === operator.
// 2. null is only equal to undefined when using the == operator, but not when using the === operator. This is because null and undefined are considered different types in JavaScript, and the === operator checks for both value and type equality, while the == operator performs type coercion before checking for equality. Therefore, null == undefined is true because they are considered equal after type coercion, but null === undefined is false because they are of different types.
// 3. undefined is not equal to 0 when using either the == or === operator, because undefined is a distinct type that represents the absence of a value, while 0 is a number.


// different types of comparison operators in JavaScript:
// 1. Equality operators: == and ===
// 2. Inequality operators: != and !==
// 3. Relational operators: >, <, >=, <=
// 4. Logical operators: && (logical AND), || (logical OR), ! (logical NOT)


// diff between == and ===:
// 1. The == operator checks for value equality, meaning it performs type coercion if necessary to compare the values. For example, 5 == "5" would return true because the string "5" is coerced to the number 5 before comparison.
// 2. The === operator checks for both value and type equality, meaning it does not perform type coercion. For example, 5 === "5" would return false because they are of different types (number and string).   

// In short
// 1. The == operator checks for value equality and performs type coercion if necessary.
// 2. The === operator checks for both value and type equality and does not perform type coercion.


// Avoiding the types of comparisons for clean code
// 1. Avoid using == and != operators, use === and !== instead to avoid unexpected results due to type coercion.
// 2. Be cautious when comparing values of different types, as JavaScript may perform type coercion that can lead to unexpected results.
// 3. When comparing strings, be aware that JavaScript compares them lexicographically based on their Unicode values, which may not always align with numerical comparisons.
// 4. When comparing null and undefined, remember that they are considered equal with the == operator but not with the === operator, so choose the appropriate operator based on the desired comparison behavior.
















