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
menu.onclick = () => {
  navbar.classList.toggle("active");
};

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
