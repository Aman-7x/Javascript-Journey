//Imediately Invoked Function Expression (IIFE)
//Named IIFE
(function chai(){
    console.log(`DB Connected`);
    
})();

// chai();


( (name)=> { 
    console.log(`DB Connected 2 ${name}`);
    
})('Amn');