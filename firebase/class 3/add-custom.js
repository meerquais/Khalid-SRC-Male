import { db , doc, setDoc , auth } from "./config.js";


const addBtn = document.getElementById("addBtn");
const out =  document.getElementById("out");
addBtn.addEventListener("click" , async ()=>{
    const id = document.getElementById("docId").value.trim();
    const value = document.getElementById("docValue").value;

    if(!id){
        out.textContent = "Please Enter an ID!"
    }
    
    try {
        await setDoc(doc(db,"users" , id), {
            value:value, createdAt: Date.now()
        })

        out.textContent = `Document Created! ${id}`

    } catch (error) {
        out.textContent = "Error : " + error.message
    }



})