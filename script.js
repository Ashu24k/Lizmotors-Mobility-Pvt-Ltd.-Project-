// menu
const menu = document.querySelector(".menu");
const menuOpenBtn = document.querySelector(".open-menu-btn");
const menuClsBtn = document.querySelector(".close-menu-btn");

[menuOpenBtn, menuClsBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menu.style.transition = "transform 0.5s ease";
    })
});

menu.addEventListener("transitionend", function() {
    this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function(){
        this.closest(".dropdown").classList.toggle("active")
    })
});