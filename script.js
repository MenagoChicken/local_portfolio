// IMPORT
import { projectsList } from "./myProjectsList.js";
import { certificatesList } from "./myCertificates.js";

// VARIABLES
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const lightMode = document.querySelector("#lightmode");
const portfolioContent = document.querySelector(".portfolio-content");
const lightModeOn = localStorage.getItem("lightModeOn");

if (lightModeOn) {
	lightMode.classList.replace("fa-regular", "fa-solid");
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

//light / dark mode
lightMode.onclick = () => {
	if (lightMode.classList.contains("fa-regular")) {
		lightMode.classList.replace("fa-regular", "fa-solid");
		document.body.classList.add("active");
		localStorage.setItem("lightModeOn", "yes");
	} else {
		lightMode.classList.replace("fa-solid", "fa-regular");
		document.body.classList.remove("active");
		localStorage.setItem("lightModeOn", "");
	}
};

console.log(Object.entries(projectsList));
// display projects
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

console.log(Object.entries(certificatesList));

const tableBody = document.getElementById("certificates-table");

for (let i = 0; i < certificatesList.length; i++) {
	const tableRow = document.createElement("tr");

	if (i % 2) {
		tableRow.className = "active-row";
	}

	const yearCell = document.createElement("td");
	yearCell.textContent = certificatesList[i].year;

	const nameCell = document.createElement("td");
	nameCell.textContent = certificatesList[i].name;

	const organizerCell = document.createElement("td");
	organizerCell.textContent = certificatesList[i].organizer;

	const linkCell = document.createElement("td");
	const linkButton = document.createElement("button");
	linkButton.className = "button-8";

	const link = document.createElement("a");
	link.innerHTML = `<a href=${certificatesList[i].link}>click</a>`;

	tableBody.appendChild(tableRow);
	tableRow.appendChild(yearCell);
	tableRow.appendChild(nameCell);
	tableRow.appendChild(organizerCell);

	linkCell.appendChild(linkButton);
	linkButton.appendChild(link);

	tableRow.appendChild(linkCell);
}
