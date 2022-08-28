// IMPORT DIDN'T WORK SO I JUST CREATED LIST HERE
const videoList = [
  { name: "Kick it!!!", url: "./vid/pes/kick_it.mp4" },
  { name: "Free kick", url: "./vid/pes/free_kick.mp4" },
  { name: "Ladies and Gentlemens Luka Modrić!", url: "./vid/pes/modric.mp4" },
  {
    name: "Poor Lewandowski <sad face>",
    url: "./vid/pes/poor_lewandowski.mp4",
  },
  { name: "This goes here!", url: "./vid/pes/here.mp4" },
];

// CONSTANTS
const ulHTML = document.querySelector(".list");
const mainVideo = document.querySelector(".main-video-container");
let previousActiveItem;

// VIDEOS GALLERY LOGIC
videoList.forEach((video) => {
  const liItem = document.createElement("li");
  liItem.classList.add("item");

  const videoItem = document.createElement("video");
  videoItem.classList.add("video-thumbnail");
  videoItem.setAttribute("src", `${video.url}`);

  const title = document.createElement("h3");
  title.classList.add("item-name");
  title.textContent = `${video.name}`;

  liItem.appendChild(videoItem);
  liItem.appendChild(title);
  ulHTML.appendChild(liItem);

  liItem.addEventListener("click", () => {
    console.log(previousActiveItem);

    if (previousActiveItem) {
      previousActiveItem.classList.remove("active");
    }

    mainVideo.innerHTML = `
  <video src=${video.url} loop controls></video>
<h3 class="video-title">${video.name}</h3>
`;
    liItem.classList.add("active");
    previousActiveItem = liItem;

    console.log(previousActiveItem);
  });
});
