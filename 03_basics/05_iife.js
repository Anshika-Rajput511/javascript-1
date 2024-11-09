// immediately invoked function expressions

// -used to protect from the pollution of global scope

(function data(){
    console.log(`DB connected`);  
})();     //DB connected

// when we apply () then it is immediately invoked and must apply ; to stop the execution of invoked function

((name)=>{
    console.log(`DATABASE connected, ${name}`);  
})('Anshika'); 
