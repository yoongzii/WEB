

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
      $('.util button, .util a, .nav a').css('color','#2A2E34')
   }
})



}) //ready()

