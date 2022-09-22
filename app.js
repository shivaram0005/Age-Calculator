// const container;
// const error;
 document.addEventListener("change", displayAge);

function getAge(){
    
    //getuserinputdateofbirth
    let userInput = document.getElementById("dob").value;
    let getUserFullYear = new Date(userInput);
    let getUserYear = getUserFullYear.getFullYear();
    let getUserMonth = getUserFullYear.getMonth();
    let getUserDay = getUserFullYear.getDay();
    
    

    //get present year  month and day
    let now = new Date();
    let presentYear = now.getFullYear();
    let presentMonth = now.getMonth();
    let presentDay = now.getDay();


    // //timetraveler
    // if(getUserYear > presentYear){
    //     document.getElementsByClassName("error").style.display = "inline-block";
    // }

    return  {getUserYear,getUserMonth,getUserDay,presentYear,presentMonth,presentDay};


    
}


function calcAge(){ 
    let userValues = getAge();
    let userYear = userValues.presentYear - userValues.getUserYear;
    let userMonth = userValues.presentMonth - userValues.getUserMonth;
    let userDay = userValues.presentDay - userValues.getUserDay;
    return {userYear, userMonth, userDay};
    
}

function displayAge(){
    
    let userFinalAge = calcAge();
    
    document.getElementById("years").innerHTML = userFinalAge.userYear;
    document.getElementById("months").innerHTML = userFinalAge.userMonth;
    document.getElementById("days").innerHTML = userFinalAge.userDay;

}

