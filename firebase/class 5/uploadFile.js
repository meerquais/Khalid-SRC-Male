const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const status = document.getElementById("status");
const preview = document.getElementById("preview");


const cloudName = "kmzz5hqj"
const uploadPreset = "upload_present"


uploadBtn.addEventListener("click" , async ()=>{
    const file = fileInput.files[0];

    if(!file){
        alert("please select a file!");
        return;
    }


    try {
        status.innerText = "uploading....";

        const formData = new FormData();

        formData.append("file" , file);

        formData.append("upload_preset" , uploadPreset);


        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;


        const response = await fetch(url , {
            method:"POST",
            body:formData
        })

        const data = await response.json();
        console.log(data);
        


        const imageUrl = data.secure_url;
        console.log("Image URL" , imageUrl);

        preview.src = imageUrl;
        preview.style.display = "block";

        status.innerText = "Upload Completed!"
        



    } catch (error) {
        status.innerText = "Upload Failed!"
    }
    
})