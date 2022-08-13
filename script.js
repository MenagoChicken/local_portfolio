// IMPORT
import { projectsList } from "./myProjectsList.js";
import { myStuffList } from "./myStuffList.js";

// VARIABLES
const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const lightmode = document.querySelector("#lightmode");
const portfolioContent = document.querySelector(".portfolio-content");
const myLifeContainer = document.querySelector(".mylife-container");

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

myStuffList.forEach((item) => {
  const link = document.createElement("a");
  link.setAttribute("href", item.link);

  const myStuffCard = document.createElement("div");
  myStuffCard.classList.add("mystuff-card");
  link.appendChild(myStuffCard);

  const cardImage = document.createElement("div");
  cardImage.classList.add("card_image");
  myStuffCard.appendChild(cardImage);

  const img = document.createElement("img");
  img.setAttribute("src", item.thumbnail);
  cardImage.appendChild(img);

  if (item.name) {
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card_title", "title-white");
    myStuffCard.appendChild(cardTitle);

    const paragraph = document.createElement("p");
    paragraph.textContent = item.name;
    cardTitle.appendChild(paragraph);
  }

  myLifeContainer.appendChild(link);

  //  <a href="#home">
  //   <div class="mylife-card">
  //   <div class="card_image">
  //     <img src="img/about_me_image/pes.png" />
  //   </div>
  //   <div class="card_title title-white">
  //     <p>Card Title</p>
  //   </div>
  // </div>
  // </a>
});

projectsList.forEach((project) => {
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
});
