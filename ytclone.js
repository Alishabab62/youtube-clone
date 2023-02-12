var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
const signinImg = document.querySelector(".user-icon");
const userImg = document.querySelector("#img-user");

menuIcon.addEventListener("click", function() {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
});


    // const user = responseJson.user;
    // const id = responseJson._id;
    // localStorage.setItem("user", user);
    // localStorage.setItem("id", id);

    // return { user, id };
 

window.onload = async function() {
  const token = localStorage.getItem("token");
  if (!token) {
    //redirect to login page
  } else {
      userImg.style.display = "block";
      signinImg.style.display = "none";
  
      const storedUser = localStorage.getItem("user");
      const storedId = localStorage.getItem("id");
      
     
  }
};

const bttnn = document.querySelector(".clicked")

bttnn.addEventListener("click" , uploadVideoAPI)

async function uploadVideoAPI() {
    // console.log("hiiiiiiiii");
  const data = {
    video_url: "https://www.example.com/video.mp4",
    description: "This is 3nd video"
  };


  const responseUVapi = await fetch("https://youtube-api-beta.vercel.app/video/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(data)
  });
  const postData = await responseUVapi.json();
  console.log(postData);

}
