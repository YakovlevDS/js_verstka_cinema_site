'use strict';

const schemeSvg = document.querySelector('.scheme-svg');
const priceTotalTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
const cost = 20;
let totalPrice = 0;

schemeSvg.addEventListener('click', event => {
  if (!event.target.classList.contains('booked')) {
    event.target.classList.toggle('active')
    const totalSeats = schemeSvg.querySelectorAll('.active').length;
    totalPrice = totalSeats * cost;
    priceTotalTag.textContent = totalPrice;
  }
})

menuButton.addEventListener('click', () => {
  menu.classList.toggle('is-open');
})
