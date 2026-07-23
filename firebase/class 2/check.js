import { auth } from "./config.js";


document.getElementById("checkBtn").addEventListener("click" , async function() {


    const user = auth.currentUser;

    if(user){
        console.log(auth.currentUser.email);
        
    }else{
        console.log("No user Logged In!");
        
    }


    
})