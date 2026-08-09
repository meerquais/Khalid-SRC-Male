import { auth , onAuthStateChanged , db , getDoc , doc } from "./config.js";

const usernameElement =
    document.getElementById("username");

const emailElement =
    document.getElementById("email");

const logoutBtn =
    document.getElementById("logoutBtn");




onAuthStateChanged(
    auth,
    async function (user) {

        if (user) {

            const userRef =
                doc(
                    db,
                    "users",
                    user.uid
                );


            const userSnapshot =
                await getDoc(userRef);


            if (userSnapshot.exists()) {

                const userData =
                    userSnapshot.data();


                usernameElement.textContent =
                    "@" + userData.username;


                emailElement.textContent =
                    userData.email;

            }

        } else {

            window.location.href =
                "login.html";

        }

    }
);


logoutBtn.addEventListener(
    "click",
    async function () {

        try {

            await signOut(auth);

            window.location.href =
                "login.html";

        } catch (error) {

            console.log(error);

        }

    }
);