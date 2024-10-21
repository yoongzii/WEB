
   $('.header_inner #gnb .dep1>li').mouseover(function(){
      $('.dep2_wrap').show();
      $('header').addClass('on').css({'height':'700px'});
      // $('#gnb .dep1').css({'border-bottom' : '1px solid rgba(122, 173, 211, 0.8)'})
      // $('#gnb .dep2_wrap').css({'border-left' : '1px solid rgba(122, 173, 211, 0.8)'},{'margin-left': '25px'})
      })

   $('.header_inner #gnb .dep1>li').mouseout(function(){
      $('.dep2_wrap').hide();
      $('header').removeClass('on').css({'height':'auto'});
      $('#gnb .dep1').css({'border-bottom' : 'none'})
   })

   $(window).scroll(function() {
      if($(window).scrollTop() >= 10) {
         $('header').addClass('on')
      }
      else {
         $('header').removeClass('on')
      }
   });

   $('.util .btn_search_open').click(function() {
      $('.quick_search').toggle();
   })



   // $(window).scroll(function() {
   //    if($(window).scrollTop() >= 1) {
   //       $('iframe_wrap iframe').css('transform', 'scaleX(0)')
   //    }
   //    else {
   //       $('iframe_wrap iframe').css('transform', 'scaleX(1)')
   //    }
   // });

// main_visul
   var swiper = new Swiper(".mySwiper", {
      autoplay : {delay: 3000},
      loop: true,
      spaceBetween: 2,
      freeMode: true,
      watchSlidesProgress: true,
      navigation : {
         nextEl: '.swiper-button-right',
         prevEl: '.swiper-button-left',
      },
      pagination : {
         el: '.swiper-pagination',
         type: 'progressbar',
      },
      thumbs: {
         swiper: swiper,
      },
   });

   var swiper2 = new Swiper(".mySwiper2", {
      autoplay : {delay: 3000},
      loop: true,
      spaceBetween: 2,
      navigation: {
         nextEl: ".swiper-auto-controls .auto-right",
         prevEl: ".swiper-auto-controls .auto-left",
      },
      pagination : {
      el: '.swiper-pagination2',
      type: 'fraction',
      },

   });

   // let total = $('.mySwiper2 .swiper-slide img').length
   // $('.swiper-pagination2 .total').text(total)

   // let current = 1; //click, function(){} 안에 들어가야함
   // $('.swiper-pagination2 .current').text(current)

   // $('.auto-left .auto-leftimg').click(function(){
   //    current = (current <= 1) ? total : current - 1;
   //    $('.swiper-pagination2 .current').text(current)

   // })
   // $('.auto-left .auto-rightimg').click(function(){
   //    current = (current >= total) ? 1 : current + 1;
   //    $('.swiper-pagination2 .current').text(current)
   // })



   var textWrapper = document.querySelector('.ml2');
   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

   anime.timeline({loop: true})
      .add({
         targets: '.ml2 .letter',
         scale: [4,1],
         opacity: [0,1],
         translateZ: 0,
         easing: "easeOutExpo",
         duration: 950,
         delay: (el, i) => 70*i
      }).add({
         targets: '.ml2',
         opacity: 0,
         duration: 1000,
         easing: "easeOutExpo",
         delay: 1000
      })


   var textWrapper = document.querySelector('.ml3');
   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
   anime.timeline({loop: true})
   .add({
   targets: '.ml3 .letter',
   scale: [4,1],
   opacity: [0,1],
   translateZ: 0,
   easing: "easeOutExpo",
   duration: 950,
   delay: (el, i) => 70*i
   }).add({
   targets: '.ml3',
   opacity: 0,
   duration: 1000,
   easing: "easeOutExpo",
   delay: 1000
   })

   var textWrapper = document.querySelector('.ml4');
   textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
   anime.timeline({loop: true})
   .add({
      targets: '.ml4 .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 950,
      delay: (el, i) => 70*i
   }).add({
      targets: '.ml4',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
   });

   var swiper = new Swiper(".shopSwiper", {
   pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
   },
   slidesPerView: 3.5,
   spaceBetween: 30,

   });

   $(window).on('scroll mousemove', function(e){
      // 마우스 좌표값
      $('.cursor').css('left', e.pageX + 'px');
      $('.cursor').css('top', e.pageY + 'px');
   })
   $('.shopWrapper').hover(function(){
      $('.cursor').toggleClass('on');
   })


// about 슬라이드
$('.aboutList li').mouseenter(function(){
   let menu_li = $(this).index();
   if(menu_li < 4) {
      $('.aboutSlider').css({display:'none'}).eq($(this).index()).css({
         display:'none'
      })
   }
});

$('.aboutList li').mouseleave(function(){
   let menu_li = $(this).index();
   if(menu_li < 4) {
      $('.aboutSlider').eq($(this).index()).css({
         display:'none'
      })
   }
});

$('.aboutList li').mouseenter(function(){
   $('.aboutSlider').eq($(this).index()).css({
      display:'flex'
   })
});
$('.aboutList li').mouseleave(function(){
   $('.aboutSlider').eq($(this).index()).css({
      display:'flex'
   })
})

