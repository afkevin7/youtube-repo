// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
}) ();

( () => {
    console.log(`DB CONNECTED TWO`);
} )();

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
} )("Kevin")