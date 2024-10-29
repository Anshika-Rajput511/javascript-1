/*Js is a dynamically typed language means we do not need 
to define the variable type at the time of declaration */

// primitive datatype
// 7types : Number, String, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
//even if same value is passed in symbol if gives different result
console.log(id===anotherId)  //false

const bigNumber=526378374726326382739827n
console.log( bigNumber)   //bigInt number 

// Reference or Non-Primitive datatype
// Array, Objects, Functions

const devi =["shakti,saraswati,parvati,laxmi"] //Array

let myObj = {
    name:"anshika",
    age: 20
}   //object

const myFunction =function(){
    console.log("Hello World")
}   //function

//type of null => object

console.log(typeof devi)    //object
console.log(typeof myFunction) //function
console.log(typeof myObj)  //object

let a=5
let b=true
let str= "Anshika"
console.log(typeof a)  //number
console.log(typeof b)   //boolean
console.log(typeof str)   //string
console.log(typeof bigNumber)  //bigint