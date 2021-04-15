'use strict';

const ball = document.getElementById('ball');
console.log(ball)

document.addEventListener('click', function (e) {
    console.log(e.clientY)
    ball.style.left = (e.clientX - 25) + 'px';
    ball.style.top = (e.clientY - 25) + 'px';
}, false);

// e.clientX 에서 25를 빼는 이유는, 공의 너비와 높이(각 50px)의 절반을 빼주는 것이다
// e.clientX와 e.clientY는 top/left기준의 마우스가 닿는 절대값을 나타내므로
// 공이 마우스가 닫는 지점 정중앙에 오려면 공의 너비와 높이의 절반씩 빼줘야 한다