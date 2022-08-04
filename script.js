// VARIABLES
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const lightmode = document.querySelector("#lightmode");

// FUNCTIONS
menu.onclick = () => {
  navbar.classList.toggle("active");
};

lightmode.onclick = () => {
  if (lightmode.classList.contains("fa-regular")) {
    lightmode.classList.replace("fa-regular", "fa-solid");
    document.body.classList.add("active");
  } else {
    lightmode.classList.replace("fa-solid", "fa-regular");
    document.body.classList.remove("active");
  }
};
