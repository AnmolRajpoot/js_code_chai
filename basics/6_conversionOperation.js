// 6_conversionOperation.js

let score = "100"; // string

// ways to find the data type of a variable
console.log(typeof score); // string
console.log(typeof(score)); // string

let valueInNumber = Number(score); // converts string to number
console.log(valueInNumber); // 100
console.log(typeof valueInNumber); // number    


// what is score = "1220adc"
let score2 = "1220adc";
let valueInNumber2 = Number(score2);
console.log(valueInNumber2); // NaN (Not a Number) => when we try to convert a non-numeric string to a number, it results in NaN
// we are getting NaN because "1220adc" is not a valid number, it contains non-numeric characters. When we try to convert it to a number, JavaScript cannot parse it and returns NaN.
console.log(typeof valueInNumber2); // number (NaN is of type number)


// what is score = "null"
let score3 = "null";
let valueInNumber3 = Number(score3);
console.log(valueInNumber3); // 0 (when we try to convert the string "null" to a number, it results in 0)
console.log(typeof valueInNumber3); // number   

// what is score = "undefined"
let score4 = "undefined";
let valueInNumber4 = Number(score4);
console.log(valueInNumber4);    // NaN (when we try to convert the string "undefined" to a number, it results in NaN)
console.log(typeof valueInNumber4); // number (NaN is of type number)       

// we can also use parseInt() and parseFloat() to convert strings to numbers
console.log("parseInt")
let score5 = "100.50";
let valueInNumber5 = parseInt(score5);
console.log(valueInNumber5)
console.log(typeof valueInNumber5)


// "33" => 33
// "33abc" => 33 (parseInt will parse the number until it encounters a non-numeric character)
// "abc33" => NaN (parseInt will return NaN if the string does not start with a numeric character)
// "100.50" => 100 (parseInt will only parse the integer part of the string)
// "100.50abc" => 100 (parseInt will parse the integer part of the string until it encounters a non-numeric character)  
// true => 1 (when we try to convert the boolean value true to a number, it results in 1)
// false => 0 (when we try to convert the boolean value false to a number, it results in 0)


console.log(" conversion to boolean")

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn); // converts number to boolean
console.log(booleanIsLoggedIn); // true (when we try to convert the number 1 to a boolean, it results in true)

// what is isLoggedIn = 0
let isLoggedIn2 = 0;
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); // false (when we try to convert the number 0 to a boolean, it results in false)       

// what is isLoggedIn = "false"
let isLoggedIn3 = "false";
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3); // true (when we try to convert the non-empty string "false" to a boolean, it results in true) 

// what is isLoggedIn = ""
let isLoggedIn4 = "";
let booleanIsLoggedIn4 = Boolean(isLoggedIn4);
console.log(booleanIsLoggedIn4); // false (when we try to convert the empty string "" to a boolean, it results in false)    

// what is isLoggedIn = null
let isLoggedIn5 = null;
let booleanIsLoggedIn5 = Boolean(isLoggedIn5);
console.log(booleanIsLoggedIn5); // false (when we try to convert the null value to a boolean, it results in false) 

// what is isLoggedIn = undefined
let isLoggedIn6 = undefined;
let booleanIsLoggedIn6 = Boolean(isLoggedIn6);
console.log(booleanIsLoggedIn6); // false (when we try to convert the undefined value to a boolean, it results in false)    

// what if isLoggedIn = "name_orstring"
let isLoggedIn7 = "name_orstring";
let booleanIsLoggedIn7 = Boolean(isLoggedIn7);
console.log(booleanIsLoggedIn7); // true (when we try to convert the non-empty string "name_orstring" to a boolean, it results in true)     


// 1 => true
// 0 => false
// "false" => true (non-empty string)
// "" => false (empty string)
// null => false
// undefined => false   
// "name_orstring" => true (non-empty string)

console.log(" conversion to string")

let age = 25;
let stringAge = String(age);
console.log(stringAge); // "25" (when we try to convert the number 25 to a string, it results in "25")
console.log(typeof stringAge); // string


// types of conversion
// implicit conversion => when JavaScript automatically converts a value from one type to another
// explicit conversion => when we manually convert a value from one type to another using functions like Number(), String(), Boolean(), etc.

//implicit conversion   
console.log("implicit conversion")

let result = "The age is " + age;   
console.log(result); // "The age is 25" (when we use the + operator with a string and a number, JavaScript implicitly converts the number to a string and concatenates them)

let result2 = "The age is " + String(age);
console.log(result2); // "The age is 25" (when we use the String() function to convert the number to a string, it results in "25")

// explicit conversion
console.log("explicit conversion")  
let result3 = "The age is " + String(age);
console.log(result3); // "The age is 25" (when we use the String() function to convert the number to a string, it results in "25")

// posibilities of explicit conversion
// Number() => converts a value to a number
// String() => converts a value to a string
// Boolean() => converts a value to a boolean
// parseInt() => parses a string and returns an integer
// parseFloat() => parses a string and returns a floating-point number

















