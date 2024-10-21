

$(function(){
   $(window).scroll(function(){
      if($(window).scrollTop() >= 10){
         $('header').addClass('scroll')
      }
      else{
         $('header').removeClass('scroll')
      }
   })

   $('.util button').click(function(){
      $('.util ul').toggle()
   })

$(window).on('scroll', function(){
   const scrollTop = $(this).scrollTop()
   if(scrollTop >1080){
      $('.util ul').hide()
      $('.util button, .util a, .nav a').css('color','#E9EAEC')
   }
   else if (scrollTop < 1080){
      $('.util ul').show()
      // $('.util button, .util a, .nav a').css('color','#2A2E34')
      $('.util button, .util a, .nav a').css('color','#E9EAEC')
   }
})

$('.modal').on('click', function(){
   $(this).css('display' ,'block')
})





}) //ready()

document.addEventListener("DOMContentLoaded", function() {
   const images = document.querySelectorAll('.exhib_img .click_img');
   const modal = document.querySelector('.modal');
   const modalImg = document.querySelector('.modalImg');
   const closeBtn = document.querySelector('.modal .close');

   images.forEach(image => {
       image.addEventListener('click', function() {
           modalImg.src = this.src; 
           modal.style.display = 'block';
           setTimeout(() => {
               modal.style.bottom = '0'; 
           }, 10);
       });
   });

   closeBtn.addEventListener('click', function() {
       modal.style.bottom = '-100%'; 
       setTimeout(() => {
           modal.style.display = 'none'; 
       }, 500); 
   });

   
   modal.addEventListener('click', function(event) {
       if (event.target === modal) {
           closeBtn.click();
       }
   });
});