// const user = new Object()     // Singleton object 
// console.log(user)    //{}

const user2 = {}    //Not a singleton object
console.log(user2);   //{}    

user2.id ="123abc"
user2.name = "Anshika"
user2.email = "anshika@gmail.com"

console.log(user2);   // { id: '123abc', name: 'Anshika', email: 'anshika@gmail.com' }  // all values comes under object user2

// nested objects

const regularUser = {          // here regularUser, fullname, userfullname are objects
    location : "Meerut",
    fullname: {
        userfullname: {
            firstname: "Anshika",
            lastname: "Rajput"
        }
    }
}
// how to access these objects 
//using . operator
console.log(regularUser.fullname);  // { userfullname: { firstname: 'Anshika', lastname: 'Rajput' } }

console.log(regularUser.fullname.userfullname)   // { firstname: 'Anshika', lastname: 'Rajput' }

console.log(regularUser.fullname.userfullname.firstname)  // Anshika

// combine objects

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }   // object inside object


//assign - One or more source objects from which to copy properties
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
const obj3 = Object.assign(obj1, obj2)
console.log(obj3);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(obj3===obj1)   //true 
//because obj1 is target and obj2 is source so all values copy into target that's why obj1===obj3
// so sometimes we take an empty array i.e.,{} , so we got understood that all elements copied into that empty array 
//  so we write Object.assign( // as target // {} ,  // as source // obj1, obj2 )

// but we mostly use spread operator for combining
const combineObj = {...obj1, ...obj2}
console.log(combineObj);    //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// when we get values from database then it is in form of Array of objects
const users = [
    {
        id: 1,
        emailId: "a@gmail.com"
    }
]

// how to access this array of objects
  console.log(users[0].id);  //1
  console.log(users[0].emailId);   // a@gmail.com

  console.log(user2);
  console.log(Object.keys(user2));   // [ 'id', 'name', 'email' ]  // we will get an array of keys here so we can apply loop on this and use it further
  console.log(Object.values(user2));   // [ '123abc', 'Anshika', 'anshika@gmail.com' ]
 console.log(Object.entries(user2)); // [ [ 'id', '123abc' ], [ 'name', 'Anshika' ], [ 'email', 'anshika@gmail.com' ]]
 
 // hasOwnProperty - Determines whether an object has a property with the specified name.
 console.log(user2.hasOwnProperty('email'));    // true
 
 // destructuring of object

 const course = {
    coursename: "javascript",
    price: "999",
    duration: "3 months"
 }

 const {duration} = course
 console.log(duration);
 //or we can do 
 const {duration: du} = course
 console.log(du);