'use strict';

const btn = document.getElementById('btn');
const boxesContainer = document.getElementById('boxes');

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');  // <div> box 생성
            box.classList.add('box')  // .box css 속성 적용
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        }
    }
}
createBoxes()

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))