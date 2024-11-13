// for of

const arr =[1,2,3,4,5]
// for (const element of object) {   // object define here on which thing we want to apply loop
    
// }

for (const num of arr) {
    console.log(num); 
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet==" ")
    {
        continue;
    }
    console.log(`Each char is : ${greet}`);
}

//map


// map is an object holds key value pair
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('En', "England")

console.log(map);  /*Map(3) {
                    'IN' => 'India',
                    'USA' => 'United States of America',
                    'En' => 'England'
                    }
                  */
                
 // loop on map
 for (const [key,value] of map) {   //destructuring of array  // hold the key and value in square bracket
    console.log(key);   // we will get the keys only 
 }

 //map are not iterateable so we do not use for in loop


 /// forof loop on object
 const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
 }

//  for (const obj of myObject) {    // TypeError: myObject is not iterable
//     console.log(obj);   
//  }

const anObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in anObject) {
   console.log(key);    // get all the keys
}

for (const key in anObject) {
   console.log(`${key} shortcut is for ${anObject[key]}`);   
}
/* 
js shortcut is for javascript
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const programminng = ['js', 'rb', 'py', 'java', 'cpp']
for (const key in programminng) {
  console.log(key);   //array's keys starts from 0
}


// for each loop 

const coding = ['java', 'cpp', 'python', 'ruby' ]

coding.forEach((item)=>{
    console.log(`Coding array have the value: ${item}`);
})
/*
Coding array have the value: java
Coding array have the value: cpp
Coding array have the value: python
Coding array have the value: ruby
*/

// we can also access the function that is written anywhere else in code with function name
// array_name.forEach(function_name)

// objevt inside array
//[{}, {}, {}]

const myCoding = [
    {
        language: 'javascript',
        fileName: 'js'
    },
    {
        language: 'java',
        fileName: 'java'
    },
    {
        language: 'python',
        fileName: 'py'
    }
]

myCoding.forEach((item)=>{
        console.log(item);   
})

/*
{ language: 'javascript', fileName: 'js' }
{ language: 'java', fileName: 'java' }
{ language: 'python', fileName: 'py' }
 */

myCoding.forEach((detail)=>{
        console.log(detail.language);   
})
/*
javascript
java
python
*/