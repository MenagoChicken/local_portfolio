// VARIEABLES
const navbar = document.querySelector(".navbar");
const lightmode = document.querySelector("#lightmode");

// MENU FUNCTIONS
menu.onclick = () => {
  navbar.classList.toggle("active");
  console.log("Togele menu!");
};

lightmode.onclick = () => {
  console.log("Togele light mode!");
  if (lightmode.classList.contains("fa-regular")) {
    lightmode.classList.replace("fa-regular", "fa-solid");
    document.body.classList.add("active");
  } else {
    lightmode.classList.replace("fa-solid", "fa-regular");
    document.body.classList.remove("active");
  }
};
