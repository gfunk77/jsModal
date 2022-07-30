"use strict";

const openBtn = document.querySelector(".btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", function () {
  overlay.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
  overlay.classList.remove("show-modal");
});
