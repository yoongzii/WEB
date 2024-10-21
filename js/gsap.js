
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
   width: 1920,
   height: '100vh',
   scrollTrigger: {
      trigger: '#projectStart',
      start: 'top top',
      end:'bottom top',
      scrub: 1,
      pin: true,
      }
 })


let designPro = document.querySelector('.scroll_box')
let heightRight = designPro.offsetHeight;
console.log(heightRight)

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


 const h2 = document.querySelector('.main_wrap h2')
 const main = gsap.timeline()

 main.to('.main_wrap h2', {
      x: -600,
      y: 200,
      fontSize: '8rem',
      // opacity : 0.6
      zIndex: 1
      }, 'text')

      .to('.main_wrap .main_video',{
         width: 1920,
         height: '100vh',
         borderRadius: 0,
         y: -400,
         zIndex:-1
      }, 'text')

   .to('.main_wrap .title_top',{
         // color: '#E9EAEC',
         // borderColor:'#E9EAEC',
         // borderBottom : '0px',
         // opacity : 0.6,
         // y: -10
      }, 'text')

   ScrollTrigger.create({
      animation: main,
      trigger: '.main_wrap',
      start: `top top `,
      end: `100% top`,
      pin: true,
      scrub: true,
      markers: true,
   })
})//ready()
