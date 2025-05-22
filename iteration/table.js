// Function to print multiplication table  
function printTable(number) {
    console.log(`Multiplication Table of ${number}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

 
printTable(5);
