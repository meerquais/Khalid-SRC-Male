console.log("JavaScript Connected!");


// var rightNow = new Date()

// // var strr = time.toString()

// // console.log(typeof time , time);
// // console.log(typeof strr , strr);

// var daysOfTheWeek = ["Sun" , "Mon" , "Tues"
//                     ,"Wed" , "Thur" , "Fri","Sat"
// ]

// var day = rightNow.getDay()

// console.log(day);
// console.log(daysOfTheWeek[day]);

// var month = rightNow.getMonth();
// var monthsOfTheYear = [
//     "Jan" , "Feb" , "Mar" , "Apr" , "May"
//     ,"Jun" , "Jul" , "Aug" , "Sep" , "Oct",
//     "Nov" , "Dec"
// ]

// console.log(month);
// console.log(monthsOfTheYear[month]);

// console.log(rightNow.getDate());
// console.log(rightNow.getFullYear());
// console.log(rightNow.getHours());
// console.log(rightNow.getMinutes());
// console.log(rightNow.getSeconds());
// console.log(rightNow.getMilliseconds());
// console.log(rightNow.getTime());



// var today = new Date();

// var future = new Date("May 16, 2027");

// var msToday = today.getTime();
// var msFuture = future.getTime();

// var msDiff = msFuture - msToday;

// console.log(msDiff);


// var daysDiff = msDiff / (1000 * 60 * 60 * 24);

// daysDiff = Math.floor(daysDiff)

// console.log(daysDiff);


// var msDiff = new Date("Feb 26,2027").getTime() - new Date().getTime()

// var daysLeft = Math.floor( msDiff / (1000 * 60 * 60 * 24))

// console.log(msDiff);
// console.log(daysLeft);


var user = prompt("Type your birthday next year ex : Auguest 29,2027")


var msDiff = new Date(user).getTime() - new Date().getTime()

var daysLeft = Math.floor( msDiff / (1000 * 60 * 60 ))

console.log(msDiff);
console.log(daysLeft);