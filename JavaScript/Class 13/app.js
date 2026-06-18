// test




/* var test1 = 1;
var test2 = 2; */

// this is comment

var display = document.getElementById("display")

// console.log(display);

function showValue(){
   if(display.value === ""){
    alert("Please type something");
   }else{
     console.log(display.value);    
   }
}

var zip = document.getElementById("zip");
var city = document.getElementById("city");


function fillCity(){

    if(zip.value === "54000"){
        city.value = "Karachi"
    }else if(zip.value === "64000"){
        city.value = "Lahore"
    }else if(zip.value === "44000"){
        city.value= "Islamabad"
    }

}