// code_chai\m6_AsyncJavaScript

// 37_AsyncJS.js


// JavaScript is a synchronous, single-threaded language.

// Single-threaded
// JavaScript has one call stack, so it executes one task at a time.

console.log("A");
console.log("B");
console.log("C");

// Synchronous
// By default, JavaScript executes code line by line, waiting for each line to finish before moving to the next.

console.log("Start");

let sum = 0;
for(let i = 0; i < 1000000; i++) {
  sum += i;
}

console.log("End");
// JavaScript waits for the loop to finish before printing "End".

// Then how does Async JavaScript work?

// JavaScript itself is still single-threaded and synchronous.
// Asynchronous behavior comes from the browser APIs or Node.js APIs (like setTimeout,
// Fetch API, file system APIs, etc.), which handle work outside the JavaScript engine 
// and return the result later.

console.log("Start");

setTimeout(() => {
  console.log("Hello");
}, 1000);

console.log("End");

// So the complete interview answer is:
// JavaScript is a synchronous, single-threaded language, but it can perform asynchronous operations using Web APIs/Node APIs, the Event Loop, and Callback Queue. 🚀



// Async JavaScript (Short & Simple)
// Async (Asynchronous) JavaScript allows code to run without waiting for long tasks (like API calls, file reading, database queries, or timers) to finish.

// Why Async?
// Without async, JavaScript would stop and wait for a task to complete before running the next line.


console.log("Start");

// Takes 2 seconds
setTimeout(() => {
  console.log("Task Done");
}, 2000);

console.log("End");
// JavaScript continues executing other code while waiting for the timer.


// Common Async Features
// 1. Callbacks
// A function passed to another function to run later.

setTimeout(()=>{
    console.log("helloo after 1000ms");
}, 1000);


// 2. Promises
// Represent a future value.

const promise = new Promise((resolve, reject) => {   // new Promise() creates a Promise object.
  resolve("Success");
});

promise.then((result) => {
  console.log(result);
});

// resolve() → marks the promise as successful.
// reject() → marks the promise as failed.

// Create Promise
//       ↓
// resolve("Success")
//       ↓
// Promise Fulfilled
//       ↓
// .then() executes
//       ↓
// console.log("Success")

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 2000);
});

// Using .then()
fetchData.then((data) => {   // to peint the => "Data received"
  console.log(data);
});

// Promise = Restaurant
// resolve("Data received") = Food is ready
// .then() = Customer comes to collect food

// Using await
async function get_Data() {
  const data = await fetchData;
  console.log(data);
}

get_Data();

// A Promise can resolve successfully even if you never use its result. The value is simply ignored unless you attach a .then(), .catch(), .finally(), or use await.


// 3. Async / Await
// Cleaner way to work with Promises.

async function getData() {
  return "Data";
}

async function showData() {
  const result = await getData();
  console.log(result);
}

showData();



// Beginner Notes

// For now, focus on these 4:
// .then()     → handle success
// .catch()    → handle error
// .finally()  → always run
// await       → cleaner syntax for promises

// Once you're comfortable with them, learn:

// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()

// These are used when working with multiple promises together. 🚀






// Creating a Promise
const fetchData = new Promise((resolve, reject) => {

  // Simulating an API call that takes 2 seconds
  setTimeout(() => {

    const success = true; // Change to false to test reject()

    if (success) {
      resolve("Data received successfully");
    } else {
      reject("Failed to fetch data");
    }

  }, 2000);

});

// Handling the Promise
fetchData
  .then((data) => {
    // Runs if resolve() is called
    console.log("Success:", data);
  })
  .catch((error) => {
    // Runs if reject() is called
    console.log("Error:", error);
  })
  .finally(() => {
    // Always runs
    console.log("Request completed");
  });



// If success = true

// Output after 2 seconds:

// Success: Data received successfully
// Request completed
// If success = false

// Output after 2 seconds:

// Error: Failed to fetch data
// Request completed



// Same Example Using async/await

const fetchData = new Promise((resolve, reject) => {

  setTimeout(() => {

    const success = true;

    if (success) {
      resolve("Data received successfully");
    } else {
      reject("Failed to fetch data");
    }

  }, 2000);

});

async function getData() {
  try {
    const data = await fetchData;
    console.log("Success:", data);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Request completed");
  }
}

getData();


// Mapping
// | Promise Method | async/await Equivalent |
// | -------------- | ---------------------- |
// | `.then()`      | `try`                  |
// | `.catch()`     | `catch`                |
// | `.finally()`   | `finally`              |


// Interview Summary
// resolve()  → Promise fulfilled → .then() / await
// reject()   → Promise rejected  → .catch() / catch
// finally()  → Runs in both cases

// This is the complete Promise pattern you'll see most often in real projects when making API calls. 🚀















