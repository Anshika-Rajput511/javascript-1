function myName() {
console.log("A");
console.log("N");
console.log("S");
console.log("H");
console.log("I");
console.log("K");
console.log("A");
}

// myName()    //function execute

function addTwoNumbers(number1, number2) {
    return number1+number2;
}

const result = addTwoNumbers(3,4)
console.log(result);   //7 

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Anshika"));

function loginUserMessage(username) {
    if(username === undefined) {      // or we can also write if(!username) // or we can also give a default value in function definition parameters so we never enter in if statement
        console.log(`Please enter a username`);
        return
    }
       return `${username} just logged in`
     }
     console.log(loginUserMessage());   //what happen is no value is passed? ==> then it comes undefined

     // when we do not know number of arguments 
     function calculateCartPrice(...num1){     // we use rest operator which is ...
        return num1
     }

     console.log(calculateCartPrice(200,400,600));    // [ 200, 400, 600 ]   rest operator gives us an array

     // how to use object in function

    const user = {
        name: "Anshika",
        id: 1
    }

    function handleObject(anyObject){
        console.log(`username is ${anyObject.name} and id is ${anyObject.id}`);    // username is Anshika and id is 1
    }
     
    handleObject(user)   // at the time of function call we pass arguments as object name 

/*  or we can also pass object in the function call 
    like 
    handleObject({
    name: "Anu",
    id: 2
    })
*/

// pass array in functions

const myArray = [200, 400, 600, 800]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray));    // 400 