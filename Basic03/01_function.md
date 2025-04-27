# Functions in JavaScript - Easy Notes

---

## What is a Function?

- Function ek block of code hota hai jo jab bulaate hain tab run karta hai.
- Reusability ke liye kaam aata hai.

---

## Function Syntax

```javascript
function functionName() {
    // code
}
```

Example:

```javascript
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName(); // Function Execution
```

**Note:**
- `sayMyName`  -> Function reference (sirf function ka address)
- `sayMyName()` -> Function execution (function ko run karna)

---

## Function Parameters vs Arguments

- **Parameters:** Jab function define karte ho tab brackets me jo naam dete ho (placeholders).
- **Arguments:** Jab function call karte ho tab jo real value pass karte ho.

Example:

```javascript
function addTwoNumber(num1, num2) { // Parameters
    console.log(num1 + num2);
}

addTwoNumber(3, 4); // Arguments
```

---

## Default Parameters

Agar user koi value na de to default value set kar sakte ho.

Example:

```javascript
function addTwoNumber(num1 = 23, num2) {
    return num1 + num2;
}

console.log("Result:", addTwoNumber(undefined, 5));
// Output: 28 (23 + 5)
```

> **undefined** pass karne se default value kaam karti hai.

---

## Rest Operator (...)

- Jab hume uncertain number of arguments lena hota hai.
- Vo sabko ek array me pack kar deta hai.

Example:

```javascript
function calculateAll(...num1) {
    return num1;
}

console.log(calculateAll(100, 200, 300));
// Output: [100, 200, 300]
```

---

## Handling Object in Function

Function ke through objects bhi pass kar sakte hain.

Example:

```javascript
const user = {
    username: "Aman",
    bill: 900
};

function handleObj(anyObj) {
    console.log(`Username is ${anyObj.username} and your bill ${anyObj.bill}`);
}

handleObj(user);
// Output: Username is Aman and your bill 900
```

---

# Short Recap Table

| Concept             | Explanation                            |
|---------------------|----------------------------------------|
| Function Reference  | `sayMyName` (without parentheses)       |
| Function Execution  | `sayMyName()` (with parentheses)        |
| Parameters          | Placeholder names inside function     |
| Arguments           | Actual values when calling function   |
| Default Parameters  | Pre-set values if no argument given    |
| Rest Operator (...) | Pack all arguments into array          |

---

# End of Notes! 📚

 
