
   //객체.메소드()
   //$('css 선택자')=> 제이쿼리 객체
   //$('selector').action();

   $('.top_banner_close').click(function() {
      $('.top_banner_wrap').hide();
   })

   $('.event_controls_wrap button').click(function() {
// alert()
   $(this).addClass('on')
   $('.event_controls_wrap button').not(this).removeClass('on')
})

   $('#gnb>li').mouseenter(function() {
      // $(this).children('.dep2').show()=> display:block;
      $(this).children('.dep2').css('display','flex')
   })

   $('#gnb>li').mouseleave(function(){
      $('#gnb .dep2').hide()
   })

   $(window).scroll(function(){
      // 페이지에 스크롤이 발생했을 때 => event
      // 스크롤의 맨 위의 위치값을 비교해서

      // class를 add와 remove를 적용
      // console.log($(window).scrollTop())

      // scrollTop() 값이 50이상이면, fixed라는 클래스를 적용
      if($(window).scrollTop()>=50) {
         $('header').addClass('fixed')
      }
      // scrollTop() 값이 50이하이면, fixed라는 클래스를 제거

      else {$('header').removeClass('fixed')}
   }
   )

   $('.familysite_wrap button').click(function() {
      // object.method()
      // ul이 show
      $('.familysite_wrap ul').toggle();
      $(this).toggleClass('on')
    })

   //dropdown 아이콘은 아래로 향하게
   //버튼한테 on이라는 클래스가 필요
   //버튼을 다시 클릭했을때 on 제거

   //=> show+hide =toggle
   //addClass+removeClass =toggleClass

   // $('.familysite_wrap button').click(function() {
   // $(this).addClass('on')
   // })

   const eventSwiper = new Swiper ('.event_slide', {
      autoplay: true,
      loop: true,
      direction: 'horizontal',
      navigation: {
         nextEl: '.next_evt',
         prevEl: '.prev_evt',
      },
      pagination: {
            el: '.event_controls_wrap',
            // type:'fraction',
            clickable: true,
            // bulletElement: 'button',
         },
   })

   const mainSwiper = new Swiper ('.main_visual_swiper', {
      loop: true,
      effect: 'fade',
      autoplay: {
         delay: 2000,
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

   })

$('.main_visual_swiper .auto-play').click(function (){
   $(this).hide();
   $('.main_visual_swiper .auto-stop').show();
   mainSwiper.autoplay.start();

})
$('.main_visual_swiper .auto-stop').click(function (){
   $(this).hide();
   $('.main_visual_swiper .auto-play').show();
   mainSwiper.autoplay.stop();
})

const listSwiper = new Swiper ('.pd_list_wrap .swiper', {
   autoplay: {
      delay: 2000,
   },
   slidesPerView: 3,
   spaceBetween: 10,
})