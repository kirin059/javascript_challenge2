'use strict';

const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')  //arr

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)   // 마우스 객체 위에 자리잡고 있을 때
    empty.addEventListener('dragenter', dragEnter) // 마우스가 객체 위로 처음 진입할 때 
    empty.addEventListener('dragleave', dragLeave) // 드래그가 끝나서 마우스가 객체 위에서 벗어날 때
    empty.addEventListener('drop', dragDrop)       // 드래그하던 객체를 놓는 장소에 위치한 객체에서 발생(드래그 끝날 때)
}

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}