
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
if(scrollTop > 1080){
   $('.util ul').hide()
   $('.util button, .util a, .nav a').css('color','#E9EAEC')
}
else if (scrollTop < 1080){
   $('.util ul').show()
   $('.util button, .util a, .nav a').css('color','#E9EAEC')
}
})


$(window).on('mousemove',function(e){
const x = e.clientX
const y = e.clientY
$('.cursor').css({left: x , top: y})

})//mousemove

$('button, a, .img_box img, .img_wrap img, .click_img').on('mouseover',function(){
   $('.cursor').css({width: '80px', height:'80px',color : 'purple', background: "rgba(228,182,26,0.6)"}).text("Click")
   $(this).on('mouseleave', function(e){
   $('.cursor').css({width: '12px', height:'12px', background: "rgba(228,182,26,1)"}).text("")
   })
})

//exhib_ container
const items = $('.container_wrap .container');
const openBox = $('.container_wrap .moreBox .openBox');
const total = $('.container_wrap .container .item').length;
let height = 450;

$('.container_wrap .moreBox').on('click',function(e){
   e.preventDefault();
   if(openBox.text() === '더보기'){
      height += 450;
      items.css('height', height)
   }
      else if(openBox.text() === '더보기'){
         openBox.text('접기')
   } else{
      openBox.text('더보기')}

})

i = 0
const showitem = $('.container_wrap .container .item').slice(0, 4).length
// $('.container_wrap .moreBox .total').text( `( ${showitem} / ${total} )`)

for(i = 0; i <= total; i ++) {
   $('.container_wrap .moreBox .total').text( `( ${i} / ${i} )`)
}



// exhib_btn
// $('.img_wrap ul li').hide();
// $('.img_wrap ul li:first').show();

// $('.exhib_btns button').on('click', function() {
//    let index = $(this).parent().index();
//    $('.img_wrap ul li').hide();
//    $('.img_wrap ul li').eq(index).show();
// });

// const images = document.querySelectorAll('.exhib_zip .container_wrap .img_zip .click_img');
// const modal = document.querySelector('#design_exhib .modal');
// const modalImg = document.querySelector('#design_exhib .modalImg');
// const closeBtn = document.querySelector('#design_exhib .modal .close');

// images.forEach(image => {
//    image.addEventListener('click', function() {
//       modalImg.src = this.src;
//       modal.style.display = 'block';
//       setTimeout(() => {
//             modal.style.bottom = '0';
//       }, 10);
//    });
//    });

//    closeBtn.addEventListener('click', function() {
//       modal.style.bottom = '-100%';
//       setTimeout(() => {
//          modal.style.display = 'none';
//       }, 500);
//    });


//    modal.addEventListener('click', function(event) {
//       if (event.target === modal) {
//          closeBtn.click();
//       }
//    });



