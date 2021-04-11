const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        console.log(e.target)

        const x = e.clientX
        console.log(x)  // 현재 찍은 마우스 x값(상대값)
        const y = e.clientY
        console.log(y)  // 현재 찍은 마우스 y값(상대값)

        const buttonTop = e.target.offsetTop
        console.log(buttonTop)  // 228(고정값)
        const buttonLeft = e.target.offsetLeft
        console.log(buttonLeft) // 199(고정값)

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})