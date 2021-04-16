'use strict';

const panel = document.querySelector('#panel')
const ratingsContainer = document.querySelector('.ratings-container')
const ratings = document.querySelectorAll('.rating')
const btn = document.querySelector('#send')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    console.log(e.target.parentNode)  // <div class="ratings-container">
    console.log(e.target.nextElementSibling)  // <small>
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

btn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}