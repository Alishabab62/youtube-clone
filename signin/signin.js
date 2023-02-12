// Email already exists
const btn = document.querySelector(".signinbtn");
btn.addEventListener("click", signinn);

async function signinn() {
  const emailphone = document.querySelector("#email-phone");
  const passwords = document.querySelector("#password");

  // localStorage.setItem("userId", data.id);
  if (emailphone.value != "" && passwords.value != "") {
    const data = {
      email: `${emailphone.value}`,
      password: `${passwords.value}`,
    };

    const response = await fetch(
      "https://youtube-api-beta.vercel.app/user/login",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const getData = await response.json();
    if (getData.message == "Incorrect password") {
      document.querySelector(".message").innerText = "Incorrect password";
      setTimeout(() => {
        document.querySelector(".message").innerText = "";
      }, 1500);
    } else if (getData.message == "User not found") {
      document.querySelector(".message").innerText = "User not exists";
      setTimeout(() => {
        document.querySelector(".message").innerText = "";
      }, 1500);
    } else if (getData.token) {
      localStorage.setItem('loginToken' , getData.token);
      console.log(getData.token)
    } else {
      document.querySelector(".message").innerText = "Something went wrong";
      setTimeout(() => {
        document.querySelector(".message").innerText = "";
      }, 1500);
    }
  } else {
    document.querySelector(".message").innerText = "Enter all fields";
    setTimeout(() => {
      document.querySelector(".message").innerText = "";
    }, 1500);
  }
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
