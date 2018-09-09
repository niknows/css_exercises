"use strict";

const container = document.querySelector(".container");
container.addEventListener("click", function() {
  Array.from(container.children).forEach(function(item) {
    item.classList.toggle("orange");
  });
});
