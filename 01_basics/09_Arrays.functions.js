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

    //spread
    const all_newHeroes = [...marvel_heroes, ...dc_heroes]
    console.log(all_newHeroes)
