import { db , collection , getDocs } from "./config.js";


const readBtn = document.getElementById("readBtn");
const out = document.getElementById("out");

readBtn.addEventListener("click" , async ()=>{


    // console.log("test");
    
    try {

        const docRef = collection(db,"users");
        const snapshot = await getDocs(docRef)

        const result = [];

        snapshot.forEach((doc) => result.push({
            id:doc.id,
            ...doc.data()
        }))
        

        out.textContent = JSON.stringify(result, null , 2)

        // console.log(result);
        
        
    } catch (error) {
        console.log(error.message);
        
    }




})


// const arr = [1 ,2 ,3 ,4 ,5];


// const clone = [...arr];

// console.log(clone);

