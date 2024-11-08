// objects can be declared in two ways: Literal and constructor

//singleton object made when created with constructor
//object.create

//object literals

//for question we make a symbol
const mySymbol = Symbol("key1")

const  JsUser = {
    name : "Anshika",
    [mySymbol] : "mykey1",
    age : 20,
    location : "Meerut",
    email : "anshika@gmail.com",
}

console.log(JsUser.email)

//better way using square bracket
console.log(JsUser["email"])

 /* Question - take a symbol and made it act like a key 
 Answer - so we make a symbol using name mySymbol and then in the object 
we put it in square bracket   and access using square bracket without double quotes
If we access it without square bracket then we it is of type string not a symbol */

console.log(JsUser[mySymbol])   //mykey1

// freeze is used so that we cannot make any change in the object
JsUser.email = "anshika@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "anshika@microsoft.com"
//console.log(JsUser)
/* {
  name: 'Anshika',
  age: 20,
  location: 'Meerut',
  email: 'anshika@chatgpt.com',
  [Symbol(key1)]: 'mykey1'           // now it is a symbol
}  */

JsUser.greeting = function(){
    console.log("Hello JS user")
}

console.log(JsUser.greeting)   //[Function (anonymous)]   // is is a reference of function

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())   
//Hello JS user
//undefined
console.log(JsUser.greetingTwo()) 
// Hello JS user, Anshika
// undefined


