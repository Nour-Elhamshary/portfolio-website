"use strict";
import {messages} from "./assets/js/messages.js";

const bodyEl = document.querySelector('body');
const aboutMeBtn = document.querySelector(".about-me");


const modalEl = document.createElement('div');
modalEl.classList.add('modal');

const overlayEl = document.createElement('div');
overlayEl.classList.add('overlay');

const closeModalBtn = document.createElement('button');
closeModalBtn.classList.add('close-modal');
closeModalBtn.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;




const openModal = function(e) {
  if (e?.preventDefault) e.preventDefault();

  const className = e.currentTarget.classList.value;
  
  bodyEl.insertAdjacentElement('afterbegin', modalEl);
  modalEl.insertAdjacentElement('afterbegin', closeModalBtn);
  modalEl.insertAdjacentElement('afterend', overlayEl);

  switch (className) {
    case 'about-me':
      modalEl.insertAdjacentHTML('beforeend', messages.aboutMe);
      break;
  }
  
}

const closeModal = function() {
  console.log("It works!");
  bodyEl.removeChild(modalEl);
  bodyEl.removeChild(overlayEl);
  modalEl.innerHTML = '';
}

aboutMeBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlayEl.addEventListener("click", closeModal);
