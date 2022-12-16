// Getting access to menu toggle
let menu_toggle = document.querySelector(".menu-toggle");


// Create event listner for changes of toggle for a click
menu_toggle.addEventListener("click", () => {
    menu_toggle.classList.toggle("is-active");

});