var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
const signinImg = document.querySelector(".user-icon");
const userImg = document.querySelector("#img-user");

menuIcon.addEventListener("click", function() {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
});


async function getVideos() {
  const videoContainer = document.querySelector('.list-container');
  let loginToken = localStorage.getItem('loginToken');
  let url = "https://youtube-api-beta.vercel.app/video/all/63e889b1fe3132bf07f50895";
  let headers = new Headers();
  headers.append('Accept', 'application/json');
  headers.append('Authorization', `Bearer ${loginToken}`);
  let req = new Request(url, {
    method: 'GET',
    headers: headers,
    credentials: 'same-origin'
  });

  try {
    let res = await fetch(req);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    let data = await res.json();
    videoContainer.insertAdjacentHTML('beforeend', data.map((video) => {

      return `
      <div class="vid-list">
      <img src="/imagess/thumbnail2.png" class="thumbnail" url="${video.video_url}">
      <div class="flex-div">
          <img src="/imagess/Jack.png">
          <div class="vid-in">
              <a href="/playvideo/playvideo.html">${video.description}</a>
              <p>Channel List name</p>
              <p>15k Views</p>
          </div>
      </div>
  </div>`
  }).join(""))
  let playerSideBar = document.querySelector('.right-sidebar');
  playerSideBar.insertAdjacentHTML('beforeend', data.map((video) => {

    return `
    <div class="side-video-list">
    <a href="" class="small-thumbnail"
      ><img src="../imagess/thumbnail1.png"
    /></a>
    <div class="vid-info">
      <a href="">${video.description}</a>
      <p>channel name</p>
      <p>15k Views</p>
    </div>
  </div>`
}).join(""))
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("load" , getVideos);

const videoContainer = document.querySelector('.list-container');
videoContainer.addEventListener('click',videoPlayerDisplay);


function videoPlayerDisplay(e) {
  if (e.target.classList.contains('thumbnail')) {
    // Hide the sidebar
    document.querySelector('.sidebar').style.display = 'none';
    
    // Hide the video list container
    document.querySelector('.container').style.display = 'none';
    
    // Show the video player container
    document.querySelector('.container-player').style.display = 'block';
    
    // Get the video URL from the thumbnail element
    let videoUrl = e.target.getAttribute('url');
    
    // Update the source of the video player
    let videoPlayer = document.querySelector('video');
    let source = document.querySelector('#videolink');
    source.setAttribute('src', videoUrl);

    // Load the video player
    videoPlayer.load();
  }
}
