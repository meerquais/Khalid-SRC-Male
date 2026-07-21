import { auth, signInWithEmailAndPassword } from "./config.js";


document.getElementById("loginBtn").addEventListener("click" , async function() {

 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 
 
 try {
    
        const userData = await signInWithEmailAndPassword(auth, email,password);

        console.log("Login Successfully! :" + userData);
        console.log("Login Successfully! :" + userData.user.email);
        


 } catch (error) {
    console.log(error.message);
    
 }
 



    
})