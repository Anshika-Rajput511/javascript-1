// stack(primitive)
/*
  It passes  copy of original value,
  No chane in original value
*/

//heap(non-primitive)
/* 
  It passes reference of original value,
  change takes place in original value also
*/

let myName ="Anshika"

let newName = myName
console.log(newName) //Anshika // copy of myName is passed

newName = "Shakti"
console.log(myName)  //Original value remains same
console.log(newName)  //Shakti 

let user={
    email:"user@gmail.com",
    upiID:"user123"
}

console.log(user)  //{ email: 'user@gmail.com', upiID: 'user123' }

let firstUser = user
firstUser.email = "first@gmail.com"
console.log(firstUser)  // { email: 'first@gmail.com', upiID: 'user123' }
console.log(user) //{ email: 'first@gmail.com', upiID: 'user123' } //here change in email also reflects in original object (that is user)