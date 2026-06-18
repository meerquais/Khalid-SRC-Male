console.log("JavaScript Connected!");



// for(var i =1 ; i <= 20 ; i++){
//     if(i === 5){
//         console.log("Juice milgaya!");
        
//     }
// }


// var isFound = false;

// for(var i =1 ; i <= 20; i++){
//     if(i === 50){
//         isFound = true;
//     }
// }

// if(isFound){
//     console.log("Condition Matched!");
    
// }else{
//     console.log("Not Found!");
    
// }


// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
//     17,18,19,20,21,22,23,24,25
// ];

// console.log(arr.length);

// for(var i =0;i < arr.length ;i++){
    
//     if(i === 10){
//         continue;
//     }

//     console.log(i);
    
// }


// var city = prompt("Type your city name!").toUpperCase();

// console.log(city.toLowerCase());


// if(city === "KARACHI"){
//     console.log("welcome to karachi!");
    
// }else{
//     console.log("Not in our Records");
    
// }

// var city = "Boston";

// console.log(city.slice(2,3));


// var str = "World War II";
// var str = "Hello My name is Meer! Hello Class!";

// console.log(str.indexOf("Hello"));
// console.log(str.lastIndexOf("Hello"));
// console.log(str.charAt(23));

// var strrr =str.replace("World War II" , "Second World War")

// console.log(strrr);


var details = `World War II, conflict that involved virtually every part of the world during the years 1939–45. The war was in many respects a continuation, after an uneasy 20-year hiatus, of the disputes left unsettled by World War I. The principal belligerents were the Axis powers—Germany, Italy, and Japan—and the Allies—France, Great Britain, the United States, the Soviet Union, and China (after the war, these countries would become the five permanent members of the United Nations Security Council). The total nature of World War II meant that civilian populations not only contributed to the war effort but also became direct targets of aerial attack. Moreover, in 1941 the Nazi regime unleashed a war of extermination against Jews, Slavs, and other people deemed inferior by Hitler’s ideology, while Stalinist Russia extended its campaign of terror against Ukrainians to the conquered Poles. The 40,000,000–50,000,000 deaths incurred in World War II make it the bloodiest conflict, as well as the largest war, in history.

Winston Churchill, Harry Truman, and Joseph Stalin
1 of 2
Winston Churchill, Harry Truman, and Joseph StalinBritish Prime Minister Winston Churchill, U.S. Pres. Harry S. Truman, and Soviet Premier Joseph Stalin meeting at Potsdam, Germany, in July 1945 to discuss the postwar order in Europe.
Atomic bombing of Hiroshima
2 of 2
Atomic bombing of HiroshimaA gigantic mushroom cloud rising above Hiroshima, Japan, on August 6, 1945, after a U.S. aircraft dropped an atomic bomb on the city, immediately killing more than 70,000 people.
Along with World War I, World War II was one of the great watersheds of 20th-century geopolitical history. It resulted in the extension of the Soviet Union’s power to nations of eastern Europe, enabled a communist movement to eventually achieve power in China, and marked the decisive shift of power in the world away from the states of western Europe and toward the United States and the Soviet Union.`


// console.log(details.replaceAll("World War II" , "Second World War"));
console.log(details.replace(/World War II/g , "Second World War"));
