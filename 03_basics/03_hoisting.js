function one(){
    const username = "Anshika"

    function two(){
        const website = "youtube"
        console.log(website);
    }
    two()   //youtube
}
one()

if(true){
    const username = "Anu"
    if(username === "anu"){     //false, so this does not execute
        const website = " YOUTUBE"
        console.log(username+website);
    }
    console.log(username); 
}

// *************** Interesting *************** 

console.log(addOne(5))     //6
function addOne(num){
    return num +1
}
// console.log(addOne(5))   //6

console.log(addTwo(5))    // error    // because declaration of function in variable does not support hoisting
const addTwo = function(num){
    return num+2
}
// console.log(addTwo(5))   //7

// when function is called before its declaration then its called hoisting

