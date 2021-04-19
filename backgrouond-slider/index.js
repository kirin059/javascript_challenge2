'use strict';

const body = document.body;
const slides = document.querySelectorAll('.slide')  // arr
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let currentSlide = 0;

rightBtn.addEventListener('click', (e) => {
    // console.log(e.currentTarget)

    currentSlide++;

    if (currentSlide > slides.length - 1) {
        currentSlide = 0
    }

    bodyBackground()
    activeSlide()
})

leftBtn.addEventListener('click', e => {
    console.log(e.currentTarget)

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    bodyBackground()
    activeSlide()
})

bodyBackground()

function bodyBackground() {
    body.style.backgroundImage = slides[currentSlide].style.backgroundImage;
}

function activeSlide() {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[currentSlide].classList.add('active')
}



// auto-text
const textEl = document.getElementById('title');
const text = 'Image Slide Effect';

let idx = 1;

function autoText() {
    textEl.innerHTML = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(autoText, 200)  // speed는 300의 속도이다
}

autoText()