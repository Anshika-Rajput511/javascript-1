// switch(key){
//     case  value: 
//     break;
//     default:
//     break;
// }

const month = 2
switch(month){
    case 1: console.log("one");
    break;       // break to exit from loop
    case 2: console.log("February");
    break;
    case 3: console.log("March");
    break;
    default: console.log("No match");
    break;
    
}   // to make duupicate press shift+alt+down arrow

if(-1){  // true
    console.log("1");   // 1    
}

// falsy values 
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], (), function(){}

// Nullish Coalescing  Operator (??): null undefined
// if we get null or undefined then the first defined value will get there 
let value;
// value = 5 ?? 10      //5
//value = null ?? 10    //10
value = undefined ?? 15   //15
console.log(value);

//ternary operator  condition? true: false;

const year = 2001
year<2000? console.log("yes"): console.log("No");



