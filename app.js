const headerText = document.querySelector("header");
headerText.style.backgroundColor = "brown";
headerText.style.color = "wheat";
headerText.style.padding = "1rem";
headerText.style.textAlign = "center";


document.querySelector("main").style.backgroundColor = "blue"

const titleText = document.getElementById("title");
titleText.textContent = "JavaScript Dom Assignment1";
titleText.style.padding = "1rem"


const navText = document.querySelector(".nav-item");
navText.style.display = "flex";
navText.style.justifyContent = "center";
navText.style.gap = "3rem";



const userName = document.querySelector("#username")
userName.style.border = "1px solid red"
userName.style.borderRadius = "5px";
userName.style.borderStyle = "none";
userName.style.padding =".4rem"
const password = document.querySelector("#password")
password.style.border = "1px solid red";
password.style.borderRadius = "5px";
password.style.borderStyle = "none";
password.style.padding = ".4rem";
//! ? value att.


const buttonText = document.querySelector(".btn");
buttonText.style.backgroundColor = "orange"
buttonText.style.color ="blue"
buttonText.style.padding = ".4rem"
buttonText.style.border = "1px solid blue"
buttonText.style.borderRadius = "5px"
buttonText.style.cursor = "pointer"
buttonText.style.borderStyle = "none"
buttonText.textContent = "Giriş Yap"


const projectsText = document.getElementById("projects");
projectsText.style.backgroundColor = "yellow"
projectsText.style.padding = "1.2rem"
projectsText.style.border = "1px solid blue";
projectsText.style.borderRadius = "5px";
projectsText.style.borderStyle = "none";
projectsText.style.fontSize = "large"
const h3 = projectsText.firstElementChild
h3.textContent = "JS DOM Projects"
h3.style.paddingBottom = "1rem"


const ulText = projectsText.lastElementChild
ulText.innerHTML += `
<li>Hello World!</li>
<li>Guess Number</li>
<li>Checkout Page</li>
<li>Gelir-Gider Projesi</li>
<li>Api Project</li>`;










