const topButton = document.querySelector("#back-to-top");
topButton.addEventListener("click", function() {  
  window.scroll({
    top: 2500,
    left: 400,
    behavior: "smooth"
  });
});

window.onscroll = offset;

function offset() {
  if (window.pageYOffset > 502) {
    topButton.classList.add("visible");
  } else if (window.pageYOffset < 502) {    topButton.classList.remove("visible");
  }
}
