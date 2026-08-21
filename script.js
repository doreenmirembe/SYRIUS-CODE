const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".sticky-bar nav");


/* ============================= */
/* HAMBURGER BUTTON */
/* ============================= */

menuButton.addEventListener("click", function(event) {

    event.stopPropagation();

    nav.classList.toggle("show");

    menuButton.classList.toggle("active");

});


/* ============================= */
/* CLOSE MENU WHEN CLICKING OUTSIDE */
/* ============================= */

document.addEventListener("click", function(event) {

    if (
        !nav.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        nav.classList.remove("show");

        menuButton.classList.remove("active");

    }

});