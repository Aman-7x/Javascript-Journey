
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");  
}

// sayMyName()

// function addTwoNumber(num1 , num2){
//     console.log(num1 + num2 );
    
// }

// addTwoNumber(3,4);

function addTwoNumber(num1=23 , num2){
    return num1 + num2
   }

//    console.log("Result : " , addTwoNumber(undefined,5));
   

   function calculateAll (...num1){ //Rest operator used to take n no. of perameter it will return array
    return num1;
}

// console.log(calculateAll(100,200));

const user =    {
    username :"Aman",
    bill:900
}

function handleObj(anyObj){
    console.log(`Username is ${anyObj.username} and your bill ${anyObj.bill}`);
    
}


handleObj(user);
