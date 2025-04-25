# 📘 JavaScript Array Deep Dive with Examples and Behind-the-Scenes Concepts

This document explains JavaScript array concepts and methods with detailed code explanations. It covers mutating vs non-mutating methods, shallow vs deep copies, nested array flattening, and more.

---

## Array Declarations

```js
const myArr = [0,1,2,3,4,5];
const myHero = ["Srk", "Aamir"];
const myArr2 = new Array(1,2,3,4);
```

- `[]` is the most common way to declare arrays.
- `new Array()` is less preferred; behaves differently if passed a single number (creates empty slots).

---

##  Accessing Array Elements

```js
console.log(myHero[0]); // Output: "Srk"
```

JavaScript arrays are **zero-indexed**.

---

##  Array Methods

###  Push and Pop

```js
myArr.push(6);   // Adds 6 to the end
myArr.push(7);   // Adds 7 to the end
myArr.pop();     // Removes the last element (7)
```

- `push()` and `pop()` **modify the original array** (mutating).

###  Unshift and Shift

```js
myArr.unshift(9); // Adds 9 at the beginning
myArr.shift();    // Removes the first element (9)
```

---

###  Check Existence and Index

```js
console.log(myArr.includes(9));   // Returns true if 9 exists
console.log(myArr.indexOf(3));    // Returns index of 3 or -1
```

---

###  Join

```js
const newArr = myArr.join();
console.log(typeof newArr, newArr);
```

- Converts array to string (comma-separated by default).
- **Non-mutating**.

---

##  Slice vs Splice

```js
const myn1 = myArr.slice(1,3);
const myn2 = myArr.splice(1,3);
```

### 🔸 slice(start, end)
- Returns **shallow copy** of array elements from index `start` to `end - 1`.
- **Non-mutating**.

### 🔸 splice(start, deleteCount)
- Removes `deleteCount` elements starting from index `start`.
- **Mutates original array**.

---

##  Concatenation and Spread Operator

```js
const bollywood = ["srk", "salman", "hritik", "aamir"];
const youtube = ["amit", "nazim", "zain"];

const newUni = bollywood.concat(youtube);
const newUni2 = [...bollywood, ...youtube];
```

- `concat()` merges arrays (non-mutating).
- Spread operator `...` is modern and more flexible.

---

##  Flattening Arrays

```js
const anotherArr = [1,2,[3,21,1],212,[34,[11,12,[1,41],12]]];
const newAnotherArr = anotherArr.flat(Infinity);
```

- `flat(Infinity)` flattens all nested levels into a single array.

---

##  Array Checks and Conversion

```js
console.log(Array.isArray("Aman")); // false
console.log(Array.from("Aman"));    // ['A', 'm', 'a', 'n']
console.log(Array.from({name: "Aman"})); // []
```

- `Array.isArray()` checks if variable is an array.
- `Array.from()` converts iterables to arrays.

---

##  Array.of()

```js
let s1 = 100, s2 = 101, s3 = 103, s4 = 104;
console.log(Array.of(s1, s2, s3, s4));
```

- Creates a new array from its arguments.
- Unlike `new Array(5)` which creates `[empty × 5]`, this creates `[5]`.

---

## ✅ Summary Table

| Method        | Description                         | Mutates Array |
|---------------|-------------------------------------|----------------|
| push()        | Adds to end                         | ✅             |
| pop()         | Removes from end                    | ✅             |
| unshift()     | Adds to beginning                   | ✅             |
| shift()       | Removes from beginning              | ✅             |
| slice()       | Copies part of array                | ❌             |
| splice()      | Removes/replaces/adds in array      | ✅             |
| concat()      | Combines arrays                     | ❌             |
| flat()        | Flattens nested arrays              | ❌             |
| join()        | Joins elements into a string        | ❌             |
| Array.isArray() | Checks if variable is array       | ❌             |
| Array.from()  | Converts to array                   | ❌             |
| Array.of()    | Creates array from arguments        | ❌             |

---

## 🧠 Behind-the-Scenes Concepts

- **Mutating Methods**: Change original array (`push`, `pop`, `splice`, `shift`, `unshift`).
- **Non-Mutating Methods**: Return a new array or value without changing the original (`slice`, `join`, `concat`, `flat`).
- **Shallow Copy**: References of nested objects are still shared (e.g., in `slice`).
- **Spread vs Concat**: Spread allows merging with additional custom values, `concat` is cleaner for just arrays.

---
