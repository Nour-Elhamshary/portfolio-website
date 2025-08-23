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

const allBtnEls = document.querySelectorAll('.btn');



const openModal = function(e) {
  if (e?.preventDefault) e.preventDefault();

  const className = e.currentTarget.classList[0];
  
  bodyEl.insertAdjacentElement('afterbegin', modalEl);
  modalEl.insertAdjacentElement('afterbegin', closeModalBtn);
  modalEl.insertAdjacentElement('afterend', overlayEl);

  switch (className) {
    case 'about-me':
      modalEl.insertAdjacentHTML('beforeend', messages.aboutMe);
      break;
    case 'credits':
      modalEl.insertAdjacentHTML('beforeend', messages.credits);
      break;
    case 'felix':
      modalEl.insertAdjacentHTML('beforeend', messages.felix);
      break;
  }
  
}

const closeModal = function() {
  bodyEl.removeChild(modalEl);
  bodyEl.removeChild(overlayEl);
  modalEl.innerHTML = '';
}

allBtnEls.forEach((element) => {
  element.addEventListener("click", openModal);
})

closeModalBtn.addEventListener("click", closeModal);
overlayEl.addEventListener("click", closeModal);
