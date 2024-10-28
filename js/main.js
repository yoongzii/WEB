

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


$(window).on('mousemove',function(e){
   const x = e.clientX
   const y = e.clientY
   $('.cursor').css({left: x , top: y})

   $('button, a, .img_box img, .exhib_img img').on('mouseover',function(){
      $('.cursor').css({width: '80px', height:'80px',color : 'purple',background: "rgba(228,182,26,0.6)"}).text("Click")
      $(this).on('mouseleave', function(e){
      $('.cursor').css({width: '12px', height:'12px', background: "rgba(228,182,26,1)"}).text("")
      })
   })
})




}) //ready()


$(document).ready(function() {
   $('.img_wrap ul li').hide();
   $('.img_wrap ul li:first').show();

   $('.exhib_btns button').on('click', function() {
      let index = $(this).parent().index();
      $('.img_wrap ul li').hide();
      $('.img_wrap ul li').eq(index).show();
   });
});



document.addEventListener("DOMContentLoaded", function() {
   const images = document.querySelectorAll('.img_wrap li .click_img');
   const modal = document.querySelector('#design_exhib .modal');
   const modalImg = document.querySelector('#design_exhib .modalImg');
   const closeBtn = document.querySelector('#design_exhib .modal .close');

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



// const codingImgs = document.querySelectorAll('.li_wrap .img_box img');
const codingAs = document.querySelectorAll('.li_wrap .img_box a');
const iframeSrc = document.querySelector('.frameBox iframe');
const frameBox = document.querySelector('.frameBox');
const frameClose = document.querySelector('.frame_close button');


codingAs.forEach(codingA => {
   codingA.addEventListener('click', function(){
      iframeSrc.src = codingA.href;
      frameBox.style.display = 'flex';
   })
})

frameClose.addEventListener('click', function(){
   frameBox.style.display = 'none';
})

});

