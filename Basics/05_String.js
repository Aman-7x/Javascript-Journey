// <<<<<<<<<<<<<<---------------------String--------------------------->>>>>>>>>>>>>>>

// Old Way 
const user = "Aman";
const repo = " git";

// console.log(user + repo);


// Model way -> use placeholders

// console.log(`Hello My Name is ${user} and i want to share my ${repo}`);

const gameName = new String ('www.AmanWebco.com');

console.log(gameName.charAt(2));
console.log(gameName.endsWith("o"));
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.replace('A',''))
console.log(gameName.includes("We"));
console.log(gameName.split(".")); // Converting to Array on the basis of '.' 

console.log(typeof gameName);
