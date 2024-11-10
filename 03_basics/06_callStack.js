/*   javascript execution context
  1. global execution context
  2. function execution context
  3. Eval execution context

   js code - memory creation phase
           - execution phase
*/

let val1 = 10
let val2 = 20
function addnum(num1,num2){
    let total = num1+num2
    return total;
}
let result1 = addnum(val1, val2)
let result2 = addnum(2,3)

/* steps for execution
1. global execution  takes place first and it is allocated in this
2. memory creation phase - collect all variables and put undefined in them
 for ex- val1 => undefined
         val2 => undefined
        addnum => definition 
        result1 => undefined
        result2 => undefined

3. execution phase 
    val1 = 10
    val2 = 20
    addnum creates a separate execution context 
    which contains a new variable environment and execution thread 

    then a memory phase created for this function execution context
    val1 = undefined
    val2 = undefined
    total = undefined

    and a execution context in which 
    num1  =  10
    num2 = 20
    total = 30

    and total returns to global exceution code
     
    and after all the process of function completes then the separate exceution context of function i.e., created by addnum  will be deleted

    then in the execution phase 
    result2 = undefined 
    and a separate ececution  created for the function addnum

    which contains new variable environment and execution thread 
    then a memory phase and execution phase created for this function execution context and resulted value send to global execution
    