document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burger.classList.toggle("toggle");
  });

  const links = navMenu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      burger.classList.remove("toggle");
    });
  });
});
