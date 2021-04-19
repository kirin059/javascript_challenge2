'use strict';

const btns = document.querySelectorAll('.ripple')
// 버튼을 찍을 때 효과를 보여주는 기능이기 때문에, 복수로 받아온다(버튼을 찍을때마다 효과 구현)

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target)

        const x = e.clientX;
        const y = e.clientY;
        //console.log(x)

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        // console.log(buttonLeft) 

        const xClickPoint = x - buttonLeft;  // 버튼 안에서 x좌표
        const yClickPoint = y - buttonTop; // 버튼 안에서 y좌표

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yClickPoint + 'px'
        circle.style.left = xClickPoint + 'px'

        btn.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})