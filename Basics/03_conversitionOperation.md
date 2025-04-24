Exp 1:  String To Number Conversion
let score = "7"; 

console.log(typeof score);
console.log(typeof (score));

let valueNum = Number(score);

console.log(typeof valueNum);
console.log(valueNum); 

OutPut :
string
string
number
7


 
let score = "7a"; 

console.log(typeof score);
console.log(typeof (score));

let valueNum = Number(score);

console.log(typeof valueNum);
console.log(valueNum);


output :
string
string
number
NaN  //
                Final Output
                  If  "22"-> 22
                  If null -> 0
                  If undefined -> NaN
                  If 7a -> NaN
                  If true -> 1
                  If False -> 0

-------------------------------------------------------------------------------------------

Exp 2:   Boolean Conversion
let isLoggedIn = 1;
let booleanLogIn =  Boolean(isLoggedIn);
console.log(isLoggedIn);

output : 
1->true
0-> false
""-> false
"Aman" -> true
null-> false
undefined -> false

-------------------------------------------------------------------------------------------
Exp 3: String Conversion

let someNum = undefined;
let stringNum = String(someNum);
console.log(typeof stringNum);
console.log(stringNum);

ouput : 
 1 -> String 1
 null -> String  null
 undefined -> String undefined
 .5 -> String 0.5
 