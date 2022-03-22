let menuButton = document.querySelector(".menu-button");
let navMenu = document.querySelector(".navLinks-wrapper");
let navLink = document.querySelectorAll(".navLink");
menuButton.addEventListener("click", mobileView);
navLink.forEach(n => n.addEventListener("click", closeView));

function mobileView() {
    menuButton.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function closeView() {
    menuButton.classList.remove("active");
    navMenu.classList.remove("active");
}