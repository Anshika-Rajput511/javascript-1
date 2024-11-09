let a = 10    // local scope
const b = 20   // local scope
var c = 30    // global scope

if(true){
    let a=100
    const b =200
    console.log(a + "," + b)    // a and b inside if have their scope inside if  // they have block scope
}
console.log(a);  // 10
console.log(b);  // 20
console.log(c);  // 30

for(let i=1; i<4; i++){
    console.log(i);    // i have block scope
}