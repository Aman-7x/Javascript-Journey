const user={
    username : "Aman",
    bill:900,
    welcomeMessage:function (){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);

    }

}

// user.welcomeMessage();
// user.username="Sam"
// user.welcomeMessage();

// console.log(this);

// chai();
// function chai(){
//     let username = "Aman";
//     console.log(this.username);
    
// }

// Arrow Function
// const chai = () =>{
//     let username = "Aman";
//     console.log(this.username);
// }
// chai();


// addTwo=(a,b)=> { return a+b};
addTwo=(a,b)=>  (a+b);  //Implicit return

console.log(addTwo(3,4));
console.log(addTwo(32,41));
console.log(addTwo(33,43));
console.log(addTwo(31,41));
