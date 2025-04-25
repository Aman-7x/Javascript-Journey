const myArr = [0,1,2,3,4,5];
const myHero = ["Srk" , "Aamir"];

const myArr2 = new Array(1,2,3,4);
// console.log(myHero[0]);

//Array Methods
 
// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(`${typeof newArr} : ${newArr}` );

// console.log(myArr);



//slice splice 
console.log("A" , myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

//splice
const myn2 = myArr.splice(1,3);

console.log("C",myArr);
console.log(myn2);  

//Purpose:
// Slice :  Yeh method ek shallow copy banata hai ek specific portion (subset) ka original array ka. Original array ko modify nahi karta.

//splice : Yeh method array ke elements ko modify karta hai. Yeh elements ko remove, replace, ya add karne ke liye use hota hai.



//Concate and spread operator
const bollywood = ["srk" , "salman" , "hritik" , "aamir"];

const youtube = ["amit" , "nazim" , "zain"];

// bollywood.push(youtube);

const newUni = bollywood.concat(youtube);
console.log(newUni);

//spread 
const newUni2 = [...bollywood , ...youtube];
console.log(newUni2);


const anotherArr = [1,2 ,[3,21,1],212,[34,[11,12,[1,41],12]]];

const newAnotherArr = anotherArr.flat(Infinity);

console.log(newAnotherArr);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"));
console.log(Array.from({name : "Aman"})); //Interesting 

let s1 = 100;
let s2 = 101;
let s3 = 103;
let s4 = 104;

console.log(Array.of(s1,s2,s3,s4));

 




