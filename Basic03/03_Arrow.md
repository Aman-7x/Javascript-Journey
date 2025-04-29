
# JavaScript `this` Keyword - Easy Explanation

## 🧠 Object Context with `this`

```js
const user = {
    username: "Aman",
    bill: 900,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this); // refers to the current object i.e., 'user'
    }
}

user.welcomeMessage();      // Aman, Welcome to Website
user.username = "Sam";
user.welcomeMessage();      // Sam, Welcome to Website
```

### ✅ Explanation:
- The `this` keyword inside an object method refers to **the current object** (`user` in this case).
- So, `this.username` means the `username` property of the `user` object.
- `this` gives access to all properties and methods of the current object.

---

## 🌐 Global `this` in Browser

```js
chai();

function chai() {
    let username = "Aman";
    console.log(this.username);
}
```

### ❌ Issue:
- In regular functions (not inside an object), `this` refers to the **global object**.
- In **browsers**, the global object is the `window` object.
- However, `let` and `const` variables are not added to the global object.

### ⚠️ Result:
- `this.username` is `undefined` because `username` is not part of the global `window` object.

---

## 🧪 Global Scope Variable

```js
let username = "Aman";
console.log(this.username); // undefined in strict mode or module
```

### 📝 Note:
- In browsers, `var`-declared global variables are attached to `window`, but `let` and `const` are **not**.
- So `this.username` won't work if `username` is declared with `let` or `const`.

---

### 📌 Summary

- `this` inside an object method → refers to that object.
- `this` in a regular function → refers to the global object (window in browser).
- Use `let` and `const` to avoid polluting global scope.
