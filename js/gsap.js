
$(function(){
// gsap

gsap.registerPlugin(ScrollTrigger);

let scrollBox = document.querySelector('.scroll_box')
let height = scrollBox.offsetHeight;

gsap.to('.skill_left', {
scrollTrigger: {
   trigger: '.skill_left',
   start: 'top top',
   end: `+=${height} bottom ` ,
   pin: true,
   scrub: true,
   markers: false,

}
})


gsap.to('#projectStart .circle_box', {
   height: '100vh',
   scrollTrigger: {
      trigger: '#projectStart',
      start: `top top`,
      end:'bottom top',
      scrub: 1,
      pin: true,

      }
 })


let designPro = document.querySelector('.scroll_box')
let heightRight = designPro.offsetHeight;


gsap.to('.pin_content', {
color:'#E9EAEC',
scrollTrigger: {
   trigger: '.pin_content',
   start: 'top top',
   end: `+=${heightRight / 2 } top`,
   pin: true,
   scrub: true,
   markers: false,
}
})


 const main = gsap.timeline()
 let greetWrap = document.querySelector('#visual')
 let greetHeight = greetWrap.offsetHeight;

 main.to('.wrap_inner .txt_left', {
      xPercent: 400,
      color:'#E4B61A',
      textShadow : `6px 6px gray`,
      transition: 'all 1s'


      }, 'text')
      .to('.wrap_inner .txt_right', {
      xPercent: -400,
      color:'#E4B61A',
      textShadow : `6px 6px gray`,
      transition: 'all 1s'
         }, 'text')
      .to('.visual_pin .scroll', {
         display : 'none'
      },'text')
      // .to('.greeting_wrap .wave_path_text',  {
      //    attr: {startOffset: "30%"},
      // },'text')

   ScrollTrigger.create({
      animation: main,
      trigger: '.visual',
      start: `-1% top `,
      end: `+=${greetHeight / 6} top`,
      pin: true,
      scrub: true,
      markers: false,
   })


})//ready()
