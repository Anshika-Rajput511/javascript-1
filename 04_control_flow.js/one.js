// if

if(true){
    //code exceuted
}

if(false){
    //code  not exceuted
}

//  <, >, <=, >=, ==, !=, ===

if(2=="2"){   // true
    console.log("code exceuted")
}

// if(2==="2"){    // false
//     console.log("code exceuted")
// }

if(2!=-2){   // true 
    console.log("executed");
}

const temperature = 51
if(temperature < 50){
    console.log("Less than 50");
}     
else{
    console.log("Greater than 50");
}

const balance = 1000

if(balance< 500){
    console.log(" less than 500");
}

else if(balance< 750){
    console.log(" less than 750");
}
else{
    console.log(" less than 1050");  // true
}

const userLoggedIn = true;
const debitCard = true
const userLoggedInFromGmail = true;
const userLoggedInFromGoogle = false;
if(userLoggedIn && debitCard)
{
    console.log("Allowed to buy courses");
}

if(userLoggedInFromGmail || userLoggedInFromGoogle)
    {
        console.log("Allowed to buy courses....");
    }

