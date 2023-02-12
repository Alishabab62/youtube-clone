// Email already exists
const btn = document.querySelector(".signinbtn");
btn.addEventListener("click", signinn);


async function signinn(){
    const emailphone = document.querySelector("#email-phone")
    const passwords = document.querySelector("#password")
    
    // localStorage.setItem("userId", data.id);

    const data = {
        "email": `${emailphone.value}` ,
        "password": `${passwords.value}`
    };
    
    const response = await fetch("https://youtube-api-beta.vercel.app/user/login", 
    
    {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data)
    })
    
    const getdata = await response.json()
    if(getdata.token){

        localStorage.setItem("token",getdata.token);
        window.location.href = "http://127.0.0.1:5500/index.html";
    }else{
        window.location.href = "http://127.0.0.1:5500/signup/signup.html";
        // localStorage.setItem("user_id", getdata.id);
    }
   
      
    console.log(getdata);
}









// const videoData = {
//     "video_url": "https://www.example.com/video.mp4",
//     "description": "This is 3nd video"
// };
// const token = '';

// fetch('https://youtube-api-beta.vercel.app/video/add', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + token
//   },
//   body: JSON.stringify(videoData)
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })
// .catch(error => {
//   console.error(error);
// });



















// // // Store the token in local storage after a successful login
// // function storeToken(token) {
// //     localStorage.setItem('token', token);
// //   }
  
// //   // Send the token in the headers of an authenticated request
// //   function makeAuthenticatedRequest(url) {
// //     const token = localStorage.getItem('token');
// //     return fetch("http://127.0.0.1:5500/index.html", {
// //       headers: {
// //         'Authorization': 'Bearer ' + token
// //       }
// //     })
// //     .then(response => {
// //       if(!response.ok) {
// //         throw new Error('Authentication failed');
// //       }
// //       return response.json();
// //     });
// //   }
  
// //   // Use the makeAuthenticatedRequest function to access protected resources
// //   makeAuthenticatedRequest('https://youtube-api-beta.vercel.app/user/login')
// //   .then(data => {
// //     console.log(data);
// //      location = `${index.html}`
// //   })
// //   .catch(error => {
// //     console.error(error);
// //   });
  

