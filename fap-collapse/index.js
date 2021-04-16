'use strict';

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        console.log(toggle.parentNode)  //  <div class="faq">
        toggle.parentNode.classList.toggle('active')
    })
})