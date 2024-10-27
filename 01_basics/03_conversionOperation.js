let score="33"

console.log(typeof score)  //string as score value is in " "

let valueInNumber =Number(score)
console.log(typeof valueInNumber)  // number as score converted into number
console.log(valueInNumber)  //33

let marks = "18abc"
console.log(typeof marks)  //string

let marksInNumber = Number(marks)
console.log(typeof marksInNumber)   // we get type as number because marks converted into number

console.log(marksInNumber)  //NaN => because marks are of type string and cannot fully convert into number

let a=null
console.log(typeof a) //object

let aInNumber =Number(a)
console.log( typeof aInNumber)  //number
console.log(aInNumber)  //0

let b=undefined
console.log(typeof b)  //undefined

let bInNumber =Number(b)
console.log( typeof bInNumber)  //number
console.log(bInNumber)  //NaN

let isValue =true
console.log(typeof isValue) //boolean

let isValueInNumber =Number(isValue)
console.log( typeof isValueInNumber)  //number
console.log(isValueInNumber)   //1

//string "33" =>  number conversion =>33
//string "33abc" => NaN
//null => 0
//undefined =>NaN
//boolean => 1 for true or 0 for false



//boolean conversion
/* 
 1 => true  
 0 => false
 ""=> false
 "name" => true
*/

let num =33

let numInString =String(num)
console.log(typeof numInString)   //string
console.log(numInString)   //33

let isCheck =true

let isCheckInString =String(isCheck)
console.log(typeof isCheckInString)   //string
console.log(isCheckInString)   //true

