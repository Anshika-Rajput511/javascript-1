const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)   //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const all_heroes =marvel_heroes.concat(dc_heroes)
console.log(all_heroes) 
 /* [
    'thor',
    'Ironman',
    'spiderman',
    [ 'superman', 'flash', 'batman' ],
    'superman',
    'flash',
    'batman'
  ]  */ 

    //spread  -spread the values individually
    const all_newHeroes = [...marvel_heroes, ...dc_heroes]
    console.log(all_newHeroes)

    // flat - spread all values of array
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array)
 /* [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]  */

 // isArray - determines whether the passed parameter is an array or not
console.log(Array.isArray("Anshika"))    //false

// from - convert the parameter to array
console.log(Array.from("Anshika"))   //[  'A', 'n', 's', 'h', 'i', 'k', 'a']

//interesting
console.log(Array.from({name:"Anshika"}))  //It will give an empty array because we need to specify that whether we want the keys to be array or value to be array

// of - returns a new array by converting elements into array
let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2, score3))    //[ 100, 200, 300 ]