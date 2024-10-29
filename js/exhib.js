
$(window).on('scroll', function(){
   const scrollTop = $(this).scrollTop()
   if(scrollTop > 200){
      $('.util ul').hide()
      $('.util button, .util a, .nav a').css('color','#E9EAEC')
   }
   else if (scrollTop < 200){
      $('.util ul').show()

      $('.util button, .util a, .nav a').css('color','#E9EAEC')
   }
   })

$('.buttons_Wrap ul').hide();
$('.buttons_Wrap ul:first').show();

$('.buttons button').on('click', function() {
   let index = $(this).parent().index();
   $('.buttons_Wrap ul').hide();
   $('.buttons_Wrap ul').eq(index).show();
});


// gsap
gsap.registerPlugin(ScrollTrigger);
const buttonsWrap = document.querySelector('.buttons_Wrap')
const WrapH = buttonsWrap.offsetHeight;


gsap.to('#exhib_more', {
   scrollTrigger: {
      trigger: '#exhib_more',
      start: 'top top',
      // end: `+=${WrapH} top`,
      end: `top top`,
      pin: true,
      scrub: true,
      markers: true,
   }
})

