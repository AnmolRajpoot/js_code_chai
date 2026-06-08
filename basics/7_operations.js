// 7_operations.js

// operators are used to perform operations on variables and values.

// arithmetic operators
let value1 = 10;
let negValue1 = -value1; // negation operator
console.log(negValue1); // -10 (the negation operator changes the sign of the value)

console.log(1 + 5);// 15 (addition operator)
console.log(10 - 3); // 7 (subtraction operator)
console.log(4 * 2); // 8 (multiplication operator)
console.log(20 / 4); // 5 (division operator)
console.log(10 % 3); // 1 (modulus operator, returns the remainder of the division)
console.log(2 ** 3); // 8 (exponentiation operator, raises the first operand to the power of the second operand)

let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // "Hello World" (string concatenation operator, combines two strings into one) 

console.log("1" + 5); // "15" (when we use the + operator with a string and a number, JavaScript implicitly converts the number to a string and concatenates them)
console.log(1 + "5"); // "15" (when we use the + operator with a number and a string, JavaScript implicitly converts the number to a string and concatenates them)
console.log("1" + "5"); // "15" (when we use the + operator with two strings, JavaScript concatenates them)
console.log("1" + 5 + 5); // "155" (when we use the + operator with a string and multiple numbers, JavaScript implicitly converts the numbers to strings and concatenates them)
console.log(1 + 5 + "5"); // "65" (when we use the + operator with a number and a string, JavaScript implicitly converts the number to a string and concatenates them)


console.log("5" - 2); // 3 (when we use the - operator with a string and a number, JavaScript implicitly converts the string to a number and performs the subtraction)
console.log("10" * 2); // 20 (when we use the * operator with a string and a number, JavaScript implicitly converts the string to a number and performs the multiplication)
console.log("20" / 4); // 5 (when we use the / operator with a string and a number, JavaScript implicitly converts the string to a number and performs the division)
console.log("10" % 3); // 1 (when we use the % operator with a string and a number, JavaScript implicitly converts the string to a number and performs the modulus operation)
console.log("2" ** 3); // 8 (when we use the ** operator with a string and a number, JavaScript implicitly converts the string to a number and performs the exponentiation)     


// type of conversion
// => ToPrimitive => converts an object to a primitive value (string, number, or boolean)
// => ToString => converts a value to a string
// => ToNumber => converts a value to a number
// => ToBoolean => converts a value to a boolean


// 7.1.1 ToPrimitive ( input [, preferredType ])
// The abstract operation ToPrimitive takes argument input (an ECMAScript language value) and optional argument preferredType (string or number) and returns either a
// normal completion containing an ECMAScript language value or a throw completion. It converts its input argument to a non-Object type. If an object is capable of
// converting to more than one primitive type, it may use the optional hint preferredType to favour that type. It performs the following steps when called:

// 1. If input is an Object, then
// a. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
// b. If exoticToPrim is not undefined, then
// i. If preferredType is not present, let hint be "default".
// ii. Else if preferredType is string, let hint be "string".
// iii. Else,
// 1. Assert: preferredType is number.
// 2. Let hint be "number".
// iv. Let result be ? Call(exoticToPrim, input, « hint »).
// v. If result is not an Object, return result.
// vi. Throw a TypeError exception.
// c. If preferred'Type is not present, let preferred Type be number.
// d. Return ? OrdinaryToPrimitive(input, preferredType).
// 2. Return input.


// ###
// dont be dependent on javascript conversion rules, always be explicit in your conversions to avoid unexpected results.

// JavaScript evaluates + from left to right. As soon as a string participates in a + operation, the result becomes a string, and subsequent + operations perform concatenation.


// | Operator | Behavior with String       |
// | -------- | -------------------------- |
// | `+`      | Can concatenate strings    |
// | `-`      | Converts to Number         |
// | `*`      | Converts to Number         |
// | `/`      | Converts to Number         |
// | `%`      | Converts to Number         |
// | `**`     | Converts to Number         |
// | `>` `<`  | Usually converts to Number |
// | `==`     | Performs type coercion     |
// | `===`    | No type coercion           |

// One-Line Revision Note: The `+` operator can perform string concatenation, while most other operators convert operands to numbers before performing their operations.

// + is the only arithmetic operator that may perform string concatenation. Most other operators (-, *, /, %, **) convert operands to numbers before performing the operation.


// link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion








