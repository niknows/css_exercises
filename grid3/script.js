const container = document.querySelector(".container");
var style = window.getComputedStyle
  ? getComputedStyle(container, null)
  : container.currentStyle;

console.log(style.backgroundColor);
