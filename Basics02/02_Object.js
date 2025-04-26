const JsUser = {
    name:"Aman",
    "full name" : "Aman Khan",
    age:22,
    location:"Indore",
    email:"aman@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }

 console.log(JsUser.email);
//  console.log(JsUser.full name); You Cant Access the double quote value by dot (Bad Practice)
 
 console.log(JsUser["full name"])  //Good Practice //Square notation
 
