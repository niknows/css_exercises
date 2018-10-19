
var close = document.querySelector("#close");
var menu = document.querySelector("menu");
var hamburger = document.querySelector("#menu");

function toggle() {
  menu.classList.toggle("invisible");
  hamburger.classList.toggle("invisible");
}

hamburger.addEventListener("click", function() {
  menu.classList.toggle("invisible");
  hamburger.classList.toggle("invisible");
});
