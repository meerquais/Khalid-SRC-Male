console.log("JavaScript Connected!");


// var user = "Ahsan";
// var message = "Welcome to our Web page";
// var specialChar = "!";

// console.log(user +" " + message + specialChar)


// var num1 = 20;
// var num2 = "20";

// console.log(num1 + num2);
// console.log(num1 - num2);



// var student = prompt("Type your name!" , "Guest");

// console.log(student);


// var city = prompt("Type your city name!");

// if(condition){
//     block of code
// }

// if(city === "Karachi"){
//     console.log("City of lights!");
    
// }else{
//     console.log("Not in our Records!")
// }



// Assigning Operator ===>     =  => Assign karo!
// Equality Operator ===>     ==  => Value Check karo!
// Strictly Equality Operator  ===>    ===    => value and data type check karo!



// greater than operator ===>        >    => bada hona chaiye
// less than operator ===>           <    => chota hona chaiye
// greater than equal to operator ===>    >=   ==> bada ya equal hona chaiye
// less than equal to operator ===>       <=   ==> chota ya equal hona chaiye

// not operator    ===>     ! ==> false hona chaiye // false huwa true hoga
// not Equal to operator ===>  !=  ==> equal na ho!
// Strictly not equal to operator ===> value aur data type equal na ho!




// var age = 19;

// if(age == 15){
//     console.log("Allowed!");
// }else{
//     console.log("Not Allowed!");
    
// }

// console.log("10" == 10);
// console.log(10 === 9);
// console.log(10 === "10");

// console.log(9 > 10);
// console.log(10 > 9);
// console.log(10 > 10);
// console.log(10 >= 10);


// var isTrue = false;

// console.log(!isTrue);


// console.log(10 != "10");


// var city = prompt("Type your city name!");

// if(city === "Karachi" ){
//     console.log("City of lights!");
// }else if(city === "Quetta"){
//     console.log("Quetta city!");
// }else if(city === "Islamabad"){
//     console.log("Capital of Pakistan!");
// }else{
//     console.log("Didn't match in our system!");
    
// }


// var light = prompt("What traffic lights are showing?");


// if(light === "red"){
//     console.log("STOP!");
// }else if(light === "yellow"){
//     console.log("Start your engine");
// }else if(light === "green"){
//     console.log("You can go!");
// }else{
//     console.log("Wrong Traffic Colors!");
    
// }

// var prom = +prompt("Type anything!");

// console.log(typeof prom , prom);


// var num1 = +prompt("Type num 1");
// var opt = prompt("Type your operator!" , "+ - * /");
// var num2 = +prompt("Type num 2");


// if(opt === "+"){
//     console.log(num1 + num2);
// }else if(opt === "*"){
//     console.log(num1 * num2);
// }else if(opt === "-"){
//     console.log(num1 - num2);
// }else if(opt === "/"){
//     console.log(num1 / num2);
// }else{
//     console.log("Operator not matching!");
    
// }


var citizen = prompt("Type your citizenship");
var age = +prompt("Type your age!");

// AND GATE! &&
// if(citizen === "Pakistani" && age >= 18){
//     console.log("Allowed to vote!");
// }else{
//     console.log("Not allowed to vote!");
    
// }

// OR GATE! ===> || 

if(citizen === "Pakistani" || age >= 18){
    console.log("Allowed to visit!");
}else{
    console.log("Not allowed to visit!");
    
}