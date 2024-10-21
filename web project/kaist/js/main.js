//문서가 다 로드 되면 실행 - 3가지 중 1가지 적용
// * main js 를 head 태그에서 연결한 경우 body요소가 생성 전이기에 js가 실행되지 않음
// * 아래의 3가지 방법 중 하나를 이용하기
//1. window.onload = function() {//js 실행문} => js
//2. $(document).ready(function() {//js 실행문}) => jQuery
//3 html head 안에 script 태그에 defer 속성 추가
//----------------------------------------------------
//window.onload = function() {} => 자바 문법
//$(document).evt(function() {}) => 자바 키워드 document/ '' 사용 X (객체 .매소드)


//popup
$('#popup').draggable();
//$('#popup').hide();문서완성 후 삭제

$('.btn_popup_close').click(function() {
   $('#popup').hide();
})

/*
header language
=> $('.lang_wrap ul').css('display', 'flex');
=>.css('display', 'flex') 여러가지 속성값을 넣을때에는 .css({'display': 'flex'})로 작성한다 {'':''} 사용
=> ex) {'display' : 'flex','display' : 'flex', 'display' : 'flex' } (줄바꿈하기)
*/

// header language
$('.lang_wrap button').click(function() {
/*
   $('.lang_wrap ul').css({
      'display' : 'flex',
      'opacity' : '1'
   });
   $('.lang_wrap button i').css({
      'transform' : 'rotate(180deg)'
   })
   */
   $('.lang_wrap button, .lang_wrap ul').toggleClass('open');
   //'.lang_wrap button' = this (중복일땐 this 사용X)
   /*
   $('.lang_wrap button').toggleClass('open');
   $('.lang_wrap ul').toggleClass('open');
   => 중복으로 주는 경우에는
   => $('태그명 .태그명').toggleClass('open'); 표현
   => $('.lang_wrap button, .lang_wrap ul').toggleClass('open'); 로 표현 가능 */
})

/* 전체 메뉴 */
$('.btn_allmenu_open').click(function() {
   $('.allmenu_popup').css({'display' : 'flex'});
   $('html, body').css({'overflow' : 'hidden'});
   $('header .search_popup').hide();
})

$('.btn_allmenu_close').click(function() {
   $('.allmenu_popup').hide();
   $('html, body').css({'overflow' : 'auto'});
   $('header').removeClass('on');
})

/* header style 추가 */
$('header .btn_search_open').click(function() {
   //헤더에 on 클래스 추가+제거 필요
   $('header').toggleClass('on');
   //.search_popup을 보였다 안보였다
   $('header .search_popup').toggle();
})

/* 문서 전체의 스크롤 위치값(초기값은 0)이 10이상이 되면,
   1. 헤더의 스타일을 on클래스 추가
   2. 다시 0이 되면 on클래스 제거

   => 조건문 필요
   ** 여러 상황에서 서로 다른 행동을 하려면 조건문 if 사용

   상황 --------------------
   a. 스크롤 위치값이 10 이하인 경우
   b. 스크롤 위치값이 10 보다 큰 경우

   조건이 2개라면 1개면 된다. (a 아니면 b 라서)
   if($(window).scrollTop() >= 10) {
         $('header').addClass('on')
      }
      else {
         $('header').removeClass('on')
      }
 */

//스크롤의 위치값은 console.log($(window).scrollTop()); 으로 찾기

$(window).scroll(function(){ //스크롤이 될 때마다
   if($(window).scrollTop() >= 10) {
      $('header').addClass('on')
   }
   else {
      $('header').removeClass('on')
   }
});

