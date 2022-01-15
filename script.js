const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const iamge3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// dark mode
function darkmode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.remove("fa-lightbulb");
  toggleIcon.children[1].classList.add("fa-moon");
  image1.src = "img/undraw-about-dark.svg";
  image2.src = "img/undraw-contact-dark.svg";
  image3.src = "img/undraw-home-dark.svg";
  localStorage.setItem("theme", "dark");
}

// light mode

function lightmode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-lightbulb");
  image1.src = "img/undraw-about-light.svg";
  image2.src = "img/undraw-contact-light.svg";
  image3.src = "img/undraw-home-light.svg";
  localStorage.setItem("theme", "light");
}

// Switch theme

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkmode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightmode();
  }
  //   console.log(event.target.checked);
}

// Event listener

toggleSwitch.addEventListener("change", switchTheme);

// local storage

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkmode();
  }
}
