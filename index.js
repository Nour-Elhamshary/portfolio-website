"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const aboutMeBtn = document.querySelector(".about-me");
const btnCloseModal = document.querySelector(".close-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

aboutMeBtn.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