/* mouseover/mouseout -> show/hide
-> hover() <= jQuery 이벤트메소드
-> .click(function() {}), .mouseover(function() {} ) 사용되는데,
*** mouseover(function() {}) + mouseout(function() {}) 으로 function이 2번 작용
= .hover(function() {}, function() {} )
-> display:flex; -> display:block;으로 만들어줌

//#gnb dep1의 직접자손 li에게 마우스가 오버 되었을때
//#gnb의 dep2를 보이게함
$('#gnb .dep1>li').mouseover(function() {
   $('#gnb .dep2').show();
})
$('#gnb .dep1>li').mouseout(function() {
   $('#gnb .dep2').hide();
})


// $('#gnb .dep2').hide(2000, callback); -> 2000 = 2초
// method(parameter, parameter, parameter, ....) 요소가 여러개일때 , 표시
// hover() <= jQuery 이벤트메소드

*/

$('#gnb .dep1>li').hover(function() {
   //over
   //#gnb .dep1>li =this 의 자손 dep2
   // $(this).children('.dep2_wrap').stop().slideDown();
   $(this).children('.dep2_wrap').stop().show();
   $('header').addClass('on');
},function() {
   //out
   $('#gnb .dep2_wrap').stop().slideUp(300);
   $('header').removeClass('on');
})

/*footer
1.family_wrap>button 버튼을 클릭하면 (클릭=>이벤트 요소)
2.패밀리 리스트(.family_wrap>ul)가 보였다 안보였다 (toggle) / 500=5s
3.위쪽으로 늘었다가 줄어들었다 - 애니메이션 animate()
4.보이는 상황(true)/ 안보이는 상황(false)
   -> (조건문) true 이면 false , fasle면 true
   -> if() {}
   -> if(s == false) {s = true;} : s는 false와 같다면 true로 출력된다.
      :(s가 false와 동일한지 물어보는 내용)
   -> else {s = false;} 그 밖에 행동을 했을때에~
      :(s가 true와 동일한지 물어보는 내용)

** == (동일하다)
** let s = 20; => 20이라는 숫자를 s라는 상자에 넣어둬라는 의미
   -> s = (s + 1); (s + 1) 값을 s 상자에 넣어라

**css({prop : val, prop : val})
*/

let s = false;
$('.family_wrap>button').click(function() {
/*    // $('.family_wrap>ul').toggle(500)
   if(s == false) {
      $('.family_wrap>ul').animate({'height': '11.5em'});
      //$('.family_wrap>ul').show()
      s = true;
   }
   else {
      $('.family_wrap>ul').animate({'height': '0'});
      //$('.family_wrap>ul').hide()
      s = false;
   }
   console.log(s)
   */

   $('.family_wrap>ul').slideToggle('slow')
   //$('.family_wrap>ul').toggle('slow')
   console.log(s);

})
/* $('.family_wrap>button').click(function() {
   $('.family_wrap>ul').toggle(500)
})
  */

// $('.family_wrap>ul').slideToggle()
// console.log();

const mainSwiper = new Swiper('.main_swiper', {
   autoplay: true,
   loop: true,
   direction: 'horizontal',
   navigation:{
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
   },
   autoplay: {
      delay: 3000,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   }
})

$('.main_visual .swiper-auto-controls .auto-play').click(function() {
   $(this).hide();
   $('.main_visual .swiper-auto-controls .auto-stop').show();
   mainSwiper.autoplay.start();
})

$('.main_visual .swiper-auto-controls .auto-stop').click(function() {
   $(this).hide();
   $('.main_visual .swiper-auto-controls .auto-play').show();
   mainSwiper.autoplay.stop();
})

//faculty
const facultySwiper = new Swiper('.faculty_swiper',{
   autoplay: {
      delay: 0,
   },
   slidesPerView: 'auto',
   spaceBetween: 40,
   speed: 4000,
   loop: true,
})

