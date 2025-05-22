
 1. Declaring Strings
 Old Way (String Literal)


const user = "Aman";
const repo = " git";
console.log(user + repo); // Output: Aman git

Modern Way (Template Literals)

console.log(`Hello My Name is ${user} and I want to share my ${repo}`);
// Output: Hello My Name is Aman and I want to share my  git
 

2. Creating a String Object
 
const gameName = new String('www.AmanWebco.com');
Note: This creates a string object (not a primitive string)


 Some String Methods and Properties
 
charAt(index) | Returns the character at specified index | gameName.charAt(2) → w

endsWith(substring) | Checks if string ends with the given substring | gameName.endsWith("o") → false

length | Returns the total length of the string | gameName.length → 17
toUpperCase() | Converts the string to uppercase | gameName.toUpperCase() → WWW.AMANWEBCO.COM

replace('A', '') | Replaces first occurrence of 'A' with '' | gameName.replace('A', '') → www.manWebco.com

includes(substring) | Checks if string contains the given substring | gameName.includes("We") → true

split(separator) | Splits string into array by given separator | gameName.split('.') → ['www', 'AmanWebco', 'com']