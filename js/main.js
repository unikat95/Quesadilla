const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     menu.classList.toggle('toRight');
// })
console.log(toggleMenu)

function toggleMenu() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('toRight');
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar')
    nav.classList.toggle("bg-dark", window.scrollY > 300)

})

hamburger.addEventListener('click', toggleMenu)

const menuLinks = document.querySelectorAll(".menu")

menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleMenu)
    }
)

// window.addEventListener("scroll", () => {
//     const nav = document.querySelector("nav");
//     const section = document.querySelector(".section__container");

//     nav.classList.toggle("navbar__sticky", window.scrollY > 200);
//     section.classList.add("animLeft", window.scrollY > 300);
// })