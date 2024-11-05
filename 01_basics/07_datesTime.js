//Dates
let myDate = new Date()     //type is object
console.log(myDate)   //2024-11-05T10:53:23.735Z
console.log(myDate.toString())     //Tue Nov 05 2024 10:56:03 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())   //Tue Nov 05 2024 
console.log(myDate.toLocaleString())   //11/5/2024, 10:56:03 AM

let myCreatedDate = new Date(2023,0,2)
console.log(myCreatedDate.toDateString())   //Mon Jan 02 2023

let myCreatedDates = new Date(2023,0,2,5,19)
console.log(myCreatedDate.toLocaleString())    //1/2/2023, 12:00:00 AM

let CreatedDate = new Date("01-13-2024")
console.log(CreatedDate.toLocaleString())   //  1/13/2024, 12:00:00 AM  

let myTimeStamp = Date.now()
console.log(myTimeStamp)   //dates in milliseconds
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)) //to get date in seconds   //floor used as value can be in decimal


let newDate = new Date()
console.log(newDate)  // 2024-11-05T11:24:44.021Z
console.log(newDate.getMonth()+1)//11       //+1 because month starts from zero
console.log(newDate.getDay())  //2

newDate.toLocaleString(`default`, {
    weekday:"long" 
})