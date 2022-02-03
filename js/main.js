//dom
let modal = document.querySelector('.modal');
let body = document.querySelector('.body');
let header = document.querySelector('#header');

//btns
let closeBtn = document.querySelector('#close');
let showBtn = document.querySelector('#show');

showBtn.addEventListener('click', function () {
    modal.classList.remove('hide');
    header.classList.add('add');
    body.classList.add('overlay');
})


closeBtn.addEventListener('click', function () {
    modal.classList.add('hide');
    header.classList.remove('hide');
    body.classList.remove('overlay');
})

