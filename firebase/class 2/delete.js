import { auth , deleteUser } from "./config.js";

document.getElementById("deleteBtn").addEventListener("click" , async function() {
    

    const user = auth.currentUser;

    if(user){
        try {
            await deleteUser(user)
            alert("User Deleted!")
        } catch (error) {
            console.log("Error: " + error.message);
            
        }
    }else{
        alert("No User Logged In!")
    }



})