# Javascript-Journey
const accId = 12345;
let accEmail = "aman@gmail.com";
var accPassword = "321321";
accCity = "Indore"; It will run but bad practice
 accId = 12;  Const Can't be reassigned , redecalared and have  block space
 console.log(accId);


accEmail = "info@gmail.com";
accPassword = "01126532653";
accCity = "Delhi";

console.table([accId , accEmail , accPassword , accCity]);  It used to print data into tabular form

=> var keyword : 
-> var keyword was used in all js code from 1995-2015 
-> variable with var keyword always have globle scope , Can't have block scope
-> Allow Redeclarition and Reassign
-> var is hoisted , means you can use var before it's declaration

=> let keyword : 
-> It introduced in ES6 2015.
-> It have block scope.
-> It is not hoisted means must be declare before use.
-> can't redeclared in same block.

=> const keyword:
-> it introduced in ES6 2015.
-> It not allow Redeclaration , Reassign and have block scope.
-> const keyword used for Make Constant !

nkn