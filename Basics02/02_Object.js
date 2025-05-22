
const mySym = Symbol("key1");
const JsUser = {
    name:"Aman",
    "full name" : "Aman Khan",
    age:22,
    location:"Indore",
    email:"aman@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    [mySym]: "mykey1" // show that it is Symbol type
    // mySym: "mykey1" //just print the value
 }

//  console.log(JsUser.email);
//  console.log(JsUser.full name); You Cant Access the double quote value by dot (Bad Practice)
 
//  console.log(JsUser["full name"])  //Good Practice //Square notation    
//  console.log(JsUser);
 
 JsUser.email="update01@gmil.com";
//  Object.freeze(JsUser)
 JsUser.email="update02@gmil.com";
 
//  console.log(JsUser);
 
JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
    
}

// console.log(JsUser.greetingTwo());


const tinderUser = new Object();

tinderUser.id = "user1";
tinderUser.name="Anny";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);


//Nested Object
const regularUser = {
    email:"newuser@gmail.com",
    fullName:{
        userFullName : {
            fistname: "Aman",
            lastName: "Khan"
        }
    }
}

// console.log(regularUser.fullName.userFullName.fistname);

//Merge Mutiple Object

const obj1= {1:"a", 2:"b"};
const obj2= {3:"c", 4:"d"};
const obj4= {5:"e", 6:"f"};

// const obj3 = {obj1 , obj2 , obj4}; 
// const obj3 = Object.assign({},obj1,obj2,obj4);
// const obj3 = {...obj1 , ...obj2 , ...obj4}; 

// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//return array of keys
// console.log(Object.values(tinderUser)); //return array of values
// console.log(Object.entries(tinderUser)); //return array of subarray with key and values

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Distructure of Object 

 const {name : n} = tinderUser;
//  console.log(name);
 console.log(n);
 

//  Data in API 
// Object form 
// {
//     "name" : "Aman",
//     "batch":13,
//     "isActive": true
// }

// Array form 
// [
//     {

//     },
//     {

//     },
//     {

//     }
// ]









