import { auth , db , createUserWithEmailAndPassword
    , doc , setDoc,
    serverTimestamp,
    onAuthStateChanged
} from "./config.js";


const signupForm = document.getElementById("signupForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const message = document.getElementById("message");

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

signupForm.addEventListener("submit" , async (event)=>{


    event.preventDefault();


    const username = usernameInput.value.trim()
    const email = emailInput.value.trim()
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if(password !== confirmPassword){
        message.textContent = "Passwords do not match";
        return;
    }



    try {

        const userCredential = await createUserWithEmailAndPassword(auth , email , password);


        const user = userCredential.user;

        console.log("Firebase User :" , user);
        

        await setDoc(doc(db, "users" , user.uid), {
            uid: user.uid,
            username : username,
            email : email , 
            createdAt: serverTimestamp()
        })


        message.textContent = "Account created!"

        window.location.href = "./login.html"








        
    } catch (error) {
        message.textContent = "Error : " + error.message
    }







})