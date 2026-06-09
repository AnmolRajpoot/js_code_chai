// code_chai\m3_Scope_Execution\23_This_Arrow.js

// 23_This_Arrow.js

// this in JavaScript
// this refers to the object that is executing the current function.

// 1. Inside an Object Method
const user = {
  name: "Anmol",
  greet() {
    console.log(this.name);
  }
//   we are using this to access all the veriables those are under these {}
};

user.greet(); // Anmol

// ✅ this = user

// 2. Regular Function
function test() {
  console.log(this);
}

test();
// Browser (non-strict) → this = window
// Node.js (non-strict) → this = global
// Strict mode → this = undefined

// Rule to Remember
// Look at how the function is called, not where it is defined.
// obj.method();
// ✅ this = obj
// test();
// ✅ this = global/window (non-strict)
// ✅ this = undefined (strict)


// For regular functions, this depends on how the function is called.
// obj.method() → this = obj
// functionName() → this = global/window (non-strict), undefined (strict)


function ffun()
{
    let username = "anmol"
    console.log(this.username);
}
ffun(); // undefined



// Arrow function

// Arrow Functions and this
// Arrow functions do not have their own this.
// They use (inherit) this from their surrounding scope.


const arr_fun = () => {
    let username = "anmol"
    console.log(this.name);
}
arr_fun() // undefined

const add2 = (num1,num2) =>{
    return num1+num2
}
console.log(add2(2,5));

// single line
const add_2 = (num1,num2) => num1+num2

const add_3 = (num1,num2) => (num1+num2)

console.log(add_2(2,5));
console.log(add_3(2,5));

const addTwo = (num1, num2) => ({username: "hitesh"})
// to pass object we must have to use ()
console. log(addTwo(3, 4))



const user2 = {
  name: "Anmol",
  greet() {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

user2.greet(); // Anmol
// ✅ this comes from greet().

// diff bw regular and arrow function
const user3 = {
  name: "Anmol",

  regular: function () {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  }
};
user3.regular(); // Anmol
user3.arrow();   // undefined


// Arrow function inherits
const user4 = {
  name: "Anmol",

  greet() {     // regular function (greet)
    const arrow = () => {     // arrow function
      console.log(this.name);
    };

    arrow();
  }
};

user4.greet();

// we are creating arrow function inside a regular function and 
// then this regular function has its own this


// We are creating an arrow function inside a regular function.
// The regular function has its own this.
// The arrow function inherits that this.


// Short Note for Revision

// Regular Function:
// - Has its own `this`
// - `this` depends on who calls it

// Arrow Function:
// - Has no own `this`
// - Inherits `this` from the nearest surrounding regular function




