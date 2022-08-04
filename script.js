// VARIABLES
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// FUNCTIONS
menu.onclick = () => {
  navbar.classList.toggle("active");
};
