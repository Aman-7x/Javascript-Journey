# JavaScript Object Notes (Easy Language)

## 1. How to Create Objects

- **Singleton Object**:
  - If we create an object using **constructor**, it is called a Singleton.
  - Example: `Object.create`

- **Object Literals**:
  - Most common way to create an object.

```javascript
const JsUser = {
    name: "Aman",
    age: 22,
    location: "Indore",
    email: "aman@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
```

In Object Literals:
- `name` -> **Key** (System automatically treats it as string: "name")
- `"Aman"` -> **Value**

---

## 2. Symbol as a Key

- To make a **unique key** (which cannot clash), we use `Symbol()`.

```javascript
const mySym = Symbol("key1");

const JsUser = {
    [mySym]: "mykey1"
};
```

- If you write `mySym: "mykey1"` (without square brackets), it will just treat it like a normal key.

---

## 3. Freezing an Object

- To lock an object so that it cannot be changed:

```javascript
Object.freeze(JsUser);
```

- After freezing, any update will not work.

---

## 4. Accessing Object Properties

- Dot Notation (Normal properties):
```javascript
console.log(JsUser.email);
```

- Bracket Notation (If key has spaces or special characters):
```javascript
console.log(JsUser["full name"]);
```

- **Note**: Cannot use dot notation for keys like "full name".

---

## 5. Adding Methods to Object

You can add functions inside an object.

```javascript
JsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this.name}`);
};
```

- `this` keyword refers to the same object.

---

## 6. Creating Object with Constructor

```javascript
const tinderUser = new Object();

tinderUser.id = "user1";
tinderUser.name = "Anny";
tinderUser.isLoggedIn = false;
```

- `new Object()` creates a Singleton Object.

---

## 7. Nested Objects

You can have objects inside objects.

```javascript
const regularUser = {
    email: "newuser@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Aman",
            lastName: "Khan"
        }
    }
};

console.log(regularUser.fullName.userFullName.firstName);
```

---

## 8. Merging Multiple Objects

- Merge objects using `Object.assign()`:
```javascript
const obj3 = Object.assign({}, obj1, obj2, obj4);
```

- OR using Spread Operator:
```javascript
const obj3 = { ...obj1, ...obj2, ...obj4 };
```

---

## 9. Important Object Methods

- `Object.keys(obj)` -> Returns array of keys.
- `Object.values(obj)` -> Returns array of values.
- `Object.entries(obj)` -> Returns array of [key, value] pairs.
- `obj.hasOwnProperty('key')` -> Checks if key exists.

Example:
```javascript
console.log(Object.keys(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
```

---

## 10. Destructuring in Objects

- Easy way to extract properties into variables.

```javascript
const { name: n } = tinderUser;
console.log(n);  // Outputs: "Anny"
```

- `name: n` means we are renaming `name` to `n` while extracting.

---

## 11. API Data Format

- **Single Object**:
```json
{
    "name": "Aman",
    "batch": 13,
    "isActive": true
}
```

- **Array of Objects**:
```json
[
    { },
    { },
    { }
]
```

Used when multiple entries/data are sent.

---

# End of Notes ✅

