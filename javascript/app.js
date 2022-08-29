const showMenu = document.getElementById("show-menu");
const btnMenu = document.getElementById("mobile-menu");
const mobileLink = document.querySelectorAll("#mobile-link");


/**
 * When the user clicks on the hamburger menu, the menu will toggle between being hidden and visible.
 */
const toggleMobileMenu = () => {
    showMenu.classList.toggle("hidden");
}

/* Adding an event listener to the button with the id of mobile-menu. When the button is clicked, the
function toggleMobileMenu will be called. */
btnMenu.addEventListener("click", toggleMobileMenu);

mobileLink.forEach(item => item.addEventListener("click", toggleMobileMenu))