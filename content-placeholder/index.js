'use strict'

const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =
        '<img src="https://images.unsplash.com/photo-1618092188575-113237cd07c7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />'
    title.innerHTML = 'I CREATE MY DAYS EVERYDAY'
    excerpt.innerHTML =
        'I love create things around me. I hope to get an chance to work as a developer'
    profile_img.innerHTML =
        '<img src="./profile.png" alt="profile image" />'
    name.innerHTML = 'Saebom Lee'
    date.innerHTML = 'April 11, 2021'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}