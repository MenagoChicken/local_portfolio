// VARIEABLES
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const lightmode = document.querySelector("#lightmode");
const lightModeOn = localStorage.getItem("lightModeOn");

if (lightModeOn) {
  console.log("spelniony warunek");
  lightmode.classList.replace("fa-regular", "fa-solid");
  document.body.classList.add("active");
}

// MENU FUNCTIONS
//show navbar
menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-xmark");
});

//hide after choosing section
navbar.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menu.classList.replace("fa-xmark", "fa-bars");
});

lightmode.onclick = () => {
  if (lightmode.classList.contains("fa-regular")) {
    lightmode.classList.replace("fa-regular", "fa-solid");
    document.body.classList.add("active");
    localStorage.setItem("lightModeOn", "yes");
  } else {
    lightmode.classList.replace("fa-solid", "fa-regular");
    document.body.classList.remove("active");
    localStorage.setItem("lightModeOn", "");
  }
};
