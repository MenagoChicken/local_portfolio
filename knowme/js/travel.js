// IMPORT DIDN'T WORK SO I JUST CREATED LIST HERE
const travelPictureList = [
  {
    place: "Paris",
    thumbnailURL: "./img/travel/paris_T_400.jpg",
    fullSizeURL: "./img/travel/paris.jpg",
  },
  {
    place: "London",
    thumbnailURL: "./img/travel/london_T_400.jpg",
    fullSizeURL: "./img/travel/london.jpg",
  },
  {
    place: "Snowdon",
    thumbnailURL: "./img/travel/snowdon_T_400.jpg",
    fullSizeURL: "./img/travel/snowdon.jpg",
  },
  {
    place: "Wydmy",
    thumbnailURL: "./img/travel/wydmy_T_400.jpg",
    fullSizeURL: "./img/travel/wydmy.jpg",
  },
];

// CONSTANTS
const gallery = document.getElementById("gallery");
console.log(gallery);
const popup = document.getElementById("popup");
console.log(popup);
const selectedImage = document.getElementById("selectedImage");
console.log(selectedImage);

// Pictures GALLERY LOGIC
travelPictureList.forEach((picture) => {
  const immageDiv = document.createElement("div");
  immageDiv.classList.add("imageContainer");

  const image = document.createElement("img");
  image.src = picture.thumbnailURL;
  image.alt = picture.place;
  image.classList.add("galleryImg");

  image.addEventListener("click", () => {
    //popup stuff
    popup.style.transform = "translateY(0)";
    selectedImage.src = picture.fullSizeURL;
  });

  immageDiv.appendChild(image);
  gallery.appendChild(immageDiv);
});

popup.addEventListener("click", () => {
  popup.style.transform = "translate(-400%)";
  popup.src = "";
  popup.alt = "";
});
