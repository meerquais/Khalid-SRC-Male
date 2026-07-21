import { auth , createUserWithEmailAndPassword } from "./config.js";


document.getElementById("signupBtn").addEventListener("click" ,async function(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email);
    console.log(password);
    

    try {

            const userData = await createUserWithEmailAndPassword(auth,email,password);
            console.log(userData.user);
            console.log("Signup Success: " + userData.user.email);
            
            

        
    } catch (error) {
        console.log(error.message);
        
    }


})
