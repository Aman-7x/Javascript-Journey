// const userEmail = "aman@gmail.com"; //Got user email
// const userEmail = [];  //Got user email
// const userEmail = '';  //Don't have user emial
// const userEmail = "";  //Don't have user emial

// if(userEmail){
//     console.log("Got user email");
    
// }else{
//     console.log("Don't have user emial");
    
// }


// falsy values 

// false , 0 ,-0 , BigInt 0n , "" , null , undefined , NaN  

// truthy  VALUE 

// "0" , 'false'  , " " , [] , {} , function(){}

// if (userEmail.length===0){
//         console.log("Array is  empty");
        
// }
// const emptyObj={};

// if (Object.keys(emptyObj).length===0){
//         console.log("Object is  empty");
//         }


//Nullish Coalescing Operator (??): null undefined

// let val1 = 5 ?? 10;
// val1 = null ?? 10 // it check the value's safelty from null
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20; // first valid value it will take ...

console.log(val1);



