import { db , doc , getDoc } from "./config.js";


const readBtn = document.getElementById("readBtn");
const out = document.getElementById("out");


readBtn.addEventListener("click" , async ()=>{

    const id = document.getElementById("docId").value.trim();


    if(!id){
        out.textContent = "Please Enter a ID"
        return;
    }

    try {

        const docRef = doc(db , "users" , id)

        const docSnap = await getDoc(docRef);

        console.log(docSnap.data());

        out.textContent = JSON.stringify(docSnap.data(),null, 2)
        
        
    } catch (error) {
        out.textContent = "Error: " + error.message
    }



})