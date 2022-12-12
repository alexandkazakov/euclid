const swiper = new Swiper('.swiper', {
  // autoHeight: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

let workStepsLinks = document.querySelectorAll('.work__nav .nav__link');
// workStepsLinks.forEach(function(link) {
//   alert(link);
// });
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
