lazyload();

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

let workStepsLinks = document.querySelectorAll('.work__nav .nav__link');

let workStepsBlocks = document.querySelectorAll('.work__wrap');

workStepsLinks.forEach(function(element) {
  element.addEventListener('click', function(elem) {
    let workStepsPath = elem.currentTarget.dataset.path;

    workStepsLinks.forEach(function(link) {
      link.classList.remove('nav__link_active');
    });
    elem.currentTarget.classList.add('nav__link_active');

    workStepsBlocks.forEach(function(block) {
      block.classList.remove('work__wrap_visible');
    });
    document.querySelector(`[data-target="${workStepsPath}"]`).classList.add('work__wrap_visible');
  });
});

new Accordion('.accordion-container', {});

// burger-menu
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.header__nav .nav__link');

burger.addEventListener('click', function() {
  burger.classList.toggle('header__burger_active');
  menu.classList.toggle('header__nav_active');
  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(elem) {
  elem.addEventListener('click', function() {
    burger.classList.remove('header__burger_active');
    menu.classList.remove('header__nav_active');
    document.body.classList.remove('stop-scroll');
  });
});

// search
let searchBtn = document.querySelector('.search__link');
let closeBtn = document.querySelector('.search__close');

searchBtn.addEventListener('click', function() {
  document.querySelector('.header__search').classList.toggle('header__search_active');
});

closeBtn.addEventListener('click', function() {
  document.querySelector('.header__search').classList.remove('header__search_active');
});


