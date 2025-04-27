->If we create Object by Constructor it will be signleton
Object.create

->Object literals
        const JsUser = {
            name:"Aman",
            age:22,
            location:"Indore",
            email:"aman@gmail.com",
            isLoggedIn:false,
            lastLoginDays:["Monday","Saturday"]
        }
 here  :
 name->_Key_(String type) {system process like it  "name":"Aman"}
 "Aman" -> _Value_ simply the data 

to make unique key
  const mySym = Symbol("key1");
  [mySym]: "mykey1"


  to freeze the object for it will not update anymore : Object.freeze(JsUser)