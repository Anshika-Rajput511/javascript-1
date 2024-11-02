//declaration of string
const name = "Anshika-"
const title = "The Developer"

//concatenation 
console.log(name + title) // Anshika- The Developer
//OR
console.log(name.concat(title))

//another way to write string  //using back tick
console.log(`My name is ${name} and title is ${title}`)

//another way of declaration of string using String constructor
const gameName = new String("Battle")
console.log(gameName) // [String: 'Battle] //string is an object represent key: value pairs
console.log(gameName[0]) //B    //  At 0th index character is B

console.log(gameName.__proto__)

//eval() shows different results on string primitive and string objects
const str1="2" + "2"
const str2=new String("2" + "2")
console.log(eval(str1))  //22  //It us treated as source code
console.log(eval(str2))  //[String: "22"]

console.log(title.length) //13
//const title = "The Developer"
console.log(title.at(2))  //e
console.log(title.at(-5))  //l  //accepts negative value also
console.log(title.charAt(4)) //D 
console.log(title.codePointAt(1))  //returns a non-negative value i.e. UTF-16 encoded code point
console.log(title.endsWith('f'))//false  //whether string ends with the given character or not
console.log(title.includes('the'))//false  //check whether given string is in the original string or not and is case sensitive
console.log(title.indexOf("Dev"))  //4 //  returns index of first occurence of search string
console.log(title.isWellFormed())   //true  // check whether string contains lone surrogates
console.log(title.lastIndexOf('e')) //11 //  returns index of last occurence of search string

const s1="alpha"
const s2="beta"
console.log(s1.localeCompare(s2)) -1