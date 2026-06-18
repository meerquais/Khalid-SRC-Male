console.log("JavaScript Connected!");


// var firstName = "Meer";
// var lastName = "Quais";

// var fullName = firstName + " " + lastName;

// console.log(fullName);

// var a = 10;
// var b = "ten";

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);


// var studentName = prompt("Type your name","Saim");

// console.log(studentName);


// if(condition){
//     // code 
// }

// var x = prompt("Where does the pope live?");

// if(x === "Vatican"){
//     alert("Correct Answer!");
// }





// var x = prompt("Where does the/ pope live?");

// var score = 0;
// var userIQ = "Normal";

// if(x === "Vatican"){
//     score++
//     userIQ = "Genius";
//     alert("Correct Answer!")
// }

// console.log(score);
// console.log(userIQ);


// Assigning Operator ===>    " = "

// Equality Operator ===>   " == "

// Strictly Equality Operator ===>    " === "


// Greater Than Operator ===>   " > " 


// Greater than Equal to Operator ===> " >= "

// Less than operator ===> " < "

// Less than Equal to Operator ===> " <=  ";

// Not Equal to ===> " != "

// Strictly Not Equal to ===> " !== "




// var age = 8;

// console.log(age == 20);
// console.log(age == 18);

// console.log(age = 20);
// console.log(age == "18");

// console.log(age === "18");


// console.log(age > 20);

// console.log(age > 18);

// console.log(age >= 18);

// console.log(age < 20);

// console.log(age <= 15);


// console.log(age != 20);


// console.log(age != "20");

// console.log(age !== "18");

// if(age === 18){
//     console.log("Correct!");
    
// }else{
//     console.log("Wrong!");
    
// }


// if(age >= 23){
//     console.log("Adult!");
// }else if(age >= 18){
//     console.log("Teenager");   
// }else{
//     console.log("Child");
    
// }



// var number1 = Number(prompt("Type your number 1"));
// var number2 = Number(prompt("Type your number 2"));

var num1 = +prompt("Type your first number");
var opt = prompt("Type your Operator!" , "+ / - / * / /");
var num2 = +prompt("Type your second number");

if(opt === "+"){
    console.log(num1 + num2);
}else if(opt === "-"){
    console.log(num1 - num2);
}else if(opt === "*"){
    console.log(num1 * num2);
}else if(opt === "/"){
    console.log(num1 / num2);
}else{
    console.log("Please enter valid operator!");
    
}



