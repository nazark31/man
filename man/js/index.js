// var swiper = new Swiper('.icon-slider', {
//     slidesPerView: 6,
//     spaceBetween: 60,
//     loop: true,
// });

const btn = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

btn.addEventListener('click', function () {
    btn.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

let headBtn = document.querySelector('.header__btn .btn-in');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');

headBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.querySelector('html').style.overflow = 'hidden';
});

document.addEventListener('click', function (e) {
    if (
        e.target.classList.contains('modal') ||
        (e.target.classList.contains('close') && !e.target.classList.contains('modal-inner'))
    ) {
        modal.classList.remove('active');
        document.querySelector('html').style.overflow = 'auto';
    }
});

let open = document.querySelector('.open-p');
let popup = document.querySelector('.popup');

open.addEventListener('click', () => {
   popup.classList.add('active');
   document.querySelector('html').style.overflow = 'hidden'
})

document.addEventListener('click', (e) => {
   console.log(e.target);
   if (e.target.classList.contains('popup') || (e.target.classList.contains('close-popup') && !e.target.classList.contains('popup-inner'))) {
      popup.classList.remove('active');
      document.querySelector('html').style.overflow = 'auto'
   }
})


let pop = document.querySelectorAll('.pop')
console.log(pop);
pop.forEach((item) =>  {
   item.classList.add('active');
})
