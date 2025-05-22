**Notes on JavaScript Code (Falsy & Truthy Values, Nullish Coalescing, etc.)**

---

### 1. Checking User Email in JavaScript

```javascript
const userEmail = "aman@gmail.com"; // Got user email
const userEmail = [];               // Got user email
const userEmail = '';               // Don't have user email
const userEmail = "";              // Don't have user email
```

In JavaScript, values are treated as either **truthy** or **falsy** in conditions like `if()`.

```javascript
if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
```

If `userEmail` is:

* A non-empty string or non-empty array -> **Truthy** ➜ Prints "Got user email"
* An empty string `""` or `''` ➜ **Falsy** ➜ Prints "Don't have user email"

---

### 2. Falsy Values in JavaScript

These values are considered **false** in a conditional check:

```
false, 0, -0, BigInt 0n, "", null, undefined, NaN
```

### 3. Truthy Values in JavaScript

These values are considered **true**:

```
"0", "false", " ", [], {}, function(){}
```

Even though they *look* empty or false, they are treated as true.

---

### 4. Checking for Empty Array and Object

To check if an array is empty:

```javascript
if (userEmail.length === 0) {
    console.log("Array is empty");
}
```

To check if an object is empty:

```javascript
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
```

---

### 5. Nullish Coalescing Operator (??)

It is used to provide a **default value** only if the variable is `null` or `undefined`. It does **not** trigger for `false`, `0`, or `""`.

```javascript
let val1 = 5 ?? 10;            // val1 = 5 (first non-null/undefined value)
val1 = null ?? 10;             // val1 = 10
val1 = undefined ?? 15;        // val1 = 15
val1 = null ?? 10 ?? 20;       // val1 = 10 (takes first non-null/undefined)

console.log(val1);             // Output: 10
```

---

### Summary:

* Use `if(variable)` to check if it’s truthy.
* Use `.length === 0` for arrays or `Object.keys(obj).length === 0` for empty objects.
* Use `??` when you want to avoid `null` or `undefined` values.

---

End of Notes.
 