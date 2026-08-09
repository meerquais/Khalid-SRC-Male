import { auth , onAuthStateChanged, signInWithEmailAndPassword } from "./config.js";


const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const message =document.getElementById("message");


loginForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;


        try {
            const userCredential = await signInWithEmailAndPassword(auth,email,password )



        const user =  userCredential.user;
         console.log("Logged in user:", user);


            console.log("UID:", user.uid);


            message.textContent = "Login successful!";
            window.location.href = "./feed.html"

        } catch (error) {
            message.textContent = "Error : " + error.message
        }

});

onAuthStateChanged(auth,function (user) {

        if (user) {

            console.log(
                "User is logged in:",
                user.uid
            );
            window.location.href = "./feed.html"
            

        }

    }
);