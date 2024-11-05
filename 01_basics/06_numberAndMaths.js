const  num=85
console.log(typeof num)  //number

const nums = new Number(100)
console.log(typeof nums)   //object

console.log(nums.toString()) //100
console.log(nums.toString().length)   //3
console.log(nums.toFixed(2)) //100.00  //gives 2 fixed point after decimal

const otherNum = 23.5281
console.log(otherNum.toPrecision(3)) //23.5

const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'))  //10,00,000

console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
console.log(Number.MIN_SAFE_INTEGER)  //-9007199254740991
console.log(Number.EPSILON) //2.220446049250313e-16

// ********************** MATHS ************************

console.log(Math)  //Object [Math] {}
console.log(Math.PI) //3.14159
console.log(Math.abs(-5))   //5
console.log(Math.round(4.6))   //5
console.log(Math.ceil(4.2))   //5
console.log(Math.floor(4.8))  //4
console.log(Math.min(2,5,8,1))
console.log(Math.max(8,58, 6,2))

console.log(Math.random())  //value between 0 and 1
console.log((Math.random()*10)+1)  //value will never be 0 as we add 1 here
console.log(Math.floor(Math.random()*10)+1)  //gives single digit min value

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)  //if we want value to be greater than 10 then add min in floor value 