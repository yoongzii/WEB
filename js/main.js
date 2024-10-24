

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




document.addEventListener("DOMContentLoaded", function() {
   const images = document.querySelectorAll('.exhib_img .click_img');
   const modal = document.querySelector('#design_exhib .modal');
   const modalImg = document.querySelector('#design_exhib .modalImg');
   const closeBtn = document.querySelector('#design_exhib .modal .close');

   // const iframe =document.querySelector('#design_pro .frame_modal');
   // const iframeImg =document.querySelector('#design_pro .frame_modal img');
   // const frameClose = document.querySelector('#design_pro .frame_close');
   // const codingImgs = document.querySelectorAll('.li_wrap .img_box .coding_img');


   // $('.modal').on('click', function(){
   //    $(this).css('display' ,'block')
   // })

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

      // codingImgs.forEach(codingImgs => {
      //    codingImgs.on('click', function(){
      //       iframeImg.src = this.src
      //       iframe.style.dispaly = 'block'

      //       setTimeout(() => {
      //          iframeImg.style.bottom = '0';
      //    }, 10);
      //    })
      // })

      // frameClose.on('click', function(){
      //    iframe.style.dispaly = 'none'
      // })


});

