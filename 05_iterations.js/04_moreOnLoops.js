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

const numsArray = [1,2,3,4,5,6,7,8,9,10]

/*
map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/

const addnum =numsArray.map((num)=>{
    return num+10
})
console.log(addnum);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
  */


// chaining
const advancenums = numsArray
                             .map((num)=>num*10)
                             .map((num)=> num+1)
                             .filter((num)=>{return num>=40})

console.log(advancenums);
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
  */

const array =  [1,2,3,4]

const total = array.reduce(function(accumulator, currentVlaue){
    console.log(`accumulator: ${accumulator} and current value: ${currentVlaue}`);
    /*
    accumulator: 0 and current value: 1
accumulator: 1 and current value: 2
accumulator: 3 and current value: 3
accumulator: 6 and current value: 4
*/
    
    return accumulator + currentVlaue
},0)   // this 0  here species the initial value of accumulator

console.log(total);    // 10

const shoppingCart = [
    {
        itemName : 'js course',
        price : 2999 
    },
    {
        itemName : 'java course',
        price : 5999 
    },
    {
        itemName : 'data science course',
        price : 7999 
    }
]

//const addPrice = shoppingCart.reduce((acc, item)=> acc+item.price,0)

const addPrice = shoppingCart.map((item)=> item.price).reduce((total, price)=> total + price, 0)
console.log(addPrice);  // 16997



