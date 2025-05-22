

//How to JSON

// let obj = {
//     "name":"Aman",
//      "email":"amankhan@gmail.com",
//      "age":18,
//      "number":9111440529
// }

// console.log(obj.name);

//Array of Object
// let students = [
//     {"name" : "Anand" , "age":22} ,
//     {"name" : "Abhishek" , "age":24} ,
//     {"name" : "Aasha" , "age":23} 
// ]

//Nested JSON 

let obj1 = {
     "name":"Aman",
     "email":"amankhan@gmail.com",
     "age":18,
     "address": {
        "city":"Indore",
        "pincode":455001
     }
}

// console.log(obj1.address.city);



//How to convert JSON data to String 

console.log(obj1);


let jsonString = JSON.stringify(obj1)

console.log(jsonString);

// console.log(jsonString.toUpperCase());

//String data into JSONN

let jsonObj = JSON.parse(jsonString);

console.log(jsonObj);




 

