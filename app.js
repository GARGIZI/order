const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

burger.addEventListener("click", function () {
  menu.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("active");
});

overlay.addEventListener("click", function () {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("active");
});
