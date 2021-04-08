'use strict';

const nums = document.querySelectorAll('.nums span')  // 3, 2, 1, 0
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')  // button


function resetDOM() {
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })

    num[0].classList.add('in')
}
