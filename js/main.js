
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
const total = $('.container .item').length;

let count = 1;
let current = 4
let height = 450;
let showTotal = '더보기';
let state = true



$('.moreBox .total').text(total)
$('.moreBox  .show').text(current)

$('.container_wrap .moreBox').on('click',function(e){
   e.preventDefault();

   if(state) {
      if(total / 4 > count) {
         count++
         height += 450
         $('.container').css('height', height)
         current = total - (total - (count * 4))

         if(current >= total) {
            current = current - (current - total)
            showTotal = '닫기'
            state = false
         }
      } else {
         count = count
      }
   } else {
      $('.container').css('height', 450)
      current = 4
      showTotal = '더보기'
      state = true;
      count = 1
      height = 450
   }
   $('.moreBox  .show').text(current)
   $('.moreBox .openBox').text(showTotal)
})


// init Isotope
var $grid = $('.design_scroll ul').isotope({
 });
 $('.filter-button-group').on( 'click', 'button', function() {
   let filterValue = $(this).attr('data-filter');
   $grid.isotope({ filter: filterValue });
 });



 //modal-----
//  const btnShow = $('.item .img_subText button')
//  const imgShow = $('.item .img_zip img')

//  console.log(imgShow)

//  imgShow.on('click',function(e){
//    e.preventDefault();

//     if ($(this).src = $('.modal .modalImg').src){

//       $('modal').css({'display' : 'flex', 'bottom': '0%'})
//     }

//  })


// const subTexts = document.querySelectorAll('.item .img_subText');
// // const images = document.querySelectorAll('.item .img_subText');
// const images = document.querySelectorAll('.item .img_zip .click_img');
// const modal = document.querySelector('#design_exhib .modal');
// const modalImg = document.querySelector('#design_exhib .modalImg');
// const closeBtn = document.querySelector('#design_exhib .modal .close');

// images.forEach((image, index) => {
//    image.addEventListener('click', function() {
//       modalImg.src = this.src;
//       modal.style.display = 'block';
//       setTimeout(() => {
//             modal.style.bottom = '0';
//       }, 10);

//    });

//    subTexts[index].addEventListener('click',function(){
//       modalImg.src= image.scr;
//       modal.style.display = 'block';
//       setTimeout(() => {
//             modal.style.bottom = '0';
//       }, 10);

//    });
//    })

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


   $('.item').on('click', function() {
      const imgSrc = $(this).find('.img_zip img').attr('src');
      const subtextStrong = $(this).find('.modal_subText strong').text();
      const subtextP = $(this).find('.modal_subText p').text();
      const subtextSpan = $(this).find('.modal_subText span').text();
      // const subtextSpan = $(this).find('.modalSpan').text();

       $('.modalImg').attr('src', imgSrc);
       $('.modal_explain .explain_title strong').text(subtextStrong);
       $('.modal_explain .explain_title p').text(subtextP);
       $('.modal_explain span').text(subtextSpan);

       $('.modal').css('display', 'block');
   });

   $('.close').on('click', function() {
       $('.modal').css('display', 'none');
   });
