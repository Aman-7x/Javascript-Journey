// <<<<<<<<<<<<<<------------------ Numbers & Math in JavaScript ------------------->>>>>>>>>>>>>>

// ===== Numbers =====

const score = 400;

const balance = new Number(100);
console.log(balance);                      // Output: [Number: 100]

console.log(balance.toString());           // "100"
console.log(balance.toString().length);    // 3

console.log(balance.toFixed(2));           // "100.00"

const otherNum = 22.81323;
console.log(otherNum.toPrecision(3));      // "22.8"

// ===== Number Formatting =====

const hundred = 10000000;

console.log(hundred.toLocaleString());               // Default formatting
console.log("U.S : " + hundred.toLocaleString('en-US')); // "10,000,000"
console.log("India : " + hundred.toLocaleString('en-IN')); // "1,00,00,000"

// ===== Math =====

console.log(Math.abs(-12));            // 12
console.log(Math.round(23.62));        // 24
console.log(Math.ceil(23.2));          // 24
console.log(Math.floor(23.9));         // 23

console.log(Math.min(3, 23, 13, 53, 564, 2));  // 2
console.log(Math.max(3, 23, 13, 53, 564, 2));  // 564

// Random number (between 0 and 1)
console.log(Math.random());            

// Random number between a range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Output: Random number between 10 and 20
