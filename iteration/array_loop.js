

// let arr = [1,2,3,4,5];

// for(let num of arr){
//     console.log(num);
    
// }

let str = "Hello World";

for(let x of str){
    // console.log(x);
    
}

// Maps 

const   map = new Map();

map.set('In' , "India");
map.set('USA' , "United State Of America");
map.set('Fr' , "France");
map.set('USA' , "United State Of America");

// console.log(map);

for(const i of map){
    // console.log(i); //It will give data in collection of array 
    // console.log(...i); //Withour array
    
}

//another way to print map

for(const [key,value] of map){
    // console.log(`key : ${key} , value : ${value} `)
}

// const obj = {
//      'game1': 'NFS',
//      'game2': 'Spiderman'
// }  //Object is not iterate by this way

