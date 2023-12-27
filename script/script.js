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

//background images

let slider = document.querySelector('.background_section');
let sliderImages = slider.children[0].children;
let arrowButtons = slider.children[1].children;

let activeSlider = 0;
let prevSlider = 0;

sliderImages[activeSlider].classList.add('active1')

function classChanger() {
    sliderImages[activeSlider].classList.add('active1');
    sliderImages[prevSlider].classList.remove('active1');
}

function next() {
    if (activeSlider < sliderImages.length - 1) {
        activeSlider++;
        prevSlider = activeSlider - 1;
        classChanger();
    } else {
        activeSlider = 0;
        prevSlider = sliderImages.length - 1;
        classChanger();
    }
}


function prev() {
    if (activeSlider > 0) {
        activeSlider--;
        prevSlider = activeSlider + 1;
        classChanger();
    } else {
        activeSlider = sliderImages.length - 1;
        prevSlider = 0;
        classChanger();
    }
}

arrowButtons[0].addEventListener('click', prev);
arrowButtons[1].addEventListener('click', next);


function autoChange(delay = 5000) {
    setInterval(() => {
        next()
    }, delay)
}

autoChange()

//background images