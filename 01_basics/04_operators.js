console.log(2+2)
console.log(2-1)
console.log(2*2)
console.log(2/2)
console.log(2**3)
console.log(2%2)

let value=4
let negValue=-value
console.log(negValue)  //-4

console.log("concatenation of strings")
let str1="Anshika"
let str2= " Rajput"
let str3=str1+str2
console.log(str3)

console.log("string conversion")
console.log("1" + 2)  // 12   // first string then concatenate
console.log(1 + "2")   //12   // number + string =string (if one number is there)
console.log("1" + "2") //12   // string + string =concatenate

console.log(1 + 2 + "2") //32  
  /*number + number + string =string
 (but first the numbers get added then concatenate with string)
 here, 1+2 becomes 3 then concatenate with string "2" and result is 32 which is a string*/

 /* if string is in first then conversion is in strings,
 if string is at last then first the defined conversion takes then place then string concatenate*/

console.log(+true)  // 1 because true is boolean  but true+ gives error 
console.log(+"") //0

let num1,num2,num3
num1=num2=num3=2+2
console.table([num1,num2,num3])  // not a good practice in industry

let a=5
let b=5
console.log(++a)  //6  //first increment then use
console.log(b++)  //5  //first use then increment 

console.log("comparison")
console.log(2>1)  //true
console.log(2>=1) //true
console.log(2==1) //false
console.log(2!=1) //true
console.log(2===2) //true //strictly equal to  // check type also
console.log(2==="2") //false because number!=string
console.log("2">1) //true  //js automatically convert string to number

console.log(null>0) //false
console.log(null<0) //false 
console.log(null==0) //false
console.log(null>=0) //true
/*these result are  sometimes not give required result, avoid them */

