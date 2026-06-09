// cd code_chai/m2_CoreJavaScript

// 19_Functions.js

console.log("Functions in JavaScript");

// A function is a reusable block of code that performs a specific task. It can take inputs (parameters) and return an output (result). 

// console.log("function 1");
function add2num(num1,num2){
    return num1 + num2;
}
console.log(add2num(2,3)); // 5


// console.log("function 2");
function subtract2num(num1,num2) //<- parameters (num1 and num2)
{
    console.log(num1 - num2);
}
subtract2num(5,2); // 3   //<- arguments(5 and 2)


function div_num(num1,num2){
    let result = num1 / num2;
    return result;
}
console.log(div_num(10,2)); // 5

const result = div_num(20,4);
console.log("Result: " + result); // 5


function loginUserMessage(username){
    return `hi,${username} just logged in`; 
}
console.log(loginUserMessage("Alice")); // hi,Alice just logged in
// or
const message = loginUserMessage("Bob");
console.log(message); // hi,Bob just logged in

console.log(loginUserMessage()); // hi,undefined just logged in
// to avoid undefined use if else

function loginUserMessage2(username){
    if(username === undefined)
    {
        console.log("Please provide a username");
        return; // exit the function early
    }
    return `hi,${username} just logged in`; 
}
console.log(loginUserMessage()); // Please provide a username












