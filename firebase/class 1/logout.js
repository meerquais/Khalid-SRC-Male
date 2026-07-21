import { auth, signOut } from "./config.js";


document.getElementById("logoutBtn").addEventListener("click" , async function() {


    try {
        await signOut
        console.log("Successfuly logged out!");
        
    } catch (error) {
        console.log(error.message);
        
    }


    
})