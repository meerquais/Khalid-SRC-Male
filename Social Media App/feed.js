import { auth , onAuthStateChanged , signOut , db ,  doc,
    getDoc , collection, addDoc , serverTimestamp} from "./config.js";

const userInfo = document.getElementById("userInfo");
const logoutBtn = document.getElementById("logoutBtn");
const welcomeMessage = document.getElementById("welcomeMessage");


const postForm =
    document.getElementById("postForm");

const postTitle =
    document.getElementById("postTitle");

const postDescription =
    document.getElementById("postDescription");

const postMessage =
    document.getElementById("postMessage");

    let currentUser = null;

let currentUserData = null;


onAuthStateChanged(
    auth,
    async function (user) {

        if (user) {

            currentUser = user;


            try {

                // Get user document

                const userRef =
                    doc(
                        db,
                        "users",
                        user.uid
                    );


                const userSnapshot =
                    await getDoc(userRef);


                if (userSnapshot.exists()) {

                    currentUserData =
                        userSnapshot.data();


                    welcomeMessage.textContent =
                        "Welcome, " +
                        currentUserData.username;


                    userInfo.textContent =
                        currentUserData.email;

                }

            } catch (error) {

                console.log(
                    "Error getting user:",
                    error
                );

            }

        } else {

            window.location.href =
                "login.html";

        }

    }
);


postForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        // Make sure user data exists

        if (
            !currentUser ||
            !currentUserData
        ) {

            postMessage.textContent =
                "Please wait, loading user...";

            return;

        }


        const title =
            postTitle.value.trim();


        const description =
            postDescription.value.trim();



        // Basic validation

        if (
            title === "" ||
            description === ""
        ) {

            postMessage.textContent =
                "Please fill all fields";

            return;

        }



        try {

            // Create post

            await addDoc(
                collection(db, "posts"),
                {

                    uid:
                        currentUser.uid,

                    username:
                        currentUserData.username,

                    title:
                        title,

                    description:
                        description,

                    createdAt:
                        serverTimestamp()

                }
            );


            postMessage.textContent =
                "Post created successfully!";


            // Clear form

            postForm.reset();


        } catch (error) {

            console.log(
                "Error creating post:",
                error
            );


            postMessage.textContent =
                "Failed to create post";

        }

    }
);



logoutBtn.addEventListener("click" , async ()=>{
      try {

            await signOut(auth);

            window.location.href =
                "login.html";

        } catch (error) {

            console.log(error);

        }
})