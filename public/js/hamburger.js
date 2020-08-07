//hamburger menu.This line of code runs when the bar is clicked
$('.menu-toggle').click(function(){
  $(".nav").toggleClass("portrait-nav");
  $(this).toggleClass("is-active");
});
