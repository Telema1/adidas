$(function (){
   $('.menu-toggle, .bx-x').on('click', function (){
    $('nav').toggleClass('active');
    $('.overlay').toggleClass('menu-open');
   });

   $('.overlay').on('click', function (){
    $('nav').removeClass('active');
    $('.this').removeClass('menu-open');
   });
});