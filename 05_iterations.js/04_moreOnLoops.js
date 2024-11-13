const coding = ['java', 'js', 'python', 'ruby']

// const values = coding.forEach((item)=>{
//     console.log(item);  
//     return item; 
// })
// console.log(values);   // undefined // forEach does not return a value

const myNums = [1,2,3,4,5,6,7,8,9,10]
// filter(predicate: (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[]
// A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

// Returns the elements of an array that meet the condition specified in a callback function.

const newNums = myNums.filter((nums)=>nums>5) //  if we write nums>5 in curly braces then we have to use return because we are opening a scope by writing it in curly braces
console.log(newNums);   // [ 6, 7, 8, 9, 10 ]

