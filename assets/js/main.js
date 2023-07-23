const humbergerIcon = document.getElementById("humberger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");


humbergerIcon.addEventListener("click", () =>{
    humbergerIcon.classList.toggle("open");
    mobileMenu.classList.toggle("hide");
    // disabled scroll when humberger menu is opened
    body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
})

