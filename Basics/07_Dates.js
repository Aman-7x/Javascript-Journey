let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let mycreatedDate = new Date(2023,0,20);
// console.log(mycreatedDate.toDateString());

// let mycreatedDate = new Date(2023,0,20,13,12);
// console.log(mycreatedDate.toLocaleString());

// let mycreatedDate = new Date("2023-1-12"); //yy-mm-dd 
let mycreatedDate = new Date("2-11-2023"); //mm-dd-yy
// console.log(mycreatedDate.toLocaleString());


let myTimeStamp =  Date.now();

// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate  = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getDay());

//Coustom Formate
newDate.toLocaleString(`default`,{
    weekday:"long"
})


