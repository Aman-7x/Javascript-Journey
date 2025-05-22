 
 /* 
 
 High order function : A function that takes a function as an argument 
 */

//  function add(a,b,cb){
//     let result =  a+b;
//     cb(result);
     
//  }
//  let a = function (n) {
//     console.log("Result is "+n)
//  }
// add(2,4,a);
   //arrow function
//  add(2,4,(val)=>console.log("Result is "+val));  

 //return function

 function add2(a,b){
    return () => console.log("Result is "+a+b)
 }

let resultFunction =  add2(2,3);
resultFunction();

//Call back is basically a function that will be executed in the end of current function execution

///used in api
///it was widly used when it is before promises
//It has a problem of Call Back Hell