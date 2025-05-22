 


//  Syntax 

const sayHello = () => {
    console.log('heeyyy');
    
}

sayHello();


//argument
const add = (a) => {
    return a+a;  
}

// console.log(typeof add(2,3));
console.log(add(2,3));

//return 

const add2 = (a,b) => a+b; //here it is returing with return keyword

console.log(add2(3,4));

//rest operator and perameter sent to the aerrow function
//Perameter -> Array of given perameter

const arr = (...a) => console.log(a); //Array 
arr(1,2,3,4,5,5,6,8,7,7);

//hoisting  is not available in aerrow function


//this keyword 
//normal function
const obj = {
    value:20,
    myfunction: function(){
        console.log("Value is " + this.value)
    }
}

obj.myfunction();

//normal function
const obj2 = {
    value:20,
    myfunction: () =>  console.log("Value is " + obj2.value)
    //we can't use this here because this will point the Window object(global object) in arrow function    
}

obj2.myfunction(); 