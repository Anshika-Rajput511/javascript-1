const accountId = 2378143 
 //const variables or constant are only declared once and not re-assigned
let accountEmail = "anshika2000@gmail.com" 
 //let variables are declared only once and can be re-assigned any number of times
var accountPassword = "12345" 
 // var variables can be declared and re-assigned any number of times
 accountCity="Noida"
//  a variable can also be written without let and var but it's not recommended to use this way
let accountState;  // if value is not initialized then it is undefined

//accountId = 634838   //not valid
accountEmail = "anshika5000@gmail.com"
accountPassword = "91919190"
accountCity = "Bengalore"

/* 
   prefer not to use var
   because of issue in block scope and function scope
*/

console.log(accountId)

console.table([accountEmail, accountPassword, accountCity, accountState])