//news
/*
1. tabs의 li를 클릭했을때, active 클래스값을 가진 요소
2. 해당 li의 속성(attribute) 중 'data-news'(-> data-news="announce")  속성의 값을 가지고 와야함(get)
3. content_box 중 가져온 'data-news' 속성의 값과 동일한 값을 가진 요소를 찾아야함
4. 동일한 값을 가진 요소를 찾은 그 박스를 보여주고, 나머지 박스는 안보임
*/
$('.news_wrap .tabs li').click(function() {
   $('.news_wrap .tabs li').not(this).removeClass('active');
   $(this).addClass('active');

   /* 1)
   - index -> li 순서 : 인덱스는 0부터 시작
   - window.alert(i); 경고창 0 ~ 4까지 나옴 첫째 0번
   - console.log(i);
   ---------
   - eq(): 몇째인지 표시
   */

   /* 1) index를 활용 (우선 활용)
   const i  = $(this).index();
   $('.news_wrap .content_box').hide();
   $('.news_wrap .content_box').eq(i).show();
   */

   // 2) data-news 속성을 이용
   //$(this).attr('data-news') 이벤트 발생한 요소의 'data-news'속성을 가져온 것
   const tabName  = $(this).attr('data-news');
   console.log(tabName)

   // 3) 변수 tabName의 값을  Ccontent_box의 클래스로 찾기(index가 동일하지 않은 경우 사용)
   //$('.news_wrap .content_box').not('.' + tabName).hide();
   //$('.news_wrap .' + tabName).show()


   // 4) content_box의 data-news 속성을 이용
   // ->  3. content_box 중 가져온 'data-news' 속성의 값과  변수tabName의 값이 동일한 요소를 찾아야함
      $('.news_wrap .content_box').hide();
      $('.news_wrap .content_box').filter('[data-news = ' + tabName + ']').show();

})

//sample
//변수는 '' 안에 작성하지 못하고 , . 클래스는 '' 안에 작성 해야함

/*const samp = $('.btn_news_more');
$('.btn_news_more').css({'background' : 'red'})

const samp = 'btn_news_more';
$('.news_wrap .' + samp).css({'background' : 'red'});*/

// 원래는 DB(데이터 베이스)에서 게시글이 있는지 확인 => 개발자 영역
// ul에 li자손의 존재여부 확인

/* sub- location -button */
//$(this).next(). ->.sub .lnb_wrap button의 바로 동생 .sub .lnb_wrap ul이 next()


$('.sub .lnb_wrap button').click(function() {
   // $('.sub .lnb_wrap ul').hide
   // $(this).next().toggle()
   // $('.sub .lnb_wrap ul').not($(this).next()).hide()
   /* not($(this).next()) => $(this)은 $('.sub .lnb_wrap button')을 클릭(click)한 이벤트이고,
   이벤트 중 $('.sub .lnb_wrap ul')동생을 제외하고 나머지를 숨겨라
   (왜냐하면 ul은 여러개라서)
   */
   // isShow = (isShow == false) ? true : false;
   // alert(isShow)

let a =  $(this).next().css('display')
console.log(a);

  //if(uldml display : none) ->

  /*if(a == 'none'){
      $(this).next().css({'display': 'flex'});
      $('.sub .lnb_wrap ul').not($(this).next()).hide()
   }
   else {
      //$(this).next().css({'display': 'none'});
      $('.sub .lnb_wrap ul').hide()
   }*/

/* 클릭한 버튼의 동생ul 의 display 속성이 : none 과 같다면,
let a =  $(this).next().css('display') display  속성을 (get)가지고 오라는 뜻
$(this).next().css({'display': 'flex'}); 'display': 'flex'(셋)셋팅하라는 뜻*/

})


$('.sub .lnb_wrap button').click(function() {
   let nextEl = $(this).next()

   if(nextEl.css('display') == 'none') {
      nextEl.css('display', 'flex')
      $('.sub .lnb_wrap ul').not(nextEl).css('display', 'none')
   // $(this).children('i').css({'transform' : 'rotate(180deg)'})
     // $(this).children('i').css('color', 'red')
   } else {
      $('.sub .lnb_wrap ul').css('display', 'none')
   }
 })

 /* .sub .lnb_wrap button의 동생 nextEl 의display 가 none라면 ('display', 'flex')로 보여지면서,
 클릭한 button 동생을 제외한 ul은 보이지 말아야한다.( 동생은 보이기)
 그 밖에 클릭한 동생이 보였을때는 보이지 말아야한다.
 */
