'use strict';


const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed')  // input
console.log(speedEl)

const text = 'I believe Everything goes well';

let idx = 1;
let speed = 300 / speedEl.value;
console.log(speed)

// text를 slice해서 보여주는 기능 함수
function writeText() {
    textEl.innerHTML = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed)  // speed는 300의 속도이다
}
writeText()

speedEl.addEventListener('input', () => {
    speed = 300 / speedEl.value;
})