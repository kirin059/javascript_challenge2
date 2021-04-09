const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

// const scale = (load, 0, 100, 1, 0) => {
//     return ((load - 0) * (0 - 1)) / (100 - 0) + 1
// }

// const scale = (load, 0, 100, 1, 0) => {
//     return ((load - 0) * - 1 / 100 ) + 1
// }

// 1  >>  -0.01 + 1 = 0.99
// 2  >>  -0.02 + 1 = 0.98
// 3  >>  -0.03 + 1 = 0.97