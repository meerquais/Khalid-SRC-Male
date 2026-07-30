import { db , collection , addDoc } from "./config.js";

const addBtn = document.getElementById("addBtn");
const out = document.getElementById("out");


addBtn.addEventListener("click" , async ()=>{

    const value = document.getElementById("docValue").value;

    try {
        const userRef =  await addDoc(collection(db, "users") , {
            value, createdAt: Date.now()
        })
        out.textContent = `This document was created using auto id! id is${userRef.id}`
    } catch (error) {
        out.textContent = "Error : " + error.message
    }


})