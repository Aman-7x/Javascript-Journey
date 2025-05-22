
// **************Heap And Stack Memory******************

// example of stack memory 
// let user="Aman";
// let name=user; 
// name = "Khan";   // It will not change the refrence varible 
// console.log(user);
// console.log(name);

// example of Heap Memory

let objOne = {
    nameOne: "Aman",
    email: "amankhan@gmail.com"
}

console.log(objOne);

let objTwo = objOne;
objTwo.email= "updatedemail.coom";

console.log(objOne);
console.log(objTwo);

// It change the value from the refrence tooo






