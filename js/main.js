const about = $('#about').position().top;
const portfolio = $('#portfolio').position().top;
const contact = $('#contact').position().top;
const header = $('#to-top').position().top;

$('#find-out-more').on('click', function () {
  
  $('html, body').animate(
    {
      scrollTop:about
  }, 800)
});

$('#about-button').on('click', function () {
  
  $('html, body').animate(
    {
      scrollTop:about
  }, 800)
});

$('#portfolio-button').on('click', function () {
  
  $('html, body').animate(
    {
      scrollTop:portfolio
  }, 800)
});

$('#my-portfolio-button').on('click', function () {
  
  $('html, body').animate(
    {
      scrollTop:portfolio
  }, 800)
});

$('#contact-button').on('click', function () {
  
  $('html, body').animate(
    {
      scrollTop:contact
  }, 800)
});

$('.to-top').on('click', function () {
  
  $('html, body').animate(
    {
      scrollTop:header
  }, 800)
});