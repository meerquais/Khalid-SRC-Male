import { db , doc , deleteDoc } from "./config.js";


const deleteBtn = document.getElementById("deleteBtn");
const out = document.getElementById("out");


deleteBtn.addEventListener("click" , async ()=>{

    const id = document.getElementById("docId").value.trim();


    if(!id){
        out.textContent = "Please enter document id!"
        return;
    }



    try {
        await deleteDoc(doc(db, "users" , id));

        out.textContent = `Document with ${id} Deleted!`

    } catch (error) {

        out.textContent = "Error : " + error.message
        
    }





})