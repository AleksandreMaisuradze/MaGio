// burger 
let bars = document.querySelector('.fa-bars');
let xmark = document.querySelector('.fa-xmark');
let menu = document.querySelector('.header_nav');

bars.addEventListener('click', () => {
    bars.style.display = 'none';
    xmark.style.display = 'block';
    menu.classList.add('show');
})

xmark.addEventListener('click', () => {
    xmark.style.display = 'none';
    bars.style.display = 'block';
    menu.classList.remove('show');
})

//burger finished