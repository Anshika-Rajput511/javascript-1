//arrays are resizeable in js

const arr=[1,2,3,4,5];
console.log(arr[0])  //array elements are accessed by index
//js arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes
//It means array are not accessed by index [one] rather it is accessed by [1]

//shallow copy - A shallow copy occurs when you copy the reference of an object to a new variable.
//It mean that change takes place in the original value also.

//Deep copy - creates a completely independent copy of the object.
//This ensures that changes made to one object do not affect the other.
// to create a deep copy of an object in JavaScript we use JSON.parse() and JSON.stringify() methods

const heroes =["shaktimaan", "naagraj"]

const arr2=new Array(1,2,3,4)
console.log(arr2[3])  //4

//Arrays methods


//push - to add a new element
arr.push(6)   
console.log(arr)   //[ 1, 2, 3, 4, 5, 6 ]

//pop - to remove last element of the array
arr.pop()
console.log(arr)   //[ 1, 2, 3, 4, 5 ]

//unshift - array element add at index 0
arr.unshift(9)
console.log(arr)   //[ 9, 1, 2, 3, 4, 5 ]

//shift - remove the first element of the array
arr.shift()
console.log(arr)  //[ 1, 2, 3, 4, 5 ]

//includes - returns boolean after check if the value is present in the array or not
console.log(arr.includes(8))   //false

//indexOf - determines the index of the array element
console.log(arr.indexOf(3))  //2

//join - bind the array and convert to string
const newArr = arr.join()
console.log(arr)  //[1,2,3,4,5]
console.log(typeof newArr)  //string
console.log(newArr) //1,2,3,4,5    // in the frm of string

//slice - does not change the original array   and does not include the last index

//splice -  change the original array  and includes the last index also

console.log("A" , arr)    //A [ 1, 2, 3, 4, 5 ]
const array1 = arr.slice(1,3)
console.log(array1)    //[ 2, 3 ]

console.log("B" , arr)    //B [ 1, 2, 3, 4, 5 ]
const array2 = arr.splice(1,3)
console.log(array2)    //[ 2, 3, 4 ]

console.log("C", arr)   //[1,5]



