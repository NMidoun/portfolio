const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const burgerContainer = document.querySelector(".burger__container");
const links = document.querySelectorAll(".nav__item");

navToggle.addEventListener("click", () => {
  if (navToggle.checked) {
    nav.style.transform = "translate(0)";
    nav.style.transition = "transform 250ms";
  } else {
    nav.style.transform = "translate(200%)";
    nav.style.transition = "transform 300ms";
  }
});

navToggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    burgerContainer.style.position = "fixed";
  } else if (window.scrollY !== 0) {
    window.scrollTo(0, 0);
    burgerContainer.style.position = "absolute";
  } else {
    burgerContainer.style.position = "absolute";
  }
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navToggle.click();
  })
})