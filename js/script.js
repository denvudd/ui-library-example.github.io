document.addEventListener('DOMContentLoaded', () => {
  $('[data-dropdown]').dropdown();
  $('.carousel').carousel('.carousel-inner', 
                          '.carousel-item', 
                          '.carousel-slides', 
                          '.carousel-indicators li',
                          '[data-slide="next"]',
                          '[data-slide="prev"]', 
                          '#example', 
                          true,
                          5000,
                          .5,
                          'ease',
                          true,
                          546);
  $('[data-modal]').modal();
  $('[data-tab] .tab-item').tab();
  $('.accordion-head').accordion('accordion-head--active', 'accordion-content--active');
})
