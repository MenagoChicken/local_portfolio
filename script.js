// IMPORT
import { projectsList } from "./projects.js";

// VARIABLES
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const lightmode = document.querySelector("#lightmode");
const portfolioContent = document.querySelector(".portfolio-content");

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

console.log(Object.entries(projectsList));

for (let i = 1; i <= 7; i++) {
  const project = projectsList[i];
  console.log(project);

  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const image = document.createElement("div");
  image.classList.add("image");
  projectCard.appendChild(image);

  const img = document.createElement("img");
  img.setAttribute("src", project["thumbnail"]);
  image.appendChild(img);

  const details = document.createElement("div");
  details.classList.add("details");
  projectCard.appendChild(details);

  const center = document.createElement("div");
  center.classList.add("center");
  details.appendChild(center);

  const h1 = document.createElement("h1");
  h1.innerHTML = `${project.name}<br/>
  <span>
  Dificulty: ${'<i class="fa-solid fa-star"></i>'.repeat(project["difficulty"])}
  </span>`;
  center.appendChild(h1);

  const description = document.createElement("p");
  description.textContent = `${project["description"]}`;
  center.appendChild(description);

  const unorderdList = document.createElement("ul");
  const gitHubLink = document.createElement("li");
  gitHubLink.innerHTML = `<a href=${project["githubLink"]}><i class="fa-brands fa-github"></i></a>`;
  const pageURL = document.createElement("li");
  pageURL.innerHTML = `<a href=${project["pageUrl"]}><i class="fa-solid fa-arrow-right-to-bracket"></i></a>`;

  unorderdList.appendChild(gitHubLink);
  unorderdList.appendChild(pageURL);

  center.appendChild(unorderdList);

  portfolioContent.appendChild(projectCard);
}
