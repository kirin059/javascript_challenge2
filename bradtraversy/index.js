'use strict';

const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;
console.log(slidesLength)  // right slide 4개

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
console.log(slideLeft.style.top)  // -300vh

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    console.log(sliderHeight)
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    // y축으로 00px 움직임 (두번째 슬라이드: 2 * 슬라이드 높이)
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}