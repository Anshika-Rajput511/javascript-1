const user = {
    username : "Anshika",
    id: 1,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);   // this is used to refer to current context
       // console.log(this)
    }
}
user.welcomeMessage()
user.username="Anu"
user.welcomeMessage()  // Anu, welcome to website

 console.log(this)    // {}

 function hello(){
    let username = "Anshi"
    console.log(this);    
 }
 hello()

const fun = ()=>{
    let username = "Anshika"
    console.log(this.username);   // undefined   // we are not able to use this in function
}
fun() 

const addTwo = (num1, num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))

// implicit function    - written without curly braces and return
 const add = (num1, num2)=>  num1+num2
 console.log(addTwo(3,4))     // 7

// if we apply curly braces then we have to write return statement but if we apply parenthesis then no need to write return statement
const sub = (num1, num2)=>  (num1-num2)

console.log(sub(6,4))     // 2 

const myobject = (username1)=> ({username:"anshika"})   // to return an object we write it in () in arrow function
console.log(myobject())    // { username: 'anshika' } 

const myArray = [2,3,4,5,6]
//myArray.forEach(()=>{})