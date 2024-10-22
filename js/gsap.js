
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


 const mainVisual = document.querySelector('#main_visual')
 let mainHeight= mainVisual.offsetHeight;
 const main = gsap.timeline()

 main.to('.title_under h2', {
      x: -100,
      y: 500,
      fontSize: '8rem',
      zIndex: 1,
      }, 'text')
     .to('.scroll', {
     opacity:0
         }, 'text')

   ScrollTrigger.create({
      animation: main,
      trigger: '.title_under',
      start: `top top `,
      end: `30% top`,
      pin: true,
      scrub: true,
      markers: false,
   })
})//ready()
