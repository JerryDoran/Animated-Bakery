$('.hamburger-menu').on('click', () => {
  $('.toggle').toggleClass('open');
  $('.nav-list').toggleClass('open');
});

// ANIMATIONS
AOS.init({
  easing: 'ease',
  duration: 1000
});
