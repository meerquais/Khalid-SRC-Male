import { auth, sendPasswordResetEmail } from "./config.js";


document.getElementById("resetBtn").addEventListener("click", async function() {
    
    const email = document.getElementById("email").value;

    try {
        await sendPasswordResetEmail(auth , email)
        alert("password reset email sent!")
    } catch (error) {
        console.log(error.message);
        
    }



})