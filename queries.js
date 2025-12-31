const mobNav = document.querySelector(".mob-nav");
const navList = document.querySelector(".nav-list");

mobNav.addEventListener("click", () => {
  navList.classList.toggle("show");
  mobNav.classList.toggle("active");
});
