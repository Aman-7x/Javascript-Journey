#  JavaScript Date Object - Deep Dive Notes

This document explains JavaScript's `Date` object, various methods for formatting and retrieving date/time components, along with examples and behind-the-scenes behavior.

---

##  Creating a Date Object

```js
let myDate = new Date();
console.log(myDate);
```

### Common Formats:
- `.toString()` → Returns full human-readable string
- `.toISOString()` → Standard ISO 8601 format
- `.toUTCString()` → Date in UTC timezone
- `.toLocaleDateString()` → Locale-specific date
- `.toTimeString()` → Time portion only
- `typeof myDate` → `object`

---

##  Creating Custom Dates

```js
let mycreatedDate = new Date(2023, 0, 20); // Jan 20, 2023
console.log(mycreatedDate.toDateString());
```

- **Month is zero-indexed** → January = 0, December = 11
- You can also pass hours, minutes:
  ```js
  let mycreatedDate = new Date(2023, 0, 20, 13, 12); // 1:12 PM
  ```

### Using String Format:

```js
let mycreatedDate = new Date("2023-01-12"); // yyyy-mm-dd
let mycreatedDate = new Date("2-11-2023");  // mm-dd-yyyy
```

- JS auto-detects format but `yyyy-mm-dd` is safest and preferred.

---

## Timestamps in JavaScript

```js
let myTimeStamp = Date.now(); // Current time in milliseconds
console.log(myTimeStamp);

console.log(mycreatedDate.getTime()); // Convert date to timestamp
console.log(Math.floor(Date.now() / 1000)); // Convert to seconds
```

- Useful for comparing two dates or creating timers.

---

##  Getting Parts of a Date

```js
let newDate = new Date();

console.log(newDate.getDate());       // Day of month (1-31)
console.log(newDate.getFullYear());   // Full year (e.g. 2025)
console.log(newDate.getHours());      // Hour (0-23)
console.log(newDate.getDay());        // Day of week (0=Sunday)
```

---

##  Formatting Date with `toLocaleString`

```js
newDate.toLocaleString("default", {
  weekday: "long"
});
```

### Other `toLocaleString` options:
- `weekday`: "long" | "short"
- `year`: "numeric" | "2-digit"
- `month`: "long" | "short" | "numeric"
- `day`: "numeric"

```js
newDate.toLocaleString("en-IN", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});
```

---

## 🧠 Behind the Scenes

- `Date.now()` gives milliseconds since Unix Epoch (Jan 1, 1970).
- JavaScript dates internally store timestamps, and formatting is done via methods.
- Always use `new Date()` to avoid getting just a string.

---

## ✅ Summary Table

| Method                   | Description                              |
|--------------------------|------------------------------------------|
| `new Date()`             | Creates current date                     |
| `Date.now()`             | Current timestamp in ms                  |
| `date.getTime()`         | Timestamp from a date                    |
| `date.getDate()`         | Day of month                             |
| `date.getDay()`          | Day of week (0=Sun)                      |
| `date.getFullYear()`     | Full year                                |
| `date.toLocaleString()`  | Locale-specific string                   |
| `date.toISOString()`     | ISO 8601 string                          |

---
