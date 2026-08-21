const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".sticky-bar nav");

menuButton.addEventListener("click", function() {
    nav.classList.toggle("show");
    menuButton.classList.toggle("active");
});