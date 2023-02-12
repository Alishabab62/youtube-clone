var container = document.querySelector(".container")
const siginimg = document.querySelector(".user-icon");
 const userimg = document.querySelector("#img-user");

(window.onload = function(){
    const token = localStorage.getItem("token");
    if(!token){
        //redirect to login page
        
        
    }else{
        //validate the token
        //... code to validate token
        userimg.style.display = "block";
        siginimg.style.display ="none";
        
    }
})()

const downloadbtn = document.querySelector("#download");
const videolink = document.querySelector("#videolink");

downloadbtn.addEventListener("click" , function(){
    const downloadLink = document.createElement("a");
    downloadLink.href = videolink.value;
    downloadLink.download = "video.mp4";
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
})


