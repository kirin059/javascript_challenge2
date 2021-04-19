'use strict';

const body = document.body;
const ball = document.getElementById('ball');
console.log(ball)

body.addEventListener('click', function (e) {
    console.log(e.clientY)
    ball.style.left = (e.clientX - 25) + 'px';
    ball.style.top = (e.clientY - 25) + 'px';
});

// e.clientX 에서 25를 빼는 이유는, 공의 너비와 높이(각 50px)의 절반을 빼주는 것이다
// e.clientX와 e.clientY는 top/left기준의 마우스가 닿는 절대값을 나타내므로
// 공이 마우스가 닫는 지점 정중앙에 오려면 공의 너비와 높이의 절반씩 빼줘야 한다

// ball에 absolute를 주었기 때문에 기준은 document.
// 기준을 body로 하려면 body의 css에 relative를 주고, height값을 설정해줘야한다