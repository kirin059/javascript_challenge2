const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
        console.log(clickTime)
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    // heart node 생성 ( = <i class="fas fa-heart">)
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX //마우스로 찍는 위치에 따라 달라지는 값(윈도우 기준 맨왼쪽이 0)
    console.log(x)
    const y = e.clientY //마우스로 찍는 위치에 따라 달라지는 값(윈도우 기준 맨윗쪽이 0)

    const leftOffset = e.target.offsetLeft
    console.log(e.target.offsetLeft)  //226 (left 고정값)
    const topOffset = e.target.offsetTop
    console.log(e.target.offsetTop)  // 86 (top 고정값)


    const xInside = x - leftOffset // 전체 x좌표(윈도우 기준)에서 마우스 찍은 x좌표 빼면 콘텐츠 기준으로 콘텐츠 내 x좌표 생성 
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}