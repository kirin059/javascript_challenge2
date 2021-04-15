'use strict';

// jquery
window.onload = function () {
    $('#title').html('JQuery Code🎃');
    $('#title').css('height', '70')
    $('#title').css('backgroundColor', '#eee')

    // .html = innerHtml
    // .text = innerText

    // .css('color', 'red')
    // .attr('기존속성', '바꿀속성') = 속성 바꾸기
    $('button').css('backgroundColor', 'green')
    $('li:first()').css('color', 'blue')
    $('li').parent().css('color', 'red')

}
