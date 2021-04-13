'use strict';

const all = document.querySelector('#check_all');
const check = document.querySelectorAll('#check');
console.log(check)

// 1) all 체크하면 전체체크, all 해제하면 전체해제

function selectAll() {
    for (let i = 0; i < check.length; i++) {
        if (all.checked) {
            check[i].checked = true;
        }
        else {
            check[i].checked = false;
        }
    }
}

all.addEventListener('click', selectAll)

// 2) check가 전체 체크되면 all 체크, check에서 하나라도 해제되면 all 해제

function selectEach() {
    const checked = document.querySelectorAll('#check:checked')

    if (checked.length === check.length) {
        all.checked = true;
    }
    else {
        all.checked = false;
    }
}

check.forEach(e => e.addEventListener('click', selectEach))