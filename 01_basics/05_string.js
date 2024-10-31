//declaration of string
const name = "Anshika-"
const title = "The Developer"

//concatenation 
console.log(name + title) // Anshika- The Developer

//another way to write string  //using back tick
console.log(`My name is ${name} and title is ${title}`)

//another way of declaration of string using String constructor
const gameName = new String("Battle")
console.log(gameName) // [String: 'Battle] //string is an object represent key: value pairs
console.log(gameName[0]) //B    //  At 0th index character is B

console.log(gameName.__proto__)